import { Resend } from "resend";
import { NextResponse } from "next/server";
import { rateLimit, clientIp } from "@/lib/rate-limit";

// Built on first use rather than at module load: constructing this with no key
// throws, which would take down the whole route — including the cheap rejections
// above it — instead of failing one request with something the visitor can act on.
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

// Phone numbers reach an href, so escaping is not enough — reduce the value to
// the characters a tel: URI may contain and drop it entirely if nothing is left.
function telHref(value: unknown): string | null {
  const cleaned = String(value ?? "").replace(/[^0-9+#*,;]/g, "");
  const digits = cleaned.replace(/[^0-9]/g, "");
  if (digits.length < 7 || digits.length > 15) return null;
  return `tel:${cleaned}`;
}

function mailtoHref(value: unknown): string | null {
  const address = String(value ?? "").trim();
  if (!/^[^\s@<>"'&]+@[^\s@<>"'&]+\.[^\s@<>"'&]+$/.test(address)) return null;
  return `mailto:${address}`;
}

function linkOrText(href: string | null, label: unknown): string {
  const text = escapeHtml(label);
  return href ? `<a href="${escapeHtml(href)}">${text}</a>` : text;
}

// The form validates these too, but that check only protects honest users —
// anything can POST here directly, so the rules are enforced again server-side.
function validate(phone: unknown, email: unknown): string | null {
  const digits = String(phone ?? "").replace(/\D/g, "");
  const normalized = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  if (normalized.length !== 10) return "Enter a 10-digit US phone number.";
  if (normalized[0] === "0" || normalized[0] === "1") return "US area codes can't start with 0 or 1.";

  const address = String(email ?? "").trim();
  if (!/^[^\s@<>"'&]+@[^\s@<>"'&]+\.[a-zA-Z]{2,}$/.test(address)) {
    return "Enter a valid email address.";
  }
  return null;
}

// Bots that fill every input trip the hidden field; humans never see it.
// Answer them with a normal success so they have no signal to adapt to.
const SILENT_OK = NextResponse.json({ success: true });

// Nobody reads this form and completes it in under three seconds.
const MIN_FILL_MS = 3_000;

export async function POST(request: Request) {
  const ip = clientIp(request);

  const burst = rateLimit(`contact:burst:${ip}`, { limit: 3, windowMs: 10 * 60_000 });
  if (!burst.ok) {
    return NextResponse.json(
      { error: "You've sent several messages already. Please wait a few minutes, or email us directly at info@medbpo360.com." },
      { status: 429, headers: { "Retry-After": String(burst.retryAfterSeconds) } },
    );
  }

  const sustained = rateLimit(`contact:hourly:${ip}`, { limit: 10, windowMs: 60 * 60_000 });
  if (!sustained.ok) {
    return NextResponse.json(
      { error: "Too many messages from this connection today. Please email us directly at info@medbpo360.com." },
      { status: 429, headers: { "Retry-After": String(sustained.retryAfterSeconds) } },
    );
  }

  const body = await request.json();
  const { name, organization, orgType, providerCount, phone, email, service, message } = body;

  if (typeof body.subject_ref === "string" && body.subject_ref.trim() !== "") {
    console.warn("Contact form: honeypot tripped", { ip });
    return SILENT_OK;
  }

  const startedAt = Number(body.startedAt);
  if (Number.isFinite(startedAt) && Date.now() - startedAt < MIN_FILL_MS) {
    console.warn("Contact form: submitted too fast", { ip });
    return SILENT_OK;
  }

  if (!name || !organization || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const invalid = validate(phone, email);
  if (invalid) {
    return NextResponse.json({ error: invalid }, { status: 400 });
  }

  const resend = getResend();
  if (!resend) {
    // Log enough to chase the lead by hand; the visitor must not just hit a wall.
    console.error(
      "Contact form: RESEND_API_KEY is not set — inquiry NOT delivered. Follow up manually.",
      { organization, email, phone },
    );
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please email us directly at info@medbpo360.com." },
      { status: 503 },
    );
  }

  const { error } = await resend.emails.send({
    from: "medbpo360 Website <noreply@medbpo360.com>",
    to: "info@medbpo360.com",
    replyTo: email,
    subject: `New Contact: ${organization} — ${orgType || "Unknown Org Type"}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0f2b46; border-bottom: 2px solid #0f2b46; padding-bottom: 8px;">
          New Website Inquiry
        </h2>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 160px; color: #515154;">Name</td>
            <td style="padding: 8px 0;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #515154;">Organization</td>
            <td style="padding: 8px 0;">${escapeHtml(organization)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #515154;">Organization Type</td>
            <td style="padding: 8px 0;">${orgType ? escapeHtml(orgType) : "—"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #515154;">Provider Count</td>
            <td style="padding: 8px 0;">${providerCount ? escapeHtml(providerCount) : "—"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #515154;">Phone</td>
            <td style="padding: 8px 0;">${linkOrText(telHref(phone), phone)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #515154;">Email</td>
            <td style="padding: 8px 0;">${linkOrText(mailtoHref(email), email)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #515154;">Service Interest</td>
            <td style="padding: 8px 0;">${service ? escapeHtml(service) : "—"}</td>
          </tr>
        </table>

        ${message ? `
        <div style="margin-top: 20px; padding: 16px; background: #f5f5f7; border-radius: 8px; border-left: 3px solid #0f2b46;">
          <p style="font-weight: bold; color: #515154; margin: 0 0 8px;">Message:</p>
          <p style="margin: 0; line-height: 1.6;">${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        </div>
        ` : ""}

        <p style="margin-top: 24px; font-size: 12px; color: #86868b;">
          Submitted via medbpo360.com/contact
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
