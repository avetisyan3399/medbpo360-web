import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";
import { GTM_ID } from "@/lib/analytics";

export const metadata: Metadata = {
  title: {
    default: "medbpo360 | Medical Billing, RCM & BPO Outsourcing",
    template: "%s | medbpo360",
  },
  description:
    "Medical billing, credentialing, and back-office outsourcing for practices of any size — solo providers and small practices, MSOs, and health systems. Standardized processes, transparent reporting.",
  keywords: [
    "medical billing outsourcing",
    "independent medical practice billing",
    "health system revenue cycle management",
    "MSO billing outsourcing",
    "provider credentialing services",
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
    title: "medbpo360 | Medical Billing, RCM & BPO Outsourcing",
    description:
      "Medical billing, credentialing, and back-office outsourcing for practices of any size, from solo providers to health systems and MSOs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "medbpo360 | Medical Billing, RCM & BPO Outsourcing",
    description:
      "Standardized billing, credentialing, and back-office outsourcing built for medical practices of any size.",
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
  verification: {
    google: "HjJ9lE6sN_aNA0DpL5cLvDQDZSXHngIMJ5fZozo_A8Y",
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
                "Medical billing, credentialing, and back-office outsourcing for medical practices of any size, from solo providers to health systems.",
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
