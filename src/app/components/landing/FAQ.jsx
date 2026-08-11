import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is GEO (Generative Engine Optimization)?",
    a: "GEO is the practice of optimizing your brand, content, knowledge graph and authority signals so generative AI systems — ChatGPT, Gemini, Claude, Perplexity and others — recommend you in their answers. It is the natural successor to traditional search optimization, built specifically for AI-native discovery.",
  },
  {
    q: "How is GEO different from SEO?",
    a: "Classic SEO targets ranking links on a results page. GEO targets being chosen, cited and recommended inside an AI-generated answer. Different engines, different signals, different content shapes — and different success metrics like share-of-answer, citation rate and recommendation probability.",
  },
  {
    q: "Can my business actually appear in ChatGPT or Gemini?",
    a: "Yes. AI engines pull from a combination of training data, retrieval indexes, web citations and entity graphs. With the right brand structuring, content design and authority building, your business can become a recommended option for the prompts that matter to your buyers.",
  },
  {
    q: "How long does AI visibility take?",
    a: "Initial signals usually appear within 4–8 weeks. Compounding share-of-answer and recommendation lift typically scale across a 90–180 day window depending on category competitiveness, baseline authority and content velocity.",
  },
  {
    q: "Which AI platforms matter most for my business?",
    a: "It depends on your buyer behaviour. For B2B SaaS, ChatGPT, Perplexity and Gemini drive the most discovery. Consumer brands lean on Google AI Overviews and Gemini. We map this in the audit phase and prioritize the surfaces with the highest pipeline potential.",
  },
  {
    q: "Do you replace our existing marketing team?",
    a: "No — we plug in alongside your team. We bring the AI-first specialism, frameworks and operating motion. Your team retains brand ownership and we accelerate distribution, authority and AI presence in parallel.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

export default function FAQ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section
        id="faq"
        data-testid="faq-section"
        className="relative py-28 md:py-36"
      >
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="text-center">
          <div className="label-mono">· FAQ</div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter">
            Questions, answered.
          </h2>
          <p className="mt-5 text-zinc-400 max-w-xl mx-auto">
            Everything teams typically ask before partnering with us on AI
            visibility.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <Accordion
            type="single"
            collapsible
            className="w-full"
            data-testid="faq-accordion"
          >
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-white/10 last:border-b-0"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger className="text-left font-display text-lg md:text-xl font-medium tracking-tight py-6 hover:no-underline hover:text-blue-300 transition-colors">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-base leading-relaxed pb-6 pr-8">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
    </>
  );
}
