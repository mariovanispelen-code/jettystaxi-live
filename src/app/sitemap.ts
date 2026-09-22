import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://thierrystaxi.nl";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/tr/`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/ar/`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/boek`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/taxi-schiphol/`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/bob-chauffeur/`, changeFrequency: "weekly", priority: 0.9 },
  ];
}
