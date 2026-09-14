"use client";

import { useState } from "react";
import Link from "next/link";

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "12px 14px", borderRadius: 8,
  border: "1px solid #d7dee6", fontSize: 14, fontFamily: "inherit", color: "#0a0a0f",
};

const labelStyle: React.CSSProperties = {
  fontSize: 13, fontWeight: 700, color: "#0f2b46", marginBottom: 6, display: "block",
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div style={{ border: "1px solid #d5ead9", background: "#e8f5ef", borderRadius: 16, padding: "36px 28px", textAlign: "center" }}>
        <div style={{
          width: 46, height: 46, borderRadius: "50%", background: "#128a5e",
          display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px",
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0f2b46", marginBottom: 10 }}>
          This is a demo — nothing was sent
        </h3>
        <p style={{ fontSize: 14, color: "#3a5a4a", lineHeight: 1.6, maxWidth: 380, margin: "0 auto 20px" }}>
          On your real site, this form connects to your booking system and notifies your front desk. Here, it just shows you what that moment feels like for a patient.
        </p>
        <Link href="/services/web-design-social-media" style={{
          display: "inline-block", fontSize: 13.5, fontWeight: 700, color: "#fff",
          background: "#0f2b46", padding: "10px 22px", borderRadius: 8, textDecoration: "none",
        }}>
          Talk to Our Team
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      style={{ border: "1px solid #e8ecf0", borderRadius: 16, padding: "32px 28px", display: "flex", flexDirection: "column", gap: 18 }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16 }}>
        <div>
          <label style={labelStyle}>Full Name</label>
          <input required style={inputStyle} type="text" placeholder="Jane Rivera" />
        </div>
        <div>
          <label style={labelStyle}>Phone</label>
          <input required style={inputStyle} type="tel" placeholder="(555) 123-4567" />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Email</label>
        <input required style={inputStyle} type="email" placeholder="jane@example.com" />
      </div>
      <div>
        <label style={labelStyle}>Preferred Location</label>
        <select required style={inputStyle} defaultValue="">
          <option value="" disabled>Select a location</option>
          <option>Downtown Cardiology Center</option>
          <option>Northside Heart Institute</option>
          <option>Riverside Cardiology</option>
        </select>
      </div>
      <div>
        <label style={labelStyle}>Reason for Visit</label>
        <textarea style={{ ...inputStyle, minHeight: 90, resize: "vertical" }} placeholder="New patient, follow-up, second opinion..." />
      </div>
      <button type="submit" style={{
        background: "#0f2b46", color: "#fff", fontSize: 15, fontWeight: 700,
        padding: "13px 24px", borderRadius: 8, border: "none", cursor: "pointer",
      }}>
        Request Appointment
      </button>
    </form>
  );
}
