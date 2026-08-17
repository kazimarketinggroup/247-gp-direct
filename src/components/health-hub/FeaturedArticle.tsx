import Image from "next/image";
import Link from "next/link";
import { featuredArticle } from "@/lib/site";

export default function FeaturedArticle() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <div className="rounded-2xl bg-white/70 p-5 sm:p-6 lg:p-8">
        {/* Copy above the poster on phones; side by side from lg. */}
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col items-start">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] text-brand-teal ring-1 ring-brand-teal/10 sm:text-xs">
              <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" />
              {featuredArticle.category}
            </span>

            <h2 className="mt-4 text-xl leading-snug text-pretty text-brand-teal sm:text-2xl lg:text-[1.75rem]">
              <Link
                href={featuredArticle.href}
                className="transition-colors hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
              >
                {featuredArticle.title}
              </Link>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-pretty text-brand-teal/70">
              {featuredArticle.body}
            </p>

            <p className="mt-6 text-xs text-brand-teal/50">
              {featuredArticle.reviewer}
            </p>
          </div>

          <Link
            href={featuredArticle.href}
            aria-label={`Play video: ${featuredArticle.title}`}
            className="group relative block aspect-video w-full overflow-hidden rounded-xl bg-brand-teal/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
          >
            <Image
              src={featuredArticle.poster}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <span
              aria-hidden
              className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/85 shadow-lg transition-transform group-hover:scale-105 sm:h-16 sm:w-16">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-0.5 h-6 w-6 text-brand-teal sm:h-7 sm:w-7"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
            <span className="absolute bottom-3 right-3 rounded bg-black/55 px-2 py-0.5 text-[11px] text-white">
              {featuredArticle.duration}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
