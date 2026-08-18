import { clinicalTeamPage } from "@/lib/site";

/**
 * Two columns of conditions plus the coral outcome note.
 * Shared by the clinical team, family and GP-help pages.
 */
export default function GpHelpTable() {
  return (
    <div className="rounded-2xl border border-brand-teal/10 bg-white">
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
  );
}
