import { ogCard, ogSize, ogContentType } from "@/lib/og-card";

export const alt = "Contact medbpo360";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({ eyebrow: "Contact", title: "Talk to our team", });
}
