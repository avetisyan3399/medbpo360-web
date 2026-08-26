import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ResourceSections from "@/components/ResourceSections";
import ResourceGate from "@/components/ResourceGate";
import { resources, getResource } from "@/lib/resources";

export async function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = getResource(slug);
  if (!r) return {};
  return {
    title: r.metaTitle,
    description: r.metaDescription,
    keywords: [r.keyword],
    openGraph: {
      title: r.title,
      description: r.metaDescription,
      url: `https://medbpo360.com/resources/${r.slug}`,
    },
    alternates: { canonical: `https://medbpo360.com/resources/${r.slug}` },
  };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = getResource(slug);
  if (!r) notFound();

  return (
    <>
      <Nav />
      <main>
        <section
          style={{
            padding: "130px 24px 44px",
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, #dde7ee 0%, #f5f5f7 60%)",
          }}
        >
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#17a673", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 14 }}>
              Free Resource
            </p>
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
              {r.title}
            </h1>
            <p style={{ fontSize: 17, color: "#515154", lineHeight: 1.6, margin: 0 }}>
              {r.subtitle}
            </p>
          </div>
        </section>

        <section style={{ padding: "36px 24px 80px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            {r.intro.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                style={{ fontSize: 16.5, lineHeight: 1.7, color: "#3a3a3f", marginBottom: 16 }}
              >
                {paragraph}
              </p>
            ))}

            <div style={{ height: 20 }} />

            <ResourceSections sections={r.freeSections} />

            <ResourceGate slug={r.slug} remaining={r.gatedSections.length} />

            <div style={{ marginTop: 48, paddingTop: 28, borderTop: "1px solid #e8e8ed" }}>
              <p style={{ fontSize: 15, color: "#515154", lineHeight: 1.7, margin: "0 0 12px" }}>
                Working through this and want a second pair of eyes? We handle
                billing, credentialing, call center, and back-office operations
                for labs and diagnostic centers of any size.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                <Link href="/specialties/laboratory-diagnostics" style={{ color: "#17a673", textDecoration: "none", fontWeight: 600 }}>
                  Labs &amp; diagnostics support
                </Link>
                {"  ·  "}
                <Link href="/contact" style={{ color: "#17a673", textDecoration: "none", fontWeight: 600 }}>
                  Talk to our team
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
