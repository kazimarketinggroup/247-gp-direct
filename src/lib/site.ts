export type MegaMenu = {
  /** Left promo column. */
  eyebrow: string;
  title: string;
  body: string;
  /** Heading above the link list. */
  linksTitle: string;
  links: NavItem[];
  /** Optional second link column. */
  linksTitle2?: string;
  links2?: NavItem[];
  image: { src: string; alt: string };
  /** When set, the image sits in a card with this caption and link. */
  promo?: { caption: string; linkLabel: string; href: string };
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
    href: "/family",
    // Children drive the mobile accordion; `mega` drives the desktop panel.
    children: [
      { label: "What's Included", href: "/whats-included" },
      { label: "What Our GPs Can Help With", href: "/gp-help" },
      { label: "Cover for Your Family", href: "/family-cover" },
      { label: "Keeping Your NHS GP", href: "/nhs-gp" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Prescriptions Explained", href: "/prescriptions" },
      { label: "Using the Service Abroad", href: "/abroad" },
      { label: "FAQs", href: "/faqs" },
    ],
    mega: {
      eyebrow: "FOR YOU & YOUR FAMILY",
      title: "Care for real life",
      body: "Private GP access for you, your partner, and the people you look after.",
      linksTitle: "THE SERVICE",
      links: [
        { label: "What's Included", href: "/whats-included" },
        { label: "What Our GPs Can Help With", href: "/gp-help" },
        { label: "Cover for Your Family", href: "/family-cover" },
        { label: "Keeping Your NHS GP", href: "/nhs-gp" },
      ],
      linksTitle2: "GETTING STARTED",
      links2: [
        { label: "How It Works", href: "/how-it-works" },
        { label: "Prescriptions Explained", href: "/prescriptions" },
        { label: "Using the Service Abroad", href: "/abroad" },
        { label: "FAQs", href: "/faqs" },
      ],
      image: {
        src: "/images/family/mega-menu-kitchen.png",
        alt: "A woman video-calling a GP from her kitchen in the evening",
      },
      promo: {
        caption: "From £TBC a year for the whole family",
        linkLabel: "See Plans",
        href: "/pricing",
      },
    },
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
      { label: "Clinical Standards & Governance", href: "/clinical-standards" },
      { label: "Regulation & Compliance", href: "/regulation" },
      { label: "Meet the Clinical Team", href: "/clinical-team" },
      { label: "Contact Us", href: "/contact" },
    ],
    mega: {
      eyebrow: "FOR YOU & YOUR FAMILY",
      title: "Unlimited private GP appointments",
      body: "for you and your family, 24/7. Keep your NHS GP. Add private care when you need it..",
      linksTitle: "ABOUT 247 GP DIRECT",
      links: [
        { label: "Our Story", href: "/about" },
        { label: "Clinical Standards & Governance", href: "/clinical-standards" },
        { label: "Regulation & Compliance", href: "/regulation" },
        { label: "Meet the Clinical Team", href: "/clinical-team" },
        { label: "Contact Us", href: "/contact" },
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
    a: "You, your partner and your dependent children. All ages are covered at one price â€” final age limits will be confirmed at client sign-off.",
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
    "247 GP Direct exists because access to a GP has become the hardest part of ordinary healthcare â€” not the medicine, the appointment.",
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
    "We provide unlimited access to UK-qualified private GPs, 24 hours a day, 365 days a year, by telephone and video consultation, on a single annual subscription. Members call one number and speak to a doctor â€” at 8am on a Tuesday or 2am on a Sunday.",
    "We do not ask members to leave their NHS surgery, and we never will. This service is the layer that sits underneath NHS care: the everyday questions, the sudden temperatures, the infections that need answering tonight rather than a fortnight from now.",
    "Consultations are delivered by our clinical provider and prescriptions are dispensed by a registered UK pharmacy partner. Both are named here in full once contractual confirmation is received.",
  ],
};

export const familyPage = {
  label: "For You & Your Family",
  title: "A GP for your family, whenever you need one",
  intro:
    "Unlimited appointments by phone or video, 24 hours a day, every day of the year. One annual subscription covers you, your partner and your children.",
  sections: [
    { id: "who-its-for", label: "Who it's for" },
    { id: "whats-included", label: "What's included" },
    { id: "gp-help", label: "What GPs help with" },
    { id: "what-it-isnt", label: "What it isn't" },
    { id: "prescriptions", label: "Prescriptions" },
    { id: "plans", label: "Plans" },
    { id: "faqs", label: "FAQs" },
  ],
  audienceTitle: "Different lives, the same problem: access",
  audiences: [
    {
      tag: "Young family",
      title: "When it's 9pm and their temperature won't come down",
      body: "Children get ill outside surgery hours. Being able to speak to a GP that evening changes the whole night & often avoids a needless trip to A&E.",
      image: "/images/family/audience-young-family.png",
      alt: "A couple at home with their baby, speaking to a GP on a laptop",
    },
    {
      tag: "The sandwich generation",
      title: "Looking after your parents as well as your children",
      body: "You're managing appointments for people who aren't you. Unlimited access means you never have to ration who gets seen.",
      image: "/images/family/audience-sandwich-generation.png",
      alt: "An older couple and their adult son looking at a laptop together",
    },
    {
      tag: "Self-employed & shift workers",
      title: "You can't spend a morning on hold",
      body: "Book around your work, not the other way round. Early morning, late night, weekend the line is always answered.",
      image: "/images/family/audience-shift-workers.png",
      alt: "A woman working at a laptop in a small warehouse office",
    },
  ],
  includedTitle: "Everything the subscription covers",
  includedSub: "No tiers, no add-ons, no per-call charges.",
  /** Accordion: first item open by default, matching the design. */
  included: [
    {
      title: "Unlimited appointments",
      body: "There is no cap and no per-consultation fee. Call as often as you genuinely need to. Members who use the service ten times a year pay exactly what members who use it once pay.",
    },
    {
      title: "24 hours a day, 365 days a year",
      body: "Including nights, weekends, Christmas Day and every bank holiday. The line is answered by trained UK-based operators at all times, not a voicemail or a callback form.",
    },
    {
      title: "Phone or video, your choice",
      body: "Decide at the point of booking. Video is useful when something needs to be seen a rash, a swelling, a wound. Phone is usually quicker for everything else.",
    },
    {
      title: "Your whole family",
      body: "One family subscription covers you, your partner and your dependent children. (Exact definition age limit and whether same-address residency is required to be confirmed.)",
    },
    {
      title: "Private prescriptions",
      body: "Where clinically appropriate, the GP can issue a private prescription electronically, dispensed by a registered pharmacy and delivered to your home or workplace. Medication and dispensing costs are charged separately.",
    },
    {
      title: "Referral letters",
      body: "Where a specialist opinion is needed, the GP can write an open referral letter for private consultant care.",
    },
    {
      title: "Cover while you're away",
      body: "The service works wherever you are, so a holiday illness doesn't mean navigating a foreign healthcare system alone.",
    },
    {
      title: "Notes shared with your own GP",
      body: "With your consent, a record of your consultation can be sent to your NHS practice so your medical history stays joined up.",
    },
    {
      title: "Keep your NHS GP",
      body: "You never de-register. This sits alongside your NHS care, it does not replace it.",
    },
  ],
  includedImage: {
    src: "/images/family/included-three-generations.png",
    alt: "Three generations of women looking through a photo album together",
  },
  notServiceTitle: "What this service is not",
  notService: [
    "This is not an emergency service. If someone is seriously unwell or you think their life is at risk, call 999. For urgent advice, call NHS 111.",
    "Our GPs cannot prescribe controlled drugs, cannot issue NHS prescriptions, cannot carry out physical examinations, tests or scans, and cannot issue fit notes for NHS purposes. (Fit-note position to be confirmed with the clinical provider.)",
  ],
  prescriptionsTitle: "From consultation to your front door",
  prescriptionSteps: [
    {
      number: "1",
      title: "The GP raises it",
      body: "Electronically, during or straight after your consultation.",
    },
    {
      number: "2",
      title: "It's checked and dispensed",
      body: "By a registered pharmacy, with a clinical check.",
    },
    {
      number: "3",
      title: "It's delivered",
      body: "To your home or workplace. Medication cost is separate.",
    },
  ],
  prescriptionsLink: "How prescriptions work in full",
  faqTitle: "The things HR buyers ask us",
  faqs: [
    {
      q: "Do I have to leave my NHS GP?",
      a: "No. You stay registered with your NHS surgery exactly as you are today. This service sits alongside your NHS care, it does not replace it, and there is no de-registration at any point.",
    },
    {
      q: "Are these real, UK-practising GPs?",
      a: "Every GP you speak to is GMC-registered and practising in the UK. Registration is verified at recruitment and monitored through revalidation.",
    },
    {
      q: "How quickly will a GP call me back?",
      a: "Within our published service window. The booking line itself is answered around the clock by trained UK-based operators, not an answerphone. (Exact callback standard to be confirmed by the client.)",
    },
    {
      q: "How many appointments do I get?",
      a: "Unlimited. There is no cap and no per-consultation charge. A member who calls ten times a year pays the same as a member who calls once.",
    },
    {
      q: "Can the GP prescribe medication?",
      a: "Where it is clinically appropriate, the GP can issue a private prescription electronically, dispensed by a registered pharmacy and delivered to your address. Medication and dispensing costs are charged separately.",
    },
    {
      q: "Who is covered on a family plan?",
      a: "You, your partner and your dependent children on a single annual subscription. (Age limit and residency definition to be confirmed.)",
    },
  ],
};

export const whatsIncludedPage = {
  label: "For You & Your Family",
  title: "What's Included",
  intro:
    "See what your 247 GP Direct membership includes, from 24/7 access to practical support by phone or video.",
  membershipTitle: "A practical GP membership",
  membershipParagraphs: [
    "Your membership gives you a straightforward way to speak with a private GP by phone or video, without needing to book a traditional clinic appointment.",
    "Use the service for everyday health concerns, advice about symptoms, treatment questions, and guidance on what to do next.",
  ],
  includedTitle: "What is included",
  includedIntro:
    "Access to the member line, remote GP consultations, clinical advice, and support with next steps are included in the membership structure. Where clinically appropriate, a GP may discuss prescriptions, tests, or referrals. The final scope and exclusions will be confirmed before launch.",
  image: {
    src: "/images/whats-included/family-video-call.png",
    alt: "A family waving during a video call with their grandmother",
  },
};

export const familyCoverPage = {
  label: "For You & Your Family",
  title: "Cover for Your Family",
  intro:
    "One family membership designed to support the people you look after, including children where appropriate.",
  blocks: [
    {
      title: "One membership for your household",
      paragraphs: [
        "Family cover is designed to make private GP support available to the people you look after, including children where appropriate.",
        "It gives your household one simple route to advice when a new symptom appears, a child is unwell, or you need a private conversation about a sensitive concern.",
      ],
    },
    {
      title: "Support for parents and carers",
      paragraphs: [
        "You can speak to a GP about your own health or ask for guidance about a dependent. The GP will explain what can be managed remotely and when an in-person assessment is needed.",
        "Family eligibility, dependent age limits, and the number of people covered will be confirmed in the final plan details.",
      ],
    },
  ],
};

export const prescriptionsPage = {
  label: "Prescriptions",
  title: "Medication, without the second appointment",
  intro:
    "Where a GP judges medication to be appropriate, they can issue a private prescription electronically during or immediately after your consultation.",
  pathwayTitle: "The pathway, end to end",
  pathway: [
    {
      number: "1",
      title: "Consultation",
      body: "You speak to the GP by phone or video.",
    },
    {
      number: "2",
      title: "The GP raises the prescription",
      body: "Electronically, during or immediately after the call.",
    },
    {
      number: "3",
      title: "Clinical check and authorisation",
      body: "Two-stage check and digital signature.",
    },
    {
      number: "4",
      title: "Sent to the dispensing pharmacy",
      body: "A registered UK pharmacy partner.",
    },
    {
      number: "5",
      title: "Pharmacist checks and dispenses",
      body: "A second, independent clinical check.",
    },
    {
      number: "6",
      title: "Dispatched to your address",
      body: "Home or workplace, your choice.",
    },
  ],
  deliveryTitle: "Delivery",
  deliveryBody:
    "Orders placed before the pharmacy's daily cut-off are dispatched the same working day. Exact cut-off time and dispatch standard to be stated from the pharmacy partner's actual service levels, not estimated.",
  costTitle: "Cost, stated openly",
  costBody:
    "Your subscription covers the consultation. Medication, dispensing and delivery are charged separately at the point of order, and you'll see the total before you confirm.",
  canTitle: "What can be prescribed",
  can: [
    "Antibiotics, where clinically indicated",
    "Prescription-only pain relief and anti-inflammatories",
    "Treatment for digestive complaints",
    "Hormonal medication",
    "Emergency replacements when you're away from home without your usual medication",
  ],
  cannotTitle: "What cannot be prescribed",
  cannot: [
    "Controlled drugs",
    "NHS-funded prescriptions",
    "Anything requiring a physical examination or monitoring we cannot provide",
    "Repeat prescriptions for long-term conditions (client position to be confirmed)",
  ],
  collectingTitle: "Collecting somewhere else",
  collectingBody:
    "If you'd rather use your own pharmacy than the delivery partner, tell the GP at the point of prescribing. (Client to confirm whether this is supported in all cases.)",
  safetyTitle: "A safety note",
  safetyBody:
    "Previous prescriptions raised through the service are visible to the treating GP, so repeat requests are clinically reviewed rather than automatically repeated.",
};

export const nhsGpPage = {
  label: "For You & Your Family",
  title: "Keeping Your NHS GP",
  intro:
    "Private GP membership that works alongside your NHS GP and does not change your NHS registration.",
  blocks: [
    {
      title: "Private care alongside NHS care",
      paragraphs: [
        "Joining 247 GP Direct does not mean leaving your NHS GP. Your NHS registration, NHS appointments, prescriptions, and ongoing care continue as normal.",
        "Our service is an additional route for timely advice and reassurance when you need help between NHS appointments.",
      ],
    },
    {
      title: "A joined-up approach",
      paragraphs: [
        "Your private GP may recommend that you follow up with your NHS GP or another NHS service. With your permission, relevant information can be shared to support continuity of care.",
        "247 GP Direct does not replace emergency services, specialist care, or your NHS GP's role in managing long-term conditions.",
      ],
    },
  ],
};

export const abroadPage = {
  label: "For You & Your Family",
  title: "Using the Service Abroad",
  intro:
    "Find out how members may use 247 GP Direct while travelling, and where the service has limits.",
  blocks: [
    {
      title: "Support while you travel",
      paragraphs: [
        "Members may be able to contact 247 GP Direct while travelling abroad for general health guidance and help understanding what to do next.",
        "A remote consultation can be useful for questions about common symptoms, medicines, or whether you need local medical attention.",
      ],
    },
    {
      title: "Important travel limits",
      paragraphs: [
        "The service cannot replace travel insurance, local emergency services, or an in-person doctor. Prescriptions, referrals, and medical certificates may not be available across every country.",
        "Availability, jurisdictions, and any international access rules will be confirmed before launch.",
      ],
    },
  ],
};

export const faqsPage = {
  label: "FAQs",
  title: "Everything people ask before joining",
  intro:
    "If your question isn't here, call the line — it's answered around the clock.",
  categories: [
    {
      id: "joining",
      name: "Joining & cover",
      items: [
        {
          q: "Do I have to leave my NHS GP?",
          a: "No. You stay registered with your NHS surgery. This service sits alongside your NHS care and there is no de-registration at any point.",
        },
        {
          q: "Who is covered on a family plan, and up to what age?",
          a: "You, your partner and your dependent children. Exact age limit and residency requirement to be confirmed by the client.",
        },
        {
          q: "Is there a medical questionnaire or health check?",
          a: "No. There are no medical questions in the join flow.",
        },
        {
          q: "Can I be turned down for a pre-existing condition?",
          a: "No subject to confirmation of the underwriting position with the provider.",
        },
        {
          q: "When does my cover start?",
          a: "Cover starts on joining. Any qualifying period to be confirmed.",
        },
        {
          q: "Can I add someone to my plan later?",
          a: "Yes, plans can be changed mid-term. Pricing for mid-term additions to be confirmed.",
        },
      ],
    },
    {
      id: "using",
      name: "Using the service",
      items: [
        {
          q: "How quickly will a GP call me back?",
          a: "Within our published service window. Exact standard to be inserted from the client's evidenced figure.",
        },
        {
          q: "Is the line really answered at 3am?",
          a: "Yes. Trained UK-based operators answer the booking line at all hours, including bank holidays and Christmas Day.",
        },
        {
          q: "How long does a consultation last?",
          a: "Typically around ten minutes, and as long as is clinically necessary.",
        },
        {
          q: "Can I choose phone or video?",
          a: "Yes you choose at the point of booking.",
        },
        {
          q: "How many times can I call?",
          a: "As often as you genuinely need to. There is no cap.",
        },
        {
          q: "Can I use it for my children?",
          a: "Yes, on a family plan. A parent or guardian should be present. Consent policy to be confirmed.",
        },
        {
          q: "Does it work if I'm abroad?",
          a: "Yes. The service is available wherever you are.",
        },
        {
          q: "Are calls recorded?",
          a: "Yes, for audit and quality purposes, and handled under our privacy notice.",
        },
      ],
    },
    {
      id: "clinical",
      name: "Clinical",
      items: [
        {
          q: "What can the GP actually help with?",
          a: "Most things you'd take to your own surgery: infections, skin complaints, digestive problems, pain, mental health, contraception, children's illnesses, menopause and medication queries.",
        },
        {
          q: "What can't they do?",
          a: "They cannot examine you physically, order NHS tests or scans, prescribe controlled drugs, or issue NHS prescriptions.",
        },
        {
          q: "Are these real NHS-practising GPs?",
          a: "Every GP is GMC-registered and practising in the UK.",
        },
        {
          q: "Will my own GP be told about the consultation?",
          a: "With your consent, a record can be sent to your NHS practice so your history stays joined up.",
        },
        {
          q: "Can I get a fit note or sick note?",
          a: "Position on fit notes to be confirmed with the clinical provider.",
        },
        {
          q: "Can I get a referral to a specialist?",
          a: "Yes an open referral letter for private consultant care.",
        },
      ],
    },
    {
      id: "prescriptions",
      name: "Prescriptions",
      items: [
        {
          q: "Can the GP prescribe medication?",
          a: "Yes, where clinically appropriate, as a private prescription issued electronically.",
        },
        {
          q: "How much does a prescription cost?",
          a: "Medication, dispensing and delivery are charged separately at the point of order. Indicative range to be confirmed.",
        },
        {
          q: "How quickly does it arrive?",
          a: "Dispatch standard to be stated from the pharmacy partner's service levels.",
        },
        {
          q: "Can I collect it from my own pharmacy?",
          a: "Tell the GP at the point of prescribing. Availability to be confirmed.",
        },
        {
          q: "Can I get repeat prescriptions?",
          a: "Position on repeats for long-term conditions to be confirmed.",
        },
        {
          q: "Why can't controlled drugs be prescribed?",
          a: "Remote prescribing of controlled drugs is restricted for patient safety and regulatory reasons.",
        },
      ],
    },
    {
      id: "billing",
      name: "Billing & cancellation",
      items: [
        {
          q: "How much is it and what's included?",
          a: "See the pricing page for plans. Everything listed is included in the annual price.",
        },
        {
          q: "Are there any additional charges?",
          a: "No per-call charges. Medication and dispensing are charged separately.",
        },
        {
          q: "Can I pay monthly?",
          a: "To be confirmed. If monthly direct debit is not available we will not imply that it is.",
        },
        {
          q: "How do I cancel, and what's the cooling-off period?",
          a: "You have 14 days from purchase to cancel in full under the Consumer Contracts Regulations 2013.",
        },
        {
          q: "Does it renew automatically?",
          a: "Yes, annually, and we notify you before renewal.",
        },
      ],
    },
    {
      id: "employers",
      name: "For employers",
      items: [
        {
          q: "How is it priced for a business?",
          a: "Per employee, per year, banded by headcount, on one invoice.",
        },
        {
          q: "How long does rollout take?",
          a: "Days rather than months. Exact working-day timeline to be confirmed.",
        },
        {
          q: "What reporting do we get?",
          a: "Anonymised utilisation reporting you can present at budget time.",
        },
        {
          q: "Does it cover employees' families?",
          a: "Yes family cover is what drives take-up.",
        },
        {
          q: "Is it a taxable benefit?",
          a: "Generally a P11D consideration. We do not give tax advice — please take your own.",
        },
        {
          q: "What happens when someone leaves?",
          a: "Cover ends when they leave the scheme and can be reallocated.",
        },
      ],
    },
  ],
};

export const gpHelpPage = {
  label: "For You & Your Family",
  title: "What Our GPs Can Help With",
  intro:
    "Understand the everyday health questions and concerns our GPs can assess through the service.",
};

export const contactPage = {
  label: "Contact",
  title: "Three ways to reach us",
  routes: [
    {
      title: "Members:",
      subtitle: "book an appointment",
      body: "Answered 24 hours a day, every day of the year. Have your membership number ready.",
      cta: { label: "1234 567 89000", href: "tel:1234567890000", type: "tel" as const },
    },
    {
      title: "General enquiries",
      body: "Use the form and we'll reply within one working day.",
      cta: { label: "1234 567 89000", href: "tel:1234567890000", type: "tel" as const },
    },
    {
      title: "Business enquiries",
      body: "Cover for a workforce, broker and partner arrangements.",
      cta: { label: "Request a quote", href: "#quote", type: "link" as const },
    },
  ],
  formTitle: "Send us a message",
  company: {
    title: "Company details",
    rows: [
      { label: "Company registration no.", value: "00000000 (to be confirmed)" },
      {
        label: "Registered office:",
        value: "1 Example Street, London, EC1A 0AA (to be confirmed)",
      },
      { label: "ICO registration no.", value: "ZA000000 (to be confirmed)" },
    ],
    complaints: {
      label: "Complaints:",
      value:
        "named contact and response timescales are set out in our complaints procedure.",
    },
  },
  notService: {
    title: "What this service is not",
    paragraphs: [
      "This is not an emergency service. If someone is seriously unwell or you think their life is at risk, call 999. For urgent advice, call NHS 111.",
      "Our GPs cannot prescribe controlled drugs, cannot issue NHS prescriptions, cannot carry out physical examinations, tests or scans, and cannot issue fit notes for NHS purposes.",
    ],
  },
};

export const clinicalTeamPage = {
  label: "Meet the Clinical Team",
  title: "The GPs behind the phone line",
  intro:
    "Every consultation is with a GMC-registered doctor, practising in the UK. Here's who you'll be speaking to.",
  leadTitle: "When you call, you're not speaking to a call centre.",
  leadBody:
    "When you call, you're not speaking to a call centre. You're speaking to a UK-qualified, GMC-registered GP — the same standard of doctor you'd see at a surgery, available at a time that actually works for you. Our clinical team is led by [Clinical Director Name], and every GP on the rota goes through the same recruitment, vetting and revalidation process before they take a single call.",
  /** Placeholder profiles pending real names, photos and GMC numbers. */
  members: Array.from({ length: 5 }, (_, i) => ({
    id: `gp-${i + 1}`,
    name: "Dr. Name",
    role: "General physician",
    status: "Available",
  })),
  helpTitle: "What our GPs can help with",
  helpColumns: [
    [
      "Coughs, colds and chest infections",
      "Skin complaints, rashes and eczema",
      "Digestive problems",
      "Joint and back pain",
      "Contraception and sexual health",
      "Medication queries and side effects",
      "Menopause symptoms",
    ],
    [
      "Sore throats and ear infections",
      "Urinary tract infections",
      "Headaches and migraine",
      "Anxiety, low mood and sleep problems",
      "Travel health advice",
      "Children's illnesses",
      "Long-term condition management & general reassurance",
    ],
  ],
  helpNote:
    "Most consultations end with a clear answer advice, a diagnosis, a prescription, or a recommendation about what to do next. A meaningful proportion need no further medical contact at all.",
};

export const clinicalStandardsPage = {
  label: "Clinical standards & governance",
  title: "A real medical service, governed like one",
  intro:
    "The single biggest unspoken question in this category is whether this is genuine clinical care or a call centre. Here is the answer in detail.",
  /** First row is highlighted in the design. */
  standards: [
    {
      title: "Our GPs",
      body: "Every GP is GMC-registered and practising in the UK. Registration is checked at recruitment and monitored through the GMC's revalidation cycle.",
      icon: "briefcase",
      featured: true,
    },
    {
      title: "Recruitment & vetting",
      body: "References, identity checks, DBS clearance and a review of the GP's appraisal and revalidation history before any consultation is taken.",
      icon: "user-check",
    },
    {
      title: "Clinical audit",
      body: "A proportion of consultations is reviewed against agreed clinical standards, with findings fed back to the treating GP and to the clinical lead.",
      icon: "clipboard",
    },
    {
      title: "Call recording",
      body: "Calls are recorded for audit, quality and safeguarding, retained under our published retention schedule and accessible only to authorised staff.",
      icon: "phone",
    },
    {
      title: "Complaints",
      body: "A named complaints contact, an acknowledgement timescale, a response timescale and a defined escalation route, all published in the complaints procedure.",
      icon: "sparkles",
    },
    {
      title: "Data protection",
      body: "Health data is special category data under UK GDPR. Our privacy notice sets out the lawful basis, the retention period, who can access records and how to exercise your rights. ICO registration number is in the footer.",
      icon: "document",
    },
    {
      title: "Professional indemnity",
      body: "All treating clinicians hold professional indemnity cover appropriate to remote consultation.",
      icon: "shield-plus",
    },
    {
      title: "Regulatory position",
      body: "Our CQC registration status is stated here precisely and verbatim once written confirmation is received. No regulatory badge appears anywhere on this site until it is evidenced.",
      icon: "compass",
    },
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
      body: "The GMC licenses and revalidates every GP who takes a member call. GMC numbers can be checked by any member on the public register. The GMC regulates the doctor; the CQC regulates the service â€” the two are separate and both apply.",
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
    href: "/clinical-standards",
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
      { label: "For Individuals & Families", href: "/family" },
      { label: "For Business", href: "#business" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Prescriptions", href: "/prescriptions" },
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
      { label: "Clinical Standards", href: "/clinical-standards" },
      { label: "Regulation & Governance", href: "/regulation" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "/contact" },
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
