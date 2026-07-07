import React from "react";
import BlogDetailPage, { getBlogBySlug, cleanDescription } from "./BlogDetail";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.["blog-detail"];

  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  const title = blog?.heading || blog?.title || "Blog Detail";
  const description =
    cleanDescription(blog?.description) || "Read the latest blog from Base2Brand.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: blog?.imageUrl ? [blog.imageUrl] : [],
    },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.["blog-detail"];

  return <BlogDetailPage slug={slug} />;
}