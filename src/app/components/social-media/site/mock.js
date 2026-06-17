// Base2Brand Digital Marketing — mock data (OOB-style design)

export const BRAND = {
  name: "Base2Brand",
  logoUrl:
    "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo.e9cf2080_1_egmydg.png",
  accent: "#F37335", // Base2Brand orange "2"
  email: "info@base2brand.com",
  phone: "+91-98724-87850",
};

export const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_TAGS = [
  "SEO",
  "GOOGLE ADS",
  "META ADS",
  "SMO",
  "YOUTUBE",
  "ORM",
  "CRO",
  "EMAIL",
  "CONTENT",
  "ECOMMERCE",
  "ANALYTICS",
  "STRATEGY",
];

export const FLOATING_CARDS = [
  {
    id: "seo",
    title: "SEO",
    sub: "ORGANIC · RANKINGS",
    icon: "Search",
    color: "#FF2D87",
    glow: "rgba(255,45,135,0.55)",
    style: { top: "14%", left: "6%", rotate: "-8deg" },
  },
  {
    id: "ads",
    title: "ADS",
    sub: "GOOGLE · META",
    icon: "Target",
    color: "#C6FF3D",
    glow: "rgba(198,255,61,0.5)",
    style: { top: "10%", right: "5%", rotate: "7deg" },
  },
  {
    id: "orm",
    title: "ORM",
    sub: "PROTECT, REPAIR",
    icon: "ShoppingBag",
    color: "#F37335",
    glow: "rgba(243,115,53,0.6)",
    style: { top: "48%", right: "4%", rotate: "-6deg" },
  },
  {
    id: "smo",
    title: "SOCIAL",
    sub: "SMO · ENGAGEMENT",
    icon: "ThumbsUp",
    color: "#6C5CE7",
    glow: "rgba(108,92,231,0.55)",
    style: { top: "55%", left: "4%", rotate: "6deg" },
  },
  {
    id: "youtube",
    title: "YOUTUBE",
    sub: "VIDEO · REACH",
    icon: "Youtube",
    color: "#2DD4BF",
    glow: "rgba(45,212,191,0.55)",
    style: { bottom: "6%", right: "7%", rotate: "-4deg" },
  },
];

export const SERVICES = [
  {
    id: "seo",
    index: "01",
    title: "SEO",
    fullName: "Search Engine Optimization",
    icon: "Search",
    logoUrl: "/images/seocardlogo.png",
    tagColor: "#FF2D87",
    cardGradient: "linear-gradient(135deg, #FF2D87 0%, #C61E62 100%)",
    headline: "Rank where it matters. Get found first.",
    description:
      "Enhance online visibility with our SEO expertise. 93% of online experiences begin with a search engine. Our strategies elevate your rankings and boost organic traffic.",
    items: [
      "On-page optimization",
      "Off-page SEO & link building",
      "Technical SEO audits",
      "Local SEO & Google Business",
      "Keyword research & strategy",
      "Content optimization",
      "Monthly reporting & insights",
    ],
    cta: "Explore SEO",
  },
  {
    id: "ads",
    index: "02",
    title: "Paid Ads",
    fullName: "Google & Meta Ads",
    icon: "Target",
    logoUrl: "/images/adscardlogo.png",
    tagColor: "#C6FF3D",
    cardGradient: "linear-gradient(135deg, #D7FF3D 0%, #8FBF00 100%)",
    headline: "Generate $2 for every $1 spent.",
    description:
      "Maximize reach, drive targeted traffic and crush ROI with our expert Google & Meta Ads team. Performance-grade results, always.",
    items: [
      "Google Search & Display Ads",
      "Meta (Facebook & Instagram) Ads",
      "Shopping & Performance Max",
      "Remarketing campaigns",
      "Landing page optimization",
      "A/B testing & creative iteration",
      "ROI tracking & analytics",
    ],
    cta: "Explore Paid Ads",
  },
  {
    id: "smo",
    index: "03",
    title: "SMO",
    fullName: "Social Media Optimization",
    icon: "ThumbsUp",
    logoUrl: "/images/smocardlogo.png",
    tagColor: "#6C5CE7",
    cardGradient: "linear-gradient(135deg, #7C6CFF 0%, #4A3DCC 100%)",
    headline: "Be the brand people actually follow.",
    description:
      "We optimize social platforms to enhance brand visibility and engagement, tailored to your business goals — Instagram, Facebook, LinkedIn, X and beyond.",
    items: [
      "Social media strategy",
      "Content calendar & creation",
      "Community management",
      "Influencer collaborations",
      "Hashtag & trend research",
      "Performance analytics",
    ],
    cta: "Explore SMO",
  },
  {
    id: "youtube",
    index: "04",
    title: "YouTube",
    fullName: "YouTube Marketing",
    icon: "Youtube",
    logoUrl: "/images/youtubecardlogo.png",
    tagColor: "#FF0000",
    cardGradient: "linear-gradient(135deg, #ff1e1eab  0%, #ff0000d9 100%)",
    headline: "Turn views into customers.",
    description:
      "Leverage engaging video content to drive business profits from YouTube's vast audience — channel growth, SEO and monetization, end to end.",
    items: [
      "Channel strategy & setup",
      "Video SEO & thumbnails",
      "Shorts & long-form production",
      "YouTube Ads (TrueView, Bumper)",
      "Audience growth tactics",
      "Performance reporting",
    ],
    cta: "Explore YouTube",
  },
  {
    id: "orm",
    index: "05",
    title: "ORM",
    fullName: "Online Reputation Management",
    icon: "ShieldCheck",
    logoUrl: "/images/ormcardlogo.png",
    tagColor: "#F37335",
    cardGradient: "linear-gradient(135deg, #FF8A2B 0%, #D44E00 100%)",
    headline: "Protect, repair, amplify your reputation.",
    description:
      "We safeguard your brand reputation, address negative feedback, and foster positive sentiment across every channel that matters.",
    items: [
      "Brand monitoring 24/7",
      "Review management",
      "Crisis response",
      "Sentiment analysis",
      "Search result cleanup",
      "Proactive reputation building",
    ],
    cta: "Explore ORM",
  },
  {
    id: "content",
    index: "06",
    title: "Content",
    fullName: "Content Writing",
    icon: "PenLine",
    logoUrl: "/images/contentcardlogo.png",
    tagColor: "#0EA5E9",
    cardGradient: "linear-gradient(135deg, #38BDF8 0%, #0369A1 100%)",
    headline: "Words that rank. Stories that sell.",
    description:
      "Engaging, SEO-friendly content tailored to your brand — blog posts, website copy, social captions and email sequences that actually convert.",
    items: [
      "Blog & article writing",
      "Website & landing copy",
      "Social media copy",
      "Email & newsletter writing",
      "Product descriptions",
      "SEO content strategy",
    ],
    cta: "Explore Content",
  },
];

export const MARQUEE_ITEMS = [
  "SEO",
  "GOOGLE ADS",
  "META ADS",
  "YOUTUBE MARKETING",
  "ORM",
  "CONTENT WRITING",
  "CRO",
  "EMAIL MARKETING",
  "ECOMMERCE",
  "ANALYTICS",
  "SMO",
  "BRAND STRATEGY",
];

// Trust signals — replace OOB client list with Base2Brand stats
export const STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Happy Clients" },
  { value: "500+", label: "Projects Delivered" },
  { value: "4.9", label: "Avg. Rating" },
];

export const FEATURES = [
  {
    title: "Precision Targeting",
    description:
      "Reach the exact audience that converts — demographics, intent and behaviour-based.",
    icon: "Crosshair",
    color: "#FF2D87",
  },
  {
    title: "Engaging Content",
    description:
      "Creative that earns attention in a feed designed to ignore everything.",
    icon: "Sparkles",
    color: "#C6FF3D",
  },
  {
    title: "Personalized Campaigns",
    description:
      "Every brief is different — we tailor strategy, not templates.",
    icon: "UserCheck",
    color: "#6C5CE7",
  },
  {
    title: "Enhanced Conversions",
    description:
      "Funnels, landing pages and creative tuned to one thing — revenue.",
    icon: "TrendingUp",
    color: "#F37335",
  },
  {
    title: "Enhanced Visibility",
    description:
      "From SERP rankings to social reach — show up where it counts.",
    icon: "Eye",
    color: "#2DD4BF",
  },
  {
    title: "Real-Time Analytics",
    description:
      "Live dashboards & monthly reports — no black-box reporting.",
    icon: "BarChart3",
    color: "#0EA5E9",
  },
];

export const WHY_US = [
  {
    title: "Customized Solutions",
    description:
      "Every business is unique. We craft personalized strategies aligned to your goals — not one-size-fits-all packages.",
  },
  {
    title: "Transparency",
    description:
      "Open communication, regular updates, performance reports and insights — you're informed every step of the way.",
  },
  {
    title: "Proven Results",
    description:
      "200+ happy clients. Increased traffic, higher conversion rates, improved brand visibility — measurable wins.",
  },
  {
    title: "Innovative Approach",
    description:
      "Cutting-edge tools, techniques and trends — our strategies are always fresh, relevant and effective.",
  },
];

export const PROCESS_STEPS = [
  { step: "01", title: "Research", description: "Audit, audience & competitor analysis", icon: "Search" },
  { step: "02", title: "Planning", description: "Strategy, KPIs and roadmap", icon: "Map" },
  { step: "03", title: "Design", description: "Creative, copy and assets", icon: "Palette" },
  { step: "04", title: "Execution", description: "Campaigns live across channels", icon: "Rocket" },
  { step: "05", title: "Testing", description: "A/B test, iterate, optimize", icon: "FlaskConical" },
  { step: "06", title: "Scale", description: "Double down on what works", icon: "TrendingUp" },
];

export const FAQS = [
  {
    q: "What is Search Engine Optimization (SEO)?",
    a: "SEO improves your website's visibility on search engines like Google, driving organic traffic and enhancing your online presence.",
  },
  {
    q: "How long does it take to see results with SEO?",
    a: "SEO results vary, but significant improvements often appear in 3–6 months, with ongoing optimizations for sustained success.",
  },
  {
    q: "What are Google Ads (PPC) and how do they work?",
    a: "Google Ads are paid advertisements that appear on Google search results. They work on a pay-per-click basis — you bid on keywords and pay only when someone clicks.",
  },
  {
    q: "What is Social Media Optimization (SMO)?",
    a: "SMO involves optimizing social media platforms to increase brand visibility, engagement, and reach across Instagram, Facebook, LinkedIn and more.",
  },
  {
    q: "How does Social Media Optimization benefit my business?",
    a: "SMO builds brand awareness, drives website traffic, fosters customer engagement and enhances brand reputation — all in one.",
  },
  {
    q: "What is Online Reputation Management (ORM)?",
    a: "ORM involves monitoring, addressing, and influencing online conversations and reviews about your brand to maintain a positive reputation.",
  },
  {
    q: "What is YouTube Marketing?",
    a: "YouTube Marketing leverages the platform to promote your brand, products and services through engaging video content and targeted ads.",
  },
  {
    q: "Do you provide reporting and analytics?",
    a: "Absolutely. We provide live dashboards plus detailed monthly reports — traffic, conversions, ROI and recommendations included.",
  },
];

export const CASE_HIGHLIGHTS = [
  {
    sector: "ECOMMERCE",
    title: "+312% Organic Traffic",
    description:
      "SEO + content strategy that took a fashion DTC brand from page 4 to top-3 for 60+ keywords.",
    accent: "#FF2D87",
  },
  {
    sector: "B2B SAAS",
    title: "4.1x ROAS",
    description:
      "Google Ads + landing page optimization scaled spend 6x while improving return on ad spend.",
    accent: "#C6FF3D",
  },
  {
    sector: "D2C BEAUTY",
    title: "+180K Followers",
    description:
      "SMO campaign across Instagram + YouTube Shorts grew a beauty brand from 12K to 192K in 8 months.",
    accent: "#6C5CE7",
  },
];
