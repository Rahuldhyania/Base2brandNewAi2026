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

const features = [
  { l: "Architected", d: "Not patched" },
  { l: "Governed", d: "Not improvised" },
  { l: "Measured", d: "Not promised" },
];

const CAPS = [
  {
    icon: "Network",
    title: "Applied AI & Agentic Engineering",
    span: "md:col-span-7",
    items: [
      "Multi-agent systems",
      "Enterprise copilots",
      "RAG architectures",
      "Knowledge systems",
      "MCP integrations",
    ],
    accent: true,
  },
  {
    icon: "Workflow",
    title: "AI Operations",
    span: "md:col-span-5",
    items: [
      "Workflow orchestration",
      "Decision automation",
      "Human-in-the-loop systems",
      "Operational intelligence",
    ],
  },
  {
    icon: "AudioLines",
    title: "Voice Intelligence",
    span: "md:col-span-5",
    items: [
      "Voice agents",
      "Contact center AI",
      "Appointment automation",
      "Sales enablement",
    ],
  },
  {
    icon: "ServerCog",
    title: "Enterprise AI Platforms",
    span: "md:col-span-7",
    items: [
      "Private AI deployments",
      "Enterprise search",
      "Secure LLM infrastructure",
      "Cloud-native AI",
    ],
    accent: true,
  },
  {
    icon: "Bot",
    title: "Autonomous Business Systems",
    span: "md:col-span-7",
    items: [
      "Sales operations",
      "Customer support",
      "Compliance workflows",
      "Internal knowledge",
    ],
  },
  {
    icon: "Microscope",
    title: "AI Research & Innovation",
    span: "md:col-span-5",
    items: [
      "Small language models",
      "Agent architectures",
      "Retrieval systems",
      "AI optimization",
    ],
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
    url: "ai-workforce.b2b/case",
    preview: {
      accent: "#7B4DFF",
      title: "AI Workforce — Operations Console",
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
    url: "agent-ops.b2b/live",
    preview: {
      accent: "#C084FC",
      title: "Multi-Agent Operations — Workflow Map",
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
    url: "enterprise-copilot.b2b/app",
    preview: {
      accent: "#42D4FF",
      title: "Enterprise Copilot — Knowledge Layer",
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
        title={"AI is becoming the operating system of modern enterprises."}
        description={[
          "Most organizations deploy AI as a feature. We architect AI as infrastructure — engineered, governed, observable, and embedded into the systems that actually run the business.",
          "From multi-agent operations and enterprise copilots to autonomous decision systems and digital workforces, we design AI that integrates directly into the core of how organizations operate, decide, and scale.",
        ]}
        features={features}
        highlightTag={"THE NEW OPERATING MODEL"}
        tagList={["01 — Thesis"]}
      />
      <Capabilities
        title={"Six practices. One intelligence layer."}
        description={`We don't sell features. We engineer the AI capability stack your operations depend on — designed, governed, and measured end-to-end.`}
        highlightTag={"ENTERPRISE AI CAPABILITIES"}
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
      <Architecture />
      <Work
        title="Selected AI automation cases."
        titleLower="Systems that shipped outcomes."
        cardsData={PROJECTS}
      />
      <TechStack
        highlightTag={'BUILT ON THE LATEST AI STACK'}
        title={"Models, frameworks, and infrastructure — composed deliberately."}
      />
      <Industries />
      <MaturityFramework />
      <ResearchLab />
      <CommandCenter />
      {/* <EngagementModels /> */}
      <SEOContent />
      <FinalCTA
        highlightTag={'START AN AI TRANSFORMATION'}
        titleUpper={'Tell us the hardest workflow'}
        titleLower={"you've postponed."}
        description={'Our AI architects will return a practical implementation roadmap focused on measurable business outcomes — not slideware.'}
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
