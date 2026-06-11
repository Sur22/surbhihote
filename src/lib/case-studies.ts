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
  overview: string;
  goal: string;
  research: {
    stakeholderInterview: string;
    userInterview: string;
    userInterviewInsights: { quote: string; author: string }[];
  };
  survey: string;
  strategy: {
    productGoals: {
      intro: string;
      businessGoals: string[];
      userGoals: string[];
      sharedGoals: string[];
    };
  };
  brainstorming: string;
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
  timeframe: "6 Weeks",
  tools: "Balsamiq, Adobe XD, Illustrator, White Board, Google Forms, JIRA, Confluence",
  tasksPerformed:
    "End to End Design, User Research, Brainstorming, User Flows, Wire-framing, Prototyping, Usability Testing, Design Handoff, Collaborate with Product, Engineering and QA teams.",
  overview:
    "The GRID enables real-time collaboration through the supply chain providing users visibility into the manufacturing process as well as keeping the stakeholders informed about all the processes within their supply chain. GRID serves as a communication tool where the all active users within the supply chain can interact throughout the manufacturing process while allowing the client to request changes, share & update documents, and leave comments. \n\n\nThroughout the product lifecycle process there are different types of notifications which are received by the clients and the staff who are handling the project via email, push notification or as a text message. Currently there is no way to manage different types of notifications which client and the staff receives as user may or may not want to receive certain notifications\n\n",
  goal:
    "The GRID enables real-time collaboration through the supply chain providing stakeholders visibility into the manufacturing process as well as keeping the stakeholders informed about all the processes within their supply chain. Throughout the product lifecycle process there are different types of notifications which are received by the clients and the staff who are handling the project via email, push notification or as a text message. Currently there is no way to manage different types of notifications which client and the staff receives as user may or may not want to receive certain notifications Or you just want to know about notifications which are important to you job responsibilities.\n \nNotification categories for which users receive notifications.\n1.     Comments posted by different user types (Client, Factory, Staff, Finance )\n2.     File- Uploads, Approval , Rejection,File Comments\n5.     Stage and Updates In all Product Development Phases\n6.     ETA Changes\n7.     Chat messages ,Tagged Comment/Chat\n9.    Costing, invoicing, PO updates ",
  research: {
    stakeholderInterview:
      " After I received the PRD from  product team and getting a walkthrough of PRD from product for the kickstart the design process. Other than the pinpoints which I already knew , Product team had additional thing which was notifications template to create at entity level for all its user types.\nAs Grid mobile app dose not have all the functionalities as the web version; in this feature the ability of entity to create notification template for the user type is excluded for the mobile version. But, users can see and edit the template of the which user type they are assigned. The mobile designs will be both for Android and iOS version of the application.",
    userInterview:
      "As there are multiple user types I recruited 5 different type of users (which included users who requested the feature )to get sense of what kind of notifications are important to which type of users and conducted user interview.",
    userInterviewInsights: [
      {
        quote: "\"Only few notifications are really important to me, I should be able to control which notifications I want to see and which one I don't.\"\n-Client\n‍\n\"Once I missed out on an important notification and as a result the the product got delayed.\"\n- Production Manager\n‍\n\"Every time I have to scroll through notifications to find notifications I need to see, which is very time consuming.\"\n-Product Development Manager\n\n\"Managing more than 40+ products for a client company is pretty hectic and notifications are a\nmess\"\n- Company Account Manager",
        author: "",
      },
      {
        quote: "",
        author: "",
      },
      {
        quote: "",
        author: "",
      },
      {
        quote: "",
        author: "",
      },
    ],
  },
  survey:
    '\n\n',
  strategy: {
    productGoals: {
      intro:
        "Alignment of user goals and business goals to benefit both is important. Helping <strong>users achieve their goals helps in user retention</strong> and hence profitable for business.",
      businessGoals: [
        "Provide a feature to stand out amongst competitors",
        "Make product strong",
        "Provide solution for user problems",
        "Improve Sales",
      ],
      userGoals: [
        "To work Efficiently",
        "Managing all project related things at one place",
        "Communicate changes to clients & factories",
        "Add material, Trims, Label from directly from library",
        "Ability to reuse existing CAD and Techpack",
      ],
      sharedGoals: [
        "Adding libraries for Techpack, CAD & Materials",
        "Make it easy to communication to client and the factory",
        "Streamline the workflow for users",
      ],
    },
  },
  brainstorming:
    "I  had a brainstorming session with the Product team after conducting the user interviews. It was helpful for kickstarting the design phase. with the help of whiteboard I showed product team what design I  have in my mind as a possible solution for the feature we are building.",
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
      { label: "Missed Important Notification Rate Reduced", value: "-71%" },
      { label: "Missed Deadline/Delays For Product Lifecycle Reduced", value: "−41%" },
      { label: "Increase in speed and Efficiency", value: "26%" },
      { label: "User Satisfaction", value: "+29%" },
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
    title: "Grid Website",
    subtitle: "Document-Centric Workflows to a Connected PLM Ecosystem.",
    client: "Solace Health",
    year: "2024",
    ...defaultMeta,
    role: "Lead UI UX Designer ",
    tags: [" SaaS ", " B2B ", " PLM ", " ERP ", "Enterprise ", " Web"],
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
    title: "Grid Mobile app",
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
      { label: "Reduction in Missed  Deadlines", value: "-49%" },
      { label: "Client Satisfaction Rate Increased ", value: "40% → 56%" },
      { label: "Reduced Missed Notification", value: "−88%" },
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
