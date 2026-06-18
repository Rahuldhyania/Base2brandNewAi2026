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
    title: "Inconsistent Lead Generation",
    desc:
      "Businesses struggle to generate predictable opportunities month after month."
  },
  {
    id: "02",
    icon: "GitBranch",
    title: "Low Conversion Rates",
    desc: "Traffic is meaningless when visitors fail to become customers."
  },
  {
    id: "03",
    icon: "Compass",
    title: "Weak Market Positioning",
    desc: "Customers cannot trust what they do not understand."
  },
  {
    id: "04",
    icon: "TrendingDown",
    title: "Revenue Growth Bottlenecks",
    desc: "Growth stalls when systems fail to scale."
  },
  {
    id: "05",
    icon: "Network",
    title: "Disconnected Sales & Marketing",
    desc: "Marketing and sales should operate as one growth engine."
  },
  {
    id: "06",
    icon: "Eye",
    title: "Limited Visibility",
    desc: "Decision makers need clarity on what drives results."
  }
];

const CAPABILITIES = [
  {
    id: "GS",
    icon: 'Compass',
    title: "Growth Strategy",
    description:
      "Helping businesses identify opportunities and create scalable growth roadmaps.",
    features: [
      "Market Research",
      "Competitor Intelligence",
      "Growth Planning",
      "Revenue Mapping",
    ],
  },
  {
    id: "PM",
    icon: 'Rocket',
    title: "Performance Marketing",
    description:
      "Driving qualified traffic through targeted acquisition strategies.",
    features: ["Google Ads", "Meta Ads", "LinkedIn Campaigns", "Retargeting"],
  },
  {
    id: "SG",
    icon: 'Search',
    title: "Search Growth",
    description: "Helping brands dominate organic discovery.",
    features: ["SEO", "GEO", "Content Strategy", "Local Search"],
  },
  {
    id: "BP",
    icon: 'Sparkles',
    title: "Brand Positioning",
    description: "Building brands customers remember and trust.",
    features: [
      "Messaging",
      "Storytelling",
      "Authority Building",
      "Market Differentiation",
    ],
  },
  {
    id: "CO",
    icon: 'MousePointer2',
    title: "Conversion Optimization",
    description: "Improving every step of the customer journey.",
    features: [
      "Landing Pages",
      "Funnel Design",
      "CRO",
      "User Experience",
    ],
  },
  {
    id: "SE",
    icon: 'Workflow',
    title: "Sales Enablement",
    description: "Giving teams the systems needed to close more opportunities.",
    features: [
      "CRM Systems",
      "Lead Qualification",
      "Sales Automation",
      "Pipeline Visibility",
    ],
  },
];

const MODULES = [
  {
    id: "01",
    code: "LG-01",
    icon: 'Activity',
    label: "Lead Generation",
    status: "ACTIVE",
    statusType: "active",
    metric: "+34.2% MoM",
    bars: [60, 70, 58, 82, 74, 88, 92],
  },
  {
    id: "02",
    code: "SV-02",
    icon: 'Eye',
    label: "Search Visibility",
    status: "ACTIVE",
    statusType: "active",
    metric: "PG-1 Coverage 71%",
    bars: [50, 60, 64, 70, 78, 84, 89],
  },
  {
    id: "03",
    code: "PA-03",
    icon: 'Crosshair',
    label: "Paid Acquisition",
    status: "ACTIVE",
    statusType: "active",
    metric: "CPA -22%",
    bars: [80, 64, 72, 60, 58, 50, 44],
  },
  {
    id: "04",
    code: "CR-04",
    icon: 'Gauge',
    label: "Conversion Rate",
    status: "OPTIMIZING",
    statusType: "optimizing",
    metric: "+1.8 pts uplift",
    bars: [55, 58, 64, 62, 70, 76, 81],
  },
  {
    id: "05",
    code: "BA-05",
    icon: 'Award',
    label: "Brand Authority",
    status: "GROWING",
    statusType: "growing",
    metric: "Mentions +47%",
    bars: [40, 48, 56, 62, 70, 80, 86],
  },
  {
    id: "06",
    code: "SE-06",
    icon: 'PhoneCall',
    label: "Sales Enablement",
    status: "ACTIVE",
    statusType: "active",
    metric: "Velocity x1.9",
    bars: [62, 70, 76, 80, 82, 88, 91],
  },
];

const REASONS = [
  {
    id: "R1",
    icon: 'Building2',
    title: "We Think Like Owners",
    desc: "Every recommendation is evaluated through business impact.",
  },
  {
    id: "R2",
    icon: 'GitMerge',
    title: "Growth Beyond Marketing",
    desc: "We connect marketing, sales, operations, and technology.",
  },
  {
    id: "R3",
    icon: 'FlaskConical',
    title: "Research-Led Decisions",
    desc: "Every strategy begins with understanding the market.",
  },
  {
    id: "R4",
    icon: 'Handshake',
    title: "Long-Term Partnerships",
    desc: "We focus on sustainable growth, not short-term wins.",
  },
];

const Steps = [
  { id: "01", icon: 'Search', label: "Understand", desc: "Map how revenue is generated today." },
  { id: "02", icon: 'Microscope', label: "Research", desc: "Decode market, audience, and competition." },
  { id: "03", icon: 'Pencil', label: "Strategize", desc: "Design the growth system end‑to‑end." },
  { id: "04", icon: 'Play', label: "Execute", desc: "Deploy campaigns, content, and channels." },
  { id: "05", icon: 'Settings2', label: "Optimize", desc: "Tune signals into compounding results." },
  { id: "06", icon: 'TrendingUp', label: "Scale", desc: "Expand what works. Retire what doesn’t." },
];

const INDUSTRIES = [
  { name: "Healthcare", icon: 'HeartPulse' },
  { name: "Ecommerce", icon: 'ShoppingBag' },
  { name: "Manufacturing", icon: 'Factory' },
  { name: "Logistics", icon: 'Truck' },
  { name: "SaaS", icon: 'Cpu' },
  { name: "Professional Services", icon: 'Briefcase' },
];

const RESULTS = [
  {
    id: "01",
    icon: 'TrendingUp',
    title: "Increased Lead Generation",
    desc: "Predictable inbound pipelines, channel by channel.",
    stat: "+34%",
    statLabel: "MoM avg",
  },
  {
    id: "02",
    icon: 'Filter',
    title: "Improved Conversion Rates",
    desc: "Higher quality intent at every funnel step.",
    stat: "+1.8pts",
    statLabel: "Uplift",
  },
  {
    id: "03",
    icon: 'Eye',
    title: "Higher Search Visibility",
    desc: "Organic + GEO presence where buyers research.",
    stat: "71%",
    statLabel: "PG‑1 share",
  },
  {
    id: "04",
    icon: 'Sparkles',
    title: "Stronger Brand Positioning",
    desc: "Authority that compounds trust over time.",
    stat: "+47%",
    statLabel: "Mentions",
  },
  {
    id: "05",
    icon: 'Users',
    title: "Customer Acquisition Growth",
    desc: "Reliable cohorts that scale without burning CAC.",
    stat: "−22%",
    statLabel: "CPA shift",
  },
  {
    id: "06",
    icon: 'DollarSign',
    title: "Revenue Expansion Opportunities",
    desc: "New paths to monetize attention you already own.",
    stat: "x1.9",
    statLabel: "Velocity",
  },
];
const page = () => {
  return (
    <div>
      <Hero
        highlightTag="SALES & MARKETING SOLUTIONS"
        titleupper="Growth Isn't Luck."
        titlelower="It's Engineered."
        description={
          "At Base2Brand, we help businesses create predictable growth systems. By combining strategy, digital marketing, sales enablement, and customer acquisition frameworks, we help organizations attract the right audience, convert more opportunities, and scale revenue with confidence."
        }
        buttonLeft={"Start Growing"}
        buttonRight={"Explore Growth Systems"}
      />
      <Philosophy
        highlightTag="Philosophy"
        titleUpper="We Think Like"
        titleLower="Business Owners."
        description={[
          "Most marketing partners focus on campaigns.",
          "We focus on outcomes.",
          "Before launching any strategy, we study how your business generates revenue, how customers make decisions, where opportunities are being lost, and what is preventing growth.",
          "Only then do we build the system.",
          "Because growth doesn't happen through tactics alone.",
          "It happens when marketing, sales, technology, and customer experience work together."
        ]}
      />
      <Challenges
        highlightTag={"Challenges We Solve"}
        titleUpper={"Where Growth"}
        titleLower={"Breaks Down."}
        description={
          "Six recurring patterns that prevent businesses from scaling. We've engineered systems for each."
        }
        challengesData={CHALLENGES}
      />
      <Capabilities 
        highlightTag="Capabilities"
        titleUpper={'The Growth Stack,'}
        titleLower={'Engineered.'}
        description={'Six interconnected systems built to attract the right audience, convert opportunities, and compound revenue.'}
        capabilitiesData={CAPABILITIES}
      />
      <MissionControl 
        highlightTag="Growth Command Center"
        titleUpper={'Monitor The Systems'}
        titleLower={'Driving Revenue.'}
        description={'Every growth channel, every signal, every outcome — visible in one operational view.'}
        modulesData={MODULES}
      />
      <WhyBase2Brand 
        highlightTag="Why Base2Brand"
        titleUpper="Built For Owners. "
        titleLower="Built For Outcomes."
        description="We focus on sustainable growth, not short-term wins."
        reasonsData={REASONS}
      />
      <Process 
       highlightTag={'Process'}
       titleUpper={'Six Steps.'}
       titleLower={'One Growth System.'}
       description={'We focus on sustainable growth, not short-term wins.'}
       StepsData={Steps}
      />
      <Industries 
       highlightTag={'Industries'}
       titleUpper={'Where We'}
       titleLower={'Move Markets.'}
       description={'Vertical depth across the categories where engineered growth compounds fastest.'}
       industriesData={INDUSTRIES}
      />
      <Results
       highlightTag={'Results'} 
       titleUpper={'Growth Backed By '}
       titleLower={'Execution.'}
       description={'Outcomes that show up in pipelines, dashboards, and quarterly reviews — not in vanity reports.'}
       resultsData={RESULTS}
      />
      <FinalCTA 
        highlightTag="Initiate Growth Sequence"
        titleUpper="Ready To Build A"
        titleLower="Predictable Growth Engine?"
        description="Whether you’re looking for more leads, stronger visibility, or scalable customer acquisition systems, Base2Brand helps businesses transform growth challenges into measurable outcomes."
      />
    </div>
  );
};

export default page;
