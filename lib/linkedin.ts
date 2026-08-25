// LinkedIn Insight Tag — advertising audience building and conversion tracking.
//
// Inert unless NEXT_PUBLIC_LINKEDIN_PARTNER_ID is set, so nothing third-party
// loads in any environment that hasn't explicitly opted in.
//
// The tag must never load on authenticated or client-portal routes. It is a
// third-party advertising script, and the portal is intended to show
// credentialing status and billing reports — exactly the kind of page an ad
// pixel has no business running on. See EXCLUDED_PATHS.

export const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

/**
 * Route prefixes the Insight Tag must never load on.
 *
 * Known limitation: this fully isolates a direct page load of an excluded
 * route (verified — no script, no pixel, no `lintrk`). On a client-side
 * navigation *into* an excluded route from a marketing page, React unmounts
 * the tag but the browser keeps the already-executed insight.min.js in memory.
 * Harmless while /login is a static page with no client data. Before the
 * portal serves real credentialing or billing data, move it behind its own
 * route segment with a layout that excludes this tag, or onto a separate
 * app/subdomain — do not rely on this path list alone.
 */
export const EXCLUDED_PATHS = ["/login"];

export function isTrackingAllowed(pathname: string) {
  return !EXCLUDED_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
}

type Lintrk = (action: "track", data: { conversion_id: number }) => void;

/**
 * Conversion ids come from Campaign Manager and only exist once a campaign
 * does. Undefined until then, which makes trackLinkedInConversion a no-op.
 */
export const LINKEDIN_CONVERSIONS = {
  contactFormSubmit: process.env.NEXT_PUBLIC_LINKEDIN_CONV_CONTACT
    ? Number(process.env.NEXT_PUBLIC_LINKEDIN_CONV_CONTACT)
    : undefined,
};

/**
 * Report a conversion to LinkedIn. Pass only non-identifying context — never
 * form field values, names, or email addresses.
 */
export function trackLinkedInConversion(conversionId?: number) {
  if (typeof window === "undefined") return;
  if (!conversionId || Number.isNaN(conversionId)) return;
  const w = window as typeof window & { lintrk?: Lintrk };
  if (!w.lintrk) return;
  w.lintrk("track", { conversion_id: conversionId });
}
