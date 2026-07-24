import React from "react";
import InsightDetail, {
  cleanDescription,
  getInsightBySlug,
} from "./InsightDetail";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const insight = await getInsightBySlug(slug);

  if (!insight) {
    return { title: "Insight Not Found" };
  }

  const title = insight?.pageTitle || insight?.title || "Insight Detail";
  const description =
    insight?.pageDescription ||
    cleanDescription(insight?.description) ||
    "Read the latest insight from Base2Brand.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: insight?.image_poster ? [insight.image_poster] : [],
    },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  return <InsightDetail slug={slug} />;
}
