import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Phone, Mail, Linkedin, Download } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import portrait from "@/assets/about-portrait.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.webp";
import g9 from "@/assets/gallery-9.jpg";
import g10 from "@/assets/gallery-10.jpg";
import g11 from "@/assets/gallery-11.jpg";
import g12 from "@/assets/gallery-12.jpg";
import ampersandLogo from "@/assets/clients/ampersand.webp";
import suuchiLogo from "@/assets/clients/suuchi.png";
import spacewoodLogo from "@/assets/clients/spacewood.png";
import madLogo from "@/assets/clients/mad.png";


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
  { src: g7, alt: "City skyline at night with full moon" },
  { src: g8, alt: "Skyscrapers from below against blue sky" },
  { src: g9, alt: "Gallery image nine" },
  { src: g10, alt: "Gallery image ten" },
  { src: g11, alt: "Gallery image eleven" },
  { src: g12, alt: "Gallery image twelve" },
];


const services = [
  { n: "01", t: "Systems-Level Thinking", d: "I don't just design screens; I design scalable systems that bridge the gap between technical complexity and user needs." },
  { n: "02", t: "Aesthetic Precision", d: "Bringing exceptional taste and creativity to ensure every pixel serves a purpose and every interaction feels premium." },
  { n: "03", t: "Outcome-Driven", d: "Focusing on tangible business and user outcomes over mere outputs, ensuring design directly contributes to success." },
  { n: "04", t: "Technical Grounding", d: "My background in Information Technology Engineering and Master's In Computer Science ensures designs are not only beautiful but also technically robust and feasible." },
  { n: "05", t: "Data Driven Design", d: "I use user research data to inform my design decisions rather than assumptions." },
  { n: "06", t: "AI Forward Design", d: "I embrace and adopt quickly to the changing technology and have incorporated it into my design process to speed it up." },
];

function AboutPage() {
  const autoplay = useRef(Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true }));

  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 pt-16 md:pt-24 pb-16 md:pb-24">
        <p className="eyebrow mb-8">About</p>
        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="overflow-hidden rounded-2xl aspect-square">
              <img src={portrait} alt="Surbhi Hote at her studio desk" width={1000} height={1300} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <p className="eyebrow mb-2 text-accent">The Impact-Driven Value Creator</p>
            <h1 className="display text-[clamp(2rem,6vw,5.5rem)] mb-8 md:mb-10">
              Hi, <em className="text-accent">Again!</em>
            </h1>
            <div className="prose max-w-xl space-y-6 text-base md:text-lg leading-relaxed text-foreground/80">
              <p>
                Thank you for exploring my work. I blend tech, and design and strategy,  to solve complex problems. For me, it's all about creating tangible value and outcomes that stick. If you have an interesting project on the horizon, let's connect.
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
        </div>
      </section>

      <div className="mx-auto max-w-[1100px] px-6 md:px-10"><div className="rule" /></div>

      {/* Services */}
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 py-16 md:py-24">
        <p className="eyebrow mb-10">Design values</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((s) => (
            <div key={s.n}>
              <h3 className="font-serif text-2xl mb-3">{s.t}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[1100px] px-6 md:px-10"><div className="rule" /></div>

      {/* Clients */}
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 py-16 md:py-24">
        <div className="flex flex-col gap-6">
          <p className="eyebrow">Trusted by</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
            {[
              { name: "Ampersand", src: ampersandLogo, dark: false },
              { name: "Suuchi Inc.", src: suuchiLogo, dark: false },
              { name: "Spacewood", src: spacewoodLogo, dark: true },
              { name: "Make a Difference", src: madLogo, dark: false },
            ].map((c) => (
              <div
                key={c.name}
                className={`shrink-0 flex items-center justify-center h-14 md:h-16 px-3 rounded-sm ${c.dark ? "bg-black" : ""}`}
              >
                <img
                  src={c.src}
                  alt={c.name}
                  loading="lazy"
                  className="h-10 md:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1100px] px-6 md:px-10"><div className="rule" /></div>

      {/* Image Carousel */}
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 py-16 md:py-24">
        <p className="eyebrow mb-8">From My Lens</p>
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

      <div className="mx-auto max-w-[1100px] px-6 md:px-10"><div className="rule" /></div>



      {/* Get in Touch */}
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 py-16 md:py-24">
        <p className="eyebrow mb-6 text-accent">Let's connect</p>
        <h2 className="display text-[clamp(2.25rem,6vw,5rem)] mb-6">Get in Touch</h2>
        <p className="text-base md:text-lg text-foreground/70 max-w-xl mb-12">
          Whether you have a role in mind, a collaboration idea, or just want to talk design — I'd love to hear from you.
        </p>
        <div className="rule mb-12" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="tel:+17134807041" className="group border border-border rounded-sm p-6 md:p-8 hover:border-foreground transition-colors">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-8">
              <Phone size={18} className="text-muted-foreground" />
            </div>
            <p className="eyebrow mb-3">Phone</p>
            <p className="font-serif text-2xl">+1 713 480 7041</p>
          </a>
          <a href="mailto:surbhihote@gmail.com" className="group border border-border rounded-sm p-6 md:p-8 hover:border-foreground transition-colors">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-8">
              <Mail size={18} className="text-muted-foreground" />
            </div>
            <p className="eyebrow mb-3">Email</p>
            <p className="font-serif text-2xl break-all">surbhihote@gmail.com</p>
          </a>
          <a href="https://www.linkedin.com/in/surbhihote/" target="_blank" rel="noopener noreferrer" className="group border border-border rounded-sm p-6 md:p-8 hover:border-foreground transition-colors">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-8">
              <Linkedin size={18} className="text-muted-foreground" />
            </div>
            <p className="eyebrow mb-3">LinkedIn</p>
            <p className="font-serif text-2xl inline-flex items-center gap-2">Connect with me <span aria-hidden>↗</span></p>
          </a>
        </div>
      </section>

    </SiteLayout>
  );
}
