import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    q: "How is Base2Brand different from other marketing agencies?",
    a: "Most agencies sell traffic. We build growth systems. That means strategy, performance marketing, SEO, CRO, automation, and analytics — all wired together so every dollar is accountable to revenue, not vanity metrics.",
  },
  {
    q: "What's the minimum monthly ad budget you work with?",
    a: "We work with brands across a wide range of budgets, but most of our partners spend between $5K and $250K/month on paid media. We're happy to start small if the unit economics make sense.",
  },
  {
    q: "How quickly can I expect results?",
    a: "Early optimisation wins typically show in 30 days. Predictable lead flow and lower CAC takes 60–90 days. Scaling profitably is usually a 4–6 month story. We're transparent about timelines from day one.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "No. We work on month-to-month engagements after an initial 90-day kickoff. If we're not delivering value, you shouldn't be locked in.",
  },
  {
    q: "Which industries do you specialise in?",
    a: "Ecommerce & Shopify, real estate, healthcare & clinics, furniture & manufacturing, and local businesses — though our growth playbooks apply to most B2C and considered-purchase B2B models.",
  },
  {
    q: "Do you handle creative and content production too?",
    a: "Yes. Performance creative, landing pages, ad scripts, organic content — handled in-house so strategy and execution never get disconnected.",
  },
  {
    q: "How do you report performance?",
    a: "Custom dashboards (GA4, Looker, native ad platforms) showing revenue, ROAS, CAC, LTV, attribution, and channel contribution — plus a weekly strategy call.",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      data-testid="faq-accordion"
      className="relative py-14 border-y border-border bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-brand font-semibold mb-5">
              ▸ FAQ
            </p>
            <h2
              data-testid="faq-headline"
              className="font-display font-bold uppercase text-balance leading-[0.95] tracking-tight text-[clamp(2rem,4.5vw,3.75rem)]"
            >
              Questions, Answered Honestly.
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-md">
              Have something specific?{" "}
              <a
                href="mailto:hello@base2brand.com?subject=Question"
                className="text-brand hover:underline"
                data-testid="faq-contact-link"
              >
                Ask us directly
              </a>
              .
            </p>
          </div>

          <div className="lg:col-span-7">
            <Accordion type="single" collapsible defaultValue="item-0">
              {faqs.map((f, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  data-testid={`faq-item-${idx}`}
                  className="border-b border-border"
                >
                  <AccordionTrigger
                    data-testid={`faq-trigger-${idx}`}
                    className="text-left text-base md:text-lg font-semibold hover:text-brand py-6"
                  >
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent
                    data-testid={`faq-content-${idx}`}
                    className="text-sm md:text-base text-muted-foreground leading-relaxed pb-6 pr-6"
                  >
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
