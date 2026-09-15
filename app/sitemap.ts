import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date("2026-09-11"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/site-zhasau-astana`,
      lastModified: new Date("2026-09-12"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/ru/sozdanie-saitov-astana`,
      lastModified: new Date("2026-09-15"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];
}
