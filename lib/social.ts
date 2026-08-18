// Public social profiles — the single source of truth for the footer links
// and the Organization schema's `sameAs` array in app/layout.tsx.
//
// Only list profiles that actually have content. Linking an empty profile from
// the footer reads worse than not linking it at all. The Instagram account exists
// but has nothing posted yet — add it here once it does.
//
// Facebook Page usernames are case-insensitive: the Page was registered as
// `MedBpo360`, but the lowercase form resolves to the same Page and matches both
// the domain and the LinkedIn slug, so that's the canonical spelling used here.

export type SocialProfile = {
  label: string;
  href: string;
};

export const socialProfiles: SocialProfile[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/medbpo360" },
  { label: "Facebook", href: "https://www.facebook.com/medbpo360" },
];

export const socialUrls = socialProfiles.map(({ href }) => href);
