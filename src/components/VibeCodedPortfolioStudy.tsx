import { CaseStudySideNav } from "@/components/CaseStudySideNav";
import twoAgentsDiagram from "@/assets/two-agents-github.png.asset.json";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "design-first", label: "Design first" },
  { id: "build", label: "Build" },
  { id: "credits", label: "Credits" },
  { id: "performance", label: "Performance" },
  { id: "friction", label: "Friction" },
  { id: "tips", label: "Tips" },
  { id: "faq", label: "FAQ" },
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

export function VibeCodedPortfolioStudy() {
  return (
    <div className="mt-4">
      <CaseStudySideNav sections={sections} />
      <div className="rule" />

      <Section id="overview" title="Overview">
        <Bullets
          items={[
            <>
              <Label>Goal.</Label> Ship a live portfolio that looks and feels
              custom-built, without hand-coding it from scratch or hiring a
              developer, and use it to show I can bring AI into the design
              process and vibe code the result myself.
            </>,
            <>
              <Label>Process.</Label> I designed the whole thing first, then
              used Lovable to build it. I treated the AI the way I'd treat a
              fast junior developer: a clear brief, a design system to follow,
              and finished content to place, so it spent its time assembling
              instead of guessing. Where I wanted tighter control, I moved into
              Claude Code and Cursor.
            </>,
            <>
              <Label>Impact.</Label> A responsive, accessible portfolio live at
              surbhihote.com, built inside a single month of Lovable's Pro plan
              by keeping credit use tight, using a workflow that scales down to
              the free plan for anyone on a smaller budget.
            </>,
          ]}
        />
      </Section>

      <Section id="design-first" title="Do the design work before you open Lovable">
        <Body>
          The biggest credit saver isn't a Lovable trick. It's finishing the
          thinking before the AI starts building. Every vague prompt turns into
          two or three follow-ups, and on Lovable every follow-up costs credits.
          So I did the slow part offline.
        </Body>
        <div>
          <Sub>Before I touched the builder, I had</Sub>
          <Bullets
            items={[
              <>
                <Label>A sitemap and page structure.</Label> Home, work,
                individual case studies, about, contact. I knew what lived on
                each page and in what order.
              </>,
              <>
                <Label>Final copy.</Label> Every heading, case study intro, and
                button label written and edited in a doc first. The AI is not a
                copywriter you want to pay by the message, so I pasted finished
                words in.
              </>,
              <>
                <Label>A design system.</Label> Colors as hex values, a type
                scale, spacing, radius, and one or two accent colors, defined as
                tokens. That way I could tell Lovable exactly what to use
                instead of letting it invent a palette I'd have to correct
                later.
              </>,
              <>
                <Label>Reference.</Label> A couple of sites whose layout and
                feeling I wanted to borrow from, plus my own rough wireframes.
              </>,
            ]}
          />
        </div>
        <Body>
          If you use a free chat tool like Claude to pressure-test your
          structure and write your copy first, that planning costs nothing. You
          walk into Lovable with a finished plan and spend credits on the build,
          not the brainstorm.
        </Body>
        <figure className="space-y-3">
          <img
            src={designSystemImage.url}
            alt="Design system sheet for the portfolio showing light and dark theme color tokens, typography in Crimson Text and Inter, buttons, inputs, tags, cards, and corner radii"
            loading="lazy"
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="text-sm text-foreground/60">
            The design system I handed to Lovable: semantic color tokens for
            light and dark, the type scale, radii, and the core controls.
          </figcaption>
        </figure>
      </Section>

      <Section id="build" title="Building the portfolio on Lovable, step by step">
        <Body>
          <Label>Open with one strong prompt, not ten small ones.</Label> My
          first prompt described the whole site in a single pass: the vibe, the
          audience, the structure, the accent colors, light and dark mode, and
          the tone. A specific opening prompt gets you most of the way there in
          one build instead of a dozen. A version of what I used:
        </Body>
        <blockquote className="border-l-2 border-accent pl-6 text-lg leading-relaxed text-foreground/85 italic">
          Build a portfolio site for a senior product designer. Audience:
          recruiters and hiring managers at design-led and AI-first teams.
          Aesthetic: minimal, modern, confident, with one or two accent colors
          and subtle motion. Light and dark mode for accessibility. Pages: home,
          work index, individual case studies, about, contact. Case studies
          should read as clear problem-to-solution narratives. Use my design
          tokens for all colors, type, spacing, and radius.
        </blockquote>
        <Bullets
          items={[
            <>
              <Label>Lock in your design tokens early.</Label> Once the shell
              existed, I had Lovable set the tokens in three layers: primitive
              values (the raw colors and sizes), semantic tokens (background,
              surface, primary, muted), and component-level tokens. Getting this
              in place first means later changes are one edit to a token instead
              of a hunt across every page.
            </>,
            <>
              <Label>Build page by page, not all at once.</Label> I finished one
              page before moving to the next. Small changes are easier to check,
              and it keeps the AI from touching things you already got right.
            </>,
            <>
              <Label>Edit in the preview instead of prompting.</Label> For copy
              fixes, spacing nudges, and color swaps, I edited directly in the
              preview. That's where most of the saving happens.
            </>,
            <>
              <Label>Move to Claude Code or Cursor for the fiddly parts.</Label>{" "}
              When I wanted precise control over an animation, or a layout the
              builder kept fighting me on, I worked in code instead. A common
              pattern now is to prototype most of a project in Lovable, then
              finish in Cursor or Claude Code. That's not a failure of the tool,
              it's just using each one for what it does best.
            </>,
          ]}
        />
        <Body>
          Running two tools on one site is simpler than it sounds, because they
          don't have to talk to each other. Lovable and Claude Code both connect
          to the same GitHub repository. Lovable syncs to the repo automatically
          in both directions, and Claude Code pushes and pulls to the same
          place. The repo is the single source of truth, so a change I make in
          one tool shows up in the other after a sync.
        </Body>
        <figure className="space-y-3">
          <img
            src={twoAgentsDiagram.url}
            alt="Diagram showing Claude Code and the Lovable agent syncing through a shared GitHub repository as the single source of truth"
            loading="lazy"
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="text-sm text-foreground/60">
            One project, two agents, shared through GitHub. Claude Code and
            Lovable never talk directly, the repo is the single source of truth.
          </figcaption>
        </figure>
      </Section>

      <Section id="credits" title="Making your Lovable credits last on a budget">
        <Body>
          This is where most people overspend, so here's how the credits
          actually work and how I stretched them.
        </Body>
        <Body>
          I built on the Pro plan, which starts at $25 a month with a monthly
          pool of credits that roll over, so my goal was simple: finish inside
          one month's credits and never touch a top-up. That's very doable for a
          portfolio, which isn't a complex app. If you're on a tighter budget,
          the free plan gives you 5 build credits a day, capped at 30 a month,
          resetting daily instead of rolling over, which is enough to finish a
          portfolio slowly if you're disciplined. (Verify the current numbers on
          Lovable's pricing page before you plan, since they change these.)
        </Body>
        <div>
          <Sub>What costs credits</Sub>
          <Bullets
            items={[
              <>
                A build or edit in default mode is priced by complexity. The
                initial structure is the single most expensive step. A small
                style tweak is a fraction of a credit.
              </>,
              <>
                Every message in chat mode costs a credit, even when it changes
                nothing on the page. Brainstorming inside Lovable quietly burns
                credits. Brainstorm in a free chat tool instead.
              </>,
            ]}
          />
        </div>
        <div>
          <Sub>What's cheap or free</Sub>
          <Bullets
            items={[
              <>
                Inline text edits in the preview are free, up to a daily limit.
                For a portfolio, which is mostly text, this is the biggest saver
                by far. Fix headings and body copy by clicking and typing, not
                by prompting.
              </>,
              <>
                Reverting to an earlier version is free. If a build goes
                sideways, roll back instead of prompting your way out of it,
                which costs more and often makes it worse.
              </>,
            ]}
          />
        </div>
        <div>
          <Sub>How I stayed inside a single month of credits</Sub>
          <Bullets
            items={[
              <>
                <Label>Batch every change into one prompt.</Label> Instead of
                "add a button," then "make it blue," then "round the corners," I
                wrote "add a primary button in brand blue with rounded corners,
                linking to my contact page." One credit instead of three.
              </>,
              <>
                <Label>Be specific enough that there's nothing to guess.</Label>{" "}
                Exact copy, exact hex, exact spacing. Guessing is what causes
                the back-and-forth that drains credits.
              </>,
              <>
                <Label>Debug outside Lovable.</Label> When something broke, I
                checked the browser console and dev tools first. Fixing an error
                you already understand is one clean prompt, not several rounds
                of "still broken."
              </>,
              <>
                <Label>Spread the build across the month.</Label> Pro credits
                roll over, so there's no rush, and pacing the work meant I never
                came close to running out. On the free plan the 5 daily credits
                reset each day, so the same patience gets a portfolio done for
                nothing. Students often get a discount on Pro either way.
              </>,
              <>
                <Label>Treat top-ups as a last resort.</Label> Extra credit
                packs cost more per credit than plan credits. If you're buying
                them regularly, upgrading the plan is cheaper.
              </>,
            ]}
          />
        </div>
      </Section>

      <Section id="performance" title="Images and performance for a fast portfolio">
        <Body>
          Images are where a portfolio gets slow, and where credits get wasted
          if you let the AI handle them.
        </Body>
        <Bullets
          items={[
            <>
              <Label>Prepare images yourself.</Label> Export them at the size
              they'll actually display, compress them, and hand them over ready
              to place. Don't spend credits asking the AI to generate or fix
              imagery you can prep in seconds in your own tools.
            </>,
            <>
              <Label>Use modern formats.</Label> webp for images and webm for
              video give you much smaller files than png, jpg, or mp4, with no
              visible loss. Smaller files mean a faster site and a stronger
              first impression.
            </>,
            <>
              <Label>Right-size before upload.</Label> A 4000px hero on a
              section that renders at 1200px is wasted weight. Resize first.
            </>,
            <>
              <Label>Lazy-load anything below the fold.</Label> Images and
              embeds that aren't on screen at load should load only when
              scrolled to. Ask for loading="lazy" on them.
            </>,
            <>
              <Label>Name your files and write alt text.</Label> Descriptive
              file names and alt text help accessibility and image SEO, and they
              cost you nothing.
            </>,
            <>
              <Label>Mind the badge and the domain.</Label> On the free plan you
              can't remove the "Edit with Lovable" badge or connect a custom
              domain. Getting surbhihote.com instead of a lovable.app subdomain,
              plus a clean footer, was the main reason I went Pro.
            </>,
          ]}
        />
      </Section>

      <Section id="friction" title="Where Lovable fought me, and how I handled it">
        <Body>
          Lovable is fast, but it isn't obedient. Being honest about that is
          part of using it well, so here's what to expect.
        </Body>
        <Bullets
          items={[
            <>
              <Label>It doesn't always follow instructions.</Label> You'll ask
              for one specific change and get a looser interpretation, or watch
              it quietly ignore a constraint you set clearly. Restating the
              instruction more narrowly usually fixes it, but that's another
              credit spent.
            </>,
            <>
              <Label>It makes changes you didn't ask for.</Label> While fixing
              one component, it sometimes restyles another or "improves" a
              section you'd already finished. Then you spend credits putting it
              back, which is the most frustrating way to burn them.
            </>,
            <>
              <Label>Undoing its mistakes costs you twice.</Label> Because
              dropped instructions and unrequested changes both take credits to
              reverse, a bad build can cost you once to make and again to
              unmake.
            </>,
          ]}
        />
        <div>
          <Sub>How I kept that from getting expensive</Sub>
          <Bullets
            items={[
              <>
                Commit a version whenever a page is right, and roll back to it
                the moment a build goes off the rails instead of prompting your
                way back. Reverting is free, re-prompting isn't.
              </>,
              <>
                Keep prompts narrow and scoped to one area, so there's less
                surface for it to wander into.
              </>,
              <>
                Check the diff before you accept a build, so an unrequested
                change gets caught before it compounds.
              </>,
              <>
                Move the precise work to Claude Code or Cursor. The things
                Lovable is worst at, exact layout and controlled edits, are
                exactly what a code editor handles cleanly.
              </>,
              <>
                Keep your content and tokens in your own files, so if a build
                corrupts something you can restore it fast instead of rebuilding
                from memory.
              </>,
            ]}
          />
        </div>
        <Body>
          The honest takeaway: Lovable gets a real site standing up remarkably
          fast, but it needs supervision. Budget for the occasional cleanup,
          protect your good versions, and it stays cheap and worth it.
        </Body>
      </Section>

      <Section
        id="tips"
        title="General tips for designers who want to use AI and vibe code"
      >
        <Bullets
          items={[
            <>
              <Label>Direct the AI, don't hope at it.</Label> The designers who
              get good results write briefs, not wishes. Give it the constraint,
              the token, the exact outcome. It behaves like a fast junior who
              does exactly what you say, which is a gift when what you say is
              precise.
            </>,
            <>
              <Label>Your design system is your leverage.</Label> Tokens are the
              difference between "change the blue everywhere" being one edit or
              fifty. Set them up first, and every later change stays cheap and
              consistent.
            </>,
            <>
              <Label>Build accessibility in from the first prompt.</Label> Light
              and dark mode, color contrast, focus states, semantic structure.
              Retrofitting these later costs more time and more credits.
            </>,
            <>
              <Label>Keep your content in your own files.</Label> Copy, image
              lists, and structure should live in a doc you control, not only
              inside one tool. If you rebuild or switch platforms, your content
              comes with you.
            </>,
            <>
              <Label>Learn where each tool ends.</Label> Lovable is fast for
              standing up a real site. Cursor and Claude Code give you fine
              control. Claude Design helps you explore the look. Knowing which
              to reach for, and when to switch, is the actual skill.
            </>,
            <>
              <Label>Show the work.</Label> Building your portfolio with these
              tools and then writing up how you did it is itself proof to an
              AI-first team that you can design and ship with them. Screenshot
              your prompts, your token setup, and your before-and-afters. That's
              the case study.
            </>,
          ]}
        />
      </Section>

      <Section id="faq" title="FAQ" divider={false}>
        <div>
          <Sub>Can a product designer build a portfolio without a developer?</Sub>
          <Body>
            Yes. I designed and shipped my whole portfolio myself by vibe coding
            it on Lovable, then refining in Claude Code and Cursor. The design
            thinking stays yours. The AI handles the code you'd otherwise hand
            off.
          </Body>
        </div>
        <div>
          <Sub>What is vibe coding, and can designers do it?</Sub>
          <Body>
            Vibe coding means building software by describing what you want to
            an AI agent in plain language and steering it, rather than writing
            every line yourself. Designers are well suited to it, because the
            job is really about giving clear direction and judging the result,
            which is what design work already is.
          </Body>
        </div>
        <div>
          <Sub>Which AI tools can designers use to design and vibe code?</Sub>
          <Body>
            I used Lovable to build and host the site, Claude Design to explore
            the look, and Claude Code and Cursor for precise control over layout
            and animation. They share one project through a GitHub repository,
            so I can move between them without losing work.
          </Body>
        </div>
        <div>
          <Sub>How much does it cost to vibe code a portfolio on Lovable?</Sub>
          <Body>
            I built mine inside a single month of Lovable's Pro plan, around
            $25, by keeping credit use tight. On the free plan you can finish
            one for nothing if you're patient, since credits reset daily. Verify
            Lovable's current pricing before you plan, since it changes.
          </Body>
        </div>
        <div>
          <Sub>What are the downsides of using Lovable?</Sub>
          <Body>
            It's fast but not always obedient. It sometimes ignores an
            instruction or makes changes you didn't ask for, and undoing those
            costs credits. Committing good versions, reverting instead of
            re-prompting, and moving precise work to Claude Code or Cursor keeps
            that under control.
          </Body>
        </div>
        <div>
          <Sub>
            What does "using AI in the design process" actually mean for a
            designer?
          </Sub>
          <Body>
            For me it means using AI to move from idea to a live, working
            product: exploring direction, writing and testing structure, and
            building the real thing, while I own the strategy, the design
            system, and the final judgment. This case study is a working example
            of that end to end.
          </Body>
        </div>
      </Section>

      <div id="case-study-end" />
    </div>
  );
}
