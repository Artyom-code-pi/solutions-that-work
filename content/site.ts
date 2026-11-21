/**
 * ─────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE.
 *  Edit this file to update copy, links, experience and work.
 *  Every factual claim below is drawn from Artyom's CV.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Solutions That Work",
  tagline: "Turning complexity into results.",
  owner: "Artyom Hudolij",
  location: "Hampshire, United Kingdom",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://solutionsthatwork.online",
  description:
    "Solutions That Work is the independent practice of Artyom Hudolij — product ownership, technical delivery and digital transformation for organisations that need complex change to land safely.",
  // Tip: once your domain email is set up, swap this for e.g. artyom@solutionsthatwork.online
  email: "artyom.hudolij@gmail.com",
  linkedin: "https://www.linkedin.com/in/artyom-hudolij-3161b3aa",
  phone: "+447900707302", // used for the tel: link
  phoneDisplay: "+44 7900 707302",
  availability: "Available for consulting, contract and senior delivery roles",
};

export const nav = [
  { label: "How it works", href: "#approach" },
  { label: "Expertise", href: "#expertise" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
];

export const hero = {
  struck: "Complicated.",
  resolved: "Simple.",
  body:
    "Messy systems, competing priorities, processes held together by workarounds. I’m Artyom — I turn them into something your teams can follow, run and rely on.",
  primaryCta: { label: "Let’s Talk", href: "#contact" },
  secondaryCta: { label: "Explore My Expertise", href: "#expertise" },
};

export const statsHeading = "Six years of making enterprise change feel obvious in hindsight.";

export const stats = [
  { value: "6+", label: "years delivering enterprise platforms and technology change at Vodafone / VOIS" },
  { value: "1", label: "multi-system inventory & finance transformation led on the product side — cutover to hypercare" },
  { value: "7–10", label: "person commercial delivery team led, recruited and developed" },
];

export type Service = {
  title: string;
  pain: string; // what the client is saying
  gain: string; // what changes
  body: string;
  tone: "night" | "sky" | "sand" | "coral" | "mint";
};

export const services: Service[] = [
  { title: "Product Ownership & Delivery", pain: "Everything is a priority.", gain: "A clear order everyone agrees on", body: "Balancing roadmap demand, production support and real engineering capacity.", tone: "night" },
  { title: "Digital & Systems Transformation", pain: "Go-live feels like a leap of faith.", gain: "Gated, staged, supported change", body: "Sign-offs, pilot validation, staged rollout and structured hypercare.", tone: "sky" },
  { title: "Programme & Project Delivery", pain: "Nobody knows where we really are.", gain: "One honest view of risk and progress", body: "Dependencies, blockers and ambiguity turned into actions, owners and dates.", tone: "sand" },
  { title: "Process & Data Quality", pain: "We fix the same records every week.", gain: "Causes fixed at the source", body: "Simpler exception controls and source-field mapping teams can act on.", tone: "coral" },
  { title: "Agile Ways of Working", pain: "We do the ceremonies, not the benefits.", gain: "Flow, testing and releases that fit", body: "Practical Scrum with UAT, regression and releases planned in.", tone: "mint" },
  { title: "Stakeholder Alignment", pain: "Every team sees a different picture.", gain: "Shared priorities, fewer surprises", body: "Product, engineering, data, finance and operations on the same page.", tone: "night" },
];

export const about = {
  heading: "The person behind the work",
  paragraphs: [
    "I’m Artyom Hudolij, a hands-on Product Owner and technical delivery lead based in Hampshire. From 2020 I worked as a Product Owner at Vodafone / VOIS, owning priorities and delivery for a business-critical enterprise platform connecting inventory, operational data and finance processes.",
    "My work sits where business needs meet technology delivery. I turn ambiguous requirements and technical issues into defined actions, owners and release priorities, working with developers, DevOps, business analysts, testers and senior stakeholders so that everyone sees the same picture of risk and readiness.",
    "Most recently I led the product-side workstream of a multi-system inventory and finance transformation, from integration testing and dependency resolution through a gated, phased production cutover and hypercare. Before that I led a 7–10-person commercial delivery team at Vodafone, and started my career in customer service and inside sales at Eaton — which is where I learned that technology only matters if it works for the people using it.",
    "Through Solutions That Work I bring that experience to organisations directly, as an independent consultant or contractor, and I’m also open to senior delivery and transformation roles.",
  ],
  // Put your photo in /public (e.g. /public/artyom.jpg) and set the path here.
  photo: "/artyom-portrait.jpg",
  principles: [
    { title: "Plain-spoken", body: "Clear assessments of risk and progress — no spin." },
    { title: "Safety first", body: "Gates, pilots and hypercare so change doesn’t break operations." },
    { title: "Hands-on", body: "Close to the detail, from test plans to source-field mapping." },
  ],
};

export type Role = {
  title: string;
  org: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const experience: Role[] = [
  {
    title: "Product Owner",
    org: "Vodafone / VOIS",
    period: "2020 – 2026",
    summary:
      "Owned product priorities and delivery for a business-critical enterprise platform connecting inventory, operational data and finance processes.",
    highlights: [
      "Balanced roadmap demand, production support and engineering capacity",
      "Led delivery coordination across developers, DevOps, business analysts, test teams and business stakeholders",
      "Managed critical incidents, integration blockers, business-impact assessments and service-governance forums",
      "Gave senior stakeholders clear assessments of risk, progress and readiness",
    ],
  },
  {
    title: "Team Leader, Commercial Obligations & Country Desk",
    org: "Vodafone",
    period: "2019 – 2020",
    summary: "Led a team of 7–10 commercial delivery specialists serving major enterprise customers.",
    highlights: [
      "Recruitment, performance objectives, coaching, cross-training and workload allocation",
      "Oversaw delivery of commercial commitments, resolving escalations with business partners",
    ],
  },
  {
    title: "Customer Service & Inside Sales — Lead Representative",
    org: "Eaton",
    period: "2016 – 2019",
    summary: "Customer orders, commercial support and complaint resolution, progressing to a lead role.",
    highlights: [
      "Coordinated day-to-day team activity and business-partner communications",
      "Supported colleagues on complex customer issues and contributed to project improvements",
    ],
  },
];

export type CaseStudy = {
  sector: string;
  title: string;
  challenge: string;
  role: string;
  outcome: string;
  tags: string[];
  note?: string;
};

// Anonymised — described by type of work, not confidential detail.
export const work: CaseStudy[] = [
  {
    sector: "Telecommunications · 2025–2026",
    title: "Enterprise inventory & finance transformation",
    challenge:
      "A multi-system change spanning ordering, integration, inventory, supplier-invoice controls and finance — covering multiple suppliers and thousands of production inventory records.",
    role:
      "Led the product-side workstream: consolidated UAT and regression requirements, resolved cross-system dependencies and coordinated risk and go/no-go recommendations for senior management.",
    outcome:
      "A gated cutover with technical sign-offs, pilot validation, staged rollout and structured hypercare. When gaps appeared in migrated cost data, affected invoice processing was paused, investigated and resumed under control once the correction was confirmed.",
    tags: ["Transformation", "Cutover", "Risk"],
  },
  {
    sector: "Telecommunications",
    title: "Data quality & operating-model change",
    challenge:
      "Inherited data-quality exception controls were hard to act on, and a major inventory operating-model change needed to land with operational teams.",
    role:
      "Supported the change through requirements, UAT, operational change and hypercare; simplified exception controls and coordinated source-field mapping.",
    outcome:
      "Operational teams could identify and correct the underlying causes of failed records, backed by recurring product and service governance, self-service guidance and training materials.",
    tags: ["Process", "Data Quality", "Adoption"],
  },
  {
    sector: "Product innovation",
    title: "AI-assisted product-demand intake",
    challenge:
      "Incoming product demand arrived in inconsistent forms, making discovery slow and readiness hard to judge.",
    role:
      "Authored a proposal for AI-assisted intake with structured requirement discovery, human validation, readiness controls and integration into existing delivery workflows.",
    outcome: "A considered design for using AI to support — not replace — product judgement.",
    tags: ["AI-enabled products", "Discovery"],
    note: "Proposal stage — not a deployed solution",
  },
];

export const skills = [
  "Technical delivery across the SDLC",
  "Product & Engineering coordination",
  "Agile / Scrum",
  "Backlog & capacity prioritisation",
  "Risk, issue & dependency management",
  "UAT, integration & regression testing",
  "Release & cutover planning",
  "Operational readiness & hypercare",
  "Matrix-team leadership",
  "Stakeholder management",
  "AI-enabled products",
];

export const tools = ["Jira", "ServiceNow", "Talend", "Amazon QuickSight", "Stakeholder workshops", "Incident management"];

export const approach = [
  { step: "01", title: "Understand the challenge", body: "See the mess as it really is — talk to people, follow the work and the data." },
  { step: "02", title: "Identify what matters", body: "Pick out the few priorities, risks and dependencies that really decide the outcome." },
  { step: "03", title: "Build a practical solution", body: "Line them up into a plan people can run — tests, gates and owners included." },
  { step: "04", title: "Deliver measurable results", body: "Release in stages, report honestly, stay through hypercare until it’s steady." },
];

export const contact = {
  heading: "Make it simple.",
  body:
    "Tell me what’s tangled — a platform pulled in too many directions, a transformation that needs a safe path to production, or a process that keeps creating rework. No hard sell, just a straightforward conversation.",
  engagements: ["Consulting engagements", "Contract roles", "Senior delivery & transformation positions"],
};
