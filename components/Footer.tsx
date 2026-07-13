import Link from "next/link";

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
              Revenue cycle management and back-office outsourcing built to
              scale — from growing practices to health systems.
            </p>
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
            ].map(({ label, href }) => (
              <div key={label} style={{ marginBottom: 10 }}>
                <Link href={href} style={{ fontSize: 13, color: "#86868b", textDecoration: "none" }}>
                  {label}
                </Link>
              </div>
            ))}
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid #2a2a2e" }}>
              <div style={{ fontSize: 13, color: "#86868b", marginBottom: 6 }}>(323) 332-6768</div>
              <div style={{ fontSize: 13, color: "#86868b" }}>info@medbpo360.com</div>
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
                4100 W Alameda Ave<br />Burbank, CA 91505<br />Serving health systems nationwide
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
