import Link from "next/link";

export const metadata = { title: { absolute: "Home | Harborview Cardiology (Sample Site by medbpo360)" } };

const services = [
  { name: "Diagnostic Cardiology", desc: "Echocardiography, stress testing, and Holter monitoring to find out what's going on before it becomes an emergency." },
  { name: "Interventional Procedures", desc: "Cardiac catheterization, angioplasty, and stenting performed by physicians who do this every day." },
  { name: "Device Management", desc: "Pacemaker and ICD implantation, with remote monitoring so we catch issues between visits." },
  { name: "Preventive Cardiology", desc: "Risk assessment and lipid management built around keeping you out of the cath lab in the first place." },
];

const locations = [
  { name: "Downtown Cardiology Center", meta: "12 Physicians", status: "Accepting New Patients" },
  { name: "Northside Heart Institute", meta: "5 Physicians", status: "Accepting New Patients" },
  { name: "Riverside Cardiology", meta: "4 Physicians", status: "Waitlist Open" },
];

export default function HarborviewHome() {
  return (
    <main>
      {/* HERO */}
      <section style={{
        background: "radial-gradient(ellipse 90% 55% at 50% 0%, #dde7ee 0%, #ffffff 65%)",
        padding: "72px 24px 0", textAlign: "center",
      }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "#fff", border: "1px solid #dde3e8", borderRadius: 980,
            padding: "6px 14px 6px 10px", marginBottom: 22, boxShadow: "0 2px 10px rgba(15,43,70,0.06)",
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1l5 2v4c0 3.3-2.1 5.7-5 6.5-2.9-.8-5-3.2-5-6.5V3l5-2z" fill="#128a5e" /><path d="M4.7 7.1l1.5 1.5 3-3" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#0f2b46" }}>Board-Certified Team</span>
          </div>
          <p style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: 1.4, color: "#128a5e", textTransform: "uppercase", marginBottom: 14 }}>
            Cardiology &middot; 3 Locations
          </p>
          <h1 style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, letterSpacing: "-1.2px", color: "#0f2b46", lineHeight: 1.12, marginBottom: 18 }}>
            Advanced Heart Care, Close to Home
          </h1>
          <p style={{ fontSize: 17, color: "#5f6b76", lineHeight: 1.6, marginBottom: 30 }}>
            Board-certified cardiologists across three locations. Now accepting new patients.
          </p>
          <Link href="/demo/harborview/contact" style={{
            display: "inline-block", background: "#0f2b46", color: "#fff",
            fontSize: 15, fontWeight: 700, padding: "14px 30px", borderRadius: 8,
            textDecoration: "none", boxShadow: "0 8px 24px rgba(15,43,70,0.28)",
          }}>
            Request an Appointment
          </Link>
        </div>

        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            background: "#fff", border: "1px solid #e8ecf0", borderRadius: 16,
            marginTop: 34, transform: "translateY(30px)",
            boxShadow: "0 16px 40px -10px rgba(15,43,70,0.18)", overflow: "hidden",
          }}>
            {[["12", "Physicians"], ["3", "Locations"], ["Same-Week", "Appointments"]].map(([val, label]) => (
              <div key={label} style={{ padding: "24px 12px", textAlign: "center", borderRight: "1px solid #e8ecf0" }}>
                <div style={{ fontVariantNumeric: "tabular-nums", fontSize: 24, fontWeight: 800, color: "#0f2b46" }}>{val}</div>
                <div style={{ fontSize: 12, color: "#8a929a", marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ height: 64 }} />
      </section>

      {/* SERVICES TEASER */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: 1.4, color: "#128a5e", textTransform: "uppercase", marginBottom: 12 }}>
              What We Treat
            </p>
            <h2 style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 800, letterSpacing: "-0.8px", color: "#0f2b46" }}>
              Full-Spectrum Cardiac Care
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 20 }}>
            {services.map((s) => (
              <div key={s.name} style={{ background: "#f5f7f9", borderRadius: 14, padding: "26px 22px", borderTop: "3px solid #0f2b46" }}>
                <h3 style={{ fontSize: 15.5, fontWeight: 700, color: "#0f2b46", marginBottom: 10 }}>{s.name}</h3>
                <p style={{ fontSize: 13.5, color: "#5f6b76", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 34 }}>
            <Link href="/demo/harborview/services" style={{ fontSize: 14, fontWeight: 700, color: "#128a5e", textDecoration: "none" }}>
              See All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATIONS TEASER */}
      <section style={{ padding: "80px 24px", background: "#f5f7f9" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: 1.4, color: "#128a5e", textTransform: "uppercase", marginBottom: 12 }}>
              Find Us
            </p>
            <h2 style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 800, letterSpacing: "-0.8px", color: "#0f2b46" }}>
              Three Locations Across the Area
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 20 }}>
            {locations.map((l) => (
              <div key={l.name} style={{ background: "#fff", border: "1px solid #e8ecf0", borderRadius: 14, padding: "22px 20px" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f2b46", marginBottom: 6 }}>{l.name}</h3>
                <p style={{ fontSize: 12.5, color: "#8a929a", marginBottom: 12 }}>{l.meta}</p>
                <span style={{
                  fontSize: 11.5, fontWeight: 700, padding: "4px 10px", borderRadius: 6,
                  background: l.status === "Waitlist Open" ? "#fdf3d9" : "#e8f5ef",
                  color: l.status === "Waitlist Open" ? "#8a6d00" : "#128a5e",
                }}>
                  {l.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "90px 24px", background: "#0f2b46", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 800, letterSpacing: "-1px", color: "#fff", marginBottom: 16 }}>
          Now Accepting New Patients
        </h2>
        <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.75)", maxWidth: 440, margin: "0 auto 30px", lineHeight: 1.6 }}>
          Same-week appointments available at most locations.
        </p>
        <Link href="/demo/harborview/contact" style={{
          display: "inline-block", background: "#128a5e", color: "#fff",
          fontSize: 15, fontWeight: 700, padding: "14px 32px", borderRadius: 8, textDecoration: "none",
        }}>
          Request an Appointment
        </Link>
      </section>
    </main>
  );
}
