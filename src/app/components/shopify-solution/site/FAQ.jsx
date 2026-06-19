import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/site/Container";
import SectionHeader from "@/components/site/SectionHeader";
import Reveal from "@/components/site/Reveal";

const FAQS = [
  {
    q: "What types of Shopify projects do you take on?",
    a: "Anything from Shopify and Shopify Plus storefronts to migrations (Magento, BigCommerce, Salesforce Commerce, WooCommerce), ERP integrations (Odoo, Unicommerce, EasyEcom, Increff), subscription commerce builds (Recharge), and ongoing growth ops. We focus on DTC and enterprise commerce brands.",
  },
  {
    q: "How long does a typical Shopify Plus engagement take?",
    a: "A net-new Plus build typically runs 8–14 weeks depending on scope and integrations. Migrations average 6–10 weeks. We share a detailed mission plan with phase-level estimates after discovery.",
  },
  {
    q: "Do you work with our existing tech / agency partners?",
    a: "Yes. We routinely collaborate with internal teams, brand designers, performance marketing partners, and ERP/OMS implementers. We can lead the engagement or plug in as the Shopify-native execution partner.",
  },
  {
    q: "What does pricing look like?",
    a: "Most engagements are fixed-scope per phase or quarterly retainers for growth ops. Investments typically start at $25k for focused builds and scale into six figures for Plus + integrations + growth. We tailor pricing to outcomes.",
  },
  {
    q: "Can you integrate with our ERP / OMS / WMS?",
    a: "Yes — we specialize in Shopify-native integrations with Odoo, Unicommerce, EasyEcom, Increff, NetSuite, and custom ERPs. We design the data contracts, build the connectors, and stand up monitoring so the operation runs reliably.",
  },
  {
    q: "How do you measure success?",
    a: "We anchor every engagement to revenue and operational KPIs — conversion rate, AOV, LTV, churn, inventory accuracy, and time-to-launch — reviewed against baselines and tied to a quarterly OKR cadence.",
  },
];

export const FAQ = () => {
  return (
    <section
      data-testid="faq-section"
      className="relative py-20 sm:py-24 lg:py-28 border-t border-white/[0.06]"
    >
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="What teams ask before they bring us in."
          subtitle="Short, honest answers. If you don't see your question here, the brief form below is the fastest way to a real conversation."
        />

        <Reveal>
          <Accordion
            type="single"
            collapsible
            data-testid="faq-accordion"
            className="mt-10 space-y-3"
          >
            {FAQS.map((item, idx) => (
              <AccordionItem
                key={item.q}
                value={`item-${idx}`}
                className="rounded-2xl bg-white/[0.03] border border-white/10 px-5 hover:border-white/18 transition-colors duration-200"
              >
                <AccordionTrigger
                  data-testid={`faq-trigger-${idx}`}
                  className="py-5 text-left text-white font-medium hover:no-underline"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[10px] tracking-[0.20em] uppercase text-white/45">
                      Q{(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-[15px] sm:text-base">{item.q}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pt-0 text-white/70 leading-relaxed text-sm">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  );
};

export default FAQ;
