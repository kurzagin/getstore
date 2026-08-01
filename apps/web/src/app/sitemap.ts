import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://getstore.my.id",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://getstore.my.id/portfolio",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
