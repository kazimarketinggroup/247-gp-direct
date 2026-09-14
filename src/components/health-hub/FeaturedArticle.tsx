import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
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

            <Link
              href={featuredArticle.href}
              className="mt-6 inline-flex items-center gap-2 text-sm text-brand-teal transition-colors hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
            >
              <Icon name="arrow-right" className="h-3.5 w-3.5" />
              Read Now
            </Link>
          </div>

          <Link
            href={featuredArticle.href}
            aria-label={featuredArticle.title}
            className="group relative block aspect-video w-full overflow-hidden rounded-xl bg-brand-teal/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
          >
            <Image
              src={featuredArticle.poster}
              alt={featuredArticle.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
