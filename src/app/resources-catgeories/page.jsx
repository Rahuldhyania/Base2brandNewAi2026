'use client';

import React, { useRef, useState } from 'react';
import HeroSection from '@/components/resourcesCatgeories/nebula/HeroSection';
import NebulaBackground from '@/components/resourcesCatgeories/nebula/NebulaBackground';
import { motion } from "framer-motion";
import './resources.css';
import ConstellationTopics from '@/components/resourcesCatgeories/nebula/ConstellationTopics';
import AsteroidBelt from '@/components/resourcesCatgeories/nebula/AsteroidBelt';
import NewsletterDome from '@/components/resourcesCatgeories/nebula/NewsletterDome';
import MissionDossierFan from '@/components/ui/MissionDossierFan';
import BlogsSection from './blogs/BlogsSection';
import ArticlesSection from './articles/ArticlesSection';
import InsightsSection from './insights/InsightsSection';
import IndustriesSection from './industries/IndustriesSection';

const DEFAULT_DOSSIER_CARDS = [
  {
    id: "dossier-01",
    code: "DOSSIER-01",
    title: "RFP vs RFQ vs Tender",
    body: "An RFQ focuses on price, an RFP evaluates your solution and value, while a tender follows a formal bidding process.",
    accent: "BID BASICS",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-02",
    code: "DOSSIER-02",
    title: "Reading a Freight Tender",
    body: "Review the scope, pricing format, SLAs, compliance rules, deadlines and submission instructions before preparing your bid.",
    accent: "TENDER REVIEW",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-03",
    code: "DOSSIER-03",
    title: "Winning RFP Response",
    body: "Highlight your capacity, reliability, compliance and service value with clear evidence and a simple onboarding plan.",
    accent: "RESPONSE STRATEGY",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-04",
    code: "DOSSIER-04",
    title: "Bidding Mistakes to Avoid",
    body: "Avoid late submissions, missing documents, incorrect formats, generic proposals and pricing that may lead to losses.",
    accent: "RISK CHECK",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-05",
    code: "DOSSIER-05",
    title: "FMCSA Compliance for Tenders",
    body: "Keep your MC/DOT authority, insurance, safety records and carrier compliance documents active and up to date.",
    accent: "COMPLIANCE",
    channel: "CHANNEL A · LOCKED",
  },
  {
    id: "dossier-06",
    code: "DOSSIER-06",
    title: "Where to Find Tenders",
    body: "Explore government portals, private freight RFPs and relevant industry platforms for opportunities that match your capabilities.",
    accent: "BID SOURCING",
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

export default function ResourcesCategoriesPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTopic, setActiveTopic] = useState(null);
  const libraryRef = useRef(null);
  const blogsSectionRef = useRef(null);

  const scrollToLibrary = () => {
    libraryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const selectTopic = (topic) => {
    setActiveTopic((prev) => (prev === topic ? null : topic));
    setTimeout(scrollToLibrary, 100);
  };

  return (
    <div>
      <NebulaBackground />

      <HeroSection
        query={query}
        setQuery={setQuery}
        onSelectCategory={(category) => {
          setActiveCategory(category);
          scrollToLibrary();
        }}
        onExplore={scrollToLibrary}
      />

      <section
        id="featured"
        ref={blogsSectionRef}
        className="relative z-10 mx-auto max-w-6xl px-4 md:px-10 mb-14 mt-6 md:mt-0 scroll-mt-24 md:scroll-mt-28"
      >
        <SectionHeader
          eyebrow="Emerging from the nebula"
          title="Featured Resource"
          description="One study every fortnight — chosen for depth, honesty and the impact we've measured with our own clients."
        />
        <BlogsSection sectionRef={blogsSectionRef} />
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-4 md:px-10">
        <SectionHeader
          eyebrow="The Knowledge Nebula"
          title="A living library, always in orbit"
          description="Every guide, playbook and case study — organised as galaxies. Filter by discipline or search the universe."
        />
      </section>

      <ArticlesSection
        query={query}
        activeCategory={activeCategory}
        activeTopic={activeTopic}
        libraryRef={libraryRef}
        onCategoryChange={(category) => {
          setActiveCategory(category);
          setActiveTopic(null);
        }}
        onClearTopic={() => setActiveTopic(null)}
      />

      <InsightsSection />

      <IndustriesSection />

      <MissionDossierFan
        cards={DEFAULT_DOSSIER_CARDS}
        title="Six insights. One smarter bidding strategy."
        subtitle="Practical freight bidding insights to help you understand tender requirements, prepare compliant responses, avoid costly mistakes and compete for the right opportunities."
        badgeLabel={DEFAULT_DOSSIER_CARDS.length}
        eyebrow="RFP & TENDER INSIGHTS"
      />

      <section id="constellation" className="relative z-10 mx-auto max-w-7xl px-4 md:px-10 py-12">
        <SectionHeader
          eyebrow="Popular topics"
          title="Chart the constellation of ideas"
          description="Every glowing node is a topic. Trace the connections — click any node to filter the library below."
        />
        <ConstellationTopics activeTopic={activeTopic} onSelect={selectTopic} />
      </section>

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

      <section className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <NewsletterDome />
      </section>
    </div>
  );
}
