"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const CATEGORIES = [
  {
    label: "Frontend",
    color: "#FF3B30",
    tags: ["React", "Next.js", "Angular", "Vue", "TypeScript"],
  },
  {
    label: "Backend",
    color: "#FF5A4D",
    tags: ["Node.js", "Python", "Java", ".NET", "Go"],
  },
  {
    label: "Mobile",
    color: "#FF3B30",
    tags: ["Kotlin", "Jetpack Compose", "Flutter", "React Native"],
  },
  {
    label: "Cloud",
    color: "#FF5A4D",
    tags: ["AWS", "Azure", "Google Cloud"],
  },
  {
    label: "DevOps",
    color: "#FF3B30",
    tags: ["Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    label: "Databases",
    color: "#FF5A4D",
    tags: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="b2b-section relative py-12">
      <div className="pointer-events-none absolute -top-40 right-1/3 w-[600px] h-[600px] b2b-glow-red opacity-40" />
      <div className="b2b-container relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.06)}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp} className="text-(--b2b-primary) mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--b2b-primary)]" />
            Technology Stack
          </motion.div>
          <h2 className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
            <span className="b2b-text-gradient">The modern software stack — </span>
            <span className="text-(--b2b-primary)">engineered deliberately.</span>
          </h2>
          <p className="text-white/65 text-base lg:text-lg max-w-[940px] mx-auto self-end leading-relaxed pt-3 mt-6">
            We choose tools to match the problem, not the trend. Every layer of the stack is
            selected for fit, durability, and operational maturity.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.07)}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {CATEGORIES.map((cat) => (
            <motion.div
              key={cat.label}
              variants={fadeUp}
              className=" hover:shadow-[inset_0_1px_0_rgba(255,90,77,0.15),0_30px_80px_-40px_rgba(255,59,48,0.45)] p-7 group border-2 border-var(--b2b-primary)/60 rounded-2xl hover:border-var(--b2b-primary)"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                  <span className="text-[12px] uppercase tracking-[0.22em] text-white/55">
                    {cat.label}
                  </span>
                </div>
                <span className="text-[11px] text-white/35 b2b-number">
                  {cat.tags.length} tools
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {cat.tags.map((t) => (
                  <span key={t} className="py-1.5 px-3.5 rounded-xl border-white hover:border-(--b2b-primary) border-2 text-[13px] font-medium text-white/65 transition-all duration-300 hover:bg-(--b2b-primary)/10">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
