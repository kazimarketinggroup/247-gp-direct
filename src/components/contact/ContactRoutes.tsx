import Link from "next/link";
import Icon from "@/components/Icon";
import SectionLabel from "@/components/SectionLabel";
import { contactPage } from "@/lib/site";

export default function ContactRoutes() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pt-16">
      <SectionLabel>{contactPage.label}</SectionLabel>

      <h1 className="title-50 mt-5 text-balance text-brand-teal">
        {contactPage.title}
      </h1>

      {/* 1 → 2 → 3 columns. Cards stretch so their buttons align per row. */}
      <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {contactPage.routes.map((route) => (
          <li key={route.title} className="h-full">
            <div className="flex h-full flex-col rounded-xl bg-white p-6 sm:p-7">
              {/* Header block is a fixed height on desktop so the body copy
                  starts at the same y across all three cards. */}
              <div className="lg:min-h-16">
                <h2 className="text-xl text-pretty text-brand-teal sm:text-2xl">
                  {route.title}
                </h2>
                {route.subtitle && (
                  <p className="mt-1 text-base text-brand-teal sm:text-lg">
                    {route.subtitle}
                  </p>
                )}
              </div>

              {/* Reserved height keeps the buttons on a shared baseline across
                  the row, whether the copy runs to one line or two. */}
              <p className="mt-5 text-sm leading-relaxed text-pretty text-brand-teal/75 lg:min-h-[3.25rem]">
                {route.body}
              </p>

              {/* mt-auto pins the button to the card foot regardless of copy length. */}
              {route.cta.type === "tel" ? (
                <a
                  href={route.cta.href}
                  className="mt-auto inline-flex w-fit items-center gap-2 rounded-md bg-coral px-5 py-2.5 text-sm whitespace-nowrap text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral sm:mt-8"
                >
                  {route.cta.label}
                  <Icon name="arrow-right" className="h-4 w-4" />
                </a>
              ) : (
                <Link
                  href={route.cta.href}
                  className="mt-auto inline-flex w-fit items-center rounded-md bg-coral px-5 py-2.5 text-sm whitespace-nowrap text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral sm:mt-8"
                >
                  {route.cta.label}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
