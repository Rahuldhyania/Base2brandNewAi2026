// Sample content library for the Knowledge Nebula
export const CATEGORIES = [
  "All",
  "AI",
  "Shopify",
  "Marketing",
  "Development",
  "Automation",
  "SEO",
  "Case Studies",
  "Prompt Packs",
  "Whitepapers",
];

export const FLOATING_CATEGORIES = [
  "AI",
  "Shopify",
  "Marketing",
  "SEO",
  "Development",
  "Automation",
  "Case Studies",
  "Prompt Library",
  "ERP",
  "Apple Ecosystem",
];

export const TOPIC_NODES = [
  { id: "ai-agents", label: "AI Agents", x: 12, y: 30 },
  { id: "hydrogen", label: "Hydrogen", x: 30, y: 62 },
  { id: "headless", label: "Headless Commerce", x: 48, y: 22 },
  { id: "shopify-plus", label: "Shopify Plus", x: 62, y: 55 },
  { id: "aeo", label: "AEO", x: 78, y: 28 },
  { id: "geo", label: "GEO", x: 88, y: 62 },
  { id: "rag", label: "RAG", x: 22, y: 82 },
  { id: "openai", label: "OpenAI", x: 55, y: 82 },
  { id: "claude", label: "Claude", x: 74, y: 82 },
];

export const TOPIC_LINKS = [
  ["ai-agents", "rag"],
  ["ai-agents", "openai"],
  ["openai", "claude"],
  ["rag", "openai"],
  ["hydrogen", "headless"],
  ["headless", "shopify-plus"],
  ["shopify-plus", "hydrogen"],
  ["aeo", "geo"],
  ["headless", "ai-agents"],
  ["aeo", "openai"],
];

const IMG = {
  featured: "https://images.unsplash.com/photo-1643139863038-7355941e9e89",
  a: "https://images.pexels.com/photos/33441883/pexels-photo-33441883.jpeg",
  b: "https://images.unsplash.com/photo-1608501821300-4f99e58bba77?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHw0fHxkYXJrJTIwYWJzdHJhY3QlMjBjb3NtaWMlMjBuZWJ1bGElMjBsdXh1cnl8ZW58MHx8fHwxNzgyNDY1NzI3fDA&ixlib=rb-4.1.0&q=85",
  c: "https://images.pexels.com/photos/13180244/pexels-photo-13180244.jpeg",
  d: "https://images.pexels.com/photos/13026928/pexels-photo-13026928.jpeg",
  e: "https://images.unsplash.com/photo-1546800197-408e420929fe",
  f: "https://images.pexels.com/photos/9665181/pexels-photo-9665181.jpeg",
  g: "https://images.unsplash.com/photo-1566410824233-a8011929225c",
};

export const FEATURED = {
  id: "featured-1",
  slug: "ai-agents-changing-commerce",
  title: "How AI Agents Are Quietly Rewriting Commerce",
  excerpt:
    "A deep field study on autonomous agents inside Shopify Plus and enterprise ERP stacks — with playbooks, cost analysis and adoption frameworks used by our clients.",
  category: "AI",
  readingTime: "18 min read",
  date: "Dec 04, 2025",
  author: { name: "Aarav Menon", role: "Principal Engineer" },
  cover: IMG.featured,
  tags: ["AI Agents", "Shopify Plus", "RAG"],
};

export const RESOURCES = [
  {
    id: "r1",
    slug: "headless-hydrogen-in-2026",
    title: "Headless Hydrogen in 2026 — What Actually Ships",
    excerpt:
      "An architectural review of Shopify Hydrogen deployments across 40+ brands. Latency, cost, DX and the pitfalls no one shows on stage.",
    category: "Shopify",
    readingTime: "12 min",
    date: "Nov 27, 2025",
    author: { name: "Priya Kaur" },
    cover: IMG.b,
    tags: ["Hydrogen", "Headless"],
    span: "tall",
  },
  {
    id: "r2",
    slug: "rag-for-catalog-search",
    title: "RAG for Catalog Search that Actually Converts",
    excerpt:
      "Rebuild your product search on retrieval-augmented generation without breaking merchandising rules or SEO.",
    category: "AI",
    readingTime: "9 min",
    date: "Nov 22, 2025",
    author: { name: "Dev Kapoor" },
    cover: IMG.a,
    tags: ["RAG", "Search", "OpenAI"],
  },
  {
    id: "r3",
    slug: "aeo-vs-geo-2026",
    title: "AEO vs GEO — The New SEO Playbook",
    excerpt:
      "Answer Engine and Generative Engine Optimization decoded. Practical templates, schema, and citation strategies for LLM-powered search.",
    category: "SEO",
    readingTime: "14 min",
    date: "Nov 18, 2025",
    author: { name: "Simran Ahluwalia" },
    cover: IMG.c,
    tags: ["AEO", "GEO"],
    span: "wide",
  },
  {
    id: "r4",
    slug: "shopify-plus-migration-case-study",
    title: "Case Study — Migrating a $40M Brand to Shopify Plus",
    excerpt:
      "How we replatformed an enterprise catalog with zero downtime, a live A/B experiment, and a 22% lift in checkout completion.",
    category: "Case Studies",
    readingTime: "16 min",
    date: "Nov 11, 2025",
    author: { name: "Rohan Verma" },
    cover: IMG.d,
    tags: ["Shopify Plus", "Migration"],
  },
  {
    id: "r5",
    slug: "prompt-library-ecommerce",
    title: "Prompt Pack — 60 Prompts for E-Commerce Ops",
    excerpt:
      "Battle-tested prompts across merchandising, support, PDP copy, ad creative and analytics — with model-by-model tuning notes.",
    category: "Prompt Packs",
    readingTime: "6 min",
    date: "Nov 05, 2025",
    author: { name: "Isha Sen" },
    cover: IMG.e,
    tags: ["Prompts", "Ops", "OpenAI", "Claude"],
    span: "tall",
  },
  {
    id: "r6",
    slug: "automation-runbook-erp",
    title: "The ERP Automation Runbook",
    excerpt:
      "A field guide to automating the last mile between Shopify, NetSuite and ops teams — with error handling and audit trails.",
    category: "Automation",
    readingTime: "11 min",
    date: "Oct 30, 2025",
    author: { name: "Yash Bhatia" },
    cover: IMG.f,
    tags: ["ERP", "Automation"],
  },
  {
    id: "r7",
    slug: "whitepaper-luxury-dtc",
    title: "Whitepaper — The State of Luxury DTC 2026",
    excerpt:
      "18 pages of data, 24 interviews, one honest read on where premium brands are winning and where they are quietly bleeding margin.",
    category: "Whitepapers",
    readingTime: "24 min",
    date: "Oct 22, 2025",
    author: { name: "Base2Brand Research" },
    cover: IMG.g,
    tags: ["Luxury", "Whitepaper"],
  },
  {
    id: "r8",
    slug: "developer-diary-vercel",
    title: "Developer Diary — Vercel, Turbo, and the New DX",
    excerpt:
      "Notes from six months of production Turbopack and Vercel Fluid Compute. What we ripped out. What we kept.",
    category: "Development",
    readingTime: "8 min",
    date: "Oct 14, 2025",
    author: { name: "Kabir Ahuja" },
    cover: IMG.b,
    tags: ["Vercel", "DX"],
  },
  {
    id: "r9",
    slug: "marketing-attribution-2026",
    title: "Marketing Attribution That Survives Privacy Rules",
    excerpt:
      "Server-side, model-assisted attribution stacks that reconcile Meta, Google and Klaviyo in a post-cookie world.",
    category: "Marketing",
    readingTime: "10 min",
    date: "Oct 07, 2025",
    author: { name: "Naina Ali" },
    cover: IMG.a,
    tags: ["Attribution"],
    span: "wide",
  },
  {
    id: "r10",
    slug: "checklist-launch-plan",
    title: "Checklist — 47-Step Launch Plan for a New Store",
    excerpt:
      "The exact list our team runs before every launch. Copy, tag, and ship — no fluff, no filler, no missed steps.",
    category: "Shopify",
    readingTime: "7 min",
    date: "Sep 29, 2025",
    author: { name: "Meera Iyer" },
    cover: IMG.c,
    tags: ["Launch", "Checklist"],
  },
  {
    id: "r11",
    slug: "ai-agents-support-desk",
    title: "AI Agents at the Support Desk — A Live Deployment",
    excerpt:
      "How we cut first response time by 71% while keeping human warmth on the loop. Architecture, guardrails, learnings.",
    category: "AI",
    readingTime: "13 min",
    date: "Sep 20, 2025",
    author: { name: "Aarav Menon" },
    cover: IMG.d,
    tags: ["AI Agents", "Support", "Claude"],
  },
  {
    id: "r12",
    slug: "case-study-apple-ecosystem",
    title: "Case Study — Building for the Apple Ecosystem",
    excerpt:
      "How a spatial-computing brand shipped iOS, iPadOS, macOS and visionOS from a single design system in 90 days.",
    category: "Case Studies",
    readingTime: "15 min",
    date: "Sep 12, 2025",
    author: { name: "Rohan Verma" },
    cover: IMG.e,
    tags: ["Apple", "Design"],
    span: "tall",
  },
];

export const DOWNLOADS = [
  { id: "d1", label: "Prompt Pack", icon: "Sparkles", detail: "60 prompts • JSON" },
  { id: "d2", label: "PDF", icon: "FileText", detail: "Playbook • 24 pages" },
  { id: "d3", label: "Checklist", icon: "ListChecks", detail: "47 steps • Notion" },
  { id: "d4", label: "Whitepaper", icon: "BookOpen", detail: "Research • PDF" },
  { id: "d5", label: "Framework", icon: "Layers", detail: "Figma • Tokens" },
  { id: "d6", label: "Template", icon: "LayoutTemplate", detail: "Next.js • MIT" },
];
