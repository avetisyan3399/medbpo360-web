import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type Post = {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  excerpt: string;
  category: string;
  keyword: string;
  author: string;
  readTime: string;
  relatedService?: string;
  relatedSpecialty?: string;
  content?: string;
};

export { CATEGORIES } from "./blog-constants";

export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title ?? "",
      date: data.date ?? "",
      updated: data.updated ?? undefined,
      excerpt: data.excerpt ?? "",
      category: data.category ?? "Revenue Cycle Management",
      keyword: data.keyword ?? "",
      author: data.author ?? "medbpo360 Team",
      readTime: data.readTime ?? "5 min read",
      relatedService: data.relatedService ?? undefined,
      relatedSpecialty: data.relatedSpecialty ?? undefined,
    } as Post;
  });

  const today = new Date().toISOString().split("T")[0];
  return posts
    .filter((p) => p.date <= today)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);

  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    updated: data.updated ?? undefined,
    excerpt: data.excerpt ?? "",
    category: data.category ?? "Revenue Cycle Management",
    keyword: data.keyword ?? "",
    author: data.author ?? "medbpo360 Team",
    readTime: data.readTime ?? "5 min read",
    relatedService: data.relatedService ?? undefined,
    relatedSpecialty: data.relatedSpecialty ?? undefined,
    content: processed.toString(),
  };
}

export function getPostsByCategory(category: string): Post[] {
  const all = getAllPosts();
  if (category === "All") return all;
  return all.filter((p) => p.category === category);
}

export function getPostsForService(slug: string): Post[] {
  return getAllPosts().filter((p) => p.relatedService === slug);
}

export function getPostsForSpecialty(slug: string): Post[] {
  return getAllPosts().filter((p) => p.relatedSpecialty === slug);
}
