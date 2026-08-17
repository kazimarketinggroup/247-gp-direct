import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import { credentials, testimonials } from "@/lib/site";

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20"
    >
      <div className="flex flex-col items-center text-center">
        <SectionLabel>Credentials</SectionLabel>
        <h2 className="mt-5 max-w-2xl title-50 text-balance text-brand-teal">
          A regulated service, not an app
        </h2>
      </div>

      {/* Logos wrap centred; each keeps its intrinsic ratio via h-* w-auto. */}
      <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:mt-10 sm:gap-x-12">
        {credentials.map((logo) => (
          <li key={logo.alt} className="flex items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-9 w-auto object-contain sm:h-11"
            />
          </li>
        ))}
      </ul>

      <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 md:grid-cols-3 lg:gap-6">
        {testimonials.map((t) => (
          <li key={t.author} className="h-full">
            <figure className="flex h-full flex-col rounded-xl border border-brand-teal/10 bg-white p-5 sm:p-6">
              <blockquote className="flex-1 text-sm leading-relaxed text-pretty text-brand-teal/85 sm:text-base">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-xs text-brand-teal/55 sm:text-sm">
                {t.author}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
