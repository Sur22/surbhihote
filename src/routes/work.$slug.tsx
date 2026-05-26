import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollProgress } from "@/components/ScrollProgress";
import { caseStudies, getCaseStudy, type CaseStudy } from "@/lib/case-studies";

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

  return (
    <SiteLayout>
      <ScrollProgress />

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
        <h1 className="display text-[clamp(3rem,9vw,8rem)] mb-10">{c.title}</h1>
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

      {/* Overview + Goal */}
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 pb-24">
        <div className="space-y-16">
          <div>
            <h2 className="font-serif text-3xl mb-6">Overview</h2>
            <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">{c.overview}</p>
          </div>
          <div>
            <h2 className="font-serif text-3xl mb-6">Goal</h2>
            <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">{c.goal}</p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1100px] px-6 md:px-10"><div className="rule" /></div>

      {/* Research */}
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 py-24">
        <h2 className="font-serif text-5xl md:text-6xl font-bold mb-12">Research</h2>
        <div className="space-y-12">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8">
            <h3 className="text-lg text-foreground/85">Stakeholder Interview</h3>
            <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
              {c.research.stakeholderInterview}
            </p>
          </div>
          <div className="grid md:grid-cols-[1fr_2fr] gap-8">
            <h3 className="text-lg text-foreground/85">User Interview</h3>
            <p className="text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
              {c.research.userInterview}
            </p>
          </div>
        </div>

        {/* User Interview Insights */}
        <div className="mt-16 rounded-sm bg-foreground text-background px-6 md:px-16 py-16">
          <h3 className="font-serif text-3xl md:text-4xl text-center mb-12">User interview Insights</h3>
          <div className="border-l border-background/40 pl-8 md:pl-12 space-y-10 max-w-3xl mx-auto">
            {c.research.userInterviewInsights.map((q, i) => (
              <figure key={i} className="text-center italic">
                <blockquote className="text-lg md:text-xl leading-relaxed">"{q.quote}"</blockquote>
                <figcaption className="mt-2 text-base">-{q.author}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Survey */}
        <div className="mt-16">
          <h3 className="font-serif text-3xl mb-6">Survey</h3>
          <div
            className="text-lg leading-relaxed text-foreground/85 space-y-4 [&_strong]:font-semibold [&_strong]:text-foreground"
            dangerouslySetInnerHTML={{
              __html: c.survey
                .split("\n\n")
                .map((p) => `<p>${p}</p>`)
                .join(""),
            }}
          />
        </div>
      </section>

      <div className="mx-auto max-w-[1100px] px-6 md:px-10"><div className="rule" /></div>

      {/* Sections */}
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 py-24">
        <div className="space-y-20">
          {c.sections.map((s, i) => (
            <article key={i}>
              <div className="mb-6">
                <h3 className="font-serif text-3xl">{s.heading}</h3>
              </div>
              <p className="text-lg leading-relaxed text-foreground/85">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[1100px] px-6 md:px-10"><div className="rule" /></div>

      {/* Outcomes */}
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 py-24">
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
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 py-20">
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
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 py-20">
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
