"use client";

import Link from "next/link";
import { useState } from "react";
import Icon from "@/components/Icon";
import { familyPage } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function FamilyFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faqs"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
    >
      <p className="text-xs text-brand-teal/55">FAQs</p>
      <div className="mt-3 border-t border-coral/40 pt-6 sm:pt-8" />

      {/* Heading beside the list from lg, above it below. */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-12">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl leading-tight text-balance text-brand-teal sm:text-3xl">
            {familyPage.faqTitle}
          </h2>
          <Link
            href="/health-hub"
            className="mt-6 inline-flex items-center gap-2 border-b border-brand-teal/30 pb-1 text-sm text-brand-teal transition-colors hover:border-coral hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
          >
            See all FAQs
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>

        <ul className="flex flex-col">
          {familyPage.faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <li key={faq.q} className="border-b border-brand-teal/10 first:border-t">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`family-faq-${i}`}
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
                </h3>
                <div
                  id={`family-faq-${i}`}
                  role="region"
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pr-8 pb-5 text-sm leading-relaxed text-pretty text-brand-teal/70">
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
