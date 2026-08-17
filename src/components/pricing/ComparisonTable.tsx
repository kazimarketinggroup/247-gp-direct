import Icon from "@/components/Icon";
import { comparisonRows, pricingAssuranceCards } from "@/lib/site";

function Cell({ value }: { value: string | true }) {
  if (value === true) {
    return (
      <>
        <span className="sr-only">Included</span>
        <Icon
          name="check"
          className="mx-auto h-4 w-4 text-brand-teal/70"
          strokeWidth={2}
        />
      </>
    );
  }
  return <span className="text-brand-teal/75">{value}</span>;
}

export default function ComparisonTable() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      {/* The table can't compress below its natural width, so it scrolls
          inside this container rather than pushing the page sideways.
          w-full + max-w-full keeps the scroll box bounded by the section. */}
      <div className="w-full max-w-full min-w-0 overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse text-left">
          <caption className="sr-only">
            What is included on each 247 GP Direct plan
          </caption>
          <thead>
            <tr className="border-b border-brand-teal/15">
              <th scope="col" className="py-3 pr-4 text-sm text-brand-teal">
                What&apos;s included
              </th>
              <th scope="col" className="px-3 py-3 text-center text-sm text-brand-teal">
                Individual
              </th>
              <th scope="col" className="px-3 py-3 text-center text-sm text-brand-teal">
                Couple
              </th>
              <th scope="col" className="px-3 py-3 text-center text-sm text-brand-teal">
                Family
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.label} className="border-b border-brand-teal/10">
                <th
                  scope="row"
                  className="py-3.5 pr-4 text-xs text-brand-teal/80 sm:text-sm"
                >
                  {row.label}
                </th>
                <td className="px-3 py-3.5 text-center text-xs sm:text-sm">
                  <Cell value={row.individual} />
                </td>
                <td className="px-3 py-3.5 text-center text-xs sm:text-sm">
                  <Cell value={row.couple} />
                </td>
                <td className="px-3 py-3.5 text-center text-xs sm:text-sm">
                  <Cell value={row.family} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {pricingAssuranceCards.map((card) => (
          <li
            key={card}
            className="rounded-lg bg-brand-teal/5 p-4 text-xs leading-relaxed text-pretty text-brand-teal/70 sm:p-5 sm:text-sm"
          >
            {card}
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-4xl text-xs leading-relaxed text-pretty text-brand-teal/70 sm:text-sm">
        What you&apos;re actually paying for. A single private GP appointment
        booked ad hoc typically costs a meaningful fraction of this subscription
        on its own. Two calls in a year and the cover has paid for itself — the
        rest of the year is included.
      </p>
    </section>
  );
}
