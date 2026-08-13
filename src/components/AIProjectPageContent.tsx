import { useEffect, useState } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { PdfViewer } from "@/components/PdfViewer";
import { ImageViewer } from "@/components/ImageViewer";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ArrowLeft, Download } from "lucide-react";
import { aiProjects, type AIProject } from "@/lib/ai-projects";
import { CreatorHubStudy } from "@/components/CreatorHubStudy";
import { VibeCodedPortfolioStudy } from "@/components/VibeCodedPortfolioStudy";
import { VoyagerStudy } from "@/components/VoyagerStudy";
import aiToolsPdf from "@/assets/AI-Tools-for-the-Design-Process.pdf.asset.json";
import adoptingAiGuidePdf from "@/assets/Adopting-AI-in-the-Design-Process-a-guide-_for_product_teams.pdf.asset.json";
import promptLibraryZip from "@/assets/Prompt-Library-Template.zip.asset.json";
import aiGuardrailsDocx from "@/assets/AI-Guardrails-for-the-Design-Process.docx.asset.json";
import aiGovernanceDocx from "@/assets/AI-Governance-for-Design-Teams.docx.asset.json";
import aiBiasWorksheetDocx from "@/assets/AI-Bias-Audit-Worksheet.docx.asset.json";

export function AIProjectPageContent({ project }: { project: AIProject }) {
  const [activePdf, setActivePdf] = useState(project.pdfs?.[0]?.url ?? project.pdfUrl);
  useEffect(() => {
    setActivePdf(project.pdfs?.[0]?.url ?? project.pdfUrl);
  }, [project.slug]);
  const activeEntry = project.pdfs?.find((pdf: { url: string }) => pdf.url === activePdf);
  const activePdfLabel = activeEntry?.label ?? "";
  const activeImages = activeEntry?.images;
  const isPitchDeck = activePdfLabel.toLowerCase().includes("pitch deck");
  const others = aiProjects.filter((p) => p.slug !== project.slug);

  return (
    <SiteLayout>
      <ScrollProgress />
      <article className="mx-auto max-w-[1080px] px-6 md:px-10 pt-16 md:pt-24 pb-16">
        <Link
          to="/ai"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to AI Projects
        </Link>

        <span className="eyebrow mb-8 block">{project.tags.join(" · ")}</span>
        <h1 className="font-serif text-4xl mb-6 md:text-5xl font-normal">
          {project.slug === "resources" ? "AI Resources for Product Designers" : project.title}
        </h1>
        <p className="font-serif text-2xl md:text-4xl leading-[1.15] max-w-4xl text-foreground/85">
          {project.subtitle}
        </p>

        {project.slug === "resources" && (
          <p className="mt-6 text-base text-muted-foreground">
            By{" "}
            <Link to="/about" className="text-foreground underline-offset-4 hover:underline">
              Surbhi Hote
            </Link>
            {"\u00a0"}- Product Designer{"\u00a0"}
          </p>
        )}

        {project.slug === "creator-hub" ? (
          <p className="mt-10 text-lg leading-relaxed text-foreground/85 max-w-3xl">
            <strong>Creator Hub</strong> An AI-assisted workspace that helps
            social media creators plan, repurpose, and optimize content across
            platforms, without drowning in tools.
          </p>
        ) : project.slug === "voyager" ? (
          <p className="mt-10 text-lg leading-relaxed text-foreground/85 max-w-3xl">
            Design lab AI for UI Project: designing a travel AI product end to
            end, using AI at every stage.
          </p>
        ) : project.slug === "resources" ? (
          <></>
        ) : (
          <p className="mt-10 text-muted-foreground leading-relaxed max-w-3xl">
            {"\n"}
          </p>
        )}

        <figure
          className={
            project.slug === "creator-hub" || project.slug === "voyager"
              ? "mt-12 overflow-hidden rounded-xl"
              : "mt-12 overflow-hidden rounded-xl border border-border bg-muted/30"
          }
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            className={
              project.slug === "voyager"
                ? "w-1/2 max-w-[265px] mx-auto h-auto"
                : project.slug === "creator-hub"
                  ? ""
                  : "w-full h-auto object-cover"
            }
          />
        </figure>

        {project.slug === "resources" && (
          <section className="mt-12">
            <h2 className="font-serif text-2xl md:text-4xl leading-[1.15] text-foreground/85 mb-4">Overview</h2>
            <p className="text-lg leading-relaxed text-foreground/85">
              AI Resources is a working library for product and UI/UX designers who want to design with AI, not just read about it. It collects the tools, prompt patterns, and templates I use across research, ideation, and prototyping, along with guides on the parts most teams skip: guardrails, governance, and bias checks. As the sole designer in the company, I built the AI adoption approach and processes behind this collection from the ground up, and every resource comes out of that real project work. I keep the library current as my process evolves.
            </p>
          </section>
        )}

        {project.slug === "resources" && (
          <section className="mt-12">
            <p className="font-serif text-2xl md:text-4xl leading-[1.15] max-w-4xl text-foreground/85 mb-6">Articles & Templates</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Adopting AI in the design process - A step by step guide", url: adoptingAiGuidePdf.url, description: "Adopting AI in the Design Process. A step-by-step guide for product teams bringing AI into how they work, not as a one-off experiment but as a repeatable part of the process. It walks through where AI fits across research, ideation, and delivery, and how to introduce it without disrupting what already works. Written from doing this firsthand as the sole designer defining the approach for my team." },
                { title: "AI Bias Worksheet", url: aiBiasWorksheetDocx.url, description: "A practical worksheet for spotting and questioning bias in AI-assisted design work, from skewed research synthesis to outputs that quietly exclude parts of your audience. Use it as a checkpoint before you ship, so the tools speed you up without narrowing who you design for." },
                { title: "AI Tools For UX Process", url: aiToolsPdf.url, description: "A reference map of the AI tools I actually use across the design process, sorted by where they help: research, ideation, prototyping, and handoff. Rather than a long list of everything available, it's the working set I've tested on real projects, with a note on what each one is good for." },
                { title: "Prompt Library Template", url: promptLibraryZip.url, description: "A ready-to-use, copy-and-adapt prompt library so you're not writing prompts from scratch every time. It gives you a structure for organizing prompts by task and reusing the ones that work, which is the difference between AI as a novelty and AI as part of your daily workflow." },
                { title: "AI Guardrails for Design\u00A0", url: aiGuardrailsDocx.url, description: "A framework for setting boundaries on AI use in design work, so speed doesn't come at the cost of quality or judgment. It covers where to trust AI output, where a human has to stay in the loop, and how to write guardrails your team will actually follow." },
                { title: "AI Governance for Design Teams", url: aiGovernanceDocx.url, description: "A guide to governing AI adoption across a design team: who decides which tools are approved, how you handle data and privacy, and how to keep practice consistent as more people start using AI. Built for teams moving from ad hoc experimentation to a defined, defensible approach." },
              ].map(({ title, url, description }) => (
                <div
                  key={title}
                  className="flex flex-col rounded-xl border border-border bg-muted/20 p-6"
                >
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mt-5 mb-3">
                    {title}
                  </h3>
                  <p className="text-base leading-relaxed text-foreground/70 mb-0 flex-1">
                    {description}
                  </p>
                  <hr className="border-t border-border my-5" />
                  <a
                    href={url ?? "#"}
                    download={url ? true : undefined}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors self-end"
                  >
                    <Download size={18} />
                    {url ? "Download" : "Download — coming soon"}
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {(project.role || project.timeframe || project.tools || project.tasksPerformed) && (
          <section className="mt-10 pb-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-8">
              {[
                { k: "Role", v: project.role },
                { k: "Timeframe", v: project.timeframe },
                { k: "Tools", v: project.tools },
                { k: "Tasks Performed", v: project.tasksPerformed },
              ]
                .filter((m) => m.v)
                .map((m) => (
                  <div key={m.k}>
                    <p className="eyebrow mb-2 font-bold">{m.k}</p>
                    <p className="text-base leading-relaxed text-foreground/85 whitespace-pre-line">
                      {m.v}
                    </p>
                  </div>
                ))}
            </div>
          </section>
        )}

        {project.slug === "creator-hub" ? (
          <CreatorHubStudy />
        ) : project.slug === "voyager" ? (
          <VoyagerStudy />
        ) : project.slug === "vibe-coded-portfolio" ? (
          <VibeCodedPortfolioStudy />
        ) : (
          <p className="mt-10 text-muted-foreground leading-relaxed max-w-3xl">
            {"\n"}
          </p>
        )}

        {/*
        {project.pdfUrl && (
          <section className="mt-14">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Case study PDF</h2>
            {project.pdfs && project.pdfs.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.pdfs.map((pdf: { label: string; url: string }) => (
                  <button
                    key={pdf.url}
                    type="button"
                    onClick={() => setActivePdf(pdf.url)}
                    className={`rounded-full border px-4 py-2 text-xs md:text-sm transition-colors ${
                      activePdf === pdf.url
                        ? "border-foreground bg-foreground text-background"
                        : "border-foreground/25 text-foreground/80 hover:border-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {pdf.label}
                  </button>
                ))}
              </div>
            )}
            <ClientOnly fallback={<div className="w-full h-[600px] rounded-xl border border-border bg-muted/30" />}>
              {activeImages && activeImages.length > 0 ? (
                <ImageViewer key={activePdf} images={activeImages} title={project.title} />
              ) : (
                <PdfViewer
                  key={activePdf}
                  url={activePdf!}
                  title={project.title}
                  scale={isPitchDeck ? 1.4 : undefined}
                  hideSlider={isPitchDeck}
                />
              )}
            </ClientOnly>
            <a
              href={activePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Open PDF in new tab
            </a>
          </section>
        )}
        */}

        <section className="mt-20 border-t border-border">
          <div className="pt-20 pb-10">
            <p className="eyebrow mb-10">More AI projects</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to={p.path ?? "/ai/$slug"}
                  params={p.path ? undefined : { slug: p.slug }}
                  className="group block"
                >
                  <h3 className="font-serif text-2xl md:text-3xl group-hover:text-accent transition-colors whitespace-nowrap">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </SiteLayout>
  );
}
