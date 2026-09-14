export const metadata = { title: { absolute: "About Our Providers | Harborview Cardiology (Sample Site by medbpo360)" } };

const providers = [
  { initials: "SL", name: "Dr. Sarah Lin, MD, FACC", role: "Interventional Cardiology", bio: "Board-certified in cardiovascular disease and interventional cardiology, with a focus on complex catheterization and stenting." },
  { initials: "MR", name: "Dr. Marcus Reyes, MD, FACC", role: "Clinical Cardiology", bio: "Board-certified cardiologist focused on preventive care, risk assessment, and long-term management of heart disease." },
  { initials: "AK", name: "Dr. Anjali Kapoor, MD", role: "Electrophysiology", bio: "Specializes in device management — pacemakers, ICDs, and remote monitoring for patients with arrhythmias." },
  { initials: "DP", name: "Dr. David Park, MD, FACC", role: "Diagnostic Cardiology", bio: "Focused on echocardiography and non-invasive diagnostics, working closely with referring physicians on early detection." },
];

export default function AboutPage() {
  return (
    <main>
      <section style={{ padding: "72px 24px 24px", background: "#fff", textAlign: "center" }}>
        <p style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: 1.4, color: "#128a5e", textTransform: "uppercase", marginBottom: 14 }}>
          Our Team
        </p>
        <h1 style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "clamp(28px, 4.5vw, 42px)", fontWeight: 800, letterSpacing: "-1px", color: "#0f2b46", marginBottom: 16 }}>
          Meet Our Cardiologists
        </h1>
        <p style={{ fontSize: 16, color: "#5f6b76", maxWidth: 560, margin: "0 auto", lineHeight: 1.65 }}>
          Every physician at Harborview is board-certified and affiliated with a regional hospital network, across our three locations.
        </p>
      </section>

      <section style={{ padding: "48px 24px 90px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 22 }}>
          {providers.map((p) => (
            <div key={p.name} style={{ border: "1px solid #e8ecf0", borderRadius: 16, padding: "28px 24px" }}>
              <div style={{
                width: 52, height: 52, borderRadius: "50%", background: "#e8eef4",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Libre Franklin', sans-serif", fontSize: 16, fontWeight: 800, color: "#0f2b46",
                marginBottom: 16,
              }}>
                {p.initials}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f2b46", marginBottom: 4 }}>{p.name}</h3>
              <p style={{ fontSize: 12.5, fontWeight: 700, color: "#128a5e", marginBottom: 12 }}>{p.role}</p>
              <p style={{ fontSize: 13.5, color: "#5f6b76", lineHeight: 1.6 }}>{p.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
