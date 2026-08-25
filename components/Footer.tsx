"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { socialProfiles } from "@/lib/social";

const socialIcons: Record<string, string> = {
  LinkedIn:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  Facebook:
    "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0a0a0f",
        color: "#86868b",
        padding: "60px 24px 40px",
      }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#f5f5f7",
                marginBottom: 12,
                letterSpacing: "-0.5px",
              }}
            >
              Med<span style={{ color: "#17a673" }}>BPO360</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.6, maxWidth: 220 }}>
              Revenue cycle management and back-office outsourcing sized to
              fit you — from solo practices to health systems.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              {socialProfiles.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`medbpo360 on ${label}`}
                  onClick={() => trackEvent("social_click", { network: label })}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    border: "1px solid #2a2a2e",
                    color: "#86868b",
                  }}
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={socialIcons[label]} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#f5f5f7", textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>
              Services
            </div>
            {[
              { label: "Call Center Services", href: "/services/call-center" },
              { label: "Medical Billing & RCM", href: "/services/medical-billing-rcm" },
              { label: "Credentialing & Enrollment", href: "/services/credentialing-enrollment" },
              { label: "BPO / Back-Office", href: "/services/bpo-back-office" },
            ].map(({ label, href }) => (
              <div key={label} style={{ marginBottom: 10 }}>
                <Link href={href} style={{ fontSize: 13, color: "#86868b", textDecoration: "none" }}>
                  {label}
                </Link>
              </div>
            ))}
          </div>

          {/* Industries */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#f5f5f7", textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>
              Industries
            </div>
            {[
              { label: "Independent & Growing Practices", href: "/industries/growing-practices" },
              { label: "Health Systems", href: "/industries/health-systems" },
              { label: "MSOs & PE-Backed Groups", href: "/industries/mso-pe-backed-groups" },
              { label: "Ambulatory Surgery Centers", href: "/industries/ascs" },
              { label: "Multi-Site Medical Groups", href: "/industries/multi-site-medical-groups" },
              { label: "Hospital-Based Groups", href: "/industries/hospital-based-groups" },
            ].map(({ label, href }) => (
              <div key={label} style={{ marginBottom: 10 }}>
                <Link href={href} style={{ fontSize: 13, color: "#86868b", textDecoration: "none" }}>
                  {label}
                </Link>
              </div>
            ))}
          </div>

          {/* Company */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#f5f5f7", textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>
              Company
            </div>
            {[
              { label: "About", href: "/about" },
              { label: "Specialties", href: "/specialties" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy Policy", href: "/privacy" },
            ].map(({ label, href }) => (
              <div key={label} style={{ marginBottom: 10 }}>
                <Link href={href} style={{ fontSize: 13, color: "#86868b", textDecoration: "none" }}>
                  {label}
                </Link>
              </div>
            ))}
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid #2a2a2e" }}>
              <a
                href="tel:+13233326768"
                onClick={() => trackEvent("phone_click")}
                style={{ display: "block", fontSize: 13, color: "#86868b", marginBottom: 6, textDecoration: "none" }}
              >
                (323) 332-6768
              </a>
              <a
                href="mailto:info@medbpo360.com"
                onClick={() => trackEvent("email_click")}
                style={{ fontSize: 13, color: "#86868b", textDecoration: "none" }}
              >
                info@medbpo360.com
              </a>
            </div>
          </div>

          {/* Portal */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#f5f5f7", textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>
              Portal
            </div>
            <div style={{ marginBottom: 10 }}>
              <Link href="/login" style={{ fontSize: 13, color: "#86868b", textDecoration: "none" }}>
                Client Portal
              </Link>
            </div>
            <div style={{ marginTop: 20 }}>
              <div style={{ fontSize: 12, color: "#3a3a3f", lineHeight: 1.6 }}>
                4100 W Alameda Ave<br />Burbank, CA 91505<br />Serving practices of every size nationwide
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            borderTop: "1px solid #2a2a2e",
            paddingTop: 24,
            fontSize: 12,
            color: "#515154",
          }}
        >
          © {new Date().getFullYear()} medbpo360. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
