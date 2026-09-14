import Link from "next/link";

export default function DemoBanner() {
  return (
    <div style={{ background: "#fdf3d9", borderBottom: "1px solid #f0dfa0", padding: "10px 24px" }}>
      <div style={{
        maxWidth: 1140, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: 8, flexWrap: "wrap", textAlign: "center",
      }}>
        <span style={{ fontSize: 13, color: "#6b5a1f" }}>
          This is a sample site built by medbpo360 — Harborview Cardiology is not a real practice.
        </span>
        <Link href="/style-directions" style={{ fontSize: 13, fontWeight: 700, color: "#8a6d00", textDecoration: "underline" }}>
          See how we build these →
        </Link>
      </div>
    </div>
  );
}
