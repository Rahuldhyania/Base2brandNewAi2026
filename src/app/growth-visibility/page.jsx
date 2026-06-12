import React from "react";
import Hero from "@/components/landing/Hero";
import Narrative from "@/components/ai/Narrative";
import Capabilities from "@/components/ai/Capabilities";
import BuildingNow from "@/components/ai/BuildingNow";
import TechStack from "@/components/ai/TechStack";
import Framework from "@/components/landing/Framework";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";

const features = [
  {
    l: "AI search is exploding",
    d: "Conversational AI is replacing 10-blue-links for high-intent commercial queries.",
  },
  {
    l: "Behaviour is shifting",
    d: "Buyers now ask AI assistants before they ever open a search tab.",
  },
  {
    l: "Invisibility costs revenue",
    d: "Brands not surfaced inside AI answers are quietly losing pipeline.",
  },
];

const CAPS = [
  {
    icon: "Network",
    title: "Generative Engine Optimization",
    span: "md:col-span-7",
    items: [
      "Entity-first content modelling",
      "AI-readable brand graphs",
      "Prompt-targeted authority",
    ],
    accent: true,
  },
  {
    icon: "Workflow",
    title: "Answer Engine Optimization",
    span: "md:col-span-5",
    items: [
      "Question intent mapping",
      "Structured answer blocks",
      "Citation-grade signals",
    ],
  },
  {
    icon: "AudioLines",
    title: "AI Search Optimization",
    span: "md:col-span-5",
    items: [
      "Cross-platform presence",
      "Recommendation positioning",
      "Topical depth at scale",
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
export default function page() {
  return (
    <main
      data-testid="geo-page"
      className="relative bg-[#030305] text-white overflow-x-hidden"
    >
      <Hero />
      <Narrative
        title={"Search has changed. <br /> Your marketing should too."}
        description={[
          "People don't only ask Google anymore. They ask ChatGPT, Gemini, Perplexity and Claude — and AI decides which brand gets recommended.",
          "85% of high-intent buyers consult an AI assistant before talking to your sales team.",
        ]}
        features={features}
        highlightTag={"How customers ask today"}
        tagList={[
          "Best CRM software for B2B SaaS",
          "Top digital marketing agency in 2026",
          "Best HRMS company for mid-market",
          "Who should I hire for web development?",
        ]}
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
      <TechStack
        highlightTag={"BUILT ON THE LATEST AI STACK"}
        title={
          "Models, frameworks, and infrastructure — composed deliberately."
        }
      />
      <Framework />
      <Services />
      <WhyUs />
    </main>
  );
}
