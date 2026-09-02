'use client'
import React from "react";
import { m } from "framer-motion";
import { extraData } from "@/constants/testIds/extraData";

const INDUSTRIES = [
  { id: "bfsi", title: "Banking & Financial Services", n: "01", copy: "Underwriting agents, fraud graphs, regulatory reporting fabrics." },
  { id: "healthcare", title: "Healthcare & Life Sciences", n: "02", copy: "Clinical copilots, citizen platforms, HIPAA/EU‑GDPR grade infra." },
  { id: "manufacturing", title: "Manufacturing & Industry 4.0", n: "03", copy: "Digital twins, OEE lifts, supply‑chain decision graphs." },
  { id: "telecom", title: "Telecom & Media", n: "04", copy: "Content intelligence, network AIOps, personalisation at scale." },
  { id: "retail", title: "Retail & Consumer", n: "05", copy: "Assistant commerce, unified customer data, dynamic pricing." },
  { id: "energy", title: "Energy & Utilities", n: "06", copy: "Grid twinning, ESG reporting, predictive asset maintenance." },
];

export default function Industries() {
  return (
    <section
      id="industries"
      data-section="industries"
      data-testid={extraData.industries.root}
      className="relative px-6 md:px-12 py-24 md:py-32"
    >
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-14 md:mb-16 flex flex-wrap items-end gap-y-6 justify-between">
          <div>
            <div className="eyebrow mb-4">Industries</div>
            <h2 className="font-display text-white text-[38px] md:text-[56px] leading-[0.98] tracking-[-0.035em] max-w-[720px]">
              Sectors we ship for<br />under NDA.
            </h2>
          </div>
          <p className="text-[14px] md:text-[15px] text-[var(--b2b-text-muted)] leading-[1.6] max-w-[420px]">
            High‑stakes environments where compliance, latency and reliability are non‑negotiable.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden b2b-hairline">
          {INDUSTRIES.map((ind, i) => (
            <m.div
              key={ind.id}
              data-testid={extraData.industries.item(ind.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ backgroundColor: "rgba(244,123,82,0.05)" }}
              className="group flex items-center gap-4 md:gap-8 px-6 md:px-8 py-6 md:py-8 border-b border-white/5 last:border-0 bg-[rgba(10,11,18,0.5)] cursor-default"
            >
              <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--b2b-orange)] w-10 shrink-0">
                {ind.n}
              </span>
              <h3 className="font-display text-[22px] md:text-[32px] text-white leading-[1.1] tracking-[-0.02em] flex-1 min-w-0 truncate">
                {ind.title}
              </h3>
              <p className="hidden md:block text-[14px] text-[var(--b2b-text-muted)] max-w-[380px] leading-[1.5]">
                {ind.copy}
              </p>
              <span className="ml-auto w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-[var(--b2b-orange)] group-hover:border-[var(--b2b-orange)] transition-colors shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
