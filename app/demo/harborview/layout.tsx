import type { Metadata } from "next";
import DemoBanner from "./_components/DemoBanner";
import HarborviewNav from "./_components/HarborviewNav";
import HarborviewFooter from "./_components/HarborviewFooter";

export const metadata: Metadata = {
  title: {
    default: "Harborview Cardiology (Sample Site by medbpo360)",
    template: "%s | Harborview Cardiology (Sample Site by medbpo360)",
  },
  description:
    "A fictional cardiology practice built to demonstrate the Clinical Trust website style direction — a sample site, not a real practice.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HarborviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif" }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@700;800&display=swap"
      />
      <DemoBanner />
      <HarborviewNav />
      {children}
      <HarborviewFooter />
    </div>
  );
}
