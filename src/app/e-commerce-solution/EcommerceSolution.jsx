"use client";
import React, { useState } from "react";
import LeadFormDialog from "@/components/shopify-solution/site/LeadFormDialog";
import Hero from "@/components/shopify-solution/site/Hero";

const EcommerceSolution = () => {
  const [leadFormOpen, setLeadFormOpen] = useState(false);

  const openLeadForm = () => setLeadFormOpen(true);
  return (
    <main
      data-testid="shopify-agency-page"
      className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden"
    >
      <Hero onOpenLeadForm={openLeadForm} />
      <LeadFormDialog open={leadFormOpen} onOpenChange={setLeadFormOpen} />
    </main>
  );
};

export default EcommerceSolution;
