import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Complaints Procedure — 247 GP Direct",
  description:
    "How we handle complaints, response timescales, clinical governance procedures, and independent escalation.",
};

function ComplaintCard({ roleTitle }: { roleTitle?: string }) {
  return (
    <div className="rounded-2xl border border-brand-teal/10 bg-white p-6 sm:p-8 lg:p-10 shadow-sm text-sm text-brand-teal/80 leading-relaxed space-y-5">
      {/* Date */}
      <p className="text-xs sm:text-sm text-brand-teal/60 font-medium">
        Last updated: 14/09/2026
      </p>

      {/* Intro */}
      <p>
        We aim to provide a high standard of care, and we take complaints seriously. We handle complaints in line with good clinical governance practice.
      </p>

      {/* How to raise a complaint */}
      <div className="space-y-2 pt-1">
        <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
          How to raise a complaint
        </h2>
        <p>You can raise a complaint by:</p>
        <ul className="ml-5 list-disc space-y-1.5 text-brand-teal/85">
          <li>
            Calling us:{" "}
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="font-medium text-brand-teal hover:text-coral transition-colors"
            >
              0330 520 0089
            </a>
          </li>
          <li>
            Emailing us:{" "}
            <a
              href="mailto:complaint@247gpdirect.co.uk"
              className="font-medium text-coral underline hover:text-coral-dark transition-colors"
            >
              complaint@247gpdirect.co.uk
            </a>
          </li>
          <li>
            Writing to us: Rock Centre, 27-31 Lichfield Street, Walsall, West Midlands, WS1 1TJ, United Kingdom
          </li>
        </ul>
      </div>

      <p>
        Please include your name, membership details, and as much detail as possible about your concern.
      </p>

      {/* What happens next */}
      <div className="space-y-2 pt-1">
        <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
          What happens next
        </h2>
        <ol className="ml-5 list-decimal space-y-2 text-brand-teal/85">
          <li>
            <strong>Acknowledgement</strong> — we&apos;ll acknowledge your complaint within [X working days].
          </li>
          <li>
            <strong>Investigation</strong> — your complaint will be reviewed, which may include speaking to the clinician involved, in line with our clinical governance procedures.
          </li>
          <li>
            <strong>Response</strong> — we aim to provide a full written response within [X working days]. If we need longer (for example, for a complex clinical review), we&apos;ll let you know and explain why.
          </li>
        </ol>
      </div>

      {/* If you're not satisfied */}
      <div className="space-y-1.5 pt-1">
        <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
          If you&apos;re not satisfied with our response
        </h2>
        <p>
          You can ask for your complaint to be escalated to [named senior clinical lead / manager].
        </p>
      </div>

      {/* Independent complaints body */}
      <div className="space-y-2 pt-1">
        <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
          If you remain unhappy after our internal process, you can contact an independent complaints body:
        </h2>
        <ul className="ml-5 list-disc space-y-1.5 text-brand-teal/85">
          <li>
            Independent Sector Complaints Adjudication Service (ISCAS) or equivalent — [confirm whether you&apos;re a member of an independent healthcare complaints scheme, as this is expected for private providers]
          </li>
        </ul>
      </div>

      {/* Confidentiality */}
      <div className="space-y-1.5 pt-1">
        <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
          Confidentiality
        </h2>
        <p>
          All complaints are handled confidentially and will not affect the quality of care or service you receive.
        </p>
      </div>
    </div>
  );
}

export default function ComplaintsPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Title Section */}
      <section className="mx-auto w-full max-w-7xl px-4 pt-10 sm:pt-14 lg:pt-16 pb-2">
        <h1 className="title-50 text-balance text-brand-teal font-normal">
          Complaints Procedure
        </h1>
      </section>

      {/* 2-Column Card Section */}
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          <ComplaintCard />
          <ComplaintCard />
        </div>
      </section>
    </div>
  );
}
