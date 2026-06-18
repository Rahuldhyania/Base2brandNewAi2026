'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const industries = [
  {
    id: "ecommerce",
    label: "Ecommerce & Shopify",
    pain: "High ad spend. Low ROAS. Cart abandonment. Poor retention.",
    desc: "Scaling ecommerce isn't about spending more, it's about increasing conversions, lowering CAC, and improving customer lifetime value. We help ecommerce brands build predictable growth systems.",
    image:
      "https://images.pexels.com/photos/30824313/pexels-photo-30824313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    metrics: ["+3.4× ROAS", "-42% CAC", "+28% LTV"],
  },
  {
    id: "real-estate",
    label: "Real Estate",
    pain: "Low-quality leads. Poor site visit conversion. Expensive campaigns.",
    desc: "We help real estate companies attract serious buyers, improve lead quality, and increase inquiry-to-site-visit conversion through targeted campaigns and intent-based audiences.",
    image:
      "https://images.pexels.com/photos/4082527/pexels-photo-4082527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    metrics: ["+62% qualified leads", "2.1× site visits", "-35% cost / lead"],
  },
  {
    id: "healthcare",
    label: "Healthcare & Clinics",
    pain: "Low appointment bookings. Weak local visibility. Poor patient retention.",
    desc: "From local SEO to patient acquisition campaigns, we help healthcare providers grow visibility and keep appointment calendars consistently full.",
    image:
      "https://images.pexels.com/photos/7108402/pexels-photo-7108402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    metrics: ["+88% bookings", "Top 3 local map", "+44% recall visits"],
  },
  {
    id: "manufacturing",
    label: "Furniture & Manufacturing",
    pain: "Weak digital presence. Expensive lead generation. Poor inquiry quality.",
    desc: "We build high-intent lead generation systems designed to bring serious buyers, showroom visits, and B2B business inquiries that actually close.",
    image:
      "https://images.pexels.com/photos/33514501/pexels-photo-33514501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    metrics: ["+3× inquiries", "Higher AOV", "Showroom visits up"],
  },
  {
    id: "local",
    label: "Local Businesses",
    pain: "Low visibility. Inconsistent leads. Competitors ranking higher.",
    desc: "We help local businesses dominate search, improve customer acquisition, and generate consistent month-over-month growth through hyperlocal targeting.",
    image:
      "https://images.pexels.com/photos/16323403/pexels-photo-16323403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    metrics: ["#1 local pack", "+120% calls", "Predictable pipeline"],
  },
];

export const Industries = () => {
  const [active, setActive] = useState(industries[0].id);
  const current = industries.find((i) => i.id === active);

  return (
    <section
      id="industries"
      data-testid="industry-tabs"
      className="relative py-16 border-y border-border bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-5 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold mb-5">
            ▸ Industries
          </p>
          <h2
            data-testid="industries-headline"
            className="font-display font-bold uppercase text-balance leading-[0.95] tracking-tight text-[clamp(2rem,5vw,4.25rem)]"
          >
            Strategies Built Around Your{" "}
            <span className="text-brand">Industry</span> Challenges
          </h2>
        </div>

        {/* Tab pills */}
        <div className="flex flex-wrap gap-2 mb-10" data-testid="industry-tablist">
          {industries.map((ind) => {
            const isActive = ind.id === active;
            return (
              <button
                key={ind.id}
                data-testid={`industry-tab-${ind.id}`}
                onClick={() => setActive(ind.id)}
                className={`relative px-4 md:px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="industry-active-pill"
                    className="absolute inset-0 bg-brand rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{ind.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div className="hairline rounded-3xl bg-background overflow-hidden">
          <div className="grid lg:grid-cols-12 border border-white/40">
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-14 rounded-[50px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full hairline bg-secondary text-xs uppercase tracking-wider text-muted-foreground mb-6">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {current.label}
                  </div>
                  <h3
                    data-testid={`industry-pain-${current.id}`}
                    className="font-display uppercase text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-foreground"
                  >
                    {current.pain}
                  </h3>
                  <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                    {current.desc}
                  </p>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {current.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="hairline rounded-xl p-4 bg-secondary/40"
                      >
                        <div className="flex items-center gap-2 text-brand mb-1.5">
                          <Check size={14} />
                          <span className="text-[10px] uppercase tracking-wider">
                            Outcome
                          </span>
                        </div>
                        <div className="font-display text-lg md:text-xl font-bold text-foreground leading-tight">
                          {m}
                        </div>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`mailto:hello@base2brand.com?subject=Industry%20strategy%20-%20${encodeURIComponent(
                      current.label
                    )}`}
                    data-testid={`industry-cta-${current.id}`}
                    className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand transition-colors"
                  >
                    Get an industry-specific plan{" "}
                    <ArrowUpRight size={16} />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-border overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0"
                  data-testid={`industry-image-${current.id}`}
                >
                  <img
                    src={current.image}
                    alt={current.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-brand/20 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
