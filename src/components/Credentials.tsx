import SectionLabel from "@/components/SectionLabel";
import { testimonials } from "@/lib/site";

export default function Credentials() {
  return (
    <section
      id="reviews"
      className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20"
    >
      <div className="flex flex-col items-center text-center">
        <SectionLabel>Reviews</SectionLabel>
        <h2 className="mt-5 max-w-2xl title-50 text-balance text-brand-teal">
          What our members say
        </h2>
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-3 lg:gap-6">
        {testimonials.map((t) => (
          <li key={t.author} className="h-full">
            <figure className="flex h-full flex-col justify-between rounded-xl border border-brand-teal/10 bg-white p-5 sm:p-6 shadow-xs">
              <blockquote className="flex-1 text-sm leading-relaxed text-pretty text-brand-teal/85 sm:text-base">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-xs font-medium text-brand-teal/60 sm:text-sm">
                {t.author}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
