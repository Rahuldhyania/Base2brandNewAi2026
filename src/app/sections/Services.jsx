'use client';
import React from "react";
import { m } from "framer-motion";
import { SectionHeader } from "../components/layout/SectionHeader";
import {
  Megaphone,
  ShoppingCart,
  TrendingUp,
  Bot,
  Smartphone,
  Palette,
} from "lucide-react";

const SERVICES = [
  {
    icon: Megaphone,
    title: "Performance Marketing",
    desc: "Growth campaigns engineered around revenue, not reach. We plan, launch, optimize, and scale paid media campaigns across high-intent channels with clear performance accountability.",
    points: ["Google Ads", "Meta Ads", "LinkedIn Ads"],
  },
  {
    icon: ShoppingCart,
    title: "Shopify & Ecommerce",
    desc: "Commerce experiences designed to convert traffic into revenue. We build Shopify stores, custom ecommerce experiences, product pages, checkout journeys, and retention systems focused on higher sales and smoother buying experiences.",
    points: ["Shopify Development", "Shopify Plus", "Custom Themes"],
  },
  {
    icon: TrendingUp,
    title: "CRO & Growth Optimization",
    desc: "More conversions from the traffic you already have. We improve landing pages, funnels, user journeys, forms, product pages, checkout flows, and lead-generation systems using data-backed CRO strategies.",
    points: ["Landing Page CRO", "A/B Testing", "Heatmap Analysis"],
  },
  {
    icon: Bot,
    title: "AI Solutions & Automation",
    desc: "AI systems that reduce manual work and improve business efficiency. We build intelligent automations that help brands qualify leads, support customers, personalize journeys, and improve decision-making.",
    points: ["AI Chatbots", "AI Sales Assistants", "Lead Scoring"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps & Enterprise Platforms",
    desc: "Digital products customers and teams rely on every day. We design and develop mobile apps, portals, CRM systems, ERP workflows, cloud applications, and custom business platforms built for speed, scale, and usability.",
    points: ["Android Apps", "iOS Apps", "CRM Systems"],
  },
  {
    icon: Palette,
    title: "Brand, Creative & Experience",
    desc: "Brands people remember. Experiences customers trust. We create brand identities, social media systems, UI/UX experiences, campaign creatives, content frameworks, and design systems that make growth look as strong as it performs.",
    points: ["Brand Identity", "Creative Campaigns", "UI/UX Design"],
  },
];
function ServiceCard({ s, index }) {
  const Icon = s.icon;
  return (
    <m.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      data-testid={`service-card-${s.title.toLowerCase().split(" ")[0]}`}
      className="group relative p-4 xl:p-7 rounded-2xl border border-line bg-[#04061a]/60 hover:border-orange-brand/40 transition-colors overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(600px circle at var(--x,50%) var(--y,0%), rgba(255,106,0,0.10), transparent 40%)" }} />
      <div className="flex items-center gap-4">
        <div className="grid place-items-center h-11 w-11 rounded-xl bg-orange-brand/10 border border-orange-brand/30 text-orange-brand">
          <Icon size={20} />
        </div>
        <div className="text-xs font-mono-display text-mute uppercase tracking-[0.2em]">
          0{index + 1}
        </div>
      </div>
      <h3 className="mt-3 font-display text-white text-xl sm:text-2xl leading-tight tracking-tight">
        {s.title}
      </h3>
      <p className="mt-3 text-mute text-sm xl:text-base leading-relaxed">
        {s.desc}
      </p>
      <ul className="mt-3 xl:mt-5 space-y-1.5 flex items-center">
        {s.points.map((p) => (
          <li key={p} className="text-sm text-white/85 flex items-center gap-2">
            <span className="inline-block h-1 w-1 rounded-full bg-orange-brand" />
            {p}
          </li>
        ))}
      </ul>
    </m.article>
  );
}

export function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-12 "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          id="services"
          eyebrow="Core Practices"
          title="Six practices One growth system"
          intro="From discovery to scale, every engagement is shaped by strategy, creative thinking, engineering, analytics, AI, media buying, and conversion optimization."
        />
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
