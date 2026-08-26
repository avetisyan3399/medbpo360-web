import type { ResourceSection } from "@/lib/resources";

/**
 * Renders resource sections identically whether they arrived server-side (the
 * free portion) or from the API after the gate (the rest), so the two halves
 * are visually indistinguishable to a reader who unlocks it.
 */
export default function ResourceSections({ sections }: { sections: ResourceSection[] }) {
  return (
    <>
      {sections.map(({ heading, body, verify }) => (
        <div key={heading} style={{ marginBottom: 44 }}>
          <h2
            style={{
              fontSize: 21,
              fontWeight: 700,
              letterSpacing: "-0.4px",
              color: "#0a0a0f",
              marginBottom: 14,
              lineHeight: 1.3,
            }}
          >
            {heading}
          </h2>
          {body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              style={{ fontSize: 15.5, lineHeight: 1.7, color: "#3a3a3f", marginBottom: 14 }}
            >
              {paragraph}
            </p>
          ))}
          {verify && (
            <div
              style={{
                background: "#f5f5f7",
                borderLeft: "3px solid #17a673",
                borderRadius: "0 12px 12px 0",
                padding: "14px 18px",
                marginTop: 16,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#17a673",
                  textTransform: "uppercase",
                  letterSpacing: 1.2,
                  marginBottom: 6,
                }}
              >
                Verify
              </div>
              <div style={{ fontSize: 14.5, lineHeight: 1.65, color: "#3a3a3f" }}>{verify}</div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
