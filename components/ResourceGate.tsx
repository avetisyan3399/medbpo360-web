"use client";

import { useEffect, useRef, useState } from "react";
import type { ResourceSection } from "@/lib/resources";
import ResourceSections from "@/components/ResourceSections";
import { trackEvent } from "@/lib/analytics";

type Unlocked = {
  sections: ResourceSection[];
  checklist: string[];
  sources: { label: string; url?: string }[];
};

export default function ResourceGate({ slug, remaining }: { slug: string; remaining: number }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [unlocked, setUnlocked] = useState<Unlocked | null>(null);
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
      const res = await fetch("/api/resource-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: address,
          resource: slug,
          startedAt: startedAt.current ?? undefined,
          subject_ref: honeypot.current,
        }),
      });
      const payload = await res.json().catch(() => null);
      if (!res.ok) throw new Error(payload?.error || "Failed");
      if (!payload?.sections) throw new Error("Failed");
      trackEvent("resource_unlock", { resource: slug });
      setUnlocked(payload as Unlocked);
    } catch (err) {
      setError(
        err instanceof Error && err.message !== "Failed"
          ? err.message
          : "Something went wrong. Email info@medbpo360.com and we'll send it over.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (unlocked) {
    return (
      <>
        <ResourceSections sections={unlocked.sections} />

        <div style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 21, fontWeight: 700, letterSpacing: "-0.4px", color: "#0a0a0f", marginBottom: 16 }}>
            The checklist
          </h2>
          {unlocked.checklist.map((item) => (
            <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}>
              <div
                aria-hidden="true"
                style={{
                  flexShrink: 0, width: 18, height: 18, marginTop: 2,
                  border: "1.5px solid #c7c7cc", borderRadius: 4,
                }}
              />
              <span style={{ fontSize: 15, lineHeight: 1.6, color: "#3a3a3f" }}>{item}</span>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: 24, borderTop: "1px solid #e8e8ed" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 12 }}>
            Sources
          </div>
          {unlocked.sources.map(({ label, url }) => (
            <div key={label} style={{ fontSize: 13.5, lineHeight: 1.7, color: "#515154" }}>
              {url ? (
                <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: "#17a673", textDecoration: "none" }}>
                  {label}
                </a>
              ) : (
                label
              )}
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <div
      style={{
        background: "#f5f5f7",
        borderRadius: 20,
        padding: "34px 30px",
        border: "1px solid #e8e8ed",
      }}
    >
      <div style={{ fontSize: 11, fontWeight: 700, color: "#17a673", textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 10 }}>
        {remaining} more sections
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.5px", color: "#0a0a0f", margin: "0 0 10px", lineHeight: 1.25 }}>
        Keep reading — no download required
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.65, color: "#515154", margin: "0 0 20px" }}>
        The remaining sections cover ABNs, MAC coverage variation, panel scope,
        genetic testing scrutiny, and order-entry validation — plus the full
        checklist and sources. Enter your email and the rest opens on this page.
      </p>

      <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div aria-hidden="true" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap" }}>
          <label htmlFor="subject_ref_resource">Leave this field empty</label>
          <input
            id="subject_ref_resource"
            name="subject_ref"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            onChange={(e) => (honeypot.current = e.target.value)}
          />
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@yourlab.com"
            aria-label="Email address"
            style={{
              flex: "1 1 220px", padding: "13px 16px", fontSize: 15,
              border: "1px solid #d2d2d7", borderRadius: 12, background: "#fff",
              color: "#0a0a0f", outline: "none",
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "13px 26px", borderRadius: 12, border: "none",
              background: loading ? "#8fbfa9" : "#17a673", color: "#fff",
              fontSize: 15, fontWeight: 700, cursor: loading ? "default" : "pointer",
            }}
          >
            {loading ? "Opening…" : "Keep reading"}
          </button>
        </div>

        {error && (
          <div style={{ fontSize: 13.5, color: "#c0392b", lineHeight: 1.5 }}>{error}</div>
        )}

        <p style={{ fontSize: 12.5, color: "#86868b", lineHeight: 1.6, margin: 0 }}>
          One email to open the rest of this page. We won&apos;t add you to a mailing
          list or share it — see our{" "}
          <a href="/privacy" style={{ color: "#17a673", textDecoration: "none" }}>privacy policy</a>.
        </p>
      </form>
    </div>
  );
}
