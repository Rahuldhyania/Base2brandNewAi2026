import React from "react";
import { motion } from "framer-motion";
import { Bot, Sparkles, Brain, Compass, Search, Bird } from "lucide-react";

const platforms = [
  { name: "ChatGPT", icon: Bot, sub: "OpenAI" },
  { name: "Gemini", icon: Sparkles, sub: "Google" },
  { name: "Claude", icon: Brain, sub: "Anthropic" },
  { name: "Perplexity", icon: Compass, sub: "Answer engine" },
  { name: "Google AI", icon: Search, sub: "AI Overviews" },
  { name: "Bing Copilot", icon: Bird, sub: "Microsoft" },
];

export default function Platforms() {
  // Duplicate for seamless marquee
  const loop = [...platforms, ...platforms];

  return (
    <section
      data-testid="platforms-section"
      className="relative py-24 md:py-32 border-y border-white/5 bg-[#06060A]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="label-mono">· Coverage</div>
          <h2 className="font-display mt-4 text-3xl md:text-5xl font-light tracking-tighter">
            Be visible where customers{" "}
            <span className="text-gradient-blue-violet font-medium">
              ask questions
            </span>
            .
          </h2>
          <p className="mt-5 text-zinc-400 max-w-xl mx-auto">
            We engineer recommendation-grade presence across every AI surface
            shaping buyer decisions today.
          </p>
        </div>

        {/* Desktop: grid */}
        <div className="mt-16 hidden md:grid grid-cols-6 border-t border-l border-white/5 rounded-2xl overflow-hidden">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative aspect-[1.4/1] border-r border-b border-white/5 flex flex-col items-center justify-center gap-3 px-4 hover:bg-white/[0.02] transition-colors"
              data-testid={`platform-${p.name.toLowerCase().replace(" ", "-")}`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-blue-400/40 transition-colors">
                <p.icon className="w-5 h-5 text-zinc-300 group-hover:text-blue-300 transition-colors" />
              </div>
              <div className="text-center">
                <div className="font-display text-base font-medium">
                  {p.name}
                </div>
                <div className="text-[11px] text-zinc-500 uppercase tracking-widest mt-0.5">
                  {p.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: marquee */}
        <div className="md:hidden mt-12 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#06060A] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#06060A] to-transparent z-10" />
          <div className="flex animate-marquee gap-4 w-max">
            {loop.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-4 rounded-2xl glass min-w-[180px]"
              >
                <p.icon className="w-5 h-5 text-blue-300" />
                <div>
                  <div className="font-display text-sm font-medium">
                    {p.name}
                  </div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
                    {p.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
