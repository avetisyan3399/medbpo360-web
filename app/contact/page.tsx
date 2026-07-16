import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Medical Billing & BPO Outsourcing",
  description:
    "Get in touch with medbpo360. We serve practices of every size — solo providers, small practices, MSOs, and health systems nationwide. Schedule a free revenue cycle assessment.",
  keywords: [
    "contact medbpo360",
    "medical billing consultation",
    "health system RCM consultation",
    "MSO billing partner contact",
  ],
  openGraph: {
    title: "Contact medbpo360 | Free Revenue Cycle Assessment",
    description:
      "Talk to our team about billing, credentialing, and back-office outsourcing for your practice. Serving practices of every size nationwide.",
    url: "https://medbpo360.com/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
