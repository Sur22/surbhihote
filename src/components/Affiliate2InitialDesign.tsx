import fjord2InitialDesign from "@/assets/fjord2-initial-design.png.asset.json";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    history.replaceState(null, "", `#${id}`);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Affiliate2InitialDesign({ onZoom }: { onZoom: (src: string) => void }) {
  return (
    <div>
      {/* Expose the assumptions — text column left, early-screens collage right. */}
      <div className="border-t border-border pt-14 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-12">
        <div>
          <p className="eyebrow mb-4">Expose the assumptions</p>
          <h3 className="h3 mb-6">Early designs raised questions we couldn’t answer internally.</h3>
          <p className="text-lg leading-relaxed text-foreground/85">
            I reviewed wireframes with stakeholders, Product, and Engineering. Gaps in our understanding of daily affiliate work led me to push for the focus groups.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onZoom(fjord2InitialDesign.url)}
          className="group block w-full self-start overflow-hidden rounded-sm bg-secondary p-2 cursor-zoom-in border-0"
        >
          <img
            src={fjord2InitialDesign.url}
            alt="Collage of the early dashboard, orders, order details, and compare-order screens"
            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
            loading="lazy"
          />
        </button>
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        The initial design became the starting point for challenging assumptions with affiliates.
      </p>

      {/* Review panel — the site's blue highlight surface. */}
      <div className="mt-16 border-l-2 border-azure bg-cell-highlight px-6 py-8 md:px-8">
        <p className="eyebrow mb-4">Review with users, product &amp; engineering team</p>
        <h3 className="h3 mb-6">Internal review exposed the questions only affiliates could answer.</h3>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-5 leading-relaxed">
            <p>
              <strong>Product, stakeholders, and Engineering:</strong> I presented the early wireframes, discussed workflow assumptions, and identified questions the internal team could not answer confidently.
            </p>
            <p>
              <strong>Users:</strong> I advocated for focus groups with five affiliate organizations. Those conversations showed why D/V/P/C indicators, 24-hour time, and familiar workflows needed to carry into the rebuild.
            </p>
          </div>
          <div className="space-y-5 leading-relaxed">
            <p>
              <strong>What changed:</strong> I retained those cues, strengthened visibility into order activity, and reprioritized the release around core workflows before larger communication changes.
            </p>
            <p>
              The internal review led to direct user research, and the research changed both the interface and the rollout plan.
            </p>
            <p>
              <a
                href="#key-decision"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("key-decision");
                }}
                className="underline underline-offset-4 hover:text-link-hover transition-colors"
              >
                Read the decision and supporting evidence
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Revise around the evidence — heading left, outcome copy right. */}
      <div className="mt-16 border-t border-border pt-14 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-12">
        <div>
          <p className="eyebrow mb-4">Revise around the evidence</p>
          <h3 className="h3">Keep recognition. Improve visibility.</h3>
        </div>
        <div className="space-y-5 text-lg leading-relaxed">
          <p>
            The final direction retained D/V/P/C and military time, introduced live updates and last-touched visibility, and supported views and filters that held context.
          </p>
          <p>
            Those choices also changed the plan: restore core workflows first, then introduce changes requiring greater adjustment.
          </p>
          <p>
            <a
              href="#final-designs"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("final-designs");
              }}
              className="underline underline-offset-4 hover:text-link-hover transition-colors"
            >
              Explore the rebuilt workflow
            </a>
          </p>
        </div>
      </div>

      {/* Interface craft — three detail columns. */}
      <div className="mt-16 border-t border-border pt-14">
        <p className="eyebrow mb-4">Interface craft</p>
        <h3 className="h3 mb-6 max-w-3xl">The important details were inside a dense working surface.</h3>
        <p className="max-w-3xl text-lg leading-relaxed text-foreground/85 mb-10">
          The interface had to help experienced affiliates recognize activity, retain their working context, and find the next order to act on. The design work lives in those details as much as in the new dashboard.
        </p>
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {[
            ["Recognizable signals", "D/V/P/C indicators and 24-hour time carried established knowledge into the rebuilt interface."],
            ["Consistent context", "Views, search, and filtering supported the way affiliates narrowed a large set of orders into the work relevant to them."],
            ["Visible activity", "Order summaries, revision views, and last-touched information helped affiliates distinguish an order that needed attention from one already in progress."],
          ].map(([title, text]) => (
            <div key={title} className="border-t border-border pt-6">
              <h4 className="h4 mb-4">{title}</h4>
              <p className="leading-relaxed text-foreground/85">{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-lg leading-relaxed">
          <a
            href="#annotated-dashboard"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("annotated-dashboard");
            }}
            className="underline underline-offset-4 hover:text-link-hover transition-colors"
          >
            See the original annotated dashboard
          </a>{" "}
          for the specific interface changes.
        </p>
      </div>
    </div>
  );
}
