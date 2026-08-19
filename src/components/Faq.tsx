"use client";

import Link from "next/link";
import { useState } from "react";
import Icon from "@/components/Icon";
import SectionLabel from "@/components/SectionLabel";
import { faqs } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20"
    >
      {/* Heading sits above on mobile, beside the list from lg. */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-12 xl:gap-20">
        <div className="flex flex-col items-start">
          <SectionLabel>Good to know</SectionLabel>
          <h2 className="mt-5 title-50 text-balance text-brand-teal">
            Things people ask before they join
          </h2>
          <Link
            href="/faqs"
            className="mt-6 inline-flex items-center gap-2 border-b border-brand-teal/30 pb-1 text-sm text-brand-teal transition-colors hover:border-coral hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
          >
            See all FAQs
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>

        <ul className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <li key={faq.q} className="border-b border-brand-teal/10 first:border-t">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
                >
                  <span className="text-sm text-pretty text-brand-teal sm:text-base">
                    {faq.q}
                  </span>
                  <Icon
                    name={isOpen ? "minus" : "plus"}
                    className="mt-0.5 h-4 w-4 shrink-0 text-coral"
                    strokeWidth={2}
                  />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pr-8 pb-5 text-sm leading-relaxed text-pretty text-brand-teal/70 sm:text-base">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
