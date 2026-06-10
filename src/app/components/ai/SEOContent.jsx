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
    name: "Base2Brand AI",
    handle: "base2brand_ai",
    avatar:
      "https://customer-assets.emergentagent.com/job_2bd3e011-646d-42cd-a500-e99bb7156ca2/artifacts/i1n9v7zu_image.png",
    verified: true,
    body:
      "Enterprise AI solutions are moving past isolated copilots.\n\nThe shift is from features → infrastructure: an intelligence layer integrated into systems of record, governed end-to-end, measured by business outcomes — not pilots.\n\nThis is the new operating model.",
    date: "Mon Oct 14 14:30:00 +0000 2025",
    likes: 4280,
    url: "https://x.com/",
  },
  {
    name: "Sara Mitchell",
    handle: "sara_architects",
    avatar: "https://i.pravatar.cc/96?img=47",
    verified: true,
    body:
      "Modern **AI agent development** is past the function-calling demo era.\n\nProduction agents need: explicit planners, tool routing, retrieval grounding, and policy boundaries.\n\nCompose them into **multi-agent systems** with shared memory + governance — and software starts to *plan*, not just respond.",
    date: "Tue Oct 22 09:12:00 +0000 2025",
    likes: 1830,
    url: "https://x.com/",
  },
  {
    name: "Dr. Marcus Chen",
    handle: "marcus_rag",
    avatar: "https://i.pravatar.cc/96?img=12",
    verified: true,
    body:
      "Reliable enterprise agents need grounded knowledge.\n\n**RAG development** at scale is not just vector search — it's hybrid retrieval (vector + graph + structured) with rerankers and strict permissioning.\n\nPaired with **MCP integration**, agents access tools/data through governed interfaces. Capability compounds.",
    date: "Thu Nov 06 17:48:00 +0000 2025",
    likes: 2412,
    url: "https://x.com/",
  },
  {
    name: "Priya Patel",
    handle: "priya_voice_ops",
    avatar: "https://i.pravatar.cc/96?img=44",
    verified: true,
    body:
      "**Voice AI development** for the enterprise demands low-latency streaming pipelines, telephony bridges, dialog policy, and graceful hand-offs.\n\nCombined with **AI automation services** orchestrating cross-system workflows, voice moves from contact-center pilots → production revenue + service systems.",
    date: "Mon Nov 18 11:05:00 +0000 2025",
    likes: 1576,
    url: "https://x.com/",
  },
  {
    name: "James Okonkwo",
    handle: "james_copilots",
    avatar: "https://i.pravatar.cc/96?img=33",
    verified: false,
    body:
      "**Enterprise copilots** are department-specific intelligence systems: sales, ops, support, engineering, finance.\n\nGrounded in private context. Gated by role. Instrumented for outcomes.\n\nWhen commercial tools can't match specificity or governance — **custom AI software** wins on economics + control.",
    date: "Fri Nov 29 15:20:00 +0000 2025",
    likes: 3104,
    url: "https://x.com/",
  },
  {
    name: "Base2Brand AI",
    handle: "base2brand_ai",
    avatar:
      "https://customer-assets.emergentagent.com/job_2bd3e011-646d-42cd-a500-e99bb7156ca2/artifacts/i1n9v7zu_image.png",
    verified: true,
    body:
      "The most consequential **generative AI solutions** are not the loudest demos.\n\nThey are engagements where **AI consulting**, software engineering, and operational design are delivered as one practice — strategy → architecture → build → deployment → governance → continuous optimization.\n\nThat's our model.",
    date: "Wed Dec 11 08:45:00 +0000 2025",
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
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <ShiningText
              testId="seo-eyebrow"
              className="justify-center mx-auto"
            >
              ENTERPRISE AI · NOTES FROM THE FIELD
            </ShiningText>
            <h2 className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.03em] font-medium text-balance">
              Enterprise AI Solutions, Agentic AI, and the New Operating Model.
            </h2>
            <p className="mt-5 text-white/55 leading-relaxed">
              Short reads from our architects on building enterprise AI as
              infrastructure — agentic systems, RAG, voice, copilots, custom AI
              software, and the consulting model that wraps it.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 [column-fill:_balance] items-start">
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
