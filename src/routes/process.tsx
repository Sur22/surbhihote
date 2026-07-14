import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

const URL = "https://surbhihote.com/process";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "UX Design Process — Surbhi Hote" },
      {
        name: "description",
        content:
          "A technically-grounded, data-driven UX design process — how I move from research and technical discovery to prototyping, validation, and shipped outcomes.",
      },
      { property: "og:title", content: "UX Design Process — Surbhi Hote" },
      {
        property: "og:description",
        content:
          "How I run a UX design process rooted in technical grounding and data-driven decisions — from discovery to launch.",
      },
      { property: "og:url", content: URL },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "UX Design Process — a technically-grounded, data-driven guide",
          author: { "@type": "Person", name: "Surbhi Hote" },
          mainEntityOfPage: URL,
          about: "UX design process",
        }),
      },
    ],
  }),
  component: ProcessPage,
});

const phases = [
  {
    n: "01",
    t: "Discovery & Technical Grounding",
    d: "Every engagement starts with a joint read of the problem across product, engineering, and users. I map the existing system — data models, APIs, constraints, and the codebase's real seams — before sketching a single screen. This upfront technical grounding is what stops designs from being 'beautiful but infeasible' and shortens the round-trips with engineering later.",
    outputs: ["Problem statement & success metrics", "System & data-flow map", "Constraint list (technical, business, timeline)"],
  },
  {
    n: "02",
    t: "Research & Evidence",
    d: "Qualitative interviews and contextual inquiry pair with quantitative signal — funnels, event logs, support tickets, session recordings. I look for the pattern in the data that a single interview can't show, then triangulate it against what users say. The output is a small, ranked set of jobs-to-be-done, not a 40-page report.",
    outputs: ["User interviews (5–8 per segment)", "Behavioral analytics review", "Jobs-to-be-done & pain-point ranking"],
  },
  {
    n: "03",
    t: "Framing & Opportunities",
    d: "I translate research into a decision doc: which problems are worth solving now, what we're deliberately not doing, and the measurable outcome we're chasing. This is where 'data-driven' becomes real — hypotheses are written with the metric they'll move and the threshold that counts as success.",
    outputs: ["Opportunity framing", "Hypotheses with target metrics", "Prioritization matrix (impact vs. effort)"],
  },
  {
    n: "04",
    t: "Design & Prototyping",
    d: "Low-fidelity flows first, then component-level design in the existing system. I prototype the risky parts — the interaction, the empty state, the error path — not the happy path everyone already agrees on. AI-assisted prototyping speeds up variant exploration; peer review keeps it honest.",
    outputs: ["User flows & wireframes", "Interactive prototypes", "Design-system components"],
  },
  {
    n: "05",
    t: "Validation",
    d: "Usability tests on the prototype, then instrumented A/B or staged rollouts on the build. I write the analysis plan before the test runs so the result can't be rationalized after the fact. Failed tests are the point — they're the cheapest way to learn.",
    outputs: ["Usability test plan & findings", "Analytics instrumentation plan", "Go / iterate / kill decision"],
  },
  {
    n: "06",
    t: "Launch & Measure",
    d: "Design work isn't done at handoff — it's done when the metric moves. I stay close through launch: watching the dashboards, reading support tickets, and shipping the small follow-up fixes that turn a good release into a durable one.",
    outputs: ["Launch checklist & QA", "Outcome dashboard", "Post-launch iteration log"],
  },
];

const principles = [
  {
    t: "Technical grounding beats hand-off",
    d: "An engineering background (IT engineering + MS in Computer Science) means I can read the code, understand the constraints, and design for what's actually buildable — not for a slide.",
  },
  {
    t: "Data-driven, not data-decorated",
    d: "Every design decision is tied to a metric or a piece of research. If I can't name what the change should move, I don't ship it.",
  },
  {
    t: "Outcomes over outputs",
    d: "A shipped screen is not the goal. A measurable change in task success, error rate, adoption, or revenue is.",
  },
  {
    t: "AI-accelerated, human-owned",
    d: "AI helps me explore variants and pressure-test copy faster. Judgment, research, and the final call stay with the designer.",
  },
];

function ProcessPage() {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-[1100px] px-6 md:px-10 pt-16 md:pt-24 pb-16 md:pb-24">
        <p className="eyebrow mb-6 text-accent">A guide</p>
        <h1 className="display text-[clamp(2.25rem,6vw,5rem)] mb-8">My UX design process</h1>
        <p className="text-lg md:text-xl leading-relaxed text-foreground/80 max-w-3xl">
          Most UX process guides sell a tidy diamond and a set of ceremonies. This one is different: it's the process I actually
          run, grounded in the technical realities of the systems I design for and in the data those systems produce. It's the
          shape of the work across twelve years of shipping enterprise, SaaS, and consumer software.
        </p>

        <div className="rule my-12 md:my-16" />

        <section aria-labelledby="principles">
          <p className="eyebrow mb-8">Principles</p>
          <h2 id="principles" className="font-serif text-3xl md:text-4xl mb-10">What makes this process different</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {principles.map((p) => (
              <div key={p.t}>
                <h3 className="font-serif text-2xl mb-3">{p.t}</h3>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="rule my-12 md:my-16" />

        <section aria-labelledby="phases">
          <p className="eyebrow mb-8">The phases</p>
          <h2 id="phases" className="font-serif text-3xl md:text-4xl mb-10">Six phases, end to end</h2>
          <div className="flex flex-col gap-12 md:gap-16">
            {phases.map((p) => (
              <div key={p.n} className="grid md:grid-cols-12 gap-6 md:gap-10">
                <div className="md:col-span-3">
                  <p className="eyebrow text-accent mb-2">{p.n}</p>
                  <h3 className="font-serif text-2xl md:text-3xl">{p.t}</h3>
                </div>
                <div className="md:col-span-9 space-y-5">
                  <p className="text-base md:text-lg leading-relaxed text-foreground/80">{p.d}</p>
                  <div>
                    <p className="eyebrow mb-3">Typical outputs</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-muted-foreground">
                      {p.outputs.map((o) => (
                        <li key={o}>{o}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="rule my-12 md:my-16" />

        <section aria-labelledby="in-practice">
          <p className="eyebrow mb-8">In practice</p>
          <h2 id="in-practice" className="font-serif text-3xl md:text-4xl mb-6">See it applied</h2>
          <p className="text-base md:text-lg leading-relaxed text-foreground/80 max-w-3xl mb-8">
            The clearest way to judge a process is by what it ships. Each case study walks through how these phases played out
            on a specific problem — the constraints, the research, the trade-offs, and the measurable outcome at the end.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/"
              hash="case-studies"
              className="inline-flex items-center gap-2 border border-foreground/40 hover:border-foreground px-6 py-3 text-sm transition-colors"
            >
              Read the case studies <span aria-hidden>→</span>
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-border hover:border-foreground px-6 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About me <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      </article>
    </SiteLayout>
  );
}
