import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, TrendingUp, Play } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CaseStudySideNav } from "@/components/CaseStudySideNav";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
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
import fjordComponent1 from "@/assets/fjord-component-1.png.asset.json";
import fjordComponent2 from "@/assets/fjord-component-2.png.asset.json";
import fjordComponentLeft from "@/assets/fjord-component-left.png.asset.json";
import notificationsWireframe from "@/assets/notifications-wireframe.png.asset.json";
import finalProto from "@/assets/tech_pack_prototype.png.asset.json";
import finalToolScreens from "@/assets/techpack_tool_screens.png.asset.json";
import finalLibrary from "@/assets/tecpack_library.png.asset.json";
import notificationsProto from "@/assets/notifications_portotyping_connection.png.asset.json";
import notificationsMockup from "@/assets/notifications_mockup.jpg.asset.json";
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
import userFlowSolace2 from "@/assets/techpack-user-flow-2-v2.png.asset.json";
import userFlowSolace3 from "@/assets/techpack-user-flow-3-v2.png.asset.json";
import uxStrategyImg from "@/assets/ux-strategy-techpack.png.asset.json";
import atlasStrategyDiagram from "@/assets/atlas-strategy-diagram.png.asset.json";
import atlasTaskFlow from "@/assets/atlas-task-flow.png.asset.json";
import techpackOutcomeImg from "@/assets/Techpack_outcome.png.asset.json";
import affSurveyQ1 from "@/assets/affiliate-survey-q1.png.asset.json";
import fjord2InitialDesign from "@/assets/fjord2-initial-design.png.asset.json";
import affSurveyQ2 from "@/assets/affiliate-survey-q2.png.asset.json";
import affSurveyQ3 from "@/assets/affiliate-survey-q3.png.asset.json";
import affSurveyQ4 from "@/assets/affiliate-survey-q4.png.asset.json";
import affSurveyQ5 from "@/assets/affiliate-survey-q5.png.asset.json";
import affSurveyQ6 from "@/assets/affiliate-survey-q6.png.asset.json";
import affiliateBeforeAfter from "@/assets/Affiliate_website_before_after.png.asset.json";
import brainstormingAudienceBuilder from "@/assets/brainstorming-audience-builder-v2.png.asset.json";
import affiliateFinalScreens from "@/assets/Affiliate_website_final_screens.png.asset.json";
import affiliateOrderDetails from "@/assets/Affiliate_website_Order_details_page.png.asset.json";
import affiliateReviseOrders from "@/assets/Affiliate_website_revise_orders.png.asset.json";
import teamPhoto from "@/assets/team-photo.jpg.asset.json";
import focusGroupScreenshot from "@/assets/focus-group-screenshot.png.asset.json";
import focusGroupScreenshot2 from "@/assets/focus-group-screenshot-2.png.asset.json";
import userControlBanner from "@/assets/user-control-banner.png.asset.json";
import audienceSegmentFlow from "@/assets/audience-segment-flow.png.asset.json";
import notificationsFinalScreens from "@/assets/notifications-final-screens-mockup.png.asset.json";
import gridBg from "@/assets/grid-mockup-bg.png.asset.json";
import audienceBuilderMockup2 from "@/assets/audience-builder-mockup-2.png.asset.json";
import ampBgPersona from "@/assets/persona_cards_bg.png.asset.json";
import ampMockupBg2 from "@/assets/amp-mockup-bg-2.png.asset.json";
import affiliateSiteOldBefore from "@/assets/affiliate-site-old-before.png.asset.json";
import affiliateSiteDashboard from "@/assets/affiliate-site-dashboard.png.asset.json";
import affiliateSiteRevisedTab from "@/assets/affiliate-site-revised-tab.png.asset.json";
import affiliateSiteOrderPage from "@/assets/affiliate-site-order-page.png.asset.json";
import ampMockupBg3 from "@/assets/amp-mockup-bg-3.png.asset.json";

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

function OutcomeMetrics({ c }: { c: CaseStudy }) {
  return (
    <section className="mx-auto max-w-[1080px] px-6 md:px-10 pt-0 pb-6">
      <p className="eyebrow mb-10">Outcome</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {c.outcome.map((o) => (
          <div key={o.label} className="border-t border-border pt-6">
            {o.value && (
              <p className="display text-4xl md:text-5xl text-accent mb-3 whitespace-pre-line flex items-center gap-2">
                {o.value === "1 week - 5 min" || o.value === "~$850K\u00A0\u2192\u00A0$0" || o.value === "\u00a0 \u00a0 \u00a0 \u00a0 $0" ? (
                  <span className="whitespace-nowrap">
                    {o.value === "~$850K\u00A0\u2192\u00A0$0" ? (
                      <>
                        ~$850K <span className="text-[70%]">\u2192</span> $0
                      </>
                    ) : o.value === "1 week - 5 min" ? (
                      <>1 <span className="text-2xl">week</span> <span className="text-[70%]">\u2192</span> 5 <span className="text-2xl">min</span></>
                    ) : (
                      <>{o.value}</>
                    )}
                  </span>
                ) : (
                  <>{o.value}</>
                )}
                {o.label.includes("Usability Improved") && <TrendingUp className="w-8 h-8 md:w-10 md:h-10" />}
              </p>
            )}
            <p className="text-sm text-muted-foreground whitespace-pre-line">{o.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

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
      <div
        className={(c.slug === "fjord" || c.slug === "fjord2") ? "study-fjord-bg" : ""}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          const img = target.closest("img") as HTMLImageElement | null;
          if (!img) return;
          // Skip tiny icons/avatars and images inside interactive controls we don't want to hijack
          if (img.closest("a, button[data-no-zoom]")) return;
          if (img.naturalWidth && img.naturalWidth < 80) return;
          if (img.src) {
            e.preventDefault();
            setZoomImg(img.src);
          }
        }}
      >
      <ScrollProgress />
      <CaseStudySideNav slug={c.slug} />

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
          <img src={c.cover} alt={c.title} width={1400} height={1000} className={`h-auto ${(c.slug === "atlas" || c.slug === "atlas2") ? "w-[35%] mx-auto" : c.slug === "fjord2" ? "w-[72%] mx-auto" : c.slug === "solace" ? "w-[78%] mx-auto" : "w-full"}`} />
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

      {c.slug === "fjord2" && <OutcomeMetrics c={c} />}

      {/* Overview + Goal */}
      <section id="overview" className={`mx-auto max-w-[1080px] px-6 md:px-10 pt-16 scroll-mt-24 ${(c.slug === "atlas" || c.slug === "atlas2") ? "pb-0" : "pb-24"}`}>
        <div className={c.slug === "fjord2" ? "" : "space-y-16"}>
          <div>
            <h2 className={`font-serif text-4xl md:text-5xl font-normal ${c.slug === "fjord2" ? "mb-[35px]" : "mb-8"}`}>Context</h2>
            {c.slug !== "fjord2" && (
              <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
                {c.slug === "solace" 
                  ? "The GRID is end-to-end supply chain visibility from product conception\x03to distribution with real-time updates and analytics on sourcing,\x03product development, production, and shipping. For companies \x03running their supply chain on Excel sheets and point solutions, \x03the GRID functions as the ERP and as an intuitive supply chain \x03productivity layer. For companies that have legacy PIMs and\x03ERPs, the GRID integrates to connect people, data, and workflows.\x03In either role,the GRID delivers quick time to value by eliminating \x03errors and digitizing manual processes thereby reducing OpEx and\x03COGS and improving margins." 
                  : c.overview}
              </p>
            )}
          </div>
          {c.slug === "fjord2" && (
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line mb-8">
                {`Ampersand is a multiscreen advanced TV advertising company empowering brands to reach audiences with precision at scale.Ampersand is jointly owned by the largest cable operators in the US which are Comcast, COX, Charter.The cross-screen, data-driven solutions, powered by America’s largest TV inventory and largest set of data viewership insights, are revolutionizing TV planning, buying and measurement. There three lines of business National, Local and Addressable.`}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-medium mb-6">Introdcution</h3>
              <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line mb-8">
                {`Affiliates, the partner networks who buy and transact against that inventory\u00a0 run their daily business through Ampersand's online portal: pulling rate cards, placing orders, and tracking yield. That portal was 25 years old. Its codebase was frozen no fix could ship without a full rebuild ,so after all these years of workarounds had hardened into the way affiliates worked.\u00a0I led the end-to-end redesign as Lead Product Designer.It was to rebuild a business-critical tool that 500+ affiliates depend on daily ,without losing a dollar of revenue in the transition.`}
              </p>
            </div>
          )}
          {c.slug === "atlas" && (
            <div>
              <h2 className="font-serif text-3xl mb-6 font-medium">The Problem</h2>
              <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
                {`Throughout the product lifecycle process there are different types of notifications which are received by the clients and the staff who are handling the project via email, push notification or as a text message. Currently there is no way to manage different types of notifications which client and the staff receives as user may or may not want to receive certain notifications
\u00a01.Users getting so many spam notifications
\u00a02.Important notifications for there job getting lost resulting into delays and missed deadlines
\u00a03.Users need only selective set of notifications which are important for their job responsibilities\u00a0`}
              </p>
            </div>
          )}
          {c.slug === "atlas2" && (
            <div>
              <h2 className="font-serif text-3xl mb-6 font-medium">The Problem</h2>
              <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
                {`Throughout the product lifecycle process there are different types of notifications which are received by the clients and the staff who are handling the project via email, push notification or as a text message. Currently there is no way to manage different types of notifications which client and the staff receives as user may or may not want to receive certain notifications
\u00a01.Users getting so many spam notifications
\u00a02.Important notifications for there job getting lost resulting into delays and missed deadlines
\u00a03.Users need only selective set of notifications which are important for their job responsibilities\u00a0`}
              </p>
            </div>
          )}
          {c.slug === "atlas" && (
            <div>
              <h2 className="font-serif text-3xl mb-6 font-medium">Goal</h2>
              <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
                {c.opportunity}
              </p>
            </div>
          )}
          {c.slug !== "fjord2" && (
            <div>
              <h2 className="font-serif text-3xl mb-6 font-medium">{(c.slug === "fjord") ? "The Problem" : (c.slug === "atlas") ? "\n" : "Goal"}</h2>
              <div className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
                {c.slug === "solace"
                  ? "The goal is to give users \u00a0flexibility and control on subscribing to the notifications which are useful and important for their job.\n1.\u00a0\u00a0\u00a0\u00a0 Provide different user types ability to pick and choose the notifications that they would like to receive\n2.\u00a0\u00a0\u00a0\u00a0 Serve users ability to choose the notifications that they would like to receive per module and per product\n3.\u00a0\u00a0\u00a0\u00a0 Allow users ability to switch on/off notifications at any point of time\n"
                  : c.slug === "fjord"
                  ? <p className="whitespace-pre-line">{`When clients wants to run their ads on TV or streaming platform they \x03have to define the target Audiance to whom they want their ads to reach they want to include or exclude some type of audiance for their campaigns.\x03Ampersand AE's build the custome audiance acoording to their needs so \x03the number of audiance can be calculated to meet the expectation of the client in terms or Reach and Impressons for the campaing to be successful \x03for the clients.
Limited number of users having access to an expensive tool where they can create custom audience. 
If AE's want to build a custom audience to for the clients would require to send a request\x03to the data team and the turn around time was at least a week as the team is small. \x03AE's had to wait for getting their coustom audience for the campaign.`}</p>
                  : <p className="whitespace-pre-line">{c.goal}</p>
                }
              </div>
            </div>
          )}
          {c.slug === "fjord" && (
            <div>
              <h2 className="font-serif text-3xl mb-6 font-medium">Goal</h2>
              <div className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
                <p className="whitespace-pre-line">{c.goal}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>

      {/* Research */}
      <section id="research" className="mx-auto max-w-[1080px] px-6 md:px-10 py-24 scroll-mt-24">
        <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">Research</h2>
        <div className="space-y-12">
          {c.slug === "solace" && (
            <div>
              <h3 className="font-serif text-3xl mt-12 mb-6 font-medium">Stakeholder Interview</h3>
              <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
                {c.research.stakeholderInterview}
              </p>
            </div>
          )}
          <div>
            <h3 className="font-serif text-3xl mb-4 font-medium text-foreground/85">
              {(c.slug === "fjord2") ? "Survey" : "User Interview"}
            </h3>
            <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
              {c.research.userInterview}
            </p>
            {(c.slug === "fjord2") && (
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
          {(c.slug === "fjord") && (
            <div className="mt-16">
              <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal">User Groups</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {[
                  {
                    name: "Account Executive\n",
                    goals: [
                      "Tasks\n1. Develop customized media strategies for agency stakeholders.\n2. Build Custom Audience for Clients / Agencies\n3. Create a schedule with created custom audience\u00a0\n\n",
                    ],
                  },
                  {
                    name: "Account Director",
                    goals: [
                      "Tasks\x03\n1.\u00a0 Manage full sales cycle to achieve campaign success.\n2. Create custom audience for the campaign\u00a0\n3. Work with AE's to create a schedule for the created audience \u200b\n\n",
                    ],
                  },
                ].map((persona, idx) => (
                  <div
                    key={`${persona.name}-${idx}`}
                    className="relative rounded-xl shadow overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-50"
                      style={{ backgroundImage: `url(${ampBgPersona.url})` }}
                    />
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />
                    <div className="relative p-6 text-foreground dark:text-primary">
                      <h4 className="font-semibold leading-none tracking-tight text-lg mb-4 whitespace-pre-line">
                        {persona.name}
                      </h4>
                      <ul className="text-sm text-foreground/85 dark:text-primary/85 space-y-2">
                        {persona.goals.filter((g) => g.trim()).map((goal, gidx) => {
                          const tasksIndex = goal.indexOf("Tasks");
                          if (tasksIndex !== -1) {
                            const before = goal.slice(0, tasksIndex);
                            const after = goal.slice(tasksIndex + 5);
                            return (
                              <li key={gidx} className="whitespace-pre-line">
                                {before}<span className="font-bold">Tasks</span>{after}
                              </li>
                            );
                          }
                          return <li key={gidx} className="whitespace-pre-line">{goal}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {(c.slug !== "fjord" && c.slug !== "fjord2") && (
          <div className={`mt-16 rounded-sm bg-foreground text-background px-6 md:px-16 py-16 relative overflow-hidden`}>
            {c.slug === "solace" && (
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md pointer-events-none" />
            )}
            <div className="relative z-10">
              <h3 className="font-serif text-3xl md:text-4xl mb-6 font-normal">User interview Insights</h3>
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
          </div>
        )}

        {(c.slug === "atlas" || c.slug === "atlas2") && (
          <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>
        )}

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
                  name: "Technical / Fashion Designer\u200b",
                  goals: [
                    "Create detailed sketches and CAD designs efficiently",
                    "Organize materials, trims, and labels in one place",
                    "Communicate design changes to stakeholders seamlessly",
                  ],
                },
                {
                  name: "Client\u00a0",
                  goals: [
                    "Review and approve designs and techpacks in real time",
                    "Request changes and provide feedback directly on documents",
                    "Stay informed about production progress and updates",
                  ],
                },
                {
                  name: "Manufacturing Factory User",
                  goals: [
                    "Receive complete and accurate techpacks for production",
                    "Access BOMs, material specs, and design details easily",
                    "Clarify requirements and communicate back to the brand",
                  ],
                },
              ].map((persona) => (
                <div
                  key={persona.name}
                  className="relative rounded-xl border border-[#ffa348] dark:border-border bg-card text-card-foreground shadow p-6 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-md pointer-events-none" />
                  <div className="relative z-10">
                    <h4 className="font-semibold leading-none tracking-tight text-lg mb-4 whitespace-pre-line">
                      {persona.name}
                    </h4>
                    <ul className="list-disc list-inside text-sm text-card-foreground space-y-2">
                      {persona.goals.map((goal, idx) => (
                        <li key={idx}>{goal}</li>
                      ))}
                    </ul>
                  </div>
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

      {(c.slug !== "atlas" && c.slug !== "atlas2") && (
      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>
      )}

      {/* Strategy / Workshop */}
      <section id={c.slug === "fjord2" ? "workshop" : "strategy"} className="mx-auto max-w-[1080px] px-6 md:px-10 py-24 scroll-mt-24" style={{ display: (c.slug === "atlas" || c.slug === "atlas2" || c.slug === "fjord") ? "none" : undefined }}>
        <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">{c.strategySectionTitle || ((c.slug === "atlas" || c.slug === "atlas2") ? "\n" : "Strategy")}</h2>
        {(c.slug !== "atlas" && c.slug !== "atlas2") && (
          <h3 className="font-serif text-3xl mb-6 font-medium">{c.strategySectionSubtitle || "Product + Design Stategy"}</h3>
        )}

        {(c.slug !== "atlas" && c.slug !== "atlas2") && (
          <p className="text-lg leading-relaxed text-foreground/85 mb-8 whitespace-pre-line">
            This workshop was not a typical design thinking workshop.It was customized based on the project and the available information to make most out of one and a half day of time we had .I made sure to schedule the survey beforehand so we have the survey data before we conduct the workshop also made sure we have all the supplies needed for workshop.
          </p>
        )}


        {c.strategy.productGoals.workshopAttendees && c.strategy.productGoals.workshopSchedule ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h4 className="font-serif text-2xl mb-4 font-medium">{"\n"}</h4>
              <p
                className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line [&_strong]:font-semibold [&_strong]:text-foreground"
                dangerouslySetInnerHTML={{ __html: c.strategy.productGoals.workshopAttendees }}
              />
            </div>
            <div>
              <h4 className="font-serif text-2xl mb-4 font-medium">{"\n"}</h4>
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

        {(c.slug !== "fjord2") && (c.slug !== "atlas" && c.slug !== "atlas2") && (
          <div className={`${c.slug === "solace" ? "dark:bg-white" : "bg-secondary"} rounded-sm p-6 md:p-10 flex justify-center`}>
            <img
              src={uxStrategyImg.url}
              alt="UX Strategy diagram showing Business Goals and User Goals converging into UX Strategy: Centralize, Connect, Collaborate"
              className="w-[50.78%] h-auto"
            />
          </div>
        )}

        {(c.slug === "fjord2") && (
          <div className="contents">
            <div className="mt-16">
              <h3 className="font-serif text-4xl md:text-5xl mb-8 font-normal">Empathize &{"\u00a0"}Define</h3>
              <p className="text-lg leading-relaxed text-foreground/85 mb-8">
                The workshop started with a walk through of Affiliate website and{"\u00a0"}the problems about the site.{"\u00a0"}Defining the personas and going through survey responses.
              </p>
              <div className="overflow-hidden rounded-sm bg-secondary p-2 mb-[72px]">
                <img src={defineImg1.url} alt="Affiliate workshop define session reviewing survey results" className="w-full h-auto object-contain" />
              </div>
              <div>
                <h2 className="font-serif text-3xl mb-6 font-medium">Why redesign ?</h2>
                <p className="text-lg leading-relaxed text-foreground/85 mb-6 whitespace-pre-line">
                  {"My first step before starting any project is to understand, Why are we doing this project ?\nSo I asked the same question to the Product Manager and the Stakeholders. The reasons of why the affiliate website needs to be redesigned is as follows.\n"}
                </p>
                <div className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line mb-0">
                  <p>{c.goal}</p>
                </div>
              </div>
              <div className="mt-[15px] rounded-sm relative overflow-hidden px-6 md:px-16 py-16 text-foreground dark:text-primary">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-50"
                  style={{ backgroundImage: `url(${ampBgPersona.url})` }}
                />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />
                <div className="relative z-10">
                  <h3 className="font-serif text-3xl md:text-4xl mb-6 font-normal flex items-center gap-3">Problems <ArrowRight className="w-6 h-6 md:w-8 md:h-8 stroke-1" /> Opportunity</h3>
                  <div className="border-l border-[#0068FF] dark:border-primary/70 pl-8 md:pl-12 max-w-3xl mx-auto">
                    <blockquote className="text-lg md:text-xl leading-relaxed text-left italic whitespace-pre-line">
                      {"The codebase was too old, no fix could ship without a full rebuild. That constraint reframed the brief: this wasn't a UI refresh, it was a chance to rethink workflows that had calcified around a broken tool for 25 years.\n\nThe rebuild let us tackle six things at once:\n\n"}
                      <strong>A dated UI/UX</strong>
                      {" → rebuild the experience around how affiliates actually work today, not the conventions of 2005.\n"}
                      <strong>Slow and clunky performance</strong>
                      {" → a modern stack fast enough that the tool gets out of the user's way.\n"}
                      <strong>Broken functionalities</strong>
                      {" → restore the capabilities affiliates had learned to work around and live without.\n"}
                      <strong>Dead features nobody used</strong>
                      {" → cut them, and reclaim the space and attention for what matters.\n"}
                      <strong>A codebase that couldn't take new functionality</strong>
                      {" → a foundation built to extend, so the platform can grow instead of freeze again.\n"}
                      <strong>Manual refreshing to catch order updates</strong>
                      {" → the sharpest pain point. Affiliates were reloading the page every few minutes so they wouldn't miss an order or revision. The redesign surfaces changes live turning a constant manual chore into a system that tells users when something moves."}
                    </blockquote>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl mt-[100px] mb-6 font-normal">Understanding User Groups</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] mb-10">
                  {[
                    {
                      name: "Political Sales Manager\u00a0 \u00a0 /\u00a0Sales\u00a0Planner\n",
                      usage: 2,
                      dependency: 3,
                      goals: [
                        "Tasks\n1. Upload ,View,Download rates\n2.Keep rate cards up-to-date\n3.Report on gaps in rate cards\n4.Ensure downloaded exports and the\n\u00a0 \u00a0upload template match\u00a0\n\n\u00a0",

                      ],
                    },
                    {
                      name: "Political Campaign\u00a0Manager\n/ Support Specialist\u200b",
                      usage: 3,
                      dependency: 2,
                      goals: [
                        "Tasks\x03\n1. Review and Confirm\n2. orders in timely manner\n3. Create Makegoods\u200b\n4 .Accept orders",
                      ],
                    },
                    {
                      name: "Political & Markets Yeild Team\u00a0 (ERC)",
                      usage: 4,
                      dependency: 4,
                      goals: [
                        "Tasks\n1. Upload ,View,Download rates\n2.Keep rate cards up-to-date\n3.Report on gaps in rate cards\n4.Ensure downloaded exports and the\n\u00a0 \u00a0upload template match\u00a0\n\n\u00a0",
                      ],
                    },
                    {
                      name: "Admin / Super User",
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
                        "Tasks\n1. Gather intel across both Linear and Digital orders\u200b\n2. New & historical linear & digital orders\u200b\n3. Total investment/total impressions\u200b\n4. The AMP AE on orders/markets\u200b\n5. Which AMP offcie order is from\u200b",
                      ],
                    },
                  ].map((persona, idx) => (
                    <div
                      key={`${persona.name}-${idx}`}
                      className="relative rounded-xl shadow overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-50"
                        style={{ backgroundImage: `url(${ampBgPersona.url})` }}
                      />
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />
                      <div className="relative p-6 text-foreground dark:text-primary">
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
                                <div className="grid grid-cols-4 gap-px">
                                  {Array.from({ length: 4 }).map((_, i) => (
                                    <div
                                      key={i}
                                      className={`h-2 border border-[#0068FF] dark:border-primary/70 ${
                                        i === 0
                                          ? "rounded-l-full rounded-r-none"
                                          : i === 3
                                            ? "rounded-r-full rounded-l-none"
                                            : "rounded-none"
                                      } ${
                                        i < bar.value ? "bg-[#0068FF] dark:bg-primary" : "bg-transparent"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <ul className="text-sm text-foreground/85 dark:text-primary/85 space-y-2">
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
                    </div>
                  ))}
                </div>

                <div className="overflow-hidden rounded-sm bg-secondary p-2">
                  <img src={defineImg2.url} alt="Affiliate workshop must have vs nice to have sticky notes" className="w-full h-auto object-contain" />
              </div>
              <p className="text-lg leading-relaxed text-foreground/85 mt-8">
                Based on the survey data we came up with themes which are important for the redesigning of the website and divided them into 2 parts 'Must have' and 'Nice to have'.
              </p>
            </div>

            <div className="mt-16">
              <h3 className="font-serif text-4xl md:text-5xl mb-8 font-normal">Ideate</h3>
              <p className="text-lg leading-relaxed text-foreground/85 mb-8">
                The Second day of the workshop started with sketching. To know what ideas stakeholders have in their mind for the redesign, how do they envision the website I asked them to turn their ideas into sketches and explain their sketches to get a sense of what they consider important for redesign and also to understand the design expectations.
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
                {"\n"}
              </p>
            </div>

            <div className="mt-16">
              <h3 className="font-serif text-4xl md:text-5xl mb-8 font-normal">Prioritize</h3>
              <p className="text-lg leading-relaxed text-foreground/85 mb-8">
                All the attendees were given an opportunity to vote by giving limited 5 votes to each as to get to the actual important themes. After Everyone voted I took all the sticky notes with votes and arranged them in the descending order.{"\u00a0\u00a0"}
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
                The next step was to use Prioritization Matrix to understand the level of efforts and the impact of that particular card so we have clarity about which things needs to be worked on for this porject.{"\u00a0\u00a0"}
              </p>
            </div>

            <div className="mt-16">
              <h3 className="font-serif text-3xl mb-6 font-medium">Define Success Matrix{"\u00a0"}</h3>
              <p className="text-lg leading-relaxed text-foreground/85 mb-8">
                The final step was to define KPI's and how we will measure it. We came up with 5 KPI's which covers all the aspects of the project.{"\u00a0"}
              </p>
              <div className="flex justify-center">
                <div className="w-full max-w-2xl">
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
              </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="font-serif text-3xl mb-6 font-medium">The Team</h3>
              <p className="text-lg leading-relaxed text-foreground/85 mb-8">
                {"\n"}
              </p>
              <div className="overflow-hidden rounded-sm bg-secondary p-2">
                <img src={teamPhoto.url} alt="The project team" className="w-full h-auto object-contain" />
              </div>
              <p className="text-lg leading-relaxed text-foreground/85 mt-8">
                We wrapped up the 1 and a half day workshop with a clear next steps and ready to initiate the design phase.
              </p>
            </div>
          </div>
        )}
      </section>

      {(c.slug !== "atlas" && c.slug !== "atlas2") && (
      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>
      )}

      {(c.slug === "atlas" || c.slug === "atlas2") && (
        <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>
      )}

      {/* Initial Sketches */}
      <section id="design-process" className={`mx-auto max-w-[1080px] px-6 md:px-10 scroll-mt-24 ${c.slug === "solace" ? "pt-24 pb-0" : "py-24"}`}>
        <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">Design</h2>
        {(c.slug === "atlas" || c.slug === "atlas2") && (
          <>
            <h3 className="font-serif text-3xl mb-6 font-medium">Approch</h3>
            <p className="text-lg leading-relaxed text-foreground/85 mb-8 whitespace-pre-line">
              Following are the three different user flows to manage their notifications form.
            </p>
            <div className="grid grid-cols-1 gap-6">
              <div className="overflow-hidden rounded-[8px] flex items-center justify-center">
                <img src={userControlBanner.url} alt="Give control to user banner" className="w-full max-w-[1123px] h-auto rounded-[8px]" />
              </div>
              <div className="rounded-[8px] p-4 flex items-center justify-center">
                <img
                  src={atlasStrategyDiagram.url}
                  alt="Notification hierarchy diagram showing all notifications branching into company, product development, and general notifications"
                  className="w-full h-auto rounded-[8px]"
                />
              </div>
            </div>
          </>
        )}
        <h3 className="font-serif text-3xl mt-12 mb-6 font-medium">
          {(c.slug === "fjord2") ? "Sitemap" : (c.slug === "atlas" || c.slug === "atlas2") ? "Mid-Fidelity Wireframes" : (c.slug === "fjord" ? "Component Design\u00a0" : "Initial sketch")}
        </h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-4">
          {(c.slug === "fjord2") 
            ? "I started by creating a sitemap to understand exactly how many screens needs to be redesigned and also to make sure I do not miss any of the screens form the websited.\u00a0"
            : (c.slug === "atlas" || c.slug === "atlas2")
            ? "To validate the design if they are meeting the needs of the user. Solving solution tot their pain points and if design is usable i made mid feudality wireframes."
            : (c.slug === "fjord")
            ? "This tool design demanded custom components\u00a0"
            : "I procured the diffrent files which Fashion Designer/PDM used to send to the clients and the factory"
          }
        </p>
        {(c.slug === "fjord") && (
          <ul className="list-disc list-inside text-lg leading-relaxed text-foreground/85 mb-4 ml-1">
            <li>Audience Segment Selector</li>
            <li>Workspace with segment pills- to create a custom audience using drag and drop</li>
          </ul>
        )}
        {(c.slug === "solace") && (
          <ul className="list-disc list-inside text-lg leading-relaxed text-foreground/85 mb-4 ml-1">
            <li>Bill of Material (Material and trims costing file)</li>
            <li>Final CAD file</li>
            <li>Tech Pack file</li>
          </ul>
        )}
        <p className="text-lg leading-relaxed text-foreground/85 mb-10">
          {(c.slug === "fjord2")
            ? "I kicked off with the concept of dashboard which was not present as the user logging in they just landed on to a page with multiple options to navigate to.With the limited amount of information I had from the survey data. I talked to stakeholders and suggested to arrange sessions with the affiliates to understand their workflow and which things are important to them on the website and to see how do they navigate through the site."
            : (c.slug === "atlas" || c.slug === "atlas2")
            ? "Reviewing designs with developers and\u00a0 CTO early stage is makes it easy and save the time and efforts in case if something is not feasible you might need to make many changes reviewed these with mobile developers to confirm feasibility of the designs also it makes them feel involved. Developers showed concern about the design, according to them nested pages inside the tabs."
            : (c.slug === "fjord")
            ? "The custom component built for the projects are shown below"
            : "To understand the details to get started with the initial sketches and get some inputs from users."
          }
        </p>
        {(c.slug === "fjord2") ? (
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
        ) : (c.slug === "atlas" || c.slug === "atlas2") ? (
          <button
            type="button"
            onClick={() => setZoomImg(notificationsWireframe.url)}
            className="group block w-full overflow-hidden rounded-sm bg-secondary p-2 transition-colors cursor-zoom-in"
          >
            <img
              src={notificationsWireframe.url}
              alt="Notifications wireframe"
              className={(c.slug === "atlas" || c.slug === "atlas2") ? "w-[127.5%] mx-auto h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]" : "w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"}
              loading="lazy"
            />
          </button>
        ) : (
          <div className="flex flex-row gap-4 overflow-x-auto pb-2">
            {(c.slug === "fjord" ? [fjordComponentLeft, fjordComponent2] : [sketchImg1, sketchImg2, sketchImg3, sketchImg4]).map((s, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setZoomImg(s.url)}
                className={"group block flex-shrink-0 overflow-hidden rounded-sm bg-secondary p-2 transition-colors cursor-zoom-in " + (c.slug === "solace" ? "w-[24%] min-w-[196px]" : "w-[48.1%] min-w-[393px]")}
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


      {c.slug !== "solace" && c.slug !== "fjord" && (
        <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>
      )}

      {/* Brainstorming */}
      <section className={`mx-auto max-w-[1080px] px-6 md:px-10 ${c.slug === "solace" ? "pt-[100px] pb-0" : "py-24"}`}>
        <h2 className={`font-serif mb-8 ${c.slug === "solace" ? "text-3xl font-medium" : c.slug === "fjord2" ? "font-serif text-3xl mt-12 mb-6 font-medium" : "text-4xl md:text-5xl font-normal"}`}>{(c.slug === "fjord2") ? "Initial Design" : (c.slug === "atlas" || c.slug === "atlas2") ? "User Flow" : (c.slug === "fjord") ? "Solution" : "Brainstorming Session With Product Team"}</h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-10 whitespace-pre-line">{(c.slug === "atlas" || c.slug === "atlas2") ? "Following are the three different user flows to manage their notifications form." : (c.slug === "fjord2") ? "I presented wireframes with Stakeholders ,Engineering and the PM. We discussed about the assumptions that stakeholders had.I had multiple question about the workflow of the users, what is crucial for them to perform their day to day jobs on the website.The stakeholders did not had answers to most of my questions so I pushed for having a session with all the main affiliates to understand their workflow which will provide insights and avoid any assumption based decision which might affect their workflow negatively or create any obstacles for them. " : "I presented my sketches to the product team with the help of whiteboard the as the possible solution for the feature we are building .After the feedback and the discussion about the design requirements form engineering standpoint and the concept design was good enough to kickstart the mid fidelity wireframe and tale some user feedback."}</p>
        {(c.slug === "fjord2") ? (
          <button
            type="button"
            onClick={() => setZoomImg(fjord2InitialDesign.url)}
            className="group block w-full overflow-hidden rounded-sm bg-secondary p-2 cursor-zoom-in border-0"
          >
            <img src={fjord2InitialDesign.url} alt="Initial design" className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]" loading="lazy" />
          </button>
        ) : (c.slug === "atlas" || c.slug === "atlas2") ? (
          <button
            type="button"
            onClick={() => setZoomImg(atlasTaskFlow.url)}
            className="group block w-full overflow-hidden rounded-sm p-2 cursor-zoom-in border-0"
          >
            <img src={atlasTaskFlow.url} alt="User task flow for notification subscription and management" className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]" loading="lazy" />
          </button>
        ) : (
          <>
            {c.slug !== "fjord" && (
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
            )}
            {c.slug === "fjord" && (
              <button
                type="button"
                onClick={() => setZoomImg(brainstormingAudienceBuilder.url)}
                className="group block w-full overflow-hidden rounded-sm border-border bg-secondary p-4 transition-colors hover:border-foreground/40 cursor-zoom-in border-0"
              >
                <img
                  src={brainstormingAudienceBuilder.url}
                  alt="Audience builder brainstorming screens"
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </button>
            )}
          </>
        )}
        {c.slug === "solace" && (
          <>
            <h3 className="font-serif text-3xl mt-[100px] mb-6 font-medium">Low Fidelity Wireframes</h3>
            <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line mb-[50px]">Creating low fidelity wireframes helps me focus on the visual consistency and hierarchy before applying styles. In these wireframes, I tried to incorporate common design patterns that have been tested on our competitors' product, or included elements that directly address users' goals, needs, frustrations. Once I had a visual direction of the layout, I started to add more details and precisions to the sketches by turning them into mid-fidelity wireframes.</p>
          </>
        )}
      </section>

      {c.slug === "fjord" && (
        <>
          {/* User Flow */}
          <section className="mx-auto max-w-[1080px] px-6 md:px-10 py-24">
            <h2 className="font-serif text-4xl mb-8 md:text-3xl font-normal">User flow</h2>
            <p className="text-lg leading-relaxed text-foreground/85 mb-10">
              To decide what I am designing, identifying the main flow of users when completing a task helps me to direct my focus on designing specific pages. By creating task flows that center on key functions of techpack tool to generate techpack and export it to a PDF and share it. I was able to think through the necessary steps and examine the user experience in details. Below is the flow for 2 tasks.
            </p>
            <Carousel opts={{ loop: true }} className="relative">
              <CarouselContent>
                {[audienceSegmentFlow].map((img, i) => (
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
            </Carousel>
          </section>
        </>
      )}

      {(c.slug !== "atlas" && c.slug !== "atlas2" && c.slug !== "solace") && (
        <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>
      )}

      {(c.slug === "fjord2") && (
        <section className="mx-auto max-w-[1080px] px-6 md:px-10 py-24">
              <h3 className="font-serif text-3xl mb-6 font-medium">Qualitative Research - Focus Group</h3>
              <p className="text-lg leading-relaxed text-foreground/85 mb-8 whitespace-pre-wrap">
                I was able to get stakeholders to arrange meetings with 5 different affiliate{"\u00A0"}each have 5-10 people form their organization . We collectively came up with the questions we wanted to ask affiliates{"\u00A0"}
                <a href="https://docs.google.com/document/d/1QNgsJY8tiK6sr_Hl4HzbIyaKk_U5N01bvP8huFwtLsI/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-bold underline">Click here</a>{"\u00A0"}
                to see the list of question for focus group.{"\u00A0"}

                <p className="mt-8">
                  Watching the work overturned assumptions we'd carried into the project. Stakeholders assumed that they do not need the symbols of D,V,P,C  but in session after session, they were very important to identify is someone is working on the order or no. the session also revealed a very important issue that affiliates have lost business because of the lost orders or as there is no clear way to identify if someone is working on an order or not. Another major problem discovered during session was the order revisions from the Ampersand side as the ampersand staff send the revisions after revision before the affiliates open it. It causes so much of problem for affiliates to understand what changed which needed to be restricted for Ampersand staff.


Refer the Survey results section you will find the we asked a question to rate their current experience 
                </p>

                <div className="mt-8">
                  If you refer the Survey results section you will find the we asked a question to rate their current experience of affiliate site.The survey results surprised us as most of them are satisfied and some of them have answered as very satisfied.During the session with one of the affiliates they said "We like it as it is, we don't want it to change" as this site is very old the users are so used it ,even with the workarounds. The change is very hard for them after leaning tp operated with all the workarounds which are turned into habits of the users.For me the take away for here was to keep the learning curve for the them as flat as possible.We decided the to do major changes which will make users hard to adopt the new platform. 
                </div>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-sm bg-secondary p-2">
                  <img src={focusGroupScreenshot.url} alt="Focus group video call session" className="w-full h-auto object-contain" />
                </div>
                <div className="overflow-hidden rounded-sm bg-secondary p-2 flex items-center">
                  <img src={focusGroupScreenshot2.url} alt="Affiliate site discussion focus group" className="w-full h-auto object-contain" />
                </div>
              </div>
              <div className="mt-8 flex items-baseline gap-4">
                <p className="text-3xl md:text-4xl font-normal mb-1">{"\n"}</p>
              </div>
              <div className="mt-8">
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
                      <TableCell>{"\u00a0"}Makegood{"\u00a0"}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Views and  Search </TableCell>
                      <TableCell>Order Revision</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Compare Order Version</TableCell>
                      <TableCell>Speed & Efficiency</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Internal & External Rate Cards</TableCell>
                      <TableCell>Super User Profile</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Speed & Efficiency</TableCell>
                      <TableCell>Messaging</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Contacts & Resources,Email Notifications{"\u00a0"}</TableCell>
                      <TableCell>Collaterals{"\u00a0"}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
        </section>
      )}

      {(c.slug !== "atlas" && c.slug !== "atlas2" && c.slug !== "fjord2" && c.slug !== "solace" && c.slug !== "fjord") && (
      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>
      )}

      {/* Challenges */}
      {(c.slug !== "atlas" && c.slug !== "atlas2" && c.slug !== "fjord2" && c.slug !== "fjord") && (
      <section className={`mx-auto max-w-[1080px] px-6 md:px-10 ${c.slug === "solace" ? "pt-0 pb-0" : "py-24"}`}>
        {c.slug !== "solace" && (
          <>
            <h2 className="font-serif text-4xl mb-8 md:text-3xl font-normal">{"\n"}</h2>
            <p className="text-lg leading-relaxed text-foreground/85 mb-10 whitespace-pre-line">
              {"\n"}
            </p>
            <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal mt-16">{"\n"}</h3>
            <p className="text-lg leading-relaxed text-foreground/85 mb-10">
              {"\n"}
            </p>
          </>
        )}
        <div className="flex flex-row gap-4 overflow-x-auto pb-2">
          {[wireframeImg1, wireframeImg2].map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setZoomImg(img)}
              className={"group flex-shrink-0 " + (c.slug === "solace" ? "w-[51.75%] min-w-[207px]" : "w-[45%] min-w-[180px]") + " overflow-hidden rounded-sm border-border bg-secondary p-3 transition-colors hover:border-foreground/40 cursor-zoom-in border-orange-300 border-0"}
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
      )}

      {(c.slug !== "fjord2") && (
        <>
      {/* Workflow */}
      <section className={`mx-auto max-w-[1080px] px-6 md:px-10 ${c.slug === "solace" ? "pt-[100px] pb-0" : "pt-24 pb-0"}`} style={{ display: (c.slug === "atlas" || c.slug === "atlas2" || c.slug === "fjord") ? "none" : undefined }}>
        <h2 className="font-serif text-4xl mb-8 font-medium md:text-3xl">
          {c.slug === "solace" ? "Workflow" : "User Groups"}
        </h2>
        {(c.slug !== "atlas" && c.slug !== "atlas2") && (
          <button
            type="button"
            onClick={() => setZoomImg(userGroupsImg)}
            className={`group block w-[60%] mx-auto overflow-hidden rounded-sm border-border ${c.slug === "solace" ? "dark:bg-white" : "bg-secondary"} p-4 transition-colors hover:border-foreground/40 cursor-zoom-in mb-10 border-orange-300 border-0`}
          >
            <img
              src={userGroupsImg}
              alt="Diagram showing user groups connected to the Techpack Editor feature"
              className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              loading="lazy"
            />
          </button>
        )}
        <div className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
          {c.slug === "solace"
            ? "Alignment of user goals and business goals to benefit both is important. Helping users achieve their goals helps in user retention and hence profitable for business."
            : ((c.slug === "atlas" || c.slug === "atlas2") 
                ? "\n\n\n"
                : "Throughout the product lifecycle process there are different types of notifications which are received by the clients and the staff who are handling the project via email, push notification or as a text message. Currently there is no way to manage different types of notifications which client and the staff receives as user may or may not want to receive certain notifications\n\nBroad notification categories for users are as follows \n1.     Comments posted by different user types (Client, Factory, Staff, Finance )\n2.    Files - Uploads ,Approval, Rejection\n3.    PLM Stage Activities\n4.    Timeline/ETA Changes\n5.    Chat messages ,Tagged Comment in the product or in the chat\n6.    Finance - Costing, invoicing, PO updates  \n7.    Product level notifications \n8.    Company level notifications \n\n")
          }
        </div>
      </section>

      {/* User Flow */}
      <section className="mx-auto max-w-[1080px] px-6 md:px-10 pt-[100px] pb-24" style={{ display: (c.slug === "atlas" || c.slug === "atlas2" || c.slug === "fjord") ? "none" : undefined }}>
        <h2 className="font-serif text-4xl mb-8 md:text-3xl font-normal">{(c.slug === "atlas" || c.slug === "atlas2") ? "\n" : "User flow"}</h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-10">
          {c.slug === "solace" ? "To decide what I am designing, identifying the main flow of users when completing a task helps me to direct my focus on designing specific pages. By creating task flows that center on key functions of the Design studio , I was able to think through the necessary steps and examine the user experience in details. Below is the flow to show from various places you can start and access the design studio and edit the Tech Pack." : (c.slug === "atlas" || c.slug === "atlas2") ? "\n" : "To decide what I am designing, identifying the main flow of users when completing a task helps me to direct my focus on designing specific pages. By creating task flows that center on key functions of techpack tool to generate techpack and export it to a PDF and share it. I was able to think through the necessary steps and examine the user experience in details. Below is the flow for 2 tasks."}
        </p>

        {(c.slug !== "atlas" && c.slug !== "atlas2") && (
          <Carousel opts={{ loop: true }} className="relative">
            <CarouselContent>
              {(c.slug === "fjord" ? [audienceSegmentFlow] : c.slug === "solace" ? [userFlow1, userFlowSolace2, userFlowSolace3] : [userFlow1, userFlow2, userFlow3]).map((img, i) => (
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
            {c.slug === "solace" && (
              <>
                <CarouselPrevious />
                <CarouselNext />
              </>
            )}
          </Carousel>
        )}
      </section>
      {(c.slug !== "atlas" && c.slug !== "atlas2") && (
      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>
      )}
      {c.slug === "solace" && (
        <section className="mx-auto max-w-[1080px] px-6 md:px-10 py-24">
          <h2 className="font-serif text-4xl mb-8 font-medium md:text-3xl">Review with Users, Product &amp; Engineering Team</h2>
          <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">Reviewing the initial low feudality clickable wireframes I presented them to the users to get their feedback on functionalities and the usability aspect of the design. After observing how they interact with the wireframe and getting feedback on the things which can be added. I made the second Iteration and again showed it to the users.&nbsp;{"\n"}After the second iteration I reviewed these with VP of Product to confirm that its meeting all the requirements and communicating the things users would like to have and what they need based on my observation during the user interviews. which I have added which are not mention In Product requirement document and update it for engineering team to keep everyone in the loop.&nbsp;To confirm technical feasibility, software architecture and to know the development efforts and time required form CTO.{"\n"}I received feedback and got some inputs to improve from engineering perspective. Also, reviewed it with developers and confirmed about some new UI components I will be needing for this feature and will they be able to build it and the efforts and time required to build them.&nbsp;&nbsp;After taking feedback and considering inputs from users, Product and Engineering team I start putting together high feudality wireframes and make it better and the third iteration of the design.&nbsp;</p>
        </section>
      )}

        </>
      )}

      {(c.slug !== "atlas" && c.slug !== "atlas2") && (
      <>
      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>

      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>
      </>
      )}

      {(c.slug === "atlas" || c.slug === "atlas2") && (
        <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>
      )}

      {(c.slug === "fjord2") && (
        <section id="testing" className="mx-auto max-w-[1080px] px-6 md:px-10 py-24 scroll-mt-24">
          <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">Testing</h2>
          <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal">Usability Testing&nbsp;</h3>
          <ul className="space-y-6 text-lg leading-relaxed text-foreground/85">
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>As the affiliates are external users it was not possible for me to conduct usability testing as stack holder are the one who are able to do that and they being not avialable and also it was not possible to ask more time from the affiliates as we already had a survey and the session with them. I&nbsp; had to take the route of using Microsoft Clarity to monitor how users are using the site.</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>After 2 months of usage we sent a popup survey on the platform asking for open ended feedback and how&nbsp; are they rating the new website.&nbsp;&nbsp;</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>The feedback we got were positive and I&nbsp; watched some sessions using Microsoft Clarity to check if it is being used as we expected it to be used and results seemed satisfactory.</span>
            </li>
          </ul>
          <h3 className="font-serif text-2xl md:text-3xl mb-6 mt-16 font-normal">Adoption</h3>
          <p className="text-lg leading-relaxed text-foreground/85">
            Before the release we made sure to have the help resources ready&nbsp; such as short videos showing how to perform a task and a list of possible FAQ's and also, a place where users can send the feedback and also can report any bugs or errors they encounter.&nbsp;&nbsp;
          </p>
        </section>
      )}

      {(c.slug !== "fjord2") && (
        <section id="testing" className={`mx-auto max-w-[1080px] px-6 md:px-10 scroll-mt-24 ${c.slug === "solace" ? "pt-24 pb-[80px]" : "py-24"}`}>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">Testing</h2>

          {(c.slug !== "atlas" && c.slug !== "atlas2") && (
            <>
              <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal">{"\n"}</h3>
              <p className="text-lg leading-relaxed text-foreground/85 mb-6">
                {"\n"}
              </p>
              <p className="text-lg leading-relaxed text-foreground/85 mb-16">
                {c.slug === "fjord" 
                  ? "For testing we decided to release it on the beta environment as the functionality was drag and drop. I connected with users asking them to sharee the screens and observed how they are using the tool and it was working for the"
                  : <>For all the tests, I expect a <strong className="font-semibold">90% completion rate</strong> and <strong className="font-semibold">90% error-free rate</strong> because the prototype is not fully functioning, and users might take alternatives that have not been built up for completing the tasks. Conduct Usability Testing then conducted in-person testing with <strong className="font-semibold">5 participants,</strong> and created transcripts for each participant based on my observation of their interaction with the prototype. I jot down their mistakes, slips, and confusions they expressed in the process. This transcript is a perfect raw material for summarizing the patterns of user's interaction with the prototype.</>}
              </p>
            </>
          )}

          <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal">Usability Testing&nbsp;</h3>
          <ul className="space-y-6 text-lg leading-relaxed text-foreground/85">
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>{c.slug === "fjord" ? "I did remote testing with 6 users 3 of each user group." : (c.slug === "atlas" || c.slug === "atlas2") ? "Usability test I recruited 4 participants to test the prototype. the objective of the test was to identify How easily users are able to subscribe and unsubscribe from particular, product ,company, stage or phase of the product lifecycle." : "As testing started from the early stage with the initial wireframes, It was quite helpful in finding user needs and expectations and setting up for the right direction for design to fill the gaps in the functionality.\u00a0I recruited 5 participants to test the prototype."}</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>
                {c.slug === "fjord" 
                  ? "I divided functionality in 6\u00a0tasks to check the task completion rate and time required to complete those tasks.\n1.\u00a0 Search an aduience segment.\n2. Drag and Drop it to the build area.\u00a0\n3. Create a group of segments.\u00a0\u00a0\n4. Switch between OR & AND, Include and exclude.\u00a0\u00a0\n5. Name and save a segment.\u00a0\u00a0\n6. Use the created segment into either Schedule Creation or Container Creation process."
                  : <>I divided functionality in <strong className="font-semibold">6 different tasks</strong> tasks to check the task completion rate and time required to complete those tasks <span className="underline hover:text-accent"><a href="https://drive.google.com/file/d/1m5iAAkk5dO8wLx-q7ffIzm1X_uVUhUe3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-semibold">Usability test questions</a></span>&nbsp;.</>}
              </span>
            </li>
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>{c.slug === "fjord" ? "\u00a0the objective of the test was to identify How easily users are able to understand usability and how intuitive it is for users to complete the given task." : "Usability Test Findings :\u00a0 2 out of the 5 participants felt the need of adding the label are detailed sketch page. 3 out of the 5 participants wanted to save button if they wanted to leave it halfway and need to navigate to the part of the application. 3 out of the 5 participants were confused with the details drawer not opening at Bill of Material page.\u00a0 All participants felt that the design is serving the purpose and addressing the pain points they had."}</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>{c.slug === "fjord" ? "Based on the test result data not all users did not had the knowlege about AND , OR logic so I added a help section for them to understand how it works so they can create segments with clear understanading and more precicely.\u00a0\u00a0" : "Based on the test result data some changes were made to fix issues faced by the users."}</span>
            </li>
          </ul>

          {c.slug !== "solace" && c.slug !== "fjord" && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Test Completion Rate", value: "100%" },
                { label: "Error-free rate", value: "90%" },
                { label: "Solving the problem?", value: "Yes" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-orange-500 bg-card px-8 py-10 text-center shadow-sm flex items-center justify-center"
                >
                  <p className="text-lg font-bold text-foreground">
                    {s.label}: <span>{s.value}</span>
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {(c.slug === "atlas" || c.slug === "atlas2") && (
        <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>
      )}

      {(c.slug !== "atlas" && c.slug !== "atlas2" && c.slug !== "solace") && (
      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>
      )}

      {c.slug === "solace" && (
        <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>
      )}

      {/* Final Designs */}
      <section id="final-designs" className={`mx-auto max-w-[1080px] px-6 md:px-10 scroll-mt-24 ${c.slug === "solace" ? "pb-24 pt-[80px]" : "py-24"}`}>
        <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">Solution</h2>
        {c.slug === "fjord" ? (
          <>
            <div
              className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-28 flex items-center justify-center"
              style={{ borderRadius: "2.4%", backgroundImage: `url(${ampMockupBg3.url})` }}
            >
              <div className="absolute inset-0 backdrop-blur-2xl bg-white/15 border border-white/20" style={{ borderRadius: "2.4%" }} />
              <div className="relative w-[85%] mx-auto">
                <img
                  src={audienceBuilderMockup2.url}
                  alt="Audience Builder final screen"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <a
                  href="https://drive.google.com/file/d/1BqBCepSDL7VSyxSFTBBNYRDKje2RHUip/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground/80 text-background backdrop-blur-sm">
                    <Play className="h-7 w-7 fill-current" />
                  </div>
                </a>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">Click to watch a short video</p>
          </>
        ) : (
          <Carousel opts={{ loop: true }} className="relative">
            <CarouselContent>
              {((c.slug === "atlas" || c.slug === "atlas2")
                ? [
                    { src: notificationsFinalScreens.url, label: "Final screens mockup" },
                  ]
                : (c.slug === "fjord2")
                ? [
                    { src: affiliateSiteOldBefore.url, label: "Before – legacy affiliate site screens" },
                    { src: affiliateSiteDashboard.url, label: "After – orders dashboard" },
                    { src: affiliateSiteRevisedTab.url, label: "Revised orders tab with filters and pagination" },
                    { src: affiliateSiteOrderPage.url, label: "Revamped order details page" },
                  ]
                : [
                    { src: finalToolScreens.url, label: "Tool screens" },
                    { src: finalLibrary.url, label: "Techpack Library" },
                    { src: finalSketchSel.url, label: "Sketch selection" },
                    { src: finalDetailedSketch.url, label: "Detailed sketch" },
                    { src: finalBom.url, label: "Bill of Materials" },
                    { src: finalPdf.url, label: "Exported PDF" },
                    { src: finalProto.url, label: "Prototype overview" },
                  ]
              ).map((img) => (
                <CarouselItem key={img.label}>
                  {(c.slug === "atlas" || c.slug === "atlas2" || c.slug === "solace") ? (
                    <div
                      className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-28 flex items-center justify-center"
                      style={{ borderRadius: "2.4%", backgroundImage: `url(${gridBg.url})` }}
                    >
                      <div className="absolute inset-0 backdrop-blur-2xl bg-white/15 border border-white/20" style={{ borderRadius: "2.4%" }} />
                      <img src={img.src} alt={img.label} className="relative w-[85%] mx-auto h-auto" loading="lazy" />
                    </div>
                  ) : (c.slug === "fjord2") ? (
                    <div
                      className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-28 flex items-center justify-center"
                      style={{ borderRadius: "2.4%", backgroundImage: `url(${ampMockupBg2.url})` }}
                    >
                      <div className="absolute inset-0 backdrop-blur-2xl bg-white/15 border border-white/20" style={{ borderRadius: "2.4%" }} />
                      <img src={img.src} alt={img.label} className="relative w-[85%] mx-auto h-auto" loading="lazy" />
                    </div>
                  ) : (
                    <div className="overflow-hidden rounded-sm border border-border bg-secondary">
                      <img src={img.src} alt={img.label} className="w-full h-auto" loading="lazy" />
                    </div>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        )}


        <p className="text-lg leading-relaxed text-foreground/85 mt-10">
          {(c.slug === "atlas" || c.slug === "atlas2") && (
            <a
              href="https://drive.google.com/file/d/12F-QAC4Yt9fivd6rpBnIYHk5PuJeaLID/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold"
            >
              Click here to watch a short video{" "}
            </a>
          )}
          {c.slug === "solace" && (
            <a
              href="https://drive.google.com/file/d/1s40aTeRAkNrIAgzvlOFE_5VQaNWTeA6s/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold"
            >
              Click here to see PDF output
            </a>
          )}
        </p>
      </section>


      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>

      {/* Measuring the Success */}
      <section id="impact" className="mx-auto max-w-[1080px] px-6 md:px-10 pt-24 pb-0 scroll-mt-24">
        <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">Measuring the Success</h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-20">
          {c.slug === "fjord2" 
            ? <>This project was more than a redesign. We addressed major pain points of the users like speed, stability, broken functionalities &amp;&nbsp; workflows, redundancy, manual refresh etc. The highlight is avoiding any loss of business which is till date is $0 since it is launched and the jump in the usability.Second phase of the project is in development which mainly consists of new features and will be released in a few months which will largely change the way affiliates do communication and&nbsp; will have more better , easier workflow than before.&nbsp;</>
            : c.slug === "fjord"
            ? "We successfully deployed the tool and it reduced the significant amount of time for creating a custom audience as they no longer has to wait for data team to make it for them for those who did not had access to the paid tool.We save a good amount to the company and also was able provide few more features than existing tool by making it more intuitive . I learnt to make sure to have all the possible resources to be available for the users for learning and for smoother adoption."
            : (c.slug === "atlas" || c.slug === "atlas2")
            ? "By design I made sure users can totally control the the notifications which important to their job for different levels, the Company Level, Product level, Product Lifecycle stage Level.We were successful in eliminating most of the spam notifications which led to a great reduction in missing important notifications which resulted in missed deadlines for the product delivery to the clients which was a huge plus in terms of customer experience and helped in client retention for the company.\u00a0"
            : "This was a big project and turned out to be a good selling point for the company. Apart from that\u00a0 it was great workflow improvement which eliminated accounting errors which happen due to manual workflow and due to the libraries built\u00a0 it speeded up the workflow and by reusing and repurposing . Because of the editor tool users don't had to go outside the platform to do all the editing for the manufacturing phase.Overall the project was a great success."}
        </p>
      </section>

      {c.slug === "solace" && (
        <div className="mx-auto max-w-[1080px] px-6 md:px-10 mt-[50px] mb-[80px]">
          <div className="rounded-sm dark:bg-white p-6 md:p-10 flex justify-center">
            <img
              src={techpackOutcomeImg.url}
              alt="Techpack outcome UX strategy diagram showing Centralize, Connect, and Collaborate pillars"
              className="w-[48.75%] h-auto"
            />
          </div>
        </div>
      )}

      {/* Outcomes */}
      {c.slug !== "fjord2" && <OutcomeMetrics c={c} />}

      <section className="mx-auto max-w-[1080px] px-6 md:px-10 pb-10">
        <p className="text-lg leading-relaxed text-foreground/85">
          {(c.slug === "fjord" || c.slug === "fjord2" || c.slug === "atlas" || c.slug === "atlas2" || c.slug === "solace") ? "\n" : (
            <>
              <strong className="font-semibold">With the final prototype created, I believe I met the goals that were outlined in the beginning of the design process.</strong> I successfully designed Techpack editor tool along with Material, CAD, Techpack Libraries.
            </>
          )}
        </p>
      </section>

      {/* Interested in more */}
      <section className="mx-auto max-w-[1080px] px-6 md:px-10 py-16 md:py-24 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <h2 className="font-serif text-3xl md:text-4xl font-normal">Interested in more?</h2>
          <p className="text-lg leading-relaxed text-foreground/85">
            <span className="text-accent">Interested in more?</span> Contact me for the case study's with additional insights and artifacts.
          </p>
        </div>
      </section>

      <div id="case-study-end" aria-hidden />

      {/* More case studies */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1080px] px-6 md:px-10 pt-20 pb-10">
          <p className="eyebrow mb-10">More case studies</p>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {others.map((o, i) => (
              <Link
                key={o.slug}
                to="/work/$slug"
                params={{ slug: o.slug }}
                className={`group block ${i > 0 ? 'md:border-l md:border-transparent md:pl-12' : ''} ${i < others.length - 1 ? 'md:pr-12' : ''} ${i < others.length - 1 ? 'pb-12 md:pb-0' : ''}`}
              >
                <h3 className="font-serif text-3xl md:text-4xl group-hover:text-accent transition-colors">
                  {o.title}
                </h3>
                <span className="inline-block mt-4 text-sm border-b border-foreground/40 group-hover:border-foreground transition-colors">
                  Read the case study →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </div>
    </SiteLayout>
  );
}
