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
    color_card : '#fa5e2d'
  },
  {
    title: "Shopify & Ecommerce",
    description:
      "Commerce experiences designed to convert traffic into revenue. We build Shopify stores, custom ecommerce experiences, product pages, checkout journeys, and retention systems focused on higher sales and smoother buying experiences.",
    points: ["Shopify Development", "Shopify Plus", "Custom Themes"],
    icon: "/images/growthcard_backimagev2-2.png",
    backgroud_gradient:
      "linear-gradient(280deg, #95bf47 0%, #95bf47b5 100%)",
    color_card : '#95bf47'
  },
  {
    title: "CRO & Growth Optimization",
    description:
      "More conversions from the traffic you already have. We improve landing pages, funnels, user journeys, forms, product pages, checkout flows, and lead-generation systems using data-backed CRO strategies.",
    points: ["Landing Page CRO", "A/B Testing", "Heatmap Analysis"],
    icon: "/images/growthcard_backimagev2-3.png",
    backgroud_gradient:
      "linear-gradient(280deg, #155dfca1 0%, #155dfc 100%)",
    color_card : '#155dfc'
  },
  {
    title: "AI Solutions & Automation",
    description:
      "AI systems that reduce manual work and improve business efficiency. We build intelligent automations that help brands qualify leads, support customers, personalize journeys, and improve decision-making.",
    points: ["AI Chatbots", "AI Sales Assistants", "Lead Scoring"],
    icon: "/images/growthcard_backimagev2-4.png",
    backgroud_gradient:
      "linear-gradient(280deg, #8b5cf69c 0%, #8b5cf6 100%)",
    color_card : '#8b5cf6'
  },
  {
    title: "Mobile Apps & Enterprise Platforms",
    description:
      "Digital products customers and teams rely on every day. We design and develop mobile apps, portals, CRM systems, ERP workflows, cloud applications, and custom business platforms built for speed, scale, and usability.",
    points: ["Android Apps", "iOS Apps", "CRM Systems"],
    icon: "/images/growthcard_backimagev2-5.png",
    backgroud_gradient:
      "linear-gradient(280deg, #0a84ffd9 0%, #0a84ff 100%)",
    color_card : '#0a84ff'
  },
  {
    title: "Brand, Creative & Experience",
    description:
      "Brands people remember. Experiences customers trust. We create brand identities, social media systems, UI/UX experiences, campaign creatives, content frameworks, and design systems that make growth look as strong as it performs.",
    points: ["Brand Identity", "Creative Campaigns", "UI/UX Design"],
    icon: "/images/growthcard_backimagev2-6.png",
    backgroud_gradient:
      "linear-gradient(280deg, #d946efa1 0%, #d946ef 100%)",
    color_card : '#d946ef'
  },
];

const GrowthSystem = () => {
  return (
    <section className="py-12 sm:py-16 xl:py-20 px-4 sm:px-8 bg-[#02030a]">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="mt-4 font-display text-white text-2xl sm:text-3xl lg:text-5xl leading-[1.10] uppercase tracking-tight">
            SIX PRACTICES
            <span className="block text-orange-brand">ONE GROWTH SYSTEM</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {practices.map((practice, index) => (
            <div
              key={index}
              className="border-2 border-white/10 rounded-t-4xl rounded-b-[45px] p-3"
            >
              <div
                className="bg-cover bg-center bg-no-repeat rounded-t-3xl rounded-b-[45px] relative flex items-end min-h-[480px] sm:min-h-[300px] md:min-h-[340px] xl:h-103"
                style={{ background: `${practice.backgroud_gradient}` }}
              >
                <div className="absolute top-4 sm:top-6 left-0 w-full flex justify-end">
                  <div className="pe-2">
                    <Image
                      src={practice.icon}
                      alt="growthCard_icon"
                      width={320}
                      height={180}
                      className="object-cover w-[180px] sm:w-[200px] md:w-[240px] xl:w-[320px] h-auto"
                    />
                  </div>
                </div>
                <div className="relative w-full pb-10 sm:pb-0 sm:h-[53%] xl:h-[65%] 2xl:h-[68%] bg-black/55 sm:bg-transparent rounded-t-3xl sm:rounded-none">
                  <div className="relative z-20 py-4 px-5 sm:px-6">
                    <h3 className={`text-lg xl:text-[22px] 2xl:text-[25px] leading-[1.15] font-medium max-w-[220px] sm:max-w-[180px]`}
                     style={{
                      color : practice.color_card
                     }}
                    >
                      {practice.title}
                    </h3>
                    <p className="text-[13px] sm:text-[12px] 2xl:text-[15px] text-white pt-2 leading-relaxed">
                      {practice.description}
                    </p>

                    <div className="pt-3">
                      <ul className="flex flex-wrap items-center gap-2 sm:gap-3">
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
                    className="object-cover absolute bottom-[2%] max-w-[85%] sm:max-w-[98%] right-[1%] z-10"
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
