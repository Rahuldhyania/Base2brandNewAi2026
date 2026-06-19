import React from "react";
import Hero from "@/components/PublicSectorNgo/Hero";
import { TrustBar } from "@/components/PublicSectorNgo/TrustBar";
import { ValueProp } from "@/components/PublicSectorNgo/ValueProp";
import { Problems } from "@/components/PublicSectorNgo/Problems";
import { Industries } from "@/components/PublicSectorNgo/Industries";
import { Process } from "@/components/PublicSectorNgo/Process";
import { Stats } from "@/components/PublicSectorNgo/Stats";
import { Testimonials } from "@/components/PublicSectorNgo/Testimonials";
import { WhyUs } from "@/components/PublicSectorNgo/WhyUs";
import { FinalCTA } from "@/components/PublicSectorNgo/FinalCTA";

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
    </div>
  );
};

export default page;
