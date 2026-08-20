// Content config for the reusable services/[slug] template.
// Add a new page by adding a new key here — no new page.jsx needed.
// Key = URL slug, e.g. "best-seo-company-in-mohali" -> /services/best-seo-company-in-mohali

export const SERVICES_PAGES = {
  "best-seo-company-in-mohali": {
    meta: {
      title: "Best SEO Company in Mohali | Base2Brand",
      description:
        "Base2Brand is a results-driven SEO company in Mohali helping local businesses rank higher on Google with local SEO, technical SEO, content strategy and link building.",
    },
    hero: {
      highlightTag: "SEO Company Mohali · Local & National Rankings",
      titleUpper: "Rank",
      titleMiddle: "#1 on Google",
      titleLower: "competitors do.",
      description:
        "Base2Brand is the best SEO company in Mohali for businesses that want more than a ranking report — we build local SEO, technical SEO, content and authority systems that turn Google search into a steady stream of qualified customers.",
      leftCTA: "Book Free SEO Audit",
      rightCTA: "Get Free SEO Consultation",
      primaryColor: "rgb(21 93 252)",
      floatingMetrics: [
        {
          label: "Organic traffic growth",
          value: "+180%",
          icon: "TrendingUp",
          pos: "top-6 -left-4 md:left-6",
          delay: 0.3,
        },
        {
          label: "Keywords ranked #1",
          value: "150+",
          icon: "Sparkles",
          pos: "bottom-16 -right-2 md:right-8",
          delay: 0.55,
        },
        {
          label: "Client retention",
          value: "95%",
          icon: "ShieldCheck",
          pos: "top-1/2 -right-6 md:-right-10",
          delay: 0.75,
        },
      ],
    },
    narrative: {
      title:
        "Search starts local. <br /> If you're not on page 1, you don't exist.",
      description: [
        "Over 90% of people never scroll past the first page of Google — and in Mohali's competitive market, that means your next customer is already choosing a competitor who ranks above you.",
        "Base2Brand is a full-stack SEO company in Mohali that combines local SEO, technical SEO, content strategy and link building to help you dominate search results — not just rank for a keyword or two.",
      ],
      features: [
        {
          l: "Local search is exploding",
          d: "Customers now search “near me” and check Google Maps before they call or visit.",
        },
        {
          l: "Google rewards relevance",
          d: "Modern SEO needs technical accuracy, real content depth and genuine authority signals — not shortcuts.",
        },
        {
          l: "Slow SEO costs customers",
          d: "Every month you're not ranking, competitors across Mohali and the tri-city are capturing your search traffic.",
        },
      ],
    },
    // PLACEHOLDER — replace cardsData with real Mohali client results
    // (screenshot, metrics, tag) once available. Leaving `screenshot` empty
    // shows a "Screenshot will appear here" placeholder box on the card.
    work: {
      title: "SEO results.",
      titleLower: "Add your case studies here.",
      imageBorderColor: "#2563EB",
      cardsData: [
        {
          id: "seo-case-01",
          n: "CASE 01",
          tag: "Local SEO · Google Business Profile",
          title: "[Add case study — Local SEO ranking results for a Mohali client]",
          metrics: [
            { v: "—", l: "add metric" },
            { v: "—", l: "add metric" },
          ],
          url: "https://www.base2brand.com/services/best-seo-company-in-mohali",
          preview: {
            title: "Local SEO — Client Results",
            screenshot: "",
          },
        },
        {
          id: "seo-case-02",
          n: "CASE 02",
          tag: "Technical SEO · On-Page Optimization",
          title: "[Add case study — Technical SEO turnaround for a client]",
          metrics: [
            { v: "—", l: "add metric" },
            { v: "—", l: "add metric" },
          ],
          url: "https://www.base2brand.com/services/best-seo-company-in-mohali",
          preview: {
            title: "Technical SEO — Client Results",
            screenshot: "",
          },
        },
        {
          id: "seo-case-03",
          n: "CASE 03",
          tag: "Content & Link Building · Authority Growth",
          title: "[Add case study — Content & authority growth for a client]",
          metrics: [
            { v: "—", l: "add metric" },
            { v: "—", l: "add metric" },
          ],
          url: "https://www.base2brand.com/services/best-seo-company-in-mohali",
          preview: {
            title: "Content & Authority — Client Results",
            screenshot: "",
          },
        },
      ],
    },
    capabilities: {
      highlightTag: "The Stack",
      title: "From search rankings to real, qualified customers",
      description:
        "Our SEO practice combines local SEO, technical SEO and content authority into one operating system for search visibility.",
      caps: [
        {
          icon: "Network",
          title: "Local SEO & Google Business Profile",
          span: "md:col-span-7",
          items: [
            "Get found on Google Maps and the local 3-pack for Mohali and tri-city searches.",
            "GBP optimization & review strategy",
            "Local citations & NAP consistency",
            "Location-specific landing pages",
            "Local keyword research",
            "Competitor gap analysis",
          ],
          accent: true,
        },
        {
          icon: "Workflow",
          title: "Technical & On-Page SEO",
          span: "md:col-span-5",
          items: [
            "Fix the technical issues holding your rankings back and structure every page to rank.",
            "Site speed & Core Web Vitals",
            "On-page optimization",
            "Schema markup",
            "Site architecture & crawlability",
          ],
        },
        {
          icon: "AudioLines",
          title: "Content & Authority Building",
          span: "md:col-span-5",
          items: [
            "Build the content and backlink authority Google needs to trust and rank your website.",
            "Keyword-mapped content",
            "High-authority link building",
            "Blog & SEO content strategy",
            "Competitor content gap analysis",
          ],
        },
      ],
    },
    buildingNow: {
      highlightTag: "SEO GROWTH SYSTEMS",
      title: "What we run for Mohali businesses, every month.",
      description:
        "Six connected SEO systems, shipped into production — helping local businesses get found, trusted and chosen on Google.",
      items: [
        {
          icon: "Users",
          title: "Local SEO Team",
          tagline: "Dedicated SEO specialists for Mohali businesses.",
          desc: "A dedicated SEO pod that manages your Google Business Profile, local citations, reviews and map-pack visibility across Mohali and the tri-city.",
          metrics: ["GBP management", "Local citations", "Review growth"],
        },
        {
          icon: "GitBranch",
          title: "Technical SEO Operations",
          tagline: "Fixing what's blocking your rankings.",
          desc: "Site audits, Core Web Vitals fixes, crawlability and indexing work that removes the technical barriers stopping Google from ranking your pages.",
          metrics: ["Site audits", "Speed optimization", "Schema markup"],
        },
        {
          icon: "Briefcase",
          title: "On-Page Optimization",
          tagline: "Every page built to rank and convert.",
          desc: "Keyword-mapped titles, meta tags, headings and content structure across your website, aligned to how your customers actually search.",
          metrics: ["Keyword mapping", "Meta optimization", "Content structure"],
        },
        {
          icon: "BrainCircuit",
          title: "SEO Intelligence & Reporting",
          tagline: "Rankings and traffic, tracked transparently.",
          desc: "Monthly ranking reports, traffic analysis and competitor tracking so you always know exactly where your SEO investment is going.",
          metrics: ["Rank tracking", "Traffic analytics", "Competitor reports"],
        },
        {
          icon: "PhoneCall",
          title: "Content & Link Building",
          tagline: "Authority that compounds month over month.",
          desc: "SEO-driven content and white-hat link building that builds long-term domain authority instead of short-lived ranking spikes.",
          metrics: ["SEO content", "Link outreach", "Authority building"],
        },
        {
          icon: "LayoutDashboard",
          title: "SEO Command Center",
          tagline: "One dashboard for your entire SEO program.",
          desc: "A single reporting system that tracks rankings, traffic, leads and ROI across every SEO initiative we run for you.",
          metrics: ["Unified reporting", "Lead tracking", "ROI visibility"],
        },
      ],
    },
    techStack: {
      highlightTag: "THE SEO TOOLKIT WE USE",
      title:
        "Tools and systems built to get Mohali businesses ranking.",
      stack: [
        {
          cat: "Research & Strategy",
          items: [
            { label: "Google Search Console", icon: "SiGooglesearchconsole" },
            { label: "SEMrush", icon: "SiSemrush" },
            { label: "Keyword research", icon: "Search" },
            { label: "Competitor analysis", icon: "BarChart3" },
          ],
        },
        {
          cat: "On-Page & Technical SEO",
          items: [
            { label: "Schema markup", icon: "Braces" },
            { label: "Site architecture", icon: "Network" },
            { label: "Core Web Vitals", icon: "LayoutDashboard" },
            { label: "WordPress", icon: "SiWordpress" },
          ],
        },
        {
          cat: "Local SEO",
          items: [
            { label: "Google Business Profile", icon: "Eye" },
            { label: "Local citations", icon: "Users" },
            { label: "Bing Places", icon: "TbBrandBing" },
            { label: "NAP consistency", icon: "Boxes" },
          ],
        },
        {
          cat: "Content & Authority",
          items: [
            { label: "SEO content strategy", icon: "Layers" },
            { label: "Link building", icon: "Workflow" },
            { label: "HubSpot", icon: "SiHubspot" },
            { label: "Mailchimp", icon: "SiMailchimp" },
          ],
        },
        {
          cat: "Analytics & Reporting",
          items: [
            { label: "Google Analytics", icon: "SiGoogleanalytics" },
            { label: "Google Tag Manager", icon: "SiGoogletagmanager" },
            { label: "Looker Studio", icon: "SiLooker" },
            { label: "Hotjar", icon: "SiHotjar" },
          ],
        },
      ],
      marquee: [
        "SiGooglesearchconsole",
        "SiSemrush",
        "SiGoogleanalytics",
        "SiGoogletagmanager",
        "SiLooker",
        "SiHotjar",
        "SiWordpress",
        "SiHubspot",
        "SiMailchimp",
        "TbBrandBing",
      ],
    },
    framework: {
      highlightTag: "· OUR SEO ROADMAP ",
      title: "A practical system for ranking above your competitors.",
      description:
        "A five-step operating system for turning your website into the result customers in Mohali find, trust and choose.",
      steps: [
        {
          n: "01",
          title: "SEO Audit & Research",
          body: "We audit your website's technical health, current rankings and keyword opportunities, and study how your competitors in Mohali are ranking.",
          icon: "ScanSearch",
        },
        {
          n: "02",
          title: "Technical Foundation",
          body: "We fix crawl errors, site speed, mobile usability and structure so Google can properly index and rank every page.",
          icon: "Database",
        },
        {
          n: "03",
          title: "On-Page & Local Optimization",
          body: "We optimize page content, metadata and your Google Business Profile so you show up for the exact searches your customers use.",
          icon: "FileText",
        },
        {
          n: "04",
          title: "Content & Authority Building",
          body: "We publish keyword-mapped content and build genuine backlinks and citations that grow your domain authority month over month.",
          icon: "Award",
        },
        {
          n: "05",
          title: "Track, Report & Scale",
          body: "We monitor rankings, traffic and leads every month, and double down on what's working to keep you climbing past competitors.",
          icon: "Sparkles",
        },
      ],
    },
    industries: {
      title:
        "SEO strategies built for how each industry actually gets searched.",
      description:
        "Base2Brand builds SEO strategies for Mohali businesses across industries where local visibility and search rankings directly drive revenue.",
      ctaLabel: "SEO for this industry",
      data: [
        {
          id: "automotive",
          name: "Automotive",
          use: "Local SEO for dealerships and service centers — dominate “near me” searches and Google Maps for auto services.",
          image:
            "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "manufacturing",
          name: "Manufacturing",
          use: "B2B SEO for manufacturers — rank for industrial and supplier searches that convert into RFQs.",
          image:
            "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "healthcare",
          name: "Healthcare",
          use: "Local SEO for clinics and healthcare providers — appear in map-pack results when patients search for care nearby.",
          image:
            "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "logistics",
          name: "Logistics",
          use: "SEO for logistics and transport companies — rank for shipping, freight and warehousing searches in your service area.",
          image:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "retail",
          name: "Retail & Ecommerce",
          use: "Local and ecommerce SEO — rank both your store location and your online catalog for product searches.",
          image:
            "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "finserv",
          name: "Financial Services",
          use: "SEO for financial advisors and consultants — build trust and visibility for high-intent local searches.",
          image:
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "government",
          name: "Government",
          use: "SEO for public sector portals that improves discoverability of citizen services and information.",
          image:
            "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "education",
          name: "Education",
          use: "Local SEO for schools, colleges and coaching institutes — rank for admission and course searches in Mohali.",
          image:
            "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=70",
        },
      ],
    },
    commandCenter: {
      title: "Every keyword. Every ranking. One SEO command center.",
      subtitle:
        "We track your rankings, organic traffic, local visibility and competitor movement across Google — bringing keywords, backlinks, technical health and lead data into one connected growth view.",
    },
    services: {
      eyebrow: "· Our SEO Capabilities",
      titleLead: "The complete SEO toolkit for",
      titleAccent: "ranking in Mohali.",
      description:
        "A full-stack SEO practice built to get your business found, trusted and chosen by customers searching in Mohali and beyond.",
      list: [
        {
          title: "Local SEO Strategy",
          desc: "End-to-end roadmap for ranking in Google's local pack and Maps across Mohali and the tri-city.",
          icon: "Target",
          span: "md:col-span-2",
          big: true,
        },
        {
          title: "Google Business Profile Optimization",
          desc: "Full GBP setup, categories, posts and review strategy to win local visibility.",
          icon: "MessageSquare",
        },
        {
          title: "On-Page SEO",
          desc: "Keyword-mapped titles, meta tags, headings and content structure on every page.",
          icon: "Eye",
        },
        {
          title: "Technical SEO Audits",
          desc: "Crawl, indexing, speed and Core Web Vitals fixes that unblock your rankings.",
          icon: "Fingerprint",
        },
        {
          title: "Site Architecture & Schema",
          desc: "Structured data and site architecture that helps Google understand and rank your pages.",
          icon: "Network",
        },
        {
          title: "SEO Content Strategy",
          desc: "Keyword-mapped blogs and landing pages built to rank and convert.",
          icon: "LayoutGrid",
        },
        {
          title: "Link Building & Authority",
          desc: "White-hat backlinks and citations that compound your domain authority over time.",
          icon: "Signal",
        },
        {
          title: "Rank Tracking & Reporting",
          desc: "Transparent monthly reports on rankings, traffic, leads and ROI.",
          icon: "BarChart3",
          span: "md:col-span-2",
          big: true,
        },
        {
          title: "Competitor SEO Analysis",
          desc: "Decode why competitors outrank you — and build the plan to overtake them.",
          icon: "Users",
        },
        {
          title: "Local Citations & NAP Consistency",
          desc: "Consistent business listings across directories that strengthen local trust signals.",
          icon: "Quote",
        },
      ],
    },
    whyUs: {
      eyebrow: "· Why Base2Brand",
      titleLead: "Mohali businesses choose us",
      titleAccent: "for real SEO growth.",
      description:
        "Base2Brand combines local market knowledge, technical SEO expertise, content strategy and transparent reporting under one roof. We treat SEO as a long-term growth engine, not a one-time project.",
      stats: [
        { v: "90 Days", l: "First ranking movement window." },
        { v: "100% Transparent", l: "Reporting on rankings & traffic." },
        { v: "Local + Technical", l: "SEO expertise under one roof." },
      ],
      cards: [
        {
          icon: "Rocket",
          title: "Local Market Expertise",
          body: "We understand how Mohali and tri-city customers search, and build SEO strategies around real local search behaviour.",
        },
        {
          icon: "BarChart3",
          title: "Full-Funnel SEO Growth",
          body: "We connect rankings, organic traffic, leads and conversions — not just keyword positions.",
        },
        {
          icon: "Cpu",
          title: "Technical + Content Expertise",
          body: "Technical SEO, on-page optimization, content and link building — handled as one connected system.",
        },
        {
          icon: "Building2",
          title: "Built to Scale",
          body: "From single-location businesses to multi-branch and enterprise brands, our SEO systems scale with you.",
        },
      ],
    },
    landingZone: {
      eyebrow: "Start ranking",
      titleMain: "Tell us where your rankings are stuck.",
      titleAccent: "We'll show you how to fix it.",
      description:
        "Need more local visibility, organic traffic or qualified leads from Google? We'll map the SEO roadmap your business needs next.",
      checklist: [
        "No generic SEO proposal.",
        "No confusing audit process.",
        "Just a clear plan built around your ranking goals.",
      ],
      steps: [
        {
          title: "We review your current rankings",
          desc: "Our team audits your website, keywords and local visibility.",
        },
        {
          title: "Custom SEO roadmap crafted",
          desc: "A focused strategy built for your business and market.",
        },
        {
          title: "We get to work",
          desc: "Clear priorities, measurable rankings, real growth.",
        },
      ],
    },
  },
  "ai-in-digital-marketing": {
    meta: {
      title: "AI in Digital Marketing | Base2Brand",
      description:
        "Discover how Base2Brand uses AI in digital marketing — predictive targeting, campaign automation, AI-generated content and personalization — to drive measurable growth.",
    },
    hero: {
      highlightTag: "AI in Digital Marketing · Smarter Campaigns, Faster Growth",
      titleUpper: "Marketing",
      titleMiddle: "powered by AI",
      titleLower: "competitors catch up.",
      description:
        "Base2Brand embeds AI across digital marketing — predictive targeting, automated campaign optimization, AI-generated content and real-time personalization — so your brand moves faster and spends smarter than manual teams ever could.",
      leftCTA: "Book Free AI Marketing Audit",
      rightCTA: "Get Free Strategy Call",
      primaryColor: "rgb(21 93 252)",
      floatingMetrics: [
        {
          label: "Campaign efficiency",
          value: "+210%",
          icon: "TrendingUp",
          pos: "top-6 -left-4 md:left-6",
          delay: 0.3,
        },
        {
          label: "Content output speed",
          value: "5x",
          icon: "Sparkles",
          pos: "bottom-16 -right-2 md:right-8",
          delay: 0.55,
        },
        {
          label: "Ad spend saved",
          value: "35%",
          icon: "ShieldCheck",
          pos: "top-1/2 -right-6 md:-right-10",
          delay: 0.75,
        },
      ],
    },
    narrative: {
      title:
        "Marketing has changed. <br /> Guesswork doesn't scale, AI-driven decisions do.",
      description: [
        "Traditional digital marketing relied on manual targeting, static creatives and delayed reporting — while customer behaviour, ad platforms and content formats shift every week.",
        "Base2Brand builds AI-powered marketing systems that combine predictive analytics, automated campaign optimization and AI-generated content to help brands move faster than manual teams ever could.",
      ],
      features: [
        {
          l: "Customer behaviour shifts fast",
          d: "AI models adapt targeting and messaging in real time, something manual campaign management can't match.",
        },
        {
          l: "Content demand has exploded",
          d: "Brands now need 10x more creative variations across channels — AI makes that volume possible without losing quality.",
        },
        {
          l: "Manual optimization is too slow",
          d: "Every day a campaign runs unoptimized is wasted ad spend. AI systems adjust bids, audiences and creatives continuously.",
        },
      ],
    },
    // PLACEHOLDER — replace cardsData with real client results once
    // available. Leaving `screenshot` empty shows a placeholder box.
    work: {
      title: "AI marketing results.",
      titleLower: "Add your case studies here.",
      imageBorderColor: "#2563EB",
      cardsData: [
        {
          id: "ai-mkt-case-01",
          n: "CASE 01",
          tag: "AI Campaign Optimization · Paid Media",
          title: "[Add case study — AI-driven campaign efficiency results]",
          metrics: [
            { v: "—", l: "add metric" },
            { v: "—", l: "add metric" },
          ],
          url: "https://www.base2brand.com/services/ai-in-digital-marketing",
          preview: {
            title: "AI Campaigns — Client Results",
            screenshot: "",
          },
        },
        {
          id: "ai-mkt-case-02",
          n: "CASE 02",
          tag: "AI Content Generation · Creative Scale",
          title: "[Add case study — AI content production results]",
          metrics: [
            { v: "—", l: "add metric" },
            { v: "—", l: "add metric" },
          ],
          url: "https://www.base2brand.com/services/ai-in-digital-marketing",
          preview: {
            title: "AI Content — Client Results",
            screenshot: "",
          },
        },
        {
          id: "ai-mkt-case-03",
          n: "CASE 03",
          tag: "Personalization & Analytics · Predictive Growth",
          title: "[Add case study — AI personalization & analytics results]",
          metrics: [
            { v: "—", l: "add metric" },
            { v: "—", l: "add metric" },
          ],
          url: "https://www.base2brand.com/services/ai-in-digital-marketing",
          preview: {
            title: "Personalization — Client Results",
            screenshot: "",
          },
        },
      ],
    },
    capabilities: {
      highlightTag: "The Stack",
      title: "From marketing guesswork to AI-driven decisions",
      description:
        "Our AI marketing practice combines predictive targeting, automated optimization and AI content into one operating system for growth.",
      caps: [
        {
          icon: "Network",
          title: "AI-Powered Campaign Management",
          span: "md:col-span-7",
          items: [
            "Predictive targeting and continuous campaign optimization across paid channels.",
            "Automated bid & budget optimization",
            "Predictive audience targeting",
            "Real-time performance signals",
            "Cross-channel campaign orchestration",
            "Creative performance testing",
          ],
          accent: true,
        },
        {
          icon: "Workflow",
          title: "AI Content & Creative Generation",
          span: "md:col-span-5",
          items: [
            "AI-assisted content, ad copy and creative production at scale, without losing brand voice.",
            "AI-generated ad copy & creatives",
            "Content ideation & scaling",
            "Brand-voice trained models",
            "Rapid A/B creative testing",
          ],
        },
        {
          icon: "AudioLines",
          title: "Marketing Analytics & Personalization",
          span: "md:col-span-5",
          items: [
            "Predictive analytics and AI-driven personalization that turns data into revenue decisions.",
            "Predictive customer analytics",
            "AI-driven personalization",
            "Marketing automation workflows",
            "Attribution & ROI modelling",
          ],
        },
      ],
    },
    buildingNow: {
      highlightTag: "AI MARKETING GROWTH SYSTEMS",
      title: "What we run for AI-first marketing teams, every month.",
      description:
        "Six connected AI marketing systems, shipped into production — helping brands target smarter, create faster and convert more.",
      items: [
        {
          icon: "Users",
          title: "AI Marketing Operations Team",
          tagline: "Dedicated specialists running AI-powered campaigns.",
          desc: "A dedicated team managing predictive targeting, automated bidding and cross-channel optimization so your campaigns improve every single day.",
          metrics: ["Campaign automation", "Predictive targeting", "Daily optimization"],
        },
        {
          icon: "GitBranch",
          title: "Marketing Automation Workflows",
          tagline: "Systems that work while you sleep.",
          desc: "AI-driven workflows that trigger the right message, to the right customer, at the right moment — across email, ads and on-site experiences.",
          metrics: ["Workflow automation", "Lifecycle triggers", "Behavioural targeting"],
        },
        {
          icon: "Briefcase",
          title: "AI Content & Creative Production",
          tagline: "Scaling creative without losing brand voice.",
          desc: "Brand-voice trained AI models that generate ad copy, content variations and creative assets at a volume manual teams can't match.",
          metrics: ["AI copywriting", "Creative variations", "Brand-voice training"],
        },
        {
          icon: "BrainCircuit",
          title: "Predictive Marketing Analytics",
          tagline: "Decisions backed by predictive data, not guesswork.",
          desc: "Predictive models that forecast campaign performance, customer lifetime value and churn risk before you spend another rupee on ads.",
          metrics: ["Predictive modelling", "LTV forecasting", "Churn prediction"],
        },
        {
          icon: "PhoneCall",
          title: "AI-Powered Personalization",
          tagline: "Every customer sees a different, relevant journey.",
          desc: "Personalization engines that adapt website content, offers and messaging in real time based on individual customer behaviour.",
          metrics: ["Dynamic content", "Behavioural segmentation", "Real-time personalization"],
        },
        {
          icon: "LayoutDashboard",
          title: "Marketing Command Center",
          tagline: "One dashboard for every AI marketing system.",
          desc: "A single reporting system that tracks campaign performance, content output, automation workflows and ROI across every AI marketing initiative we run.",
          metrics: ["Unified reporting", "ROI tracking", "Cross-channel visibility"],
        },
      ],
    },
    techStack: {
      highlightTag: "THE AI MARKETING STACK",
      title:
        "Models, platforms and systems built to make campaigns smarter.",
      stack: [
        {
          cat: "AI Models & Generation",
          items: [
            { label: "ChatGPT", icon: "BsOpenai" },
            { label: "Claude", icon: "SiAnthropic" },
            { label: "Gemini", icon: "SiGooglegemini" },
            { label: "Predictive analytics", icon: "BrainCircuit" },
          ],
        },
        {
          cat: "Paid Media & Ads",
          items: [
            { label: "Google Ads", icon: "SiGoogleads" },
            { label: "Meta Ads", icon: "SiMeta" },
            { label: "Bing Ads", icon: "TbBrandBing" },
            { label: "Search & display network", icon: "Search" },
          ],
        },
        {
          cat: "Marketing Automation",
          items: [
            { label: "HubSpot", icon: "SiHubspot" },
            { label: "Salesforce", icon: "FaSalesforce" },
            { label: "Zoho", icon: "SiZoho" },
            { label: "Mailchimp", icon: "SiMailchimp" },
          ],
        },
        {
          cat: "Social & Content Channels",
          items: [
            { label: "Instagram", icon: "SiInstagram" },
            { label: "YouTube", icon: "SiYoutube" },
            { label: "LinkedIn", icon: "FaLinkedin" },
            { label: "TikTok", icon: "SiTiktok" },
          ],
        },
        {
          cat: "Analytics & Reporting",
          items: [
            { label: "Google Analytics", icon: "SiGoogleanalytics" },
            { label: "Google Tag Manager", icon: "SiGoogletagmanager" },
            { label: "Looker Studio", icon: "SiLooker" },
            { label: "Hotjar", icon: "SiHotjar" },
          ],
        },
      ],
      marquee: [
        "BsOpenai",
        "SiAnthropic",
        "SiGooglegemini",
        "SiGoogleads",
        "SiMeta",
        "SiHubspot",
        "FaSalesforce",
        "SiGoogleanalytics",
        "SiInstagram",
        "SiYoutube",
      ],
    },
    framework: {
      highlightTag: "· OUR AI MARKETING ROADMAP ",
      title: "A practical system for turning AI into predictable growth.",
      description:
        "A five-step operating system for embedding AI across targeting, content and optimization.",
      steps: [
        {
          n: "01",
          title: "AI Marketing Audit",
          body: "We audit your current campaigns, content and analytics stack to identify where AI can immediately improve performance and cut wasted spend.",
          icon: "ScanSearch",
        },
        {
          n: "02",
          title: "Data & Automation Foundation",
          body: "We connect your ad platforms, CRM and analytics into a unified data layer that AI models can actually learn from.",
          icon: "Database",
        },
        {
          n: "03",
          title: "AI Campaign & Content Systems",
          body: "We deploy predictive targeting, automated bidding and AI-generated creative systems across your priority channels.",
          icon: "FileText",
        },
        {
          n: "04",
          title: "Personalization & Optimization",
          body: "We layer in real-time personalization and continuous AI-driven optimization so every campaign improves week over week.",
          icon: "Award",
        },
        {
          n: "05",
          title: "Scale & Predictive Growth",
          body: "We use predictive analytics to forecast performance and scale what's working — turning AI marketing into a compounding growth engine.",
          icon: "Sparkles",
        },
      ],
    },
    industries: {
      title:
        "AI marketing systems built for how each industry actually converts.",
      description:
        "Base2Brand builds AI-powered digital marketing systems for industries where speed, personalization and campaign efficiency directly drive revenue.",
      ctaLabel: "AI marketing for this industry",
      data: [
        {
          id: "automotive",
          name: "Automotive",
          use: "AI-driven lead scoring and personalized retargeting for dealerships and service centers.",
          image:
            "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "manufacturing",
          name: "Manufacturing",
          use: "AI-powered account-based marketing and predictive lead qualification for B2B manufacturers.",
          image:
            "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "healthcare",
          name: "Healthcare",
          use: "AI-personalized patient acquisition campaigns and compliant automated follow-up sequences.",
          image:
            "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "logistics",
          name: "Logistics",
          use: "Predictive demand campaigns and AI-optimized ad spend for logistics and transport brands.",
          image:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "retail",
          name: "Retail & Ecommerce",
          use: "AI product recommendations, dynamic retargeting and predictive customer lifetime value campaigns.",
          image:
            "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "finserv",
          name: "Financial Services",
          use: "AI-driven lead qualification and personalized nurture campaigns for financial advisors.",
          image:
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "government",
          name: "Government",
          use: "AI-assisted public awareness campaigns and citizen engagement content at scale.",
          image:
            "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "education",
          name: "Education",
          use: "AI-personalized admissions campaigns and predictive enrollment forecasting.",
          image:
            "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=70",
        },
      ],
    },
    commandCenter: {
      title: "Every campaign. Every channel. One AI marketing command center.",
      subtitle:
        "We bring paid media, content performance, automation workflows and predictive analytics into one connected view — so every AI marketing decision is backed by real data.",
    },
    services: {
      eyebrow: "· Our AI Marketing Capabilities",
      titleLead: "The complete AI toolkit for",
      titleAccent: "modern digital marketing.",
      description:
        "A full-stack AI marketing practice built to make every campaign, creative and customer touchpoint smarter.",
      list: [
        {
          title: "AI Campaign Strategy",
          desc: "End-to-end roadmap for embedding AI across paid, organic and lifecycle marketing.",
          icon: "Target",
          span: "md:col-span-2",
          big: true,
        },
        {
          title: "Predictive Audience Targeting",
          desc: "AI models that identify and target your highest-value customers before competitors do.",
          icon: "MessageSquare",
        },
        {
          title: "AI Content & Creative Generation",
          desc: "Scaled ad copy, creative variations and content production without losing brand voice.",
          icon: "Eye",
        },
        {
          title: "Marketing Automation",
          desc: "AI-triggered workflows across email, ads and on-site experiences.",
          icon: "Fingerprint",
        },
        {
          title: "Personalization Engines",
          desc: "Real-time content and offer personalization based on individual customer behaviour.",
          icon: "Network",
        },
        {
          title: "AI-Optimized Paid Media",
          desc: "Automated bidding, budget allocation and creative testing across ad platforms.",
          icon: "LayoutGrid",
        },
        {
          title: "Predictive Analytics & Forecasting",
          desc: "LTV, churn and campaign performance forecasting that drives smarter budget decisions.",
          icon: "Signal",
        },
        {
          title: "Marketing ROI Reporting",
          desc: "Transparent, unified reporting connecting AI marketing spend to real revenue outcomes.",
          icon: "BarChart3",
          span: "md:col-span-2",
          big: true,
        },
        {
          title: "Competitor AI Analysis",
          desc: "Decode which AI marketing tactics competitors are using — and build the plan to outperform them.",
          icon: "Users",
        },
        {
          title: "Marketing Data & CRM Integration",
          desc: "Unified data layer connecting your CRM, ad platforms and analytics so AI models learn from clean data.",
          icon: "Quote",
        },
      ],
    },
    whyUs: {
      eyebrow: "· Why Base2Brand",
      titleLead: "Brands choose us",
      titleAccent: "for AI-powered marketing.",
      description:
        "Base2Brand combines AI systems, campaign strategy, creative production and analytics under one roof. We treat AI as an operating layer for marketing, not just a buzzword.",
      stats: [
        { v: "210%", l: "Average campaign efficiency lift." },
        { v: "5x", l: "Faster content production." },
        { v: "100% Transparent", l: "Reporting on spend & ROI." },
      ],
      cards: [
        {
          icon: "Rocket",
          title: "Future-First Strategy",
          body: "We build marketing systems for where advertising and content are moving — AI-native from day one.",
        },
        {
          icon: "BarChart3",
          title: "Full-Funnel Growth",
          body: "We connect AI-driven targeting, content, personalization and analytics across the complete growth funnel.",
        },
        {
          icon: "Cpu",
          title: "Technical + Marketing Expertise",
          body: "AI systems, campaign strategy, creative production and analytics — handled as one connected system.",
        },
        {
          icon: "Building2",
          title: "Enterprise Ready",
          body: "Built for startups, SMBs and enterprise teams that need governance, speed, scale and measurable execution.",
        },
      ],
    },
    landingZone: {
      eyebrow: "Start scaling with AI",
      titleMain: "Tell us where your marketing is stuck.",
      titleAccent: "We'll show you where AI fits.",
      description:
        "Need faster campaigns, smarter targeting or more content output? We'll map the AI marketing roadmap your brand needs next.",
      checklist: [
        "No generic AI pitch.",
        "No confusing tech jargon.",
        "Just a clear plan built around your growth goals.",
      ],
      steps: [
        {
          title: "We review your current marketing stack",
          desc: "Our team audits campaigns, content and data systems.",
        },
        {
          title: "Custom AI roadmap crafted",
          desc: "A focused strategy built for your brand and budget.",
        },
        {
          title: "We get to work",
          desc: "Clear priorities, measurable performance, real growth.",
        },
      ],
    },
  },
};

export function getServicePage(slug) {
  return SERVICES_PAGES[slug] || null;
}
