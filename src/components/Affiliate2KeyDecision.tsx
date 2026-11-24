import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dashboard from "@/assets/Affiliate_site_mockup_dashboard-4.png.asset.json";
import revisions from "@/assets/Affiliate_site_mockup_revised_tab-3.png.asset.json";
import order from "@/assets/Affiliate_site_mockup_order_page-3.png.asset.json";

const decisions = [
  {
    id: "attention",
    tab: "Find what needs attention",
    heading: "Start with the work, instead of a menu.",
    description: "The dashboard brings order summaries and activity into the starting view. Affiliates can identify work needing attention while retaining familiar order indicators.",
    image: dashboard.url,
    alt: "After — orders dashboard with simplified tabs, frequently used filters, and order activity indicators",
  },
  {
    id: "revisions",
    tab: "Review revisions",
    heading: "A revision shouldn’t mean starting the search again.",
    description: "Revised orders have a dedicated view. Filters and saved views help affiliates retain the working context they previously had to rebuild after a search.",
    image: revisions.url,
    alt: "Revised orders with version indicators, search, filters, and pagination",
  },
  {
    id: "order",
    tab: "Inspect the order",
    heading: "Carry the context into the details.",
    description: "The order page supports deeper review once an affiliate has identified the order that needs attention. The flow moves from an overview to the specific work without changing the conventions affiliates depended on.",
    image: order.url,
    alt: "Revamped order details and version comparison screens",
  },
];

export function Affiliate2KeyDecision() {
  return (
    <section id="final-designs" className="mx-auto max-w-[1080px] px-6 md:px-10 py-24 scroll-mt-24">
      <h2 className="h2 mb-8">Solution</h2>
      <h3 className="h3 mb-6">Know what needs attention. Keep the context. Review the order.</h3>
      <p className="max-w-3xl text-lg leading-relaxed text-foreground/85 mb-10">
        For an affiliate campaign manager balancing new orders and repeated revisions, the important question is simple: what needs my attention now? The redesigned flow keeps that question visible from the dashboard through order review.
      </p>
      <Tabs defaultValue="attention">
        <div className="border-b border-border pb-4">
          <TabsList aria-label="Key Decision" className="h-auto w-full flex flex-wrap justify-start gap-2 rounded-none bg-transparent p-0">
            {decisions.map((decision) => (
              <TabsTrigger key={decision.id} value={decision.id} className="min-h-10 whitespace-normal rounded-sm border border-border px-4 py-3 text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none">
                {decision.tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {decisions.map((decision) => (
          <TabsContent key={decision.id} value={decision.id} className="mt-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-8">
              <h4 className="h3">{decision.heading}</h4>
              <p className="text-lg leading-relaxed text-foreground/85">{decision.description}</p>
            </div>
            <img src={decision.image} alt={decision.alt} className="block w-full h-auto" loading="lazy" />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}