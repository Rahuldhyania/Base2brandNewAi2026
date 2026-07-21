"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import {
    getIndustryBySlug,
    getRelatedIndustries,
} from "@/components/portfolio-animation/data/industriesData";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
};

export default function IndustryDetail({ slug }) {
    const industry = getIndustryBySlug(slug);

    if (!industry) {
        return (
            <section className="relative min-h-[70vh] flex items-center justify-center">
                <div className="text-center">
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan-400 mb-4">
                        404 · Not Found
                    </p>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Industry report not found
                    </h1>
                    <Link
                        href="/resources-catgeories#industry-reports"
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2.5 text-sm text-cyan-300 transition hover:bg-cyan-500/20"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Industry Reports
                    </Link>
                </div>
            </section>
        );
    }

    const related = getRelatedIndustries(slug, 4);

    return (
        <section className="relative overflow-hidden pb-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,.08),transparent_65%)]" />

            <div className="container relative z-10 mx-auto px-4 md:px-0">
                {/* Back link */}
                <motion.div {...fadeUp} transition={{ duration: 0.4 }} className="pt-10 mb-8">
                    <Link
                        href="/resources-catgeories#industry-reports"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50 transition hover:text-cyan-400"
                    >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        Back to Industry Reports
                    </Link>
                </motion.div>

                {/* Hero */}
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden rounded-2xl md:rounded-[32px] border border-white/10 bg-[#080C16]/80 backdrop-blur-xl p-6 md:p-12"
                >
                    <div
                        className={`absolute inset-0 opacity-60 bg-gradient-to-br ${industry.color}`}
                    />

                    <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                        <div className="flex h-14 w-14 md:h-20 md:w-20 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl md:text-4xl">
                            {industry.icon}
                        </div>

                        <div className="flex-1">
                            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/40">
                                {industry.code}
                            </p>

                            <h1 className="mt-2 text-3xl md:text-5xl font-bold text-white leading-tight">
                                {industry.title} Industry Report
                            </h1>

                            <p className="mt-4 max-w-2xl text-white/60 leading-7">
                                {industry.tagline}
                            </p>

                            <div className="mt-5 flex flex-wrap items-center gap-3">
                                <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                                    {industry.growth} Growth
                                </span>
                                <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                                    {industry.status}
                                </span>
                                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60">
                                    {industry.reports} Reports
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
                >
                    {[
                        { label: "Market Size", value: industry.stats?.marketSize },
                        { label: "CAGR", value: industry.stats?.cagr },
                        { label: "AI Adoption", value: industry.stats?.aiAdoption },
                        { label: "Active Reports", value: industry.reports },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-xl md:rounded-2xl border border-white/10 bg-[#080C16]/60 p-4 md:p-6 backdrop-blur-xl"
                        >
                            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/40">
                                {stat.label}
                            </p>
                            <p className="mt-2 text-xl md:text-3xl font-bold text-white">
                                {stat.value ?? "—"}
                            </p>
                        </div>
                    ))}
                </motion.div>

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left column */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Description */}
                        <motion.div
                            {...fadeUp}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="rounded-2xl border border-white/10 bg-[#080C16]/60 p-6 md:p-8 backdrop-blur-xl"
                        >
                            <h2 className="text-lg md:text-2xl font-semibold text-white">
                                Overview
                            </h2>
                            <p className="mt-4 text-white/60 leading-8">
                                {industry.description}
                            </p>
                        </motion.div>

                        {/* Activity trend */}
                        <motion.div
                            {...fadeUp}
                            transition={{ duration: 0.5, delay: 0.12 }}
                            className="rounded-2xl border border-white/10 bg-[#080C16]/60 p-6 md:p-8 backdrop-blur-xl"
                        >
                            <h2 className="text-lg md:text-2xl font-semibold text-white">
                                12-Month Activity Trend
                            </h2>

                            <div className="mt-8 flex h-32 md:h-40 items-end gap-2 md:gap-3">
                                {industry.trend.map((bar, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 4 }}
                                        whileInView={{ height: `${bar}%` }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05, duration: 0.5 }}
                                        className="flex-1 rounded-t-md bg-gradient-to-t from-cyan-500 to-sky-400"
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Reports list */}
                        <motion.div
                            {...fadeUp}
                            transition={{ duration: 0.5, delay: 0.14 }}
                            className="rounded-2xl border border-white/10 bg-[#080C16]/60 backdrop-blur-xl overflow-hidden"
                        >
                            <div className="p-6 md:p-8 pb-0">
                                <h2 className="text-lg md:text-2xl font-semibold text-white">
                                    Latest Reports
                                </h2>
                            </div>

                            <div className="mt-4">
                                {(industry.reportsList || []).map((report) => (
                                    <div
                                        key={report.title}
                                        className="border-t border-white/5 px-6 md:px-8 py-4 md:py-5"
                                    >
                                        <h3 className="text-sm md:text-base font-medium text-white">
                                            {report.title}
                                        </h3>
                                        <p className="mt-1 text-[11px] md:text-xs text-white/40">
                                            {report.type} · {report.pages} pages · {report.date}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right column */}
                    <div className="space-y-6">
                        {/* Focus areas */}
                        <motion.div
                            {...fadeUp}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="rounded-2xl border border-white/10 bg-[#080C16]/60 p-6 md:p-8 backdrop-blur-xl"
                        >
                            <h2 className="text-lg md:text-xl font-semibold text-white">
                                Focus Areas
                            </h2>

                            <ul className="mt-5 space-y-3">
                                {(industry.focusAreas || []).map((area) => (
                                    <li
                                        key={area}
                                        className="flex items-start gap-3 text-sm text-white/70"
                                    >
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                                        <span>{area}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            {...fadeUp}
                            transition={{ duration: 0.5, delay: 0.12 }}
                            className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-transparent p-6 md:p-8 backdrop-blur-xl"
                        >
                            <h2 className="text-lg md:text-xl font-semibold text-white">
                                Need a custom brief?
                            </h2>
                            <p className="mt-3 text-sm text-white/60 leading-6">
                                Talk to our {industry.title.toLowerCase()} specialists about a
                                tailored research or implementation brief.
                            </p>
                            <Link
                                href="/contact-us"
                                className="mt-5 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-medium text-[#020617] transition hover:bg-cyan-400"
                            >
                                Talk to Specialists
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </motion.div>

                        {/* Related industries */}
                        {related.length > 0 && (
                            <motion.div
                                {...fadeUp}
                                transition={{ duration: 0.5, delay: 0.14 }}
                                className="rounded-2xl border border-white/10 bg-[#080C16]/60 p-6 md:p-8 backdrop-blur-xl"
                            >
                                <h2 className="text-lg md:text-xl font-semibold text-white">
                                    Related Industries
                                </h2>

                                <div className="mt-5 space-y-2">
                                    {related.map((item) => (
                                        <Link
                                            key={item.id}
                                            href={`/resources-catgeories/industries/${item.slug}`}
                                            className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 transition hover:border-cyan-500/20 hover:bg-white/[0.05]"
                                        >
                                            <span className="text-lg">{item.icon}</span>
                                            <span className="flex-1 text-sm text-white/70 transition group-hover:text-white">
                                                {item.title}
                                            </span>
                                            <ArrowUpRight className="h-4 w-4 text-white/30 transition group-hover:text-cyan-400" />
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
