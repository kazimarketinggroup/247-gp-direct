import Image from "next/image";
import Link from "next/link";
import Icon, { type IconName } from "@/components/Icon";
import SectionLabel from "@/components/SectionLabel";
import { businessPage, howItWorksAssurances } from "@/lib/site";

type PageKind = "rollout" | "utilisation" | "sectors" | "brokers";

type PageCopy = {
  kind: PageKind;
  title: string;
  intro: string;
  background: string;
  firstTitle: string;
  firstBody: string[];
  secondTitle: string;
  secondBody: string[];
  asideTitle?: string;
  asideLabel?: string;
};

const pageCopy: Record<PageKind, PageCopy> = {
  rollout: {
    kind: "rollout",
    title: "Rollout & Implementation",
    intro: "Understand how a business membership can be introduced clearly and simply to your team.",
    background: "/images/_business-subpages/Screenshot 2026-07-25 190912 1 (4).png",
    firstTitle: "A simple launch process",
    firstBody: [
      "Implementation is designed to be clear for HR teams and employees. We can help shape the launch message, member instructions, and internal communications.",
      "The aim is to make access understandable from day one, with a straightforward route for employees who need support.",
    ],
    secondTitle: "From setup to launch",
    secondBody: [
      "The rollout journey may include agreeing eligibility, confirming member data, preparing communications, and sharing the member contact route.",
      "Implementation stages, responsibilities, and lead times will be confirmed in the employer onboarding plan.",
    ],
  },
  utilisation: {
    kind: "utilisation",
    title: "Utilisation Reporting",
    intro: "Learn about the information employers may receive to understand how the benefit is being used.",
    background: "/images/_business-subpages/Screenshot 2026-07-25 190912 1 (2).png",
    firstTitle: "Understand how the benefit is used",
    firstBody: [
      "Employers may receive high-level utilisation information to understand engagement with the benefit and support future wellbeing planning.",
      "Reporting should be designed to protect confidentiality and avoid exposing individual employee health information.",
    ],
    secondTitle: "Useful insight, respectful boundaries",
    secondBody: [
      "Reports may include aggregate usage trends, access volumes, or member engagement indicators. They should not identify individual consultations or diagnoses.",
      "The exact reporting format, frequency, and minimum group thresholds are to be confirmed.",
    ],
  },
  sectors: {
    kind: "sectors",
    title: "Sectors We Work With",
    intro: "Explore how private GP access can support teams across different sectors and working patterns.",
    background: "/images/_business-subpages/Screenshot 2026-07-25 190912 1 (3).png",
    firstTitle: "Support for different working patterns",
    firstBody: [
      "Remote GP access can be useful for office teams, distributed workforces, shift workers, and organisations with people across multiple locations.",
      "The service can be introduced as part of a wider benefits package or as a focused healthcare benefit.",
    ],
    secondTitle: "A flexible employer conversation",
    secondBody: [
      "We will take time to understand your workforce, employee needs, and existing health provision before recommending a plan.",
      "Sector-specific examples and case studies will be added as they become available.",
    ],
  },
  brokers: {
    kind: "brokers",
    title: "Brokers & Partners",
    intro: "Information for brokers and partners interested in offering 247 GP Direct to organisations.",
    background: "/images/_business-subpages/Screenshot 2026-07-25 190912 1 (5).png",
    firstTitle: "Work with 247 GP Direct",
    firstBody: [
      "We welcome conversations with brokers, advisers, and partners who want to offer practical private GP access to their clients.",
      "Our team can provide an overview of the membership proposition, eligibility, implementation, and commercial process.",
    ],
    secondTitle: "A clear partner experience",
    secondBody: [
      "Partner support may include product information, client-ready materials, and a defined route for introducing organisations to the service.",
      "Partner terms, materials, and referral arrangements are to be confirmed.",
    ],
    asideLabel: "Partner with 247 GP Direct",
    asideTitle: "Brokers and benefits consultants",
  },
};

export default function BusinessDetailPage({ kind }: { kind: PageKind }) {
  const copy = pageCopy[kind];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-cream">
        <Image
          src={copy.background}
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="pointer-events-none -z-10 object-cover object-center"
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-white/35" />
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="max-w-xl">
            <SectionLabel>For Business</SectionLabel>
            <h1 className="title-50 mt-5 text-balance text-brand-teal">{copy.title}</h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-pretty text-brand-teal/75 sm:text-base">
              {copy.intro}
            </p>
            <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              {howItWorksAssurances.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[11px] text-brand-teal/75 sm:text-xs">
                  <span aria-hidden className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-teal">
                    <Icon name="check" className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white/35">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          {copy.kind === "rollout" && <RolloutSteps />}

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(17rem,0.7fr)] lg:gap-16">
            <div className="space-y-10">
              <CopyBlock title={copy.firstTitle} paragraphs={copy.firstBody} />
              <CopyBlock title={copy.secondTitle} paragraphs={copy.secondBody} />
            </div>
            <NeedHelpCard
              label={copy.asideLabel ?? "Need help"}
              title={copy.asideTitle ?? "Tell us about your organisation"}
              href={copy.kind === "brokers" ? "/contact" : "/business/request-a-quote"}
              cta={copy.kind === "brokers" ? "Partner enquiry" : "Request a Quote"}
            />
          </div>

          {copy.kind === "sectors" && <SectorGrid />}
        </div>
      </section>
    </>
  );
}

function CopyBlock({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <div>
      <h2 className="text-2xl leading-tight text-balance text-brand-teal sm:text-3xl">{title}</h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="mt-5 max-w-2xl text-sm leading-relaxed text-pretty text-brand-teal/70">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function RolloutSteps() {
  return (
    <section className="mb-12 sm:mb-16">
      <h2 className="text-2xl leading-tight text-balance text-brand-teal sm:text-3xl">{businessPage.rolloutTitle}</h2>
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-pretty text-brand-teal/75">{businessPage.rolloutIntro}</p>
      <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {businessPage.rolloutSteps.map((step, index) => (
          <li key={step.number} className={index > 0 ? "border-brand-teal/15 lg:border-l lg:pl-6" : undefined}>
            <span aria-hidden className="text-3xl text-brand-teal/25 sm:text-4xl">{step.number}</span>
            <h3 className="mt-3 text-sm leading-relaxed text-brand-teal sm:text-base">{step.title}</h3>
            <p className="mt-2 text-xs text-brand-teal/65">{step.day}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function SectorGrid() {
  return (
    <section className="mt-14 sm:mt-18">
      <h2 className="text-2xl leading-tight text-balance text-brand-teal sm:text-3xl">{businessPage.sectorsTitle}</h2>
      <div className="mt-6 overflow-hidden rounded-lg bg-white/70">
        <ul className="grid grid-cols-1 gap-px bg-brand-teal/10 sm:grid-cols-2 lg:grid-cols-3">
          {businessPage.sectors.map((sector) => (
            <li key={sector.title} className="bg-white/75 p-6">
              <h3 className="flex items-center gap-2.5 text-sm text-brand-teal sm:text-base">
                <Icon name={sector.icon as IconName} className="h-4 w-4 shrink-0 text-brand-teal/65" strokeWidth={1.6} />
                {sector.title}
              </h3>
              <p className="mt-4 text-xs leading-relaxed text-pretty text-brand-teal/70">{sector.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function NeedHelpCard({ label, title, href, cta }: { label: string; title: string; href: string; cta: string }) {
  return (
    <aside className="flex flex-col justify-between rounded-lg bg-brand-teal p-6 text-white sm:p-8">
      <div>
        <p className="text-[11px] uppercase tracking-wide text-coral">{label}</p>
        <h2 className="mt-3 text-2xl leading-tight text-balance sm:text-3xl">{title}</h2>
        <p className="mt-7 text-sm leading-relaxed text-pretty text-white/75">
          Tell us about your organisation and we will explain the next steps for business cover.
        </p>
      </div>
      <Link href={href} className="mt-10 inline-flex w-fit items-center gap-2 rounded-md bg-coral px-5 py-3 text-xs text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral">
        {cta}
        <Icon name="arrow-right" className="h-3.5 w-3.5" />
      </Link>
    </aside>
  );
}
