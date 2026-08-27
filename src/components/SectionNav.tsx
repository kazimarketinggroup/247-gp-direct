import Link from "next/link";

/** Sticky-free in-page nav strip. Shared by the family and business pages. */
export default function SectionNav({
  sections,
}: {
  sections: Array<{ id: string; label: string }>;
}) {
  return (
    <nav aria-label="On this page" className="border-y border-brand-teal/10 bg-cream">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Too many items to fit on a phone, so the strip scrolls sideways
            inside its own bounded container rather than breaking the page. */}
        <ul className="flex w-full max-w-full min-w-0 gap-5 overflow-x-auto py-3.5 sm:gap-7">
          {sections.map((section) => (
            <li key={section.id} className="shrink-0">
              <Link
                href={`#${section.id}`}
                className="text-xs whitespace-nowrap text-brand-teal/70 transition-colors hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral sm:text-sm"
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
