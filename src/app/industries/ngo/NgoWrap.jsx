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
    title: "Beneficiary Fragmentation",
    description:
      "Beneficiary records duplicated across programs, partners and time — with little continuity.",
  },
  {
    icon: Stethoscope,
    title: "Outcome Attribution",
    description: "Donors expect causal evidence — not just activity reports.",
  },
  {
    icon: ShieldCheck,
    title: "Funding Volatility",
    description: "Donor cycles compress timelines while expectations expand.",
  },
  {
    icon: ClipboardList,
    title: "Field Operations Drag",
    description:
      "Field staff work offline, multilingual and across patchy connectivity — with tools that ignore this reality.",
  },
  {
    icon: BadgeDollarSign,
    title: "Data Protection & Consent",
    description:
      "GDPR, DPDP and humanitarian-data principles layered onto beneficiary data.",
  },
  {
    icon: Microscope,
    title: "Partner Coordination",
    description:
      "Implementing partners, donors and host governments all need different views of the same program.",
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
    title: "AI & Mission Automation",
    body: "Deploy beneficiary-support copilots, donor reporting agents, document AI, field-workflow automation and program intelligence systems for mission-scale delivery.",
    accent: "MISSION AUTOMATION",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-02",
    code: "DOSSIER-02",
    title: "NGO Software Development",
    body: "Build beneficiary platforms, donor portals, program dashboards, field apps and partner coordination systems for global NGO operations.",
    accent: "DIGITAL PROGRAMS",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-03",
    code: "DOSSIER-03",
    title: "Governance, Risk & Trust",
    body: "Create consent-first, audit-ready systems for donor compliance, humanitarian data protection, reporting standards and program accountability.",
    accent: "COMPLIANCE & TRUST",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-04",
    code: "DOSSIER-04",
    title: "Donor & Program Platforms",
    body: "Unify donor intelligence, grants, program workflows, beneficiary journeys and reporting systems into one mission operating layer.",
    accent: "PROGRAM OPERATIONS",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-05",
    code: "DOSSIER-05",
    title: "Impact Data & AI Intelligence",
    body: "Turn beneficiary, field, donor, partner and program data into impact dashboards, outcome models and real-time decision intelligence.",
    accent: "IMPACT INTELLIGENCE",
    channel: "CHANNEL A · LOCKED",
  },
];

const solutions = [
  {
    slug: "enterprise-copilot",
    href: "/solutions/enterprise-copilot",
    title: "Beneficiary Copilot",
    description:
      "Multilingual, voice-first assistant for beneficiaries and field staff.",
    metric: "62% deflection",
    icon: Sparkles,
  },
  {
    slug: "unified-data-fabric",
    href: "/solutions/unified-data-fabric",
    title: "Mission Data Fabric",
    description:
      "Beneficiary, donor, program and partner data unified with consent.",
    metric: "11 sources unified",
    icon: Database,
  },
  {
    slug: "agent-operations",
    href: "/solutions/agent-operations",
    title: "Program Operations Agents",
    description:
      "Agents across case mgmt, eligibility, partner coordination and donor reporting.",
    metric: "24/7 cadence",
    icon: Workflow,
  },
  {
    slug: "decision-intelligence",
    href: "/solutions/decision-intelligence",
    title: "Impact Decision Intelligence",
    description:
      "Causal program impact models with auditor-grade evidence chains.",
    metric: "4x outcome speed",
    icon: BarChart3,
  },
];

const architecture = {
  description:
    "A mission operating system — from beneficiary touchpoint to donor reporting, with consent and humanitarian principles baked in.",
  layers: [
    {
      title: "Beneficiaries",
      subtitle: "Voice, SMS, mobile, kiosk",
      icon: Users,
    },
    {
      title: "Field Channels",
      subtitle: "Offline-first apps, partner sites",
      icon: Globe2,
    },
    {
      title: "Program Workflow",
      subtitle: "Case mgmt, eligibility, comms",
      icon: Stethoscope,
    },
    {
      title: "Enterprise Systems",
      subtitle: "ERP, finance, HR, donor CRM",
      icon: Hospital,
    },
    {
      title: "Data Platform",
      subtitle: "Mission fabric, consent ledger",
      icon: Database,
    },
    {
      title: "AI Layer",
      subtitle: "Copilots, document AI, agents",
      icon: BrainCircuit,
    },
    {
      title: "Decision Intelligence",
      subtitle: "Impact + donor reporting",
      icon: BarChart3,
    },
  ],
};

const ITEMS = [
  {
    icon: "Users",
    title: "Beneficiary Copilots",
    tagline: "Multilingual support for field and beneficiary journeys.",
    desc: "Voice-first and chat-based copilots that help beneficiaries and field teams navigate eligibility, services, case updates, documents and support workflows.",
    metrics: ["62% deflection", "Multilingual", "Field-ready"],
  },
  {
    icon: "GitBranch",
    title: "Program Operations Agents",
    tagline: "AI workflows for mission delivery.",
    desc: "Agentic systems that support case management, eligibility checks, partner coordination, donor reporting, follow-ups and program execution.",
    metrics: ["24/7 cadence", "Case routing", "Partner sync"],
  },
  {
    icon: "Briefcase",
    title: "Mission Operating Platforms",
    tagline: "One backbone for NGO programs.",
    desc: "Beneficiary platforms, donor portals, field apps, partner dashboards and program workflows connected into one mission-grade operating system.",
    metrics: ["Program unified", "Donor-ready", "Offline-first"],
  },
  {
    icon: "BrainCircuit",
    title: "Impact Decision Intelligence",
    tagline: "Real-time evidence for better outcomes.",
    desc: "AI models that connect beneficiary data, field activity, donor requirements and program outcomes into impact dashboards and decision systems.",
    metrics: ["Impact models", "Outcome speed", "Evidence chains"],
  },
  {
    icon: "PhoneCall",
    title: "Voice Field Operations",
    tagline: "Voice-first access across low-connectivity regions.",
    desc: "Voice agents for beneficiary support, program updates, appointment reminders, survey capture, grievance handling and field coordination.",
    metrics: ["Voice support", "SMS-ready", "Human handoff"],
  },
  {
    icon: "LayoutDashboard",
    title: "NGO Command Centers",
    tagline: "Unified visibility for programs and donors.",
    desc: "Dashboards to monitor beneficiary journeys, field progress, donor reporting, program KPIs, partner activity, AI agents and impact outcomes.",
    metrics: ["Live visibility", "Donor reporting", "Governance"],
  },
];

const ecosystem = [
    {
      group: "Cloud",
      items: ["AWS", "Azure", "GCP", "Sovereign cloud"],
    },
    {
      group: "AI",
      items: ["LLMs", "Document AI", "Voice AI", "Agent supervisors"],
    },
    {
      group: "Data",
      items: ["Lakehouse", "Consent ledger", "Lineage", "Causal ML"],
    },
    {
      group: "Security",
      items: ["GDPR", "DPDP", "Humanitarian principles", "ISO 27001"],
    },
    {
      group: "CRM",
      items: ["Salesforce NPSP", "Microsoft NFP", "Custom CRM", "Pega"],
    },
    {
      group: "ERP",
      items: ["NetSuite", "SAP", "Oracle", "Unit4"],
    },
    {
      group: "Analytics",
      items: ["Power BI", "Tableau", "Causal ML", "Open data"],
    },
    {
      group: "Channels",
      items: ["Mobile / PWA", "Voice IVR", "SMS / USSD", "Kiosk"],
    },
];

const SERVICES = {
    aiAutomation: {
      slug: "ai-automation",
      title: "AI & Automation",
      description:
        "Beneficiary copilots, donor reporting agents, document AI and field workflow automation deployed across mission operations.",
      icon: BrainCircuit,
    },
  
    softwareDevelopment: {
      slug: "software-development",
      title: "Software Development",
      description:
        "Beneficiary platforms, donor portals, field apps and program dashboards built for global NGO delivery.",
      icon: Cpu,
    },
  
    cloudData: {
      slug: "cloud-data",
      title: "Cloud, Data & DevSecOps",
      description:
        "Secure cloud foundations, mission data fabrics, consent ledgers and offline-ready pipelines for field operations.",
      icon: Cloud,
    },
  
    governanceRisk: {
      slug: "governance-risk",
      title: "Governance, Risk & Trust",
      description:
        "Humanitarian data protection, donor compliance, consent controls and audit-ready governance built into every system.",
      icon: ShieldCheck,
    },
};

const SOLUTIONS = {
    enterpriseCopilot: {
      slug: "enterprise-copilot",
      title: "Beneficiary Copilot",
      description:
        "Multilingual, voice-first copilots for beneficiaries, field staff and program support workflows.",
      metric: "62% deflection",
      icon: Sparkles,
    },
  
    unifiedDataFabric: {
      slug: "unified-data-fabric",
      title: "Mission Data Fabric",
      description:
        "One governed source of truth across beneficiary, donor, program, partner and consent data.",
      metric: "11 sources unified",
      icon: Database,
    },
  
    agentOperations: {
      slug: "agent-operations",
      title: "Program Operations Agents",
      description:
        "Agentic workflows for case management, eligibility, partner coordination and donor reporting.",
      metric: "24/7 cadence",
      icon: Workflow,
    },
  
    decisionIntelligence: {
      slug: "decision-intelligence",
      title: "Impact Decision Intelligence",
      description:
        "Closed-loop models for program impact, donor reporting, outcome attribution and evidence chains.",
      metric: "4x outcome speed",
      icon: BarChart3,
    },
};

const cta = {
  headline: "Tell us the hardest clinical problem you've postponed.",
  description:
    "A senior partner replies within 24 hours with a tangible plan, validated against your protocols, payers and regulators.",
  primary: { label: "Get Proposal", to: "/contact" },
  secondary: { label: "Talk to a Partner", to: "/contact" },
};
export default function NgoWrap() {
  return (
    <div>
      <IndustryHero
        hero={hero}
        name="NGOs"
        label="NGOs & Multi-Lateral"
        heroPrimaryCta="Get Proposal"
        heroSecondaryCta="Explore Capabilities"
      />
      <Narrative
        title={
          "Impact measurement is no longer a report. It is a real-time operating layer."
        }
        description={[
          "Donors expect outcome attribution. Beneficiaries expect dignity and continuity. Field staff need tooling that respects how they actually work — across patchy connectivity and multiple languages.",
          "We engineer that backbone. Beneficiary platforms, donor intelligence, program impact analytics and field-grade tooling — unified into one mission operating system.",
        ]}
        highlightTag={"INDUSTRY THESIS"}
        tagList={["01 — Thesis"]}
      />
      <IndustryChallenges challenges={challenges} name="NGOs" />
      <MissionDossierFan
        cards={DEFAULT_DOSSIER_CARDS}
        title="Five dossiers. One mission-grade NGO backbone."
        subtitle="How we run an NGO engagement — from beneficiary platforms to donor intelligence and impact operations — as a fan of focused dossiers."
        badgeLabel={DEFAULT_DOSSIER_CARDS.length}
        eyebrow="PLAYBOOKS · MISSION DOSSIERS"
      />
      <IndustrySolutions solutions={solutions} />
      <IndustryArchitecture architecture={architecture} name={"NGOs"} />
      <BuildingNow
        highlightTag={"CURRENTLY IN PRODUCTION"}
        title={"What we are building for mission-led programs"}
        description={
          "Six categories of NGO intelligence systems, shipped into production — connecting beneficiaries, field teams, donor operations, program data and AI."
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
      <IndustryEcosystem ecosystem={ecosystem} name={"NGOs"} />
      <IndustryRelated services={SERVICES} solutions={SOLUTIONS} />
      <IndustryCTA cta={cta} />
    </div>
  );
}
