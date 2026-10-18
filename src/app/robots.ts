import type { MetadataRoute } from "next";

const siteUrl = "https://aarva-interiors.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },  
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
