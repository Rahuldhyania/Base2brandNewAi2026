'use client'
import React from 'react';
import Modules from '@/components/erp/Modules';
import Hero from "@/components/Solutions/Hero";
import StarsBackground from "@/components/erp/StarsBackground";
import WhyBase2Brand from "@/components/software-development/WhyBase2Brand";

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
const PortfolioSubpages = () => {
    return (
        <div className='relative md:min-h-screen overflow-x-hidden'>
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
                <WhyBase2Brand
                    hightlighttag={'Why Base2Brand'}
                    titleUpper={'Why modern software products require'}
                    titleLower={'engineering discipline.'}
                    description={'Real software products are continuously operated, evolved, and scaled — not just launched. Our engineering approach is built around that reality.'}
                    cardsdata={CARDS}
                />
                <div className='py-12'>
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
                 // wheelcenterImage={'/images/shopify-new-white.png'}
                 />
                </div>
            </div>
        </div>
    )
}

export default PortfolioSubpages