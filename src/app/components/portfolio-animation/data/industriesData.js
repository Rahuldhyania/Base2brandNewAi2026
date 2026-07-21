export const slugify = (title) =>
    title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

export const industries = [
    {
        id: 1,
        code: "IND-01",
        title: "Healthcare",
        icon: "🏥",
        reports: 48,
        growth: "+12%",
        status: "Active",
        color: "from-cyan-500/10 via-cyan-500/5 to-transparent",
        trend: [30, 42, 55, 48, 65, 82, 95],
        tagline:
            "AI-powered diagnostics, patient experience and compliant health-tech infrastructure.",
        description:
            "Healthcare organisations are racing to adopt clinical copilots, imaging triage and intelligent revenue-cycle automation while staying compliant with HIPAA, GDPR and the EU AI Act. Our research tracks how providers, payers and digital health startups are operationalising AI without compromising trust.",
        stats: { marketSize: "$95B", cagr: "18.4%", aiAdoption: "62%" },
        focusAreas: [
            "Clinical AI Copilots",
            "Patient Data Platforms",
            "Interoperability (FHIR/HL7)",
            "Compliance & Governance",
        ],
        reportsList: [
            { title: "State of AI in Clinical Workflows 2026", type: "Benchmark Report", pages: 42, date: "Jun 2026" },
            { title: "Telehealth Platform Architecture Playbook", type: "Playbook", pages: 28, date: "May 2026" },
            { title: "HIPAA-Grade AI Governance Checklist", type: "Framework", pages: 16, date: "Apr 2026" },
            { title: "Revenue-Cycle Automation Case Study", type: "Case Study", pages: 12, date: "Mar 2026" },
            { title: "Imaging Triage: Buy vs. Build", type: "Deep Dive", pages: 24, date: "Feb 2026" },
        ],
    },
    {
        id: 2,
        code: "IND-02",
        title: "Finance",
        icon: "💳",
        reports: 36,
        growth: "+8%",
        status: "Growing",
        color: "from-violet-500/10 via-violet-500/5 to-transparent",
        trend: [22, 34, 48, 58, 52, 70, 82],
        tagline:
            "Risk intelligence, fraud graphs and AI copilots for underwriting and compliance teams.",
        description:
            "Banks, insurers and fintechs are embedding AI across underwriting, fraud detection and regulatory reporting. Our finance dossier benchmarks model risk management, real-time fraud graphs and the compliance stack needed to move fast without breaking audit trails.",
        stats: { marketSize: "$61B", cagr: "16.1%", aiAdoption: "58%" },
        focusAreas: [
            "Fraud Detection Graphs",
            "AI Underwriting Copilots",
            "Regulatory Reporting Fabric",
            "Model Risk Management",
        ],
        reportsList: [
            { title: "Fraud Graph Benchmarks 2026", type: "Benchmark Report", pages: 34, date: "Jun 2026" },
            { title: "AI Underwriting Copilot Playbook", type: "Playbook", pages: 22, date: "May 2026" },
            { title: "Model Risk Governance Framework", type: "Framework", pages: 18, date: "Apr 2026" },
            { title: "Real-Time Payments Case Study", type: "Case Study", pages: 14, date: "Mar 2026" },
        ],
    },
    {
        id: 3,
        code: "IND-03",
        title: "Retail",
        icon: "🛍️",
        reports: 29,
        growth: "+15%",
        status: "Trending",
        color: "from-emerald-500/10 via-emerald-500/5 to-transparent",
        trend: [18, 28, 36, 48, 62, 78, 88],
        tagline:
            "Assistant commerce, unified customer data and dynamic pricing at scale.",
        description:
            "Retailers are moving beyond recommendation engines into full assistant-led commerce — merging unified customer profiles, dynamic pricing and inventory intelligence into a single decision layer. This dossier covers what's working across D2C and omni-channel retail.",
        stats: { marketSize: "$44B", cagr: "21.3%", aiAdoption: "54%" },
        focusAreas: [
            "Conversational Commerce",
            "Unified Customer Data",
            "Dynamic Pricing Engines",
            "Inventory Forecasting AI",
        ],
        reportsList: [
            { title: "Conversational Commerce Benchmark 2026", type: "Benchmark Report", pages: 30, date: "Jun 2026" },
            { title: "Unified Customer Data Playbook", type: "Playbook", pages: 20, date: "May 2026" },
            { title: "Dynamic Pricing Case Study", type: "Case Study", pages: 12, date: "Apr 2026" },
        ],
    },
    {
        id: 4,
        code: "IND-04",
        title: "Manufacturing",
        icon: "🏭",
        reports: 18,
        growth: "+5%",
        status: "Active",
        color: "from-orange-500/10 via-orange-500/5 to-transparent",
        trend: [12, 18, 28, 36, 42, 55, 66],
        tagline:
            "Digital twins, OEE lifts and supply-chain decision graphs.",
        description:
            "Industry 4.0 initiatives are shifting from pilots to production, with digital twins and predictive maintenance driving measurable OEE gains. This report set covers deployment patterns for plant-floor AI and supply-chain resilience.",
        stats: { marketSize: "$38B", cagr: "13.7%", aiAdoption: "41%" },
        focusAreas: [
            "Digital Twin Simulation",
            "Predictive Maintenance",
            "Supply-Chain Decision Graphs",
            "OEE Optimisation",
        ],
        reportsList: [
            { title: "Digital Twin Adoption Report 2026", type: "Benchmark Report", pages: 26, date: "Jun 2026" },
            { title: "Predictive Maintenance Playbook", type: "Playbook", pages: 19, date: "Apr 2026" },
            { title: "Supply-Chain Resilience Case Study", type: "Case Study", pages: 11, date: "Feb 2026" },
        ],
    },
    {
        id: 5,
        code: "IND-05",
        title: "Education",
        icon: "🎓",
        reports: 24,
        growth: "+9%",
        status: "Growing",
        color: "from-sky-500/10 via-sky-500/5 to-transparent",
        trend: [20, 32, 46, 54, 63, 76, 86],
        tagline:
            "Adaptive learning, tutoring copilots and admissions intelligence.",
        description:
            "EdTech platforms and institutions are deploying adaptive learning paths and AI tutoring copilots to personalise outcomes at scale. Our education dossier tracks engagement lifts, LMS integrations and responsible-AI guardrails for learners.",
        stats: { marketSize: "$27B", cagr: "19.8%", aiAdoption: "49%" },
        focusAreas: [
            "Adaptive Learning Paths",
            "AI Tutoring Copilots",
            "LMS Integrations",
            "Admissions Intelligence",
        ],
        reportsList: [
            { title: "Adaptive Learning Benchmark 2026", type: "Benchmark Report", pages: 24, date: "May 2026" },
            { title: "AI Tutoring Copilot Playbook", type: "Playbook", pages: 17, date: "Apr 2026" },
            { title: "LMS Integration Case Study", type: "Case Study", pages: 10, date: "Mar 2026" },
        ],
    },
    {
        id: 6,
        code: "IND-06",
        title: "Logistics",
        icon: "🚚",
        reports: 21,
        growth: "+7%",
        status: "Monitoring",
        color: "from-amber-500/10 via-amber-500/5 to-transparent",
        trend: [16, 22, 34, 46, 54, 60, 72],
        tagline:
            "Route intelligence, fleet automation and real-time visibility.",
        description:
            "Logistics networks are layering AI over route planning, fleet telematics and warehouse robotics to squeeze out latency and cost. This dossier benchmarks real-time visibility platforms and last-mile automation.",
        stats: { marketSize: "$33B", cagr: "14.9%", aiAdoption: "37%" },
        focusAreas: [
            "Route Intelligence",
            "Fleet Telematics AI",
            "Warehouse Robotics",
            "Real-Time Visibility",
        ],
        reportsList: [
            { title: "Route Intelligence Benchmark 2026", type: "Benchmark Report", pages: 21, date: "May 2026" },
            { title: "Fleet Automation Playbook", type: "Playbook", pages: 16, date: "Mar 2026" },
            { title: "Warehouse Robotics Case Study", type: "Case Study", pages: 9, date: "Jan 2026" },
        ],
    },
    {
        id: 7,
        code: "IND-07",
        title: "Real Estate",
        icon: "🏢",
        reports: 17,
        growth: "+6%",
        status: "Active",
        color: "from-pink-500/10 via-pink-500/5 to-transparent",
        trend: [10, 18, 28, 36, 42, 50, 60],
        tagline:
            "Valuation models, virtual tours and property management copilots.",
        description:
            "Proptech is combining AI valuation models with immersive virtual tours and copilots for property management teams. This report set covers underwriting accuracy, lead scoring and tenant-experience automation.",
        stats: { marketSize: "$19B", cagr: "12.2%", aiAdoption: "33%" },
        focusAreas: [
            "AI Valuation Models",
            "Virtual Tour Platforms",
            "Lead Scoring",
            "Tenant Experience Copilots",
        ],
        reportsList: [
            { title: "AI Valuation Accuracy Report 2026", type: "Benchmark Report", pages: 18, date: "Apr 2026" },
            { title: "Property Management Copilot Playbook", type: "Playbook", pages: 14, date: "Feb 2026" },
        ],
    },
    {
        id: 8,
        code: "IND-08",
        title: "Travel",
        icon: "✈️",
        reports: 14,
        growth: "+10%",
        status: "Trending",
        color: "from-indigo-500/10 via-indigo-500/5 to-transparent",
        trend: [15, 25, 34, 44, 58, 70, 84],
        tagline:
            "Dynamic itineraries, demand forecasting and traveler service copilots.",
        description:
            "Travel and hospitality brands are personalising itineraries in real time while using AI demand forecasting to manage pricing and inventory. This dossier tracks conversational booking assistants and loyalty-driven personalisation.",
        stats: { marketSize: "$22B", cagr: "17.6%", aiAdoption: "45%" },
        focusAreas: [
            "Dynamic Itinerary AI",
            "Demand Forecasting",
            "Conversational Booking",
            "Loyalty Personalisation",
        ],
        reportsList: [
            { title: "Dynamic Itinerary Benchmark 2026", type: "Benchmark Report", pages: 16, date: "May 2026" },
            { title: "Demand Forecasting Playbook", type: "Playbook", pages: 13, date: "Mar 2026" },
        ],
    },
];

export const industriesWithSlug = industries.map((item) => ({
    ...item,
    slug: slugify(item.title),
}));

export function getIndustryBySlug(slug) {
    return industriesWithSlug.find((item) => item.slug === slug) || null;
}

export function getRelatedIndustries(slug, count = 4) {
    return industriesWithSlug.filter((item) => item.slug !== slug).slice(0, count);
}
