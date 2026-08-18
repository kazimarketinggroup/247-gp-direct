import { familyPage } from "@/lib/site";

/** The "what this service is not" disclaimer panel. */
export default function NotServicePanel() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-mint/50 p-6 sm:p-8">
      {familyPage.notService.map((para) => (
        <p
          key={para.slice(0, 28)}
          className="text-sm leading-relaxed text-pretty text-brand-teal/80"
        >
          {para}
        </p>
      ))}
    </div>
  );
}
