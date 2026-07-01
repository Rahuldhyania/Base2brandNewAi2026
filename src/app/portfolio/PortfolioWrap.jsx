'use client';
import React from 'react';
import PortfolioSection from './PortfolioSection';
import "../components/Solutions/solution.css";
import Hero from "@/components/Solutions/Hero";
import Narrative from "@/components/ai/Narrative";
import FinalCTA from "@/components/ai/FinalCTA";
import StarsBackground from "@/components/erp/StarsBackground";
import Layout from "@/components/apple/Layout";
import Modules from '@/components/erp/Modules';

const features = [
    { l: "Strategic", d: "Purpose-built solutions" },
    { l: "Scalable", d: "Engineered for growth" },
    { l: "Impactful", d: "Measured by results" },
];

const PORTFOLIO_MODULES = [
    {
        id: "warehouse",
        label: "Warehouse",
        desc: "Stock, bins, inventory flow",
        iconName: "boxes",
        angle: 0,
        image:
            "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1280&h=800&fit=crop&q=80",
    },
    {
        id: "dispatch",
        label: "Dispatch",
        desc: "Orders, jobs, assignments",
        iconName: "truck",
        angle: 45,
        image:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1280&h=800&fit=crop&q=80",
    },
    {
        id: "fleet",
        label: "Fleet",
        desc: "Vehicles, drivers, maintenance",
        iconName: "truck",
        angle: 90,
        image:
            "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1280&h=800&fit=crop&q=80",
    },
    {
        id: "routes",
        label: "Routes",
        desc: "Planning, routing, optimization",
        iconName: "analytics",
        angle: 135,
        image:
            "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1280&h=800&fit=crop&q=80",
    },
    {
        id: "billing",
        label: "Billing",
        desc: "Freight cost, invoices, payments",
        iconName: "wallet",
        angle: 180,
        image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1280&h=800&fit=crop&q=80",
    },
    {
        id: "analytics",
        label: "Analytics",
        desc: "KPIs, delays, performance",
        iconName: "barChart",
        angle: 225,
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&h=800&fit=crop&q=80",
    },
    {
        id: "tracking",
        label: "Tracking",
        desc: "Live status, ETA, proof of delivery",
        iconName: "truck",
        angle: 270,
        image:
            "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?w=1280&h=800&fit=crop&q=80",
    },
    {
        id: "carriers",
        label: "Carriers",
        desc: "Partners, rates, contracts",
        iconName: "users",
        angle: 315,
        image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1280&h=800&fit=crop&q=80",
    },
];

const PORTFOLIO_MODULE_SCROLL_ORDER = [
    "tracking",
    "carriers",
    "warehouse",
    "dispatch",
    "fleet",
    "routes",
    "billing",
    "analytics",
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
                <Modules
                    title={
                        <>
                            Powering Commerce. <span className="text-(--b2b-primary)">{' '} Accelerating Growth.</span>
                        </>
                    }
                    description='A unified Shopify ecosystem built to deliver seamless shopping experiences, streamlined operations, and scalable eCommerce growth across every customer touchpoint'
                    modules={PORTFOLIO_MODULES}
                    scrollOrder={PORTFOLIO_MODULE_SCROLL_ORDER}
                    gridorder_reverce={true}
                    wheelcenterImage={'/images/shopify-new-white.png'}
                />
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
