"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowUpRight,
    Calendar,
    CheckCircle2,
    Clock,
    Quote,
    User,
    Users,
} from "lucide-react";
import StarsBackground from "@/components/erp/StarsBackground";
import { getProjectBySlug, getRelatedProjects } from "../data/projectsData";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
};

export default function ProjectDetail({ slug }) {
    const project = getProjectBySlug(slug);

    if (!project) {
        return (
            <div className="relative min-h-screen overflow-x-hidden">
                <StarsBackground
                    className="!fixed inset-0 z-0 pointer-events-none"
                    starColor="#00e6ff"
                />
                <section className="relative z-[1] flex min-h-[70vh] items-center justify-center text-[#f0f4ff]">
                    <div className="text-center px-6">
                        <p className="text-xs uppercase tracking-[0.35em] text-(--b2b-primary) mb-4">
                            404 · Not Found
                        </p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6">
                            Project not found
                        </h1>
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-[#9aa5c0] transition hover:text-(--b2b-primary) hover:border-(--b2b-primary)/30"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Portfolio
                        </Link>
                    </div>
                </section>
            </div>
        );
    }

    const related = getRelatedProjects(slug, 3);

    return (
        <div className="relative md:min-h-screen overflow-x-hidden">
            <StarsBackground
                className="!fixed inset-0 z-0 pointer-events-none"
                starColor="#00e6ff"
            />

            <section className="relative z-[1] text-[#f0f4ff] pb-24">
                <div className="mx-auto max-w-7xl px-4 md:px-10">
                    {/* Back link */}
                    <motion.div {...fadeUp} transition={{ duration: 0.4 }} className="pt-10 mb-8">
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#5e6a85] transition hover:text-(--b2b-primary)"
                        >
                            <ArrowLeft className="h-3.5 w-3.5" />
                            Back to Portfolio
                        </Link>
                    </motion.div>

                    {/* Hero */}
                    <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
                        <span className="inline-flex items-center rounded-full bg-(--b2b-primary)/10 border border-(--b2b-primary)/20 px-3 py-1 text-xs font-medium text-(--b2b-primary)">
                            {project.category}
                        </span>

                        <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl">
                            {project.title}
                        </h1>

                        <p className="mt-5 max-w-2xl text-base md:text-lg text-[#9aa5c0] leading-relaxed">
                            {project.description}
                        </p>

                        {project.tags?.length > 0 && (
                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#9aa5c0]"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-white/5 pt-6">
                            {project.client && (
                                <div className="flex items-center gap-2 text-sm text-[#9aa5c0]">
                                    <User className="h-4 w-4 text-(--b2b-primary)" />
                                    {project.client}
                                </div>
                            )}
                            {project.year && (
                                <div className="flex items-center gap-2 text-sm text-[#9aa5c0]">
                                    <Calendar className="h-4 w-4 text-(--b2b-primary)" />
                                    {project.year}
                                </div>
                            )}
                            {project.duration && (
                                <div className="flex items-center gap-2 text-sm text-[#9aa5c0]">
                                    <Clock className="h-4 w-4 text-(--b2b-primary)" />
                                    {project.duration}
                                </div>
                            )}
                            {project.teamSize && (
                                <div className="flex items-center gap-2 text-sm text-[#9aa5c0]">
                                    <Users className="h-4 w-4 text-(--b2b-primary)" />
                                    {project.teamSize}
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Hero image */}
                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.5, delay: 0.05 }}
                        className="mt-10 overflow-hidden rounded-2xl md:rounded-[28px] border border-white/10 bg-[#11141c]"
                    >
                        <img
                            src={project.gallery?.[0] || project.image}
                            alt={project.title}
                            className="w-full aspect-[16/9] object-cover"
                        />
                    </motion.div>

                    {/* Results */}
                    {project.results?.length > 0 && (
                        <motion.div
                            {...fadeUp}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4"
                        >
                            {project.results.map((r) => (
                                <div
                                    key={r.label}
                                    className="rounded-2xl border border-white/10 bg-[#11141c] p-6"
                                >
                                    <p className="text-2xl md:text-3xl font-bold text-(--b2b-primary)">
                                        {r.value}
                                    </p>
                                    <p className="mt-2 text-sm text-[#9aa5c0]">{r.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Main content */}
                        <div className="lg:col-span-2 space-y-6">
                            {project.challenge && (
                                <motion.div
                                    {...fadeUp}
                                    transition={{ duration: 0.5, delay: 0.12 }}
                                    className="rounded-2xl border border-white/10 bg-[#11141c] p-6 md:p-8"
                                >
                                    <h2 className="text-lg md:text-2xl font-bold">
                                        The Challenge
                                    </h2>
                                    <p className="mt-4 text-[#9aa5c0] leading-7">
                                        {project.challenge}
                                    </p>
                                </motion.div>
                            )}

                            {project.solution && (
                                <motion.div
                                    {...fadeUp}
                                    transition={{ duration: 0.5, delay: 0.14 }}
                                    className="rounded-2xl border border-white/10 bg-[#11141c] p-6 md:p-8"
                                >
                                    <h2 className="text-lg md:text-2xl font-bold">
                                        The Solution
                                    </h2>
                                    <p className="mt-4 text-[#9aa5c0] leading-7">
                                        {project.solution}
                                    </p>
                                </motion.div>
                            )}

                            {project.approach?.length > 0 && (
                                <motion.div
                                    {...fadeUp}
                                    transition={{ duration: 0.5, delay: 0.16 }}
                                    className="rounded-2xl border border-white/10 bg-[#11141c] p-6 md:p-8"
                                >
                                    <h2 className="text-lg md:text-2xl font-bold">
                                        Our Approach
                                    </h2>

                                    <div className="mt-6 space-y-6">
                                        {project.approach.map((step, i) => (
                                            <div key={step.phase} className="flex gap-4 md:gap-5">
                                                <div className="flex flex-col items-center">
                                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-(--b2b-primary)/30 bg-(--b2b-primary)/10 text-xs font-bold text-(--b2b-primary)">
                                                        {step.phase}
                                                    </span>
                                                    {i < project.approach.length - 1 && (
                                                        <span className="mt-2 w-px flex-1 bg-white/10" />
                                                    )}
                                                </div>
                                                <div className="pb-2">
                                                    <h3 className="text-sm md:text-base font-semibold text-[#f0f4ff]">
                                                        {step.title}
                                                    </h3>
                                                    <p className="mt-1.5 text-sm text-[#9aa5c0] leading-6">
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {project.features?.length > 0 && (
                                <motion.div
                                    {...fadeUp}
                                    transition={{ duration: 0.5, delay: 0.18 }}
                                    className="rounded-2xl border border-white/10 bg-[#11141c] p-6 md:p-8"
                                >
                                    <h2 className="text-lg md:text-2xl font-bold">
                                        Key Deliverables
                                    </h2>

                                    <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {project.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start gap-2.5 text-sm text-[#9aa5c0]"
                                            >
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-(--b2b-primary)" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}

                            {project.testimonial && (
                                <motion.div
                                    {...fadeUp}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="relative rounded-2xl border border-(--b2b-primary)/20 bg-(--b2b-primary)/5 p-6 md:p-8"
                                >
                                    <Quote className="h-6 w-6 text-(--b2b-primary)/50" />
                                    <p className="mt-4 text-base md:text-lg text-[#f0f4ff] leading-relaxed">
                                        “{project.testimonial.quote}”
                                    </p>
                                    <p className="mt-4 text-sm text-[#9aa5c0]">
                                        <span className="font-semibold text-[#f0f4ff]">
                                            {project.testimonial.author}
                                        </span>
                                        {" · "}
                                        {project.testimonial.role}
                                    </p>
                                </motion.div>
                            )}

                            {project.gallery?.length > 1 && (
                                <motion.div
                                    {...fadeUp}
                                    transition={{ duration: 0.5, delay: 0.22 }}
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                                >
                                    {project.gallery.slice(1).map((src) => (
                                        <div
                                            key={src}
                                            className="overflow-hidden rounded-2xl border border-white/10 bg-[#11141c]"
                                        >
                                            <img
                                                src={src}
                                                alt={project.title}
                                                className="w-full aspect-[4/3] object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {project.role && (
                                <motion.div
                                    {...fadeUp}
                                    transition={{ duration: 0.5, delay: 0.12 }}
                                    className="rounded-2xl border border-white/10 bg-[#11141c] p-6 md:p-8"
                                >
                                    <p className="text-xs uppercase tracking-[0.25em] text-[#5e6a85]">
                                        Our Role
                                    </p>
                                    <p className="mt-2 text-sm text-[#f0f4ff]">{project.role}</p>
                                </motion.div>
                            )}

                            {project.techStack?.length > 0 && (
                                <motion.div
                                    {...fadeUp}
                                    transition={{ duration: 0.5, delay: 0.14 }}
                                    className="rounded-2xl border border-white/10 bg-[#11141c] p-6 md:p-8"
                                >
                                    <p className="text-xs uppercase tracking-[0.25em] text-[#5e6a85]">
                                        Tech Stack
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#9aa5c0]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {project.liveUrl && (
                                <motion.div
                                    {...fadeUp}
                                    transition={{ duration: 0.5, delay: 0.15 }}
                                    className="rounded-2xl border border-white/10 bg-[#11141c] p-6 md:p-8"
                                >
                                    <p className="text-xs uppercase tracking-[0.25em] text-[#5e6a85]">
                                        Live Project
                                    </p>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#f0f4ff] transition hover:border-(--b2b-primary)/30 hover:text-(--b2b-primary)"
                                    >
                                        View Live Project
                                        <ArrowUpRight className="h-4 w-4" />
                                    </a>
                                </motion.div>
                            )}

                            <motion.div
                                {...fadeUp}
                                transition={{ duration: 0.5, delay: 0.16 }}
                                className="rounded-2xl border border-(--b2b-primary)/20 bg-(--b2b-primary)/5 p-6 md:p-8"
                            >
                                <h2 className="text-lg font-bold">Have a similar challenge?</h2>
                                <p className="mt-3 text-sm text-[#9aa5c0] leading-6">
                                    Let&apos;s talk about how we can bring the same engineering
                                    rigor to your project.
                                </p>
                                <Link
                                    href="/contact-us"
                                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-(--b2b-primary) px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(255,106,0,0.35)]"
                                >
                                    Start a Project
                                    <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Related projects */}
                    {related.length > 0 && (
                        <motion.div
                            {...fadeUp}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mt-16"
                        >
                            <h2 className="text-xl md:text-2xl font-bold mb-6">
                                More Projects
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {related.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={`/portfolio/${item.slug}`}
                                        className="group overflow-hidden rounded-2xl border border-white/10 bg-[#11141c] transition hover:border-(--b2b-primary)/30"
                                    >
                                        <div className="relative aspect-[16/10] overflow-hidden bg-[#1c2130]">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <p className="text-xs font-medium text-(--b2b-primary)">
                                                {item.category}
                                            </p>
                                            <h3 className="mt-2 text-base font-bold text-[#f0f4ff] transition-colors group-hover:text-(--b2b-primary)">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
}
