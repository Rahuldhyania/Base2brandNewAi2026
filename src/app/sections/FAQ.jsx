"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "What digital marketing services does Base2Brand offer?",
    answer:
      "We offer performance marketing, SEO, social media, content strategy, Shopify & ecommerce, CRO, AI automation, and full-funnel growth campaigns — all aligned to measurable business outcomes.",
  },
  {
    question: "How does Base2Brand align strategies with my specific business goals?",
    answer:
      "We start with a discovery deep-dive into your market, audience, and KPIs. From there we build a custom growth roadmap so every channel, creative, and campaign maps directly to your revenue goals.",
  },
  {
    question: "Does Base2Brand require long-term contracts?",
    answer:
      "No. We work on flexible engagement models so you can start with a defined scope or sprint and scale only when you see clear results.",
  },
  {
    question: "How will I receive updates on my campaigns' performance?",
    answer:
      "You get regular performance reports, live dashboards, and scheduled strategy calls so you always know what’s working, what’s being optimized, and what’s next.",
  },
  {
    question: "Does Base2Brand work with businesses of all sizes and industries?",
    answer:
      "Yes. We partner with startups, mid-market brands, and enterprises across ecommerce, SaaS, services, and more — adapting our systems to your stage and industry.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative py-10 px-5 sm:px-8"
    >
      <div className="mx-auto max-w-[920px]">
        <h2 className="text-center text-white font-semibold tracking-tight leading-[1.1] text-[clamp(2rem,5vw,3.5rem)] mb-8">
          Frequently
          <br />
          Asked Questions
        </h2>

        <div className="border-t border-white/25">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className="border-b border-white/15">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 py-4 text-left group"
                >
                  <span className="text-white font-semibold text-[15px] sm:text-[17px] leading-snug pr-2">
                    {item.question}
                  </span>
                  <Plus
                    aria-hidden
                    className={`mt-0.5 size-5 sm:size-[22px] shrink-0 text-[#FFB800] transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    strokeWidth={2.25}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 text-white/65 text-[14px] sm:text-[15px] leading-relaxed max-w-[52rem]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
