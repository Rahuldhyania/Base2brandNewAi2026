import React from "react";
import Hero from "@/components/landing/Hero";
import Narrative from "@/components/ai/Narrative";
import Capabilities from "@/components/ai/Capabilities";
import BuildingNow from "@/components/ai/BuildingNow";
import TechStack from "@/components/ai/TechStack";
import Framework from "@/components/landing/Framework";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import Work from "@/components/portfolio-animation/sections/Work";
import CommandCenter from "@/components/shopify-solution/site/CommandCenter";
import Industries from "@/components/ai/Industries";

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
    title: "AI Visibility Workforce",
    tagline: "Digital growth operators for AI-first search.",
    desc: "Always-on AI visibility systems that monitor brand mentions, competitor presence, answer coverage, citation gaps and recommendation opportunities across AI search platforms.",
    metrics: ["24/7 monitoring", "Mention tracking", "Competitor signals"],
  },
  {
    icon: "GitBranch",
    title: "GEO Operations",
    tagline: "Growth workflows for generative engines.",
    desc: "Coordinated workflows that optimize your brand for ChatGPT, Gemini, Claude, Perplexity and Google AI Overviews through structured signals, entity clarity and trusted content layers.",
    metrics: ["GEO-ready", "Entity signals", "AI citations"],
  },
  {
    icon: "Briefcase",
    title: "Answer Engine Optimization",
    tagline: "Own the answers buyers now trust.",
    desc: "AEO systems that map buyer questions, structure expert answers, improve topical authority and make your brand easier for AI engines to understand and recommend.",
    metrics: ["Question mapping", "Answer coverage", "Authority lift"],
  },
  {
    icon: "BrainCircuit",
    title: "AI Search Intelligence",
    tagline: "Visibility decisions backed by live signals.",
    desc: "Decision intelligence that analyzes AI search rankings, brand share of voice, citation quality, content gaps and competitor movement to guide growth actions.",
    metrics: ["Share of voice", "Content gaps", "AI rankings"],
  },
  {
    icon: "PhoneCall",
    title: "AI Buyer Journey Content",
    tagline: "Content built for how buyers now search.",
    desc: "AI-first content systems that turn buyer intent, FAQs, comparisons, service pages and thought leadership into structured assets ready for AI discovery.",
    metrics: ["Intent-led", "Structured content", "Buyer-ready"],
  },
  {
    icon: "LayoutDashboard",
    title: "AI Visibility Command Center",
    tagline: "One dashboard for AI search growth.",
    desc: "A unified control plane to track GEO, AEO, AI citations, brand recommendations, competitor visibility, content performance and growth opportunities.",
    metrics: ["Visibility dashboard", "Citation tracking", "Growth insights"],
  },
];

const steps = [
  {
    n: "01",
    title: "AI Brand Audit",
    body: "We analyze how ChatGPT, Gemini, Claude and Perplexity currently perceive — or ignore — your brand.",
    icon: "ScanSearch",
  },
  {
    n: "02",
    title: "Knowledge Optimization",
    body: "We engineer your business knowledge graph: structured data, authority signals and entity relationships AI can trust.",
    icon: "Database",
  },
  {
    n: "03",
    title: "Content Intelligence",
    body: "We produce AI-readable, answer-shaped content tuned to the exact prompts buyers use in your category.",
    icon: "FileText",
  },
  {
    n: "04",
    title: "Entity Authority Building",
    body: "We compound digital trust through citations, mentions, partnerships and recognition AI engines weigh heavily.",
    icon: "Award",
  },
  {
    n: "05",
    title: "AI Recommendation Positioning",
    body: "We monitor and lift the probability of your brand being recommended inside AI answers — month after month.",
    icon: "Sparkles",
  },
];

const floatingMetrics = [
  {
    label: "AI visibility",
    value: "+340%",
    icon: "TrendingUp",
    pos: "top-6 -left-4 md:left-6",
    delay: 0.3,
  },
  {
    label: "ChatGPT mention rate",
    value: "8.2×",
    icon: "Bot",
    pos: "bottom-16 -right-2 md:right-8",
    delay: 0.55,
  },
  {
    label: "Brand authority",
    value: "Enterprise",
    icon: "ShieldCheck",
    pos: "top-1/2 -right-6 md:-right-10",
    delay: 0.75,
  },
];

const PROJECTS = [
  {
    id: "case-01",
    n: "CASE 01",
    tag: "GEO Strategy · AI Search Visibility",
    title: "Improving brand visibility across AI search engines.",
    metrics: [
      { v: "+340%", l: "AI visibility lift" },
      { v: "8.2x", l: "recommendation growth" },
    ],
    url: "geo-strategy.b2b/case",
    preview: {
      accent: "#2F6BFF",
      title: "GEO Strategy — AI Visibility Console",
      lines: [
        { label: "AI mentions tracked", value: "14,820" },
        { label: "Visibility lift", value: "+340%" },
        { label: "Recommendation growth", value: "8.2x" },
      ],
      chart: [18, 24, 31, 39, 48, 56, 63, 71, 79, 86, 93, 98],
    },
  },
  {
    id: "case-02",
    n: "CASE 02",
    tag: "AEO Implementation · Answer Engines",
    title: "Structuring content for answer engine discovery.",
    metrics: [
      { v: "94%", l: "answer coverage" },
      { v: "10x", l: "topic authority growth" },
    ],
    url: "answer-engine.b2b/live",
    preview: {
      accent: "#3B82F6",
      title: "AEO Implementation — Answer Layer",
      lines: [
        { label: "Question clusters mapped", value: "620" },
        { label: "Answer coverage", value: "94%" },
        { label: "Authority signals improved", value: "10x" },
      ],
      chart: [20, 25, 33, 42, 50, 59, 67, 74, 81, 87, 92, 96],
    },
  },
  {
    id: "case-03",
    n: "CASE 03",
    tag: "AI Visibility Optimization · Brand Authority",
    title: "Building authority signals for AI recommendations.",
    metrics: [
      { v: "20+", l: "verticals optimized" },
      { v: "24/7", l: "visibility monitoring" },
    ],
    url: "ai-visibility.b2b/app",
    preview: {
      accent: "#2563EB",
      title: "AI Visibility — Brand Authority Dashboard",
      lines: [
        { label: "Sources monitored", value: "1,240" },
        { label: "Verticals optimized", value: "20+" },
        { label: "Citation gaps closed", value: "76%" },
      ],
      chart: [26, 32, 37, 45, 54, 62, 69, 75, 82, 88, 94, 99],
    },
  },
];
export default function page() {
  return (
    <main
      data-testid="geo-page"
      className="relative bg-(--b2b-bg) text-white overflow-x-hidden"
    >
      <Hero
        highlightTag={"GEO · AEO · AI Search Optimization"}
        titleUpper={"Dominate"}
        titleMiddle={"AI Search"}
        titleLower={"competitors do."}
        description={
          "We get your brand recommended inside ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews and the next generation of search — through Generative Engine Optimization (GEO), Answer Engine Optimization (AEO) and AI visibility strategies."
        }
        leftCTA="Book Free Strategy Call"
        rightCTA={"Get AI Visibility Audit"}
        primaryColor="rgb(21 93 252)"
        floatingMetrics={floatingMetrics}
      />
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
        title={"A new layer of growth built for AI-first buyers."}
        description={`Three disciplines, one outcome — your brand cited, recommended and chosen inside every AI surface that matters.`}
        highlightTag={"The Stack"}
        capsData={CAPS}
      />
      <Work
        title="Growth visibility cases."
        titleLower="AI search outcomes."
        cardsData={PROJECTS}
      />
      <BuildingNow
        highlightTag={"CURRENTLY IN PRODUCTION"}
        title={"What we are building for AI-first growth"}
        description={
          "Six categories of AI visibility systems, shipped into production — helping brands get discovered, cited and recommended across the new search landscape."
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
      <Industries />
      <CommandCenter />
      <Services />
      <WhyUs />
    </main>
  );
}
