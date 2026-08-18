import type { Metadata } from "next";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactRoutes from "@/components/contact/ContactRoutes";

export const metadata: Metadata = {
  title: "Contact — 247 GP Direct",
  description:
    "Three ways to reach us: the 24/7 member booking line, general enquiries by form, and business enquiries for workforce cover.",
};

export default function ContactPage() {
  return (
    <>
      <ContactRoutes />
      <ContactDetails />
    </>
  );
}
