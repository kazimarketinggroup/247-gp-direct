import type { Metadata } from "next";
import SupportCards from "@/components/SupportCards";

export const metadata: Metadata = {
  title: "Cookie Policy — 247 GP Direct",
  description:
    "How 247 GP Direct uses cookies and tracking technologies to improve your experience and support website functionality.",
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Title Section */}
      <section className="mx-auto w-full max-w-7xl px-4 pt-10 sm:pt-14 lg:pt-16 pb-2">
        <h1 className="title-50 text-balance text-brand-teal font-normal">
          Cookie Policy
        </h1>
      </section>

      {/* Main Content & Sidebar */}
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] xl:gap-12">
          
          {/* Left: Cookie Policy Card */}
          <div className="rounded-2xl border border-brand-teal/10 bg-white p-6 sm:p-8 lg:p-10 shadow-sm text-sm text-brand-teal/80 leading-relaxed space-y-6">
            <p className="text-sm font-medium text-coral">
              Last updated: 14/09/2026
            </p>

            {/* What are cookies */}
            <div className="space-y-2">
              <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
                What are cookies
              </h2>
              <p>
                Cookies are small text files placed on your device when you visit our website. They help the site function, remember your preferences, and let us understand how the site is used.
              </p>
            </div>

            {/* Cookies we use */}
            <div className="space-y-3 pt-2 border-t border-brand-teal/5">
              <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
                Cookies we use
              </h2>

              <ul className="ml-5 list-disc space-y-3 text-brand-teal/85">
                <li>
                  <strong>Strictly necessary cookies</strong>
                  <p className="text-brand-teal/75 mt-0.5">
                    These are required for the site to function — for example, security, session management, and remembering your cookie choices. These cannot be switched off, as the site won&apos;t work properly without them.
                  </p>
                </li>
                <li>
                  <strong>Functional cookies</strong>
                  <p className="text-brand-teal/75 mt-0.5">
                    These remember your preferences, such as which plan or page you were viewing, so you don&apos;t have to re-select them on your next visit. You can turn these off via cookie settings.
                  </p>
                </li>
                <li>
                  <strong>Analytics cookies</strong>
                  <p className="text-brand-teal/75 mt-0.5">
                    These help us understand how visitors use the site, so we can improve it. You can turn these off via cookie settings.
                  </p>
                </li>
                <li>
                  <strong>Marketing cookies</strong>
                  <p className="text-brand-teal/75 mt-0.5">
                    [If used] These help us measure the effectiveness of our advertising and campaigns. You can turn these off via cookie settings.
                  </p>
                </li>
              </ul>
            </div>

            {/* Managing cookies */}
            <div className="space-y-3 pt-2 border-t border-brand-teal/5">
              <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
                Managing cookies
              </h2>
              <p>
                You can manage or withdraw your cookie consent at any time via [the cookie settings link/banner on the site], or through your browser settings. Blocking strictly necessary cookies may affect how the site works.
              </p>

              <div className="pt-1">
                <ul className="ml-5 list-disc space-y-1.5 text-brand-teal/85">
                  <li>
                    <strong>Third-party cookies</strong>
                    <p className="text-brand-teal/75 mt-0.5">
                      Some cookies are set by third-party services we use, such as analytics providers and payment processors. These third parties have their own privacy and cookie policies, which we recommend reviewing.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Changes to this policy */}
            <div className="space-y-2 pt-2 border-t border-brand-teal/5">
              <h2 className="text-sm sm:text-base font-semibold text-brand-teal">
                Changes to this policy
              </h2>
              <p>
                We&apos;ll update this policy when the cookies we use change, and post the current version here.
              </p>
            </div>
          </div>

          {/* Right Sidebar: SupportCards */}
          <aside className="sticky top-28 space-y-6">
            <SupportCards showEmergency={true} />
          </aside>

        </div>
      </section>
    </div>
  );
}
