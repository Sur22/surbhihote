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
        <div className="overflow-hidden rounded-sm bg-secondary">
          <img src={c.cover} alt={c.title} width={1400} height={1000} className="w-full h-[60vh] object-cover" />
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

      <div className="mx-auto max-w-[768px] px-6 md:px-10"><div className="rule" /></div>

      {/* Overview + Goal */}
      <section id="overview" className="mx-auto max-w-[768px] px-6 md:px-10 pt-16 pb-24 scroll-mt-24">
        <div className="space-y-16">
          <div>
            <h2 className="font-serif text-3xl mb-6 font-medium">Overview</h2>
            <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">{c.overview}</p>
          </div>
          <div>
            <h2 className="font-serif text-3xl mb-6 font-medium">Goal</h2>
            <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">{c.goal}</p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[768px] px-6 md:px-10"><div className="rule" /></div>

      {/* Research */}
      <section className="mx-auto max-w-[768px] px-6 md:px-10 py-24">
        <h2 className="font-serif text-4xl mb-8 md:text-4xl font-semibold">Research</h2>
        <div className="space-y-12">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8">
            <h3 className="text-foreground/85 text-xl">Stakeholder Interview</h3>
            <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
              {c.research.stakeholderInterview}
            </p>
          </div>
          <div className="grid md:grid-cols-[1fr_2fr] gap-8">
            <h3 className="text-foreground/85 text-xl">User Interview</h3>
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
              <figure key={i} className="text-center italic">
                <blockquote className="text-lg md:text-xl leading-relaxed">"{q.quote}"</blockquote>
                <figcaption className="mt-2 text-base">-{q.author}</figcaption>
              </figure>
            ))}
          </div>
        </div>

      <div className="mx-auto max-w-[768px] px-6 md:px-10"><div className="rule" /></div>

      {/* User Groups */}
      <section className="mx-auto max-w-[768px] px-6 md:px-10 py-24">
        <h2 className="font-serif text-4xl mb-8 font-medium md:text-3xl">User Groups</h2>
        <button
          type="button"
          onClick={() => setZoomImg(userGroupsImg)}
          className="group block w-full overflow-hidden rounded-sm border-border bg-secondary p-4 transition-colors hover:border-foreground/40 cursor-zoom-in mb-10 border-orange-300 border-0"
        >
          <img
            src={userGroupsImg}
            alt="Diagram showing user groups connected to the Techpack Editor feature"
            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
            loading="lazy"
          />
        </button>
        <p className="text-lg leading-relaxed text-foreground/85">
          This shows all the different user groups which are directly tied to this feature in grey circles which are Product Development Manager, Clients, Factories and Suppliers.
        </p>
      </section>

      <div className="mx-auto max-w-[768px] px-6 md:px-10"><div className="rule" /></div>

        {/* Survey */}
        <div className="mt-16">
          <h3 className="font-serif text-3xl md:text-4xl mb-6 font-normal">Survey</h3>
          <div
            className="text-lg leading-relaxed text-foreground/85 space-y-4 [&_strong]:font-semibold [&_strong]:text-foreground"
            dangerouslySetInnerHTML={{
              __html: c.survey
                .split("\n\n")
                .map((p) => `<p>${p}</p>`)
                .join(""),
            }}
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </section>

      <Dialog open={!!zoomImg} onOpenChange={(o) => !o && setZoomImg(null)}>
        <DialogContent className="max-w-5xl p-2 bg-background">
          {zoomImg && <img src={zoomImg} alt="Survey result" className="w-full h-auto" />}
        </DialogContent>
      </Dialog>

      <div className="mx-auto max-w-[768px] px-6 md:px-10"><div className="rule" /></div>

      {/* Strategy */}
      <section className="mx-auto max-w-[768px] px-6 md:px-10 py-24">
        <h2 className="font-serif text-4xl mb-8 md:text-4xl font-semibold">Strategy</h2>
        <h3 className="font-serif text-3xl mb-6 font-medium">Product Goals</h3>
        <p
          className="text-lg leading-relaxed text-foreground/85 mb-12 [&_strong]:font-semibold [&_strong]:text-foreground"
          dangerouslySetInnerHTML={{ __html: c.strategy.productGoals.intro }}
        />

        <div className="relative border-2 border-accent rounded-sm px-6 md:px-12 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-start">
            {/* Business Goals */}
            <div>
              <h4 className="text-xl font-semibold text-muted-foreground mb-8">Business Goals</h4>
              <ul className="space-y-6">
                {c.strategy.productGoals.businessGoals.map((g) => (
                  <li key={g} className="text-base text-muted-foreground leading-relaxed">{g}</li>
                ))}
              </ul>
            </div>

            {/* Shared (overlap circle) */}
            <div className="relative flex justify-center">
              <div className="aspect-square w-full max-w-[340px] rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center px-6 py-8">
                <ul className="space-y-6 text-center">
                  {c.strategy.productGoals.sharedGoals.map((g) => (
                    <li key={g} className="text-sm md:text-base text-muted-foreground leading-relaxed">{g}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* User Goals */}
            <div>
              <h4 className="text-xl font-semibold text-muted-foreground mb-8">User Goals</h4>
              <ul className="space-y-6">
                {c.strategy.productGoals.userGoals.map((g) => (
                  <li key={g} className="text-base text-muted-foreground leading-relaxed">{g}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[768px] px-6 md:px-10"><div className="rule" /></div>

      {/* Brainstorming */}
      <section className="mx-auto max-w-[768px] px-6 md:px-10 py-24">
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
          To decide what I am designing, identifying the main flow of users when completing a task helps me to direct my focus on designing specific pages. By creating task flows that center on key functions of techpack tool to generate techpack and export it to a PDF and share it. I was able to think through the necessary steps and examine the user experience in details. Below is the flow for 2 tasks.
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

      {/* Low Fidelity Wireframes */}
      <section className="mx-auto max-w-[768px] px-6 md:px-10 py-24">
        <h2 className="font-serif text-3xl mb-6 font-normal md:text-5xl">Low Fidelity Wireframes</h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-10">
          <strong className="font-semibold">Creating low fidelity wireframes helps me focus on the visual consistency and hierarchy before applying styles.</strong> In these wireframes, I tried to incorporate common design patterns that have been tested on our competitors' product, or included elements that directly address users' goals, needs, frustrations. Once I had a visual direction of the layout, I started to add more details and precisions to the sketches by turning them into mid-fidelity wireframes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[wireframeImg1, wireframeImg2].map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setZoomImg(img)}
              className="group block w-full overflow-hidden rounded-sm border-border bg-secondary p-3 transition-colors hover:border-foreground/40 cursor-zoom-in border-orange-300 border-0"
            >
              <img
                src={img}
                alt={`Low fidelity wireframe ${i + 1}`}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[768px] px-6 md:px-10"><div className="rule" /></div>




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
              After the <strong className="font-semibold">second iteration</strong> I reviewed these with VP of Product to confirm that its meeting all the requirements and communicating the things users would like to have and what they need based on my observation during the user interviews. which I have added which are not mention In Product requirement document and update it for engineering team to keep everyone in the loop.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
            <span>
              To confirm <strong className="font-semibold">technical feasibility</strong>, software architecture and to know the development efforts and time required form CTO. I received feedback and got some inputs to improve from engineering perspective. Also, reviewed it with developers and confirmed about some new UI components I will be needing for this feature and will they be able to build it and the efforts and time required to build them.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
            <span>
              After taking feedback and considering inputs from users, Product and Engineering team I start putting together high fidelity wireframes and make it better and the <strong className="font-semibold">third iteration</strong> of the design.
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
      <section className="mx-auto max-w-[768px] px-6 md:px-10 py-24">
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
            <span>I divided functionality in <strong className="font-semibold">6 different tasks</strong> tasks to check the task completion rate and time required to complete those tasks <span className="underline">Usability test questions</span></span>
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

      {/* Final Thoughts + Next Steps */}
      <section className="mx-auto max-w-[768px] px-6 md:px-10 py-24">
        <h2 className="font-serif text-4xl mb-8 md:text-3xl font-semibold">Final Thoughts + Next Steps</h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-6">
          <strong className="font-semibold">With the final prototype created, I believe I met the goals that were outlined in the beginning of the design process.</strong> I successfully designed Techpack editor tool along with Material, CAD, Techpack Libraries.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85">
          If I had more time, I would dive deeper in developing some of those nice-to-have features and more details. After it was released I have monitored it using google analytics In order to fill any gaps which I could find about how users are using it and checking the scope for future improvements from user &amp; business perspective.
        </p>
      </section>

      <div className="mx-auto max-w-[768px] px-6 md:px-10"><div className="rule" /></div>

      {/* Measuring the Success */}
      <section className="mx-auto max-w-[768px] px-6 md:px-10 py-24">
        <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">Measuring the Success</h2>
        <p className="text-lg leading-relaxed text-foreground/85">
          These features have added more value for our existing users, clients and to the business and increase the competitiveness. <strong className="font-semibold">The designed feature is live and users are using it</strong>. This feature have also added value for the sales team for demos and attracting new clients who loved this feature in particular and they <strong className="font-semibold">closed the deal with 6 deals</strong> within a few moths after this feature was released. Getting feedback from internal users who are Product Development Manager user group were happy for this feature releases it made their work a lot easier and had saved them lot of efforts and time.
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

      {/* Interested in more */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[768px] px-6 md:px-10 py-20">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <h2 className="font-serif text-4xl md:text-5xl">Interested in more?</h2>
            <div>
              <p className="text-lg leading-relaxed text-foreground/85 mb-6">
                <span className="text-accent font-medium">Interested in more?</span>{" "}
                Contact me for the case study's with additional insights and artifacts:
              </p>
              <ul className="space-y-4">
                {[
                  "Voice of the customer insights",
                  "Deep dive on process of one feature",
                  "Design thinking lunch and learn",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    <span className="text-foreground/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
