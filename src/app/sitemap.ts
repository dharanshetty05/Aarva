
import type { MetadataRoute } from "next";

const siteUrl = "https://aarva-interiors.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
