// components/PortfolioSectionV5.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { projects, categories } from "./data/projectsData";

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
            <div className="relative overflow-hidden px-6 pt-12 pb-8 md:pb-2 md:px-12 lg:px-24">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_20%,rgba(0,230,255,0.07),transparent_60%)]" />
                <div className="mx-auto max-w-7xl md:px-8">
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
                        <p className="max-w-2xl text-base md:text-lg text-[#9aa5c0]">
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

            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10 pt-12 md:pb-12 ">
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

function ProjectCard({ project }) {
    return (
        <div className="group relative [perspective:1400px]">
            <div className="relative min-h-[380px] md:min-h-[430px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)_translateY(-4px)]">
                
                {/* Front Face */}
                <Link
                    href={`/portfolio/${project.slug}`}
                    className="absolute inset-0 overflow-hidden rounded-2xl bg-[#11141c] shadow-[0_18px_50px_rgba(0,0,0,0.45)] [backface-visibility:hidden]"
                >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#1c2130]">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                        <span className="absolute left-4 top-4 rounded-full bg-[#0b0d12]/80 px-3 py-1 text-xs font-medium text-(--b2b-primary) backdrop-blur-sm">
                            {project.category}
                        </span>
                    </div>

                    <div className="p-5">
                        <h3 className="text-lg font-bold text-[#f0f4ff] transition-colors group-hover:text-(--b2b-primary) line-clamp-1 md:line-clamp-none">
                            {project.title}
                        </h3>
                        <p className="mt-2  text-sm text-[#9aa5c0] line-clamp-2 md:line-clamp-3">
                            {project.description}
                        </p>

                        <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#4b7aff]">
                            Hover to flip
                            <svg
                                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2.5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>

                    {/* Box edge highlight */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
                </Link>

                {/* Back Face */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f1320] via-[#111827] to-[#0b0d12] shadow-[0_18px_50px_rgba(0,0,0,0.55)] [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex h-full flex-col justify-between p-6">
                        <div>
                            <span className="inline-flex rounded-full border border-[#2c3650] bg-white/5 px-3 py-1 text-xs font-medium text-[#9aa5c0]">
                                {project.category}
                            </span>

                            <h3 className="mt-4 text-2xl font-bold text-[#f0f4ff]">
                                {project.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-[#9aa5c0]">
                                {project.description}
                            </p>

                            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-[#7d8ab0]">
                                    3D Box View
                                </p>
                                <p className="mt-2 text-sm text-[#c7d2fe]">
                                    Click below to explore the full case study.
                                </p>
                            </div>
                        </div>

                        <Link
                            href={`/portfolio/${project.slug}`}
                            className="inline-flex items-center justify-center rounded-xl bg-(--b2b-primary) px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(75,122,255,0.35)]"
                        >
                            Learn more
                        </Link>
                    </div>

                    {/* Box edge highlight */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
                </div>
            </div>
        </div>
    );
}