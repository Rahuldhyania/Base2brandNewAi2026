"use client";
import React, { useState } from "react";
import LeadFormDialog from "@/components/shopify-solution/site/LeadFormDialog";
import Hero from "@/components/shopify-solution/site/Hero";
import CommerceSystems from "@/components/shopify-solution/site/CommerceSystems";
import EcosystemViz from "@/components/shopify-solution/site/EcosystemViz";
import MissionDossierFan from "@/components/ui/MissionDossierFan";
import MissionControlTimeline from "@/components/shopify-solution/site/MissionControlTimeline";
import CommandCenter from "@/components/shopify-solution/site/CommandCenter";

const EcommerceSolution = () => {
  const [leadFormOpen, setLeadFormOpen] = useState(false);

  const openLeadForm = () => setLeadFormOpen(true);
  return (
    <main
      data-testid="shopify-agency-page"
      className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden"
    >
      <Hero onOpenLeadForm={openLeadForm} />
      <CommerceSystems />
      <EcosystemViz />
      <MissionDossierFan />
      <MissionControlTimeline />
      <CommandCenter />
      <LeadFormDialog open={leadFormOpen} onOpenChange={setLeadFormOpen} />
    </main>
  );
};

export default EcommerceSolution;
