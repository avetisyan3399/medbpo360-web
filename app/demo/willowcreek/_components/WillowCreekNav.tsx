"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/demo/willowcreek" },
  { label: "About", href: "/demo/willowcreek/about" },
  { label: "Services", href: "/demo/willowcreek/services" },
  { label: "Visit Us", href: "/demo/willowcreek/locations" },
  { label: "Contact", href: "/demo/willowcreek/contact" },
];

export default function WillowCreekNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .wc-nav-desktop { display: flex; }
        .wc-nav-hamburger { display: none; }
        @media (max-width: 860px) {
          .wc-nav-desktop { display: none !important; }
          .wc-nav-hamburger { display: flex !important; }
        }
      `}</style>
      <nav style={{ borderBottom: "1px solid #f0e4d8", background: "#fff" }}>
        <div style={{
          maxWidth: 1140, margin: "0 auto", padding: "0 24px", height: 76,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <Link href="/demo/willowcreek" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 20, fontWeight: 800, color: "#4a3c2e" }}>
              Willow Creek <span style={{ color: "#b3667a" }}>Family Medicine</span>
            </span>
          </Link>

          <div className="wc-nav-desktop" style={{ gap: 30, alignItems: "center" }}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14.5, color: "#4a3c2e", textDecoration: "none", fontWeight: 700 }}>
                {item.label}
              </Link>
            ))}
            <Link href="/demo/willowcreek/contact" style={{
              fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 800, padding: "11px 24px", borderRadius: 980,
              background: "#b3667a", color: "#fff", textDecoration: "none",
            }}>
              Book a Visit
            </Link>
          </div>

          <button
            className="wc-nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, flexDirection: "column", gap: 5 }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <div key={i} style={{
                width: 22, height: 2, background: "#4a3c2e", borderRadius: 2,
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
          <div style={{ borderTop: "1px solid #f0e4d8", padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: "'Nunito', sans-serif", fontSize: 17, color: "#4a3c2e", textDecoration: "none", fontWeight: 700, padding: "10px 0" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/demo/willowcreek/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Nunito', sans-serif", fontSize: 15, fontWeight: 800, padding: "12px 0", textAlign: "center",
                borderRadius: 980, background: "#b3667a", color: "#fff", textDecoration: "none", marginTop: 8,
              }}
            >
              Book a Visit
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
