import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://aarva-interiors.pages.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
