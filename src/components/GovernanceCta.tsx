import Link from "next/link";
import Icon from "@/components/Icon";
import SectionLabel from "@/components/SectionLabel";

export default function GovernanceCta() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
      <div className="flex flex-col items-center rounded-2xl bg-mint/60 px-5 py-12 text-center sm:rounded-3xl sm:px-8 sm:py-16">
        <SectionLabel>Private GP care, made simple</SectionLabel>

        <h2 className="title-50 mt-6 max-w-2xl text-balance text-brand-teal">
          How we govern the clinical service
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-pretty text-brand-teal/70 sm:text-base">
          Recruitment and revalidation, prescribing governance, call recording,
          complaints, indemnity and data protection set out in full.
        </p>

        <Link
          href="/clinical-standards"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-coral px-6 py-3 text-sm text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
        >
          Clinical standards &amp; governance
          <Icon name="arrow-right" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
