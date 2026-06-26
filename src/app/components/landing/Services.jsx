'use client';
import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  MessageSquare,
  Eye,
  Fingerprint,
  Network,
  LayoutGrid,
  Signal,
  BarChart3,
  Users,
  Quote,
} from "lucide-react";

const services = [
  {
    title: "GEO Strategy",
    desc: "End-to-end roadmap for generative engine visibility.",
    icon: Target,
    span: "md:col-span-2",
    big: true,
  },
  {
    title: "AEO Implementation",
    desc: "Answer-shaped content, schema and structure.",
    icon: MessageSquare,
  },
  {
    title: "AI Visibility Optimization",
    desc: "Lift mentions across ChatGPT, Gemini, Claude.",
    icon: Eye,
  },
  {
    title: "Brand Entity Optimization",
    desc: "A coherent entity AI engines can trust.",
    icon: Fingerprint,
  },
  {
    title: "Knowledge Graph Improvement",
    desc: "Structured signals at machine-readable depth.",
    icon: Network,
  },
  {
    title: "AI Content Structuring",
    desc: "Modular, citation-ready content blocks.",
    icon: LayoutGrid,
  },
  {
    title: "Authority Signal Building",
    desc: "Compounding trust across the open web.",
    icon: Signal,
  },
  {
    title: "AI Search Analytics",
    desc: "Track presence, share-of-answer, sentiment.",
    icon: BarChart3,
    span: "md:col-span-2",
    big: true,
  },
  {
    title: "Competitor AI Analysis",
    desc: "Decode why rivals get recommended (and beat it).",
    icon: Users,
  },
  {
    title: "Citation & Mention Optimization",
    desc: "Land in sources AI engines actually cite.",
    icon: Quote,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-12 bg-[#06060A] border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="gap-6 mb-10 md:mb-16 text-center mx-auto">
          <div>
            <div className="label-mono">· Capabilities</div>
            <h2 className="mt-2 font-display text-2xl mx-auto sm:text-4xl lg:text-5xl leading-[1.02] tracking-[-0.035em] font-medium text-balance">
              Everything you need to be
              
              <span className="text-gradient-blue-violet font-medium">
                the <br /> recommended brand.
              </span>
            </h2>
          </div>
          <p className="text-zinc-400 mx-auto pt-3">
            A complete AI-first growth practice — built to make your brand the
            obvious answer in any AI conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 md:gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 4) * 0.05 + 0.05 }}
              className={`group relative card-hover rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-4 overflow-hidden ${
                s.span || ""
              }`}
              data-testid={`service-card-${i}`}
            >
              <div className="absolute -top-24 -right-24 w-52 h-52 rounded-full bg-gradient-to-br from-blue-500/0 to-violet-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center mb-2 group-hover:border-blue-400/40 transition-colors">
                  <s.icon className="w-4 h-4 text-blue-300" />
                </div>
                <h3
                  className={`font-display font-medium tracking-tight ${
                    s.big
                      ? "text-2xl md:text-3xl"
                      : "text-lg md:text-xl"
                  }`}
                >
                  {s.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
