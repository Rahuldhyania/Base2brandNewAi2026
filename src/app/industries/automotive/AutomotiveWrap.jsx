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
  headline: "Software-defined vehicles. Software-defined business.",
  description:
    "We build the connective tissue between vehicle, dealer, customer and OEM — unifying telemetry, software updates, service and commerce into one continuous experience.",
  ctas: {
    primary: { label: "Get Proposal", to: "/contact" },
    secondary: { label: "Explore Capabilities", to: "/services" },
  },
  metrics: [
    { value: "26%", label: "Manufacturing Yield ↑" },
    { value: "4x", label: "OTA Velocity" },
    { value: "99.99%", label: "Telemetry Coverage" },
    { value: "24/7", label: "Fleet Cadence" },
  ],
  nodes: [
    { label: "Telemetry", angle: 280, ring: 2 },
    { label: "AI", angle: 340, ring: 3 },
    { label: "Vehicles", angle: 20, ring: 1 },
    { label: "OEM Cloud", angle: 70, ring: 3 },
    { label: "Dealers", angle: 120, ring: 2 },
    { label: "Customers", angle: 200, ring: 3 },
  ],
};

const challenges = [
  {
    icon: DatabaseZap,
    title: "Vehicle Telemetry Fragmentation",
    description:
      "ECU, IVI, telematics and ADAS data streams disconnected from cloud platforms.",
  },
  {
    icon: Stethoscope,
    title: "OTA + SDV Complexity",
    description:
      "Software-defined vehicle releases need eval, rollback and dealer / customer comms loops.",
  },
  {
    icon: ShieldCheck,
    title: "Customer 360 Gaps",
    description:
      "Dealer, finance, service and OEM data unlinked at the customer.",
  },
  {
    icon: ClipboardList,
    title: "Service Quality Variance",
    description:
      "Service experiences vary wildly across dealer networks and regions.",
  },
  {
    icon: BadgeDollarSign,
    title: "Compliance + Cybersecurity",
    description:
      "UN R155 / R156, GDPR, DPDP and regional safety frameworks layered together.",
  },
  {
    icon: Microscope,
    title: "Margin Under Pressure",
    description:
      "EV transition, supplier shocks and software costs compress traditional margin pools.",
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
    title: "AI & Vehicle Automation",
    body: "Deploy fleet intelligence, predictive service agents, OTA copilots, warranty automation and customer support AI across connected mobility workflows.",
    accent: "MOBILITY AUTOMATION",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-02",
    code: "DOSSIER-02",
    title: "Automotive Software Development",
    body: "Build connected vehicle platforms, dealer portals, service apps, customer dashboards and OEM cloud experiences for software-defined mobility.",
    accent: "CONNECTED SOFTWARE",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-03",
    code: "DOSSIER-03",
    title: "Governance, Risk & Trust",
    body: "Establish compliance-ready systems for OTA releases, vehicle cybersecurity, data privacy, regional safety frameworks and audit-grade software delivery.",
    accent: "COMPLIANCE & TRUST",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-04",
    code: "DOSSIER-04",
    title: "Shopify Automotive Commerce",
    body: "Launch Shopify experiences for parts, accessories, service packages, dealer-led commerce and mobility brands with connected customer journeys.",
    accent: "AUTO COMMERCE",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-05",
    code: "DOSSIER-05",
    title: "Automotive Data & AI Intelligence",
    body: "Unify telemetry, dealer, service, customer, finance and vehicle data into AI-powered dashboards, prediction models and decision systems.",
    accent: "DATA INTELLIGENCE",
    channel: "CHANNEL A · LOCKED",
  },
];

const solutions = [
  {
    slug: "unified-data-fabric",
    href: "/solutions/unified-data-fabric",
    title: "Vehicle 360 Fabric",
    description:
      "Telemetry, dealer, finance and service data unified at the vehicle and customer.",
    metric: "9 systems unified",
    icon: Database,
  },
  {
    slug: "agent-operations",
    href: "/solutions/agent-operations",
    title: "Service Operations Agents",
    description:
      "Agents across diagnostics, dispatch, parts and customer comms.",
    metric: "32% TAT ↓",
    icon: Workflow,
  },
  {
    slug: "decision-intelligence",
    href: "/solutions/decision-intelligence",
    title: "Mobility Decision Intelligence",
    description:
      "Causal models for fleet health, dealer performance and customer LTV.",
    metric: "26% yield ↑",
    icon: BarChart3,
  },
  {
    slug: "enterprise-copilot",
    href: "/solutions/enterprise-copilot",
    title: "Dealer / Customer Copilot",
    description:
      "Multilingual customer assistant and dealer-side service copilot.",
    metric: "47% deflection",
    icon: Sparkles,
  },
];

const architecture = {
  description:
    "A vehicle-to-cloud reference architecture for software-defined mobility — telemetry, OTA, service and commerce, in one fabric.",
  layers: [
    {
      title: "Vehicles",
      subtitle: "ECU, IVI, ADAS, telematics",
      icon: Users,
    },
    {
      title: "Edge / Connectivity",
      subtitle: "Vehicle gateway, 5G, V2X",
      icon: Globe2,
    },
    {
      title: "Mobility Workflow",
      subtitle: "OTA, service, parts, finance",
      icon: Stethoscope,
    },
    {
      title: "Enterprise Systems",
      subtitle: "DMS, ERP, CRM, supplier",
      icon: Hospital,
    },
    {
      title: "Data Platform",
      subtitle: "Vehicle 360 fabric, lineage",
      icon: Database,
    },
    {
      title: "AI Layer",
      subtitle: "Predictive ops, copilots, agents",
      icon: BrainCircuit,
    },
    {
      title: "Decision Intelligence",
      subtitle: "Yield, LTV, dealer performance",
      icon: BarChart3,
    },
  ],
};

const ITEMS = [
  {
    icon: "Users",
    title: "Dealer / Customer Copilots",
    tagline: "AI support across ownership journeys.",
    desc: "Multilingual copilots that help customers, dealers and service teams manage vehicle queries, service updates, warranty support and ownership workflows.",
    metrics: ["47% deflection", "Dealer assist", "24/7 support"],
  },
  {
    icon: "GitBranch",
    title: "Service Operations Agents",
    tagline: "Agents for diagnostics, parts and dispatch.",
    desc: "Agentic workflows that coordinate service booking, diagnostics, parts availability, technician routing, customer communication and follow-ups.",
    metrics: ["32% TAT ↓", "Parts routing", "Service automation"],
  },
  {
    icon: "Briefcase",
    title: "Connected Mobility Platforms",
    tagline: "One system for vehicle, dealer and OEM.",
    desc: "Vehicle-to-cloud platforms that connect telemetry, OTA, service, dealer systems, finance and customer experiences into one operating layer.",
    metrics: ["9 systems unified", "OEM connected", "Dealer-ready"],
  },
  {
    icon: "BrainCircuit",
    title: "Mobility Decision Intelligence",
    tagline: "AI models for yield, fleet health and LTV.",
    desc: "Decision systems that analyze telemetry, service history, dealer performance, customer behaviour and warranty signals to improve mobility outcomes.",
    metrics: ["26% yield ↑", "Fleet health", "LTV models"],
  },
  {
    icon: "PhoneCall",
    title: "Voice Service Operations",
    tagline: "Voice agents for mobility support.",
    desc: "Voice-first agents for service reminders, appointment booking, delivery updates, customer feedback, roadside support and structured data capture.",
    metrics: ["Voice support", "Low latency", "Human handoff"],
  },
  {
    icon: "LayoutDashboard",
    title: "Mobility Command Centers",
    tagline: "Unified control for connected vehicles.",
    desc: "Live dashboards to monitor vehicle health, OTA status, service queues, dealer performance, AI agents, customer outcomes and operational risk.",
    metrics: ["Live telemetry", "OTA visibility", "Governance"],
  },
];

const ecosystem = [
  {
    group: "Cloud",
    items: ["AWS Auto", "Azure Mobility", "GCP Auto", "Edge"],
  },
  {
    group: "AI",
    items: ["Vision AI", "Predictive ops", "LLMs", "Speech AI"],
  },
  {
    group: "Data",
    items: ["Vehicle Lakehouse", "Lineage", "Causal ML", "Streaming"],
  },
  {
    group: "Security",
    items: ["UN R155 / R156", "ISO 21434", "ISO 27001", "Zero-Trust"],
  },
  {
    group: "DMS / ERP",
    items: ["SAP", "Oracle", "Dynamics", "Custom DMS"],
  },
  {
    group: "Service",
    items: ["ServiceNow", "Salesforce", "Custom CRM", "Pega"],
  },
  {
    group: "Analytics",
    items: ["Power BI", "Tableau", "Looker", "Causal ML"],
  },
  {
    group: "Channels",
    items: ["Vehicle IVI", "Mobile", "Dealer apps", "Voice"],
  },
];

const SERVICES = {
  aiAutomation: {
    slug: "ai-automation",
    title: "AI & Automation",
    description:
      "Predictive service agents, OTA copilots, warranty automation and customer support AI deployed across mobility workflows.",
    icon: BrainCircuit,
  },

  softwareDevelopment: {
    slug: "software-development",
    title: "Software Development",
    description:
      "Connected vehicle platforms, dealer portals, service apps and OEM cloud experiences built for software-defined mobility.",
    icon: Cpu,
  },

  enterpriseSystems: {
    slug: "enterprise-systems",
    title: "Enterprise Systems",
    description:
      "DMS, ERP, CRM, service and supplier integrations that connect vehicles, dealers, customers and OEM operations.",
    icon: Building2,
  },

  cloudData: {
    slug: "cloud-data",
    title: "Cloud, Data & DevSecOps",
    description:
      "Vehicle-to-cloud telemetry, mobility lakehouses, secure pipelines and observability for connected automotive platforms.",
    icon: Cloud,
  },
};

const SOLUTIONS = {
  unifiedDataFabric: {
    slug: "unified-data-fabric",
    title: "Vehicle 360 Fabric",
    description:
      "One governed source of truth across telemetry, dealer, finance, service, customer and vehicle data.",
    metric: "9 systems unified",
    icon: Database,
  },

  agentOperations: {
    slug: "agent-operations",
    title: "Service Operations Agents",
    description:
      "Multi-agent workflows for diagnostics, dispatch, parts availability, service updates and customer communication.",
    metric: "32% TAT reduction",
    icon: Workflow,
  },

  decisionIntelligence: {
    slug: "decision-intelligence",
    title: "Mobility Decision Intelligence",
    description:
      "Closed-loop models for fleet health, warranty risk, dealer performance, customer LTV and mobility yield.",
    metric: "26% yield lift",
    icon: BarChart3,
  },

  enterpriseCopilot: {
    slug: "enterprise-copilot",
    title: "Dealer / Customer Copilot",
    description:
      "Multilingual copilots for customers, dealers and service teams grounded in live vehicle and ownership context.",
    metric: "47% deflection",
    icon: Sparkles,
  },
};

const cta = {
  headline: "Tell us the hardest clinical problem you've postponed.",
  description:
    "A senior partner replies within 24 hours with a tangible plan, validated against your protocols, payers and regulators.",
  primary: { label: "Get Proposal", to: "/contact" },
  secondary: { label: "Talk to a Partner", to: "/contact" },
};

const AUTOMOTIVE_MODULES = [
  {
    id: "inventory",
    label: "Vehicle Inventory",
    desc: "Models, variants, stock",
    iconName: "boxes",
    angle: 0,
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "sales",
    label: "Sales",
    desc: "Leads, deals, bookings",
    iconName: "wallet",
    angle: 45,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "crm",
    label: "CRM",
    desc: "Customers, follow-ups, lifecycle",
    iconName: "users",
    angle: 90,
    image:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "service",
    label: "Service",
    desc: "Jobs, repairs, workshop flow",
    iconName: "factory",
    angle: 135,
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "parts",
    label: "Parts",
    desc: "Spare parts, SKUs, availability",
    iconName: "shoppingCart",
    angle: 180,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "finance",
    label: "Finance",
    desc: "Invoices, payments, margins",
    iconName: "wallet",
    angle: 225,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "logistics",
    label: "Logistics",
    desc: "Delivery, routing, tracking",
    iconName: "truck",
    angle: 270,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "analytics",
    label: "Analytics",
    desc: "Sales KPIs, service insights",
    iconName: "barChart",
    angle: 315,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&h=800&fit=crop&q=80",
  },
];

const AUTOMOTIVE_MODULE_SCROLL_ORDER = [
  "logistics",
  "analytics",
  "inventory",
  "sales",
  "crm",
  "service",
  "parts",
  "finance",
];
export default function AutomotiveWrap() {
  return (
    <div>
      <IndustryHero
        hero={hero}
        name="Automotive"
        label="Automotive & Mobility"
        heroPrimaryCta="Get Proposal"
        heroSecondaryCta="Explore Capabilities"
      />
      <Narrative
        title={
          "The vehicle is becoming a platform. The OEM is becoming a software company."
        }
        description={[
          "Customers no longer judge a vehicle on its first delivery. They judge it on every OTA release, every dealer interaction, every service event. The lifetime relationship is the product.",
          "We design and ship that lifetime layer — vehicle-to-cloud telemetry, OTA, connected services and intelligent dealer + service operations — with regulatory compliance in every region you sell in.",
        ]}
        highlightTag={"INDUSTRY THESIS"}
        tagList={["01 — Thesis"]}
      />
      <IndustryChallenges challenges={challenges} name="Automotive" />
      <MissionDossierFan
        cards={DEFAULT_DOSSIER_CARDS}
        title="Five dossiers. One mobility mission."
        subtitle="How we run an automotive engagement — from connected vehicles to lifetime customer operations — as a fan of focused dossiers."
        badgeLabel={DEFAULT_DOSSIER_CARDS.length}
        eyebrow="PLAYBOOKS · MISSION DOSSIERS"
      />
      <IndustrySolutions solutions={solutions} />
      <IndustryArchitecture architecture={architecture} name={"Automotive"} />
      <BuildingNow
        highlightTag={"CURRENTLY IN PRODUCTION"}
        title={"What we are building for mobility platforms"}
        description={
          "Six categories of automotive intelligence systems, shipped into production — connecting vehicles, dealers, customers, service workflows and AI."
        }
        ITEMS={ITEMS}
      />
      <div className="hidden md:block">
        <Modules
          title={
            <>
              Automotive operations.{" "}
              <span className="text-brand">One connected drive.</span>
            </>
          }
          description="Connect vehicle inventory, sales, CRM, service, spare parts, finance, logistics, and analytics into one intelligent automotive management system."
          modules={AUTOMOTIVE_MODULES}
          scrollOrder={AUTOMOTIVE_MODULE_SCROLL_ORDER}
        />
      </div>
      <IndustryEcosystem ecosystem={ecosystem} name={"Automotive"} />
      <IndustryRelated services={SERVICES} solutions={SOLUTIONS} />
      <IndustryCTA cta={cta} />
    </div>
  );
}
