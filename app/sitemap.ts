import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://odiador.dev/",
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1.0,
    }
  ];
}
