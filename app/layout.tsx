import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";
import { GTM_ID } from "@/lib/analytics";

export const metadata: Metadata = {
  title: {
    default: "medbpo360 | Enterprise Medical Billing, RCM & BPO Outsourcing",
    template: "%s | medbpo360",
  },
  description:
    "Enterprise-scale medical billing, credentialing, and back-office outsourcing for health systems, MSOs, and large medical groups. Standardized processes, executive reporting, built to scale.",
  keywords: [
    "enterprise medical billing outsourcing",
    "health system revenue cycle management",
    "MSO billing outsourcing",
    "bulk provider credentialing services",
    "medical BPO services",
    "back office outsourcing healthcare",
    "multi-site medical group billing",
    "medical billing call center outsourcing",
    "PE-backed medical group RCM",
  ],
  authors: [{ name: "medbpo360" }],
  creator: "medbpo360",
  metadataBase: new URL("https://medbpo360.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medbpo360.com",
    siteName: "medbpo360",
    title: "medbpo360 | Enterprise Medical Billing, RCM & BPO Outsourcing",
    description:
      "Enterprise-scale medical billing, credentialing, and back-office outsourcing for health systems, MSOs, and large medical groups.",
  },
  twitter: {
    card: "summary_large_image",
    title: "medbpo360 | Enterprise Medical Billing, RCM & BPO Outsourcing",
    description:
      "Standardized billing, credentialing, and back-office outsourcing built for health systems and large medical groups.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "medbpo360",
              description:
                "Enterprise-scale medical billing, credentialing, and back-office outsourcing for health systems and large medical groups.",
              url: "https://medbpo360.com",
              telephone: "+13233326768",
              email: "info@medbpo360.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "4100 W Alameda Ave",
                addressLocality: "Burbank",
                addressRegion: "CA",
                postalCode: "91505",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              serviceType: [
                "Medical Billing",
                "Revenue Cycle Management",
                "Provider Credentialing",
                "Payer Enrollment",
                "Call Center Services",
                "Back-Office Outsourcing",
              ],
            }),
          }}
        />
        <Analytics />
      </head>
      <body className="min-h-full flex flex-col">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}
