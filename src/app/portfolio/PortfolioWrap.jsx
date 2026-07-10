'use client';
import React, { useRef } from 'react';
import PortfolioSection from './PortfolioSection';
import "../components/Solutions/solution.css";
import Hero from "@/components/Solutions/Hero";
import Narrative from "@/components/ai/Narrative";
import FinalCTA from "@/components/ai/FinalCTA";
import StarsBackground from "@/components/erp/StarsBackground";
import Work from '@/components/portfolio-animation/sections/Work';
// import RocketNavigator from '@/components/portfolio/RocketNavigator';
// import Work from '@/components/portfolio/Work';

const features = [
    { l: "Strategic", d: "Purpose-built solutions" },
    { l: "Scalable", d: "Engineered for growth" },
    { l: "Impactful", d: "Measured by results" },
];
const PROJECTS = [
  {
    id: "case-01",
    n: "CASE 01",
    tag: "Applied AI risk · Tier‑1 BFSI, Asia‑Pacific",
    title: "Reimagining underwriting with a multi‑agent decision stack.",
    metrics: [
      { v: "61%", l: "drop in turnaround" },
      { v: "$28M", l: "annualised lift" },
    ],
    url: "orbit-underwriting.b2b/case",
    // Rich fake browser preview
    preview: {
      accent: "#F47B52",
      title: "Orbit Decision Fabric — Underwriting Console",
      lines: [
        { label: "Applicants scored today", value: "12,481" },
        { label: "Auto‑approved", value: "76.3%" },
        { label: "Escalated to underwriter", value: "9.1%" },
      ],
      chart: [22, 34, 30, 42, 38, 55, 60, 58, 66, 70, 68, 78],
    },
  },
  {
    id: "case-02",
    n: "CASE 02",
    tag: "Govtech modernization · Public Healthcare Authority EU",
    title: "An AI‑native citizen services platform across 11 regions.",
    metrics: [
      { v: "9.4M", l: "citizens onboarded" },
      { v: "-42%", l: "case backlog" },
    ],
    url: "citizens.hs‑eu.gov/live",
    preview: {
      accent: "#7BC5D9",
      title: "Citizen Services — Regional Overview",
      lines: [
        { label: "Live requests", value: "3,204" },
        { label: "Median resolution", value: "38 min" },
        { label: "Backlog vs. Q2", value: "‑42%" },
      ],
      chart: [50, 48, 44, 42, 40, 38, 36, 32, 30, 28, 27, 25],
    },
  },
  {
    id: "case-03",
    n: "CASE 03",
    tag: "Industry 4.0 data · Global Manufacturer",
    title: "Digital twin of the entire supply chain, decision‑graph driven.",
    metrics: [
      { v: "17%", l: "OEE improvement" },
      { v: "-$54M", l: "inventory carry" },
    ],
    url: "twin.acme‑global.io",
    preview: {
      accent: "#F47B52",
      title: "SupplyGraph Twin — Global Ops",
      lines: [
        { label: "Nodes online", value: "1,204 / 1,206" },
        { label: "Throughput (24h)", value: "+17.4%" },
        { label: "Alerts", value: "6 active" },
      ],
      chart: [40, 44, 48, 46, 52, 58, 62, 64, 70, 74, 78, 82],
    },
  },
];

const PortfolioWrap = () => {
    // const isMobile = useMedia("(max-width: 768px)");
    const containerRef = useRef(null);
    return (
        <div className="relative md:min-h-screen overflow-x-hidden" ref={containerRef}>

            {/* <RocketNavigator containerRef={containerRef} mobile={false} /> */}

            <StarsBackground
                className="!fixed inset-0 z-0 pointer-events-none"
                starColor="#00e6ff"
            />

            <div className='relative z-[1]'>
                <Hero
                    Starlayer={false}
                    highlightTag="OUR WORK"
                    titleupper="Projects That Drive Meaningful"
                    titlelower="Business Results."
                    description="Explore Base2Brand’s portfolio of websites, web apps, eCommerce solutions, and digital campaigns built to improve visibility, engagement, and growth. Every project is designed with strategy, performance, and user experience in mind."
                    buttonLeft="View Projects"
                    buttonRight="Talk to Us"
                />
                <Narrative
                    title={"Building digital products that deliver real business impact."}
                    description={[
                        "Explore our portfolio of AI solutions, enterprise platforms, and web experiences designed to solve complex challenges and accelerate growth.",
                        "Every project combines strategy, technology, and measurable outcomes."
                    ]}
                    features={features}
                    highlightTag={"OUR WORK IN ACTION"}
                    tagList={["01 — Portfolio"]}
                />
                <PortfolioSection />
                <Work cardsData={PROJECTS} />
                <FinalCTA
                    highlightTag={"LET'S BUILD SOMETHING IMPACTFUL"}
                    titleUpper={"Have a project in mind?"}
                    titleLower={"Let's create it together."}
                    description={
                        "Whether you're exploring AI, building a digital platform, or modernizing enterprise systems, we're ready to turn ambitious ideas into measurable results."
                    }
                    CTALeft={"Start Your Project"}
                    CTARight={"Discuss Your Requirements"}
                    features={[
                        "Strategy-led",
                        "Scalable solutions",
                        "Cross-industry expertise",
                        "Outcome-driven",
                    ]}
                />
            </div>
        </div>
    )
}

export default PortfolioWrap
