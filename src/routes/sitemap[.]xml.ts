import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://surbhihote.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/about", priority: "0.8" },
          { path: "/gallery", priority: "0.8" },
          { path: "/ai", priority: "0.8" },
          { path: "/ai/voyager", priority: "0.9" },
          { path: "/ai/resources", priority: "0.9" },
          { path: "/process", priority: "0.8" },
          { path: "/creator-hub-ai-product-design-case-study", priority: "0.9" },
          { path: "/vibe-coding-my-portfolio-lovable", priority: "0.9" },
          { path: "/work/fjord", priority: "0.9" },
          { path: "/work/affiliate-platform-redesign", priority: "0.9" },
          { path: "/work/solace", priority: "0.9" },
          { path: "/work/atlas", priority: "0.9" },
        ];
        const lastmod = new Date().toISOString().slice(0, 10);

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...entries.map((e) => `  <url><loc>${BASE_URL}${e.path}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>${e.priority}</priority></url>`),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
