export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, params?: EventParams) {
  if (typeof window === "undefined") return;
  const w = window as typeof window & { dataLayer?: unknown[] };
  if (!w.dataLayer) return;
  w.dataLayer.push({ event: name, ...params });
}
