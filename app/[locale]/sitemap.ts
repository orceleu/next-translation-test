import { MetadataRoute } from "next";

const locales = ["en", "fr"] as const;
const baseUrl = "https://your-domain.com";

const staticRoutes = ["", "/about", "/products"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of staticRoutes) {
    for (const locale of locales) {
      const url = `${baseUrl}/${locale}${route}`;

      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
      });
    }
  }

  return entries;
}
