import Icon, { type IconName } from "@/components/Icon";
import SectionLabel from "@/components/SectionLabel";
import { included } from "@/lib/site";

export default function Included() {
  return (
    <section
      id="included"
      className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20"
    >
      <div className="flex flex-col items-start">
        <SectionLabel>What&apos;s included</SectionLabel>
        <h2 className="mt-5 max-w-2xl title-50 text-balance text-brand-teal">
          One annual subscription. Everything below.
        </h2>
      </div>

      {/* 1 → 2 → 4 columns. Cards stretch so each row keeps an even height. */}
      <ul className="mt-9 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {included.map((item) => (
          <li
            key={item.title}
            className="flex h-full flex-col rounded-xl border border-brand-teal/10 bg-white p-5 transition-shadow hover:shadow-md sm:p-6"
          >
            <span
              aria-hidden
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-mint text-brand-teal"
            >
              <Icon name={item.icon as IconName} className="h-[18px] w-[18px]" />
            </span>
            <h3 className="mt-4 text-sm text-brand-teal sm:text-base">
              {item.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-pretty text-brand-teal/70 sm:text-sm">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
