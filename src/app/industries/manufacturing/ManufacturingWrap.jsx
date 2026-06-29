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
// import IndustrySolutions from "@/components/Industries/industry/IndustrySolutions";

const hero = {
  headline: "Connected factories. Smarter throughput.",
  description:
    "We modernize plant floors and supply chains around a unified data fabric — then layer AI for quality, maintenance and yield. The result: hours of downtime become minutes, and yield curves stay above the line every quarter.",
  ctas: {
    primary: { label: "Get Proposal", to: "/contact" },
    secondary: { label: "Explore Capabilities", to: "/services" },
  },
  metrics: [
    { value: "22%", label: "OEE Improvement" },
    { value: "31%", label: "Downtime ↓" },
    { value: "99.99%", label: "Plant Uptime" },
    { value: "24/7", label: "Connected Ops" },
  ],
  nodes: [
    { label: "Quality", angle: 280, ring: 2 },
    { label: "MES", angle: 340, ring: 1 },
    { label: "Machines", angle: 28, ring: 2 },
    { label: "AI", angle: 67, ring: 3 },
    { label: "Lines", angle: 110, ring: 2 },
    { label: "Plants", angle: 200, ring: 3 },
  ],
};

const challenges = [
  {
    icon: DatabaseZap,
    title: "Legacy OT & PLCs",
    description: "Decades of vendor stacks resist modern observability and AI.",
  },
  {
    icon: Stethoscope,
    title: "Unplanned Downtime",
    description: "Reactive maintenance cycles eat throughput and yield.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Variance",
    description:
      "Inline inspection still depends on manual sampling and tribal knowledge.",
  },
  {
    icon: ClipboardList,
    title: "Siloed Plant Data",
    description: "MES, ERP, QMS and SCADA not linked at the decision layer.",
  },
  {
    icon: BadgeDollarSign,
    title: "Manual Shift Handovers",
    description:
      "Hours of context lost between shifts — every day, every plant.",
  },
  {
    icon: Microscope,
    title: "ESG & Energy Pressure",
    description:
      "Scope 1/2/3 reporting and energy optimization without telemetry is impossible.",
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
    body: "Deploy predictive maintenance, AI vision quality, agentic planning, and shift copilots that reduce downtime, improve yield, and keep production moving.",
    accent: "INTELLIGENT AUTOMATION",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-02",
    code: "DOSSIER-02",
    title: "Enterprise Systems",
    body: "Modernize ERP, MES, QMS, and plant-floor systems into connected Industry 4.0 backbones built for real-time operational visibility.",
    accent: "INDUSTRY 4.0 SYSTEMS",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-03",
    code: "DOSSIER-03",
    title: "Manufacturing Software Development",
    body: "Build plant-floor applications, operator dashboards, supplier portals, production trackers, and custom tools that simplify factory operations.",
    accent: "PLANT SOFTWARE",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-04",
    code: "DOSSIER-04",
    title: "Shopify Manufacturing Commerce",
    body: "Launch secure Shopify B2B and D2C commerce experiences for manufacturers, industrial brands, spare parts, tools, and product catalogs.",
    accent: "B2B COMMERCE",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-05",
    code: "DOSSIER-05",
    title: "Manufacturing Data & AI Intelligence",
    body: "Unify machine, quality, production, and supply chain data into AI-powered dashboards, forecasting models, and decision intelligence systems.",
    accent: "DATA INTELLIGENCE",
    channel: "CHANNEL A · LOCKED",
  },
];

const solutions = [
  {
    slug: "plant-decision-intelligence",
    href: "/solutions/plant-decision-intelligence",
    title: "Plant Decision Intelligence",
    description: "Causal yield and OEE models with closed-loop telemetry.",
    metric: "22% OEE ↑",
    icon: BarChart3,
  },
  {
    slug: "industrial-data-fabric",
    href: "/solutions/industrial-data-fabric",
    title: "Industrial Data Fabric",
    description: "Machine, line and plant data unified across sites.",
    metric: "8 plants unified",
    icon: Database,
  },
  {
    slug: "plant-operations-agents",
    href: "/solutions/plant-operations-agents",
    title: "Plant Operations Agents",
    description: "Agentic maintenance, quality and planning copilots.",
    metric: "31% downtime ↓",
    icon: Workflow,
  },
  {
    slug: "shift-copilot",
    href: "/solutions/shift-copilot",
    title: "Shift Copilot",
    description:
      "Voice-first copilot for operators and supervisors on the floor.",
    metric: "55% handover Δ",
    icon: Sparkles,
  },
  {
    slug: "legacy-modernization",
    href: "/solutions/legacy-modernization",
    title: "Legacy Modernization",
    description:
      "MES/ERP modernization with parallel-run, zero-downtime cutovers.",
    metric: "0 unplanned downtime",
    icon: BarChart3,
  },
];

const architecture = {
  description:
    "An Industry 4.0 reference stack with OT, IT and AI converged on one observable fabric.",
  layers: [
    {
      title: "Machines / Sensors",
      subtitle: "PLCs, SCADA, IoT",
      icon: Users,
    },
    {
      title: "Edge Layer",
      subtitle: "Edge gateways, vision",
      icon: Globe2,
    },
    {
      title: "Plant Workflow",
      subtitle: "MES, QMS, maintenance",
      icon: Stethoscope,
    },
    {
      title: "Enterprise Systems",
      subtitle: "ERP, PLM, supplier",
      icon: Hospital,
    },
    {
      title: "Data Platform",
      subtitle: "Plant lakehouse, twin",
      icon: Database,
    },
    {
      title: "AI Layer",
      subtitle: "Maintenance, quality, planning",
      icon: BrainCircuit,
    },
    {
      title: "Decision Intelligence",
      subtitle: "OEE, yield, energy",
      icon: BarChart3,
    },
  ],
};

const ITEMS = [
  {
    icon: "Users",
    title: "Plant Workforce Copilots",
    tagline: "AI support for operators and supervisors.",
    desc: "Voice-first and dashboard-based copilots that help plant teams manage shift handovers, maintenance updates, SOPs, safety checks, and daily production actions.",
    metrics: ["Shift-ready", "SOP grounded", "Operator assist"],
  },
  {
    icon: "GitBranch",
    title: "Plant Operations Agents",
    tagline: "AI agents coordinating factory workflows.",
    desc: "Agentic systems that plan, assign, validate, and follow up on maintenance, quality, production, and supply chain tasks across connected plant operations.",
    metrics: ["Task routing", "Workflow aware", "Human approval"],
  },
  {
    icon: "Briefcase",
    title: "Enterprise System Modernization",
    tagline: "Connected ERP, MES, QMS and PLM systems.",
    desc: "Modern manufacturing platforms that connect enterprise systems with plant-floor workflows, supplier portals, production trackers, and real-time operational visibility.",
    metrics: ["ERP connected", "MES ready", "Zero downtime"],
  },
  {
    icon: "BrainCircuit",
    title: "Plant Decision Intelligence",
    tagline: "Data models that improve yield and OEE.",
    desc: "AI-powered decision systems that analyze machine, quality, energy, and production data to recommend actions for better uptime, output, and operational performance.",
    metrics: ["OEE tracked", "Yield models", "Explainable AI"],
  },
  {
    icon: "PhoneCall",
    title: "Maintenance & Quality Copilots",
    tagline: "Faster response for downtime and defects.",
    desc: "AI copilots for predictive maintenance, root-cause analysis, inspection support, defect tracking, and technician guidance across machines, lines, and sites.",
    metrics: ["Downtime alerts", "Quality checks", "RCA support"],
  },
  {
    icon: "LayoutDashboard",
    title: "AI Command Centers",
    tagline: "One control plane for factory intelligence.",
    desc: "Unified dashboards to observe plant health, production performance, energy usage, AI agents, alerts, costs, and outcomes across every factory location.",
    metrics: ["Live visibility", "Energy tracking", "Governance"],
  },
];

const ecosystem = [
  {
    group: "Cloud",
    items: ["AWS", "Azure", "GCP", "Edge"],
  },
  {
    group: "AI",
    items: ["Vision AI", "Anomaly Detection", "LLM Copilots", "Forecasting"],
  },
  {
    group: "Data",
    items: ["Plant Lakehouse", "OPC-UA", "MQTT", "Lineage"],
  },
  {
    group: "Security",
    items: ["IEC 62443", "OT Zero-Trust", "ISO 27001", "SOC 2"],
  },
  {
    group: "ERP / MES",
    items: ["SAP", "Oracle", "Wonderware", "Rockwell"],
  },
  {
    group: "QMS",
    items: ["MasterControl", "Sparta", "Custom QMS", "Vision QMS"],
  },
  {
    group: "Analytics",
    items: ["Power BI", "Tableau", "PI System", "Causal ML"],
  },
  {
    group: "Automation",
    items: ["UiPath", "Camunda", "Temporal", "n8n"],
  },
];

const SERVICES = {
  aiAutomation: {
    slug: "ai-automation",
    title: "AI & Automation",
    description:
      "Predictive maintenance, AI vision quality, agentic planning and shift copilots — deployed across plant floors with observability and control.",
    icon: BrainCircuit,
  },

  softwareDevelopment: {
    slug: "software-development",
    title: "Software Development",
    description:
      "Plant-floor apps, operator dashboards, supplier portals and production trackers built for scale, uptime and real-time manufacturing workflows.",
    icon: Cpu,
  },

  enterpriseSystems: {
    slug: "enterprise-systems",
    title: "Enterprise Systems",
    description:
      "ERP, MES, QMS and PLM modernization with integration backbones that connect plant operations, suppliers and decision layers.",
    icon: Building2,
  },

  growthVisibility: {
    slug: "growth-visibility",
    title: "Plant Visibility & Analytics",
    description:
      "OEE dashboards, yield analytics, downtime tracking and production intelligence that help factories improve performance every shift.",
    icon: LineChart,
  },

  cloudData: {
    slug: "cloud-data",
    title: "Cloud, Data & DevSecOps",
    description:
      "Edge-to-cloud architectures, plant lakehouses, telemetry pipelines and OT/IT security — automated, observable and cost-optimized.",
    icon: Cloud,
  },

  governanceRisk: {
    slug: "governance-risk",
    title: "Governance, Risk & Trust",
    description:
      "Industrial security, audit-ready data lineage, compliance controls and resilient architecture for manufacturing-grade AI and software delivery.",
    icon: ShieldCheck,
  },
};

const SOLUTIONS = {
  enterpriseCopilot: {
    slug: "enterprise-copilot",
    title: "Shift Copilot",
    description:
      "Voice-first copilots for operators and supervisors — grounded in SOPs, maintenance logs and live plant context.",
    metric: "55% faster handovers",
    icon: Sparkles,
  },

  unifiedDataFabric: {
    slug: "unified-data-fabric",
    title: "Industrial Data Fabric",
    description:
      "One governed source of truth across machines, lines, plants, MES, ERP, QMS and SCADA data.",
    metric: "8 plants unified",
    icon: Database,
  },

  agentOperations: {
    slug: "agent-operations",
    title: "Plant Operations Agents",
    description:
      "Multi-agent workflows for maintenance, quality, planning and production with supervisor control and live evals.",
    metric: "31% downtime reduction",
    icon: Workflow,
  },

  decisionIntelligence: {
    slug: "decision-intelligence",
    title: "Plant Decision Intelligence",
    description:
      "From dashboards to decisions — closed-loop OEE, yield and energy models with outcome telemetry.",
    metric: "22% OEE improvement",
    icon: BarChart3,
  },

  legacyModernization: {
    slug: "legacy-modernization",
    title: "Legacy Modernization",
    description:
      "Modernize MES, ERP and plant-floor systems with parallel-run migration and zero-downtime cutover playbooks.",
    metric: "0 unplanned downtime",
    icon: GitBranch,
  },
};

const cta = {
  headline: "Tell us the hardest plant-floor problem you've postponed.",
  description:
    "A senior partner replies within 24 hours with a tangible plan, modelled on your actual lines, plants and SKUs.",
  primary: { label: "Get Proposal", to: "/contact" },
  secondary: { label: "Talk to a Partner", to: "/contact" },
};

const DEFAULT_MODULES = [
  {
    id: "inventory",
    label: "Inventory",
    desc: "Stock, SKUs, warehouses",
    icon: Boxes,
    angle: 0,
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "finance",
    label: "Finance",
    desc: "Ledger, costing, treasury",
    icon: Wallet,
    angle: 45,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "crm",
    label: "Customer Ops",
    desc: "Orders, accounts, lifecycle",
    icon: Users,
    angle: 90,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "mfg",
    label: "Manufacturing",
    desc: "BOMs, MRP, shop floor",
    icon: Factory,
    angle: 135,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "procurement",
    label: "Procurement",
    desc: "Vendors, RFQs, POs",
    icon: ShoppingCart,
    angle: 180,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "analytics",
    label: "Plant Analytics",
    desc: "OEE, yield, downtime",
    icon: BarChart3,
    angle: 225,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "logistics",
    label: "Logistics",
    desc: "Fleet, routing, delivery",
    icon: Truck,
    angle: 270,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "hr",
    label: "Workforce",
    desc: "Shifts, teams, attendance",
    icon: UserCog,
    angle: 315,
    image:
      "https://images.unsplash.com/photo-1521737711862-e3b97375f902?w=1280&h=800&fit=crop&q=80",
  },
];

const DEFAULT_SCROLL_ORDER = [
  "logistics",
  "hr",
  "inventory",
  "finance",
  "crm",
  "mfg",
  "procurement",
  "analytics",
];
export default function ManufacturingWrap() {
  return (
    <div>
      <IndustryHero
        hero={hero}
        name="Manufacturing"
        label="Manufacturing & Industry 4.0"
        heroPrimaryCta="Get Proposal"
        heroSecondaryCta={"Explore Capabilities"}
      />
      <Narrative
        title={
          "Plant floors are the new edge — and they finally have a data fabric."
        }
        description={[
          "For decades, factories ran on islands: PLCs, MES, ERP, QMS, each refusing to talk. Industry 4.0 was a promise that mostly stayed on slides.",
          "We make it operational — unifying machine, line and plant data into one fabric, layering AI for quality and maintenance, and closing the loop into planning. Every plant on one operating system. Every shift on one number.",
        ]}
        // features={features}
        highlightTag={"Industry Thesis"}
        tagList={["01 — Thesis"]}
      />
      <IndustryChallenges challenges={challenges} name="Manufacturing " />
      <MissionDossierFan
        cards={DEFAULT_DOSSIER_CARDS}
        title="The practices we deploy on every engagement."
        subtitle="From plant-floor automation to enterprise systems, we deploy manufacturing-ready AI, software, data, and commerce solutions that connect operations, reduce downtime, improve visibility, and help factories scale with confidence."
        badgeLabel={DEFAULT_DOSSIER_CARDS.length}
        eyebrow="Capabilities Deployed"
      />
      <IndustrySolutions solutions={solutions} />
      <IndustryArchitecture
        architecture={architecture}
        name={"Manufacturing"}
      />
      <BuildingNow
        highlightTag={"CURRENTLY IN PRODUCTION"}
        title={"What we are building for modern factories"}
        description={
          "Six categories of manufacturing intelligence systems, shipped into production — connecting machines, workflows, data and AI as you scroll."
        }
        ITEMS={ITEMS}
      />
      <div className="hidden md:block">
        <Modules
        title={
          <>
            Eight modules.{" "}
            <span className="text-brand">One manufacturing nucleus.</span>
          </>
        }
        description="An orbital architecture where every plant, workforce, inventory, procurement, finance and analytics module is connected to the manufacturing core in real-time."
        modules={DEFAULT_MODULES}
        scrollOrder={DEFAULT_SCROLL_ORDER}
      />
      </div>

      {/* <div className="md:hidden">
        <MobileCardCarousel
          cards={DEFAULT_MODULES}
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
      <IndustryEcosystem ecosystem={ecosystem} name={"Manufacturing "} />
      <IndustryRelated services={SERVICES} solutions={SOLUTIONS} />
      <IndustryCTA cta={cta} />
    </div>
  );
}
