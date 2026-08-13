import { buildSitemapXml } from "@/lib/sitemap-xml";

export const revalidate = 3600;

export async function GET() {
  return new Response(buildSitemapXml(), {
    status: 200,
    headers: {
      "Content-Type": "text/xml; charset=UTF-8",
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  });
}
