import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { caseStudies } from "@/lib/case-studies";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Surbhi Hote" },
      { name: "description", content: "Sketches, explorations, off-cuts. A loose archive from the studio." },
      { property: "og:title", content: "Gallery — Surbhi Hote" },
      { property: "og:description", content: "Sketches, explorations, off-cuts." },
    ],
  }),
  component: GalleryPage,
});

const items = [
  {
    src: g2,
    title: "Fjord — wordmark trials",
    tags: ["Typography", "Branding", "2025"],
    body: "Late-stage exploration of the Fjord wordmark — testing serif against geometric sans pairings, looking for a quiet, considered mark that holds up across scale and surface.",
  },
  {
    src: g3,
    title: "Solace — hero photography R&D",
    tags: ["Art Direction", "Product", "2024"],
    body: "Studio R&D for the Solace launch — exploring soft, diffused light and considered colour palettes to match the calm, deliberate tone of the product itself.",
  },
  {
    src: g4,
    title: "Unannounced retail — brand moodboard",
    tags: ["Brand", "Moodboard", "2025"],
    body: "An early-stage brand moodboard for a retail client. Material studies, archival typography, and a colour story built around warmth and restraint.",
  },
  {
    src: g5,
    title: "Internal tool — dashboard study",
    tags: ["Product", "Dashboard", "2023"],
    body: "An exploration of information density for an internal analytics tool — finding the balance between glanceable summaries and the depth power users need.",
  },
  {
    src: g6,
    title: "Atlas — itinerary icon sketches",
    tags: ["Iconography", "Sketch", "2024"],
    body: "Hand sketches for the Atlas itinerary blocks. A loose vocabulary of travel moments — meals, transit, rest — drawn small to keep them honest.",
  },
] as const;

function GalleryPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 pt-10 md:pt-16 pb-16 md:pb-24">
        <div className="overflow-hidden rounded-sm bg-secondary">
          <img
            src={g1}
            alt="Gallery hero — studio archive"
            className="w-full h-[40vh] md:h-[60vh] object-cover"
          />
        </div>
        <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8 items-end">
          <h1 className="md:col-span-7 display text-[clamp(2.5rem,7vw,6rem)]">Gallery</h1>
          <p className="md:col-span-5 text-foreground/75 leading-relaxed">
            A loose archive from the studio — process work, explorations, and the occasional finished piece that never found a home in a case study.
          </p>
        </div>
      </section>

      {/* Full-size entries */}
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 pb-24 space-y-20 md:space-y-28">
        {items.map((it, i) => (
          <article key={i}>
            <div className="mb-6 md:mb-8 grid md:grid-cols-12 gap-6 md:gap-10 items-start">
              <div className="md:col-span-7 flex flex-wrap items-center gap-x-4 gap-y-3">
                <h2 className="font-serif text-2xl md:text-3xl leading-tight">{it.title}</h2>
                <span className="eyebrow">{it.tags.join(" · ")}</span>
              </div>
              <p className="md:col-span-5 text-foreground/75 leading-relaxed">{it.body}</p>
            </div>
            <div className="overflow-hidden rounded-sm bg-secondary">
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </article>
        ))}
      </section>

      {/* Case studies */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 py-20">
          <p className="eyebrow mb-10">Case studies</p>
          <div className="grid md:grid-cols-2 gap-10">
            {caseStudies.map((o) => (
              <Link
                key={o.slug}
                to="/work/$slug"
                params={{ slug: o.slug }}
                className="group block"
              >
                <div className="overflow-hidden rounded-sm bg-secondary mb-5">
                  <img
                    src={o.cover}
                    alt={o.title}
                    width={1400}
                    height={1000}
                    loading="lazy"
                    className="w-full h-[280px] object-cover transition-transform duration-[1200ms] group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-serif text-xl text-accent">{o.index}</span>
                  <span className="eyebrow">{o.tags.slice(0, 3).join(" · ")}</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl group-hover:text-accent transition-colors">
                  {o.title}
                </h3>
                <p className="mt-2 text-foreground/70 leading-relaxed max-w-md">{o.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
