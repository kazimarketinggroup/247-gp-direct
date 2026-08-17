export type MegaMenu = {
  /** Left promo column. */
  eyebrow: string;
  title: string;
  body: string;
  /** Heading above the link list. */
  linksTitle: string;
  links: NavItem[];
  image: { src: string; alt: string };
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
  /** When present the desktop dropdown renders as a full-width mega menu. */
  mega?: MegaMenu;
};

export const siteConfig = {
  name: "247 GP Direct",
  phone: "0800 123 4567",
  phoneDisplay: "1234 567 8900",
  bookingLine: "0800 123 4567",
  membersNote: "Members: call any time, no appointment needed",
};

export const navItems: NavItem[] = [
  {
    label: "For You & Your Family",
    href: "#family",
    children: [
      { label: "Individual cover", href: "#individual" },
      { label: "Family plans", href: "#family-plans" },
      { label: "Cover while travelling", href: "#travel" },
    ],
  },
  {
    label: "For Business",
    href: "#business",
    children: [
      { label: "Employee benefits", href: "#benefits" },
      { label: "Case studies", href: "#case-studies" },
      { label: "Request a quote", href: "#quote" },
    ],
  },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Health Hub", href: "/health-hub" },
  {
    label: "About",
    href: "/about",
    // Children drive the mobile accordion; `mega` drives the desktop panel.
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Clinical Standards & Governance", href: "#clinical" },
      { label: "Regulation & Compliance", href: "/regulation" },
      { label: "Meet the Clinical Team", href: "#clinical-team" },
      { label: "Contact Us", href: "#contact" },
    ],
    mega: {
      eyebrow: "FOR YOU & YOUR FAMILY",
      title: "Unlimited private GP appointments",
      body: "for you and your family, 24/7. Keep your NHS GP. Add private care when you need it..",
      linksTitle: "ABOUT 247 GP DIRECT",
      links: [
        { label: "Our Story", href: "/about" },
        { label: "Clinical Standards & Governance", href: "#clinical" },
        { label: "Regulation & Compliance", href: "/regulation" },
        { label: "Meet the Clinical Team", href: "#clinical-team" },
        { label: "Contact Us", href: "#contact" },
      ],
      image: {
        src: "/images/about/mega-menu-family.png",
        alt: "A mother and her daughter using a phone together at the kitchen table",
      },
    },
  },
];

export const problemStats = [
  {
    value: "1 in 7 (TBC)",
    body: "patients wait more than four weeks for a GP appointment in England.",
    source: "Source: figure to be verified against current NHS England GP appointment data (2025).",
  },
  {
    value: "Millions (TBC)",
    body: "of attempts to contact a surgery fail at the first try each year.",
    source: "Source: figure to be verified against current GP Patient Survey data (2025).",
  },
  {
    value: "2,000+ (TBC)",
    body: "patients on the list of a typical full-time equivalent GP.",
    source: "Source: figure to be verified against current NHS Digital workforce data (2025).",
  },
];

export const steps = [
  {
    number: "01",
    title: "Call the 24/7 line",
    body: "Answered any hour of any day by trained UK-based operators, not an answerphone.",
    note: "No hold music. No automated menus. No Call Center. A person picks up.",
  },
  {
    number: "02",
    title: "Speak to a GP",
    body: "Called back within our service window, by phone or video your choice.",
    note: "Every GP is GMC-registered and currently practising in the UK.",
  },
  {
    number: "03",
    title: "Get what you need",
    body: "Advice, a diagnosis, a private prescription delivered to your door, or a referral letter.",
    note: "Most consultations end with a clear answer. Many need no further contact at all.",
  },
];

export const included = [
  {
    title: "Unlimited appointments",
    body: "No per-call charges, no fair-use catch.",
    icon: "clock",
  },
  {
    title: "24/7/365 availability",
    body: "Nights, weekends and bank holidays.",
    icon: "shield",
  },
  {
    title: "Whole family covered",
    body: "Partner and dependent children on a family plan.",
    icon: "users",
  },
  {
    title: "Phone or video",
    body: "Your choice at the point of booking.",
    icon: "video",
  },
  {
    title: "Private prescriptions",
    body: "Issued electronically, delivered to your door.",
    icon: "pill",
  },
  {
    title: "Cover while travelling",
    body: "The service works wherever you are.",
    icon: "globe",
  },
  {
    title: "Referral letters",
    body: "Open referrals to private consultants.",
    icon: "document",
  },
  {
    title: "Keep your NHS GP",
    body: "No Hassle, No de-registration, ever.",
    icon: "heart",
  },
];

export const plans = [
  {
    name: "INDIVIDUAL",
    price: "£TBC",
    period: "/year",
    sub: "£TBC a month",
    covers: "One person",
    features: [
      "Unlimited GP consultations",
      "24/7 access",
      "Phone or video",
      "Private prescriptions",
      "Referral letters",
      "Cover abroad",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "FAMILY",
    price: "£TBC",
    period: "/year",
    sub: "£TBC a month",
    covers: "You, your partner & children",
    features: [
      "Everything in Individual",
      "Partner included",
      "Dependent children included",
      "All ages, one price",
      "One annual invoice",
    ],
    cta: "Get Started",
    featured: true,
    badge: "Most popular",
  },
  {
    name: "COUPLE",
    price: "£TBC",
    period: "/year",
    sub: "£TBC a month",
    covers: "You and your partner",
    features: [
      "Everything in Individual",
      "Partner included on one plan",
      "Shared or separate bookings",
    ],
    cta: "Get Started",
    featured: false,
  },
];

export const planAssurances = [
  "No medical questionnaire nobody is refused for a pre-existing condition",
  "14-day cooling-off period, in full, no questions asked",
  "No Call Center. No hidden per-call charges, ever",
  "You can Cancel or change your plan at renewal",
];

export const credentials = [
  {
    src: "/images/home/cqc-registered.png",
    alt: "Registered with the Care Quality Commission",
    width: 300,
    height: 120,
  },
  {
    src: "/images/home/gmc-registered.png",
    alt: "GMC Registered Doctors",
    width: 300,
    height: 120,
  },
  {
    src: "/images/home/ico-registered.png",
    alt: "ICO Registered",
    width: 180,
    height: 120,
  },
  {
    src: "/images/home/cyber-essentials.png",
    alt: "Cyber Essentials certified",
    width: 300,
    height: 120,
  },
];

export const testimonials = [
  {
    quote: "Got my daughter seen at 11pm on a Sunday. We didn't have to sit in A&E.",
    author: "Jenifer Blaze",
  },
  {
    quote: "I was on a site in Aberdeen with a chest infection. Prescription arrived at the hotel the next morning.",
    author: "Dan M., Bristol",
  },
  {
    quote: "I manage my mum's appointments as well as my own. Not having to ration who gets seen is the whole point.",
    author: "Priya S., Reading",
  },
];

export const faqs = [
  {
    q: "Do I have to leave my NHS GP?",
    a: "No. 247 GP Direct works alongside your NHS GP. Nothing changes there.",
  },
  {
    q: "Is this a subscription?",
    a: "Yes. You pay one annual fee that covers unlimited consultations for everyone on your plan. There are no per-call charges on top.",
  },
  {
    q: "Who is covered on a family plan, and up to what age?",
    a: "You, your partner and your dependent children. All ages are covered at one price — final age limits will be confirmed at client sign-off.",
  },
  {
    q: "How quickly will a GP call me back?",
    a: "The line is answered 24/7 by a UK-based operator, and a GP calls you back within our published service window.",
  },
  {
    q: "Can the GP prescribe medication?",
    a: "Yes. GPs can issue private prescriptions electronically, delivered to your door or to a pharmacy near you.",
  },
];

export const howItWorksAssurances = [
  "CQC-registered",
  "GMC-registered UK GPs",
  "Data secured to NHS standards",
];

export const journeySteps = [
  {
    title: "Choose your plan and join online",
    body: "Takes about three minutes. Card or direct debit. You'll need names and dates of birth for anyone else on the plan. No medical questions at any point.",
    image: "/images/how-it-works/step-1-join.png",
    alt: "A couple entering their card details to join a plan together",
  },
  {
    title: "Your welcome pack arrives",
    body: "By email, immediately. It contains your membership number, the 24/7 booking line, and a wallet card you can save to your phone. Cover starts straight away. (Qualifying period to be confirmed.)",
    image: "/images/how-it-works/step-2-welcome-pack.png",
    alt: "A parent reading her welcome email on a laptop with her child beside her",
  },
  {
    title: "Call the booking line",
    body: "Tell the operator which you'd prefer. Video appointments come with a secure link sent by text or email. Video is best when something needs to be seen.",
    image: "/images/how-it-works/step-3-booking-line.png",
    alt: "A woman calling the booking line from her laptop desk",
  },
  {
    title: "The GP calls you back",
    body: "Within our published service window. Consultations typically run around ten minutes but continue as long as clinically necessary. Callback standard to be inserted from the client's evidenced figure.",
    image: "/images/how-it-works/step-4-gp-callback.png",
    alt: "A GP speaking to a patient from his consulting room",
  },
  {
    title: "You get an outcome",
    body: "Advice and reassurance, a diagnosis, a private prescription, a referral letter, or a recommendation to be seen in person. Calls are recorded for audit and quality.",
    image: "/images/how-it-works/step-5-outcome.png",
    alt: "A patient in a video consultation with a doctor on screen",
  },
  {
    title: "Follow-up if you need it",
    body: "Call again the same day if things change. There is no charge and no limit. Unlimited means unlimited.",
    image: "/images/how-it-works/step-6-follow-up.png",
    alt: "A woman following up with the service by phone from her sofa",
  },
];

export const journeyNotes = [
  {
    title: "Your first 24 hours as a member",
    body: "Save the booking number to your phone, add the wallet card, and forward the welcome email to anyone else on your plan so they can use it too.",
  },
  {
    title: "What to have ready before you call",
    body: "Your membership number, a list of current medication, any allergies, and a rough timeline of symptoms. This one panel measurably improves consultation quality.",
  },
  {
    title: "Using it for your children",
    body: "A parent or guardian should be present for a child's consultation. Consent and age thresholds to be confirmed with the clinical provider.",
  },
];

/** Comparison table. `true` renders a tick; a string renders as text. */
export const comparisonRows: Array<{
  label: string;
  individual: string | true;
  couple: string | true;
  family: string | true;
}> = [
  {
    label: "Who's covered",
    individual: "One adult",
    couple: "Two adults",
    family: "Two adults + children",
  },
  { label: "Unlimited appointments", individual: true, couple: true, family: true },
  { label: "24/7, 365 days a year", individual: true, couple: true, family: true },
  { label: "Phone or video", individual: true, couple: true, family: true },
  { label: "Private prescriptions", individual: true, couple: true, family: true },
  { label: "Referral letters", individual: true, couple: true, family: true },
  { label: "Cover abroad", individual: true, couple: true, family: true },
  { label: "Notes to your NHS GP", individual: true, couple: true, family: true },
  {
    label: "Contract length",
    individual: "12 months",
    couple: "12 months",
    family: "12 months",
  },
];

export const pricingAssuranceCards = [
  "No medical questionnaire and no health screening nobody is refused for a pre-existing condition (to be confirmed)",
  "14-day cooling-off period, in full, no questions",
  "No hidden per-call charges",
  "Cancel or change your plan at renewal",
];

export const joinSteps = [
  "1. Choose your plan",
  "2. Your details",
  "3. Payment",
  "4. Confirmation",
];

export const joinPlanOptions = [
  { id: "individual", name: "Individual", detail: "One adult" },
  { id: "couple", name: "Couple", detail: "Two adults at the same address" },
  { id: "family", name: "Family", detail: "Two adults and dependent children" },
];

export const aboutPage = {
  title: "Built around one problem: getting seen",
  intro:
    "247 GP Direct exists because access to a GP has become the hardest part of ordinary healthcare — not the medicine, the appointment.",
  promiseTitle: "We provide unlimited access to UK-qualified private GPs",
  commitmentTitle: "Our commitment to members",
  commitments: [
    "The line is answered by a person, at any hour.",
    "No per-call charges, ever.",
    "No medical questionnaire and no age loading.",
    "Clear limits, stated plainly, including what we cannot do.",
    "Your NHS registration stays exactly as it is.",
  ],
  paragraphs: [
    "We provide unlimited access to UK-qualified private GPs, 24 hours a day, 365 days a year, by telephone and video consultation, on a single annual subscription. Members call one number and speak to a doctor — at 8am on a Tuesday or 2am on a Sunday.",
    "We do not ask members to leave their NHS surgery, and we never will. This service is the layer that sits underneath NHS care: the everyday questions, the sudden temperatures, the infections that need answering tonight rather than a fortnight from now.",
    "Consultations are delivered by our clinical provider and prescriptions are dispensed by a registered UK pharmacy partner. Both are named here in full once contractual confirmation is received.",
  ],
};

export const regulationPage = {
  title: "Who regulates us, and what that actually means",
  intro:
    "Clinical governance is how we run the service day to day. Regulation is the external framework we answer to. This page sets out the bodies involved, what each one covers, and the legal obligations attached.",
  regulators: [
    {
      name: "Care Quality Commission (CQC)",
      role: "Regulator of the service in England",
      body: "Remote consultation providers that carry out the regulated activity of 'treatment of disease, disorder or injury' must register with the CQC. Our registration status and provider ID are published here verbatim once written confirmation is received. Nothing is claimed before it is evidenced.",
    },
    {
      name: "General Medical Council (GMC)",
      role: "Regulator of the individual doctors",
      body: "The GMC licenses and revalidates every GP who takes a member call. GMC numbers can be checked by any member on the public register. The GMC regulates the doctor; the CQC regulates the service — the two are separate and both apply.",
    },
    {
      name: "General Pharmaceutical Council (GPhC)",
      role: "Regulator of the dispensing pharmacy",
      body: "Private prescriptions raised by our GPs are dispensed by a GPhC-registered pharmacy operating under its own registration. We do not dispense medicines ourselves.",
    },
    {
      name: "MHRA and prescribing law",
      role: "Medicines legislation",
      body: "Prescribing follows the Human Medicines Regulations 2012 and GMC remote prescribing guidance. Controlled drugs, opioids and certain high-risk medicines are outside the scope of this service.",
    },
    {
      name: "Information Commissioner's Office (ICO)",
      role: "Data protection regulator",
      body: "We are registered as a data controller with the ICO. Health data is special category data under UK GDPR and the Data Protection Act 2018; our lawful bases, retention periods and your rights are set out in the privacy notice.",
    },
  ],
  wider: {
    title: "Beyond healthcare regulation",
    intro:
      "A subscription health service is also a consumer product and a data processor. Those rules apply too.",
    items: [
      {
        title: "Advertising and claims (ASA / CAP)",
        body: "Health claims in our marketing follow the CAP Code. We do not advertise outcomes, waiting times or clinical results that we cannot substantiate, and we do not display a regulatory badge we have not earned.",
      },
      {
        title: "Consumer law",
        body: "Subscriptions are sold under the Consumer Contracts Regulations 2013 and the Consumer Rights Act 2015, including the 14-day cancellation right set out in our cancellation and refunds policy.",
      },
      {
        title: "Safeguarding",
        body: "We operate safeguarding policies for children and adults at risk, with a named safeguarding lead and a defined route for raising concerns with local authority services.",
      },
      {
        title: "Accessibility",
        body: "This website is built to WCAG 2.2 AA. If any part of the service is difficult to use, contact us and we will provide an alternative route to care.",
      },
      {
        title: "Equality",
        body: "We meet our duties under the Equality Act 2010, including reasonable adjustments for members with disabilities or communication needs.",
      },
      {
        title: "Escalation beyond us",
        body: "If a complaint cannot be resolved through our complaints procedure, independent private healthcare complaints can be escalated externally. The named escalation body is confirmed in the complaints policy.",
      },
    ],
  },
  standardsCta: {
    title: "Looking for our clinical standards instead?",
    body: "How GPs are recruited and vetted, how consultations are audited, how prescriptions are authorised and how complaints are handled internally are covered on the clinical standards & governance page.",
    label: "Clinical standards & governance",
    href: "#clinical",
  },
};

export const featuredArticle = {
  category: "Featured · Access & waiting",
  title: "Can't get through to your surgery? What your options actually are",
  body: "A practical run-through of NHS routes, pharmacy first, 111 and private options and when each one is the right call.",
  reviewer: "Reviewed by [Clinician name], [role] · [date]",
  poster: "/images/health-hub/featured-video-poster.png",
  duration: "0:15",
  href: "#featured-article",
};

export const articles = [
  {
    category: "Access & waiting",
    title: "How long are GP waits right now?",
    meta: "6 min read · Reviewed : 12th August 2026",
    href: "#gp-waits",
  },
  {
    category: "Access & waiting",
    title: "What to do when you can't get an appointment",
    meta: "6 min read · Reviewed : 12th August 2026",
    href: "#no-appointment",
  },
  {
    category: "Private vs NHS",
    title: "Private GP vs NHS: what's the difference?",
    meta: "6 min read · Reviewed : 12th August 2026",
    href: "#private-vs-nhs",
  },
  {
    category: "Private vs NHS",
    title: "Do you have to leave your NHS GP?",
    meta: "6 min read · Reviewed : 12th August 2026",
    href: "#leave-nhs-gp",
  },
  {
    category: "Practical health",
    title: "When to see a GP about a cough",
    meta: "6 min read · Reviewed : 12th August 2026",
    href: "#cough",
  },
  {
    category: "Practical health",
    title: "Children's fevers: when to worry",
    meta: "6 min read · Reviewed : 12th August 2026",
    href: "#childrens-fevers",
  },
  {
    category: "Prescriptions",
    title: "How private prescriptions work",
    meta: "6 min read · Reviewed : 12th August 2026",
    href: "#prescriptions-work",
  },
  {
    category: "Employers",
    title: "The cost of sickness absence",
    meta: "6 min read · Reviewed : 12th August 2026",
    href: "#sickness-absence",
  },
];

export const footerSections: Array<{ title: string; links: NavItem[] }> = [
  {
    title: "SERVICE",
    links: [
      { label: "For Individuals & Families", href: "#family" },
      { label: "For Business", href: "#business" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Prescriptions", href: "#prescriptions" },
      { label: "Pricing & Join", href: "/pricing" },
      { label: "Health Hub", href: "/health-hub" },
    ],
  },
  {
    title: "BUSINESS",
    links: [
      { label: "Employee Benefit Overview", href: "#benefits" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Request a Quote", href: "#quote" },
      { label: "Brokers & Partners", href: "#partners" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Clinical Standards", href: "#clinical" },
      { label: "Regulation & Governance", href: "/regulation" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Terms & Conditions", href: "#terms" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Cookie Policy", href: "#cookies" },
      { label: "Complaints Procedure", href: "#complaints" },
      { label: "Cancellation Policy", href: "#cancellation" },
    ],
  },
];
