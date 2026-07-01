// components/PortfolioSectionV5.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

// ─── Project Data (using picsum – works without config) ──────────────
const projects = [
    {
        id: 1,
        title: "Enterprise Copilot for Sales",
        category: "AI",
        description:
            "Domain‑specific RAG copilot deployed in VPC, reducing handle time by 38%.",
        image: "https://picsum.photos/seed/sales/600/400",
        slug: "enterprise-copilot-sales",
    },
    {
        id: 2,
        title: "Multi‑Cloud Data Platform",
        category: "Cloud",
        description:
            "Unified data warehouse across AWS and Azure with zero‑trust security.",
        image: "https://picsum.photos/seed/cloud/600/400",
        slug: "multi-cloud-data-platform",
    },
    {
        id: 3,
        title: "RPA & Process Intelligence",
        category: "Automation",
        description:
            "Hyperautomation with process mining, intelligent document AI, and orchestration.",
        image: "https://picsum.photos/seed/rpa/600/400",
        slug: "rpa-process-intelligence",
    },
    {
        id: 4,
        title: "AI Governance Framework",
        category: "Governance",
        description:
            "Audit‑ready AI risk framework with privacy & data residency controls.",
        image: "https://picsum.photos/seed/governance/600/400",
        slug: "ai-governance-framework",
    },
    {
        id: 5,
        title: "Composable ERP Extensions",
        category: "Enterprise",
        description:
            "Mission‑critical extensions with API‑first design and 99.99% SLA.",
        image: "https://picsum.photos/seed/erp/600/400",
        slug: "composable-erp-extensions",
    },
    {
        id: 6,
        title: "Digital Strategy & Experience",
        category: "Strategy",
        description:
            "Human‑centred product design and value engineering for transformation.",
        image: "https://picsum.photos/seed/strategy/600/400",
        slug: "digital-strategy-experience",
    },
    {
        id: 7,
        title: "LLM‑Powered Support Agent",
        category: "AI",
        description:
            "Multi‑agent workflow with eval pipelines, cutting ticket resolution by 45%.",
        image: "https://picsum.photos/seed/llm/600/400",
        slug: "llm-support-agent",
    },
    {
        id: 8,
        title: "Smart‑City Data Mesh",
        category: "Cloud",
        description:
            "Scalable data mesh for urban IoT with real‑time analytics and governance.",
        image: "https://picsum.photos/seed/smartcity/600/400",
        slug: "smart-city-data-mesh",
    },
    {
        id: 9,
        title: "Intelligent Document Processing",
        category: "Automation",
        description:
            "AI‑powered document extraction with 99% accuracy and human‑in‑the‑loop review.",
        image: "https://picsum.photos/seed/document/600/400",
        slug: "intelligent-document-processing",
    },
];

const categories = ["All", "AI", "Cloud", "Automation", "Governance", "Enterprise", "Strategy"];

// ─── Stats ─────────────────────────────────────────────────────────────
const stats = [
    { value: "120+", label: "Enterprise Engagements" },
    { value: "8", label: "Global Offices" },
    { value: "4", label: "Continents" },
    { value: "14yrs", label: "Engineering DNA" },
];

export default function PortfolioSectionV5() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const tabsRef = useRef([]);
    const containerRef = useRef(null);

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    useEffect(() => {
        const activeIndex = categories.indexOf(activeCategory);
        const activeElement = tabsRef.current[activeIndex];
        if (activeElement) {
            const rect = activeElement.getBoundingClientRect();
            const containerRect = containerRef.current?.getBoundingClientRect();
            if (containerRect) {
                setIndicatorStyle({
                    left: rect.left - containerRect.left,
                    width: rect.width,
                });
            }
        }
    }, [activeCategory]);

    return (
        <section className="text-[#f0f4ff]">
            {/* ─── Hero ─── */}
            <div className="relative overflow-hidden px-6 pt-12 pb-2 md:px-12 lg:px-24">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_20%,rgba(0,230,255,0.07),transparent_60%)]" />
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="flex flex-col items-start gap-3">
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-(--b2b-primary)">
                            <span className="h-2 w-2 rounded-full bg-(--b2b-primary) animate-pulse" />
                            Our Work
                        </span>
                        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                            <span className="text-(--b2b-primary) bg-clip-text">
                                Engineering
                            </span>
                            <span className="ml-3 text-[#f0f4ff]">at Scale</span>
                        </h1>
                        <p className="max-w-2xl text-lg text-[#9aa5c0]">
                            From copilots to cloud platforms — each engagement is a
                            self‑contained system with its own SLAs, telemetry, and KPIs.
                        </p>
                    </div>

                    {/* Stats */}
                    {/* <div className="mt-10 grid grid-cols-2 gap-4 border-t border-[rgba(255,255,255,0.06)] pt-10 sm:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-2xl font-bold text-[#f0f4ff] md:text-3xl">
                                    {stat.value}
                                </div>
                                <div className="mt-1 text-sm text-[#5e6a85]">{stat.label}</div>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>

            {/* ─── Filter (underline) ─── */}
            <div className="sticky top-0 z-20 border-b border-[rgba(255,255,255,0.05)] bg-[#0b0d12]/80 backdrop-blur-xl">
                <div className="mx-auto max-w-7xl px-6 py-4 md:px-10">
                    <div
                        ref={containerRef}
                        className="relative flex overflow-x-auto gap-6 pb-1 scrollbar-hide"
                    >
                        {categories.map((cat, index) => (
                            <button
                                key={cat}
                                ref={(el) => (tabsRef.current[index] = el)}
                                onClick={() => setActiveCategory(cat)}
                                className={`whitespace-nowrap px-1 py-2 text-sm font-medium transition-colors duration-200 ${activeCategory === cat
                                    ? "text-[#f0f4ff]"
                                    : "text-[#5e6a85] hover:text-[#9aa5c0]"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                        <div
                            className="absolute bottom-0 h-0.5 bg-gradient-to-r from-(--b2b-primary) to-[#4b7aff] transition-all duration-300 ease-out"
                            style={{
                                left: indicatorStyle.left,
                                width: indicatorStyle.width,
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* ─── 3‑Column Grid ─── */}
            <div className="mx-auto max-w-7xl px-10 py-12 ">
                {filteredProjects.length === 0 ? (
                    <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-[rgba(255,255,255,0.08)] bg-[#11141c]">
                        <p className="text-[#5e6a85]">No projects in this category.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

// ─── Project Card (uses regular <img> – no config needed) ────────────
function ProjectCard({ project }) {
    return (
        <Link
            href={`/portfolio/${project.slug}`}
            className="group block overflow-hidden rounded-2xl bg-[#11141c] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)]"
        >
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-[#1c2130]">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
                {/* Category badge */}
                <span className="absolute left-4 top-4 rounded-full bg-[#0b0d12]/80 px-3 py-1 text-xs font-medium text-(--b2b-primary) backdrop-blur-sm">
                    {project.category}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-lg font-bold text-[#f0f4ff] group-hover:text-(--b2b-primary) transition-colors">
                    {project.title}
                </h3>
                <p className="mt-2 text-sm text-[#9aa5c0] line-clamp-3">
                    {project.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-[#4b7aff] transition-all group-hover:text-(--b2b-primary)">
                    <span>Read more</span>
                    <svg
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>
        </Link>
    );
}