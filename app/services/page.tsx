import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { servicePages } from "@/lib/service-pages";

export const metadata: Metadata = {
  title: "Services | Medical Billing, RCM, Credentialing & BPO",
  description:
    "Full-scale revenue cycle outsourcing: call center services, medical billing & RCM, credentialing & payer enrollment, and back-office BPO for medical practices of any size.",
  keywords: [
    "medical billing services",
    "medical practice RCM outsourcing",
    "provider credentialing services",
    "medical call center outsourcing",
    "back office BPO healthcare",
  ],
  openGraph: {
    title: "medbpo360 Services | Full Revenue Cycle & Back-Office Outsourcing",
    description:
      "Call center, billing & RCM, credentialing & enrollment, and back-office BPO — everything your practice needs to run its revenue cycle, sized to fit you.",
    url: "https://medbpo360.com/services",
  },
  alternates: {
    canonical: "https://medbpo360.com/services",
  },
};

function IconCallCenter() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="12" fill="#e8eef4" />
      <path d="M15 17c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#0f2b46" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <rect x="10" y="17" width="5" height="8" rx="2.5" fill="#0f2b46" />
      <rect x="29" y="17" width="5" height="8" rx="2.5" fill="#0f2b46" />
      <path d="M15 25v3c0 2.2 1.8 4 4 4h2" stroke="#0f2b46" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <rect x="19" y="31" width="6" height="3" rx="1.5" fill="#0f2b46" />
    </svg>
  );
}

function IconBilling() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="12" fill="#e8eef4" />
      <rect x="11" y="10" width="22" height="28" rx="3" stroke="#0f2b46" strokeWidth="1.8" fill="none" />
      <path d="M16 18h8M16 23h12M16 28h6" stroke="#0f2b46" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="30" cy="30" r="6" fill="#17a673" />
      <path d="M30 27.5v5M28 29l2-1.5 2 1.5M28 30.5l2 1.5 2-1.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCredentialing() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="12" fill="#e8eef4" />
      <rect x="11" y="9" width="22" height="26" rx="3" stroke="#0f2b46" strokeWidth="1.8" fill="none" />
      <rect x="16" y="7" width="12" height="5" rx="2" fill="#0f2b46" />
      <circle cx="22" cy="21" r="4" stroke="#0f2b46" strokeWidth="1.8" fill="none" />
      <path d="M16 31c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="#0f2b46" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function IconBPO() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="12" fill="#e8eef4" />
      <rect x="9" y="9" width="11" height="11" rx="2.5" stroke="#0f2b46" strokeWidth="1.8" fill="none" />
      <rect x="24" y="9" width="11" height="11" rx="2.5" stroke="#0f2b46" strokeWidth="1.8" fill="none" />
      <rect x="9" y="24" width="11" height="11" rx="2.5" stroke="#0f2b46" strokeWidth="1.8" fill="none" />
      <rect x="24" y="24" width="11" height="11" rx="2.5" fill="#17a673" />
    </svg>
  );
}

const icons: Record<string, React.ReactNode> = {
  "call-center": <IconCallCenter />,
  "medical-billing-rcm": <IconBilling />,
  "credentialing-enrollment": <IconCredentialing />,
  "bpo-back-office": <IconBPO />,
};

export default function ServicesPage() {
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
            Our Services
          </p>
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 700,
              letterSpacing: "-2.5px",
              lineHeight: 1.06,
              color: "#0a0a0f",
              maxWidth: 820,
              margin: "0 auto 24px",
            }}
          >
            Everything your revenue
            <br />
            <span style={{ color: "#17a673" }}>cycle needs. Sized to fit you.</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#515154",
              maxWidth: 540,
              margin: "0 auto 40px",
              lineHeight: 1.65,
            }}
          >
            From the call center to the last dollar collected — one partner
            running your revenue cycle and back office, whether you're a
            single practice or several sites.
          </p>

          {/* Quick jump links */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
            }}
          >
            {servicePages.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                style={{
                  padding: "7px 16px",
                  borderRadius: 980,
                  border: "1px solid #d2d2d7",
                  fontSize: 13,
                  color: "#515154",
                  fontWeight: 500,
                  textDecoration: "none",
                  background: "#fff",
                }}
              >
                {s.name.split(" ")[0]}
              </a>
            ))}
          </div>
        </section>

        {/* ── SERVICE SECTIONS ─────────────────────────────────────────── */}
        {servicePages.map((service, i) => (
          <section
            key={service.slug}
            id={service.slug}
            style={{
              padding: "80px 24px",
              background: i % 2 === 0 ? "#fff" : "#f5f5f7",
            }}
          >
            <div
              style={{
                maxWidth: 1080,
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 60,
                alignItems: "start",
              }}
            >
              {/* Left: text */}
              <div>
                <div style={{ marginBottom: 20 }}>{icons[service.slug]}</div>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#0f2b46",
                    textTransform: "uppercase",
                    letterSpacing: 1.2,
                    marginBottom: 10,
                  }}
                >
                  {service.tagline}
                </p>
                <h2
                  style={{
                    fontSize: "clamp(24px, 3.5vw, 38px)",
                    fontWeight: 700,
                    letterSpacing: "-1px",
                    color: "#0a0a0f",
                    lineHeight: 1.15,
                    marginBottom: 20,
                  }}
                >
                  {service.name}
                </h2>
                <p
                  style={{
                    fontSize: 16,
                    color: "#515154",
                    lineHeight: 1.75,
                    marginBottom: 28,
                  }}
                >
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#17a673",
                    textDecoration: "none",
                  }}
                >
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="#17a673" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              {/* Right: bullet list */}
              <div
                style={{
                  background: i % 2 === 0 ? "#f5f5f7" : "#fff",
                  borderRadius: 20,
                  padding: "32px 28px",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#6e6e73",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginBottom: 20,
                  }}
                >
                  What&apos;s included
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {service.included.slice(0, 6).map((b) => (
                    <div
                      key={b}
                      style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                    >
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          background: "#e8eef4",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path
                            d="M2 5l2 2 4-4"
                            stroke="#17a673"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span style={{ fontSize: 14, color: "#1d1d1f", lineHeight: 1.55 }}>
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

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
            Not sure what you need?
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
            We&apos;ll do a free assessment of your current revenue cycle
            and tell you exactly where the gaps are.
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
            Get a Free Assessment
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
