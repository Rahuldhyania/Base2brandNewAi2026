import CaseStudyDetail from "./CaseStudyDetail";
import { CASE_STUDY_API_BASE } from "../lib/caseStudyApi";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    return { title: "Case Study Not Found" };
  }

  try {
    const response = await fetch(
      `${CASE_STUDY_API_BASE}/case-studies/slug/${encodeURIComponent(slug)}`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return { title: "Case Study Not Found" };
    }

    const data = await response.json();
    const study = data.caseStudy || data.data || data;

    if (!study?.title) {
      return { title: "Case Study Not Found" };
    }

    return {
      title: `${study.title} | Base2Brand Case Study`,
      description: study.subtitle,
      openGraph: {
        title: study.title,
        description: study.subtitle,
        images: study.detail?.heroImage ? [study.detail.heroImage] : [],
      },
    };
  } catch {
    return {
      title: "Case Study | Base2Brand",
    };
  }
}

export default async function CaseStudyDetailPage({ params }) {
  const resolvedParams = await params;

  return <CaseStudyDetail slug={resolvedParams.slug} />;
}
