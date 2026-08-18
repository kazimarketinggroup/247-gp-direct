import ContactForm from "@/components/contact/ContactForm";
import { contactPage } from "@/lib/site";

const { company, notService } = contactPage;

export default function ContactDetails() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      {/* Form left, details right from lg; stacked below. items-start keeps
          each column at its natural height. */}
      <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2 lg:gap-6">
        <ContactForm />

        <div className="flex flex-col gap-5">
          <div className="rounded-xl bg-brand-teal p-6 text-white sm:p-7">
            <h2 className="text-xl sm:text-2xl">{company.title}</h2>

            <dl className="mt-5 flex flex-col gap-1.5">
              {company.rows.map((row) => (
                <div key={row.label} className="text-sm leading-relaxed">
                  <dt className="inline text-white">{row.label}</dt>{" "}
                  <dd className="inline text-white/75">{row.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-5 text-sm leading-relaxed text-pretty">
              <span className="text-white">{company.complaints.label}</span>{" "}
              <span className="text-white/75">{company.complaints.value}</span>
            </p>
          </div>

          <div className="rounded-xl bg-coral p-6 text-white sm:p-7">
            <h2 className="text-xl sm:text-2xl">{notService.title}</h2>
            <div className="mt-5 flex flex-col gap-4">
              {notService.paragraphs.map((para) => (
                <p
                  key={para.slice(0, 28)}
                  className="text-sm leading-relaxed text-pretty text-white/90"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
