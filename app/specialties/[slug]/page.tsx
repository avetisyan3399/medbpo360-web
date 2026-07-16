import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { specialties, getSpecialty } from "@/lib/specialties";

export async function generateStaticParams() {
  return specialties.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getSpecialty(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: [s.keyword, "medbpo360"],
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: `https://medbpo360.com/specialties/${slug}`,
    },
    alternates: { canonical: `https://medbpo360.com/specialties/${slug}` },
  };
}

export default async function SpecialtyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getSpecialty(slug);
  if (!s) notFound();

  return (
    <>
      <Nav />
      <main>
        <section style={{
          paddingTop: 140, paddingBottom: 80,
          paddingLeft: 24, paddingRight: 24,
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, #dde7ee 0%, #ffffff 60%)",
          textAlign: "center",
        }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#0f2b46", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16 }}>
            {s.tagline}
          </p>
          <h1 style={{
            fontSize: "clamp(34px, 6vw, 64px)", fontWeight: 700,
            letterSpacing: "-2.5px", lineHeight: 1.06,
            color: "#0a0a0f", maxWidth: 800, margin: "0 auto 24px",
          }}>
            {s.headline}
          </h1>
          <p style={{ fontSize: 18, color: "#515154", maxWidth: 580, margin: "0 auto 40px", lineHeight: 1.65 }}>
            {s.subheadline}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{
              padding: "15px 30px", borderRadius: 980, background: "#0f2b46",
              color: "#fff", fontSize: 15, fontWeight: 600, textDecoration: "none",
              boxShadow: "0 4px 20px rgba(15,43,70,0.3)",
            }}>
              Talk to Our Team
            </Link>
            <Link href="/specialties" style={{
              padding: "15px 30px", borderRadius: 980,
              background: "#fff", color: "#0a0a0f",
              fontSize: 15, fontWeight: 600, textDecoration: "none",
              border: "1px solid #d2d2d7",
            }}>
              All Specialties
            </Link>
          </div>
        </section>

        <section style={{ padding: "0 24px", background: "#fff" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: `repeat(${s.stats.length}, 1fr)`,
              borderRadius: 20, overflow: "hidden",
              border: "1px solid #e8e8ed",
              transform: "translateY(-32px)",
              background: "#fff",
              boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
            }}>
              {s.stats.map(({ value, label }, i) => (
                <div key={label} style={{
                  padding: "32px 24px", textAlign: "center",
                  borderRight: i < s.stats.length - 1 ? "1px solid #e8e8ed" : "none",
                }}>
                  <div style={{ fontSize: "clamp(16px, 3vw, 28px)", fontWeight: 800, letterSpacing: "-1px", color: "#0f2b46", lineHeight: 1.1, marginBottom: 8 }}>
                    {value}
                  </div>
                  <div style={{ fontSize: 13, color: "#86868b", fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "20px 24px 80px", background: "#fff" }}>
          <div style={{ maxWidth: 740, margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: 18, color: "#3a3a3f", lineHeight: 1.8 }}>{s.description}</p>
          </div>
        </section>

        <section style={{ padding: "80px 24px", background: "#f5f5f7" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#0f2b46", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>
                Common Challenges
              </p>
              <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-1.5px", color: "#0a0a0f", lineHeight: 1.1 }}>
                Where {s.name.toLowerCase()} practices lose revenue
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
              {s.challenges.map((c, i) => (
                <div key={i} style={{
                  background: "#fff", borderRadius: 20, padding: "32px 28px",
                  borderTop: "3px solid #0f2b46",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0a0a0f", marginBottom: 12, lineHeight: 1.3 }}>
                    {c.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "#515154", lineHeight: 1.7 }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "80px 24px", background: "#fff" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 60, alignItems: "start" }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#0f2b46", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16 }}>
                What&apos;s Included
              </p>
              <h2 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-1.5px", color: "#0a0a0f", lineHeight: 1.1, marginBottom: 20 }}>
                {s.name}.<br />
                <span style={{ color: "#17a673" }}>Done right, at any size.</span>
              </h2>
              <p style={{ fontSize: 16, color: "#515154", lineHeight: 1.75, marginBottom: 32 }}>
                Specialty-specific coding expertise backed by a dedicated implementation team and full transparency through your client portal.
              </p>
              <Link href="/contact" style={{
                display: "inline-block", padding: "14px 28px",
                borderRadius: 980, background: "#0f2b46",
                color: "#fff", fontSize: 15, fontWeight: 600, textDecoration: "none",
              }}>
                Talk to Our Team
              </Link>
            </div>
            <div style={{ background: "#f5f5f7", borderRadius: 20, padding: "32px 28px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {s.included.map((item) => (
                  <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: "50%",
                      background: "#e8eef4", display: "flex",
                      alignItems: "center", justifyContent: "center",
                      flexShrink: 0, marginTop: 2,
                    }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#17a673" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span style={{ fontSize: 14, color: "#1d1d1f", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "100px 24px", background: "#0f2b46", textAlign: "center", color: "#fff" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: 20 }}>
            Ready to get started?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.6 }}>
            Free revenue cycle assessment — we&apos;ll show you exactly where the gaps are and what it would take to fix them.
          </p>
          <Link href="/contact" style={{
            display: "inline-block", padding: "16px 36px",
            borderRadius: 980, background: "#17a673",
            color: "#fff", fontSize: 16, fontWeight: 700, textDecoration: "none",
          }}>
            Get a Free Assessment
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
