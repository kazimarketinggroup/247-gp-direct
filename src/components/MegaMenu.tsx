import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import type { MegaMenu as MegaMenuData, NavItem } from "@/lib/site";
import { cn } from "@/lib/utils";

function LinkColumn({
  title,
  links,
  onNavigate,
  className,
}: {
  title: string;
  links: NavItem[];
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-[11px] tracking-wide text-brand-teal/55">{title}</p>
      <ul className="mt-4 flex flex-col">
        {links.map((link) => (
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
  );
}

export default function MegaMenu({
  data,
  onNavigate,
}: {
  data: MegaMenuData;
  onNavigate?: () => void;
}) {
  const twoColumns = Boolean(data.links2 && data.linksTitle2);

  return (
    <div className="rounded-xl border border-black/5 bg-white p-6 shadow-xl xl:p-8">
      {/* Promo | link column(s) | image. A second link column narrows the
          other tracks rather than widening the panel. */}
      <div
        className={cn(
          "grid gap-6 xl:gap-8",
          twoColumns
            ? "grid-cols-[minmax(0,0.8fr)_minmax(0,0.85fr)_minmax(0,0.85fr)_minmax(0,0.75fr)]"
            : "grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)_minmax(0,0.8fr)] xl:gap-10",
        )}
      >
        <div>
          <p className="text-[11px] tracking-wide text-coral">{data.eyebrow}</p>
          <p className="mt-2 text-2xl leading-tight text-balance text-brand-teal">
            {data.title}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-pretty text-brand-teal/70">
            {data.body}
          </p>
        </div>

        <LinkColumn
          title={data.linksTitle}
          links={data.links}
          onNavigate={onNavigate}
          className="border-l border-brand-teal/10 pl-6 xl:pl-8"
        />

        {twoColumns && (
          <LinkColumn
            title={data.linksTitle2!}
            links={data.links2!}
            onNavigate={onNavigate}
          />
        )}

        {data.promo ? (
          <div className="flex flex-col overflow-hidden rounded-lg bg-mint/60">
            <div className="relative aspect-[16/10] w-full bg-brand-teal/5">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                fill
                sizes="260px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <p className="text-sm leading-snug text-pretty text-brand-teal">
                {data.promo.caption}
              </p>
              <Link
                href={data.promo.href}
                onClick={onNavigate}
                className="group/promo mt-auto inline-flex items-center gap-1.5 pt-3 text-xs text-brand-teal/70 transition-colors hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
              >
                {data.promo.linkLabel}
                <Icon
                  name="arrow-right"
                  className="h-3.5 w-3.5 transition-transform group-hover/promo:translate-x-1"
                />
              </Link>
            </div>
          </div>
        ) : (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-brand-teal/5">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              sizes="320px"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
