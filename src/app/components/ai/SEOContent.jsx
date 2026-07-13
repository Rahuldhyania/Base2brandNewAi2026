import Reveal from "@/components/site/Reveal";
import ShiningText from "@/components/site/ShiningText";
import TweetCard from "@/components/site/TweetCard";

/**
 * SEO Content — long-form messaging now delivered as a wall of curated
 * thought-leadership posts. Each post is a self-contained tweet card so
 * the section stays scannable while still hitting the keyword targets
 * (Enterprise AI Solutions, Agentic AI, AI Agent Development, RAG, MCP,
 * Voice AI, Enterprise Copilots, Custom AI Software, Generative AI,
 * AI Consulting).
 */

const POSTS = [
  {
    name: "Sophia Turner",
    handle: "sophia_turner",
    avatar:
      "https://customer-assets.emergentagent.com/job_2bd3e011-646d-42cd-a500-e99bb7156ca2/artifacts/i1n9v7zu_image.png",
    verified: true,
    body:
      "Chief Growth Officer · UK D2C Brand\n\nWe had tools everywhere — CRM, Shopify, ads, support, email — but nothing worked as one system.\n\nBase2Brand brought the intelligence layer together with AI automation services that connected our growth workflows, improved response speed and helped the team focus on decisions instead of repetitive tasks.\n\nThat is when AI started feeling useful.",
    date: "Tue Oct 14 20:00:00 +0000 2025",
    likes: 4280,
    url: "https://x.com/",
  },
  {
    name: "James Walker",
    handle: "james_walker",
    avatar: "https://i.pravatar.cc/96?img=47",
    verified: true,
    body:
      "Founder · UK Ecommerce Brand\n\nBase2Brand helped us move from basic automation to a proper AI-led growth system.\n\nTheir AI automation services connected our Shopify store, customer support and marketing workflows — giving our team faster responses, better insights and cleaner execution.\n\nIt felt practical, not experimental.",
    date: "Wed Oct 22 14:42:00 +0000 2025",
    likes: 1830,
    url: "https://x.com/",
  },
  {
    name: "Emily Carter",
    handle: "emily_carter",
    avatar: "https://i.pravatar.cc/96?img=12",
    verified: true,
    body:
      "Marketing Director · US Healthcare Brand\n\nWe needed more than a chatbot. We needed a system that could qualify inquiries, support follow-ups and reduce manual work.\n\nBase2Brand built a clear generative AI solution around our customer journey — structured, measurable and easy for our team to use daily.",
    date: "Mon Nov 03 11:15:00 +0000 2025",
    likes: 2412,
    url: "https://x.com/",
  },
  {
    name: "Daniel Harris",
    handle: "daniel_harris",
    avatar: "https://i.pravatar.cc/96?img=44",
    verified: true,
    body:
      "Product Lead · US SaaS Company\n\nTheir approach to AI agent development was refreshingly serious.\n\nNo demo-first thinking. They mapped the workflow, defined guardrails, connected the tools and built agents that actually support sales and customer success operations.\n\nThat made adoption much easier.",
    date: "Tue Nov 11 16:20:00 +0000 2025",
    likes: 1576,
    url: "https://x.com/",
  },
  {
    name: "Olivia Bennett",
    handle: "olivia_bennett",
    avatar: "https://i.pravatar.cc/96?img=33",
    verified: false,
    body:
      "Head of Operations · UK Retail Brand\n\nBase2Brand understood the operational side of AI.\n\nThey helped us automate repetitive support tasks, improve internal knowledge access and create faster handoffs between teams using AI automation services designed around real business pressure.\n\nLess noise. More execution.",
    date: "Wed Nov 19 18:10:00 +0000 2025",
    likes: 3104,
    url: "https://x.com/",
  },
  {
    name: "Michael Anderson",
    handle: "michael_anderson",
    avatar:
      "https://customer-assets.emergentagent.com/job_2bd3e011-646d-42cd-a500-e99bb7156ca2/artifacts/i1n9v7zu_image.png",
    verified: true,
    body:
      "CEO · US Professional Services Firm\n\nWhat stood out was how clearly they connected AI to business outcomes.\n\nTheir enterprise AI solutions helped us improve lead handling, automate internal workflows and use generative AI solutions without losing control of quality or process.\n\nThat is the difference between AI hype and AI that works.",
    date: "Tue Dec 02 09:35:00 +0000 2025",
    likes: 5621,
    url: "https://x.com/",
  },
];

const SEOContent = () => {
  return (
    <section
      data-testid="seo-content-section"
      className="relative py-12 md:py-16"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <ShiningText
              testId="seo-eyebrow"
              className="justify-center mx-auto"
            >
              AI MARKET SIGNALS 
            </ShiningText>
            <h2 className="mt-4 sm:mt-5 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.03em] font-medium text-balance">
              What leaders are saying about AI that actually works.
            </h2>
            <p className="mt-5 text-white/55 leading-relaxed">
            Real transformation does not come from adding AI as a feature. It happens when AI automation services, AI agent development, enterprise AI solutions and generative AI solutions are connected to the workflows, data, teams and systems that already run the business.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 [column-fill:_balance] items-start">
          {POSTS.map((p, i) => (
            <Reveal key={p.handle + i} delay={i * 0.04}>
              <TweetCard
                testId={`seo-tweet-${i}`}
                name={p.name}
                handle={p.handle}
                avatar={p.avatar}
                verified={p.verified}
                body={p.body}
                date={p.date}
                likes={p.likes}
                url={p.url}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOContent;
