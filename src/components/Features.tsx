const features = [
  {
    title: "Video consultations",
    body: "Speak face to face with a GMC-registered GP from home, work or abroad — no waiting room.",
    icon: "M15 10l4.5-2.5v9L15 14M4 7h9a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2z",
  },
  {
    title: "Private prescriptions",
    body: "Prescriptions sent straight to a pharmacy near you, or delivered to your door the next day.",
    icon: "M12 7v10M7 12h10M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z",
  },
  {
    title: "Specialist referrals",
    body: "Fast-tracked referral letters to consultants and diagnostics across our partner network.",
    icon: "M9 12l2 2 4-4M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z",
  },
  {
    title: "Sick notes",
    body: "Digitally signed fit notes issued during your appointment and accepted by employers.",
    icon: "M9 5h6M9 3h6a1 1 0 011 1v1H8V4a1 1 0 011-1zM8 9h8M8 13h8M8 17h5",
  },
];

export default function Features() {
  return (
    <section
      id="services"
      className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-balance text-slate-900 sm:text-3xl md:text-4xl">
          Everything a surgery does, without the queue
        </h2>
        <p className="mt-3 text-base leading-relaxed text-pretty text-slate-600 sm:mt-4 sm:text-lg">
          Round-the-clock access to primary care, built for people who cannot
          plan illness around opening hours.
        </p>
      </div>

      {/* 1 col → 2 at sm → 4 at lg. Cards stretch so heights stay even per row. */}
      <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md sm:p-6"
          >
            <span
              aria-hidden
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d={feature.icon} />
              </svg>
            </span>
            <h3 className="mt-4 text-base font-semibold text-slate-900 sm:text-lg">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-pretty text-slate-600 sm:text-base">
              {feature.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
