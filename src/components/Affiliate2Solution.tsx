import dashboardChanges from "@/assets/affiliate_dashboar_changes-2.png.asset.json";
import { ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";

function TurningPoint({ title, children, choices, tradeoff }: {
  title: string;
  children?: ReactNode;
  choices: { title: string; text: string }[];
  tradeoff: string;
}) {
  return (
    <div className="border-l-2 border-azure bg-cell-highlight px-6 py-8 md:px-8">
      <p className="eyebrow mb-4">The turning point</p>
      <h4 className="h3 mb-5">{title}</h4>
      {children && <div className="mb-6 text-lg leading-relaxed">{children}</div>}
      <div className="grid gap-6 md:grid-cols-2">
        {choices.map((choice) => (
          <div key={choice.title}>
            <p className="font-bold mb-2">{choice.title}</p>
            <p className="leading-relaxed">{choice.text}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 border-t border-azure/20 pt-5 leading-relaxed"><strong>The trade-off:</strong> {tradeoff}</p>
    </div>
  );
}

function NextChanges({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div>
      <p className="eyebrow mb-6">What I changed next</p>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.title}>
            <h4 className="h4 mb-3">{item.title}</h4>
            <p className="leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Result({ children }: { children: ReactNode }) {
  return (
    <div className="border-t border-border pt-6">
      <p className="eyebrow mb-3">The result</p>
      <p className="max-w-3xl text-lg leading-relaxed">{children}</p>
    </div>
  );
}

export function Affiliate2Solution() {
  return (
    <section id="key-decision" className="mx-auto max-w-[1080px] px-6 md:px-10 py-24 scroll-mt-24">
      <h2 className="h2 mb-8">Key Decisions</h2>
      <div className="mb-16">
        <p className="eyebrow mb-5">The decisions behind the screens</p>
        <h3 className="h3 mb-6">Four choices that shaped the rebuilt portal.</h3>
        <p className="max-w-4xl text-lg leading-relaxed mb-10">The key choices balanced familiar working habits, clearer order activity, release scope, and the limits of external research access.</p>
        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          {[
            ["01   I kept the cues stakeholders thought we could remove.", "How direct user access changed a design assumption.", "story-familiarity"],
            ["02  I made order activity visible before changing how people worked.", "How the dashboard, live updates, and activity cues addressed missed orders.", "story-visibility"],
            ["03   I deferred bigger changes to protect the first release.", "How evidence, voting, and effort shaped the rollout.", "story-release"],
            ["04   I validated adoption through real use.", "How I balanced learning with the limits of external research access.", "story-validation"],
          ].map(([title, description, target]) => (
            <button
              key={title}
              type="button"
              onClick={() => document.getElementById(target as string)?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="group block border-t border-border pt-6 text-left"
            >
              <p className="text-lg leading-relaxed font-bold mb-4 underline-offset-4 group-hover:underline"><span className="text-azure">{(title as string).slice(0, 2)}</span>{(title as string).slice(2)}</p>
              <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>
            </button>
          ))}
        </div>
      </div>

      <article id="story-familiarity" className="space-y-8 border-t border-border pt-16 pb-16 scroll-mt-24">
        <header>
          <p className="eyebrow mb-4">Decision story · Familiarity</p>
          <h3 className="h3 mb-6 max-w-4xl">I kept the order cues stakeholders thought we could remove.</h3>
          <p className="max-w-3xl text-lg leading-relaxed">The survey said many affiliates were satisfied. The focus groups showed why: people had become fluent in the workarounds.</p>
        </header>
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Before the decision</p>
          <p className="text-lg leading-relaxed">Stakeholders assumed the D/V/P/C symbols weren’t needed. But when I presented the initial designs, we still had unanswered questions about how affiliates actually worked. I pushed for direct conversations before those assumptions became design decisions.</p>
        </div>
        <TurningPoint
          title="The unfamiliar part of the redesign was itself a risk."
          choices={[
            { title: "The assumption I challenged", text: "Remove legacy symbols and modernize familiar conventions as part of the rebuild. That would simplify the surface, but increase the effort required to recognize order activity." },
            { title: "The choice I made", text: "Preserve D/V/P/C and 24-hour time. Focus the change on broken workflows and visibility, so affiliates could carry their existing knowledge into the new portal." },
          ]}
          tradeoff="I accepted some legacy conventions in the new interface to reduce relearning during business-critical work."
        >
          <p>In session after session, affiliates showed that the symbols were important for understanding order activity. They also preferred the existing 24-hour clock. Removing these cues would make the interface cleaner while taking away information people used to do their jobs.</p>
        </TurningPoint>
        <NextChanges items={[
          { title: "Preserved recognition", text: "I retained the order-activity cues affiliates already understood." },
          { title: "Respected working habits", text: "I kept 24-hour time rather than changing a convention users preferred." },
          { title: "Changed the priority", text: "I used familiarity as a release constraint and deferred changes requiring a larger shift in behavior." },
        ]} />
        <Result>The final design preserved the cues the team had considered removing. The focus groups changed both the interface and the rollout plan: meaningful improvements could ship without asking affiliates to relearn every part of their work at once.</Result>
      </article>

      <article id="story-visibility" className="space-y-8 border-t border-border pt-16 pb-16 scroll-mt-24">
        <header>
          <p className="eyebrow mb-4">Decision story · Order visibility</p>
          <h3 className="h3 mb-6 max-w-4xl">I moved order activity into view instead of leaving affiliates to keep checking.</h3>
          <p className="max-w-3xl text-lg leading-relaxed">Affiliates were refreshing the page every few minutes so they wouldn’t miss a new order or revision. Even with that effort, orders still slipped through.</p>
        </header>
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Before the decision</p>
          <p className="text-lg leading-relaxed">The legacy site started with a bare navigation menu. Users had limited visibility into whether an order had been touched, and repeated revisions made it harder to know what had changed. The cost of that uncertainty was more than time: focus groups connected missed orders to lost business.</p>
        </div>
        <TurningPoint
          title="A new front door had to make the next action clearer."
          choices={[
            { title: "Carry the old entry point forward", text: "A rebuilt menu would preserve the starting experience, but leave affiliates doing the same manual checking to find work." },
            { title: "Introduce a dashboard and activity visibility", text: "I chose an order summary as the starting point, supported by live updates, last-touched visibility, and familiar activity indicators." },
          ]}
          tradeoff="The starting view changed, but the order-level signals stayed familiar. I focused the new information on the work affiliates needed to notice."
        />
        <img id="annotated-dashboard" src={dashboardChanges.url} alt="Orders dashboard annotated with order summaries, automatic refresh, notifications, and onboarding help" className="block w-full h-auto scroll-mt-24" loading="lazy" />
        <NextChanges items={[
          { title: "Surface changes", text: "Live updates reduced the need to reload the page to discover new activity." },
          { title: "Expose attention gaps", text: "Last-touched information helped make unattended orders easier to identify." },
          { title: "Keep context intact", text: "Views, filters, and clearer revision visibility helped affiliates stay oriented while working through orders." },
        ]} />
        <Result>The project reported a <strong>78% reduction in manual refreshes</strong> and <strong>$0 in business lost since launch.</strong> These were project-level outcomes across the rebuilt workflows; the visibility changes directly addressed the manual checking and unnoticed orders surfaced in research.</Result>
      </article>

      <article id="story-release" className="space-y-8 border-t border-border pt-16 scroll-mt-24">
        <header>
          <p className="eyebrow mb-4">Decision story · Release strategy</p>
          <h3 className="h3 mb-6 max-w-4xl">I deferred bigger changes so the first release could restore the work people depended on.</h3>
          <p className="max-w-3xl text-lg leading-relaxed">The rebuild opened the door to improving everything. The affiliates’ response made it clear that changing everything at once would create a different problem.</p>
        </header>
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Before the decision</p>
          <p className="text-lg leading-relaxed">We had a three-month project and a broad set of needs: performance, makegoods, revisions, search, exports, automation, and broken functionality. I needed a shared way to decide what belonged in the first release.</p>
        </div>
        <p className="max-w-3xl text-lg leading-relaxed">I designed and facilitated a <strong>1.5-day workshop</strong> with stakeholders, leadership, Product, and Engineering. I brought the survey findings into the room first, so the group started with affiliate problems before proposing solutions.</p>
        <TurningPoint
          title="Scope became an adoption decision, as well as an effort decision."
          choices={[
            { title: "Ship the broader transformation together", text: "Bring in larger communication and automation changes in the same transition, increasing the amount affiliates would need to relearn at launch." },
            { title: "Restore the essentials first", text: "Prioritize orders, search, rate cards, speed, auto-refresh, and broken functionality. Move larger changes such as messaging and in-platform notifications into the next phase." },
          ]}
          tradeoff="I deferred improvements I wanted to ship so affiliates could adopt the rebuilt portal in smaller steps."
        >
          <p>Workshop prioritization gave us an initial plan. The focus groups then showed how strongly affiliates depended on existing habits. I reprioritized the rollout around the core order workflows and deferred changes requiring more adjustment.</p>
        </TurningPoint>
        <p className="text-lg leading-relaxed">
          <a href="#workshop" className="underline underline-offset-4 text-foreground font-bold">See the full phased release plan and workshop artifacts.</a>
        </p>
        <Result>The first release restored <strong>eight broken or limited workflows.</strong> The phased plan gave the team a clear boundary for the release while keeping larger workflow changes visible as follow-on work.</Result>
      </article>

      <ValidationStory />
    </section>
  );
}

function ValidationStory() {
  const [loopOpen, setLoopOpen] = useState(false);
  return (
    <article id="story-validation" className="space-y-8 border-t border-border pt-16 scroll-mt-24">
      <header>
        <p className="eyebrow mb-4">Decision story · Validation</p>
        <h3 className="h3 mb-6 max-w-4xl">I validated the redesign through real use without asking affiliates for another research round.</h3>
        <p className="max-w-3xl text-lg leading-relaxed">The people we needed feedback from were external partners. We had already asked them for survey responses and focus-group time.</p>
      </header>
      <div className="max-w-3xl">
        <p className="eyebrow mb-3">Before the decision</p>
        <p className="text-lg leading-relaxed">Another round of formal moderated testing wasn’t viable within that relationship. But adoption was the central risk, so a stakeholder sign-off alone would not tell me whether the redesigned workflows were working in practice.</p>
      </div>
      <TurningPoint
        title="Use the work already happening in the product."
        choices={[
          { title: "Ask for more moderated sessions", text: "Gain direct observation and follow-up questions, while asking external affiliates to spend more time away from their work." },
          { title: "Combine behavioral evidence with lightweight feedback", text: "I chose Microsoft Clarity session analysis and an in-product feedback survey after the first three months of use, supported by App Insights and Power BI." },
        ]}
        tradeoff="I could observe real work with less research fatigue, but had fewer opportunities to ask why in the moment. Session review and feedback had to be interpreted together."
      />
      <div>
        <p className="eyebrow mb-6">What I did next</p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Observe real tasks", text: "Review sessions and task-completion signals to understand how the new workflows were being used." },
            { title: "Check the interpretation", text: "Validate patterns against recordings, event definitions, user feedback, and stakeholder context." },
            { title: "Support adoption", text: "Partner with the PM on help documentation, how-to videos, FAQs, and a place to report bugs or share feedback." },
          ].map((item) => (
            <div key={item.title}>
              <h4 className="h4 mb-3">{item.title}</h4>
              <p className="leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Result>Positive feedback and observed behavior indicated that affiliates were adopting the redesigned workflows. The project recorded a <strong>92% task success rate</strong>, alongside faster loading and fewer manual refreshes.</Result>
      <div className="border-t border-border pt-6">
        <button
          type="button"
          onClick={() => setLoopOpen((open) => !open)}
          aria-expanded={loopOpen}
          className="flex w-full items-center justify-between gap-4 text-left font-bold"
        >
          <span>The validation loop from events to iteration</span>
          <ChevronDown className={`size-5 shrink-0 text-azure transition-transform duration-200 ${loopOpen ? "rotate-180" : ""}`} />
        </button>
        {loopOpen && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Behavioral evidence", text: "Custom events, task completion, and task success data from Clarity, App Insights, and Power BI." },
              { title: "Pattern analysis", text: "AI-assisted exploration of friction, anomalies, and usability hypotheses." },
              { title: "Human validation", text: "Recordings, event definitions, feedback, and stakeholder context." },
              { title: "Design response", text: "Prioritize the insight, iterate on the design, and retest." },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-azure pt-4">
                <p className="font-bold mb-2">{item.title}</p>
                <p className="leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}