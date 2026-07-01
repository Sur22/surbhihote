import { createFileRoute, Link } from "@tanstack/react-router";

import heroBg from "@/assets/portfolio-hero-bg-v2.png.asset.json";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/case-studies";
import { useReveal } from "@/hooks/use-reveal";


function CaseStudyItem({ c, i }: { c: (typeof caseStudies)[number]; i: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${(i % 2) * 80}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Link to="/work/$slug" params={{ slug: c.slug }} className="group block">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-2" : ""}`}>
            <div className="overflow-hidden rounded-[5%]">
              <img
                src={c.cover}
                alt={c.title}
                width={1400}
                height={1000}
                loading="lazy"
                className={`h-[420px] transition-transform duration-[1200ms] group-hover:scale-[1.02] rounded-[5%] ${c.slug === "fjord" ? "" : "shadow-md"} ${c.slug === "fjord" ? "w-[90%] mx-auto" : "w-full"} ${c.slug === "fjord" || c.slug === "fjord2" || c.slug === "solace" || (c.slug === "atlas" || c.slug === "atlas2") ? "object-contain" : "object-cover"}`}
              />
            </div>
          </div>
          <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-1" : ""}`}>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-serif text-2xl text-accent">{c.index}</span>
              <span className="eyebrow">{c.tags.join(" · ")}</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl mb-5 group-hover:text-accent transition-colors whitespace-pre-line">
              {c.title}
            </h2>
            <p className="text-lg leading-relaxed text-foreground/75 max-w-md">
              {c.subtitle}
            </p>
            <p className="mt-8 inline-flex items-center gap-2 text-sm border-b border-foreground/40 group-hover:border-foreground pb-0.5">
              Read the case study
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Surbhi Hote — Product & UX Design Studio" },
      { name: "description", content: "Independent product designer crafting calm, considered software. Selected case studies in fintech, wellness, and travel." },
      { property: "og:title", content: "Surbhi Hote — Product & UX Design Studio" },
      { property: "og:description", content: "Selected work in fintech, wellness, and travel." },
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
            transform: 'scale(0.7)',
            transformOrigin: 'bottom right',
          }}
        />
        <div className="ml-[60px]">
          <div className="font-serif md:text-5xl text-6xl">
            <p className="eyebrow mb-4">DESIGNER WITH A TECHNICAL EDGE</p>
            <h1 className="font-serif text-[72px] leading-[1.1]">
              Hi, I'm <em className="text-accent">Surbhi</em>.
            </h1>
            <p className="mt-8 font-serif text-3xl md:text-4xl leading-[1.2] text-foreground/80">
              Identifying the equilibrium between user needs, business opportunities, and technological possibilities to create an impact.
            </p>
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
          <h1 className="font-serif" style={{ fontSize: '62px' }}>Case Studies</h1>
        </div>

        <div className="space-y-24">
          {caseStudies.map((c, i) => (
            <CaseStudyItem key={c.slug} c={c} i={i} />
          ))}
        </div>

      </section>
    </SiteLayout>
  );
}
