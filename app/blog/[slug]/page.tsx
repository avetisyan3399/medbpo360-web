import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.keyword, "medbpo360"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://medbpo360.com/blog/${slug}`,
      type: "article",
    },
    alternates: { canonical: `https://medbpo360.com/blog/${slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main>
        <article>
          <section style={{
            paddingTop: 140, paddingBottom: 40,
            paddingLeft: 24, paddingRight: 24,
            background: "radial-gradient(ellipse 80% 50% at 50% 0%, #dde7ee 0%, #ffffff 60%)",
          }}>
            <div style={{ maxWidth: 720, margin: "0 auto" }}>
              <Link href="/blog" style={{ fontSize: 13, color: "#0f2b46", fontWeight: 600, textDecoration: "none" }}>
                ← Back to Blog
              </Link>
              <Link
                href={`/blog?category=${encodeURIComponent(post.category)}`}
                style={{ display: "inline-block", fontSize: 12, fontWeight: 600, color: "#17a673", textTransform: "uppercase", letterSpacing: 1, margin: "24px 0 12px", textDecoration: "none" }}
              >
                {post.category}
              </Link>
              <h1 style={{
                fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 700,
                letterSpacing: "-1.5px", lineHeight: 1.15, color: "#0a0a0f",
                marginBottom: 20,
              }}>
                {post.title}
              </h1>
              <div style={{ fontSize: 13, color: "#86868b" }}>
                {post.author} · {post.readTime}
              </div>
            </div>
          </section>

          <section style={{ padding: "40px 24px 100px", background: "#fff" }}>
            <div
              className="prose-blog"
              style={{ maxWidth: 720, margin: "0 auto" }}
              dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
            />
          </section>
        </article>

        <section style={{ padding: "80px 24px", background: "#0f2b46", textAlign: "center", color: "#fff" }}>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-1.5px", marginBottom: 16 }}>
            Ready to talk about your organization?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", maxWidth: 440, margin: "0 auto 32px", lineHeight: 1.6 }}>
            Let&apos;s walk through where you are today and where we can help.
          </p>
          <Link href="/contact" style={{
            display: "inline-block", padding: "14px 32px",
            borderRadius: 980, background: "#17a673",
            color: "#fff", fontSize: 15, fontWeight: 700, textDecoration: "none",
          }}>
            Get a Free Assessment
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
