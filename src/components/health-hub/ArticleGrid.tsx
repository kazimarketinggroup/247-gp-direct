import Link from "next/link";
import Icon from "@/components/Icon";
import { articles } from "@/lib/site";

export default function ArticleGrid() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <h2 className="sr-only">Health Hub articles</h2>

      {/* 1 col on phones → 2 on tablets → 3 on desktop. */}
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {articles.map((article) => (
          <li key={article.title} className="h-full">
            <article className="relative flex h-full flex-col rounded-xl bg-white/60 p-5 transition-colors hover:bg-white sm:p-6">
              <p className="text-xs text-brand-teal/55">{article.category}</p>

              <h3 className="mt-3 text-base leading-snug text-pretty text-brand-teal sm:text-lg">
                <Link
                  href={article.href}
                  className="transition-colors hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
                >
                  {/* Stretches the click target over the whole card. */}
                  <span className="absolute inset-0" aria-hidden />
                  {article.title}
                </Link>
              </h3>

              <p className="mt-auto pt-6 text-[11px] text-brand-teal/50">
                {article.meta}
              </p>

              <p className="mt-3 inline-flex items-center gap-2 text-sm text-brand-teal">
                <Icon name="arrow-right" className="h-3.5 w-3.5" />
                Read Now
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
