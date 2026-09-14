import ContactForm from "../_components/ContactForm";

export const metadata = { title: { absolute: "Contact | Harborview Cardiology (Sample Site by medbpo360)" } };

export default function ContactPage() {
  return (
    <main>
      <section style={{ padding: "72px 24px 24px", background: "#fff", textAlign: "center" }}>
        <p style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: 1.4, color: "#128a5e", textTransform: "uppercase", marginBottom: 14 }}>
          Get In Touch
        </p>
        <h1 style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "clamp(28px, 4.5vw, 42px)", fontWeight: 800, letterSpacing: "-1px", color: "#0f2b46", marginBottom: 16 }}>
          Request an Appointment
        </h1>
        <p style={{ fontSize: 16, color: "#5f6b76", maxWidth: 520, margin: "0 auto", lineHeight: 1.65 }}>
          Same-week appointments available at most locations. Fill out the form below and our front desk will reach out.
        </p>
      </section>

      <section style={{ padding: "48px 24px 90px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 1.3fr) minmax(0, 1fr)", gap: 40, alignItems: "start" }}>
          <ContactForm />
          <div style={{ background: "#f5f7f9", borderRadius: 16, padding: "28px 24px" }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "#0f2b46", textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 18 }}>
              Prefer to Call?
            </h3>
            {[
              { name: "Downtown Cardiology Center", phone: "(555) 201-4400" },
              { name: "Northside Heart Institute", phone: "(555) 201-4420" },
              { name: "Riverside Cardiology", phone: "(555) 201-4440" },
            ].map((l) => (
              <div key={l.name} style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: "#1d1d1f" }}>{l.name}</div>
                <div style={{ fontSize: 13.5, color: "#5f6b76" }}>{l.phone}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
