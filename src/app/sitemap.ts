import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.rhpny.com";
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/book", changeFrequency: "monthly", priority: 0.9 },
    {
      path: "/precision-hair-restoration-for-men-and-women",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { path: "/aesthetics", changeFrequency: "monthly", priority: 0.9 },
    {
      path: "/regenerative-medicine-for-joint-back-and-shoulder-pain",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { path: "/peptides", changeFrequency: "monthly", priority: 0.9 },
    { path: "/joint-back-orthopedic", changeFrequency: "monthly", priority: 0.9 },
    { path: "/chronic-disease", changeFrequency: "monthly", priority: 0.9 },
  ];

  return routes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
