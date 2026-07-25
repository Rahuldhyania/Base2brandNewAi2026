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
import { LandingZone } from "@/sections/LandingZone";
import React from "react";

const EMERGING_TECH_INDUSTRIES = [
  {
    id: "retail",
    name: "Retail & Ecommerce",
    image:
      "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industry 4.0",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "education",
    name: "Education & Training",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "finserv",
    name: "Financial Services",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "logistics",
    name: "Logistics & Field Operations",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "professional-services",
    name: "Professional Services",
    image:
      "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=800&q=70",
  },
];

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
      screenshot: "/images/ETcase1.svg",
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
      screenshot: "/images/ETcase2.svg",
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
      screenshot: "/images/ETcase3.svg",
      lines: [
        { label: "Live assets monitored", value: "1,260" },
        { label: "Unplanned downtime", value: "-27%" },
        { label: "Predictive alerts", value: "Real-time" },
      ],
      chart: [55, 52, 49, 45, 42, 38, 34, 30, 27, 24, 21, 18],
    },
  },
  {
    id: "case-04",
    n: "CASE 04",
    tag: "Spatial Commerce · Product Experience",
    title: "Creating immersive product experiences.",
    metrics: [
      { v: "2.5x", l: "engagement uplift" },
      { v: "60fps", l: "native interaction flow" },
    ],
    url: "digital-twin.b2b/app",
    preview: {
      accent: "#CA8A04",
      title: "Digital Twin — Operations Center",
      screenshot: "/images/ETcase4.svg",
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
          imageBorderColor="#FACC15"
        />
        <UseCases />
        <TechStack />
        <Industries
          title="Built for industries where technology decides speed, trust and scale."
          description="Our next-gen business technology approach adapts to each industry's workflows, risks and growth goals."
          industriesData={EMERGING_TECH_INDUSTRIES}
          ctaLabel="Explore Practice"
        />
        <Process />
        <CaseStudies />
        <CommandCenter />
        <CtaSection />
        <LandingZone />
      </main>
    </div>
  );
};

export default page;
