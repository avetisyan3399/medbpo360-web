import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Medical Billing & BPO Outsourcing",
  description:
    "medbpo360 is a medical billing, credentialing, and back-office outsourcing partner for medical practices of any size — solo providers and small practices, MSOs, and health systems nationwide.",
  keywords: [
    "about medbpo360",
    "medical billing company",
    "health system RCM partner",
    "MSO billing partner",
    "medical BPO company",
  ],
  openGraph: {
    title: "About medbpo360 | Sized to Fit You",
    description:
      "Standardized billing, credentialing, and back-office outsourcing for medical practices of any size, from solo providers to health systems nationwide.",
    url: "https://medbpo360.com/about",
  },
  alternates: {
    canonical: "https://medbpo360.com/about",
  },
};

const stats = [
  { value: "40+", label: "Provider rosters credentialed concurrently" },
  { value: "90", suffix: " days", label: "Target onboarding window for new sites" },
  { value: "24/7", label: "Call center coverage available" },
  { value: "<48h", label: "Response time from your implementation team" },
  { value: "100%", label: "Executive-level reporting on every engagement" },
  { value: "$0", label: "Hidden fees — ever" },
];

const whyUs = [
  {
    icon: "👥",
    title: "Dedicated Implementation Team",
    description:
      "Not a single account manager stretched across dozens of clients — a full team assigned to your onboarding, standardization, and ongoing operations.",
  },
  {
    icon: "🏗️",
    title: "Built for Any Stage, Growth or Not",
    description:
      "A new site opening, an acquisition closing, a roster expanding, or simply a practice that wants better systems without changing size at all — our onboarding playbooks fit all of it without a revenue dip.",
  },
  {
    icon: "📊",
    title: "Reporting That Fits the Reader",
    description:
      "Dashboards built to be genuinely useful — whether that's a solo practitioner checking collections or a CFO reviewing site-by-site performance, denial patterns, and roster-level status for a board meeting.",
  },
  {
    icon: "🔍",
    title: "Full Operational Transparency",
    description:
      "Every claim, every credentialing status, every call log — visible in your portal at all times. No black boxes, at any size.",
  },
  {
    icon: "🤝",
    title: "Healthcare-Exclusive Focus",
    description:
      "We work exclusively with healthcare organizations — from solo practitioners and small independent practices to MSOs, PE-backed groups, and full health systems. We understand the operational complexity at every size, not just the largest ones.",
  },
  {
    icon: "🔒",
    title: "HIPAA Compliant, Any Volume",
    description:
      "The same security and access controls across every operation we run — call center, claims processing, and credentialing alike — regardless of your practice size.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section
          style={{
            paddingTop: 140,
            paddingBottom: 80,
            paddingLeft: 24,
            paddingRight: 24,
            textAlign: "center",
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, #dde7ee 0%, #ffffff 60%)",
          }}
        >
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#0f2b46",
              textTransform: "uppercase",
              letterSpacing: 1.5,
              marginBottom: 16,
            }}
          >
            About medbpo360
          </p>
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 700,
              letterSpacing: "-2.5px",
              lineHeight: 1.06,
              color: "#0a0a0f",
              maxWidth: 800,
              margin: "0 auto 24px",
            }}
          >
            Sized to fit you,
            <br />
            <span style={{ color: "#17a673" }}>wherever you start.</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#515154",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            medbpo360 is a healthcare revenue cycle expertise company,
            built around standardized systems and reporting that work for
            a solo provider, a 15-provider group, and a multi-facility
            health system alike.
          </p>
        </section>

        {/* ── STATS GRID ───────────────────────────────────────────────── */}
        <section style={{ padding: "80px 24px", background: "#fff" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 2,
                borderRadius: 24,
                overflow: "hidden",
                border: "1px solid #e8e8ed",
              }}
            >
              {stats.map(({ value, suffix, label }) => (
                <div
                  key={label}
                  style={{
                    padding: "44px 36px",
                    background: "#fff",
                    borderRight: "1px solid #e8e8ed",
                    borderBottom: "1px solid #e8e8ed",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(36px, 5vw, 56px)",
                      fontWeight: 700,
                      letterSpacing: "-2px",
                      color: "#0f2b46",
                      lineHeight: 1,
                      marginBottom: 10,
                    }}
                  >
                    {value}
                    {suffix && (
                      <span style={{ fontSize: "0.5em", letterSpacing: "-1px" }}>
                        {suffix}
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: "#515154",
                      lineHeight: 1.5,
                      maxWidth: 200,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: "#a0a0a5", textAlign: "center", marginTop: 16 }}>
              Figures reflect target operating standards. Ask us for engagement-specific performance data.
            </p>
          </div>
        </section>

        {/* ── WHY CHOOSE US ────────────────────────────────────────────── */}
        <section style={{ padding: "80px 24px", background: "#f5f5f7" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#0f2b46",
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  marginBottom: 16,
                }}
              >
                Why Choose Us
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 700,
                  letterSpacing: "-1.5px",
                  color: "#0a0a0f",
                  lineHeight: 1.1,
                }}
              >
                What makes us different.
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 20,
              }}
            >
              {whyUs.map(({ icon, title, description }) => (
                <div
                  key={title}
                  style={{
                    background: "#fff",
                    borderRadius: 20,
                    padding: "32px 28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                  }}
                >
                  <div style={{ fontSize: 32 }}>{icon}</div>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#0a0a0f",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{ fontSize: 14, color: "#515154", lineHeight: 1.7 }}
                  >
                    {description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section
          style={{
            padding: "100px 24px",
            textAlign: "center",
            background: "#0f2b46",
            color: "#fff",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 52px)",
              fontWeight: 700,
              letterSpacing: "-2px",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Ready to see the difference?
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.8)",
              maxWidth: 440,
              margin: "0 auto 40px",
              lineHeight: 1.55,
            }}
          >
            Let&apos;s talk about your organization. No pushy sales — just a
            straightforward conversation about where you stand today.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              padding: "16px 36px",
              borderRadius: 980,
              background: "#17a673",
              color: "#fff",
              fontSize: 16,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Schedule a Consultation
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
