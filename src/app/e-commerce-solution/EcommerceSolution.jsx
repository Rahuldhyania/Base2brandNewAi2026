"use client";

import React, { useState } from "react";
import LeadFormDialog from "@/components/shopify-solution/site/LeadFormDialog";
import Hero from "@/components/shopify-solution/site/Hero";
import CommerceSystems from "@/components/shopify-solution/site/CommerceSystems";
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

const DEFAULT_DOSSIER_CARDS = [
  {
      id: "dossier-01",
      code: "DOSSIER-01",
      title: "Ecommerce Audit & Strategy",
      body: "We review your store, traffic, analytics, product structure, apps, checkout, SEO and marketing stack to identify the highest-impact growth opportunities.",
      accent: "GROWTH AUDIT",
      channel: "CHANNEL A · LOCKED",
  },
  {
      id: "dossier-02",
      code: "DOSSIER-02",
      title: "UX, CRO & Storefront Design",
      body: "We design ecommerce journeys that make buying easier. From homepage to product page to checkout, every section is shaped around trust, clarity and conversion.",
      accent: "CRO & UX",
      channel: "CHANNEL A · LOCKED",
  },
  {
      id: "dossier-03",
      code: "DOSSIER-03",
      title: "Shopify Build & Online Store Development",
      body: "We engineer Shopify storefronts with flexible sections, clean code, strong performance and scalable theme architecture.",
      accent: "ENGINEERING",
      channel: "CHANNEL A · LOCKED",
  },
  {
      id: "dossier-04",
      code: "DOSSIER-04",
      title: "Integrations & Ecommerce Platform Solutions",
      body: "We connect Shopify with the systems that run your business — ERP, inventory, OMS, subscriptions, analytics, CRM and marketing automation.",
      accent: "ECOSYSTEM",
      channel: "CHANNEL A · LOCKED",
  },
  {
      id: "dossier-05",
      code: "DOSSIER-05",
      title: "Launch, QA & Stabilization",
      body: "We launch with SEO preservation, checkout testing, analytics validation, redirects, payment checks and post-launch monitoring.",
      accent: "OPERATIONS",
      channel: "CHANNEL A · LOCKED",
  },
  {
      id: "dossier-06",
      code: "DOSSIER-06",
      title: "Ecommerce Marketing Services",
      body: "After launch, we help brands turn the store into a growth engine through paid media, retention flows, landing pages and campaign-specific conversion journeys.",
      accent: "GROWTH MARKETING",
      channel: "CHANNEL A · LOCKED",
  },
  {
      id: "dossier-07",
      code: "DOSSIER-07",
      title: "Scale, CRO & Growth Ops",
      body: "We improve performance after launch through testing, speed optimization, conversion analysis and revenue reporting.",
      accent: "OPTIMIZATION",
      channel: "CHANNEL A · LOCKED",
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
      <CommerceSystems />
      <EcosystemViz />
      <MissionDossierFan
       cards={DEFAULT_DOSSIER_CARDS}
       title="Seven playbooks, One ecommerce growth mission."
       subtitle="We do not just build stores. We build commerce systems that improve revenue, retention and operational control."
       badgeLabel={DEFAULT_DOSSIER_CARDS.length}
       eyebrow="PLAYBOOKS · MISSION DOSSIERS"
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
