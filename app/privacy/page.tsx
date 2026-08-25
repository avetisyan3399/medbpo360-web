import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How medbpo360 handles information collected through medbpo360.com — what the contact form collects, which analytics and advertising tools run on the site, and how to make a privacy request.",
  openGraph: {
    title: "Privacy Policy | medbpo360",
    description:
      "How medbpo360 handles information collected through medbpo360.com.",
    url: "https://medbpo360.com/privacy",
  },
  alternates: {
    canonical: "https://medbpo360.com/privacy",
  },
};

const EFFECTIVE_DATE = "August 24, 2026";

const sections = [
  {
    id: "scope",
    heading: "What this policy covers",
    body: [
      "This policy describes how medbpo360 handles information collected through this website, medbpo360.com.",
      "It does not cover protected health information (PHI) or other client data that medbpo360 processes on behalf of healthcare clients under a services agreement. That information is governed by those agreements and by the Business Associate Agreements executed with each client, not by this policy. Nothing on this public website collects PHI, and no advertising or analytics tools are loaded on the client portal.",
    ],
  },
  {
    id: "collect",
    heading: "Information we collect",
    body: [
      "Information you give us. When you submit the contact form, we collect your name, organization name, organization type, number of providers, phone number, email address, the service you're interested in, and any message you write. All of these are things you choose to enter.",
      "Information collected automatically. Like most websites, we receive standard technical information when you visit — IP address, browser and device type, pages viewed, time spent, and the site or search that referred you. This comes from the analytics and advertising tools described below.",
    ],
  },
  {
    id: "tools",
    heading: "Analytics and advertising tools",
    list: [
      {
        name: "Google Analytics",
        text: "Measures site traffic and which pages people read. Google sets cookies to distinguish one visitor from another across visits.",
      },
      {
        name: "LinkedIn Insight Tag",
        text: "Measures the performance of LinkedIn advertising, reports aggregate professional characteristics of site visitors, and builds audiences we can advertise to on LinkedIn. It sets cookies and reports your visit to LinkedIn. It does not run on the client portal or any page behind a login.",
      },
      {
        name: "Vercel",
        text: "Hosts this website and processes server request logs as part of delivering it.",
      },
      {
        name: "Resend",
        text: "Delivers contact form submissions to our inbox as email. It processes whatever you entered in the form in order to send that message.",
      },
    ],
  },
  {
    id: "use",
    heading: "How we use information",
    body: [
      "We use contact form submissions to respond to your inquiry and to follow up about the services you asked about.",
      "We use analytics and advertising information to understand which content is useful, to measure whether our advertising reaches the right audience, and to show medbpo360 advertising to people who have visited this site.",
      "We do not sell your information. We do not share contact form submissions with anyone other than the service providers named above, and those providers may only use it to deliver their service to us.",
    ],
  },
  {
    id: "retention",
    heading: "How long we keep it",
    body: [
      "We retain contact form submissions for 24 months from the date you send them, after which they are deleted. If you ask us to delete yours sooner, we will.",
      "Analytics and advertising data is retained according to the retention settings of the providers named above.",
    ],
  },
  {
    id: "choices",
    heading: "Your choices",
    body: [
      "You can ask us what information we hold about you, ask us to correct it, or ask us to delete it. Email us and we will respond. We do not require you to have an account or pay a fee to make a request.",
      "You can opt out of analytics and advertising tracking independently of us: browsers let you block or delete cookies, Google publishes an opt-out browser add-on for Google Analytics, and LinkedIn lets you control ad targeting in your LinkedIn account settings.",
      "You can decline to provide information at any time — the contact form is the only place on this site that asks for any, and you can reach us by phone or email instead.",
    ],
  },
  {
    id: "geography",
    heading: "Where we operate",
    body: [
      "medbpo360 provides services to healthcare organizations in the United States, and this website is intended for a United States audience. Information collected through it is processed in the United States.",
      "This site is not directed to children, and we do not knowingly collect information from anyone under 18.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    body: [
      "If we change how we handle information collected through this site — including adding or removing an analytics or advertising tool — we will update this page and change the effective date above.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main>
        <section
          style={{
            paddingTop: 120,
            paddingBottom: 40,
            padding: "120px 24px 40px",
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, #dde7ee 0%, #f5f5f7 60%)",
          }}
        >
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-1.5px",
                color: "#0a0a0f",
                margin: 0,
              }}
            >
              Privacy Policy
            </h1>
            <p style={{ fontSize: 15, color: "#515154", marginTop: 12 }}>
              Effective {EFFECTIVE_DATE}
            </p>
          </div>
        </section>

        <section style={{ padding: "20px 24px 80px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            {sections.map(({ id, heading, body, list }) => (
              <div key={id} style={{ marginBottom: 44 }}>
                <h2
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    letterSpacing: "-0.4px",
                    color: "#0a0a0f",
                    marginBottom: 14,
                  }}
                >
                  {heading}
                </h2>
                {body?.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    style={{
                      fontSize: 15.5,
                      lineHeight: 1.7,
                      color: "#3a3a3f",
                      marginBottom: 14,
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
                {list && (
                  <div style={{ marginTop: 4 }}>
                    {list.map(({ name, text }) => (
                      <div
                        key={name}
                        style={{
                          padding: "14px 18px",
                          background: "#f5f5f7",
                          borderRadius: 12,
                          borderLeft: "3px solid #17a673",
                          marginBottom: 12,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 15,
                            fontWeight: 600,
                            color: "#0a0a0f",
                            marginBottom: 4,
                          }}
                        >
                          {name}
                        </div>
                        <div
                          style={{
                            fontSize: 14.5,
                            lineHeight: 1.65,
                            color: "#515154",
                          }}
                        >
                          {text}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div
              style={{
                marginTop: 8,
                padding: "24px 26px",
                background: "#0a0a0f",
                borderRadius: 16,
                color: "#86868b",
              }}
            >
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#f5f5f7",
                  marginTop: 0,
                  marginBottom: 12,
                }}
              >
                How to reach us
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                For any question about this policy, or to make a request about
                your information, contact us:
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.9, marginTop: 14, marginBottom: 0 }}>
                MedBPO360 LLC
                <br />
                4100 W Alameda Ave
                <br />
                Burbank, CA 91505
                <br />
                <a
                  href="mailto:info@medbpo360.com"
                  style={{ color: "#17a673", textDecoration: "none" }}
                >
                  info@medbpo360.com
                </a>
                <br />
                <a
                  href="tel:+13233326768"
                  style={{ color: "#17a673", textDecoration: "none" }}
                >
                  (323) 332-6768
                </a>
              </p>
            </div>

            <p style={{ fontSize: 14, color: "#86868b", marginTop: 28 }}>
              Looking for something else?{" "}
              <Link href="/contact" style={{ color: "#17a673", textDecoration: "none" }}>
                Contact us
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
