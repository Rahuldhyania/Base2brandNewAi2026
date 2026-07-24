import React from "react";
import ResourceDetailPage, {
  cleanDescription,
} from "../../components/ResourceDetailPage";
import { getInsightBySlug } from "../../lib/resourcesApi";

export { getInsightBySlug, cleanDescription };

export default async function InsightDetail({ slug }) {
  const insight = await getInsightBySlug(slug);

  return <ResourceDetailPage resource={insight} resourceType="Insight" />;
}
