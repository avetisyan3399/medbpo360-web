export const metadata = { title: { absolute: "About Our Team | Willow Creek Family Medicine (Sample Site by medbpo360)" } };

const providers = [
  { initials: "ET", name: "Dr. Elena Torres, MD", role: "Family Medicine", bio: "Has cared for Willow Creek families for over a decade — newborn visits, chronic care, and everything between." },
  { initials: "JW", name: "Dr. James Whitfield, MD", role: "Family Medicine", bio: "Believes the best care starts with really listening. Sees patients of every age, from kids to grandparents." },
  { initials: "PN", name: "Priya Nair, NP", role: "Family Nurse Practitioner", bio: "Focused on preventive care and helping patients build habits that actually stick." },
  { initials: "SO", name: "Dr. Sam O'Connor, MD", role: "Family Medicine", bio: "Holds same-day slots for sick visits, because sometimes you just need to be seen today." },
];

export default function AboutPage() {
  return (
    <main>
      <section style={{ padding: "72px 24px 24px", background: "#fff", textAlign: "center" }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: "#b3667a", marginBottom: 14 }}>
          Meet the Team
        </p>
        <h1 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, color: "#4a3c2e", marginBottom: 16 }}>
          Doctors Who Take the Time to Listen
        </h1>
        <p style={{ fontSize: 15.5, color: "#8a7a68", maxWidth: 520, margin: "0 auto", lineHeight: 1.65 }}>
          Four familiar faces, one small practice — no rotating providers, no rushed visits.
        </p>
      </section>

      <section style={{ padding: "48px 24px 90px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 22 }}>
          {providers.map((p) => (
            <div key={p.name} style={{ background: "#f9f4ec", borderRadius: 18, padding: "28px 24px" }}>
              <div style={{
                width: 52, height: 52, borderRadius: "50%", background: "#f1dfe2",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, fontWeight: 800, color: "#b3667a", marginBottom: 16,
              }}>
                {p.initials}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: "#4a3c2e", marginBottom: 4 }}>{p.name}</h3>
              <p style={{ fontSize: 12.5, fontWeight: 700, color: "#b3667a", marginBottom: 12 }}>{p.role}</p>
              <p style={{ fontSize: 13.5, color: "#8a7a68", lineHeight: 1.6 }}>{p.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
