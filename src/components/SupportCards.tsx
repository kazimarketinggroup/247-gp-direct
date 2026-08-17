import Icon from "@/components/Icon";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Member-line and emergency cards. Shared by How It Works and
 * Regulation & Compliance, which place them in a side column.
 */
export default function SupportCards({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-start lg:flex-col lg:gap-5",
        className,
      )}
    >
      <div className="w-full rounded-xl bg-brand-teal p-5 text-white sm:flex-1 sm:p-6">
        <p className="text-[11px] tracking-wide text-coral uppercase">Need help</p>
        <p className="mt-3 text-xl leading-tight text-balance sm:text-2xl">
          Call the member line.
        </p>
        <p className="mt-3 text-xs leading-relaxed text-pretty text-white/70 sm:text-sm">
          Members can call any time. Our team will help with the next step.
        </p>
        <a
          href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`}
          className="mt-5 inline-flex items-center gap-2 rounded-md bg-coral px-4 py-2.5 text-sm whitespace-nowrap text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {siteConfig.phoneDisplay}
          <Icon name="arrow-right" className="h-4 w-4" />
        </a>
      </div>

      <div className="w-full rounded-xl bg-coral p-5 text-white sm:flex-1 sm:p-6">
        <p className="text-base text-balance sm:text-lg">
          This is not an emergency service.
        </p>
        <p className="mt-3 text-xs leading-relaxed text-pretty text-white/90 sm:text-sm">
          If someone is seriously unwell or you believe their life is at risk,
          call 999. For urgent advice, call NHS 111.
        </p>
      </div>
    </div>
  );
}
