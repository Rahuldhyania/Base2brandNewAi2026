'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Search,
  Gauge,
  Users,
  MessageCircleHeart,
  LineChart,
  Plus,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    id: "performance",
    icon: Target,
    title: "Performance Marketing",
    desc: "Run smarter campaigns across Meta, Google, YouTube, TikTok, and LinkedIn designed to generate better leads, stronger returns, and lower acquisition costs.",
    items: [
      "Meta Ads",
      "Google Ads",
      "YouTube Advertising",
      "LinkedIn Advertising",
      "Lead Generation Campaigns",
      "Retargeting Systems",
    ],
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO + GEO",
    desc: "Being visible online is no longer optional. We help businesses improve search visibility, dominate local search, and optimize content for AI-driven discovery.",
    items: [
      "SEO Strategy",
      "Local SEO",
      "Technical SEO",
      "Ecommerce SEO",
      "GEO (Generative Engine Optimization)",
      "Content Optimization",
    ],
  },
  {
    id: "cro",
    icon: Gauge,
    title: "Conversion Rate Optimization",
    desc: "More traffic doesn't always mean more revenue. We optimize websites, funnels, landing pages, and customer journeys to maximize every visitor.",
    items: [
      "Landing Page Optimization",
      "Funnel Optimization",
      "Checkout Improvements",
      "Heatmap Analysis",
      "Conversion Testing",
    ],
  },
  {
    id: "social",
    icon: Users,
    title: "Social Media Growth",
    desc: "Build stronger brand visibility while creating meaningful customer engagement that genuinely supports business growth.",
    items: [
      "Social Media Management",
      "Content Strategy",
      "Community Growth",
      "Brand Positioning",
      "Organic Campaigns",
    ],
  },
  {
    id: "retention",
    icon: MessageCircleHeart,
    title: "Retention & Automation",
    desc: "The easiest customer to sell to is the one you already have. We build retention systems that increase repeat purchases and lifetime value.",
    items: [
      "Email Marketing",
      "WhatsApp Marketing",
      "SMS Campaigns",
      "Customer Re-engagement",
      "Marketing Automation",
    ],
  },
  {
    id: "analytics",
    icon: LineChart,
    title: "Analytics & Growth Tracking",
    desc: "No guesswork. No confusing reports. Get clear visibility into campaign performance, customer behavior, and real business growth.",
    items: [
      "GA4 Setup",
      "Conversion Tracking",
      "Attribution Reporting",
      "CRM Integration",
      "Marketing Dashboards",
    ],
  },
];

const ServiceCard = ({ service, index }) => {
  const [open, setOpen] = useState(index === 0);
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      data-testid={`service-card-${service.id}`}
      className="group relative hairline rounded-2xl bg-card overflow-hidden hover:border-brand/40 transition-colors"
    >
      <button
        data-testid={`service-toggle-${service.id}`}
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left p-7 md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 grid place-items-center text-brand">
            <Icon size={22} />
          </div>
          <Plus
            size={20}
            className={`text-muted-foreground transition-transform duration-300 ${
              open ? "rotate-45 text-brand" : ""
            }`}
          />
        </div>
        <h3 className="mt-6 font-display uppercase text-xl md:text-2xl font-bold tracking-tight leading-tight">
          {service.title}
        </h3>
        <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
          {service.desc}
        </p>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-7 md:px-8 pb-7 md:pb-8">
              <div className="h-px w-full bg-border mb-5" />
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Includes
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                {service.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Services = () => {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold mb-5">
              ▸ Services
            </p>
            <h2
              data-testid="services-headline"
              className="font-display font-bold uppercase text-balance leading-[0.95] tracking-tight text-[clamp(2rem,5vw,4.25rem)]"
            >
              Growth-Focused
              <br />
              Digital Marketing Services
            </h2>
          </div>
          <a
            href="mailto:hello@base2brand.com?subject=Service%20enquiry"
            data-testid="services-cta"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand transition-colors"
          >
            Discuss your stack <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
