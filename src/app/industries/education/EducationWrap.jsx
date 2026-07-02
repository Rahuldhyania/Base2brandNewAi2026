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
import MobileCardCarousel from "@/components/ui/mobile-card-carousel";
import { DeferredRocketScrollNavigator } from "@/components/layout/DeferredRocketScrollNavigator";
// import IndustrySolutions from "@/components/Industries/industry/IndustrySolutions";

const hero = {
  headline: "Learning that adapts to the learner — and the labour market.",
  description:
    "We build adaptive learning platforms, skill graphs and institution operating systems for ministries, universities and large skilling networks. Outcomes that hold up against employment data, not just LMS analytics.",
  ctas: {
    primary: { label: "Get Proposal", to: "/contact" },
    secondary: { label: "Explore Capabilities", to: "/services" },
  },
  metrics: [
    { value: "44%", label: "Completion ↑" },
    { value: "3x", label: "Faculty Productivity" },
    { value: "99.9%", label: "Platform Availability" },
    { value: "24/7", label: "Learner Support" },
  ],
  nodes: [
    { label: "Skills", angle: 280, ring: 2 },
    { label: "AI", angle: 340, ring: 3 },
    { label: "Learners", angle: 20, ring: 3 },
    { label: "Outcomes", angle: 70, ring: 2 },
    { label: "Faculty", angle: 120, ring: 1 },
    { label: "LMS", angle: 200, ring: 1 },
  ],
};

const challenges = [
  {
    icon: DatabaseZap,
    title: "Static Curricula",
    description:
      "Slow curriculum cycles cannot keep up with shifting industry skill demand.",
  },
  {
    icon: Stethoscope,
    title: "Learner Drop-Off",
    description:
      "High drop-off in MOOC and skilling cohorts without adaptive guidance.",
  },
  {
    icon: ShieldCheck,
    title: "Fragmented Learner Data",
    description: "LMS, assessment, attendance and outcomes data unlinked.",
  },
  {
    icon: ClipboardList,
    title: "Faculty Bandwidth",
    description:
      "Faculty stretched across teaching, research and administration — no force multipliers.",
  },
  {
    icon: BadgeDollarSign,
    title: "Compliance + Privacy",
    description:
      "Minors' data and consent regimes layer on top of academic policy.",
  },
  {
    icon: Microscope,
    title: "Industry Alignment",
    description:
      "Skill graphs and industry demand still bridged by tribal knowledge, not data.",
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
    title: "AI & Adaptive Learning",
    body: "Deploy AI tutors, adaptive learning paths, assessment copilots, and learner-support agents that personalize education while improving completion and engagement.",
    accent: "ADAPTIVE INTELLIGENCE",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-02",
    code: "DOSSIER-02",
    title: "Education Software Development",
    body: "Build secure LMS platforms, student portals, faculty dashboards, assessment systems, and skilling platforms designed for universities and training networks.",
    accent: "DIGITAL LEARNING",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-03",
    code: "DOSSIER-03",
    title: "Governance, Risk & Trust",
    body: "Create responsible AI, privacy controls, consent workflows, academic policy alignment, and audit-ready systems for minors, institutions, and public education bodies.",
    accent: "COMPLIANCE & TRUST",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-04",
    code: "DOSSIER-04",
    title: "Shopify Education Commerce",
    body: "Launch Shopify experiences for courses, learning products, certifications, digital resources, books, training kits, and education-led commerce journeys.",
    accent: "LEARNING COMMERCE",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-05",
    code: "DOSSIER-05",
    title: "Education Data & AI Intelligence",
    body: "Unify LMS, assessment, attendance, placement, skill and outcome data into AI-powered dashboards, learner insights, and employability intelligence systems.",
    accent: "DATA INTELLIGENCE",
    channel: "CHANNEL A · LOCKED",
  },
];

const solutions = [
  {
    slug: "enterprise-copilot",
    href: "/solutions/enterprise-copilot",
    title: "Learner Copilot",
    description: "Adaptive, multilingual tutor grounded in your curriculum.",
    metric: "44% completion ↑",
    icon: Sparkles,
  },
  {
    slug: "unified-data-fabric",
    href: "/solutions/unified-data-fabric",
    title: "Skill Graph Fabric",
    description: "Learner, curriculum and industry-skill graphs unified.",
    metric: "12 systems unified",
    icon: Database,
  },
  {
    slug: "agent-operations",
    href: "/solutions/agent-operations",
    title: "Institution Operations",
    description:
      "Agentic workflows across admissions, accreditation and assessment.",
    metric: "3x throughput",
    icon: Workflow,
  },
  {
    slug: "decision-intelligence",
    href: "/solutions/decision-intelligence",
    title: "Outcomes Intelligence",
    description:
      "Causal models tying interventions to learner and employability outcomes.",
    metric: "4x decision speed",
    icon: BarChart3,
  },
];

const architecture = {
  description:
    "An institution operating system stack — from learner touchpoints to AI tutors, skill graphs and employability dashboards.",
  layers: [
    {
      title: "Learners",
      subtitle: "Web, mobile, kiosk, voice",
      icon: Users,
    },
    {
      title: "Learning Channels",
      subtitle: "LMS, classroom, MOOC",
      icon: Globe2,
    },
    {
      title: "Education Workflow",
      subtitle: "Assessment, attendance, accreditation",
      icon: Stethoscope,
    },
    {
      title: "Enterprise Systems",
      subtitle: "SIS, ERP, finance, HR",
      icon: Hospital,
    },
    {
      title: "Data Platform",
      subtitle: "Skill graph, outcomes fabric",
      icon: Database,
    },
    {
      title: "AI Layer",
      subtitle: "Tutors, assessment, agent supervisors",
      icon: BrainCircuit,
    },
    {
      title: "Decision Intelligence",
      subtitle: "Outcome + employability models",
      icon: BarChart3,
    },
  ],
};

const ITEMS = [
  {
    icon: "Users",
    title: "Learner Copilots",
    tagline: "Personalized AI support for every learner.",
    desc: "Adaptive tutors that guide learners through lessons, doubts, assessments and revision paths — grounded in your curriculum and learning outcomes.",
    metrics: ["24/7 support", "Curriculum grounded", "Multilingual"],
  },
  {
    icon: "GitBranch",
    title: "Institution Operations Agents",
    tagline: "AI workflows for academic operations.",
    desc: "Agentic systems that support admissions, attendance, accreditation, assessment, scheduling and learner follow-ups across institutions.",
    metrics: ["Workflow routing", "Admin automation", "Human approval"],
  },
  {
    icon: "Briefcase",
    title: "Skill Graph Platforms",
    tagline: "Connecting curriculum with labour demand.",
    desc: "Unified skill graphs that map courses, learners, assessments and industry requirements to improve employability and outcome tracking.",
    metrics: ["Skill mapping", "Outcome linked", "Industry aligned"],
  },
  {
    icon: "BrainCircuit",
    title: "Outcomes Intelligence",
    tagline: "Decision systems for measurable learning.",
    desc: "AI models that analyze learner progress, drop-off risk, intervention impact and employability outcomes to help institutions act faster.",
    metrics: ["Drop-off signals", "Outcome models", "Decision speed"],
  },
  {
    icon: "PhoneCall",
    title: "Voice Learning Support",
    tagline: "Voice-first help for learners and teams.",
    desc: "Voice agents for student support, course queries, reminders, counselling flows, assessment updates and structured data capture.",
    metrics: ["Voice support", "Low latency", "Handoff ready"],
  },
  {
    icon: "LayoutDashboard",
    title: "Education Command Centers",
    tagline: "One control plane for learning performance.",
    desc: "Unified dashboards to monitor learner progress, faculty productivity, course performance, interventions, AI agents and employability outcomes.",
    metrics: ["Live dashboards", "Outcome tracking", "Governance"],
  },
];

const ecosystem = [
  {
    group: "Cloud",
    items: ["AWS", "Azure", "GCP", "Sovereign cloud"],
  },
  {
    group: "AI",
    items: ["LLMs", "AI Tutors", "Assessment AI", "Speech AI"],
  },
  {
    group: "Data",
    items: ["Lakehouse", "Skill graph", "Lineage", "Causal ML"],
  },
  {
    group: "Security",
    items: ["FERPA", "GDPR", "DPDP", "ISO 27001"],
  },
  {
    group: "LMS / SIS",
    items: ["Moodle", "Canvas", "Custom LMS", "PeopleSoft"],
  },
  {
    group: "ERP",
    items: ["SAP", "Oracle", "Workday", "ServiceNow"],
  },
  {
    group: "Analytics",
    items: ["Power BI", "Tableau", "Looker", "Causal ML"],
  },
  {
    group: "Channels",
    items: ["Web", "Mobile / PWA", "Voice IVR", "Kiosk"],
  },
];

const SERVICES = {
  aiAutomation: {
    slug: "ai-automation",
    title: "AI & Automation",
    description:
      "AI tutors, assessment copilots, learner-support agents and workflow automation for institutions, universities and skilling networks.",
    icon: BrainCircuit,
  },

  softwareDevelopment: {
    slug: "software-development",
    title: "Software Development",
    description:
      "LMS platforms, student portals, faculty dashboards and assessment systems built for scale, privacy and measurable learning outcomes.",
    icon: Cpu,
  },

  enterpriseSystems: {
    slug: "enterprise-systems",
    title: "Enterprise Systems",
    description:
      "SIS, ERP, LMS and HR integrations that connect learner records, academic workflows, finance and institution operations.",
    icon: Building2,
  },

  cloudData: {
    slug: "cloud-data",
    title: "Cloud, Data & DevSecOps",
    description:
      "Secure cloud foundations, education lakehouses, skill graphs and privacy-first data pipelines for modern learning systems.",
    icon: Cloud,
  },
};

const SOLUTIONS = {
  enterpriseCopilot: {
    slug: "enterprise-copilot",
    title: "Learner Copilot",
    description:
      "Adaptive, multilingual AI tutors grounded in your curriculum, assessments and learner support workflows.",
    metric: "44% completion lift",
    icon: Sparkles,
  },

  unifiedDataFabric: {
    slug: "unified-data-fabric",
    title: "Skill Graph Fabric",
    description:
      "One governed source of truth across learners, curriculum, skills, assessments and employability outcomes.",
    metric: "12 systems unified",
    icon: Database,
  },

  agentOperations: {
    slug: "agent-operations",
    title: "Institution Operations",
    description:
      "Agentic workflows across admissions, attendance, accreditation, assessment and learner follow-ups.",
    metric: "3x throughput",
    icon: Workflow,
  },

  decisionIntelligence: {
    slug: "decision-intelligence",
    title: "Outcomes Intelligence",
    description:
      "Causal models that connect learning interventions to completion, performance and employability outcomes.",
    metric: "4x decision speed",
    icon: BarChart3,
  },
};

const cta = {
  headline: "Tell us the hardest learning problem you've postponed.",
  description:
    "A senior partner replies within 24 hours with a tangible plan, modelled on your curriculum, cohort and policy reality.",
  primary: { label: "Get Proposal", to: "#" },
  secondary: { label: "Talk to a Partner", to: "#" },
};

const EDUCATION_MODULES = [
  {
    id: "admissions",
    label: "Admissions",
    desc: "Applications, enquiries, enrollment",
    iconName: "users",
    angle: 0,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "students",
    label: "Students",
    desc: "Profiles, records, progress",
    iconName: "users",
    angle: 45,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "courses",
    label: "Courses",
    desc: "Programs, curriculum, batches",
    iconName: "boxes",
    angle: 90,
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "learning",
    label: "Learning",
    desc: "Classes, lessons, assignments",
    iconName: "analytics",
    angle: 135,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "fees",
    label: "Fees",
    desc: "Payments, invoices, receipts",
    iconName: "wallet",
    angle: 180,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "faculty",
    label: "Faculty",
    desc: "Teachers, schedules, workload",
    iconName: "userCog",
    angle: 225,
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "assessment",
    label: "Assessment",
    desc: "Exams, grades, performance",
    iconName: "barChart",
    angle: 270,
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1280&h=800&fit=crop&q=80",
  },
  {
    id: "analytics",
    label: "Analytics",
    desc: "Reports, insights, outcomes",
    iconName: "barChart",
    angle: 315,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&h=800&fit=crop&q=80",
  },
];

const EDUCATION_MODULE_SCROLL_ORDER = [
  "assessment",
  "analytics",
  "admissions",
  "students",
  "courses",
  "learning",
  "fees",
  "faculty",
];

const SECTIONS_ROCKET = [
  { id: "hero", label: "Education & Skilling" },
  { id: "narrative-section", label: "Industry Thesis " },
  { id: "challenges", label: "Challenges" },
  { id: "mission-dossier", label: "Mission Dossier" },
  { id: "solutions", label: "Solutions" },
  { id: "voices", label: "Voices of Success" },
  { id: "architecture", label: "Architecture" },
  { id: "building-now-section", label: "Building Now Section" },
  { id: "wheel-ring", label: "Modules" },
  { id: "ecosystem", label: "Technology Ecosystem" },
  { id: "related", label: "Related Services" },
  { id: "cta", label: "Start a Transformation" },
];
export default function EducationWrap() {
  return (
    <div>
      <DeferredRocketScrollNavigator sections={SECTIONS_ROCKET } />
      
      <IndustryHero
        hero={hero}
        name="Education"
        label="Education & Skilling"
        heroPrimaryCta="Get Proposal"
        heroSecondaryCta="Explore Capabilities"
      />
      <Narrative
        title={
          "Education systems are being asked to deliver employability, not just credentials."
        }
        description={[
          "Universities, ministries and skilling networks all face the same gap: outcomes must now align with shifting labour markets, with shorter feedback loops than the academic year.",
          "We help institutions ship adaptive learning, AI tutors and skill graphs that link to industry. The platform is one. The pedagogy is yours. The outcomes are measurable.",
        ]}
        highlightTag={"INDUSTRY THESIS"}
        tagList={["01 — Thesis"]}
      />
      <IndustryChallenges challenges={challenges} name="Education" />
      <MissionDossierFan
        cards={DEFAULT_DOSSIER_CARDS}
        title="Five dossiers. One education mission."
        subtitle="How we run an education engagement — from learner experience to employability outcomes — as a fan of focused dossiers."
        badgeLabel={DEFAULT_DOSSIER_CARDS.length}
        eyebrow="PLAYBOOKS · MISSION DOSSIERS"
      />
      <IndustrySolutions solutions={solutions} />
      <IndustryArchitecture architecture={architecture} name={"Education"} />
      <BuildingNow
        highlightTag={"CURRENTLY IN PRODUCTION"}
        title={"What we are building for education systems"}
        description={
          "Six categories of education intelligence systems, shipped into production — connecting learners, faculty, workflows, skill graphs and AI as you scroll."
        }
        ITEMS={ITEMS}
      />
      <div className="hidden md:block" id="wheel-ring">
        <Modules
          title={
            <>
              Education ecosystem.{" "}
              <span className="text-brand">One digital campus.</span>
            </>
          }
          description="Unify admissions, students, courses, learning, fees, faculty, assessments, and analytics into one connected education management system."
          modules={EDUCATION_MODULES}
          scrollOrder={EDUCATION_MODULE_SCROLL_ORDER}
        />
      </div>


      {/* <div className="md:hidden">
        <MobileCardCarousel
          cards={EDUCATION_MODULES}
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
      <IndustryEcosystem ecosystem={ecosystem} name={"Education"} />
      <IndustryRelated services={SERVICES} solutions={SOLUTIONS} />
      <IndustryCTA cta={cta} />
    </div>
  );
}
