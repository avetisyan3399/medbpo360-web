"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const services = [
  "Call Center Services",
  "Medical Billing & RCM",
  "Credentialing & Payer Enrollment",
  "Full-Scale BPO / Back-Office Outsourcing",
  "Not sure — I need a consultation",
];

const orgTypeOptions = [
  "Health System",
  "MSO / PE-Backed Group",
  "Ambulatory Surgery Center",
  "Multi-Site Medical Group",
  "Hospital-Based Physician Group",
  "Other",
];

const providerCountOptions = [
  "1–10 providers",
  "11–50 providers",
  "51–150 providers",
  "150+ providers",
];

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 600,
  color: "#515154",
  textTransform: "uppercase",
  letterSpacing: 0.8,
  marginBottom: 8,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid #d2d2d7",
  background: "#fff",
  fontSize: 14,
  color: "#0a0a0f",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit",
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", organization: "", orgType: "", providerCount: "",
    phone: "", email: "", service: "", message: "",
  });

  const set = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email us directly at info@medbpo360.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Nav />
      <main>
        <section style={{
          paddingTop: 120, paddingBottom: 60,
          paddingLeft: 24, paddingRight: 24,
          textAlign: "center",
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, #dde7ee 0%, #ffffff 60%)",
        }}>
          <p style={{
            fontSize: 13, fontWeight: 600, color: "#0f2b46",
            textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16,
          }}>Get In Touch</p>
          <h1 style={{
            fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 700,
            letterSpacing: "-2px", lineHeight: 1.08, color: "#0a0a0f",
            maxWidth: 640, margin: "0 auto 16px",
          }}>
            Let&apos;s talk about your organization.
          </h1>
          <p style={{
            fontSize: 17, color: "#515154", maxWidth: 480,
            margin: "0 auto", lineHeight: 1.65,
          }}>
            No pushy sales. Just a straightforward conversation about where you are and how we can help you scale.
          </p>
        </section>

        <section style={{ padding: "20px 24px 100px" }}>
          <div style={{
            maxWidth: 1080, margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 60, alignItems: "start",
          }}>
            {/* Left — contact info */}
            <div style={{ paddingTop: 16 }}>
              <h2 style={{
                fontSize: 24, fontWeight: 700, color: "#0a0a0f",
                letterSpacing: "-0.5px", marginBottom: 32,
              }}>
                We&apos;re based in Burbank, CA.<br />We serve health systems nationwide.
              </h2>

              {[
                { icon: "📍", label: "Office", value: "4100 W Alameda Ave, Burbank, CA 91505" },
                { icon: "📞", label: "Phone", value: "(323) 332-6768" },
                { icon: "✉️", label: "Email", value: "info@medbpo360.com" },
                { icon: "🕐", label: "Hours", value: "Mon–Fri, 8am–6pm PT · 24/7 call center available" },
              ].map(({ icon, label, value }) => (
                <div key={label} style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 24 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, background: "#e8eef4",
                    flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
                  }}>{icon}</div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#86868b", textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 3 }}>{label}</div>
                    <div style={{ fontSize: 15, color: "#0a0a0f", fontWeight: 500 }}>{value}</div>
                  </div>
                </div>
              ))}

              <div style={{
                marginTop: 40, padding: "24px",
                background: "#f5f5f7", borderRadius: 16,
                borderLeft: "3px solid #17a673",
              }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#0a0a0f", marginBottom: 8 }}>
                  We respond within 24 hours.
                </div>
                <div style={{ fontSize: 14, color: "#515154", lineHeight: 1.6 }}>
                  Every inquiry goes directly to our implementation team — not a ticketing system. You&apos;ll hear from a real person, fast.
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {submitted ? (
                <div style={{
                  background: "#f5f5f7", borderRadius: 24,
                  padding: "60px 40px", textAlign: "center",
                }}>
                  <div style={{ fontSize: 48, marginBottom: 20 }}>✅</div>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: "#0a0a0f", marginBottom: 12, letterSpacing: "-0.5px" }}>
                    Message received.
                  </h3>
                  <p style={{ fontSize: 15, color: "#515154", lineHeight: 1.65 }}>
                    Thank you for reaching out. A member of our team will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{
                  background: "#f5f5f7", borderRadius: 24, padding: "40px 36px",
                  display: "flex", flexDirection: "column", gap: 20,
                }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0a0a0f", letterSpacing: "-0.3px", margin: 0 }}>
                    Tell us about your organization
                  </h3>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Your Name *</label>
                      <input required placeholder="Jane Smith" value={form.name} onChange={(e) => set("name", e.target.value)} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Organization Name *</label>
                      <input required placeholder="Smith Health Partners" value={form.organization} onChange={(e) => set("organization", e.target.value)} style={inputStyle} />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Organization Type *</label>
                      <select required value={form.orgType} onChange={(e) => set("orgType", e.target.value)} style={inputStyle}>
                        <option value="">Select type</option>
                        {orgTypeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Provider Count</label>
                      <select value={form.providerCount} onChange={(e) => set("providerCount", e.target.value)} style={inputStyle}>
                        <option value="">Select range</option>
                        {providerCountOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Phone *</label>
                      <input required type="tel" placeholder="(555) 555-0100" value={form.phone} onChange={(e) => set("phone", e.target.value)} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input required type="email" placeholder="you@organization.com" value={form.email} onChange={(e) => set("email", e.target.value)} style={inputStyle} />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>I&apos;m interested in</label>
                    <select value={form.service} onChange={(e) => set("service", e.target.value)} style={inputStyle}>
                      <option value="">Select a service</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Anything else we should know?</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your organization — number of sites, current pain points, payers you work with, etc."
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      style={{ ...inputStyle, resize: "vertical", height: "auto" }}
                    />
                  </div>

                  {error && (
                    <p style={{ fontSize: 13, color: "#c0392b", margin: 0, textAlign: "center" }}>
                      {error}
                    </p>
                  )}

                  <button type="submit" disabled={loading} style={{
                    padding: "16px", borderRadius: 12,
                    background: loading ? "#86868b" : "#0f2b46",
                    color: "#fff", fontSize: 15, fontWeight: 600,
                    border: "none", cursor: loading ? "not-allowed" : "pointer",
                  }}>
                    {loading ? "Sending..." : "Send Message →"}
                  </button>

                  <p style={{ fontSize: 12, color: "#86868b", textAlign: "center", margin: 0 }}>
                    We&apos;ll never share your information. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
