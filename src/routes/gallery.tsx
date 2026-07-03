import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { caseStudies } from "@/lib/case-studies";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
  type CarouselApi,
} from "@/components/ui/carousel";
import * as React from "react";
import g1 from "@/assets/gallery-1.jpg";
import newGalleryImg from "@/assets/portfolio-bg-1-mixed.png.asset.json";
import creatorHubBg from "@/assets/creator-hub-bg.png.asset.json";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.png.asset.json";
import g6 from "@/assets/containers-insight-mockup.png.asset.json";
import gsnMockup from "@/assets/Gsn_suuchi_mockup.png.asset.json";
import ampBg from "@/assets/amp-mockup-bg.png.asset.json";
import gridBg from "@/assets/grid-mockup-bg.png.asset.json";
import dataViz1 from "@/assets/data-viz-1.png.asset.json";
import dataViz2 from "@/assets/data-viz-2.png.asset.json";
import dataViz3 from "@/assets/data-viz-3-new.png.asset.json";
import dataViz4 from "@/assets/data-viz-4.png.asset.json";
import productBefore from "@/assets/product-before.png.asset.json";
import productAfter from "@/assets/product-after.png.asset.json";
import gsnListView from "@/assets/gsn_list_view.png.asset.json";
import creatorHubDashboard from "@/assets/creator-hub-dashboard.png.asset.json";
import creatorHubAnalytics1 from "@/assets/creator-hub-analytics-1.png.asset.json";
import creatorHubAnalytics2 from "@/assets/creator-hub-analytics-2.png.asset.json";
import creatorHubCreatePost from "@/assets/creator-hub-create-post.png.asset.json";

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
    images: [
      { src: creatorHubDashboard.url, alt: "Creator Hub — Dashboard" },
      { src: creatorHubAnalytics1.url, alt: "Creator Hub — Analytics" },
      { src: creatorHubCreatePost.url, alt: "Creator Hub — Create Post" },
    ],
    title: "Creator Hub",
    tags: ["CAPSTONE PROJECT", "MIT", "CONCEPT", "AI", "2026"],
    body: "I recently completed a certification of 'Designing and Building AI Products and Services' by MIT XPRO. The  capstone project I worked on was designing a platform to post across all the social media channels at once.",
  },
  {
    src: newGalleryImg.url,
    title: "Travel AI",
    tags: ["AI FOR UX", "DESIGNLAB", "PROJECT", "CONCEPT", "AI TRAVEL TOOL"],
    body: "Integrating AI in UX workflow is a must. Using AI as a companion to speed up the workflow and the end result.This project is executed end to end by using AI tools.\u00a0",
  },
  {
    images: [
      { src: dataViz1.url, alt: "Data Visualization — mockup 1" },
      { src: dataViz2.url, alt: "Data Visualization — mockup 2" },
      { src: dataViz3.url, alt: "Data Visualization — mockup 3" },
      { src: dataViz4.url, alt: "Data Visualization — mockup 4" },
    ],
    title: "Data Visualization",
    tags: ["ANALYTICS", "AD TECH", "CAMPAIGN PERFORMACE "],
    body: "For enterprise clients the most important part is to see how their campaigns\u00a0 performed and the outcome of the money they spent.\u00a0",
  },
  {
    images: [
      { src: gsnMockup.url, alt: "GSN Marketplace — Suuchi mockup" },
      { src: gsnListView.url, alt: "GSN Marketplace — list view" },
    ],
    title: "GSN Marketplace - A white label e-com for clients  ",
    tags: ["B2B", "E-COMMERCE", "MARKETPLACE ", "2020"],
    body: "GSN (Global Sourcing Network) Marketplace - Was a market place where the network of factories offering a ready product for clients to pick and add their brand label and ready to hit the stores.",
  },
  {
    images: [{ src: g5.url, alt: "Dashboard- PLM & ERP" }],
    title: "Dashboard",
    tags: ["B2B", "B2C", "PLM", "ERP"],
    body: "An exploration of information density for an internal analytics tool — finding the balance between glanceable summaries and the depth power users need.",
  },
  {
    images: [
      { src: productBefore.url, alt: "Product Page — Before" },
      { src: productAfter.url, alt: "Product Page — After" },
    ],
    title: "Product Evolution\u00a0",
    tags: ["B2B", "B2C", "PLM", "ERP"],
    body: "Transformation of the product Details Page of the Grid when I joined as a founding designer and how it evolved to a modern & modular product tool to handle all kinds of product lifecycle.\u00a0 \u00a0",
  },
] as const;

function HoverAutoplayCarousel({
  children,
  ...props
}: React.ComponentProps<typeof Carousel>) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  const start = React.useCallback(() => {
    if (!api) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
intervalRef.current = setInterval(() => api.scrollNext(), 2000);
  }, [api]);

  const stop = React.useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  React.useEffect(() => () => stop(), [stop]);

  return (
    <div onMouseEnter={start} onMouseLeave={stop}>
      <Carousel {...props} setApi={(a) => { setApi(a); props.setApi?.(a); }}>
        {children}
      </Carousel>
    </div>
  );
}

function GalleryPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 pt-10 md:pt-16 pb-16 md:pb-24">
        <div className="overflow-hidden rounded-sm bg-secondary shadow-xl">
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
            <div
              className={cn(
                "overflow-hidden shadow-xl",
                it.title === "Data Visualization" || 
                it.title === "GSN Marketplace - A white label e-com for clients  " ||
                it.title === "Dashboard" ||
                it.title === "Product Evolution\u00a0" ||
                it.title === "Creator Hub"
                  ? "bg-cover bg-center bg-no-repeat"
                  : "bg-secondary",
                it.title === "Data Visualization" && "py-12",
                it.title === "GSN Marketplace - A white label e-com for clients  " && "py-28",
                (it.title === "Dashboard" || it.title === "Product Evolution\u00a0") && "py-28",
                it.title === "Creator Hub" && "py-28"
              )}
              style={{
                borderRadius: "2.4%",
                ...(it.title === "Data Visualization"
                  ? { backgroundImage: `url(${ampBg.url})` }
                  : it.title === "GSN Marketplace - A white label e-com for clients  " || it.title === "Dashboard" || it.title === "Product Evolution\u00a0"
                    ? { backgroundImage: `url(${gridBg.url})` }
                      : it.title === "Creator Hub"
                        ? { backgroundImage: `url(${creatorHubBg.url})` }
                      : {}),
              }}
            >
              {"images" in it ? (
                <HoverAutoplayCarousel opts={{ loop: true }} className="relative">
                  <CarouselContent>
                    {it.images.map((img, idx) => (
                  <CarouselItem key={idx} className="flex items-center justify-center">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className={cn(
                        "h-auto object-contain",
                        it.title === "GSN Marketplace - A white label e-com for clients  " ||
                        it.title === "Dashboard" ||
                        it.title === "Product Evolution\u00a0" ||
                        it.title === "Data Visualization" ||
                        it.title === "Creator Hub"
                          ? "w-[85%] mx-auto"
                          : "w-full"
                      )}
                    />
                  </CarouselItem>
                    ))}
                  </CarouselContent>
                  {it.images.length > 1 && <CarouselDots />}
                </HoverAutoplayCarousel>
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
