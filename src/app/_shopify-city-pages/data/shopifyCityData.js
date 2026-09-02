// Content config for the Shopify landing-page template (ShopifyCityPage.jsx).
// Keyed by the FULL route slug (not just the city name) — the same city can
// have more than one page here targeting a different keyword/URL, e.g.
// "shopify-website-development-company-chandigarh" and (later) a separate
// "best-shopify-agency-chandigarh".
//
// Add a new page: add a key here, then create one thin route folder
// — src/app/<slug>/page.jsx — that imports ShopifyCityPage and passes
// SHOPIFY_CITY_PAGES["<slug>"].
//
// Note: Next.js App Router dynamic segments must be a whole folder
// (e.g. "[slug]"), so a flat URL like
// /shopify-website-development-company-chandigarh can't be served by a
// single [slug] route — each page needs its own tiny route folder that
// wires this shared data + template together.

export const SHOPIFY_CITY_PAGES = {
  "shopify-website-development-company-chandigarh": {
    meta: {
      title:
        "Shopify Website Development Company in Chandigarh | Base2Brand",
      description:
        "Base2Brand is a Shopify website development company in Chandigarh building high-converting Shopify stores, custom themes, migrations and ecommerce marketing systems.",
    },
    hero: {
      srH1:
        "Shopify Website Development Company in Chandigarh. Engineered For Growth.",
      titleLine1: "Shopify stores built for Chandigarh brands,",
      titleLine2: "engineered to sell and scale.",
      primaryCTA: "Start Your Project",
      secondaryCTA: "View Shopify Work",
    },
    dossier: {
      eyebrow: "PLAYBOOKS · MISSION DOSSIERS",
      title: "Seven playbooks, one Shopify growth mission.",
      subtitle:
        "We don't just build Shopify stores in Chandigarh. We build commerce systems that improve revenue, retention and operational control.",
    },
    industries: {
      title:
        "Shopify development built for Chandigarh's fastest-growing brands.",
      description:
        "Base2Brand builds Shopify stores and ecommerce platforms for Chandigarh and tri-city businesses where speed, product discovery, retention and conversion directly affect revenue.",
      ctaLabel: "Shopify for this industry",
      data: [
        {
          id: "retail",
          name: "Retail & Ecommerce",
          use: "High-converting Shopify stores, CRO systems, collection journeys, checkout improvements and lifecycle marketing.",
          image:
            "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "fashion-lifestyle",
          name: "Fashion & Lifestyle",
          use: "Premium storefronts, variant-heavy product pages, size guides, lookbooks, bundles and mobile-first buying experiences.",
          image:
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "beauty-personal-care",
          name: "Beauty & Personal Care",
          use: "Product education, UGC sections, reviews, influencer landing pages, subscriptions and retention workflows.",
          image:
            "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "health-wellness",
          name: "Health & Wellness",
          use: "Subscription models, replenishment flows, trust-led product pages and conversion-focused landing pages.",
          image:
            "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "food-beverage",
          name: "Food & Beverage",
          use: "Bundles, prepaid subscriptions, delivery logic, recurring purchase systems and retention-focused email flows.",
          image:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "b2b-wholesale",
          name: "B2B & Wholesale",
          use: "Shopify Plus B2B, customer-specific pricing, wholesale portals, approval workflows and ERP integration.",
          image:
            "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "home-furniture",
          name: "Home & Furniture",
          use: "Large catalog UX, advanced filters, delivery logic, inventory visibility and assisted buying journeys.",
          image:
            "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "automotive-accessories",
          name: "Automotive & Accessories",
          use: "Fitment logic, compatibility search, custom product forms, inventory sync and operational integrations.",
          image:
            "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=70",
        },
      ],
    },
    commandCenter: {
      title:
        "One command center for storefronts, sales, inventory and growth.",
      subtitle:
        "From Shopify development services to ecommerce marketing services, every decision for your Chandigarh store is connected to performance, stability and growth.",
    },
    finalCTA: {
      highlightTag: "START A SHOPIFY PROJECT",
      titleUpper: "Tell us where your Shopify store",
      titleLower: "is stuck.",
      description:
        "Our Shopify architects will return a practical roadmap focused on revenue, conversion, speed, integrations and scale — built for Chandigarh and tri-city brands. Base2Brand will help you identify what to fix, build and optimize next.",
      CTALeft: "Start Your Project",
      CTARight: "Talk To Shopify Architects",
      features: [
        "Commerce-Led",
        "CRO-Instrumented",
        "Production-Grade",
        "Growth-Focused",
        "Shopify Plus Ready",
      ],
    },
  },
  "best-shopify-agency-mohali": {
    meta: {
      title: "Best Shopify Agency in Mohali | Base2Brand",
      description:
        "Base2Brand is the best Shopify agency in Mohali — building high-converting Shopify stores, custom themes, migrations and ecommerce marketing systems for local and D2C brands.",
    },
    hero: {
      srH1: "Best Shopify Agency in Mohali. Engineered For Growth.",
      titleLine1: "Mohali's Shopify agency,",
      titleLine2: "built to sell and scale.",
      primaryCTA: "Start Your Project",
      secondaryCTA: "View Shopify Work",
    },
    dossier: {
      eyebrow: "PLAYBOOKS · MISSION DOSSIERS",
      title: "Seven playbooks, one Shopify growth mission.",
      subtitle:
        "We don't just build Shopify stores in Mohali. We build commerce systems that improve revenue, retention and operational control.",
    },
    industries: {
      title: "Shopify development built for Mohali's fastest-growing brands.",
      description:
        "Base2Brand builds Shopify stores and ecommerce platforms for Mohali and tri-city businesses where speed, product discovery, retention and conversion directly affect revenue.",
      ctaLabel: "Shopify for this industry",
      data: [
        {
          id: "retail",
          name: "Retail & Ecommerce",
          use: "High-converting Shopify stores, CRO systems, collection journeys, checkout improvements and lifecycle marketing.",
          image:
            "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "fashion-lifestyle",
          name: "Fashion & Lifestyle",
          use: "Premium storefronts, variant-heavy product pages, size guides, lookbooks, bundles and mobile-first buying experiences.",
          image:
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "beauty-personal-care",
          name: "Beauty & Personal Care",
          use: "Product education, UGC sections, reviews, influencer landing pages, subscriptions and retention workflows.",
          image:
            "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "health-wellness",
          name: "Health & Wellness",
          use: "Subscription models, replenishment flows, trust-led product pages and conversion-focused landing pages.",
          image:
            "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "food-beverage",
          name: "Food & Beverage",
          use: "Bundles, prepaid subscriptions, delivery logic, recurring purchase systems and retention-focused email flows.",
          image:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "b2b-wholesale",
          name: "B2B & Wholesale",
          use: "Shopify Plus B2B, customer-specific pricing, wholesale portals, approval workflows and ERP integration.",
          image:
            "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "home-furniture",
          name: "Home & Furniture",
          use: "Large catalog UX, advanced filters, delivery logic, inventory visibility and assisted buying journeys.",
          image:
            "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=70",
        },
        {
          id: "automotive-accessories",
          name: "Automotive & Accessories",
          use: "Fitment logic, compatibility search, custom product forms, inventory sync and operational integrations.",
          image:
            "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=70",
        },
      ],
    },
    commandCenter: {
      title:
        "One command center for storefronts, sales, inventory and growth.",
      subtitle:
        "From Shopify development services to ecommerce marketing services, every decision for your Mohali store is connected to performance, stability and growth.",
    },
    finalCTA: {
      highlightTag: "START A SHOPIFY PROJECT",
      titleUpper: "Tell us where your Shopify store",
      titleLower: "is stuck.",
      description:
        "Our Shopify architects will return a practical roadmap focused on revenue, conversion, speed, integrations and scale — built for Mohali and tri-city brands. Base2Brand will help you identify what to fix, build and optimize next.",
      CTALeft: "Start Your Project",
      CTARight: "Talk To Shopify Architects",
      features: [
        "Commerce-Led",
        "CRO-Instrumented",
        "Production-Grade",
        "Growth-Focused",
        "Shopify Plus Ready",
      ],
    },
  },
};

export function getShopifyCityPage(slug) {
  return SHOPIFY_CITY_PAGES[slug] || null;
}
