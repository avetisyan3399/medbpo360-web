"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { LINKEDIN_PARTNER_ID, isTrackingAllowed } from "@/lib/linkedin";

export default function LinkedInInsight() {
  const pathname = usePathname();

  if (!LINKEDIN_PARTNER_ID) return null;
  if (!isTrackingAllowed(pathname)) return null;

  const partnerId = JSON.stringify(LINKEDIN_PARTNER_ID);

  return (
    <>
      <Script id="linkedin-insight-init" strategy="afterInteractive">
        {`window._linkedin_partner_id = ${partnerId};
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(window._linkedin_partner_id);`}
      </Script>
      <Script id="linkedin-insight" strategy="afterInteractive">
        {`(function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}var s=document.getElementsByTagName("script")[0];var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b,s);})(window.lintrk);`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://px.ads.linkedin.com/collect/?pid=${LINKEDIN_PARTNER_ID}&fmt=gif`}
        />
      </noscript>
    </>
  );
}
