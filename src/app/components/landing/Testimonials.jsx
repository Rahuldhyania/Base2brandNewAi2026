'use client';
import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Inside three months Base2Brand had us appearing in Perplexity and ChatGPT answers for our top 12 commercial queries. Pipeline followed.",
    name: "David Chen",
    role: "CMO, TechFlow Enterprise",
    img: "https://images.unsplash.com/photo-1620668233692-c83e9563f337?crop=entropy&cs=srgb&fm=jpg&w=400&q=80",
  },
  {
    quote:
      "We were invisible to AI search. Their GEO framework rebuilt our entity graph from the ground up — now we're the recommendation.",
    name: "Sarah Jenkins",
    role: "VP Marketing, Nova Systems",
    img: "https://images.unsplash.com/photo-1610721193651-e6aca85b45aa?crop=entropy&cs=srgb&fm=jpg&w=400&q=80",
  },
  {
    quote:
      "The most strategic growth partner we've worked with. They understand AI search like nobody else in the market right now.",
    name: "Marcus Reid",
    role: "Director of Growth, FinEdge",
    img: "https://images.pexels.com/photos/10541207/pexels-photo-10541207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400",
  },
];

const clients = [
  "TECHFLOW",
  "NOVA SYSTEMS",
  "FINEDGE",
  "LUMINA",
  "ATLAS·CO",
  "HELIX LABS",
  "ORBIT",
];

export default function Testimonials() {
  return (
    <section
      data-testid="testimonials-section"
      className="relative py-28 md:py-36 bg-[#06060A] border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="label-mono">· Proof</div>
            <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter">
              Trusted by teams
              <br />
              <span className="text-gradient-blue-violet font-medium">
                redefining their category.
              </span>
            </h2>
          </div>
        </div>

        {/* Client logos strip */}
        <div className="grid grid-cols-3 md:grid-cols-7 gap-x-6 gap-y-6 items-center mb-16 opacity-60">
          {clients.map((c) => (
            <div
              key={c}
              className="font-display text-center text-zinc-400 text-sm md:text-base tracking-[0.18em] font-medium"
            >
              {c}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-hover rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-7 flex flex-col"
            >
              <Quote className="w-7 h-7 text-blue-400/60" />
              <p className="mt-5 text-zinc-200 text-base md:text-lg leading-relaxed">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star
                    key={k}
                    className="w-3.5 h-3.5 fill-blue-400 text-blue-400"
                  />
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover grayscale"
                  loading="lazy"
                />
                <div>
                  <div className="font-display text-sm font-medium">
                    {t.name}
                  </div>
                  <div className="text-xs text-zinc-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
