import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { specialties } from "@/lib/specialties";

export const metadata: Metadata = {
  title: "Specialties We Bill | Medical Billing by Specialty",
  description:
    "medbpo360 provides specialty-specific billing expertise across behavioral health, primary care, cardiology, multi-specialty practices, and labs & diagnostics — for practices of any size.",
  keywords: [
    "behavioral health billing outsourcing",
    "primary care billing outsourcing",
    "cardiology billing outsourcing",
    "multi specialty billing outsourcing",
    "lab billing outsourcing",
  ],
  openGraph: {
    title: "Specialties We Bill | medbpo360",
    description:
      "Specialty-specific billing expertise built for practices of any size, from solo providers to multi-site groups.",
    url: "https://medbpo360.com/specialties",
  },
  alternates: {
    canonical: "https://medbpo360.com/specialties",
  },
};

export default function SpecialtiesPage() {
  return (
    <>
      <Nav />
      <main>
        <section
          style={{
            paddingTop: 140,
            paddingBottom: 80,
            paddingLeft: 24,
            paddingRight: 24,
            textAlign: "center",
            background: "radial-gradient(ellipse 80% 50% at 50% 0%, #dde7ee 0%, #ffffff 60%)",
          }}
        >
          <p style={{ fontSize: 13, fontWeight: 600, color: "#0f2b46", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16 }}>
            Specialties
          </p>
          <h1 style={{
            fontSize: "clamp(36px, 6vw, 68px)", fontWeight: 700,
            letterSpacing: "-2.5px", lineHeight: 1.06, color: "#0a0a0f",
            maxWidth: 780, margin: "0 auto 24px",
          }}>
            Specialty depth,
            <br /><span style={{ color: "#17a673" }}>at any size.</span>
          </h1>
          <p style={{ fontSize: 18, color: "#515154", maxWidth: 560, margin: "0 auto", lineHeight: 1.65 }}>
            Every specialty codes differently. We staff the expertise to get it right — whether you're a solo provider or a multi-site practice.
          </p>
        </section>

        <section style={{ padding: "20px 24px 100px", background: "#fff" }}>
          <div style={{
            maxWidth: 1080, margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}>
            {specialties.map((s) => (
              <Link
                key={s.slug}
                href={`/specialties/${s.slug}`}
                style={{
                  display: "block",
                  background: "#f5f5f7",
                  borderRadius: 20,
                  padding: "32px 28px",
                  textDecoration: "none",
                  border: "1px solid #e8e8ed",
                }}
              >
                <p style={{ fontSize: 12, fontWeight: 600, color: "#17a673", textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>
                  {s.tagline}
                </p>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: "#0a0a0f", letterSpacing: "-0.3px", marginBottom: 12 }}>
                  {s.name}
                </h2>
                <p style={{ fontSize: 14, color: "#515154", lineHeight: 1.7, marginBottom: 20 }}>
                  {s.subheadline}
                </p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "#0f2b46" }}>
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="#0f2b46" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section style={{ padding: "100px 24px", textAlign: "center", background: "#0f2b46", color: "#fff" }}>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 700, letterSpacing: "-2px", lineHeight: 1.1, marginBottom: 20 }}>
            Don&apos;t see your specialty?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 460, margin: "0 auto 36px", lineHeight: 1.6 }}>
            We bill across a wide range of specialties beyond what&apos;s listed here. Let&apos;s talk about yours.
          </p>
          <Link href="/contact" style={{
            display: "inline-block", padding: "16px 36px",
            borderRadius: 980, background: "#17a673",
            color: "#fff", fontSize: 16, fontWeight: 700, textDecoration: "none",
          }}>
            Talk to Our Team
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
