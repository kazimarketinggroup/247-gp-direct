import Link from "next/link";
import { prescriptionsPage } from "@/lib/site";

const {
  deliveryTitle,
  deliveryBody,
  costTitle,
  costBody,
  canTitle,
  can,
  cannotTitle,
  cannot,
  collectingTitle,
  collectingBody,
  safetyTitle,
  safetyBody,
} = prescriptionsPage;

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 marker:text-brand-teal/40">
      {items.map((item) => (
        <li
          key={item}
          className="text-sm leading-relaxed text-pretty text-brand-teal/80"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PrescriptionDetails() {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {/* Delivery/cost panel left, the two prescribing lists right from lg. */}
        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2 lg:gap-6">
          <div className="flex h-full flex-col rounded-2xl bg-brand-teal/[0.04] p-6 sm:p-8">
            <h2 className="text-2xl leading-tight text-balance text-brand-teal sm:text-3xl">
              {deliveryTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-pretty text-brand-teal/75">
              {deliveryBody}
            </p>

            <h2 className="mt-10 text-2xl leading-tight text-balance text-brand-teal sm:text-3xl">
              {costTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-pretty text-brand-teal/75">
              {costBody}
            </p>

            <Link
              href="/pricing"
              className="mt-8 inline-flex w-fit rounded-md bg-coral px-5 py-2.5 text-sm text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
            >
              View Plans
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-2xl bg-brand-teal/[0.06] p-6 sm:p-7">
              <h2 className="text-base text-brand-teal sm:text-lg">{canTitle}</h2>
              <Bullets items={can} />
            </div>

            <div className="rounded-2xl bg-coral/10 p-6 sm:p-7">
              <h2 className="text-base text-brand-teal sm:text-lg">
                {cannotTitle}
              </h2>
              <Bullets items={cannot} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
          <div className="flex flex-col rounded-2xl bg-white p-6 sm:p-8">
            <h2 className="text-xl leading-tight text-balance text-brand-teal sm:text-2xl">
              {collectingTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-pretty text-brand-teal/75">
              {collectingBody}
            </p>

            <h2 className="mt-10 text-xl leading-tight text-balance text-brand-teal sm:text-2xl">
              {safetyTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-pretty text-brand-teal/75">
              {safetyBody}
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-coral p-6 text-white sm:p-8">
            <h2 className="text-xl leading-tight text-balance sm:text-2xl">
              What this service is not
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-pretty text-white/90">
              This is not an emergency service. If someone is seriously unwell or
              you think their life is at risk, call 999. For urgent advice, call
              NHS 111.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-pretty text-white/90">
              Our GPs cannot prescribe controlled drugs, cannot issue NHS
              prescriptions, cannot carry out physical examinations, tests or
              scans, and cannot issue fit notes for NHS purposes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
