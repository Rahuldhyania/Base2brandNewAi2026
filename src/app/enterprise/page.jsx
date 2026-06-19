import Hero from "@/components/Solutions/Hero";
import React from "react";
import "../components/Solutions/solution.css";
import Philosophy from "@/components/Solutions/Philosophy";
import Challenges from "@/components/Solutions/Challenges";
import Capabilities from "@/components/Solutions/Capabilities";
import MissionControl from "@/components/Solutions/MissionControl";
import WhyBase2Brand from "@/components/Solutions/WhyBase2Brand";
import Process from "@/components/Solutions/Process";
import Industries from "@/components/Solutions/Industries";
import Results from "@/components/Solutions/Results";
import FinalCTA from "@/components/Solutions/FinalCTA";

const CHALLENGES = [
  {
    id: "01",
    icon: "Target",
    title: "Limited Operational Visibility",
    desc: "Critical business data remains siloed across multiple platforms, making informed decisions difficult.",
  },
  {
    id: "02",
    icon: "GitBranch",
    title: "Slow & Manual Processes",
    desc: "Payroll, invoicing, attendance, approvals, and repetitive administrative tasks reduce organizational efficiency.",
  },
  {
    id: "03",
    icon: "Compass",
    title: "Disconnected Systems",
    desc: "ERP, CRM, HR, inventory, and operational platforms operate independently, creating friction across teams.",
  },
  {
    id: "04",
    icon: "TrendingDown",
    title: "Scaling Challenges",
    desc: "Processes that once supported business growth begin limiting expansion and operational efficiency.",
  },
  {
    id: "05",
    icon: "Network",
    title: "Outdated Legacy Operations",
    desc: "Spreadsheet-driven operations and fragmented workflows prevent innovation and slow digital transformation.",
  },
  {
    id: "06",
    icon: "Eye",
    title: "AI Adoption Uncertainty",
    desc: "Organizations recognize AI's potential but need practical strategies to implement it effectively.",
  },
];

const CAPABILITIES = [
  {
    id: "ERP",
    icon: "Database",
    title: "Enterprise Resource Planning",
    description:
      "Custom ERP platforms designed around how your business actually operates.",
    features: [
      "Finance Operations",
      "Procurement",
      "Inventory Management",
      "Reporting & Analytics",
    ],
  },
  {
    id: "HR",
    icon: "Users",
    title: "Human Resource Management",
    description:
      "Intelligent HRMS solutions built for modern and distributed workforces.",
    features: [
      "Payroll & Attendance",
      "Workforce Management",
      "Compliance Tracking",
      "Performance Workflows",
    ],
  },
  {
    id: "WH",
    icon: "Warehouse",
    title: "Warehouse & Logistics",
    description:
      "Connected warehouse and logistics platforms that improve operational visibility and efficiency.",
    features: [
      "Inventory Intelligence",
      "Fleet & Dispatch",
      "Route Optimization",
      "Real-Time Tracking",
    ],
  },
  {
    id: "CRM",
    icon: "Handshake",
    title: "Customer & Vendor Management",
    description:
      "Connected CRM and vendor portals that strengthen customer relationships and supplier collaboration.",
    features: [
      "CRM Solutions",
      "Vendor Portals",
      "Procurement Workflows",
      "Performance Tracking",
    ],
  },
  {
    id: "AI",
    icon: "Bot",
    title: "AI Conversational Systems",
    description:
      "Context-aware AI assistants powered by Retrieval-Augmented Generation (RAG).",
    features: [
      "RAG Frameworks",
      "Knowledge Assistants",
      "Customer Support",
      "Employee Support",
    ],
  },
  {
    id: "ML",
    icon: "Workflow",
    title: "Machine Learning & Automation",
    description:
      "Practical machine learning and intelligent automation designed to optimize enterprise operations.",
    features: [
      "Predictive Analytics",
      "Decision Support",
      "AI Agents",
      "Workflow Automation",
    ],
  },
];

const MODULES = [
  {
    id: "01",
    code: "ERP-01",
    icon: "Activity",
    label: "Enterprise Resource Planning",
    status: "ACTIVE",
    statusType: "active",
    metric: "Finance & Operations",
    bars: [62, 70, 74, 81, 86, 91, 95],
  },
  {
    id: "02",
    code: "HR-02",
    icon: "Eye",
    label: "Human Resource Management",
    status: "ACTIVE",
    statusType: "active",
    metric: "Workforce Visibility",
    bars: [48, 58, 66, 72, 79, 85, 90],
  },
  {
    id: "03",
    code: "WH-03",
    icon: "Crosshair",
    label: "Warehouse Intelligence",
    status: "ACTIVE",
    statusType: "active",
    metric: "Inventory Insights",
    bars: [52, 60, 68, 74, 81, 88, 94],
  },
  {
    id: "04",
    code: "LG-04",
    icon: "Gauge",
    label: "Logistics & Supply Chain",
    status: "OPTIMIZING",
    statusType: "optimizing",
    metric: "Route Optimization",
    bars: [44, 56, 63, 69, 76, 83, 89],
  },
  {
    id: "05",
    code: "CRM-05",
    icon: "Award",
    label: "Customer Relationship Management",
    status: "CONNECTED",
    statusType: "growing",
    metric: "Customer Insights",
    bars: [58, 64, 71, 77, 82, 89, 93],
  },
  {
    id: "06",
    code: "AI-06",
    icon: "PhoneCall",
    label: "AI & Automation",
    status: "ACTIVE",
    statusType: "active",
    metric: "Workflow Automation",
    bars: [40, 52, 61, 70, 79, 87, 96],
  },
];

const REASONS = [
  {
    id: "R1",
    icon: "Building2",
    title: "Tailored by Design",
    desc: "Every enterprise solution is built around your operational realities, workflows, and long-term business goals.",
  },
  {
    id: "R2",
    icon: "GitMerge",
    title: "Connected Ecosystems",
    desc: "We unify ERP, CRM, HRMS, AI, and business systems into one connected enterprise environment.",
  },
  {
    id: "R3",
    icon: "FlaskConical",
    title: "AI-First Innovation",
    desc: "We identify practical opportunities where AI creates measurable value across your organization.",
  },
  {
    id: "R4",
    icon: "Handshake",
    title: "Long-Term Partnerships",
    desc: "We work alongside your teams to ensure successful adoption, optimization, and continuous growth.",
  },
];

const Steps = [
  {
    id: "01",
    icon: "Search",
    label: "Understand",
    desc: "Understand your business goals, challenges, and operational needs.",
  },
  {
    id: "02",
    icon: "Microscope",
    label: "Assess",
    desc: "Evaluate existing systems, workflows, and opportunities for improvement.",
  },
  {
    id: "03",
    icon: "Pencil",
    label: "Architect",
    desc: "Design a scalable enterprise solution tailored to your organization.",
  },
  {
    id: "04",
    icon: "Play",
    label: "Build",
    desc: "Develop secure, reliable, and future-ready enterprise applications.",
  },
  {
    id: "05",
    icon: "Settings2",
    label: "Integrate",
    desc: "Connect platforms, data, and teams into one unified ecosystem.",
  },
  {
    id: "06",
    icon: "TrendingUp",
    label: "Optimize",
    desc: "Continuously improve performance through analytics and automation.",
  },
  {
    id: "07",
    icon: "Rocket",
    label: "Scale",
    desc: "Expand capabilities confidently as your business grows.",
  },
];

const INDUSTRIES = [
  {
    name: "Mid-Market Businesses",
    icon: "Briefcase",
  },
  {
    name: "Large Enterprises",
    icon: "Building2",
  },
  {
    name: "Manufacturing",
    icon: "Factory",
  },
  {
    name: "Healthcare",
    icon: "HeartPulse",
  },
  {
    name: "Logistics",
    icon: "Truck",
  },
  {
    name: "Government Partnerships",
    icon: "Landmark",
  },
];

const RESULTS = [
  {
    id: "01",
    icon: "TrendingUp",
    title: "Operational Efficiency",
    desc: "Streamlined workflows reduce manual effort and improve day-to-day productivity.",
    stat: "+40%",
    statLabel: "Efficiency",
  },
  {
    id: "02",
    icon: "Filter",
    title: "Process Automation",
    desc: "Automated business processes eliminate repetitive tasks and reduce operational delays.",
    stat: "24/7",
    statLabel: "Automation",
  },
  {
    id: "03",
    icon: "Eye",
    title: "Real-Time Visibility",
    desc: "Connected systems provide actionable insights across business operations.",
    stat: "360°",
    statLabel: "Business View",
  },
  {
    id: "04",
    icon: "Sparkles",
    title: "AI-Powered Decisions",
    desc: "Leverage intelligent automation and analytics to support faster decision-making.",
    stat: "AI",
    statLabel: "Driven",
  },
  {
    id: "05",
    icon: "Users",
    title: "Connected Teams",
    desc: "Integrated platforms improve collaboration across departments and locations.",
    stat: "100%",
    statLabel: "Connected",
  },
  {
    id: "06",
    icon: "DollarSign",
    title: "Scalable Growth",
    desc: "Enterprise solutions built to support expansion without increasing complexity.",
    stat: "∞",
    statLabel: "Future Ready",
  },
];
const page = () => {
  return (
    <div>
      <Hero
        highlightTag="ENTERPRISE SOLUTIONS"
        titleupper="Build Enterprises"
        titlelower="Ready for Tomorrow."
        description="At Base2Brand, we partner with growing businesses and established enterprises to modernize operations, unify disconnected systems, and unlock new growth opportunities through intelligent technology solutions. From custom ERP platforms to AI-powered automation, we design enterprise ecosystems that evolve alongside your business. Because digital transformation isn't about adopting technology. It's about creating better ways to work, scale, and innovate."
        buttonLeft="Start Your Transformation"
        buttonRight="Explore Enterprise Solutions"
      />

      <Philosophy
        highlightTag="OUR APPROACH"
        titleUpper="We Build"
        titleLower="Enterprise Ecosystems."
        description={[
          "Technology alone doesn't create competitive advantage. Connected systems do.",
          "Every enterprise has unique operational challenges, workflows, and growth objectives.",
          "That's why we design custom technology ecosystems that modernize operations, unify disconnected platforms, and improve organizational visibility.",
          "From ERP platforms and HRMS to AI-powered automation, every solution is built to help your business scale with confidence.",
        ]}
      />

      <Challenges
        highlightTag="Challenges We Solve"
        titleUpper="Operational Complexity"
        titleLower="Shouldn't Slow Growth."
        description="Organizations turn to Base2Brand when operational inefficiencies, disconnected systems, and outdated processes begin limiting growth."
        challengesData={CHALLENGES}
      />

      <Capabilities
        highlightTag="Enterprise Capabilities"
        titleUpper="Enterprise Systems,"
        titleLower="Built to Scale."
        description="From ERP and HRMS to AI-powered automation, we build connected enterprise solutions that streamline operations, improve visibility, and support long-term growth."
        capabilitiesData={CAPABILITIES}
      />

      <MissionControl
        highlightTag="Enterprise Operations"
        titleUpper="Monitor The Systems"
        titleLower="Driving Your Business."
        description="Gain real-time visibility into enterprise operations through connected systems that bring finance, workforce, logistics, inventory, customers, and AI automation together in one operational view."
        modulesData={MODULES}
      />

      <WhyBase2Brand
        highlightTag="Why Base2Brand"
        titleUpper="Enterprise Transformation."
        titleLower="Without Enterprise Complexity."
        description="We combine tailored technology, practical AI, and long-term partnerships to help organizations modernize operations, connect systems, and scale with confidence."
        reasonsData={REASONS}
      />

      <Process
        highlightTag="Enterprise Framework"
        titleUpper="Seven Steps."
        titleLower="One Connected Enterprise."
        description="Our proven framework helps organizations modernize operations, integrate systems, and build technology ecosystems designed for long-term growth."
        StepsData={Steps}
      />

      <Industries
        highlightTag="Who We Partner With"
        titleUpper="Powering Growth"
        titleLower="Across Industries."
        description="We partner with ambitious organizations across diverse industries, helping them modernize operations, improve efficiency, and build intelligent digital ecosystems."
        industriesData={INDUSTRIES}
      />

      <Results
        highlightTag="Business Outcomes"
        titleUpper="Enterprise Growth"
        titleLower="Backed by Execution."
        description="Every solution we build is designed to improve operational efficiency, increase visibility, and create measurable business impact."
        resultsData={RESULTS}
      />
      <FinalCTA
        highlightTag="Start Your Enterprise Transformation"
        titleUpper="Transform Operations"
        titleLower="Into Competitive Advantage."
        description="Whether you're modernizing legacy systems, implementing intelligent automation, or building enterprise platforms from the ground up, Base2Brand helps organizations create connected ecosystems designed for long-term growth."
      />
    </div>
    
  );
};

export default page;
