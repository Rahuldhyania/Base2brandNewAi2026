'use client';
import React from 'react';
import PortfolioSection from './PortfolioSection';
import "../components/Solutions/solution.css";
import Hero from "@/components/Solutions/Hero";
import Narrative from "@/components/ai/Narrative";
import FinalCTA from "@/components/ai/FinalCTA";
import StarsBackground from "@/components/erp/StarsBackground";
import Layout from "@/components/apple/Layout";

const features = [
    { l: "Strategic", d: "Purpose-built solutions" },
    { l: "Scalable", d: "Engineered for growth" },
    { l: "Impactful", d: "Measured by results" },
];
const PortfolioWrap = () => {
    return (
        // <Layout tint="green">
            <div className="relative md:min-h-screen overflow-x-hidden">
                <StarsBackground
                    className="!fixed inset-0 z-0 pointer-events-none"
                    starColor="#00e6ff"
                />

                <div className='relative z-[1]'>
                    <Hero
                        Starlayer={false}
                        highlightTag="OUR WORK"
                        titleupper="Projects That"
                        titlelower="Drive Results."
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
        // </Layout>
    )
}

export default PortfolioWrap
