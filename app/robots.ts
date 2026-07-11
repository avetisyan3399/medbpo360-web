import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/client/", "/staff/", "/api/"],
      },
    ],
    sitemap: "https://medbpo360.com/sitemap.xml",
    host: "https://medbpo360.com",
  };
}
