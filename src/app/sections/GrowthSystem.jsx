import React from "react";
import Image from "next/image";

const practices = [
  {
    title: "Performance Marketing",
    description:
      "Growth campaigns engineered around revenue, not reach. We plan, launch, optimize, and scale paid media campaigns across high-intent channels with clear performance accountability.",
    points: ["Google Ads", "Meta Ads", "LinkedIn Ads"],
    icon: "/images/growthcard_backimagev2-1.png",
    backgroud_gradient:
      "linear-gradient(280deg, rgba(113, 31, 35, 1) 0%, rgba(250, 94, 45, 1) 100%)",
  },
  {
    title: "Shopify & Ecommerce",
    description:
      "Commerce experiences designed to convert traffic into revenue. We build Shopify stores, custom ecommerce experiences, product pages, checkout journeys, and retention systems focused on higher sales and smoother buying experiences.",
    points: ["Shopify Development", "Shopify Plus", "Custom Themes"],
    icon: "/images/growthcard_backimagev2-2.png",
    backgroud_gradient:
      "linear-gradient(280deg, rgba(31, 113, 56, 1) 0%, rgba(69, 250, 45, 1) 100%)",
  },
  {
    title: "CRO & Growth Optimization",
    description:
      "More conversions from the traffic you already have. We improve landing pages, funnels, user journeys, forms, product pages, checkout flows, and lead-generation systems using data-backed CRO strategies.",
    points: ["Landing Page CRO", "A/B Testing", "Heatmap Analysis"],
    icon: "/images/growthcard_backimagev2-3.png",
    backgroud_gradient:
      "linear-gradient(280deg, rgba(23, 73, 130, 1) 0%, rgba(0, 191, 255, 1) 100%)",
  },
  {
    title: "AI Solutions & Automation",
    description:
      "AI systems that reduce manual work and improve business efficiency. We build intelligent automations that help brands qualify leads, support customers, personalize journeys, and improve decision-making.",
    points: ["AI Chatbots", "AI Sales Assistants", "Lead Scoring"],
    icon: "/images/growthcard_backimagev2-4.png",
    backgroud_gradient:
      "linear-gradient(280deg, rgba(74, 35, 90, 1) 0%, rgba(186, 85, 211, 1) 100%)",
  },
  {
    title: "Mobile Apps & Enterprise Platforms",
    description:
      "Digital products customers and teams rely on every day. We design and develop mobile apps, portals, CRM systems, ERP workflows, cloud applications, and custom business platforms built for speed, scale, and usability.",
    points: ["Android Apps", "iOS Apps", "CRM Systems"],
    icon: "/images/growthcard_backimagev2-5.png",
    backgroud_gradient:
      "linear-gradient(280deg, rgba(17, 84, 94, 1) 0%, rgba(0, 224, 208, 1) 100%)",
  },
  {
    title: "Brand, Creative & Experience",
    description:
      "Brands people remember. Experiences customers trust. We create brand identities, social media systems, UI/UX experiences, campaign creatives, content frameworks, and design systems that make growth look as strong as it performs.",
    points: ["Brand Identity", "Creative Campaigns", "UI/UX Design"],
    icon: "/images/growthcard_backimagev2-6.png",
    backgroud_gradient:
      "linear-gradient(280deg, rgba(128, 88, 18, 1) 0%, rgba(255, 193, 7, 1) 100%)",
  },
];

const GrowthSystem = () => {
  return (
    <section className="py-16 xl:py-20 px-5 sm:px-8 bg-[#02030a]">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.10] uppercase tracking-tight">
            SIX PRACTICES
            <span className="block text-orange-brand">ONE GROWTH SYSTEM</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {practices.map((practice, index) => (
            <div
              key={index}
              className="border-2 border-white/10 rounded-t-4xl rounded-b-[45px] p-3 max-h-[380px]"
            >
              <div
                className="bg-cover bg-center bg-no-repeat h-103 rounded-t-3xl rounded-b-[45px] relative flex items-end max-h-[360px]"
                style={{ background: `${practice.backgroud_gradient}` }}
              >
                <div className="absolute top-8 left-0 w-full flex justify-center">
                  <div className="ps-14">
                    <Image
                      src={practice.icon}
                      alt="growthCard_icon"
                      width={280}
                      height={160}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="relative h-[53%] xl:h-[65%] 2xl:h-[68%]">
                  <div className="relative z-20 py-4 px-6">
                    <h3 className="text-[#FF9041] text-lg xl:text-[22px] 2xl:text-[25px] leading-[1.08] font-medium max-w-[180px]">
                      {practice.title}
                    </h3>
                    <p className="text-[12px] 2xl:text-[14px] 2xl:text-[15px] text-white pt-2">
                      {practice.description}
                    </p>

                    <div className="pt-2">
                      <ul className="flex items-center gap-3">
                        {practice.points.map((item, pointIndex) => (
                          <li key={pointIndex} className="text-white text-[10px] 2xl:text-[12px]" style={{ listStyle: 'inside' }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Image
                    src={"/images/growthCard_poligunv2.png"}
                    alt="growthCard_poligunv2"
                    width={1000}
                    height={500}
                    className="object-cover absolute bottom-[2%] max-w-[98%] right-[1%] z-10 "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthSystem;
