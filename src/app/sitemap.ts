import type { MetadataRoute } from "next";

import { sanityFetch } from "@/sanity/lib/fetch";
import { postSlugsQuery } from "@/sanity/lib/queries";

const siteUrl = "https://www.rhpny.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
    { path: "/blog", changeFrequency: "daily", priority: 0.8 },
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // Blog posts from Sanity. Fails soft (empty) if Sanity env isn't configured
  // yet, so the marketing sitemap always builds.
  let postEntries: MetadataRoute.Sitemap = [];
  try {
    const posts =
      ((await sanityFetch({ query: postSlugsQuery })) as
        | { slug: string; updatedAt: string }[]
        | null) ?? [];
    postEntries = posts.map((p) => ({
      url: `${siteUrl}/blog/${p.slug}`,
      lastModified: p.updatedAt ? new Date(p.updatedAt) : lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  } catch {
    postEntries = [];
  }

  return [...staticEntries, ...postEntries];
}
