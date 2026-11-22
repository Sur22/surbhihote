import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowDown, ArrowUpRight, Check, TrendingUp, Play, FileText, BrainCircuit, CheckCheck, KeyRound } from "lucide-react";
import { useState, type CSSProperties } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Solace2KeyDecisionDetails } from "@/components/Solace2KeyDecisionDetails";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CaseStudySideNav } from "@/components/CaseStudySideNav";
import { AiPanelSurvey } from "@/components/AiPanelSurvey";
import { AiPanelFocusGroup } from "@/components/AiPanelFocusGroup";
import { AiPanelTesting } from "@/components/AiPanelTesting";
import { AiPanelTestingInitialCopy } from "@/components/AiPanelTestingInitialCopy";
import { AffiliateProblemsOpportunityCards } from "@/components/AffiliateProblemsOpportunityCards";
import { AffiliateRealProblemCards } from "@/components/AffiliateRealProblemCards";
import { AiPanelIdeation } from "@/components/AiPanelIdeation";
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import atlasTabsChanges from "@/assets/mobile_notifications_tabs_changes.png.asset.json";
import atlasProfile from "@/assets/mobile_notifications_2.png.asset.json";
import atlasNotificationChanges from "@/assets/mobile_notification_profile_sized.png.asset.json";
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
import finalColorMaterialDrawer from "@/assets/techpack-color-material-drawer.png.asset.json";
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

import affiliateDashboard4 from "@/assets/Affiliate_site_mockup_dashboard-4.png.asset.json";
import affiliateDashboardChanges2 from "@/assets/affiliate_dashboar_changes-2.png.asset.json";
import affiliateRevisedTab3 from "@/assets/Affiliate_site_mockup_revised_tab-3.png.asset.json";
import affiliateOrderPage3 from "@/assets/Affiliate_site_mockup_order_page-3.png.asset.json";
import ampMockupBg3 from "@/assets/amp-mockup-bg-3.png.asset.json";

export const Route = createFileRoute("/work/solace2")({
  loader: () => {
    const c = getCaseStudy("solace2");
    if (!c) throw notFound();
    /* The page body branches on c.slug === "solace"; keep that slug so the
       copied markup renders identically while the data stays independent. */
    return { study: { ...c, slug: "solace" as const } };
  },
  head: ({ loaderData, params }) => {
    const s = loaderData?.study;
    const url = `https://surbhihote.com/work/solace2`;
    if (!s) return { meta: [{ title: "Case study — Surbhi Hote" }] };

    if (true) {
      const solaceUrl = "https://surbhihote.com/work/solace";
      const ogImage = "https://surbhihote.com/og-techpack.png";
      return {
        meta: [
          { title: "Tech Pack Tool | Surbhi Hote" },
          {
            name: "description",
            content:
              "Tech Pack Tool is a 0-to-1 tech pack editor that moved fashion PLM workflows off scattered Excel files into one connected platform. It cut accounting errors 64% and task time 34%. A 0-to-1 product design case study by Surbhi Hote, Lead Product Designer.",
          },
          { name: "keywords", content: s.keywords },
          {
            property: "og:title",
            content: "Tech Pack Tool | Surbhi Hote",
          },
          {
            property: "og:description",
            content:
              "Tech Pack Tool is a 0-to-1 tech pack editor that moved fashion PLM workflows off scattered Excel files into one connected platform. It cut accounting errors 64% and task time 34%. A 0-to-1 product design case study by Surbhi Hote, Lead Product Designer.",
          },
          { property: "og:image", content: ogImage },
          { property: "og:url", content: solaceUrl },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
          {
            name: "twitter:title",
            content: "Tech Pack Tool | Surbhi Hote",
          },
          {
            name: "twitter:description",
            content:
              "Tech Pack Tool is a 0-to-1 tech pack editor that moved fashion PLM workflows off scattered Excel files into one connected platform. It cut accounting errors 64% and task time 34%. A 0-to-1 product design case study by Surbhi Hote, Lead Product Designer.",
          },
          { name: "twitter:image", content: ogImage },
        ],

        links: [{ rel: "canonical", href: solaceUrl }],
        scripts: [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              name: "Tech Pack Tool — PLM UX Case Study",
              description:
                "A lean UX case study on designing a tech pack editor for a fashion PLM platform, moving scattered Excel-based workflows into one connected system.",
              url: solaceUrl,
              image: ogImage,
              datePublished: "2026-08-07",
              author: {
                "@type": "Person",
                name: "Surbhi Hote",
                jobTitle: "Product Designer",
                url: "https://surbhihote.com",
                sameAs: ["https://www.linkedin.com/in/surbhihote/"],
              },
              about: [
                "UX strategy",
                "Product design",
                "Product lifecycle management",
                "Fashion technology",
                "Lean UX",
              ],
              keywords:
                "tech pack tool, PLM UX case study, fashion tech design, UX strategy, lean UX",
            }),
          },
        ],
      };
    }
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
        <p className="text-muted-foreground mb-6">{error instanceof Error ? error.message : String(error)}</p>
        <button onClick={reset} className="border-b border-foreground/40 hover:border-foreground">Try again</button>
      </div>
    </SiteLayout>
  ),
  component: CaseStudyPage,
});

const topOutcomeSlugs = new Set<CaseStudy["slug"]>(["affiliate-platform-redesign", "fjord", "solace", "atlas", "atlas2"]);

/* The three studies the homepage links as cards wear the frosted disc exactly
   where the card puts it. The card measures its circle off the mockup's own box
   — that box's height sets the diameter, its edges set the anchor — so the
   banner does the same with the cover picture's box:
     · Affiliate (banner): 117.7% of the picture's height, its centre 29% across
       and halfway down, overhanging the screenshot's top, bottom and left —
       the circle's placement and sizing from Surbhi's reference mockup,
       measured off the mockup itself.
     · Notifications: 77.2%, its centre 45.5% across and 59% down, then nudged a
       fixed 15px right and 5px down — a touch left of the phone and dropped
       below its middle.
     · Tech Pack: 101.2%, horizontally centred behind the monitor and lifted
       25px, balancing the visible upper arc with the monitor's full width.
   Percentages of that box, so the placement holds at every width. */
const cardDiscSlugs = new Set<CaseStudy["slug"]>([
  "solace",
  "atlas",
  "affiliate-platform-redesign",
]);

const coverDiscStyle = (slug: CaseStudy["slug"]): CSSProperties =>
  slug === "affiliate-platform-redesign"
    ? { left: "29.4%", top: "50%", transform: "translate(-50%, -50%) scale(1.1765)" }
    : slug === "atlas"
      ? { left: "calc(45.5% + 15px)", top: "calc(59% + 5px)", transform: "translate(-50%, -50%) scale(0.772)" }
      : slug === "solace"
        ? {
            left: "50%",
             top: "-25px",
            transform: "translate(-50%, 0) scale(1.01205262)",
            transformOrigin: "top center",
          }
        : { left: "50%", top: "50%", transform: "translate(-50%, -50%)" };

/* The least vertical room the disc needs: its overhang past the picture's own
   box (a fixed 25px above for Tech Pack; none for the other two) plus a small
   pad for the shadow's reach, so the curve is never sliced flat at the
   stage's edge — and no more room than that, keeping the banner tight. */
const coverPad = (slug: CaseStudy["slug"]) =>
  slug === "solace"
    ? "pt-[36px] pb-[14px]"
    : slug === "atlas"
      ? "pt-[8px] pb-[18px]"
      : slug === "affiliate-platform-redesign"
        ? /* The disc overhangs the picture by ~8.8% of its height (3.55% of the
             stage's width, since % padding resolves against width), so the
             stage pads just past that overhang — the shadow's reach below on
             top of it. No arc or shadow sliced, no dead air above. */
          "pt-[calc(3.55%+4px)] pb-[calc(3.55%+26px)]"
        : "pt-[8px] pb-[12px]";

/* The cover picture's own box — the frame both circles are measured off. The
   circle layer wears the same width class as the picture, so the two boxes line
   up exactly and the card's percentages mean the same thing here as there. */
const coverWidth = (slug: CaseStudy["slug"]) =>
  slug === "atlas" || slug === "atlas2"
    ? "w-[35%]"
    : slug === "affiliate-platform-redesign"
      ? "w-[72%]"
      : slug === "solace"
        ? /* 20% larger than the original 78% cover width. */
          "w-[94%]"
        : "w-full";

/* The banner picture's own corner curve, and the drop it casts: the site's 8px
   corner curve sits on the picture, the shadow on the wrapper — the wrapper
   clips the picture, so a shadow drawn by the picture would be clipped away
   with it. Only the Affiliate banner wears them for now. */
const coverImageStyle = (slug: CaseStudy["slug"]): CSSProperties =>
  slug === "affiliate-platform-redesign" ? { borderRadius: 8 } : {};

const coverPictureStyle = (slug: CaseStudy["slug"]): CSSProperties =>
  slug === "affiliate-platform-redesign"
    ? /* Grey drop, half the previous blur (40px -> 20px). */
      { boxShadow: "0 18px 20px -18px color-mix(in srgb, var(--foreground) 30%, transparent)", border: "0.5px solid color-mix(in srgb, var(--foreground) 12%, transparent)" }
    : {};

function OutcomeMetrics({ c }: { c: CaseStudy }) {
  void c;
  /* "The outcome" band — intro block on the left (eyebrow, serif line and a
     jump link to the testing section that holds the numbers), then three
     stats parted by thin vertical rules, each with a bold label and a quiet
     sub-label. Stats stack with top rules on narrow screens. */
  const stats = [
    { value: "64%", label: "Calculation mistakes", sub: "Connected material & cost data" },
    { value: "34%", label: "Time on task", sub: "Reuse instead of re-entry" },
    { value: "27%", label: "Workflow errors", sub: "Standardized, versioned handoffs" },
  ];
  return (
    <section id="impact" className="mx-auto max-w-[1080px] px-6 md:px-10 pt-0 pb-[100px] scroll-mt-24">
      <div className="grid gap-10 md:grid-cols-[1.35fr_1fr_1fr_1fr] md:gap-0">
        <div className="md:pr-10">
          <p className="eyebrow mb-4">The outcome</p>
          <h3 className="font-serif text-4xl md:text-5xl font-normal mb-6 whitespace-pre-line">{"Less rework.\nMore making."}</h3>
          <a
            href="#testing"
            className="inline-flex items-center gap-1 text-accent hover:underline"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("testing");
              if (el) {
                history.replaceState(null, "", "#testing");
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            How this was measured <span aria-hidden="true">↗</span>
          </a>
        </div>
        {stats.map((s) => (
          <div key={s.label} className="border-t border-border pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-10">
            <p className="display text-4xl md:text-5xl text-accent mb-3 whitespace-nowrap">
              {s.value}<span className="text-[70%] ml-1">↓</span>
            </p>
            <p className="font-semibold text-foreground mb-1">{s.label}</p>
            <p className="text-sm text-muted-foreground">{s.sub}</p>
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

  /* The banner picture, shared by both cover layouts in the section below. The
     width class sits on the wrapper rather than the picture, so the wrapper's
     own box is exactly the picture's box — and that box is the frame the cover
     circles are measured off, the same frame the homepage card measures its
     circle off. */
  const coverPicture = (
    <div className={`cover-picture relative z-10 mx-auto overflow-hidden ${c.slug === "affiliate-platform-redesign" ? "rounded-[8px]" : "rounded-sm"} ${coverWidth(c.slug)}`} style={coverPictureStyle(c.slug)}>
      <img key={c.slug} src={c.cover} alt={c.title} width={1400} height={1000} style={coverImageStyle(c.slug)} className="block h-auto w-full" />
    </div>
  );

  return (
    <SiteLayout>
      <div
        className={`solace2-page study-shell [&_img]:cursor-zoom-in ${(c.slug === "fjord" || c.slug === "affiliate-platform-redesign") ? "study-fjord-bg" : ""} ${(c.slug === "solace" || c.slug === "atlas") ? "study-neutral-img-bg" : ""}`}
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
        <CaseStudySideNav slug="solace2" />


      {/* Hero — title block on the left (back arrow + tagline row, title, then
          the "See the solution" button), cover mockup on the right, both in the
          same row on desktop; they stack title-first on narrow screens. 30px of
          air sits above the row. */}
      <section className="relative mx-auto max-w-[1080px] px-6 md:px-10 pb-16">
        {/* Tagline row — spans the full line width, the back arrow at its left
            and the keyword tags spread edge to edge across the rest. */}
        <div className="flex items-center gap-4 mt-[30px] mb-8">
          <Link
            to="/"
            hash="case-studies"
            aria-label="Back to portfolio"
            className="inline-flex shrink-0 items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
          </Link>
          <span className="eyebrow">{c.tags.join(" · ")}</span>
        </div>
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-12">
          <div className="md:w-[42%] md:shrink-0">
            <h1 className="font-serif text-4xl mb-6 md:text-5xl font-normal whitespace-pre-line">{c.title}</h1>
            <p className="text-lg leading-relaxed text-foreground/85 mb-8">
              One material change meant updating multiple documents. I brought design, materials, and costing into one connected workflow so teams could get back to making clothes.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link
                to="."
                hash="final-designs"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("final-designs");
                  if (el) {
                    history.replaceState(null, "", "#final-designs");
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
              >
                See the solution
              </Link>
            </Button>
          </div>

          {/* Cover — the same frosted disc and hollow ring that sit behind each
              mockup on the homepage case-study cards, measured off the cover
              picture's own box so the disc keeps the card's anchor and diameter
              at every width. */}
          <div className="md:flex-1 md:min-w-0">
            {cardDiscSlugs.has(c.slug) ? (
              <div className={`relative overflow-hidden ${coverPad(c.slug)}`}>
                <div className="relative">
                  <div aria-hidden="true" className={`pointer-events-none absolute inset-0 z-0 mx-auto ${coverWidth(c.slug)}`}>
                    <div className="study-glass-ring absolute aspect-square h-full" style={coverDiscStyle(c.slug)} />
                    <div className={`study-glass-disc absolute aspect-square h-full overflow-hidden${c.slug === "solace" ? " study-glass-disc--inner" : ""}`} style={coverDiscStyle(c.slug)} />
                  </div>
                  {coverPicture}
                </div>
              </div>
            ) : (
              <div className="relative overflow-hidden py-[9%]">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="study-glass-ring absolute left-1/2 top-1/2 aspect-square h-full -translate-x-1/2 -translate-y-1/2" />
                  <div className="study-glass-disc absolute left-1/2 top-1/2 aspect-square h-full overflow-hidden -translate-x-1/2 -translate-y-1/2" />
                </div>
                {coverPicture}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Subtitle — sits below the banner, centred. */}
      <section className="mx-auto max-w-[1080px] px-6 md:px-10 pb-10">
        <p className="h3 max-w-4xl mx-auto text-center text-foreground/85">
          {c.subtitle}
        </p>
      </section>

      {/* Outcome for case studies 02-04 */}
      {topOutcomeSlugs.has(c.slug) && <OutcomeMetrics c={c} />}

      {/* Meta grid — four facts on the first row; Tools and Tasks Performed
          drop to a second row, each stretching across two columns. */}
      <section className="mx-auto max-w-[1080px] px-6 md:px-10 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-8">
          {[
            { k: "My Role", v: "Founding & sole UI/UX designer" },
            { k: "Scope", v: "0 → 1 capability · Web · B2B SaaS" },
            { k: "Timeframe", v: "2 months · overlapping design & build" },
            { k: "Partners", v: "Product, Engineering & QA" },
          ].map((m) => (
            <div key={m.k}>
              <p className="eyebrow mb-2 font-bold">{m.k}</p>
              <p className="text-base leading-relaxed text-foreground/85">{m.v}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          {[
            { k: "Tools", v: c.tools },
            { k: "Tasks Performed", v: c.tasksPerformed },
          ].map((m) => (
            <div key={m.k} className="md:col-span-2">
              <p className="eyebrow mb-2 font-bold">{m.k}</p>
              <p className="text-base leading-relaxed text-foreground/85">{m.v}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>

      {/* Overview + Goal */}
      <section id="overview" className={`mx-auto max-w-[1080px] px-6 md:px-10 pt-16 scroll-mt-24 ${c.slug === "affiliate-platform-redesign" ? "pb-20" : (c.slug === "atlas" || c.slug === "atlas2") ? "pb-0" : "pb-24"}`}>

        <div className={c.slug === "affiliate-platform-redesign" ? "" : "space-y-16"}>
          <div>
            <h2 className={`font-serif text-4xl md:text-5xl font-normal ${c.slug === "affiliate-platform-redesign" ? "mb-[35px]" : "mb-8"}`}>{c.slug === "solace2" ? "The Problem" : (c.slug === "fjord" || c.slug === "affiliate-platform-redesign" || c.slug === "solace" || c.slug === "atlas" || c.slug === "atlas2") ? "Overview" : "Context"}</h2>
            {(c.slug === "fjord" || c.slug === "affiliate-platform-redesign" || c.slug === "solace" || c.slug === "atlas" || c.slug === "atlas2") && (
              <h3 className="font-serif text-2xl md:text-3xl font-medium mb-6">Context</h3>
            )}
            {c.slug !== "affiliate-platform-redesign" && (

              <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
                {c.slug === "solace" 
                  ? "The GRID is end-to-end supply chain visibility from product conception to distribution with real-time updates and analytics on sourcing, product development, production, and shipping. For companies running their supply chain on Excel sheets and point solutions, the GRID functions as the ERP and as an intuitive supply chain productivity layer. For companies that have legacy PIMs and ERPs, the GRID integrates to connect people, data, and workflows. In either role, the GRID delivers quick time to value by eliminating errors and digitizing manual processes thereby reducing OpEx and COGS and improving margins." 
                  : c.overview}
              </p>
            )}
          </div>
          {c.slug === "affiliate-platform-redesign" && (
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line mb-8">
                {`Ampersand is a multiscreen advanced TV advertising company empowering brands to reach audiences with precision at scale.Ampersand is jointly owned by the largest cable operators in the US which are Comcast, COX, Charter.The cross-screen, data-driven solutions, powered by America’s largest TV inventory and largest set of data viewership insights, are revolutionizing TV planning, buying and measurement. There are three lines of business National, Markets and Addressable.`}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-medium mb-6">Introduction</h3>
              <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line mb-0">
                {`The portal was `}<strong className="font-bold italic">25</strong>{` years old, used by\u00a0`}
                <strong className="font-bold italic">1000+</strong>{` affiliates who depend on it daily which gets the annual revenue is `}
                <strong className="font-bold italic">$550 Million</strong>{` and\u00a0`}
                <strong className="font-bold italic">1 Billion Dollars</strong>{` During political years.The codebase was frozen, no fix could ship without a full rebuild.Over the years, workarounds had hardened into the way affiliates worked.The goal is to\u00a0rebuild a business-critical tool without disrupting a single day of their work in the transition.
Affiliates - the partner networks who buy and transact against that inventory run their daily business through Ampersand's online portal: pulling rate cards, placing orders, and tracking yield.\u00a0`}
              </p>
            </div>
          )}
          {c.slug === "atlas" && (
            <div>
              <h2 className="font-serif text-3xl mb-6 font-medium">The Problem</h2>
              <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
                {`Throughout the product lifecycle process there are different types of notifications received by clients and the staff handling the project\u00a0 via email, push notification, or text message. Currently there is no way to manage the different types of notifications clients and staff receive, as users may or may not want to receive certain notifications`}
              </p>
              {/* The three problem points as Design Principle cards: the same
                  peach surface, amber drop and rounded-xl, bold heading over body. */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 mb-[10px]">
                {[
                  "Users getting so many spam notifications",
                  "Important notifications for their job getting lost resulting into delays and missed deadlines",
                  "Users need only selective set of notifications which are important for their job responsibilities",
                ].map((point, idx) => (
                  <div
                    key={point}
                    className="study-peach relative rounded-xl text-card-foreground shadow-amber-band p-6 overflow-hidden"
                  >
                    <div className="relative z-10 flex items-baseline gap-3">
                      <h4 className="font-bold leading-none tracking-tight text-lg shrink-0">
                        {idx + 1}
                      </h4>
                      <p className="text-sm text-card-foreground">{point}</p>
                    </div>
                  </div>
                ))}
              </div>
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
          {/* Problem and Goal blocks removed from the Overview section on this
              copy page; the Goal text lives in the Challenge section below. */}
          {c.slug === "atlas" && (
            <div>
              <h2 className="font-serif text-3xl mb-4 font-medium">Goal</h2>
              <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
                {(c.opportunity ?? c.goal).split("\n")[0]}
              </p>
              {/* The numbered goal points as Design Principle cards: the same
                  peach surface, amber drop and rounded-xl, bold heading over body. */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 mb-[10px]">
                {(c.opportunity ?? c.goal)
                  .split("\n")
                  .slice(1)
                  .map((line) => line.replace(/^\s*\u00a0*\d+\.\s*/, "").trim())
                  .filter(Boolean)
                  .map((point, idx) => (
                    <div
                      key={point}
                      className="study-peach relative rounded-xl text-card-foreground shadow-amber-band p-6 overflow-hidden"
                    >
                      <div className="relative z-10 flex items-baseline gap-3">
                        <h4 className="font-bold leading-none tracking-tight text-lg shrink-0">
                          {idx + 1}
                        </h4>
                        <p className="text-sm text-card-foreground">{point}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
          {/* This route only serves the solace2 copy; the loader forces
              c.slug to "solace", so this section renders unconditionally. */}
          {true && (
            <div id="the-problem" className="scroll-mt-24">
              <p className="eyebrow mb-6">01 / The Challenge</p>
              <h3 className="h3 max-w-2xl mb-12">
                A small change could create a lot of expensive rework.
              </h3>
              <div className="grid gap-10 md:grid-cols-2 md:gap-16">
                <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
                  <p>
                    Fashion designers and product development managers were piecing together tech packs from Excel sheets, PDFs, and email. A tech pack is the set of instructions a factory needs to manufacture a garment.
                  </p>
                  <p>
                    When a style or material changed, the team had to update several files, recalculate costs, and send the latest documents to the factory. Outdated versions meant miscommunication, accounting errors, and production delays.
                  </p>
                  <div className="space-y-[30px]">
                    <p>
                      <strong className="font-bold text-foreground">The Challenge:</strong> connect pre-production to production inside GRID, while designing and delivering the capability in eight weeks.
                    </p>
                    <p>
                      <strong className="font-bold text-foreground">The Goal:</strong> Create a system for all the files, documents and costing involved in the process and a standardized workflow where users don't have to add data manually and also eliminate the human error part for adding costs of materials, trims etc.{"\u00a0"}
                    </p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-sm bg-band text-band-foreground border border-band-foreground/12 px-6 py-10 md:px-12 md:py-12">
                  <div className="study-band-glass" />
                  <Carousel opts={{ align: "start" }} className="relative z-10 w-full">
                    <CarouselContent>
                      <CarouselItem>
                        <div className="space-y-12">
                          <figure>
                            <span className="font-serif text-5xl leading-none" style={{ color: "#ffa348" }} aria-hidden="true">&ldquo;</span>
                            <blockquote className="font-serif text-2xl md:text-3xl leading-snug mt-4">
                              If there is any change in the style details or material we have to make the change in all the documents/files related to it.
                            </blockquote>
                            <figcaption className="mt-6 text-sm text-band-foreground/60">
                              Fashion Designer · User interview
                            </figcaption>
                          </figure>
                          <figure>
                            <blockquote className="font-serif text-2xl md:text-3xl leading-snug">
                              It&rsquo;s difficult to put together all the details about the style in one place as different detail are in different files.
                            </blockquote>
                            <figcaption className="mt-6 text-sm text-band-foreground/60">
                              Technical Designer · User interview
                            </figcaption>
                          </figure>
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="space-y-12">
                          <figure>
                            <span className="font-serif text-5xl leading-none" style={{ color: "#ffa348" }} aria-hidden="true">&ldquo;</span>
                            <blockquote className="font-serif text-2xl md:text-3xl leading-snug mt-4">
                              Every time there are changes we have to keep factories updated with that and provide them the updated project related files.
                            </blockquote>
                            <figcaption className="mt-6 text-sm text-band-foreground/60">
                              Product Development Manager · User interview
                            </figcaption>
                          </figure>
                          <figure>
                            <blockquote className="font-serif text-2xl md:text-3xl leading-snug">
                              We have to search the material, trims and labels information and pricing and then add their price manually to the document/files.
                            </blockquote>
                            <figcaption className="mt-6 text-sm text-band-foreground/60">
                              Product Development Manager · User interview
                            </figcaption>
                          </figure>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselDots className="mt-10 [&_button]:bg-band-foreground/40 [&_button:hover]:bg-band-foreground/70" />
                  </Carousel>
                </div>
              </div>
            </div>
          )}
          {/* Before/After workflow bands (solace2 copy only): below the
              Challenge section, same peach band treatment as Current workflow. */}
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-foreground/20 px-6 py-5">
              <h4 className="h4">Before</h4>
              <p className="statement-line mt-3 text-left">
                {"Find scattered files → Re-enter & calculate → Email & repeat"}
              </p>
              <p className="mt-2 text-left text-sm text-foreground/60">
                Repeated work at every change
              </p>
            </div>
            <div className="rounded-xl border border-foreground/20 px-6 py-5">
              <h4 className="h4">After</h4>
              <p className="statement-line mt-3 text-left">
                {"Reuse library data → Connect design & costs → Share a version"}
              </p>
              <p className="mt-2 text-left text-sm text-foreground/60">
                One coordinated workflow
              </p>
            </div>
          </div>
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
        <h2 className="h2 mb-8">Research</h2>
        {c.slug === "solace" && (
          <div className="mb-16">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-foreground/15 p-8 md:p-10">
                <p className="text-sm tracking-wide text-foreground/60 mb-4">Stakeholder interview</p>
                <h3 className="h3 mb-4">Head of Product Development</h3>
                <p className="text-lg leading-relaxed text-foreground/70 mb-8">Clarified the problem we were trying to solve.</p>
                <div className="rounded-xl border border-[#ffa348] dark:border-foreground/25 p-6">
                  <p className="text-sm font-medium text-foreground/60 mb-2">The problem</p>
                  <p className="text-lg leading-relaxed text-foreground/85">PLM has many phases and stages. Product Development Managers struggled to manage product files and data, and used multiple tools to talk to the factory and the client every time a product changed.</p>
                </div>
              </div>
              <div className="rounded-2xl border border-foreground/15 p-8 md:p-10">
                <p className="text-sm tracking-wide text-foreground/60 mb-4">User interviews</p>
                <p className="h3 mb-6"><span className="text-5xl md:text-6xl text-foreground/60 align-middle">5</span> users interviewed</p>
                <p className="text-lg leading-relaxed text-foreground/70 mb-4"><strong className="text-foreground">Who:</strong> Textile Product Designers and Product Development Managers, who create styles from client requirements</p>
                <p className="text-lg leading-relaxed text-foreground/70 mb-4"><strong className="text-foreground">Method:</strong> guerrilla, in-context desk interviews</p>
                <p className="text-lg leading-relaxed text-foreground/70"><strong className="text-foreground">Why this method:</strong> the team was moving fast. Five users gave enough signal to direct design without stalling the sprint.</p>
              </div>
            </div>
            <div className="rounded-2xl border border-[#ffa348] dark:border-foreground/25 p-8 md:p-10 mt-6">
              <p className="text-sm tracking-wide text-foreground/60 mb-8">Questions targeted at the functionality we planned to build</p>
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  { q: "What", a: "problems are users facing?" },
                  { q: "Why", a: "do those problems happen?" },
                  { q: "How", a: "can the tool solve them?" },
                ].map((item) => (
                  <div key={item.q}>
                    <div className="border-t-2 border-foreground/25 mb-4" />
                    <p className="text-lg leading-relaxed font-semibold text-foreground/60">{item.q}</p>
                    <p className="text-lg leading-relaxed font-semibold text-foreground">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="space-y-12">
          {c.slug === "atlas" && (
            <div className="mb-12">
              <h3 className="font-serif text-3xl mb-4 font-medium text-foreground/85">
                Product Requirement Document
              </h3>
              <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
                After I received the PRD from the product team and getting a walkthrough of PRD from product for the kickstart the design process. Other than the painpoints which I already knew, Product team had additional thing which was notifications template to create at entity level for all its user types.

As Grid mobile app does not have all the functionalities as the web version; in this feature the ability of entity to create notification template for the user type is excluded for the mobile version. But, users can see and edit the template of the user type they are assigned. The mobile designs will be both for Android and iOS version of the application.
              </p>
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



        {/* User Journey — Notifications Management only, mirroring the Tech Pack
            Tool journey table: same shared-Table structure,
            the flat peach highlight on the Opportunity row. */}
        {c.slug === "atlas" && (
          <div className="mt-16">
            <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal">User Journey</h3>
            <div className="journey-table">
              <Table className="min-w-[820px]">
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="w-[140px] text-foreground font-semibold">{"\u00a0"}</TableHead>
                    {["Receive", "Find", "Decide", "Act", "Follow up"].map((stage) => (
                      <TableHead key={stage} className="text-foreground font-semibold">
                        {stage}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(
                    [
                      {
                        label: "Goal",
                        cells: [
                          "Stay informed",
                          "Find relevant alert",
                          "Identify priority",
                          "Take action",
                          "Track progress",
                        ],
                      },
                      {
                        label: "Action",
                        cells: [
                          "Receive many notifications",
                          "Scroll/search",
                          "Determine importance",
                          "Open product/task",
                          "Monitor next steps",
                        ],
                      },
                      {
                        label: "Pain",
                        cells: [
                          "Notification overload",
                          "Important alerts buried",
                          "No prioritization",
                          "Missed alerts",
                          "Repeated checking",
                        ],
                      },
                      {
                        label: "Emotion",
                        cells: [
                          "Mildly Frustrated",
                          "Frustrated",
                          "Uncertain",
                          "Exhausted",
                          "Neutral /Unimpressed",
                        ],
                        tones: [
                          "bg-emotion-amber",
                          "bg-emotion-orange",
                          "bg-emotion-yellow",
                          "bg-emotion-crimson",
                          "bg-emotion-lime",
                        ],
                      },
                      {
                        label: "Opportunity",
                        strong: true,
                        cells: [
                          "Filter",
                          "Organize",
                          "Prioritize",
                          "Control",
                          "Personalize",
                        ],
                      },
                    ] as { label: string; cells: string[]; strong?: boolean; tones?: string[] }[]
                  ).map((row) => {
                    // The highlighted row wears the same flat peach as the cards
                    // and banners, with the site's amber drop and no outline.
                    return (
                      <TableRow
                        key={row.label}
                        className={
                          row.strong
                            ? "study-peach"
                            : "hover:bg-table-hover"
                        }
                      >
                        <TableHead
                          className={cn(
                            "text-foreground font-semibold whitespace-pre-line",
                            row.strong && "shadow-amber-band",
                          )}
                        >
                          {row.label}
                        </TableHead>
                        {row.cells.map((cell, i) => (
                          <TableCell
                            key={i}
                            className={cn(
                              "text-foreground/90",
                              row.strong && "font-semibold shadow-amber-band",
                            )}

                          >
                            {row.tones ? (
                              <span className="inline-flex items-center gap-2">
                                <span
                                  aria-hidden
                                  className={cn(
                                    "inline-block h-[11px] w-[11px] shrink-0 rounded-full",
                                    row.tones[i],
                                  )}
                                />
                                {cell}
                              </span>
                            ) : (
                              cell
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>

            {/* Design opportunity — the same flat peach surface the Notifications
                flow band wears, with the site's amber drop. */}
            <div className="mt-8">
              <h4 className="h4">Design opportunity</h4>
              <div className="study-peach relative mt-3 max-w-full overflow-hidden rounded-xl text-card-foreground shadow-amber-band px-6 py-5">
                <div className="statement-line relative z-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-card-foreground">
                  {[
                    "Right notification",
                    "Right user",
                    "Right level",
                    "Right channel",
                  ].map((step, i) => (
                    <span key={step} className="flex items-center gap-x-3">
                      {i > 0 && (
                        <span aria-hidden className="text-muted-foreground">
                          →
                        </span>
                      )}
                      <span>{step}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Notifications Management: no rule below the Design opportunity pill. */}
        {c.slug === "atlas2" && (
          <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>
        )}

        {/* Survey */}
        {c.slug === "solace" && (
          <div className="mt-16">
            <h3 className="font-serif text-3xl md:text-4xl mb-6 font-normal">Survey</h3>
            <p className="text-lg leading-relaxed text-foreground/85 mb-6">
              I ran a short survey with fashion designers and product developers to understand how they currently build and manage tech packs. The survey informed the decision to develop this feature as part of the UX Strategy. The responses clarified the biggest pain points, the tools in use, and where a dedicated platform could save the most time.
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
            <h3 className="h2 mb-3">Personas across the product lifecycle</h3>
            <p className="text-lg leading-relaxed text-foreground/70 mb-10">Four role-based profiles, with different responsibilities in the same workflow</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12 mb-10">
              {[
                {
                  role: "Coordinate",
                  name: "Product Development Manager",
                  goals: [
                    "Manage end-to-end product lifecycle from design to production",
                    "Coordinate between design, client, and manufacturing teams",
                    "Track changes and maintain version control across all documents",
                  ],
                },
                {
                  role: "Create",
                  name: "Technical / Fashion Designer\u200b",
                  goals: [
                    "Create detailed sketches and CAD designs efficiently",
                    "Organize materials, trims, and labels in one place",
                    "Communicate design changes to stakeholders seamlessly",
                  ],
                },
                {
                  role: "Review",
                  name: "Client\u00a0",
                  goals: [
                    "Review and approve designs and techpacks in real time",
                    "Request changes and provide feedback directly on documents",
                    "Stay informed about production progress and updates",
                  ],
                },
                {
                  role: "Manufacture",
                  name: "Manufacturing Factory User",
                  goals: [
                    "Receive complete and accurate techpacks for production",
                    "Access BOMs, material specs, and design details easily",
                    "Clarify requirements and communicate back to the brand",
                  ],
                },
              ].map((persona) => (
                <div key={persona.name} className="border-t border-foreground/15 pt-6">
                  <p className="eyebrow mb-3">{persona.role}</p>
                  <h4 className="font-serif text-2xl md:text-3xl font-normal mb-5 whitespace-pre-line">
                    {persona.name}
                  </h4>
                  <ul className="list-disc list-inside text-[15px] leading-relaxed text-foreground/80 space-y-2.5">
                    {persona.goals.map((goal, idx) => (
                      <li key={idx}>{goal}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
        {c.slug === "solace" && (
          <div className="mt-16">
            <h3 className="font-serif text-2xl md:text-3xl mb-3 font-normal">User Journey</h3>
            <p className="flex flex-wrap items-baseline gap-x-8 gap-y-1 mb-6 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{"\n"}</span>
              <span>{"\n"}</span>
            </p>
            <div className="mb-8">
              <h4 className="h4">{"Current workflow"}</h4>
              <div className="study-peach relative mt-3 max-w-full overflow-hidden rounded-xl text-card-foreground shadow-amber-band px-6 py-5">
                <p className="statement-line relative z-10 text-center text-card-foreground">
                  {"Scattered information → Manual work → Repeated updates → Version confusion Product"}
                </p>
              </div>
              <h4 className="h4 mt-[80px]">{"Development Manager / Technical Fashion Designer"}</h4>
              <p className="mt-3 text-lg leading-relaxed text-foreground/85">
                {"From scattered product information to a production-ready Tech Pack"}
              </p>
            </div>
            <div className="journey-table">
              <Table className="min-w-[820px]">
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="w-[140px] text-foreground font-semibold">{"\u00a0"}</TableHead>
                    {["Gather", "Build", "Cost", "Review", "Share", "Update"].map((stage) => (
                      <TableHead key={stage} className="text-foreground font-semibold">
                        {stage}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(
                    [
                      {
                        label: "Goal",
                        cells: [
                          "Find product details",
                          "Create Tech Pack",
                          "Add BOM + costs",
                          "Align stakeholders",
                          "Send to factory",
                          "Manage changes",
                        ],
                      },
                      {
                        label: "Pain",
                        cells: [
                          "Scattered data",
                          "Duplicate work",
                          "Errors + rework",
                          "Communication gaps",
                          "Version confusion",
                          "Repeated updates",
                        ],
                      },
                      {
                        label: "Emotion",
                        cells: [
                          "Overwhelmed",
                          "Frustrated",
                          "Drained",
                          "Uncertain",
                          "Relieved",
                          "Exhausted",
                        ],
                        tones: [
                          "bg-emotion-amber",
                          "bg-emotion-orange",
                          "bg-emotion-vermilion",
                          "bg-emotion-yellow",
                          "bg-emotion-green",
                          "bg-emotion-crimson",
                        ],
                      },
                      {
                        label: "Opportunity",
                        strong: true,
                        cells: [
                          "Centralize",
                          "Connect",
                          "Automate",
                          "Collaborate",
                          "Standardize",
                          "Version",
                        ],
                      },
                    ] as { label: string; cells: string[]; strong?: boolean; tones?: string[] }[]
                  ).map((row) => {
                    // The highlighted row wears the same flat peach as the cards
                    // and banners, with the site's amber drop and no outline.
                    return (
                      <TableRow
                        key={row.label}
                        className={
                          row.strong
                            ? "study-peach"
                            : "hover:bg-table-hover"
                        }
                      >
                        <TableHead
                          className={cn(
                            "text-foreground font-semibold whitespace-pre-line",
                            row.strong && "shadow-amber-band",
                          )}
                        >
                          {row.label}
                        </TableHead>
                        {row.cells.map((cell, i) => (
                          <TableCell
                            key={i}
                            className={cn(
                              "text-foreground/90",
                              row.strong && "font-semibold shadow-amber-band",
                            )}

                          >
                            {row.tones ? (
                              <span className="inline-flex items-center gap-2">
                                <span
                                  aria-hidden
                                  className={cn(
                                    "inline-block h-[11px] w-[11px] shrink-0 rounded-full",
                                    row.tones[i],
                                  )}
                                />
                                {cell}
                              </span>
                            ) : (
                              cell
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
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
      <section id={c.slug === "affiliate-platform-redesign" ? "workshop" : "strategy"} className="mx-auto max-w-[1080px] px-6 md:px-10 py-24 scroll-mt-24" style={{ display: (c.slug === "atlas" || c.slug === "atlas2" || c.slug === "fjord") ? "none" : undefined }}>
        <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">{c.strategySectionTitle || ((c.slug === "atlas" || c.slug === "atlas2") ? "\n" : "Strategy")}</h2>
        {(c.slug !== "atlas" && c.slug !== "atlas2") && (
          <h3 className="font-serif text-3xl mb-6 font-medium">{c.slug === "solace" ? "Vision" : (c.strategySectionSubtitle || "Product + Design Strategy")}</h3>
        )}

        {(c.slug !== "atlas" && c.slug !== "atlas2") && (
          <p className="text-lg leading-relaxed text-foreground/85 mb-8 whitespace-pre-line">
            {c.slug === "affiliate-platform-redesign" 
              ? "This workshop was not a typical design thinking workshop. It was customized based on the project and the available information to make the most of the one and a half days we had.\nI designed and facilitated a 1.5-day workshop with 2 stakeholders and leadership, product, and engineering. Deliberately front-loading the survey data so we prioritized from evidence, not opinion.\u00a0"
              : (c.slug === "solace" ? "Building an efficient and automated PLM ecosystem that reduces operational expenses, builds standardized workflows, and improves margins.\n" : "This workshop was not a typical design thinking workshop. It was customized based on the project and the available information to make the most of the one and a half days we had. I made sure to schedule the survey beforehand so we had the survey data before we conducted the workshop, and also made sure we had all the supplies needed for the workshop.")
            }
          </p>
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
                    <TableRow className="border-b border-foreground/10 hover:bg-table-hover">
                      <TableCell className="text-foreground/90">Stop hunting for details across scattered files.</TableCell>
                      <TableCell className="text-foreground/90">Reduce rework and manual error/data entry</TableCell>
                      <TableCell className="text-foreground/90">Lower accounting errors, automation</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-foreground/10 hover:bg-table-hover">
                      <TableCell className="text-foreground/90">Change something once, not in ten documents.</TableCell>
                      <TableCell className="text-foreground/90">Cut cycle time.</TableCell>
                      <TableCell className="text-foreground/90">Reduced time on task,{"\n"}automation</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-foreground/10 hover:bg-table-hover">
                      <TableCell className="text-foreground/90">Keep clients/factories current in real time.</TableCell>
                      <TableCell className="text-foreground/90">Real-time collaboration, communication & updates</TableCell>
                      <TableCell className="text-foreground/90">Increased speed{"\n"}& workflow efficiency</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-foreground/10 hover:bg-table-hover">
                      <TableCell className="text-foreground/90">Repurpose & reuse existing designs (CAD, tech pack files)&nbsp;</TableCell>
                      <TableCell className="text-foreground/90">Reduce OpEx and time.</TableCell>
                      <TableCell className="text-foreground/90">Increased speed,{"\n"}reduced expenses&nbsp;</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-foreground/10 hover:bg-table-hover">
                      <TableCell className="text-foreground/90">Track all changes easily&nbsp;</TableCell>
                      <TableCell className="text-foreground/90">Provide transparency and traceability in PLM&nbsp;</TableCell>
                      <TableCell className="text-foreground/90">Trust, User satisfaction&nbsp;</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-foreground/10 hover:bg-table-hover">
                      <TableCell className="text-foreground/90">Share finalized product documents with factories and clients</TableCell>
                      <TableCell className="text-foreground/90">Standardize the process&nbsp;&nbsp;</TableCell>
                      <TableCell className="text-foreground/90">User satisfaction, Client retention{"\u00a0"}</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-foreground/10 hover:bg-table-hover">
                      <TableCell className="text-foreground/90">Modify CAD and tech pack files in the platform&nbsp;&nbsp;</TableCell>
                      <TableCell className="text-foreground/90">Users don't leave the platform, Differentiator from the competitors</TableCell>
                      <TableCell className="text-foreground/90">Time spent on the platform,{"\n"}retain & attract new clients{"\u00a0"}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
            <h4 className="font-serif text-2xl md:text-3xl mb-6 font-normal">Plan</h4>
            <div className="grid gap-10 md:grid-cols-3">
              <div>
                <p className="font-serif text-2xl md:text-3xl font-normal mb-4">Centralize</p>
                <p className="text-lg leading-relaxed text-foreground/85">
                  Bring CAD and tech pack files already attached to products into shared libraries. Add a materials and trims library so teams can reuse information without repeated data entry.
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl md:text-3xl font-normal mb-4">Connect</p>
                <p className="text-lg leading-relaxed text-foreground/85">
                  Link material and trim details to the bill of materials and cost sheet. Bring pre-production information into the editor so teams can prepare for production in one workflow.
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl md:text-3xl font-normal mb-4">Collaborate</p>
                <p className="text-lg leading-relaxed text-foreground/85">
                  Create a standardized document with designs, materials, and production instructions. Version revisions and use existing platform comments to support communication with clients and factories.
                </p>
              </div>
            </div>
            <div className="mt-14">
              <h4 className="font-serif text-2xl md:text-3xl mb-6 font-normal">A release plan shaped by dependencies</h4>
              <p className="text-lg leading-relaxed text-foreground/85">
                Design ran ahead of engineering. Each workstream was researched, designed, and reviewed to sign-off, then handed to development. While Engineering built one workstream, I designed the next. The eight weeks below are one pipeline, with design and build overlapping throughout.
              </p>
            </div>
            <div className="mt-12">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    id: "work-stream-1",
                    title: "CAD & Techpack Library",
                    pillar: "Centralize",
                    timing: "Week 1",
                    quickWin: "Yes",
                    objective:
                      "To bring all the CAD & Tech pack files used for products on the platform at one place so it can be reused and repurposed for other projects.",
                    why: "The foundation of this project is CAD & Tech Pack as they play a crucial part in garment manufacturing and data already being present on the platform was a logical first step to start with building libraries. The Tech pack Editor tool is dependent on the data of the library.",
                  },
                  {
                    id: "work-stream-2",
                    title: "Materials & Trims Library",
                    pillar: "Centralize",
                    timing: "Week 2nd",
                    quickWin: "Partially",
                    objective:
                      "Adding the details of the Material and trims from the catalog manually to the excel sheets and then uploading the document on the platform for the respective product.",
                    why: "As CAD & Tech pack libraries were ready, it just used the same UI structure for the Library just with the difference of details form. This completes the Centralization part which is the foundation of the whole project and the Bill of material part has dependency on this one as well as the Tech pack Editor tool.",
                  },
                  {
                    id: "work-stream-3",
                    title: "Bill of Materials",
                    pillar: "Connect",
                    timing: "Week 3rd",
                    quickWin: "No",
                    objective:
                      "Getting rid of manual calculations and data updates and the excel sheets, modifying any details needed to be updated and uploaded in the platform each time.",
                    why: "The Bill of Materials details comes from Material & Trims library so we have data to build the costsheet for a product.",
                  },
                  {
                    id: "work-stream-4",
                    title: "Tech Pack Editor Tool",
                    pillar: "Connect & Collaborate",
                    timing: "Week 4th to 7th",
                    quickWin: "No",
                    objective:
                      "Keeping users in the platform, Not having to gather multiple documents scattered around to get the product ready for the production.",
                    why: "This part/tool brings everything together, at this point all the information is available and the ability to create a standardized document for the factories.",
                  },
                  {
                    id: "work-stream-5",
                    title: "Standardized Document & Comments",
                    pillar: "Connect & Collaborate",
                    timing: "Week 8th",
                    quickWin: "No",
                    objective:
                      "Create a standardized production document with all the details required for the factories to manufacture which can be updated & shared. Adding communication layer for the document and the updation of document.",
                    why: "The last piece was taking all the information from CAD, Tech pack, Material and trims details, BOM and creating an output file using the techpack tool and version if there are any revisions to keep everyone updated files and the comments. Comments functionality existed on the platform, the communication part is needed around the standardized document part of the tool so it was enabled at this point.",
                  },
                ].map((ws) => (
                  <AccordionItem key={ws.id} value={ws.id}>
                    <AccordionTrigger className="text-lg leading-relaxed text-foreground/85 font-bold">{ws.title}</AccordionTrigger>
                    <AccordionContent>
                      <div className="overflow-hidden rounded-md border border-border">
                        <table className="w-full text-sm">
                          <tbody>
                            {[
                              ["Pillar", ws.pillar],
                              ["Timing", ws.timing],
                              ["Quick win?", ws.quickWin],
                              ["Objective", ws.objective],
                              ["Why now & Dependency", ws.why],
                            ].map(([label, value]) => (
                              <tr key={label} className="border-b border-border last:border-b-0 align-top">
                                <th className="w-1/3 md:w-1/4 bg-muted/40 text-left font-semibold text-foreground p-3 border-r border-border">
                                  {label}
                                </th>
                                <td className="p-3 text-foreground/80 leading-relaxed">{value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </>
        )}

        {c.strategy.productGoals.workshopAttendees?.trim() && c.strategy.productGoals.workshopSchedule?.trim() ? (
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
        ) : c.slug === "affiliate-platform-redesign" ? null : (
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



        {(c.slug === "affiliate-platform-redesign") && (
          <div className="contents">
            <div className="mt-[50px]">
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
                  <h3 className="font-serif text-3xl mb-6 font-normal flex items-center gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-azure/85"><KeyRound className="h-5 w-5 text-azure-foreground" aria-hidden="true" /></span>Problems to Opportunity</h3>
                  <div className="border-l border-[#0068FF] dark:border-primary/70 pl-8 md:pl-12 max-w-3xl mx-auto">
                    <blockquote className="text-[18px] leading-relaxed text-left whitespace-pre-line">
                      {"The codebase was too old, no fix could ship without a full rebuild. That constraint reframed the brief: this wasn't a UI refresh, it was a chance to rethink workflows that had calcified around a broken tool for 25 years.\n\nThe rebuild tackled 6 things at once:"}
                    </blockquote>
                  </div>
                  <AffiliateProblemsOpportunityCards />
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
                      dependency: 3,
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
                      dependency: 4,
                      goals: [
                        "Goal:\u00a0Gather intel across both Linear and Digital orders\nFrustration: Version comparison broken, Exports format\n",
                        "Tasks:\n1.\u00a0 New & historical linear & digital orders\u200b\n2. Calculate Total investment/total impressions\u200b\n3.\u00a0Coordinate with AMP Account Executives\u00a0on orders/markets\u200b orders\u00a0\n4. \u200bOrder admin reference\u00a0\u00a0\n\n",
                      ],
                    },
                  ].map((persona, idx) => (
                    <div
                      key={`${persona.name}-${idx}`}
                      className="relative rounded-xl border border-azure shadow overflow-hidden"
                    >
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

              <AiPanelSurvey />

                <div className="overflow-hidden rounded-sm bg-secondary p-2">
                  <img src={defineImg2.url} alt="Affiliate workshop must have vs nice to have sticky notes" className="w-full h-auto object-contain" />
              </div>
              <p className="text-lg leading-relaxed text-foreground/85 mt-8">
                AI helped in creating clusters based on the survey data it was evaluated by the team we made sure it was covering everything and added and merged few of them together. At the end we made sure we have all the important clusters for the redesigning of the website and divided them into 2 parts 'Must have' and 'Nice to have'.
              </p>
            </div>

            <div className="mt-16">
              <h3 className="font-serif text-4xl md:text-5xl mb-8 font-normal">Ideate</h3>
              <p className="text-lg leading-relaxed text-foreground/85 mb-8">
                The second day of the workshop started with sketching. To know what ideas stakeholders have in their mind for the redesign, how do they envision the website I asked them to turn their ideas into sketches and explain their sketches to get a sense of what they consider important for redesign and also to understand the design expectations.
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
                All the attendees were given an opportunity to vote , limited to 5 votes each to get to the actually important themes. After everyone voted, I took all the sticky notes with votes and arranged them in descending order.{"\u00a0\u00a0"}
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
              <h3 className="font-serif text-3xl mb-6 font-medium">Define Success Metrics{"\u00a0"}<br /></h3>
              <p className="text-lg leading-relaxed text-foreground/85 mb-8">
                {c.slug === "affiliate-platform-redesign"
                  ? "The final step was to define KPIs and how we would measure them. We converted themes into a prioritized, effort-vs-impact backlog and critically agreed on 5 success metrics before design started, so 'done' was defined up front."
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

      {/* Hairline above the Design section on every case study. */}
      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>

      {/* Initial Sketches */}
      <section id="design-process" className={`mx-auto max-w-[1080px] px-6 md:px-10 scroll-mt-24 ${c.slug === "solace" ? "pt-24 pb-0" : "py-24"}`}>
        <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">Design</h2>
      </section>

      {/* Design exploration tabs (solace2 copy only): paper sketches → clickable
          wireframes → detailed interface. Tab UI matches the "solution, in use"
          walkthrough below; amber #ffa348 underline on the active tab. */}
      <section id="design-exploration" className="mx-auto max-w-[1080px] px-6 md:px-10 pt-16 pb-0 scroll-mt-24">
        <h3 className="h3">The first version didn’t answer every question.</h3>
        <p className="mt-6 text-lg leading-relaxed text-foreground/70">
          I moved from sketches to clickable wireframes, reviewed them with users and the team, then refined the interface through testing.
        </p>
        <div className="mt-12">
          <Solace2DesignTabs onZoom={setZoomImg} />
        </div>
      </section>

      {(c.slug === "atlas" || c.slug === "atlas2") && (
        <section className="mx-auto max-w-[1080px] px-6 md:px-10 pb-20">
          <h3 className="font-serif text-3xl mb-6 font-medium">Review with Product & Engineering Team</h3>
          <ul className="list-disc list-outside pl-6 text-lg leading-relaxed text-foreground/85 space-y-4">
            <li>Reviewing the initial low fidelity clickable wireframes I presented them to the users to get their feedback on functionalities and the usability aspect of the design. After observing how they interact with the wireframe and getting feedback on the things which can be added I went for the second Iteration and again showed it to the users.</li>
            <li>Reviewing designs with developers and CTO early stage is makes it easy and save the time and efforts in case if something is not feasible you might need to make many changes reviewed these with mobile developers to confirm feasibility of the designs also it makes them feel involved. Developers showed concern about the design, according to them nested pages inside the tabs.</li>
            <li>To solve that problem I went back and changed few things. I converted tabs into 2 buttons and then again reached out to developers for their opinion the new option.</li>
            <li>Developers and CTO gave me a green flag and I went ahead for the usability testing with users.</li>
          </ul>
          <div className="mt-10 max-w-[510px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-[243px_243px] sm:justify-center items-start gap-6">
              <button type="button" onClick={() => setZoomImg(atlasTabsChanges.url)} className="group block overflow-hidden rounded-sm bg-secondary p-2 cursor-zoom-in border-0">
                <img src={atlasTabsChanges.url} alt="Mobile notifications tab changes" className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]" loading="lazy" />
              </button>
              <button type="button" onClick={() => setZoomImg(atlasNotificationChanges.url)} className="group block overflow-hidden rounded-sm bg-secondary p-2 cursor-zoom-in border-0">
                <img src={atlasNotificationChanges.url} alt="Mobile notification settings changes" className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]" loading="lazy" />
              </button>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground text-center">Iterated tab structure and profile-level notification controls based on mobile developer feedback.</p>
        </section>
      )}

      {/* AI for Ideation sits directly above Initial Design, Affiliate only. */}
      {c.slug === "affiliate-platform-redesign" && (
        <section className="mx-auto max-w-[1080px] px-6 md:px-10 scroll-mt-24">
          <AiPanelIdeation />
        </section>
      )}

      {/* Brainstorming */}
      <section className={`mx-auto max-w-[1080px] px-6 md:px-10 ${c.slug === "solace" ? "pt-[100px] pb-0" : c.slug === "affiliate-platform-redesign" ? "pt-[50px] pb-24" : c.slug === "atlas" || c.slug === "atlas2" ? "pt-0 pb-24" : "py-24"}`}>
        <h2 className={`font-serif mb-8 ${c.slug === "solace" ? "text-3xl font-medium" : c.slug === "affiliate-platform-redesign" ? "font-serif text-3xl mb-6 font-medium" : c.slug === "fjord" ? "font-serif text-3xl mt-12 mb-6 font-medium" : c.slug === "atlas" || c.slug === "atlas2" ? "font-serif text-3xl mb-6 font-medium" : "text-4xl md:text-5xl font-normal"}`}>{(c.slug === "affiliate-platform-redesign") ? "Initial Design" : (c.slug === "atlas" || c.slug === "atlas2") ? "User Flow" : (c.slug === "fjord") ? "Wire-framing & Feedback" : "Brainstorming Session With Product Team"}</h2>
        {(c.slug === "atlas" || c.slug === "atlas2") && (
          <>
            <h3 className="font-serif text-3xl mt-12 mb-6 font-medium">Three levels of control</h3>
            {/* Three levels as persona-style cards, matching the Design Principle
                cards: the flat peach surface and the site's amber drop. */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-[10px]">
              {[
                {
                  title: "Company",
                  body: "Control notifications across an organization.",
                },
                {
                  title: "Product",
                  body: "Subscribe to notifications for specific products.",
                },
                {
                  title: "Lifecycle",
                  body: "Control notifications by phase/stage.",
                },
              ].map((level) => (
                <div
                  key={level.title}
                  className="study-peach relative rounded-xl text-card-foreground shadow-amber-band p-6 overflow-hidden"
                >
                  <div className="relative z-10">
                    <h4 className="font-semibold leading-none tracking-tight text-lg mb-4">
                      {level.title}
                    </h4>
                    <p className="text-sm text-card-foreground">{level.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* The flow band wears the flat peach sampled from the swatch, so the
                surface reads as one colour: no frosted backdrop or veil under the
                ink, just the amber rim the sample carries. */}
            <div className="mt-[10px] mb-[30px]">
              <div className="flow-band relative max-w-full overflow-hidden rounded-xl text-card-foreground shadow-amber-band px-6 py-5">
                <div className="statement-line relative z-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-card-foreground">
                  {[
                    "Role",
                    "Notification Template",
                    "User Preferences",
                    "Delivery Channel",
                  ].map((step, i) => (
                    <span key={step} className="flex items-center gap-x-3">
                      {i > 0 && (
                        <span aria-hidden className="text-muted-foreground">
                          →
                        </span>
                      )}
                      <span>{step}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        <p className="text-lg leading-relaxed text-foreground/85 mb-10 whitespace-pre-line">
          {(c.slug === "atlas" || c.slug === "atlas2") 
            ? "Following are the three different user flows for managing notifications for different levels Company,Product and Stage.\u00a0\u00a0" 


            : (c.slug === "affiliate-platform-redesign") 
              ? "I presented wireframes to Stakeholders, Engineering, and the PM. We discussed the assumptions the stakeholders had. I had multiple questions about the workflow of the users regarding what is crucial for them to perform their day-to-day jobs on the website.\u00a0" 
              : (c.slug === "fjord")
                ? "The reference point of the design was the tool which we are trying to replace. Some parts felt complicated specifically for the first-time users, as observed during the research phase. The process of building a segment and grouping felt complex for them. I wanted to simplify that part for both new and experienced users, so they could understand and adopt it quickly. I took the drag-and-drop approach, which was best suited for this tool."
                : "I presented my sketches to the product team using a whiteboard, as the possible solution for the feature we were building. After the feedback and discussion about the design requirements from an engineering standpoint, the concept design was good enough to kickstart the mid-fidelity wireframes and gather some user feedback."
          }
        </p>
        {c.slug === "affiliate-platform-redesign" && (
          <div className="mt-[15px] mb-10 rounded-sm relative overflow-hidden px-6 md:px-16 py-16 text-foreground dark:text-primary">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{ backgroundImage: `url(${ampBgPersona.url})` }}
            />
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />
            <div className="relative z-10">
              <h3 className="font-serif text-3xl mb-6 font-normal flex items-center gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-azure/85"><KeyRound className="h-5 w-5 text-azure-foreground" aria-hidden="true" /></span>Making the case for affiliate focus groups</h3>
              <div className="border-l border-[#0068FF] dark:border-primary/70 pl-8 md:pl-12 max-w-3xl mx-auto">
                <blockquote className="text-[18px] leading-relaxed text-left whitespace-pre-line">
                  {"The stakeholders did not have answers to many of my questions as well as they had some of their own question, so I pushed for a session with all the main affiliates to understand their workflow, which would provide insights and avoid any assumption-based decisions that might affect their workflow negatively or create obstacles for them."}
                </blockquote>
              </div>
            </div>
          </div>
        )}
        {(c.slug === "affiliate-platform-redesign") ? (
          <button
            type="button"
            onClick={() => setZoomImg(fjord2InitialDesign.url)}
            className="group block w-full overflow-hidden rounded-sm bg-secondary p-2 cursor-zoom-in border-0"
          >
            <img src={fjord2InitialDesign.url} alt="Initial design" className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]" loading="lazy" />
          </button>
        ) : (c.slug === "atlas" || c.slug === "atlas2") ? (
          <>
            <button
              type="button"
              onClick={() => setZoomImg(atlasTaskFlow.url)}
              className="group block w-full overflow-hidden rounded-sm p-2 cursor-zoom-in border-0"
            >
              <img src={atlasTaskFlow.url} alt="User task flow for notification subscription and management" className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]" loading="lazy" />
            </button>
          </>
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
        {c.slug === "affiliate-platform-redesign" && (
          <AiPanelTestingInitialCopy />
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


      {(c.slug === "affiliate-platform-redesign") && (
        <section id="qualitative-research" className="mx-auto max-w-[1080px] px-6 md:px-10 py-24 scroll-mt-24">
              <h3 className="font-serif text-3xl mb-6 font-medium">Qualitative Research – Focus Groups</h3>
              <p className="text-lg leading-relaxed text-foreground/85 mb-4 whitespace-pre-wrap">
                I was able to get stakeholders to arrange meetings with 5 different affiliates,{"\u00A0"}each with 5–10 people from their organization. We collectively came up with the questions we wanted to ask affiliates.{"\u00A0"}
                <a href="https://docs.google.com/document/d/1QNgsJY8tiK6sr_Hl4HzbIyaKk_U5N01bvP8huFwtLsI/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-bold underline">Click here</a>{"\u00A0"}
                to see the list of questions for the focus group.{"\u00A0"}

                {"\n\n"}Watching the work overturned assumptions we'd carried into the project.
              </p>
              <ul className="list-disc list-outside pl-6 text-lg leading-relaxed text-foreground/85 mb-6 space-y-3">
                <li>Stakeholders assumed affiliates did not need the D, V, P, and C symbols, but in session after session these proved very important for identifying whether someone was working on an order.</li>
                <li>The sessions surfaced the real cost of the old system. Over recent years, affiliates had lost roughly <strong>around $2.5M in business to orders that slipped through unnoticed</strong>{"\u00A0"}there was no clear way to see whether someone was already working an order, so orders were dropped.</li>
                <li>Order revisions from the Ampersand side - staff sending revision after revision before affiliates could open them caused problems for affiliates in understanding what had changed, and needed to be restricted.</li>
              </ul>
              <div className="relative overflow-hidden rounded-sm px-6 md:px-16 py-16 text-foreground dark:text-primary mx-auto my-[50px]">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-50"
                  style={{ backgroundImage: `url(${ampBgPersona.url})` }}
                />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />
                <blockquote className="relative z-10 max-w-3xl mx-auto text-[18px] leading-relaxed text-left whitespace-pre-line">
                  <div className="border-l border-[#0068FF] dark:border-primary/70 pl-8 md:pl-12">
                    {"The survey results surprised us that, the most respondents were satisfied, and some answered as very satisfied. During a session with one of the affiliates, they said,\n\n"}<strong><em>&quot;We like it as it is, we don't want it to change.&quot;</em></strong>{"\n\n\nBecause the site is very old, the users are so used to it ; even with the workarounds. Change is very hard for them after learning to operate with all the workarounds turned into user habits built over years of using the website\n\n\n"}<span className="flex items-center gap-3 font-serif text-3xl mb-[30px] font-medium"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-azure/85"><KeyRound className="h-5 w-5 text-azure-foreground" aria-hidden="true" /></span>The Real Problem</span>{"\nThe hardest constraint wasn't technical. Users were satisfied because they'd normalized the workarounds, so the risk wasn't a worse tool ; it was rejection of a better one."}
                  </div>
                  <AffiliateRealProblemCards />
                  <strong className="block pl-8 md:pl-12">So, I designed for a gradual adoption rather than dramatic change.</strong>
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
              <div className="mt-10 mb-10 rounded-sm relative overflow-hidden px-6 md:px-16 py-16 text-foreground dark:text-primary">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-50"
                  style={{ backgroundImage: `url(${ampBgPersona.url})` }}
                />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />
                <div className="relative z-10">
                  <h3 className="font-serif text-3xl mb-6 font-normal flex items-center gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-azure/85"><KeyRound className="h-5 w-5 text-azure-foreground" aria-hidden="true" /></span>Prioritize familiarity during the transition</h3>
                  <div className="border-l border-[#0068FF] dark:border-primary/70 pl-8 md:pl-12 max-w-3xl mx-auto">
                    <blockquote className="text-[18px] leading-relaxed text-left whitespace-pre-line">
                      {"Focus groups revealed that users depended on familiar conventions, even when the underlying workflows were inefficient. I preserved cues such as D/V/P/C indicators and 24-hour time while prioritizing broken workflows and order visibility. This balanced meaningful improvements with the effort required to adopt the rebuilt portal."}
                    </blockquote>
                  </div>
                </div>
              </div>
              <p className="mt-[30px] text-lg leading-relaxed text-foreground/85 mb-8">Research directly drove these decisions.</p>
              <div className="overflow-hidden rounded-sm border border-foreground/20 mb-8">
                <Table className="min-w-[820px]">
                  <TableHeader>
                    <TableRow className="border-b border-foreground/20 hover:bg-transparent">
                      <TableHead className="text-foreground font-semibold">What we learned</TableHead>
                      <TableHead className="text-foreground font-semibold">Design implication</TableHead>
                      <TableHead className="text-foreground font-semibold">Why this mattered</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        learned: "Dollars lost due to missed orders\u00a0",
                        implication: "Visually indicate the last touched date\u00a0\u00a0",
                        why: "Help affiliates identify orders needing attention",
                      },
                      {
                        learned: "D/V/P/C indicators were important",
                        implication: "Preserve familiar status cues",
                        why: "Retain signals affiliates used to understand order activity",
                      },
                      {
                        learned: "Users were resistant to major change",
                        implication: "Design for gradual adoption",
                        why: "Reduce relearning during business-critical work",
                      },
                      {
                        learned: "Affiliates preferred the 24-hour clock",
                        implication: "Keep the military time as it is\u00a0",
                        why: "Respect an established workflow preference",
                      },
                      {
                        learned: "Filters are not holding after they go to search results\u00a0",
                        implication: "Create views, search results needs to hold",
                        why: "Avoid repeatedly rebuilding the same working context",
                      },
                      {
                        learned: "Users had normalized workarounds",
                        implication: "Fix the highest-impact broken workflows first",
                        why: "Address critical pain points without disrupting established workflows.",
                      },
                      {
                        learned: "Affiliates manually refreshed constantly",
                        implication: "Introduce live updates",
                        why: "Reduce repetitive effort and ensure timely visibility into order changes.",
                      },
                      {
                        learned: "Order revisions were difficult to track",
                        implication: "Improve revision visibility",
                        why: "Help affiliates identify changes quickly and avoid missed or incorrect updates.",
                      },
                      {
                        learned: "Language and naming is confusing\u00a0",
                        implication: "Clear naming for CTA's, Pages,Sections etc.\u00a0",
                        why: "Reduce ambiguity and help users navigate and complete tasks confidently.",
                      },
                    ].map((row, i) => (
                      <TableRow
                        key={`${row.learned}-${i}`}
                        className="border-b border-foreground/10 hover:bg-table-hover"
                      >
                        <TableCell className="text-foreground/90">{row.learned}</TableCell>
                        <TableCell className="text-foreground/90">{row.implication}</TableCell>
                        <TableCell className="text-foreground/90">{row.why ? row.why : <span className="text-foreground/40">—</span>}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <AiPanelFocusGroup />
              <div className="mt-8 flex items-baseline gap-4">
                <p className="text-3xl md:text-4xl font-normal mb-1">{"\n"}</p>
              </div>
              <div className="mt-8">
                <Table className="table-fixed">
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
                      <TableCell>{c.slug === "affiliate-platform-redesign" ? "Views, Search, Filters" : "Views and  Search "}</TableCell>
                      <TableCell className="bg-cell-highlight">Order Revision</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="bg-cell-highlight">Compare Order Version</TableCell>
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
                      <TableCell className="bg-cell-highlight">Contacts & Resources,Email Notifications{"\u00a0"}</TableCell>
                      <TableCell>Collaterals{"\u00a0"}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{c.slug === "affiliate-platform-redesign" ? "Auto Refresh\u00a0" : "Search , Auto refresh"}</TableCell>
                      <TableCell>Exports</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{c.slug === "affiliate-platform-redesign" ? "Fix Broken Functionalities\u00a0" : "\u00a0"}</TableCell>
                      <TableCell>Automation{"\u00a0"}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <p className="mt-8 text-lg leading-relaxed text-foreground/85">
                After the focus groups, I reprioritized the rollout. Phase 1 restored core order workflows and introduced auto-refresh. Phase 2 deferred larger changes such as messaging and in-platform notifications
              </p>
        </section>
      )}

      {(c.slug !== "atlas" && c.slug !== "atlas2" && c.slug !== "affiliate-platform-redesign" && c.slug !== "solace" && c.slug !== "fjord") && (
      <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>
      )}

      {(c.slug !== "affiliate-platform-redesign") && (
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
              <span>After the second iteration, I reviewed the wireframes with the VP of Product to confirm they met all requirements. I communicated user needs and observations from interviews including items I had added that were not in the product requirements document and updated the team to keep Engineering in the loop.</span>
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

      {(c.slug === "affiliate-platform-redesign") && (
        <section id="testing" className="mx-auto max-w-[1080px] px-6 md:px-10 py-24 pb-0 scroll-mt-24">
          <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">Testing</h2>
          <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal">Usability Testing&nbsp;</h3>
          <div className="mt-[15px] mb-10 rounded-sm relative overflow-hidden px-6 md:px-16 py-16 text-foreground dark:text-primary">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{ backgroundImage: `url(${ampBgPersona.url})` }}
            />
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />
            <div className="relative z-10">
              <h3 className="font-serif text-3xl mb-6 font-normal flex items-center gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-azure/85"><KeyRound className="h-5 w-5 text-azure-foreground" aria-hidden="true" /></span>Validate Through Real-World Usage</h3>
              <div className="border-l border-[#0068FF] dark:border-primary/70 pl-8 md:pl-12 max-w-3xl mx-auto">
                <blockquote className="text-[18px] leading-relaxed text-left whitespace-pre-line">
                  {"Formal moderated testing wasn't viable as affiliates are external and we'd already spent their goodwill on the survey and sessions.\nRather than asking external affiliates to participate in another round of moderated testing after already completing surveys and focus groups, I chose a low-friction, post-launch validation approach.\n"}
                </blockquote>
              </div>
            </div>
          </div>
          <ul className="mb-10 space-y-6 text-lg leading-relaxed text-foreground/85">
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>I validated adoption behaviorally with Microsoft Clarity session analysis and an in-product feedback survey after the first 3 months of live use.</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>
                <strong>Why this approach:</strong> It allowed me to validate the experience with real user behavior without adding research fatigue or disrupting affiliates' work.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>
                <p>
                  <strong>Outcome:</strong> Positive user feedback and observed behavior indicated that the redesigned workflows were being adopted and used as intended.
                </p>
              </span>
            </li>
          </ul>
          <AiPanelTesting />
          <h3 className="font-serif text-2xl md:text-3xl mb-6 mt-16 font-normal">Adoption</h3>
          <p className="text-lg leading-relaxed text-foreground/85">
            As for this redesign I and the product manager made the 'Help &amp; Documentation' before the release with the help of AI. We made sure to have the help resources ready such as short how to videos/tutorials showing how to perform all the tasks, a list of possible FAQs, and a place where users can send feedback and report any bugs or errors they encounter.&nbsp;&nbsp;
          </p>
          <div className="rule mt-16" />
        </section>
      )}
      {(c.slug === "affiliate-platform-redesign") && (
        <section id="ai-impact" className="mx-auto max-w-[1080px] px-6 md:px-10 pt-[80px] pb-24 scroll-mt-24">
          <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">AI Impact</h2>
          <h4 className="h4 mb-6">{"\n"}</h4>
          <p className="text-lg leading-relaxed text-foreground/85 mb-8">
            As the only designer on the product, I had to move between research, synthesis, ideation, UX writing, prototyping, testing, and stakeholder collaboration. AI helped reduce the repetitive parts of that workload so I could maintain depth across the process without adding another layer of overhead.
            <br /><br />
            AI reduced repetitive work and accelerated exploration, allowing me to spend more time on validation, design judgment, and higher-value product decisions.
            <br /><br /><strong>AI assists → Human validates → Evidence informs → Designer decides</strong>
          </p>
          <div className="overflow-hidden rounded-sm border border-foreground/20">
            <Table className="min-w-[820px]">
              <TableHeader>
                <TableRow className="border-b border-foreground/20 hover:bg-transparent">
                  <TableHead className="text-foreground font-semibold" />
                  {["Research", "Ideation", "UX Writing", "Testing"].map((h) => (
                    <TableHead key={h} className="text-foreground font-semibold">
                      {h}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    label: "AI contribution",
                    cells: [
                      "Synthesize & identify patterns",
                      "Explore possibilities",
                      "Generate variations",
                      "Surface behavioral patterns",
                    ],
                  },
                  {
                    label: "Human contribution",
                    cells: [
                      "Validate & prioritize",
                      "Evaluate & refine",
                      "Select & refine",
                      "Verify against evidence",
                    ],
                  },
                  {
                    label: "Impact",
                    cells: [
                      "Faster synthesis",
                      "More concepts explored",
                      "Faster iteration",
                      "More focused analysis",
                    ],
                  },
                  {
                    label: "Capacity unlocked",
                    cells: [
                      "More time for research interpretation",
                      "More iterations before converging",
                      "More time for content refinement",
                      "More time for deeper validation",
                    ],
                  },
                  {
                    label: "Time saved*",
                    cells: ["~30–50%", "~40–60%", "~30–50%", "~20–30%"],
                  },
                ].map((row) => (
                  <TableRow
                    key={row.label}
                    className="border-b border-foreground/10 hover:bg-table-hover"
                  >
                    <TableCell className="font-semibold text-foreground">
                      {row.label}
                    </TableCell>
                    {row.cells.map((cell, i) => (
                      <TableCell key={i} className="text-foreground/90">
                        {cell}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      )}


      {(c.slug !== "affiliate-platform-redesign") && (
        <section id="testing" className={`mx-auto max-w-[1080px] px-6 md:px-10 scroll-mt-24 ${c.slug === "solace" ? "pt-24 pb-[80px]" : "py-24"}`}>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">Testing</h2>

          {(c.slug !== "atlas" && c.slug !== "atlas2") && (
            <>
              <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal">{"\n"}</h3>
              <p className="text-lg leading-relaxed text-foreground/85 mb-6">
                {"\n"}
              </p>
            </>
          )}

          <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal">Usability Testing&nbsp;</h3>
          <ul className="space-y-6 text-lg leading-relaxed text-foreground/85">
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>{c.slug === "fjord" ? "I did remote testing with 6 users 3 of each user group." : (c.slug === "atlas" || c.slug === "atlas2") ? "For usability testing, I recruited 5 participants to test the prototype. The objective of the test was to identify how easily users are able to subscribe and unsubscribe from a particular product, company, stage, or phase of the product lifecycle." : "As testing started from the early stage with the initial wireframes, It was quite helpful in finding user needs and expectations and setting up for the right direction for design to fill the gaps in the functionality.\u00a0I recruited 5 participants to test the prototype."}</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>
                {c.slug === "fjord" 
                  ? "I divided functionality in 6\u00a0tasks to check the task completion rate and time required to complete those tasks."
                  : <>I divided functionality into <strong className="font-semibold">6 different tasks</strong> to check the task completion rate and time required to complete those tasks <span className="underline hover:text-accent"><a href="https://drive.google.com/file/d/1m5iAAkk5dO8wLx-q7ffIzm1X_uVUhUe3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-semibold">Usability test questions</a></span>&nbsp;.</>}
              </span>
            </li>
            {c.slug === "fjord" && (
              <p className="text-lg leading-relaxed text-foreground/85 mt-4 mb-2 whitespace-pre-line">
                {"\u00a01.\u00a0 Search an audience segment.\n\u00a02. Drag and Drop it to the build area.\u00a0\n\u00a03. Create a group of segments.\u00a0\n\u00a04. Switch between OR & AND, Include and exclude.\u00a0\n\u00a05. Name and save a segment.\u00a0\n\u00a06. Use the created segment in either of the 4 workflows.\n\n"}
              </p>
            )}
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span className="font-semibold">{c.slug === "fjord" ? "\u00a0The objective of the test was to identify how easily users are able to understand usability and how intuitive it is for users to complete the given task." : "Usability Test Findings\u00a0\u00a0"}</span>
            </li>
            {c.slug !== "atlas" && c.slug !== "atlas2" && c.slug !== "solace" && (
            <li className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
              <span>{c.slug === "fjord" ? "Based on the test result data, not all users had knowledge of AND/OR logic, so I added a help section to help them understand how it works, so they can create segments with a clear understanding and more precisely.\u00a0\u00a0" : "Based on the test result data some changes were made to fix issues faced by the users."}</span>
            </li>
            )}
          </ul>

          {/* Tech Pack Tool: the usability findings now read as a Usability
              finding / Evidence / Design decision / Intended impact table,
              wearing the shared table treatment. */}
          {c.slug === "solace" && (<>
            <div className="mt-6 overflow-hidden rounded-sm border border-foreground/20">
              <Table className="min-w-[820px]">
                <TableHeader>
                  <TableRow className="border-b border-foreground/20 hover:bg-transparent">
                    {["Usability finding", "Evidence", "Design decision", "Intended impact"].map((h) => (
                      <TableHead key={h} className="text-foreground font-semibold">
                        {h}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      finding: "Users wanted labels on the Detailed Sketch page.",
                      evidence: "2 of 5 participants (40%)",
                      decision: "Improve labeling and information clarity.",
                      impact: "Help users identify details more easily.",
                    },
                    {
                      finding: "Users wanted to save progress before navigating elsewhere.",
                      evidence: "3 of 5 participants (60%)",
                      decision: "Introduce a Save option to preserve work in progress.",
                      impact: "Reduce the risk of losing work and support interrupted workflows.",
                    },
                    {
                      finding: "Users expected the details drawer to open on the Bill of Material page.",
                      evidence: "3 of 5 participants (60%)",
                      decision: "Clarify the drawer's interaction and make it easier to discover.",
                      impact: "Reduce confusion and make the interaction more predictable.",
                    },
                    {
                      finding: "Participants felt the design addressed their pain points.",
                      evidence: "5 of 5 participants (100%)",
                      decision: "Retain the core direction while addressing the usability issues identified.",
                      impact: "Preserve what worked while refining specific friction points.",
                    },
                  ].map((row) => (
                    <TableRow
                      key={row.finding}
                      className="border-b border-foreground/10 hover:bg-table-hover"
                    >
                      <TableCell className="text-foreground/90">
                        {row.finding}
                      </TableCell>
                      <TableCell className="text-foreground/90">
                        {row.evidence}
                      </TableCell>
                      <TableCell className="text-foreground/90">
                        {row.decision}
                      </TableCell>
                      <TableCell className="text-foreground/90">
                        {row.impact}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <ul className="space-y-6 text-lg leading-relaxed text-foreground/85 mt-10">
              <li className="flex gap-4">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
                <span>Based on the test result data some changes were made to fix issues faced by the users.</span>
              </li>
            </ul>
          </>)}

          {/* Notifications Management: usability findings as a Finding / Impact /
              Design response table, wearing the shared table treatment. */}
          {(c.slug === "atlas" || c.slug === "atlas2") && (<>
            <div className="mt-10 overflow-hidden rounded-sm border border-foreground/20">
              <Table className="min-w-[820px]">
                <TableHeader>
                  <TableRow className="border-b border-foreground/20 hover:bg-transparent">
                    {["Finding", "Impact", "Design response"].map((h) => (
                      <TableHead key={h} className="text-foreground font-semibold">
                        {h}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      finding: "4/5 confused by edit icon",
                      impact: "High",
                      response: "Clarified interaction",
                    },
                    {
                      finding: "3/5 confused by search icon",
                      impact: "Medium",
                      response: "Improved search affordance",
                    },
                    {
                      finding: "3/5 confused by categories",
                      impact: "High",
                      response: "Refined naming",
                    },
                    {
                      finding: "5/5 found solution useful",
                      impact: "\u2014",
                      response: "Validated core concept",
                    },
                  ].map((row) => (
                    <TableRow
                      key={row.finding}
                      className="border-b border-foreground/10 hover:bg-table-hover"
                    >
                      <TableCell className="text-foreground/90">
                        {row.finding}
                      </TableCell>
                      <TableCell className="text-foreground/90">
                        {row.impact}
                      </TableCell>
                      <TableCell className="text-foreground/90">
                        {row.response}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <ul className="space-y-6 text-lg leading-relaxed text-foreground/85 mt-10">
              <li className="flex gap-4">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" aria-hidden />
                <span>Based on the test result data some changes were made to fix issues faced by the users.</span>
              </li>
            </ul>
          </>)}



          {c.slug === "fjord" && (
            <p className="text-lg leading-relaxed text-foreground/85 mb-16">
              For testing, we decided to release it in the beta environment as the functionality was drag and drop. I connected with users, asking them to share their screens, and observed how they were using the tool. It was working for them.
            </p>
          )}

          {c.slug !== "solace" && c.slug !== "fjord" && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Test Completion Rate", value: "100%" },
                { label: "Error-free rate", value: "85%" },
                { label: "Solving the problem?", value: "Yes" },
              ].map((s) => (
                <div
                  key={s.label}
                  className={`relative overflow-hidden rounded-lg px-8 py-10 text-center shadow-amber-band flex items-center justify-center ${
                    c.slug === "atlas" || c.slug === "atlas2" ? "study-peach" : "bg-card"
                  }`}
                >
                  <p
                    className={`relative z-10 text-lg font-bold text-foreground ${
                      c.slug === "atlas" || c.slug === "atlas2" ? "font-serif" : ""
                    }`}
                  >
                    {s.label}: <span>{s.value}</span>
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Key Decisions */}
      <section id="key-decisions" className="mx-auto max-w-[1080px] px-6 md:px-10 pt-[80px] pb-24 scroll-mt-24">
        <p className="eyebrow mb-6">03 / The decisions behind the screens</p>
        <h2 className="h2 mb-6">Four choices that shaped the experience.</h2>
        <p className="text-lg leading-relaxed text-foreground/70 max-w-[560px] mb-14">
          The work was as much about sequencing dependencies and protecting users&rsquo; effort as it was about designing an editor.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 border-y border-foreground/20 divide-y md:divide-y-0 md:divide-x divide-foreground/20">
          {[
            { n: "01", t: "Libraries before the editor" },
            { n: "02", t: "Connect costs to material data" },
            { n: "03", t: "Let users save unfinished work" },
            { n: "04", t: "Standardize the factory handoff" },
          ].map((d) => (
            <Button key={d.n} asChild variant="ghost" className="h-auto rounded-none p-0 whitespace-normal font-normal dark:border-0 hover:bg-decision-accent/5">
            <a href={`#decision-${d.n}`} className="flex items-start justify-between gap-4 px-6 py-8">
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-bold text-decision-accent">{d.n}</span>
                <p className="text-sm font-bold text-foreground">{d.t}</p>
              </div>
              <span aria-hidden className="text-decision-accent text-sm leading-none mt-0.5">&#8600;</span>
            </a>
            </Button>
          ))}
        </div>
        <Solace2KeyDecisionDetails onZoom={setZoomImg} brainstorming={brainstormingImg} materials={finalBom.url} document={finalPdf.url} />
      </section>

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
      <section id="final-designs" className={`mx-auto max-w-[1080px] px-6 md:px-10 scroll-mt-24 ${c.slug === "solace" ? "pb-24 pt-[80px]" : c.slug === "affiliate-platform-redesign" ? "pt-24 pb-0" : "py-24"}`}>
        <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">Solution</h2>

        {c.slug === "solace" && <Solace2SolutionWalkthrough />}



        <p className={cn("text-lg leading-relaxed text-foreground/85", c.slug === "affiliate-platform-redesign" ? "mt-0" : "mt-10")}>
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


      {c.slug !== "affiliate-platform-redesign" && (
        <div className="mx-auto max-w-[1080px] px-6 md:px-10"><div className="rule" /></div>
      )}

      {/* Reflection */}
      <section id={topOutcomeSlugs.has(c.slug) ? "reflection" : "impact"} className={cn("mx-auto max-w-[1080px] px-6 md:px-10 pb-0 scroll-mt-24", c.slug === "affiliate-platform-redesign" ? "pt-[80px]" : "pt-24")}>
        {c.slug !== "solace" && (<>
        <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">
          Reflection
        </h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-20">
          {c.slug === "affiliate-platform-redesign" 
            ? <>
                This project was more than a redesign. We tackled the pain points that had shaped how affiliates worked for years; speed, stability, broken functionality, redundancy, and the constant manual refreshing{"\u00A0"} and rebuilt the platform on a foundation that can finally evolve.{"\u00A0"}
                The results I'm proudest of: a <strong>92%</strong> task success rate, the near-elimination of manual refreshing, and zero business lost since launch against the <strong>~$2.5 Million</strong> the old system had been quietly bleeding.Designing that visibility into the new platform is precisely what the "<strong>$0</strong> lost since launch" result protects.The biggest lesson wasn't about the interface; it was about restraint. For an entrenched user base that had normalized every workaround, the real risk wasn't building a worse tool; it was building a better one they'd reject. Designing for gradual adoption meant deliberately deferring improvements I'd have liked to ship on day one.{"\u00A0"}
                <strong>The redesign taught me to preserve the cues people relied on and phase in changes that required them to learn new ways of working.</strong>{"\u00A0"}
                Phase two, now in development, including a major shift in how affiliates communicate on the platform.
              </>

            : c.slug === "fjord"
            ? "We successfully deployed the tool, and it significantly reduced the time for creating a custom audience, as users no longer had to wait for the Data team to make it for them — including those who did not have access to the paid tool. We saved a good amount for the company and were also able to provide a few more features than the existing tool by making it more intuitive. I learned to make sure all possible resources are available for users, for learning and smoother adoption."
            : (c.slug === "atlas" || c.slug === "atlas2")
            ? <>
                <strong>The design did what it set out to do:</strong> users could finally control notifications at the level that matched their work{"\u00A0"} company, product, and lifecycle stage and the critical alerts stopped drowning in the noise. That fed directly into fewer missed deadlines and a better client experience, which mattered for retention. But the harder lesson was that giving users control is not the same as reducing their burden. Preferences across that many levels can quietly become their own kind of overwhelm a settings screen as noisy as the feed it was meant to fix. So rather than hand users a blank grid of toggles, I leaned on role-based<br /><strong>Notification Templates:</strong> each user group starts with a default set mapped to their job and validated against my research. Template creation lives on web; on mobile, users inherit their role's template and fine-tune it if they want. Most people get the right notifications without ever opening settings{"\u00A0"} control is there for the ones who need it.
              </>
            : "This was a big project and turned out to be a good selling point for the company. Apart from that,\u00a0it was a great workflow improvement, which eliminated accounting errors that happen due to manual workflow. Thanks to the libraries built,\u00a0it sped up the workflow through reuse and repurposing. Because of the editor tool, users didn't have to go outside the platform to do all the editing for the manufacturing phase. Overall, the project was a great success."}
        </p>
        </>)}
      </section>

      {c.slug === "solace" && (
        <section className="mx-auto max-w-[1080px] px-6 md:px-10 pb-0">
          <p className="eyebrow mb-6">06 / Looking Back</p>
          <h3 className="h2 mb-14 max-w-[640px]">Connecting the work mattered as much as designing the tool.</h3>
          <div className="grid gap-10 md:grid-cols-3 md:gap-8 mb-20">
            {[
              {
                n: "01",
                title: "The sequence was part of the design.",
                body: "Starting with reusable libraries made later automation possible. The delivery plan followed the data dependencies, while design stayed ahead of development.",
              },
              {
                n: "02",
                title: "Completion wasn't the only useful state.",
                body: "The request to save progress exposed a gap in the initial flow. Testing the pauses and exits mattered alongside testing the path to a finished document.",
              },
              {
                n: "03",
                title: "The next check is the revised experience.",
                body: "I would re-test saving, labeling, and drawer discovery, then follow a revised document through the factory handoff to see where uncertainty remains.",
              },
            ].map((card) => (
              <div key={card.n}>
                <p className="text-sm font-medium text-decision-accent mb-4">{card.n}</p>
                <h4 className="h4 mb-4">{card.title}</h4>
                <p className="text-[15px] leading-relaxed text-foreground/70">{card.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

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
          {(c.slug === "fjord" || c.slug === "affiliate-platform-redesign" || c.slug === "atlas" || c.slug === "atlas2" || c.slug === "solace") ? "\n" : (
            <>
              <strong className="font-semibold">With the final prototype created, I believe I met the goals that were outlined in the beginning of the design process.</strong> I successfully designed Techpack editor tool along with Material, CAD, Techpack Libraries.
            </>
          )}
        </p>
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
                  {o.cardTitle ?? o.title}
                </h3>
                <span className="inline-block mt-4 text-sm border-b border-foreground/40 group-hover:border-foreground group-hover:font-bold transition-colors">
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

/* "The solution, in use" walkthrough — solace2 copy only. Tabbed stepper below
   the Solution heading; orange accent (#ffa348) on white, per Surbhi's reference. */
const solace2WalkthroughSteps = [
  {
    tab: "Start with a design",
    eyebrow: "01 / REUSE, THEN REFINE",
    quote: "“I shouldn’t have to start from scratch.”",
    body: "The designer needs a starting point they can reuse. Bringing existing CAD and tech pack files together makes prior work available in the same workflow.",
    caption: "Illustrative user intent, based on the research",
    image: finalSketchSel.url,
    imageAlt: "Choosing an existing sketch in the tech pack tool",
    points: [
      { title: "Choose an existing sketch", detail: "Reuse the design information already on the platform." },
      { title: "Continue in the editor", detail: "Carry the chosen design forward into the tech pack." },
    ],
  },
  {
    tab: "Add materials",
    eyebrow: "02 / MATERIALS IN ONE PLACE",
    quote: "“I shouldn’t have to hunt for prices.”",
    body: "Materials, trims and labels sit next to the design instead of in separate spreadsheets, so the details stay attached to the style they belong to.",
    caption: "Illustrative user intent, based on the research",
    image: finalColorMaterialDrawer.url,
    imageAlt: "Adding colors and materials to a tech pack",
    points: [
      { title: "Pick from the library", detail: "Pull in materials and trims already on file." },
      { title: "Attach them to the style", detail: "Keep every detail linked to the design it belongs to." },
    ],
  },
  {
    tab: "Review costs",
    eyebrow: "03 / COSTS THAT ADD THEMSELVES",
    quote: "“I shouldn’t have to calculate by hand.”",
    body: "The bill of materials rolls material and trim prices up automatically, removing the manual math that caused errors in the old documents.",
    caption: "Illustrative user intent, based on the research",
    image: finalBom.url,
    imageAlt: "Bill of materials with costs in the tech pack tool",
    points: [
      { title: "Review the bill of materials", detail: "See every material, trim and label in one list." },
      { title: "See costs roll up", detail: "Totals update as details change, with no re-entry." },
    ],
  },
  {
    tab: "Share a version",
    eyebrow: "04 / ONE SHARED VERSION",
    quote: "“Everyone should see the same file.”",
    body: "The finished tech pack exports as a single document, so the factory and the client always work from the latest version instead of email threads.",
    caption: "Illustrative user intent, based on the research",
    image: finalPdf.url,
    imageAlt: "Exported tech pack PDF ready to share",
    points: [
      { title: "Export the tech pack", detail: "Generate one document with every detail included." },
      { title: "Share it with the factory", detail: "Everyone works from the same, current version." },
    ],
  },
];

function Solace2SolutionWalkthrough() {
  const [active, setActive] = useState(0);
  const step = solace2WalkthroughSteps[active] ?? solace2WalkthroughSteps[0]!;
  return (
    <div className="mb-16">
      <p className="eyebrow mb-6">02 / The solution, in use</p>
      <div className="mb-14">
        <h3 className="h3">
          From a design idea to a shared production document.
        </h3>
        <p className="mt-6 text-lg leading-relaxed text-foreground/70">
          Follow a designer preparing a garment for manufacturing. Each step connects information that previously lived in separate files.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-foreground/15 mb-12">
        {solace2WalkthroughSteps.map((s, i) => (
          <button
            key={s.tab}
            type="button"
            onClick={() => setActive(i)}
            className={`flex items-baseline gap-3 pb-4 pr-4 text-left border-b-2 -mb-px transition-colors ${
              i === active
                ? "border-[#ffa348] text-foreground"
                : "border-transparent text-foreground/50 hover:text-foreground/80"
            }`}
          >
            <span className={`text-sm font-bold ${i === active ? "text-copy-orange-text" : "text-foreground/40"}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-bold">{s.tab}</span>
          </button>
        ))}
      </div>
      <div className="grid gap-10 lg:grid-cols-[2.32fr_1fr] lg:items-start">
        <div className="overflow-hidden rounded-sm border border-foreground/15 shadow-sm">
          <img src={step.image} alt={step.imageAlt} className="w-full h-auto" loading="lazy" />
        </div>
        <div>
          <p className="eyebrow mb-5">{step.eyebrow}</p>
          <p className="text-lg leading-relaxed font-bold text-foreground mb-6">{step.quote}</p>
          <p className="text-lg leading-relaxed text-foreground/80 mb-3">{step.body}</p>
          <p className="text-sm text-foreground/70">{step.caption}</p>
        </div>
      </div>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {step.points.map((point, i) => (
          <div key={point.title} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#ffa348] text-sm font-bold text-copy-orange-text">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-foreground">{point.title}</p>
              <p className="text-foreground/70 leading-relaxed">{point.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Design exploration tabs — solace2 copy only. Same tab treatment as the
   "solution, in use" walkthrough: numbered 14px bold labels, amber #ffa348
   underline on the active tab. Tabs 2 and 3 carry placeholder copy until
   Surbhi supplies their wording. */
const solace2DesignTabs = [
  {
    tab: "Paper sketches",
    eyebrow: "Explore the workflow",
    heading: "Start with the documents people actually use.",
    body: "I gathered the CAD files, tech packs, cost sheets, and catalogs users sent to clients and factories. Sketching from those materials helped me explore how the pieces could fit together.",
    caption: "Original project artifacts · Click an image to inspect",
    layout: "grid" as const,
    images: [
      { src: sketchImg1.url, alt: "Hand-drawn workspace exploration sketch", label: "Workspace exploration" },
      { src: sketchImg2.url, alt: "Hand-drawn dashboard sketch with entry point action cards", label: "Entry points" },
      { src: sketchImg3.url, alt: "Hand-drawn design and material details sketch", label: "Design & material details" },
      { src: sketchImg4.url, alt: "Hand-drawn sketch selection gallery", label: "Sketch selection" },
    ],
  },
  {
    tab: "Clickable wireframes",
    eyebrow: "Click through the flow",
    heading: "The sketches became screens you could click through.",
    body: "Wireframes put the sketches in sequence so the team and I could walk the same path a designer would take, from a design idea to a finished document.",
    caption: "Placeholder copy — tell me what to write here",
    layout: "stack" as const,
    images: [
      { src: wireframeImg1, alt: "Wireframe contact sheet showing entry, sketch, detail and specification screens", label: "Entry and sketch screens" },
      { src: wireframeImg2, alt: "Wireframe contact sheet showing material details, bill of materials, export and library screens", label: "Material, costing and export screens" },
    ],
  },
  {
    tab: "Detailed interface",
    eyebrow: "The interface takes shape",
    heading: "The screens the tool was built from.",
    body: "The wireframes tightened into the interface handed to engineering, with the material, costing and export screens in place.",
    caption: "Placeholder copy — tell me what to write here",
    layout: "grid" as const,
    images: [
      { src: finalSketchSel.url, alt: "Sketch selection screen in the tech pack tool", label: "Sketch selection" },
      { src: finalColorMaterialDrawer.url, alt: "Colors and materials drawer in the tech pack tool", label: "Colors and materials" },
      { src: finalBom.url, alt: "Bill of materials screen in the tech pack tool", label: "Bill of materials" },
      { src: finalPdf.url, alt: "Exported tech pack PDF screen", label: "Exported PDF" },
    ],
  },
];

function Solace2DesignTabs({ onZoom }: { onZoom: (src: string) => void }) {
  const [active, setActive] = useState(0);
  const step = solace2DesignTabs[active] ?? solace2DesignTabs[0]!;
  return (
    <div className="mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-foreground/15 mb-12">
        {solace2DesignTabs.map((s, i) => (
          <button
            key={s.tab}
            type="button"
            onClick={() => setActive(i)}
            className={`flex items-baseline gap-3 pb-4 pr-4 text-left border-b-2 -mb-px transition-colors ${
              i === active
                ? "border-[#ffa348] text-foreground"
                : "border-transparent text-foreground/50 hover:text-foreground/80"
            }`}
          >
            <span className={`text-sm font-bold ${i === active ? "text-copy-orange-text" : "text-foreground/40"}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-bold">{s.tab}</span>
          </button>
        ))}
      </div>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:items-start">
        <div>
          <p className="eyebrow mb-5">{step.eyebrow}</p>
          <h3 className="h2 mb-6">{step.heading}</h3>
          <p className="text-lg leading-relaxed text-foreground/80">{step.body}</p>
          <p className="mt-6 text-sm text-foreground/60">{step.caption}</p>
        </div>
        <div className={step.layout === "grid" ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "grid gap-4"}>
          {step.images.map((img) => (
            <button
              key={img.label}
              type="button"
              onClick={() => onZoom(img.src)}
              className="group block overflow-hidden rounded-sm bg-secondary p-2 cursor-zoom-in"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                loading="lazy"
              />
              <span className="mt-2 flex items-center gap-1.5 text-sm text-foreground/70">
                {img.label}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
