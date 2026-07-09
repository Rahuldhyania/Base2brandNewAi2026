import React from 'react';
import { FinalCTA } from '@/sections/FinalCTA';
import ServicesSection from '@/components/social-media/site/ServicesSection';

const contactServices = [
  {
    id: "ai-automation",
    index: "01",
    title: "AI & Automation",
    fullName: "Agentic systems, MLOps, RPA at scale.",
    icon: "Search",
    link : '/ai-automation',
    logoUrl: "/images/seocardlogo.png",
    tagColor: "#7C5CFF",
    cardGradient: "linear-gradient(135deg, #7C5CFF 0%, #2A1B6D 100%)",
    headline: "Automate smarter. Scale faster.",
    description:
      "Build intelligent workflows, AI agents and automation systems that reduce manual work and improve business efficiency.",
    items: [
      "AI agent development",
      "Workflow automation",
      "RPA solutions",
      "MLOps implementation",
      "Business process automation",
      "AI chatbot integration",
      "Automation consulting",
    ],
    cta: "Explore AI Automation",
  },
  {
    id: "software-development",
    index: "02",
    title: "Software Development",
    fullName: "Custom platforms, microservices, APIs.",
    icon: "Target",
    link : '/software-development',
    logoUrl: "/images/adscardlogo.png",
    tagColor: "#20D4FF",
    cardGradient: "linear-gradient(135deg, #20D4FF 0%, #0057FF 100%)",
    headline: "Custom software built for growth.",
    description:
      "We design and develop scalable platforms, APIs and digital products tailored to your business operations.",
    items: [
      "Custom web applications",
      "SaaS platform development",
      "API development",
      "Microservices architecture",
      "Backend development",
      "Frontend development",
      "System maintenance",
    ],
    cta: "Explore Software Development",
  },
  {
    id: "apple-ecosystem",
    index: "03",
    title: "Apple Ecosystem Development",
    fullName: "iOS, macOS, visionOS, watchOS.",
    icon: "ThumbsUp",
    link : '/apple-ecosystem',
    logoUrl: "/images/smocardlogo.png",
    tagColor: "#E5E7EB",
    cardGradient: "linear-gradient(135deg, #64748B 0%, #111827 100%)",
    headline: "Apps for every Apple platform.",
    description:
      "Create high-performance Apple ecosystem apps for iPhone, iPad, Mac, Apple Watch and Vision Pro.",
    items: [
      "iOS app development",
      "macOS app development",
      "watchOS app development",
      "visionOS app development",
      "Swift development",
      "App Store deployment",
      "Apple UI/UX optimization",
    ],
    cta: "Explore Apple Development",
  },
  {
    id: "ecommerce-solutions",
    index: "04",
    title: "Ecommerce Solutions",
    fullName: "Headless storefronts, OMS, payments.",
    icon: "Youtube",
    logoUrl: "/images/youtubecardlogo.png",
    link : '/e-commerce-solution',
    tagColor: "#C6FF3D",
    cardGradient: "linear-gradient(135deg, #D7FF3D 0%, #6FA300 100%)",
    headline: "Sell better with smarter ecommerce.",
    description:
      "Launch scalable ecommerce experiences with custom storefronts, payment systems and order management workflows.",
    items: [
      "Shopify development",
      "Headless ecommerce",
      "Custom checkout flow",
      "Payment gateway integration",
      "Order management systems",
      "Product page optimization",
      "Ecommerce automation",
    ],
    cta: "Explore Ecommerce",
  },
  {
    id: "growth-visibility",
    index: "05",
    title: "Growth & Visibility",
    fullName: "SEO, GEO, performance marketing.",
    icon: "ShieldCheck",
    logoUrl: "/images/ormcardlogo.png",
    link : '/growth-visibility',
    tagColor: "#FF2D87",
    cardGradient: "linear-gradient(135deg, #FF2D87 0%, #C61E62 100%)",
    headline: "Get found. Get leads. Grow faster.",
    description:
      "Improve your brand visibility across search engines, AI search platforms and paid advertising channels.",
    items: [
      "SEO strategy",
      "GEO optimization",
      "Google Ads",
      "Meta Ads",
      "Performance marketing",
      "Lead generation funnels",
      "Analytics & reporting",
    ],
    cta: "Explore Growth Services",
  },
  {
    id: "enterprise-systems",
    index: "06",
    title: "Enterprise Systems",
    fullName: "ERP, CRM, HCM, integration fabric.",
    icon: "PenLine",
    logoUrl: "/images/contentcardlogo.png",
    link : '/enterprise-systems',
    tagColor: "#FF8A2B",
    cardGradient: "linear-gradient(135deg, #FF8A2B 0%, #C2410C 100%)",
    headline: "Connect your business systems.",
    description:
      "Build, integrate and optimize enterprise systems that improve operations, data flow and team productivity.",
    items: [
      "ERP implementation",
      "CRM development",
      "HCM systems",
      "System integration",
      "Data migration",
      "Internal dashboards",
      "Business workflow tools",
    ],
    cta: "Explore Enterprise Systems",
  },
  {
    id: "emerging-technologies",
    index: "07",
    title: "Emerging Technologies",
    fullName: "Spatial, AR/VR, IoT, edge AI.",
    icon: "Search",
    logoUrl: "/images/seocardlogo.png",
    link : '/emerging-technologies',
    tagColor: "#00E0B8",
    cardGradient: "linear-gradient(135deg, #00E0B8 0%, #007A66 100%)",
    headline: "Build for what’s next.",
    description:
      "Explore future-ready technology solutions using AR/VR, IoT, spatial experiences and edge AI systems.",
    items: [
      "AR/VR experiences",
      "Spatial computing",
      "IoT solutions",
      "Edge AI systems",
      "Prototype development",
      "Innovation consulting",
      "Connected device solutions",
    ],
    cta: "Explore Emerging Tech",
  },
  {
    id: "social-media-services",
    index: "08",
    title: "Social Media Services",
    fullName: "Content, campaigns, brand growth.",
    icon: "ThumbsUp",
    logoUrl: "/images/smocardlogo.png",
    link : '/social-media-services',
    tagColor: "#A855F7",
    cardGradient: "linear-gradient(135deg, #A855F7 0%, #4C1D95 100%)",
    headline: "Make your brand visible everywhere.",
    description:
      "Create engaging social content, manage platforms and run campaigns that build trust, reach and conversions.",
    items: [
      "Social media strategy",
      "Content planning",
      "Creative post design",
      "Reels & video content",
      "Community management",
      "Influencer campaigns",
      "Social media reporting",
    ],
    cta: "Explore Social Media",
  },
];
const page = () => {
    return (
        <div>
         <div className="pt-28">
             <FinalCTA />
             <ServicesSection
                 highlightTag={'OUR SERVICES'}
                 title={'Let’s Build What Your Business Needs'}
                 description={
                     'From AI automation to software, ecommerce, enterprise systems and growth marketing — explore the services we can help you with.'
                 }
                 SERVICES={contactServices}
             />
         </div>
        </div>
    )
}

export default page