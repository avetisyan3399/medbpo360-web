import { ogCard, ogSize, ogContentType } from "@/lib/og-card";
import { servicePages, getServicePage } from "@/lib/service-pages";

export const alt = "medbpo360 service";
export const size = ogSize;
export const contentType = ogContentType;

export async function generateStaticParams() {
  return servicePages.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return ogCard({ eyebrow: "Services", title: "medbpo360" });
  return ogCard({
    eyebrow: "Services",
    title: page.name,
    subtitle: page.tagline,
  });
}
