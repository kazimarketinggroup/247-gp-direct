"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function CanceledBanner() {
  const searchParams = useSearchParams();
  const canceled = searchParams.get("canceled");

  if (!canceled) return null;

  return (
    <div className="mx-auto max-w-2xl px-4 pt-6">
      <div className="flex items-center justify-between rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 shadow-sm">
        <div className="flex items-center gap-2.5">
          <svg
            className="h-5 w-5 text-amber-600 shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <span>
            Checkout was canceled. No charges were made. You can choose a plan whenever you&apos;re ready.
          </span>
        </div>
      </div>
    </div>
  );
}

export default function CanceledAlert() {
  return (
    <Suspense fallback={null}>
      <CanceledBanner />
    </Suspense>
  );
}
