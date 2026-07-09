import Narrative from "@/components/ai/Narrative";
import Hero from "@/components/social-media/site/Hero";
import MarqueeStrip from "@/components/social-media/site/MarqueeStrip";
import ServicesSection from "@/components/social-media/site/ServicesSection";
import Capabilities from "@/components/ai/Capabilities";
import BuildingNow from "@/components/ai/BuildingNow";
import TechStack from "@/components/ai/TechStack";
import Framework from "@/components/landing/Framework";
import CreativeShowcase from "@/components/social-media/site/CreativeShowcase";
const features = [
  {
    l: "Search Behaviour Evolution",
    d: "Customers no longer travel a single funnel — they bounce between AI assistants, classic search, social, and communities. Visibility is now multi-modal.",
  },
  {
    l: "AI Discovery Platforms",
    d: "ChatGPT, Gemini and Perplexity answer commercial queries directly. Being cited as an authoritative source is the new top-of-funnel.",
  },
  {
    l: "Creative-Led Advertising",
    d: "Media buying is commoditized. Performance is increasingly decided by the creative — motion, hooks, formats, and message-market fit.",
  },
  {
    l: "Trust & Reputation Signals",
    d: "Reviews, sentiment, and brand mentions shape conversion across every channel — and feed the AI models that decide who gets recommended.",
  },
];

const CAPS = [
  {
    icon: "Network",
    title: "SEO & Technical SEO",
    span: "md:col-span-6 lg:col-span-4",
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
    title: "Generative Engine Optimization",
    span: "md:col-span-6 lg:col-span-4",
    items: [
      "ChatGPT visibility",
      "AI answer optimization",
      "Entity optimization",
      "Citation management",
    ],
  },
  {
    icon: "AudioLines",
    title: "Performance Marketing",
    span: "md:col-span-6 lg:col-span-4",
    items: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Retargeting systems"],
  },

  {
    icon: "Network",
    title: "Creative Studio",
    span: "md:col-span-6 lg:col-span-4",
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
    items: ["Attribution", "Dashboard reporting", "Performance insights"],
  },
  {
    icon: "AudioLines",
    title: "Social Media Marketing",
    span: "md:col-span-6 lg:col-span-4",
    items: ["Content strategy", "Community growth", "Platform management"],
  },
  {
    icon: "Shield",
    title: "Online Reputation Management",
    span: "md:col-span-6 lg:col-span-4",
    items: ["Review management", "Brand monitoring", "Sentiment tracking"],
  },
  {
    icon: "Target",
    title: "Conversion Rate Optimization",
    span: "md:col-span-6 lg:col-span-4",
    items: ["Landing pages", "Funnel optimization", "A/B testing"],
  },
];

const ITEMS = [
  {
    icon: "Users",
    title: "AI Workforce",
    tagline: "Digital employees operating continuously.",
    desc: "Always-on digital workers handling structured operations, ticketing, scheduling, qualification, and follow-through across 24/7 cycles.",
    metrics: ["24/7 cadence", "0 onboarding ramp", "Audit-grade logs"],
  },
  {
    icon: "GitBranch",
    title: "Multi-Agent Operations",
    tagline: "AI teams collaborating autonomously.",
    desc: "Coordinated agent networks that plan, delegate, validate, and execute multi-step workflows with shared memory and guardrails.",
    metrics: ["Agent-to-agent", "Tool routing", "Policy-aware"],
  },
  {
    icon: "Briefcase",
    title: "Enterprise Copilots",
    tagline: "Department-specific intelligence systems.",
    desc: "Copilots embedded in sales, ops, support, and engineering — trained on private context, integrated to systems of record.",
    metrics: ["RAG-grounded", "RBAC native", "BYO models"],
  },
  {
    icon: "BrainCircuit",
    title: "Decision Intelligence",
    tagline: "Systems that recommend and execute.",
    desc: "Models that synthesize signals across data warehouses and act — with explainability, human review, and reversibility built-in.",
    metrics: ["Explainable", "Reversible", "Outcome tracked"],
  },
  {
    icon: "PhoneCall",
    title: "Voice Operations",
    tagline: "Human-like voice for customer interactions.",
    desc: "Production voice agents handling inbound, outbound, qualification, scheduling, and structured data capture at low latency.",
    metrics: ["<350ms latency", "Telephony native", "Hand-off ready"],
  },
  {
    icon: "LayoutDashboard",
    title: "AI Command Centers",
    tagline: "Unified enterprise AI control planes.",
    desc: "Single pane to deploy, observe, govern, and meter your entire AI estate — agents, models, prompts, costs, and outcomes.",
    metrics: ["Observability", "Cost metering", "Governance"],
  },
];

const steps = [
  {
    n: "01",
    title: "Discovery & Audit",
    body: "Diagnose current marketing performance, technical SEO, brand sentiment, paid efficiency, and competitive landscape.",
    icon: 'ScanSearch',
  },
  {
    n: "02",
    title: "Growth Strategy",
    body: "Identify high-leverage channels, define ICPs, build a quarterly growth thesis and the metrics that decide success.",
    icon: 'Database',
  },
  {
    n: "03",
    title: "Creative & Campaign Production",
    body: "Develop the assets — ad creatives, video, landing pages, and content — engineered to perform against the thesis.",
    icon: 'FileText',
  },
  {
    n: "04",
    title: "Launch & Optimization",
    body: "Deploy campaigns, instrument attribution, run rigorous experimentation, and improve unit economics weekly.",
    icon: 'Award',
  },
  {
    n: "05",
    title: "Scale & Expansion",
    body: "Compound winners — expand to new geographies, channels, and audience segments without sacrificing efficiency.",
    icon: 'Sparkles',
  },
];

const services = [
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
export default function page() {
  return (
    <div>
      <Hero />
      <ServicesSection
        highlightTag={'OUR DIGITAL MARKETING SERVICES'}
        title={'Built To Drive Growth'}
        description={'Six disciplines, one engine — turn your brand into a measurable growth machine. Every service works alone or together to deliver traffic, leads and revenue.'}
        SERVICES={services}
      />
      <MarqueeStrip />
      <Narrative
        highlightTag={"Why Growth Has Changed"}
        title={"Attention has fragmented. Growth strategies should too."}
        description={[
          "Customers discover brands through AI assistants, search engines, social feeds, videos, communities, and recommendations. Winning brands engineer visibility across every touchpoint.",
        ]}
        features={features}
        tagList={[
          "Best CRM software for B2B SaaS",
          "Top digital marketing agency in 2026",
          "Best HRMS company for mid-market",
          "Who should I hire for web development?",
        ]}
      />
      <Capabilities
        title={"A new layer of growth built for AI-first buyers."}
        description={`Three disciplines, one outcome — your brand cited, recommended and chosen inside every AI surface that matters.`}
        highlightTag={"The Stack"}
        capsData={CAPS}
      />
      <BuildingNow
        highlightTag={"CURRENTLY IN PRODUCTION"}
        title={"What we are building right now"}
        description={
          "Six categories of intelligent systems, shipped into production — discovered as you scroll."
        }
        ITEMS={ITEMS}
      />
      <TechStack
        highlightTag={"BUILT ON THE LATEST AI STACK"}
        title={
          "Models, frameworks, and infrastructure — composed deliberately."
        }
      />
      <Framework
        highlightTag={"· Methodology"}
        title={"The Base2Brand GEO Framework"}
        description={
          "A five-step operating system for turning your brand into the answer AI engines recommend."
        }
        steps={steps}
      />
      <CreativeShowcase />
    </div>
  );
}
