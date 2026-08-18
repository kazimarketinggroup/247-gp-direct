import Image from "next/image";
import { familyPage } from "@/lib/site";

export default function AudienceCards() {
  return (
    <section
      id="who-its-for"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
    >
      <p className="text-xs text-brand-teal/55">Who it&apos;s for</p>
      <div className="mt-3 border-t border-coral/40 pt-6 sm:pt-8">
        <h2 className="title-50 text-balance text-brand-teal">
          {familyPage.audienceTitle}
        </h2>
      </div>

      {/* 1 → 2 → 3 columns; cards stretch so their headers stay aligned. */}
      <ul className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {familyPage.audiences.map((item) => (
          <li key={item.tag} className="h-full">
            <article className="flex h-full flex-col overflow-hidden rounded-xl">
              <p className="rounded-t-xl bg-brand-teal px-4 py-2.5 text-xs text-white">
                {item.tag}
              </p>

              <div className="relative aspect-[4/3] w-full bg-brand-teal/5">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col pt-5">
                <h3 className="text-base leading-snug text-pretty text-brand-teal sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-pretty text-brand-teal/70 sm:text-sm">
                  {item.body}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
