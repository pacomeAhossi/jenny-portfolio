"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: "-80px 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}

// export function useActiveSection(sectionIds: string[]) {
//   const [activeSection, setActiveSection] = useState(sectionIds[0]);

//   useEffect(() => {
//     const sections = sectionIds
//       .map((id) => document.getElementById(id))
//       .filter(Boolean) as HTMLElement[];

//     if (!sections.length) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visibleSections = entries.filter((entry) => entry.isIntersecting);

//         if (!visibleSections.length) return;

//         const mostVisibleSection = visibleSections.reduce((prev, current) =>
//           current.intersectionRatio > prev.intersectionRatio ? current : prev
//         );

//         setActiveSection(mostVisibleSection.target.id);
//       },
//       {
//         threshold: Array.from({ length: 101 }, (_, i) => i / 100),
//         rootMargin: "-100px 0px -20% 0px",
//       }
//     );

//     sections.forEach((section) => observer.observe(section));

//     return () => observer.disconnect();
//   }, [sectionIds]);

//   return activeSection;
// }
