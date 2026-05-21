import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { caseStudies } from "@/lib/case-studies";
import { useReveal } from "@/hooks/use-reveal";
import heroPortrait from "@/assets/hero-portrait.jpg";

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
            <div className="overflow-hidden rounded-sm bg-secondary">
              <img
                src={c.cover}
                alt={c.title}
                width={1400}
                height={1000}
                loading="lazy"
                className="w-full h-[420px] object-cover transition-transform duration-[1200ms] group-hover:scale-[1.02]"
              />
            </div>
          </div>
          <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-1" : ""}`}>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-serif text-2xl text-accent">{c.index}</span>
              <span className="eyebrow">{c.tags.join(" · ")}</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl mb-5 group-hover:text-accent transition-colors">
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
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 pt-16 md:pt-24 pb-24">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5 md:order-1">
            <div className="relative w-full max-w-sm mx-auto md:mx-0">
              <div
                aria-hidden
                className="absolute inset-0 rounded-[5%] border-2 border-foreground/20"
                style={{ transform: "rotate(10deg)" }}
              />
              <div className="relative overflow-hidden rounded-[5%] w-full border border-foreground/40">
                <img
                  src={heroPortrait}
                  alt="Surbhi Hote"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-7 md:order-2">
            <h1 className="display text-[clamp(1.5rem,4.5vw,4.25rem)]">
              Hi, I'm Surbhi — I design calm, useful products.
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-foreground/80 max-w-md">
              I help product teams turn complex problems into clean, intuitive experiences. My work spans SaaS platforms, enterprise tools, and consumer apps — always rooted in real user research and quiet, deliberate craft.
            </p>
            <a
              href="/resume.pdf"
              download
              className="mt-8 inline-flex items-center gap-2 text-sm border border-foreground/40 hover:border-foreground hover:bg-secondary px-4 py-2.5 transition-colors"
            >
              <Download size={14} />
              Resume
            </a>
          </div>
        </div>
      </section>

      <div className="rule mx-auto max-w-[1100px] px-6 md:px-10" />

      {/* Selected work */}
      <section id="case-studies" className="mx-auto max-w-[1100px] px-6 md:px-10 py-20 scroll-mt-20">
        <div className="mb-12">
          <p className="eyebrow mb-4">Selected Work</p>
          <h2 className="font-serif text-4xl md:text-5xl">Case studies</h2>
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
