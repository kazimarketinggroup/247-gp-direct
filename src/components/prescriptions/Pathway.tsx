import { prescriptionsPage } from "@/lib/site";

export default function Pathway() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <h2 className="title-50 text-center text-balance text-brand-teal">
        {prescriptionsPage.pathwayTitle}
      </h2>

      {/* 1 -> 2 -> 3 columns; cards stretch so each row keeps an even height. */}
      <ol className="mt-9 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {prescriptionsPage.pathway.map((step) => (
          <li key={step.number} className="h-full">
            <div className="flex h-full flex-col rounded-xl border border-brand-teal/10 bg-white p-5 sm:p-6">
              <span aria-hidden className="text-sm text-brand-teal/45">
                {step.number}
              </span>
              <h3 className="mt-3 text-base text-pretty text-brand-teal sm:text-lg">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-pretty text-brand-teal/65">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
