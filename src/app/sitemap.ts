import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Replace with the real production domain before deploying.
  const base = "https://theanthurium.in";

  const routes = [
    "",
    "/about",
    "/activities",
    "/stay",
    "/weddings",
    "/packages",
    "/corporate",
    "/gallery",
    "/contact",
    "/booking",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
