import { ogCard, ogSize, ogContentType } from "@/lib/og-card";

export const alt = "medbpo360 specialties";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({ eyebrow: "Specialties", title: "Where we go deep rather than broad", });
}
