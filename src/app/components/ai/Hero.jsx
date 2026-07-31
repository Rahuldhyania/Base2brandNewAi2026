'use client'
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import ShiningText from "@/components/site/ShiningText";
import NeuralCommandCenter from "@/components/ai/NeuralCommandCenter";
import BackgroundPaths from "@/components/site/BackgroundPaths";

const Hero = () => {
  return (
    <section
      data-testid="hero-section"
      className="relative pt-24 md:pt-28 pb-14 md:pb-20 overflow-hidden"
    >
      {/* Background field */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(109,40,217,0.18),rgba(3,3,10,0)_60%)]" />
        <div className="absolute top-40 left-10 w-[400px] h-[400px] rounded-full bg-[#8B5CF6]/6 blur-[120px]" />
        <div className="absolute top-20 right-10 w-[300px] h-[300px] rounded-full bg-[#C084FC]/5 blur-[100px]" />
        {/* Background Paths — subtle enterprise pathways */}
        <BackgroundPaths opacity={0.55} />
        <div className="grain" />
        {/* grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.12]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(139,92,246,0.18)"
                strokeWidth="0.5"
              />
            </pattern>
            <radialGradient id="hero-grid-fade" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="black" stopOpacity="1" />
              <stop offset="100%" stopColor="black" stopOpacity="0" />
            </radialGradient>
            <mask id="hero-grid-mask">
              <rect width="100%" height="100%" fill="url(#hero-grid-fade)" />
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#hero-grid)"
            mask="url(#hero-grid-mask)"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <ShiningText testId="hero-eyebrow">
                FROM AUTOMATION TO AUTONOMY
              </ShiningText>
            </motion.div>

            <motion.h1
              data-testid="hero-headline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-4 font-display text-white text-3xl lg:text-5xl leading-[1.05] tracking-tight text-balance"
            >
              We engineer AI automation systems 
              <span className="text-white/95">that run workflows,</span>{" "}
              <span className="bg-gradient-to-br from-[#C084FC] via-[#A855F7] to-[#6D28D9] bg-clip-text text-transparent">
                not demos.
              </span>
            </motion.h1>

            <motion.p
              data-testid="hero-subheadline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-4 text-base md:text-lg text-white/55 max-w-2xl"
            >
             Base2Brand delivers AI automation services, AI agent development, enterprise AI solutions and generative AI solutions built to improve operations, qualify leads, support customers, automate decisions and scale business performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-6 md:mt-12 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                data-testid="hero-cta-primary"
                className="group inline-flex items-center gap-2 bg-[#8B5CF6] hover:bg-[#A855F7] text-white px-6 py-3 md:py-4 rounded-full text-sm font-medium transition-all shadow-[0_0_30px_-10px_rgba(139,92,246,0.55)]"
              >
                <Sparkles className="w-4 h-4" />
                Start An AI Transformation
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#capabilities"
                data-testid="hero-cta-secondary"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/40 hover:bg-white/[0.03] text-white px-6 py-3 md:py-4 rounded-full text-sm font-medium transition-all"
              >
                Explore AI Capabilities
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.25em] font-mono text-white/35"
            >
              <span>Enterprise Grade</span>
              <span className="w-1 h-1 rounded-full bg-[#8B5CF6]" />
              <span>Workflow-Ready </span>
              <span className="w-1 h-1 rounded-full bg-[#8B5CF6]" />
              <span>Production Deployments</span>
              <span className="w-1 h-1 rounded-full bg-[#8B5CF6]" />
               <span>Outcome-Focused</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <NeuralCommandCenter />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
