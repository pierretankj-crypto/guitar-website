import type { MetadataRoute } from "next";
import { business, seo } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${business.name} Guitar Lessons`,
    short_name: business.name,
    description: seo.description,
    start_url: "/",
    display: "browser",
    background_color: "#fff8f0",
    theme_color: "#fff8f0",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
