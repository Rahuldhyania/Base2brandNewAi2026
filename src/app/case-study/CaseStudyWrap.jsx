'use client';
import React, { useRef } from 'react';
import "../components/Solutions/solution.css";
import "../portfolio-demo/portfoliodemo.css";
import FinalCTA from "@/components/ai/FinalCTA";
import StarsBackground from "@/components/erp/StarsBackground";
import Work from '@/components/portfolio-animation/sections/Work';
import CaseStudyHero from './CaseStudyHero';
import CaseStudyIntro from './CaseStudyIntro';

const CASE_STUDIES = [
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
    {
        id: "case-04",
        n: "CASE 04",
        tag: "Ecommerce growth · D2C brand, North America",
        title: "From store experience to paid campaigns — a full growth engine rebuild.",
        metrics: [
            { v: "5.2X", l: "ROAS achieved" },
            { v: "+41%", l: "revenue growth" },
        ],
        url: "growth.d2c-brand.io/live",
        preview: {
            accent: "#00e6ff",
            title: "Growth Console — Performance Overview",
            lines: [
                { label: "Monthly revenue", value: "+41%" },
                { label: "Conversion rate", value: "3.8%" },
                { label: "Repeat purchase", value: "+28%" },
            ],
            chart: [30, 35, 38, 42, 48, 52, 58, 62, 68, 72, 78, 85],
        },
    },
    {
        id: "case-05",
        n: "CASE 05",
        tag: "Healthcare automation · Multi-clinic network",
        title: "Connected lead capture, WhatsApp follow-up, and CRM into one acquisition system.",
        metrics: [
            { v: "61%", l: "faster response time" },
            { v: "+39%", l: "qualified leads" },
        ],
        url: "acquire.health-network.io",
        preview: {
            accent: "#7BC5D9",
            title: "Patient Acquisition — Live Pipeline",
            lines: [
                { label: "Leads today", value: "847" },
                { label: "Avg. response", value: "4.2 min" },
                { label: "Qualified rate", value: "+39%" },
            ],
            chart: [45, 42, 48, 50, 55, 58, 62, 65, 70, 72, 75, 80],
        },
    },
];

const CaseStudyWrap = () => {
    const containerRef = useRef(null);

    return (
        <div className="relative md:min-h-screen overflow-x-hidden" ref={containerRef}>
            <StarsBackground
                className="!fixed inset-0 z-0 pointer-events-none"
                starColor="#00e6ff"
            />

            <div className="relative z-[1]">
                <CaseStudyHero />
                <CaseStudyIntro />
                <Work
                    title="Selected anonymised cases."
                    titleLower="Outcomes, not optics."
                    cardsData={CASE_STUDIES}
                />
                <FinalCTA
                    highlightTag={"READY TO BUILD YOUR CASE STUDY?"}
                    titleUpper={"Have a challenge worth solving?"}
                    titleLower={"Let's define the outcome together."}
                    description={
                        "Whether you're modernising legacy systems, deploying AI at scale, or building a new digital platform — we engineer for measurable results from day one."
                    }
                    CTALeft={"Start Your Project"}
                    CTARight={"Request a Brief"}
                    features={[
                        "Outcome-driven",
                        "Enterprise-grade",
                        "Cross-industry expertise",
                        "Production-ready",
                    ]}
                />
            </div>
        </div>
    );
};

export default CaseStudyWrap;
