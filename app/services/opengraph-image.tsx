import { ogCard, ogSize, ogContentType } from "@/lib/og-card";

export const alt = "medbpo360 services";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({ eyebrow: "Services", title: "Full revenue cycle and back-office outsourcing", });
}
