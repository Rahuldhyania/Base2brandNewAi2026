"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "What does Base2Brand do?",
    answer:
      "Base2Brand builds connected digital growth systems for brands through performance marketing, AI automation, Shopify, CRO, mobile apps, enterprise software, branding and customer experience design.",
  },
  {
    question: "How is Base2Brand different from a normal marketing or IT agency?",
    answer:
      "Base2Brand does not work in disconnected silos. Strategy, creative, media, technology, AI, analytics and conversion optimization are connected into one system focused on measurable business growth.",
  },
  {
    question: "Does Base2Brand provide performance marketing services?",
    answer:
      "Yes. Base2Brand plans, launches and scales performance campaigns across Google Ads, Meta Ads, LinkedIn, YouTube and marketplace platforms with a focus on leads, revenue, ROAS and conversion quality.",
  },
  {
    question: "Can Base2Brand help improve website conversions?",
    answer:
      "Yes. Base2Brand provides CRO services for landing pages, Shopify stores, product pages, forms, checkout flows and lead-generation funnels to help brands convert more traffic into customers.",
  },
  {
    question: "Does Base2Brand build Shopify and ecommerce websites?",
    answer:
      "Yes. Base2Brand builds Shopify stores, Shopify Plus experiences, custom ecommerce websites, subscription commerce systems, checkout journeys and retention-focused customer experiences.",
  },
  {
    question: "What kind of AI solutions does Base2Brand build?",
    answer:
      "Base2Brand builds AI chatbots, AI sales assistants, lead scoring systems, marketing automation workflows, predictive analytics, generative AI workflows and custom AI applications for business growth.",
  },
  {
    question: "Who does Base2Brand work with?",
    answer:
      "Base2Brand works with D2C brands, ecommerce businesses, healthcare companies, education platforms, SaaS companies, real estate brands, manufacturers, professional services firms and enterprise teams.",
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
      <div className="mx-auto max-w-7xl">
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
                    className={`mt-0.5 size-5 sm:size-[22px] shrink-0 text-(--b2b-primary) transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"
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
