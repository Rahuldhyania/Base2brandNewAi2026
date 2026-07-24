import React from "react";
import ResourceDetailPage, {
  cleanDescription,
} from "../../components/ResourceDetailPage";
import { getArticleBySlug } from "../../lib/resourcesApi";

export { getArticleBySlug, cleanDescription };

export default async function ArticleDetail({ slug }) {
  const article = await getArticleBySlug(slug);

  return <ResourceDetailPage resource={article} resourceType="Article" />;
}
