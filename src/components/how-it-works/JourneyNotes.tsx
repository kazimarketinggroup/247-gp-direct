import { journeyNotes } from "@/lib/site";

export default function JourneyNotes() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-x-12">
        {journeyNotes.map((note) => (
          <li key={note.title} className="border-l-2 border-brand-teal/25 pl-5">
            <h2 className="text-sm text-pretty text-brand-teal sm:text-base">
              {note.title}
            </h2>
            <p className="mt-2.5 text-xs leading-relaxed text-pretty text-brand-teal/70 sm:text-sm">
              {note.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
