import React from "react";
import Architecture from "@/components/software-development/Architecture";
import Capabilities from "@/components/software-development/Capabilities";
import CaseStudies from "@/components/software-development/CaseStudies";
import DevelopmentProcess from "@/components/software-development/DevelopmentProcess";
import EngineeringPrinciples from "@/components/software-development/EngineeringPrinciples";
import FinalCTA from "@/components/software-development/FinalCTA";
import Hero from "@/components/software-development/Hero";
import ProductsWeBuild from "@/components/software-development/ProductsWeBuild";
import TechStack from "@/components/software-development/TechStack";
import WhyBase2Brand from "@/components/software-development/WhyBase2Brand";
import Work from "@/components/portfolio-animation/sections/Work";
import CommandCenter from "@/components/shopify-solution/site/CommandCenter";
import Industries from "@/components/ai/Industries";

const CARDS = [
  {
    icon: 'Wrench',
    title: "Production-first engineering",
    desc: "We build software for real users, real traffic and real operational pressure — not just demo screens.",
    outcome: "Products that are stable, scalable and ready for daily business use.",
  },
  {
    icon: 'Cloud',
    title: "Cloud-native from the beginning",
    desc: "Modern software needs infrastructure that can scale. Our enterprise software solutions are designed with secure cloud architecture, continuous delivery, reliable deployments, and proactive monitoring from day one.",
    outcome: "Faster releases, better reliability and lower operational friction.",
  },
  {
    icon: 'Layers3',
    title: "Cross-platform product thinking",
    desc: "Web apps, mobile apps, APIs, dashboards and admin systems should feel like one connected product ecosystem.",
    outcome: "Consistent UX, shared logic and stronger product control.",
  },
  {
    icon: 'Rocket',
    title: "Execution with accountability",
    desc: "Ideas only matter when they ship. We move from roadmap to release with clear ownership, measurable milestones and engineering velocity.",
    outcome: "Less confusion, faster progress and software that actually reaches users.",
  },
];

const PROJECTS = [
  {
    id: "case-01",
    n: "CASE 01",
    tag: "CRM Development · Sales Operations",
    title: "Building a CRM layer for faster lead movement.",
    metrics: [
      { v: "61%", l: "faster response" },
      { v: "+39%", l: "qualified leads" },
    ],
    url: "crm-layer.b2b/case",
    preview: {
      accent: "#FF3B30",
      title: "CRM Layer — Sales Console",
      screenshot: "/images/crm1.png",
      lines: [
        { label: "Avg. response time", value: "-61%" },
        { label: "Qualified leads", value: "+39%" },
        { label: "Active pipelines", value: "1,120" },
      ],
      chart: [26, 31, 36, 42, 47, 53, 58, 64, 69, 75, 80, 86],
    },
  },
  {
    id: "case-02",
    n: "CASE 02",
    tag: "SaaS Product Development · Product Platform",
    title: "Scaling a SaaS platform for faster onboarding.",
    metrics: [
      { v: "-45%", l: "onboarding time" },
      { v: "Daily", l: "release frequency" },
    ],
    url: "saas-platform.b2b/case",
    preview: {
      accent: "#FF4A3D",
      title: "SaaS Platform — Product Console",
      screenshot: "/images/crm2.png",
      lines: [
        { label: "Active workspaces", value: "4,820" },
        { label: "Avg. onboarding time", value: "-45%" },
        { label: "Release frequency", value: "Daily" },
      ],
      chart: [28, 34, 39, 45, 52, 58, 64, 69, 73, 78, 84, 91],
    },
  },
  {
    id: "case-03",
    n: "CASE 03",
    tag: "Custom Software Development · Business Systems",
    title: "Turning manual operations into one connected software system.",
    metrics: [
      { v: "12x", l: "faster reporting" },
      { v: "98%", l: "process visibility" },
    ],
    url: "business-systems.b2b/live",
    preview: {
      accent: "#FF3B30",
      title: "Business Systems — Operations Console",
      screenshot: "/images/crm3.png",
      lines: [
        { label: "Reporting speed", value: "12x" },
        { label: "Process visibility", value: "98%" },
        { label: "Connected workflows", value: "36" },
      ],
      chart: [24, 29, 35, 40, 46, 53, 60, 67, 74, 81, 88, 95],
    },
  },
  {
    id: "case-04",
    n: "CASE 04",
    tag: "App Development · Mobile Experience",
    title: "Launching a mobile app built for adoption and repeat use.",
    metrics: [
      { v: "93%", l: "platform adoption" },
      { v: "42", l: "business workflows" },
    ],
    url: "mobile-experience.b2b/app",
    preview: {
      accent: "#FF4A3D",
      title: "Mobile Experience — Adoption Console",
      screenshot: "/images/crm4.png",
      lines: [
        { label: "Platform adoption", value: "93%" },
        { label: "Business workflows", value: "42" },
        { label: "Daily active users", value: "8,340" },
      ],
      chart: [22, 27, 33, 41, 49, 57, 63, 71, 76, 82, 88, 93],
    },
  },
];

const SOFTWARE_INDUSTRIES = [
  {
    id: "finserv",
    name: "Financial Services",
    use: "Lead qualification, document workflows, KYC support, advisor portals, reporting systems and secure customer platforms.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    use: "Patient portals, appointment workflows, internal dashboards, compliance-friendly data systems and operational tools.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "retail",
    name: "Retail & Ecommerce",
    use: "Commerce platforms, product systems, inventory workflows, customer dashboards, CRO-focused applications and integrations.",
    image:
      "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    use: "Production dashboards, quality systems, supplier portals, field reporting and operational workflow platforms.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "logistics",
    name: "Logistics",
    use: "Dispatch systems, shipment dashboards, driver apps, route workflows and customer communication tools.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "education",
    name: "Education",
    use: "Learning platforms, student portals, admission workflows, course dashboards and CRM-connected systems.",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    use: "Lead management platforms, property portals, booking systems, CRM integrations and sales workflow tools.",
    image:
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "professional-services",
    name: "Professional Services",
    use: "Client portals, document workflows, internal dashboards, scheduling systems and automation-backed operations.",
    image:
      "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=800&q=70",
  },
];

const page = () => {
  return (
    <div className="theme-software-development">
      <main>
        <Hero />
        <WhyBase2Brand
          hightlighttag={'Why Base2Brand '}
          titleUpper={'Modern software needs more than development, It needs'}
          titleLower={'engineering discipline.'}
          description={'That is why our software development services are built around product thinking, engineering quality and long-term scalability.'}
          cardsdata={CARDS}
        />
        <Capabilities />
        <Work
          title="Software cases"
          titleLower="that moved the numbers."
          cardsData={PROJECTS}
          wide_container={true}
          imageBorderColor="#FF3B30"
        />
        <ProductsWeBuild />
        <TechStack />

        <Architecture />
        <Industries
          title="Built for growth-heavy and operations-heavy businesses."
          description="Base2Brand builds software development services for industries where speed, reliability, security and conversion matter. Our systems are designed around the workflows your teams actually run — not generic templates."
          industriesData={SOFTWARE_INDUSTRIES}
        />
        {/* <DevelopmentProcess /> */}
        {/* <CaseStudies /> */}
        <CommandCenter />
        <EngineeringPrinciples />
        <FinalCTA />
      </main>
    </div>
  );
};

export default page;
