export const metadata = { title: { absolute: "Services | Willow Creek Family Medicine (Sample Site by medbpo360)" } };

const services = [
  {
    name: "Annual Wellness Visits",
    desc: "A yearly check-in to catch small things before they become big ones — not just a form to sign.",
    items: ["Full physical exam", "Health history review", "Screening recommendations by age"],
  },
  {
    name: "Chronic Care Management",
    desc: "Ongoing support for conditions that need regular attention, not just a prescription refill.",
    items: ["Diabetes management", "Blood pressure management", "Regular check-ins between visits"],
  },
  {
    name: "Same-Day Sick Visits",
    desc: "Feeling under the weather? We hold same-day slots every day for exactly this.",
    items: ["Cold, flu, and infections", "Minor injuries", "Same-day scheduling by phone or online"],
  },
  {
    name: "Preventive Care & Screenings",
    desc: "Timed to your age and health history, not a generic checklist.",
    items: ["Vaccinations, all ages", "Cancer and cardiovascular screenings", "Well-child visits"],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section style={{ padding: "72px 24px 24px", background: "#fff", textAlign: "center" }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: "#b3667a", marginBottom: 14 }}>
          How We Can Help
        </p>
        <h1 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, color: "#4a3c2e", marginBottom: 16 }}>
          Care for Every Stage of Life
        </h1>
        <p style={{ fontSize: 15.5, color: "#8a7a68", maxWidth: 520, margin: "0 auto", lineHeight: 1.65 }}>
          From a first checkup to managing a lifelong condition, one team follows your family through all of it.
        </p>
      </section>

      <section style={{ padding: "48px 24px 90px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20 }}>
          {services.map((s) => (
            <div key={s.name} style={{
              background: "#f9f4ec", borderRadius: 18, padding: "30px 28px",
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24,
            }}>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#4a3c2e", marginBottom: 8 }}>{s.name}</h3>
                <p style={{ fontSize: 14, color: "#8a7a68", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {s.items.map((item) => (
                  <li key={item} style={{ fontSize: 13.5, color: "#4a3c2e", display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#b3667a", flexShrink: 0 }} />
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
