import React from "react";
import IndustryDetail from "./IndustryDetail";
import { getIndustryBySlug } from "../../lib/resourcesApi";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.industry;
  const industry = await getIndustryBySlug(slug);

  if (!industry) {
    return { title: "Industry Report Not Found" };
  }

  return {
    title: `${industry.title} Industry Report | Base2Brand`,
    description: industry.tagline || industry.description,
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.industry;

  return <IndustryDetail slug={slug} />;
}
