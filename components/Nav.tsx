"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Specialties", href: "/specialties" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-desktop { display: flex; }
        .nav-hamburger { display: none; }
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          transition: "background 0.3s, box-shadow 0.3s",
          background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div style={{
          maxWidth: 1140, margin: "0 auto",
          padding: "0 24px", height: 64,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.5px", color: "#0a0a0f" }}>
              Med<span style={{ color: "#17a673" }}>BPO360</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="nav-desktop" style={{ gap: 28, alignItems: "center" }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ fontSize: 14, color: "#1d1d1f", textDecoration: "none", fontWeight: 500 }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/login"
              style={{
                fontSize: 14, fontWeight: 600,
                padding: "8px 18px", borderRadius: 980,
                background: "#0f2b46", color: "#fff", textDecoration: "none",
              }}
            >
              Sign In
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, flexDirection: "column", gap: 5 }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <div key={i} style={{
                width: 22, height: 2, background: "#0a0a0f", borderRadius: 2,
                transition: "transform 0.2s, opacity 0.2s",
                transform:
                  menuOpen && i === 0 ? "rotate(45deg) translate(5px, 5px)" :
                  menuOpen && i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid #d2d2d7",
            padding: "16px 24px 24px",
            maxHeight: "calc(100vh - 64px)",
            overflowY: "auto",
            display: "flex", flexDirection: "column", gap: 4,
          }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ fontSize: 17, color: "#1d1d1f", textDecoration: "none", fontWeight: 500, padding: "10px 0" }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/login"
              style={{
                fontSize: 15, fontWeight: 600,
                padding: "12px 0", textAlign: "center",
                borderRadius: 12, background: "#0f2b46",
                color: "#fff", textDecoration: "none",
                marginTop: 8,
              }}
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
