'use client';
import React, { useMemo, useRef, useState } from 'react';
import HeroSection from '@/components/resourcesCatgeories/nebula/HeroSection';
import { CATEGORIES, FEATURED, RESOURCES } from '@/components/resourcesCatgeories/data/resources';
import NebulaBackground from '@/components/resourcesCatgeories/nebula/NebulaBackground';
import { motion } from "framer-motion";
import FeaturedResource from '@/components/resourcesCatgeories/nebula/FeaturedResource';
import StickyFilters from '@/components/resourcesCatgeories/nebula/StickyFilters';
import ResourceGrid from '@/components/resourcesCatgeories/nebula/ResourceGrid';
import './resources.css';
import LatestMeteors from '@/components/resourcesCatgeories/nebula/LatestMeteors';
import ConstellationTopics from '@/components/resourcesCatgeories/nebula/ConstellationTopics';
import AsteroidBelt from '@/components/resourcesCatgeories/nebula/AsteroidBelt';
import NewsletterDome from '@/components/resourcesCatgeories/nebula/NewsletterDome';
import IndustryReports from '@/components/portfolio-animation/ui/IndustryReports';
import MissionDossierFan from '@/components/ui/MissionDossierFan';
import { industriesWithSlug } from '@/components/portfolio-animation/data/industriesData';


const DEFAULT_DOSSIER_CARDS = [
  {
    id: "dossier-01",
    code: "DOSSIER-01",
    title: "AI & Automation",
    body: "Deploy clinical copilots, documentation AI, imaging triage, and intelligent revenue-cycle agents that reduce administrative burden and improve care delivery.",
    accent: "INTELLIGENT AUTOMATION",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-02",
    code: "DOSSIER-02",
    title: "Healthcare Software Development",
    body: "Build secure patient portals, telehealth platforms, clinician workbenches, and interoperable healthcare applications powered by FHIR, HL7, and SMART on FHIR.",
    accent: "DIGITAL HEALTH",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-03",
    code: "DOSSIER-03",
    title: "Governance, Risk & Trust",
    body: "Establish responsible AI governance with clinical model evaluations, regulatory compliance, and alignment with NIST, HIPAA, GDPR, and the EU AI Act.",
    accent: "COMPLIANCE & TRUST",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-04",
    code: "DOSSIER-04",
    title: "Shopify Healthcare Commerce",
    body: "Launch secure Shopify experiences for healthcare brands, wellness products, medical devices, and D2C commerce with seamless integrations and optimized performance.",
    accent: "HEALTH COMMERCE",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-05",
    code: "DOSSIER-05",
    title: "Healthcare Data & AI Intelligence",
    body: "Unify EMRs, imaging, lab systems, and wearable data into actionable insights with predictive analytics, dashboards, and enterprise AI decision support.",
    accent: "DATA INTELLIGENCE",
    channel: "CHANNEL A · LOCKED",
  },
];


const SectionHeader = ({ eyebrow, title, description, id }) => (
    <div id={id} className="mb-2 md:mb-10 max-w-3xl">
        <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.35em] uppercase text-white/45 mb-3"
        >
            {eyebrow}
        </motion.p>
        <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight"
        >
            {title}
        </motion.h2>
        {description && (
            <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-2 md:mt-4 text-white/60 max-w-2xl leading-relaxed"
            >
                {description}
            </motion.p>
        )}              
    </div>
);



const industries = industriesWithSlug;
const page = () => {
    const [query, setQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeTopic, setActiveTopic] = useState(null);
    const libraryRef = useRef(null);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return RESOURCES.filter((r) => {
            if (activeCategory !== "All" && r.category !== activeCategory) return false;
            if (activeTopic) {
                const hay = [r.category, ...(r.tags || []), r.title].join(" ").toLowerCase();
                if (!hay.includes(activeTopic.toLowerCase())) return false;
            }
            if (!q) return true;
            const hay = [r.title, r.excerpt, r.category, r.author.name, ...(r.tags || [])]
                .join(" ")
                .toLowerCase();
            return hay.includes(q);
        });
    }, [query, activeCategory, activeTopic]);

    const scrollToLibrary = () => {
        libraryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const selectTopic = (topic) => {
        setActiveTopic((prev) => (prev === topic ? null : topic));
        setTimeout(scrollToLibrary, 100);
    };
    return (
        <div className="" >
            <NebulaBackground />

            {/* Hero */}
            <HeroSection
                query={query}
                setQuery={setQuery}
                onSelectCategory={(c) => {
                    setActiveCategory(c);
                    scrollToLibrary();
                }}
                onExplore={scrollToLibrary}
            />
            {/* Featured */}
            <section id="featured" className="relative z-10 mx-auto max-w-6xl px-4 md:px-10 mb-14 mt-6 md:mt-0">
                <SectionHeader
                    eyebrow="Emerging from the nebula"
                    title="Featured Resource"
                    description="One study every fortnight — chosen for depth, honesty and the impact we've measured with our own clients."
                />
                <FeaturedResource />
            </section>

            {/* Library grid + filters */}
            <section
                ref={libraryRef}
                id="library"
                className="relative z-10 mx-auto max-w-7xl px-4 md:px-10"
            >
                <SectionHeader
                    eyebrow="The Knowledge Nebula"
                    title="A living library, always in orbit"
                    description="Every guide, playbook and case study — organised as galaxies. Filter by discipline or search the universe."
                />
                <StickyFilters
                    active={activeCategory}
                    onChange={(c) => {
                        setActiveCategory(c);
                        setActiveTopic(null);
                    }}
                    categories={CATEGORIES}
                />

                {activeTopic && (
                    <div className="mt-4 mb-2 text-sm text-white/60 flex items-center gap-2">
                        <span>Filtered by topic:</span>
                        <button
                            type="button"
                            data-testid="clear-topic"
                            onClick={() => setActiveTopic(null)}
                            className="rounded-full glass px-3 py-1 text-white/85 hover:text-white"
                        >
                            {activeTopic} ×
                        </button>
                    </div>
                )}

                <div className="mt-8">
                    <ResourceGrid items={filtered} />
                </div>
            </section>

            <section id='geoinsights' className="relative z-10 mx-auto max-w-7xl px-4 md:px-10 py-12">
                <LatestMeteors items={RESOURCES} />
            </section>

            <section id="industry-reports" className="relative z-10 mx-auto max-w-7xl px-4 md:px-10 py-12">
                <IndustryReports industries={industries} />
            </section>

            <MissionDossierFan
                cards={DEFAULT_DOSSIER_CARDS}
                title="Six dossiers. One Shopify mission."
                subtitle="How we run a Shopify engagement — from discovery to growth operations — as a fan of focused dossiers."
                badgeLabel={DEFAULT_DOSSIER_CARDS.length}
                eyebrow="PLAYBOOKS · MISSION DOSSIERS"
            />

            {/* Popular Topics constellation */}
            <section id="constellation" className="relative z-10 mx-auto max-w-7xl px-4 md:px-10 py-12">
                <SectionHeader
                    eyebrow="Popular topics"
                    title="Chart the constellation of ideas"
                    description="Every glowing node is a topic. Trace the connections — click any node to filter the library below."
                />
                <ConstellationTopics activeTopic={activeTopic} onSelect={selectTopic} />
            </section>

            {/* Downloads asteroid belt */}
            <section id="downloads" className="relative z-10 pb-12">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <SectionHeader
                        eyebrow="Downloads"
                        title="Free tools drifting through space"
                        description="Prompt packs, playbooks, frameworks and templates — orbit past and grab what's useful."
                    />
                </div>
                <AsteroidBelt />
            </section>


            {/* Newsletter observatory dome */}
            <section className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
                <NewsletterDome />
            </section>
        </div>
    )
}

export default page