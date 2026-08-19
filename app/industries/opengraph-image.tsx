import { ogCard, ogSize, ogContentType } from "@/lib/og-card";

export const alt = "medbpo360 industries";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({ eyebrow: "Who We Serve", title: "From solo providers to health systems", });
}
