'use client';
import React from "react";
import { motion } from "framer-motion";

/**
 * Testimonials — sits between Solutions and Industries.
 * Dark space theme · orange brand accents · subtle dashed-border cards with
 * an inline SVG grid mask (no external GridPattern dep needed).
 */

const TESTIMONIALS = [
  {
    quote:
      "Base2Brand re-platformed our entire claims stack on AWS in under nine months. Their AI-assisted triage now resolves 38% of cases without human touch.",
    name: "Aarav Mehta",
    role: "Chief Digital Officer",
    company: "MetroLife Insurance",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    quote:
      "They didn't just deliver an ERP migration — they re-architected how our finance, supply chain, and BI teams collaborate. The ROI showed up in quarter two.",
    name: "Sneha Iyer",
    role: "Group CIO",
    company: "Vantage Retail Holdings",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
  },
  {
    quote:
      "Their AI lab embedded with our product team for 16 weeks. We shipped a production-grade copilot that our brokers genuinely use every day.",
    name: "Daniel Okafor",
    role: "Head of Product Engineering",
    company: "ArcCapital Markets",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    quote:
      "From discovery to go-live, the cadence was crisp. Weekly demos, real metrics, no smoke. Easily the most senior consulting team we've worked with.",
    name: "Priya Bansal",
    role: "VP, Enterprise Architecture",
    company: "NorthStar Logistics",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "Our public-sector portal serves 11M citizens. Base2Brand handled the modernization with a security-first posture and zero unplanned downtime.",
    name: "Rohan Verma",
    role: "Director of Technology",
    company: "State Digital Mission",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote:
      "What I appreciate most is intellectual honesty. They push back, propose better paths, and own outcomes. That's a partner, not a vendor.",
    name: "Maya Sullivan",
    role: "Chief Operating Officer",
    company: "Helios BioTech",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    quote:
      "Their data platform on Snowflake unified 14 disparate sources. Marketing now runs personalization models that lift conversion 22% quarter over quarter.",
    name: "Yusuf Khan",
    role: "SVP, Growth & Analytics",
    company: "Skylark Telecom",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    quote:
      "The Base2Brand team treats craft like an act of trust. Documentation, observability, handover — everything you wish more partners did, they do by default.",
    name: "Elena Rodríguez",
    role: "Head of Platform",
    company: "Atlas Mobility",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
  },
  {
    quote:
      "We came in with a modernization brief and left with a five-year operating model. Strategic depth that's rare in delivery houses.",
    name: "Kabir Anand",
    role: "Managing Director",
    company: "Crescent Energy Group",
    image: "https://randomuser.me/api/portraits/men/49.jpg",
  },
];

// Inline SVG grid pattern (replaces external GridPattern dep)
const GridMask = () => (
  <svg
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18] mix-blend-overlay"
  >
    <defs>
      <pattern
        id="b2b-grid"
        width="22"
        height="22"
        patternUnits="userSpaceOnUse"
        x="-12"
        y="4"
      >
        <path
          d="M.5 22V.5H22"
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeDasharray="3 3"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#b2b-grid)" />
  </svg>
);

export function Testimonials() {
  return (
    <section
      id="voices"
      data-testid="testimonials-section"
      className="relative w-full overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-24"
    >
      {/* faint radial spotlight backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 isolate"
      >
        <div
          className="absolute -top-40 left-1/2 h-[640px] w-[1200px] -translate-x-1/2 rounded-full blur-3xl opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,106,0,0.10) 0%, rgba(2,3,10,0) 60%)",
          }}
        />
        <div className="absolute inset-0 grain opacity-50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* eyebrow + heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 text-xs sm:text-sm font-mono-display text-mute uppercase tracking-[0.25em]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-brand shadow-[0_0_12px_#ff6a00]" />
            Voices from the bridge
          </div>
          <h2
            className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight"
            data-testid="testimonials-heading"
          >
            Real outcomes,
            <span className="block text-orange-brand text-glow-orange">
              from the people who shipped them.
            </span>
          </h2>
          <p className="mt-5 text-mute text-base sm:text-lg max-w-2xl">
            Operators, CIOs and product leaders on what changed after they
            launched a transformation program with Base2Brand.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ name, role, company, quote, image }, index) => (
            <motion.div
              key={name}
              initial={{ filter: "blur(4px)", y: -8, opacity: 0 }}
              whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.06 * index + 0.05, duration: 0.7 }}
              data-testid={`testimonial-card-${index}`}
              className="group relative grid grid-cols-[auto_1fr] gap-x-4 overflow-hidden border border-dashed border-white/15 bg-white/[0.015] p-5 sm:p-6 hover:border-orange-brand/50 hover:bg-white/[0.03] transition-colors"
            >
              {/* dashed grid mask top-left */}
              <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-white/[0.04] to-white/[0.01]"
                  style={{
                    maskImage:
                      "radial-gradient(farthest-side at top, white, transparent)",
                    WebkitMaskImage:
                      "radial-gradient(farthest-side at top, white, transparent)",
                  }}
                >
                  <GridMask />
                </div>
              </div>

              <img
                alt={name}
                src={image}
                loading="lazy"
                className="relative z-10 size-10 rounded-full border border-white/15 object-cover"
              />
              <div className="relative z-10">
                <div className="-mt-0.5 -space-y-0.5">
                  <p className="text-sm sm:text-base font-display tracking-tight text-white">
                    {name}
                  </p>
                  <span className="block text-[11px] font-mono-display uppercase tracking-[0.18em] text-mute">
                    {role} · {company}
                  </span>
                </div>
                <blockquote className="mt-3">
                  <p className="text-sm sm:text-[15px] leading-relaxed text-white/85 font-light tracking-wide">
                    “{quote}”
                  </p>
                </blockquote>
              </div>

              {/* orange corner accent on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-px -right-px h-6 w-6 border-r border-b border-orange-brand/0 group-hover:border-orange-brand/70 transition-colors"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
