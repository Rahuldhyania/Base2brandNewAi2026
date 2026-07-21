export const categories = [
    "All",
    "AI",
    "Cloud",
    "Automation",
    "Governance",
    "Enterprise",
    "Strategy",
];

export const projects = [
    {
        id: 1,
        title: "Enterprise Copilot for Sales",
        category: "AI",
        description:
            "Domain‑specific RAG copilot deployed in VPC, reducing handle time by 38%.",
        image: "https://picsum.photos/seed/sales/600/400",
        gallery: [
            "https://picsum.photos/seed/sales-1/1200/800",
            "https://picsum.photos/seed/sales-2/1200/800",
            "https://picsum.photos/seed/sales-3/1200/800",
        ],
        slug: "enterprise-copilot-sales",
        client: "Global SaaS Enterprise",
        year: "2026",
        duration: "4 months",
        teamSize: "6 specialists",
        role: "AI Engineering & Platform Delivery",
        liveUrl: "https://base2brand.com",
        tags: ["RAG", "Sales AI", "Enterprise Copilot", "VPC Deployment"],
        techStack: ["LangChain", "pgvector", "OpenAI", "AWS VPC", "FastAPI"],
        challenge:
            "The client's sales team was losing hours every day digging through CRM notes, call transcripts and product docs to answer prospect questions — slowing deal velocity across a 400-person sales org.",
        solution:
            "We deployed a domain-specific retrieval-augmented copilot inside the client's own VPC, indexing CRM data, transcripts and product knowledge with strict data-residency controls, and surfaced it directly inside their existing sales tools.",
        approach: [
            {
                phase: "01",
                title: "Discovery & Data Audit",
                description:
                    "Mapped every CRM field, transcript source and knowledge base the sales team actually relied on, and flagged data-residency constraints upfront.",
            },
            {
                phase: "02",
                title: "RAG Architecture Design",
                description:
                    "Designed a retrieval pipeline with domain-tuned chunking and re-ranking, deployed entirely inside the client's private VPC.",
            },
            {
                phase: "03",
                title: "Copilot Integration",
                description:
                    "Embedded the copilot directly into the existing CRM and call-review tools so reps never had to leave their workflow.",
            },
            {
                phase: "04",
                title: "Rollout & Adoption",
                description:
                    "Ran a phased rollout across regions with in-product usage analytics to drive adoption past 90% within two months.",
            },
        ],
        features: [
            "Real-time CRM & transcript retrieval",
            "In-VPC deployment with zero data egress",
            "Inline citations for every answer",
            "Usage analytics dashboard for sales ops",
        ],
        testimonial: {
            quote:
                "Reps stopped context-switching between five tools. The copilot just knows what they need, when they need it.",
            author: "VP of Revenue Operations",
            role: "Global SaaS Enterprise",
        },
        results: [
            { value: "38%", label: "Reduction in handle time" },
            { value: "2.3x", label: "Faster deal research" },
            { value: "94%", label: "Rep adoption in 60 days" },
        ],
    },
    {
        id: 2,
        title: "Multi‑Cloud Data Platform",
        category: "Cloud",
        description:
            "Unified data warehouse across AWS and Azure with zero‑trust security.",
        image: "https://picsum.photos/seed/cloud/600/400",
        gallery: [
            "https://picsum.photos/seed/cloud-1/1200/800",
            "https://picsum.photos/seed/cloud-2/1200/800",
            "https://picsum.photos/seed/cloud-3/1200/800",
        ],
        slug: "multi-cloud-data-platform",
        client: "Fortune 500 Logistics Group",
        year: "2025",
        duration: "7 months",
        teamSize: "9 specialists",
        role: "Cloud Architecture & Data Engineering",
        liveUrl: null,
        tags: ["Multi-Cloud", "Zero Trust", "Data Warehouse", "AWS", "Azure"],
        techStack: ["AWS", "Azure", "Terraform", "Snowflake", "dbt"],
        challenge:
            "Years of M&A activity left the client with fragmented data warehouses across AWS and Azure, with no unified security model and duplicated pipelines eating into engineering capacity.",
        solution:
            "We designed a unified, zero-trust data platform spanning both clouds, consolidating pipelines into a single governed layer with fine-grained access controls and automated compliance reporting.",
        approach: [
            {
                phase: "01",
                title: "Landscape Assessment",
                description:
                    "Catalogued every warehouse, pipeline and access policy inherited across three acquisitions to find overlap and risk.",
            },
            {
                phase: "02",
                title: "Zero-Trust Architecture",
                description:
                    "Designed a shared identity and access layer spanning AWS and Azure with least-privilege access by default.",
            },
            {
                phase: "03",
                title: "Pipeline Consolidation",
                description:
                    "Migrated duplicate ETL jobs into a single governed dbt + Snowflake layer, retiring legacy pipelines safely.",
            },
            {
                phase: "04",
                title: "Compliance Automation",
                description:
                    "Automated access reviews and compliance reporting so audits no longer required manual evidence-gathering.",
            },
        ],
        features: [
            "Single governed data layer across two clouds",
            "Automated compliance & access reporting",
            "Fine-grained, least-privilege access controls",
            "Consolidated pipeline monitoring dashboard",
        ],
        testimonial: {
            quote:
                "We finally have one source of truth instead of three warehouses that never agreed with each other.",
            author: "Head of Data Platform",
            role: "Fortune 500 Logistics Group",
        },
        results: [
            { value: "1", label: "Unified data warehouse" },
            { value: "60%", label: "Fewer duplicate pipelines" },
            { value: "100%", label: "Zero-trust coverage" },
        ],
    },
    {
        id: 3,
        title: "RPA & Process Intelligence",
        category: "Automation",
        description:
            "Hyperautomation with process mining, intelligent document AI, and orchestration.",
        image: "https://picsum.photos/seed/rpa/600/400",
        gallery: [
            "https://picsum.photos/seed/rpa-1/1200/800",
            "https://picsum.photos/seed/rpa-2/1200/800",
            "https://picsum.photos/seed/rpa-3/1200/800",
        ],
        slug: "rpa-process-intelligence",
        client: "Mid-Market Insurance Carrier",
        year: "2025",
        duration: "5 months",
        teamSize: "5 specialists",
        role: "Automation & Process Mining",
        liveUrl: null,
        tags: ["RPA", "Process Mining", "Document AI", "Hyperautomation"],
        techStack: ["UiPath", "Process Mining", "Intelligent OCR", "Airflow"],
        challenge:
            "Manual claims processing was riddled with inconsistent handoffs between systems, with no visibility into where bottlenecks were actually occurring across the process.",
        solution:
            "We mined the client's real process data to surface hidden bottlenecks, then layered in intelligent document AI and RPA bots to automate the highest-friction handoffs end to end.",
        approach: [
            {
                phase: "01",
                title: "Process Mining",
                description:
                    "Mined event logs across every claims system to build an evidence-based map of where time was actually being lost.",
            },
            {
                phase: "02",
                title: "Bottleneck Prioritisation",
                description:
                    "Ranked handoffs by automation potential and business impact to sequence the rollout for fastest ROI.",
            },
            {
                phase: "03",
                title: "Bot & Document AI Build",
                description:
                    "Built RPA bots paired with intelligent OCR to automate document intake, validation and system updates.",
            },
            {
                phase: "04",
                title: "Orchestration & Monitoring",
                description:
                    "Deployed an orchestration layer with exception handling and live dashboards for the ops team.",
            },
        ],
        features: [
            "End-to-end claims intake automation",
            "Intelligent document extraction & validation",
            "Live process bottleneck dashboards",
            "Exception-handling workflows for edge cases",
        ],
        testimonial: {
            quote:
                "We could finally see where claims were actually getting stuck — and then just automated it away.",
            author: "Director of Claims Operations",
            role: "Mid-Market Insurance Carrier",
        },
        results: [
            { value: "71%", label: "Of claims fully automated" },
            { value: "4.5x", label: "Faster document processing" },
            { value: "$3.1M", label: "Annual savings" },
        ],
    },
    {
        id: 4,
        title: "AI Governance Framework",
        category: "Governance",
        description:
            "Audit‑ready AI risk framework with privacy & data residency controls.",
        image: "https://picsum.photos/seed/governance/600/400",
        gallery: [
            "https://picsum.photos/seed/governance-1/1200/800",
            "https://picsum.photos/seed/governance-2/1200/800",
            "https://picsum.photos/seed/governance-3/1200/800",
        ],
        slug: "ai-governance-framework",
        client: "Regulated Healthcare Network",
        year: "2026",
        duration: "3 months",
        teamSize: "4 specialists",
        role: "AI Risk & Compliance Advisory",
        liveUrl: null,
        tags: ["AI Governance", "NIST AI RMF", "HIPAA", "Model Risk"],
        techStack: ["NIST AI RMF", "Model Cards", "Audit Pipelines", "OPA"],
        challenge:
            "Rapid internal AI adoption had outpaced the client's governance capacity, creating audit exposure across HIPAA, GDPR and emerging AI-specific regulation.",
        solution:
            "We built an audit-ready AI risk framework covering model registration, bias evaluation, data residency and human-in-the-loop review gates, mapped directly to NIST and HIPAA controls.",
        approach: [
            {
                phase: "01",
                title: "AI Inventory & Risk Mapping",
                description:
                    "Inventoried every model in production or pilot and mapped each to relevant HIPAA, GDPR and NIST AI RMF controls.",
            },
            {
                phase: "02",
                title: "Governance Framework Design",
                description:
                    "Defined model registration, bias evaluation and data-residency policies as enforceable, auditable checkpoints.",
            },
            {
                phase: "03",
                title: "Review Gate Implementation",
                description:
                    "Built human-in-the-loop review gates and automated audit pipelines directly into the model deployment process.",
            },
            {
                phase: "04",
                title: "Audit Readiness",
                description:
                    "Ran a mock audit against the new framework and closed every gap before the real regulatory review.",
            },
        ],
        features: [
            "Full model registry mapped to regulatory controls",
            "Automated bias & fairness evaluation pipeline",
            "Human-in-the-loop approval gates",
            "Audit-ready evidence trail for every model",
        ],
        testimonial: {
            quote:
                "For the first time, our compliance and AI teams are speaking the same language — and the auditors noticed.",
            author: "Chief Compliance Officer",
            role: "Regulated Healthcare Network",
        },
        results: [
            { value: "100%", label: "Models under governance" },
            { value: "0", label: "Audit findings post-launch" },
            { value: "6 wks", label: "To full compliance" },
        ],
    },
    {
        id: 5,
        title: "Composable ERP Extensions",
        category: "Enterprise",
        description:
            "Mission‑critical extensions with API‑first design and 99.99% SLA.",
        image: "https://picsum.photos/seed/erp/600/400",
        gallery: [
            "https://picsum.photos/seed/erp-1/1200/800",
            "https://picsum.photos/seed/erp-2/1200/800",
            "https://picsum.photos/seed/erp-3/1200/800",
        ],
        slug: "composable-erp-extensions",
        client: "Global Manufacturing Conglomerate",
        year: "2025",
        duration: "9 months",
        teamSize: "11 specialists",
        role: "Enterprise Platform Engineering",
        liveUrl: null,
        tags: ["ERP", "API-First", "Kubernetes", "Enterprise Platform"],
        techStack: ["SAP BTP", "Node.js", "Kubernetes", "GraphQL"],
        challenge:
            "The client's monolithic ERP couldn't keep pace with new business units, and every customization risked destabilizing the core system during peak production runs.",
        solution:
            "We architected a composable extension layer with an API-first design, letting new business logic ship independently of the ERP core while guaranteeing 99.99% uptime SLAs.",
        approach: [
            {
                phase: "01",
                title: "Core System Audit",
                description:
                    "Assessed every existing ERP customization to identify what was safe to extract into an independent extension layer.",
            },
            {
                phase: "02",
                title: "API-First Architecture",
                description:
                    "Designed a GraphQL-based extension layer on Kubernetes that could ship and scale independently of the ERP core.",
            },
            {
                phase: "03",
                title: "Phased Migration",
                description:
                    "Migrated business units one at a time onto the new extension layer without any disruption to production runs.",
            },
            {
                phase: "04",
                title: "SLA Hardening",
                description:
                    "Load-tested and hardened the platform to guarantee 99.99% uptime ahead of peak production periods.",
            },
        ],
        features: [
            "Independent extension deployment pipeline",
            "GraphQL API layer decoupled from ERP core",
            "Kubernetes-based horizontal scaling",
            "99.99% uptime SLA monitoring",
        ],
        testimonial: {
            quote:
                "We can now ship new business logic in days instead of waiting for the next ERP release window.",
            author: "VP of Enterprise Systems",
            role: "Global Manufacturing Conglomerate",
        },
        results: [
            { value: "99.99%", label: "Uptime SLA maintained" },
            { value: "12", label: "Business units onboarded" },
            { value: "3x", label: "Faster feature releases" },
        ],
    },
    {
        id: 6,
        title: "Digital Strategy & Experience",
        category: "Strategy",
        description:
            "Human‑centred product design and value engineering for transformation.",
        image: "https://picsum.photos/seed/strategy/600/400",
        gallery: [
            "https://picsum.photos/seed/strategy-1/1200/800",
            "https://picsum.photos/seed/strategy-2/1200/800",
            "https://picsum.photos/seed/strategy-3/1200/800",
        ],
        slug: "digital-strategy-experience",
        client: "Retail & Consumer Brand",
        year: "2025",
        duration: "4 months",
        teamSize: "5 specialists",
        role: "Product Strategy & Experience Design",
        liveUrl: null,
        tags: ["Design Systems", "UX Strategy", "Conversion", "Retail"],
        techStack: ["Design Systems", "Figma", "Journey Mapping", "A/B Testing"],
        challenge:
            "A decade of incremental changes left the client's digital experience fragmented across channels, with declining conversion and no shared design language.",
        solution:
            "We ran a human-centred discovery process across every customer touchpoint, then delivered a unified design system and value-engineered roadmap the client's teams could execute against for years.",
        approach: [
            {
                phase: "01",
                title: "Cross-Channel Discovery",
                description:
                    "Mapped the full customer journey across web, app and in-store touchpoints to find where experience broke down.",
            },
            {
                phase: "02",
                title: "Design System Foundation",
                description:
                    "Built a unified design language and component library that scaled across every channel and team.",
            },
            {
                phase: "03",
                title: "Experiment-Led Redesign",
                description:
                    "Prioritised redesigns by expected conversion impact and validated each with structured A/B testing.",
            },
            {
                phase: "04",
                title: "Roadmap Handoff",
                description:
                    "Delivered a value-engineered, 18-month roadmap the client's internal teams could run independently.",
            },
        ],
        features: [
            "Unified cross-channel design system",
            "Journey maps for every core customer flow",
            "A/B-tested redesign of key conversion pages",
            "18-month self-serve execution roadmap",
        ],
        testimonial: {
            quote:
                "They didn't just redesign our site — they gave our team a system and a roadmap we can run ourselves.",
            author: "Head of Digital Experience",
            role: "Retail & Consumer Brand",
        },
        results: [
            { value: "31%", label: "Lift in conversion rate" },
            { value: "1", label: "Unified design system" },
            { value: "18mo", label: "Roadmap delivered" },
        ],
    },
    {
        id: 7,
        title: "LLM‑Powered Support Agent",
        category: "AI",
        description:
            "Multi‑agent workflow with eval pipelines, cutting ticket resolution by 45%.",
        image: "https://picsum.photos/seed/llm/600/400",
        gallery: [
            "https://picsum.photos/seed/llm-1/1200/800",
            "https://picsum.photos/seed/llm-2/1200/800",
            "https://picsum.photos/seed/llm-3/1200/800",
        ],
        slug: "llm-support-agent",
        client: "B2B SaaS Platform",
        year: "2026",
        duration: "3 months",
        teamSize: "4 specialists",
        role: "AI Product Engineering",
        liveUrl: "https://base2brand.com",
        tags: ["Multi-Agent", "LLM", "Customer Support", "Eval Pipelines"],
        techStack: ["Multi-Agent Orchestration", "Eval Pipelines", "Zendesk API", "OpenAI"],
        challenge:
            "Support ticket volume was outpacing headcount growth, and existing chatbots couldn't handle multi-step troubleshooting without escalating almost every case.",
        solution:
            "We built a multi-agent support workflow with dedicated triage, resolution and escalation agents, backed by continuous eval pipelines to catch regressions before they reached customers.",
        approach: [
            {
                phase: "01",
                title: "Ticket Taxonomy & Triage Design",
                description:
                    "Analysed a year of tickets to design a triage agent that could route issues correctly from the first message.",
            },
            {
                phase: "02",
                title: "Multi-Agent Workflow",
                description:
                    "Built dedicated triage, resolution and escalation agents that hand off context cleanly between each other.",
            },
            {
                phase: "03",
                title: "Eval Pipeline",
                description:
                    "Stood up continuous evaluation pipelines against real ticket transcripts to catch regressions pre-release.",
            },
            {
                phase: "04",
                title: "Production Rollout",
                description:
                    "Rolled out gradually behind a confidence threshold, escalating to humans automatically below the bar.",
            },
        ],
        features: [
            "Dedicated triage, resolution & escalation agents",
            "Continuous eval pipeline against real transcripts",
            "Native Zendesk integration",
            "Confidence-based human escalation",
        ],
        testimonial: {
            quote:
                "Our support team now handles twice the volume without twice the headcount — and customers are happier.",
            author: "Director of Customer Support",
            role: "B2B SaaS Platform",
        },
        results: [
            { value: "45%", label: "Faster ticket resolution" },
            { value: "58%", label: "Tickets resolved without human" },
            { value: "4.7/5", label: "Customer satisfaction" },
        ],
    },
    {
        id: 8,
        title: "Smart‑City Data Mesh",
        category: "Cloud",
        description:
            "Scalable data mesh for urban IoT with real‑time analytics and governance.",
        image: "https://picsum.photos/seed/smartcity/600/400",
        gallery: [
            "https://picsum.photos/seed/smartcity-1/1200/800",
            "https://picsum.photos/seed/smartcity-2/1200/800",
            "https://picsum.photos/seed/smartcity-3/1200/800",
        ],
        slug: "smart-city-data-mesh",
        client: "Regional Municipal Authority",
        year: "2025",
        duration: "10 months",
        teamSize: "10 specialists",
        role: "Data Platform & IoT Engineering",
        liveUrl: null,
        tags: ["IoT", "Data Mesh", "Smart City", "Real-Time Analytics"],
        techStack: ["Kafka", "Data Mesh", "IoT Edge", "Grafana"],
        challenge:
            "Thousands of city IoT sensors were producing siloed data with no shared ownership model, making real-time coordination across departments nearly impossible.",
        solution:
            "We stood up a domain-oriented data mesh with real-time streaming pipelines and self-serve governance, letting each city department own and publish its own data products.",
        approach: [
            {
                phase: "01",
                title: "Domain Mapping",
                description:
                    "Identified natural data domains across departments — traffic, utilities, waste, safety — to design mesh ownership boundaries.",
            },
            {
                phase: "02",
                title: "Streaming Backbone",
                description:
                    "Built a Kafka-based streaming backbone able to ingest and route data from 12,000+ IoT sensors in real time.",
            },
            {
                phase: "03",
                title: "Self-Serve Governance",
                description:
                    "Gave each department self-serve tools to publish and govern their own data products without central bottlenecks.",
            },
            {
                phase: "04",
                title: "Cross-Department Rollout",
                description:
                    "Onboarded nine departments in sequence, with shared observability dashboards for the whole mesh.",
            },
        ],
        features: [
            "Real-time ingestion from 12,000+ IoT sensors",
            "Self-serve data product publishing per department",
            "Shared observability & alerting via Grafana",
            "Sub-2-second end-to-end data latency",
        ],
        testimonial: {
            quote:
                "Departments that never shared data before are now publishing to each other in near real time.",
            author: "Chief Data Officer",
            role: "Regional Municipal Authority",
        },
        results: [
            { value: "12K+", label: "IoT sensors unified" },
            { value: "<2s", label: "End-to-end data latency" },
            { value: "9", label: "Departments onboarded" },
        ],
    },
    {
        id: 9,
        title: "Intelligent Document Processing",
        category: "Automation",
        description:
            "AI‑powered document extraction with 99% accuracy and human‑in‑the‑loop review.",
        image: "https://picsum.photos/seed/document/600/400",
        gallery: [
            "https://picsum.photos/seed/document-1/1200/800",
            "https://picsum.photos/seed/document-2/1200/800",
            "https://picsum.photos/seed/document-3/1200/800",
        ],
        slug: "intelligent-document-processing",
        client: "National Logistics Provider",
        year: "2026",
        duration: "5 months",
        teamSize: "6 specialists",
        role: "AI & Automation Engineering",
        liveUrl: null,
        tags: ["Computer Vision", "Document AI", "Logistics", "OCR"],
        techStack: ["Computer Vision", "LayoutLM", "Human-in-the-Loop", "Airflow"],
        challenge:
            "Manually processing thousands of shipping documents daily created a chronic backlog and error rate that delayed downstream billing and customs clearance.",
        solution:
            "We deployed a computer-vision document extraction pipeline with a human-in-the-loop review layer for edge cases, cutting processing time while keeping accuracy above 99%.",
        approach: [
            {
                phase: "01",
                title: "Document Taxonomy",
                description:
                    "Catalogued every shipping document type and layout variant to train extraction models against real diversity.",
            },
            {
                phase: "02",
                title: "Extraction Pipeline",
                description:
                    "Built a computer-vision extraction pipeline combining layout-aware models with confidence scoring per field.",
            },
            {
                phase: "03",
                title: "Human-in-the-Loop Review",
                description:
                    "Routed only low-confidence fields to human reviewers, cutting manual review volume dramatically.",
            },
            {
                phase: "04",
                title: "Downstream Integration",
                description:
                    "Piped extracted data directly into billing and customs systems via orchestrated Airflow pipelines.",
            },
        ],
        features: [
            "Layout-aware document extraction pipeline",
            "Confidence-scored human-in-the-loop review",
            "Direct integration with billing & customs systems",
            "Automated exception routing for edge cases",
        ],
        testimonial: {
            quote:
                "What used to take our team hours per shipment now finishes before the truck leaves the dock.",
            author: "VP of Operations",
            role: "National Logistics Provider",
        },
        results: [
            { value: "99%", label: "Extraction accuracy" },
            { value: "80%", label: "Reduction in manual review" },
            { value: "6hr → 20min", label: "Average processing time" },
        ],
    },
];

export function getProjectBySlug(slug) {
    return projects.find((p) => p.slug === slug) || null;
}

export function getRelatedProjects(slug, count = 3) {
    const current = getProjectBySlug(slug);
    if (!current) return projects.slice(0, count);

    const sameCategory = projects.filter(
        (p) => p.slug !== slug && p.category === current.category
    );
    const others = projects.filter(
        (p) => p.slug !== slug && p.category !== current.category
    );

    return [...sameCategory, ...others].slice(0, count);
}
