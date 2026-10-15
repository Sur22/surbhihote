import { createFileRoute, Link } from "@tanstack/react-router";

import heroBg from "@/assets/hero-section-background.png.asset.json";
import solaceTilted from "@/assets/techpack-monitor-screen.png.asset.json";
import affiliateDashboard from "@/assets/affiliate-dashboard-orders.png.asset.json";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/case-studies";
import { useReveal } from "@/hooks/use-reveal";


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
  /* The wide card keeps its original disc geometry; the two compact cards
     share one centered disc so both cards read as the same size and shape. */
  const compactScale = c.slug === "solace" ? 1.08 : 0.8;
  const discStyle = compact
    ? {
        left: "50%",
        transform: `translate(-50%, -50%) scale(${compactScale})`,
      }
    : {
        left: 0,
        transform: "translate(-33.6px, -50%) scale(0.91)",
      };
  return (
    <div className="relative h-full">
      <div
        aria-hidden="true"
        className="study-glass-ring absolute top-1/2 aspect-square h-full"
        style={discStyle}
      />
      <div
        aria-hidden="true"
        className="study-glass-disc absolute top-1/2 aspect-square h-full overflow-hidden"
        style={discStyle}
      />

      {c.slug === "affiliate-platform-redesign" ? (
        <div className={`relative z-10 flex ${imageHeight} items-center`}>
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
        <div className="relative z-10 w-[99%] mx-auto flex justify-center">
          <img
            src={solaceTilted.url}
            alt={c.title}
            width={1338}
            height={794}
            loading="lazy"
            className={`${imageHeight} ${compact ? "w-[115%] max-w-none" : "w-full"} transition-transform duration-[1200ms] group-hover:scale-[1.02] object-contain`}
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
            className={`${imageHeight} ${compact ? "w-[85%] mx-auto" : c.slug === "fjord" ? "w-[90%] mx-auto" : "w-full"} transition-transform duration-[1200ms] group-hover:scale-[1.02] rounded-[5%] ${(c.slug === "atlas" || c.slug === "atlas2") ? "object-contain" : "object-cover"}`}
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
            ? "grid md:grid-cols-12 gap-8 md:gap-12 items-center p-8 md:p-12"
            : "study-card-outline block"
        }`}
      >
        {/* <div className="study-card-glass__backdrop" /> */}
        {/* <div className="study-card-glass__veil" /> */}
        <div className={`relative z-10 study-card-panel ${wide ? "md:col-span-7 md:-my-12 md:-ml-12 md:pl-12 md:-mr-6 md:pr-6" : "p-6"}`}>
          <div className={wide ? "" : "relative h-[300px]"}>
            <CaseStudyArtwork c={c} i={i} imageHeight={wide ? "h-[400px]" : "h-[280px]"} />
          </div>
        </div>
        <div className={`relative z-10 ${wide ? "md:col-span-5" : "p-8"}`}>
          <div className="mb-4">
            <span className="eyebrow">{c.tags.join(" · ")}</span>
          </div>
          <h3
            className={`font-serif mb-4 ${
              wide
                ? "whitespace-pre-line text-4xl md:text-5xl"
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

function IndexPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative mx-auto max-w-[1400px] px-6 md:px-10 pt-0 md:pt-4 pb-24 min-h-screen flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-contain bg-right-bottom bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg.url})`,
            transform: "scale(0.35)",
            transformOrigin: "bottom right",
          }}
        />
        <div className="mx-auto max-w-[1100px] lg:pl-[60px]">
          <div className="font-serif md:text-5xl text-6xl">
            <p className="eyebrow mb-4">SENIOR PRODUCT DESIGNER · B2B&nbsp;·&nbsp;SAAS&nbsp;·&nbsp;ENTERPRISE</p>
            <h1 className="font-serif text-[72px] leading-[1.1]">
              Hi, I'm <em className="text-accent">Surbhi</em>.
            </h1>
            <p className="mt-8 font-serif text-3xl md:text-4xl leading-[1.2] text-foreground/80">
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

    </SiteLayout>
  );
}
