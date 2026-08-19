import { ogCard, ogSize, ogContentType } from "@/lib/og-card";
import { orgTypes, getOrgType } from "@/lib/org-types";

export const alt = "medbpo360 industry";
export const size = ogSize;
export const contentType = ogContentType;

export async function generateStaticParams() {
  return orgTypes.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getOrgType(slug);
  if (!page) return ogCard({ eyebrow: "Who We Serve", title: "medbpo360" });
  return ogCard({
    eyebrow: "Who We Serve",
    title: page.name,
    subtitle: page.tagline,
  });
}
