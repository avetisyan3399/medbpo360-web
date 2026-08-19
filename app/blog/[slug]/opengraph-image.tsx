import { ogCard, ogSize, ogContentType } from "@/lib/og-card";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export const alt = "medbpo360 blog article";
export const size = ogSize;
export const contentType = ogContentType;

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return ogCard({ eyebrow: "Blog", title: "medbpo360" });

  return ogCard({
    eyebrow: post.category,
    title: post.title,
    footer: `medbpo360.com/blog · ${post.readTime}`,
  });
}
