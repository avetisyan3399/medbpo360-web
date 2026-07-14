import { ImageResponse } from "next/og";

export const alt = "medbpo360 — Enterprise Medical Billing, RCM & BPO Outsourcing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div
            style={{
              display: "flex",
              fontSize: 60,
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: -2,
              color: "#ffffff",
            }}
          >
            Revenue cycle that scales with you.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 24,
              lineHeight: 1.5,
              color: "#b9c6d3",
              maxWidth: 780,
            }}
          >
            Standardized billing, credentialing, and back-office outsourcing for growing practices, MSOs, and health systems.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["Medical Billing & RCM", "Credentialing & Enrollment", "Call Center", "BPO"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                fontSize: 16,
                fontWeight: 600,
                color: "#dce6ee",
                padding: "10px 18px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.22)",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
