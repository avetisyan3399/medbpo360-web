import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Enterprise Medical Billing & BPO Outsourcing",
  description:
    "Get in touch with medbpo360. We serve health systems, MSOs, and large medical groups nationwide. Schedule a free revenue cycle assessment.",
  keywords: [
    "contact medbpo360",
    "enterprise medical billing consultation",
    "health system RCM consultation",
    "MSO billing partner contact",
  ],
  openGraph: {
    title: "Contact medbpo360 | Free Revenue Cycle Assessment",
    description:
      "Talk to our team about billing, credentialing, and back-office outsourcing for your organization. Serving health systems and large medical groups nationwide.",
    url: "https://medbpo360.com/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
