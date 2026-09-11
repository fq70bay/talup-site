import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://talup-project.vercel.app",
      lastModified: new Date("2026-09-10"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
