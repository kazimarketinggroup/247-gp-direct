import type { Metadata } from "next";
import SupportCards from "@/components/SupportCards";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cancellation Policy — 247 GP Direct",
  description:
    "Cancellation terms, 14-day cooling-off rights under Consumer Contracts Regulations 2013, renewals, and refund policies.",
};

export default function CancellationPolicyPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Title Section */}
      <section className="mx-auto w-full max-w-7xl px-4 pt-10 sm:pt-14 lg:pt-16 pb-2">
        <h1 className="title-50 text-balance text-brand-teal font-normal">
          Cancellation Policy
        </h1>
      </section>

      {/* Main Content & Sidebar */}
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] xl:gap-12">
          
          {/* Left: Cancellation Policy Card */}
          <div className="rounded-2xl border border-brand-teal/10 bg-white p-6 sm:p-8 lg:p-10 shadow-sm text-sm text-brand-teal/80 leading-relaxed space-y-6">
            <p className="text-sm font-medium text-coral">
              Last updated: 14/09/2026
            </p>

            {/* Cooling-off period */}
            <div className="space-y-2">
              <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
                Cooling-off period
              </h2>
              <p>
                If you purchased your membership online or by phone, you have a legal right to cancel within 14 days of purchase under the Consumer Contracts Regulations 2013, without giving a reason.
              </p>
              <p className="text-xs sm:text-sm text-brand-teal/70 pt-1">
                Note on services already used: if you&apos;ve used the service (e.g. had a consultation) within that 14-day period, [confirm your position — standard practice is a pro-rated charge for services already provided, which should be clearly stated here and matched to what happens operationally].
              </p>
            </div>

            {/* Cancelling your annual membership */}
            <div className="space-y-2 pt-2 border-t border-brand-teal/5">
              <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
                Cancelling your annual membership
              </h2>
              <ul className="ml-5 list-disc space-y-1.5 text-brand-teal/85">
                <li>
                  You can cancel your membership at any time; cancellation will take effect from your next renewal date, and you&apos;ll retain access until then.
                </li>
                <li>
                  To cancel, call us on{" "}
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="font-medium text-brand-teal hover:text-coral transition-colors"
                  >
                    {siteConfig.phoneDisplay}
                  </a>.
                </li>
                <li>
                  We don&apos;t offer refunds for the unused portion of a current membership year outside the 14-day cooling-off period, except where required by law.
                </li>
              </ul>
            </div>

            {/* Cancelling Holiday Cover */}
            <div className="space-y-2 pt-2 border-t border-brand-teal/5">
              <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
                Cancelling Holiday Cover
              </h2>
              <p>
                Holiday Cover is a one-off, fixed-term purchase (30 days). [Confirm cancellation/refund terms — e.g. whether it&apos;s refundable if cancelled before the cover period starts, and non-refundable once active.]
              </p>
            </div>

            {/* Business plans */}
            <div className="space-y-2 pt-2 border-t border-brand-teal/5">
              <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
                Business plans
              </h2>
              <p>
                Cancellation terms for SME/business packages may differ and will be set out in your business agreement. [Confirm notice period for team/business cancellations.]
              </p>
            </div>

            {/* How refunds are processed */}
            <div className="space-y-2 pt-2 border-t border-brand-teal/5">
              <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
                How refunds are processed
              </h2>
              <p>
                Where a refund is due, it will be paid to your original payment method within [X working days].
              </p>
            </div>

            {/* Contact us to cancel */}
            <div className="space-y-2 pt-2 border-t border-brand-teal/5">
              <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
                Contact us to cancel
              </h2>
              <ul className="ml-5 list-disc space-y-1.5 text-brand-teal/85">
                <li>
                  Phone (24/7):{" "}
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="font-medium text-brand-teal hover:text-coral transition-colors"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li>
                  Post: Rock Centre, 27-31 Lichfield Street, Walsall, West Midlands, WS1 1TJ, United Kingdom
                </li>
              </ul>
            </div>

          </div>

          {/* Right Sidebar: SupportCards */}
          <aside className="sticky top-28 space-y-6">
            <SupportCards showEmergency={true} />
          </aside>

        </div>
      </section>
    </div>
  );
}
