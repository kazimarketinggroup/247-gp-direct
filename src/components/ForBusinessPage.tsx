import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

const valueCards = [
  {
    title: "Absence costs more than time off",
    body: "The average employer loses productive hours and management time every time a colleague waits for a GP appointment.",
  },
  {
    title: "Private access works in real life",
    body: "Employees can get a same-day answer, a private prescription, or a referral without the patient admin burden that usually falls to managers.",
  },
  {
    title: "Fast support, low friction",
    body: "A simple annual benefit that removes the need to book around surgery hours, waitlists, or missed working time.",
  },
];

const teamBenefits = [
  "Unlimited GP consultations",
  "24/7 access by phone or video",
  "Private prescriptions delivered to the door",
  "Fast referral letters and clinical guidance",
  "Cover while travelling or away from home",
  "Support for mental health and routine concerns",
  "Digital onward signposting and care navigation",
  "No need to leave work mid-day for a GP visit",
];

const employerBenefits = [
  {
    title: "Simple pricing",
    body: "Clear per-employee annual pricing with no hidden setup or admin fees.",
  },
  {
    title: "No underwritten complexity",
    body: "Rolled out quickly with a low-touch onboarding and existing benefit workflows.",
  },
  {
    title: "Utilisation reporting",
    body: "Access to anonymised data that helps HR and benefits teams understand demand and value.",
  },
  {
    title: "Fast launch",
    body: "Go live in days, not months, with onboarding support from the 247 GP Direct team.",
  },
];

const industries = [
  "Construction",
  "Professional services",
  "Care providers",
  "Hospitality",
  "Logistics",
  "Manufacturing",
  "Tech",
  "Retail",
];

const faqs = [
  "What does the service cover?",
  "Who can access it?",
  "How quickly can employees get seen?",
  "Can the benefit be rolled out across a team?",
  "Does this replace our existing healthcare provision?",
  "How do we measure utilisation?",
];

export default function ForBusinessPage() {
  return (
    <main className="bg-[#f4f1eb] text-brand-teal">
      <section className="mx-auto max-w-[1440px] px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pb-12">
        <div className="overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_rgba(214,229,227,0.9)_32%,_rgba(117,154,148,0.92)_100%)] shadow-[0_20px_60px_rgba(9,55,55,0.08)]">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1.15fr]">
              <div className="max-w-xl">
                <p className="text-[11px] tracking-[0.24em] text-brand-teal/65 uppercase">For business</p>
                <h1 className="mt-4 text-4xl leading-[0.95] tracking-[-0.04em] text-brand-teal sm:text-5xl lg:text-[5rem]">
                  Healthier teams.
                  <span className="mt-2 block">Fewer lost days.</span>
                </h1>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-teal/70 sm:text-lg">
                  247 GP Direct gives employees fast access to a private GP, reducing absence and helping your team get back to work sooner.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-md bg-coral px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
                  >
                    Get started
                  </Link>
                  <Link
                    href="#business-brochure"
                    className="inline-flex items-center justify-center rounded-md border border-brand-teal/15 bg-white/40 px-6 py-3 text-sm font-medium text-brand-teal transition-colors hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
                  >
                    Download brochure
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 text-[11px] text-brand-teal/70 sm:text-xs">
                  <span className="rounded-full border border-brand-teal/10 bg-white/50 px-3 py-1.5">24/7 GP access</span>
                  <span className="rounded-full border border-brand-teal/10 bg-white/50 px-3 py-1.5">No NHS waiting room</span>
                  <span className="rounded-full border border-brand-teal/10 bg-white/50 px-3 py-1.5">Digital reporting</span>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[24px] bg-brand-teal/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.65),_transparent_60%)]" />
                <Image
                  src="/images/for buisness/Screenshot 2026-07-25 190912 1 (1).png"
                  alt="A smiling professional in a modern office"
                  width={1200}
                  height={900}
                  priority
                  className="relative h-[440px] w-full object-cover object-center sm:h-[520px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {valueCards.map((card) => (
            <article key={card.title} className="rounded-2xl border border-brand-teal/10 bg-white/70 p-5 shadow-sm">
              <h2 className="text-xl leading-tight text-brand-teal">{card.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-teal/70">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="rounded-[28px] border border-brand-teal/10 bg-[#edf4f0] p-4 sm:p-6 lg:p-8">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <SectionLabel>The business case</SectionLabel>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.05fr_1.1fr_1.05fr]">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-2xl leading-tight text-brand-teal">What poor GP access costs</h3>
              <p className="mt-4 text-sm leading-relaxed text-brand-teal/70">
                Absence is not just lost productivity. It creates pressure across managers, operations, and payroll while still leaving employees without the care they need.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <Image
                src="/images/for buisness/Group 110.png"
                alt="A business team discussing healthcare support around a table"
                width={800}
                height={520}
                className="h-[220px] w-full object-cover"
              />
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-2xl leading-tight text-brand-teal">Fast support, less friction</h3>
              <p className="mt-4 text-sm leading-relaxed text-brand-teal/70">
                With a private GP benefit in place, your people can speak to a clinician without the delays, bureaucracy, and missed work that normally comes with accessing primary care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <SectionLabel>What your team gets</SectionLabel>
            <ul className="mt-6 space-y-3">
              {teamBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-brand-teal/10 bg-white/70 p-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-coral/10 text-coral">✓</span>
                  <span className="text-sm leading-relaxed text-brand-teal/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2 overflow-hidden rounded-[28px] bg-white shadow-sm ring-1 ring-brand-teal/10">
            <Image
              src="/images/for buisness/Screenshot 2026-07-25 190912 1 (2).png"
              alt="Employees in a workplace meeting"
              width={1200}
              height={900}
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-6">
          <SectionLabel>What you get as the employer</SectionLabel>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {employerBenefits.map((item) => (
            <article key={item.title} className="rounded-2xl border border-brand-teal/10 bg-white p-5 shadow-sm">
              <h3 className="text-xl text-brand-teal">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-teal/70">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-8">
          <SectionLabel>Live in days, not months</SectionLabel>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {[
            ["01", "Agree your plan and sign", "Quick onboarding and benefit setup."],
            ["02", "Send to your team", "Employees receive access and launch guidance."],
            ["03", "Support when it matters", "Urgent care and routine advice from a GP."],
            ["04", "Track value and coverage", "See usage and impact with reporting tools."],
          ].map(([step, title, body]) => (
            <div key={step} className="rounded-2xl border border-brand-teal/10 bg-white p-5 shadow-sm">
              <span className="text-3xl leading-none text-coral">{step}</span>
              <h3 className="mt-4 text-lg text-brand-teal">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-teal/70">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="rounded-[28px] bg-[#eef3f0] p-6 sm:p-8 lg:p-10">
          <div className="mb-6 max-w-xl">
            <SectionLabel>Where it earns its keep</SectionLabel>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry) => (
              <div key={industry} className="rounded-2xl border border-brand-teal/10 bg-white/80 p-4 text-sm text-brand-teal/80 shadow-sm">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="rounded-[28px] bg-brand-teal p-6 text-white shadow-xl sm:p-8">
            <p className="text-[11px] tracking-[0.24em] text-white/60 uppercase">For employers</p>
            <h2 className="mt-5 text-4xl leading-none tracking-[-0.04em] text-white sm:text-5xl">
              £TBC
              <span className="ml-2 text-xl text-white/70">per employee, per year</span>
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li>• 24/7 access to a UK-registered GP</li>
              <li>• Private prescriptions and referral support</li>
              <li>• Simple rollout for whole teams</li>
              <li>• Reporting to support HR and wellbeing planning</li>
            </ul>
          </div>

          <div className="rounded-[28px] border border-brand-teal/10 bg-white p-5 shadow-sm sm:p-6">
            <div className="overflow-hidden rounded-xl border border-brand-teal/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-brand-teal/5 text-brand-teal">
                  <tr>
                    <th className="p-3 font-medium">Benefit</th>
                    <th className="p-3 font-medium">Included</th>
                    <th className="p-3 font-medium">Typical cost</th>
                  </tr>
                </thead>
                <tbody className="text-brand-teal/75">
                  <tr className="border-t border-brand-teal/10">
                    <td className="p-3">Private GP access</td>
                    <td className="p-3">Yes</td>
                    <td className="p-3">£TBC</td>
                  </tr>
                  <tr className="border-t border-brand-teal/10">
                    <td className="p-3">Same-day call-back</td>
                    <td className="p-3">Yes</td>
                    <td className="p-3">Included</td>
                  </tr>
                  <tr className="border-t border-brand-teal/10">
                    <td className="p-3">Prescription support</td>
                    <td className="p-3">Yes</td>
                    <td className="p-3">Included</td>
                  </tr>
                  <tr className="border-t border-brand-teal/10">
                    <td className="p-3">Reporting</td>
                    <td className="p-3">Yes</td>
                    <td className="p-3">Included</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <h2 className="text-3xl tracking-[-0.04em] text-brand-teal sm:text-4xl">The things HR buyers ask</h2>
            <div className="mt-8 space-y-3">
              {faqs.map((faq) => (
                <div key={faq} className="flex items-center justify-between gap-3 rounded-xl border border-brand-teal/10 bg-white p-4 text-left text-brand-teal shadow-sm">
                  <span className="text-sm">{faq}</span>
                  <span className="text-lg text-coral">›</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-brand-teal/10 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] tracking-[0.2em] text-brand-teal/55 uppercase">Request a quote</p>
                <h3 className="mt-2 text-3xl leading-tight text-brand-teal">Six fields. One conversation.</h3>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Your name",
                "Work email",
                "Company name",
                "Team size",
                "Business sector",
                "Requirements",
              ].map((field) => (
                <label key={field} className="block text-sm text-brand-teal/70">
                  <span className="mb-2 block">{field}</span>
                  <input
                    aria-label={field}
                    className="w-full rounded-xl border border-brand-teal/10 bg-[#f8f6f2] px-3 py-2.5 text-sm text-brand-teal outline-none transition focus:border-coral"
                    placeholder=""
                  />
                </label>
              ))}
            </div>

            <button
              type="button"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-coral px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-coral-dark"
            >
              Submit enquiry
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="rounded-[28px] border border-brand-teal/10 bg-[#f6f3ef] p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Brokers and benefits consultants</SectionLabel>
              <h2 className="mt-4 text-3xl tracking-[-0.04em] text-brand-teal sm:text-4xl">We work with partners who want a better employee health benefit.</h2>
            </div>
            <Link
              href="#quote"
              className="inline-flex items-center justify-center rounded-md bg-coral px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-coral-dark"
            >
              Partner with us
            </Link>
          </div>
        </div>
      </section>

      <section id="business-brochure" className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-20">
        <div className="overflow-hidden rounded-[28px] bg-[#eff4f4] p-5 sm:p-6">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Image
                src="/images/for buisness/Rectangle 23.png"
                alt="Healthcare support in the workplace"
                width={900}
                height={600}
                className="h-[240px] w-full rounded-2xl object-cover sm:h-[300px]"
              />
            </div>
            <div className="rounded-2xl bg-white/80 p-5 shadow-sm">
              <p className="text-[11px] tracking-[0.2em] text-brand-teal/55 uppercase">Download</p>
              <h3 className="mt-3 text-2xl leading-tight text-brand-teal">Business overview brochure</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-teal/70">
                Explore how 247 GP Direct helps employers reduce absence, improve access to care, and support healthier teams.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-md bg-brand-teal px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-teal-dark"
              >
                Download brochure
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
