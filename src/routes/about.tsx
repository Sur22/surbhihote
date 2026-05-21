import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Phone, Mail, Linkedin, Download } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import portrait from "@/assets/about-portrait.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Surbhi Hote" },
      { name: "description", content: "Independent product designer. Twelve years across fintech, wellness, and consumer software. Based in Lisbon." },
      { property: "og:title", content: "About — Surbhi Hote" },
      { property: "og:description", content: "Independent product designer based in Lisbon." },
    ],
  }),
  component: AboutPage,
});

const galleryImages = [
  { src: g1, alt: "Gallery image one" },
  { src: g2, alt: "Gallery image two" },
  { src: g3, alt: "Gallery image three" },
  { src: g4, alt: "Gallery image four" },
  { src: g5, alt: "Gallery image five" },
  { src: g6, alt: "Gallery image six" },
];

const services = [
  { n: "01", t: "Product design", d: "End-to-end work on consumer and prosumer software — discovery, IA, interaction, visual." },
  { n: "02", t: "Design systems", d: "Token-first systems that survive contact with engineering, marketing, and ten new hires." },
  { n: "03", t: "Workshops", d: "Two-day intensives for in-house teams on product principles, IA, and the craft of cuts." },
];

export function AboutPage() {
  const autoplay = useRef(Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true }));

  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-16 md:pb-24">
        <p className="eyebrow mb-8">About</p>
        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-7">
            <h1 className="display text-[clamp(2rem,6vw,5.5rem)] mb-8 md:mb-10">
              Twelve years<br />
              of paying attention to<br />
              <em className="text-accent not-italic font-serif italic">small things.</em>
            </h1>
            <div className="prose max-w-xl space-y-6 text-base md:text-lg leading-relaxed text-foreground/80">
              <p>
                I'm Surbhi Hote, a product designer working independently from Lisbon. My practice sits at the intersection of editorial sensibility and engineering rigor — I care about the rhythm of a paragraph as much as the bezier of a curve.
              </p>
              <p>
                I've spent the last decade inside product teams at Linear, Monzo, and IDEO — shipping software used by millions and quietly removing more than I added. In 2022 I went independent so I could choose collaborators by craft, not headcount.
              </p>
              <p>
                I take on three to four projects a year. I work directly with founders and design leads, embedded for 8–14 weeks. No decks, no account managers, no junior shadow team.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild variant="outline" size="lg">
                <a href="/resume.pdf" download>
                  <Download /> Resume
                </a>
              </Button>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-sm">
              <img src={portrait} alt="Surbhi Hote at her studio desk" width={1000} height={1300} loading="lazy" className="w-full h-auto object-cover" />
            </div>
            <p className="mt-4 text-xs text-muted-foreground italic">Studio, Príncipe Real — September 2025</p>
          </div>
        </div>
      </section>

      <div className="rule mx-6 md:mx-10" />

      {/* Services */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-3">
            <p className="eyebrow">How I work</p>
          </div>
          <div className="md:col-span-9 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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

      {/* Clients */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-3">
            <p className="eyebrow">Selected clients</p>
          </div>
          <div className="md:col-span-9">
            <div className="flex flex-wrap gap-x-10 gap-y-5 font-serif text-3xl md:text-4xl text-foreground/80">
              {["Fjord", "Solace", "Atlas", "Linear"].map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="rule mx-6 md:mx-10" />

      {/* Image Carousel */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
        <p className="eyebrow mb-8">From the studio</p>
        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent>
            {galleryImages.map((g) => (
              <CarouselItem key={g.src} className="sm:basis-1/2 lg:basis-1/3">
                <div className="overflow-hidden rounded-sm aspect-[4/5]">
                  <img src={g.src} alt={g.alt} loading="lazy" className="w-full h-full object-cover" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <div className="rule mx-6 md:mx-10" />



      {/* Get in Touch */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
        <p className="eyebrow mb-6 text-accent">Let's connect</p>
        <h2 className="display text-[clamp(2.25rem,6vw,5rem)] mb-6">Get in Touch</h2>
        <p className="text-base md:text-lg text-foreground/70 max-w-xl mb-12">
          Whether you have a role in mind, a collaboration idea, or just want to talk design — I'd love to hear from you.
        </p>
        <div className="rule mb-12" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="tel:+919876543210" className="group border border-border rounded-sm p-6 md:p-8 hover:border-foreground transition-colors">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-8">
              <Phone size={18} className="text-muted-foreground" />
            </div>
            <p className="eyebrow mb-3">Phone</p>
            <p className="font-serif text-2xl">+91 98765 43210</p>
          </a>
          <a href="mailto:hello@miravale.studio" className="group border border-border rounded-sm p-6 md:p-8 hover:border-foreground transition-colors">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-8">
              <Mail size={18} className="text-muted-foreground" />
            </div>
            <p className="eyebrow mb-3">Email</p>
            <p className="font-serif text-2xl break-all">hello@miravale.studio</p>
          </a>
          <a href="#" className="group border border-border rounded-sm p-6 md:p-8 hover:border-foreground transition-colors">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-8">
              <Linkedin size={18} className="text-muted-foreground" />
            </div>
            <p className="eyebrow mb-3">LinkedIn</p>
            <p className="font-serif text-2xl inline-flex items-center gap-2">Connect with me <span aria-hidden>↗</span></p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-16 md:pb-24">
        <Link to="/" className="text-sm border-b border-foreground/40 hover:border-foreground">← Back to work</Link>
      </section>
    </SiteLayout>
  );
}
