import fjord from "@/assets/case-fjord.png.asset.json";
import solace from "@/assets/case-solace.png.asset.json";
import atlas from "@/assets/case-atlas.png.asset.json";

export type CaseStudy = {
  slug: "fjord" | "solace" | "atlas" | "fjord2";
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
  strategySectionTitle?: string;
  strategySectionSubtitle?: string;
  strategy: {
    productGoals: {
      intro: string;
      businessGoals: string[];
      userGoals: string[];
      sharedGoals: string[];
      workshopAttendees?: string;
      workshopSchedule?: string;
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
  timeframe: "2 Weeks",
  tools: "Pen and Paper, Adobe XD, Miro, Confluence, JIRA",
  tasksPerformed:
    "End to End Design, User Research, UI Design, User Flows, Wire-framing, Prototyping, Usability Testing, Design Handoff, Collaborate with Product, Engineering and QA teams.",
  overview:
    "The GRID enables real-time collaboration through the supply chain providing users visibility into the manufacturing process as well as keeping the stakeholders informed about all the processes within their supply chain. GRID serves as a communication tool where the all active users within the supply chain can interact throughout the manufacturing process while allowing the client to request changes, share & update documents, and leave comments.\nThroughout the product lifecycle process there are different types of notifications which are received by the clients and the staff who are handling the project via email, push notification or as a text message. Currently there is no way to manage different types of notifications which client and the staff receives as user may or may not want to receive certain notifications\n\n",
  goal:
    "The goal is to give users \u00a0flexibility and control on subscribing to the notifications which are useful and important for their job.\n1.\u00a0\u00a0\u00a0\u00a0 Provide different user types ability to pick and choose the notifications that they would like to receive\n2.\u00a0\u00a0\u00a0\u00a0 Serve users ability to choose the notifications that they would like to receive per module and per product\n3.\u00a0\u00a0\u00a0\u00a0 Allow users ability to switch on/off notifications at any point of time\n",
  research: {
    stakeholderInterview:
      "After I get a brief from product team about the new feature and receive the product requirement document(PRD) and comitative analysis to get holistic idea of the feature and the functionality we are thinking of developing.\nI interviewed stakeholder of this feature was the 'Head of Product Development' team. It gave me better understanding of the problem we are trying to solve.\nAs there are many phases and stages of PLM Product Development Managers were having hard time managing all the product related files and data. They had to use multiple tools to manage the communication with the factory and the client when any change/ update was made for the product",
    userInterview:
      "As there are multiple user types I recruited 5 different type of users (which included users who requested the feature )to get sense of what kind of notifications are important to which type of users and conducted user interview.",
    userInterviewInsights: [
      {
        quote: "\n",
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
        "Alignment of user goals and business goals to benefit both are important things to balance when it comes to the strategy part. To help users and product to acheive their goals is crucial for user retention and hence profitable for business. Making process efficient faster and have a differentiator  which could result into revenue growth. Based on the user research managing the project assets which could be reuse and repurpose and improve collaboration was the must haves for users. To marry both of these I came up with the strategy below.",
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
    tags: ["AD-TECH ·\u00a0ADVERTISING · ENTERPRISE · MEDIA\u00a0· DATA"],
    cover: fjord.url,
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
    slug: "fjord2",
    index: "02",
    title: "Affiliates Website Redesign",
    subtitle: "Redesigning a legacy application\u00a0",
    client: "Fjord, Oslo",
    year: "2025",
    ...defaultMeta,
    strategySectionTitle: "Design Thinking Workshop",
    strategySectionSubtitle: "Planning",
    strategy: {
      ...defaultMeta.strategy,
      productGoals: {
        ...defaultMeta.strategy.productGoals,
        intro: "",
        workshopAttendees: "<strong>Stakeholders</strong>\u00a0\n1.Sr. Mgr, Affiliate Relations & Agency ops\n2.VP of Political Ops\n3.Director Of Billing Ops Markets and Political\n4.User Administration Manager\n\n<strong>Product</strong>\u00a0\n5.Senior Product Manager\n6. UI UX Designer (Me as a Facilitator)\n\n<strong>Engineering</strong>\u00a0\n7.Director, QA Software Engineering\n8.Senior Director, Software Engineering",
        workshopSchedule: "<strong>Day 1</strong>\n1.Applications Walk through\n2.Defining The Scope\n3.Defining Personas\n4.Survey Feedback Analysis\n5.Card sorting\u00a0\n\n<strong>Day 2</strong>\u00a0\n1. Themes /Cluster\x03Voting\n2.Prioritization\n3.Sketching & Presenting\n4. Defining Success Metrics \x03\n5. Define Next steps\n"
      }
    },
    timeframe: "8 Weeks",
    tools: "Survey Monkey,\u00a0Claude ,\nMicrosoft Clarity, Power BI,Microsoft Azure,Teams,\nAdobe XD",
    tasksPerformed: "End to End Design, User Research, Workshop Facilitation, Wire-framing, Prototyping, Stakeholder buy-in, Collaboration with PM, QA and Engineering team.\u00a0",
    overview: "A multiscreen advanced TV advertising company empowering brands to reach audiences with precision at scale.Ampersand is jointly owned by the largest cable operators in the US which are Comcast,COX, Charter.The cross-screen, data-driven solutions, powered by America’s largest TV inventory and largest set of data viewership insights, are revolutionizing TV planning, buying and measurement. There three lines of business National, Local and Addrasable.\n\n",
    goal: "All the affiliates working with the company has been using the 20 years old site which has many things which is not working.Some things are not used anymore, speed is slow, cannot add new functionality because of old codebase.To get updated data user has to keep on refreshing manually after every few minutes so they don’t miss any of the orders or the order revisions.Some functionalities are broken and need to be fixed and dated UI/UX.\n",
    research: {
      ...defaultMeta.research,
      userInterview: "A Survey was sent to all the affiliates which included the questions about the Old application they are using to understand how critical it is for different job profile, how do they rate the current website and to know their pain points to know the area of improvements.\u00a0\nOpen Ended Questions\n1. Do you use workarounds to get your job done?\n2. What new features would make the site more valuable\n3. Please share your feedback, Additional comments or suggestions\n\u00a0\nThe total responses we got for the survey was 128.\n\n",
    },
    role: "Lead Product Designer",
    tags: ["AD-TECH · ADVERTISING · ENTERPRISE · MEDIA\u00a0· DATA\u00a0"],
    cover: fjord.url,
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
    index: "03",
    title: "Grid Website",
    subtitle: "Document-Centric Workflows to a Connected PLM Ecosystem.",
    client: "Solace Health",
    year: "2024",
    ...defaultMeta,
    research: {
      ...defaultMeta.research,
      userInterviewInsights: [
        {
          quote: '"It\'s difficult to put together all the details about the style in one place as different detail are in different files."',
          author: "Bejan, Technical Designer",
        },
        {
          quote: '"If there is any change in the style details or material we have to make the change in all the documents/files related to it which is difficult"',
          author: "Bobby, Fashion Designer",
        },
        {
          quote: '"Every time there are changes we have to keep factories updated with that and provide them the updated project related files"',
          author: "Rachna, Product Development Manager",
        },
        {
          quote: '"We have to search the material , trims and labels information and pricing and then add their price manually to the document/files"',
          author: "Pinky, Product Development Manager",
        },
      ],
    },
    role: "Lead UI UX Designer ",
    tags: [" SaaS ", " B2B ", " PLM ", " ERP ", "Enterprise ", " Web"],
    cover: solace.url,
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
      { label: "Reduced Delays in Production", value: "-32%\u00a0" },
      { label: "User Satisfaction\u00a0", value: "+9" },
      { label: "Faster Workflow\u00a0", value: "+13%" },
      { label: "Workflow Errors\u00a0", value: "-37%" },
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
    index: "04",
    title: "Grid Mobile app",
    subtitle: "Product Manufacturing Management and Tracking.",
    client: "Atlas, NYC",
    year: "2024",
    ...defaultMeta,
    research: {
      ...defaultMeta.research,
      userInterviewInsights: [
        {
          quote: '"Only few notifications are really important to me, I should be able to control which notifications I want to see and which one I don\'t."',
          author: "Client",
        },
        {
          quote: '"Once I missed out on an important notification and as a result the product got delayed."',
          author: "Production Manager",
        },
        {
          quote: '"Every time I have to scroll through notifications to find notifications I need to see, which is very time consuming."',
          author: "Product Development Manager",
        },
        {
          quote: '"Managing more than 40+ products for a client company is pretty hectic and notifications are a mess"',
          author: "Company Account Manager",
        },
      ],
    },
    role: "Design Lead",
    tags: ["mobile", "iOS", "Android", "PLM", "ERP"],
    cover: atlas.url,
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
