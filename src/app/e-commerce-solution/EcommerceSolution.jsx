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



const DEFAULT_DOSSIER_CARDS = [
  {
      id: "dossier-01",
      code: "DOSSIER-01",
      title: "Discovery & Systems Audit",
      body: "We map your commerce stack — storefront, CRM, ERP, OMS, ads — to surface the gaps and the multipliers.",
      accent: "MISSION PLANNING",
      channel: "CHANNEL A · LOCKED",
  },
  {
      id: "dossier-02",
      code: "DOSSIER-02",
      title: "UX & Design System",
      body: "A Shopify-native design system tuned for conversion, scale, and storytelling across PDPs and bundles.",
      accent: "BRAND-LED UX",
      channel: "CHANNEL A · LOCKED",
  },
  {
      id: "dossier-03",
      code: "DOSSIER-03",
      title: "Shopify Build",
      body: "Online Store 2.0, Liquid, Hydrogen — engineered for performance and shipped on cadence.",
      accent: "ENGINEERING",
      channel: "CHANNEL A · LOCKED",
  },
  {
      id: "dossier-04",
      code: "DOSSIER-04",
      title: "Integrations",
      body: "Klaviyo, Recharge, Odoo, Unicommerce, EasyEcom, Increff — wired into a unified commerce OS.",
      accent: "ECOSYSTEM",
      channel: "CHANNEL A · LOCKED",
  },
  {
      id: "dossier-05",
      code: "DOSSIER-05",
      title: "Launch & Stabilize",
      body: "Controlled cutovers, SEO preserved, observability online — we land safely and accelerate from there.",
      accent: "OPERATIONS",
      channel: "CHANNEL A · LOCKED",
  },
  {
      id: "dossier-06",
      code: "DOSSIER-06",
      title: "Growth Ops",
      body: "Continuous experimentation: lifecycle, paid acquisition, CRO, and analytics tied to revenue.",
      accent: "COMPOUNDING",
      channel: "CHANNEL A · LOCKED",
  },
  {
      id: "dossier-07",
      code: "DOSSIER-07",
      title: "Scale & Optimize",
      body: "Performance tuning, CRO experiments, and lifecycle automation — compounding gains across storefront, retention, and acquisition.",
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
       title="Six dossiers. One Shopify mission."
       subtitle="How we run a Shopify engagement — from discovery to growth operations — as a fan of focused dossiers."
       badgeLabel={DEFAULT_DOSSIER_CARDS.length}
       eyebrow="PLAYBOOKS · MISSION DOSSIERS"
      />
      <Industries />
      <MissionControlTimeline />
      <CommandCenter />
      <FinalCTA
        highlightTag={'START AN AI TRANSFORMATION'}
        titleUpper={'Tell us the hardest workflow'}
        titleLower={"you've postponed."}
        description={'Our AI architects will return a practical implementation roadmap focused on measurable business outcomes — not slideware.'}
        CTALeft={'Start An AI Transformation'}
        CTARight={'Talk To AI Architects'}
        features={[
          "Engineering-led",
          "Outcome-instrumented",
          "Production-grade",
          "Globally deployed",
        ]}
      />
      <LeadFormDialog open={leadFormOpen} onOpenChange={setLeadFormOpen} />
    </div>
  );
};

export default EcommerceSolution;
