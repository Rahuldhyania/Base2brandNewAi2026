'use client';

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
import { Zap, Workflow, Cloud, ShieldCheck } from "lucide-react";

const WHY_EMERGING_TECH_CARDS = [
  {
    icon: Zap,
    title: "AI makes operations faster",
    body: "AI helps teams qualify leads, analyze data, automate decisions, improve customer support and reduce repetitive work across departments.",
    metric: "+45%",
    metricLabel: "Faster response time",
  },
  {
    icon: Workflow,
    title: "Automation removes operational drag",
    body: "Manual processes slow growth. Our automation technology solutions connect teams, tools and workflows so businesses can move with less friction.",
    metric: "−40%",
    metricLabel: "Manual workload",
  },
  {
    icon: Cloud,
    title: "Cloud gives businesses room to scale",
    body: "Modern cloud technology helps companies improve performance, security, storage, deployment speed and system reliability.",
    metric: "2.8x",
    metricLabel: "Faster deployment",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity protects growth",
    body: "Every modern system needs security built into the foundation. We design technology with privacy, access control, monitoring and resilience from day one.",
    metric: "100%",
    metricLabel: "Security-first architecture",
  },
];

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
    url: "https://www.base2brand.com/emerging-technologies",
    preview: {
      accent: "#FACC15",
      title: "XR Training — Simulation Console",
      screenshot: "/images/emer1.png",
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
    url: "https://www.base2brand.com/emerging-technologies",
    preview: {
      accent: "#EAB308",
      title: "Vision Pro — Product Experience Layer",
      screenshot: "/images/emer2.png",
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
    url: "https://www.base2brand.com/emerging-technologies",
    preview: {
      accent: "#CA8A04",
      title: "Digital Twin — Operations Center",
      screenshot: "/images/emer3.png",
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
    url: "https://www.base2brand.com/emerging-technologies",
    preview: {
      accent: "#CA8A04",
      title: "Digital Twin — Operations Center",
      screenshot: "/images/emer4.png",
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
        <WhySpatial
          titlePrefix="Why enterprises are investing in"
          titleAccent="Emerging Technologies"
          subtitle="The next advantage belongs to businesses that modernize before they are forced to. Technology is no longer just a support function. It is the operating layer behind growth, efficiency, customer experience and resilience."
          cards={WHY_EMERGING_TECH_CARDS}
        />
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
        <CommandCenter
          title="Every technology. Every innovation. One future-ready ecosystem."
          subtitle="We help businesses adopt emerging technologies through AI, IoT, enterprise automation, cloud platforms, blockchain, digital twins and intelligent systems—bringing innovation, infrastructure and connected operations into one unified technology stack."
        />
        <CtaSection />
        <LandingZone
          eyebrow="Start a transformation"
          titleMain="Tell us where innovation is stuck."
          titleAccent="We'll show you how to unlock it."
          description="Need AI, IoT, automation, cloud, blockchain or connected enterprise solutions? We'll map the technology strategy your business needs next."
          checklist={[
            "No generic technology proposal.",
            "No confusing discovery process.",
            "Just a clear, practical roadmap built around your business goals.",
          ]}
          steps={[
            { title: "We review your vision", desc: "Our team evaluates your technology requirements." },
            { title: "Custom roadmap crafted", desc: "No templates. A strategy built for innovation." },
            { title: "We get to work", desc: "Clear milestones, expert delivery, measurable outcomes." },
          ]}
        />
      </main>
    </div>
  );
};

export default page;
