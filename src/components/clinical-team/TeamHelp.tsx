import { clinicalTeamPage } from "@/lib/site";

export default function TeamHelp() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <h2 className="title-50 text-center text-balance text-brand-teal">
        {clinicalTeamPage.helpTitle}
      </h2>

      <div className="mt-9 rounded-2xl border border-brand-teal/10 bg-white sm:mt-10">
        {/* Stacked on phones; three columns from lg with dividers between. */}
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
  );
}
