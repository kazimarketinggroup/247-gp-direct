export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand-teal/15 bg-white px-3 py-1.5 text-[11px] font-medium text-brand-teal sm:text-xs">
      <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
      {children}
    </span>
  );
}
