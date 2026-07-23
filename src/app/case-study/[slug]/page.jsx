import { notFound } from "next/navigation";
import CaseStudyDetail from "./CaseStudyDetail";
import { CASE_STUDIES, getCaseStudyBySlug } from "../data/caseStudiesData";

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const study = getCaseStudyBySlug(resolvedParams.slug);

  if (!study) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: `${study.title} | Base2Brand Case Study`,
    description: study.subtitle,
    openGraph: {
      title: study.title,
      description: study.subtitle,
      images: study.detail.heroImage ? [study.detail.heroImage] : [],
    },
  };
}

export default async function CaseStudyDetailPage({ params }) {
  const resolvedParams = await params;
  const study = getCaseStudyBySlug(resolvedParams.slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyDetail slug={resolvedParams.slug} />;
}
