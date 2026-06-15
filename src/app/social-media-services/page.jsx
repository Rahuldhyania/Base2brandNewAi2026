import Narrative from "@/components/ai/Narrative";
import Hero from "@/components/social-media/site/Hero";
import MarqueeStrip from "@/components/social-media/site/MarqueeStrip";
import ServicesSection from "@/components/social-media/site/ServicesSection";
import Capabilities from "@/components/ai/Capabilities";
import BuildingNow from "@/components/ai/BuildingNow";
import TechStack from "@/components/ai/TechStack";
import Framework from "@/components/landing/Framework";
import CreativeShowcase from "@/components/social-media/site/CreativeShowcase";

const features = [
  {
    l: "Search Behaviour Evolution",
    d: "Customers no longer travel a single funnel — they bounce between AI assistants, classic search, social, and communities. Visibility is now multi-modal.",
  },
  {
    l: "AI Discovery Platforms",
    d: "ChatGPT, Gemini and Perplexity answer commercial queries directly. Being cited as an authoritative source is the new top-of-funnel.",
  },
  {
    l: "Creative-Led Advertising",
    d: "Media buying is commoditized. Performance is increasingly decided by the creative — motion, hooks, formats, and message-market fit.",
  },
  {
    l: "Trust & Reputation Signals",
    d: "Reviews, sentiment, and brand mentions shape conversion across every channel — and feed the AI models that decide who gets recommended.",
  },
];

const CAPS = [
  {
    icon: "Network",
    title: "SEO & Technical SEO",
    span: "md:col-span-6 lg:col-span-4",
    items: [
      "Technical audits",
      "On-page SEO",
      "Local SEO",
      "Authority building",
    ],
    accent: true,
  },
  {
    icon: "Workflow",
    title: "Generative Engine Optimization",
    span: "md:col-span-6 lg:col-span-4",
    items: [
      "ChatGPT visibility",
      "AI answer optimization",
      "Entity optimization",
      "Citation management",
    ],
  },
  {
    icon: "AudioLines",
    title: "Performance Marketing",
    span: "md:col-span-6 lg:col-span-4",
    items: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Retargeting systems"],
  },

  {
    icon: "Network",
    title: "Creative Studio",
    span: "md:col-span-6 lg:col-span-4",
    items: [
      "Ad creatives",
      "Motion graphics",
      "Video production",
      "UGC content",
    ],
    accent: true,
  },
  {
    icon: "Workflow",
    title: "Growth Analytics",
    span: "md:col-span-6 lg:col-span-4",
    items: ["Attribution", "Dashboard reporting", "Performance insights"],
  },
  {
    icon: "AudioLines",
    title: "Social Media Marketing",
    span: "md:col-span-6 lg:col-span-4",
    items: ["Content strategy", "Community growth", "Platform management"],
  },
  {
    icon: "Shield",
    title: "Online Reputation Management",
    span: "md:col-span-6 lg:col-span-4",
    items: ["Review management", "Brand monitoring", "Sentiment tracking"],
  },
  {
    icon: "Target",
    title: "Conversion Rate Optimization",
    span: "md:col-span-6 lg:col-span-4",
    items: ["Landing pages", "Funnel optimization", "A/B testing"],
  },
];

const ITEMS = [
  {
    icon: "Users",
    title: "AI Workforce",
    tagline: "Digital employees operating continuously.",
    desc: "Always-on digital workers handling structured operations, ticketing, scheduling, qualification, and follow-through across 24/7 cycles.",
    metrics: ["24/7 cadence", "0 onboarding ramp", "Audit-grade logs"],
  },
  {
    icon: "GitBranch",
    title: "Multi-Agent Operations",
    tagline: "AI teams collaborating autonomously.",
    desc: "Coordinated agent networks that plan, delegate, validate, and execute multi-step workflows with shared memory and guardrails.",
    metrics: ["Agent-to-agent", "Tool routing", "Policy-aware"],
  },
  {
    icon: "Briefcase",
    title: "Enterprise Copilots",
    tagline: "Department-specific intelligence systems.",
    desc: "Copilots embedded in sales, ops, support, and engineering — trained on private context, integrated to systems of record.",
    metrics: ["RAG-grounded", "RBAC native", "BYO models"],
  },
  {
    icon: "BrainCircuit",
    title: "Decision Intelligence",
    tagline: "Systems that recommend and execute.",
    desc: "Models that synthesize signals across data warehouses and act — with explainability, human review, and reversibility built-in.",
    metrics: ["Explainable", "Reversible", "Outcome tracked"],
  },
  {
    icon: "PhoneCall",
    title: "Voice Operations",
    tagline: "Human-like voice for customer interactions.",
    desc: "Production voice agents handling inbound, outbound, qualification, scheduling, and structured data capture at low latency.",
    metrics: ["<350ms latency", "Telephony native", "Hand-off ready"],
  },
  {
    icon: "LayoutDashboard",
    title: "AI Command Centers",
    tagline: "Unified enterprise AI control planes.",
    desc: "Single pane to deploy, observe, govern, and meter your entire AI estate — agents, models, prompts, costs, and outcomes.",
    metrics: ["Observability", "Cost metering", "Governance"],
  },
];

const steps = [
  {
    n: "01",
    title: "Discovery & Audit",
    body: "Diagnose current marketing performance, technical SEO, brand sentiment, paid efficiency, and competitive landscape.",
    icon: 'ScanSearch',
  },
  {
    n: "02",
    title: "Growth Strategy",
    body: "Identify high-leverage channels, define ICPs, build a quarterly growth thesis and the metrics that decide success.",
    icon: 'Database',
  },
  {
    n: "03",
    title: "Creative & Campaign Production",
    body: "Develop the assets — ad creatives, video, landing pages, and content — engineered to perform against the thesis.",
    icon: 'FileText',
  },
  {
    n: "04",
    title: "Launch & Optimization",
    body: "Deploy campaigns, instrument attribution, run rigorous experimentation, and improve unit economics weekly.",
    icon: 'Award',
  },
  {
    n: "05",
    title: "Scale & Expansion",
    body: "Compound winners — expand to new geographies, channels, and audience segments without sacrificing efficiency.",
    icon: 'Sparkles',
  },
];
export default function page() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <MarqueeStrip />
      <Narrative
        highlightTag={"Why Growth Has Changed"}
        title={"Attention has fragmented. Growth strategies should too."}
        description={[
          "Customers discover brands through AI assistants, search engines, social feeds, videos, communities, and recommendations. Winning brands engineer visibility across every touchpoint.",
        ]}
        features={features}
        tagList={[
          "Best CRM software for B2B SaaS",
          "Top digital marketing agency in 2026",
          "Best HRMS company for mid-market",
          "Who should I hire for web development?",
        ]}
      />
      <Capabilities
        title={"A new layer of growth built for AI-first buyers."}
        description={`Three disciplines, one outcome — your brand cited, recommended and chosen inside every AI surface that matters.`}
        highlightTag={"The Stack"}
        capsData={CAPS}
      />
      <BuildingNow
        highlightTag={"CURRENTLY IN PRODUCTION"}
        title={"What we are building right now"}
        description={
          "Six categories of intelligent systems, shipped into production — discovered as you scroll."
        }
        ITEMS={ITEMS}
      />
      <TechStack
        highlightTag={"BUILT ON THE LATEST AI STACK"}
        title={
          "Models, frameworks, and infrastructure — composed deliberately."
        }
      />
      <Framework
        highlightTag={"· Methodology"}
        title={"The Base2Brand GEO Framework"}
        description={
          "A five-step operating system for turning your brand into the answer AI engines recommend."
        }
        steps={steps}
      />
      <CreativeShowcase />
    </div>
  );
}
