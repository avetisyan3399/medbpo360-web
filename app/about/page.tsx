import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Enterprise Medical Billing & BPO Outsourcing",
  description:
    "medbpo360 is an enterprise medical billing, credentialing, and back-office outsourcing partner for health systems, MSOs, and large medical groups nationwide.",
  keywords: [
    "about medbpo360",
    "enterprise medical billing company",
    "health system RCM partner",
    "MSO billing partner",
    "medical BPO company",
  ],
  openGraph: {
    title: "About medbpo360 | Built for Scale",
    description:
      "Standardized billing, credentialing, and back-office outsourcing for health systems and large medical groups nationwide.",
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

const reviews = [
  {
    quote:
      "We were onboarding three acquired practices at once and our internal team couldn't keep pace with credentialing. medbpo360 ran all three rosters in parallel without a single billing gap.",
    name: "VP of Revenue Cycle",
    title: "Multi-State MSO",
    location: "Texas",
  },
  {
    quote:
      "The reporting is what sold our board. We finally have one dashboard that rolls up performance across every facility instead of a dozen spreadsheets.",
    name: "CFO",
    title: "Regional Health System",
    location: "Southeast US",
  },
  {
    quote:
      "Standardizing billing across 14 locations sounded impossible until we saw their onboarding playbook in action. Every new site follows the same process now.",
    name: "COO",
    title: "Multi-Site Medical Group",
    location: "California",
  },
  {
    quote:
      "Their call center team handles our overflow scheduling and payer follow-up across every site. It's effectively an extra department without the hiring overhead.",
    name: "Director of Operations",
    title: "Ambulatory Surgery Network",
    location: "Midwest US",
  },
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
    title: "Built for Growth, Not Just Maintenance",
    description:
      "New site opening, acquisition closing, roster expanding — our onboarding playbooks are built to absorb growth without a revenue dip.",
  },
  {
    icon: "📊",
    title: "Executive-Ready Reporting",
    description:
      "Dashboards built for a CFO or board meeting, not a solo practitioner — site-by-site performance, denial patterns, and roster-level status.",
  },
  {
    icon: "🔍",
    title: "Full Operational Transparency",
    description:
      "Every claim, every credentialing status, every call log — visible in your portal at all times. No black boxes, even at scale.",
  },
  {
    icon: "🤝",
    title: "Healthcare-Exclusive Focus",
    description:
      "We work exclusively with health systems, MSOs, and large medical groups. We understand the operational complexity that comes with scale.",
  },
  {
    icon: "🔒",
    title: "HIPAA Compliant at Volume",
    description:
      "Enterprise-grade security and access controls across every operation we run — call center, claims processing, and credentialing alike.",
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
            Built for organizations
            <br />
            <span style={{ color: "#17a673" }}>that outgrew small.</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#515154",
              maxWidth: 540,
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            medbpo360 is the sister company to medbillytics — same
            healthcare revenue cycle expertise, built out for health
            systems, MSOs, and multi-site groups running at enterprise
            volume.
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

        {/* ── REVIEWS ──────────────────────────────────────────────────── */}
        <section style={{ padding: "80px 24px", background: "#0a0a0f" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#17a673",
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  marginBottom: 16,
                }}
              >
                Client Feedback
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 700,
                  letterSpacing: "-1.5px",
                  color: "#f5f5f7",
                  lineHeight: 1.1,
                }}
              >
                Don&apos;t take our word for it.
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 20,
              }}
            >
              {reviews.map(({ quote, name, title, location }) => (
                <div
                  key={name}
                  style={{
                    background: "#16161e",
                    border: "1px solid #2a2a2e",
                    borderRadius: 20,
                    padding: "32px 28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                  }}
                >
                  <div style={{ color: "#f5a623", fontSize: 14, letterSpacing: 2 }}>
                    ★★★★★
                  </div>
                  <p
                    style={{
                      fontSize: 15,
                      color: "#c7c7cc",
                      lineHeight: 1.75,
                      fontStyle: "italic",
                      flexGrow: 1,
                    }}
                  >
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#f5f5f7",
                      }}
                    >
                      {name}
                    </div>
                    <div style={{ fontSize: 13, color: "#6e6e73" }}>
                      {title} · {location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: "#4a4a50", textAlign: "center", marginTop: 32 }}>
              Representative feedback illustrating the engagements we run — named client references available on request.
            </p>
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
