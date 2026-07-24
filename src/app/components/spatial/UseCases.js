'use client'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SPATIAL } from "@/constants/testIds";

// 3D tilt card — max 5° tilt, subtle enterprise feel, amber border glow on hover
function TiltCard({ children, index }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState("");
  const [hover, setHover] = useState(false);

  const handleMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    const rx = (0.5 - y) * 5; // max 5°
    const ry = (x - 0.5) * 5;
    setTransform(`perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`);
  };

  const reset = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)");
    setHover(false);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={reset}
      style={{
        transform,
        transition: "transform 400ms ease, box-shadow 400ms ease, border-color 400ms ease",
        transformStyle: "preserve-3d",
        boxShadow: hover
          ? "0 30px 80px -20px rgba(255,184,0,0.25), 0 0 0 1px rgba(255,184,0,0.25) inset"
          : "0 8px 30px -10px rgba(0,0,0,0.5)",
      }}
      data-testid={SPATIAL.useCaseCard(index)}
      className="relative rounded-2xl bg-[#FFB800]/[0.04] border border-[#FFB800]/10 p-4 h-full cursor-default group overflow-hidden"
    >
      {/* Subtle ambient glare */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 0%, rgba(255,184,0,0.18), transparent 50%)",
        }}
      />
      {children}
    </div>
  );
}

const useCases = [
  {
    tag: "AI",
    title: "AI-Powered Business Operations",
    description:
      "Automate repetitive business tasks, generate insights, support teams and improve decision-making with production-ready AI systems.",
  },
  {
    tag: "Automation",
    title: "Smart Automation Workflows",
    description:
      "Connect CRM, websites, WhatsApp, email, sales tools and internal platforms so every process moves faster and cleaner.",
  },
  {
    tag: "IoT",
    title: "IoT Operations & Monitoring",
    description:
      "Track assets, devices, field activity, industrial workflows and operational performance in real time.",
  },
  {
    tag: "Blockchain",
    title: "Blockchain Trust Systems",
    description:
      "Build secure, transparent systems for ownership, transactions, verification and traceability.",
  },
  {
    tag: "Metaverse",
    title: "Metaverse Product Experiences",
    description:
      "Create immersive environments for product demos, virtual stores, training spaces and brand engagement.",
  },
  {
    tag: "Cloud",
    title: "Cloud & Data Infrastructure",
    description:
      "Modernize servers, data centres, storage, cloud systems and business-critical applications for secure scaling.",
  },
];

const container = { animate: { transition: { staggerChildren: 0.08 } } };
const item = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function UseCases() {
  return (
    <section
      data-testid={SPATIAL.useCasesSection}
      className="relative py-4 md:py-12 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-12 mb-8 md:mb-16">
          <div>
            <div className="text-[11px] tracking-[0.28em] uppercase text-[#FFB800]/90 mb-4">
              · Use Cases
            </div>
             <h2 className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
             Where emerging technology
              <br />
              <span className="text-white/55">earns its place.</span>
             </h2>
          </div>
          <p className="text-white/65 text-base lg:text-lg max-w-[640px] self-end leading-relaxed">
            Base2Brand applies AI technology solutions, automation technology
            solutions and next-gen business technology where they create
            measurable impact — faster teams, smarter systems, safer data and
            better customer experiences.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {useCases.map((u, i) => (
            <motion.div key={u.title} variants={item}>
              <TiltCard index={i}>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-[#FFB800]/90 px-3 py-1 rounded-full border border-[#FFB800]/20 bg-[#FFB800]/[0.06]">
                    {u.tag}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-white/30 group-hover:text-[#FFB800] transition-colors"
                  />
                </div>
                <h3 className="font-display text-2xl text-white leading-tight mb-3">
                  {u.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {u.description}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
