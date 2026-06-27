import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { caseStudies } from "@/lib/case-studies";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.png.asset.json";
import g6 from "@/assets/gallery-6.jpg";
import gsnMockup from "@/assets/Gsn_suuchi_mockup.png.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Surbhi Hote" },
      { name: "description", content: "Sketches, explorations, off-cuts. A loose archive from different projects , concept explorations, and the finished piece that never found a home in a case study." },
      { property: "og:title", content: "Gallery — Surbhi Hote" },
      { property: "og:description", content: "Sketches, explorations, off-cuts." },
    ],
  }),
  component: GalleryPage,
});

const items = [
  {
    src: g2,
    title: "Creator Hub",
    tags: ["CAPSTONE PROJECT", "MIT", "CONCEPT", "AI", "2026"],
    body: "I recently completed a certification of 'Designing and Building AI Products and Services' by MIT XPRO. The  capstone project I worked on was designing a platform to post across all the social media channels at once.",
  },
  {
    src: g3,
    title: "Travel AI",
    tags: ["AI TRAVEL TOOL", "CONCEPT\u00a0\u00a0", "AI FOR UX", "DESIGNLAB 2026"],
    body: "Integrating AI in UX workflow is more important than ever. Using AI as your companion to speed up your workflow and the end result.This project is executed end to end by using AI tools.\u00a0",
  },
  {
    src: g6,
    title: "Data Visualization",
    tags: ["ANALYTICS", "AD TECH", "CAMPAIGN PERFORMACE "],
    body: "For enterprise clients the most important part is to see how their campaigns\u00a0 performed and the outcome of the money they spent.\u00a0",
  },
  {
    images: [
      { src: g4, alt: "GSN Marketplace — product grid" },
      { src: gsnMockup.url, alt: "GSN Marketplace — Suuchi mockup" },
    ],
    title: "GSN Marketplace - A white label e-com for clients  ",
    tags: ["B2B", "E-COMMERCE", "MARKETPLACE ", "2020"],
    body: "GSN (Global Sourcing Network) Marketplace - Was a market place where the network of factories offering a ready product for clients to pick and add their brand label and ready to hit the stores.",
  },
  {
    src: g5.url,
    title: "Dashboard- PLM & ERP ",
    tags: ["B2B", "B2C", "PLM", "ERP"],
    body: "An exploration of information density for an internal analytics tool — finding the balance between glanceable summaries and the depth power users need.",
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
            className="w-full h-[20vh] md:h-[30vh] object-cover"
          />
        </div>
        <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8 items-end">
          <h1 className="md:col-span-7 display text-[clamp(2.5rem,7vw,6rem)]">Gallery</h1>
          <p className="md:col-span-5 text-foreground/75 leading-relaxed">
            A loose archive from different projects , concept explorations, and the finished piece that never found a home in a case study.
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
            <div className="overflow-hidden bg-secondary" style={{ borderRadius: "4%" }}>
              {"images" in it ? (
                <Carousel opts={{ loop: true }} className="relative">
                  <CarouselContent>
                    {it.images.map((img, idx) => (
                  <CarouselItem key={idx} className="flex items-center justify-center">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-auto object-contain"
                    />
                  </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              ) : (
                <img
                  src={it.src}
                  alt={it.title}
                  loading="lazy"
                  className="w-full h-auto object-contain"
                />
              )}
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
