// app/sitemap.ts
import type { MetadataRoute } from "next";
import { dbAll } from "./lib/db";

interface BlogRow {
  slugTitle: string;
  updatedAt: string;
}

type ChangeFreq = MetadataRoute.Sitemap[number]["changeFrequency"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://meuniversal.com";
  const lastModified = new Date("2026-07-15T12:49:37+00:00");

  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: ChangeFreq;
  }[] = [
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "about", priority: 0.8, changeFrequency: "daily" },
    { path: "sustainability", priority: 0.8, changeFrequency: "daily" },
    { path: "per-sqm-concept", priority: 0.8, changeFrequency: "daily" },
    { path: "careers", priority: 0.8, changeFrequency: "daily" },
    { path: "products/air-purifier", priority: 0.8, changeFrequency: "daily" },
    { path: "products/cooling-jacket", priority: 0.8, changeFrequency: "daily" },
    { path: "products/electric-towel-warmer", priority: 0.8, changeFrequency: "daily" },
    { path: "products/kitchen-air-conditioner", priority: 0.8, changeFrequency: "daily" },
    { path: "products/push-pull-door-locks", priority: 0.8, changeFrequency: "daily" },
    { path: "solutions/ai-powered-laundry", priority: 0.8, changeFrequency: "daily" },
    { path: "solutions/building-and-energy-managememt", priority: 0.8, changeFrequency: "daily" },
    { path: "solutions/centralised-vacuum", priority: 0.8, changeFrequency: "daily" },
    { path: "solutions/dc-lighting-and-automation", priority: 0.8, changeFrequency: "daily" },
    { path: "solutions/highrise-community-automation", priority: 0.8, changeFrequency: "daily" },
    { path: "solutions/mirror-tv", priority: 0.8, changeFrequency: "daily" },
    { path: "solutions/office-and-av-automation", priority: 0.8, changeFrequency: "daily" },
    { path: "solutions/public-adress-and-evacuation", priority: 0.8, changeFrequency: "daily" },
    { path: "solutions/retrofit-wireless-automation", priority: 0.8, changeFrequency: "daily" },
    { path: "solutions/garbage-and-linen-chutes", priority: 0.8, changeFrequency: "daily" },
    { path: "platforms/aguardio", priority: 0.8, changeFrequency: "daily" },
    { path: "platforms/aiello", priority: 0.8, changeFrequency: "daily" },
    { path: "platforms/analytika", priority: 0.8, changeFrequency: "daily" },
    { path: "platforms/archflow", priority: 0.8, changeFrequency: "daily" },
    { path: "platforms/deepscent", priority: 0.8, changeFrequency: "daily" },
    { path: "platforms/mylo", priority: 0.8, changeFrequency: "daily" },
    { path: "contact", priority: 0.8, changeFrequency: "daily" },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${baseUrl}${path ? `/${path}` : ""}`,
      lastModified,
      changeFrequency,
      priority,
    }),
  );

  const blogs = (await dbAll(
    "SELECT slugTitle, updatedAt FROM blogs ORDER BY updatedAt DESC",
  )) as BlogRow[];

  const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slugTitle}`,
    lastModified: new Date(blog.updatedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogRoutes];
}