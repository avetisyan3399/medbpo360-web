import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, organization, orgType, providerCount, phone, email, service, message } = body;

  if (!name || !organization || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
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
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #515154;">Organization</td>
            <td style="padding: 8px 0;">${organization}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #515154;">Organization Type</td>
            <td style="padding: 8px 0;">${orgType || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #515154;">Provider Count</td>
            <td style="padding: 8px 0;">${providerCount || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #515154;">Phone</td>
            <td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #515154;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #515154;">Service Interest</td>
            <td style="padding: 8px 0;">${service || "—"}</td>
          </tr>
        </table>

        ${message ? `
        <div style="margin-top: 20px; padding: 16px; background: #f5f5f7; border-radius: 8px; border-left: 3px solid #0f2b46;">
          <p style="font-weight: bold; color: #515154; margin: 0 0 8px;">Message:</p>
          <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
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
