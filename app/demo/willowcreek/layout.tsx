import type { Metadata } from "next";
import { cookies } from "next/headers";
import DemoBanner from "./_components/DemoBanner";
import WillowCreekNav from "./_components/WillowCreekNav";
import WillowCreekFooter from "./_components/WillowCreekFooter";
import DemoGate from "./_components/DemoGate";

export const metadata: Metadata = {
  title: {
    default: "Willow Creek Family Medicine (Sample Site by medbpo360)",
    template: "%s | Willow Creek Family Medicine (Sample Site by medbpo360)",
  },
  description:
    "A fictional family medicine practice built to demonstrate the Warm & Approachable website style direction — a sample site, not a real practice.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function WillowCreekLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const unlocked = cookieStore.get("wc_demo_unlock")?.value === "1";

  return (
    <div style={{ fontFamily: "'Nunito', -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif" }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&display=swap"
      />
      <DemoBanner />
      <WillowCreekNav />
      {unlocked ? children : <DemoGate />}
      <WillowCreekFooter />
    </div>
  );
}
