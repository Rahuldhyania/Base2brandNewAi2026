import dynamic from "next/dynamic";
import Hero from "@/components/Solutions/Hero";
import React from "react";
import "../components/Solutions/solution.css";
import Philosophy from "@/components/Solutions/Philosophy";
import Challenges from "@/components/Solutions/Challenges";
import { SectionFallback } from "@/components/layout/SectionFallback";

// Below-the-fold sections are lazy-loaded so their JS isn't parsed/executed
// on initial load.
const Capabilities = dynamic(() => import("@/components/Solutions/Capabilities"), {
  loading: () => <SectionFallback minHeight={480} />,
});
const MissionControl = dynamic(() => import("@/components/Solutions/MissionControl"), {
  loading: () => <SectionFallback minHeight={520} />,
});
const WhyBase2Brand = dynamic(() => import("@/components/Solutions/WhyBase2Brand"), {
  loading: () => <SectionFallback minHeight={480} />,
});
const Process = dynamic(() => import("@/components/Solutions/Process"), {
  loading: () => <SectionFallback minHeight={480} />,
});
const Industries = dynamic(() => import("@/components/Solutions/Industries"), {
  loading: () => <SectionFallback minHeight={520} />,
});
const Results = dynamic(() => import("@/components/Solutions/Results"), {
  loading: () => <SectionFallback minHeight={480} />,
});
const FinalCTA = dynamic(() => import("@/components/Solutions/FinalCTA"), {
  loading: () => <SectionFallback minHeight={400} />,
});

const CHALLENGES = [
  {
    id: "01",
    icon: "Target",
    title: "Process Inefficiencies",
    desc: "Manual processes and inconsistent workflows reduce productivity and slow business operations.",
  },
  {
    id: "02",
    icon: "GitBranch",
    title: "Limited Operational Visibility",
    desc: "Disconnected information makes it difficult for teams to monitor performance and make informed decisions.",
  },
  {
    id: "03",
    icon: "Compass",
    title: "Workflow Challenges",
    desc: "Outdated tools and fragmented processes create unnecessary delays across teams.",
  },
  {
    id: "04",
    icon: "TrendingDown",
    title: "Repetitive Manual Work",
    desc: "Employees spend valuable time on repetitive tasks instead of focusing on strategic initiatives.",
  },
  {
    id: "05",
    icon: "Network",
    title: "Collaboration Gaps",
    desc: "Teams perform better when supported by connected systems and streamlined communication.",
  },
  {
    id: "06",
    icon: "Eye",
    title: "Preparing for Growth",
    desc: "Operational foundations should evolve alongside the business to support sustainable growth.",
  },
];

const CAPABILITIES = [
  {
    id: "PI",
    icon: "Compass",
    title: "Process Improvement",
    description:
      "Helping organizations identify inefficiencies and create streamlined workflows.",
    features: [
      "Workflow Analysis",
      "Process Optimization",
      "Operational Efficiency",
      "Continuous Improvement",
    ],
  },
  {
    id: "OV",
    icon: "Rocket",
    title: "Operational Visibility",
    description:
      "Providing greater clarity into business activities through connected systems and reporting.",
    features: [
      "Business Reporting",
      "Performance Tracking",
      "Operational Insights",
      "Data Visibility",
    ],
  },
  {
    id: "WE",
    icon: "Search",
    title: "Workflow Enablement",
    description:
      "Designing tools and platforms that support teams in completing work efficiently.",
    features: [
      "Team Collaboration",
      "Workflow Design",
      "Task Management",
      "Process Support",
    ],
  },
  {
    id: "IA",
    icon: "Sparkles",
    title: "Intelligent Automation",
    description:
      "Introducing automation where it creates meaningful value while maintaining human oversight.",
    features: [
      "Workflow Automation",
      "Task Automation",
      "Human Oversight",
      "Operational Support",
    ],
  },
  {
    id: "TP",
    icon: "MousePointer2",
    title: "Team Productivity Solutions",
    description:
      "Building systems that allow employees to focus on high-impact work instead of repetitive tasks.",
    features: [
      "Productivity Tools",
      "Collaboration Systems",
      "Resource Management",
      "Employee Enablement",
    ],
  },
  {
    id: "SF",
    icon: "Workflow",
    title: "Scalable Operational Foundations",
    description:
      "Creating operational structures that support future business growth.",
    features: [
      "Scalable Systems",
      "Operational Frameworks",
      "Growth Readiness",
      "Long-Term Stability",
    ],
  },
];

const MODULES = [
  {
    id: "01",
    code: "PR-01",
    icon: "Activity",
    label: "Process Improvement",
    status: "ACTIVE",
    statusType: "active",
    metric: "Workflow Optimized",
    bars: [60, 68, 74, 80, 86, 90, 94],
  },
  {
    id: "02",
    code: "OV-02",
    icon: "Eye",
    label: "Operational Visibility",
    status: "ACTIVE",
    statusType: "active",
    metric: "Real-Time Insights",
    bars: [52, 60, 66, 73, 79, 84, 90],
  },
  {
    id: "03",
    code: "WE-03",
    icon: "Crosshair",
    label: "Workflow Enablement",
    status: "ACTIVE",
    statusType: "active",
    metric: "Team Collaboration",
    bars: [48, 56, 64, 71, 78, 85, 91],
  },
  {
    id: "04",
    code: "IA-04",
    icon: "Gauge",
    label: "Intelligent Automation",
    status: "OPTIMIZING",
    statusType: "optimizing",
    metric: "Automation Active",
    bars: [44, 52, 60, 69, 76, 84, 90],
  },
  {
    id: "05",
    code: "TP-05",
    icon: "Award",
    label: "Team Productivity",
    status: "GROWING",
    statusType: "growing",
    metric: "Efficiency Improved",
    bars: [56, 63, 70, 76, 82, 88, 93],
  },
  {
    id: "06",
    code: "SF-06",
    icon: "PhoneCall",
    label: "Scalable Operations",
    status: "ACTIVE",
    statusType: "active",
    metric: "Growth Ready",
    bars: [50, 58, 66, 74, 82, 89, 95],
  },
];

const REASONS = [
  {
    id: "R1",
    icon: "Building2",
    title: "We Focus on Practical Solutions",
    desc: "We prioritize outcomes that deliver immediate and measurable improvements.",
  },
  {
    id: "R2",
    icon: "GitMerge",
    title: "We Work Alongside Your Teams",
    desc: "Operational excellence requires collaboration, not disruption.",
  },
  {
    id: "R3",
    icon: "FlaskConical",
    title: "We Think Beyond Technology",
    desc: "Technology is only valuable when it supports people and processes effectively.",
  },
  {
    id: "R4",
    icon: "Handshake",
    title: "We Build for Growth",
    desc: "The solutions implemented today should continue supporting your organization tomorrow.",
  },
];

const Steps = [
  {
    id: "01",
    icon: "Search",
    label: "Understand",
    desc: "We begin by understanding how your teams work today.",
  },
  {
    id: "02",
    icon: "Microscope",
    label: "Identify",
    desc: "We uncover operational bottlenecks, inefficiencies, and opportunities for improvement.",
  },
  {
    id: "03",
    icon: "Pencil",
    label: "Implement",
    desc: "We introduce solutions tailored to your organization's specific requirements.",
  },
  {
    id: "04",
    icon: "TrendingUp",
    label: "Improve",
    desc: "We continuously refine and optimize operational processes as your business evolves.",
  },
];

const INDUSTRIES = [
  {
    name: "Manufacturing",
    icon: "Factory",
  },
  {
    name: "Healthcare",
    icon: "HeartPulse",
  },
  {
    name: "Retail & Commerce",
    icon: "ShoppingBag",
  },
  {
    name: "Professional Services",
    icon: "Briefcase",
  },
  {
    name: "Growing Businesses",
    icon: "Building2",
  },
  {
    name: "Operations Teams",
    icon: "Users",
  },
];

const RESULTS = [
  {
    id: "01",
    icon: "TrendingUp",
    title: "Improved Efficiency",
    desc: "Simplified workflows help teams complete work faster with greater consistency.",
    stat: "Faster",
    statLabel: "Operations",
  },
  {
    id: "02",
    icon: "Filter",
    title: "Better Visibility",
    desc: "Connected processes provide clearer insights into day-to-day business activities.",
    stat: "Clear",
    statLabel: "Insights",
  },
  {
    id: "03",
    icon: "Eye",
    title: "Stronger Collaboration",
    desc: "Well-designed systems enable teams to communicate and work together more effectively.",
    stat: "Connected",
    statLabel: "Teams",
  },
  {
    id: "04",
    icon: "Sparkles",
    title: "Smarter Workflows",
    desc: "Practical automation supports teams while keeping people at the center of every process.",
    stat: "Optimized",
    statLabel: "Workflows",
  },
  {
    id: "05",
    icon: "Users",
    title: "Higher Productivity",
    desc: "Employees spend less time on repetitive work and more time creating business value.",
    stat: "Focused",
    statLabel: "Teams",
  },
  {
    id: "06",
    icon: "DollarSign",
    title: "Sustainable Growth",
    desc: "Operational improvements create a strong foundation for long-term business success.",
    stat: "Future",
    statLabel: "Ready",
  },
];
const page = () => {
  return (
    <div>
      <Hero
        highlightTag="OPERATIONS EXCELLENCE"
        titleupper="Transform Daily Operations"
        titlelower="Into Competitive Advantages."
        description="At Base2Brand, we believe operational excellence starts with improving the everyday processes that keep businesses moving. We work alongside organizations to identify inefficiencies, simplify workflows, and implement practical solutions that help teams operate more effectively. Because sustainable growth is built on strong operational foundations."
        buttonLeft="Improve Your Operations"
        buttonRight="Explore Our Approach"
      />

      <Philosophy
        highlightTag="OUR PHILOSOPHY"
        titleUpper="Ideas Become Reality"
        titleLower="Through Execution."
        description={[
          "Every business has ideas to improve how they work. The challenge lies in implementation.",
          "At Base2Brand, we bridge the gap between identifying opportunities and delivering solutions that create measurable impact.",
          "Whether it's simplifying internal processes, improving visibility, or enabling teams with better tools, our focus remains the same.",
          "Turning operational challenges into practical outcomes.",
        ]}
      />

      <Challenges
        highlightTag="Operational Challenges"
        titleUpper="Where Operations"
        titleLower="Can Improve."
        description="Every organization faces opportunities to improve efficiency, visibility, and collaboration. We help transform these operational challenges into measurable business outcomes."
        challengesData={CHALLENGES}
      />

      <Capabilities
        highlightTag="How We Support Operations"
        titleUpper="Practical Solutions,"
        titleLower="Meaningful Impact."
        description="We help organizations improve daily operations through practical solutions that enhance efficiency, strengthen collaboration, and build a foundation for sustainable growth."
        capabilitiesData={CAPABILITIES}
      />

      <MissionControl
        highlightTag="Operations Dashboard"
        titleUpper="Monitor The Processes"
        titleLower="That Keep Business Moving."
        description="Gain better visibility into your day-to-day operations with connected workflows, team productivity, and operational performance—all from a single view."
        modulesData={MODULES}
      />

      <WhyBase2Brand
        highlightTag="Why Base2Brand"
        titleUpper="Practical Solutions."
        titleLower="Meaningful Results."
        description="We believe operational excellence comes from collaboration, practical thinking, and solutions that continue creating value as your business grows."
        reasonsData={REASONS}
      />

      <Process
        highlightTag="Our Approach"
        titleUpper="A Practical Process."
        titleLower="Built Around Your Business."
        description="We take a collaborative approach to improving operations, ensuring every solution is aligned with your teams, processes, and long-term business objectives."
        StepsData={Steps}
      />

      <Industries
        highlightTag="Who We Support"
        titleUpper="Helping Teams"
        titleLower="Work Smarter Every Day."
        description="We partner with organizations across industries to improve workflows, strengthen collaboration, and build operational foundations that support long-term growth."
        industriesData={INDUSTRIES}
      />

      <Results
        highlightTag="Operational Outcomes"
        titleUpper="Building Better"
        titleLower="Business Operations."
        description="Our focus is on creating practical improvements that help organizations operate more efficiently, collaborate effectively, and build stronger foundations for sustainable growth."
        resultsData={RESULTS}
      />
      <FinalCTA
        highlightTag="Let's Build Better Operations"
        titleUpper="Strong Operations"
        titleLower="Drive Sustainable Growth."
        description="Whether you're looking to improve workflows, enhance team productivity, or build stronger operational foundations, Base2Brand helps transform ideas into actionable solutions. Let's build operations that work smarter together."
      />
    </div>
  );
};

export default page;
