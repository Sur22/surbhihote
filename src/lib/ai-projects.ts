import creatorHubDashboardMockup from "@/assets/creator-hub-dashboard-v2.png.asset.json";
import voyagerWelcomeMockup from "@/assets/voyager-welcome-mockup.png.asset.json";
import vibeCodedPortfolio from "@/assets/vibe-coded-portfolio-devices.png.asset.json";
import resourcesImage from "@/assets/resources-banner.png.asset.json";

export type AIProject = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  image: string;
  imageAlt: string;
  role?: string;
  timeframe?: string;
  tools?: string;
  tasksPerformed?: string;
  pdfUrl?: string;
  /** Custom route path. When set, links use this path instead of `/ai/$slug`. */
  path?: string;
  /** `images` renders WebP page exports instead of the PDF for that tab. */
  pdfs?: { label: string; url: string; images?: string[] }[];
};

export const aiProjects: AIProject[] = [
  {
    slug: "creator-hub",
    index: "01",
    subtitle: "Designing an AI-assisted publishing workspace",
    title: "Creator Hub",
    tags: ["CAPSTONE PROJECT", "MIT", "CONCEPT", "AI", "ML", "2026"],
    description:
      "An AI product design case study. Creator Hub is an LLM-powered content workspace for social media creators, covering product strategy, retrieval-augmented generation, and AI evaluation.",
    image: creatorHubDashboardMockup.url,
    imageAlt: "Creator Hub dashboard mockup",
    path: "/creator-hub-ai-product-design-case-study",
    role: "Product Design, Concept, End to end, Problem framing, AI product strategy",
    timeframe: "9 weeks",
    tools: "Google Stitch, Figma, ChatGPT, Claude, Miro,Paython",
    tasksPerformed:
      "0→1 Design, Ideation, Concept, Competitive Analysis, Double Dimond\nAI product strategy, Market Gap Identification ,\nTechnical Feasibility, & interface design",
  },
  {
    slug: "voyager",
    index: "02",
    subtitle: "An AI Travel Companion",
    title: "Voyager",
    tags: ["AI TRAVEL TOOL", "CONCEPT", "AI FOR UX", "DESIGNLAB 2026"],
    description:
      "An AI travel assistant built end-to-end with generative tools - exploring conversational UI, itinerary generation, and map-based experiences.",
    image: voyagerWelcomeMockup.url,
    imageAlt: "Voyager AI travel assistant welcome screen",
    pdfUrl: "/ai-pdfs/voyager-phase-1.pdf",
    role: "Product Design, Concept, End to end, Problem framing, AI product strategy",
    timeframe: "4 weeks",
    tools: "Perplexity, Claude, ChatGPT, Google Stitch, Figma Make",
    tasksPerformed:
      "0→1 Design, UI/UX Design, Interaction Design, AI product strategy, Market analysis",
    pdfs: [
      { label: "Phase 1 — Discovery Research", url: "/ai-pdfs/voyager-phase-1.pdf" },
      { label: "Phase 2 — Research to Ideation", url: "/ai-pdfs/voyager-phase-2.pdf" },
      { label: "Phase 3 — Execution & Testing", url: "/ai-pdfs/voyager-phase-3.pdf" },
      { label: "Investor Pitch Deck", url: "/ai-pdfs/voyager-pitch-deck.pdf" },
    ],
  },
  {
    slug: "vibe-coded-portfolio",
    index: "03",
    subtitle: "Building a portfolio by prompting",
    title: "Vibe Coded Portfolio",
    tags: ["LOVABLE", "VIBE CODING", "GENERATIVE UI"],
    description:
      "How I designed and vibe coded my portfolio on Lovable with Claude Code, Cursor, and Claude Design. A product designer using AI across the design process, on a budget.",
    image: vibeCodedPortfolio.url,
    imageAlt: "AI-first product designer's portfolio, designed and vibe coded on Lovable",
    path: "/vibe-coding-my-portfolio-lovable",
    role: "Product Designer",
    timeframe: "Ongoing",
    tools: "Lovable, ChatGPT, Claude, Figma",
    tasksPerformed: "0→1 Design, UI/UX Design, Interaction Design, Prompt Engineering",
  },
  {
    slug: "resources",
    index: "04",
    subtitle: "A working library for designing with AI",
    title: "AI Resources",
    tags: ["TOOLS", "PROMPTS", "REFERENCES", "WORKFLOWS"],
    description:
      "A curated collection of AI design tools, prompt patterns, reference reads, and workflows I use to prototype and ship faster.",
    image: resourcesImage.url,
    imageAlt: "Abstract visualization of floating documents and resources",
  },
];

export function getAIProject(slug: string) {
  return aiProjects.find((p) => p.slug === slug);
}
