import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getPostsByCategory, CATEGORIES } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Enterprise Revenue Cycle & Healthcare Operations Insights",
  description:
    "Insights on revenue cycle management, credentialing, and back-office operations for health systems, MSOs, and large medical groups.",
  alternates: {
    canonical: "https://medbpo360.com/blog",
  },
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const activeCategory = category ?? "All";
  const posts = getPostsByCategory(activeCategory);

  return (
    <>
      <Nav />
      <main>
        <section
          style={{
            paddingTop: 140,
            paddingBottom: 60,
            paddingLeft: 24,
            paddingRight: 24,
            textAlign: "center",
            background: "radial-gradient(ellipse 80% 50% at 50% 0%, #dde7ee 0%, #ffffff 60%)",
          }}
        >
          <p style={{ fontSize: 13, fontWeight: 600, color: "#0f2b46", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16 }}>
            Insights
          </p>
          <h1 style={{
            fontSize: "clamp(32px, 6vw, 64px)", fontWeight: 700,
            letterSpacing: "-2.5px", lineHeight: 1.06, color: "#0a0a0f",
            maxWidth: 700, margin: "0 auto 24px",
          }}>
            Revenue cycle & operations, explained.
          </h1>
          <p style={{ fontSize: 17, color: "#515154", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.65 }}>
            Practical guidance on billing, credentialing, and back-office operations for organizations running at scale.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {CATEGORIES.map((c) => (
              <Link
                key={c}
                href={c === "All" ? "/blog" : `/blog?category=${encodeURIComponent(c)}`}
                style={{
                  padding: "8px 18px",
                  borderRadius: 980,
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: "none",
                  border: activeCategory === c ? "1px solid #0f2b46" : "1px solid #d2d2d7",
                  background: activeCategory === c ? "#0f2b46" : "#fff",
                  color: activeCategory === c ? "#fff" : "#515154",
                }}
              >
                {c}
              </Link>
            ))}
          </div>
        </section>

        <section style={{ padding: "40px 24px 120px", background: "#fff" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            {posts.length === 0 ? (
              <div style={{
                textAlign: "center",
                padding: "80px 24px",
                background: "#f5f5f7",
                borderRadius: 24,
              }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>✍️</div>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0a0a0f", marginBottom: 10, letterSpacing: "-0.3px" }}>
                  More insights coming soon.
                </h2>
                <p style={{ fontSize: 15, color: "#515154", maxWidth: 420, margin: "0 auto", lineHeight: 1.6 }}>
                  We&apos;re building out our library on enterprise revenue cycle management, credentialing, and back-office operations. Check back soon — or{" "}
                  <Link href="/contact" style={{ color: "#0f2b46", fontWeight: 600, textDecoration: "none" }}>
                    talk to our team
                  </Link>{" "}
                  directly in the meantime.
                </p>
              </div>
            ) : (
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 24,
              }}>
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    style={{
                      display: "block",
                      background: "#f5f5f7",
                      borderRadius: 20,
                      padding: "28px 24px",
                      textDecoration: "none",
                      border: "1px solid #e8e8ed",
                    }}
                  >
                    <p style={{ fontSize: 11, fontWeight: 600, color: "#17a673", textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 10 }}>
                      {post.category}
                    </p>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0a0a0f", letterSpacing: "-0.3px", marginBottom: 10, lineHeight: 1.3 }}>
                      {post.title}
                    </h3>
                    <p style={{ fontSize: 14, color: "#515154", lineHeight: 1.6, marginBottom: 16 }}>
                      {post.excerpt}
                    </p>
                    <div style={{ fontSize: 12, color: "#86868b" }}>
                      {post.author} · {post.readTime}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
