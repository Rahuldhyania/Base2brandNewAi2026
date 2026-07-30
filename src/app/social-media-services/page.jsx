import Narrative from "@/components/ai/Narrative";
import Hero from "@/components/social-media/site/Hero";
import MarqueeStrip from "@/components/social-media/site/MarqueeStrip";
import ServicesSection from "@/components/social-media/site/ServicesSection";
import Capabilities from "@/components/ai/Capabilities";
import BuildingNow from "@/components/ai/BuildingNow";
import TechStack from "@/components/ai/TechStack";
import Framework from "@/components/landing/Framework";
import CreativeShowcase from "@/components/social-media/site/CreativeShowcase";
import Industries from "@/components/ai/Industries";
import { LandingZone } from "@/sections/LandingZone";

const SOCIAL_INDUSTRIES = [
  {
    id: "automotive",
    name: "Automotive",
    use: "Lead generation campaigns, local SEO, paid ads, remarketing and customer follow-up systems.",
    image:
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    use: "Technical SEO, B2B lead generation, LinkedIn campaigns, content marketing and inquiry funnel optimization.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    use: "Patient acquisition campaigns, local SEO, Google Ads management, landing pages and trust-building content.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "logistics",
    name: "Logistics",
    use: "Search visibility, lead generation, CRM-connected campaigns and performance tracking across service areas.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "retail",
    name: "Retail & Ecommerce",
    use: "Shopify growth, SEO, shopping campaigns, Meta Ads, retention content and CRO.",
    image:
      "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "finserv",
    name: "Financial Services",
    use: "Authority content, compliant ad funnels, lead generation, SEO services and conversion-focused landing pages.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "education",
    name: "Education",
    use: "Student lead generation, social media marketing, YouTube campaigns, search ads and admission funnel optimization.",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=70",
  },
];

const features = [
  {
    l: "Search Behaviour Evolution",
    d: "Customers no longer follow one funnel. They compare brands across Google, AI assistants, reviews, social feeds and communities before deciding who earns trust and attention.",
  },
  {
    l: "AI Discovery Platforms",
    d: "ChatGPT, Gemini and Perplexity now influence brand research, competitor comparisons and provider shortlists, making AI visibility essential for high-intent discovery across modern buyer journeys.",
  },
  {
    l: "Creative-Led Advertising",
    d: "Campaign performance depends on creative quality. Strong hooks, formats, visuals, motion and messaging decide whether audiences stop, engage and convert before competitors earn attention first.",
  },
  {
    l: "Trust & Reputation Signals",
    d: "Reviews, sentiment, brand mentions and credibility signals shape conversions across search, social, AI platforms and ads, strengthening confidence before customers inquire, compare and buy online.",
  },
];

const CAPS = [
  {
    icon: "Network",
    title: "SEO & Technical SEO",
    span: "md:col-span-6 lg:col-span-4",
    desc: "Build organic visibility through technical strength, content depth and authority signals.",
    items: [
      "Technical audits",
      "On-page SEO",
      "Local SEO",
      "Authority building",
    ],
    accent: true,
  },
  {
    icon: "Workflow",
    title: "AI Search & GEO",
    span: "md:col-span-6 lg:col-span-4",
    desc: "Prepare your brand for AI-led discovery across ChatGPT, Gemini, Perplexity and Google AI Overviews.",
    items: [
      "AI visibility",
      "Answer optimization",
      "Entity optimization",
      "Citation management",
    ],
  },
  {
    icon: "AudioLines",
    title: "Performance Marketing",
    span: "md:col-span-6 lg:col-span-4",
    desc: "Launch and scale campaigns built around qualified leads, sales and measurable ROI.",
    items: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Retargeting systems"],
  },
  {
    icon: "Network",
    title: "Creative Studio",
    span: "md:col-span-6 lg:col-span-4",
    desc: "Produce scroll-stopping assets designed for performance across ads, social and landing pages.",
    items: [
      "Ad creatives",
      "Motion graphics",
      "Video production",
      "UGC content",
    ],
    accent: true,
  },
  {
    icon: "Workflow",
    title: "Growth Analytics",
    span: "md:col-span-6 lg:col-span-4",
    desc: "Track what matters — attribution, CAC, ROAS, conversions, pipeline and performance insights.",
    items: ["Attribution", "Dashboard reporting", "Performance insights"],
  },
  {
    icon: "AudioLines",
    title: "Social Media Marketing",
    span: "md:col-span-6 lg:col-span-4",
    desc: "Build brand visibility, trust and engagement across the platforms your audience uses daily.",
    items: ["Content strategy", "Community growth", "Platform management"],
  },
];

const ITEMS = [
  {
    icon: "Compass",
    title: "Growth Strategy Engine",
    tagline: "Roadmap before execution.",
    desc: "A clear roadmap for channels, audiences, offers, messaging and KPIs.",
    metrics: ["Market clarity", "ICP mapping", "Growth thesis"],
  },
  {
    icon: "Megaphone",
    title: "Google Ads Management System",
    tagline: "Profitable acquisition, engineered.",
    desc: "Campaign structures, keyword strategy, conversion tracking and optimization cycles built around profitable acquisition.",
    metrics: ["Search intent", "ROAS tracking", "Conversion-led"],
  },
  {
    icon: "Search",
    title: "SEO Visibility Layer",
    tagline: "Built for long-term visibility.",
    desc: "Technical SEO, content clusters, keyword architecture and authority building to strengthen long-term visibility.",
    metrics: ["Organic growth", "Technical SEO", "Content depth"],
  },
  {
    icon: "Share2",
    title: "Social Growth System",
    tagline: "Where content meets community.",
    desc: "Platform strategy, social storytelling, community engagement and performance creative working together.",
    metrics: ["Social media marketing", "Engagement", "Brand trust"],
  },
  {
    icon: "FlaskConical",
    title: "Creative Testing Lab",
    tagline: "Performance creative, tested.",
    desc: "Performance creatives tested across hooks, visuals, formats, offers and audience segments.",
    metrics: ["Ad creatives", "Motion", "UGC testing"],
  },
  {
    icon: "LayoutDashboard",
    title: "Growth Command Center",
    tagline: "One view. Every metric.",
    desc: "A reporting layer that connects campaigns, leads, revenue, traffic, conversions and ROI into one view.",
    metrics: ["Analytics", "Attribution", "Performance clarity"],
  },
];

const steps = [
  {
    n: "01",
    title: "Discovery & Audit",
    body: "We diagnose your current marketing performance, technical SEO, brand positioning, paid efficiency, tracking setup and competitive landscape.",
    icon: 'ScanSearch',
  },
  {
    n: "02",
    title: "Growth Strategy",
    body: "We identify high-leverage channels, define ICPs, build audience segments and create a quarterly growth plan with clear success metrics.",
    icon: 'Database',
  },
  {
    n: "03",
    title: "Creative & Campaign Production",
    body: "We develop performance assets — ad creatives, videos, landing pages, content and copy — engineered to perform against the strategy.",
    icon: 'FileText',
  },
  {
    n: "04",
    title: "Launch & Optimization",
    body: "We deploy campaigns, improve tracking, test creatives, optimize bids, refine audiences and improve conversion quality weekly.",
    icon: 'Award',
  },
  {
    n: "05",
    title: "Scale & Expansion",
    body: "We compound winners across new geographies, channels, audiences and funnel stages without sacrificing efficiency.",
    icon: 'Sparkles',
  },
];

const SOCIAL_TECHSTACK = [
  {
    cat: "Search & Ads",
    items: [
      { label: "Google Ads", icon: "SiGoogleads" },
      { label: "Google Merchant Center", icon: "ShoppingBag" },
      { label: "Google Search Console", icon: "SiGooglesearchconsole" },
      { label: "Bing Ads", icon: "TbBrandBing" },
      { label: "YouTube Ads", icon: "SiYoutube" },
    ],
  },
  {
    cat: "Social Platforms",
    items: [
      { label: "Meta", icon: "SiMeta" },
      { label: "Instagram", icon: "SiInstagram" },
      { label: "LinkedIn", icon: "FaLinkedin" },
      { label: "X", icon: "SiX" },
      { label: "TikTok", icon: "SiTiktok" },
      { label: "Pinterest", icon: "SiPinterest" },
    ],
  },
  {
    cat: "Analytics & Tracking",
    items: [
      { label: "GA4", icon: "SiGoogleanalytics" },
      { label: "Google Tag Manager", icon: "SiGoogletagmanager" },
      { label: "Looker Studio", icon: "SiLooker" },
      { label: "Hotjar", icon: "SiHotjar" },
      { label: "Clarity", icon: "Eye" },
      { label: "CRM attribution", icon: "BarChart3" },
    ],
  },
  {
    cat: "Content & SEO",
    items: [
      { label: "WordPress", icon: "SiWordpress" },
      { label: "Shopify", icon: "SiShopify" },
      { label: "Semrush", icon: "SiSemrush" },
      { label: "Ahrefs", icon: "Search" },
      { label: "Surfer SEO", icon: "BarChart3" },
      { label: "Schema tools", icon: "Braces" },
    ],
  },
  {
    cat: "Automation & CRM",
    items: [
      { label: "HubSpot", icon: "SiHubspot" },
      { label: "Zoho", icon: "SiZoho" },
      { label: "Salesforce", icon: "FaSalesforce" },
      { label: "Mailchimp", icon: "SiMailchimp" },
      { label: "Klaviyo", icon: "Mail" },
      { label: "WhatsApp workflows", icon: "SiWhatsapp" },
    ],
  },
];

const SOCIAL_MARQUEE = [
  "SiGoogleads",
  "SiMeta",
  "SiInstagram",
  "FaLinkedin",
  "SiX",
  "SiTiktok",
  "SiPinterest",
  "SiGoogleanalytics",
  "SiWordpress",
  "SiShopify",
  "SiHubspot",
  "FaSalesforce",
  "SiWhatsapp",
];

const services = [
  {
    id: "seo",
    index: "01",
    title: "SEO Services",
    fullName: "Search Engine Optimization",
    icon: "Search",
    logoUrl: "/images/seocardlogo.png",
    tagColor: "#FF2D87",
    cardGradient: "linear-gradient(135deg, #FF2D87 0%, #C61E62 100%)",
    headline: "Rank in AI search, outperform the competition.",
    description:
      "Our SEO services help your brand show up when buyers are actively searching. We do not chase rankings for vanity. We build search presence that supports leads, trust and long-term growth.",
    items: [
      "On-page optimization",
      "Off-page SEO & link building",
      "Technical SEO audits",
      "LLM SEO",
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
    headline: "Turn ad spend into measurable pipeline.",
    description:
      "Our Google Ads management and paid media systems are built around performance, not guesswork. From Google Search and Display to Meta Ads, every campaign is optimized around business outcomes.",
    items: [
      "Google Search & Display Ads",
      "Meta Ads",
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
    headline: "Be the brand people remember, follow and trust.",
    description:
      "Our social media marketing approach connects content, community and performance. We help brands build stronger visibility across Instagram, Facebook, LinkedIn, X and other platforms where customers discover, compare and engage.",
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
      "YouTube is more than a video platform. It is a search engine, trust channel and conversion touchpoint. We help brands grow through channel strategy, video SEO, thumbnails, shorts, long-form content, YouTube Ads and performance reporting.",
    items: [
      "Channel strategy & setup",
      "Video SEO & thumbnails",
      "Shorts & long-form production",
      "YouTube Ads",
      "Audience growth tactics",
      "Performance reporting",
    ],
    cta: "Explore YouTube",
  },
  {
    id: "cro",
    index: "05",
    title: "CRO",
    fullName: "Conversion Rate Optimization",
    icon: "TrendingUp",
    logoUrl: "/images/ormcardlogo.png",
    tagColor: "#F37335",
    cardGradient: "linear-gradient(135deg, #FF8A2B 0%, #D44E00 100%)",
    headline: "More conversions from the traffic you already have.",
    description:
      "Growth does not always need more traffic. Sometimes it needs a better journey. We improve landing pages, forms, funnels, product pages and checkout flows so paid and organic traffic converts at a higher rate.",
    items: [
      "Landing page CRO",
      "Funnel analysis",
      "A/B testing",
      "Heatmap insights",
      "Form optimization",
      "Conversion tracking",
      "Analytics dashboards",
    ],
    cta: "Explore CRO",
  },
  {
    id: "content",
    index: "06",
    title: "Content Marketing",
    fullName: "Content Writing",
    icon: "PenLine",
    logoUrl: "/images/contentcardlogo.png",
    tagColor: "#0EA5E9",
    cardGradient: "linear-gradient(135deg, #38BDF8 0%, #0369A1 100%)",
    headline: "Words that rank. Stories that sell.",
    description:
      "We create SEO-friendly blogs, website copy, landing page content, social captions, email sequences and product descriptions built for discovery and conversion.",
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
export default function page() {
  return (
    <div>
      <Hero />
      <ServicesSection
        highlightTag={'OUR DIGITAL MARKETING SERVICES'}
        title={'Built To Drive Growth'}
        description={'Every service works alone or together to help your brand win more traffic, generate better leads and convert more customers with measurable ROI.'}
        SERVICES={services}
      />
      <MarqueeStrip />
      <Narrative
        highlightTag={"WHO CAN IMPROVE MY PRODUCT CONVERSIONS? "}
        title={"Attention is scattered, Your marketing cannot be"}
        description={[
          "Customers no longer discover brands from one channel alone. They move across Google, AI search, social feeds, YouTube, reviews, ads, communities and websites before making a decision. Winning brands connect every touchpoint into one clear growth system — built to attract, engage and convert.",
        ]}
        features={features}
        tagList={[
          "Traffic only matters when it converts. Businesses are looking for CRO, landing pages and analytics that turn visitors into customers.",
        
        ]}
      />
      <Capabilities
        title={"A modern growth system for brands that want more than visibility."}
        description={`Three goals, One operating model get discovered, earn trust and convert demand into revenue. Our performance marketing stack connects strategy, SEO, paid ads, content, social, analytics and conversion optimization into one growth engine.
`}
        highlightTag={"The Stack"}
        capsData={CAPS}
      />
      <BuildingNow
        highlightTag={"GROWTH SYSTEMS IN MOTION"}
        title={"What we are building right now"}
        description={
          "Six categories of intelligent growth systems — designed to help brands attract better traffic, improve conversion quality and scale with clarity."
        }
        ITEMS={ITEMS}
      />
      <TechStack
        highlightTag={"BUILT ON THE LATEST AI STACK"}
        title={
          "Platforms, signals and systems — connected deliberately"
        }
        stackData={SOCIAL_TECHSTACK}
        marqueeIcons={SOCIAL_MARQUEE}
      />
      <Framework
        highlightTag={"· GROWTH OPERATING MODEL"}
        title={"Base2Brand’s performance framework"}
        description={
          "A five-step operating system for turning marketing activity into measurable business growth."
        }
        steps={steps}
      />
      <Industries
        title="Built for industries where visibility and conversion decide growth."
        description="Base2Brand's digital marketing services are built for businesses that need stronger traffic, better leads and measurable revenue impact."
        industriesData={SOCIAL_INDUSTRIES}
      />
      <CreativeShowcase />
      <LandingZone
        eyebrow="Start a transformation"
        titleMain="Tell us where your marketing is stuck."
        titleAccent="We'll show you how to scale it."
        description="Need better leads, ROAS, conversions, SEO or social growth? We'll map the digital marketing strategy your business needs next."
        checklist={[
          "No generic marketing proposal.",
          "No confusing discovery process.",
          "Just a clear, practical plan built around your growth goals.",
        ]}
        steps={[
          { title: "We review your marketing", desc: "Our team analyses every channel and opportunity." },
          { title: "Custom strategy crafted", desc: "No templates. A growth plan built for your goals." },
          { title: "We get to work", desc: "Clear campaigns, focused execution, measurable results." },
        ]}
      />
    </div>
  );
}
