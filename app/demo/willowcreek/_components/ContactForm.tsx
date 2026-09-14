"use client";

import { useState } from "react";
import Link from "next/link";

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "12px 14px", borderRadius: 12,
  border: "1px solid #e3d4c6", fontSize: 14, fontFamily: "inherit", color: "#4a3c2e",
};

const labelStyle: React.CSSProperties = {
  fontSize: 13, fontWeight: 800, color: "#4a3c2e", marginBottom: 6, display: "block",
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div style={{ border: "1px solid #f1dfe2", background: "#fdf6f7", borderRadius: 20, padding: "36px 28px", textAlign: "center" }}>
        <div style={{
          width: 46, height: 46, borderRadius: "50%", background: "#b3667a",
          display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px",
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <h3 style={{ fontSize: 17, fontWeight: 800, color: "#4a3c2e", marginBottom: 10 }}>
          This is a demo — nothing was sent
        </h3>
        <p style={{ fontSize: 14, color: "#8a7a68", lineHeight: 1.6, maxWidth: 380, margin: "0 auto 20px" }}>
          On your real site, this form connects to your booking system and notifies your front desk. Here, it just shows you what that moment feels like for a patient.
        </p>
        <Link href="/services/web-design-social-media" style={{
          display: "inline-block", fontSize: 13.5, fontWeight: 800, color: "#fff",
          background: "#4a3c2e", padding: "10px 22px", borderRadius: 980, textDecoration: "none",
        }}>
          Talk to Our Team
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      style={{ border: "1px solid #f0e4d8", borderRadius: 20, padding: "32px 28px", display: "flex", flexDirection: "column", gap: 18 }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16 }}>
        <div>
          <label style={labelStyle}>Full Name</label>
          <input required style={inputStyle} type="text" placeholder="Alex Kim" />
        </div>
        <div>
          <label style={labelStyle}>Phone</label>
          <input required style={inputStyle} type="tel" placeholder="(555) 123-4567" />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Email</label>
        <input required style={inputStyle} type="email" placeholder="alex@example.com" />
      </div>
      <div>
        <label style={labelStyle}>Reason for Visit</label>
        <textarea style={{ ...inputStyle, minHeight: 90, resize: "vertical" }} placeholder="New patient, annual wellness visit, feeling under the weather..." />
      </div>
      <button type="submit" style={{
        background: "#b3667a", color: "#fff", fontSize: 15, fontWeight: 800,
        padding: "13px 24px", borderRadius: 980, border: "none", cursor: "pointer",
      }}>
        Book a Visit
      </button>
    </form>
  );
}
