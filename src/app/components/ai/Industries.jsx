'use client';
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/site/Reveal";
import ShiningText from "@/components/site/ShiningText";
import { ArrowUpRight } from "lucide-react";

const INDUSTRIES = [
  {
    id: "automotive",
    name: "Automotive",
    use: "Dealer ops copilots, inventory intelligence, voice qualification.",
    image:
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    use: "Predictive ops, digital twins, agentic quality workflows.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    use: "Clinical knowledge retrieval, patient intake, compliance automation.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "logistics",
    name: "Logistics",
    use: "Network optimization, shipment exceptions, autonomous dispatch.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "retail",
    name: "Retail",
    use: "Conversational commerce, merchandising agents, fraud copilots.",
    image:
      "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "finserv",
    name: "Financial Services",
    use: "Underwriting assistants, KYC automation, advisor copilots.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "government",
    name: "Government",
    use: "Citizen services, document intelligence, policy retrieval.",
    image:
      "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "education",
    name: "Education",
    use: "Adaptive learning, faculty copilots, research retrieval.",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=70",
  },
];

/* Photo card — purple duotone styling (no more grayscale). */
const PhotoCard = ({ industry, isActive, isDimmed, onHover, size, index }) => {
  const ref = useRef(null);

  return (
    <motion.button
      ref={ref}
      type="button"
      data-testid={`industry-photo-${industry.id}`}
      onMouseEnter={() => onHover(industry.id)}
      onFocus={() => onHover(industry.id)}
      initial={{ opacity: 0, y: 36, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      onViewportEnter={() => onHover(industry.id)}
      className={`relative overflow-hidden rounded-xl flex-shrink-0 cursor-pointer ${size}`}
    >
      <motion.img
        src={industry.image}
        alt={industry.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        animate={{
          filter: isActive
            ? "brightness(1) saturate(1.05) contrast(1.05)"
            : "brightness(0.6) saturate(0.4) contrast(1.1)",
          scale: isActive ? 1.06 : 1,
        }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Purple duotone wash — strong on inactive, soft on active */}
      <motion.div
        animate={{
          opacity: isActive ? 0.12 : 0.55,
        }}
        transition={{ duration: 0.55 }}
        className="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--b2b-primary)_20%,transparent)] via-[color-mix(in_srgb,var(--b2b-primary)_30%,transparent)] to-[color-mix(in_srgb,var(--b2b-primary)_10%,transparent)] mix-blend-color"
      />

      {/* Top vignette */}
      <motion.div
        animate={{ opacity: isActive ? 1 : 0.65 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-t from-[#03030A]/85 via-transparent to-transparent"
      />

      {/* Dim layer for non-hovered when something else is hovered */}
      <motion.div
        animate={{ opacity: isDimmed ? 0.55 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-[#03030A]"
      />

      {/* Glow ring on active */}
      <motion.div
        animate={{
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 rounded-xl ring-1 ring-[#8B5CF6]/70 shadow-[0_0_30px_-4px_rgba(139,92,246,0.55)]"
      />

      {/* Corner accent dot */}
      <motion.span
        animate={{
          scale: isActive ? 1 : 0,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#C084FC] shadow-[0_0_10px_2px_rgba(192,132,252,0.7)]"
      />

      {/* Industry label */}
      <motion.div
        animate={{
          y: isActive ? 0 : 8,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-2.5 left-2.5 right-2.5 font-mono text-xs uppercase tracking-[0.2em] text-white"
      >
        {industry.name}
      </motion.div>
    </motion.button>
  );
};

const Row = ({ industry, idx, isActive, isDimmed, onHover }) => (
  <motion.button
    type="button"
    data-testid={`industry-card-${idx}`}
    onMouseEnter={() => onHover(industry.id)}
    onFocus={() => onHover(industry.id)}
    initial={{ opacity: 0, x: 24 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{
      duration: 0.55,
      delay: idx * 0.05,
      ease: [0.16, 1, 0.3, 1],
    }}
    onViewportEnter={() => onHover(industry.id)}
    className="text-left group block w-full py-3 cursor-pointer"
  >
    <motion.div
      animate={{ opacity: isDimmed ? 0.4 : 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-3"
    >
      <motion.span
        animate={{
          width: isActive ? 26 : 16,
          backgroundColor: isActive
            ? "var(--b2b-primary)"
            : "rgba(255,255,255,0.25)",
          boxShadow: isActive
            ? "0 0 14px 2px var(--b2b-primary)"
            : "0 0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.35 }}
        className="flex-shrink-0 h-2.5 rounded-[3px]"
      />
      <span
        className={`font-display text-lg md:text-xl font-medium tracking-tight transition-colors duration-300 ${
          isActive ? "text-white" : "text-white/60"
        }`}
      >
        {industry.name}
      </span>
      <motion.span
        animate={{
          opacity: isActive ? 1 : 0,
          x: isActive ? 0 : -8,
        }}
        transition={{ duration: 0.3 }}
        className="ml-auto hidden sm:inline-flex items-center gap-1 font-mono text-xs tracking-[0.2em] uppercase text-(--b2b-primary)"
      >
        Use case <ArrowUpRight className="w-3 h-3" />
      </motion.span>
    </motion.div>
    <motion.p
      animate={{ opacity: isDimmed ? 0.3 : 1 }}
      className={`mt-1.5 pl-9 text-xs md:text-sm transition-colors duration-300 ${
        isActive ? "text-white/70" : "text-white/35"
      }`}
    >
      {industry.use}
    </motion.p>
  </motion.button>
);

const Industries = ({
  title='Deployed across regulated, ops-heavy environments.',
  description='Real production engagements where AI is integrated into systems of record — not pinned on top.'
}) => {
  const [hovered, setHovered] = useState(INDUSTRIES[0].id);

  const cols = [
    INDUSTRIES.filter((_, i) => i % 3 === 0),
    INDUSTRIES.filter((_, i) => i % 3 === 1),
    INDUSTRIES.filter((_, i) => i % 3 === 2),
  ];

  return (
    <section
      id="industries"
      data-testid="industries-section"
      className="relative py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
          <Reveal>
            <ShiningText testId="industries-eyebrow">INDUSTRIES</ShiningText>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.02] tracking-[-0.035em] font-medium max-w-2xl text-balance">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-white/50 leading-relaxed">
              {description} 
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-10 lg:gap-16">
          {/* Photo grid */}
          <div className="flex gap-2.5 md:gap-3 flex-shrink-0 overflow-x-auto pb-2 lg:pb-0 max-w-full">
            <div className="flex flex-col gap-2.5 md:gap-3">
              {cols[0].map((ind, i) => (
                <PhotoCard
                  key={ind.id}
                  industry={ind}
                  index={i * 3}
                  isActive={hovered === ind.id}
                  isDimmed={hovered !== null && hovered !== ind.id}
                  onHover={setHovered}
                  size="w-[120px] h-[130px] sm:w-[140px] sm:h-[150px] md:w-[160px] md:h-[170px]"
                />
              ))}
            </div>
            <div className="flex flex-col gap-2.5 md:gap-3 mt-12 md:mt-16">
              {cols[1].map((ind, i) => (
                <PhotoCard
                  key={ind.id}
                  industry={ind}
                  index={i * 3 + 1}
                  isActive={hovered === ind.id}
                  isDimmed={hovered !== null && hovered !== ind.id}
                  onHover={setHovered}
                  size="w-[130px] h-[140px] sm:w-[152px] sm:h-[162px] md:w-[176px] md:h-[186px]"
                />
              ))}
            </div>
            <div className="flex flex-col gap-2.5 md:gap-3 mt-6 md:mt-8">
              {cols[2].map((ind, i) => (
                <PhotoCard
                  key={ind.id}
                  industry={ind}
                  index={i * 3 + 2}
                  isActive={hovered === ind.id}
                  isDimmed={hovered !== null && hovered !== ind.id}
                  onHover={setHovered}
                  size="w-[124px] h-[134px] sm:w-[144px] sm:h-[154px] md:w-[168px] md:h-[178px]"
                />
              ))}
            </div>
          </div>

          {/* List */}
          <div className="flex-1 w-full divide-y divide-white/5 border-y border-white/5">
            {INDUSTRIES.map((ind, i) => (
              <Row
                key={ind.id}
                industry={ind}
                idx={i}
                isActive={hovered === ind.id}
                isDimmed={hovered !== null && hovered !== ind.id}
                onHover={setHovered}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
