import Icon, { type IconName } from "@/components/Icon";
import { clinicalStandardsPage } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function StandardsList() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
      <h2 className="sr-only">Our clinical standards</h2>

      <ul className="flex flex-col gap-3 sm:gap-4">
        {clinicalStandardsPage.standards.map((item) => (
          <li
            key={item.title}
            className={cn(
              "rounded-2xl px-5 py-6 sm:px-7 sm:py-7",
              item.featured ? "bg-brand-teal text-white" : "bg-white",
            )}
          >
            {/* Title column then body; stacked on phones, side by side from md. */}
            <div className="grid grid-cols-1 items-start gap-3 md:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] md:gap-8 lg:gap-12">
              <h3 className="flex items-center gap-3 text-lg text-pretty sm:text-xl">
                <Icon
                  name={item.icon as IconName}
                  className={cn(
                    "h-5 w-5 shrink-0",
                    item.featured ? "text-white/80" : "text-brand-teal/70",
                  )}
                  strokeWidth={1.6}
                />
                <span className={item.featured ? "text-white" : "text-brand-teal"}>
                  {item.title}
                </span>
              </h3>

              <p
                className={cn(
                  "text-xs leading-relaxed text-pretty sm:text-sm",
                  item.featured ? "text-white/80" : "text-brand-teal/70",
                )}
              >
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
