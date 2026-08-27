import type { Metadata } from "next";
import RequestQuote from "@/components/business/RequestQuote";

export const metadata: Metadata = {
  title: "Request a Quote — 247 GP Direct",
  description:
    "Tell us about your organisation and request indicative pricing for business cover.",
};

export default function RequestAQuotePage() {
  return <RequestQuote />;
}
