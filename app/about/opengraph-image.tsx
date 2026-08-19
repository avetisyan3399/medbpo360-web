import { ogCard, ogSize, ogContentType } from "@/lib/og-card";

export const alt = "About medbpo360";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({ eyebrow: "About", title: "Revenue cycle sized to fit you", });
}
