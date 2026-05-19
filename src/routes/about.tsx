import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Phone, Mail, Linkedin } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import portrait from "@/assets/about-portrait.jpg";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mira Vale" },
      { name: "description", content: "Independent product designer. Twelve years across fintech, wellness, and consumer software. Based in Lisbon." },
      { property: "og:title", content: "About — Mira Vale" },
      { property: "og:description", content: "Independent product designer based in Lisbon." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2022 — now", role: "Independent practice", where: "Mira Vale Studio" },
  { year: "2019 — 2022", role: "Principal Designer", where: "Linear" },
  { year: "2016 — 2019", role: "Senior Product Designer", where: "Monzo" },
  { year: "2013 — 2016", role: "Designer", where: "IDEO London" },
];

const services = [
  { n: "01", t: "Product design", d: "End-to-end work on consumer and prosumer software — discovery, IA, interaction, visual." },
  { n: "02", t: "Design systems", d: "Token-first systems that survive contact with engineering, marketing, and ten new hires." },
  { n: "03", t: "Workshops", d: "Two-day intensives for in-house teams on product principles, IA, and the craft of cuts." },
];

export function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-24">
        <p className="eyebrow mb-8">About</p>
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <h1 className="display text-[clamp(2.5rem,7vw,6.5rem)] mb-10">
              Twelve years<br />
              of paying attention to<br />
              <em className="text-accent not-italic font-serif italic">small things.</em>
            </h1>
            <div className="prose max-w-xl space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>
                I'm Mira Vale, a product designer working independently from Lisbon. My practice sits at the intersection of editorial sensibility and engineering rigor — I care about the rhythm of a paragraph as much as the bezier of a curve.
              </p>
              <p>
                I've spent the last decade inside product teams at Linear, Monzo, and IDEO — shipping software used by millions and quietly removing more than I added. In 2022 I went independent so I could choose collaborators by craft, not headcount.
              </p>
              <p>
                I take on three to four projects a year. I work directly with founders and design leads, embedded for 8–14 weeks. No decks, no account managers, no junior shadow team.
              </p>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-sm">
              <img src={portrait} alt="Mira Vale at her studio desk" width={1000} height={1300} loading="lazy" className="w-full h-auto object-cover" />
            </div>
            <p className="mt-4 text-xs text-muted-foreground italic">Studio, Príncipe Real — September 2025</p>
          </div>
        </div>
      </section>

      <div className="rule mx-6 md:mx-10" />

      {/* Services */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="eyebrow">How I work</p>
          </div>
          <div className="md:col-span-9 grid sm:grid-cols-3 gap-10">
            {services.map((s) => (
              <div key={s.n}>
                <p className="font-serif text-3xl text-accent mb-3">{s.n}</p>
                <h3 className="font-serif text-2xl mb-3">{s.t}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule mx-6 md:mx-10" />

      {/* Timeline */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="eyebrow">Career</p>
          </div>
          <div className="md:col-span-9">
            <ul className="divide-y divide-border">
              {timeline.map((t) => (
                <li key={t.year} className="py-6 grid grid-cols-12 gap-4 items-baseline">
                  <span className="col-span-4 md:col-span-3 text-sm text-muted-foreground">{t.year}</span>
                  <span className="col-span-8 md:col-span-5 font-serif text-2xl">{t.role}</span>
                  <span className="hidden md:block md:col-span-4 text-sm text-muted-foreground md:text-right">{t.where}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="rule mx-6 md:mx-10" />

      {/* Clients */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="eyebrow">Selected clients</p>
          </div>
          <div className="md:col-span-9">
            <div className="flex flex-wrap gap-x-10 gap-y-5 font-serif text-3xl md:text-4xl text-foreground/80">
              {["Fjord", "Solace", "Atlas", "Linear", "Arc", "Monzo", "On Deck", "Stripe Press", "Notion"].map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <Link to="/" className="text-sm border-b border-foreground/40 hover:border-foreground">← Back to work</Link>
      </section>
    </SiteLayout>
  );
}
