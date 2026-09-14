export const metadata = { title: { absolute: "Services | Harborview Cardiology (Sample Site by medbpo360)" } };

const services = [
  {
    name: "Diagnostic Cardiology",
    desc: "Non-invasive testing to find out what's going on before it becomes an emergency.",
    items: ["Echocardiography", "Stress testing", "Holter and event monitoring", "EKG"],
  },
  {
    name: "Interventional Procedures",
    desc: "Catheter-based procedures performed by physicians who do this every day, not occasionally.",
    items: ["Cardiac catheterization", "Angioplasty", "Coronary stenting"],
  },
  {
    name: "Device Management",
    desc: "Implantation and ongoing monitoring for patients who need more than medication.",
    items: ["Pacemaker implantation", "ICD implantation", "Remote device monitoring"],
  },
  {
    name: "Preventive Cardiology",
    desc: "Built around keeping you out of the cath lab in the first place.",
    items: ["Cardiovascular risk assessment", "Lipid management", "Hypertension management"],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section style={{ padding: "72px 24px 24px", background: "#fff", textAlign: "center" }}>
        <p style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: 1.4, color: "#128a5e", textTransform: "uppercase", marginBottom: 14 }}>
          What We Treat
        </p>
        <h1 style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "clamp(28px, 4.5vw, 42px)", fontWeight: 800, letterSpacing: "-1px", color: "#0f2b46", marginBottom: 16 }}>
          Cardiology Services
        </h1>
        <p style={{ fontSize: 16, color: "#5f6b76", maxWidth: 560, margin: "0 auto", lineHeight: 1.65 }}>
          From a first EKG to device management, one team follows you through every stage of cardiac care.
        </p>
      </section>

      <section style={{ padding: "48px 24px 90px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20 }}>
          {services.map((s) => (
            <div key={s.name} style={{
              border: "1px solid #e8ecf0", borderRadius: 16, padding: "30px 28px",
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24,
            }}>
              <div>
                <h3 style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: 19, fontWeight: 800, color: "#0f2b46", marginBottom: 8 }}>{s.name}</h3>
                <p style={{ fontSize: 14, color: "#5f6b76", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {s.items.map((item) => (
                  <li key={item} style={{ fontSize: 13.5, color: "#1d1d1f", display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#128a5e", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
