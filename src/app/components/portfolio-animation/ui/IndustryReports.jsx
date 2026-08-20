"use client";

import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { slugify } from "../data/industriesData";


export default function IndustryReports({ industries }) {
    return (
        <section  className="relative overflow-hidden">
            {/* Background */}
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,.08),transparent_65%)]" /> */}

            <div className="container relative z-10 mx-auto">
                {/* Heading */}

                <div className="max-w-3xl mb-14">
                    <span className="text-xs uppercase tracking-[0.35em] text-cyan-400">
                        Intelligence Center
                    </span>

                    <h2 className="md:mt-5  text-2xl lg:text-3xl xl:text-5xl font-bold text-white">
                        Industry Reports
                    </h2>

                    <p className="mt-5 text-white/60 leading-8">
                        Discover industry-specific reports, benchmarks and AI trends to
                        support enterprise decision making.
                    </p>
                </div>

                {/* Dashboard */}

                <div className="overflow-hidden rounded-xl md:rounded-[32px] border border-white/10 bg-[#080C16]/80 backdrop-blur-xl">

                    {/* Header */}

                    <div className="hidden md:grid md:grid-cols-[3.5fr_1fr_1fr_1fr_auto] not-only-of-type:border-b border-white/10 px-8 py-5 text-xs uppercase tracking-[0.2em] text-white/40">

                        <div className="">Industry</div>

                        <div className=" text-center">
                            Reports
                        </div>

                        <div className=" text-center">
                            Growth
                        </div>

                        <div className="text-center">
                            Activity
                        </div>

                        <div className=" text-right">
                            View
                        </div>

                    </div>

                    {/* Rows */}

                    {industries.map((item, index) => (
                        <m.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.45,
                                delay: index * 0.08,
                            }}
                            viewport={{ once: true }}
                            whileHover="hover"
                            className="group relative border-b border-white/5 last:border-none"
                        >
                            {/* Hover Glow */}

                            <m.div
                                variants={{
                                    hover: {
                                        opacity: 1,
                                    },
                                }}
                                className={`absolute inset-0 opacity-0 bg-gradient-to-r ${item.color}`}
                            />

                            <Link
                                href={`/resources-catgeories/industries/${item.slug || slugify(item.title)}`}
                                className="relative grid items-center gap-2 md:gap-5 px-4 py-1 md:py-2 grid-cols-[3.5fr_1fr_1fr_1fr_auto]"
                            >

                                {/* Industry */}

                                <div className="flex items-center gap-4">

                                    <div className="flex h-3 md:h-9 w-3 md:w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm md:text-xl">
                                        {item.icon}
                                    </div>

                                    <div>
                                        <p className="text-[8px] md:text-[10px] uppercase tracking-[0.28em] text-white/30">
                                            {item.code}
                                        </p>

                                        <h3 className=" md:mt-1 text-sm md:text-base lg:text-[18px] leading-4 md:font-semibold text-white">
                                            {item.title}
                                        </h3>
                                    </div>

                                </div>

                                {/* Reports */}

                                <div className="text-center">

                                    <h4 className="text-sm md:text-xl md:leading-6 font-semibold text-white">
                                        {item.reports}
                                    </h4>

                                    <p className="md:mt-1 text-[11px] text-white/40">
                                        Reports
                                    </p>

                                </div>

                                {/* Growth */}

                                <div className="flex justify-center">

                                    <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-1 md:px-3 md:py-1 text-xs font-medium text-emerald-300">
                                        {item.growth}
                                    </span>

                                </div>

                                {/* Activity */}

                                <div className="flex justify-center">

                                    <div className="flex h-6 md:h-8 items-end gap-[2px]">

                                        {item.trend.map((bar, i) => (
                                            <m.div
                                                key={i}
                                                initial={{ height: 4 }}
                                                whileInView={{
                                                    height: `${bar}%`,
                                                }}
                                                transition={{
                                                    delay: i * 0.03,
                                                    duration: 0.45,
                                                }}
                                                className="w-[2px] md:w-1 rounded-full bg-gradient-to-t from-cyan-500 to-sky-400"
                                            />
                                        ))}

                                    </div>

                                </div>

                                {/* Arrow */}

                                <div className="flex justify-end">

                                    <m.div
                                        variants={{
                                            hover: {
                                                x: 5,
                                                y: -5,
                                            },
                                        }}
                                    >
                                        <ArrowUpRight
                                            className="text-cyan-400 transition-colors group-hover:text-white text-base md:text-xl lg:text-[22px]"
                                        />
                                    </m.div>

                                </div>

                            </Link>
                        </m.div>
                    ))}

                    {/* Footer */}

                    <div className="flex items-center justify-between border-t border-white/10 px-4 py-2 text-sm">

                        <div className="text-white/40">
                            <span className="text-cyan-400">●</span> {industries.length} Industries
                        </div>

                        <button className="rounded-full text-xs md:text-sm border border-cyan-500/20 bg-cyan-500/10 px-2 md:px-4 py-1 md:py-2 text-cyan-300 transition hover:bg-cyan-500/20">
                            View All Reports
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
}