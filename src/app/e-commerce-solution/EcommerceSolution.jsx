"use client";

import React, { useState } from "react";
import LeadFormDialog from "@/components/shopify-solution/site/LeadFormDialog";
import Hero from "@/components/shopify-solution/site/Hero";
import CommerceSystems from "@/components/shopify-solution/site/CommerceSystems";
import AppScreensMarquee from "@/components/shopify-solution/site/AppScreensMarquee";
import EcosystemViz from "@/components/shopify-solution/site/EcosystemViz";
import MissionDossierFan from "@/components/ui/MissionDossierFan";
import MissionControlTimeline from "@/components/shopify-solution/site/MissionControlTimeline";
import CommandCenter from "@/components/shopify-solution/site/CommandCenter";
import FinalCTA from "@/components/ai/FinalCTA";
import { IlluminatedHero } from "@/components/illuminated-hero";
import Industries from "@/components/ai/Industries";

// const ECOMMERCE_INDUSTRIES = [
//   {
//     id: "retail",
//     name: "Retail & Ecommerce",
//     use: "High-converting Shopify stores, CRO systems, collection journeys, checkout improvements and lifecycle marketing.",
//     image:
//       "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=800&q=70",
//   },
//   {
//     id: "fashion-lifestyle",
//     name: "Fashion & Lifestyle",
//     use: "Premium storefronts, variant-heavy product pages, size guides, lookbooks, bundles and mobile-first buying experiences.",
//     image:
//       "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=70",
//   },
//   {
//     id: "beauty-personal-care",
//     name: "Beauty & Personal Care",
//     use: "Product education, UGC sections, reviews, influencer landing pages, subscriptions and retention workflows.",
//     image:
//       "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=800&q=70",
//   },
//   {
//     id: "health-wellness",
//     name: "Health & Wellness",
//     use: "Subscription models, replenishment flows, trust-led product pages and conversion-focused landing pages.",
//     image:
//       "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=70",
//   },
//   {
//     id: "food-beverage",
//     name: "Food & Beverage",
//     use: "Bundles, prepaid subscriptions, delivery logic, recurring purchase systems and retention-focused email flows.",
//     image:
//       "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=70",
//   },
//   {
//     id: "b2b-wholesale",
//     name: "B2B & Wholesale",
//     use: "Shopify Plus B2B, customer-specific pricing, wholesale portals, approval workflows and ERP integration.",
//     image:
//       "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=70",
//   },
//   {
//     id: "home-furniture",
//     name: "Home & Furniture",
//     use: "Large catalog UX, advanced filters, delivery logic, inventory visibility and assisted buying journeys.",
//     image:
//       "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=70",
//   },
//   {
//     id: "automotive-accessories",
//     name: "Automotive & Accessories",
//     use: "Fitment logic, compatibility search, custom product forms, inventory sync and operational integrations.",
//     image:
//       "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=70",
//   },
// ];

const MARQUEE_IMAGES = [
  "/images/marq1.png",
  "/images/marq2.png",
  "/images/marq3.png",
  "/images/marq4.png",
  "/images/marq5.png",
  "/images/marq6.png",
  "/images/marq7.png",
];

const DEFAULT_DOSSIER_CARDS = [
  {
      id: "dossier-01",
      // code: "DOSSIER-01",
      title: "AR Integration",
      body: "Deliver immersive shopping experiences with AR-powered product previews. Let your customers visualize products in real-time, boosting buying confidence and reducing returns.",
      // accent: "GROWTH AUDIT",
      channel: "CHANNEL A · LOCKED",
      image: "/images/dossiers1n.png",
  },
  {
      id: "dossier-02",
      // code: "DOSSIER-02",
      title: "VR Integration",
      body: "Supercharge your Shopify store with Hydrogen’s headless architecture, offering blazing-fast performance, dynamic personalization, and unparalleled scalability.",
      // accent: "CRO & UX",
      channel: "CHANNEL A · LOCKED",
      image: "/images/dossiers2n.png",
  },
  {
      id: "dossier-03",
      // code: "DOSSIER-03",
      title: "Custom Discount Functions",
      body: "Custom discount functions enable personalized pricing, optimizing sales based on customer type, history, and promotions.",
      // accent: "ENGINEERING",
      channel: "CHANNEL A · LOCKED",
      image: "/images/dossiers3n.png",
  },
  {
      id: "dossier-04",
      // code: "DOSSIER-04",
      title: "Custom Delivery Functions",
      body: "Custom delivery functions allow businesses to tailor delivery options based on customer needs, location, and preferences, enhancing service flexibility.",
      // accent: "ECOSYSTEM",
      channel: "CHANNEL A · LOCKED",
      image: "/images/dossiers4n.png",
  },
  {
      id: "dossier-05",
      // code: "DOSSIER-05",
      title: "Payment Customizations",
      body: "Payment customizations allow businesses to adjust payment methods and terms, providing customers with a personalized and convenient checkout experience.",
      // accent: "OPERATIONS",
      channel: "CHANNEL A · LOCKED",
      image: "/images/dossiers5n.png",
  },
  {
      id: "dossier-06",
      // code: "DOSSIER-06",
      title: "Cart Transform API",
      body: "The Cart Transform API lets businesses customize shopping carts in real-time, improving user experience and checkout efficiency.",
      // accent: "GROWTH MARKETING",
      channel: "CHANNEL A · LOCKED",
      image: "/images/dossiers6n.png",
  },
  {
      id: "dossier-07",
      // code: "DOSSIER-07",
      title: "Shopify CRM & ERP Integrations",
      body: "Integrate your Shopify store with CRM and ERP systems to automate orders, sync inventory, manage customer data, streamline operations, and improve overall business efficiency seamlessly.",
      // accent: "OPTIMIZATION",
      channel: "CHANNEL A · LOCKED",
      image: "/images/dossiers7n.png",
  },
];

const EcommerceSolution = () => {

  const [leadFormOpen, setLeadFormOpen] = useState(false);
  const openLeadForm = () => setLeadFormOpen(true);

  return (
    <div
      data-testid="shopify-agency-page"
      className="relative min-h-screen overflow-x-hidden"
    >
      {/* <Hero onOpenLeadForm={openLeadForm} /> */}
      <IlluminatedHero />
      <AppScreensMarquee images={MARQUEE_IMAGES} />
      <CommerceSystems />
      {/* <AppScreensMarquee images={MARQUEE_IMAGES} /> */}
      <EcosystemViz />
      <MissionDossierFan
       cards={DEFAULT_DOSSIER_CARDS}
       title="Seven playbooks, One ecommerce growth mission."
       subtitle="We do not just build stores. We build commerce systems that improve revenue, retention and operational control."
       badgeLabel={DEFAULT_DOSSIER_CARDS.length}
       eyebrow="PLAYBOOKS · MISSION DOSSIERS"
       cardImage="/images/dossier1.png"
      />
      <Industries
        title="Built for ecommerce brands where every click has a cost."
        description="We build Shopify and ecommerce platform solutions for brands where speed, product discovery, retention, inventory and conversion directly affect revenue."
        // industriesData={ECOMMERCE_INDUSTRIES}
      />
      <MissionControlTimeline />
      <CommandCenter
        title="One command center for storefronts, sales, inventory and growth."
        subtitle="From Shopify development services to ecommerce marketing services, every decision is connected to performance, stability and growth."
      />
      <FinalCTA
        highlightTag={'START AN AI TRANSFORMATION'}
        titleUpper={'Tell us where your ecommerce growth'}
        titleLower={"is stuck."}
        description={'Our Shopify and ecommerce architects will return a practical roadmap focused on revenue, conversion, speed, integrations and scale. Base2Brand will help you identify what to fix, build and optimize next.'}
        CTALeft={'Start An AI Transformation'}
        CTARight={'Talk To AI Architects'}
        features={[
          "Commerce-Led",
          "CRO-Instrumented",
          "Production-Grade",
          "Growth-Focused",
          "Shopify Plus Ready",
        ]}
      />
      <LeadFormDialog open={leadFormOpen} onOpenChange={setLeadFormOpen} />
    </div>
  );
};

export default EcommerceSolution;
