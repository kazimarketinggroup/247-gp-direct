export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
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
  { label: "Health Hub", href: "#health-hub" },
  {
    label: "About",
    href: "#about",
    children: [
      { label: "About us", href: "#about-us" },
      { label: "Clinical standards", href: "#clinical" },
      { label: "Contact", href: "#contact" },
    ],
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

export const footerSections: Array<{ title: string; links: NavItem[] }> = [
  {
    title: "SERVICE",
    links: [
      { label: "For Individuals & Families", href: "#family" },
      { label: "For Business", href: "#business" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Prescriptions", href: "#prescriptions" },
      { label: "Pricing & Join", href: "/pricing" },
      { label: "Health Hub", href: "#health-hub" },
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
      { label: "About Us", href: "#about-us" },
      { label: "Clinical Standards", href: "#clinical" },
      { label: "Regulation & Governance", href: "#regulation" },
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
