'use client';
import React, { useRef } from 'react';
import "../components/Solutions/solution.css";
import "../portfolio-demo/portfoliodemo.css";
import FinalCTA from "@/components/ai/FinalCTA";
import StarsBackground from "@/components/erp/StarsBackground";
import Work from '@/components/portfolio-animation/sections/Work';
import CaseStudyHero from './CaseStudyHero';
import CaseStudyIntro from './CaseStudyIntro';

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
                    fetchFromApi
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
