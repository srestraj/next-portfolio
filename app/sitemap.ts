import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rajkshrestha1.com.np";
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/work`, lastModified: new Date() },
    ...projects.map((project) => ({
      url: `${base}/work/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
