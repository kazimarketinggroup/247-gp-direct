import Image from "next/image";
import Icon, { type IconName } from "@/components/Icon";
import { businessPage } from "@/lib/site";

export default function TeamGets() {
  return (
    <>
      <section
        id="team-gets"
        className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
      >
        <p className="text-xs text-brand-teal/55">For your people</p>
        <div className="mt-3 border-t border-coral/40 pt-6 sm:pt-8">
          <h2 className="title-50 text-balance text-brand-teal">
            {businessPage.teamTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-pretty text-brand-teal/70">
            {businessPage.teamIntro}
          </p>
        </div>

        {/* List left, photo right from lg; stacked below. Both columns stretch
            to the same height so the photo tracks the list rather than
            overflowing on its own fixed ratio. */}
        <div className="mt-8 grid grid-cols-1 items-stretch gap-6 sm:mt-10 lg:grid-cols-2 lg:gap-10">
          <ul className="flex flex-col">
            {businessPage.teamItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 border-b border-brand-teal/10 py-3.5 last:border-b-0"
              >
                <Icon
                  name="check-circle"
                  className="h-4 w-4 shrink-0 text-brand-teal/60"
                  strokeWidth={1.6}
                />
                <span className="text-sm text-pretty text-brand-teal/85">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-brand-teal/5 lg:aspect-auto lg:h-full">
            <Image
              src="/images/_business-subpages/Group 11011.png"
              alt="A smiling employee standing in a bright open-plan office"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section
        id="you-get"
        className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
      >
        <p className="text-xs text-brand-teal/55">For you</p>
        <div className="mt-3 border-t border-coral/40 pt-6 sm:pt-8">
          <h2 className="title-50 text-balance text-brand-teal">
            {businessPage.employerTitle}
          </h2>
          {businessPage.employerIntro && (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-pretty text-brand-teal/70">
              {businessPage.employerIntro}
            </p>
          )}
        </div>

        {/* 1 -> 2 -> 3 columns. */}
        <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
          {businessPage.employerItems.map((item) => (
            <li key={item.title}>
              <h3 className="text-base text-brand-teal sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-pretty text-brand-teal/70 sm:text-sm">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="rollout"
        className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
      >
        <p className="text-xs text-brand-teal/55">Rollout</p>
        <div className="mt-3 border-t border-coral/40 pt-6 sm:pt-8">
          <h2 className="title-50 text-balance text-brand-teal">
            {businessPage.rolloutTitle}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-pretty text-brand-teal/70">
            {businessPage.rolloutIntro}
          </p>
        </div>

        {/* 1 -> 2 -> 4 columns, divided between steps on desktop. */}
        <ol className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {businessPage.rolloutSteps.map((step, i) => (
            <li
              key={step.number}
              className={i > 0 ? "lg:border-l lg:border-brand-teal/10 lg:pl-6" : undefined}
            >
              <span aria-hidden className="block text-3xl text-brand-teal/25 sm:text-4xl">
                {step.number}
              </span>
              <h3 className="mt-3 text-sm text-pretty text-brand-teal sm:text-base">
                {step.title}
              </h3>
              <p className="mt-2 text-xs text-brand-teal/60">{step.day}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="sectors"
        className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
      >
        <p className="text-xs text-brand-teal/55">Sectors</p>
        <div className="mt-3 border-t border-coral/40 pt-6 sm:pt-8">
          <h2 className="title-50 text-balance text-brand-teal">
            {businessPage.sectorsTitle}
          </h2>
        </div>

        <div className="mt-8 rounded-2xl bg-mint/40 p-5 sm:mt-10 sm:p-7 lg:p-8">
          {/* 1 -> 2 -> 3 columns; cards stretch so rows stay even. */}
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {businessPage.sectors.map((sector) => (
              <li key={sector.title} className="h-full">
                <h3 className="flex items-center gap-2.5 text-sm text-brand-teal sm:text-base">
                  <Icon
                    name={sector.icon as IconName}
                    className="h-4 w-4 shrink-0 text-brand-teal/60"
                    strokeWidth={1.6}
                  />
                  {sector.title}
                </h3>
                <p className="mt-2.5 pl-6.5 text-xs leading-relaxed text-pretty text-brand-teal/70">
                  {sector.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
