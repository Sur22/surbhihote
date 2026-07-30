import creatorHubDashboard from "@/assets/creator-hub-dashboard-v2.png.asset.json";
import voyagerWelcome from "@/assets/voyager-welcome.png.asset.json";
import vibeCodedPortfolio from "@/assets/vibe-coded-portfolio.png.asset.json";
import resourcesImage from "@/assets/resources.png";

export type AIProject = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  image: string;
  imageAlt: string;
};

export const aiProjects: AIProject[] = [
  {
    slug: "creator-hub",
    index: "01",
    subtitle: "Designing an AI-assisted publishing workspace",
    title: "Creator Hub",
    tags: ["CAPSTONE PROJECT", "MIT", "CONCEPT", "AI", "ML", "2026"],
    description:
      "A capstone project from MIT xPRO's Designing and Building AI Products and Services — a platform to post across social media channels at once.",
    image: creatorHubDashboard.url,
    imageAlt: "Creator Hub dashboard mockup",
  },
  {
    slug: "voyager",
    index: "02",
    subtitle: "An AI travel companion, end to end",
    title: "Voyager",
    tags: ["AI TRAVEL TOOL", "CONCEPT", "AI FOR UX", "DESIGNLAB 2026"],
    description:
      "An AI travel assistant built end-to-end with generative tools — exploring conversational UI, itinerary generation, and map-based experiences.",
    image: voyagerWelcome.url,
    imageAlt: "Voyager AI travel assistant welcome screen",
  },
  {
    slug: "vibe-coded-portfolio",
    index: "03",
    subtitle: "Building a portfolio by prompting",
    title: "Vibe Coded Portfolio",
    tags: ["LOVABLE", "VIBE CODING", "GENERATIVE UI"],
    description:
      "Ongoing explorations into how LLMs and agentic interfaces change the way we research, prototype, and craft product experiences.",
    image: vibeCodedPortfolio.url,
    imageAlt:
      "Full-length screenshot of the portfolio home page in light and dark theme",
  },
  {
    slug: "resources",
    index: "04",
    subtitle: "A working library for designing with AI",
    title: "AI Resources",
    tags: ["TOOLS", "PROMPTS", "REFERENCES", "WORKFLOWS"],
    description:
      "A curated collection of AI design tools, prompt patterns, reference reads, and workflows I use to prototype and ship faster.",
    image: resourcesImage,
    imageAlt: "Abstract visualization of floating documents and resources",
  },
];

export function getAIProject(slug: string) {
  return aiProjects.find((p) => p.slug === slug);
}
