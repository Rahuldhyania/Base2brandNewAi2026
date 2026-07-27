'use client'

import { useEffect, useMemo, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useInView,
  AnimatePresence,
} from 'framer-motion';
import {
  Sparkles,
  Rocket,
  Orbit,
  Network,
  Zap,
  Globe2,
  Infinity as InfinityIcon,
  ArrowUpRight,
  Play,
  Send,
} from 'lucide-react';
import './about.css';
import Image from 'next/image';
const SpaceScene = dynamic(() => import('@/components/about-us/space-scene'), { ssr: false })

const TIMELINE = [
  {
    year: '2020',
    title: 'Where the Journey Began',
    tagline: 'One vision. A small team. Limitless ambition.',
    story:
      'Base2Brand was founded by Arti Bhatia with a clear purpose: to help businesses build a stronger and more visible digital presence. We began as a digital marketing company, offering SEO, PPC and social media marketing services. Our focus was simple—understand each brand, reach the right audience and turn marketing efforts into measurable business growth.',
    stats: [
      { label: 'Founded', value: '2020' },
      { label: 'Core Services', value: 'SEO · PPC · SMM' },
      { label: 'Vision', value: 'Digital growth with purpose' },
    ],
    achievements: [
      'Base2Brand founded by Arti Bhatia',
      'SEO, PPC and SMM services launched',
      'First client campaigns delivered',
      'Our performance-driven culture established',
    ],
    accent: '#7B4DFF',
    icon: Sparkles,
    intensity: 0.08,
  },
  {
    year: '2021',
    title: 'Expanding into Web Development',
    tagline: 'Marketing created visibility. Technology created possibility.',
    story:
      'As our clients grew, they needed more than campaigns. They needed high-performing digital platforms that could support their next stage of growth. In 2021, Base2Brand expanded into website design and development, helping businesses create faster, more engaging and conversion-focused websites using WordPress and other modern technologies.',
    stats: [
      { label: 'New Capability', value: 'Web Development' },
      { label: 'Platforms', value: 'WordPress and Custom Web' },
      { label: 'Focus', value: 'Performance · UX · Conversion' },
    ],
    achievements: [
      'Website development division launched',
      'WordPress development introduced',
      'Design and development teams expanded',
      'End-to-end digital projects delivered',
    ],
    accent: '#42D4FF',
    icon: Orbit,
    intensity: 0.22,
  },
  {
    year: '2022',
    title: 'Entering the Shopify Ecosystem',
    tagline: 'From building websites to building complete commerce experiences.',
    story:
      'In 2022, we entered the Shopify ecosystem and began creating scalable online stores, customised storefronts and purpose-built Shopify applications. This chapter strengthened our expertise in ecommerce and led Base2Brand to become a Shopify Plus Partner, with the company also listed in the Shopify Partner Directory.',
    stats: [
      { label: 'Specialisation', value: 'Shopify Commerce' },
      { label: 'Capabilities', value: 'Stores · Apps · Integrations' },
      { label: 'Approach', value: 'Build · Optimise · Scale' },
    ],
    achievements: [
      'Shopify store development launched',
      'Custom Shopify app development introduced',
      'Became a Shopify Plus Partner',
      'Listed in the Shopify Partner Directory',
    ],
    accent: '#C084FC',
    icon: Rocket,
    intensity: 0.4,
  },
  {
    year: '2023',
    title: 'Moving into Software Development',
    tagline: 'More complex challenges demanded more powerful technology.',
    story:
      'By 2023, our work had expanded beyond websites and ecommerce. Businesses needed platforms designed around their unique teams, processes and growth plans. We launched our software development practice to build custom web applications, internal platforms, APIs and enterprise-grade digital products that solve real operational challenges.',
    stats: [
      { label: 'New Practice', value: 'Software Development' },
      { label: 'Solutions', value: 'Web Apps · APIs · Platforms' },
      { label: 'Purpose', value: 'Technology built around the business' },
    ],
    achievements: [
      'Software development practice launched',
      'Custom business applications delivered',
      'API and third-party integrations expanded',
      'Enterprise development capabilities strengthened',
    ],
    accent: '#7B4DFF',
    icon: Network,
    intensity: 0.55,
  },
  {
    year: '2024',
    title: 'Connecting Enterprise Operations',
    tagline: 'The next step was not another platform. It was a connected ecosystem.',
    story:
      'In 2024, Base2Brand advanced into enterprise technology, including IFS solutions, operational platforms and complex system integrations. We began helping organisations connect teams, workflows and business data through technology designed to improve visibility, efficiency and decision-making.',
    stats: [
      { label: 'Enterprise Focus', value: 'IFS Solutions' },
      { label: 'Capabilities', value: 'Workflows · Data · Integrations' },
      { label: 'Outcome', value: 'Connected business operations' },
    ],
    achievements: [
      'IFS-focused solutions introduced',
      'Enterprise workflows developed',
      'Complex system integrations delivered',
      'Operational technology capabilities expanded',
    ],
    accent: '#42D4FF',
    icon: Zap,
    intensity: 0.7,
  },
  {
    year: '2025',
    title: 'Building Intelligent and Connected Solutions',
    tagline: 'Automation became smarter. Systems became more connected.',
    story:
      'In 2025, we entered a new era of innovation through AI automation, IoT systems and intelligent system integrations. Our teams began developing solutions that automate repetitive work, connect physical and digital environments, improve access to real-time information and support faster business decisions.',
    stats: [
      { label: 'Innovation Areas', value: 'AI · Automation · IoT' },
      { label: 'System Focus', value: 'Connected Intelligence' },
      { label: 'Business Impact', value: 'Faster · Smarter · Scalable' },
    ],
    achievements: [
      'AI automation services launched',
      'IoT system development introduced',
      'Intelligent integrations implemented',
      'Automated business workflows expanded',
    ],
    accent: '#C084FC',
    icon: Globe2,
    intensity: 0.85,
  },
  {
    year: '2026',
    title: 'A Full-Service Growth and Technology Company',
    tagline: 'Six years of evolution have brought every capability together.',
    story:
      'Today, Base2Brand is a full-service performance marketing and technology company. We combine marketing strategy, creative execution and software engineering to help businesses attract customers, improve operations and scale confidently. Our capabilities now span performance marketing, custom software development, CRM development, ERP solutions, ecommerce, AI automation and enterprise system integration.',
    stats: [
      { label: 'Growth', value: 'Performance Marketing' },
      { label: 'Technology', value: 'Software · CRM · ERP' },
      { label: 'Future', value: 'Intelligent and connected businesses' },
    ],
    achievements: [
      'Full performance marketing capabilities',
      'Custom CRM and ERP development',
      'AI-powered business automation',
      'Integrated marketing and technology delivery',
    ],
    accent: '#7B4DFF',
    icon: InfinityIcon,
    intensity: 1.0,
  },
];

function TopNav({ progress }) {
  const width = useTransform(progress, [0, 1], ['0%', '100%'])
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        <div className="flex items-center gap-2.5">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7B4DFF] to-[#42D4FF] blur-[6px] opacity-70" />
            <div className="absolute inset-[3px] rounded-full bg-[#040507] border border-white/20" />
            <div className="absolute inset-[6px] rounded-full bg-gradient-to-br from-[#7B4DFF] to-[#42D4FF]" />
          </div>
          <span className="font-display text-[15px] tracking-tight font-medium">
            Base2Brand
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[13px] text-white/60">
          <span className="text-white/90">About</span>
          <span>Work</span>
          <span>Services</span>
          <span>Contact</span>
        </div>
        <button className="group flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium border border-white/15 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.08] transition">
          Start a project
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
      {/* <motion.div
        style={{ width }}
        className="h-[1px] bg-gradient-to-r from-[#7B4DFF] via-[#C084FC] to-[#42D4FF]"
      /> */}
    </header>
  )
}

function YearRail({ activeIndex }) {
  return (
    <div className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-end gap-3">
      {TIMELINE.map((t, i) => {
        const active = i === activeIndex
        return (
          <div key={t.year} className="flex items-center gap-3 group">
            <span
              className={`font-display text-[11px] tracking-[0.2em] transition-all duration-500 ${active ? 'text-white translate-x-0 opacity-100' : 'text-white/30 translate-x-2 opacity-60'
                }`}
            >
              {t.year}
            </span>
            <span
              className={`block rounded-full transition-all duration-500 ${active
                  ? 'w-6 h-0.5 bg-linear-to-r from-[#7B4DFF] to-[#42D4FF]'
                  : 'w-3 h-[2px] bg-white/25'
                }`}
            />
          </div>
        )
      })}
    </div>
  )
}

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const dotOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])
  const dotScale = useTransform(scrollYProgress, [0, 0.15, 0.35], [0.4, 1.2, 6])
  const dotBlur = useTransform(scrollYProgress, [0, 0.35], ['0px', '40px'])

  return (
    <section ref={ref} className="relative md:h-[100vh]">
      <motion.div
        style={{ opacity, y }}
        className="sticky top-0 h-[80vh] md:h-screen flex items-center justify-center"
      >
        <div className="relative w-full max-w-6xl px-6 text-center">
          {/* Central pulsing singularity */}
          <motion.div
            style={{
              opacity: dotOpacity,
              scale: dotScale,
              filter: useTransform(dotBlur, (b) => `blur(${b})`),
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white pointer-events-none"
          />

          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md px-4 py-1.5 mb-10 mt-20 md:mt-24">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#42D4FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#42D4FF]" />
              </span>
              <span className="text-[11px] tracking-[0.25em] uppercase text-white/70 font-medium">
                About Base2Brand · 2020 → 2026
              </span>
            </div>

            <h1 className="font-display text-[46px] sm:text-[68px] md:text-[96px] lg:text-[120px] leading-[0.95] font-light tracking-[-0.03em] hero-gradient-text">
              We Didn’t Just <br />
              <span className="italic font-light">Build A Company.</span>
              <br />
              <span className="font-medium bg-gradient-to-r from-[#7B4DFF] via-[#C084FC] to-[#42D4FF] bg-clip-text text-transparent">
                We Built What Businesses Need Next.
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1.6 }}
              className="mt-10 text-white/60 max-w-2xl mx-auto text-[15px] md:text-[17px] leading-relaxed font-light"
            >
              From performance marketing to intelligent business systems, every chapter of Base2Brand has been shaped to solve bigger challenges.

            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1.5 }}
              className="mt-16 flex flex-col items-center gap-3"
            >
              <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase">
                Enter Spacetime
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-[1px] h-14 bg-gradient-to-b from-white/60 to-transparent"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function YearSection({ item, index, total }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.75, 1], [0, 1, 1, 0])
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 2, 1])
  const ringScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5])

  const Icon = item.icon
  const isLeft = index % 2 === 0

  return (
    <section ref={ref} className="relative md:min-h-screen py-6 md:py-16 flex items-center">
      {/* Glow blob */}
      <motion.div
        style={{ scale: glowScale, opacity }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] md:h-[900px] rounded-full pointer-events-none"
      >
        <div
          className="nebula w-full h-full"
          style={{
            background: `radial-gradient(circle at center, ${item.accent}40 0%, ${item.accent}20 30%, transparent 70%)`,
          }}
        />
      </motion.div>

      {/* Spacetime ring behind year */}
      <motion.svg
        style={{ scale: ringScale, opacity }}
        className="absolute right-[20%] top-[85%]  -translate-y-1/2 pointer-events-none"
        width="780" height="780" viewBox="0 0 780 780"
      >
        <defs>
          <linearGradient id={`ringGrad-${item.year}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={item.accent} stopOpacity="0.6" />
            <stop offset="50%" stopColor="#42D4FF" stopOpacity="0.15" />
            <stop offset="100%" stopColor={item.accent} stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <motion.ellipse
          cx="390" cy="390" rx="360" ry="110"
          fill="none"
          stroke={`url(#ringGrad-${item.year})`}
          strokeWidth="1"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '390px 390px' }}
        />
        <motion.ellipse
          cx="390" cy="390" rx="330" ry="90"
          fill="none"
          stroke={`url(#ringGrad-${item.year})`}
          strokeWidth="0.6"
          opacity="0.6"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '390px 390px' }}
        />
      </motion.svg>

      <motion.div
        style={{ y, scale, opacity }}
        className="relative container mx-auto px-6 md:px-10 max-w-6xl"
      >
        {/* Massive year */}
        <div className={`relative ${isLeft ? 'md:text-left' : 'md:text-right'} text-center`}>
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6 opacity-80">
            <Icon className="w-4 h-4" style={{ color: item.accent }} />
            <span className="font-display text-[10px] tracking-[0.4em] uppercase" style={{ color: item.accent }}>
              Chapter {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>

          <motion.h2
            // initial={{ letterSpacing: '0.2em' }}
            // whileInView={{ letterSpacing: '-0.05em', filter: 'blur(0px)' }}
            // viewport={{ once: false, margin: '-30% 0px -30% 0px' }}
            // transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[110px] sm:text-[160px] md:text-[220px] leading-[0.85] font-light tracking-tighter text-glow"
            style={{ color: '#ffffff' }}
          >
            {item.year}
          </motion.h2>

          <div className={`mt-2 flex flex-col md:flex-row md:items-end justify-between gap-6 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
            <div className={`max-w-xl ${isLeft ? '' : 'md:ml-auto md:text-right'}`}>
              <h3 className="font-display text-2xl md:text-4xl font-medium mb-3">
                {item.title}
              </h3>
              <p className="text-white/50 text-[13px] italic mb-4">{item.tagline}</p>
              <p className="text-white/75 text-[15px] md:text-[17px] leading-relaxed font-light">
                {item.story}
              </p>
            </div>
          </div>
        </div>

        {/* Milestone card + orbiting stats */}
        <div className="relative mt-4 md:mt-16 grid md:grid-cols-3 gap-4">
          {/* Achievements card */}
          <motion.div
            // initial={{ opacity: 0, y: 40 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: false, margin: '-20% 0px -10% 0px' }}
            // transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            // whileHover={{ y: -4 }}
            className="glass-panel rounded-2xl p-4 md:p-6 md:col-span-2 relative overflow-hidden group"
          >
            <div
              className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-40 transition-opacity group-hover:opacity-70"
              style={{ background: item.accent }}
            />
            <div className="relative">
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
                Milestones
              </div>
              <ul className="space-y-1 md:space-y-3">
                {item.achievements.map((a, i) => (
                  <motion.li
                    key={a}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: '-15% 0px' }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="flex items-center gap-3 text-white/85"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: item.accent, boxShadow: `0 0 12px ${item.accent}` }}
                    />
                    <span className="font-display text-sm md:text-[17px] font-light">{a}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            // initial={{ opacity: 0, y: 40 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: false, margin: '-20% 0px -10% 0px' }}
            // transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            // whileHover={{ y: -4 }}
            className="glass-panel rounded-2xl p-4 md:p-6 relative overflow-hidden group"
          >
            <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-1 md:mb-5">
              Orbit
            </div>
            <div className="space-y-1 md:space-y-4">
              {item.stats.map((s) => (
                <div key={s.label} className="flex items-baseline justify-between border-b border-white/5 pb-2">
                  <span className="text-[11px] tracking-[0.15em] uppercase text-white/45">
                    {s.label}
                  </span>
                  <span
                    className="font-display text-2xl font-light"
                    style={{ color: item.accent, textShadow: `0 0 24px ${item.accent}66` }}
                  >
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

const DEPARTMENTS = [
  {
    name: 'Development',
    desc: 'Our developers transform complex requirements into secure, scalable and user-focused digital platforms.',
    size: 32,
    points: [[0.2, 0.4], [0.35, 0.28], [0.5, 0.45], [0.62, 0.32], [0.78, 0.5]],
  },
  {
    name: 'Performance Marketing',
    desc: 'Our marketing team combines strategy, data, creativity and continuous optimisation to drive measurable growth.',
    size: 18,
    points: [[0.15, 0.5], [0.3, 0.35], [0.5, 0.55], [0.7, 0.4], [0.85, 0.6]],
  },
  {
    name: 'Artificial Intelligence',
    desc: 'Our AI specialists develop intelligent workflows, automation systems and practical AI solutions for modern businesses.',
    size: 14,
    points: [[0.25, 0.45], [0.45, 0.3], [0.55, 0.55], [0.72, 0.35], [0.5, 0.6]],
  },
  {
    name: 'Design',
    desc: 'Our designers create distinctive digital experiences that bring together brand identity, usability and conversion.',
    size: 12,
    points: [[0.2, 0.55], [0.35, 0.4], [0.55, 0.5], [0.7, 0.35]],
  },
  {
    name: 'Sales and Strategy',
    desc: 'Our strategy team identifies opportunities, understands business challenges and connects clients with the right solutions.',
    size: 10,
    points: [[0.2, 0.4], [0.4, 0.55], [0.6, 0.35], [0.8, 0.5]],
  },
  {
    name: 'Operations',
    desc: 'Our operations team keeps projects organised, communication clear and delivery aligned with the highest standards.',
    size: 8,
    points: [[0.25, 0.5], [0.5, 0.35], [0.75, 0.55]],
  },
]

function Constellation({ dept, index }) {
  const [hovered, setHovered] = useState(false)
  const w = 320
  const h = 220
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-10% 0px' }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass-panel rounded-2xl p-4 group cursor-pointer relative overflow-hidden"
    >
      <div className="flex items-baseline justify-between mb-3 gap-3">
        <h4 className="font-display text-2xl md:text-[26px] font-medium">{dept.name}</h4>
        <span className="shrink-0 text-xs tracking-[0.15em] uppercase text-white/40">
          {dept.size} humans
        </span>
      </div>

      <p className="text-white/70 text-[15px] md:text-base leading-relaxed mb-3">{dept.desc}</p>

      <div className="relative">
        <svg width={w} height="auto" viewBox={`0 0 ${w} ${h}`} className="w-full h-16 md:h-36">
          <defs>
            <linearGradient id={`line-${dept.name}`} x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#7B4DFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#42D4FF" stopOpacity="0.8" />
            </linearGradient>
            <filter id={`glow-${dept.name}`}>
              <feGaussianBlur stdDeviation="3" result="c" />
              <feMerge>
                <feMergeNode in="c" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {dept.points.map((p, i) => {
            if (i === dept.points.length - 1) return null
            const [x1, y1] = p
            const [x2, y2] = dept.points[i + 1]
            return (
              <motion.line
                key={i}
                x1={x1 * w} y1={y1 * h}
                x2={x2 * w} y2={y2 * h}
                stroke={`url(#line-${dept.name})`}
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: hovered ? 1 : 0.35, opacity: hovered ? 0.95 : 0.35 }}
                transition={{ duration: 1.2, delay: i * 0.08 }}
              />
            )
          })}

          {dept.points.map((p, i) => (
            <motion.circle
              key={i}
              cx={p[0] * w}
              cy={p[1] * h}
              r={hovered ? 3.5 : 2}
              fill="#fff"
              filter={`url(#glow-${dept.name})`}
              animate={{
                cx: [p[0] * w, p[0] * w + 3, p[0] * w],
                cy: [p[1] * h, p[1] * h - 2, p[1] * h],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </svg>
      </div>
    </motion.div>
  )
}

function TeamSection() {
  return (
    <section className="relative py-2 md:py-20 lg:py-32 xl:py-40">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-15% 0px' }}
          transition={{ duration: 1 }}
          className="text-center mb-8 md:mb-16"
        >
          <div className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-4">
            Our Constellations
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light tracking-tight mb-5">
            Every team is <span className="italic">Part of One System.</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto font-light">
            Different disciplines. Shared standards. One connected team working toward meaningful business outcomes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DEPARTMENTS.map((d, i) => (
            <Constellation key={d.name} dept={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

const VALUES = [
  { name: 'Innovation', color: '#7B4DFF', desc: 'We continuously explore better ways to solve problems, improve experiences and create lasting business value.' },
  { name: 'Trust', color: '#42D4FF', desc: 'We communicate honestly, take responsibility and build partnerships grounded in transparency.' },
  { name: 'Transparency', color: '#C084FC', desc: 'We keep expectations, decisions and project progress clear from the beginning to the final delivery.' },
  { name: 'Quality', color: '#ffffff', desc: 'We hold every strategy, design, campaign and line of code to a consistently high standard.' },
  { name: 'Growth', color: '#7B4DFF', desc: 'We believe progress should be shared—across our clients, our company and every person within our team.' },
]

function OrbitValues() {
  const [active, setActive] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-30% 0px -30% 0px' })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return (
    <section
      ref={ref}
      className="relative py-12 md:py-20 lg:py-32 xl:py-40 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-15% 0px' }}
          transition={{ duration: 1 }}
          className="text-center mb-10 md:mb-24"
        >
          <div className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-4">
            Core Values
          </div>

          <h2 className="font-display text-3xl md:text-6xl font-light tracking-tight">
           The Principles at the Centre of  <span className="italic">Everything We Build.</span>
          </h2>
        </motion.div>

        <div className="relative h-[490px] sm:h-[570px] md:h-[700px] mx-auto w-full max-w-[340px] sm:max-w-[480px] md:max-w-[720px]">
          {/* Central sun */}
          <div className="absolute left-1/2 top-[45%] md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7B4DFF] via-[#C084FC] to-[#42D4FF] blur-2xl opacity-70" />
            <div className="absolute inset-2 md:inset-3 rounded-full bg-gradient-to-br from-white via-[#C084FC] to-[#42D4FF] shadow-[0_0_80px_rgba(123,77,255,0.7)]" />

            <div className="absolute inset-5 md:inset-6 rounded-full bg-[#040507] flex items-center justify-center">
              <Image
                src="/images/b2blogo.png"
                alt=""
                width={100}
                height={100}
                className="object-contain max-w-12 md:max-w-16"
              />
            </div>
          </div>

          {/* Orbits + planets */}
          {VALUES.map((v, i) => {
            const orbitRadius = isMobile ? 55 + i * 24 : 150 + i * 40
            const duration = 40 + i * 12
            const startAngle = (i * 360) / VALUES.length

            return (
              <div
                key={v.name}
                className="absolute left-1/2 top-[45%] md:top-1/2 rounded-full border border-white/25 md:border-white/40 pointer-events-none"
                style={{
                  width: orbitRadius * 2,
                  height: orbitRadius * 2,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration, repeat: Infinity, ease: 'linear' }}
                  style={{
                    width: orbitRadius * 2,
                    height: orbitRadius * 2,
                    position: 'relative',
                    transform: `rotate(${startAngle}deg)`,
                  }}
                >
                  <motion.div
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="absolute cursor-pointer group pointer-events-auto"
                    style={{
                      left: '100%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                    whileHover={{ scale: 1.4 }}
                    whileTap={{ scale: 1.25 }}
                  >
                    {/* Counter-rotate so label stays upright */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration, repeat: Infinity, ease: 'linear' }}
                      className="relative flex flex-col items-center"
                    >
                      <div
                        className="w-3 h-3 md:w-4 md:h-4 rounded-full"
                        style={{
                          background: v.color,
                          boxShadow: `0 0 20px ${v.color}, 0 0 40px ${v.color}66`,
                        }}
                      />

                      <span
                        className={`hidden md:block absolute top-6 whitespace-nowrap font-display text-[11px] tracking-[0.15em] uppercase transition-opacity ${
                          active === i ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'
                        }`}
                        style={{ color: v.color }}
                      >
                        {v.name}
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            )
          })}

          {/* Active description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-0 md:bottom-[-22%] left-1/2 -translate-x-1/2 text-center max-w-[280px] md:max-w-md px-3"
            >
              <div
                className="font-display text-2xl md:text-3xl font-light"
                style={{ color: VALUES[active].color }}
              >
                {VALUES[active].name}
              </div>

              <p className="text-white/60 text-[13px] md:text-[14px] leading-relaxed">
                {VALUES[active].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function FounderMessage() {
  return (
    <section className="relative py-10 md:py-20 lg:py-32 xl:py-40">
      <div className="container mx-auto px-6 md:px-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: -8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false, margin: '-15% 0px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel-strong rounded-3xl p-8 md:p-14 relative overflow-hidden"
          style={{ transformPerspective: 1200 }}
        >
          {/* Scanlines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.08]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent 0px, transparent 3px, #42D4FF 3px, #42D4FF 4px)',
            }}
          />
          {/* Corner ornaments */}
          {[
            'top-3 left-3', 'top-3 right-3 rotate-90',
            'bottom-3 left-3 -rotate-90', 'bottom-3 right-3 rotate-180',
          ].map((cls, i) => (
            <div key={i} className={`absolute ${cls} w-5 h-5`}>
              <div className="absolute top-0 left-0 w-full h-[1px] bg-[#42D4FF]" />
              <div className="absolute top-0 left-0 h-full w-[1px] bg-[#42D4FF]" />
            </div>
          ))}

          <div className="flex items-center gap-2 mb-6">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#42D4FF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#42D4FF]" />
            </div>
            <span className="font-display text-[10px] tracking-[0.4em] uppercase text-[#42D4FF]">
              Incoming Transmission · Founder
            </span>
          </div>

          <p className="font-display text-2xl md:text-3xl lg:text-[36px] leading-[1.35] font-light text-white/95 italic">
            &ldquo;Base2Brand began with a belief that businesses should not have to choose between creative thinking, effective marketing and powerful technology.
Over the past six years, we have evolved from a digital marketing team into a multidisciplinary growth and technology company. Every new capability was introduced in response to a real business challenge faced by our clients.
We are proud of how far we have come, but we are even more excited about what we can build next.
&rdquo;
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#7B4DFF] to-[#42D4FF] flex items-center justify-center font-display font-medium">
              B
            </div>
            <div>
              {/* <div className="font-display text-[15px] font-medium">Founder &amp; CEO</div> */}
               {/* <div className="font-display text-[15px] font-medium">Founder &amp; CEO</div> */}

               <div className="font-display text-[15px] font-medium">Arti Bhatia</div>
                <div className="text-[12px] text-white/50">Founder, Base2Brand</div>
              <div className="text-[12px] text-white/50">Building and evolving since 2020</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Ending() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })
  const bright = useTransform(scrollYProgress, [0, 1], [0, 1])
  const galaxyScale = useTransform(scrollYProgress, [0, 1], [0.3, 2.4])
  const galaxyOpacity = useTransform(scrollYProgress, [0.4, 1], [0, 0.7])

  return (
    <section ref={ref} className="relative md:min-h-[90vh] py-10 md:py-20 lg:py-32 xl:py-40 flex items-center">
      {/*   <motion.div
        style={{ scale: galaxyScale, opacity: galaxyOpacity }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-175 rounded-full pointer-events-none"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              'radial-gradient(circle, #ffffff 0%, #C084FC 12%, #7B4DFF 30%, #42D4FF 55%, transparent 78%)',
            filter: 'blur(50px)',
          }}
        />
      </motion.div> */}

      <div className="relative container mx-auto px-6 md:px-10 max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, margin: '-20% 0px' }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[42px] sm:text-[64px] md:text-[86px] lg:text-[100px] leading-[0.95] font-light tracking-[-0.02em] hero-gradient-text"
        >
          The best part of our story <br />
          <span className="italic font-light">Is What We Build Next.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-15% 0px' }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-4 md:mt-8 text-white/60 max-w-xl mx-auto text-[15px] md:text-[17px] leading-relaxed font-light"
        >
          {/* Every great chapter needs a co-author. Let&rsquo;s bend time together. */}
          Six years have shaped our expertise. The next chapter will be defined by the businesses, technologies and transformations we create together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-15% 0px' }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-4 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button className="group relative rounded-full px-7 py-3.5 text-[14px] font-medium bg-white text-[#040507] hover:bg-white/90 transition inline-flex items-center gap-2">
            Start Your Journey With Base2Brand
            <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button className="group rounded-full px-7 py-3.5 text-[14px] font-medium border border-white/15 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.08] transition inline-flex items-center gap-2">
            <Play className="w-3.5 h-3.5" />
            Watch Our Journey
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: '-20% 0px' }}
          transition={{ duration: 1.5, delay: 0.9 }}
          className="mt-5 md:mt-24 text-[10px] tracking-[0.4em] uppercase text-white/60"
        >
          Base2Brand · Building tomorrow’s technology today
        </motion.div>
      </div>
    </section>
  )
}

function useActiveYearIndex(sectionRefs, progress) {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight / 2
      let best = 0
      let bestDist = Infinity
      sectionRefs.current.forEach((el, i) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const center = rect.top + window.scrollY + rect.height / 2
        const d = Math.abs(center - y)
        if (d < bestDist) {
          bestDist = d
          best = i
        }
      })
      setIdx(best)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionRefs])
  return idx
}

function AboutPage() {
  const { scrollYProgress } = useScroll()
  const scrollVelocity = useVelocity(scrollYProgress)

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.5 })
  const smoothVel = useSpring(scrollVelocity, { stiffness: 200, damping: 40 })

  const progressRef = useRef(0)
  const velocityRef = useRef(0)
  const focusRef = useRef(0)

  useEffect(() => {
    const unsubA = smoothProgress.on('change', (v) => {
      progressRef.current = v
      focusRef.current = v
    })
    const unsubB = smoothVel.on('change', (v) => {
      velocityRef.current = Math.abs(v)
    })
    return () => {
      unsubA()
      unsubB()
    }
  }, [smoothProgress, smoothVel])

  const yearSectionRefs = useRef([])
  const activeYearIndex = useActiveYearIndex(yearSectionRefs, scrollYProgress)

  const setYearRef = (i) => (el) => {
    yearSectionRefs.current[i] = el
  }

  return (
    <div className="relative bg-[#040507] text-white overflow-x-hidden">
      <SpaceScene
        progressRef={progressRef}
        velocityRef={velocityRef}
        focusRef={focusRef}
      />

      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(4,5,7,0.85) 100%)',
        }}
      />

      <div className="fixed inset-0 pointer-events-none z-[1] opacity-60">
        <div
          className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(123,77,255,0.18) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute bottom-[10%] right-[8%] w-[600px] h-[600px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(66,212,255,0.14) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <YearRail activeIndex={activeYearIndex} />

      <main className="relative z-10">
        <Hero />

        <div className="relative">
          {TIMELINE.map((item, i) => (
            <div key={item.year} ref={setYearRef(i)}>
              <YearSection item={item} index={i} total={TIMELINE.length} />
            </div>
          ))}
        </div>
        <TeamSection />
        <OrbitValues />
        <FounderMessage />
        <Ending />

      </main>
    </div>
  )
}
function App() {
  return <AboutPage />
}
export default App