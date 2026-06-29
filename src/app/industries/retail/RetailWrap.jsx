"use client";
import React from "react";
import IndustryHero from "@/components/Industries/industry/IndustryHero";
import "../industries.css";
import Narrative from "@/components/ai/Narrative";
import IndustryChallenges from "@/components/Industries/industry/IndustryChallenges";
import {
  DatabaseZap,
  Stethoscope,
  ShieldCheck,
  ClipboardList,
  BadgeDollarSign,
  Microscope,
  BrainCircuit,
  Cpu,
  Cloud,
  Sparkles,
  Database,
  Workflow,
  BarChart3,
  Users,
  Globe2,
  Hospital,
  Building2,
  LineChart,
  GitBranch,
} from "lucide-react";
import IndustryCapabilities from "@/components/Industries/industry/IndustryCapabilities";
import MissionDossierFan from "@/components/ui/MissionDossierFan";
import IndustrySolutions from "@/components/Industries/industry/IndustrySolutions";
import IndustryArchitecture from "@/components/Industries/industry/IndustryArchitecture";
import BuildingNow from "@/components/ai/BuildingNow";
import Modules from "@/components/erp/Modules";
import IndustryEcosystem from "@/components/Industries/industry/IndustryEcosystem";
import IndustryRelated from "@/components/Industries/industry/IndustryRelated";
import IndustryCTA from "@/components/Industries/industry/IndustryCTA";
// import IndustrySolutions from "@/components/Industries/industry/IndustrySolutions";

const hero = {
  headline: "Unified commerce that personalizes at omnichannel speed.",
  description:
    "We bring unified data fabrics, demand AI and customer copilots to Tier-1 retail — lifting conversion, margin and lifetime value while collapsing the back-office cost-to-serve.",
  ctas: {
    primary: { label: "Get Proposal", to: "/contact" },
    secondary: { label: "Explore Capabilities", to: "/services" },
  },
  metrics: [
    { value: "22%", label: "Conversion ↑" },
    { value: "4x", label: "Personalization Lift" },
    { value: "99.9%", label: "Site Availability" },
    { value: "24/7", label: "Care Coverage" },
  ],
  nodes: [
    { label: "Inventory", angle: 280, ring: 2 },
    { label: "AI", angle: 340, ring: 3 },
    { label: "Customers", angle: 20, ring: 3 },
    { label: "Pricing", angle: 70, ring: 2 },
    { label: "Stores", angle: 120, ring: 2 },
    { label: "E-Com", angle: 200, ring: 1 },
  ],
};

const challenges = [
  {
    icon: DatabaseZap,
    title: "Channel Silos",
    description:
      "Store, e-com and marketplace data unlinked at the decision layer.",
  },
  {
    icon: Stethoscope,
    title: "Demand Volatility",
    description:
      "Forecasts fail at promo, NPD and weather edges — stockouts and markdowns compound.",
  },
  {
    icon: ShieldCheck,
    title: "Margin Pressure",
    description:
      "Promo dependency, price drift and basket dilution erode unit economics every quarter.",
  },
  {
    icon: ClipboardList,
    title: "Workforce Productivity",
    description:
      "Store associates underserved by tooling — high turnover, low conversion.",
  },
  {
    icon: BadgeDollarSign,
    title: "Consent & Privacy",
    description:
      "Region-specific consent regimes and identity fragmentation cap personalization.",
  },
  {
    icon: Microscope,
    title: "Back-Office Drag",
    description: "Manual finance, claims and merchandising tasks eat margin.",
  },
];

const capabilities = [
  {
    slug: "ai-automation",
    href: "/services/ai-automation",
    title: "AI & Automation",
    description:
      "Clinical copilots, documentation AI, imaging triage and revenue-cycle agents.",
    icon: BrainCircuit,
  },
  {
    slug: "software-development",
    href: "/services/software-development",
    title: "Software Development",
    description:
      "Patient portals, tele-health stacks, clinician workbenches \u2014 with FHIR, HL7 and SMART on FHIR fluency.",
    icon: Cpu,
  },
  {
    slug: "cloud-data",
    href: "/services/cloud-data",
    title: "Cloud, Data & DevSecOps",
    description:
      "PHI-grade lakehouses, encryption-everywhere posture and compliance-by-design pipelines.",
    icon: Cloud,
  },
  {
    slug: "governance-risk",
    href: "/services/governance-risk",
    title: "Governance, Risk & Trust",
    description:
      "Clinical AI governance, model evals against outcomes, NIST + EU AI Act alignment.",
    icon: ShieldCheck,
  },
];

const DEFAULT_DOSSIER_CARDS = [
  {
    id: "dossier-01",
    code: "DOSSIER-01",
    title: "AI & Retail Automation",
    body: "Deploy demand forecasting, pricing copilots, inventory agents, customer support AI and back-office automation that improve speed, conversion and margin.",
    accent: "RETAIL AUTOMATION",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-02",
    code: "DOSSIER-02",
    title: "Retail Software Development",
    body: "Build unified commerce platforms, customer apps, store associate tools, loyalty systems, order dashboards and omnichannel retail experiences.",
    accent: "DIGITAL COMMERCE",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-03",
    code: "DOSSIER-03",
    title: "Customer Data & Intelligence",
    body: "Unify e-commerce, store, marketplace, CRM, loyalty and consent data into one governed fabric for personalization, segmentation and customer decisioning.",
    accent: "CUSTOMER INTELLIGENCE",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-04",
    code: "DOSSIER-04",
    title: "Shopify Retail Commerce",
    body: "Launch Shopify and Shopify Plus storefronts for retail brands with product discovery, personalization, checkout optimization and integrated operations.",
    accent: "SHOPIFY COMMERCE",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-05",
    code: "DOSSIER-05",
    title: "Retail Data & AI Intelligence",
    body: "Turn inventory, pricing, demand, basket, promotion and customer behaviour data into AI-powered dashboards, forecasts and margin-improving decisions.",
    accent: "DATA INTELLIGENCE",
    channel: "CHANNEL A · LOCKED",
  },
];

const solutions = [
  {
    slug: "decision-intelligence",
    href: "/solutions/decision-intelligence",
    title: "Retail Decision Intelligence",
    description: "Causal models for promo, pricing, assortment and store ops.",
    metric: "22% conv. ↑",
    icon: BarChart3,
  },
  {
    slug: "enterprise-copilot",
    href: "/solutions/enterprise-copilot",
    title: "Customer Copilot",
    description:
      "Voice-first, multilingual customer assistant across digital and store.",
    metric: "38% deflection",
    icon: Sparkles,
  },
  {
    slug: "unified-data-fabric",
    href: "/solutions/unified-data-fabric",
    title: "Customer 360 Fabric",
    description:
      "One identity, one journey, one consent ledger across channels.",
    metric: "8 channels unified",
    icon: Database,
  },
  {
    slug: "agent-operations",
    href: "/solutions/agent-operations",
    title: "Merchandising Agents",
    description:
      "Agents across pricing, promo and assortment with HITL approvals.",
    metric: "4x decision speed",
    icon: Workflow,
  },
];

const architecture = {
  description:
    "A unified-commerce reference architecture for omnichannel retail — stitched at the customer, not the channel.",
  layers: [
    {
      title: "Customers",
      subtitle: "Store, app, web, voice",
      icon: Users,
    },
    {
      title: "Channel Layer",
      subtitle: "POS, e-com, marketplace, social",
      icon: Globe2,
    },
    {
      title: "Commerce Workflow",
      subtitle: "OMS, payments, fulfilment",
      icon: Stethoscope,
    },
    {
      title: "Enterprise Systems",
      subtitle: "ERP, CDP, CRM, WMS",
      icon: Hospital,
    },
    {
      title: "Data Platform",
      subtitle: "Customer 360 fabric, lineage",
      icon: Database,
    },
    {
      title: "AI Layer",
      subtitle: "Demand, pricing, copilots",
      icon: BrainCircuit,
    },
    {
      title: "Decision Intelligence",
      subtitle: "Causal commerce models",
      icon: BarChart3,
    },
  ],
};

const ITEMS = [
  {
    icon: "Users",
    title: "Customer Copilots",
    tagline: "Personalized assistance across every channel.",
    desc: "AI copilots that guide customers through discovery, recommendations, support, loyalty and checkout journeys across web, app and store.",
    metrics: ["24/7 support", "Personalized journeys", "Omnichannel ready"],
  },
  {
    icon: "GitBranch",
    title: "Merchandising Agents",
    tagline: "AI operators for pricing and assortment.",
    desc: "Autonomous agents that optimize pricing, promotions, assortment decisions and inventory allocation with human approvals built in.",
    metrics: ["Promo optimization", "Pricing AI", "HITL controls"],
  },
  {
    icon: "Briefcase",
    title: "Unified Commerce Platforms",
    tagline: "One operating layer for retail.",
    desc: "Connected commerce systems that unify stores, marketplaces, e-commerce, loyalty, fulfillment and customer experiences.",
    metrics: ["Channel unified", "Order visibility", "Customer-first"],
  },
  {
    icon: "BrainCircuit",
    title: "Retail Decision Intelligence",
    tagline: "Models that improve margin and conversion.",
    desc: "Causal AI systems that evaluate demand, promotions, pricing, basket behavior and inventory performance to drive smarter decisions.",
    metrics: ["Demand signals", "Margin models", "Decision speed"],
  },
  {
    icon: "PhoneCall",
    title: "Voice Commerce Operations",
    tagline: "Voice agents for customer engagement.",
    desc: "Voice-first agents for customer support, order updates, appointment scheduling, loyalty programs and service workflows.",
    metrics: ["Voice support", "Low latency", "Human handoff"],
  },
  {
    icon: "LayoutDashboard",
    title: "Retail Command Centers",
    tagline: "One dashboard for commerce intelligence.",
    desc: "Unified control centers to monitor inventory, stores, pricing, campaigns, AI agents, fulfillment and customer outcomes in real time.",
    metrics: ["Live visibility", "Outcome tracking", "Governance"],
  },
];

const ecosystem = [
  {
    group: "Cloud",
    items: ["AWS", "Azure", "GCP", "CDN edge"],
  },
  {
    group: "AI",
    items: ["LLMs", "Recommender systems", "Causal ML", "Vision AI"],
  },
  {
    group: "Data",
    items: ["Lakehouse", "CDP", "Identity graph", "Lineage"],
  },
  {
    group: "Security",
    items: ["PCI-DSS", "ISO 27001", "Consent ledger", "Zero-Trust"],
  },
  {
    group: "Commerce",
    items: ["Composable / MACH", "OMS", "PIM", "Payments"],
  },
  {
    group: "ERP / CRM",
    items: ["SAP", "Oracle", "Salesforce", "Dynamics"],
  },
  {
    group: "Analytics",
    items: ["Power BI", "Tableau", "Looker", "dbt"],
  },
  {
    group: "Automation",
    items: ["UiPath", "n8n", "Camunda", "Temporal"],
  },
];

const SERVICES = {
  aiAutomation: {
    slug: "ai-automation",
    title: "AI & Automation",
    description:
      "Demand forecasting, pricing copilots, customer support AI and back-office automation deployed across retail workflows.",
    icon: BrainCircuit,
  },

  softwareDevelopment: {
    slug: "software-development",
    title: "Software Development",
    description:
      "Unified commerce platforms, customer apps, store associate tools and loyalty systems built for omnichannel scale.",
    icon: Cpu,
  },

  enterpriseSystems: {
    slug: "enterprise-systems",
    title: "Enterprise Systems",
    description:
      "ERP, CRM, CDP, OMS and WMS integrations that connect stores, e-commerce, marketplaces and fulfillment operations.",
    icon: Building2,
  },

  growthVisibility: {
    slug: "growth-visibility",
    title: "Growth & Visibility",
    description:
      "Customer intelligence, conversion analytics, personalization systems and performance dashboards that improve retail growth.",
    icon: LineChart,
  },
};

const SOLUTIONS = {
  decisionIntelligence: {
    slug: "decision-intelligence",
    title: "Retail Decision Intelligence",
    description:
      "Closed-loop models for demand, pricing, promo, assortment, inventory and customer behaviour.",
    metric: "22% conversion lift",
    icon: BarChart3,
  },

  enterpriseCopilot: {
    slug: "enterprise-copilot",
    title: "Customer Copilot",
    description:
      "Voice-first and multilingual copilots for customer support, product discovery and shopping assistance.",
    metric: "38% deflection",
    icon: Sparkles,
  },

  unifiedDataFabric: {
    slug: "unified-data-fabric",
    title: "Customer 360 Fabric",
    description:
      "One governed customer view across e-commerce, stores, marketplace, CRM, loyalty and consent data.",
    metric: "8 channels unified",
    icon: Database,
  },

  agentOperations: {
    slug: "agent-operations",
    title: "Merchandising Agents",
    description:
      "Agentic workflows across pricing, promotion, assortment planning and inventory actions with approval controls.",
    metric: "4x decision speed",
    icon: Workflow,
  },
};

const cta = {
  headline: "Tell us the hardest clinical problem you've postponed.",
  description:
    "A senior partner replies within 24 hours with a tangible plan, validated against your protocols, payers and regulators.",
  primary: { label: "Get Proposal", to: "/contact" },
  secondary: { label: "Talk to a Partner", to: "/contact" },
};

const RETAIL_MODULES = [
  {
    id: "pos",
    label: "POS",
    desc: "Sales, billing, checkout",
    iconName: "wallet",
    angle: 0,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "inventory",
    label: "Inventory",
    desc: "Stock, SKUs, replenishment",
    iconName: "boxes",
    angle: 45,
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "orders",
    label: "Orders",
    desc: "Online, store, returns",
    iconName: "shoppingCart",
    angle: 90,
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "customers",
    label: "Customers",
    desc: "Profiles, loyalty, lifecycle",
    iconName: "users",
    angle: 135,
    image:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "procurement",
    label: "Procurement",
    desc: "Vendors, buying, POs",
    iconName: "shoppingCart",
    angle: 180,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "finance",
    label: "Finance",
    desc: "Margins, payments, ledger",
    iconName: "wallet",
    angle: 225,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "analytics",
    label: "Analytics",
    desc: "Sales KPIs, demand, insights",
    iconName: "barChart",
    angle: 270,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "fulfillment",
    label: "Fulfillment",
    desc: "Packing, shipping, delivery",
    iconName: "truck",
    angle: 315,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1280&h=800&fit=crop&q=80",
  },
];

const RETAIL_MODULE_SCROLL_ORDER = [
  "analytics",
  "fulfillment",
  "pos",
  "inventory",
  "orders",
  "customers",
  "procurement",
  "finance",
];
export default function RetailWrap() {
  return (
    <div>
      <IndustryHero
        hero={hero}
        name="Retail"
        label="Retail & Consumer"
        heroPrimaryCta="Get Proposal"
        heroSecondaryCta="Explore Capabilities"
      />
      <Narrative
        title={"Customers shop one brand. Retailers run twelve systems."}
        description={[
          "Unified commerce was a promise. For most retailers, it’s still a stitched-together set of channels with the customer carrying the seams. AI does not fix this on its own.",
          "We re-architect retail around a customer-grade data fabric, with demand AI, pricing intelligence and copilots wired into store and digital channels. The same brand. The same experience. Across every shelf.",
        ]}
        highlightTag={"INDUSTRY THESIS"}
        tagList={["01 — Thesis"]}
      />
      <IndustryChallenges challenges={challenges} name="Retail" />
      <MissionDossierFan
        cards={DEFAULT_DOSSIER_CARDS}
        title="Five dossiers. One retail mission."
        subtitle="How we run a retail engagement — from unified commerce to customer intelligence — as a fan of focused dossiers."
        badgeLabel={DEFAULT_DOSSIER_CARDS.length}
        eyebrow="PLAYBOOKS · MISSION DOSSIERS"
      />
      <IndustrySolutions solutions={solutions} />
      <IndustryArchitecture architecture={architecture} name={"Retail"} />
      <BuildingNow
        highlightTag={"CURRENTLY IN PRODUCTION"}
        title={"What we are building for modern retail"}
        description={
          "Six categories of commerce intelligence systems, shipped into production — connecting customers, channels, operations, data and AI."
        }
        ITEMS={ITEMS}
      />
      <div className="hidden md:block">
      <Modules
        title={
          <>
            Retail operations.{" "}
            <span className="text-brand">One commerce core.</span>
          </>
        }
        description="Connect POS, inventory, orders, customers, procurement, finance, fulfillment, and analytics into one intelligent retail management system."
        modules={RETAIL_MODULES}
        scrollOrder={RETAIL_MODULE_SCROLL_ORDER}
      />
      </div>
      <IndustryEcosystem ecosystem={ecosystem} name={"Retail"} />
      <IndustryRelated services={SERVICES} solutions={SOLUTIONS} />
      <IndustryCTA cta={cta} />
    </div>
  );
}
