import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://thierrystaxi.nl";
  const paths = ["", "/en", "/zh", "/ja"];
  const lastModified = new Date();
  return paths.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
    alternates: {
      languages: {
        nl: `${base}/`,
        en: `${base}/en`,
        "zh-Hans": `${base}/zh`,
        ja: `${base}/ja`,
      },
    },
  }));
}
