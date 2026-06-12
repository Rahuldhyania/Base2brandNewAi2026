'use client'
import Reveal from "@/components/site/Reveal";
import ShiningText from "@/components/site/ShiningText";
import {
  SiOpenai,
  SiAnthropic,
  SiGooglegemini,
  SiMeta,
  SiLangchain,
  SiNeo4J,
  SiSnowflake,
  SiGooglecloud,
  SiNvidia,
  SiDatabricks,
  SiHuggingface,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import { Users, Layers, Network, Workflow, Database } from "lucide-react";
import Marquee from "react-fast-marquee";

/**
 * Built On The Latest AI Stack — uses bundled react-icons for every brand
 * so badges always render (no CDN failures). Items without a clean brand
 * mark get a contextual lucide icon.
 */

const STACK = [
  {
    cat: "Foundation Models",
    items: [
      { label: "GPT-5", icon: SiOpenai },
      { label: "Claude", icon: SiAnthropic },
      { label: "Gemini", icon: SiGooglegemini },
      { label: "Llama", icon: SiMeta },
    ],
  },
  {
    cat: "Agent Frameworks",
    items: [
      { label: "LangGraph", icon: SiLangchain },
      { label: "CrewAI", icon: Users },
      { label: "OpenAI Agents", icon: SiOpenai },
    ],
  },
  {
    cat: "Protocols",
    items: [
      { label: "MCP", icon: Layers },
      { label: "Agent-to-Agent", icon: Network },
      { label: "Function Calling", icon: Workflow },
    ],
  },
  {
    cat: "Data Layer",
    items: [
      { label: "Pinecone", icon: Database },
      { label: "Knowledge Graphs", icon: SiNeo4J },
      { label: "Snowflake", icon: SiSnowflake },
    ],
  },
  {
    cat: "Infrastructure",
    items: [
      { label: "AWS", icon: FaAws },
      { label: "Azure", icon: VscAzure },
      { label: "Google Cloud", icon: SiGooglecloud },
    ],
  },
];

const MARQUEE = [
  SiOpenai,
  SiAnthropic,
  SiGooglegemini,
  SiMeta,
  FaAws,
  VscAzure,
  SiGooglecloud,
  SiNvidia,
  SiSnowflake,
  SiDatabricks,
  SiNeo4J,
  SiLangchain,
  SiHuggingface,
];

const LogoBadge = ({ item }) => {
  const Icon = item.icon;
  return (
    <li
      data-testid={`techstack-item-${item.label
        .toLowerCase()
        .replace(/\s+/g, "-")}`}
      className="group flex items-center gap-3 py-2 px-3 -mx-3 rounded-lg hover:bg-white/3 transition-colors"
    >
      <span className="flex items-center justify-center w-8 h-8 rounded-md bg-white/5 border border-white/10 text-white/85 group-hover:bg-[rgba(var(--b2b-primary-rgb),0.15)] group-hover:border-[rgba(var(--b2b-primary-rgb),0.4)] group-hover:text-white transition-all shrink-0">
        <Icon className="w-4 h-4" />
      </span>
      <span className="text-sm text-white/80 group-hover:text-white transition-colors">
        {item.label}
      </span>
    </li>
  );
};

const TechStack = ({title, highlightTag}) => {
  return (
    <section
      data-testid="techstack-section"
      className="relative py-12 md:py-16 border-y border-white/5 bg-(--b2b-bg-2)"
    >
      <div className=" mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <ShiningText testId="techstack-eyebrow">
            {highlightTag}
          </ShiningText>
          <h2 
            className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.02] tracking-[-0.035em] font-medium max-w-4xl mx-auto text-balance"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Reveal>

        <div className="mt-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {STACK.map((group, i) => (
            <Reveal key={group.cat} delay={i * 0.05} className="bg-(--b2b-bg)">
              <div data-testid={`techstack-group-${i}`} className="p-8 h-full">
                <div className="font-mono text-xs tracking-[0.25em] uppercase text-[rgba(var(--b2b-primary-2-rgb),0.8)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 font-display text-lg font-medium">
                  {group.cat}
                </h3>
                <ul className="mt-6 space-y-1">
                  {group.items.map((item) => (
                    <LogoBadge key={item.label} item={item} />
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Marquee of partner logos */}
        <div className="mt-12 relative overflow-hidden">
          <Marquee>
            {[...MARQUEE, ...MARQUEE].map((Icon, i) => (
              <span
                key={`m-${i}`}
                className="text-white/45 hover:text-white/80 transition-colors"
              >
                <Icon className="w-6 h-6 mx-8" />
              </span>
            ))}
         </Marquee>
          </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
