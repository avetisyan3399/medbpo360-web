import { Resend } from "resend";
import { NextResponse } from "next/server";
import { rateLimit, clientIp } from "@/lib/rate-limit";
import { createDemoToken } from "@/lib/demo-token";

let resendClient: Resend | null | undefined;

function getResend(): Resend | null {
  if (resendClient === undefined) {
    const key = process.env.RESEND_API_KEY;
    resendClient = key ? new Resend(key) : null;
  }
  return resendClient;
}

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Plus-addressing: the same info@ inbox, but filterable into its own label
// without creating a second mailbox.
const NOTIFY_TO = "info+demo@medbpo360.com";

const DEMOS: Record<string, { label: string; path: string }> = {
  harborview: { label: "Harborview Cardiology (Clinical Trust)", path: "/demo/harborview" },
  willowcreek: { label: "Willow Creek Family Medicine (Warm & Approachable)", path: "/demo/willowcreek" },
};

const MIN_FILL_MS = 2_000;

export async function POST(request: Request) {
  const ip = clientIp(request);

  const burst = rateLimit(`demo:burst:${ip}`, { limit: 5, windowMs: 10 * 60_000 });
  if (!burst.ok) {
    return NextResponse.json(
      { error: "Too many requests from this connection. Email info@medbpo360.com and we'll send you the link." },
      { status: 429, headers: { "Retry-After": String(burst.retryAfterSeconds) } },
    );
  }

  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid request." }, { status: 400 });

  const demoKey = String(body.demo ?? "");
  const demo = DEMOS[demoKey];
  if (!demo) return NextResponse.json({ error: "Unknown demo." }, { status: 404 });

  // Bots fill every input. Pretend it worked — a distinctive failure would
  // only tell them what to avoid — but skip sending anything real.
  if (typeof body.subject_ref === "string" && body.subject_ref.trim() !== "") {
    console.warn("Demo request: honeypot tripped", { ip });
    return NextResponse.json({ sent: true });
  }

  const startedAt = Number(body.startedAt);
  if (Number.isFinite(startedAt) && Date.now() - startedAt < MIN_FILL_MS) {
    console.warn("Demo request: submitted too fast", { ip });
    return NextResponse.json({ sent: true });
  }

  const email = String(body.email ?? "").trim();
  if (!/^[^\s@<>"'&]+@[^\s@<>"'&]+\.[a-zA-Z]{2,}$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const emailRateLimit = rateLimit(`demo:email:${email.toLowerCase()}`, { limit: 3, windowMs: 60 * 60_000 });
  if (!emailRateLimit.ok) {
    return NextResponse.json(
      { error: "Already sent a link to this address recently — check your inbox (and spam folder)." },
      { status: 429, headers: { "Retry-After": String(emailRateLimit.retryAfterSeconds) } },
    );
  }

  const token = createDemoToken(email, demoKey);
  const origin = new URL(request.url).origin;
  const verifyUrl = `${origin}/api/demo-verify?token=${encodeURIComponent(token)}`;

  const resend = getResend();
  if (!resend) {
    // No email provider configured — nothing we can do but say so honestly
    // rather than claim a link was sent.
    console.error("Demo request: RESEND_API_KEY not set, cannot send verification email");
    return NextResponse.json(
      { error: "Email delivery isn't configured yet. Email info@medbpo360.com and we'll send you the link." },
      { status: 503 },
    );
  }

  const { error: sendError } = await resend.emails.send({
    from: "medbpo360 <noreply@medbpo360.com>",
    to: email,
    subject: `Your link to the ${demo.label} demo`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto;">
        <h2 style="color: #0f2b46;">See the full demo</h2>
        <p style="font-size: 15px; color: #3a3a3f; line-height: 1.6;">
          Click below to view the ${escapeHtml(demo.label)} sample site. This link works once and expires in 30 minutes.
        </p>
        <p style="margin: 28px 0;">
          <a href="${verifyUrl}" style="background:#0f2b46; color:#fff; padding:13px 26px; border-radius:8px; text-decoration:none; font-weight:bold;">
            View the Demo
          </a>
        </p>
        <p style="font-size: 12.5px; color: #86868b;">
          Didn't request this? You can ignore this email.
        </p>
      </div>
    `,
  });

  if (sendError) {
    console.error("Demo request: Resend error sending verification email", sendError);
    return NextResponse.json(
      { error: "Couldn't send the email. Email info@medbpo360.com and we'll send you the link." },
      { status: 502 },
    );
  }

  // Notify the team a demo was requested — separate, best-effort, never
  // blocks the visitor's own email from being the thing that decides success.
  resend.emails
    .send({
      from: "medbpo360 Website <noreply@medbpo360.com>",
      to: NOTIFY_TO,
      replyTo: email,
      subject: `[Demo] ${demo.label} — ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f2b46; border-bottom: 2px solid #0f2b46; padding-bottom: 8px;">
            Demo link requested
          </h2>
          <p style="font-size: 15px;"><strong>Demo:</strong> ${escapeHtml(demo.label)}</p>
          <p style="font-size: 15px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="margin-top: 24px; font-size: 12px; color: #86868b;">
            A verification link was sent to this address. This notification fires whether or not they end up clicking it.
          </p>
        </div>
      `,
    })
    .catch((err) => console.error("Demo request: internal notification failed", err));

  return NextResponse.json({ sent: true });
}
