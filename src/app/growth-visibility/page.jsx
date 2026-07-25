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
    d: "Conversational search is replacing traditional search journeys for high-intent questions.",
  },
  {
    l: "Behaviour is shifting",
    d: "Customers now ask AI assistants before they open a search tab, browse a website or contact sales.",
  },
  {
    l: "Invisibility costs revenue",
    d: "If AI engines do not cite, explain or recommend your brand, your competitors become the answer.",
  },
];

const CAPS = [
  {
    icon: "Network",
    title: "Generative Engine Optimization",
    span: "md:col-span-7",
    items: [
      "Make your brand readable, credible and recommendable for generative AI engines.",
      "Entity-first content modelling",
      "AI-readable brand graphs",
      "Prompt-targeted authority",
      "LLM-friendly page structure",
      "Source and citation alignment",
    ],
    accent: true,
  },
  {
    icon: "Workflow",
    title: "Answer Engine Optimization",
    span: "md:col-span-5",
    items: [
      "Structure your content so AI systems can pull clean, confident answers from your website.",
      "Question intent mapping",
      "Structured answer blocks",
      "Citation-grade signals",
      "FAQ architecture",
      "Schema-led content design",
    ],
  },
  {
    icon: "AudioLines",
    title: "AI Search Optimization",
    span: "md:col-span-5",
    items: [
      "Build cross-platform visibility across ChatGPT, Gemini, Claude, Perplexity and Google AI Overviews.",
      "Cross-platform presence",
      "Recommendation positioning",
      "Topical depth at scale",
      "AI visibility tracking",
      "Competitor answer analysis",
    ],
  },
];

const ITEMS = [
  {
    icon: "Users",
    title: "AI Visibility Workforce",
    tagline: "Digital growth operators for AI-first search.",
    desc: "A dedicated operating layer for monitoring where your brand appears, where it is missing and what AI engines currently understand about your business.",
    metrics: ["Brand visibility checks", "Prompt testing", "AI search monitoring"],
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
    desc: "Content architecture that helps AI engines extract direct, accurate and citation-ready answers from your pages",
    metrics: ["FAQ blocks", "Schema structure", "Answer-ready content"],
  },
  {
    icon: "BrainCircuit",
    title: "AI Search Intelligence",
    tagline: "Visibility decisions backed by live signals.",
    desc: "AI search marketing intelligence that shows how buyers ask, what engines recommend and which competitors already own the answer.",
    metrics: ["Prompt research", "Competitor analysis", "Share-of-answer tracking"],
  },
  {
    icon: "PhoneCall",
    title: "AI Buyer Journey Content",
    tagline: "Content built for how buyers now search.",
    desc: "Content designed around real AI prompts, buyer questions, comparison searches and decision-stage queries.",
    metrics: ["Buyer intent", "Commercial questions", "LLM SEO content"],
  },
  {
    icon: "LayoutDashboard",
    title: "AI Visibility Command Center",
    tagline: "One dashboard for AI search growth.",
    desc: "A reporting system that tracks mentions, citations, sentiment, competitor visibility and recommendation frequency across AI engines.",
    metrics: ["AI visibility analytics ", "Brand mentions", "Recommendation tracking"],
  },
];

const steps = [
  {
    n: "01",
    title: "AI Brand Audit",
    body: "We test buyer prompts across ChatGPT, Gemini, Claude and Perplexity to benchmark AI visibility for brands and uncover missed recommendations.",
    icon: "ScanSearch",
  },
  {
    n: "02",
    title: "Knowledge Optimization",
    body: "We structure brand entities, content signals and knowledge graphs so LLM SEO helps AI engines understand, trust and cite you.",
    icon: "Database",
  },
  {
    n: "03",
    title: "Content Intelligence",
    body: "We build answer-ready pages around buyer questions, using AI SEO and AI search marketing to improve retrieval, citations and intent.",
    icon: "FileText",
  },
  {
    n: "04",
    title: "Entity Authority Building",
    body: "We build trust signals across your website, profiles, mentions, citations, partnerships, thought leadership and external references. AI engines do not only read your website. They look for confidence across the web.",
    icon: "Award",
  },
  {
    n: "05",
    title: "AI Recommendation Positioning",
    body: "We monitor and increase the probability of your brand being recommended inside AI answers — month after month. This is AI search marketing with a measurable outcome.",
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
      screenshot: "/images/GVcase1.svg",
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
      screenshot: "/images/GVcase2.svg",
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
      screenshot: "/images/GVcase3.svg",
      lines: [
        { label: "Sources monitored", value: "1,240" },
        { label: "Verticals optimized", value: "20+" },
        { label: "Citation gaps closed", value: "76%" },
      ],
      chart: [26, 32, 37, 45, 54, 62, 69, 75, 82, 88, 94, 99],
    },
  },
  {
    id: "case-04",
    n: "CASE 04",
    tag: "AI Search Marketing · Recommendation Tracking",
    title: "Turning AI visibility into measurable growth.",
    metrics: [
      { v: "100+", l: "buyer prompts tested" },
      { v: "4+", l: "AI engines monitored" },
    ],
    url: "ai-visibility.b2b/app",
    preview: {
      accent: "#2563EB",
      title: "AI Visibility — Brand Authority Dashboard",
      screenshot: "/images/GVcase4.svg",
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
        titleUpper={"Own"}
        titleMiddle={"AI Search"}
        titleLower={"competitors do."}
        description={
          "Base2Brand uses AI SEO, AI search marketing, LLM SEO, Generative Engine Optimization and Answer Engine Optimization to help your brand get discovered, cited and recommended faster across ChatGPT, Gemini, Perplexity, Claude and Google AI Overviews."
        }
        leftCTA="Book Free Strategy Call"
        rightCTA={"Get AI Visibility Audit"}
        primaryColor="rgb(21 93 252)"
        floatingMetrics={floatingMetrics}
      />
      <Narrative
        title={"Search has changed. <br /> Google isn't the only search engine anymore."}
        description={[
          "People are no longer only searching through blue links. They are asking AI assistants what to buy, who to trust, which agency to hire, which software to compare and which brand deserves attention.",
          "That is why AI search marketing are becoming a new growth layer built to improve AI visibility for brands across every answer engine that matters.",
        ]}
        features={features}
        hideTagColumn
      />
      <Capabilities
        title={"From search rankings to AI recommendations"}
        description={`Our Growth Visibility practice combines AI SEO, AEO and GEO into one operating system for modern discovery.`}
        highlightTag={"The Stack"}
        capsData={CAPS}
      />
      <Work
        title="Growth visibility cases."
        titleLower="AI search outcomes."
        cardsData={PROJECTS}
        imageBorderColor="#2563EB"
      />
      <BuildingNow
        highlightTag={"AI SEARCH GROWTH SYSTEMS "}
        title={"What we are building for AI-first growth."}
        description={
          "Six categories of AI visibility systems, shipped into production — helping brands get discovered, cited and recommended across the new search landscape."
        }
        ITEMS={ITEMS}
      />
      <TechStack
        highlightTag={"THE AI VISIBILITY STACK"}
        title={
          "Models, signals and systems built to make brands easier to recommend."
        }
      />
      <Framework
        highlightTag={"· OUR AI SEARCH ROADMAP "}
        title={"A practical system for getting cited, trusted and chosen."}
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
