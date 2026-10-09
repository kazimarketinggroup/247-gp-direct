import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import SupportCards from "@/components/SupportCards";
import Icon from "@/components/Icon";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and Conditions — 247 GP Direct",
  description:
    "Terms and Conditions governing your use of the 247 GP Direct Ltd online private medical membership service.",
};

const sections = [
  { id: "introduction", number: "1", title: "Introduction" },
  { id: "definitions", number: "2", title: "Definitions" },
  { id: "about-us", number: "3", title: "About Us – Important Clarification" },
  { id: "the-service", number: "4", title: "The Service" },
  { id: "membership-eligibility", number: "5", title: "Membership and Eligibility" },
  { id: "payment-terms", number: "6", title: "Payment Terms" },
  { id: "activation-access", number: "7", title: "Activation and Access" },
  { id: "cancellation-renewal", number: "8", title: "Cancellation and Renewal" },
  { id: "medical-disclaimer", number: "9", title: "Medical Disclaimer" },
  { id: "limitation-liability", number: "10", title: "Limitation of Liability" },
  { id: "data-protection", number: "11", title: "Data Protection and Privacy" },
  { id: "complaints", number: "12", title: "Complaints" },
  { id: "changes-to-terms", number: "13", title: "Changes to These Terms" },
  { id: "governing-law", number: "14", title: "Governing Law and Jurisdiction" },
  { id: "contact-information", number: "15", title: "Contact Information" },
];

export default function TermsPage() {
  return (
    <div className="bg-cream">
      {/* Page Header */}
      <section className="mx-auto w-full max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pt-16">
        <SectionLabel>Legal &amp; Membership Agreement</SectionLabel>

        <h1 className="title-50 mt-5 max-w-3xl text-balance text-brand-teal">
          Terms and Conditions
        </h1>

        <p className="mt-3 text-base font-medium text-brand-teal sm:text-lg">
          247 GP Direct Ltd – Online GP Membership Service
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-brand-teal/70">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-medium border border-brand-teal/10">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Last Updated: 05/10/2026
          </span>
          <span>·</span>
          <span>Version 1.2</span>
          <span>·</span>
          <span>Company No. {siteConfig.companyNumber}</span>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] xl:gap-12">
          
          {/* Main Legal Document Card */}
          <div className="rounded-2xl border border-brand-teal/10 bg-white p-6 sm:p-10 shadow-sm space-y-12 text-brand-teal/85">
            
            {/* 1. Introduction */}
            <article id="introduction" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-coral/10 text-xs font-bold text-coral">
                  1
                </span>
                <h2 className="text-xl font-bold text-brand-teal sm:text-2xl">
                  Introduction
                </h2>
              </div>
              <p className="text-sm leading-relaxed sm:text-base">
                These Terms and Conditions (&quot;Terms&quot;) govern your use of the online private medical membership service (&quot;Service&quot;) provided by <strong>247 GP Direct Ltd</strong> (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                By purchasing a membership and using the Service, you (&quot;Member&quot;, &quot;you&quot;, &quot;your&quot;) agree to be bound by these Terms. Please read them carefully before completing your purchase.
              </p>
              <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-4 text-xs sm:text-sm text-brand-teal">
                <strong>Important:</strong> If you do not agree to these Terms, you must not proceed with the purchase or use of the Service.
              </div>
            </article>

            {/* 2. Definitions */}
            <article id="definitions" className="scroll-mt-28 space-y-4 border-t border-brand-teal/10 pt-8">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-coral/10 text-xs font-bold text-coral">
                  2
                </span>
                <h2 className="text-xl font-bold text-brand-teal sm:text-2xl">
                  Definitions
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-brand-teal/70">
                In these Terms:
              </p>
              <dl className="grid grid-cols-1 gap-3 sm:gap-4 text-sm leading-relaxed">
                <div className="rounded-xl bg-cream/60 p-4 border border-brand-teal/5">
                  <dt className="font-bold text-brand-teal">&quot;Company&quot;</dt>
                  <dd className="mt-1 text-brand-teal/80">
                    means <strong>247 GP Direct Ltd</strong>, a company registered in England and Wales under company number <strong>17371724</strong>, with its registered office at <a href="https://www.google.com/maps/search/27-31+Lichfield+Street,+Walsall,+West+Midlands+WS11TJ" target="_blank" rel="noopener noreferrer" className="underline hover:text-coral font-medium">Rock Centre, 27-31 Lichfield Street, Walsall, West Midlands, WS1 1TJ, United Kingdom</a>.
                  </dd>
                </div>
                <div className="rounded-xl bg-cream/60 p-4 border border-brand-teal/5">
                  <dt className="font-bold text-brand-teal">&quot;Service&quot;</dt>
                  <dd className="mt-1 text-brand-teal/80">
                    means the online membership platform that facilitates access to qualified General Practitioners (&quot;GPs&quot;) for remote consultations via voice and video call.
                  </dd>
                </div>
                <div className="rounded-xl bg-cream/60 p-4 border border-brand-teal/5">
                  <dt className="font-bold text-brand-teal">&quot;GP&quot;</dt>
                  <dd className="mt-1 text-brand-teal/80">
                    means a qualified, GMC-registered General Practitioner who is independent of the Company and provides medical advice directly to you.
                  </dd>
                </div>
                <div className="rounded-xl bg-cream/60 p-4 border border-brand-teal/5">
                  <dt className="font-bold text-brand-teal">&quot;Membership&quot;</dt>
                  <dd className="mt-1 text-brand-teal/80">
                    means the annual subscription you purchase to access the Service.
                  </dd>
                </div>
                <div className="rounded-xl bg-cream/60 p-4 border border-brand-teal/5">
                  <dt className="font-bold text-brand-teal">&quot;Subscription Fee&quot;</dt>
                  <dd className="mt-1 text-brand-teal/80">
                    means the annual fee payable for the Membership.
                  </dd>
                </div>
                <div className="rounded-xl bg-cream/60 p-4 border border-brand-teal/5">
                  <dt className="font-bold text-brand-teal">&quot;Activation&quot;</dt>
                  <dd className="mt-1 text-brand-teal/80">
                    means the process by which your Membership is enabled, granting you access to the Service.
                  </dd>
                </div>
              </dl>
            </article>

            {/* 3. About Us – Important Clarification */}
            <article id="about-us" className="scroll-mt-28 space-y-4 border-t border-brand-teal/10 pt-8">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-coral/10 text-xs font-bold text-coral">
                  3
                </span>
                <h2 className="text-xl font-bold text-brand-teal sm:text-2xl">
                  About Us – Important Clarification
                </h2>
              </div>
              <div className="rounded-2xl bg-brand-teal/5 border border-brand-teal/15 p-5 sm:p-6 space-y-3.5 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>3.1</strong> We are an independent company. We are not a medical practice, healthcare provider, or clinical service.
                </p>
                <p>
                  <strong>3.2</strong> Our role is strictly to introduce you to a network of qualified GPs and to facilitate the technological platform through which you may consult with them.
                </p>
                <p>
                  <strong>3.3</strong> We do not provide medical advice, diagnosis, treatment, or prescriptions ourselves. All medical advice, diagnosis, and treatment are provided solely by the GPs with whom you consult. The GPs are independent practitioners and are solely responsible for the clinical advice they provide.
                </p>
                <p>
                  <strong>3.4</strong> We do not employ the GPs, nor do we control or direct their clinical judgment. We simply provide the platform and membership infrastructure that connects you to them.
                </p>
                <p>
                  <strong>3.5</strong> By purchasing a Membership, you acknowledge and agree that any medical advice received is provided by the GP and not by the Company. You further acknowledge that we are not liable for any clinical decisions, advice, or actions taken by the GP.
                </p>
              </div>
            </article>

            {/* 4. The Service */}
            <article id="the-service" className="scroll-mt-28 space-y-4 border-t border-brand-teal/10 pt-8">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-coral/10 text-xs font-bold text-coral">
                  4
                </span>
                <h2 className="text-xl font-bold text-brand-teal sm:text-2xl">
                  The Service
                </h2>
              </div>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>4.1</strong> The Service provides Members with access to a network of GPs for online consultations via voice call and video call. Consultations are intended for non-emergency medical advice and general health concerns.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>4.2</strong> The Service is available 24 hours a day, 7 days a week, 365 days a year, subject to GP availability and technical limitations.
              </p>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-brand-teal sm:text-base">
                  <strong>4.3</strong> The Service does not include:
                </p>
                <ul className="ml-5 list-disc space-y-1.5 text-sm leading-relaxed text-brand-teal/80 sm:text-base">
                  <li>Emergency medical care;</li>
                  <li>In-person examinations;</li>
                  <li>Hospital admissions;</li>
                  <li>Specialist referrals (unless arranged separately by the GP);</li>
                  <li>Prescription dispensing (although the GP may issue a private prescription which you may fill at a pharmacy of your choice).</li>
                </ul>
              </div>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>4.4</strong> The Service is not a substitute for NHS emergency services. In a medical emergency, you must call <strong>999</strong> immediately. For urgent but non-emergency NHS advice, call <strong>111</strong>.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>4.5</strong> The Service is private and is not funded by the NHS. It does not replace your entitlement to NHS care.
              </p>
            </article>

            {/* 5. Membership and Eligibility */}
            <article id="membership-eligibility" className="scroll-mt-28 space-y-4 border-t border-brand-teal/10 pt-8">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-coral/10 text-xs font-bold text-coral">
                  5
                </span>
                <h2 className="text-xl font-bold text-brand-teal sm:text-2xl">
                  Membership and Eligibility
                </h2>
              </div>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>5.1</strong> Membership is available to individuals aged 18 and over. Minors may be included as dependents at our discretion and subject to additional terms.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>5.2</strong> Membership is personal and non-transferable. You may not share your login credentials or allow others to use your Membership.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>5.3</strong> You must provide accurate, current, and complete information during registration and keep your account details updated.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>5.4</strong> We reserve the right to refuse or terminate Membership at our discretion, particularly in cases of misuse, abuse, or breach of these Terms.
              </p>
            </article>

            {/* 6. Payment Terms */}
            <article id="payment-terms" className="scroll-mt-28 space-y-4 border-t border-brand-teal/10 pt-8">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-coral/10 text-xs font-bold text-coral">
                  6
                </span>
                <h2 className="text-xl font-bold text-brand-teal sm:text-2xl">
                  Payment Terms
                </h2>
              </div>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>6.1</strong> All payments are made online via our secure payment gateway. We accept payment by credit card, debit card, and such other methods as we may advertise from time to time.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>6.2</strong> The Subscription Fee is payable annually in advance. The fee covers a 12-month membership period.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>6.3</strong> All fees are quoted in GBP (£) and are inclusive of VAT where applicable.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>6.4</strong> Payment must be made in full before Activation. We do not offer partial payments, instalments, or pay-as-you-go options unless expressly stated otherwise.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>6.5</strong> We reserve the right to change the Subscription Fee for future renewal periods. We will provide reasonable notice of any increase before your renewal date.
              </p>
              <div className="rounded-xl bg-coral/5 border border-coral/20 p-4 text-sm leading-relaxed">
                <strong>6.6 Refunds:</strong> All payments are non-refundable. Once payment is made, you are entitled to access the Service for the full 12-month period, but you may not cancel mid-term for a refund. This does not affect your statutory rights.
              </div>
            </article>

            {/* 7. Activation and Access */}
            <article id="activation-access" className="scroll-mt-28 space-y-4 border-t border-brand-teal/10 pt-8">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-coral/10 text-xs font-bold text-coral">
                  7
                </span>
                <h2 className="text-xl font-bold text-brand-teal sm:text-2xl">
                  Activation and Access
                </h2>
              </div>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>7.1</strong> Upon successful receipt of your payment, your Membership will be activated within 24 hours.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>7.2</strong> You will receive a confirmation email containing your login details and instructions on how to access the Service.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>7.3</strong> Access to the Service is granted for the duration of your annual Membership, commencing on the date of Activation.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>7.4</strong> You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>7.5</strong> We reserve the right to suspend or terminate access if we suspect unauthorised use, fraud, or breach of these Terms.
              </p>
            </article>

            {/* 8. Cancellation and Renewal */}
            <article id="cancellation-renewal" className="scroll-mt-28 space-y-4 border-t border-brand-teal/10 pt-8">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-coral/10 text-xs font-bold text-coral">
                  8
                </span>
                <h2 className="text-xl font-bold text-brand-teal sm:text-2xl">
                  Cancellation and Renewal
                </h2>
              </div>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>8.1 Cancellation:</strong> You may cancel your Membership at any time, but cancellation will only take effect at the end of your current annual subscription period. You will continue to have access to the Service until the expiry of your then-current Membership term.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>8.2 Notice Period:</strong> To cancel, you must notify us in writing at least <strong>30 days before your renewal date</strong>. You may do so by emailing <a href="mailto:support@247gpdirect.co.uk" className="text-coral underline hover:text-coral-dark font-medium">support@247gpdirect.co.uk</a> or by logging into your account and following the cancellation process.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>8.3</strong> If you cancel, your Membership will not renew, and you will not be charged for the following year. However, no refund will be issued for the remaining portion of your current term.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>8.4 Renewal:</strong> Unless you cancel in accordance with clause 8.2, your Membership will automatically renew for a further 12-month period, and the Subscription Fee for the next year will be charged to your payment method on file.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>8.5</strong> We will send you a reminder before your renewal date to give you the opportunity to cancel if you do not wish to renew.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>8.6</strong> If you wish to cancel but miss the 30-day notice period, your Membership will renew, and you will be bound for another 12 months. You may then cancel for the following year.
              </p>
            </article>

            {/* 9. Medical Disclaimer */}
            <article id="medical-disclaimer" className="scroll-mt-28 space-y-4 border-t border-brand-teal/10 pt-8">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-coral/10 text-xs font-bold text-coral">
                  9
                </span>
                <h2 className="text-xl font-bold text-brand-teal sm:text-2xl">
                  Medical Disclaimer
                </h2>
              </div>
              <div className="rounded-2xl bg-coral/10 border border-coral/25 p-5 sm:p-6 space-y-3.5 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>9.1</strong> We do not provide medical advice. The Company is not a healthcare provider. All medical advice, diagnoses, and treatment recommendations are provided by the independent GPs.
                </p>
                <p>
                  <strong>9.2</strong> The Service is not intended for medical emergencies. If you are experiencing a medical emergency, call <strong>999</strong> immediately.
                </p>
                <p>
                  <strong>9.3</strong> For urgent but non-life-threatening medical concerns, you should call <strong>111</strong> or seek advice from NHS 111 Online.
                </p>
                <p>
                  <strong>9.4</strong> You should always seek the advice of a qualified healthcare professional regarding any medical condition. Never disregard professional medical advice or delay seeking it because of information obtained through the Service.
                </p>
                <p>
                  <strong>9.5</strong> The GPs are solely responsible for the clinical advice they provide. We make no warranties or representations regarding the accuracy, completeness, or suitability of any advice given by a GP.
                </p>
              </div>
            </article>

            {/* 10. Limitation of Liability */}
            <article id="limitation-liability" className="scroll-mt-28 space-y-4 border-t border-brand-teal/10 pt-8">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-coral/10 text-xs font-bold text-coral">
                  10
                </span>
                <h2 className="text-xl font-bold text-brand-teal sm:text-2xl">
                  Limitation of Liability
                </h2>
              </div>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>10.1</strong> To the fullest extent permitted by law, we exclude all liability for any loss, damage, injury, or distress arising from:
              </p>
              <ul className="ml-5 list-disc space-y-1.5 text-sm leading-relaxed text-brand-teal/80 sm:text-base">
                <li>Your use of the Service;</li>
                <li>Any advice, diagnosis, or treatment provided by a GP;</li>
                <li>Any reliance on information provided through the Service;</li>
                <li>Any technical failures, interruptions, or errors in the Service.</li>
              </ul>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>10.2</strong> Nothing in these Terms limits our liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded by law.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>10.3</strong> Our total liability to you for any claim arising out of or in connection with these Terms shall not exceed the amount of the Subscription Fee paid by you for the current membership year.
              </p>
            </article>

            {/* 11. Data Protection and Privacy */}
            <article id="data-protection" className="scroll-mt-28 space-y-4 border-t border-brand-teal/10 pt-8">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-coral/10 text-xs font-bold text-coral">
                  11
                </span>
                <h2 className="text-xl font-bold text-brand-teal sm:text-2xl">
                  Data Protection and Privacy
                </h2>
              </div>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>11.1</strong> We are committed to protecting your privacy and handling your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>11.2</strong> We will collect, use, and store your personal data in accordance with our Privacy Policy, which is available on our website.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>11.3</strong> By using the Service, you consent to the collection and processing of your personal data as described in our Privacy Policy.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>11.4</strong> The GPs may also collect and process your medical data. They are independent data controllers, and their use of your data is governed by their own privacy notices.
              </p>
            </article>

            {/* 12. Complaints */}
            <article id="complaints" className="scroll-mt-28 space-y-4 border-t border-brand-teal/10 pt-8">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-coral/10 text-xs font-bold text-coral">
                  12
                </span>
                <h2 className="text-xl font-bold text-brand-teal sm:text-2xl">
                  Complaints
                </h2>
              </div>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>12.1</strong> If you have a complaint about our Service, please contact us or email to{" "}
                <a href="mailto:complaint@247gpdirect.co.uk" className="text-coral underline hover:text-coral-dark font-medium">
                  complaint@247gpdirect.co.uk
                </a>.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>12.2</strong> If your complaint relates to the clinical advice provided by a GP, we will forward your complaint to the relevant GP or their practice, as they are responsible for their own clinical conduct.
              </p>
            </article>

            {/* 13. Changes to These Terms */}
            <article id="changes-to-terms" className="scroll-mt-28 space-y-4 border-t border-brand-teal/10 pt-8">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-coral/10 text-xs font-bold text-coral">
                  13
                </span>
                <h2 className="text-xl font-bold text-brand-teal sm:text-2xl">
                  Changes to These Terms
                </h2>
              </div>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>13.1</strong> We reserve the right to update or amend these Terms at any time. We will notify you of any material changes by email or through the Service.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>13.2</strong> Your continued use of the Service after any changes constitutes acceptance of the new Terms.
              </p>
            </article>

            {/* 14. Governing Law and Jurisdiction */}
            <article id="governing-law" className="scroll-mt-28 space-y-4 border-t border-brand-teal/10 pt-8">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-coral/10 text-xs font-bold text-coral">
                  14
                </span>
                <h2 className="text-xl font-bold text-brand-teal sm:text-2xl">
                  Governing Law and Jurisdiction
                </h2>
              </div>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>14.1</strong> These Terms shall be governed by and construed in accordance with the laws of England and Wales.
              </p>
              <p className="text-sm leading-relaxed sm:text-base">
                <strong>14.2</strong> Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </article>

            {/* 15. Contact Information */}
            <article id="contact-information" className="scroll-mt-28 space-y-4 border-t border-brand-teal/10 pt-8">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-coral/10 text-xs font-bold text-coral">
                  15
                </span>
                <h2 className="text-xl font-bold text-brand-teal sm:text-2xl">
                  Contact Information
                </h2>
              </div>
              <p className="text-sm leading-relaxed sm:text-base">
                For any questions regarding these Terms, please contact us at:
              </p>
              
              <div className="rounded-xl bg-cream p-5 border border-brand-teal/10 text-sm leading-relaxed space-y-1.5">
                <p className="font-bold text-brand-teal text-base">247 GP Direct Ltd</p>
                <p className="text-brand-teal/80">
                  Rock Centre, 27-31 Lichfield Street, Walsall, West Midlands, WS1 1TJ, United Kingdom
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@247gpdirect.co.uk" className="text-coral underline hover:text-coral-dark font-medium">
                    support@247gpdirect.co.uk
                  </a>
                </p>
                <p>
                  <strong>Telephone:</strong>{" "}
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-coral font-medium">
                    {siteConfig.phoneDisplay}
                  </a>
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a href="https://www.247gpdirect.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-coral font-medium">
                    www.247gpdirect.co.uk
                  </a>
                </p>
              </div>
            </article>

            {/* Final Purchase Confirmation Notice */}
            <div className="rounded-2xl bg-gradient-to-br from-brand-teal to-brand-teal-dark p-6 sm:p-8 text-white shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral">
                  <Icon name="check-circle" className="h-5 w-5 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    Purchase Confirmation &amp; Agreement
                  </h3>
                  <p className="text-sm leading-relaxed text-white/90">
                    By completing your purchase, you confirm that you have read, understood, and agree to these Terms and Conditions.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/pricing"
                      className="inline-flex items-center gap-2 rounded-md bg-coral px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-coral-dark"
                    >
                      View Available Plans
                      <Icon name="arrow-right" className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <aside className="sticky top-28 space-y-6">
            
            {/* Table of Contents */}
            <div className="rounded-2xl border border-brand-teal/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-coral">
                On This Page
              </p>
              <nav aria-label="Terms and conditions sections" className="mt-3">
                <ol className="flex flex-col gap-1 text-xs">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="flex items-center gap-2 rounded-md px-2 py-1.5 text-brand-teal/70 transition-colors hover:bg-cream hover:text-brand-teal font-medium"
                      >
                        <span className="text-brand-teal/40 font-mono text-[10px] w-4">{s.number}.</span>
                        <span className="truncate">{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            {/* Support and Emergency Cards */}
            <SupportCards showEmergency={true} />

          </aside>

        </div>
      </section>
    </div>
  );
}
