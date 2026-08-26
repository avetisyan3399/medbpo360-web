export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

type EventParams = Record<string, string | number | boolean | undefined>;

type Gtag = (command: "event", name: string, params?: EventParams) => void;

/**
 * Report a custom event to whichever analytics loader is actually running.
 *
 * The two loaders take different shapes and neither understands the other's:
 *
 * - **GTM** listens for objects pushed onto `dataLayer` with an `event` key.
 * - **gtag.js** ignores those entirely. It needs a `gtag("event", …)` call.
 *
 * This used to push the GTM shape unconditionally. On a gtag-only site — which
 * is what medbpo360.com runs — every event was therefore accepted by the array
 * and silently discarded, with no error to notice. Dispatch on what's present
 * rather than assuming.
 */
export function trackEvent(name: string, params?: EventParams) {
  if (typeof window === "undefined") return;
  const w = window as typeof window & { dataLayer?: unknown[]; gtag?: Gtag };

  if (GTM_ID && w.dataLayer) {
    w.dataLayer.push({ event: name, ...params });
    return;
  }

  if (typeof w.gtag === "function") {
    w.gtag("event", name, params);
    return;
  }

  // Analytics not configured, or blocked by the browser. Nothing to do.
}
