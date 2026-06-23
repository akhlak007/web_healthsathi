import type { MetadataRoute } from "next";
import { contentConfig, siteUrl } from "@/config/contentConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(contentConfig.routeMeta).map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified: new Date("2026-06-01"),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7
  }));
}
