import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/PublicSectorNgo/Hero";
import { TrustBar } from "@/components/PublicSectorNgo/TrustBar";
import { ValueProp } from "@/components/PublicSectorNgo/ValueProp";
import { SectionFallback } from "@/components/layout/SectionFallback";
import Image from "next/image";

// Below-the-fold sections are lazy-loaded so their JS isn't parsed/executed
// on initial load.
const Problems = dynamic(
  () => import("@/components/PublicSectorNgo/Problems").then((m) => m.Problems),
  { loading: () => <SectionFallback minHeight={480} /> },
);
const Industries = dynamic(
  () => import("@/components/PublicSectorNgo/Industries").then((m) => m.Industries),
  { loading: () => <SectionFallback minHeight={520} /> },
);
const Process = dynamic(
  () => import("@/components/PublicSectorNgo/Process").then((m) => m.Process),
  { loading: () => <SectionFallback minHeight={480} /> },
);
const Stats = dynamic(
  () => import("@/components/PublicSectorNgo/Stats").then((m) => m.Stats),
  { loading: () => <SectionFallback minHeight={320} /> },
);
const Testimonials = dynamic(
  () => import("@/components/PublicSectorNgo/Testimonials").then((m) => m.Testimonials),
  { loading: () => <SectionFallback minHeight={480} /> },
);
const WhyUs = dynamic(
  () => import("@/components/PublicSectorNgo/WhyUs").then((m) => m.WhyUs),
  { loading: () => <SectionFallback minHeight={480} /> },
);
const FinalCTA = dynamic(
  () => import("@/components/PublicSectorNgo/FinalCTA").then((m) => m.FinalCTA),
  { loading: () => <SectionFallback minHeight={400} /> },
);

const page = () => {
  return (
    <div>
      <Hero
        highlightTag={"PUBLIC SECTOR • EDUCATION • NONPROFIT TECHNOLOGY"}
        title={"Technology That Creates Meaningful Impact."}
        descriptions={[
          "We partner with public sector organizations, educational institutions, and mission-driven nonprofits to solve complex challenges through thoughtful technology.",
          "From improving citizen experiences and educational accessibility to optimizing public services and operational efficiency, we build systems designed to strengthen communities and create measurable impact.",
          "Because the most meaningful innovations solve real-world problems.",
        ]}
        leftCTA="Explore Public Sector Solutions"
        rightCTA="Discuss Your Initiative"
        trustLine="Supporting education, public services, nonprofits, community development, and operational modernization initiatives."
        primaryColor="rgb(21 93 252)"
      />
      <TrustBar />
      <ValueProp />
      <Problems />
      <Industries />
      <Process />
      <Stats />
      <Testimonials />
      <WhyUs />
      <FinalCTA />
      <div>
        <Image
         src={'/images/base2brandLLC.png'}
         alt="base2brandLLC"
         width={1500}
         height={1500}
         className="object-contain mx-auto"
        />
      </div>
    </div>
  );
};

export default page;
