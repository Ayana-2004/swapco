import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const legalUpdated = new Date("2026-09-30");
  return [
    { url: SITE.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/contact`, lastModified: legalUpdated, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE.url}/privacy`, lastModified: legalUpdated, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/terms`, lastModified: legalUpdated, changeFrequency: "yearly", priority: 0.3 },
  ];
}
