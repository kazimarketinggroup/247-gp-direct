import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { articleContent, siteConfig } from "@/lib/site";

/* ── Static params for pre-rendering ────────────────────────── */
export function generateStaticParams() {
  return Object.keys(articleContent).map((slug) => ({ slug }));
}

/* ── Dynamic metadata ───────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articleContent[slug];
  if (!article) return {};
  return {
    title: `${article.title} — 247 GP Direct`,
    description: article.sections[0]?.paragraphs?.[0] ?? "",
  };
}

/* ── Page component ─────────────────────────────────────────── */
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articleContent[slug];
  if (!article) notFound();

  return (
    <>
      {/* ── Hero banner ─────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="mx-auto w-full max-w-7xl px-4 pb-10 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pt-20">
          <SectionLabel>{article.category}</SectionLabel>
          <h1 className="title-50 mt-5 max-w-2xl text-balance text-brand-teal">
            {article.title}
          </h1>
        </div>
      </section>

      {/* ── Body + sidebar ──────────────────────────────────── */}
      <section className="bg-cream-dark">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
            {/* Article body */}
            <article className="rounded-2xl bg-white/70 p-6 sm:p-8 lg:p-10">
              {article.sections.map((section, i) => (
                <div key={i} className={i > 0 ? "mt-6" : ""}>
                  {section.heading && (
                    <h2
                      className={`mb-3 text-base sm:text-lg ${
                        section.headingColor === "coral"
                          ? "text-coral"
                          : "text-brand-teal"
                      }`}
                    >
                      {section.heading}
                    </h2>
                  )}

                  {section.paragraphs?.map((para, j) => (
                    <p
                      key={j}
                      className="mb-3 text-sm leading-relaxed text-pretty text-brand-teal/80"
                    >
                      {para}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="mb-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-brand-teal/80">
                      {section.bullets.map((bullet, k) => (
                        <li key={k}>
                          <span className="text-brand-teal/80">
                            {(() => {
                              const colonIdx = bullet.indexOf(":");
                              if (colonIdx > -1 && colonIdx < 40) {
                                return (
                                  <>
                                    <span className="text-brand-teal">
                                      {bullet.slice(0, colonIdx + 1)}
                                    </span>
                                    {bullet.slice(colonIdx + 1)}
                                  </>
                                );
                              }
                              return bullet;
                            })()}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.callout && (
                    <div className="my-4 rounded-xl bg-brand-teal px-5 py-4 text-sm leading-relaxed text-white/90">
                      {section.callout}
                    </div>
                  )}

                  {section.decisionTable && (
                    <div className="my-6 rounded-xl bg-brand-teal px-5 py-5 sm:px-6 sm:py-6">
                      <h3 className="mb-4 text-base text-white sm:text-lg">
                        {section.decisionTable.title}
                      </h3>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                        {section.decisionTable.rows.map(
                          ([left, right], idx) => (
                            <div key={idx} className="contents">
                              <p
                                className={`text-sm ${
                                  idx === 0
                                    ? "text-white/60"
                                    : "text-white/90"
                                }`}
                              >
                                {left}
                              </p>
                              <p
                                className={`text-sm ${
                                  idx === 0
                                    ? "text-white/60"
                                    : "text-white"
                                }`}
                              >
                                {right}
                              </p>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </article>

            {/* Sidebar */}
            <aside className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
              {/* Need Help card */}
              <div className="rounded-2xl bg-brand-teal p-6 text-white sm:p-8">
                <p className="text-[11px] tracking-wider text-white/60 uppercase">
                  Need Help
                </p>
                <h3 className="mt-2 text-2xl leading-snug sm:text-3xl">
                  Call the
                  <br />
                  member line.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  Members can call any time. Our team will help with the next
                  step.
                </p>
                <Link
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="mt-5 inline-flex items-center gap-2 rounded-md bg-coral px-5 py-2.5 text-sm text-white transition-colors hover:bg-coral-dark"
                >
                  {siteConfig.phoneDisplay}
                  <span aria-hidden>→</span>
                </Link>
              </div>

              {/* Not an emergency */}
              <div className="rounded-2xl bg-mint/50 p-6 sm:p-8">
                <h3 className="text-lg text-coral sm:text-xl">
                  This is not an
                  <br />
                  emergency service.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-teal/70">
                  If someone is seriously unwell or you believe their life is at
                  risk, call 999. For urgent advice, call NHS 111.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
