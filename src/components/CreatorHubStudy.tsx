import analytics from "@/assets/creator-hub-analytics-v2.png.asset.json";
import createPost from "@/assets/creator-hub-create-post-v2.png.asset.json";

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-2xl md:text-3xl mt-16 mb-6">{children}</h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
      {children}
    </p>
  );
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-4 space-y-3 max-w-3xl list-disc pl-5 marker:text-foreground/40">
      {items.map((item, i) => (
        <li key={i} className="text-muted-foreground leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CreatorHubStudy() {
  return (
    <div>
      <H2>Hero</H2>
      <P>
        Creator Hub is an AI-assisted workspace that helps social media creators
        plan, repurpose, and optimize content across platforms, without drowning
        in tools.
      </P>
      <Bullets
        items={[
          <>
            <strong className="text-foreground/90">Role:</strong> Product
            Designer (concept, end to end)
          </>,
          <>
            <strong className="text-foreground/90">Context:</strong>{" "}
            Self-directed concept from the MIT xPRO Designing and Building AI
            Products and Services program
          </>,
          <>
            <strong className="text-foreground/90">Focus:</strong> AI product
            strategy, technical feasibility, and interface design
          </>,
        ]}
      />

      <H2>At a glance</H2>
      <Bullets
        items={[
          <>
            <strong className="text-foreground/90">What it is:</strong> an AI
            product design concept for Creator Hub, a cross-platform content
            workspace for social media creators.
          </>,
          <>
            <strong className="text-foreground/90">My role:</strong> product
            designer, end to end, from problem framing and AI product strategy
            through interface design.
          </>,
          <>
            <strong className="text-foreground/90">Disciplines:</strong> AI
            product design, UX design, product and business strategy.
          </>,
          <>
            <strong className="text-foreground/90">AI approach:</strong> LLM
            application design using generative AI, retrieval-augmented
            generation (RAG), and evaluation for output quality and safety.
          </>,
          <>
            <strong className="text-foreground/90">
              What it demonstrates:
            </strong>{" "}
            LLM and algorithm literacy, AI product thinking, business model
            reasoning, and interface design.
          </>,
        ]}
      />

      <H2>Overview</H2>
      <P>
        Most creators don't have a tooling problem, they have a fragmentation
        problem. Scheduling lives in one app, analytics in another, captions and
        hashtags in a third, and the creator becomes the glue between all of
        them. Creator Hub started from one question: what if a single workspace
        handled the repetitive parts of running a channel, while the creator
        kept full control of what actually gets published?
      </P>
      <P>
        I took the idea through a full product pass, from framing the problem to
        reasoning through the AI stack and designing the core interface. I
        wanted this piece to show two things at once: that I can carry a concept
        from a fuzzy problem to a defensible pilot, and that I understand the AI
        underneath well enough to make real product and design decisions with
        it.
      </P>

      <H2>The problem</H2>
      <P>From the creator's point of view:</P>
      <Bullets
        items={[
          <>
            <strong className="text-foreground/90">
              Repetitive manual work:
            </strong>{" "}
            reformatting one piece of content for four platforms, by hand, every
            time.
          </>,
          <>
            <strong className="text-foreground/90">
              Analytics overwhelm:
            </strong>{" "}
            plenty of dashboards, very little "so what do I do next."
          </>,
          <>
            <strong className="text-foreground/90">Inconsistent voice:</strong>{" "}
            tone drifts across platforms and over time.
          </>,
          <>
            <strong className="text-foreground/90">Tool sprawl:</strong>{" "}
            app-switching just to publish a single post.
          </>,
        ]}
      />
      <P>
        The common thread: creators spend their scarcest resource, time, on
        their lowest-judgment tasks.
      </P>

      <H2>Who it's for</H2>
      <P>
        The pilot targets small to mid-sized creators, influencers, and
        freelancers publishing across Instagram, TikTok, YouTube, and Facebook.
        They have a growing audience but no enterprise tooling and no analyst on
        staff, which makes them both the most underserved group and the richest
        source of real workflow signal to learn from.
      </P>

      <H2>Validating the opportunity</H2>
      <P>
        Before designing anything, the concept has to survive a basic startup
        question: is this a real gap, and would anyone actually pay to close it?
        What I'd check first, in an early research phase:
      </P>
      <Bullets
        items={[
          <>
            <strong className="text-foreground/90">
              A crowded market is a signal, not a warning.
            </strong>{" "}
            Buffer, Hootsuite, clip and caption tools already exist, which
            proves creators will pay for help here. The gap isn't "no tool," it's
            "too many disconnected tools." So the bet is consolidation into one
            AI-native workflow, not inventing a need from scratch.
          </>,
          <>
            <strong className="text-foreground/90">
              Look for spend, not stated interest.
            </strong>{" "}
            The strongest evidence of willingness to pay is what creators
            already do to cope: paying for schedulers, editors, or a virtual
            assistant and stitching them together by hand. That workaround spend
            is the demand, and it's what a single tool would absorb.
          </>,
          <>
            <strong className="text-foreground/90">
              Test the pain before the product.
            </strong>{" "}
            I'd run problem interviews that ask about the current workflow
            rather than pitch the idea, then validate demand with a simple
            landing page or waitlist and a concierge version run manually behind
            the scenes, all before writing real code.
          </>,
          <>
            <strong className="text-foreground/90">
              Name what would kill it.
            </strong>{" "}
            If creators won't connect their platform accounts, if leaving their
            current stack is too painful, or if the AI's output isn't trusted
            enough to actually save time, the concept doesn't hold. Surfacing
            those risks early is far cheaper than discovering them after
            building.
          </>,
        ]}
      />

      <H2>How I approached it</H2>
      <P>
        I ran the concept through two overlapping lenses: a four-stage AI design
        view (intelligence, business process, technology, tinkering) to
        pressure-test feasibility, and the double diamond to move from problem
        to pilot without landing in "pilot purgatory," where a prototype demos
        well and then never ships.
      </P>

      <H2>Product strategy and business thinking</H2>
      <P>
        <strong className="text-foreground/90">
          Scope, kept narrow on purpose.
        </strong>{" "}
        The pilot does a few things well rather than many things halfway:
        content analysis, posting optimization, cross-platform scheduling, and
        copy and SEO assistance. Higher-risk bets (fully autonomous content
        generation, video synthesis, real-time audience prediction) sit outside
        the first release to keep build cost and risk low.
      </P>
      <P>
        <strong className="text-foreground/90">
          Where the durable advantage comes from.
        </strong>{" "}
        The advantage isn't any single feature, it's the compounding loop. More
        creators produce more usage signal (styles, prompts, what performs),
        which sharpens the suggestions, which attracts more creators. Early on
        that loop is the growth engine. Later, tuned creator voice, saved
        workflows, and connected content history become real switching costs, so
        retention comes from accumulated value rather than lock-in for its own
        sake.
      </P>

      <H2>Designing the AI: model choice, RAG, and evaluation</H2>
      <P>
        This is the part I most wanted to get right, because a designer who can
        reason about the model makes better product decisions.
      </P>
      <P>
        <strong className="text-foreground/90">Buy before you build.</strong>{" "}
        I'd start with generative AI through API-based foundation models rather
        than train anything custom. Modern large language models (LLMs) already
        handle the core jobs here well: generation, summarization,
        classification, ranking. Building from scratch would spend time and
        money reinventing a solved problem. The rule I'd apply: only invest in a
        custom model when you have proprietary data and a differentiation need
        that off-the-shelf can't meet, for example a creator-voice model once
        there's enough per-creator history to justify it.
      </P>
      <P>
        <strong className="text-foreground/90">Grounding the outputs.</strong>{" "}
        Generic suggestions are the failure mode for a tool like this. A
        retrieval-augmented generation (RAG) layer over each creator's own
        history and performance data lets the system anchor recommendations in
        that specific account. That does two things at once: it makes
        suggestions personal instead of boilerplate, and it lowers the chance of
        hallucinated or off-brand output, because the model reasons from real,
        relevant context instead of guessing.
      </P>
      <P>
        <strong className="text-foreground/90">
          Evaluation, because you can't ship AI on vibes.
        </strong>{" "}
        I'd measure three layers: output quality (is a suggestion grounded,
        relevant, complete), safety (hallucination, resistance to prompt
        injection and unsafe content), and performance (response latency, since
        for a creator tool fast output is a UX feature, not a nice-to-have).
      </P>
      <P>
        <strong className="text-foreground/90">
          Designing against the failure modes.
        </strong>{" "}
        Two I'd plan for first. Poor generalization: the model handles common
        formats like a YouTube script or an Instagram caption and quietly falls
        apart for niche creators. Mitigation is diverse evaluation sets, a
        template-plus-customization layer instead of one-size-fits-all, and a
        lightweight "improve this output" loop that keeps the system learning
        from corrections. And hallucination or off-brand output, the single
        biggest trust breaker, handled with retrieval grounding, human review
        for sensitive categories, and monitoring for drift rather than a
        one-time check.
      </P>
      <P>
        The principle under all of it: the creator stays in control. The AI
        drafts, suggests, and automates the repetitive work. The human always
        approves what publishes.
      </P>

      <H2>The design work</H2>
      <figure className="mt-8 overflow-hidden rounded-xl border border-border bg-muted/30">
        <img
          src={createPost.url}
          alt="Creator Hub wireframe showing the AI suggestion, review, and publish flow"
          loading="lazy"
          className="w-full h-auto"
        />
        <figcaption className="px-5 py-4 text-sm text-muted-foreground">
          One workspace instead of four apps — the AI suggestion, review, and
          publish flow.
        </figcaption>
      </figure>
      <figure className="mt-8 overflow-hidden rounded-xl border border-border bg-muted/30">
        <img
          src={analytics.url}
          alt="Creator Hub screen turning content analytics into a recommended next action"
          loading="lazy"
          className="w-full h-auto"
        />
        <figcaption className="px-5 py-4 text-sm text-muted-foreground">
          Turning analytics into a clear next action, not another dashboard.
        </figcaption>
      </figure>

      <H2>Approach to the pilot</H2>
      <P>
        I'd sequence by opportunity against risk: start with the high-value,
        lower-risk features that run on existing model APIs, learn from a small
        group of real creators, then scale personalization and analytics depth
        only if trust holds. If the signals point the other way, the right move
        is to simplify the workflow and dial automation back, not push harder.
      </P>

      <H2>What this shows</H2>
      <P>
        Designing this clarified how much of AI product work is judgment about
        where the model should stop. The interesting decisions weren't about
        what the system could generate, but about what it should hand back to
        the creator to approve — and how to make that handoff feel fast rather
        than like extra work.
      </P>
    </div>
  );
}
