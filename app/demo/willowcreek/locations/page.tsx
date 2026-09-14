export const metadata = { title: { absolute: "Visit Us | Willow Creek Family Medicine (Sample Site by medbpo360)" } };

export default function LocationsPage() {
  return (
    <main>
      <section style={{ padding: "72px 24px 24px", background: "#fff", textAlign: "center" }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: "#b3667a", marginBottom: 14 }}>
          Come See Us
        </p>
        <h1 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, color: "#4a3c2e", marginBottom: 16 }}>
          Visit Us
        </h1>
        <p style={{ fontSize: 15.5, color: "#8a7a68", maxWidth: 480, margin: "0 auto", lineHeight: 1.65 }}>
          One location, easy to find, with parking right out front.
        </p>
      </section>

      <section style={{ padding: "48px 24px 90px", background: "#fff" }}>
        <div style={{
          maxWidth: 720, margin: "0 auto", background: "#f9f4ec", borderRadius: 24,
          overflow: "hidden", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}>
          <div style={{
            minHeight: 220, background: "linear-gradient(135deg, #f1dfe2 0%, #f9f4ec 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#a3937f" }}>Map placeholder</span>
          </div>
          <div style={{ padding: "32px 28px" }}>
            <h3 style={{ fontSize: 19, fontWeight: 800, color: "#4a3c2e", marginBottom: 10 }}>
              Willow Creek Family Medicine
            </h3>
            <p style={{ fontSize: 14, color: "#8a7a68", marginBottom: 4, lineHeight: 1.6 }}>214 Willow Creek Lane, Suite 2</p>
            <p style={{ fontSize: 14, color: "#8a7a68", marginBottom: 4, lineHeight: 1.6 }}>(555) 340-2100</p>
            <p style={{ fontSize: 14, color: "#8a7a68", marginBottom: 18, lineHeight: 1.6 }}>Mon–Fri, 8am–5:30pm · Sat, 9am–1pm</p>
            <span style={{
              display: "inline-block", fontSize: 12.5, fontWeight: 800, padding: "6px 14px", borderRadius: 980,
              background: "#f1dfe2", color: "#b3667a",
            }}>
              Accepting New Patients
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
