"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/demo/harborview" },
  { label: "About", href: "/demo/harborview/about" },
  { label: "Services", href: "/demo/harborview/services" },
  { label: "Locations", href: "/demo/harborview/locations" },
  { label: "Contact", href: "/demo/harborview/contact" },
];

export default function HarborviewNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .hv-nav-desktop { display: flex; }
        .hv-nav-hamburger { display: none; }
        @media (max-width: 860px) {
          .hv-nav-desktop { display: none !important; }
          .hv-nav-hamburger { display: flex !important; }
        }
      `}</style>
      <nav style={{ borderBottom: "1px solid #e8ecf0", background: "#fff" }}>
        <div style={{
          maxWidth: 1140, margin: "0 auto", padding: "0 24px", height: 72,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <Link href="/demo/harborview" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: "-0.4px", color: "#0f2b46" }}>
              Harborview <span style={{ color: "#128a5e" }}>Cardiology</span>
            </span>
          </Link>

          <div className="hv-nav-desktop" style={{ gap: 30, alignItems: "center" }}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} style={{ fontSize: 14.5, color: "#1d1d1f", textDecoration: "none", fontWeight: 500 }}>
                {item.label}
              </Link>
            ))}
            <Link href="/demo/harborview/contact" style={{
              fontSize: 14, fontWeight: 700, padding: "10px 22px", borderRadius: 8,
              background: "#0f2b46", color: "#fff", textDecoration: "none",
            }}>
              Request an Appointment
            </Link>
          </div>

          <button
            className="hv-nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, flexDirection: "column", gap: 5 }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <div key={i} style={{
                width: 22, height: 2, background: "#0f2b46", borderRadius: 2,
                transition: "transform 0.2s, opacity 0.2s",
                transform:
                  menuOpen && i === 0 ? "rotate(45deg) translate(5px, 5px)" :
                  menuOpen && i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {menuOpen && (
          <div style={{ borderTop: "1px solid #e8ecf0", padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{ fontSize: 17, color: "#1d1d1f", textDecoration: "none", fontWeight: 500, padding: "10px 0" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/demo/harborview/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 15, fontWeight: 700, padding: "12px 0", textAlign: "center",
                borderRadius: 8, background: "#0f2b46", color: "#fff", textDecoration: "none", marginTop: 8,
              }}
            >
              Request an Appointment
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
