import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { COLLECTIONS } from "@/data/collections";
import { DESIGNS } from "@/data/designs";
import { BROWSE_CATEGORIES, MATERIALS } from "@/data/categories";

const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/collections", changefreq: "weekly", priority: "0.9" },
          { path: "/bridal", changefreq: "monthly", priority: "0.9" },
          { path: "/about", changefreq: "monthly", priority: "0.6" },
          { path: "/craftsmanship", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.6" },
          { path: "/book-consultation", changefreq: "monthly", priority: "0.8" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          { path: "/search", changefreq: "yearly", priority: "0.3" },
          { path: "/faq", changefreq: "yearly", priority: "0.5" },
          { path: "/privacy", changefreq: "yearly", priority: "0.3" },
          { path: "/terms", changefreq: "yearly", priority: "0.3" },
          ...COLLECTIONS.map((c) => ({ path: `/collections/${c.slug}`, changefreq: "monthly" as const, priority: "0.8" })),
          ...DESIGNS.map((d) => ({ path: `/design/${d.slug}`, changefreq: "monthly" as const, priority: "0.7" })),
          ...BROWSE_CATEGORIES.map((c) => ({ path: `/category/${c.slug}`, changefreq: "monthly" as const, priority: "0.6" })),
          ...MATERIALS.map((m) => ({ path: `/category/material/${m.slug}`, changefreq: "monthly" as const, priority: "0.6" })),
        ];
        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean).join("\n"),
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
