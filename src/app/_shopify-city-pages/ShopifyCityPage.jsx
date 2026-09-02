"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Layout from "@/components/apple/Layout";
import StarsBackground from "@/components/erp/StarsBackground";
import LeadFormDialog from "@/components/shopify-solution/site/LeadFormDialog";
import CommerceSystems from "@/components/shopify-solution/site/CommerceSystems";
import AppScreensMarquee from "@/components/shopify-solution/site/AppScreensMarquee";
import { IlluminatedHero } from "@/components/illuminated-hero";
import { SectionFallback } from "@/components/layout/SectionFallback";
import "../e-commerce-solution/ecommerce.css";

// Below-the-fold sections are lazy-loaded so their JS (and, for
// CommandCenter, its video) isn't parsed/executed on initial load.
const EcosystemViz = dynamic(
  () => import("@/components/shopify-solution/site/EcosystemViz"),
  { loading: () => <SectionFallback minHeight={480} /> },
);
const MissionDossierFan = dynamic(() => import("@/components/ui/MissionDossierFan"), {
  loading: () => <SectionFallback minHeight={480} />,
});
const Industries = dynamic(() => import("@/components/ai/Industries"), {
  loading: () => <SectionFallback minHeight={520} />,
});
const MissionControlTimeline = dynamic(
  () => import("@/components/shopify-solution/site/MissionControlTimeline"),
  { loading: () => <SectionFallback minHeight={480} /> },
);
const CommandCenter = dynamic(
  () => import("@/components/shopify-solution/site/CommandCenter"),
  { loading: () => <SectionFallback minHeight={560} /> },
);
const FinalCTA = dynamic(() => import("@/components/ai/FinalCTA"), {
  loading: () => <SectionFallback minHeight={400} />,
});

const MARQUEE_IMAGES = [
  "/images/marq1.png",
  "/images/marq2.png",
  "/images/marq3.png",
  "/images/marq4.png",
  "/images/marq5.png",
  "/images/marq6.png",
  "/images/marq7.png",
];

// Same seven capability dossiers used across the Shopify template family —
// these are technical Shopify features, not location-specific, so they stay
// constant across every city page.
const DOSSIER_CARDS = [
  {
    id: "dossier-01",
    title: "AR Integration",
    body: "Deliver immersive shopping experiences with AR-powered product previews. Let your customers visualize products in real-time, boosting buying confidence and reducing returns.",
    channel: "CHANNEL A · LOCKED",
    image: "/images/dossiers1n.png",
  },
  {
    id: "dossier-02",
    title: "VR Integration",
    body: "Supercharge your Shopify store with Hydrogen's headless architecture, offering blazing-fast performance, dynamic personalization, and unparalleled scalability.",
    channel: "CHANNEL A · LOCKED",
    image: "/images/dossiers2n.png",
  },
  {
    id: "dossier-03",
    title: "Custom Discount Functions",
    body: "Custom discount functions enable personalized pricing, optimizing sales based on customer type, history, and promotions.",
    channel: "CHANNEL A · LOCKED",
    image: "/images/dossiers3n.png",
  },
  {
    id: "dossier-04",
    title: "Custom Delivery Functions",
    body: "Custom delivery functions allow businesses to tailor delivery options based on customer needs, location, and preferences, enhancing service flexibility.",
    channel: "CHANNEL A · LOCKED",
    image: "/images/dossiers4n.png",
  },
  {
    id: "dossier-05",
    title: "Payment Customizations",
    body: "Payment customizations allow businesses to adjust payment methods and terms, providing customers with a personalized and convenient checkout experience.",
    channel: "CHANNEL A · LOCKED",
    image: "/images/dossiers5n.png",
  },
  {
    id: "dossier-06",
    title: "Cart Transform API",
    body: "The Cart Transform API lets businesses customize shopping carts in real-time, improving user experience and checkout efficiency.",
    channel: "CHANNEL A · LOCKED",
    image: "/images/dossiers6n.png",
  },
  {
    id: "dossier-07",
    title: "Shopify CRM & ERP Integrations",
    body: "Integrate your Shopify store with CRM and ERP systems to automate orders, sync inventory, manage customer data, streamline operations, and improve overall business efficiency seamlessly.",
    channel: "CHANNEL A · LOCKED",
    image: "/images/dossiers7n.png",
  },
];

export default function ShopifyCityPage({ data }) {
  const [leadFormOpen, setLeadFormOpen] = useState(false);
  const openLeadForm = () => setLeadFormOpen(true);

  const { hero, dossier, industries, commandCenter, finalCTA } = data;

  return (
    <Layout tint="green">
      <div className="theme-e-commerce-solution relative md:min-h-screen overflow-x-hidden">
        <StarsBackground
          className="!fixed inset-0 z-0 pointer-events-none"
          starColor="#95BF47"
        />

        <div className="relative z-[1]">
          <div
            data-testid="shopify-agency-page"
            className="relative min-h-screen overflow-x-hidden"
          >
            <IlluminatedHero
              onOpenLeadForm={openLeadForm}
              srH1={hero.srH1}
              titleLine1={hero.titleLine1}
              titleLine2={hero.titleLine2}
              primaryCTA={hero.primaryCTA}
              secondaryCTA={hero.secondaryCTA}
            />
            <AppScreensMarquee images={MARQUEE_IMAGES} />
            <CommerceSystems />
            <EcosystemViz />
            <MissionDossierFan
              cards={DOSSIER_CARDS}
              title={dossier.title}
              subtitle={dossier.subtitle}
              badgeLabel={DOSSIER_CARDS.length}
              eyebrow={dossier.eyebrow}
              cardImage="/images/dossier1.png"
            />
            <Industries
              title={industries.title}
              description={industries.description}
              industriesData={industries.data}
              ctaLabel={industries.ctaLabel}
            />
            <MissionControlTimeline />
            <CommandCenter
              title={commandCenter.title}
              subtitle={commandCenter.subtitle}
            />
            <FinalCTA
              highlightTag={finalCTA.highlightTag}
              titleUpper={finalCTA.titleUpper}
              titleLower={finalCTA.titleLower}
              description={finalCTA.description}
              CTALeft={finalCTA.CTALeft}
              CTARight={finalCTA.CTARight}
              features={finalCTA.features}
            />
            <LeadFormDialog open={leadFormOpen} onOpenChange={setLeadFormOpen} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
