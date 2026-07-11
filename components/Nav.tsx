"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const serviceLinks = [
  { label: "Call Center Services", href: "/services/call-center" },
  { label: "Medical Billing & RCM", href: "/services/medical-billing-rcm" },
  { label: "Credentialing & Payer Enrollment", href: "/services/credentialing-enrollment" },
  { label: "Full-Scale BPO / Back-Office", href: "/services/bpo-back-office" },
];

const industryLinks = [
  { label: "Health Systems", href: "/industries/health-systems" },
  { label: "MSOs & PE-Backed Groups", href: "/industries/mso-pe-backed-groups" },
  { label: "Ambulatory Surgery Centers", href: "/industries/ascs" },
  { label: "Multi-Site Medical Groups", href: "/industries/multi-site-medical-groups" },
  { label: "Hospital-Based Groups", href: "/industries/hospital-based-groups" },
];

const specialtyLinks = [
  { label: "Behavioral Health", href: "/specialties/behavioral-health" },
  { label: "Primary Care", href: "/specialties/primary-care" },
  { label: "Cardiology", href: "/specialties/cardiology" },
  { label: "Multi-Specialty Groups", href: "/specialties/multi-specialty-groups" },
  { label: "Labs & Diagnostics", href: "/specialties/laboratory-diagnostics" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openDropdown() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  }

  function closeDropdown() {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 120);
  }

  return (
    <>
      <style>{`
        .nav-desktop { display: flex; }
        .nav-hamburger { display: none; }
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        .nav-dropdown-link:hover { background: #eef3f7 !important; color: #0f2b46 !important; }
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
          <div className="nav-desktop" style={{ gap: 32, alignItems: "center" }}>
            {/* Services mega-menu trigger */}
            <div
              ref={dropdownRef}
              style={{ position: "relative" }}
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button
                style={{
                  fontSize: 14, color: "#1d1d1f", fontWeight: 500,
                  background: "none", border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 4, padding: 0,
                }}
              >
                Services
                <svg
                  width="12" height="12" viewBox="0 0 12 12" fill="none"
                  style={{ transition: "transform 0.2s", transform: dropdownOpen ? "rotate(180deg)" : "none" }}
                >
                  <path d="M2 4l4 4 4-4" stroke="#86868b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Mega dropdown */}
              {dropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 16px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#fff",
                    borderRadius: 16,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
                    padding: "24px",
                    width: 700,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "8px 24px",
                  }}
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  {/* Services column */}
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 8, paddingLeft: 10 }}>
                      Services
                    </div>
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="nav-dropdown-link"
                        onClick={() => setDropdownOpen(false)}
                        style={{
                          display: "block",
                          padding: "8px 10px",
                          borderRadius: 8,
                          fontSize: 13,
                          fontWeight: 500,
                          color: "#1d1d1f",
                          textDecoration: "none",
                          lineHeight: 1.3,
                          transition: "background 0.15s, color 0.15s",
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="nav-dropdown-link"
                      onClick={() => setDropdownOpen(false)}
                      style={{
                        display: "block",
                        padding: "8px 10px",
                        borderRadius: 8,
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#17a673",
                        textDecoration: "none",
                        marginTop: 4,
                        transition: "background 0.15s",
                      }}
                    >
                      All Services →
                    </Link>
                  </div>

                  {/* Industries column */}
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 8, paddingLeft: 10 }}>
                      By Industry
                    </div>
                    {industryLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="nav-dropdown-link"
                        onClick={() => setDropdownOpen(false)}
                        style={{
                          display: "block",
                          padding: "8px 10px",
                          borderRadius: 8,
                          fontSize: 13,
                          fontWeight: 500,
                          color: "#1d1d1f",
                          textDecoration: "none",
                          lineHeight: 1.3,
                          transition: "background 0.15s, color 0.15s",
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Link
                      href="/industries"
                      className="nav-dropdown-link"
                      onClick={() => setDropdownOpen(false)}
                      style={{
                        display: "block",
                        padding: "8px 10px",
                        borderRadius: 8,
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#17a673",
                        textDecoration: "none",
                        marginTop: 4,
                        transition: "background 0.15s",
                      }}
                    >
                      All Industries →
                    </Link>
                  </div>

                  {/* Specialties column */}
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 8, paddingLeft: 10 }}>
                      By Specialty
                    </div>
                    {specialtyLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="nav-dropdown-link"
                        onClick={() => setDropdownOpen(false)}
                        style={{
                          display: "block",
                          padding: "8px 10px",
                          borderRadius: 8,
                          fontSize: 13,
                          fontWeight: 500,
                          color: "#1d1d1f",
                          textDecoration: "none",
                          lineHeight: 1.3,
                          transition: "background 0.15s, color 0.15s",
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Link
                      href="/specialties"
                      className="nav-dropdown-link"
                      onClick={() => setDropdownOpen(false)}
                      style={{
                        display: "block",
                        padding: "8px 10px",
                        borderRadius: 8,
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#17a673",
                        textDecoration: "none",
                        marginTop: 4,
                        transition: "background 0.15s",
                      }}
                    >
                      All Specialties →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {["Blog", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                style={{ fontSize: 14, color: "#1d1d1f", textDecoration: "none", fontWeight: 500 }}
              >
                {item}
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
            {/* Services accordion */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                fontSize: 17, color: "#1d1d1f", fontWeight: 500,
                background: "none", border: "none", cursor: "pointer",
                padding: "10px 0", textAlign: "left", width: "100%",
              }}
            >
              Services
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                <path d="M3 5l4 4 4-4" stroke="#86868b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {mobileServicesOpen && (
              <div style={{ paddingLeft: 12, display: "flex", flexDirection: "column", gap: 2, marginBottom: 8 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: 1, padding: "8px 0 4px" }}>Services</div>
                {serviceLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                    style={{ fontSize: 15, color: "#1d1d1f", textDecoration: "none", padding: "7px 0", fontWeight: 400 }}>
                    {link.label}
                  </Link>
                ))}
                <div style={{ fontSize: 11, fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: 1, padding: "12px 0 4px" }}>By Industry</div>
                {industryLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                    style={{ fontSize: 15, color: "#1d1d1f", textDecoration: "none", padding: "7px 0", fontWeight: 400 }}>
                    {link.label}
                  </Link>
                ))}
                <div style={{ fontSize: 11, fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: 1, padding: "12px 0 4px" }}>By Specialty</div>
                {specialtyLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                    style={{ fontSize: 15, color: "#1d1d1f", textDecoration: "none", padding: "7px 0", fontWeight: 400 }}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {["Blog", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                style={{ fontSize: 17, color: "#1d1d1f", textDecoration: "none", fontWeight: 500, padding: "10px 0" }}
                onClick={() => setMenuOpen(false)}
              >
                {item}
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
