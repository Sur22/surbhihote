import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Mira Vale" },
      { name: "description", content: "Sketches, explorations, off-cuts. A loose archive from the studio." },
      { property: "og:title", content: "Gallery — Mira Vale" },
      { property: "og:description", content: "Sketches, explorations, off-cuts." },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: g1, caption: "Wireframe explorations — Atlas, week 2", year: "2024", h: "tall" },
  { src: g2, caption: "Typography study — Fjord wordmark trials", year: "2025", h: "tall" },
  { src: g3, caption: "Solace hero — product photography R&D", year: "2024", h: "med" },
  { src: g4, caption: "Brand moodboard — unannounced retail client", year: "2025", h: "tall" },
  { src: g5, caption: "Dashboard exploration — internal tool", year: "2023", h: "med" },
  { src: g6, caption: "Icon sketches — Atlas itinerary blocks", year: "2024", h: "tall" },
] as const;

function GalleryPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-16">
        <p className="eyebrow mb-8">Gallery</p>
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <h1 className="md:col-span-8 display text-[clamp(2.5rem,7vw,6rem)]">
            Sketches, off-cuts,<br />
            <em className="not-italic font-serif italic text-accent">things that didn't ship.</em>
          </h1>
          <p className="md:col-span-4 text-foreground/75 leading-relaxed">
            A loose archive from the studio — process work, explorations, and the occasional finished piece that never found a home in a case study.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {items.map((it, i) => (
            <figure key={i} className="mb-6 break-inside-avoid group">
              <div className="overflow-hidden rounded-sm bg-secondary">
                <img
                  src={it.src}
                  alt={it.caption}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-[1200ms] group-hover:scale-[1.02]"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-xs text-muted-foreground">
                <span className="italic">{it.caption}</span>
                <span className="font-mono">{it.year}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
