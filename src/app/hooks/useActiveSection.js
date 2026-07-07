import { useEffect, useState } from "react";

const SECTION_IDS = [
  "launch", "services", "solutions", "industries",
  "work", "resources", "about", "contact",
];

/**
 * useActiveSection — returns the id of the section currently closest to the
 * viewport center. Uses IntersectionObserver with rootMargin tuned to trigger
 * roughly when a section's top passes 40% of the viewport.
 */
export function useActiveSection() {
  const [activeId, setActiveId] = useState("launch");

  useEffect(() => {
    const visibility = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id, entry.intersectionRatio);
        });
        let best = "launch";
        let bestRatio = -1;
        for (const id of SECTION_IDS) {
          const r = visibility.get(id) || 0;
          if (r > bestRatio) {
            bestRatio = r;
            best = id;
          }
        }
        setActiveId(best);
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.2, 0.5, 0.8, 1],
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeId;
}
