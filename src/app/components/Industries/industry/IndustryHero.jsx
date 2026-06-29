'use client'
import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/Industries/shared/SectionLabel";
import CTAButton from "@/components/Industries/shared/CTAButton";
import OrbitalNodes from "@/components/Industries/shared/OrbitalNodes";
import GridBackground from "@/components/Industries/shared/GridBackground";
import AnimatedCounter from "@/components/Industries/shared/AnimatedCounter";
// import { INDUSTRY_PAGE } from "@/constants/Industries/testIds";
import { ShieldCheck, BadgeCheck, Rocket } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function IndustryHero({ hero, name, label, heroPrimaryCta, heroSecondaryCta, id = "hero" }) {

  const pathname = usePathname();

  const currentLogo = pathname === '/industries/health-care' 
                  ? '/health-care-b2b.png' 
                  : pathname === '/industries/manufacturing' 
                  ? '/manufacturing-b2b.png' 
                  : pathname === '/industries/logistics'
                  ? '/logistics-b2b.png'
                  : pathname === '/industries/education' 
                  ? '/education-b2blogo.png'
                  : pathname === '/industries/retail'
                  ? '/retail-b2b.png'
                  : pathname === '/industries/automotive'
                  ? '/automotive-b2b.png'
                  : pathname === '/industries/government'
                  ? '/government-b2blogo2.png'
                  : pathname === '/industries/ngo'
                  ? '/ngo-b2b-logo.png'
                  :  '/images/b2blogo.png'
  return (
    <section
      id={id}
      data-testid={hero}
      className="relative z-10 md:px-8 pt-24 sm:pt-28 md:pb-16"
    >
      <GridBackground intensity={0.7} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Editorial copy */}
          <div className="lg:col-span-7 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <SectionLabel>{label}</SectionLabel>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 md:mt-5 flex items-center gap-3 justify-center md:justify-start"
            >
              <h2 className="font-display text-[12px] uppercase tracking-widest2 text-white/55">
                Industries / {name}
              </h2>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="display text-balance text-[30px] md:text-[38px] lg:text-[56px] mt-3 md:leading-[1.04]"
            >
              {hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 md:mt-7 text-white/70 text-[16px] md:text-[18px] leading-relaxed text-pretty max-w-2xl"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-6 md:mt-10 flex flex-wrap items-center gap-4"
            >
              <CTAButton
                to={hero.ctas.primary.to}
                variant="primary"
                size="lg"
                data-testid={heroPrimaryCta}
              >
                {hero.ctas.primary.label}
              </CTAButton>
              <CTAButton
                to={hero.ctas.secondary.to}
                variant="secondary"
                size="lg"
                data-testid={heroSecondaryCta}
              >
                {hero.ctas.secondary.label}
              </CTAButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="mt-4 md:mt-9 flex flex-wrap items-center gap-2.5"
            >
              {[
                { icon: ShieldCheck, label: "Sovereign-grade engineering" },
                { icon: BadgeCheck, label: "SOC 2 · ISO 27001 ready" },
                { icon: Rocket, label: "Production deployments" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 text-[8px] md:text-[11px] uppercase tracking-widest2 text-white/65 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.025]"
                >
                  <Icon className="w-3.5 h-3.5 text-brand" />
                  {label}  
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Orbital visual */}
          <div className="lg:col-span-5 mb-10 lg:mb-0 hidden md:block">
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={`/images${currentLogo}`}
                  alt=""
                  width={1000}
                  height={500}
                  className="max-w-25"
                />
              </div>
              <div className="absolute -inset-10 rounded-full bg-brand/[0.06] blur-3xl pointer-events-none" />
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.0, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                <OrbitalNodes nodes={hero.nodes} />
              </motion.div>
            </div>

          </div>
        </div>

        {/* Metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/8"
        >
          {hero.metrics.map((m) => (
            <div
              key={m.label}
              className="bg-ink-950/95 px-3 sm:px-6 py-3 md:py-4 md:px-8 hover:bg-ink-900/80 transition"
            >
              <div className="font-display text-[24px] sm:text-[34px] md:text-[44px] leading-none text-white tracking-tight">
                <AnimatedCounter value={m.value} />
              </div>
              <div className="mt-1 sm:mt-3 text-[11px] sm:text-[12px] uppercase tracking-widest2 text-white/45">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
