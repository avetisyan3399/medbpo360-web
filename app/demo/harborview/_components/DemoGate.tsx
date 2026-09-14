"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "medbpo360-demo-unlocked:harborview";

export default function DemoGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const startedAt = useRef<number | null>(null);
  const honeypot = useRef("");

  useEffect(() => {
    startedAt.current = Date.now();
    try {
      setUnlocked(localStorage.getItem(STORAGE_KEY) === "true");
    } catch {
      setUnlocked(false);
    }
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
          demo: "harborview",
          startedAt: startedAt.current ?? undefined,
          subject_ref: honeypot.current,
        }),
      });
      const payload = await res.json().catch(() => null);
      if (!res.ok || !payload?.unlocked) throw new Error(payload?.error || "Failed");
      try {
        localStorage.setItem(STORAGE_KEY, "true");
      } catch {
        // Private browsing or storage disabled — the demo still opens for
        // this page view, it just won't stay unlocked on the next visit.
      }
      setUnlocked(true);
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

  // Avoid a flash of the gate for a visitor who already unlocked it.
  if (unlocked === null) return null;

  if (unlocked) return <>{children}</>;

  return (
    <main style={{ background: "radial-gradient(ellipse 90% 55% at 50% 0%, #dde7ee 0%, #ffffff 65%)", padding: "72px 24px 100px", textAlign: "center" }}>
      <div style={{ maxWidth: 440, margin: "0 auto" }}>
        <p style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: 1.4, color: "#128a5e", textTransform: "uppercase", marginBottom: 14 }}>
          Clinical Trust Demo
        </p>
        <h1 style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 800, letterSpacing: "-0.8px", color: "#0f2b46", marginBottom: 14, lineHeight: 1.2 }}>
          See the Full Demo
        </h1>
        <p style={{ fontSize: 15, color: "#5f6b76", lineHeight: 1.65, marginBottom: 28 }}>
          One email unlocks all five pages — home, providers, services, locations, and a working appointment form.
        </p>

        <form onSubmit={submit} style={{
          background: "#fff", border: "1px solid #e8ecf0", borderRadius: 16,
          padding: "24px 22px", boxShadow: "0 12px 30px -10px rgba(15,43,70,0.16)",
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

          <label htmlFor="demo_email" style={{ fontSize: 13, fontWeight: 700, color: "#0f2b46" }}>
            Work email
          </label>
          <input
            id="demo_email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@yourpractice.com"
            style={{
              padding: "12px 14px", fontSize: 15, border: "1px solid #d7dee6",
              borderRadius: 8, outline: "none", color: "#0a0a0f",
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "13px 20px", borderRadius: 8, border: "none",
              background: loading ? "#7fae95" : "#0f2b46", color: "#fff",
              fontSize: 15, fontWeight: 700, cursor: loading ? "default" : "pointer",
            }}
          >
            {loading ? "Unlocking…" : "View the Demo"}
          </button>
          {error && <div style={{ fontSize: 13, color: "#c0392b", lineHeight: 1.5 }}>{error}</div>}
          <p style={{ fontSize: 12, color: "#8a929a", lineHeight: 1.6, margin: 0 }}>
            We&apos;ll follow up if it looks like a good fit for your practice — no mailing list, no spam.
          </p>
        </form>
      </div>
    </main>
  );
}
