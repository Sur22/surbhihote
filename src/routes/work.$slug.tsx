import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, TrendingUp, TrendingDown, Play } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CaseStudySideNav } from "@/components/CaseStudySideNav";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
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
import audienceFlowCreateNew from "@/assets/audience-flow-create-new.png.asset.json";
import audienceFlowCopyModify from "@/assets/audience-flow-copy-modify.png.asset.json";
import notificationsFinalScreens from "@/assets/notifications-final-screens-mockup.png.asset.json";
import gridBg from "@/assets/grid-mockup-bg.png.asset.json";
import audienceBuilderMockup2 from "@/assets/audience-builder-mockup-2.png.asset.json";
import ampBgPersona from "@/assets/persona_cards_bg.png.asset.json";
import ampMockupBg2 from "@/assets/amp-mockup-bg-2.png.asset.json";
import affiliateSiteOldBefore from "@/assets/affiliate-site-old-before.png.asset.json";
import affiliateSiteDashboard from "@/assets/affiliate-site-dashboard.png.asset.json";
import affiliateSiteRevisedTab from "@/assets/affiliate-site-revised-tab.png.asset.json";
import affiliateSiteOrderPage from "@/assets/affiliate-site-order-page.png.asset.json";
import affiliateSiteMockupDashboard2 from "@/assets/Affiliate_site_mockup_dashboard-2.png.asset.json";
import affiliateDashboard4 from "@/assets/Affiliate_site_mockup_dashboard-4.png.asset.json";
import affiliateDashboardChanges2 from "@/assets/affiliate_dashboar_changes-2.png.asset.json";
import affiliateRevisedTab3 from "@/assets/Affiliate_site_mockup_revised_tab-3.png.asset.json";
import affiliateOrderPage3 from "@/assets/Affiliate_site_mockup_order_page-3.png.asset.json";
import ampMockupBg3 from "@/assets/amp-mockup-bg-3.png.asset.json";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const c = getCaseStudy(params.slug);
    if (!c) throw notFound();
    return { study: c };
  },
  head: ({ loaderData, params }) => {
    const s = loaderData?.study;
    const url = `https://surbhihote.com/work/${params.slug}`;
    if (!s) return { meta: [{ title: "Case study — Surbhi Hote" }] };
    return {
      meta: [
        { title: `${s.title} — Surbhi Hote` },
        { name: "description", content: s.summary },
        { property: "og:title", content: `${s.title} — Surbhi Hote` },
        { property: "og:description", content: s.summary },
        { property: "og:image", content: s.cover },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: url }],
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

const topOutcomeSlugs = new Set<CaseStudy["slug"]>(["fjord2", "fjord", "solace", "atlas", "atlas2"]);

function OutcomeMetrics({ c }: { c: CaseStudy }) {
  const showImpactHeader = topOutcomeSlugs.has(c.slug);
  return (
    <section id="impact" className={`mx-auto max-w-[1080px] px-6 md:px-10 pt-0 ${showImpactHeader ? "pb-[100px]" : "pb-6"} scroll-mt-24`}>
      <p className={`eyebrow mb-4 ${showImpactHeader ? "text-center" : ""}`}>{showImpactHeader ? "IMPACT" : "Outcome"}</p>
      {showImpactHeader && (
        <>
          <h3 className="text-center font-serif text-4xl md:text-5xl font-normal mb-6">At a glance</h3>
          <div className="flex justify-center mb-10">
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <Link
                to="."
                hash="final-designs"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = "final-designs";
                  document.getElementById("final-designs")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                See the solution
              </Link>
            </Button>
          </div>
          <p className="text-center text-lg leading-relaxed text-foreground/85 mb-10 max-w-3xl mx-auto whitespace-pre-line">
            {c.slug === "fjord" 
              ? "Built an in-house tool which is helping the staff to serve the clients faster and use the audience for multiple workflows within the platform resulting increase in workflow efficiency.\u00a0\u00a0"
              : c.slug === "solace"
              ? "This project was an upgrade from manual paperwork to a streamlined process eliminating the manual errors, delays in production deadlines and product delivery."
              : c.slug === "fjord2"
              ? "Rebuilding a 25-year-old, business-critical platform for 500+ affiliates; where the real challenge wasn't a better tool, but adoption from users who'd normalized every workaround."
              : "This project was a major overhaul — a rethink of a 25-year-old platform in a way that would not overwhelm long-time users. The results speak for themselves: a faster, better platform, happier users, and a system built to evolve."}
          </p>
        </>
      )}
      <div className={`grid grid-cols-2 gap-8 md:gap-12 ${c.outcome.length >= 5 ? "md:grid-cols-5" : "md:grid-cols-4"}`}>
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
                      <>1 <span className="text-2xl">week</span> <span className="text-[70%]">→</span> 5 <span className="text-2xl">min</span></>
                    ) : (
                      <>{o.value}</>
                    )}
                  </span>
                ) : (
                  <>{o.value.replace(/^[−-]/, "")}</>
                )}
                {o.label.includes("Usability Improved") || o.value === "17%" ? <TrendingUp className="w-8 h-8 md:w-10 md:h-10" /> : null}
                {(o.label.includes("Manual refresh eliminated") || o.label.includes("Manual refresh dropped significantly") || o.label.includes("No business lost till the date since the release") || o.value.includes("78%") || o.value.includes("64%") || o.value.includes("34%") || o.value.includes("27%")) && <TrendingDown className="w-8 h-8 md:w-10 md:h-10" />}
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
  const others = caseStudies.filter((x) => x.slug !== c.slug && !x.hidden);
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
        className={`[&_img]:cursor-zoom-in ${(c.slug === "fjord" || c.slug === "fjord2") ? "study-fjord-bg" : ""}`}
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

      {/* Outcome for case studies 02-04 */}
      {topOutcomeSlugs.has(c.slug) && <OutcomeMetrics c={c} />}

      {/* Meta grid */}
      <section className="mx-auto max-w-[1080px] px-6 md:px-10 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-8">
          {[
            { k: "Role", v: c.slug === "fjord2" ? "Lead Product Designer (Sole)" : c.role },
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
      <section id="overview" className={`mx-auto max-w-[1080px] px-6 md:px-10 pt-16 scroll-mt-24 ${(c.slug === "atlas" || c.slug === "atlas2") ? "pb-0" : "pb-24"}`}>

        <div className={c.slug === "fjord2" ? "" : "space-y-16"}>
          <div>
            <h2 className={`font-serif text-4xl md:text-5xl font-normal ${c.slug === "fjord2" ? "mb-[35px]" : "mb-8"}`}>{(c.slug === "fjord" || c.slug === "fjord2" || c.slug === "solace" || c.slug === "atlas" || c.slug === "atlas2") ? "Overview" : "Context"}</h2>
            {(c.slug === "fjord" || c.slug === "fjord2" || c.slug === "solace" || c.slug === "atlas" || c.slug === "atlas2") && (
              <h3 className="font-serif text-2xl md:text-3xl font-medium mb-6">Context</h3>
            )}
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
              <h3 className="font-serif text-2xl md:text-3xl font-medium mb-6">Introduction</h3>
              <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line mb-8">
                {`Affiliates - the partner networks who buy and transact against that inventory run their daily business through Ampersand's online portal: pulling rate cards, placing orders, and tracking yield.
The portal was 25 years old, and its codebase was frozen, no fix could ship without a full rebuild.
Over the years, workarounds had hardened into the way affiliates worked.
The Goal is to\u00a0rebuild a business-critical tool that 500+ affiliates depend on daily, without disrupting a single day of their work in the transition.`}
              </p>
            </div>
          )}
          {c.slug === "atlas" && (
            <div>
              <h2 className="font-serif text-3xl mb-6 font-medium">The Problem</h2>
              <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
                {`Throughout the product lifecycle process there are different types of notifications received by clients and the staff handling the project — via email, push notification, or text message. Currently there is no way to manage the different types of notifications clients and staff receive, as users may or may not want to receive certain notifications
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
                {`Throughout the product lifecycle process there are different types of notifications received by clients and the staff handling the project — via email, push notification, or text message. Currently there is no way to manage the different types of notifications clients and staff receive, as users may or may not want to receive certain notifications
\u00a01.Users getting so many spam notifications
\u00a02.Important notifications for there job getting lost resulting into delays and missed deadlines
\u00a03.Users need only selective set of notifications which are important for their job responsibilities\u00a0`}
              </p>
            </div>
          )}
          {c.slug === "solace" && (
            <div>
              <h2 className="font-serif text-3xl mb-6 font-medium">The Problem</h2>
              <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
                {c.problem}
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
                  ? "The goal is to create a system for all the files, documents and costing involved in the process and a standardized workflow where users don't have to add data manually and also eliminate the human error part for adding costs of materials, trims etc.\u00a0\n"
                  : c.slug === "fjord"
                  ? <p className="whitespace-pre-line">
                      {`When clients want to run their ads on TV or a streaming platform, they \x03have to define the target audience they want their ads to reach, including or excluding certain types of audience for their campaigns.\x03Ampersand AEs build the custom audience according to their needs, so \x03the number of audience can be calculated to meet the client's expectation in terms of reach and impressions, for the campaign to be successful \x03for the clients.
Limited number of users having access to an expensive tool where they can create custom audience.
If AE's want to build a custom audience to for the clients would require to send a request\x03to the data team and the turn around time was at least a week as the team is small. \x03AE's had to wait for getting their coustom audience for the campaign.`}
                    </p>
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
            <div className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
              {c.slug === "fjord" ? (
                <>
                  <p>
                  Ampersand has a tool to create custom segments, but its UI was complicated and not intuitive. To understand the user's needs, frustrations, and pain points, I conducted user interviews with 5 different users.
                  <br /><br />
                  I talked with both of the user groups who were going to use this tool. I asked users with access to the tool to give me a walk me through the tool and observed how they use it and all the functionalities they are using.At the same time I asked them to tell any pain points and shortcomings with the current tool,&nbsp;what they like and don't like about it
                  <br /><br />
                  I gathered 3 users with no access to the tool and asked them to create custom audience by using think out loud method as they try to use it for the first time. This way I&nbsp;made sure to understand friction points to address while designing.
                  <br /><br />
                  Observations for the new users were
                  <br />1. Users had difficulty in how grouping of the segments work
                  <br />2. There were 2 searches for the audience on left and right side which were confusing
                  <br />3. The screen was very busy due to the way UI was designer
                  <br />4. If you want to include an excluded segment and vice versa it was 3 to 4 clicks process.
                  <br /><br />
                  I also studied the existing tool to understand all the functionalities it performs and made sure I did not miss any part of the tool.
                  which we needed to build, plus a few more things to enhance the functionality and make it easy for users.
                  <br />1.&nbsp; Not very intuitive for.
                  <br />2. Copy the whole segment logic once it is built.
                  <br />3. Copy and modify an existing segment.
                  <br />4. Ability to see segments created by other users and copy them.
                  </p>
                </>
              ) : (c.slug === "fjord2") ? (
                <p>{c.research.userInterview}</p>
              ) : (c.slug === "solace") ? (
                <div className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
                  <p className="mb-2">
                    {"\n"}
                  </p>
                  <p>
                    Main users of this tool were 'Textile Product Designers' and 'Product Development Managers' who would create styles based on client requirements. I did&nbsp;desk interviews with 5 users&nbsp; lean sampling.I&nbsp;chose guerrilla, in-context research to get signal fast without derailing a fast-moving team.I asked them question specifically targeted to the functionality we wanted to build. Trying to understand what problems are being faced and why & how can we provide the solution for it.&nbsp;
                  </p>
                </div>
              ) : (
                <p>{c.research.userInterview}</p>
              )}
            </div>
          </div>
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
                          const frustrationIndex = goal.indexOf("Frustration");
                          const goalIndex = goal.indexOf("Goal");
                          
                          let content = goal;
                          
                          if (tasksIndex !== -1) {
                            content = content.replace("Tasks", '<span class="font-bold">Tasks</span>');
                          }
                          if (frustrationIndex !== -1) {
                            content = content.replace("Frustration", '<span class="font-bold">Frustration</span>');
                          }
                          if (goalIndex !== -1) {
                            content = content.replace("Goal", '<span class="font-bold">Goal</span>');
                          }

                          return (
                            <li key={gidx} className="whitespace-pre-line" dangerouslySetInnerHTML={{ __html: content }} />
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}



        {(c.slug !== "fjord" && c.slug !== "fjord2") && (
          <div className={`mt-16 rounded-sm bg-foreground text-background px-6 md:px-16 py-16 relative overflow-hidden`}>
            {c.slug === "solace" && (
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md pointer-events-none" />
            )}
            <div className="relative z-10">
              <h3 className="font-serif text-3xl md:text-4xl mb-6 font-normal">{(c.slug === "solace") ? "User Interview Insights" : "User Interview Insights\u00a0"}</h3>
              <div className="border-l border-background/40 pl-8 md:pl-12 space-y-10 max-w-3xl mx-auto">
                {c.slug === "solace" ? (
                  <div className="text-lg md:text-xl leading-relaxed whitespace-pre-line">
                    <p>
                      <em className="italic">"It's difficult to put together all the details about the style in one place as different detail are in different files."</em>
                      {"\n"}- Technical Designer
                      {"\n\u200d\n"}
                      <em className="italic">"If there is any change in the style details or material we have to make the change in all the documents/files related to it which is difficult"</em>
                      {"\n"}- Fashion Designer
                      {"\n\u200d\n"}
                      <em className="italic">"Every time there are changes we have to keep factories updated with that and provide them the updated project related files"</em>
                      {"\n"}- Product Development Manager
                      {"\n\n"}
                      <em className="italic">"We have to search the material , trims and labels information and pricing and then add their price manually to the document/files "</em>
                      {"\n"}- Product Development Manager
                      {"\n\u200d"}
                    </p>
                  </div>
                ) : (
                  <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line">
                    {(c as unknown as { userInterviewInsights?: string }).userInterviewInsights || ""}
                  </p>
                )}
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
              I ran a short survey with fashion designers and product developers to understand how they currently build and manage tech packs.The survey informed the decision to develop this feature as part of the UX Strategy. The responses clarified the biggest pain points, the tools in use, and where a dedicated platform could save the most time.
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
          <h3 className="font-serif text-3xl mb-6 font-medium">{c.slug === "solace" ? "Vision" : (c.strategySectionSubtitle || "Product + Design Strategy")}</h3>
        )}

        {(c.slug !== "atlas" && c.slug !== "atlas2") && (
          <p className="text-lg leading-relaxed text-foreground/85 mb-8 whitespace-pre-line">
            {c.slug === "fjord2" 
              ? "This workshop was not a typical design thinking workshop. It was customized based on the project and the available information to make the most of the one and a half days we had.\nI designed and facilitated a 1.5-day workshop with 8 stakeholders across leadership, product, and engineering. Deliberately front-loading the survey data so we prioritized from evidence, not opinion.\u00a0"
              : (c.slug === "solace" ? "Building an efficient and automated PLM ecosystem that reduces operational expenses, builds standardized workflows, and improves margins.\n" : "This workshop was not a typical design thinking workshop. It was customized based on the project and the available information to make the most of the one and a half days we had. I made sure to schedule the survey beforehand so we had the survey data before we conducted the workshop, and also made sure we had all the supplies needed for the workshop.")
            }
          </p>
        )}

        {c.slug === "solace" && (
          <>
            <div className="my-12">
              <h4 className="font-serif text-2xl md:text-3xl mb-6 font-normal">Goals</h4>
              <div className="overflow-hidden rounded-sm border border-foreground/20">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-foreground/20 hover:bg-transparent">
                      <TableHead className="text-foreground font-semibold">User Goals&nbsp;</TableHead>
                      <TableHead className="text-foreground font-semibold">Business Goals</TableHead>
                      <TableHead className="text-foreground font-semibold">Expected Result</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b border-foreground/10 hover:bg-foreground/5">
                      <TableCell className="text-foreground/90">Stop hunting for details across scattered files.</TableCell>
                      <TableCell className="text-foreground/90">Reduce rework and manual error/data entry</TableCell>
                      <TableCell className="text-foreground/90">Lower accounting errors, automation</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-foreground/10 hover:bg-foreground/5">
                      <TableCell className="text-foreground/90">Change something once, not in ten documents.</TableCell>
                      <TableCell className="text-foreground/90">Cut cycle time.</TableCell>
                      <TableCell className="text-foreground/90">Reduced time on task,{"\n"}automation</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-foreground/10 hover:bg-foreground/5">
                      <TableCell className="text-foreground/90">Keep clients/factories current in real time.</TableCell>
                      <TableCell className="text-foreground/90">Real-time collaboration, communication & updates</TableCell>
                      <TableCell className="text-foreground/90">Increased speed{"\n"}& workflow efficiency</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-foreground/10 hover:bg-foreground/5">
                      <TableCell className="text-foreground/90">Repurpose & reuse existing designs (CAD, tech pack files)&nbsp;</TableCell>
                      <TableCell className="text-foreground/90">Reduce OpEx and time.</TableCell>
                      <TableCell className="text-foreground/90">Increased speed,{"\n"}reduced expenses&nbsp;</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-foreground/10 hover:bg-foreground/5">
                      <TableCell className="text-foreground/90">Track all changes easily&nbsp;</TableCell>
                      <TableCell className="text-foreground/90">Provide transparency and traceability in PLM&nbsp;</TableCell>
                      <TableCell className="text-foreground/90">Trust, user satisfaction&nbsp;</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-foreground/10 hover:bg-foreground/5">
                      <TableCell className="text-foreground/90">Share finalized product documents with factories and clients</TableCell>
                      <TableCell className="text-foreground/90">Standardize the process&nbsp;&nbsp;</TableCell>
                      <TableCell className="text-foreground/90">User satisfaction, client retention{"\u00a0"}</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-foreground/10 hover:bg-foreground/5">
                      <TableCell className="text-foreground/90">Modify CAD and tech pack files in the platform&nbsp;&nbsp;</TableCell>
                      <TableCell className="text-foreground/90">Users don't leave the platform, differentiator from {"\u00a0"}competitors</TableCell>
                      <TableCell className="text-foreground/90">Time spent on the platform,{"\n"}retain & attract new clients{"\u00a0"}</TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-foreground/5">
                      <TableCell className="text-foreground/90">{"\n"}</TableCell>
                      <TableCell className="text-foreground/90">{"\n"}</TableCell>
                      <TableCell className="text-foreground/90">{"\n"}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
            <h4 className="font-serif text-2xl md:text-3xl mb-6 font-normal">Plan</h4>
            <p className="text-base leading-relaxed text-foreground/70 mb-6">
              <a
                href="https://docs.google.com/document/d/1Hyo1VYT0LFqGd6DyTtLSt_JilD68b9um/edit?usp=sharing&ouid=115603348250759583791&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                click here to see details
              </a>
            </p>
            <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
              {"\n"}<strong>1. Centralize</strong>{"\n"}
              <strong>Building Libraries (Quick Win) -</strong>{"\u00a0"}To show the collection of all the tech pack and CAD files that get added to individual products already available on the platform,{"\u00a0"}build a material & trims library so it can be added to products directly and eliminate related manual data entry and paperwork.{"\n"}
              {"\u00a0"}{"\n"}
              <strong>2. Collaboration</strong>{"\u00a0"}{"\n"}
              <strong>Standardization -</strong> Bridge the gap between pre-production and production stage of a product lifecycle. There is a need for a standardized document that will contain all the details of the product, like designs, materials, trims, and detailed instructions, which can be sent to the manufacturing factory. If there are modifications to the details, then a new version of the document will be created and sent to the factories, making it easier to track changes and communicate them to the factories.{"\n"}
              {"\n"}
              <strong>3. Connect</strong>{"\u00a0"}{"\u00a0"}{"\n"}
              <strong>Automation -</strong> Transition from pre-production to production stage came with a lot of manual work entering the material and trims details manually. In addition to that, you have to add the costs for the product and create a bill of materials, which was a time-consuming task and calculation errors occurred frequently.{"\u00a0"}{"\u00a0"}{"\u00a0"}{"\n"}
              Connecting all the different parts of the platform to talk to each other and connect the workflow from pre-production to production stage, enabling ease of handling the process, documents, cost sheet, changes in product, and collaboration with clients, factories, and internally to make the workflow better and efficient.{"\u00a0"}{"\u00a0"}{"\n"}
            </p>
          </>
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

        {c.slug === "fjord" && (
          <div className="bg-secondary rounded-sm p-6 md:p-10 flex justify-center">
            <img
              src={uxStrategyImg.url}
              alt="UX Strategy diagram showing Business Goals and User Goals converging into UX Strategy: Centralize, Connect, Collaborate"
              className="w-[50.78%] h-auto"
            />
          </div>
        )}


        {c.slug === "solace" && (
          <div className="dark:bg-white rounded-sm p-6 md:p-10 flex justify-center mt-12">
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
                The workshop started with a walkthrough of the Affiliate website and{"\u00a0"}the problems with the site.{"\u00a0"}We defined the personas and went through survey responses.
              </p>
              <div className="overflow-hidden rounded-sm bg-secondary p-2 mb-[72px]">
                <img src={defineImg1.url} alt="Affiliate workshop define session reviewing survey results" className="w-full h-auto object-contain" />
              </div>
              <div>
                <h2 className="font-serif text-3xl mb-6 font-medium">Why redesign?</h2>
                <p className="text-lg leading-relaxed text-foreground/85 mb-6 whitespace-pre-line">
                  {"My first step before starting any project is to understand: why are we doing this project?\nSo I asked the same question to the Product Manager and the Stakeholders. The reasons the affiliate website needs to be redesigned are as follows.\n"}
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
                  <h3 className="font-serif text-3xl md:text-4xl mb-6 font-normal flex items-center gap-3">Problems to Opportunity</h3>
                  <div className="border-l border-[#0068FF] dark:border-primary/70 pl-8 md:pl-12 max-w-3xl mx-auto">
                    <blockquote className="text-lg md:text-xl leading-relaxed text-left whitespace-pre-line">
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
                      {" → the sharpest pain point. Affiliates were reloading the page every few minutes so they wouldn't miss an order or revision. The redesign surfaces changes live, turning a constant manual chore into a system that tells users when something moves."}
                    </blockquote>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl mt-[100px] mb-6 font-normal">Understanding User Groups</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] mb-10">
                  {[
                    {
                      name: "Political Sales Manager / Sales Planner\n",
                      usage: 2,
                      dependency: 3,
                      goals: [
                        "Goal:\u00a0 Identify new business\u00a0\nFrustration:\u00a0Back to back order revisions, hard to track revision history \u0026 speed\u00a0\u00a0\nTasks:\n1. Track new orders\n2. Track revenue\n3. View order for oversight\n4. Quick identification of unaccepted orders",
                      ],
                    },
                    {
                      name: "Political Campaign Manager\n/ Support Specialist\u200b",
                      usage: 3,
                      dependency: 2,
                      goals: [
                        "Goal: Maintain makegoods business\u00a0\nFrustration:\u00a0Makegood Processing and Synchronization issue\nTasks:\n1. Review and Confirm\n2. orders in timely manner\n3. Create Makegoods\u200b\n4 .Accept orders",
                      ],
                    },
                    {
                      name: "Political & Markets Yield Team (ERC)",
                      usage: 4,
                      dependency: 4,
                      goals: [
                        "Goal: Maintaining Electronic Rate cards\nFrustration: Time consuming workarounds due to broken functionalities\nTasks:\n1. Upload, View, Download rates\n2. Keep rate cards up-to-date\n3. Report on gaps in rate cards\n4. Ensure downloaded exports and the upload template match",
                      ],

                    },
                    {
                      name: "Admin / Super User",
                      usage: 4,
                      dependency: 3,
                      goals: [
                        "Goal: Validate the affiliate site is running successfully\nFrustration: Manual account setup & updating\nTasks:\n1. Replicate all capabilities of an affiliate user\n2. Troubleshoot for affiliate user\n3. Identify discrepancies between Platform and affiliate site orders\n4. Test deployment of affiliate site changes",
                      ],

                    },
                    {
                      name: "Markets Campaign Manager",
                      usage: 4,
                      dependency: 3,
                      goals: [
                        "Goal:\u00a0Gather intel across both Linear and Digital orders\nFrustration: Version comparison broken, Exports format\n",
                        "Tasks:\n1.\u00a0 New & historical linear & digital orders\u200b\n2. Calculate Total investment/total impressions\u200b\n3.\u00a0Coordinate with AMP Account Executives\u00a0on orders/markets\u200b orders\u00a0\n4. \u200bOrder admin reference\u00a0\u00a0\n\n",
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
                              <div className="text-sm font-bold mb-2">{bar.label}</div>
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
                            return (
                              <li key={idx} className="whitespace-pre-line">
                                {goal.split('\n').map((line, lIdx) => {
                                  const labelMatch = line.match(/^(Goal:|Frustration:|Tasks:|Platform Usage|Platform Dependency)\s*/);
                                  if (labelMatch) {
                                    const label = labelMatch[1];
                                    const rest = line.slice(labelMatch[0].length);
                                    return (
                                      <span key={lIdx} className="block mt-1">
                                        <span className="font-bold">{label}</span>
                                        {rest}
                                        {lIdx < goal.split('\n').length - 1 ? '\n' : ''}
                                      </span>
                                    );
                                  }
                                  return (
                                    <span key={lIdx} className="block mt-1">
                                      {line}
                                      {lIdx < goal.split('\n').length - 1 ? '\n' : ''}
                                    </span>
                                  );
                                })}
                              </li>
                            );
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
                All the attendees were given an opportunity to vote — limited to 5 votes each — to get to the actually important themes. After everyone voted, I took all the sticky notes with votes and arranged them in descending order.{"\u00a0\u00a0"}
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
                The next step was to use the Prioritization Matrix to understand the level of effort and the impact of each card, so we had clarity about which things needed to be worked on for this project.{"\u00a0\u00a0"}
              </p>
            </div>

            <div className="mt-16">
              <h3 className="font-serif text-3xl mb-6 font-medium">Define Success Matrics{"\u00a0"}</h3>
              <p className="text-lg leading-relaxed text-foreground/85 mb-8">
                {c.slug === "fjord2"
                  ? "The final step was to define KPIs and how we would measure them. We converted themes into a prioritized, effort-vs-impact backlog and — critically — agreed on 5 success metrics before design started, so 'done' was defined up front."
                  : "The final step was to define KPIs and how we would measure them. We came up with 5 KPIs which cover all aspects of the project.\u00a0"}
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
                We wrapped up the one and a half day workshop with clear next steps and were ready to initiate the design phase.
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
            <h3 className="font-serif text-3xl mb-6 font-medium">Approach</h3>
            <p className="text-lg leading-relaxed text-foreground/85 mb-8 whitespace-pre-line">
              Following are the three different user flows for managing notifications.
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
            ? "The legacy site dropped users onto a bare navigation menu with too many options and numbers that were not useful. I introduced a dashboard as the new front door and mapped every screen to be sure nothing was lost in the rebuild — with the limited amount of information I had from the survey data.\u00a0"
            : (c.slug === "atlas" || c.slug === "atlas2")
            ? "To validate whether the design meets user needs, solves their pain points, and is usable, I made mid-fidelity wireframes."
            : (c.slug === "fjord")
            ? "This tool design demanded custom a few component and some were reused for this project . \u00a0 \u00a0"
            : "I procured the different files that the Fashion Designer/PDM used to send to the clients and the factory."
          }
        </p>
        {(c.slug === "fjord") && (
          <ul className="list-disc list-inside text-lg leading-relaxed text-foreground/85 mb-4 ml-1">
            <li>Segment Pill - was the main component designe apart from few more like logic switches, Include/ Exclude switch , bracket all are shown in the left side image.{"\u00a0"}{"\u00a0"}</li>
            <li>While the{"\u00a0"}Audience Segment Selector on the right side image is a reused component that adapted the requirement of the tool.{"\u00a0"}</li>
          </ul>
        )}
        {(c.slug === "solace") && (
          <ul className="list-disc list-inside text-lg leading-relaxed text-foreground/85 mb-4 ml-1">
            <li>Bill of Material (Material and trims costing file)</li>
            <li>Final CAD file</li>
            <li>Tech Pack file</li>
            <li>Fabric & Trims Cataloge&nbsp;</li>
          </ul>
        )}
        <p className="text-lg leading-relaxed text-foreground/85 mb-10">
          {(c.slug === "fjord2")
            ? "\n"
            : (c.slug === "atlas" || c.slug === "atlas2")
            ? "Reviewing designs with developers and the CTO at an early stage makes it easy and saves time and effort — in case something is not feasible, you might need to make many changes. I reviewed these with the mobile developers to confirm feasibility of the designs; it also makes them feel involved. Developers showed concern about the design — according to them, nested pages inside the tabs."
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
        <h2 className={`font-serif mb-8 ${c.slug === "solace" ? "text-3xl font-medium" : c.slug === "fjord2" ? "font-serif text-3xl mt-12 mb-6 font-medium" : c.slug === "fjord" ? "font-serif text-3xl mt-12 mb-6 font-medium" : "text-4xl md:text-5xl font-normal"}`}>{(c.slug === "fjord2") ? "Initial Design" : (c.slug === "atlas" || c.slug === "atlas2") ? "User Flow" : (c.slug === "fjord") ? "Wire-framing & Feedback" : "Brainstorming Session With Product Team"}</h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-10 whitespace-pre-line">
          {(c.slug === "atlas" || c.slug === "atlas2") 
            ? "Following are the three different user flows for managing notifications." 
            : (c.slug === "fjord2") 
              ? "I presented wireframes to Stakeholders, Engineering, and the PM. We discussed the assumptions the stakeholders had. I had multiple questions about the workflow of the users — what is crucial for them to perform their day-to-day jobs on the website. The stakeholders did not have answers to most of my questions, so I pushed for a session with all the main affiliates to understand their workflow, which would provide insights and avoid any assumption-based decisions that might affect their workflow negatively or create obstacles for them." 
              : (c.slug === "fjord")
                ? "The reference point of the design was the tool which we are trying to replace. Some parts felt complicated specifically for the first-time users, as observed during the research phase. The process of building a segment and grouping felt complex for them. I wanted to simplify that part for both new and experienced users, so they could understand and adopt it quickly. I took the drag-and-drop approach, which was best suited for this tool."
                : "I presented my sketches to the product team using a whiteboard, as the possible solution for the feature we were building. After the feedback and discussion about the design requirements from an engineering standpoint, the concept design was good enough to kickstart the mid-fidelity wireframes and gather some user feedback."
          }
        </p>
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
            <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line mb-[50px]">Creating low fidelity wireframes helps me focus on the visual consistency and hierarchy before applying styles. In these wireframes, I tried to incorporate common design patterns that have been tested on our competitors' product, or included elements that directly address users' goals, needs, and frustrations. Once I had a visual direction of the layout, I started to add more details and precisions to the sketches by turning them into mid-fidelity wireframes.</p>
          </>
        )}
      </section>

      {c.slug === "fjord" && (
        <>
          {/* User Flow */}
          <section className="mx-auto max-w-[1080px] px-6 md:px-10 py-24">
            <h2 className="font-serif text-4xl mb-8 md:text-3xl font-normal">User flow</h2>
            <p className="text-lg leading-relaxed text-foreground/85 mb-10">
              There were 2 main flow of users which I needed to design for. By creating task flows that center on the key functions of the Audience builder tool — First, to generate a custom segment for client and use the created segment to 4 different flows as per requirement on for building a schedule for their campaign, create a Container, use it for Addressable campaign or Audience guaruntee.Second one is to search for the existing list of custom build audience copy the segment and modify it to use it. Below is the flow for 2 tasks.
            </p>
            <Carousel opts={{ loop: true }} className="relative group">
              <CarouselContent>
                {[audienceFlowCreateNew, audienceFlowCopyModify].map((img, i) => (
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
              <CarouselPrevious className="left-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CarouselNext className="right-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CarouselDots />
            </Carousel>
          </section>
        </>
      )}

      {(c.slug !== "atlas" && c.slug !== "atlas2" && c.slug !== "solace" && c.slug !== "fjord") && (
        <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>
      )}


      {(c.slug === "fjord2") && (
        <section className="mx-auto max-w-[1080px] px-6 md:px-10 py-24">
              <h3 className="font-serif text-3xl mb-6 font-medium">Qualitative Research - Focus Group</h3>
              <p className="text-lg leading-relaxed text-foreground/85 mb-4 whitespace-pre-wrap">
                I was able to get stakeholders to arrange meetings with 5 different affiliates,{"\u00A0"}each with 5–10 people from their organization. We collectively came up with the questions we wanted to ask affiliates.{"\u00A0"}
                <a href="https://docs.google.com/document/d/1QNgsJY8tiK6sr_Hl4HzbIyaKk_U5N01bvP8huFwtLsI/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-bold underline">Click here</a>{"\u00A0"}
                to see the list of questions for the focus group.{"\u00A0"}

                {"\n\n"}Watching the work overturned assumptions we'd carried into the project.
              </p>
              <ul className="list-disc list-outside pl-6 text-lg leading-relaxed text-foreground/85 mb-6 space-y-3">
                <li>Stakeholders assumed affiliates did not need the D, V, P, and C symbols, but in session after session these proved very important for identifying whether someone was working on an order.</li>
                <li>The sessions surfaced the real cost of the old system. Over recent years, affiliates had lost roughly $850K in business to orders that slipped through unnoticed{"\u00A0"} there was no clear way to see whether someone was already working an order, so orders were dropped.</li>
                <li>Order revisions from the Ampersand side - staff sending revision after revision before affiliates could open them — caused problems for affiliates in understanding what had changed, and needed to be restricted.</li>
              </ul>
              <div className="border-l border-[#0068FF] dark:border-primary/70 pl-8 md:pl-12 max-w-3xl mx-auto my-[50px]">
                <blockquote className="text-lg md:text-xl leading-relaxed text-left whitespace-pre-line">
                  {"\n\nRefer to the Survey Results section, you will find that we asked a question to rate the current experience of the affiliate site. The survey results surprised us that, the most respondents were satisfied, and some answered as very satisfied. During a session with one of the affiliates, they said, \"We like it as it is, we don't want it to change.\" Because the site is very old, the users are so used to it ; even with the workarounds. Change is very hard for them after learning to operate with all the workarounds turned into user habits built over years of using the website."}
                  {"\n\n"}
                  <strong>The hardest constraint wasn't technical. Users were satisfied because they'd normalized the workarounds, so the risk wasn't a worse tool — it was rejection of a better one. I designed for flat adoption over dramatic change.</strong>
                  {"\n\n\n"}
                </blockquote>
              </div>
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
                      <TableCell>{c.slug === "fjord2" ? "Views, Search, Filters" : "Views and  Search "}</TableCell>
                      <TableCell>Order Revision</TableCell>
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
                      <TableCell>Speed & Efficiency</TableCell>
                      <TableCell>Messaging</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Contacts & Resources,Email Notifications{"\u00a0"}</TableCell>
                      <TableCell>Collaterals{"\u00a0"}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{c.slug === "fjord2" ? "Auto Refresh\u00a0" : "Search , Auto refresh"}</TableCell>
                      <TableCell>Exports</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{c.slug === "fjord2" ? "Fix Broken Functionalities" : "\u00a0"}</TableCell>
                      <TableCell>Automation</TableCell>
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
                : "Throughout the product lifecycle process there are different types of notifications received by clients and the staff handling the project — via email, push notification, or text message. Currently there is no way to manage the different types of notifications clients and staff receive, as users may or may not want to receive certain notifications\n\nBroad notification categories for users are as follows \n1.     Comments posted by different user types (Client, Factory, Staff, Finance )\n2.    Files - Uploads ,Approval, Rejection\n3.    PLM Stage Activities\n4.    Timeline/ETA Changes\n5.    Chat messages ,Tagged Comment in the product or in the chat\n6.    Finance - Costing, invoicing, PO updates  \n7.    Product level notifications \n8.    Company level notifications \n\n")
          }
        </div>
      </section>

      {/* User Flow */}
      <section className="mx-auto max-w-[1080px] px-6 md:px-10 pt-[100px] pb-24" style={{ display: (c.slug === "atlas" || c.slug === "atlas2" || c.slug === "fjord") ? "none" : undefined }}>
        <h2 className="font-serif text-4xl mb-8 md:text-3xl font-normal">{(c.slug === "atlas" || c.slug === "atlas2") ? "\n" : "User flow"}</h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-10">
          {c.slug === "solace" ? "To decide what I am designing, identifying the main flow of users when completing a task helps me to direct my focus on designing specific pages. By creating task flows that center on key functions of the Design studio , I was able to think through the necessary steps and examine the user experience in detail. Below is the flow showing the various places from which you can start and access the design studio and edit the Tech Pack." : (c.slug === "atlas" || c.slug === "atlas2") ? "\n" : "To decide what I am designing, identifying the main flow of users when completing a task helps me to direct my focus on designing specific pages. By creating task flows that center on the key functions of the Techpack tool — to generate a techpack, export it to a PDF, and share it — I was able to think through the necessary steps and examine the user experience in detail. Below is the flow for 2 tasks."}
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
          <ul className="space-y-6 text-lg leading-relaxed text-foreground/85">
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>Reviewed the initial low-fidelity clickable wireframes with users to gather feedback on functionality and usability. After observing how they interacted with the wireframes and noting what could be added, I created a second iteration and shared it with them again.</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>After the second iteration, I reviewed the wireframes with the VP of Product to confirm they met all requirements. I communicated user needs and observations from interviews — including items I had added that were not in the product requirements document — and updated the team to keep Engineering in the loop.</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>To confirm technical feasibility and software architecture, and to understand the development effort and time required, I reviewed the designs with the CTO and received engineering feedback and inputs for improvement.</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>I reviewed designs with the developers and confirmed the new UI components I would need for this feature, whether they could build them, and the effort and time required.</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>After taking inputs from users, Product, and Engineering, I started putting together high-fidelity wireframes to improve the design in a third iteration.</span>
            </li>
          </ul>
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
              <span>Formal moderated testing wasn't viable as affiliates are external and we'd already spent their goodwill on the survey and sessions.</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>So, I validated adoption behaviorally with Microsoft Clarity session analysis and an in-product feedback survey after 3 months of live use.</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>The feedback we got was positive, and I&nbsp;watched some sessions using Microsoft Clarity to check if it was being used as we expected. The results seemed satisfactory.</span>
            </li>
          </ul>
          <h3 className="font-serif text-2xl md:text-3xl mb-6 mt-16 font-normal">Adoption</h3>
          <p className="text-lg leading-relaxed text-foreground/85">
            Before the release, we made sure to have the help resources ready — such as short videos/tutorials showing how to perform all the tasks, a list of possible FAQs, and a place where users can send feedback and report any bugs or errors they encounter.&nbsp;&nbsp;
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
                  ? "For testing, we decided to release it in the beta environment as the functionality was drag and drop. I connected with users, asking them to share their screens, and observed how they were using the tool. It was working for them."
                  : <>For all the tests, I expect a <strong className="font-semibold">90% completion rate</strong> and <strong className="font-semibold">90% error-free rate</strong> because the prototype is not fully functioning, and users might take alternatives that have not been built up for completing the tasks. Conduct Usability Testing then conducted in-person testing with <strong className="font-semibold">5 participants,</strong> and created transcripts for each participant based on my observation of their interaction with the prototype. I jotted down their mistakes, slips, and any confusion they expressed in the process. These transcripts are perfect raw material for summarizing the patterns of users' interaction with the prototype.</>}
              </p>
            </>
          )}

          <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal">Usability Testing&nbsp;</h3>
          <ul className="space-y-6 text-lg leading-relaxed text-foreground/85">
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>{c.slug === "fjord" ? "I did remote testing with 6 users 3 of each user group." : (c.slug === "atlas" || c.slug === "atlas2") ? "For usability testing, I recruited 4 participants to test the prototype. The objective of the test was to identify how easily users are able to subscribe and unsubscribe from a particular product, company, stage, or phase of the product lifecycle." : "As testing started from the early stage with the initial wireframes, It was quite helpful in finding user needs and expectations and setting up for the right direction for design to fill the gaps in the functionality.\u00a0I recruited 5 participants to test the prototype."}</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>
                {c.slug === "fjord" 
                  ? "I divided functionality in 6\u00a0tasks to check the task completion rate and time required to complete those tasks."
                  : <>I divided functionality in <strong className="font-semibold">6 different tasks</strong> tasks to check the task completion rate and time required to complete those tasks <span className="underline hover:text-accent"><a href="https://drive.google.com/file/d/1m5iAAkk5dO8wLx-q7ffIzm1X_uVUhUe3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-semibold">Usability test questions</a></span>&nbsp;.</>}
              </span>
            </li>
            {c.slug === "fjord" && (
              <p className="text-lg leading-relaxed text-foreground/85 mt-4 mb-2 whitespace-pre-line">
                {"\u00a01.\u00a0 Search an audience segment.\n\u00a02. Drag and Drop it to the build area.\u00a0\n\u00a03. Create a group of segments.\u00a0\n\u00a04. Switch between OR & AND, Include and exclude.\u00a0\n\u00a05. Name and save a segment.\u00a0\n\u00a06. Use the created segment in either of the 4 workflows.\n\n"}
              </p>
            )}
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>{c.slug === "fjord" ? "\u00a0The objective of the test was to identify how easily users are able to understand usability and how intuitive it is for users to complete the given task." : "Usability Test Findings:\u00a0 2 out of the 5 participants felt the need to add labels on the Detailed Sketch page. 3 out of the 5 participants wanted a Save button in case they wanted to leave halfway and needed to navigate to another part of the application. 3 out of the 5 participants were confused by the details drawer not opening on the Bill of Material page.\u00a0 All participants felt the design served its purpose and addressed the pain points they had."}</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>{c.slug === "fjord" ? "Based on the test result data, not all users had knowledge of AND/OR logic, so I added a help section to help them understand how it works, so they can create segments with a clear understanding and more precisely.\u00a0\u00a0" : "Based on the test result data some changes were made to fix issues faced by the users."}</span>
            </li>
          </ul>

          {(c.slug !== "atlas" && c.slug !== "atlas2") && (
            <p className="text-lg leading-relaxed text-foreground/85 mb-16">
              {c.slug === "fjord" 
                ? "For testing, we decided to release it in the beta environment as the functionality was drag and drop. I connected with users, asking them to share their screens, and observed how they were using the tool. It was working for them."
                : <>For all the tests, I expect a <strong className="font-semibold">90% completion rate</strong> and <strong className="font-semibold">90% error-free rate</strong> because the prototype is not fully functioning, and users might take alternatives that have not been built up for completing the tasks. Conduct Usability Testing then conducted in-person testing with <strong className="font-semibold">5 participants,</strong> and created transcripts for each participant based on my observation of their interaction with the prototype. I jotted down their mistakes, slips, and any confusion they expressed in the process. These transcripts are perfect raw material for summarizing the patterns of users' interaction with the prototype.</>}
            </p>
          )}

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
          <Carousel
            opts={{ loop: true }}
            className={cn(
              "relative group",
              (c.slug === "fjord2" || c.slug === "solace") && "overflow-hidden bg-cover bg-center bg-no-repeat pt-28 pb-12"
            )}
            style={
              c.slug === "fjord2"
                ? { borderRadius: "2.4%", backgroundImage: `url(${ampMockupBg2.url})` }
                : c.slug === "solace"
                  ? { borderRadius: "2.4%", backgroundImage: `url(${gridBg.url})` }
                  : undefined
            }
          >
            {(c.slug === "fjord2" || c.slug === "solace") && (
              <div className="absolute inset-0 backdrop-blur-2xl bg-white/15 border border-white/20 pointer-events-none" style={{ borderRadius: "2.4%" }} />
            )}
            <CarouselContent className={(c.slug === "fjord2" || c.slug === "solace") ? "relative z-10 !ml-0" : undefined}>
              {((c.slug === "atlas" || c.slug === "atlas2")
                ? [
                    { src: notificationsFinalScreens.url, label: "Final screens mockup" },
                  ]
                : (c.slug === "fjord2")
                ? [
                    { src: affiliateSiteOldBefore.url, label: "Before – legacy affiliate site screens" },
                    { src: affiliateDashboard4.url, label: "After – orders dashboard" },
                    { src: affiliateDashboardChanges2.url, label: "Dashboard – annotated changes" },
                    { src: affiliateRevisedTab3.url, label: "Revised orders tab with filters and pagination" },
                    { src: affiliateOrderPage3.url, label: "Revamped order details page" },
                  ]
                : [
                    { src: finalToolScreens.url, label: "Tool screens" },
                    { src: affiliateSiteMockupDashboard2.url, label: "Dashboard view" },
                    { src: finalSketchSel.url, label: "Sketch selection" },
                    { src: finalDetailedSketch.url, label: "Detailed sketch" },
                    { src: finalBom.url, label: "Bill of Materials" },
                    { src: finalPdf.url, label: "Exported PDF" },
                    { src: finalProto.url, label: "Prototype overview" },
                  ]
              ).map((img) => (
                <CarouselItem key={img.label} className={(c.slug === "fjord2" || c.slug === "solace") ? "flex items-center justify-center !pl-0" : undefined}>

                  {(c.slug === "atlas" || c.slug === "atlas2") ? (
                    <div
                      className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-28 flex items-center justify-center"
                      style={{ borderRadius: "2.4%", backgroundImage: `url(${gridBg.url})` }}
                    >
                      <div className="absolute inset-0 backdrop-blur-2xl bg-white/15 border border-white/20" style={{ borderRadius: "2.4%" }} />
                      <img
                        src={img.src}
                        alt={img.label}
                        className="relative mx-auto h-auto shrink-0"
                        style={c.slug === "atlas" ? { width: "97.75%", maxWidth: "none" } : { width: "85%" }}
                        loading="lazy"
                      />
                    </div>
                  ) : (c.slug === "fjord2") ? (
                    <img src={img.src} alt={img.label} className="relative mx-auto h-auto shrink-0" style={{ width: "95.1%", maxWidth: "none" }} loading="lazy" />
                  ) : (c.slug === "solace") ? (
                    <img src={img.src} alt={img.label} className="relative mx-auto h-auto shrink-0" style={{ width: "85%" }} loading="lazy" />
                  ) : (
                    <div className="overflow-hidden rounded-sm border border-border bg-secondary">
                      <img src={img.src} alt={img.label} className="w-full h-auto" loading="lazy" />
                    </div>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            {c.slug !== "atlas" && <CarouselPrevious className="left-4 top-1/2 z-30 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />}
            {c.slug !== "atlas" && <CarouselNext className="right-4 top-1/2 z-30 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />}
            {(c.slug === "fjord2" || c.slug === "solace") && <CarouselDots className="relative z-20 mt-6" />}
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


      {c.slug !== "fjord2" && (
        <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>
      )}

      {/* Reflection */}
      <section id={topOutcomeSlugs.has(c.slug) ? "reflection" : "impact"} className="mx-auto max-w-[1080px] px-6 md:px-10 pt-24 pb-0 scroll-mt-24">
        <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">
          Reflection
        </h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-20">
          {c.slug === "fjord2" 
            ? <>
                This project was more than a redesign. We tackled the pain points that had shaped how affiliates worked for years — speed, stability, broken functionality, redundancy, and the constant manual refreshing — and rebuilt the platform on a foundation that can finally evolve.{"\u00A0"}
                The results I'm proudest of: a 92% task success rate, the near-elimination of manual refreshing, and zero business lost since launch against the ~$850K the old system had been quietly bleeding.Designing that visibility into the new platform is precisely what the "$0 lost since launch" result protects.The biggest lesson wasn't about the interface — it was about restraint. For an entrenched user base that had normalized every workaround, the real risk wasn't building a worse tool; it was building a better one they'd reject. Designing for flat adoption meant deliberately deferring improvements I'd have liked to ship on day one.{"\u00A0"}
                Phase two, now in development, including a major shift in how affiliates communicate on the platform.{"\u00A0"}
              </>

            : c.slug === "fjord"
            ? "We successfully deployed the tool, and it significantly reduced the time for creating a custom audience, as users no longer had to wait for the Data team to make it for them — including those who did not have access to the paid tool. We saved a good amount for the company and were also able to provide a few more features than the existing tool by making it more intuitive. I learned to make sure all possible resources are available for users, for learning and smoother adoption."
            : (c.slug === "atlas" || c.slug === "atlas2")
            ? "By design, I made sure users can fully control the notifications important to their job at different levels — Company level, Product level, and Product Lifecycle stage level. We were successful in eliminating most of the spam notifications, which led to a great reduction in missed important notifications that had resulted in missed deadlines for product delivery to clients. This was a huge plus for customer experience and helped with client retention for the company.\u00a0"
            : "This was a big project and turned out to be a good selling point for the company. Apart from that,\u00a0it was a great workflow improvement, which eliminated accounting errors that happen due to manual workflow. Thanks to the libraries built,\u00a0it sped up the workflow through reuse and repurposing. Because of the editor tool, users didn't have to go outside the platform to do all the editing for the manufacturing phase. Overall, the project was a great success."}
        </p>
      </section>

      {c.slug === "solace" && (
        <div className="mx-auto max-w-[1080px] px-6 md:px-10 mt-[50px] mb-[80px]">
          <div className="rounded-sm dark:bg-white p-6 md:p-10 flex justify-center">
            <img
              src={techpackOutcomeImg.url}
              alt="Techpack outcome UX strategy diagram showing Centralize, Connect, and Collaborate pillars"
              className="w-[63.375%] h-auto"
            />
          </div>
        </div>
      )}

      {/* Outcomes for case studies without top metrics */}
      {!topOutcomeSlugs.has(c.slug) && <OutcomeMetrics c={c} />}

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
            <span className="text-accent">Interested in more?</span> Contact me for the case studies with additional insights and artifacts.
          </p>
        </div>
      </section>

      <div id="case-study-end" aria-hidden />

      {/* More case studies */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1080px] px-6 md:px-10 pt-20 pb-10">
          <p className="eyebrow mb-10">More case studies</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {others.map((o, i) => (
              <Link
                key={o.slug}
                to="/work/$slug"
                params={{ slug: o.slug }}
                className={`group block ${i > 0 ? 'md:border-l md:border-transparent md:pl-12' : ''} ${i < others.length - 1 ? 'pb-12 md:pb-0' : ''}`}
              >
                <h3 className="font-serif text-3xl md:text-4xl group-hover:text-accent transition-colors whitespace-nowrap">
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
