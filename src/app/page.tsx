import Business from "@/components/Business";
import CallToAction from "@/components/CallToAction";
import Credentials from "@/components/Credentials";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Included from "@/components/Included";
import Pricing from "@/components/Pricing";
import Problem from "@/components/Problem";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <Included />
      <Pricing />
      <Business />
      <Credentials />
      <Faq />
      <CallToAction />
    </>
  );
}
