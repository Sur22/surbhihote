import fjord from "@/assets/case-fjord.png.asset.json";
import solace from "@/assets/case-solace.png.asset.json";
import atlas from "@/assets/case-atlas.png.asset.json";
import notificationBanner from "@/assets/notification-banner.png.asset.json";
import audienceBuilderMockup from "@/assets/audience-builder-mockup.png.asset.json";

export type CaseStudy = {
  slug: "fjord" | "solace" | "atlas" | "atlas2" | "fjord2";
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
  opportunity?: string;
  approach: string[];
  outcome: { label: string; value: string }[];
  sections: { heading: string; body: string }[];
  hidden?: boolean;
};

const defaultMeta = {
  role: "UI/UX Designer",
  timeframe: "2 Months",
  tools: "Sketchbook & Pencil, Whiteboard, Adobe XD, Miro,\u00a0",
  tasksPerformed:
    "End-to-End Design, Lean UX, Design Strategy,\u00a0User Research, UI Design, Component Design, User Flows, Wire-framing, Prototyping, Usability Testing, Design Handoff, Collaboration with Product, Engineering, and QA teams.",
  overview:
    "Ampersand is a multiscreen advanced TV advertising company empowering brands to reach audiences with precision at scale. Ampersand is jointly owned by the largest cable operators in the US — Comcast, COX, and Charter. The cross-screen, data-driven solutions, powered by America’s largest TV inventory and largest set of data viewership insights, are revolutionizing TV planning, buying, and measurement. There are three lines of business: National, Local, and Addressable.",
  goal:
    "As a solution to this problem, we wanted to build a tool where\u00a0\n1. Account Executives and Account Directors could build the custom audience without depending on the Data Team.\n2.\u00a0 Cut the waiting time for Account Executives & Account Directors\n\u00a0 \u00a0 \u00a0-The Data team took on average a week of turnaround time to fulfill a custom audience creation.\n3. Take this responsibility off the Data team shoulders.\n4. Cut down the cost of the external tool used to build custom audiences.\u00a0",
  research: {
    stakeholderInterview:
      "After I get a brief from the product team about the new feature and receive the product requirements document (PRD) and competitive analysis, I gain a holistic view of the feature and functionality we are thinking of developing.\nThe stakeholder I interviewed for this feature was the 'Head of Product Development'. It gave me a better understanding of the problem we are trying to solve.\nAs there are many phases and stages in PLM, Product Development Managers were having a hard time managing all the product-related files and data. They had to use multiple tools to manage communication with the factory and the client whenever any change or update was made to the product.",
    userInterview:
      "I went to 5 users for a desk interviews\u00a0and asking them the set of questions; a lean sampling.\u00a0I chose guerrilla, in-context research to get signal fast without derailing a fast-moving team. Everyone gets the notifications but the Main issues was the users who handle the PLM and depend on the notifications to track the process and do the next steps\u00a0 'Product Development Managers' Product Managers, also the one who are the account manages has to keep tabs on the process form Sourcing, Pre production and prodcution.\n",
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
        "\n",
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
    "I had a brainstorming session with the Product team after conducting the user interviews. It was helpful for kickstarting the design phase. With the help of a whiteboard, I showed the product team what design I had in mind as a possible solution for the feature we were building.",
};

const _caseStudies: CaseStudy[] = [
  {
    slug: "fjord2",
    index: "01",
    title: "Affiliate Website Redesign",
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
        workshopAttendees: "\n",
        workshopSchedule: "\n"
      }
    },
    timeframe: "3 Months",
    tools: "Survey Monkey,\u00a0Claude,\nMicrosoft Clarity, Power BI, Microsoft Azure, Teams,\nAdobe XD",
    tasksPerformed: "End-to-End Design, User Research, Workshop Facilitation, Wireframing, Prototyping, Stakeholder buy-in, Collaboration with PM, QA, and Engineering teams.\u00a0",
    overview: "Affiliates — the partner networks who buy and transact against that inventory — run their daily business through Ampersand's online portal: pulling rate cards, placing orders, and tracking yield.\n\n\n\nThe portal was 25 years old, and its codebase was frozen — no fix could ship without a full rebuild.\nOver the years, workarounds had hardened into the way affiliates worked.\nI led the end-to-end redesign as Lead Product Designer (sole).\nThe goal: rebuild a business-critical tool that 500+ affiliates depend on daily — without disrupting a single day of their work in the transition.",
    goal: "\n",
    research: {
      ...defaultMeta.research,
      userInterview: "A survey was sent to all affiliates. It included questions about the old application they currently use, to understand how critical it is for different job profiles, how they rate the current website, and to identify their pain points and areas for improvement.\nOpen-Ended Questions\n1. Do you use workarounds to get your job done?\n2. What new features would make the site more valuable?\n3. Please share your feedback, additional comments, or suggestions.\n\nThe total number of responses we got for the survey was 128.\n\nThe major issues that emerged from the open-ended question responses are as follows:\n1. Speed & stability — platform speed, and speed for processing large orders (known issue).\n2. Makegood processing and synchronization.\n3. Order revisions history.\n4. Searching and filtering not holding.\n5. Redundancy and confusion due to poor naming conventions.\n6. Broken functionalities / workarounds.\n7. Automation of manual tasks.\n8. Issues related to file exports.\n\n\n",
    },
    role: "Lead Product Designer",
    tags: ["AD-TECH · ADVERTISING · ENTERPRISE · MEDIA\u00a0· DATA\u00a0"],
    cover: fjord.url,
    summary:
      "Enterprise web redesign of a 25-year-old affiliate ordering portal used by 500+ media partners — 92% task success and zero business lost at launch.",
    problem:
      "Fjord had grown a feature graveyard. The home screen hid the user's balance behind four taps; settings buried bill-pay; and the brand voice — warm in print, cold on screen — never carried into the product.",
    approach: [
      "30 in-context interviews across three customer segments to map the real Sunday-morning use cases.",
      "Stripped the IA from 11 tabs to 3, defending the cut in a workshop with leadership and compliance.",
      "Authored a 64-token design system in Figma — type, spacing, motion, and a single primary action per screen.",
      "Shipped iteratively behind a feature flag; ran a 6-week A/B against the legacy app before flipping the switch.",
    ],
    outcome: [
      { label: "Task Success Rate", value: "92%" },
      { label: "Manual refresh dropped significantly", value: "78%" },
      { label: "No business lost till the date since the release", value: "$0" },
      { label: "Functionalities Fixed\nNo More Workarounds", value: "8" },
      { label: "Faster loading time than earlier", value: "2x ↑" },
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
    title: "Tech Pack Tool",
    subtitle: "Document-Centric Workflows to a Connected PLM Ecosystem.",
    client: "Solace Health",
    year: "2024",
    ...defaultMeta,
    overview:
      "Ampersand is a multiscreen advanced TV advertising company empowering brands to reach audiences with precision at scale. Ampersand is jointly owned by the largest cable operators in the US — Comcast, COX, and Charter. The cross-screen, data-driven solutions, powered by America’s largest TV inventory and largest set of data viewership insights, are revolutionizing TV planning, buying, and measurement. There are three lines of business: National, Local, and Addressable.",
    goal:
      "As a solution to this problem, we wanted to build a tool where\u00a0\n1. Account Executives and Account Directors could build the custom audience without depending on the Data Team.\n2.\u00a0 Cut the waiting time for Account Executives & Account Directors\n\u00a0 \u00a0 \u00a0-The Data team took on average a week of turnaround time to fulfill a custom audience creation.\n3. Take this responsibility off the Data team shoulders.\n4. Cut down the cost of the external tool used to build custom audiences.\u00a0",
    research: {
      ...defaultMeta.research,
    userInterviewInsights: [
        {
          quote: '"It\'s difficult to put together all the details about the style in one place as different detail are in different files."',
          author: "Technical Designer",
        },
        {
          quote: '"If there is any change in the style details or material we have to make the change in all the documents/files related to it which is difficult"',
          author: "\u00a0Fashion Designer",
        },
        {
          quote: '"Every time there are changes we have to keep factories updated with that and provide them the updated project related files"',
          author: "\u00a0Product Development Manager",
        },
        {
          quote: '"We have to search the material , trims and labels information and pricing and then add their price manually to the document/files"',
          author: "\u00a0Product Development Manager",
        },
      ],
    },
    role: "Lead UI UX Designer ",
    tags: [" SaaS ", " B2B ", " PLM ", " ERP ", "Enterprise ", " Web"],
    cover: solace.url,
    summary:
      "SaaS PLM tech pack tool for fashion brands — replacing scattered Excel and PDF workflows with a connected library, cutting accounting errors 64%.",
    problem:
      "Fashion brands were running product development on disconnected Excel sheets, PDFs, and email threads. Style details, materials, trims, and BOMs lived in separate documents, so any change had to be manually updated across multiple files. Factories were often working from outdated versions, causing production delays, accounting errors, and miscommunication between design, product development, and vendors.",
    approach: [
      "Wrote the product principles before opening Figma — 'finishable', 'quiet', 'honest'.",
      "Designed a single onboarding question: 'How much time do you have today?'",
      "Built a content shelf, not a library — 21 sessions, hand-curated, no algorithm.",
      "Partnered with the writers on tone-of-voice so the copy and the UI shipped as one thing.",
    ],
    outcome: [
      { label: "Reduced calculation mistakes\nby automation replaced manual entry. ", value: "-64% " },
      { label: "The workflow came in-platform by eliminating tools outside the platform.", value: "2 \u2192 0" },
      { label: "Time on Task by using bringing data on the platform. ", value: "-34%" },
      { label: "Workflow Errors went down by standardization and versioning ", value: "-27%" },
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
    title: "Notifications Management\u00a0",
    subtitle: "Organizing and managing notifications to granular level",
    client: "Atlas, NYC",
    year: "2024",
    ...defaultMeta,
    overview:
      "The GRID is end-to-end supply chain visibility from product conception to distribution with real-time updates and analytics on sourcing, product development, production, and shipping. For companies running their supply chain on Excel sheets and point solutions, the GRID functions as the ERP and as an intuitive supply chain productivity layer. For companies that have legacy PIMs and ERPs, the GRID integrates to connect people, data, and workflows. In either role, the GRID delivers quick time to value by eliminating errors and digitizing manual processes thereby reducing OpEx and COGS and improving margins.",
    goal:
      "As a solution to the problem, we are providing an easy way to manage notification preferences at all levels from Product, Company, Files, Comments, Product Development phases and stages, Vendors, Billing, etc. so users can avoid unwanted notifications while still receiving those crucial to their day-to-day responsibilities of handling the product lifecycle efficiently. The goal is to give users  flexibility and control on subscribing to the notifications which are useful and important for their job.\n1.     Provide different user types ability to pick and choose the notifications that they would like to receive\n2.     Serve users ability to choose the notifications that they would like to receive per module and per product\n3.     Allow users ability to switch on/off notifications at any point of time\n\n",
    timeframe: "2 Weeks",
    research: {
      ...defaultMeta.research,
      userInterviewInsights: [
        {
          quote: '"Only few notifications are really important to me ,I should be able to control which notifications I want to see and which one I don\'t."',
          author: "Client",
        },
        {
          quote: '"Once I missed out on an important notification and as a result the the product got delayed."',
          author: "Production Manager",
        },
        {
          quote: '"Every time I have to scroll through notifications to find notifications I need to see, which is very time consuming."',
          author: "Product Development Manager",
        },
        {
          quote: '"Managing more than 40 + products for a client company is pretty hectic and notifications are a mess "',
          author: "Company Account Manager",
        },
      ],
    },
    role: "Design Lead",
    tags: ["mobile", "iOS", "Android", "PLM", "ERP"],
    cover: notificationBanner.url,
    summary:
      "Mobile notifications redesign for a supply-chain PLM on iOS and Android — granular preferences that cut spam from 62% to 7% and missed alerts by 87%.",
    problem:
      "Atlas had a beautiful map and a separate, ugly itinerary. Users were copying place names between the two all day. Conversion to paid was stuck at 1.8% because the free product never felt finished.",
    approach: [
      "Killed the two-panel layout. Map and list now share one scroll surface that responds to zoom.",
      "Designed 'pinch-to-day' — a gesture that collapses the map to a calendar strip and back.",
      "Built a kit of 9 itinerary blocks (meal, transit, stay, note…) that snap to the map.",
      "Shipped a public beta to the existing power-user community in week 7 — their feedback shaped v1.",
    ],
    outcome: [
      { label: "Fewer deadlines missed", value: "-38%" },
      { label: "Irrelevant\u00a0Notifications Reduced\u00a0", value: "62% \u2192 7%" },
      { label: "Reduction in missed alerts", value: "-87%" },
      { label: "User Satisfaction\u00a0\u00a0", value: "+6" },
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
  {
    slug: "fjord",
    index: "04",
    hidden: true,
    title: "Audience Builder",
    subtitle: "Audience Building Tool to Create Custom Audience Segments ",
    client: "Fjord, Oslo",
    year: "2025",
    
    ...defaultMeta,
    overview:
    "Ampersand is a multiscreen advanced TV advertising company empowering brands to reach audiences with precision at scale. Ampersand is jointly owned by the largest cable operators in the US — Comcast, COX, and Charter. The cross-screen, data-driven solutions, powered by America’s largest TV inventory and largest set of data viewership insights, are revolutionizing TV planning, buying, and measurement. There are three lines of business: National, Local, and Addressable.",
    goal:
      "As a solution to this problem, we wanted to build a tool where\u00a0\n1. Account Executives and Account Directors could build the custom audience without depending on the Data Team.\n2.\u00a0 Cut the waiting time for Account Executives & Account Directors\n\u00a0 \u00a0 \u00a0-The Data team took on average a week of turnaround time to fulfill a custom audience creation.\n3. Take this responsibility off the Data team shoulders.\n4. Cut down the cost of the external tool used to build custom audiences.\u00a0",
    research: {
      ...defaultMeta.research,
      userInterview: "I talked with both of the user groups who were going to use this tool. I also talked with selected users who are currently using the tool and asked them what they like and don't like about it, so I could make sure to design for the shortcomings of the tool as well.\nI studied the existing tool to understand all the functionalities it performs, which we needed to build, plus a few more things to enhance the functionality and make it easy for users.\u00a0\n1. Not very intuitive.\n2. Copy the whole segment logic once it is built.\n3. Copy and modify an existing segment.\n4. Ability to see segments created by other users and copy them.\n\n",
    },
    role: "Lead Product Designer",
    tags: ["AD-TECH ·\u00a0ADVERTISING · ENTERPRISE · MEDIA\u00a0· DATA"],
    cover: audienceBuilderMockup.url,
    summary:
      "Internal ad-tech web app that lets Account Executives build custom TV audience segments in minutes instead of a week — saving $400K per year.",
    problem:
      "Fjord had grown a feature graveyard. The home screen hid the user's balance behind four taps; settings buried bill-pay; and the brand voice — warm in print, cold on screen — never carried into the product.",
    approach: [
      "30 in-context interviews across three customer segments to map the real Sunday-morning use cases.",
      "Stripped the IA from 11 tabs to 3, defending the cut in a workshop with leadership and compliance.",
      "Authored a 64-token design system in Figma — type, spacing, motion, and a single primary action per screen.",
      "Shipped iteratively behind a feature flag; ran a 6-week A/B against the legacy app before flipping the switch.",
    ],
    outcome: [
      { label: "Reduced Workload\nfor Data Team\u00a0", value: "-20%" },
      { label: "Turn around time reduced significantly\u00a0", value: "1 week - 5 min" },
      { label: "Yearly savings for the company", value: "$400K" },
      { label: "Increased Workflow Efficiency\u00a0", value: "\u00a0 \u00a0 \u00a0 \u00a09% ↑" },
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
    slug: "atlas2",
    index: "05",
    hidden: true,
    title: "Redesign Product Page\u00a0",
    subtitle: "Organizing and managing notifications to granular level",
    client: "Atlas, NYC",
    year: "2024",
    ...defaultMeta,
    overview:
      "Ampersand is a multiscreen advanced TV advertising company empowering brands to reach audiences with precision at scale. Ampersand is jointly owned by the largest cable operators in the US — Comcast, COX, and Charter. The cross-screen, data-driven solutions, powered by America’s largest TV inventory and largest set of data viewership insights, are revolutionizing TV planning, buying, and measurement. There are three lines of business: National, Local, and Addressable.",
    goal:
      "As a solution to this problem, we wanted to build a tool where\u00a0\n1. Account Executives and Account Directors could build the custom audience without depending on the Data Team.\n2.\u00a0 Cut the waiting time for Account Executives & Account Directors\n\u00a0 \u00a0 \u00a0-The Data team took on average a week of turnaround time to fulfill a custom audience creation.\n3. Take this responsibility off the Data team shoulders.\n4. Cut down the cost of the external tool used to build custom audiences.\u00a0",
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
      "Product page redesign for a supply-chain PLM web app — restructuring layout and information density to reduce clutter and speed up findability.",
    problem:
      "Atlas had a beautiful map and a separate, ugly itinerary. Users were copying place names between the two all day. Conversion to paid was stuck at 1.8% because the free product never felt finished.",
    approach: [
      "Killed the two-panel layout. Map and list now share one scroll surface that responds to zoom.",
      "Designed 'pinch-to-day' — a gesture that collapses the map to a calendar strip and back.",
      "Built a kit of 9 itinerary blocks (meal, transit, stay, note…) that snap to the map.",
      "Shipped a public beta to the existing power-user community in week 7 — their feedback shaped v1.",
    ],
    outcome: [
      { label: "Reduction in Missed Deadlines", value: "-48%" },
      { label: "Client Satisfaction Rate Increased ", value: "43 → 52" },
      { label: "Reduced Missed Notifications", value: "87%" },
      { label: "User Satisfaction\u00a0\u00a0", value: "+9" },
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

export const caseStudies = _caseStudies;

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
