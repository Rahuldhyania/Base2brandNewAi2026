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
    title: "Production engineering over prototypes.",
    desc: "Products are built to operate, evolve, and scale — not just to demo. We engineer for production from day one.",
  },
  {
    icon: 'Cloud',
    title: "Cloud-native foundations from day one.",
    desc: "Security, resilience, and observability are engineered into every layer of the platform, not bolted on later.",
  },
  {
    icon: 'Layers3',
    title: "Cross-platform product thinking.",
    desc: "Web, Android, APIs, and infrastructure work as a unified ecosystem with shared logic and consistent UX.",
  },
  {
    icon: 'Rocket',
    title: "Execution matters.",
    desc: "Shipping consistently is more valuable than endless planning. We move with engineering velocity and rigor.",
  },
];

const PROJECTS = [
  {
    id: "case-01",
    n: "CASE 01",
    tag: "SaaS Engineering · Product Platform",
    title: "Scaling a SaaS platform for faster onboarding.",
    metrics: [
      { v: "-45%", l: "onboarding time" },
      { v: "Daily", l: "deployment frequency" },
    ],
    url: "saas-platform.b2b/case",
    preview: {
      accent: "#FF3B30",
      title: "SaaS Platform — Product Console",
      lines: [
        { label: "Active workspaces", value: "4,820" },
        { label: "Avg. onboarding time", value: "-45%" },
        { label: "Release frequency", value: "Daily" },
      ],
      chart: [28, 34, 39, 45, 52, 58, 64, 69, 73, 78, 84, 91],
    },
  },
  {
    id: "case-02",
    n: "CASE 02",
    tag: "Enterprise Platform · Workforce Systems",
    title: "Building a workforce platform for distributed teams.",
    metrics: [
      { v: "93%", l: "platform adoption" },
      { v: "42", l: "business workflows" },
    ],
    url: "workforce-platform.b2b/live",
    preview: {
      accent: "#FF4A3D",
      title: "Enterprise Workforce — Operations Hub",
      lines: [
        { label: "Teams onboarded", value: "42" },
        { label: "Platform adoption", value: "93%" },
        { label: "Open workflow issues", value: "18" },
      ],
      chart: [22, 27, 33, 41, 49, 57, 63, 71, 76, 82, 88, 93],
    },
  },
  {
    id: "case-03",
    n: "CASE 03",
    tag: "Ecommerce Engineering · Modernization",
    title: "Modernizing ecommerce for speed and conversion.",
    metrics: [
      { v: "3x", l: "transaction throughput" },
      { v: "+14%", l: "conversion lift" },
    ],
    url: "ecommerce-modernization.b2b/app",
    preview: {
      accent: "#FF3B30",
      title: "Ecommerce Modernization — Revenue Layer",
      lines: [
        { label: "Transaction throughput", value: "3x" },
        { label: "Conversion lift", value: "+14%" },
        { label: "Checkout latency", value: "-62%" },
      ],
      chart: [35, 38, 44, 49, 55, 61, 68, 74, 79, 86, 92, 98],
    },
  },
];
const page = () => {
  return (
    <div className="theme-software-development">
      <main>
        <Hero />
        <WhyBase2Brand
          hightlighttag={'Why Base2Brand '}
          titleUpper={'Why modern software products require'}
          titleLower={'engineering discipline.'}
          description={'Real software products are continuously operated, evolved, and scaled — not just launched. Our engineering approach is built around that reality.'}
          cardsdata={CARDS}
        />
        <Capabilities />
        <Work
          title="Selected software cases."
          titleLower="Outcomes, not deployments."
          cardsData={PROJECTS}
        />
        <ProductsWeBuild />
        <TechStack />

        <Architecture />
        <Industries />
        <DevelopmentProcess />
        <CaseStudies />
        <CommandCenter />
        <EngineeringPrinciples />
        <FinalCTA />
      </main>
    </div>
  );
};

export default page;
