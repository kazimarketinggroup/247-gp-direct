import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import type { MegaMenu as MegaMenuData } from "@/lib/site";

export default function MegaMenu({
  data,
  onNavigate,
}: {
  data: MegaMenuData;
  onNavigate?: () => void;
}) {
  return (
    <div className="rounded-xl border border-black/5 bg-white p-6 shadow-xl xl:p-8">
      {/* Promo | links | image. The image drops away below xl where the
          panel gets narrow, so the two text columns keep their width. */}
      <div className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)_minmax(0,0.8fr)] gap-6 xl:gap-10">
        <div>
          <p className="text-[11px] tracking-wide text-coral">{data.eyebrow}</p>
          <p className="mt-2 text-2xl leading-tight text-balance text-brand-teal">
            {data.title}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-pretty text-brand-teal/70">
            {data.body}
          </p>
        </div>

        <div className="border-l border-brand-teal/10 pl-6 xl:pl-8">
          <p className="text-[11px] tracking-wide text-brand-teal/55">
            {data.linksTitle}
          </p>
          <ul className="mt-4 flex flex-col">
            {data.links.map((link) => (
              <li key={link.label} className="border-b border-brand-teal/10 last:border-b-0">
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className="group/link flex items-center justify-between gap-4 py-3 text-sm text-brand-teal transition-colors hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
                >
                  <span className="min-w-0">{link.label}</span>
                  <Icon
                    name="arrow-right"
                    className="h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-brand-teal/5">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            fill
            sizes="320px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
