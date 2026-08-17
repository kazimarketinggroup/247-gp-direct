import SectionLabel from "@/components/SectionLabel";
import SupportCards from "@/components/SupportCards";
import { regulationPage } from "@/lib/site";

export default function RegulatorList() {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pt-16">
        <SectionLabel>Regulation &amp; Compliance</SectionLabel>

        <h1 className="title-50 mt-5 max-w-2xl text-balance text-brand-teal">
          {regulationPage.title}
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-pretty text-brand-teal/75 sm:text-base">
          {regulationPage.intro}
        </p>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        {/* Regulator list takes the wide column; support cards sit alongside
            from lg and stack underneath on smaller screens. */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,17rem)] xl:gap-8">
          <div className="rounded-2xl bg-white/70 p-5 sm:p-7 lg:p-8">
            <dl className="flex flex-col gap-8 sm:gap-9">
              {regulationPage.regulators.map((reg) => (
                <div key={reg.name}>
                  <dt>
                    <span className="block text-lg text-pretty text-brand-teal sm:text-xl">
                      {reg.name}
                    </span>
                    <span className="mt-1 block text-sm text-brand-teal/80">
                      {reg.role}
                    </span>
                  </dt>
                  <dd className="mt-3 max-w-2xl text-xs leading-relaxed text-pretty text-brand-teal/65 sm:text-sm">
                    {reg.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <SupportCards />
        </div>
      </section>
    </>
  );
}
