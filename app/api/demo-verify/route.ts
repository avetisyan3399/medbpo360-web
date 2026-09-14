import { NextResponse } from "next/server";
import { verifyDemoToken } from "@/lib/demo-token";

const DEMOS: Record<string, { cookie: string; path: string }> = {
  harborview: { cookie: "hv_demo_unlock", path: "/demo/harborview" },
  willowcreek: { cookie: "wc_demo_unlock", path: "/demo/willowcreek" },
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token") ?? "";

  const verified = verifyDemoToken(token);
  const demo = verified && DEMOS[verified.demo];

  if (!verified || !demo) {
    // Forged, malformed, or for a demo we don't recognize — no signed
    // payload to trust at all, so there's no specific gate to send them
    // back to.
    return NextResponse.redirect(new URL("/style-directions?expired=1", url.origin));
  }

  if (verified.expired) {
    // Signature checks out, so the `demo` field is trustworthy even though
    // the link itself timed out — send them back to that specific gate.
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
