import Link from "next/link";
import Icon from "@/components/Icon";
import { clinicalTeamPage, familyPage } from "@/lib/site";

/** Small section header: label, coral rule, then the title. */
function SectionHead({ label, title }: { label: string; title: string }) {
  return (
    <>
      <p className="text-xs text-brand-teal/55">{label}</p>
      <div className="mt-3 border-t border-coral/40 pt-6 sm:pt-8">
        <h2 className="title-50 text-balance text-brand-teal">{title}</h2>
      </div>
    </>
  );
}

export default function FamilyDetails() {
  return (
    <>
      <section
        id="gp-help"
        className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
      >
        <SectionHead label="What Gps help with" title={clinicalTeamPage.helpTitle} />

        <div className="mt-8 rounded-2xl border border-brand-teal/10 bg-white sm:mt-10">
          <div className="grid grid-cols-1 divide-y divide-brand-teal/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {clinicalTeamPage.helpColumns.map((column, i) => (
              <ul
                key={i}
                className="flex list-disc flex-col gap-3 py-6 pr-6 pl-10 marker:text-brand-teal/40 sm:py-7 sm:pr-7 sm:pl-11"
              >
                {column.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-pretty text-brand-teal/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ))}
            <p className="flex items-center px-6 py-6 text-center text-sm leading-relaxed text-pretty text-coral sm:px-7 sm:py-7">
              {clinicalTeamPage.helpNote}
            </p>
          </div>
        </div>
      </section>

      <section
        id="what-it-isnt"
        className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
      >
        <SectionHead label="What it isn't" title={familyPage.notServiceTitle} />

        <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-mint/50 p-6 sm:mt-10 sm:p-8">
          {familyPage.notService.map((para) => (
            <p
              key={para.slice(0, 28)}
              className="text-sm leading-relaxed text-pretty text-brand-teal/80"
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      <section
        id="prescriptions"
        className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
      >
        <SectionHead
          label="Prescriptions"
          title={familyPage.prescriptionsTitle}
        />

        {/* 1 → 3 columns. */}
        <ol className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-3 sm:gap-6 lg:gap-10">
          {familyPage.prescriptionSteps.map((step) => (
            <li key={step.number}>
              <span
                aria-hidden
                className="block text-3xl text-brand-teal/25 sm:text-4xl"
              >
                {step.number}
              </span>
              <h3 className="mt-2 text-sm text-brand-teal sm:text-base">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-pretty text-brand-teal/70 sm:text-sm">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <Link
          href="/how-it-works"
          className="mt-8 inline-flex items-center gap-2 border-b border-brand-teal/30 pb-1 text-sm text-brand-teal transition-colors hover:border-coral hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
        >
          {familyPage.prescriptionsLink}
          <Icon name="arrow-right" className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
