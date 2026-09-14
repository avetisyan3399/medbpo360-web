import Link from "next/link";

export default function WillowCreekFooter() {
  return (
    <footer style={{ background: "#4a3c2e", color: "#fff", padding: "56px 24px 28px" }}>
      <div style={{
        maxWidth: 1140, margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40,
        paddingBottom: 36, borderBottom: "1px solid rgba(255,255,255,0.12)",
      }}>
        <div>
          <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 18, fontWeight: 800 }}>
            Willow Creek <span style={{ color: "#e0a3b3" }}>Family Medicine</span>
          </span>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 12, maxWidth: 280 }}>
            One trusted practice for your whole family. Now welcoming new patients of all ages.
          </p>
        </div>
        <div>
          <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>
            Visit Us
          </div>
          <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13.5, color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}>
            214 Willow Creek Lane<br />
            Suite 2<br />
            (555) 340-2100
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>
            Site
          </div>
          {[
            { label: "About", href: "/demo/willowcreek/about" },
            { label: "Services", href: "/demo/willowcreek/services" },
            { label: "Visit Us", href: "/demo/willowcreek/locations" },
            { label: "Contact", href: "/demo/willowcreek/contact" },
          ].map((l) => (
            <div key={l.href} style={{ marginBottom: 8 }}>
              <Link href={l.href} style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13.5, color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>{l.label}</Link>
            </div>
          ))}
        </div>
      </div>
      <div style={{
        maxWidth: 1140, margin: "0 auto", paddingTop: 22,
        display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10,
      }}>
        <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
          &copy; 2026 Willow Creek Family Medicine. A fictional practice.
        </span>
        <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
          Sample site built by{" "}
          <Link href="/services/web-design-social-media" style={{ color: "#e0a3b3", textDecoration: "none" }}>
            medbpo360
          </Link>
        </span>
      </div>
    </footer>
  );
}
