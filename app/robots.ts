import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["http://odiador.dev/"], // Bloquea HTTP
      },
    ],
    sitemap: "https://odiador.dev/sitemap.xml",
  };
}
