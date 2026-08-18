import { ImageResponse } from "next/og";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

// Without this, every blog article falls back to the site-wide card in
// app/opengraph-image.tsx — so a run of shared posts renders as a wall of
// identical previews on Facebook, LinkedIn, and X.

export const alt = "medbpo360 blog article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

// Satori has no text measurement, so long headlines can't wrap-to-fit on their
// own. These breakpoints keep the longest real titles inside three lines.
function titleSize(title: string): number {
  if (title.length <= 45) return 64;
  if (title.length <= 75) return 54;
  return 46;
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  const title = post?.title ?? "medbpo360";
  const category = post?.category ?? "Revenue Cycle Management";
  const readTime = post?.readTime;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(circle at 15% 15%, #163a5c 0%, #0f2b46 45%, #0a1d30 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#ffffff", letterSpacing: -1 }}>
          Med<span style={{ color: "#17a673" }}>BPO360</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#17a673",
              marginBottom: 22,
            }}
          >
            {category}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: titleSize(title),
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: -1.5,
              color: "#ffffff",
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 20, color: "#b9c6d3" }}>
          <div style={{ display: "flex" }}>medbpo360.com/blog</div>
          {readTime ? (
            <>
              <div style={{ display: "flex", color: "#4a5c6e" }}>·</div>
              <div style={{ display: "flex" }}>{readTime}</div>
            </>
          ) : null}
        </div>
      </div>
    ),
    { ...size }
  );
}
