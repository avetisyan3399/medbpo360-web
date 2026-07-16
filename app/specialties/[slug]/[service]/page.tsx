import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getSpecialty } from "@/lib/specialties";
import { getServicePage } from "@/lib/service-pages";
import {
  specialtyServicePages,
  getSpecialtyServicePage,
  getCombosForSpecialty,
  getCombosForService,
} from "@/lib/specialty-service-pages";

export async function generateStaticParams() {
  return specialtyServicePages.map((p) => ({
    slug: p.specialtySlug,
    service: p.serviceSlug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}): Promise<Metadata> {
  const { slug, service } = await params;
  const combo = getSpecialtyServicePage(slug, service);
  if (!combo) return {};
  return {
    title: combo.metaTitle,
    description: combo.metaDescription,
    keywords: [combo.keyword, "medbpo360"],
    openGraph: {
      title: combo.metaTitle,
      description: combo.metaDescription,
      url: `https://medbpo360.com/specialties/${slug}/${service}`,
    },
    alternates: { canonical: `https://medbpo360.com/specialties/${slug}/${service}` },
  };
}

export default async function SpecialtyServicePage({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}) {
  const { slug, service } = await params;
  const combo = getSpecialtyServicePage(slug, service);
  const specialtyInfo = getSpecialty(slug);
  const serviceInfo = getServicePage(service);
  if (!combo || !specialtyInfo || !serviceInfo) notFound();

  const otherServicesForSpecialty = getCombosForSpecialty(slug).filter((p) => p.serviceSlug !== service);
  const otherSpecialtiesForService = getCombosForService(service).filter((p) => p.specialtySlug !== slug);

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: combo.headline,
            description: combo.metaDescription,
            serviceType: serviceInfo.name,
            url: `https://medbpo360.com/specialties/${slug}/${service}`,
            provider: {
              "@type": "MedicalBusiness",
              name: "medbpo360",
              url: "https://medbpo360.com",
            },
            areaServed: { "@type": "Country", name: "United States" },
          }),
        }}
      />
      <main>
        {/* BREADCRUMB */}
        <div style={{ paddingTop: 120, paddingLeft: 24, paddingRight: 24, background: "#fff" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto", fontSize: 13, color: "#86868b" }}>
            <Link href="/specialties" style={{ color: "#86868b", textDecoration: "none" }}>Specialties</Link>
            {" / "}
            <Link href={`/specialties/${slug}`} style={{ color: "#86868b", textDecoration: "none" }}>{specialtyInfo.name}</Link>
            {" / "}
            <span style={{ color: "#0a0a0f", fontWeight: 600 }}>{serviceInfo.name}</span>
          </div>
        </div>

        {/* HERO */}
        <section style={{
          paddingTop: 24, paddingBottom: 80,
          paddingLeft: 24, paddingRight: 24,
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, #dde7ee 0%, #ffffff 60%)",
          textAlign: "center",
        }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#0f2b46", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16 }}>
            {specialtyInfo.name} &middot; {serviceInfo.name}
          </p>
          <h1 style={{
            fontSize: "clamp(30px, 5vw, 56px)", fontWeight: 700,
            letterSpacing: "-2px", lineHeight: 1.08,
            color: "#0a0a0f", maxWidth: 800, margin: "0 auto 24px",
          }}>
            {combo.headline}
          </h1>
          <p style={{ fontSize: 18, color: "#515154", maxWidth: 580, margin: "0 auto 40px", lineHeight: 1.65 }}>
            {combo.subheadline}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{
              padding: "15px 30px", borderRadius: 980, background: "#0f2b46",
              color: "#fff", fontSize: 15, fontWeight: 600, textDecoration: "none",
              boxShadow: "0 4px 20px rgba(15,43,70,0.3)",
            }}>
              Talk to Our Team
            </Link>
            <Link href={`/specialties/${slug}`} style={{
              padding: "15px 30px", borderRadius: 980,
              background: "#fff", color: "#0a0a0f",
              fontSize: 15, fontWeight: 600, textDecoration: "none",
              border: "1px solid #d2d2d7",
            }}>
              Back to {specialtyInfo.name}
            </Link>
          </div>
        </section>

        {/* STATS */}
        <section style={{ padding: "0 24px", background: "#fff" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: `repeat(${combo.stats.length}, 1fr)`,
              borderRadius: 20, overflow: "hidden",
              border: "1px solid #e8e8ed",
              transform: "translateY(-32px)",
              background: "#fff",
              boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
            }}>
              {combo.stats.map(({ value, label }, i) => (
                <div key={label} style={{
                  padding: "28px 20px", textAlign: "center",
                  borderRight: i < combo.stats.length - 1 ? "1px solid #e8e8ed" : "none",
                }}>
                  <div style={{ fontSize: "clamp(16px, 3vw, 26px)", fontWeight: 800, letterSpacing: "-1px", color: "#0f2b46", lineHeight: 1.1, marginBottom: 8 }}>
                    {value}
                  </div>
                  <div style={{ fontSize: 12, color: "#86868b", fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section style={{ padding: "20px 24px 80px", background: "#fff" }}>
          <div style={{ maxWidth: 740, margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: 18, color: "#3a3a3f", lineHeight: 1.8 }}>{combo.intro}</p>
          </div>
        </section>

        {/* CONSIDERATIONS */}
        <section style={{ padding: "80px 24px", background: "#f5f5f7" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#0f2b46", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>
                What Matters Here
              </p>
              <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 700, letterSpacing: "-1.2px", color: "#0a0a0f", lineHeight: 1.1 }}>
                Why {specialtyInfo.name.toLowerCase()} needs this differently
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
              {combo.considerations.map((c, i) => (
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

        {/* WHAT'S INCLUDED */}
        <section style={{ padding: "80px 24px", background: "#fff" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 60, alignItems: "start" }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#0f2b46", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16 }}>
                What&apos;s Included
              </p>
              <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700, letterSpacing: "-1.2px", color: "#0a0a0f", lineHeight: 1.15, marginBottom: 20 }}>
                {serviceInfo.name}, built for {specialtyInfo.name.toLowerCase()}.
              </h2>
              <p style={{ fontSize: 16, color: "#515154", lineHeight: 1.75, marginBottom: 32 }}>
                A dedicated implementation team and full transparency through your client portal — the same standard as everything else we run, tailored to how {specialtyInfo.name.toLowerCase()} practices actually operate.
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
                {combo.included.map((item) => (
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

        {/* OTHER SERVICES FOR THIS SPECIALTY */}
        <section style={{ padding: "80px 24px", background: "#f5f5f7" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#0f2b46", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 24, textAlign: "center" }}>
              More for {specialtyInfo.name}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
              {otherServicesForSpecialty.map((p) => (
                <Link
                  key={p.serviceSlug}
                  href={`/specialties/${slug}/${p.serviceSlug}`}
                  style={{
                    display: "block", background: "#fff", borderRadius: 20,
                    padding: "24px 22px", textDecoration: "none",
                    border: "1px solid #e8e8ed",
                  }}
                >
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0a0a0f", marginBottom: 8, lineHeight: 1.3 }}>
                    {p.headline}
                  </h3>
                  <p style={{ fontSize: 13, color: "#515154", lineHeight: 1.6 }}>
                    {p.subheadline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* THIS SERVICE FOR OTHER SPECIALTIES */}
        <section style={{ padding: "80px 24px", background: "#fff" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#0f2b46", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 24, textAlign: "center" }}>
              {serviceInfo.name} for Other Specialties
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
              {otherSpecialtiesForService.map((p) => (
                <Link
                  key={p.specialtySlug}
                  href={`/specialties/${p.specialtySlug}/${service}`}
                  style={{
                    display: "block", background: "#f5f5f7", borderRadius: 20,
                    padding: "24px 22px", textDecoration: "none",
                    border: "1px solid #e8e8ed",
                  }}
                >
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0a0a0f", marginBottom: 8, lineHeight: 1.3 }}>
                    {getSpecialty(p.specialtySlug)?.name}
                  </h3>
                  <p style={{ fontSize: 13, color: "#515154", lineHeight: 1.6 }}>
                    {p.subheadline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "100px 24px", background: "#0f2b46", textAlign: "center", color: "#fff" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: 20 }}>
            Ready to get started?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.6 }}>
            A free revenue cycle assessment — you&apos;ll get a written breakdown of where the gaps are, whether or not you move forward with us.
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
