import Image from "next/image";
import Icon from "@/components/Icon";
import { businessPage } from "@/lib/site";

export default function BusinessCase() {
  return (
    <section
      id="business-case"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
    >
      <p className="text-xs text-brand-teal/55">The business case</p>
      <div className="mt-3 border-t border-coral/40 pt-6 sm:pt-8" />

      <div className="rounded-2xl bg-white/70 p-5 sm:p-7 lg:p-8">
        {/* Heading + photo | stats | photo. Stacks on phones. */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-2xl leading-tight text-balance text-brand-teal sm:text-3xl">
              {businessPage.caseTitle}
            </h2>
            <div className="relative mt-5 aspect-[4/3] w-full overflow-hidden rounded-xl bg-brand-teal/5">
              <Image
                src="/images/business/case-meeting-table.png"
                alt="A team meeting around a table in a modern office"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <p className="mt-5 text-xs leading-relaxed text-pretty text-brand-teal/70">
              {businessPage.caseNotes[0]}
            </p>
          </div>

          <ul className="flex flex-col gap-4 lg:border-x lg:border-brand-teal/10 lg:px-8">
            {businessPage.caseStats.map((stat) => (
              <li key={stat} className="flex items-start gap-2.5">
                <Icon
                  name="check"
                  className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-teal/60"
                  strokeWidth={2.5}
                />
                <span className="text-sm leading-relaxed text-pretty text-brand-teal/80">
                  {stat}
                </span>
              </li>
            ))}
            <li className="mt-2 text-[11px] leading-relaxed text-pretty text-brand-teal/45">
              {businessPage.caseSource}
            </li>
            <li className="mt-2 text-xs leading-relaxed text-pretty text-brand-teal/70">
              {businessPage.caseNotes[1]}
            </li>
          </ul>

          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-brand-teal/5">
              <Image
                src="/images/business/case-boardroom.png"
                alt="Senior colleagues in discussion around a boardroom table"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <p className="mt-5 text-xs leading-relaxed text-pretty text-brand-teal/70">
              {businessPage.caseNotes[2]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
