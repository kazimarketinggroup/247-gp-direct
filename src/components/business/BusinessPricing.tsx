import Link from "next/link";
import Icon from "@/components/Icon";
import { businessPage } from "@/lib/site";

export default function BusinessPricing() {
  return (
    <section
      id="pricing"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
    >
      <p className="text-xs text-brand-teal/55">Pricing</p>
      <div className="mt-3 border-t border-coral/40 pt-6 sm:pt-8" />

      {/* Teal summary card left, banded table right from lg. */}
      <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-6">
        <div className="rounded-2xl bg-mint/60 p-6 sm:p-8">
          <h3 className="text-2xl leading-tight text-balance text-brand-teal sm:text-3xl">
            {businessPage.pricingCardTitle}
          </h3>

          <ul className="mt-8 flex flex-col gap-4">
            {businessPage.pricingFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <Icon
                  name="check-circle"
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal/70"
                  strokeWidth={1.6}
                />
                <span className="text-xs leading-relaxed text-pretty text-brand-teal/85 sm:text-sm">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-brand-teal p-6 text-white sm:p-8">
          <h2 className="text-2xl leading-tight text-balance sm:text-3xl">
            {businessPage.pricingTableTitle}
          </h2>
          <p className="mt-3 text-sm text-white/75">
            {businessPage.pricingTableIntro}
          </p>

          {/* Table scrolls inside its own bounded box on narrow screens. */}
          {/* Inset panel, and the table scrolls inside it on narrow screens. */}
          <div className="mt-8 w-full max-w-full min-w-0 overflow-x-auto rounded-xl bg-white/8">
            <table className="w-full min-w-[28rem] border-collapse text-left">
              <caption className="sr-only">
                Annual company pricing banded by headcount
              </caption>
              <thead>
                <tr className="border-b border-white/15">
                  <th scope="col" className="px-5 py-3.5 text-xs text-white/60">
                    Headcount
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-center text-xs text-white/60">
                    Per company, per year
                  </th>
                  <th scope="col" className="px-5 py-3.5 text-center text-xs text-white/60">
                    Family cover included
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-right text-xs text-white/60">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {businessPage.pricingRows.map((row) => (
                  <tr key={row.band} className="border-b border-white/10 last:border-b-0">
                    <th scope="row" className="px-5 py-4 text-sm font-semibold text-white/90">
                      {row.label || row.band}
                    </th>
                    <td className="px-3 py-4 text-center text-sm font-bold text-coral">
                      {row.price}
                    </td>
                    <td className="px-5 py-4 text-center text-sm text-white/85">
                      {row.family}
                    </td>
                    <td className="px-4 py-4 text-right">
                      <Link
                        href={`/business/request-a-quote?headcount=${encodeURIComponent(row.band)}`}
                        className="inline-flex rounded-md bg-coral px-3 py-1 text-xs font-semibold text-white hover:bg-coral-dark transition"
                      >
                        Enquire
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
