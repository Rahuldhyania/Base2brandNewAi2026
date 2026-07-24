import React from "react";
import ArticleDetail, {
  cleanDescription,
  getArticleBySlug,
} from "./ArticleDetail";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  const title = article?.pageTitle || article?.title || "Article Detail";
  const description =
    article?.pageDescription ||
    cleanDescription(article?.description) ||
    "Read the latest article from Base2Brand.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: article?.image_poster ? [article.image_poster] : [],
    },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  return <ArticleDetail slug={slug} />;
}
