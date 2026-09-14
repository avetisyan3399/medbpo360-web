import { Resend } from "resend";
import { NextResponse } from "next/server";
import { rateLimit, clientIp } from "@/lib/rate-limit";

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

  const demo = String(body.demo ?? "");
  if (!demo) return NextResponse.json({ error: "Unknown demo." }, { status: 404 });

  // Bots fill every input. Unlock anyway — it isn't secret, and a distinctive
  // failure would only tell them what to avoid — but skip the notification so
  // the inbox stays clean.
  if (typeof body.subject_ref === "string" && body.subject_ref.trim() !== "") {
    console.warn("Demo request: honeypot tripped", { ip });
    return NextResponse.json({ unlocked: true });
  }

  const startedAt = Number(body.startedAt);
  if (Number.isFinite(startedAt) && Date.now() - startedAt < MIN_FILL_MS) {
    console.warn("Demo request: submitted too fast", { ip });
    return NextResponse.json({ unlocked: true });
  }

  const email = String(body.email ?? "").trim();
  if (!/^[^\s@<>"'&]+@[^\s@<>"'&]+\.[a-zA-Z]{2,}$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const resend = getResend();
  if (resend) {
    const { error } = await resend.emails.send({
      from: "medbpo360 Website <noreply@medbpo360.com>",
      to: NOTIFY_TO,
      replyTo: email,
      subject: `[Demo] ${demo} — ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f2b46; border-bottom: 2px solid #0f2b46; padding-bottom: 8px;">
            Demo site unlocked
          </h2>
          <p style="font-size: 15px;"><strong>Demo:</strong> ${escapeHtml(demo)}</p>
          <p style="font-size: 15px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="margin-top: 24px; font-size: 12px; color: #86868b;">
            Submitted via medbpo360.com/demo/${escapeHtml(demo)}
          </p>
        </div>
      `,
    });
    // A failed notification must not cost the visitor the demo they asked
    // for — log it and unlock anyway.
    if (error) console.error("Demo request: Resend error", error);
  }

  return NextResponse.json({ unlocked: true });
}
