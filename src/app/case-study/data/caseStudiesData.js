export const CASE_STUDIES = [
  {
    id: "case-01",
    slug: "orbit-underwriting-stack",
    n: "CASE 01",
    tag: "Applied AI risk · Tier-1 BFSI, Asia-Pacific",
    title: "Reimagining underwriting with a multi-agent decision stack.",
    subtitle: "From manual review queues to autonomous risk orchestration.",
    metrics: [
      { v: "61%", l: "drop in turnaround" },
      { v: "$28M", l: "annualised lift" },
    ],
    url: "orbit-underwriting.b2b/case",
    preview: {
      accent: "#F47B52",
      title: "Orbit Decision Fabric - Underwriting Console",
      lines: [
        { label: "Applicants scored today", value: "12,481" },
        { label: "Auto-approved", value: "76.3%" },
        { label: "Escalated to underwriter", value: "9.1%" },
      ],
      screenshot:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    },
    detail: {
      client: "Tier-1 Banking Group, APAC",
      timeline: "22 weeks",
      engagementModel: "Discovery + Build + MLOps rollout",
      challenge:
        "Underwriters were handling high volume submissions with fragmented risk signals across multiple systems. SLA breaches were increasing and premium leakage was difficult to detect in time.",
      solution:
        "We implemented a multi-agent decision fabric that scored, routed, explained, and continuously learned from final outcomes. A human-in-loop guardrail remained for edge scenarios.",
      impact: [
        { label: "Decision turnaround", value: "-61%" },
        { label: "Annualized business lift", value: "$28M" },
        { label: "False positives", value: "-33%" },
      ],
      capabilities: [
        "Agentic triage workflow",
        "Risk feature store with streaming events",
        "Policy simulator for underwriter overrides",
        "Real-time decision observability dashboards",
      ],
      architecture: [
        {
          phase: "01",
          title: "Signal Unification",
          description:
            "Merged credit, behavioral, and claims telemetry into a governed feature layer.",
        },
        {
          phase: "02",
          title: "Decision Agents",
          description:
            "Specialized agents for fraud, affordability, and policy-fit worked under a coordination agent.",
        },
        {
          phase: "03",
          title: "Production Guardrails",
          description:
            "Rollout with shadow mode, confidence thresholds, and analyst override feedback loops.",
        },
      ],
      heroImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      ],
    },
  },
  {
    id: "case-02",
    slug: "citizen-services-ai-platform",
    n: "CASE 02",
    tag: "Govtech modernization · Public Healthcare Authority EU",
    title: "An AI-native citizen services platform across 11 regions.",
    subtitle: "Unified workflows for intake, routing, and resolution.",
    metrics: [
      { v: "9.4M", l: "citizens onboarded" },
      { v: "-42%", l: "case backlog" },
    ],
    url: "citizens.hs-eu.gov/live",
    preview: {
      accent: "#7BC5D9",
      title: "Citizen Services - Regional Overview",
      lines: [
        { label: "Live requests", value: "3,204" },
        { label: "Median resolution", value: "38 min" },
        { label: "Backlog vs. Q2", value: "-42%" },
      ],
      screenshot:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    },
    detail: {
      client: "Public Healthcare Authority, EU",
      timeline: "7 months",
      engagementModel: "Platform modernization partnership",
      challenge:
        "Regional teams used separate systems for request intake, document verification, and status communication, causing high backlog and inconsistent citizen experience.",
      solution:
        "We introduced an AI-native service orchestration platform with multilingual intake, policy-aware routing, and region-level operations visibility.",
      impact: [
        { label: "Citizens onboarded", value: "9.4M" },
        { label: "Backlog reduction", value: "-42%" },
        { label: "Median resolution", value: "38 min" },
      ],
      capabilities: [
        "Multilingual AI form intake",
        "Priority scoring and smart assignment",
        "Cross-region SLA command center",
        "Automated citizen status notifications",
      ],
      architecture: [
        {
          phase: "01",
          title: "Unified Intake Layer",
          description:
            "Normalized digital and assisted submissions into one schema with validation.",
        },
        {
          phase: "02",
          title: "Policy-Aware Routing",
          description:
            "Routed cases using region policies, load balancing, and urgency scoring.",
        },
        {
          phase: "03",
          title: "Operations Intelligence",
          description:
            "Introduced analytics views for backlog risk, throughput, and staffing needs.",
        },
      ],
      heroImage:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
      ],
    },
  },
  {
    id: "case-03",
    slug: "supply-graph-digital-twin",
    n: "CASE 03",
    tag: "Industry 4.0 data · Global Manufacturer",
    title: "Digital twin of the entire supply chain, decision-graph driven.",
    subtitle: "Plant-to-port optimization with live constraint simulation.",
    metrics: [
      { v: "17%", l: "OEE improvement" },
      { v: "-$54M", l: "inventory carry" },
    ],
    url: "twin.acme-global.io",
    preview: {
      accent: "#F47B52",
      title: "SupplyGraph Twin - Global Ops",
      lines: [
        { label: "Nodes online", value: "1,204 / 1,206" },
        { label: "Throughput (24h)", value: "+17.4%" },
        { label: "Alerts", value: "6 active" },
      ],
      screenshot:
        "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1400&q=80",
    },
    detail: {
      client: "Global Industrial Manufacturer",
      timeline: "6 months",
      engagementModel: "Data platform + decision intelligence",
      challenge:
        "Factories were optimized in isolation, creating downstream bottlenecks in logistics and inventory carrying costs.",
      solution:
        "A digital twin with decision graph simulation now predicts network constraints and recommends corrective actions before disruptions propagate.",
      impact: [
        { label: "OEE improvement", value: "+17%" },
        { label: "Inventory carrying cost", value: "-$54M" },
        { label: "Cross-region OTIF", value: "+11%" },
      ],
      capabilities: [
        "Factory and logistics twin modeling",
        "Constraint-aware production planning",
        "Exception recommendation engine",
        "Executive-level scenario simulator",
      ],
      architecture: [
        {
          phase: "01",
          title: "Data Graph Foundation",
          description:
            "Connected ERP, MES, WMS, and carrier feeds into a graph-native model.",
        },
        {
          phase: "02",
          title: "Simulation Core",
          description:
            "Added forward simulation for demand spikes, downtime, and route delays.",
        },
        {
          phase: "03",
          title: "Decision Automation",
          description:
            "Automated recommendations with confidence scoring and planner approvals.",
        },
      ],
      heroImage:
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=80",
      ],
    },
  },
  {
    id: "case-04",
    slug: "d2c-growth-engine-rebuild",
    n: "CASE 04",
    tag: "Ecommerce growth · D2C brand, North America",
    title: "From store experience to paid campaigns - a full growth engine rebuild.",
    subtitle: "Commerce + lifecycle + paid in one measurable stack.",
    metrics: [
      { v: "5.2X", l: "ROAS achieved" },
      { v: "+41%", l: "revenue growth" },
    ],
    url: "growth.d2c-brand.io/live",
    preview: {
      accent: "#00e6ff",
      title: "Growth Console - Performance Overview",
      lines: [
        { label: "Monthly revenue", value: "+41%" },
        { label: "Conversion rate", value: "3.8%" },
        { label: "Repeat purchase", value: "+28%" },
      ],
      screenshot:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
    },
    detail: {
      client: "D2C Lifestyle Brand, North America",
      timeline: "18 weeks",
      engagementModel: "Growth sprint + retention automation",
      challenge:
        "Performance marketing returns were flattening because landing flows, offer strategy, and retention journeys were disconnected.",
      solution:
        "We rebuilt the acquisition-to-retention flow with storefront CRO, media account redesign, and lifecycle automation tied to margin-aware cohorts.",
      impact: [
        { label: "ROAS", value: "5.2X" },
        { label: "Revenue growth", value: "+41%" },
        { label: "Repeat rate", value: "+28%" },
      ],
      capabilities: [
        "Funnel and landing page system",
        "Creative and campaign governance",
        "Cohort-based retention journeys",
        "Real-time profitability dashboards",
      ],
      architecture: [
        {
          phase: "01",
          title: "Funnel Reconstruction",
          description:
            "Prioritized high-intent pathways with faster mobile checkout experiences.",
        },
        {
          phase: "02",
          title: "Media System Reset",
          description:
            "Rebuilt account architecture with audience tiers and creative testing loops.",
        },
        {
          phase: "03",
          title: "Lifecycle Compounding",
          description:
            "Automated post-purchase sequences and replenishment nudges by SKU behavior.",
        },
      ],
      heroImage:
        "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=1800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      ],
    },
  },
  {
    id: "case-05",
    slug: "healthcare-patient-acquisition-system",
    n: "CASE 05",
    tag: "Healthcare automation · Multi-clinic network",
    title: "Connected lead capture, WhatsApp follow-up, and CRM into one acquisition system.",
    subtitle: "Speed-to-response became the growth moat.",
    metrics: [
      { v: "61%", l: "faster response time" },
      { v: "+39%", l: "qualified leads" },
    ],
    url: "acquire.health-network.io",
    preview: {
      accent: "#7BC5D9",
      title: "Patient Acquisition - Live Pipeline",
      lines: [
        { label: "Leads today", value: "847" },
        { label: "Avg. response", value: "4.2 min" },
        { label: "Qualified rate", value: "+39%" },
      ],
      screenshot:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    },
    detail: {
      client: "Multi-clinic Healthcare Network",
      timeline: "14 weeks",
      engagementModel: "Acquisition operations transformation",
      challenge:
        "Inbound leads were leaking due to delayed callbacks, non-standard follow-up, and poor CRM hygiene.",
      solution:
        "Built a connected system from ad leads to intake teams with WhatsApp automation, smart lead scoring, and branch-level SLA accountability.",
      impact: [
        { label: "Faster response time", value: "61%" },
        { label: "Qualified leads", value: "+39%" },
        { label: "Appointment show rate", value: "+23%" },
      ],
      capabilities: [
        "Omnichannel lead ingestion",
        "SLA-aware lead assignment",
        "Automated WhatsApp workflows",
        "Clinic and campaign performance cockpit",
      ],
      architecture: [
        {
          phase: "01",
          title: "Lead Plumbing",
          description:
            "Connected paid media, forms, and call channels into a single event stream.",
        },
        {
          phase: "02",
          title: "Response Automation",
          description:
            "Triggered personalized instant follow-up and branch-specific routing logic.",
        },
        {
          phase: "03",
          title: "Quality Control",
          description:
            "Added scorecards and call outcome analytics for continuous coaching.",
        },
      ],
      heroImage:
        "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
      ],
    },
  },
];

export function getCaseStudyBySlug(slug) {
  return CASE_STUDIES.find((study) => study.slug === slug);
}

export const CASE_STUDIES_API_SEED = {
  updatedAt: "2026-07-21T00:00:00.000Z",
  items: CASE_STUDIES.map((study) => ({
    id: study.id,
    slug: study.slug,
    title: study.title,
    subtitle: study.subtitle,
    tag: study.tag,
    metrics: study.metrics,
    url: study.url,
    preview: {
      accent: study.preview.accent,
      title: study.preview.title,
      lines: study.preview.lines,
      screenshot: study.preview.screenshot,
    },
    detail: study.detail,
  })),
};
