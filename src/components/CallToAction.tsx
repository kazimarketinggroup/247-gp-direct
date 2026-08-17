import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { siteConfig } from "@/lib/site";

export default function CallToAction() {
  return (
    <section id="join" className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-24">
      <div className="flex flex-col items-center rounded-2xl bg-mint px-5 py-12 text-center sm:rounded-3xl sm:px-8 sm:py-16 lg:py-20">
        <SectionLabel>Private GP care, made simple</SectionLabel>

        {/* Number wraps to its own line on narrow screens rather than overflowing. */}
        <h2 className="mt-6 max-w-3xl text-2xl leading-tight font-bold tracking-tight text-balance text-brand-teal sm:text-3xl md:text-4xl lg:text-5xl">
          When you need a GP,{" "}
          <span className="block sm:inline">
            Call{" "}
            <a
              href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`}
              className="text-coral underline-offset-4 transition-opacity hover:opacity-80 hover:underline"
            >
              {siteConfig.phoneDisplay}
            </a>
            .
          </span>
        </h2>

        <Link
          href="#pricing"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-coral px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral sm:text-base"
        >
          View plans
        </Link>
      </div>
    </section>
  );
}
