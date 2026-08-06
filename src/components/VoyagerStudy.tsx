import { CaseStudySideNav } from "@/components/CaseStudySideNav";
import itinerary from "@/assets/voyager-itinerary.png.asset.json";
import map from "@/assets/voyager-map.png.asset.json";
import chat from "@/assets/voyager-chat.png.asset.json";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "ai-process", label: "Using AI" },
  { id: "company", label: "Designing as a company" },
  { id: "tips", label: "Tips and tricks" },
  { id: "pros-cons", label: "Pros and cons" },
  { id: "tools", label: "Tools by stage" },
  { id: "takeaways", label: "Takeaways" },
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
  return <h3 className="font-serif text-3xl mb-6 font-medium">{children}</h3>;
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
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-auto object-contain"
        />
      </div>
      <figcaption className="mt-4 text-sm text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

function ToolsTable() {
  const rows = [
    {
      stage: "Discovery and user research",
      tools: "Perplexity, Claude",
      use: "Synthesizing sources, framing personas and user needs",
      reliability: "Very high",
    },
    {
      stage: "Market and competitive analysis",
      tools: "Scholar GPT, Perplexity",
      use: "Market sizing, competitor scans, sourcing",
      reliability: "High to very high",
    },
    {
      stage: "Fact-checking and citations",
      tools: "Perplexity",
      use: "Verifying every market claim against a primary source",
      reliability: "Very high",
    },
    {
      stage: "Strategy and product thinking",
      tools: "Claude",
      use: "Value proposition canvas, positioning, GTM, risk framing",
      reliability: "Very high",
    },
    {
      stage: "Microcopy and content",
      tools: "ChatGPT, Claude",
      use: "UI copy, loading states, empty states, labels",
      reliability: "High to very high",
    },
    {
      stage: "UI exploration",
      tools: "Google Stitch",
      use: "Fast layout and screen exploration",
      reliability: "High",
    },
    {
      stage: "Hi-fi design and prototyping",
      tools: "Figma Make",
      use: "Exploration through to hi-fi screens",
      reliability: "High",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="py-4 pr-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Stage
            </th>
            <th className="py-4 pr-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Tool(s)
            </th>
            <th className="py-4 pr-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              What I used it for
            </th>
            <th className="py-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Reliability
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/60 last:border-0">
              <td className="py-4 pr-6 text-base leading-relaxed text-foreground/85 align-top">
                {row.stage}
              </td>
              <td className="py-4 pr-6 text-base leading-relaxed text-foreground/85 align-top">
                {row.tools}
              </td>
              <td className="py-4 pr-6 text-base leading-relaxed text-foreground/85 align-top">
                {row.use}
              </td>
              <td className="py-4 text-base leading-relaxed text-foreground/85 align-top">
                {row.reliability}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function VoyagerStudy() {
  return (
    <div className="mt-4">
      <CaseStudySideNav sections={sections} />
      <div className="rule" />

      <Section id="overview" title="Overview">
        <Body>
          Voyager AI is a travel-planning product for people who love to travel
          but hate the planning. I took it from a blank page to an investor-ready
          pitch on my own, and I ran AI tools through every stage of the work:
          discovery research, competitive and market analysis, ideation, hi-fi
          design, usability testing, and a full pitch deck.
        </Body>
        <Body>
          I had two goals. First, to find out how far AI could compress a
          complete product design process without the output turning generic.
          Second, to show something I believe is true about this role: design and
          business are the same conversation. A designer who can go from a user
          problem to a fundable product story is worth more to a startup than one
          who stops at the screens.
        </Body>
        <Body>
          The source material for this case study runs to four documents and
          dozens of pages. This page is the short version. If you want the depth,
          the phase decks and the pitch deck are linked at the bottom.
        </Body>
      </Section>

      <Section id="ai-process" title="Using AI across the design process">
        <Body>
          I did not use one AI tool for everything. I used each one for the thing
          it was actually good at, and I kept the judgment for myself.
        </Body>

        <div>
          <Sub>Discovery</Sub>
          <Body>
            I started with brand and positioning: a moodboard, a color system,
            logo directions, and early personas for the "time-strapped
            professional" I was designing for. AI was useful here for fast
            exploration and for synthesizing scattered inputs into something I
            could react to. The taste calls were mine.
          </Body>
        </div>

        <div>
          <Sub>Research and ideation</Sub>
          <Body>
            This is where AI earned its keep and also where it needed the most
            supervision. I built a competitive analysis, a feature-gap breakdown,
            and a first-pass market opportunity model. I wrote survey and
            user-needs questions, mapped the end-to-end journey, and pulled out
            the priority pain points that would drive the design. Crucially, I
            fact-checked every market claim the AI produced against primary
            sources, and I ended up with a short list of five verified citations.
            More on why that matters below.
          </Body>
        </div>

        <div>
          <Sub>Execution and testing</Sub>
          <Body>
            I moved into hi-fi screens and prototyping, then ran the flows
            against the pain points I had identified earlier, so the design was
            answering real problems rather than decorating a wireframe.
          </Body>
          <div className="mt-8">
            <Figure
              src={itinerary.url}
              alt="Voyager AI generated itinerary screen"
              caption="A generated itinerary view that ties flights, stays, and daily activities into one editable plan."
            />
          </div>
        </div>

        <div>
          <Sub>The business layer</Sub>
          <Body>
            Alongside the product, I built a complete investor pitch: the problem
            and solution framing, market sizing with TAM, SAM, and SOM, a pricing
            model across consumer and B2B tiers, user-growth and financial
            projections, a go-to-market plan, a value proposition canvas, and a
            risk register with named owners and mitigations. This is the part most
            design case studies skip, and it is the part that changes how the
            design reads. When you have to defend a pricing tier or a go-to-market
            bet, your product decisions get sharper.
          </Body>
        </div>
      </Section>

      <Section id="company" title="Designing it as a company, not a screen exercise">
        <Body>
          I did not treat Voyager as a set of screens. I treated it as a company.
          I sized the market, chose a wedge (busy professionals who travel a few
          times a year), and priced against it. I mapped a value proposition
          canvas so every pain had a named product response and every job had a
          direct feature. I wrote a risk register covering the
          recommendation-quality risk, the incumbent-response risk, and the
          free-to-premium conversion risk, each with a mitigation.
        </Body>
        <Body>
          None of this claims to be the final answer. What it reflects is a way
          of working: holding the product view and the business view at the same
          time, so the design decisions are grounded in why the product exists
          and how it would sustain itself. On a small team, that overlap tends to
          be where a designer is most useful.
        </Body>
        <div className="mt-8">
          <Figure
            src={map.url}
            alt="Voyager AI map-based travel planning interface"
            caption="Map-based exploration lets travelers see options in context rather than scrolling through lists."
          />
        </div>
      </Section>

      <Section id="tips" title="Tips and tricks">
        <Body>Things I would tell any designer picking up these tools:</Body>
        <Bullets
          items={[
            <>
              <Label>Match the tool to the task.</Label> No single model is best
              at everything. Research synthesis, strategy, microcopy, and UI
              exploration all have a tool that does them better than the others.
              Forcing one tool to cover all four is how you get mediocre output
              four times over.
            </>,
            <>
              <Label>Fact-check everything the AI tells you about the world.</Label>{" "}
              Market sizes, growth rates, and survey stats are the exact kind of
              thing AI will state confidently and get wrong, and it will invent a
              source to match. I verified every number against a primary source.
              If a claim is going in front of an investor, it needs a real
              citation behind it.
            </>,
            <>
              <Label>Feed it your framework, not just your question.</Label> Hand
              the AI the actual method you work in, a value proposition canvas,
              an NN/g goal hierarchy, a journey-map structure, and the output
              comes back in a shape you can use instead of a shape you have to
              rebuild.
            </>,
            <>
              <Label>Use it for the first 70 percent, keep the last 30 for yourself.</Label>{" "}
              AI is fast at breadth and drafts. Hierarchy, taste, edge cases,
              and the decision about what to throw away are still the job. That
              last 30 percent is where the design actually gets good.
            </>,
            <>
              <Label>Prompt for reusable structure.</Label> Ask for personas,
              comparisons, and tables in a consistent format up front. You will
              spend far less time reformatting and far more time thinking.
            </>,
            <>
              <Label>Argue with it.</Label> Ask the model to make the counter-case,
              poke holes in your positioning, or tell you why an investor would
              pass. It is a decent sparring partner as long as you do not mistake
              it for a decision-maker.
            </>,
          ]}
        />
      </Section>

      <Section id="pros-cons" title="Pros and cons">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Sub>What worked</Sub>
            <Bullets
              items={[
                <>
                  <Label>Speed.</Label> Work that would normally take weeks and a
                  small team compressed into a few focused days.
                </>,
                <>
                  <Label>Breadth on my own.</Label> As a solo designer I could cover
                  research, strategy, and the business case that would usually be
                  spread across three roles.
                </>,
                <>
                  <Label>More directions, lower cost.</Label> Exploring a fifth or
                  sixth option stopped being expensive, so I explored more before
                  committing.
                </>,
                <>
                  <Label>A strong first draft, fast, for microcopy, competitive scans,</Label>{" "}
                  and market framing.
                </>,
              ]}
            />
          </div>
          <div>
            <Sub>What did not</Sub>
            <Bullets
              items={[
                <>
                  <Label>Confident and wrong.</Label> Hallucinated statistics and
                  fabricated citations were a constant risk, which is exactly why
                  the fact-checking step was not optional.
                </>,
                <>
                  <Label>Output drifts to the average.</Label> Left alone, AI produces
                  the "top 10 list" version of everything. It takes a designer to
                  push it past the obvious.
                </>,
                <>
                  <Label>It cannot do the human parts.</Label> It will not sit with a
                  real user, feel where a flow breaks, or own a taste call. Those
                  stayed with me.
                </>,
                <>
                  <Label>Easy to skip the thinking.</Label> The biggest risk is letting
                  the tool do the reasoning instead of just the typing. The work
                  is still yours to own.
                </>,
              ]}
            />
          </div>
        </div>
      </Section>

      <Section id="tools" title="Tools by stage">
        <ToolsTable />
        <div className="mt-8">
          <Figure
            src={chat.url}
            alt="Voyager AI conversational travel assistant chat interface"
            caption="The conversational interface handles follow-up questions and refinements without restarting the search."
          />
        </div>
      </Section>

      <Section id="takeaways" title="Takeaways" divider={false}>
        <Bullets
          items={[
            <>
              <Label>AI compresses the process. It does not replace the judgment.</Label>{" "}
              The value is in what you point it at and what you have the taste
              to discard.
            </>,
            <>
              <Label>The designer's edge has moved.</Label> Producing artifacts is
              now cheap. Deciding which artifacts matter, and verifying what the
              machine hands back, is the skill worth paying for.
            </>,
            <>
              <Label>Doing the business case made the design better.</Label> Every
              time I had to defend a price or a growth assumption, a product
              decision got clearer. The two disciplines are not separate.
            </>,
            <>
              <Label>For a startup, this is a force multiplier.</Label> A designer
              who can run research, ship the product, and stand up a credible
              business story covers a lot of ground for a small team.
            </>,
          ]}
        />
      </Section>
    </div>
  );
}
