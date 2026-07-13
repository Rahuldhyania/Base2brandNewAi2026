'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ArrowUpRight, PlayCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "../components/Solutions/solution.css";
import "../portfolio-demo/portfoliodemo.css";
import FinalCTA from "@/components/ai/FinalCTA";

const FEATURED = {
    quote:
        "Base2Brand didn't just ship software — they rewired how our teams make decisions. Six months in, the numbers still surprise our board.",
    name: "Ananya Rao",
    role: "Chief Digital Officer",
    company: "Tier‑1 BFSI Group",
    metric: "61%",
    metricLabel: "faster underwriting",
};

const STORIES = [
    {
        quote:
            "The migration was invisible to our customers and transformational for our margins. Zero downtime, measurable lift within weeks.",
        name: "Marcus Feldt",
        role: "VP Engineering",
        company: "D2C Commerce Brand",
        avatar: "https://i.pravatar.cc/120?img=12",
        result: "5.2X ROAS",
        accent: "#F47B52",
    },
    {
        quote:
            "We went from spreadsheets to a live decision graph across 11 regions. Citizens feel the difference every single day.",
        name: "Priya Nair",
        role: "Programme Director",
        company: "Public Healthcare Authority",
        avatar: "https://i.pravatar.cc/120?img=45",
        result: "9.4M onboarded",
        accent: "#7BC5D9",
    },
    {
        quote:
            "Their engineers thought like operators, not vendors. They optimised for our P&L, not their invoice.",
        name: "David Okonkwo",
        role: "COO",
        company: "Global Manufacturer",
        avatar: "https://i.pravatar.cc/120?img=33",
        result: "17% OEE lift",
        accent: "#F47B52",
    },
    {
        quote:
            "Lead response dropped from hours to minutes. Our clinics finally compete with players ten times our size.",
        name: "Dr. Sana Malik",
        role: "Founder",
        company: "Multi‑clinic Network",
        avatar: "https://i.pravatar.cc/120?img=25",
        result: "+39% qualified leads",
        accent: "#00e6ff",
    },
    {
        quote:
            "They treated our roadmap like their own. Every sprint moved a metric that mattered to the business, not a vanity dashboard.",
        name: "Lucas Meyer",
        role: "Head of Product",
        company: "Enterprise SaaS Platform",
        avatar: "https://i.pravatar.cc/120?img=15",
        result: "3X sales pipeline",
        accent: "#F47B52",
    },
    {
        quote:
            "The data mesh they built quietly powers every decision we make now. It just works, at a scale we couldn't imagine before.",
        name: "Chen Wei",
        role: "CTO",
        company: "Smart‑City Programme",
        avatar: "https://i.pravatar.cc/120?img=52",
        result: "1.2M events/sec",
        accent: "#7BC5D9",
    },
    {
        quote:
            "From first workshop to production, the team was relentlessly pragmatic. No theatre — just outcomes we could measure and defend.",
        name: "Isabella Romano",
        role: "VP Operations",
        company: "Global Logistics Firm",
        avatar: "https://i.pravatar.cc/120?img=20",
        result: "-31% cycle time",
        accent: "#00e6ff",
    },
    {
        quote:
            "Our document processing used to be a bottleneck. Now it's a competitive advantage — 99% accuracy with humans only on the edge cases.",
        name: "Omar Haddad",
        role: "Director of Automation",
        company: "Insurance Group",
        avatar: "https://i.pravatar.cc/120?img=68",
        result: "99% accuracy",
        accent: "#F47B52",
    },
];

const NUMBERS = [
    { v: "4.9/5", l: "Average client rating" },
    { v: "96%", l: "Retention after year one" },
    { v: "120+", l: "Engagements delivered" },
    { v: "8", l: "Global delivery hubs" },
];

const LOGOS = ["ORBIT", "MERIDIAN", "NOVA CARE", "ACME GLOBAL", "HELIOS", "VANTA"];

const SPOTLIGHTS = [
    {
        tag: "Video · 3 min",
        title: "How a BFSI leader cut underwriting turnaround by 61%",
        person: "Ananya Rao · CDO",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1280&h=800&fit=crop&q=80",
    },
    {
        tag: "Story · 5 min read",
        title: "Rebuilding a growth engine around conversion and repeat sales",
        person: "Marcus Feldt · VP Engineering",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1280&h=800&fit=crop&q=80",
    },
];

function StarRow() {
    return (
        <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="fill-[var(--b2b-orange)] text-[var(--b2b-orange)]" />
            ))}
        </div>
    );
}

const SuccessStoriesWrap = () => {
    return (
        <div className="relative min-h-screen overflow-x-hidden bg-[#050507]">
            {/* Warm editorial backdrop — distinct from the star-field pages */}
            <div className="pointer-events-none absolute inset-0 -z-0">
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(244,123,82,0.10),transparent_62%)]" />
                <div className="absolute top-[40%] -right-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,230,255,0.07),transparent_60%)]" />
                <div className="grain" />
            </div>

            <div className="relative z-[1]">
                {/* ── Hero ── */}
                <section
                    id="voices"
                    data-testid="success-hero"
                    className="px-6 md:px-12 pt-28 md:pt-36 pb-12 md:pb-16"
                >
                    <div className="max-w-[1180px] mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="eyebrow flex items-center gap-3 mb-6"
                        >
                            <span className="inline-block w-2 h-2 rounded-full bg-[var(--b2b-orange)] shadow-[0_0_10px_rgba(244,123,82,0.9)]" />
                            Success Stories · Voices from the field
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.85, delay: 0.08 }}
                            className="font-display text-white text-[38px] md:text-[62px] lg:text-[74px] leading-[0.98] tracking-[-0.04em] max-w-[900px]"
                        >
                            The people we build for,
                            <span className="text-[var(--b2b-orange)]"> in their own words.</span>
                        </motion.h1>

                        {/* Featured quote card */}
                        <motion.blockquote
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.2 }}
                            className="relative mt-10 md:mt-14 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 md:p-12 grid lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-12 items-center overflow-hidden"
                        >
                            <Quote className="absolute -top-2 left-6 text-[var(--b2b-orange)]/15" size={96} />
                            <div className="relative">
                                <StarRow />
                                <p className="mt-5 font-display text-white text-[22px] md:text-[30px] leading-[1.3] tracking-[-0.02em]">
                                    “{FEATURED.quote}”
                                </p>
                                <div className="mt-6 flex items-center gap-3">
                                    <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[var(--b2b-orange)] to-[#00e6ff] grid place-items-center font-display text-sm text-black">
                                        {FEATURED.name.split(' ').map((w) => w[0]).join('')}
                                    </div>
                                    <div>
                                        <div className="text-white font-medium text-sm">{FEATURED.name}</div>
                                        <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--b2b-text-muted)]">
                                            {FEATURED.role} · {FEATURED.company}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative rounded-2xl border border-white/10 bg-[rgba(10,11,18,0.6)] p-7 text-center">
                                <div className="font-display text-[var(--b2b-orange)] text-6xl md:text-7xl tracking-[-0.04em] leading-none">
                                    {FEATURED.metric}
                                </div>
                                <div className="mt-3 font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--b2b-text-muted)]">
                                    {FEATURED.metricLabel}
                                </div>
                            </div>
                        </motion.blockquote>

                        {/* Logo marquee */}
                        <div className="mt-10 md:mt-14">
                            <div className="eyebrow-muted mb-4">Trusted by teams at</div>
                            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                                {LOGOS.map((logo) => (
                                    <span
                                        key={logo}
                                        className="font-display text-lg md:text-xl text-white/25 tracking-[0.06em] hover:text-white/50 transition-colors"
                                    >
                                        {logo}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Testimonial grid ── */}
                <section className="px-6 md:px-12 py-12 md:py-16 border-t border-white/8">
                    <div className="max-w-[1180px] mx-auto">
                        <div className="flex items-end justify-between gap-6 mb-8 md:mb-12">
                            <h2 className="font-display text-white text-[30px] md:text-[46px] leading-[1] tracking-[-0.035em]">
                                Outcomes worth
                                <span className="block text-[var(--b2b-text-muted)]">talking about.</span>
                            </h2>
                            <span className="hidden md:block font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--b2b-text-muted)]">
                                {STORIES.length} featured voices
                            </span>
                        </div>

                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            loop={true}
                            speed={800}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            pagination={{ clickable: true }}
                            grabCursor={true}
                            breakpoints={{
                                768: { slidesPerView: 2 },
                                1280: { slidesPerView: 3 },
                            }}
                            className="success-swiper !pb-14"
                        >
                            {STORIES.map((s) => (
                                <SwiperSlide key={s.name} className="!h-auto pb-2">
                                    <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:p-8 flex flex-col">
                                        <div className="flex items-center justify-between">
                                            <StarRow />
                                            <span
                                                className="font-display text-lg tracking-[-0.02em]"
                                                style={{ color: s.accent }}
                                            >
                                                {s.result}
                                            </span>
                                        </div>
                                        <p className="mt-5 text-white/85 text-[16px] md:text-[18px] leading-[1.55] flex-1">
                                            “{s.quote}”
                                        </p>
                                        <div className="mt-7 pt-6 border-t border-white/8 flex items-center gap-3">
                                            <img
                                                src={s.avatar}
                                                alt={s.name}
                                                className="h-11 w-11 rounded-full object-cover"
                                                loading="lazy"
                                            />
                                            <div>
                                                <div className="text-white font-medium text-sm">{s.name}</div>
                                                <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--b2b-text-muted)]">
                                                    {s.role} · {s.company}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition"
                                            style={{
                                                background: `linear-gradient(160deg, ${s.accent}1f, transparent 48%)`,
                                            }}
                                        />
                                    </article>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>

                {/* ── By the numbers band ── */}
                <section className="px-6 md:px-12 py-12 md:py-16">
                    <div className="max-w-[1180px] mx-auto rounded-3xl border border-white/10 bg-[rgba(10,11,18,0.55)] overflow-hidden">
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/8">
                            {NUMBERS.map((n) => (
                                <div key={n.l} className="px-6 py-8 md:py-10 text-center">
                                    <div className="font-display text-white text-4xl md:text-5xl tracking-[-0.03em]">
                                        {n.v}
                                    </div>
                                    <div className="mt-2 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--b2b-text-muted)]">
                                        {n.l}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Story spotlights ── */}
                <section className="px-6 md:px-12 py-12 md:py-16 border-t border-white/8">
                    <div className="max-w-[1180px] mx-auto">
                        <div className="eyebrow mb-4">Watch & read</div>
                        <h2 className="font-display text-white text-[30px] md:text-[46px] leading-[1] tracking-[-0.035em] mb-8 md:mb-12">
                            Story spotlights.
                        </h2>
                        <div className="grid md:grid-cols-2 gap-5">
                            {SPOTLIGHTS.map((sp, i) => (
                                <motion.a
                                    href="#contact"
                                    key={sp.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="group relative overflow-hidden rounded-3xl border border-white/10 min-h-[300px] md:min-h-[360px] flex items-end"
                                >
                                    <img
                                        src={sp.image}
                                        alt={sp.title}
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                                    <div className="relative p-7 md:p-8 w-full">
                                        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--b2b-orange)] mb-3">
                                            <PlayCircle size={14} />
                                            {sp.tag}
                                        </div>
                                        <h3 className="font-display text-white text-xl md:text-2xl leading-tight tracking-[-0.02em] max-w-[440px]">
                                            {sp.title}
                                        </h3>
                                        <div className="mt-4 flex items-center justify-between">
                                            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-white/60">
                                                {sp.person}
                                            </span>
                                            <span className="grid place-items-center h-9 w-9 rounded-full border border-white/20 group-hover:bg-[var(--b2b-orange)] group-hover:border-[var(--b2b-orange)] group-hover:text-black transition">
                                                <ArrowUpRight size={15} />
                                            </span>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </section>

                <FinalCTA
                    highlightTag={"WANT TO BE OUR NEXT SUCCESS STORY?"}
                    titleUpper={"Great outcomes start with"}
                    titleLower={"one honest conversation."}
                    description={
                        "Tell us where you want to be in twelve months. We'll show you the systems, the roadmap, and the measurable milestones to get there."
                    }
                    CTALeft={"Start Your Story"}
                    CTARight={"Talk to Our Team"}
                    features={[
                        "Outcome-first",
                        "Transparent metrics",
                        "Long-term partnership",
                        "Global delivery",
                    ]}
                />
            </div>
        </div>
    );
};

export default SuccessStoriesWrap;
