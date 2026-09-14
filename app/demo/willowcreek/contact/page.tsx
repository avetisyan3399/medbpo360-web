import ContactForm from "../_components/ContactForm";

export const metadata = { title: { absolute: "Contact | Willow Creek Family Medicine (Sample Site by medbpo360)" } };

export default function ContactPage() {
  return (
    <main>
      <section style={{ padding: "72px 24px 24px", background: "#fff", textAlign: "center" }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: "#b3667a", marginBottom: 14 }}>
          Get In Touch
        </p>
        <h1 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, color: "#4a3c2e", marginBottom: 16 }}>
          Book a Visit
        </h1>
        <p style={{ fontSize: 15.5, color: "#8a7a68", maxWidth: 480, margin: "0 auto", lineHeight: 1.65 }}>
          Same-day sick visits most days. Fill out the form below and we&apos;ll call you back.
        </p>
      </section>

      <section style={{ padding: "48px 24px 90px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, alignItems: "start" }}>
          <ContactForm />
          <div style={{ background: "#f9f4ec", borderRadius: 20, padding: "28px 24px" }}>
            <h3 style={{ fontSize: 13, fontWeight: 800, color: "#4a3c2e", textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 16 }}>
              Prefer to Call?
            </h3>
            <div style={{ fontSize: 14.5, fontWeight: 700, color: "#4a3c2e", marginBottom: 6 }}>
              Willow Creek Family Medicine
            </div>
            <div style={{ fontSize: 14, color: "#8a7a68", marginBottom: 4 }}>(555) 340-2100</div>
            <div style={{ fontSize: 14, color: "#8a7a68" }}>214 Willow Creek Lane, Suite 2</div>
          </div>
        </div>
      </section>
    </main>
  );
}
