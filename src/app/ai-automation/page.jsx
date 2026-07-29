import MetricsBar from "@/components/ai/MetricsBar";
import Hero from "../components/ai/Hero";
import Narrative from "@/components/ai/Narrative";
import Capabilities from "@/components/ai/Capabilities";
import BuildingNow from "@/components/ai/BuildingNow";
import Architecture from "@/components/ai/Architecture";
import TechStack from "@/components/ai/TechStack";
import Industries from "@/components/ai/Industries";
import MaturityFramework from "@/components/ai/MaturityFramework";
import ResearchLab from "@/components/ai/ResearchLab";
import SEOContent from "@/components/ai/SEOContent";
import FinalCTA from "@/components/ai/FinalCTA";
import Work from "@/components/portfolio-animation/sections/Work";
import CommandCenter from "@/components/shopify-solution/site/CommandCenter";
import { LandingZone } from "@/sections/LandingZone";

const features = [
  { l: "Architected", d: "Not patched" },
  { l: "Governed", d: "Not improvised" },
  { l: "Measured", d: "Not promised" },
];

const CAPS = [
  {
    icon: "Network",
    title: "Applied AI & Agentic Engineering",
    desc: "AI systems designed to plan, act, learn and support real business workflows.",
    span: "md:col-span-7",
    items: [
      "AI Agents & Multi-Agent Systems",
      "Enterprise Copilots",
      "RAG Applications",
      "Enterprise Knowledge Systems",
    ],
    cta: "Discuss this practice",
    accent: true,
  },
  {
    icon: "Workflow",
    title: "AI Operations",
    desc: "Automation systems that remove repetitive work from sales, support, marketing and operations.",
    span: "md:col-span-5",
    items: [
      "Workflow Orchestration",
      "AI Decision Automation",
      "Human-in-the-Loop Systems",
      "Operational Intelligence",
      "CRM Automation",
      "Intelligent Task Routing",
    ],
    cta: "Discuss this practice",
  },
  {
    icon: "AudioLines",
    title: "Voice Intelligence",
    desc: "AI-powered voice systems for calls, customer interaction and business communication.",
    span: "md:col-span-5",
    items: [
      "Voice Agents",
      "Contact Center AI",
      "Appointment Automation",
      "Sales Enablement",
      "Call Summaries",
      "Voice-Based Lead Qualification",
    ],
    cta: "Discuss this practice",
  },
  {
    icon: "ServerCog",
    title: "Enterprise AI Platforms",
    desc: "Secure AI platforms built around your business data, tools and operating model.",
    span: "md:col-span-7",
    items: [
      "Private AI Deployments",
      "Enterprise Search",
      "Secure LLM Infrastructure",
      "Cloud-Native AI",
      "Knowledge Retrieval",
      "Role-Based AI Access",
    ],
    cta: "Discuss this practice",
    accent: true,
  },
  {
    icon: "Bot",
    title: "Autonomous Business Systems",
    desc: "AI workflows that connect teams, tools and decisions into faster operating loops.",
    span: "md:col-span-7",
    items: [
      "Sales operations",
      "Customer support",
      "Compliance workflows",
      "Internal knowledge",
      "Lead management",
      "Reporting automation",
    ],
    cta: "Discuss this practice",
  },
  {
    icon: "Microscope",
    title: "AI Research & Innovation",
    desc: "Practical AI research that turns emerging technology into usable business systems.",
    span: "md:col-span-5",
    items: [
      "Custom AI Solutions",
      "AI Proof of Concepts (PoCs)",
      "Generative AI Applications",
      "Business Process Innovation",
      "AI Strategy & Consulting",
      "Emerging AI Technologies",
    ],
    cta: "Discuss this practice",
  },
];

const ITEMS = [
  {
    icon: "Users",
    title: "AI Workforce",
    tagline:
      "AI assistants that support sales, marketing, operations, customer service and internal teams.",
    desc: "Built to handle repetitive tasks, surface information, draft responses, route leads and reduce manual workload.",
    metrics: ["Task automation", "Team copilots", "CRM-connected"],
  },
  {
    icon: "GitBranch",
    title: "Multi-Agent Operations",
    tagline:
      "Coordinated AI agents that plan, delegate, validate and execute multi-step workflows with shared memory and guardrails.",
    desc: "This is where AI agent development moves beyond chatbots and becomes operational infrastructure.",
    metrics: ["Agent-to-agent", "Tool routing", "Policy-aware"],
  },
  {
    icon: "Briefcase",
    title: "Enterprise Copilots",
    tagline:
      "Custom copilots trained around your workflows, documents, products, offers, policies and customer journeys.",
    desc: "Built for teams that need fast answers, consistent execution and better decision support.",
    metrics: ["Internal knowledge", "RAG", "Workflow support"],
  },
  {
    icon: "BrainCircuit",
    title: "Decision Intelligence",
    tagline:
      "AI systems that help businesses prioritize leads, identify risk, forecast outcomes and recommend next actions.",
    desc: "Designed for faster decisions backed by real business data.",
    metrics: ["Lead scoring", "Forecasting", "Predictive insights"],
  },
  {
    icon: "PhoneCall",
    title: "Voice Operations",
    tagline:
      "AI voice agents for appointment booking, lead qualification, call handling, customer support and follow-up workflows.",
    desc: "Built for businesses that need faster communication without increasing team load.",
    metrics: ["Voice AI", "Call automation", "Sales support"],
  },
  {
    icon: "LayoutDashboard",
    title: "AI Command Centers",
    tagline:
      "Centralized AI dashboards that connect campaigns, leads, sales, support, operations and reporting into one intelligence layer.",
    desc: "Built for visibility, control and measurable execution.",
    metrics: [
      "Analytics",
      "Operations control",
      "Business intelligence",
    ],
  },
];

const PROJECTS = [
  {
    id: "case-01",
    n: "CASE 01",
    tag: "AI Workforce · Enterprise Operations",
    title: "Automating repetitive business operations with AI.",
    metrics: [
      { v: "24/7", l: "autonomous operations" },
      { v: "120+", l: "enterprise workflows automated" },
    ],
    url: "https://www.base2brand.com/ai-automation",
    preview: {
      accent: "#7B4DFF",
      title: "AI Workforce — Operations Console",
      screenshot: "/images/AIcase2.svg",
      lines: [
        { label: "Tasks processed today", value: "8,426" },
        { label: "Auto-resolved workflows", value: "72.8%" },
        { label: "Human review required", value: "11.4%" },
      ],
      chart: [24, 30, 36, 42, 48, 55, 61, 68, 74, 79, 84, 91],
    },
  },
  {
    id: "case-02",
    n: "CASE 02",
    tag: "Multi-Agent Operations · Workflow Automation",
    title: "Coordinating multi-agent workflow execution.",
    metrics: [
      { v: "61%", l: "faster response cycles" },
      { v: "38%", l: "efficiency lift" },
    ],
    url: "https://www.base2brand.com/ai-automation",
    preview: {
      accent: "#C084FC",
      title: "Multi-Agent Operations — Workflow Map",
      screenshot: "/images/AIcase1.svg",
      lines: [
        { label: "Active agent runs", value: "1,248" },
        { label: "Policy checks passed", value: "96.2%" },
        { label: "Escalations prevented", value: "38%" },
      ],
      chart: [18, 24, 29, 36, 40, 47, 54, 59, 66, 73, 81, 88],
    },
  },
  {
    id: "case-03",
    n: "CASE 03",
    tag: "Enterprise Copilots · Knowledge Intelligence",
    title: "Building private enterprise AI copilots.",
    metrics: [
      { v: "250+", l: "AI deployments supported" },
      { v: "15+", l: "industries served" },
    ],
    url: "https://www.base2brand.com/ai-automation",
    preview: {
      accent: "#42D4FF",
      title: "Enterprise Copilot — Knowledge Layer",
      screenshot: "/images/AIcase3.svg",
      lines: [
        { label: "Knowledge sources indexed", value: "46" },
        { label: "Verified answers", value: "89.7%" },
        { label: "Avg. response time", value: "2.4 sec" },
      ],
      chart: [32, 38, 41, 48, 53, 57, 63, 69, 72, 78, 84, 90],
    },
  },
  {
    id: "case-04",
    n: "CASE 04",
    tag: "Decision Intelligence · Business Automation",
    title: "Turning scattered data into faster business decisions.",
    metrics: [
      { v: "42%", l: "Faster decision cycles" },
      { v: "3.6x", l: "Improvement in workflow visibility" },
    ],
    url: "https://www.base2brand.com/ai-automation",
    preview: {
      accent: "#42D4FF",
      title: "Enterprise Copilot — Knowledge Layer",
      screenshot: "/images/AIcase4.svg",
      lines: [
        { label: "Knowledge sources indexed", value: "46" },
        { label: "Verified answers", value: "89.7%" },
        { label: "Avg. response time", value: "2.4 sec" },
      ],
      chart: [32, 38, 41, 48, 53, 57, 63, 69, 72, 78, 84, 90],
    },
  },
];
export default function page() {
  return (
    <main
      data-testid="ai-page"
      className="relative bg-(--b2b-bg) text-white"
    >
      <Hero />
      <MetricsBar />
      <Narrative
        title={"AI is becoming the operating layer of modern business."}
        description={[
          "Our enterprise AI solutions are designed to connect with your CRM, website, ecommerce platform, sales process, support desk, internal tools and customer data — so automation becomes part of daily operations, not a disconnected add-on.",
          "From generative AI solutions and enterprise copilots to autonomous workflows and AI agents, we build systems that help businesses respond faster, decide smarter and operate with less manual dependency.",
        ]}
        features={features}
        highlightTag={"THE NEW OPERATING MODEL"}
        tagList={["01 — Thesis"]}
      />
      <Capabilities
        title={"Six practices, One intelligence layer."}
        description={`We don't sell features. We engineer the AI capability stack your operations depend on — designed, governed, and measured end-to-end.`}
        highlightTag={"ENTERPRISE AI CAPABILITIES"}
        capsData={CAPS}
      />
      <BuildingNow
        highlightTag={"CURRENTLY IN PRODUCTION"}
        title={"What we are building right now"}
        description={
          "Six categories of intelligent systems, shipped into production for brands that need automation, speed and measurable outcomes."
        }
        ITEMS={ITEMS}
      />
      <Architecture />
      <Work
        title="Selected AI automation cases."
        titleLower="Systems that shipped outcomes."
        cardsData={PROJECTS}
        imageBorderColor="#8b5cf6"
      />
      <TechStack
        highlightTag={'BUILT ON THE LATEST AI STACK'}
        title={"Models, frameworks and infrastructure — composed deliberately."}
      />
      <Industries />
      <MaturityFramework />
      <ResearchLab />
      <CommandCenter />
      {/* <EngagementModels /> */}
      <SEOContent />
      <LandingZone />
      <FinalCTA
        highlightTag={'START AN AI TRANSFORMATION'}
        titleUpper={'Tell us the hardest workflow'}
        titleLower={"you've postponed."}
        description={'Whether you need AI automation services, AI agent development, enterprise AI solutions or generative AI solutions, we’ll help you identify what to automate first, what to connect, and what impact to expect.'}
        CTALeft={'Start An AI Transformation'}
        CTARight={'Talk To AI Architects'}
        features={[
          "Engineering-led",
          "Outcome-instrumented",
          "Production-grade",
          "Globally deployed",
        ]}
      />
    </main>
  );
}
