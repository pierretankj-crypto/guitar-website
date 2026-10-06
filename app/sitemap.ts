import type { MetadataRoute } from "next";
import { business } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: business.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${business.url}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${business.url}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
