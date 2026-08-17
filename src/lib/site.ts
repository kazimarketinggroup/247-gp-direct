export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "247 GP Direct",
  tagline: "Healthcare that never closes",
  description:
    "Speak to a registered GP in minutes, any hour of the day. Video consultations, prescriptions and referrals — all from your phone.",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const footerSections: Array<{ title: string; links: NavItem[] }> = [
  {
    title: "Services",
    links: [
      { label: "Video consultations", href: "#services" },
      { label: "Private prescriptions", href: "#services" },
      { label: "Specialist referrals", href: "#services" },
      { label: "Sick notes", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#about" },
      { label: "Our doctors", href: "#doctors" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "#privacy" },
      { label: "Terms of service", href: "#terms" },
      { label: "Cookie policy", href: "#cookies" },
      { label: "Complaints", href: "#complaints" },
    ],
  },
];
