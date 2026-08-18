"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Icon from "@/components/Icon";
import { familyPage } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function IncludedSelector({
  /** The What's Included page supplies its own heading and image. */
  showHeading = true,
  image,
}: {
  showHeading?: boolean;
  image?: { src: string; alt: string };
} = {}) {
  // Selecting a row on the left swaps the copy under the image on the right.
  const [selected, setSelected] = useState(0);
  const active = familyPage.included[selected];
  const detailRef = useRef<HTMLDivElement>(null);
  const panelImage = image ?? familyPage.includedImage;

  const select = (i: number) => {
    setSelected(i);
    // Below lg the panel sits under the list, so bring it into view —
    // otherwise the content the user just chose changes off-screen.
    if (
      typeof window !== "undefined" &&
      !window.matchMedia("(min-width: 1024px)").matches
    ) {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section
      id="whats-included"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
    >
      {showHeading && (
        <>
          <p className="text-xs text-brand-teal/55">What&apos;s included</p>
          <div className="mt-3 border-t border-coral/40 pt-6 sm:pt-8">
            <h2 className="title-50 text-balance text-brand-teal">
              {familyPage.includedTitle}
            </h2>
            <p className="mt-3 text-sm text-brand-teal/65">
              {familyPage.includedSub}
            </p>
          </div>
        </>
      )}

      <div
        className={cn(
          "grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8",
          showHeading && "mt-8 sm:mt-10",
        )}
      >
        {/* Left: selectable list. */}
        <ul className="flex flex-col gap-2">
          {familyPage.included.map((item, i) => {
            const isActive = selected === i;
            return (
              <li key={item.title}>
                <button
                  type="button"
                  onClick={() => select(i)}
                  aria-pressed={isActive}
                  aria-controls="included-detail"
                  className={cn(
                    "flex w-full items-center justify-between gap-4 rounded-lg px-4 py-3.5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral",
                    isActive
                      ? "bg-mint/70"
                      : "bg-white hover:bg-mint/30",
                  )}
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <Icon
                      name="check-circle"
                      className={cn(
                        "h-4 w-4 shrink-0",
                        isActive ? "text-brand-teal" : "text-brand-teal/50",
                      )}
                      strokeWidth={1.6}
                    />
                    <span className="text-sm text-pretty text-brand-teal">
                      {item.title}
                    </span>
                  </span>
                  <Icon
                    name="arrow-right"
                    className={cn(
                      "h-4 w-4 shrink-0 transition-transform",
                      isActive
                        ? "rotate-45 text-brand-teal"
                        : "-rotate-45 text-brand-teal/40",
                    )}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right: image with the selected item's copy beneath it. */}
        <div
          ref={detailRef}
          className="flex flex-col gap-5 scroll-mt-24 rounded-xl bg-mint/40 p-5 sm:p-6 lg:sticky lg:top-24"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-brand-teal/5">
            <Image
              src={panelImage.src}
              alt={panelImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* aria-live so the swap is announced to screen readers. */}
          <div id="included-detail" aria-live="polite">
            <h3 className="text-base text-pretty text-brand-teal sm:text-lg">
              {active.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-pretty text-brand-teal/75">
              {active.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
