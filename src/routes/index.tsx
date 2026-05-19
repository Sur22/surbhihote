import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { caseStudies } from "@/lib/case-studies";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mira Vale — Product & UX Design Studio" },
      { name: "description", content: "Independent product designer crafting calm, considered software. Selected case studies in fintech, wellness, and travel." },
      { property: "og:title", content: "Mira Vale — Product & UX Design Studio" },
      { property: "og:description", content: "Selected work in fintech, wellness, and travel." },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-24">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <p className="eyebrow mb-8">Portfolio — 2020 / 2025</p>
            <h1 className="display text-[clamp(3rem,9vw,8.5rem)]">
              Designing<br />
              calm software<br />
              <em className="text-accent not-italic font-serif italic">for noisy lives.</em>
            </h1>
          </div>
          <div className="md:col-span-4 md:pl-8">
            <p className="text-lg leading-relaxed text-foreground/80 max-w-sm">
              I'm Mira — an independent product designer working with teams that take their craft seriously. Three case studies below.
            </p>
            <div className="mt-8 flex items-center gap-6 text-sm">
              <Link to="/about" className="border-b border-foreground/40 hover:border-foreground">About</Link>
              <a href="mailto:hello@miravale.studio" className="border-b border-foreground/40 hover:border-foreground">Available Q3</a>
            </div>
          </div>
        </div>

        <div className="mt-20 overflow-hidden rounded-sm">
          <img src={hero} alt="" width={1600} height={1200} className="w-full h-[55vh] object-cover" />
        </div>
      </section>

      <div className="rule mx-6 md:mx-10" />

      {/* Selected work */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-20">
        <div className="flex items-end justify-between mb-12">
          <p className="eyebrow">Selected Work</p>
          <p className="text-sm text-muted-foreground">Three of nineteen</p>
        </div>

        <div className="space-y-24">
          {caseStudies.map((c, i) => (
            <Link
              key={c.slug}
              to="/work/$slug"
              params={{ slug: c.slug }}
              className="group block"
            >
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
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
                <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""}`}>
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
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
