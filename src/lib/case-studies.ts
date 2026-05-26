import fjord from "@/assets/case-fjord.jpg";
import solace from "@/assets/case-solace.jpg";
import atlas from "@/assets/case-atlas.jpg";

export type CaseStudy = {
  slug: "fjord" | "solace" | "atlas";
  index: string;
  title: string;
  subtitle: string;
  client: string;
  year: string;
  role: string;
  timeframe: string;
  tools: string;
  tasksPerformed: string;
  tags: string[];
  cover: string;
  summary: string;
  problem: string;
  approach: string[];
  outcome: { label: string; value: string }[];
  sections: { heading: string; body: string }[];
};

const defaultMeta = {
  role: "UI/UX Designer",
  timeframe: "4 Weeks",
  tools: "Balsamiq, Adobe XD, Illustrator, OBS Studios, White Board, Google Forms, JIRA, Confluence",
  tasksPerformed:
    "Handle end to end design process. User Interview & stakeholder interview Brainstorming, User flow Wireframing, Prototyping Usability Testing Iterations Design Handoff Quality Assurance Collaborate with Product & Engineering and QA team throughout the process.",
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "fjord",
    index: "01",
    title: "Audience Builder",
    subtitle: "Audience Building tool to create custom audience segments on the AND Platform.",
    client: "Fjord, Oslo",
    year: "2025",
    ...defaultMeta,
    role: "Lead Product Designer",
    tags: ["Advertising", "Enterprise", "ad-tech", "media", "data"],
    cover: fjord,
    summary:
      "A complete redesign of the Fjord mobile app — from rigid ledger to a calm, glanceable surface that prioritizes the three things customers do 92% of the time.",
    problem:
      "Fjord had grown a feature graveyard. The home screen hid the user's balance behind four taps; settings buried bill-pay; and the brand voice — warm in print, cold on screen — never carried into the product.",
    approach: [
      "30 in-context interviews across three customer segments to map the real Sunday-morning use cases.",
      "Stripped the IA from 11 tabs to 3, defending the cut in a workshop with leadership and compliance.",
      "Authored a 64-token design system in Figma — type, spacing, motion, and a single primary action per screen.",
      "Shipped iteratively behind a feature flag; ran a 6-week A/B against the legacy app before flipping the switch.",
    ],
    outcome: [
      { label: "Task success", value: "+38%" },
      { label: "Support tickets", value: "−41%" },
      { label: "App store rating", value: "3.1 → 4.7" },
      { label: "NPS", value: "+29" },
    ],
    sections: [
      {
        heading: "Discovery",
        body: "We spent four weeks with real customers — at kitchen tables, not in labs. The pattern was immediate: people opened the app to do one of three things, and every one of them took too long. We catalogued every screen, every tap, every dead end, and built a 'minutes-of-friction' map that became the team's north star.",
      },
      {
        heading: "Foundations",
        body: "Before pixels, tokens. We rebuilt the system from a single 8-point grid, three type sizes, and a motion language tuned to the rhythm of pulling out a wallet. Every component was documented with a 'why', not just a 'how' — so the next designer wouldn't have to guess.",
      },
      {
        heading: "Launch",
        body: "We rolled out to 5% of users on a Tuesday morning. By Friday, the support team noticed something strange: silence. The new home screen — balance, recent activity, and a single 'Send' button — had absorbed the noise. We expanded to 100% three weeks later.",
      },
    ],
  },
  {
    slug: "solace",
    index: "02",
    title: "Suuchi Grid Website",
    subtitle: "Tech Pack building tool for manufacturing of clothes.",
    client: "Solace Health",
    year: "2024",
    ...defaultMeta,
    role: "Product Designer & Brand",
    tags: ["Enterprise", "SaaS", "PLM", "ERP", "B2B", "Web"],
    cover: solace,
    summary:
      "Designed the first version of Solace — a 10-minute-a-day practice for people who are skeptical of wellness culture. No crystals. No infinite scrolls.",
    problem:
      "Founders came to us frustrated: every competitor's onboarding asked 14 questions and shipped users into a content library the size of Netflix. They wanted an app that could be useful on day one, and finishable.",
    approach: [
      "Wrote the product principles before opening Figma — 'finishable', 'quiet', 'honest'.",
      "Designed a single onboarding question: 'How much time do you have today?'",
      "Built a content shelf, not a library — 21 sessions, hand-curated, no algorithm.",
      "Partnered with the writers on tone-of-voice so the copy and the UI shipped as one thing.",
    ],
    outcome: [
      { label: "D7 retention", value: "54%" },
      { label: "Avg. session length", value: "11 min" },
      { label: "Paying conversion", value: "9.2%" },
      { label: "Launch reviews", value: "1,400+" },
    ],
    sections: [
      {
        heading: "Principles",
        body: "We agreed on three words before drawing anything: finishable, quiet, honest. They became the test for every decision — if a screen had a streak counter, it failed 'honest'. If it had three CTAs, it failed 'quiet'. The principles did the editing for us.",
      },
      {
        heading: "The single question",
        body: "Onboarding is one screen, one question, three answers. The app knows enough after that to give you something useful. Everything else — preferences, history, payment — happens later, in context, when you've already felt the value.",
      },
      {
        heading: "The shelf",
        body: "21 sessions, organized like a small bookshop. You can read every spine in 30 seconds. The constraint forced us to make each one matter — and forced the editorial team to defend every addition.",
      },
    ],
  },
  {
    slug: "atlas",
    index: "03",
    title: "Suuchi Grid Mobile app",
    subtitle: "Product Manufacturing Management and Tracking.",
    client: "Atlas, NYC",
    year: "2024",
    ...defaultMeta,
    role: "Design Lead",
    tags: ["mobile", "iOS", "Android", "PLM", "ERP"],
    cover: atlas,
    summary:
      "Reimagined Atlas as a single, scrollable canvas — map and itinerary on one surface — so planning a 10-day trip feels like sketching, not filing.",
    problem:
      "Atlas had a beautiful map and a separate, ugly itinerary. Users were copying place names between the two all day. Conversion to paid was stuck at 1.8% because the free product never felt finished.",
    approach: [
      "Killed the two-panel layout. Map and list now share one scroll surface that responds to zoom.",
      "Designed 'pinch-to-day' — a gesture that collapses the map to a calendar strip and back.",
      "Built a kit of 9 itinerary blocks (meal, transit, stay, note…) that snap to the map.",
      "Shipped a public beta to the existing power-user community in week 7 — their feedback shaped v1.",
    ],
    outcome: [
      { label: "Trip completion", value: "+62%" },
      { label: "Free → Paid", value: "1.8% → 6.4%" },
      { label: "Time-to-first-pin", value: "−74%" },
      { label: "Beta NPS", value: "71" },
    ],
    sections: [
      {
        heading: "One surface",
        body: "The single biggest fix was geometric. Map and itinerary had been two panels arguing for attention. We collapsed them into one continuous canvas — the map IS the document, the pins ARE the list. Suddenly planning felt like sketching on a napkin again.",
      },
      {
        heading: "Pinch-to-day",
        body: "A single gesture switches the canvas between geographic and chronological views. Pinch in: you see the trip on a map. Pinch out: you see it on a calendar. Same content, two lenses. We prototyped this in Origami before committing — gesture work doesn't survive being mocked up in Figma.",
      },
      {
        heading: "Snap blocks",
        body: "9 itinerary block types — meal, stay, transit, note, photo, link, ticket, day-header, free-time. Each snaps to a pin and inherits its color. The constraint kept the surface clean and let us avoid building a form-builder.",
      },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
