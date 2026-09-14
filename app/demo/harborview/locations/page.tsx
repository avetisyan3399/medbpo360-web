export const metadata = { title: { absolute: "Locations | Harborview Cardiology (Sample Site by medbpo360)" } };

const locations = [
  { name: "Downtown Cardiology Center", address: "142 Harbor St, Suite 400", meta: "12 Physicians", status: "Accepting New Patients", hours: "Mon–Fri, 8am–5pm", phone: "(555) 201-4400" },
  { name: "Northside Heart Institute", address: "88 Ridgeline Ave, Suite 210", meta: "5 Physicians", status: "Accepting New Patients", hours: "Mon–Fri, 8am–5pm", phone: "(555) 201-4420" },
  { name: "Riverside Cardiology", address: "310 Riverside Pkwy, Suite 120", meta: "4 Physicians", status: "Waitlist Open", hours: "Mon–Thu, 8am–4:30pm", phone: "(555) 201-4440" },
];

export default function LocationsPage() {
  return (
    <main>
      <section style={{ padding: "72px 24px 24px", background: "#fff", textAlign: "center" }}>
        <p style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: 1.4, color: "#128a5e", textTransform: "uppercase", marginBottom: 14 }}>
          Find Us
        </p>
        <h1 style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "clamp(28px, 4.5vw, 42px)", fontWeight: 800, letterSpacing: "-1px", color: "#0f2b46", marginBottom: 16 }}>
          Our Locations
        </h1>
        <p style={{ fontSize: 16, color: "#5f6b76", maxWidth: 560, margin: "0 auto", lineHeight: 1.65 }}>
          Three locations across the area, each with its own front desk and scheduling — same standard of care at every site.
        </p>
      </section>

      <section style={{ padding: "48px 24px 90px", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 22 }}>
          {locations.map((l) => (
            <div key={l.name} style={{ border: "1px solid #e8ecf0", borderRadius: 16, overflow: "hidden" }}>
              <div style={{
                height: 120, background: "linear-gradient(135deg, #dde7ee 0%, #f5f7f9 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#8a929a" }}>Map placeholder</span>
              </div>
              <div style={{ padding: "22px 20px" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f2b46", marginBottom: 8 }}>{l.name}</h3>
                <p style={{ fontSize: 13, color: "#5f6b76", marginBottom: 4 }}>{l.address}</p>
                <p style={{ fontSize: 13, color: "#5f6b76", marginBottom: 4 }}>{l.phone}</p>
                <p style={{ fontSize: 13, color: "#5f6b76", marginBottom: 14 }}>{l.hours}</p>
                <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                  <span style={{ fontSize: 11.5, fontWeight: 700, color: "#8a929a" }}>{l.meta}</span>
                  <span style={{
                    fontSize: 11.5, fontWeight: 700, padding: "4px 10px", borderRadius: 6,
                    background: l.status === "Waitlist Open" ? "#fdf3d9" : "#e8f5ef",
                    color: l.status === "Waitlist Open" ? "#8a6d00" : "#128a5e",
                  }}>
                    {l.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
