import Image from "next/image";
import SupportCards from "@/components/SupportCards";
import { journeySteps } from "@/lib/site";

export default function JourneySteps() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      {/* Steps take the wide column; the help/emergency cards sit alongside
          from lg and stack underneath on smaller screens. */}
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,17rem)] lg:gap-6 xl:gap-8">
        <ol className="flex flex-col gap-4 sm:gap-5">
          {journeySteps.map((step, i) => (
            <li key={step.title}>
              {/* Thumbnail sits left of the copy from sm; above it on phones. */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-4">
                <div className="relative aspect-[16/10] w-full shrink-0 self-stretch overflow-hidden rounded-xl bg-brand-teal/5 sm:aspect-auto sm:w-24 md:w-28 lg:w-[104px]">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    loading={i < 2 ? "eager" : "lazy"}
                    sizes="(max-width: 640px) 100vw, 112px"
                    className="object-cover"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-center rounded-xl bg-white/70 p-5 sm:p-6">
                  <h2 className="text-base text-pretty text-brand-teal sm:text-lg md:text-xl">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-xs leading-relaxed text-pretty text-brand-teal/70 sm:text-sm">
                    {step.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* items-start stops these cards stretching to the steps column height. */}
        <SupportCards />
      </div>
    </section>
  );
}
