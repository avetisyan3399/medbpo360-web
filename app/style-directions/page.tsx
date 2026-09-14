import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Website Style Directions",
  description:
    "Four website style directions for medical practices, shown on the same example practice, so you can see what your site could look like before we build it.",
  openGraph: {
    title: "Website Style Directions | medbpo360",
    description:
      "Four website style directions for medical practices, shown on the same example practice — pick the one closest to what you want.",
    url: "https://medbpo360.com/style-directions",
  },
  alternates: {
    canonical: "https://medbpo360.com/style-directions",
  },
};

type Direction = {
  num: string;
  name: string;
  desc: string;
  fit: string[];
  mockClass: string;
  liveDemo?: string;
};

const directions: Direction[] = [
  {
    num: "01",
    name: "Clinical Trust",
    desc: "Navy, white, one accent color. Credentials and numbers up front — built for a visitor who's evaluating expertise before they trust it.",
    fit: ["Cardiology", "Labs & Diagnostics", "Multi-Specialty Groups"],
    mockClass: "mock--clinical",
    liveDemo: "/demo/harborview",
  },
  {
    num: "02",
    name: "Warm & Approachable",
    desc: "Softer palette, rounder type, no stat blocks. Built for a visitor who's a nervous or first-time patient, not a referring physician.",
    fit: ["Primary Care", "Behavioral Health"],
    mockClass: "mock--warm",
  },
  {
    num: "03",
    name: "Modern Minimal",
    desc: "Whitespace, confident type, one muted accent. Built for a solo or boutique practice that wants to read as premium, not clinical-template.",
    fit: ["Solo & Boutique Practices"],
    mockClass: "mock--minimal",
  },
  {
    num: "04",
    name: "Directory-First",
    desc: "Navigation and filtering built for scale. Built for a visitor whose job is finding the right location or provider, not forming a first impression.",
    fit: ["Multi-Location Groups", "Health Systems", "MSO / PE-Backed Groups"],
    mockClass: "mock--directory",
  },
];

const checklist = [
  { title: "Your brand", body: "Send your logo and brand colors if you already have them — or tell us you're starting fresh and we'll build from scratch." },
  { title: "Your specialty", body: "Which of our specialty and service pages your practice maps to, so the site's content matches your actual services." },
  { title: "Your locations", body: "One site or multiple? It changes how deep the navigation needs to go." },
  { title: "Your photos", body: "Real photos of your practice and providers if you have them, or we'll source placeholder imagery to start." },
  { title: "One final look", body: "Once it's built with your real name, specialty, and photos, you'll see it before anything goes live." },
];

export default function StyleDirectionsPage() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@700;800&family=Nunito:wght@400;700;800&family=Fraunces:ital,wght@0,600;0,700&family=IBM+Plex+Sans:wght@400;600;700&display=swap"
      />
      <style>{`
        .browser { border-radius: 12px; overflow: hidden; border: 1px solid #e8e8ed; box-shadow: 0 6px 24px -10px rgba(15,43,70,0.18); }
        .browser-bar { background: #e7e9ec; padding: 9px 12px; display: flex; align-items: center; gap: 8px; }
        .browser-dots { display: flex; gap: 5px; }
        .browser-dots span { width: 8px; height: 8px; border-radius: 50%; background: #c3c7cc; display: block; }
        .browser-url { background: #fff; border-radius: 5px; padding: 3px 10px; font-size: 11px; color: #8a9099; margin-left: 8px; font-family: -apple-system, sans-serif; }

        /* Clinical Trust */
        .mock--clinical { background: radial-gradient(ellipse 90% 60% at 50% 0%, #dde7ee 0%, #ffffff 65%); padding: 44px 36px 0; text-align: center; font-family: "Libre Franklin", -apple-system, sans-serif; }
        .mock--clinical .m-badge { display: inline-flex; align-items: center; gap: 5px; background: #ffffff; border: 1px solid #dde3e8; border-radius: 980px; padding: 5px 12px 5px 8px; margin-bottom: 18px; box-shadow: 0 2px 10px rgba(15,43,70,0.06); }
        .mock--clinical .m-badge span { font-size: 10.5px; font-weight: 700; color: #0f2b46; letter-spacing: 0.2px; }
        .mock--clinical .m-eyebrow { font-size: 11px; font-weight: 800; letter-spacing: 1.4px; color: #128a5e; text-transform: uppercase; margin-bottom: 12px; }
        .mock--clinical .m-head { font-size: 27px; font-weight: 800; letter-spacing: -0.8px; color: #0f2b46; line-height: 1.15; margin-bottom: 12px; }
        .mock--clinical .m-sub { font-size: 14px; color: #5f6b76; max-width: 380px; margin: 0 auto 26px; line-height: 1.55; }
        .mock--clinical .m-cta { display: inline-block; background: #0f2b46; color: #fff; font-size: 13px; font-weight: 700; padding: 12px 26px; border-radius: 8px; box-shadow: 0 8px 20px rgba(15,43,70,0.28); }
        .mock--clinical .m-stats { display: grid; grid-template-columns: repeat(3, 1fr); background: #ffffff; border: 1px solid #e8ecf0; border-radius: 12px; margin: 30px 28px 0; overflow: hidden; box-shadow: 0 12px 30px -8px rgba(15,43,70,0.16); transform: translateY(20px); }
        .mock--clinical .m-stats div { padding: 16px 8px; border-right: 1px solid #e8ecf0; }
        .mock--clinical .m-stats div:last-child { border-right: none; }
        .mock--clinical .m-stat-val { font-variant-numeric: tabular-nums; font-size: 18px; font-weight: 800; color: #0f2b46; }
        .mock--clinical .m-stat-label { font-size: 10.5px; color: #8a929a; margin-top: 2px; }
        .mock--clinical .m-spacer { height: 44px; }

        /* Warm & Approachable */
        .mock--warm { background: #f9f4ec; padding: 40px 36px 36px; text-align: center; font-family: "Nunito", -apple-system, sans-serif; }
        .mock--warm .m-eyebrow { font-size: 12px; font-weight: 700; color: #b3667a; margin-bottom: 12px; }
        .mock--warm .m-head { font-size: 26px; font-weight: 800; color: #4a3c2e; line-height: 1.2; margin-bottom: 12px; }
        .mock--warm .m-sub { font-size: 14px; color: #8a7a68; max-width: 380px; margin: 0 auto 22px; line-height: 1.6; }
        .mock--warm .m-cta { display: inline-block; background: #b3667a; color: #fff; font-size: 13px; font-weight: 700; padding: 12px 28px; border-radius: 980px; }
        .mock--warm .m-foot { margin-top: 20px; font-size: 12.5px; color: #a3937f; font-weight: 700; }

        /* Modern Minimal */
        .mock--minimal { background: #ffffff; padding: 54px 40px; text-align: left; font-family: "Fraunces", Georgia, serif; }
        .mock--minimal .m-eyebrow { font-family: "IBM Plex Sans", -apple-system, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 1.8px; color: #8a8a8a; text-transform: uppercase; margin-bottom: 18px; }
        .mock--minimal .m-head { font-size: 34px; font-weight: 600; font-style: italic; color: #17181a; line-height: 1.15; margin-bottom: 16px; max-width: 360px; }
        .mock--minimal .m-sub { font-family: "IBM Plex Sans", -apple-system, sans-serif; font-size: 13.5px; color: #6b6b6b; margin-bottom: 24px; max-width: 300px; line-height: 1.6; }
        .mock--minimal .m-cta { font-family: "IBM Plex Sans", -apple-system, sans-serif; font-size: 12.5px; font-weight: 600; color: #17181a; border-bottom: 1.5px solid #5b7c99; padding-bottom: 3px; }

        /* Directory-First */
        .mock--directory { background: #f4f6f9; padding: 26px 28px 30px; font-family: "IBM Plex Sans", -apple-system, sans-serif; }
        .mock--directory .m-topbar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; flex-wrap: wrap; gap: 10px; }
        .mock--directory .m-brand { font-size: 14px; font-weight: 700; color: #1c2b3a; }
        .mock--directory .m-chips { display: flex; gap: 6px; }
        .mock--directory .m-chip { font-size: 10.5px; font-weight: 600; color: #2f6fb0; background: #e2edf7; padding: 4px 10px; border-radius: 5px; }
        .mock--directory .m-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .mock--directory .m-card { background: #ffffff; border: 1px solid #d7dee6; border-radius: 8px; padding: 14px 12px; }
        .mock--directory .m-card-name { font-size: 12.5px; font-weight: 700; color: #1c2b3a; margin-bottom: 5px; line-height: 1.3; }
        .mock--directory .m-card-meta { font-size: 10.5px; color: #64748b; margin-bottom: 8px; line-height: 1.5; }
        .mock--directory .m-card-link { font-size: 10.5px; font-weight: 700; color: #2f6fb0; }

        @media (max-width: 640px) {
          .mock--clinical .m-stats, .mock--directory .m-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <Nav />
      <main style={{ background: "#fff" }}>
        {/* HERO */}
        <section style={{ paddingTop: 140, paddingBottom: 40, paddingLeft: 24, paddingRight: 24 }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#17a673", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16 }}>
              Website Design &amp; Social Media
            </p>
            <h1 style={{ fontSize: "clamp(28px, 4.5vw, 44px)", fontWeight: 700, letterSpacing: "-1.2px", lineHeight: 1.12, color: "#0a0a0f", marginBottom: 18, maxWidth: 760 }}>
              See What Your Practice&apos;s Website Could Look Like
            </h1>
            <p style={{ fontSize: 17, color: "#515154", lineHeight: 1.65, maxWidth: 620 }}>
              Below is the same fictional practice, shown four different ways, so the differences are easy to see side by side. Pick the direction closest to what you want, and we&apos;ll shape it around your specialty, brand, and photos from there.
            </p>
          </div>
        </section>

        {/* DIRECTIONS */}
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
          {directions.map((d) => (
            <section key={d.num} style={{ marginBottom: 56 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 18, marginBottom: 18 }}>
                <span style={{
                  fontVariantNumeric: "tabular-nums",
                  fontSize: 32, fontWeight: 700, letterSpacing: "-0.5px",
                  lineHeight: 1, color: "#d2d2d7", flexShrink: 0, minWidth: 46, marginTop: -2,
                }}>
                  {d.num}
                </span>
                <div>
                  <h2 style={{ fontSize: 21, fontWeight: 700, letterSpacing: "-0.3px", color: "#0f2b46", margin: "0 0 6px" }}>
                    {d.name}
                  </h2>
                  <p style={{ fontSize: 14.5, color: "#515154", lineHeight: 1.6, maxWidth: "58ch", margin: "0 0 10px" }}>
                    {d.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
                    <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: 0.4, textTransform: "uppercase", color: "#86868b", marginRight: 2 }}>
                      Best fit:
                    </span>
                    {d.fit.map((f) => (
                      <span key={f} style={{ fontSize: 12, fontWeight: 600, color: "#0f2b46", background: "#e8eef4", borderRadius: 6, padding: "3px 9px" }}>
                        {f}
                      </span>
                    ))}
                  </div>
                  {d.liveDemo && (
                    <Link href={d.liveDemo} style={{ display: "inline-block", fontSize: 12.5, fontWeight: 700, color: "#128a5e", textDecoration: "none", marginTop: 10 }}>
                      View a live, clickable demo of this direction &rarr;
                    </Link>
                  )}
                </div>
              </div>

              <div className="browser">
                <div className="browser-bar">
                  <div className="browser-dots"><span></span><span></span><span></span></div>
                  <div className="browser-url">harborviewcardiology.com{d.mockClass === "mock--directory" ? "/locations" : ""}</div>
                </div>

                {d.mockClass === "mock--clinical" && (
                  <div className="mock--clinical">
                    <div className="m-badge">
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1l5 2v4c0 3.3-2.1 5.7-5 6.5-2.9-.8-5-3.2-5-6.5V3l5-2z" fill="#128a5e" /><path d="M4.7 7.1l1.5 1.5 3-3" stroke="#fff" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                      <span>Board-Certified Team</span>
                    </div>
                    <div className="m-eyebrow">Cardiology &middot; 3 Locations</div>
                    <div className="m-head">Advanced Heart Care, Close to Home</div>
                    <div className="m-sub">Board-certified cardiologists across three locations. Now accepting new patients.</div>
                    <div className="m-cta">Request an Appointment</div>
                    <div className="m-stats">
                      <div><div className="m-stat-val">12</div><div className="m-stat-label">Physicians</div></div>
                      <div><div className="m-stat-val">3</div><div className="m-stat-label">Locations</div></div>
                      <div><div className="m-stat-val">Same-Week</div><div className="m-stat-label">Appointments</div></div>
                    </div>
                    <div className="m-spacer"></div>
                  </div>
                )}

                {d.mockClass === "mock--warm" && (
                  <div className="mock--warm">
                    <div className="m-eyebrow">Cardiology Care</div>
                    <div className="m-head">Heart Care That Still Feels Personal</div>
                    <div className="m-sub">Three neighborhood locations, one team that knows your name. New patients always welcome.</div>
                    <div className="m-cta">Book a Visit</div>
                    <div className="m-foot">3 friendly locations near you</div>
                  </div>
                )}

                {d.mockClass === "mock--minimal" && (
                  <div className="mock--minimal">
                    <div className="m-eyebrow">Harborview Cardiology</div>
                    <div className="m-head">Heart care, simplified.</div>
                    <div className="m-sub">Three locations. One standard of care. Now accepting new patients.</div>
                    <div className="m-cta">Request an Appointment &rarr;</div>
                  </div>
                )}

                {d.mockClass === "mock--directory" && (
                  <div className="mock--directory">
                    <div className="m-topbar">
                      <div className="m-brand">Harborview Medical Group — Cardiology</div>
                      <div className="m-chips">
                        <span className="m-chip">All Locations</span>
                        <span className="m-chip">Now Accepting</span>
                        <span className="m-chip">Telehealth</span>
                      </div>
                    </div>
                    <div className="m-grid">
                      <div className="m-card">
                        <div className="m-card-name">Downtown Cardiology Center</div>
                        <div className="m-card-meta">12 Physicians<br />Accepting New Patients</div>
                        <div className="m-card-link">View Providers &rarr;</div>
                      </div>
                      <div className="m-card">
                        <div className="m-card-name">Northside Heart Institute</div>
                        <div className="m-card-meta">5 Physicians<br />Accepting New Patients</div>
                        <div className="m-card-link">View Providers &rarr;</div>
                      </div>
                      <div className="m-card">
                        <div className="m-card-name">Riverside Cardiology</div>
                        <div className="m-card-meta">4 Physicians<br />Waitlist Open</div>
                        <div className="m-card-link">View Providers &rarr;</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          ))}

          {/* INTAKE */}
          <section style={{ background: "#0f2b46", borderRadius: 20, padding: "36px 32px", marginTop: 60, marginBottom: 36, color: "#fff" }}>
            <h2 style={{ fontSize: 21, fontWeight: 700, letterSpacing: "-0.4px", margin: "0 0 8px" }}>
              Once You Pick a Direction
            </h2>
            <p style={{ fontSize: 14, opacity: 0.75, margin: "0 0 24px", maxWidth: "52ch", lineHeight: 1.6 }}>
              The style is the starting point. Here&apos;s what we&apos;ll need from you before we start building.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
              {checklist.map((item, i) => (
                <div key={item.title} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{
                    fontVariantNumeric: "tabular-nums", fontSize: 12, fontWeight: 700,
                    background: "rgba(255,255,255,0.14)", borderRadius: "50%",
                    width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: 1,
                  }}>
                    {i + 1}
                  </span>
                  <span style={{ fontSize: 14, lineHeight: 1.5 }}>
                    <strong>{item.title}</strong> — {item.body}
                  </span>
                </div>
              ))}
            </div>
            <Link href="/contact" style={{
              display: "inline-block", padding: "13px 26px",
              borderRadius: 980, background: "#17a673",
              color: "#fff", fontSize: 14, fontWeight: 700, textDecoration: "none",
            }}>
              Talk to Our Team
            </Link>
          </section>

          <p style={{ fontSize: 12.5, color: "#86868b", lineHeight: 1.6, paddingBottom: 60, borderTop: "1px solid #e8e8ed", paddingTop: 22 }}>
            &ldquo;Harborview Cardiology&rdquo; above is a fictional example, used to compare styles side by side — not a real client or outcome.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
