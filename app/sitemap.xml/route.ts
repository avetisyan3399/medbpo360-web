import { getAllPosts } from "@/lib/blog";
import { specialties } from "@/lib/specialties";
import { orgTypes } from "@/lib/org-types";
import { servicePages } from "@/lib/service-pages";
import { specialtyServicePages } from "@/lib/specialty-service-pages";

export const revalidate = 3600;

type Entry = {
  url: string;
  lastModified: string;
  changeFrequency: string;
  priority: number;
};

function escapeXml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function entryXml(e: Entry): string {
  return `<url><loc>${escapeXml(e.url)}</loc><lastmod>${e.lastModified}</lastmod><changefreq>${e.changeFrequency}</changefreq><priority>${e.priority}</priority></url>`;
}

export async function GET() {
  const base = "https://medbpo360.com";
  const now = new Date().toISOString();

  const staticPages: Entry[] = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/specialties`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const blogPages: Entry[] = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date).toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const serviceLandingPages: Entry[] = servicePages.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const industryPages: Entry[] = orgTypes.map((o) => ({
    url: `${base}/industries/${o.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const specialtyPages: Entry[] = specialties.map((s) => ({
    url: `${base}/specialties/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const specialtyServiceComboPages: Entry[] = specialtyServicePages.map((p) => ({
    url: `${base}/specialties/${p.specialtySlug}/${p.serviceSlug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const all = [
    ...staticPages,
    ...serviceLandingPages,
    ...industryPages,
    ...specialtyPages,
    ...specialtyServiceComboPages,
    ...blogPages,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${all.map(entryXml).join("\n")}\n</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "text/xml; charset=UTF-8",
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  });
}
