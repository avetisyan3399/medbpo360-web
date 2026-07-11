import { NextResponse } from "next/server";
import { getPostsByCategory } from "@/lib/blog";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") ?? "All";
  const posts = getPostsByCategory(category);
  return NextResponse.json({ posts });
}
