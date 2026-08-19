import { ogCard, ogSize, ogContentType } from "@/lib/og-card";
import { specialtyServicePages } from "@/lib/specialty-service-pages";
import { getSpecialty } from "@/lib/specialties";
import { getServicePage } from "@/lib/service-pages";

export const alt = "medbpo360 specialty service";
export const size = ogSize;
export const contentType = ogContentType;

export async function generateStaticParams() {
  return specialtyServicePages.map((p) => ({
    slug: p.specialtySlug,
    service: p.serviceSlug,
  }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}) {
  const { slug, service } = await params;
  const specialty = getSpecialty(slug);
  const servicePage = getServicePage(service);
  // Specialty as the eyebrow and service as the title reads cleanly and avoids
  // repeating the specialty name, which the combo's own headline does.
  return ogCard({
    eyebrow: specialty?.name ?? "Specialties",
    title: servicePage?.name ?? "medbpo360",
    subtitle: specialty && servicePage ? specialty.tagline : undefined,
  });
}
