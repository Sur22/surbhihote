import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CaseStudySideNav } from "@/components/CaseStudySideNav";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { caseStudies, getCaseStudy, type CaseStudy } from "@/lib/case-studies";
import surveyImg1 from "@/assets/techpack-survey-1.png";
import surveyImg3 from "@/assets/techpack-survey-3.png";
import brainstormingImg from "@/assets/brainstorming-session.jpg";
import userGroupsImg from "@/assets/user-groups.png";
import wireframeImg1 from "@/assets/techpack-wireframe-1.png";
import wireframeImg2 from "@/assets/techpack-wireframe-2.png";
import sketchImg1 from "@/assets/techpack-sketch-1.jpg.asset.json";
import sketchImg2 from "@/assets/techpack-sketch-2.jpg.asset.json";
import sketchImg3 from "@/assets/techpack-sketch-3.jpg.asset.json";
import sketchImg4 from "@/assets/techpack-sketch-4.jpg.asset.json";
import uxStrategyImg from "@/assets/ux-strategy-techpack.png.asset.json";


export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const c = getCaseStudy(params.slug);
    if (!c) throw notFound();
    return { study: c };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.study;
    if (!s) return { meta: [{ title: "Case study — Surbhi Hote" }] };
    return {
      meta: [
        { title: `${s.title} — Surbhi Hote` },
        { name: "description", content: s.summary },
        { property: "og:title", content: `${s.title} — Surbhi Hote` },
        { property: "og:description", content: s.summary },
        { property: "og:image", content: s.cover },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="font-serif text-5xl mb-6">Case study not found</h1>
        <Link to="/" className="border-b border-foreground/40 hover:border-foreground">← Back to work</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error, reset }) => (
    <SiteLayout>
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="font-serif text-4xl mb-4">Something broke</h1>
        <p className="text-muted-foreground mb-6">{error.message}</p>
        <button onClick={reset} className="border-b border-foreground/40 hover:border-foreground">Try again</button>
      </div>
    </SiteLayout>
  ),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { study: c } = Route.useLoaderData() as { study: CaseStudy };
  const others = caseStudies.filter((x) => x.slug !== c.slug);
  const [zoomImg, setZoomImg] = useState<string | null>(null);
  const surveyImages = [
    { src: surveyImg1, alt: "Which tool you currently use for creating a Tech pack — survey results" },
    { src: surveyImg3, alt: "Which tool you use for material details — survey results" },
  ];

  return (
    <SiteLayout>
      <ScrollProgress />
      <CaseStudySideNav />

      {/* Title block */}
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 pt-16 md:pt-24 pb-16">
        <Link
          to="/"
          hash="case-studies"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>
        <div className="flex items-baseline gap-4 mb-8">
          <span className="font-serif text-3xl text-accent">{c.index}</span>
          <span className="eyebrow">{c.tags.join(" · ")}</span>
        </div>
        <h1 className="font-serif text-4xl mb-8 md:text-5xl font-normal">{c.title}</h1>
        <p className="font-serif text-2xl md:text-4xl leading-[1.15] max-w-4xl text-foreground/85">
          {c.subtitle}
        </p>
      </section>

      {/* Cover */}
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 pb-16">
        <div className="overflow-hidden rounded-sm">
          <img src={c.cover} alt={c.title} width={1400} height={1000} className={`h-auto ${c.slug === "atlas" ? "w-[35%] mx-auto" : "w-full"}`} />
        </div>
      </section>

      {/* Meta grid */}
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-8">
          {[
            { k: "Role", v: c.role },
            { k: "Timeframe", v: c.timeframe },
            { k: "Tools", v: c.tools },
            { k: "Tasks Performed", v: c.tasksPerformed },
          ].map((m) => (
            <div key={m.k}>
              <p className="eyebrow mb-2 font-bold">{m.k}</p>
              <p className="text-base leading-relaxed text-foreground/85">{m.v}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[1100px] px-6 md:px-10"><div className="rule" /></div>

      {/* Overview + Goal */}
      <section id="overview" className="mx-auto max-w-[768px] px-6 md:px-10 pt-16 pb-24 scroll-mt-24">
        <div className="space-y-16">
          <div>
            <h2 className="font-serif text-3xl mb-6 font-medium">Overview</h2>
            <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
              {c.slug === "solace" 
                ? "The GRID enables real-time collaboration through the supply chain providing users visibility into the manufacturing process as well as keeping the stakeholders informed about all the processes within their supply chain. GRID serves as a communication tool where the all active users within the supply chain can interact throughout the manufacturing process while allowing the client to request changes, share & update documents, and leave comments. GRID is designed to serve as the backbone for the SaaS business model, there is a potential for providing users with design capabilities within the software itself. This feature would provide users to not only create Tech pack in the GRID but will also give them opportunity to kickstart the sourcing process through Bill of Material.\nThe software have various stages where different files are stored. Each stage has certain assets that we need to track which would help in kicking of other phases of the supply chain.\nThroughout the product lifecycle process there are different types of notifications which are received by the clients and the staff who are handling the project via email, push notification or as a text message. Currently there is no way to manage different types of notifications which client and the staff receives as user may or may not want to receive certain notifications\n\n" 
                : c.overview}
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl mb-6 font-medium">Goal</h2>
            <div className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
              {c.slug === "solace"
                ? "In every stage there are certain files that are stored. Each file is technically an asset that the brand has used to facilitate their product development. We need to grant abilities to create the assets within the GRID. This would focus on creation of Tech pack for the “Tech pack” Stage. This would provide ability to users to create and consolidate the following in one single document:\n1.     Consolidate/upload all the product sketches (CAD) with other parts of the assets\n2.    Create/upload detailed sketches\n3.    Create BOM’s\n4.    Export the Tech pack into PDF file formats\n5.    Material library, CAD Library, Techpack Library\n6.   Sharing the the output PDF with factories and clients "
                : <p>{c.goal}</p>
              }
            </div>
            {c.goal && c.slug !== "solace" && (
              <div className="mt-8 rounded-full border border-border px-8 py-5 text-center">
                <p className="font-semibold text-base md:text-lg">
                  Give Control to User = Make User Feel Empowered = Better User Experience
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[768px] px-6 md:px-10"><div className="rule" /></div>

      {/* Research */}
      <section id="research" className="mx-auto max-w-[768px] px-6 md:px-10 py-24 scroll-mt-24">
        <h2 className="font-serif text-4xl mb-8 md:text-4xl font-semibold">Research</h2>
        <div className="space-y-12">
          {c.slug === "solace" && (
            <div>
              <h3 className="text-foreground/85 text-xl mb-4">Stakeholder Interview</h3>
              <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
                {c.research.stakeholderInterview}
              </p>
            </div>
          )}
          <div>
            <h3 className="text-foreground/85 text-xl mb-4">User Interview</h3>
            <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
              {c.research.userInterview}
            </p>
          </div>
        </div>

        {/* User Interview Insights */}
        <div className="mt-16 rounded-sm bg-foreground text-background px-6 md:px-16 py-16">
          <h3 className="font-serif text-3xl md:text-4xl mb-6 font-normal">User interview Insights</h3>
          <div className="border-l border-background/40 pl-8 md:pl-12 space-y-10 max-w-3xl mx-auto">
            {c.research.userInterviewInsights.map((q, i) => (
              q.quote && (
                <figure key={i} className="text-center italic">
                  <blockquote className="text-lg md:text-xl leading-relaxed whitespace-pre-line">"{q.quote}"</blockquote>
                  {q.author && <figcaption className="mt-2 text-base">-{q.author}</figcaption>}
                </figure>
              )
            ))}
          </div>
        </div>


        {/* Survey */}
        {c.slug === "solace" && (
          <div className="mt-16">
            <h3 className="font-serif text-3xl md:text-4xl mb-6 font-normal">Survey</h3>
            <p className="text-lg leading-relaxed text-foreground/85 mb-6">
              I ran a short survey with fashion designers and product developers to understand how they currently build and manage tech packs.The survey inform the decision of developing this feature as a part of UX Strategy  The responses clarified the biggest pain points, the tools in use, and where a dedicated platform could save the most time.
            </p>
            {c.survey && c.survey.trim() !== "" && (
              <div
                className="text-lg leading-relaxed text-foreground/85 space-y-4 [&_strong]:font-semibold [&_strong]:text-foreground"
                dangerouslySetInnerHTML={{
                  __html: c.survey
                    .split("\n\n")
                    .map((p) => `<p>${p}</p>`)
                    .join(""),
                }}
              />
            )}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {surveyImages.map((img) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setZoomImg(img.src)}
                  className="group block w-full overflow-hidden rounded-sm border-border bg-secondary p-4 transition-colors hover:border-foreground/40 cursor-zoom-in border-orange-200 border-0"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      <Dialog open={!!zoomImg} onOpenChange={(o) => !o && setZoomImg(null)}>
        <DialogContent className="max-w-5xl p-2 bg-background">
          {zoomImg && <img src={zoomImg} alt="Survey result" className="w-full h-auto" />}
        </DialogContent>
      </Dialog>

      <div className="mx-auto max-w-[768px] px-6 md:px-10"><div className="rule" /></div>

      {/* Strategy */}
      <section id="strategy" className="mx-auto max-w-[768px] px-6 md:px-10 py-24 scroll-mt-24">
        <h2 className="font-serif text-4xl mb-8 md:text-4xl font-semibold">Strategy</h2>
        <h3 className="font-serif text-3xl mb-6 font-medium">Product Goals</h3>
        <p
          className="text-lg leading-relaxed text-foreground/85 mb-12 [&_strong]:font-semibold [&_strong]:text-foreground"
          dangerouslySetInnerHTML={{ __html: c.strategy.productGoals.intro }}
        />

        <div className="bg-white rounded-sm p-6 md:p-10 flex justify-center">
          <img
            src={uxStrategyImg.url}
            alt="UX Strategy diagram showing Business Goals and User Goals converging into UX Strategy: Centralize, Connect, Collaborate"
            className="w-5/6 h-auto"
          />
        </div>

      </section>

      <div className="mx-auto max-w-[768px] px-6 md:px-10"><div className="rule" /></div>

      {/* Workflow */}
      <section className="mx-auto max-w-[768px] px-6 md:px-10 py-24">
        <h2 className="font-serif text-4xl mb-8 font-medium md:text-3xl">
          {c.slug === "solace" ? "Workflow" : "User Groups"}
        </h2>
        <button
          type="button"
          onClick={() => setZoomImg(userGroupsImg)}
          className="group block w-full overflow-hidden rounded-sm border-border bg-white p-4 transition-colors hover:border-foreground/40 cursor-zoom-in mb-10 border-orange-300 border-0"
        >
          <img
            src={userGroupsImg}
            alt="Diagram showing user groups connected to the Techpack Editor feature"
            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
            loading="lazy"
          />
        </button>
        {c.slug === "solace" && (
          <>
            <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal">Target Users</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                {
                  name: "Product Development Manager",
                  goals: [
                    "Manage end-to-end product lifecycle from design to production",
                    "Coordinate between design, client, and manufacturing teams",
                    "Track changes and maintain version control across all documents",
                  ],
                },
                {
                  name: "Fashion Designer",
                  goals: [
                    "Create detailed sketches and CAD designs efficiently",
                    "Organize materials, trims, and labels in one place",
                    "Communicate design changes to stakeholders seamlessly",
                  ],
                },
                {
                  name: "Client",
                  goals: [
                    "Review and approve designs and techpacks in real time",
                    "Request changes and provide feedback directly on documents",
                    "Stay informed about production progress and updates",
                  ],
                },
                {
                  name: "Manufacturer",
                  goals: [
                    "Receive complete and accurate techpacks for production",
                    "Access BOMs, material specs, and design details easily",
                    "Clarify requirements and communicate back to the brand",
                  ],
                },
              ].map((persona) => (
                <div
                  key={persona.name}
                  className="rounded-xl border bg-card text-card-foreground shadow p-6"
                >
                  <h4 className="font-semibold leading-none tracking-tight text-lg mb-4">
                    {persona.name}
                  </h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                    {persona.goals.map((goal, idx) => (
                      <li key={idx}>{goal}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
        <div className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
          {c.slug === "solace"
            ? "This workflow shows how the four key personas interact with the Techpack Editor feature throughout the product development lifecycle."
            : (c.slug === "atlas" 
                ? "In every stage there are certain files that are stored. Each file is technically an asset that the brand has used to facilitate their product development. We need to grant abilities to create the assets within the GRID. This would focus on creation of Tech pack for the “Tech pack” Stage. This would provide ability to users to create and consolidate the following in one single document:\n1.     Consolidate/upload all the product sketches (CAD) with other parts of the assets\n2.    Create/upload detailed sketches\n3.    Create BOM’s\n4.    Export the Tech pack into PDF file formats\n5.    Material library, CAD Library, Techpack Library\n6.   Sharing the the output PDF with factories and clients"
                : "Throughout the product lifecycle process there are different types of notifications which are received by the clients and the staff who are handling the project via email, push notification or as a text message. Currently there is no way to manage different types of notifications which client and the staff receives as user may or may not want to receive certain notifications\n\nBroad notification categories for users are as follows \n1.     Comments posted by different user types (Client, Factory, Staff, Finance )\n2.    Files - Uploads ,Approval, Rejection\n3.    PLM Stage Activities\n4.    Timeline/ETA Changes\n5.    Chat messages ,Tagged Comment in the product or in the chat\n6.    Finance - Costing, invoicing, PO updates  \n7.    Product level notifications \n8.    Company level notifications \n\n")
          }
        </div>
      </section>

      <div className="mx-auto max-w-[768px] px-6 md:px-10"><div className="rule" /></div>

      {/* Brainstorming */}
      <section id="design-process" className="mx-auto max-w-[768px] px-6 md:px-10 py-24 scroll-mt-24">
        <h2 className="font-serif text-4xl mb-8 font-medium md:text-3xl">Brainstorming session with product team</h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-10">{c.brainstorming}</p>
        <button
          type="button"
          onClick={() => setZoomImg(brainstormingImg)}
          className="group block w-full overflow-hidden rounded-sm border-border bg-secondary p-4 transition-colors hover:border-foreground/40 cursor-zoom-in border-orange-200 border-0"
        >
          <img
            src={brainstormingImg}
            alt="Whiteboard from brainstorming session with the product team"
            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
            loading="lazy"
          />
        </button>
      </section>


      <div className="mx-auto max-w-[768px] px-6 md:px-10"><div className="rule" /></div>

      {/* User Flow */}
      <section className="mx-auto max-w-[768px] px-6 md:px-10 py-24">
        <h2 className="font-serif text-4xl mb-8 md:text-3xl font-normal">User flow</h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-10">
          {c.slug === "solace" ? "To decide what I am designing, identifying the main flow of users when completing a task helps me to direct my focus on designing specific pages. By creating task flows that center on key functions of notification preference management, I was able to think through the necessary steps and examine the user experience in details. Below is the flow for the main notification settings tasks." : "To decide what I am designing, identifying the main flow of users when completing a task helps me to direct my focus on designing specific pages. By creating task flows that center on key functions of techpack tool to generate techpack and export it to a PDF and share it. I was able to think through the necessary steps and examine the user experience in details. Below is the flow for 2 tasks."}
        </p>

        <Carousel opts={{ loop: true }} className="relative">
          <CarouselContent>
            {[1, 2, 3].map((n) => (
              <CarouselItem key={n}>
                <div className="overflow-hidden rounded-sm border border-border bg-secondary">
                  <div className="flex aspect-[16/9] w-full items-center justify-center text-foreground/40">
                    <span className="font-serif text-2xl">User flow {n}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      <div className="mx-auto max-w-[768px] px-6 md:px-10"><div className="rule" /></div>

      {/* Mid Fidelity Wireframes */}
      <section className="mx-auto max-w-[768px] px-6 md:px-10 py-24">
        <h2 className="font-serif text-3xl mb-6 font-normal md:text-5xl">Mid Fidelity Wireframes</h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-10">
          Following mid fidelity wireframes were created for usability testing to validate the design if they are meeting the needs and solving their pain points or not.
        </p>
        <div className="flex flex-col gap-6">
          {[wireframeImg1, wireframeImg2].map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setZoomImg(img)}
              className="group block w-full overflow-hidden rounded-sm border-border bg-secondary p-3 transition-colors hover:border-foreground/40 cursor-zoom-in border-orange-300 border-0"
            >
              <img
                src={img}
                alt={`Mid fidelity wireframe ${i + 1}`}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[768px] px-6 md:px-10"><div className="rule" /></div>

      {/* Initial Sketches */}
      <section className="mx-auto max-w-[768px] px-6 md:px-10 py-24">
        <h2 className="font-serif text-3xl mb-6 font-normal md:text-5xl">Initial Sketches</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[sketchImg1, sketchImg2, sketchImg3, sketchImg4].map((s, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setZoomImg(s.url)}
              className="group block w-full overflow-hidden rounded-sm bg-secondary p-3 transition-colors cursor-zoom-in"
            >
              <img
                src={s.url}
                alt={`Initial sketch ${i + 1}`}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </section>






      {/* Review with Users, Product & Engineering Team */}
      <section className="mx-auto max-w-[768px] px-6 md:px-10 py-24">
        <h2 className="font-serif text-4xl mb-8 md:text-3xl font-medium">
          Review with Users, Product &amp; Engineering Team
        </h2>
        <ul className="space-y-6 text-lg leading-relaxed text-foreground/85">
          <li className="flex gap-4">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
            <span>
              Reviewing the initial <strong className="font-semibold">low fidelity clickable wireframes</strong> I presented them to the users to get their <strong className="font-semibold">feedback on functionalities</strong> and the <strong className="font-semibold">usability</strong> aspect of the design. After observing how they interact with the wireframe and getting feedback on the things which can be added. I made the second iteration and again showed it to the users.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
            <span>
              Reviewing designs with developers and CTO early stage is makes it easy and save the time and efforts in case if something is not feasible you might need to make many changes reviewed these with mobile developers to confirm feasibility of the designs also it makes them feel involved. Developers showed concern about the design, according to them nested pages inside the tabs.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
            <span>
              To solve that problem I went back and changed few things. I converted tabs into 2 buttons and then again reached out to developers for their opinion the new option.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
            <span>
              Developers and CTO gave me a green flag and I went ahead for the usability testing with users.
            </span>
          </li>
        </ul>
      </section>

      <div className="mx-auto max-w-[768px] px-6 md:px-10"><div className="rule" /></div>

      {/* High Fidelity Iteration Carousel */}
      <section className="mx-auto max-w-[768px] px-6 md:px-10 py-24">
        <Carousel opts={{ loop: true }} className="relative">
          <CarouselContent>
            {[1, 2, 3].map((n) => (
              <CarouselItem key={n}>
                <div className="overflow-hidden rounded-sm border border-border bg-secondary">
                  <div className="flex aspect-[16/9] w-full items-center justify-center text-foreground/40">
                    <span className="font-serif text-2xl">Iteration {n}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      <div className="mx-auto max-w-[768px] px-6 md:px-10"><div className="rule" /></div>

      {/* Testing */}
      <section id="testing" className="mx-auto max-w-[768px] px-6 md:px-10 py-24 scroll-mt-24">
        <p className="eyebrow mb-6">Testing</p>

        <h3 className="font-serif text-3xl md:text-4xl mb-6 font-normal">Usability Testing Preparation</h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-6">
          Before usability testing, it is important to set up test objectives, subject, methodology, tasks, and rubrics for measuring the result of the testing before conducting a test. Therefore, I wrote a <strong className="font-semibold">usability testing plan</strong> to define what and why I want to test and get prepared for the test.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-16">
          For all the tests, I expect a <strong className="font-semibold">90% completion rate</strong> and <strong className="font-semibold">87% error-free rate</strong> because the prototype is not fully functioning, and users might take alternatives that have not been built up for completing the tasks. Conduct Usability Testing then conducted in-person testing with <strong className="font-semibold">4 participants,</strong> and created transcripts for each participant based on my observation of their interaction with the prototype. I jot down their mistakes, slips, and confusions they expressed in the process. This transcript is a perfect raw material for summarizing the patterns of user's interaction with the prototype.
        </p>

        <h3 className="font-serif text-3xl md:text-4xl mb-6 font-normal">Usability Testing</h3>
        <ul className="space-y-6 text-lg leading-relaxed text-foreground/85">
          <li className="flex gap-4">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
            <span>As testing started from the early stage with the initial wireframes, It was quite helpful in finding user needs and expectations and setting up for the right direction for design to fill the gaps in the functionality.</span>
          </li>
          <li className="flex gap-4">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
            <span>I divided functionality in <strong className="font-semibold">6 different tasks</strong> tasks to check the task completion rate and time required to complete those tasks <span className="underline">Usability test questions</span> (5.    PLM Stage Update)</span>
          </li>
          <li className="flex gap-4">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
            <span>Usability test I recruited 4 participants to test the prototype. the objective of the test was to identify How easily users are able to navigate products.</span>
          </li>
          <li className="flex gap-4">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
            <span>Based on the test result data some changes were made to fix issues findability and usability issues.</span>
          </li>
        </ul>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Test Completion Rate", value: "100%" },
            { label: "Error-free rate", value: "87%" },
            { label: "Solving the problem?", value: "Yes" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-border bg-card px-8 py-10 text-center shadow-sm"
            >
              <p className="text-lg font-bold text-foreground">
                {s.label}: <span>{s.value}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[768px] px-6 md:px-10"><div className="rule" /></div>

      {/* Final Designs */}
      <section id="final-designs" className="mx-auto max-w-[768px] px-6 md:px-10 py-24 scroll-mt-24">
        <h2 className="font-serif text-4xl mb-8 md:text-3xl font-medium">Final Designs</h2>
        <Carousel opts={{ loop: true }} className="relative">
          <CarouselContent>
            {[1, 2, 3, 4].map((n) => (
              <CarouselItem key={n}>
                <div className="overflow-hidden rounded-sm border border-border bg-secondary">
                  <div className="flex aspect-[16/9] w-full items-center justify-center text-foreground/40">
                    <span className="font-serif text-2xl">Final design {n}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      <div className="mx-auto max-w-[768px] px-6 md:px-10"><div className="rule" /></div>

      {/* Final Thoughts + Next Steps */}
      <section id="impact" className="mx-auto max-w-[768px] px-6 md:px-10 py-24 scroll-mt-24">
        <h2 className="font-serif text-4xl mb-8 md:text-3xl font-semibold">Final Thoughts + Next Steps</h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-6">
          <strong className="font-semibold">With the final prototype created, I believe I met the goals that were outlined in the beginning of the design process.</strong> {c.slug === "solace" ? "I successfully designed the notification preference center for the GRID platform." : "I successfully designed Techpack editor tool along with Material, CAD, Techpack Libraries."}
        </p>
        <p className="text-lg leading-relaxed text-foreground/85">
          I tried to address the pinpoints of the user not able to handle the notifications. I tried to provide simple way to unsubscribe / subscribe to the notifications type, product and companies that users want to do by conducting user interviews and testing the designs at early stage which seems to serve the purpose as per the usability test results. The feature is live & users have been using it.
        </p>
      </section>

      <div className="mx-auto max-w-[768px] px-6 md:px-10"><div className="rule" /></div>

      {/* Measuring the Success */}
      <section className="mx-auto max-w-[768px] px-6 md:px-10 py-24">
        <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">Measuring the Success</h2>
        <p className="text-lg leading-relaxed text-foreground/85">
          I tried to address the pinpoints of the user to just get the notifications important to their job or the Company Level, Product level, Product Lifecycle stage Level. which they want to get updated on. I tried to provide simplest way to unsubscribe / subscribe to the notifications type for internal users, Clients, Factories.
        </p>
      </section>

      <div className="mx-auto max-w-[768px] px-6 md:px-10"><div className="rule" /></div>



      {/* Outcomes */}
      <section className="mx-auto max-w-[768px] px-6 md:px-10 py-24">
        <p className="eyebrow mb-10">Outcome</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {c.outcome.map((o) => (
            <div key={o.label} className="border-t border-border pt-6">
              <p className="display text-5xl md:text-6xl text-accent mb-3">{o.value}</p>
              <p className="text-sm text-muted-foreground">{o.label}</p>
            </div>
          ))}
        </div>
      </section>
      <div id="case-study-end" aria-hidden />



      {/* Empty space after case study */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[768px] px-6 md:px-10 py-10">
        </div>
      </section>

      {/* More case studies */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[768px] px-6 md:px-10 py-20">
          <p className="eyebrow mb-10">More case studies</p>
          <div className="grid md:grid-cols-2 gap-10">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/work/$slug"
                params={{ slug: o.slug }}
                className="group block"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-serif text-xl text-accent">{o.index}</span>
                  <span className="eyebrow">{o.tags.slice(0, 3).join(" · ")}</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl group-hover:text-accent transition-colors">
                  {o.title}
                </h3>
                <p className="mt-2 text-foreground/70 leading-relaxed max-w-md">{o.subtitle}</p>
                <span className="inline-block mt-4 text-sm border-b border-foreground/40 group-hover:border-foreground transition-colors">
                  Read the case study →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
