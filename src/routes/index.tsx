import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import heroBg from "@/assets/hero-section-background.png.asset.json";
import solaceTilted from "@/assets/techpack-monitor-screen.png.asset.json";
import solaceFull from "@/assets/techpack-monitor-mockup.png.asset.json";
import affiliateDashboard from "@/assets/affiliate-dashboard-orders.png.asset.json";
import atlasCrop from "@/assets/notification-banner-tilted-crop.png.asset.json";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/case-studies";
import { useReveal } from "@/hooks/use-reveal";

/* The three facts the strip above the case studies spells out. */
const strip = [
  { figure: "8+", label: "years in product design" },
  { figure: "0 → 1 → N", label: "founding designer, B2B SaaS" },
  { figure: "MS CS", label: "ex-developer, speaks engineering, vibe code" },
];

/* The capabilities the band under the strip lists as pills. */
const bring = [
  "End-to-end design",
  "AI workflows",
  "Systems and product thinking",
  "UX strategy",
  "Data and outcome driven design",
];




function CaseStudyArtwork({
  c,
  i,
  imageHeight,
}: {
  c: (typeof caseStudies)[number];
  i: number;
  imageHeight: string;
}) {
  /* One geometry shared by the frosted disc and the hollow ring behind it, so
     both circles stay the same size and sit in exactly the same place. */
  const compact = i !== 0;
  /* The wide card keeps its original disc geometry; the two compact cards share
     one centered disc so both cards read as the same size and shape. The
     notifications disc grew 35% from 0.8 to match the Tech Pack disc. */
  const compactScale = c.slug === "solace" ? 1.242 : c.slug === "atlas" ? 1.08 : 0.8;
  /* The Notifications circle drops past the line where the colour ends: 12px
     lands its lowest point on the line, plus a further 15px the user asked for
     so the visible curve meets the line beside the phone. */
  const drop = c.slug === "atlas" ? 27 : 0;
  /* Horizontal offset of the frosted circle from the card's centre line, from
     the md breakpoint up: Notifications sits 20px left, Tech Pack 45px right.
     On phones the circle is wider than the card, so shifting it would slice its
     edge flat against the trim; there both stay centred. */
  const nudge = c.slug === "atlas" ? -20 : c.slug === "solace" ? 80 : 0;
  const discStyle = compact
    ? {
        left: `calc(50% + ${nudge}px)`,
        top: `calc(50% + ${drop}px)`,
        transform: `translate(-50%, -50%) scale(${compactScale})`,
        ...(c.slug === "solace" ? {
          /* The Tech Pack circle is pinned to the tinted band's top-right
             corner: its right edge touches the band's right edge and its top
             edge the band's top edge; the overflow trim clips whatever hangs
             past the band's other edges. */
          left: "100%",
          top: 0,
          transform: `translate(-100%, 0) scale(${compactScale})`,
          transformOrigin: "top right",
        } : {}),
      }
    : {
        left: 0,
        /* The wide card's circle sits left of its picture column; 15px further
           left than the original -33.6px, as the user asked. */
        transform: "translate(-48.6px, -50%) scale(0.91)",
      };
  /* Below the md breakpoint all three cards share one centered disc, so the
     wide card's picture sits in the same frame as the other two. */
  const mobileDisc = {
    left: "50%",
    top: `calc(50% + ${drop}px)`,
    transform: `translate(-50%, -50%) scale(${compact ? compactScale : 0.8})`,
    ...(c.slug === "solace" ? {
      top: "auto",
      bottom: "-24px",
      transform: `translateX(-50%) scale(${compactScale})`,
      transformOrigin: "bottom center",
    } : {}),
  };
  const circles = (
    <>
      <div
        aria-hidden="true"
        className="study-glass-ring absolute top-1/2 aspect-square h-full md:hidden"
        style={mobileDisc}
      />
      <div
        aria-hidden="true"
        className="study-glass-disc absolute top-1/2 aspect-square h-full overflow-hidden md:hidden"
        style={mobileDisc}
      />
      <div
        aria-hidden="true"
        className="study-glass-ring absolute top-1/2 aspect-square h-full hidden md:block"
        style={discStyle}
      />
      <div
        aria-hidden="true"
        className="study-glass-disc absolute top-1/2 aspect-square h-full overflow-hidden hidden md:block"
        style={discStyle}
      />
    </>
  );
  return (
    <div className="relative h-full">
      {c.slug === "atlas" || c.slug === "solace" ? (
        /* The Notifications circle hangs below the colour line, so it is
           trimmed exactly at that line (the panel's 24px padding edge) and
           never spills into the text half. */
        <div aria-hidden="true" className="pointer-events-none absolute -inset-6 overflow-hidden">
          <div className="absolute inset-6">{circles}</div>
        </div>
      ) : (
        circles
      )}


      {c.slug === "affiliate-platform-redesign" ? (
        /* The tint runs from the card's own edge while the mockup column starts
           one card-padding (48px) in, so the mockup sits ~12px right of the
           tint's middle line. Nudge it back by half that overlap so the mockup
           is centred inside the coloured area; translate keeps the column, the
           card height and the text side exactly where they are. */
        <div className={`relative z-10 flex ${imageHeight} items-center md:-translate-x-[11.7px]`}>
          <div className="w-full overflow-hidden rounded-[0.4875rem] bg-card shadow-[0_20px_50px_-20px_color-mix(in_oklab,var(--foreground)_35%,transparent)] transition-transform duration-[1200ms] group-hover:scale-[1.02]">
            <img
              src={affiliateDashboard.url}
              alt={c.title}
              width={1920}
              height={1080}
              loading="lazy"
              className="block w-full h-auto"
            />
          </div>
        </div>
      ) : c.slug === "solace" ? (
        /* On phones the whole monitor shows, chin and stand included, floating
           in the middle of the tinted band: the band is the artwork box plus
           the 24px card padding above and below, so its middle line is the
           artwork box's own middle line — centring on that is centring on the
           colour. The tighter crop to the screen and bezels takes over from the
           md breakpoint up, where it still rests on the band's lower edge. */
        <div className="relative z-10 h-full">
          <img
            src={solaceFull.url}
            alt={c.title}
            width={1460}
            height={1077}
            loading="lazy"
            className="absolute top-[calc(50%_-_2.9px)] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] max-w-none h-auto object-contain transition-transform duration-[1200ms] group-hover:scale-[1.02] md:hidden"
          />
          <img
            src={solaceTilted.url}
            alt={c.title}
            width={1338}
            height={794}
            loading="lazy"
            className={`absolute bottom-[-24px] left-1/2 -translate-x-1/2 w-[115%] max-w-none h-auto hidden md:block ${compact ? "md:h-[280px]" : ""} object-contain transition-transform duration-[1200ms] group-hover:scale-[1.02]`}
          />
        </div>
      ) : c.slug === "atlas" ? (
        /* Same anchor as the Tech Pack card: the phone is pinned by its lower
           edge to the edge of the tinted band (the artwork box's lower edge plus
           the 24px card padding), so it holds that line at every width — below
           the md breakpoint the picture takes its own aspect from the width,
           above it from the height. 349.8px filled the band top to bottom, so
           the picture sits at 297.3px (15% smaller) to leave air above it. */
        <div className="relative z-10 h-full">
          <img
            src={atlasCrop.url}
            alt={c.title}
            width={649}
            height={722}
            loading="lazy"
            className={`absolute bottom-[-24px] left-1/2 -translate-x-1/2 w-[85%] h-auto ${compact ? "md:w-auto md:h-[297.3px]" : "md:h-[296px]"} object-contain transition-transform duration-[1200ms] group-hover:scale-[1.02]`}
          />
        </div>
      ) : (
        <div className="relative z-10 overflow-hidden rounded-[5%]">
          <img
            src={c.cover}
            alt={c.title}
            width={1400}
            height={1000}
            loading="lazy"
            className={`${imageHeight} ${compact ? "w-[85%] mx-auto" : c.slug === "fjord" ? "w-[90%] mx-auto" : "w-full"} transition-transform duration-[1200ms] group-hover:scale-[1.02] rounded-[5%] ${c.slug === "atlas2" ? "object-contain" : "object-cover"}`}
          />
        </div>
      )}
    </div>
  );
}

function CaseStudyItem({ c, i }: { c: (typeof caseStudies)[number]; i: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const wide = i === 0;
  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${(i % 2) * 80}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Link
        to="/work/$slug"
        params={{ slug: c.slug }}
        className={`group relative overflow-hidden rounded-[var(--radius-xl)] border study-card-surface ${
          wide
            ? "block study-card-outline-mobile md:grid md:grid-cols-12 md:gap-12 md:items-center md:p-12"
            : "study-card-outline block"
        }`}
      >
        {/* <div className="study-card-glass__backdrop" /> */}
        {/* <div className="study-card-glass__veil" /> */}
        {wide ? (
          /* On the wide card the tint fills the whole artwork side — from the
             card's own edge across the gutters to the middle of the gap — so
             nothing behind the mockup sits on clear paper. */
          <div
            aria-hidden="true"
            className="study-card-panel absolute inset-y-0 left-0 z-0 hidden w-[58%] md:block"
          />
        ) : null}
        <div
          className={`relative z-10 study-card-panel p-6 ${
            wide ? "md:col-span-7 study-card-panel--wide md:p-0" : ""
          }`}
        >
          <div className={`relative h-[300px] ${wide ? "md:h-auto" : ""}`}>
            <CaseStudyArtwork
              c={c}
              i={i}
              imageHeight={wide ? "h-[280px] md:h-[400px]" : "h-[280px]"}
            />
          </div>
        </div>
        <div className={`relative z-10 p-8 ${wide ? "md:col-span-5 md:p-0" : ""}`}>
          <div className="mb-4">
            <span className="eyebrow">{c.tags.join(" · ")}</span>
          </div>
          <h3
            className={`h3 mb-4 ${
              wide
                ? "whitespace-nowrap md:whitespace-pre-line"
                : "study-card-title"
            }`}
          >
            {c.title}
          </h3>
          <p className="text-lg leading-relaxed text-foreground/85">
            {c.subtitle}
          </p>
          <p className="mt-[33.6px] inline-flex items-center gap-2 text-sm border-b border-foreground/40 group-hover:border-foreground group-hover:font-bold pb-0.5">
            Read the case study
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </p>
        </div>
      </Link>
    </div>
  );
}



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Surbhi Hote | Lead Product Designer" },
      { name: "description", content: "Lead Product Designer with 8+ years designing and scaling complex B2B, SaaS, and enterprise products across web and mobile. Selected case studies in end-to-end, human-centered design." },
      { property: "og:title", content: "Surbhi Hote | Lead Product Designer" },
      { property: "og:description", content: "Lead Product Designer with 8+ years designing and scaling complex B2B, SaaS, and enterprise products across web and mobile. Selected case studies in end-to-end, human-centered design." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://surbhihote.com/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Surbhi Hote | Lead Product Designer" },
      { name: "twitter:description", content: "Lead Product Designer with 8+ years designing and scaling complex B2B, SaaS, and enterprise products across web and mobile. Selected case studies in end-to-end, human-centered design." },
    ],
    links: [{ rel: "canonical", href: "https://surbhihote.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Surbhi Hote",
          url: "https://surbhihote.com",
          jobTitle: "Lead Product Designer",
          description:
            "Product designer with 8+ years designing and scaling complex B2B, SaaS, and enterprise products across web and mobile.",
          sameAs: ["https://www.linkedin.com/in/surbhihote/"],
          knowsAbout: [
            "Product Design",
            "UX Design",
            "Enterprise SaaS",
            "B2B Software",
            "Design Systems",
            "User Research",
            "Human-Centered Design",
          ],
}),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Surbhi Hote",
          url: "https://surbhihote.com",
        }),
      },
    ],
  }),
  component: IndexPage,
});

/** Tracks where the theme switch ends on the right, as an inset from the
 *  hero section's right edge, so the artwork is pinned to that same line.
 *  On phones and tablets the theme switch lives in the hidden menu, so there
 *  the artwork goes all the way into the section's right corner (inset 0). */
function useHeroArtRight(copyRef: { current: HTMLParagraphElement | null }) {
  const [inset, setInset] = useState<number | null>(null);

  useEffect(() => {
    const el = copyRef.current;
    const section = el?.closest("section");
    if (!el || !section) return;

    const measure = () => {
      /* Phones and tablets: hug the section's own right edge. */
      if (window.innerWidth < 1024) {
        setInset(0);
        return;
      }
      const toggle = document.querySelector<HTMLElement>(
        'header button[aria-label="Toggle theme"]'
      );
      let targetRight: number;
      if (toggle && toggle.getBoundingClientRect().width > 0) {
        targetRight = toggle.getBoundingClientRect().right;
      } else {
        const range = document.createRange();
        range.selectNodeContents(el);
        const rects = Array.from(range.getClientRects()).filter((r) => r.width > 1);
        if (!rects.length) return;
        targetRight = Math.max(...rects.map((r) => r.right));
      }
      setInset(Math.max(0, Math.round(section.getBoundingClientRect().right - targetRight)));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    ro.observe(section);
    window.addEventListener("resize", measure);
    document.fonts.ready.then(measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [copyRef]);

  return inset;
}

function IndexPage() {
  const heroCopyRef = useRef<HTMLParagraphElement>(null);
  const artRightInset = useHeroArtRight(heroCopyRef);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative mx-auto max-w-[1400px] pt-0 md:pt-4 pb-24 min-h-screen flex flex-col justify-center overflow-hidden">
        {/* The artwork's right edge tracks the theme switch in the nav. */}
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 bg-contain bg-right-bottom bg-no-repeat transition-opacity duration-500 ${
            artRightInset === null ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${heroBg.url})`,
            transform: "scale(0.35)",
            transformOrigin: "bottom right",
            right: artRightInset === null ? 0 : `${artRightInset}px`,
          }}
        />
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <div className="font-serif md:text-5xl text-6xl">
            <p className="eyebrow hero-eyebrow mb-4">SENIOR PRODUCT DESIGNER · B2B&nbsp;·&nbsp;SAAS&nbsp;·&nbsp;ENTERPRISE</p>
            <h1 className="font-serif text-[72px] leading-[1.1]">
              Hi, I'm <em className="text-accent">Surbhi</em>.
            </h1>
            <p
              ref={heroCopyRef}
              className="mt-[7px] md:mt-8 font-serif text-3xl md:text-4xl leading-[1.2] text-foreground/80"
            >
              I balance user needs, business opportunities, and technological realities to create simple, scalable products.
            </p>
            <p className="mt-6 font-sans text-lg leading-relaxed max-w-4xl text-foreground/85">{"\n"}</p>
            <div className="mt-8">
              <Button asChild variant="outline" size="lg">
                <a href="https://www.linkedin.com/in/surbhihote/" target="_blank" rel="noopener noreferrer">
                  Let's Connect
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="rule mx-auto max-w-[1100px] px-6 md:px-10" />

      {/* Bring label: heads the strip; its pills sit below the strip. */}
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 pt-10 md:pt-12">
        <p className="eyebrow font-semibold">What I bring</p>
      </div>

      {/* Strip: three facts about the practice, on the page's own paper. */}
      <section className="strip pt-12 pb-2 md:pt-14 md:pb-2">
        <div className="mx-auto grid max-w-[1100px] gap-8 px-6 md:grid-cols-3 md:gap-12 md:px-10">
          {strip.map((s) => (
            <div key={s.label}>
              <p className="strip-figure font-serif">{s.figure}</p>
              <p className="mt-2 text-sm text-foreground/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bring pills: the label heads the strip above, only pills sit here. */}
      <section className="bring pt-5 pb-10 md:pt-9 md:pb-12">
        <ul className="mx-auto flex max-w-[1100px] flex-wrap items-center gap-3 px-6 md:px-10">
          {bring.map((b) => (
            <li
              key={b}
              className="rounded-full border border-border px-5 py-2.5 text-sm text-foreground"
            >
              {b}
            </li>
          ))}
        </ul>
      </section>

      <div className="rule mx-auto max-w-[1100px] px-6 md:px-10" />


      {/* Selected work */}
      <section id="case-studies" className="mx-auto max-w-[1100px] px-6 md:px-10 py-20 scroll-mt-20">
        <div className="mb-12">
          <p className="eyebrow mb-4">Selected Work</p>
          <h2 className="font-serif" style={{ fontSize: '62px' }}>Case Studies</h2>
        </div>

        <div className="grid gap-8">
          {caseStudies.filter((c) => !c.hidden).map((c, i) =>
            i === 0 ? <CaseStudyItem key={c.slug} c={c} i={i} /> : null
          )}
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.filter((c) => !c.hidden).slice(1).map((c, idx) => (
              <CaseStudyItem key={c.slug} c={c} i={idx + 1} />
            ))}
          </div>
        </div>

      </section>

      {/* Closing contact band — left-aligned, with the two ways in, wearing the
          same buttons as the rest of the site. */}
      <section className="cta-band py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <h2 className="font-serif text-[32px] leading-[1.18] md:text-[54px]">
            Have a complex product
            <br className="hidden md:block" />
            {" "}that needs to feel <em className="text-accent">simple</em>?
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="mailto:surbhihote@gmail.com">surbhihote@gmail.com</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://www.linkedin.com/in/surbhihote/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
