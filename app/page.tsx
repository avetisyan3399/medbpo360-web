import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "medbpo360 | Enterprise Medical Billing, RCM & BPO Outsourcing",
  description:
    "Enterprise-scale medical billing, credentialing, and back-office outsourcing for health systems, MSOs, and large medical groups. Standardized processes, executive reporting, built to scale.",
  keywords: [
    "enterprise medical billing outsourcing",
    "health system revenue cycle management",
    "MSO billing outsourcing",
    "bulk provider credentialing services",
    "medical BPO services",
    "back office outsourcing healthcare",
  ],
  openGraph: {
    title: "medbpo360 | Enterprise Medical Billing, RCM & BPO Outsourcing",
    description:
      "Standardized billing, credentialing, and back-office outsourcing built for health systems and large medical groups — with executive-level reporting.",
    url: "https://medbpo360.com",
  },
  alternates: {
    canonical: "https://medbpo360.com",
  },
};

function ServiceCard({
  icon,
  title,
  description,
  href,
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      style={{
        background: "#fff",
        borderRadius: 20,
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        border: "1px solid #e8e8ed",
        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        borderTop: "3px solid #0f2b46",
        textDecoration: "none",
      }}
    >
      <div style={{
        width: 48, height: 48, borderRadius: 14,
        background: "#e8eef4",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 24,
      }}>{icon}</div>
      <div style={{
        fontSize: 18, fontWeight: 700, letterSpacing: "-0.3px", color: "#0a0a0f",
      }}>
        {title}
      </div>
      <div style={{ fontSize: 14, color: "#515154", lineHeight: 1.7 }}>
        {description}
      </div>
    </Link>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          background: "rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontSize: 17,
            fontWeight: 600,
            color: "#f5f5f7",
            marginBottom: 6,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 14, color: "#86868b", lineHeight: 1.65 }}>
          {description}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "120px 24px 80px",
            position: "relative",
            overflow: "hidden",
            background: "#f0f4f7",
          }}
        >
          {/* Background orbs */}
          <div style={{
            position: "absolute", top: "-10%", left: "50%",
            transform: "translateX(-50%)",
            width: "min(700px, 150vw)", height: "min(700px, 150vw)",
            borderRadius: "50%",
            background: "radial-gradient(circle, #cddce6 0%, #e9f0f4 50%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: "10%", right: "-5%",
            width: "min(300px, 60vw)", height: "min(300px, 60vw)",
            borderRadius: "50%",
            background: "radial-gradient(circle, #d3ece1 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", top: "20%", left: "-5%",
            width: "min(200px, 40vw)", height: "min(200px, 40vw)",
            borderRadius: "50%",
            background: "radial-gradient(circle, #dde7ee 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.9)",
                border: "1px solid #c8d4dc",
                borderRadius: 980,
                padding: "7px 18px",
                fontSize: 13,
                fontWeight: 600,
                color: "#0f2b46",
                marginBottom: 28,
                letterSpacing: "0.2px",
                boxShadow: "0 2px 12px rgba(15,43,70,0.1)",
              }}
            >
              <span style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#17a673", display: "inline-block",
              }} />
              Medical Billing, RCM & BPO · Built to Scale
            </div>

            <h1
              style={{
                fontSize: "clamp(42px, 8vw, 88px)",
                fontWeight: 800,
                letterSpacing: "-3px",
                lineHeight: 1.02,
                color: "#0a0a0f",
                maxWidth: 920,
                margin: "0 auto 24px",
              }}
            >
              Revenue cycle
              <br />
              <span style={{
                color: "#0f2b46",
                background: "linear-gradient(135deg, #0f2b46, #17a673)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>that scales with you.</span>
            </h1>

            <p
              style={{
                fontSize: "clamp(16px, 2.5vw, 20px)",
                color: "#3a3a3f",
                maxWidth: 560,
                lineHeight: 1.6,
                marginBottom: 40,
                fontWeight: 400,
                margin: "0 auto 40px",
              }}
            >
              Standardized billing, credentialing, and back-office operations
              that scale with you — from a growing multi-provider practice
              to a multi-facility health system — with a dedicated
              implementation team and reporting built for your leadership,
              not just your front desk.
            </p>

            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{
                  padding: "15px 30px",
                  borderRadius: 980,
                  background: "#0f2b46",
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(15,43,70,0.35)",
                }}
              >
                Talk to Our Team
              </Link>
              <Link
                href="/services"
                style={{
                  padding: "15px 30px",
                  borderRadius: 980,
                  background: "rgba(255,255,255,0.9)",
                  color: "#0a0a0f",
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "1px solid #d2d2d7",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                Our Services
              </Link>
            </div>

            <div style={{
              display: "flex", gap: 8, flexWrap: "wrap",
              justifyContent: "center", marginTop: 44,
            }}>
              {[
                "Growing Practices","Health Systems","MSOs & PE-Backed Groups","ASCs",
                "Multi-Site Groups","Hospital-Based Groups","Behavioral Health",
                "Primary Care","Cardiology","Labs & Diagnostics","And more",
              ].map((t) => (
                <span key={t} style={{
                  padding: "5px 13px",
                  borderRadius: 980,
                  background: "rgba(255,255,255,0.8)",
                  border: "1px solid #cddae1",
                  fontSize: 12,
                  color: "#375368",
                  fontWeight: 500,
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS ────────────────────────────────────────────────────────── */}
        <section style={{ padding: "0 24px", background: "#fff" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              borderRadius: 24,
              overflow: "hidden",
              border: "1px solid #e8e8ed",
              transform: "translateY(-32px)",
              background: "#fff",
              boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
            }}>
              {[
                { value: "40+", label: "Provider Rosters Managed", color: "#0f2b46" },
                { value: "24/7", label: "Call Center Coverage Available", color: "#17a673" },
                { value: "90d", label: "New-Site Onboarding Window", color: "#0f2b46" },
                { value: "100%", label: "Executive-Level Reporting", color: "#17a673" },
              ].map(({ value, label, color }, i) => (
                <div key={label} style={{
                  padding: "36px 28px",
                  textAlign: "center",
                  borderRight: i < 3 ? "1px solid #e8e8ed" : "none",
                }}>
                  <div style={{
                    fontSize: "clamp(30px, 5vw, 48px)",
                    fontWeight: 800,
                    letterSpacing: "-2px",
                    color,
                    lineHeight: 1,
                    marginBottom: 8,
                  }}>{value}</div>
                  <div style={{ fontSize: 13, color: "#86868b", fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────────────────────────── */}
        <section style={{ padding: "100px 24px", background: "#fff" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
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
                What We Do
              </p>
              <h2
                style={{
                  fontSize: "clamp(30px, 5vw, 52px)",
                  fontWeight: 700,
                  letterSpacing: "-1.5px",
                  color: "#0a0a0f",
                  lineHeight: 1.1,
                }}
              >
                One partner for the entire back office.
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 20,
              }}
            >
              <ServiceCard
                href="/services/call-center"
                icon="📞"
                title="Call Center Services"
                description="Dedicated pods for patient billing, payer follow-up, and scheduling — sized to your patient volume, with 24/7 coverage options."
              />
              <ServiceCard
                href="/services/medical-billing-rcm"
                icon="📊"
                title="Medical Billing & RCM"
                description="Full-cycle revenue cycle management standardized across every site, with executive dashboards built for leadership."
              />
              <ServiceCard
                href="/services/credentialing-enrollment"
                icon="🏥"
                title="Credentialing & Payer Enrollment"
                description="Bulk roster credentialing and enrollment across every payer — with real-time visibility into who's billable and who isn't."
              />
              <ServiceCard
                href="/services/bpo-back-office"
                icon="⚙️"
                title="Full-Scale BPO / Back-Office"
                description="Claims processing, denial management, and administrative staffing that flexes with your volume and growth."
              />
            </div>
          </div>
        </section>

        {/* ── SIZE REASSURANCE ─────────────────────────────────────────────── */}
        <section style={{ padding: "80px 24px", background: "#f5f5f7" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
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
              Wherever You&apos;re Starting
            </p>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 40px)",
                fontWeight: 700,
                letterSpacing: "-1.5px",
                color: "#0a0a0f",
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              Built to scale. Not built to gatekeep.
            </h2>
            <p style={{ fontSize: 16, color: "#515154", lineHeight: 1.75, marginBottom: 8 }}>
              Whether you&apos;re a 12-provider group standardizing billing
              for the first time or a health system running dozens of
              facilities, the same systems apply — we just calibrate the
              team to match. Many of our health system engagements started
              as a single growing practice.
            </p>
            <p style={{ fontSize: 16, color: "#515154", lineHeight: 1.75, marginBottom: 32 }}>
              If you&apos;re not sure you&apos;re &ldquo;big enough&rdquo;
              yet, that&apos;s exactly the right time to talk to us.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                padding: "14px 28px",
                borderRadius: 980,
                background: "#0f2b46",
                color: "#fff",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Talk to Our Team
            </Link>
          </div>
        </section>

        {/* ── DARK FEATURE SECTION ─────────────────────────────────────────── */}
        <section
          style={{
            padding: "100px 24px",
            background: "#0a0a0f",
            color: "#f5f5f7",
          }}
        >
          <div
            style={{
              maxWidth: 1080,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 60,
              alignItems: "center",
            }}
          >
            <div>
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
                Why medbpo360
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 46px)",
                  fontWeight: 700,
                  letterSpacing: "-1.5px",
                  lineHeight: 1.1,
                  marginBottom: 20,
                }}
              >
                Built for scale.
                <br />
                <span style={{ color: "#17a673" }}>
                  Run by a real team.
                </span>
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#86868b",
                  lineHeight: 1.7,
                  marginBottom: 32,
                }}
              >
                Whether you&apos;re a 12-provider practice or a health
                system, you get a dedicated implementation team — not a
                single account manager split across dozens of clients —
                with standardized processes across every site and reporting
                that speaks to a CFO, not just a front desk.
              </p>
              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  padding: "14px 28px",
                  borderRadius: 980,
                  border: "1px solid #3a3a3e",
                  color: "#f5f5f7",
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Talk to Us
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <Feature
                icon="👥"
                title="Dedicated Implementation Team"
                description="Not one account manager — a full team assigned to your onboarding, standardization, and ongoing operations."
              />
              <Feature
                icon="🏗️"
                title="Built for Roll-Up Growth"
                description="Acquiring a practice or opening a new site? We run a repeatable onboarding playbook so revenue doesn't dip during the transition."
              />
              <Feature
                icon="📈"
                title="Executive-Level Reporting"
                description="Dashboards built for a CFO or COO — site-by-site performance, denial patterns, and roster-level credentialing status."
              />
              <Feature
                icon="🔒"
                title="HIPAA-Compliant at Volume"
                description="Enterprise-grade security and access controls across every operation, from call center to claims processing."
              />
            </div>
          </div>
        </section>

        {/* ── SYSTEMS WE WORK WITHIN ───────────────────────────────────────── */}
        <section style={{ padding: "100px 24px", background: "#fff" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
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
              Systems We Work Within
            </p>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 40px)",
                fontWeight: 700,
                letterSpacing: "-1.5px",
                color: "#0a0a0f",
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              No new tech stack to learn.
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#515154",
                lineHeight: 1.75,
                maxWidth: 640,
                margin: "0 auto 48px",
              }}
            >
              We submit claims and manage enrollment across all major
              commercial and government payers nationwide, including
              Medicare and Medicaid — and connect directly into the
              clearinghouses and practice systems you already run.
            </p>

            <div style={{ marginBottom: 40 }}>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#86868b",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 16,
                }}
              >
                Clearinghouses
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
                {["Waystar", "Availity", "Office Ally"].map((t) => (
                  <span key={t} style={{
                    padding: "6px 16px",
                    borderRadius: 980,
                    background: "#f5f5f7",
                    border: "1px solid #e8e8ed",
                    fontSize: 13,
                    color: "#375368",
                    fontWeight: 500,
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#86868b",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 16,
                }}
              >
                EHR &amp; Practice Management
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
                {[
                  "Epic", "Oracle Health (Cerner)", "athenahealth", "eClinicalWorks",
                  "NextGen Healthcare", "Greenway Health", "DrChrono", "Kareo / Tebra",
                  "AdvancedMD", "Valant", "CentralReach",
                ].map((t) => (
                  <span key={t} style={{
                    padding: "6px 16px",
                    borderRadius: 980,
                    background: "#f5f5f7",
                    border: "1px solid #e8e8ed",
                    fontSize: 13,
                    color: "#375368",
                    fontWeight: 500,
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
        <section style={{ padding: "100px 24px", background: "#f5f5f7" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
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
              How It Works
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-1.5px",
                color: "#0a0a0f",
                marginBottom: 64,
                lineHeight: 1.1,
              }}
            >
              Built to onboard at scale.
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 24,
              }}
            >
              {[
                {
                  step: "01",
                  title: "Assessment & Roadmap",
                  desc: "We audit your current revenue cycle across every site and build a standardization roadmap tailored to your structure.",
                },
                {
                  step: "02",
                  title: "Implementation Sprint",
                  desc: "A dedicated implementation team onboards your rosters, payers, and workflows — following a repeatable playbook, not a blank slate.",
                },
                {
                  step: "03",
                  title: "Operate & Report",
                  desc: "Ongoing operations run against your standard, with executive dashboards tracking performance across every site.",
                },
              ].map(({ step, title, desc }) => (
                <div
                  key={step}
                  style={{
                    background: "#fff",
                    borderRadius: 20,
                    padding: "36px 28px",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#0f2b46",
                      letterSpacing: 1,
                      marginBottom: 12,
                    }}
                  >
                    {step}
                  </div>
                  <div
                    style={{
                      fontSize: 19,
                      fontWeight: 700,
                      color: "#0a0a0f",
                      marginBottom: 10,
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.65 }}
                  >
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
        <section
          style={{
            padding: "100px 24px",
            background: "#0f2b46",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 56px)",
              fontWeight: 700,
              letterSpacing: "-2px",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Ready to scale your back office?
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.8)",
              maxWidth: 480,
              margin: "0 auto 40px",
              lineHeight: 1.55,
            }}
          >
            Let&apos;s talk about your organization. We&apos;ll show you
            exactly how we&apos;d standardize your revenue cycle across
            every site.
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
              letterSpacing: "-0.2px",
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
