import Industries from "@/components/ai/Industries";
import Work from "@/components/portfolio-animation/sections/Work";
import CommandCenter from "@/components/shopify-solution/site/CommandCenter";
import Capabilities from "@/components/spatial/Capabilities";
import CaseStudies from "@/components/spatial/CaseStudies";
import CtaSection from "@/components/spatial/CtaSection";
import Hero from "@/components/spatial/Hero";
import Process from "@/components/spatial/Process";
import TechStack from "@/components/spatial/TechStack";
import UseCases from "@/components/spatial/UseCases";
import WaveBackground from "@/components/spatial/WaveBackground";
import WhySpatial from "@/components/spatial/WhySpatial";
import React from "react";

const PROJECTS = [
  {
    id: "case-01",
    n: "CASE 01",
    tag: "Spatial Computing · Industrial Simulation",
    title: "Reducing onboarding time with XR training.",
    metrics: [
      { v: "-40%", l: "onboarding time" },
      { v: "5,400", l: "operators trained" },
    ],
    url: "xr-training.b2b/case",
    preview: {
      accent: "#FACC15",
      title: "XR Training — Simulation Console",
      lines: [
        { label: "Operators trained", value: "5,400" },
        { label: "Onboarding time", value: "-40%" },
        { label: "Training scenarios", value: "128" },
      ],
      chart: [62, 58, 54, 49, 45, 40, 35, 31, 27, 24, 21, 18],
    },
  },
  {
    id: "case-02",
    n: "CASE 02",
    tag: "Vision Pro · Product Visualization",
    title: "Creating immersive product experiences.",
    metrics: [
      { v: "2.5x", l: "engagement uplift" },
      { v: "60fps", l: "native interaction flow" },
    ],
    url: "vision-product.b2b/live",
    preview: {
      accent: "#EAB308",
      title: "Vision Pro — Product Experience Layer",
      lines: [
        { label: "Live product sessions", value: "12,840" },
        { label: "Engagement uplift", value: "2.5x" },
        { label: "Interaction performance", value: "60fps" },
      ],
      chart: [24, 31, 38, 45, 52, 58, 64, 71, 78, 84, 90, 96],
    },
  },
  {
    id: "case-03",
    n: "CASE 03",
    tag: "Digital Twin · Operations Intelligence",
    title: "Building real-time digital twin workflows.",
    metrics: [
      { v: "-27%", l: "unplanned downtime" },
      { v: "24/7", l: "operations visibility" },
    ],
    url: "digital-twin.b2b/app",
    preview: {
      accent: "#CA8A04",
      title: "Digital Twin — Operations Center",
      lines: [
        { label: "Live assets monitored", value: "1,260" },
        { label: "Unplanned downtime", value: "-27%" },
        { label: "Predictive alerts", value: "Real-time" },
      ],
      chart: [55, 52, 49, 45, 42, 38, 34, 30, 27, 24, 21, 18],
    },
  },
];
const page = () => {
  return (
    <div className="theme-emerging-technologies">
      <WaveBackground />

      <main>
        <Hero />
        <WhySpatial />
        <Capabilities />
        <Work
          title="Emerging tech cases."
          titleLower="Outcomes, not demos."
          cardsData={PROJECTS}
        />
        <UseCases />
        <TechStack />
        <Industries />
        <Process />
        <CaseStudies />
        <CommandCenter />
        <CtaSection />
      </main>
    </div>
  );
};

export default page;
