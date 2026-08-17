import { aboutPage } from "@/lib/site";

export default function AboutPromise() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <h2 className="title-50 max-w-2xl text-balance text-brand-teal">
        {aboutPage.promiseTitle}
      </h2>

      {/* Commitment panel left, prose right from lg; stacked below. */}
      <div className="mt-8 grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8">
        <div className="rounded-xl bg-brand-teal/[0.04] p-6 sm:p-8">
          <h3 className="text-base text-brand-teal sm:text-lg">
            {aboutPage.commitmentTitle}
          </h3>
          <ul className="mt-5 flex list-disc flex-col gap-2.5 pl-5 marker:text-brand-teal/40">
            {aboutPage.commitments.map((item) => (
              <li
                key={item}
                className="text-sm leading-relaxed text-pretty text-brand-teal/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5 rounded-xl bg-brand-teal/[0.04] p-6 sm:p-8">
          {aboutPage.paragraphs.map((para) => (
            <p
              key={para.slice(0, 32)}
              className="text-sm leading-relaxed text-pretty text-brand-teal/80"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
