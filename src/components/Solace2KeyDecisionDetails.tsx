import type { ReactNode } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type Props = {
  onZoom: (src: string) => void;
  brainstorming: string;
  materials: string;
  document: string;
};

function Decision({ number, label, title, children }: { number: string; label: string; title: ReactNode; children: ReactNode }) {
  return (
    <article id={`decision-${number}`} className="relative border-b border-foreground/15 py-16 scroll-mt-24">
      <div className="mb-9">
        <p className="eyebrow mb-3 flex items-baseline gap-3"><span className="font-serif text-4xl text-decision-accent leading-none">{number}</span>{label}</p>
        <h3 className="h3 max-w-[760px]">{title}</h3>
      </div>
      <div>{children}</div>
    </article>
  );
}

function Reason({ label, children }: { label: string; children: ReactNode }) {
  return <div className="border-l-2 border-decision-accent pl-5 py-2 my-7"><p className="eyebrow text-decision-accent mb-3">{label}</p><p className="text-lg leading-relaxed">{children}</p></div>;
}

function Artifact({ src, label, caption, onZoom, showLink = true }: { src: string; label: string; caption?: string; onZoom: Props["onZoom"]; showLink?: boolean }) {
  return <figure>
    <div className="border border-foreground/15 bg-background p-4">
      <Button variant="ghost" onClick={() => onZoom(src)} aria-label={label} className="h-auto w-full p-0 rounded-none overflow-hidden hover:bg-transparent dark:border-0">
        <img src={src} alt={label} className="w-full h-auto object-contain" loading="lazy" />
      </Button>
      {showLink && <Button variant="link" onClick={() => onZoom(src)} className="mt-3 h-auto w-full p-0 justify-end whitespace-normal text-right text-decision-accent dark:border-0">{label}<ArrowUpRight aria-hidden="true" /></Button>}
    </div>
    {caption && <figcaption className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-foreground/70"><span className="mt-2 w-6 shrink-0 border-t border-decision-accent" />{caption}</figcaption>}
  </figure>;
}

export function Solace2KeyDecisionDetails({ onZoom, brainstorming, materials, document }: Props) {
  return <div>
    <Decision number="01" label="Sequencing the MVP" title={<>I built the libraries first,<br className="hidden sm:block" /> so the editor had something to connect.</>}>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-lg leading-relaxed text-foreground/70">Existing CAD and tech pack files were already attached to products in GRID, but were difficult to reuse across projects.</p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/70"><strong className="text-foreground">I started with shared libraries.</strong> CAD and tech pack files came first, followed by materials and trims. The materials library reused the same library structure, with a different details form.</p>
          <Reason label="Why this order">The bill of materials depended on material data. The editor depended on both. Designing the editor first would leave those inputs unresolved.</Reason>
          <p className="text-sm leading-relaxed text-foreground/70"><strong className="text-foreground">What this required:</strong> the editor came later in the release sequence. In return, each library created a usable foundation for the next workstream.</p>
        </div>
        <div className="border border-foreground/15 p-6">
          <p className="eyebrow mb-7">One pipeline · Eight weeks</p>
          <ol>
            {[
              ["W1", "CAD & tech pack library", "Centralize files already in GRID"],
              ["W2", "Materials & trims library", "Reuse the library pattern"],
              ["W3", "Bill of materials", "Connect the material and cost data"],
              ["W4–7", "Tech Pack editor", "Bring the workflow together"],
              ["W8", "Standardized output & comments", "Complete the factory handoff"],
            ].map(([week, heading, body], index) => <li key={week} className="relative flex gap-4 pb-6 last:pb-0">
              {index < 4 && <span aria-hidden="true" className="absolute left-6 top-7 bottom-0 border-l border-decision-accent/50" />}
              <span className="relative h-7 w-12 shrink-0 flex items-center justify-center border border-foreground/20 bg-background text-xs">{week}</span>
              <div><p className="text-sm font-semibold">{heading}</p><p className="text-sm text-foreground/70 mt-1">{body}</p></div>
            </li>)}
          </ol>
          <p className="text-xs leading-relaxed text-foreground/70 mt-7 pt-5 border-t border-foreground/15">Design ran ahead of engineering. As one workstream was built, I designed and reviewed the next.</p>
        </div>
      </div>
      <Accordion type="single" collapsible defaultValue="alignment" className="mt-10">
        <AccordionItem value="alignment" className="border-b-0">
          <AccordionTrigger className="statement-line">How I aligned Product and Engineering</AccordionTrigger>
          <AccordionContent>
            <p className="text-base leading-relaxed text-foreground/70 mb-5">I reviewed early sketches with Product, iterated with users, and confirmed requirements with the VP of Product. Reviews with the CTO and developers covered architecture, feasibility, new UI components, and development effort before handoff. This kept the next design workstream moving while Engineering built the previous one.</p>
            <div className="max-w-[510px]"><Artifact src={brainstorming} label="Product brainstorming session" showLink={false} onZoom={onZoom} /></div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Decision>

    <Decision number="02" label="Removing repeated work" title={<>I connected costing to the materials,<br className="hidden sm:block" /> instead of asking users to type it again.</>}>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-lg leading-relaxed text-foreground/70">Product development managers searched catalogs for materials, trims, and prices, then entered those details into spreadsheets. Changes meant another round of updates and calculations.</p>
          <p className="text-lg leading-relaxed text-foreground/70 mt-5"><strong className="text-foreground">I linked the materials and trims library to the bill of materials.</strong> The workflow could use the data already available in GRID to build the product’s cost sheet.</p>
          <Reason label="The turning point">Centralizing files alone would still leave manual calculations in place. Connecting the data addressed the source of those mistakes.</Reason>
          <p className="text-sm leading-relaxed text-foreground/70"><strong className="text-foreground">What this required:</strong> the material library had to be ready before the cost sheet. That dependency shaped the rollout.</p>
        </div>
        <Artifact src={materials} label="Explore the bill of materials" showLink={false} caption="Material details and costs share the same workflow, reducing the need to rebuild a separate spreadsheet." onZoom={onZoom} />
      </div>
    </Decision>

    <Decision number="03" label="A testing-led correction" title={<>A complete flow wasn’t enough.<br className="hidden sm:block" /> People needed a way to pause.</>}>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-lg leading-relaxed text-foreground/70">In prototype testing, <strong className="text-foreground">3 of 5 participants wanted to save their progress before navigating elsewhere.</strong> The flow needed to support work in progress, as well as a finished tech pack.</p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/70"><strong className="text-foreground">I introduced a Save option.</strong> This gave users a deliberate way to preserve unfinished work when they needed to leave the editor.</p>
          <Reason label="Why this mattered">Finishing a tech pack is a multi-step task. Making users finish before leaving would conflict with how they expected to work.</Reason>
          <p className="text-sm leading-relaxed text-foreground/70"><strong className="text-foreground">The design implication:</strong> saving progress and completing the document are different needs. The flow had to make room for both.</p>
          <p className="text-sm leading-relaxed text-foreground/70 mt-5">The test identified the issue and informed the revision. A separate result for the revised Save interaction was not documented.</p>
        </div>
        <div className="border border-foreground/15 p-8">
          <p className="eyebrow text-decision-accent mb-6">Prototype testing</p>
          <div aria-label="3 of 5 participants" className="flex gap-2 mb-6">{[0, 1, 2, 3, 4].map(i => <span key={i} className={`h-3.5 w-3.5 rounded-full border border-decision-accent ${i < 3 ? "bg-decision-accent" : ""}`} />)}</div>
          <p className="font-serif text-6xl text-foreground">3 <span className="text-2xl italic">of</span> 5</p>
          <p className="h3 mt-3 pb-6 border-b border-foreground/15">wanted to save before leaving.</p>
          <p className="eyebrow mt-7 mb-3">Test signal</p><p className="text-sm">Users expected to preserve unfinished work.</p>
          <p className="eyebrow mt-7 mb-3">Design response</p><p className="text-sm">Added an explicit Save option.</p>
          <a href="#testing" className="inline-flex items-center gap-1 mt-7 text-sm text-decision-accent hover:underline">See the other testing changes<ArrowDown className="w-4 h-4" aria-hidden="true" /></a>
        </div>
      </div>
    </Decision>

    <Decision number="04" label="Designing the handoff" title={<>I kept a standardized document<br className="hidden sm:block" /> at the end of a connected workflow.</>}>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-lg leading-relaxed text-foreground/70">Factories needed complete manufacturing instructions. Sending separate design, material, and costing files made it harder to know which information was current.</p>
          <p className="text-lg leading-relaxed text-foreground/70 mt-5"><strong className="text-foreground">I brought those details into one standardized output, with new versions for revisions.</strong> I also enabled the platform’s existing comments around the document.</p>
          <Reason label="Why this direction">The editor solved the authoring problem. A versioned document carried that work into the factory handoff and made changes easier to communicate.</Reason>
          <p className="text-sm leading-relaxed text-foreground/70"><strong className="text-foreground">The boundary:</strong> standardized output still needed to be shared with the factory. Versioning made that handoff traceable; it did not remove the need to communicate changes.</p>
        </div>
        <Artifact src={document} label="Explore the production document" caption="A shared output brings design instructions together. Comments keep the conversation close to the document." onZoom={onZoom} showLink={false} />
      </div>
    </Decision>
  </div>;
}