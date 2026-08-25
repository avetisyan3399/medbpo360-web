import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Your message has reached the medbpo360 team. Here's what happens next.",
  // Reached only by submitting the contact form — it has no value as a search
  // result, and indexing it would let people land here having sent nothing.
  robots: { index: false, follow: false },
};

const nextSteps = [
  {
    title: "We read it, not a bot",
    body: "Your message goes straight to our team inbox. Someone who can actually answer your question reads it.",
  },
  {
    title: "You'll hear back within one business day",
    body: "Usually sooner. If your question is time-sensitive — a credentialing deadline, a payer issue that's already costing you — say so and we'll prioritise it.",
  },
  {
    title: "The first conversation is a conversation",
    body: "No obligation and no pressure. We'd rather understand what's actually happening in your practice than pitch you something that doesn't fit.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <Nav />
      <main>
        <section
          style={{
            padding: "140px 24px 60px",
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, #dde7ee 0%, #f5f5f7 60%)",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
            <h1
              style={{
                fontSize: "clamp(30px, 5vw, 44px)",
                fontWeight: 700,
                letterSpacing: "-1.5px",
                color: "#0a0a0f",
                margin: "0 0 16px",
                lineHeight: 1.15,
              }}
            >
              Message received.
            </h1>
            <p style={{ fontSize: 17, color: "#515154", lineHeight: 1.65, margin: 0 }}>
              Thank you for reaching out. A member of our team will be in touch
              within one business day.
            </p>
          </div>
        </section>

        <section style={{ padding: "20px 24px 70px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#17a673",
                textTransform: "uppercase",
                letterSpacing: 1.5,
                marginBottom: 24,
              }}
            >
              What happens next
            </p>
            {nextSteps.map(({ title, body }) => (
              <div
                key={title}
                style={{
                  background: "#f5f5f7",
                  borderRadius: 16,
                  padding: "22px 24px",
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#0a0a0f",
                    marginBottom: 6,
                  }}
                >
                  {title}
                </div>
                <div style={{ fontSize: 14.5, color: "#515154", lineHeight: 1.65 }}>
                  {body}
                </div>
              </div>
            ))}

            <div
              style={{
                marginTop: 32,
                paddingTop: 28,
                borderTop: "1px solid #e8e8ed",
              }}
            >
              <p style={{ fontSize: 15, color: "#515154", lineHeight: 1.7, marginBottom: 18 }}>
                Need us sooner? Call{" "}
                <a href="tel:+13233326768" style={{ color: "#17a673", textDecoration: "none", fontWeight: 600 }}>
                  (323) 332-6768
                </a>{" "}
                or email{" "}
                <a href="mailto:info@medbpo360.com" style={{ color: "#17a673", textDecoration: "none", fontWeight: 600 }}>
                  info@medbpo360.com
                </a>
                .
              </p>
              <p style={{ fontSize: 15, color: "#515154", lineHeight: 1.7, margin: 0 }}>
                While you wait, the{" "}
                <Link href="/blog" style={{ color: "#17a673", textDecoration: "none", fontWeight: 600 }}>
                  blog
                </Link>{" "}
                covers denial patterns by specialty, credentialing timelines, and
                when in-house billing stops making sense — or see{" "}
                <Link href="/services" style={{ color: "#17a673", textDecoration: "none", fontWeight: 600 }}>
                  what we do
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
