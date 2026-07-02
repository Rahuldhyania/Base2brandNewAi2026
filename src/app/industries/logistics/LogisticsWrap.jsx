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
  Boxes,
  Wallet,
  Factory,
  ShoppingCart,
  Truck,
  UserCog,
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
import MobileCardCarousel from "@/components/ui/mobile-card-carousel";
import { DeferredRocketScrollNavigator } from "@/components/layout/DeferredRocketScrollNavigator";
// import IndustrySolutions from "@/components/Industries/industry/IndustrySolutions";

const hero = {
  headline: "Move from real-time visibility to autonomous flow.",
  description:
    "We build digital twins of your network — ports, hubs, yards and last-mile — and wire them into agentic decisioning that recovers minutes, miles and millions every quarter.",
  ctas: {
    primary: { label: "Get Proposal", to: "/contact" },
    secondary: { label: "Explore Capabilities", to: "/services" },
  },
  metrics: [
    { value: "17%", label: "OEE Improvement" },
    { value: "$54M", label: "Inventory Lift" },
    { value: "99.95%", label: "Track Coverage" },
    { value: "24/7", label: "Network Cadence" },
  ],
  nodes: [
    { label: "Fleet", angle: 280, ring: 2 },
    { label: "Demand", angle: 340, ring: 3 },
    { label: "Ports", angle: 20, ring: 3 },
    { label: "AI", angle: 60, ring: 3 },
    { label: "Yards", angle: 100, ring: 2 },
    { label: "Routes", angle: 200, ring: 1 },
  ],
};

const challenges = [
  {
    icon: DatabaseZap,
    title: "Network Blind Spots",
    description:
      "Visibility ends at carrier handoffs — ETA accuracy collapses across modes.",
  },
  {
    icon: Stethoscope,
    title: "Inventory Imbalance",
    description:
      "Working capital trapped in safety stock, dead stock and mis-located inventory.",
  },
  {
    icon: ShieldCheck,
    title: "Disruption Velocity",
    description:
      "Geo, climate and labour shocks compound — manual replan cycles cannot keep up.",
  },
  {
    icon: ClipboardList,
    title: "Manual Yard & Dock",
    description:
      "Yards still run on whiteboards and walkie-talkies — invisible to the planning stack.",
  },
  {
    icon: BadgeDollarSign,
    title: "Last-Mile Cost Drift",
    description:
      "Cost-to-serve creeping every quarter on density, dwell and exception handling.",
  },
  {
    icon: Microscope,
    title: "Fragmented Data",
    description:
      "TMS, WMS, OMS, telematics and customer systems unlinked at the decision layer.",
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
    title: "AI & Automation",
    body: "Deploy forecasting agents, dispatch copilots, exception recovery automation, and autonomous workflow systems that keep logistics operations moving in real time.",
    accent: "INTELLIGENT AUTOMATION",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-02",
    code: "DOSSIER-02",
    title: "Logistics Software Development",
    body: "Build modern control towers, mobile-first operations apps, carrier portals, customer tracking systems, and yard management platforms for faster execution.",
    accent: "DIGITAL OPERATIONS",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-03",
    code: "DOSSIER-03",
    title: "Network Decision Intelligence",
    body: "Turn TMS, WMS, OMS, telematics, inventory, and carrier data into causal models that improve ETAs, reduce dwell, and optimize cost-to-serve.",
    accent: "DECISION INTELLIGENCE",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-04",
    code: "DOSSIER-04",
    title: "Shopify Logistics Commerce",
    body: "Launch Shopify B2B and D2C commerce experiences for logistics brands, shipping services, industrial suppliers, and order-driven operations.",
    accent: "LOGISTICS COMMERCE",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-05",
    code: "DOSSIER-05",
    title: "Supply Chain Data & AI",
    body: "Unify shipment, inventory, warehouse, route, demand, and fleet data into AI-powered dashboards, predictive models, and autonomous planning systems.",
    accent: "DATA INTELLIGENCE",
    channel: "CHANNEL A · LOCKED",
  },
];

const solutions = [
  {
    slug: "decision-intelligence",
    href: "/solutions/decision-intelligence",
    title: "Network Decision Intelligence",
    description: "Causal models for stockouts, ETAs, dwell and cost-to-serve.",
    metric: "4x faster recoveries",
    icon: BarChart3,
  },
  {
    slug: "unified-data-fabric",
    href: "/solutions/unified-data-fabric",
    title: "Supply-Chain Twin",
    description:
      "Digital twin across nodes, lanes and shipments with full lineage.",
    metric: "12 nodes mirrored",
    icon: Database,
  },
  {
    slug: "agent-operations",
    href: "/solutions/agent-operations",
    title: "Dispatch & Yard Agents",
    description:
      "Agentic dispatch, dock scheduling and yard orchestration at hub scale.",
    metric: "37% dwell ↓",
    icon: Workflow,
  },
  {
    slug: "enterprise-copilot",
    href: "/solutions/enterprise-copilot",
    title: "Operations Copilot",
    description:
      "Voice-first copilot for planners, dispatchers and yard operators.",
    metric: "55% planner lift",
    icon: Sparkles,
  },
];

const architecture = {
  description:
    "An autonomous-flow architecture for global logistics — from telemetry intake to closed-loop decisioning.",
  layers: [
    {
      title: "Shippers / Customers",
      subtitle: "Portals, EDI, mobile",
      icon: Users,
    },
    {
      title: "Channel Layer",
      subtitle: "Carrier, broker, marketplace",
      icon: Globe2,
    },
    {
      title: "Operations Workflow",
      subtitle: "Dispatch, yard, dock, last-mile",
      icon: Stethoscope,
    },
    {
      title: "Enterprise Systems",
      subtitle: "TMS, WMS, OMS, ERP",
      icon: Hospital,
    },
    {
      title: "Data Platform",
      subtitle: "Telemetry lakehouse, twin",
      icon: Database,
    },
    {
      title: "AI Layer",
      subtitle: "Forecasting, agents, evals",
      icon: BrainCircuit,
    },
    {
      title: "Decision Intelligence",
      subtitle: "Causal recovery, simulations",
      icon: BarChart3,
    },
  ],
};

const ITEMS = [
  {
    icon: "Users",
    title: "Operations Copilots",
    tagline: "AI support for planners, dispatchers and yard teams.",
    desc: "Voice-first and dashboard-based copilots that help logistics teams manage exceptions, shipment updates, carrier coordination, dock status and daily network decisions.",
    metrics: ["Planner assist", "Live context", "Faster handoffs"],
  },
  {
    icon: "GitBranch",
    title: "Dispatch & Yard Agents",
    tagline: "Autonomous agents for movement and recovery.",
    desc: "Agentic workflows that plan, assign, validate and recover dispatch, dock scheduling, yard movement, route exceptions and last-mile tasks in real time.",
    metrics: ["Dock routing", "Yard orchestration", "Exception recovery"],
  },
  {
    icon: "Briefcase",
    title: "Control Tower Platforms",
    tagline: "One operating layer for logistics visibility.",
    desc: "Modern logistics control towers that connect TMS, WMS, OMS, ERP, telematics and customer systems into one real-time operational command center.",
    metrics: ["TMS connected", "Track coverage", "Carrier visibility"],
  },
  {
    icon: "BrainCircuit",
    title: "Network Decision Intelligence",
    tagline: "Models that recommend the next best move.",
    desc: "AI systems that analyze ETAs, dwell, inventory, demand, route risk and cost-to-serve to recommend recovery actions with measurable business impact.",
    metrics: ["ETA models", "Cost-to-serve", "Causal insights"],
  },
  {
    icon: "PhoneCall",
    title: "Voice Logistics Operations",
    tagline: "Voice agents for updates, routing and follow-ups.",
    desc: "Production voice agents that handle shipment updates, appointment confirmations, carrier follow-ups, delivery status calls and structured data capture.",
    metrics: ["Call automation", "Low latency", "Human handoff"],
  },
  {
    icon: "LayoutDashboard",
    title: "AI Logistics Command Centers",
    tagline: "Unified control for network intelligence.",
    desc: "Single-pane dashboards to monitor shipments, yards, inventory, carriers, AI agents, costs, service levels and recovery outcomes across the full network.",
    metrics: ["Live network view", "Outcome tracking", "Governance"],
  },
];

const ecosystem = [
  {
    group: "Cloud",
    items: ["AWS", "Azure", "GCP", "Edge"],
  },
  {
    group: "AI",
    items: ["Forecasting", "Vision (yard)", "Speech AI", "Agent supervisors"],
  },
  {
    group: "Data",
    items: ["Lakehouse", "Telemetry graph", "Lineage", "Causal ML"],
  },
  {
    group: "Security",
    items: ["Zero-Trust", "ISO 28001", "SOC 2", "C-TPAT-aligned"],
  },
  {
    group: "TMS / WMS",
    items: ["BluJay", "Manhattan", "Oracle", "JDA / Blue Yonder"],
  },
  {
    group: "ERP",
    items: ["SAP", "Oracle", "Infor", "Dynamics"],
  },
  {
    group: "Analytics",
    items: ["Power BI", "Tableau", "Causal ML", "Geo-spatial"],
  },
  {
    group: "Automation",
    items: ["UiPath", "n8n", "Temporal", "Camunda"],
  },
];

const SERVICES = {
  aiAutomation: {
    slug: "ai-automation",
    title: "AI & Automation",
    description:
      "Forecasting agents, dispatch copilots, dock automation and exception-recovery workflows deployed across logistics operations.",
    icon: BrainCircuit,
  },

  enterpriseSystems: {
    slug: "enterprise-systems",
    title: "Enterprise Systems",
    description:
      "TMS, WMS, OMS and ERP modernization with integration backbones that connect carriers, hubs, yards and customers.",
    icon: Building2,
  },

  cloudData: {
    slug: "cloud-data",
    title: "Cloud, Data & DevSecOps",
    description:
      "Edge and cloud platforms, telemetry lakehouses and shift-left security — automated, observable and cost-optimized.",
    icon: Cloud,
  },

  softwareDevelopment: {
    slug: "software-development",
    title: "Software Development",
    description:
      "Modern control towers, mobile-first ops apps, carrier portals and customer tracking platforms built for logistics scale.",
    icon: Cpu,
  },
};

const SOLUTIONS = {
  decisionIntelligence: {
    slug: "decision-intelligence",
    title: "Decision Intelligence",
    description:
      "From dashboards to decisions — closed-loop models for ETAs, dwell, stockouts and cost-to-serve.",
    metric: "4x faster recoveries",
    icon: BarChart3,
  },

  unifiedDataFabric: {
    slug: "unified-data-fabric",
    title: "Unified Data Fabric",
    description:
      "One governed source of truth stitched across TMS, WMS, OMS, ERP, telematics and shipment data.",
    metric: "12 nodes mirrored",
    icon: Database,
  },

  agentOperations: {
    slug: "agent-operations",
    title: "Agent Operations",
    description:
      "Multi-agent workflows for dispatch, dock scheduling, yard orchestration and exception recovery.",
    metric: "37% dwell reduction",
    icon: Workflow,
  },

  enterpriseCopilot: {
    slug: "enterprise-copilot",
    title: "Enterprise Copilot",
    description:
      "Voice-first copilots for planners, dispatchers and yard operators grounded in live logistics context.",
    metric: "55% planner lift",
    icon: Sparkles,
  },
};

const cta = {
  headline: "Tell us the hardest network problem you've postponed.",
  description:
    "A senior partner replies within 24 hours with a tangible plan, modelled on your actual lanes, hubs and customer SLAs.",
  primary: { label: "Get Proposal", to: "#" },
  secondary: { label: "Talk to a Partner", to: "#" },
};

const LOGISTICS_MODULES = [
  {
    id: "warehouse",
    label: "Warehouse",
    desc: "Stock, bins, inventory flow",
    iconName: "boxes",
    angle: 0,
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "dispatch",
    label: "Dispatch",
    desc: "Orders, jobs, assignments",
    iconName: "truck",
    angle: 45,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "fleet",
    label: "Fleet",
    desc: "Vehicles, drivers, maintenance",
    iconName: "truck",
    angle: 90,
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "routes",
    label: "Routes",
    desc: "Planning, routing, optimization",
    iconName: "analytics",
    angle: 135,
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "billing",
    label: "Billing",
    desc: "Freight cost, invoices, payments",
    iconName: "wallet",
    angle: 180,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "analytics",
    label: "Analytics",
    desc: "KPIs, delays, performance",
    iconName: "barChart",
    angle: 225,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "tracking",
    label: "Tracking",
    desc: "Live status, ETA, proof of delivery",
    iconName: "truck",
    angle: 270,
    image:
      "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "carriers",
    label: "Carriers",
    desc: "Partners, rates, contracts",
    iconName: "users",
    angle: 315,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1280&h=800&fit=crop&q=80",
  },
];

const LOGISTICS_MODULE_SCROLL_ORDER = [
  "tracking",
  "carriers",
  "warehouse",
  "dispatch",
  "fleet",
  "routes",
  "billing",
  "analytics",
];

const SECTIONS_ROCKET = [
  { id: "hero", label: "Logistics & Supply Chain" },
  { id: "narrative-section", label: "Industry Thesis" },
  { id: "challenges", label: "Challenges" },
  { id: "mission-dossier", label: "Capabilities Deployed" },
  { id: "solutions", label: "Solutions" },
  { id: "voices", label: "Voices of Success" },
  { id: "architecture", label: "Architecture" },
  { id: "building-now-section", label: "Currently in Production" },
  { id: "wheel-ring", label: "Modules" },
  { id: "ecosystem", label: "Technology Ecosystem" },
  { id: "related", label: "Related Services" },
  { id: "cta", label: "Start a Transformation" },
];

export default function LogisticsWrap() {
  return (
    <div>
      <DeferredRocketScrollNavigator sections={SECTIONS_ROCKET } />
      <IndustryHero
        hero={hero}
        name="Logistics"
        label="Logistics & Supply Chain"
        heroPrimaryCta="Get Proposal"
        heroSecondaryCta="Explore Capabilities"
      />
      <Narrative
        title={"Supply chains are no longer optimised. They are operated."}
        description={[
          "Five-day forecasts and quarterly S&OP no longer move the needle when ports, yards and customers operate in minutes. The frontier is closed-loop, autonomous orchestration — with twins that mirror reality and agents that act on it.",
          "We design and ship that operating layer. Every node observable. Every decision graphed. Every recovery measured against the dollars it saved.",
        ]}
        highlightTag={"INDUSTRY THESIS"}
        tagList={["01 — Thesis"]}
      />
      <IndustryChallenges challenges={challenges} name="Logistics" />
      <MissionDossierFan
        cards={DEFAULT_DOSSIER_CARDS}
        title="Five dossiers. One logistics mission."
        subtitle="How we run a logistics engagement — from network visibility to autonomous flow — as a fan of focused dossiers."
        badgeLabel={DEFAULT_DOSSIER_CARDS.length}
        eyebrow="PLAYBOOKS · MISSION DOSSIERS"
      />
      <IndustrySolutions solutions={solutions} />
      <IndustryArchitecture architecture={architecture} name={"Logistics"} />
      <BuildingNow
        highlightTag={"CURRENTLY IN PRODUCTION"}
        title={"What we are building for logistics networks"}
        description={
          "Six categories of logistics intelligence systems, shipped into production — connecting visibility, dispatch, yards, data and AI as you scroll."
        }
        ITEMS={ITEMS}
      />

      <div className="hidden md:block" id="wheel-ring">
      <Modules
        title={
          <>
            Eight modules. <span className="text-brand">One nucleus.</span>
          </>
        }
        description="An orbital architecture where every operational module is connected to the ERP core in real-time."
        modules={LOGISTICS_MODULES}
        scrollOrder={LOGISTICS_MODULE_SCROLL_ORDER}
      />
      </div>
      {/* <div className="md:hidden">
        <MobileCardCarousel
          cards={LOGISTICS_MODULES}
          renderCard={(module, index) => (
            <div className="h-full w-full rounded-3xl overflow-hidden relative">
              <img
                src={module.image}
                alt={module.label}
                className="h-full w-full object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <module.icon className="w-8 h-8 text-brand" />
                  <h3 className="text-xl font-semibold text-white">{module.label}</h3>
                </div>
                <p className="text-sm text-white/70">{module.desc}</p>
              </div>
            </div>
          )}
        />
      </div> */}
      <IndustryEcosystem ecosystem={ecosystem} name={"Logistics"} />
      <IndustryRelated services={SERVICES} solutions={SOLUTIONS} />
      <IndustryCTA cta={cta} />
    </div>
  );
}
