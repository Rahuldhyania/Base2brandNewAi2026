'use client';
import React from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, MessageSquare, BrainCircuit } from "lucide-react";

const TEX =
  "https://static.prod-images.emergentagent.com/jobs/9f78f6aa-dcf9-4141-8b7b-14d60d3c8492/images/41a19baf5858880211e4fda543007ade49d9a1f7803466d7c6c46b9072b5ca3c.png";

const examples = [
  "Best CRM software for B2B SaaS",
  "Top digital marketing agency in 2026",
  "Best HRMS company for mid-market",
  "Who should I hire for web development?",
];

const stats = [
  {
    icon: BrainCircuit,
    title: "AI search is exploding",
    body: "Conversational AI is replacing 10-blue-links for high-intent commercial queries.",
  },
  {
    icon: Search,
    title: "Behaviour is shifting",
    body: "Buyers now ask AI assistants before they ever open a search tab.",
  },
  {
    icon: Sparkles,
    title: "Invisibility costs revenue",
    body: "Brands not surfaced inside AI answers are quietly losing pipeline.",
  },
];

export default function SearchChanged() {
  return (
    <section
      id="why-now"
      data-testid="search-changed-section"
      className="relative py-28 md:py-40 overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={TEX}
          alt=""
          className="w-full h-full object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-transparent to-[#030305]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="label-mono"
            >
              · The Shift
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-[1.05]"
            >
              Search has changed.
              <br />
              <span className="text-zinc-500">Your marketing should too.</span>
            </motion.h2>

            <p className="mt-6 text-zinc-400 text-base md:text-lg leading-relaxed max-w-md">
              People don't only ask Google anymore. They ask ChatGPT, Gemini,
              Perplexity and Claude — and AI decides which brand gets
              recommended.
            </p>

            <div className="mt-10 space-y-3">
              <div className="label-mono !text-zinc-500">
                · How customers ask today
              </div>
              {examples.map((e, i) => (
                <motion.div
                  key={e}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 glass rounded-full px-5 py-3 max-w-md"
                >
                  <MessageSquare className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-sm text-zinc-200">"{e}"</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-8 md:p-10 overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-20 w-64 h-64 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="relative">
                <div className="text-xs text-zinc-500 uppercase tracking-[0.3em]">
                  Reality check · 2026
                </div>
                <div className="mt-4 font-display text-5xl md:text-7xl font-light tracking-tighter">
                  <span className="text-gradient-blue-violet">85%</span>
                </div>
                <div className="mt-3 text-zinc-300 max-w-md text-lg">
                  of high-intent buyers consult an AI assistant{" "}
                  <span className="text-white">before</span> talking to your
                  sales team.
                </div>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-hover rounded-2xl border border-white/10 bg-[#0A0A0F] p-6"
                >
                  <s.icon className="w-5 h-5 text-blue-400" />
                  <div className="mt-4 font-display text-lg font-medium">
                    {s.title}
                  </div>
                  <div className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    {s.body}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
