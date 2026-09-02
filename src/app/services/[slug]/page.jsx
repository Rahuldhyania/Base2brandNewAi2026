import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Hero from "@/components/landing/Hero";
import Narrative from "@/components/ai/Narrative";
import Capabilities from "@/components/ai/Capabilities";
import { SectionFallback } from "@/components/layout/SectionFallback";
import { SERVICES_PAGES, getServicePage } from "../data/servicesData";

// Below-the-fold sections are lazy-loaded so their JS (and, for
// CommandCenter, its video) isn't parsed/executed on initial load.
const Work = dynamic(
  () => import("@/components/portfolio-animation/sections/Work"),
  { loading: () => <SectionFallback minHeight={640} /> },
);
const BuildingNow = dynamic(() => import("@/components/ai/BuildingNow"), {
  loading: () => <SectionFallback minHeight={520} />,
});
const TechStack = dynamic(() => import("@/components/ai/TechStack"), {
  loading: () => <SectionFallback minHeight={480} />,
});
const Framework = dynamic(() => import("@/components/landing/Framework"), {
  loading: () => <SectionFallback minHeight={480} />,
});
const Industries = dynamic(() => import("@/components/ai/Industries"), {
  loading: () => <SectionFallback minHeight={520} />,
});
const CommandCenter = dynamic(
  () => import("@/components/shopify-solution/site/CommandCenter"),
  { loading: () => <SectionFallback minHeight={560} /> },
);
const Services = dynamic(() => import("@/components/landing/Services"), {
  loading: () => <SectionFallback minHeight={480} />,
});
const WhyUs = dynamic(() => import("@/components/landing/WhyUs"), {
  loading: () => <SectionFallback minHeight={480} />,
});
const LandingZone = dynamic(
  () => import("@/sections/LandingZone").then((m) => m.LandingZone),
  { loading: () => <SectionFallback minHeight={640} /> },
);

export async function generateStaticParams() {
  return Object.keys(SERVICES_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = getServicePage(slug);

  if (!data) {
    return { title: "Service Not Found | Base2Brand" };
  }

  return {
    title: data.meta.title,
    description: data.meta.description,
    alternates: {
      canonical: `https://www.base2brand.com/services/${slug}`,
    },
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      url: `https://www.base2brand.com/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const data = getServicePage(slug);

  if (!data) {
    notFound();
  }

  const {
    hero,
    narrative,
    capabilities,
    work,
    buildingNow,
    techStack,
    framework,
    industries,
    commandCenter,
    services,
    whyUs,
    landingZone,
  } = data;

  return (
    <main
      data-testid="service-page"
      className="relative bg-(--b2b-bg) text-white overflow-x-hidden"
    >
      <Hero
        highlightTag={hero.highlightTag}
        titleUpper={hero.titleUpper}
        titleMiddle={hero.titleMiddle}
        titleLower={hero.titleLower}
        description={hero.description}
        leftCTA={hero.leftCTA}
        rightCTA={hero.rightCTA}
        primaryColor={hero.primaryColor}
        floatingMetrics={hero.floatingMetrics}
      />
      <Narrative
        title={narrative.title}
        description={narrative.description}
        features={narrative.features}
        hideTagColumn
      />
      <Capabilities
        title={capabilities.title}
        description={capabilities.description}
        highlightTag={capabilities.highlightTag}
        capsData={capabilities.caps}
      />
      {work && (
        <Work
          title={work.title}
          titleLower={work.titleLower}
          cardsData={work.cardsData}
          imageBorderColor={work.imageBorderColor}
        />
      )}
      <BuildingNow
        highlightTag={buildingNow.highlightTag}
        title={buildingNow.title}
        description={buildingNow.description}
        ITEMS={buildingNow.items}
      />
      <TechStack
        highlightTag={techStack.highlightTag}
        title={techStack.title}
        stackData={techStack.stack}
        marqueeIcons={techStack.marquee}
      />
      <Framework
        highlightTag={framework.highlightTag}
        title={framework.title}
        description={framework.description}
        steps={framework.steps}
      />
      <Industries
        title={industries.title}
        description={industries.description}
        industriesData={industries.data}
        ctaLabel={industries.ctaLabel}
      />
      <CommandCenter
        title={commandCenter.title}
        subtitle={commandCenter.subtitle}
      />
      <Services
        eyebrow={services.eyebrow}
        titleLead={services.titleLead}
        titleAccent={services.titleAccent}
        description={services.description}
        services={services.list}
      />
      <WhyUs
        eyebrow={whyUs.eyebrow}
        titleLead={whyUs.titleLead}
        titleAccent={whyUs.titleAccent}
        description={whyUs.description}
        stats={whyUs.stats}
        cards={whyUs.cards}
      />
      <LandingZone
        eyebrow={landingZone.eyebrow}
        titleMain={landingZone.titleMain}
        titleAccent={landingZone.titleAccent}
        description={landingZone.description}
        checklist={landingZone.checklist}
        steps={landingZone.steps}
      />
    </main>
  );
}
