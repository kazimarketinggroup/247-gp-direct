import Icon from "@/components/Icon";
import SectionLabel from "@/components/SectionLabel";
import { regulationPage } from "@/lib/site";

const { wider } = regulationPage;

export default function WiderObligations() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <SectionLabel>Wider obligations</SectionLabel>

      <h2 className="title-50 mt-5 max-w-2xl text-balance text-brand-teal">
        {wider.title}
      </h2>

      <p className="mt-4 max-w-md text-sm leading-relaxed text-pretty text-brand-teal/75 sm:text-base">
        {wider.intro}
      </p>

      {/* Single column on phones, two from md. */}
      <ul className="mt-9 grid grid-cols-1 gap-x-10 gap-y-8 sm:mt-10 md:grid-cols-2 lg:gap-x-16">
        {wider.items.map((item) => (
          <li key={item.title}>
            <h3 className="flex items-center gap-2.5 text-sm text-brand-teal sm:text-base">
              <Icon
                name="check-circle"
                className="h-4 w-4 shrink-0 text-brand-teal/70"
                strokeWidth={1.6}
              />
              {item.title}
            </h3>
            {/* Indent aligns the body with the heading text, past the icon. */}
            <p className="mt-2.5 pl-6.5 text-xs leading-relaxed text-pretty text-brand-teal/65 sm:text-sm">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
