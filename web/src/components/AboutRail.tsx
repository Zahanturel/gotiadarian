"use client";

import { useEffect, useState } from "react";

const ITEMS = [
  { id: "history", label: "History of Shri Pak Goti Adarian Saheb" },
  { id: "origins", label: "Possible Origins of the Name and Fire" },
  { id: "legacy", label: "Legacy and Stewardship" },
  { id: "symbol", label: "A Symbol of Faith and Continuity" },
] as const;

/** Sticky contents list for the About long read. Plain anchor links; scroll only adds the highlight. */
export function AboutRail() {
  const [active, setActive] = useState<string>(ITEMS[0].id);

  useEffect(() => {
    const onScroll = () => {
      let current: string = ITEMS[0].id;
      for (const { id } of ITEMS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 160) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav aria-label="Sections" className="sticky top-28 hidden lg:block">
      <ul className="flex list-none flex-col border-l border-[hsl(36,29%,82%)] p-0">
        {ITEMS.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              className="-ml-px block border-l-2 border-transparent py-2.5 pl-[18px] text-sm leading-[1.45] text-muted-foreground no-underline transition-colors duration-[250ms] ease-[cubic-bezier(.22,1,.36,1)] hover:text-gold-ink aria-[current]:border-gold-ink aria-[current]:font-semibold aria-[current]:text-gold-ink"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
