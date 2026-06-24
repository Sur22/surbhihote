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
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { caseStudies, getCaseStudy, type CaseStudy } from "@/lib/case-studies";
import surveyImg1 from "@/assets/techpack-survey-1.png";
import surveyImg3 from "@/assets/techpack-survey-3.png";
import brainstormingImg from "@/assets/brainstorming-session.jpg";
import userGroupsImg from "@/assets/user-groups.png";
import wireframeImg1 from "@/assets/techpack-wireframe-1.png";
import wireframeImg2 from "@/assets/techpack-wireframe-2.png";
import affiliateSitemap from "@/assets/Affiliate_website_sitemap.png.asset.json";
import sketchImg1 from "@/assets/techpack-sketch-1.jpg.asset.json";
import sketchImg2 from "@/assets/techpack-sketch-2.jpg.asset.json";
import sketchImg3 from "@/assets/techpack-sketch-3.jpg.asset.json";
import sketchImg4 from "@/assets/techpack-sketch-4.jpg.asset.json";
import finalProto from "@/assets/tech_pack_prototype.png.asset.json";
import finalToolScreens from "@/assets/techpack_tool_screens.png.asset.json";
import finalLibrary from "@/assets/tecpack_library.png.asset.json";
import finalSketchSel from "@/assets/techpack_sketch_selection.png.asset.json";
import finalDetailedSketch from "@/assets/techpack_detailed_skecth_no_drawer.png.asset.json";
import finalBom from "@/assets/techpack_bom.png.asset.json";
import finalPdf from "@/assets/techpack_pdf.png.asset.json";
import userFlow1 from "@/assets/techpack-userflow-1.png.asset.json";
import ideateImg1 from "@/assets/affiliate-workshop-sketching-presenting.png.asset.json";
import ideateImg2 from "@/assets/affiliate-workshop-sketches.png.asset.json";
import prioritizeImg1 from "@/assets/affiliate-workshop-voting-session.png.asset.json";
import prioritizeImg2 from "@/assets/affiliate-workshop-voting-and-prioritization.png.asset.json";
import defineImg1 from "@/assets/affiliate-workshop-define-session.png.asset.json";
import defineImg2 from "@/assets/affiliate-workshop-must-have-nice-to-have.png.asset.json";
import userFlow2 from "@/assets/techpack-userflow-2.png.asset.json";
import userFlow3 from "@/assets/techpack-userflow-3.png.asset.json";
import uxStrategyImg from "@/assets/ux-strategy-techpack.png.asset.json";
import techpackOutcomeImg from "@/assets/Techpack_outcome.png.asset.json";
import affSurveyQ1 from "@/assets/affiliate-survey-q1.png.asset.json";
import affSurveyQ2 from "@/assets/affiliate-survey-q2.png.asset.json";
import affSurveyQ3 from "@/assets/affiliate-survey-q3.png.asset.json";
import affSurveyQ4 from "@/assets/affiliate-survey-q4.png.asset.json";
import affSurveyQ5 from "@/assets/affiliate-survey-q5.png.asset.json";
import affSurveyQ6 from "@/assets/affiliate-survey-q6.png.asset.json";
import affiliateBeforeAfter from "@/assets/Affiliate_website_before_after.png.asset.json";
import affiliateFinalScreens from "@/assets/Affiliate_website_final_screens.png.asset.json";
import affiliateOrderDetails from "@/assets/Affiliate_website_Order_details_page.png.asset.json";
import affiliateReviseOrders from "@/assets/Affiliate_website_revise_orders.png.asset.json";
import teamPhoto from "@/assets/team-photo.jpg.asset.json";
import focusGroupScreenshot from "@/assets/focus-group-screenshot.png.asset.json";

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
  const affiliateSurveyImages = [
    { src: affSurveyQ1.url, alt: "How do you typically access your orders?" },
    { src: affSurveyQ2.url, alt: "What are the tasks you mainly perform on the Affiliate site?" },
    { src: affSurveyQ3.url, alt: "Please rate your experience with the current Affiliate site" },
    { src: affSurveyQ4.url, alt: "How frequently do you use Affiliate site?" },
    { src: affSurveyQ5.url, alt: "How reliant are you on the AMP affiliate site for day-to-day workflow?" },
    { src: affSurveyQ6.url, alt: "Would you join future affiliate site enhancement feedback sessions?" },
  ];

  return (
    <SiteLayout>
      <ScrollProgress />
      <CaseStudySideNav />

      {/* Title block */}
      <section className="mx-auto max-w-[1080px] px-6 md:px-10 pt-16 md:pt-24 pb-16">
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
        <h1 className="font-serif text-4xl mb-8 md:text-5xl font-normal whitespace-pre-line">{c.title}</h1>
        <p className="font-serif text-2xl md:text-4xl leading-[1.15] max-w-4xl text-foreground/85">
          {c.subtitle}
        </p>
      </section>

      {/* Cover */}
      <section className="mx-auto max-w-[1080px] px-6 md:px-10 pb-16">
        <div className="overflow-hidden rounded-sm">
          <img src={c.cover} alt={c.title} width={1400} height={1000} className={`h-auto ${c.slug === "atlas" ? "w-[35%] mx-auto" : "w-full"}`} />
        </div>
      </section>

      {/* Meta grid */}
      <section className="mx-auto max-w-[1080px] px-6 md:px-10 pb-16">
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

      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>

      {/* Overview + Goal */}
      <section id="overview" className="mx-auto max-w-[1080px] px-6 md:px-10 pt-16 pb-24 scroll-mt-24">
        <div className="space-y-16">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">Overview</h2>
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
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>

      {/* Research */}
      <section id="research" className="mx-auto max-w-[1080px] px-6 md:px-10 py-24 scroll-mt-24">
        <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">Research</h2>
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
            <h3 className="font-serif text-3xl mb-4 font-medium text-foreground/85">
              {c.slug === "fjord2" ? "1. Quantitative Research - Survey" : "User Interview"}
            </h3>
            <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
              {c.research.userInterview}
            </p>
            {c.slug === "fjord2" && (
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {affiliateSurveyImages.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setZoomImg(img.src)}
                    className="block w-full overflow-hidden rounded-sm bg-secondary p-2 cursor-zoom-in"
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-auto object-contain" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {c.slug !== "fjord2" && (
          <div className="mt-16 rounded-sm bg-foreground text-background px-6 md:px-16 py-16">
            <h3 className ="font-serif text-3xl md:text-4xl mb-6 font-normal">User interview Insights</h3>
            <div className="border-l border-background/40 pl-8 md:pl-12 space-y-10 max-w-3xl mx-auto">
              {c.research.userInterviewInsights.map((q, i) => (
                q.quote && (
                  <figure key={i} className="text-center italic">
                    <blockquote className="text-lg md:text-xl leading-relaxed whitespace-pre-line">{q.quote}</blockquote>
                    {q.author && <figcaption className="mt-2 text-base">-{q.author}</figcaption>}
                  </figure>
                )
              ))}
            </div>
          </div>
        )}

        {/* Survey */}
        {c.slug === "solace" && (
          <div className="mt-16">
            <h3 className="font-serif text-3xl md:text-4xl mb-6 font-normal">1. Quantitative Research - Survey</h3>
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
        {c.slug === "solace" && (
          <div className="mt-16">
            <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal">Personas</h3>
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
                  name: "Political Campaign\u00a0Manager/ Support\nSpecialist\u200b",
                  goals: [
                    "Create detailed sketches and CAD designs efficiently",
                    "Organize materials, trims, and labels in one place",
                    "Communicate design changes to stakeholders seamlessly",
                  ],
                },
                {
                  name: "Politocal & Market Yield Team",
                  goals: [
                    "Review and approve designs and techpacks in real time",
                    "Request changes and provide feedback directly on documents",
                    "Stay informed about production progress and updates",
                  ],
                },
                {
                  name: "Admin /Super User",
                  goals: [
                    "Receive complete and accurate techpacks for production",
                    "Access BOMs, material specs, and design details easily",
                    "Clarify requirements and communicate back to the brand",
                  ],
                },
              ].map((persona) => (
                <div
                  key={persona.name}
                  className="rounded-xl border border-[#0068FF] dark:border-border bg-card text-card-foreground shadow p-6"
                >
                  <h4 className="font-semibold leading-none tracking-tight text-lg mb-4 whitespace-pre-line">
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
          </div>
        )}
      </section>

      <Dialog open={!!zoomImg} onOpenChange={(o) => !o && setZoomImg(null)}>
        <DialogContent className="max-w-5xl p-2 bg-background">
          {zoomImg && <img src={zoomImg} alt="Survey result" className="w-full h-auto" />}
        </DialogContent>
      </Dialog>

      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>

      {/* Strategy */}
      <section id="strategy" className="mx-auto max-w-[1080px] px-6 md:px-10 py-24 scroll-mt-24">
        <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">{c.strategySectionTitle || "Strategy"}</h2>
        <h3 className="font-serif text-3xl mb-6 font-medium">{c.strategySectionSubtitle || "Product Goals"}</h3>

        <p className="text-lg leading-relaxed text-foreground/85 mb-8">
          The workshop was not a typical Design thinking workshop it was customized based on to make most out of the limited time available and the project.I made sure to schedule the survey beforehand so we have the survey data before we conduct the workshop.&nbsp;&nbsp;
        </p>

        {c.strategy.productGoals.workshopAttendees && c.strategy.productGoals.workshopSchedule ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h4 className="font-serif text-2xl mb-4 font-medium">Workshop Attendees</h4>
              <p
                className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line [&_strong]:font-semibold [&_strong]:text-foreground"
                dangerouslySetInnerHTML={{ __html: c.strategy.productGoals.workshopAttendees }}
              />
            </div>
            <div>
              <h4 className="font-serif text-2xl mb-4 font-medium">Workshop Schedule</h4>
              <p
                className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line [&_strong]:font-semibold [&_strong]:text-foreground"
                dangerouslySetInnerHTML={{ __html: c.strategy.productGoals.workshopSchedule }}
              />
            </div>
          </div>
        ) : (
          <p
            className="text-lg leading-relaxed text-foreground/85 mb-12 [&_strong]:font-semibold [&_strong]:text-foreground whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: c.strategy.productGoals.intro }}
          />
        )}

        {c.slug !== "fjord2" && (
          <div className="bg-secondary rounded-sm p-6 md:p-10 flex justify-center">
            <img
              src={uxStrategyImg.url}
              alt="UX Strategy diagram showing Business Goals and User Goals converging into UX Strategy: Centralize, Connect, Collaborate"
              className="w-[50.78%] h-auto"
            />
          </div>
        )}

        {c.slug === "fjord2" && (
          <>
            <div className="mt-16">
              <h3 className="font-serif text-3xl mb-6 font-medium">Empathize &{"\u00a0"}Define</h3>
              <p className="text-lg leading-relaxed text-foreground/85 mb-8">
                [Placeholder paragraph for Define section follow-up content.]
              </p>
              <div>
                <h2 className="font-serif text-3xl mb-6 font-medium">Why redesign ?</h2>
                <div className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line mb-[50px]">
                  <p>{c.goal}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="overflow-hidden rounded-sm bg-secondary p-2">
                  <img src={defineImg1.url} alt="Affiliate workshop define session reviewing survey results" className="w-full h-auto object-contain" />
                </div>

                <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal">Personas</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                  {[
                    {
                      name: "Political Sales Manager/Planner",
                      usage: 2,
                      dependency: 3,
                      goals: [
                        "Tasks\n1. Upload new rates\u200b\n2. View rates\u200b\n3. Download rates\u00a0\n4. Editing of rate cards\u200b\n5. Report on gaps in ratecards\u200b\u00a0\n",
                      ],
                    },
                    {
                      name: "Political Campaign\u00a0Manager/ Support\nSpecialist\u200b",
                      usage: 3,
                      dependency: 2,
                      goals: [
                        "Tasks\x03\n1. Review and Confirm\n2. orders in timely manner\n3. Create Makegoods\u200b\n4 .Accept orders",
                      ],
                    },
                    {
                      name: "Political & Markets Yeild Team\u00a0 (ERC)",
                      usage: 2,
                      dependency: 2,
                      goals: [
                        "Tasks\n1. Upload new rates\u200b\n2. View rates\u200b\n3. Download rates\u00a0\n4. Editing of rate cards\u200b\n5. Report on gaps in ratecards\u200b\u00a0\n",
                      ],
                    },
                    {
                      name: "Admin /Super User",
                      usage: 4,
                      dependency: 3,
                      goals: [
                        "Tasks\n1. Replicate all capabilities of\x03an\n\u00a0 \u00a0 affiliate user\u200b\n2. Troubleshoot for affiliate user\u200b\n3. Identify discrepancies between\n4. Platform and affiliate site orders\u200b\n5. Test deployment of affiliate site changes\n6. Validate the affiliate site is\x03running successfully\u200b",
                      ],
                    },
                    {
                      name: "Markets Account Manager / Planner",
                      usage: 4,
                      dependency: 3,
                      goals: [
                        "Tasks\n1. Replicate all capabilities of\x03an\n\u00a0 \u00a0 affiliate user\u200b\n2. Troubleshoot for affiliate user\u200b\n3. Identify discrepancies between\n4. Platform and affiliate site orders\u200b\n5. Test deployment of affiliate site changes\n6. Validate the affiliate site is\x03running successfully\u200b",
                      ],
                    },
                    {
                      name: "Markets Campaign Manager",
                      usage: 4,
                      dependency: 3,
                      goals: [
                        "Tasks\n1. Gather intel across both Linear and\u00a0 \u00a0 \u00a0 \u00a0 \u00a0 Digital orders\u200b\n2. New & historical linear & digital orders\u200b\n3. Total investment/total impressions\u200b\n4. The AMP AE on orders/markets\u200b\n5. Which AMP offcie order is from\u200b",
                      ],
                    },
                  ].map((persona, idx) => (
                    <div
                      key={`${persona.name}-${idx}`}
                      className="rounded-xl border border-[#0068FF] dark:border-border bg-white dark:bg-primary text-foreground dark:text-primary-foreground shadow p-6"
                    >
                      <h4 className="font-semibold leading-none tracking-tight text-lg mb-4 whitespace-pre-line">
                        {persona.name}
                      </h4>
                      <div className="space-y-2 mb-5">
                        {[
                          { label: "Platform Usage", value: persona.usage },
                          { label: "Platform Dependency", value: persona.dependency },
                        ].map((bar) => (
                          <div key={bar.label}>
                            <div className="text-sm font-medium mb-2">{bar.label}</div>
                            <div className="w-[70%]">
                              <div className="grid grid-cols-4 gap-2">
                                {Array.from({ length: 4 }).map((_, i) => (
                                  <div
                                    key={i}
                                    className={`h-2 rounded-full border border-[#0068FF] dark:border-primary-foreground/70 ${
                                      i < bar.value ? "bg-[#0068FF] dark:bg-primary-foreground" : "bg-transparent"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <ul className="text-sm text-foreground/85 dark:text-primary-foreground/85 space-y-2">
                        {persona.goals.filter((g) => g.trim()).map((goal, idx) => {
                          const tasksIndex = goal.indexOf("Tasks");
                          if (tasksIndex !== -1) {
                            const before = goal.slice(0, tasksIndex);
                            const after = goal.slice(tasksIndex + 5);
                            return (
                              <li key={idx} className="whitespace-pre-line">
                                {before}<span className="font-bold">Tasks</span>{after}
                              </li>
                            );
                          }
                          return <li key={idx} className="whitespace-pre-line">{goal}</li>;
                        })}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="overflow-hidden rounded-sm bg-secondary p-2">
                  <img src={defineImg2.url} alt="Affiliate workshop must have vs nice to have sticky notes" className="w-full h-auto object-contain" />
                </div>
              </div>
              <p className="text-lg leading-relaxed text-foreground/85 mt-8">
                [Placeholder paragraph for second image follow-up content.]
              </p>
            </div>

            <div className="mt-16">
              <h3 className="font-serif text-3xl mb-6 font-medium">Ideate</h3>
              <p className="text-lg leading-relaxed text-foreground/85 mb-8">
                [Placeholder paragraph for Ideate section follow-up content.]
              </p>
              <div className="grid grid-cols-1 gap-6">
                <div className="overflow-hidden rounded-sm bg-secondary p-2">
                  <img src={ideateImg1.url} alt="Affiliate workshop participants sketching and presenting ideas" className="w-full h-auto" />
                </div>
                <div className="overflow-hidden rounded-sm bg-secondary p-2">
                  <img src={ideateImg2.url} alt="Hand-drawn UI sketches from the affiliate workshop" className="w-full h-auto" />
                </div>
              </div>
              <p className="text-lg leading-relaxed text-foreground/85 mt-8">
                [Placeholder paragraph for second image follow-up content.]
              </p>
            </div>

            <div className="mt-16">
              <h3 className="font-serif text-3xl mb-6 font-medium">Prioritize</h3>
              <p className="text-lg leading-relaxed text-foreground/85 mb-8">
                [Placeholder paragraph for Prioritize section follow-up content.]
              </p>
              <div className="grid grid-cols-1 gap-6">
                <div className="overflow-hidden rounded-sm bg-secondary p-2">
                  <img src={prioritizeImg1.url} alt="Affiliate workshop voting session with sticky notes on glass wall" className="w-full h-auto object-contain" />
                </div>
                <div className="overflow-hidden rounded-sm bg-secondary p-2">
                  <img src={prioritizeImg2.url} alt="Affiliate workshop voting and prioritization matrix on glass wall" className="w-full h-auto object-contain" />
                </div>
              </div>
              <p className="text-lg leading-relaxed text-foreground/85 mt-8">
                [Placeholder paragraph for second image follow-up content.]
              </p>
            </div>

            <div className="mt-16">
              <h3 className="font-serif text-3xl mb-6 font-medium">Define success matrix</h3>
              <p className="text-lg leading-relaxed text-foreground/85 mb-8">
                [Placeholder paragraph for Define success matrix section follow-up content.]
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">KPIs</TableHead>
                      <TableHead className="font-semibold">How to measure</TableHead>
                      <TableHead className="font-semibold">Frequency</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Table stakes</TableCell>
                      <TableCell>Feedback & Survey</TableCell>
                      <TableCell>Continuous&nbsp;</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Speed</TableCell>
                      <TableCell>Clarity, App Insight, Support</TableCell>
                      <TableCell>Continuous&nbsp;</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Efficiency</TableCell>
                      <TableCell>Clarity, App Insight, Support</TableCell>
                      <TableCell>Continuous&nbsp;</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Secured & less Technology Risks</TableCell>
                      <TableCell>Security Scan</TableCell>
                      <TableCell>Quarterly</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Performance Tracking</TableCell>
                      <TableCell>Power BI</TableCell>
                      <TableCell>Continuous&nbsp;</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Phase 1</TableHead>
                      <TableHead>Phase 2</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Orders and Event log</TableCell>
                      <TableCell>Messaging&nbsp;</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Views and  Search </TableCell>
                      <TableCell>Collatrals</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Compare Order Version</TableCell>
                      <TableCell>Platform Notifications</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Internal & External Rate Cards</TableCell>
                      <TableCell>Super User Profile</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Email Notifications&nbsp;</TableCell>
                      <TableCell>Makegood&nbsp;</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Contacts & Resources</TableCell>
                      <TableCell>Order Revision</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="font-serif text-3xl mb-6 font-medium">The Team</h3>
              <p className="text-lg leading-relaxed text-foreground/85 mb-8">
                [Placeholder paragraph for The Team section.]
              </p>
              <div className="overflow-hidden rounded-sm bg-secondary p-2">
                <img src={teamPhoto.url} alt="The project team" className="w-full h-auto object-contain" />
              </div>
            </div>
          </>
        )}
      </section>

      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>

      {/* Initial Sketches */}
      <section id="design-process" className="mx-auto max-w-[1080px] px-6 md:px-10 py-24 scroll-mt-24">
        <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">Design</h2>
        <h3 className="font-serif text-3xl mb-6 font-medium">
          {c.slug === "fjord2" ? "Initial Design" : "Initial sketch"}
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-4">
          {c.slug === "fjord2" 
            ? "I started by creating a sitemap to understand exactly how many screens needs to be redesigned and also to make sure I do not miss any of the screens form the websited.\u00a0"
            : "I procured the diffrent files which Fashion Designer/PDM used to send to the clients and the factory"
          }
        </p>
        {c.slug !== "fjord2" && (
          <ul className="list-disc list-inside text-lg leading-relaxed text-foreground/85 mb-4 ml-1">
            <li>Bill of Material (Material and trims costing file)</li>
            <li>Final CAD file</li>
            <li>Tech Pack file</li>
          </ul>
        )}
        <p className="text-lg leading-relaxed text-foreground/85 mb-10">
          {c.slug === "fjord2"
            ? "I started with the concept of dashboard which was not present as the user logging in they just landed on to a page with multiple options to navigate to.With the limited amount of information I had from the survey data. I talked to stakeholders and suggested to arrange sessions with the affiliates to understand their workflow and which things are important to them on the website and to see how do they navigate through the site."
            : "To understand the details to get started with the initial sketches and get some inputs from users."
          }
        </p>
        {c.slug === "fjord2" ? (
          <button
            type="button"
            onClick={() => setZoomImg(affiliateSitemap.url)}
            className="group block w-full overflow-hidden rounded-sm bg-secondary p-2 transition-colors cursor-zoom-in"
          >
            <img
              src={affiliateSitemap.url}
              alt="Affiliate website sitemap"
              className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              loading="lazy"
            />
          </button>
        ) : (
          <div className="flex flex-row gap-4 overflow-x-auto pb-2">
            {[sketchImg1, sketchImg2, sketchImg3, sketchImg4].map((s, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setZoomImg(s.url)}
                className="group block flex-shrink-0 w-[22%] min-w-[180px] overflow-hidden rounded-sm bg-secondary p-2 transition-colors cursor-zoom-in"
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
        )}
      </section>

      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>

      {/* Brainstorming */}
      <section className="mx-auto max-w-[1080px] px-6 md:px-10 py-24">
        <h2 className="font-serif text-4xl mb-8 font-medium md:text-3xl">Brainstorming session with product team</h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-10">I presented my sketches to the product team with the help of whiteboard the as the possible solution for the feature we are building .After the feedback and the discussion about the design requirements form engineering standpoint and the concept design was good enough to kickstart the mid fidelity wireframe and tale some user feedback.</p>
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

      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>

      {c.slug === "fjord2" && (
        <section className="mx-auto max-w-[1080px] px-6 md:px-10 py-24">
              <h3 className="font-serif text-3xl mb-6 font-medium">2 .Qualitative Research - Focus Group</h3>
              <p className="text-lg leading-relaxed text-foreground/85 mb-8">
                I was able to get stakeholders to arrange meetings with 5 different affiliate{"\u00A0"}each have 5-10 people form their organization . We collectively came up with the questions we wanted to ask affiliates along with the wo{"\u00A0"}<a href="https://docs.google.com/document/d/1QNgsJY8tiK6sr_Hl4HzbIyaKk_U5N01bvP8huFwtLsI/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-bold underline">Click here</a>
              </p>
              <div className="overflow-hidden rounded-sm bg-secondary p-2">
                <img src={focusGroupScreenshot.url} alt="Focus group video call session" className="w-full h-auto object-contain" />
              </div>
        </section>
      )}

      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>

      {/* Challenges */}
      <section className="mx-auto max-w-[1080px] px-6 md:px-10 py-24">
        <h2 className="font-serif text-4xl mb-8 md:text-3xl font-normal">Challenges</h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-10 whitespace-pre-line">
          In these wireframes, I included elements that directly address users' goals, needs, frustrations. As I had a visual direction of the layout, I started to add more details and precisions to the sketches by turning them into mid-fidelity wireframes.Creating low fidelity wireframes helps me focus on the visual consistency and hierarchy before applying styles.Following mid fidelity wireframes were created for usability testing to validate the design if they are meeting the needs and solving their pain points or not.
        </p>
        <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal mt-16">Including Engineering Early On</h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-10">
          To confirm technical feasibility, software architecture and to know the development efforts and time required form CTO.I received feedback and got some inputs to improve from engineering perspective. Also, reviewed it with developers and confirmed about some new UI components I will be needing for this feature and will they be able to build it and the efforts and time required to build them.
        </p>
        <div className="flex flex-row gap-4 overflow-x-auto pb-2">
          {[wireframeImg1, wireframeImg2].map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setZoomImg(img)}
              className="group flex-shrink-0 w-[45%] min-w-[180px] overflow-hidden rounded-sm border-border bg-secondary p-3 transition-colors hover:border-foreground/40 cursor-zoom-in border-orange-300 border-0"
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

      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>

      {c.slug !== "fjord2" && (
        <>
      {/* Workflow */}
      <section className="mx-auto max-w-[1080px] px-6 md:px-10 py-24">
        <h2 className="font-serif text-4xl mb-8 font-medium md:text-3xl">
          {c.slug === "solace" ? "Workflow" : "User Groups"}
        </h2>
        <button
          type="button"
          onClick={() => setZoomImg(userGroupsImg)}
          className="group block w-[60%] mx-auto overflow-hidden rounded-sm border-border bg-secondary p-4 transition-colors hover:border-foreground/40 cursor-zoom-in mb-10 border-orange-300 border-0"
        >
          <img
            src={userGroupsImg}
            alt="Diagram showing user groups connected to the Techpack Editor feature"
            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
            loading="lazy"
          />
        </button>
        <div className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
          {c.slug === "solace"
            ? "This workflow shows how the four key personas interact with the Techpack Editor feature throughout the product development lifecycle."
            : (c.slug === "atlas" 
                ? "In every stage there are certain files that are stored. Each file is technically an asset that the brand has used to facilitate their product development. We need to grant abilities to create the assets within the GRID. This would focus on creation of Tech pack for the “Tech pack” Stage. This would provide ability to users to create and consolidate the following in one single document:\n1.     Consolidate/upload all the product sketches (CAD) with other parts of the assets\n2.    Create/upload detailed sketches\n3.    Create BOM’s\n4.    Export the Tech pack into PDF file formats\n5.    Material library, CAD Library, Techpack Library\n6.   Sharing the the output PDF with factories and clients"
                : "Throughout the product lifecycle process there are different types of notifications which are received by the clients and the staff who are handling the project via email, push notification or as a text message. Currently there is no way to manage different types of notifications which client and the staff receives as user may or may not want to receive certain notifications\n\nBroad notification categories for users are as follows \n1.     Comments posted by different user types (Client, Factory, Staff, Finance )\n2.    Files - Uploads ,Approval, Rejection\n3.    PLM Stage Activities\n4.    Timeline/ETA Changes\n5.    Chat messages ,Tagged Comment in the product or in the chat\n6.    Finance - Costing, invoicing, PO updates  \n7.    Product level notifications \n8.    Company level notifications \n\n")
          }
        </div>
      </section>

      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>

      {/* User Flow */}
      <section className="mx-auto max-w-[1080px] px-6 md:px-10 py-24">
        <h2 className="font-serif text-4xl mb-8 md:text-3xl font-normal">User flow</h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-10">
          {c.slug === "solace" ? "To decide what I am designing, identifying the main flow of users when completing a task helps me to direct my focus on designing specific pages. By creating task flows that center on key functions of the Design studio , I was able to think through the necessary steps and examine the user experience in details. Below is the flow to show from various places you can start and access the design studio and edit the Tech Pack." : "To decide what I am designing, identifying the main flow of users when completing a task helps me to direct my focus on designing specific pages. By creating task flows that center on key functions of techpack tool to generate techpack and export it to a PDF and share it. I was able to think through the necessary steps and examine the user experience in details. Below is the flow for 2 tasks."}
        </p>

        <Carousel opts={{ loop: true }} className="relative">
          <CarouselContent>
            {[userFlow1, userFlow2, userFlow3].map((img, i) => (
              <CarouselItem key={i}>
                <button
                  type="button"
                  onClick={() => setZoomImg(img.url)}
                  className="block w-full overflow-hidden rounded-sm border border-border bg-secondary cursor-zoom-in"
                >
                  <img
                    src={img.url}
                    alt={`User flow ${i + 1}`}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>
        </>
      )}

      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>

      {/* Review with Users, Product & Engineering Team */}
      <section className="mx-auto max-w-[1080px] px-6 md:px-10 py-24">

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
              After the second iteration I reviewed these with VP of Product to confirm that its meeting all the requirements and communicating the things users would like to have and what they need based on my observation during the user interviews. which I have added and are not mention In Product Requirement Document was updated for engineering team to keep everyone in the loop.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
            <span>
              After taking feedback and considering inputs from users, Product and Engineering team I start putting together high feudality wireframes and make it better and the third iteration of the design.
            </span>
          </li>
        </ul>
      </section>

      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>

      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>

      {/* Testing */}
      <section id="testing" className="mx-auto max-w-[1080px] px-6 md:px-10 py-24 scroll-mt-24">
        <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">Testing</h2>

        <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal">Usability Testing Preparation</h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-6">
          Before usability testing, it is important to set up test objectives, subject, methodology, tasks, and rubrics for measuring the result of the testing before conducting a test. Therefore, I wrote a <strong className="font-semibold">usability testing plan</strong> to define what and why I want to test and get prepared for the test.\n
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-16">
          For all the tests, I expect a <strong className="font-semibold">90% completion rate</strong> and <strong className="font-semibold">87% error-free rate</strong> because the prototype is not fully functioning, and users might take alternatives that have not been built up for completing the tasks. Conduct Usability Testing then conducted in-person testing with <strong className="font-semibold">4 participants,</strong> and created transcripts for each participant based on my observation of their interaction with the prototype. I jot down their mistakes, slips, and confusions they expressed in the process. This transcript is a perfect raw material for summarizing the patterns of user's interaction with the prototype.
        </p>

        <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal">Usability Testing</h3>
        <ul className="space-y-6 text-lg leading-relaxed text-foreground/85">
          <li className="flex gap-4">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
            <span>As testing started from the early stage with the initial wireframes, It was quite helpful in finding user needs and expectations and setting up for the right direction for design to fill the gaps in the functionality.</span>
          </li>
          <li className="flex gap-4">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
            <span>I divided functionality in <strong className="font-semibold">6 different tasks</strong> tasks to check the task completion rate and time required to complete those tasks <span className="underline hover:text-accent"><a href="https://docs.google.com/document/d/1nvp5c2-HadCPWBBaYZvTyO92Wk0OiqTZ/edit?usp=sharing&ouid=115603348250759583791&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="font-semibold">Usability test questions</a></span>&nbsp;.</span>
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

      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>

      {/* Final Designs Phase 1 */}
      <section id="final-designs" className="mx-auto max-w-[1080px] px-6 md:px-10 py-24 scroll-mt-24">
        <h2 className="font-serif text-4xl mb-8 md:text-3xl font-medium">Final Designs Phase 1</h2>
        <Carousel opts={{ loop: true }} className="relative">
          <CarouselContent>
            {(c.slug === "fjord2"
              ? [
                  { src: affiliateBeforeAfter.url, label: "Before and after comparison" },
                  { src: affiliateFinalScreens.url, label: "Affiliate website final screens" },
                  { src: affiliateOrderDetails.url, label: "Affiliate website order details page" },
                  { src: affiliateReviseOrders.url, label: "Affiliate website revise orders" },
                ]
              : [
                  { src: finalProto.url, label: "Prototype overview" },
                  { src: finalLibrary.url, label: "Techpack Library" },
                  { src: finalSketchSel.url, label: "Sketch selection" },
                  { src: finalDetailedSketch.url, label: "Detailed sketch" },
                  { src: finalBom.url, label: "Bill of Materials" },
                  { src: finalPdf.url, label: "Exported PDF" },
                  { src: finalToolScreens.url, label: "Tool screens" },
                ]
            ).map((img) => (
              <CarouselItem key={img.label}>
                <div className="overflow-hidden rounded-sm border border-border bg-secondary">
                  <img src={img.src} alt={img.label} className="w-full h-auto" loading="lazy" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
        <p className="text-lg leading-relaxed text-foreground/85 mt-10">
          <a href="https://drive.google.com/file/d/1s40aTeRAkNrIAgzvlOFE_5VQaNWTeA6s/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent font-semibold">Click here</a> to see the output PDF file of this project.
        </p>
      </section>


      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>

      {/* Measuring the Success */}
      <section id="impact" className="mx-auto max-w-[1080px] px-6 md:px-10 pt-24 pb-0 scroll-mt-24">
        <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">Measuring the Success</h2>
        <p className="text-lg leading-relaxed text-foreground/85">
          I tried to address the pinpoints of the user to just get the notifications important to their job or the Company Level, Product level, Product Lifecycle stage Level. which they want to get updated on. I tried to provide simplest way to unsubscribe / subscribe to the notifications type for internal users, Clients, Factories.
        </p>
      </section>

      {c.slug === "solace" && (
        <div className="mx-auto max-w-[1080px] px-6 md:px-10">
          <div className="bg-secondary rounded-sm p-6 md:p-10 flex justify-center">
            <img
              src={techpackOutcomeImg.url}
              alt="Techpack outcome UX strategy diagram showing Centralize, Connect, and Collaborate pillars"
              className="w-[48.75%] h-auto"
            />
          </div>
        </div>
      )}

      {/* Outcomes */}
      <section className="mx-auto max-w-[1080px] px-6 md:px-10 pt-0 pb-6">
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

      {/* Final Thoughts */}
      <section className="mx-auto max-w-[1080px] px-6 md:px-10 pb-10">
        <h2 className="font-serif text-4xl mb-8 md:text-3xl font-semibold">{"\n"}</h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-6">
          <strong className="font-semibold">With the final prototype created, I believe I met the goals that were outlined in the beginning of the design process.</strong> {c.slug === "solace" ? "I successfully designed the notification preference center for the GRID platform." : "I successfully designed Techpack editor tool along with Material, CAD, Techpack Libraries."}
        </p>
        <p className="text-lg leading-relaxed text-foreground/85">
        </p>
      </section>


      {/* More case studies */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1080px] px-6 md:px-10 pt-20 pb-10">
          <p className="eyebrow mb-10">More case studies</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
