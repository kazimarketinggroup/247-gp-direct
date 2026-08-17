import Business from "@/components/Business";
import CallToAction from "@/components/CallToAction";
import Credentials from "@/components/Credentials";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Included from "@/components/Included";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Problem from "@/components/Problem";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <Included />
        <Pricing />
        <Business />
        <Credentials />
        <Faq />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
