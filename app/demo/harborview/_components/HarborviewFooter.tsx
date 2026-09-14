import Link from "next/link";

export default function HarborviewFooter() {
  return (
    <footer style={{ background: "#0f2b46", color: "#fff", padding: "56px 24px 28px" }}>
      <div style={{
        maxWidth: 1140, margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40,
        paddingBottom: 36, borderBottom: "1px solid rgba(255,255,255,0.12)",
      }}>
        <div>
          <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: 18, fontWeight: 800 }}>
            Harborview <span style={{ color: "#3ecf99" }}>Cardiology</span>
          </span>
          <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginTop: 12, maxWidth: 280 }}>
            Board-certified cardiologists across three locations. Now accepting new patients.
          </p>
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>
            Locations
          </div>
          {["Downtown Cardiology Center", "Northside Heart Institute", "Riverside Cardiology"].map((l) => (
            <div key={l} style={{ fontSize: 13.5, color: "rgba(255,255,255,0.75)", marginBottom: 8 }}>{l}</div>
          ))}
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>
            Site
          </div>
          {[
            { label: "About", href: "/demo/harborview/about" },
            { label: "Services", href: "/demo/harborview/services" },
            { label: "Locations", href: "/demo/harborview/locations" },
            { label: "Contact", href: "/demo/harborview/contact" },
          ].map((l) => (
            <div key={l.href} style={{ marginBottom: 8 }}>
              <Link href={l.href} style={{ fontSize: 13.5, color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>{l.label}</Link>
            </div>
          ))}
        </div>
      </div>
      <div style={{
        maxWidth: 1140, margin: "0 auto", paddingTop: 22,
        display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10,
      }}>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
          &copy; 2026 Harborview Cardiology. A fictional practice.
        </span>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
          Sample site built by{" "}
          <Link href="/services/web-design-social-media" style={{ color: "#3ecf99", textDecoration: "none" }}>
            medbpo360
          </Link>
        </span>
      </div>
    </footer>
  );
}
