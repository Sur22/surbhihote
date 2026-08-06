import { CaseStudySideNav } from "@/components/CaseStudySideNav";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/carousel";
import analytics from "@/assets/creator-hub-analytics-v2.png.asset.json";
import createPost from "@/assets/creator-hub-create-post-v2.png.asset.json";
import doubleDiamond from "@/assets/creator-hub-double-diamond-v2.png.asset.json";

const creatorHubSections = [
  { id: "overview", label: "Overview" },
  { id: "research", label: "Research" },
  { id: "landscape", label: "Landscape" },
  { id: "strategy", label: "Strategy" },
  { id: "design", label: "Solution" },
  { id: "reflection", label: "Reflection" },
];

function Section({
  title,
  children,
  divider = true,
  id,
}: {
  title?: string;
  children: React.ReactNode;
  divider?: boolean;
  id?: string;
}) {
  return (
    <>
      <section id={id} className="py-16 md:py-24 scroll-mt-24">
        {title && (
          <h2 className="font-serif text-4xl md:text-5xl mb-8 font-normal">
            {title}
          </h2>
        )}
        <div className="space-y-8">{children}</div>
      </section>
      {divider && <div className="rule" />}
    </>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-relaxed text-foreground/85">{children}</p>
  );
}

function Sub({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-serif text-3xl mb-6 font-medium">{children}</h3>
  );
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-4 list-disc pl-5 marker:text-foreground/40">
      {items.map((item, i) => (
        <li key={i} className="text-lg leading-relaxed text-foreground/85">
          {item}
        </li>
      ))}
    </ul>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="font-medium text-foreground">{children}</span>;
}

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure>
      <div className="overflow-hidden rounded-sm bg-secondary p-2">
        <img src={src} alt={alt} loading="lazy" className="w-full h-auto object-contain" />
      </div>
      <figcaption className="mt-4 text-sm text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

export function CreatorHubStudy() {
  return (
    <div className="mt-4">
      <CaseStudySideNav sections={creatorHubSections} />
      <div className="rule" />

      <Section id="overview" title="At a glance">
        <Bullets
          items={[
            <>
              <Label>What it is:</Label> an AI product design concept for Creator
              Hub, a cross-platform content workspace for social media creators.
            </>,
            <>
              <Label>My role:</Label> product designer, end to end, from problem
              framing and AI product strategy through interface design.
            </>,
            <>
              <Label>Disciplines:</Label> AI product design, UX design, product
              and business strategy.
            </>,
            <>
              <Label>AI approach:</Label> LLM application design using generative
              AI, retrieval-augmented generation (RAG), and evaluation for
              output quality and safety.
            </>,
            <>
              <Label>What it demonstrates:</Label> LLM and algorithm literacy, AI
              product thinking, business model reasoning, and interface design.
            </>,
            <>
              <Label>Context:</Label> a self-directed concept from the MIT xPRO
              Designing and Building AI Products and Services program.
            </>,
          ]}
        />
      </Section>

      <Section title="Overview">
        <Body>
          Most creators don't have a tooling problem, they have a fragmentation
          problem. Scheduling lives in one app, analytics in another, captions
          and hashtags in a third, and the creator becomes the glue between all
          of them. Creator Hub started from one question: what if a single
          workspace handled the repetitive parts of running a channel, while the
          creator kept full control of what actually gets published?
        </Body>
        <Body>
          I took the idea through a full product pass, from framing the problem
          to reasoning through the AI stack and designing the core interface. I
          wanted this piece to show two things at once: that I can carry a
          concept from a fuzzy problem to a defensible pilot, and that I
          understand the AI underneath well enough to make real product and
          design decisions with it.
        </Body>

        <div>
          <Sub>The Problem</Sub>
          <Body>From the creator's point of view:</Body>
          <div className="mt-6">
            <Bullets
              items={[
                <>
                  <Label>Repetitive manual work:</Label> reformatting one piece
                  of content for four platforms, by hand, every time.
                </>,
                <>
                  <Label>Analytics overwhelm:</Label> plenty of dashboards, very
                  little "so what do I do next."
                </>,
                <>
                  <Label>Inconsistent voice:</Label> tone drifts across
                  platforms and over time.
                </>,
                <>
                  <Label>Tool sprawl:</Label> app-switching just to publish a
                  single post.
                </>,
              ]}
            />
          </div>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            The common thread: creators spend their scarcest resource, time, on
            their lowest-judgment tasks.
          </p>
        </div>

        <div>
          <Sub>Who it's for</Sub>
          <Body>
            The pilot targets small to mid-sized creators, influencers, and
            freelancers publishing across Instagram, TikTok, YouTube, and
            Facebook. They have a growing audience but no enterprise tooling and
            no analyst on staff, which makes them both the most underserved
            group and the richest source of real workflow signal to learn from.
          </Body>
        </div>
      </Section>

      <Section id="research" title="Research">
        <div>
          <Sub>Validating the opportunity</Sub>
          <Body>
            Before designing anything, the concept has to survive a basic
            startup question: is this a real gap, and would anyone actually pay
            to close it? What I'd check first, in an early research phase:
          </Body>
          <div className="mt-6">
            <Bullets
              items={[
                <>
                  <Label>A crowded market is a signal, not a warning.</Label>{" "}
                  Buffer, Hootsuite, clip and caption tools already exist, which
                  proves creators will pay for help here. The gap isn't "no
                  tool," it's "too many disconnected tools." So the bet is
                  consolidation into one AI-native workflow, not inventing a
                  need from scratch.
                </>,
                <>
                  <Label>Look for spend, not stated interest.</Label> The
                  strongest evidence of willingness to pay is what creators
                  already do to cope: paying for schedulers, editors, or a
                  virtual assistant and stitching them together by hand. That
                  workaround spend is the demand, and it's what a single tool
                  would absorb.
                </>,
                <>
                  <Label>Test the pain before the product.</Label> I'd run
                  problem interviews that ask about the current workflow rather
                  than pitch the idea, then validate demand with a simple
                  landing page or waitlist and a concierge version run manually
                  behind the scenes, all before writing real code.
                </>,
                <>
                  <Label>Name what would kill it.</Label> If creators won't
                  connect their platform accounts, if leaving their current
                  stack is too painful, or if the AI's output isn't trusted
                  enough to actually save time, the concept doesn't hold.
                  Surfacing those risks early is far cheaper than discovering
                  them after building.
                </>,
              ]}
            />
          </div>
        </div>

        <div>
          <Sub>How I approached it</Sub>
          <Body>
            I ran the concept through two overlapping lenses: a four-stage AI
            design view (intelligence, business process, technology, tinkering)
            to pressure-test feasibility, and the double diamond to move from
            problem to pilot without landing in "pilot purgatory," where a
            prototype demos well and then never ships.
          </Body>
          <Figure
            src={doubleDiamond.url}
            alt="Double diamond framework diagram for the Creator Hub AI product design case study"
            caption="Mapping the concept across discover, define, develop, and deliver — from problem definition through solution development."
          />
        </div>
      </Section>

      <Section id="landscape" title="Competitive Landscape">
        <Body>
          The creator tooling market is crowded, and its own consensus is the
          useful part: practitioners broadly agree that no single tool does
          everything well, so most creators run a stack of separate apps and act
          as the glue between them. That fragmentation is the opening. I grouped
          the landscape by what each part of the stack is actually for:
        </Body>

        <div className="overflow-x-auto">
          <table className="w-full text-base text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="w-1/4 font-semibold text-foreground py-4 pr-6">
                  Category (examples)
                </th>
                <th className="w-1/3 font-semibold text-foreground py-4 pr-6">
                  Strong at
                </th>
                <th className="font-semibold text-foreground py-4">
                  The gap it leaves
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  category: "Scheduling suites (Buffer, Later, Hootsuite)",
                  strong: "Cross-platform scheduling, caption assistants, basic analytics",
                  gap: "AI is generic, not tuned to one creator's voice; analytics report data rather than a next step",
                },
                {
                  category: "AI repurposing (Opus Clip, CapCut)",
                  strong: "Turning one asset into many clips and formats, fast",
                  gap: "Single-purpose; sits outside the scheduling and analytics loop",
                },
                {
                  category: "Analytics tools (Metricool, Sprout Social)",
                  strong: "Deep performance data and competitor views",
                  gap: "Insight without action; the creator still has to decide what to do with it",
                },
                {
                  category: "General AI writing (ChatGPT, Jasper, Claude)",
                  strong: "Flexible drafting and voice matching",
                  gap: "Not connected to the creator's own accounts, data, or calendar",
                },
              ].map((row) => (
                <tr
                  key={row.category}
                  className="border-b border-border align-top"
                >
                  <td className="py-5 pr-6 text-foreground/85 leading-relaxed">
                    {row.category}
                  </td>
                  <td className="py-5 pr-6 text-foreground/85 leading-relaxed">
                    {row.strong}
                  </td>
                  <td className="py-5 text-foreground/85 leading-relaxed">
                    {row.gap}
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

        <Body>
          <Label>Where Creator Hub fits.</Label> It doesn't try to beat any one
          of these at its own game. It targets the seam between them: one
          workspace that grounds AI in the creator's own history so suggestions
          match their voice, turns analytics into a recommended next action, and
          keeps the person approving what publishes. The competitor isn't a
          single feature, it's the fragmentation itself.
        </Body>
      </Section>



      <Section id="strategy" title="Strategy">
        <div>
          <Sub>Product + Business Strategy</Sub>
          <Body>
            <Label>Scope, kept narrow on purpose.</Label> The pilot does a few
            things well rather than many things halfway: content analysis,
            posting optimization, cross-platform scheduling, and copy and SEO
            assistance. Higher-risk bets (fully autonomous content generation,
            video synthesis, real-time audience prediction) sit outside the
            first release to keep build cost and risk low.
          </Body>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            <Label>Where the durable advantage comes from.</Label> The advantage
            isn't any single feature, it's the compounding loop. More creators
            produce more usage signal (styles, prompts, what performs), which
            sharpens the suggestions, which attracts more creators. Early on
            that loop is the growth engine. Later, tuned creator voice, saved
            workflows, and connected content history become real switching
            costs, so retention comes from accumulated value rather than
            lock-in for its own sake.
          </p>
        </div>

        <div>
          <Sub>Designing the AI: model choice, RAG, and evaluation</Sub>
          <Body>
            This is the part I most wanted to get right, because a designer who
            can reason about the model makes better product decisions.
          </Body>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            <Label>Buy before you build.</Label> I'd start with generative AI
            through API-based foundation models rather than train anything
            custom. Modern large language models (LLMs) already handle the core
            jobs here well: generation, summarization, classification, ranking.
            Building from scratch would spend time and money reinventing a
            solved problem. The rule I'd apply: only invest in a custom model
            when you have proprietary data and a differentiation need that
            off-the-shelf can't meet, for example a creator-voice model once
            there's enough per-creator history to justify it.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            <Label>Grounding the outputs.</Label> Generic suggestions are the
            failure mode for a tool like this. A retrieval-augmented generation
            (RAG) layer over each creator's own history and performance data
            lets the system anchor recommendations in that specific account.
            That does two things at once: it makes suggestions personal instead
            of boilerplate, and it lowers the chance of hallucinated or
            off-brand output, because the model reasons from real, relevant
            context instead of guessing.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            <Label>Evaluation, because you can't ship AI on vibes.</Label> I'd
            measure three layers: output quality (is a suggestion grounded,
            relevant, complete), safety (hallucination, resistance to prompt
            injection and unsafe content), and performance (response latency,
            since for a creator tool fast output is a UX feature, not a
            nice-to-have).
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            <Label>Designing against the failure modes.</Label> Two I'd plan for
            first. Poor generalization: the model handles common formats like a
            YouTube script or an Instagram caption and quietly falls apart for
            niche creators. Mitigation is diverse evaluation sets, a
            template-plus-customization layer instead of one-size-fits-all, and
            a lightweight "improve this output" loop that keeps the system
            learning from corrections. And hallucination or off-brand output,
            the single biggest trust breaker, handled with retrieval grounding,
            human review for sensitive categories, and monitoring for drift
            rather than a one-time check.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            The principle under all of it: the creator stays in control. The AI
            drafts, suggests, and automates the repetitive work. The human
            always approves what publishes.
          </p>
        </div>
      </Section>

      <Section id="design" title="Design">
        <Carousel opts={{ loop: true }} className="relative group">
          <CarouselContent>
            {[
              {
                src: createPost.url,
                alt: "Creator Hub wireframe showing the AI suggestion, review, and publish flow",
                caption:
                  "One workspace instead of four apps — the AI suggestion, review, and publish flow.",
              },
              {
                src: analytics.url,
                alt: "Creator Hub screen turning content analytics into a recommended next action",
                caption:
                  "Turning analytics into a clear next action, not another dashboard.",
              },
            ].map((img) => (
              <CarouselItem key={img.caption}>
                <figure>
                  <div className="overflow-hidden rounded-sm bg-secondary p-2">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <figcaption className="mt-4 text-sm text-muted-foreground">
                    {img.caption}
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 top-1/2 z-30 -translate-y-1/2" />
          <CarouselNext className="right-4 top-1/2 z-30 -translate-y-1/2" />
          <CarouselDots className="relative z-20 mt-6" />
        </Carousel>
      </Section>

      <Section id="reflection" title="Reflection" divider={false}>
        <div>
          <Sub>Approach to the pilot</Sub>
          <Body>
            I'd sequence by opportunity against risk: start with the
            high-value, lower-risk features that run on existing model APIs,
            learn from a small group of real creators, then scale
            personalization and analytics depth only if trust holds. If the
            signals point the other way, the right move is to simplify the
            workflow and dial automation back, not push harder.
          </Body>
        </div>
        <div>
          <Sub>What this shows</Sub>
          <Body>
            Designing this clarified how much of AI product work is judgment
            about where the model should stop. The interesting decisions weren't
            about what the system could generate, but about what it should hand
            back to the creator to approve, and how to make that handoff feel
            fast instead of like extra work. The other half was knowing where to
            lean in: using AI to fill the gaps where creators get stuck, turning
            the data the platforms already collect into a clear next step.
          </Body>
        </div>
      </Section>

      <div id="case-study-end" />
    </div>
  );
}
