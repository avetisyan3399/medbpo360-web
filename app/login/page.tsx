import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Client Portal Login",
  description: "Log in to your medbpo360 client portal to view credentialing status, billing reports, and account activity.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <>
      <Nav />
      <main style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        background: "radial-gradient(ellipse 80% 50% at 50% 0%, #dde7ee 0%, #f5f5f7 60%)",
      }}>
        <div style={{ width: "100%", maxWidth: 420 }}>
          {/* Logo */}
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <span style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.5px", color: "#0a0a0f" }}>
                Med<span style={{ color: "#17a673" }}>BPO360</span>
              </span>
            </Link>
            <p style={{ fontSize: 15, color: "#515154", marginTop: 8 }}>
              Client Portal
            </p>
          </div>

          {/* Card */}
          <div style={{
            background: "#fff",
            borderRadius: 24,
            padding: "40px 36px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
            border: "1px solid #e8e8ed",
          }}>
            <h1 style={{
              fontSize: 22, fontWeight: 700, letterSpacing: "-0.5px",
              color: "#0a0a0f", marginBottom: 8,
            }}>
              Sign in to your account
            </h1>
            <p style={{ fontSize: 14, color: "#86868b", marginBottom: 32 }}>
              Access your credentialing status, billing reports, and documents.
            </p>

            <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#1d1d1f", display: "block", marginBottom: 8 }}>
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@organization.com"
                  style={{
                    width: "100%", padding: "12px 16px",
                    borderRadius: 12, border: "1px solid #d2d2d7",
                    fontSize: 15, color: "#1d1d1f",
                    outline: "none", boxSizing: "border-box",
                    background: "#fff",
                  }}
                />
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "#1d1d1f" }}>
                    Password
                  </label>
                  <a href="#" style={{ fontSize: 13, color: "#0f2b46", textDecoration: "none" }}>
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  style={{
                    width: "100%", padding: "12px 16px",
                    borderRadius: 12, border: "1px solid #d2d2d7",
                    fontSize: 15, color: "#1d1d1f",
                    outline: "none", boxSizing: "border-box",
                    background: "#fff",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%", padding: "14px",
                  borderRadius: 12, background: "#0f2b46",
                  color: "#fff", fontSize: 15, fontWeight: 600,
                  border: "none", cursor: "pointer", marginTop: 8,
                  boxShadow: "0 4px 16px rgba(15,43,70,0.3)",
                }}
              >
                Sign In
              </button>
            </form>

            <div style={{
              marginTop: 28, paddingTop: 24,
              borderTop: "1px solid #f0f0f5",
              textAlign: "center",
            }}>
              <p style={{ fontSize: 13, color: "#86868b" }}>
                Don&apos;t have an account?{" "}
                <Link href="/contact" style={{ color: "#0f2b46", fontWeight: 600, textDecoration: "none" }}>
                  Contact us
                </Link>
              </p>
            </div>
          </div>

          <p style={{ textAlign: "center", fontSize: 12, color: "#86868b", marginTop: 24 }}>
            Having trouble? Call us at{" "}
            <a href="tel:+13233326768" style={{ color: "#0f2b46", textDecoration: "none" }}>
              (323) 332-6768
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
