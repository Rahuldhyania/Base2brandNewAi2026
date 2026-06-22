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
      <MissionDossierFan />
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
