'use client';
import React from "react";
import { m } from "framer-motion";
import Image from "next/image";

/**
 * Testimonials — sits between Solutions and Industries.
 * Dark space theme · orange brand accents · subtle dashed-border cards with
 * an inline SVG grid mask (no external GridPattern dep needed).
 */

const TESTIMONIALS = [
  {
    quote:
      "Base2Brand helped us strengthen our online presence with a strategy that connected design, marketing and user experience. Their team focused on practical improvements that made our digital channels more effective and easier to scale.",
    name: "Ronald Martin",
    role: "Founder & Operator",
    company: "Prorevv and IFS · United States",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    quote:
      "From the first discussion to the final delivery, Base2Brand stayed focused on results. They refined our website, improved customer journeys and created a stronger digital foundation that reflects our business professionally.",
    name: "Jen Paidosh",
    role: "Founder & CEO",
    company: "JDP Electric",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
  },
  {
    quote:
      "What impressed me most was how Base2Brand combined creativity with performance. They understood our brand, delivered impactful digital solutions and ensured every improvement supported long-term business growth.",
    name: "Jahn Brazil",
    role: "CEO & Owner",
    company: "The Indie Collab",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    quote:
      "Base2Brand has been a valuable growth partner for our VIP mobile number business. Their expertise in SEO, paid campaigns, content strategy and website optimization helped us reach the right audience while improving conversions across multiple channels.",
    name: "Deepak Dhingra",
    role: "Managing Director & CEO",
    company: "VIP Number Shop",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote:
      "The team approached every project with a clear strategy and attention to detail. From website improvements to marketing execution, Base2Brand consistently delivered solutions that supported stronger engagement and measurable business outcomes.",
    name: "Seda Hos Bas",
    role: "Head of Marketing & Sales",
    company: "Coconut Stock",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    quote:
      "Base2Brand understood the complexity of our business and translated it into a clear digital experience. Their work across branding, website development and lead generation created a more scalable platform for future growth.",
    name: "Kevin Gada",
    role: "Founder & CEO",
    company: "SaaS Integration · Australia",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    quote:
      "Working with Base2Brand felt like having an extension of our own team. They aligned our website, messaging and digital campaigns into one cohesive strategy that improved visibility, lead quality and overall performance.",
    name: "Paul Singh",
    role: "Managing Director",
    company: "Scanfluence Software Inc",
    image: "https://randomuser.me/api/portraits/men/49.jpg",
  },
  {
    quote:
      "Base2Brand brought structure and clarity to our digital marketing efforts. Their ability to combine creative execution with data-driven optimization helped us attract better leads and build a stronger online presence.",
    name: "Naim Haroon",
    role: "Director",
    company: "Match Creatorz",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
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
      className="relative w-full overflow-hidden py-12"
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
        <m.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="md:max-w-3xl"
        >
          <div className="flex items-center gap-3 text-xs sm:text-sm font-mono-display text-mute uppercase tracking-[0.25em]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-brand shadow-[0_0_12px_#ff6a00]" />
            VOICES FROM THE BRIDGE
          </div>
          <h2
            className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight"
            data-testid="testimonials-heading"
          >
            Real outcomes,
            <span className="block text-orange-brand text-glow-orange">
              from businesses who scaled with us.
            </span>
          </h2>
          <p className="mt-5 text-mute text-base sm:text-lg max-w-2xl">
           Business owners, marketing heads and product leaders from the UK and US on what changed after Base2Brand connected strategy, performance, AI, CRO and technology into one growth system.
          </p>
        </m.div>

        {/* Grid */}
        <div className="mt-8 xl:mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ name, role, company, quote, image }, index) => (
            <m.div
              key={name}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.04 * index + 0.05, duration: 0.5 }}
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

              <Image
                alt={name}
                src={image}
                width={40}
                height={40}
                loading="lazy"
                className="relative z-10 size-10 rounded-full border border-white/15 object-cover"
              />
              <div className="relative z-10">
                <div className="-mt-0.5 -space-y-0.5">
                  <p className="text-sm sm:text-base font-display tracking-tight text-white">
                    {name}
                  </p>
                  <span className="block text-xs font-mono-display uppercase tracking-[0.18em] text-mute">
                    {role} · {company}
                  </span>
                </div>
                <blockquote className="mt-3">
                  <p className="text-sm sm:text-base leading-relaxed text-white/85 font-light tracking-wide">
                    “{quote}”
                  </p>
                </blockquote>
              </div>

              {/* orange corner accent on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-px -right-px h-6 w-6 border-r border-b border-orange-brand/0 group-hover:border-orange-brand/70 transition-colors"
              />
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
