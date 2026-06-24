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
    "Citizen expectations have changed. Legacy systems have not. Base2Brand AI partners with ministries, regulators and smart-city authorities to ship AI-native services that hold up to public scrutiny — with security-cleared engineers and air-gapped delivery.",
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
    { label: "Data", angle: 280, ring: 2 },
    { label: "AI", angle: 340, ring: 3 },
    { label: "Citizens", angle: 20, ring: 3 },
    { label: "Decisions", angle: 70, ring: 2 },
    { label: "Services", angle: 120, ring: 2 },
    { label: "Workflow", angle: 200, ring: 1 },
  ],
};

const challenges = [
  {
    icon: DatabaseZap,
    title: "Legacy Infrastructure",
    description:
      "Mainframe-era systems carrying 70% of citizen workloads with brittle integrations and decade-long change cycles.",
  },
  {
    icon: Stethoscope,
    title: "Data Silos",
    description:
      "Citizen identity fragmented across 40+ departments — impossible to deliver unified eligibility, fraud or case views.",
  },
  {
    icon: ShieldCheck,
    title: "Manual Processes",
    description:
      "Case officers stuck in paper-equivalent workflows; backlogs compound every fiscal year.",
  },
  {
    icon: ClipboardList,
    title: "Compliance Complexity",
    description:
      "Layered mandates — DPDP, GDPR, sector-specific privacy — with audit trails that legacy systems cannot produce.",
  },
  {
    icon: BadgeDollarSign,
    title: "Operational Fragmentation",
    description:
      "Each agency operates in isolation, duplicating platforms, identity, payments and analytics.",
  },
  {
    icon: Microscope,
    title: "Talent Constraints",
    description:
      "Public sector teams cannot hire AI/cloud talent at scale; vendor lock-in compounds the gap.",
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
    title: "AI & Public Automation",
    body: "Deploy citizen service copilots, case-routing agents, document intelligence, fraud detection and workflow automation for faster public-sector delivery.",
    accent: "PUBLIC AUTOMATION",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-02",
    code: "DOSSIER-02",
    title: "Government Software Development",
    body: "Build secure citizen portals, case management systems, eligibility engines, payment platforms and public-service dashboards for population-scale usage.",
    accent: "DIGITAL GOVERNMENT",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-03",
    code: "DOSSIER-03",
    title: "Governance, Risk & Trust",
    body: "Establish audit-ready AI governance, privacy controls, data residency, procurement compliance and secure delivery for public-sector scrutiny.",
    accent: "COMPLIANCE & TRUST",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-04",
    code: "DOSSIER-04",
    title: "Public Service Platforms",
    body: "Modernize citizen-facing services across identity, eligibility, permits, benefits, payments and grievance workflows with secure digital infrastructure.",
    accent: "CITIZEN SERVICES",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-05",
    code: "DOSSIER-05",
    title: "Government Data & AI Intelligence",
    body: "Unify department, identity, case, fraud, payment and service data into governed intelligence systems for faster decisions and measurable outcomes.",
    accent: "DATA INTELLIGENCE",
    channel: "CHANNEL A · LOCKED",
  },
];

const solutions = [
  {
    slug: "enterprise-copilot",
    href: "/solutions/enterprise-copilot",
    title: "Citizen Copilot",
    description:
      "Multilingual, voice-first assistant for licensing, benefits and grievance redressal.",
    metric: "62% deflection",
    icon: Sparkles,
  },
  {
    slug: "unified-data-fabric",
    href: "/solutions/unified-data-fabric",
    title: "Unified Citizen Fabric",
    description:
      "One identity, one ledger, one eligibility view across departments — with consent and lineage.",
    metric: "11M records unified",
    icon: Database,
  },
  {
    slug: "agent-operations",
    href: "/solutions/agent-operations",
    title: "Public Service Automation",
    description:
      "Agentic workflows across case triage, document AI and decision routing — with audit trails.",
    metric: "24/7 cadence",
    icon: Workflow,
  },
  {
    slug: "decision-intelligence",
    href: "/solutions/decision-intelligence",
    title: "Citizen Decision Intelligence",
    description:
      "Causal models for program impact, fraud detection and resource allocation across schemes.",
    metric: "4x faster outcomes",
    icon: BarChart3,
  },
  {
    slug: "legacy-modernization",
    href: "/solutions/legacy-modernization",
    title: "Legacy Modernization",
    description:
      "Mainframe → micro-services with zero-downtime, parallel-run migration playbooks.",
    metric: "0 unplanned downtime",
    icon: GitBranch,
  },
];

const architecture = {
  description:
    "A sovereign-grade reference architecture for the digital state — from citizen-facing channels down to the AI decision layer. Every layer is independently observable, auditable, and replaceable.",
  layers: [
    {
      title: "Citizens",
      subtitle: "Web, mobile, kiosk, voice, WhatsApp",
      icon: Users,
    },
    {
      title: "Digital Services",
      subtitle: "Portals, journeys, accessibility",
      icon: Globe2,
    },
    {
      title: "Workflow Layer",
      subtitle: "Case mgmt, eligibility, payments",
      icon: Stethoscope,
    },
    {
      title: "Enterprise Systems",
      subtitle: "ERP, CRM, document mgmt, ITSM",
      icon: Hospital,
    },
    {
      title: "Data Platform",
      subtitle: "Lakehouse, semantic graph, lineage",
      icon: Database,
    },
    {
      title: "AI Layer",
      subtitle: "LLMs, agents, evals, guardrails",
      icon: BrainCircuit,
    },
    {
      title: "Decision Intelligence",
      subtitle: "Causal models, policy simulators",
      icon: BarChart3,
    },
  ],
};

const ITEMS = [
  {
    icon: "Users",
    title: "Citizen Copilots",
    tagline: "Multilingual support for public services.",
    desc: "Voice-first and chat-based assistants that help citizens navigate licensing, benefits, grievances, payments, eligibility and service journeys.",
    metrics: ["62% deflection", "24/7 support", "Accessible"],
  },
  {
    icon: "GitBranch",
    title: "Public Service Automation",
    tagline: "AI workflows for faster case movement.",
    desc: "Agentic systems that support case triage, document verification, eligibility checks, routing, approvals and citizen follow-ups with audit trails.",
    metrics: ["Case routing", "Audit trails", "Human approval"],
  },
  {
    icon: "Briefcase",
    title: "Digital Government Platforms",
    tagline: "Secure systems for population-scale delivery.",
    desc: "Citizen portals, case management platforms, payment systems, document workflows and service dashboards built for public-sector reliability.",
    metrics: ["Sovereign-ready", "SLA tracked", "Secure delivery"],
  },
  {
    icon: "BrainCircuit",
    title: "Citizen Decision Intelligence",
    tagline: "Models for policy, fraud and outcomes.",
    desc: "AI systems that analyze program impact, fraud risk, resource allocation, service backlogs and policy outcomes for better government decisions.",
    metrics: ["Policy models", "Fraud signals", "Faster outcomes"],
  },
  {
    icon: "PhoneCall",
    title: "Voice Public Services",
    tagline: "Voice-first access for every citizen.",
    desc: "Voice agents for helplines, appointment booking, grievance updates, benefit status, document queries and structured citizen data capture.",
    metrics: ["Voice IVR", "Low latency", "Human handoff"],
  },
  {
    icon: "LayoutDashboard",
    title: "Government Command Centers",
    tagline: "One control plane for digital state operations.",
    desc: "Dashboards to monitor citizen services, case queues, AI agents, department workflows, service SLAs, fraud signals and public-sector outcomes.",
    metrics: ["Live visibility", "Outcome tracking", "Governance"],
  },
];

const ecosystem = [
    {
      group: "Standards",
      items: ["DPDP", "GDPR", "WCAG", "OpenAPI"],
    },
    {
      group: "Cloud",
      items: ["AWS GovCloud", "Azure Government", "GCP Sovereign", "Private Cloud"],
    },
    {
      group: "AI",
      items: ["Citizen LLMs", "Document AI", "Speech AI", "Agent supervisors"],
    },
    {
      group: "Security",
      items: ["Zero-Trust", "ISO 27001", "SOC 2 Type II", "Data Residency"],
    },
    {
      group: "Gov Systems",
      items: ["Identity", "Case Mgmt", "Eligibility", "Payments"],
    },
    {
      group: "Data",
      items: ["Lakehouse", "Semantic Graph", "Lineage", "Consent Ledger"],
    },
    {
      group: "Analytics",
      items: ["Power BI", "Tableau", "Causal ML", "Policy Simulators"],
    },
    {
      group: "Channels",
      items: ["Web", "Mobile", "Voice IVR", "WhatsApp"],
    },
  ];

const SERVICES = {
    aiAutomation: {
      slug: "ai-automation",
      title: "AI & Automation",
      description:
        "Citizen-service copilots, document AI, case-routing agents and workflow automation deployed across public-sector operations.",
      icon: BrainCircuit,
    },
  
    softwareDevelopment: {
      slug: "software-development",
      title: "Software Development",
      description:
        "Citizen portals, case management systems, payment platforms and public-service dashboards built for secure government delivery.",
      icon: Cpu,
    },
  
    enterpriseSystems: {
      slug: "enterprise-systems",
      title: "Enterprise Systems",
      description:
        "ERP, CRM, document management, identity, eligibility and ITSM integrations for connected government operations.",
      icon: Building2,
    },
  
    growthVisibility: {
      slug: "growth-visibility",
      title: "Public Impact Visibility",
      description:
        "Performance analytics, service dashboards and outcome intelligence that help agencies measure delivery and citizen impact.",
      icon: LineChart,
    },
  
    cloudData: {
      slug: "cloud-data",
      title: "Cloud, Data & DevSecOps",
      description:
        "Sovereign cloud foundations, government lakehouses, secure pipelines and audit-ready observability for public systems.",
      icon: Cloud,
    },
  
    governanceRisk: {
      slug: "governance-risk",
      title: "Governance, Risk & Trust",
      description:
        "AI governance, data residency, privacy controls, compliance engineering and resilience built for public-sector scrutiny.",
      icon: ShieldCheck,
    },
};

const SOLUTIONS = {
    enterpriseCopilot: {
      slug: "enterprise-copilot",
      title: "Citizen Copilot",
      description:
        "Multilingual, voice-first copilots for licensing, benefits, grievances, payments and service guidance.",
      metric: "62% deflection",
      icon: Sparkles,
    },
  
    unifiedDataFabric: {
      slug: "unified-data-fabric",
      title: "Unified Citizen Fabric",
      description:
        "One governed source of truth across identity, eligibility, departments, cases, payments and consent data.",
      metric: "11M records unified",
      icon: Database,
    },
  
    agentOperations: {
      slug: "agent-operations",
      title: "Public Service Automation",
      description:
        "Agentic workflows for case triage, document checks, decision routing, approvals and citizen follow-ups.",
      metric: "24/7 cadence",
      icon: Workflow,
    },
  
    decisionIntelligence: {
      slug: "decision-intelligence",
      title: "Citizen Decision Intelligence",
      description:
        "Closed-loop models for program impact, fraud detection, resource allocation and policy outcomes.",
      metric: "4x faster outcomes",
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
export default function GovernmentWrap() {
  return (
    <div>
      <IndustryHero
        hero={hero}
        name="Government"
        label="Public Sector"
        heroPrimaryCta="Get Proposal"
        heroSecondaryCta="Explore Capabilities"
      />
      <Narrative
        title={"Governments are becoming digital service providers."}
        description={[
          "Citizen expectations have changed. Legacy systems have not. The gap is widening every quarter — in case backlogs, in trust deficits, in the cost of delivering a single service.",
          "We rebuild the public sector backbone for AI-native delivery: sovereign infrastructure, identity, eligibility, payment, fraud and case management — all stitched into one operating model. Public servants get force-multipliers. Citizens get sub-minute outcomes.",
          "Across 18 country programs, our teams have shipped under audit, under scrutiny, and under SLA. Public results, confidential rosters.",
        ]}
        highlightTag={"INDUSTRY THESIS"}
        tagList={["01 — Thesis"]}
      />
      <IndustryChallenges challenges={challenges} name="Government" />
      <MissionDossierFan
        cards={DEFAULT_DOSSIER_CARDS}
        title="Five dossiers. One public-sector mission."
        subtitle="How we run a government engagement — from legacy modernization to trusted citizen services — as a fan of focused dossiers."
        badgeLabel={DEFAULT_DOSSIER_CARDS.length}
        eyebrow="PLAYBOOKS · MISSION DOSSIERS"
      />
      <IndustrySolutions solutions={solutions} />
      <IndustryArchitecture architecture={architecture} name={"Government"} />
      <BuildingNow
        highlightTag={"CURRENTLY IN PRODUCTION"}
        title={"What we are building for digital government"}
        description={
          "Six categories of public-sector intelligence systems, shipped into production — connecting citizens, services, workflows, data and AI."
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
      <IndustryEcosystem ecosystem={ecosystem} name={"Government"} />
      <IndustryRelated services={SERVICES} solutions={SOLUTIONS} />
      <IndustryCTA cta={cta} />
    </div>
  );
}
