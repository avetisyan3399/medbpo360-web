import { NextResponse } from "next/server";
import { verifyDemoToken } from "@/lib/demo-token";

const DEMOS: Record<string, { cookie: string; path: string }> = {
  harborview: { cookie: "hv_demo_unlock", path: "/demo/harborview" },
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token") ?? "";
  const demo = DEMOS.harborview; // only one demo today; keyed by token payload if that ever changes

  const verified = verifyDemoToken(token);
  if (!verified) {
    return NextResponse.redirect(new URL(`${demo.path}?expired=1`, url.origin));
  }

  const response = NextResponse.redirect(new URL(demo.path, url.origin));
  response.cookies.set(demo.cookie, "1", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: demo.path,
  });
  return response;
}
