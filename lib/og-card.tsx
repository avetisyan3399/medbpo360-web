import { ImageResponse } from "next/og";

// One social preview card for every route that needs one.
//
// Why this exists: a route whose generateMetadata sets `openGraph` REPLACES the
// parent's openGraph wholesale, images included (see the Merging section of
// next/dist/docs/01-app/03-api-reference/04-functions/generate-metadata.md). So
// every page that set its own openGraph silently lost the site-wide card from
// app/opengraph-image.tsx and shared as a bare text link.
//
// File-based metadata outranks generateMetadata, so an opengraph-image file in
// the same segment wins without touching that route's metadata at all. Each
// segment gets a small opengraph-image.tsx that calls ogCard() with its own text.

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

// Satori has no text measurement, so headlines can't wrap-to-fit on their own.
// These breakpoints keep the longest real titles on the site inside three lines.
function titleSize(title: string): number {
  if (title.length <= 45) return 64;
  if (title.length <= 75) return 54;
  return 46;
}

export type OgCard = {
  /** Small green label above the title — section, category, or specialty. */
  eyebrow: string;
  title: string;
  /** Optional supporting line under the title. */
  subtitle?: string;
  /** Bottom-left text. Defaults to the bare domain. */
  footer?: string;
};

export function ogCard({ eyebrow, title, subtitle, footer }: OgCard) {
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
            {eyebrow}
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
          {subtitle ? (
            <div
              style={{
                display: "flex",
                marginTop: 24,
                fontSize: 26,
                lineHeight: 1.45,
                color: "#b9c6d3",
                maxWidth: 880,
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", fontSize: 20, color: "#b9c6d3" }}>
          {footer ?? "medbpo360.com"}
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
