"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { faqsPage } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function FaqBrowser() {
  // "all" shows every category; a chip narrows to one.
  const [filter, setFilter] = useState("all");
  // Tracks the open question as "categoryId:index" so ids stay unique.
  const [open, setOpen] = useState<string | null>(null);

  const visible =
    filter === "all"
      ? faqsPage.categories
      : faqsPage.categories.filter((c) => c.id === filter);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      {/* Filter chips wrap rather than overflow on narrow screens. */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => setFilter("all")}
          aria-pressed={filter === "all"}
          className={cn(
            "rounded-full px-4 py-2 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral sm:text-sm",
            filter === "all"
              ? "bg-brand-teal text-white"
              : "border border-brand-teal/15 bg-white text-brand-teal/70 hover:border-brand-teal/35",
          )}
        >
          All
        </button>

        {faqsPage.categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setFilter(cat.id)}
            aria-pressed={filter === cat.id}
            className={cn(
              "rounded-full px-4 py-2 text-xs whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral sm:text-sm",
              filter === cat.id
                ? "bg-brand-teal text-white"
                : "border border-brand-teal/15 bg-white text-brand-teal/70 hover:border-brand-teal/35",
            )}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* The list is narrower than the page so long answers stay readable. */}
      <div className="mt-10 max-w-3xl sm:mt-12">
        {visible.map((cat) => (
          <div key={cat.id} className="mb-10 last:mb-0 sm:mb-12">
            <h2 className="text-xl leading-tight text-balance text-brand-teal sm:text-2xl">
              {cat.name}
            </h2>

            <ul className="mt-5 flex flex-col gap-2">
              {cat.items.map((item, i) => {
                const key = `${cat.id}:${i}`;
                const isOpen = open === key;
                return (
                  <li key={item.q} className="rounded-lg bg-white">
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : key)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${cat.id}-${i}`}
                        className="flex w-full items-start justify-between gap-4 px-4 py-3.5 text-left transition-colors hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
                      >
                        <span className="text-sm text-pretty text-brand-teal">
                          {item.q}
                        </span>
                        <Icon
                          name="chevron-down"
                          className={cn(
                            "mt-0.5 h-4 w-4 shrink-0 text-brand-teal/50 transition-transform",
                            isOpen && "rotate-180",
                          )}
                          strokeWidth={2}
                        />
                      </button>
                    </h3>

                    <div
                      id={`faq-panel-${cat.id}-${i}`}
                      role="region"
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300 ease-in-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-4 pb-4 text-sm leading-relaxed text-pretty text-brand-teal/70">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
