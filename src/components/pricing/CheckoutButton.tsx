"use client";

import Icon from "@/components/Icon";
import { cn } from "@/lib/utils";
import { useMembershipModal } from "./MembershipModal";

interface CheckoutButtonProps {
  planId: "holiday" | "family";
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}

export default function CheckoutButton({
  planId,
  children,
  className,
  featured = false,
}: CheckoutButtonProps) {
  const { openModal } = useMembershipModal();

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => openModal(planId)}
        className={cn(
          "relative flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-center text-sm font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral cursor-pointer",
          featured
            ? "bg-coral text-white shadow-sm hover:bg-coral-dark"
            : "bg-brand-teal text-white hover:bg-brand-teal-dark",
          className
        )}
      >
        <span>{children}</span>
        <Icon name="arrow-right" className="h-4 w-4 opacity-75" strokeWidth={2} />
      </button>
    </div>
  );
}
