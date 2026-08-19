import { ogCard, ogSize, ogContentType } from "@/lib/og-card";
import { specialties, getSpecialty } from "@/lib/specialties";

export const alt = "medbpo360 specialty";
export const size = ogSize;
export const contentType = ogContentType;

export async function generateStaticParams() {
  return specialties.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getSpecialty(slug);
  if (!page) return ogCard({ eyebrow: "Specialties", title: "medbpo360" });
  return ogCard({
    eyebrow: "Specialties",
    title: page.name,
    subtitle: page.tagline,
  });
}
