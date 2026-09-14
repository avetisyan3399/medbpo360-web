"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function DemoGate() {
  const searchParams = useSearchParams();
  const expired = searchParams.get("expired") === "1";

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const startedAt = useRef<number | null>(null);
  const honeypot = useRef("");

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const address = email.trim();
    if (!/^[^\s@<>"'&]+@[^\s@<>"'&]+\.[a-zA-Z]{2,}$/.test(address)) {
      setError("Enter a valid email address.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: address,
          demo: "willowcreek",
          startedAt: startedAt.current ?? undefined,
          subject_ref: honeypot.current,
        }),
      });
      const payload = await res.json().catch(() => null);
      if (!res.ok || !payload?.sent) throw new Error(payload?.error || "Failed");
      setSent(true);
    } catch (err) {
      setError(
        err instanceof Error && err.message !== "Failed"
          ? err.message
          : "Something went wrong. Email info@medbpo360.com and we'll send you the link.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <main style={{ padding: "72px 24px 100px", textAlign: "center", fontFamily: "'Nunito', sans-serif" }}>
        <div style={{ maxWidth: 420, margin: "0 auto" }}>
          <div style={{
            width: 46, height: 46, borderRadius: "50%", background: "#b3667a",
            display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px",
          }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: "#4a3c2e", marginBottom: 12 }}>
            Check your inbox
          </h1>
          <p style={{ fontSize: 15, color: "#8a7a68", lineHeight: 1.65 }}>
            We sent a link to <strong>{email.trim()}</strong>. Click it to open the demo — it works once and expires in 30 minutes.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main style={{ background: "#f9f4ec", padding: "72px 24px 100px", textAlign: "center", fontFamily: "'Nunito', sans-serif" }}>
      <div style={{ maxWidth: 440, margin: "0 auto" }}>
        <p style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: 0.6, color: "#b3667a", textTransform: "uppercase", marginBottom: 14 }}>
          Warm &amp; Approachable Demo
        </p>
        <h1 style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 800, color: "#4a3c2e", marginBottom: 14, lineHeight: 1.25 }}>
          See the Full Demo
        </h1>
        <p style={{ fontSize: 15, color: "#8a7a68", lineHeight: 1.65, marginBottom: 22 }}>
          Enter your email and we&apos;ll send a link to unlock all five pages — home, providers, services, visiting info, and a working appointment form.
        </p>

        {expired && (
          <div style={{ background: "#fff", border: "1px solid #f0dfa0", color: "#8a6d00", fontSize: 13.5, borderRadius: 12, padding: "10px 14px", marginBottom: 18, textAlign: "left" }}>
            That link expired or was already used — request a new one below.
          </div>
        )}

        <form onSubmit={submit} style={{
          background: "#fff", border: "1px solid #f0e4d8", borderRadius: 20,
          padding: "24px 22px", boxShadow: "0 12px 30px -10px rgba(74,60,46,0.15)",
          display: "flex", flexDirection: "column", gap: 12, textAlign: "left",
        }}>
          <div aria-hidden="true" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap" }}>
            <label htmlFor="subject_ref_demo">Leave this field empty</label>
            <input
              id="subject_ref_demo"
              name="subject_ref"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              onChange={(e) => (honeypot.current = e.target.value)}
            />
          </div>

          <label htmlFor="demo_email" style={{ fontSize: 13, fontWeight: 800, color: "#4a3c2e" }}>
            Your email
          </label>
          <input
            id="demo_email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@yourpractice.com"
            style={{
              padding: "12px 14px", fontSize: 15, border: "1px solid #e3d4c6",
              borderRadius: 12, outline: "none", color: "#4a3c2e", fontFamily: "'Nunito', sans-serif",
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "13px 20px", borderRadius: 980, border: "none",
              background: loading ? "#d3a5b2" : "#b3667a", color: "#fff",
              fontSize: 15, fontWeight: 800, cursor: loading ? "default" : "pointer", fontFamily: "'Nunito', sans-serif",
            }}
          >
            {loading ? "Sending…" : "Email Me the Link"}
          </button>
          {error && <div style={{ fontSize: 13, color: "#c0392b", lineHeight: 1.5 }}>{error}</div>}
          <p style={{ fontSize: 12, color: "#a3937f", lineHeight: 1.6, margin: 0 }}>
            We&apos;ll follow up if it looks like a good fit for your practice — no mailing list, no spam.
          </p>
        </form>
      </div>
    </main>
  );
}
