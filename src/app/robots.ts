import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/.well-known/"],
      },
    ],
    sitemap: "https://tryalign.app/sitemap.xml",
  };
}
