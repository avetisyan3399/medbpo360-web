import Link from "next/link";

export const metadata = { title: { absolute: "Home | Willow Creek Family Medicine (Sample Site by medbpo360)" } };

const services = [
  { name: "Annual Wellness Visits", desc: "A yearly check-in to catch small things before they become big ones." },
  { name: "Chronic Care Management", desc: "Ongoing support for diabetes, high blood pressure, and other conditions that need regular attention." },
  { name: "Same-Day Sick Visits", desc: "Feeling under the weather? We hold same-day slots every day for exactly this." },
  { name: "Preventive Care & Screenings", desc: "Vaccinations and screenings timed to your age and health history, not a generic schedule." },
];

export default function WillowCreekHome() {
  return (
    <main>
      {/* HERO */}
      <section style={{ background: "#f9f4ec", padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#b3667a", marginBottom: 14 }}>
            Family Medicine
          </p>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 46px)", fontWeight: 800, color: "#4a3c2e", lineHeight: 1.2, marginBottom: 18 }}>
            Health Care That Feels Like Family
          </h1>
          <p style={{ fontSize: 17, color: "#8a7a68", lineHeight: 1.6, marginBottom: 30 }}>
            One trusted practice for your whole family — same-day visits, same familiar faces.
          </p>
          <Link href="/demo/willowcreek/contact" style={{
            display: "inline-block", background: "#b3667a", color: "#fff",
            fontSize: 15, fontWeight: 800, padding: "14px 32px", borderRadius: 980, textDecoration: "none",
          }}>
            Book a Visit
          </Link>
          <p style={{ fontSize: 13, color: "#a3937f", fontWeight: 700, marginTop: 20 }}>
            Now welcoming new patients of all ages
          </p>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#b3667a", marginBottom: 10 }}>
              How We Can Help
            </p>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "#4a3c2e" }}>
              Care for Every Stage of Life
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 20 }}>
            {services.map((s) => (
              <div key={s.name} style={{ background: "#f9f4ec", borderRadius: 18, padding: "26px 22px" }}>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: "#4a3c2e", marginBottom: 10 }}>{s.name}</h3>
                <p style={{ fontSize: 13.5, color: "#8a7a68", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/demo/willowcreek/services" style={{ fontSize: 14, fontWeight: 800, color: "#b3667a", textDecoration: "none" }}>
              See All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* PROVIDERS TEASER */}
      <section style={{ padding: "80px 24px", background: "#f9f4ec", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#b3667a", marginBottom: 10 }}>
            Meet the Team
          </p>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "#4a3c2e", marginBottom: 16 }}>
            Doctors Who Take the Time to Listen
          </h2>
          <p style={{ fontSize: 15, color: "#8a7a68", lineHeight: 1.7, marginBottom: 28 }}>
            Four familiar faces, one small practice — no rotating providers, no rushed visits.
          </p>
          <Link href="/demo/willowcreek/about" style={{
            display: "inline-block", fontSize: 14, fontWeight: 800, color: "#fff",
            background: "#4a3c2e", padding: "12px 26px", borderRadius: 980, textDecoration: "none",
          }}>
            Meet the Team
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "90px 24px", background: "#fff", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 800, color: "#4a3c2e", marginBottom: 16 }}>
          New Patients Always Welcome
        </h2>
        <p style={{ fontSize: 15.5, color: "#8a7a68", maxWidth: 420, margin: "0 auto 28px", lineHeight: 1.6 }}>
          Same-day sick visits, most days. Come as you are.
        </p>
        <Link href="/demo/willowcreek/contact" style={{
          display: "inline-block", background: "#b3667a", color: "#fff",
          fontSize: 15, fontWeight: 800, padding: "14px 32px", borderRadius: 980, textDecoration: "none",
        }}>
          Book a Visit
        </Link>
      </section>
    </main>
  );
}
