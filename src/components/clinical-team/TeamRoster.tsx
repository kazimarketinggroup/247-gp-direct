import { clinicalTeamPage } from "@/lib/site";

export default function TeamRoster() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="text-center">
        <h2 className="title-50 mx-auto max-w-2xl text-balance text-brand-teal">
          {clinicalTeamPage.leadTitle}
        </h2>
        <p className="mx-auto mt-6 max-w-4xl text-sm leading-relaxed text-pretty text-brand-teal/75 sm:text-base">
          {clinicalTeamPage.leadBody}
        </p>
      </div>

      {/* 1 → 2 → 3 → 5 columns so five cards never squash. */}
      <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-5">
        {clinicalTeamPage.members.map((member) => (
          <li
            key={member.id}
            className="overflow-hidden rounded-xl border border-brand-teal/10 bg-white transition-shadow hover:shadow-md"
          >
            {/* Photo placeholder — swap for next/image once portraits arrive. */}
            <div
              aria-hidden
              className="aspect-[4/3] w-full bg-brand-teal/[0.07]"
            />

            <div className="p-4">
              <p className="flex items-center gap-1.5 text-[11px] text-brand-teal/60">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                />
                {member.status}
              </p>
              <p className="mt-1.5 text-base text-brand-teal">{member.name}</p>
              <p className="mt-0.5 text-xs text-brand-teal/60">{member.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
