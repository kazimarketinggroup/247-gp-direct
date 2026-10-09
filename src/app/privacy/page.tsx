import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — 247 GP Direct",
  description:
    "How 247 GP Direct Ltd collects, uses, protects, and handles personal data and medical records under UK GDPR and the Data Protection Act 2018.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Title Section */}
      <section className="mx-auto w-full max-w-7xl px-4 pt-10 sm:pt-14 lg:pt-16 pb-2">
        <h1 className="title-50 text-balance text-brand-teal font-normal">
          Privacy Policy
        </h1>
      </section>

      {/* 2-Column Cards Section */}
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          
          {/* Card 1: Sections 1 - 3 */}
          <div className="rounded-2xl border border-brand-teal/10 bg-white p-6 sm:p-8 lg:p-10 shadow-sm text-sm text-brand-teal/80 leading-relaxed space-y-6">
            <p className="text-sm font-medium text-coral">
              Last updated: 14/09/2026
            </p>

            {/* 1. Who we are */}
            <div className="space-y-2.5">
              <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
                1. Who we are
              </h2>
              <p>
                247 GP Direct Ltd is the data controller for the personal information described in this policy.
              </p>
              <ul className="ml-5 list-disc space-y-1 text-brand-teal/85">
                <li>Company registration no.: {siteConfig.companyNumber}</li>
                <li>Registered office: {siteConfig.registeredAddress}</li>
                <li>ICO registration: {siteConfig.icoNumber || "ZC 246856"}</li>
              </ul>
              <p className="pt-1">
                Data Protection contact: [name/role and email], or write to us at the registered office above marked &quot;Data Protection,&quot; or call{" "}
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="font-medium text-brand-teal hover:text-coral transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>.
              </p>
            </div>

            {/* 2. What data we collect */}
            <div className="space-y-2.5 pt-2 border-t border-brand-teal/5">
              <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
                2. What data we collect
              </h2>
              <ul className="ml-5 list-disc space-y-2 text-brand-teal/85">
                <li>
                  <strong>Identity and contact data:</strong> name, date of birth, address, phone number, email address.
                </li>
                <li>
                  <strong>Membership and payment data:</strong> subscription plan, payment details (processed by our payment provider), billing history.
                </li>
                <li>
                  <strong>Health data (special category data):</strong> information you share during consultations, symptoms, medical history relevant to your consultation, prescriptions issued, referral letters.
                </li>
                <li>
                  <strong>Technical data:</strong> how you use our website (see our Cookie Policy).
                </li>
              </ul>
            </div>

            {/* 3. Why we process your data, and our legal basis */}
            <div className="space-y-3 pt-2 border-t border-brand-teal/5">
              <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
                3. Why we process your data, and our legal basis
              </h2>

              <div className="space-y-1">
                <p className="font-semibold text-brand-teal">Providing GP consultations and clinical care</p>
                <p className="text-xs sm:text-sm text-brand-teal/75">
                  Article 9(2)(h) UK GDPR — provision of health care, under conditions of professional secrecy
                </p>
              </div>

              <div className="space-y-1">
                <p className="font-semibold text-brand-teal">Managing your membership and billing</p>
                <p className="text-xs sm:text-sm text-brand-teal/75">Contract performance</p>
              </div>

              <div className="space-y-1">
                <p className="font-semibold text-brand-teal">Legal and regulatory record-keeping</p>
                <p className="text-xs sm:text-sm text-brand-teal/75">Legal obligation</p>
              </div>

              <div className="space-y-1">
                <p className="font-semibold text-brand-teal">Service communications</p>
                <p className="text-xs sm:text-sm text-brand-teal/75">Contract performance / legitimate interests</p>
              </div>

              <div className="space-y-1">
                <p className="font-semibold text-brand-teal">Marketing communications (where you&apos;ve opted in)</p>
                <p className="text-xs sm:text-sm text-brand-teal/75">Consent</p>
              </div>
            </div>
          </div>

          {/* Card 2: Sections 4 - 9 */}
          <div className="rounded-2xl border border-brand-teal/10 bg-white p-6 sm:p-8 lg:p-10 shadow-sm text-sm text-brand-teal/80 leading-relaxed space-y-6">
            
            {/* 4. Who we share data with */}
            <div className="space-y-2.5">
              <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
                4. Who we share data with
              </h2>
              <ul className="ml-5 list-disc space-y-1 text-brand-teal/85">
                <li>Treating GPs and clinical staff involved in your care.</li>
                <li>Pharmacies, for prescription fulfilment.</li>
                <li>Private consultants, where you&apos;ve been referred, with your consent.</li>
                <li>Payment processors, for handling subscription payments.</li>
                <li>Regulators, where legally required.</li>
                <li>We do not sell your personal data.</li>
              </ul>
            </div>

            {/* 5. How long we keep your data */}
            <div className="space-y-2 pt-2 border-t border-brand-teal/5">
              <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
                5. How long we keep your data
              </h2>
              <p>
                Health records are retained in line with [applicable NHS/private healthcare records retention guidance — confirm exact retention schedule with your clinical governance lead, as this differs for adult vs. paediatric records]. Billing and account data is retained for [period] after your membership ends, for legal and accounting purposes.
              </p>
            </div>

            {/* 6. Your rights */}
            <div className="space-y-2.5 pt-2 border-t border-brand-teal/5">
              <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
                6. Your rights
              </h2>
              <p>
                Under UK GDPR, you have the right to: access your data, correct inaccurate data, request erasure (subject to our record-keeping obligations as a healthcare provider), restrict or object to processing, and data portability. To exercise these rights, call{" "}
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="font-medium text-brand-teal hover:text-coral transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>.
              </p>
              <p>
                You also have the right to complain to the Information Commissioner&apos;s Office (ico.org.uk) if you&apos;re unhappy with how we&apos;ve handled your data.
              </p>
            </div>

            {/* 7. International transfers */}
            <div className="space-y-2 pt-2 border-t border-brand-teal/5">
              <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
                7. International transfers
              </h2>
              <p>
                [Confirm whether any data is processed or stored outside the UK/EEA — e.g. via cloud infrastructure — and the safeguards in place, such as UK adequacy regulations or Standard Contractual Clauses.]
              </p>
            </div>

            {/* 8. Security */}
            <div className="space-y-2 pt-2 border-t border-brand-teal/5">
              <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
                8. Security
              </h2>
              <p>
                We use appropriate technical and organisational measures to protect your data, in line with our Cyber Essentials certification and NHS data security standards referenced on our site.
              </p>
            </div>

            {/* 9. Changes to this policy */}
            <div className="space-y-2 pt-2 border-t border-brand-teal/5">
              <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
                9. Changes to this policy
              </h2>
              <p>
                We&apos;ll update this policy from time to time and post the current version here with a revised &quot;last updated&quot; date.
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
