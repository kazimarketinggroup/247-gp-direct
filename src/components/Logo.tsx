import { cn } from "@/lib/utils";

interface LogoProps {
  /** "light" for cream/white backgrounds (e.g. Navbar), "dark" for teal/dark backgrounds (e.g. Footer) */
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "light", className }: LogoProps) {
  const isDark = variant === "dark";

  return (
    <span
      className={cn(
        "inline-flex items-center text-[20px] leading-none tracking-normal select-none transition-opacity hover:opacity-90",
        className,
      )}
      style={{ fontFamily: "var(--font-chivo), sans-serif", fontWeight: 600 }}
      aria-label="247 GP Direct"
    >
      <span className="text-coral">247</span>
      <span className={cn("ml-1.5", isDark ? "text-white" : "text-brand-teal")}>
        GP Direct
      </span>
    </span>
  );
}
