"use client";
import React from "react";
import IndustryHero from "@/components/Industries/industry/IndustryHero";
import "./healthcare.css";
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
  headline: "The digital state, engineered for trust at population scale.",
  description:
    "Citizen expectations have changed. Legacy systems have not. Base2Brand AI partners with ministries, regulators and smart-city authorities to ship AI-native services that hold up to public scrutiny \u2014 with security-cleared engineers and air-gapped delivery.",
  ctas: {
    primary: { label: "Get Proposal", to: "/contact" },
    secondary: { label: "Explore Capabilities", to: "/services" },
  },
  metrics: [
    { value: "40%", label: "Operational Efficiency" },
    { value: "4x", label: "Faster Decisions" },
    { value: "99.9%", label: "Availability" },
    { value: "24/7", label: "Automation" },
  ],
  nodes: [
    { label: "Citizens", angle: 30, ring: 3 },
    { label: "Services", angle: 110, ring: 2 },
    { label: "Workflow", angle: 200, ring: 1 },
    { label: "Data", angle: 280, ring: 2 },
    { label: "AI", angle: 340, ring: 3 },
    { label: "Decisions", angle: 70, ring: 3 },
  ],
};

const challenges = [
  {
    icon: DatabaseZap,
    title: "Fragmented Clinical Data",
    description:
      "EMRs, imaging, labs and wearables siloed across decades of vendor history.",
  },
  {
    icon: Stethoscope,
    title: "Diagnostic Variance",
    description:
      "Outcome variation across cohorts and providers without explainable telemetry.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Complexity",
    description:
      "HIPAA, NHS DSPT, IRDAI, GDPR — layered with sector-specific provenance demands.",
  },
  {
    icon: ClipboardList,
    title: "Operational Drag",
    description:
      "Clinicians spend 35% of time on documentation — not on patient care.",
  },
  {
    icon: BadgeDollarSign,
    title: "Revenue Cycle Leakage",
    description:
      "Denials and write-offs compound across coding, claims and patient billing.",
  },
  {
    icon: Microscope,
    title: "Slow Trial Recruitment",
    description:
      "Eligible cohorts hidden inside unstructured notes — unreachable by manual review.",
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
    body: "Deploy clinical copilots, documentation AI, imaging triage, and intelligent revenue-cycle agents that reduce administrative burden and improve care delivery.",
    accent: "INTELLIGENT AUTOMATION",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-02",
    code: "DOSSIER-02",
    title: "Healthcare Software Development",
    body: "Build secure patient portals, telehealth platforms, clinician workbenches, and interoperable healthcare applications powered by FHIR, HL7, and SMART on FHIR.",
    accent: "DIGITAL HEALTH",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-03",
    code: "DOSSIER-03",
    title: "Governance, Risk & Trust",
    body: "Establish responsible AI governance with clinical model evaluations, regulatory compliance, and alignment with NIST, HIPAA, GDPR, and the EU AI Act.",
    accent: "COMPLIANCE & TRUST",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-04",
    code: "DOSSIER-04",
    title: "Shopify Healthcare Commerce",
    body: "Launch secure Shopify experiences for healthcare brands, wellness products, medical devices, and D2C commerce with seamless integrations and optimized performance.",
    accent: "HEALTH COMMERCE",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-05",
    code: "DOSSIER-05",
    title: "Healthcare Data & AI Intelligence",
    body: "Unify EMRs, imaging, lab systems, and wearable data into actionable insights with predictive analytics, dashboards, and enterprise AI decision support.",
    accent: "DATA INTELLIGENCE",
    channel: "CHANNEL A · LOCKED",
  },
];

const solutions = [
  {
    slug: "enterprise-copilot",
    href: "/solutions/enterprise-copilot",
    title: "Clinical Copilot",
    description:
      "Ambient documentation, summarisation and protocol grounding for clinicians.",
    metric: "35% time reclaimed",
    icon: Sparkles,
  },
  {
    slug: "unified-data-fabric",
    href: "/solutions/unified-data-fabric",
    title: "Unified Clinical Fabric",
    description:
      "EMR, imaging, labs, claims and wearables on one governed graph.",
    metric: "9 sources unified",
    icon: Database,
  },
  {
    slug: "agent-operations",
    href: "/solutions/agent-operations",
    title: "Care Operations Agents",
    description:
      "Prior auth, denials and follow-up agents that close the revenue loop.",
    metric: "24/7 cadence",
    icon: Workflow,
  },
  {
    slug: "decision-intelligence",
    href: "/solutions/decision-intelligence",
    title: "Clinical Decision Intelligence",
    description:
      "Causal cohort analytics, outcome dashboards and trial-feasibility models.",
    metric: "4x cohort speed",
    icon: BarChart3,
  },
];

const architecture = {
  description:
    "A clinical-grade reference stack from patient touchpoints to AI decisioning \u2014 with PHI governance baked into every layer.",
  layers: [
    {
      title: "Patients",
      subtitle: "Tele-consult, mobile, wearables",
      icon: Users,
    },
    {
      title: "Care Channels",
      subtitle: "Tele-health, portal, kiosks",
      icon: Globe2,
    },
    {
      title: "Clinical Workflow",
      subtitle: "EMR, orders, scheduling",
      icon: Stethoscope,
    },
    {
      title: "Enterprise Systems",
      subtitle: "Claims, RCM, pharmacy",
      icon: Hospital,
    },
    {
      title: "Data Platform",
      subtitle: "FHIR fabric, imaging, lineage",
      icon: Database,
    },
    {
      title: "AI Layer",
      subtitle: "Clinical LLMs, agents, evals",
      icon: BrainCircuit,
    },
    {
      title: "Decision Intelligence",
      subtitle: "Outcome models, RWE",
      icon: BarChart3,
    },
  ],
};

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

const ecosystem = [
  {
    group: "Standards",
    items: ["FHIR R4", "HL7 v2", "DICOM", "SMART on FHIR"],
  },
  {
    group: "Cloud",
    items: [
      "AWS HealthLake",
      "Azure Health",
      "GCP Healthcare API",
      "Private Cloud",
    ],
  },
  {
    group: "AI",
    items: [
      "Clinical LLMs",
      "Imaging Models",
      "Speech AI",
      "Agent supervisors",
    ],
  },
  {
    group: "Security",
    items: ["HIPAA", "NHS DSPT", "ISO 27001", "SOC 2 Type II"],
  },
  { group: "EMR / HIE", items: ["Epic", "Cerner", "Meditech", "openEHR"] },
  { group: "Data", items: ["Lakehouse", "OMOP CDM", "RWE", "Lineage"] },
  {
    group: "Analytics",
    items: ["Power BI", "Tableau", "Causal ML", "Survival models"],
  },
  { group: "Channels", items: ["Tele-health", "Mobile", "Voice IVR", "Kiosk"] },
];

const SERVICES = {
  aiAutomation: {
    slug: "ai-automation",
    title: "AI & Automation",
    description:
      "Agentic copilots, multi-agent orchestration, document AI and RPA — deployed inside your VPC with eval harnesses and observability.",
    icon: BrainCircuit,
  },

  softwareDevelopment: {
    slug: "software-development",
    title: "Software Development",
    description:
      "Mission-critical, composable platforms built for compliance, scale and 99.99% SLAs across web, mobile and cloud-native services.",
    icon: Cpu,
  },

  enterpriseSystems: {
    slug: "enterprise-systems",
    title: "Enterprise Systems",
    description:
      "ERP/CRM extensions, integration backbones and legacy modernization — from mainframe to micro-services.",
    icon: Building2,
  },

  growthVisibility: {
    slug: "growth-visibility",
    title: "Growth & Visibility",
    description:
      "Decision intelligence, performance analytics and brand surfaces that compound across the customer journey.",
    icon: LineChart,
  },

  cloudData: {
    slug: "cloud-data",
    title: "Cloud, Data & DevSecOps",
    description:
      "Multi-cloud foundations, lakehouses and shift-left security — automated, observable and cost-optimised.",
    icon: Cloud,
  },

  governanceRisk: {
    slug: "governance-risk",
    title: "Governance, Risk & Trust",
    description:
      "AI governance, regulatory engineering and resilience baked into every deliverable — sandbox to scale.",
    icon: ShieldCheck,
  },
};

const SOLUTIONS = {
  enterpriseCopilot: {
    slug: "enterprise-copilot",
    title: "Enterprise Copilot",
    description:
      "Domain-specific copilots grounded in your private corpus and evaluated against your KPIs.",
    metric: "38% avg. handle-time reduction",
    icon: Sparkles,
  },

  unifiedDataFabric: {
    slug: "unified-data-fabric",
    title: "Unified Data Fabric",
    description:
      "One governed source of truth stitched across silos with semantic + causal graph.",
    metric: "14 sources unified",
    icon: Database,
  },

  agentOperations: {
    slug: "agent-operations",
    title: "Agent Operations",
    description:
      "Multi-agent workflows in production with supervisor models and live evals.",
    metric: "24/7 autonomous cadence",
    icon: Workflow,
  },

  decisionIntelligence: {
    slug: "decision-intelligence",
    title: "Decision Intelligence",
    description:
      "From dashboards to decisions — closed-loop models with outcome telemetry.",
    metric: "4x faster decisions",
    icon: BarChart3,
  },

  legacyModernization: {
    slug: "legacy-modernization",
    title: "Legacy Modernization",
    description:
      "From mainframe to micro-services with zero-downtime migration playbooks.",
    metric: "60% less manual work",
    icon: GitBranch,
  },
};

const cta = {
    headline: "Tell us the hardest clinical problem you've postponed.",
    description: "A senior partner replies within 24 hours with a tangible plan, validated against your protocols, payers and regulators.",
    primary:   { label: "Get Proposal",      to: "/contact" },
    secondary: { label: "Talk to a Partner", to: "/contact" },
  }
export default function HealthCareWrap() {
  return (
    <div>
      <IndustryHero
        hero={hero}
        name="Healthcare"
        label="Healthcare & Life Sciences"
        heroPrimaryCta="Get Proposal"
        heroSecondaryCta={"Explore Capabilities"}
      />
      <Narrative
        title={
          "Healthcare is being re-platformed around the patient quietly, at the data layer."
        }
        description={[
          "Care no longer happens inside a single facility or app. It spans tele-consult, EMRs, wearables, claims, labs and pharmacies \u2014 with patients expecting one continuous experience and clinicians expecting fewer screens, not more.",
          "We re-architect this fragmentation around a unified clinical data fabric, with AI grounded in your protocols and validated against your outcomes. The result: triage that holds, revenue cycles that close, and trials that recruit at the speed of the science.",
        ]}
        // features={features}
        highlightTag={"THE NEW OPERATING MODEL"}
        tagList={["01 — Thesis"]}
      />
      <IndustryChallenges challenges={challenges} name="Healthcare" />
      <MissionDossierFan
        cards={DEFAULT_DOSSIER_CARDS}
        title="Six dossiers. One Shopify mission."
        subtitle="How we run a Shopify engagement — from discovery to growth operations — as a fan of focused dossiers."
        badgeLabel={DEFAULT_DOSSIER_CARDS.length}
        eyebrow="PLAYBOOKS · MISSION DOSSIERS"
      />
      <IndustrySolutions solutions={solutions} />
      <IndustryArchitecture architecture={architecture} name={"Healthcare"} />
      <BuildingNow
        highlightTag={"CURRENTLY IN PRODUCTION"}
        title={"What we are building right now"}
        description={
          "Six categories of intelligent systems, shipped into production — discovered as you scroll."
        }
        ITEMS={ITEMS}
      />
      <Modules
        title={
          <>
            Eight modules. <span className="text-brand">One nucleus.</span>
          </>
        }
        description="An orbital architecture where every operational module is connected to the ERP core in real-time."
      />
      <IndustryEcosystem ecosystem={ecosystem} name={"Healthcare"} />
      <IndustryRelated services={SERVICES} solutions={SOLUTIONS} />
      <IndustryCTA cta={cta}/>
    </div>
  );
}
