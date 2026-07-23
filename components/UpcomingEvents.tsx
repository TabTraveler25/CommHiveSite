import { CalendarDays } from "lucide-react";
import { events } from "@/lib/content";

function formatEventDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function UpcomingEvents() {
  return (
    <div className="bg-cream pt-16">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">
            Join Us In The Garden
          </p>
          <h1 className="mt-4 flex items-center justify-center gap-2 font-display text-3xl text-ink-deep sm:text-4xl">
            <CalendarDays className="h-7 w-7 text-gold-deep" />
            Upcoming Events
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-ink-deep/75">
            Workshops, tours, and hands-on hive time — open to neighbors,
            school groups, and anyone curious about bees.
          </p>
        </div>

        <ul className="mt-10 flex flex-col gap-4">
          {events.map((event) => (
            <li
              key={event.title + event.date}
              className="rounded-lg border border-umber/15 bg-white/60 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-deep">
                {formatEventDate(event.date)}
              </p>
              <p className="mt-1 font-medium text-ink-deep">{event.title}</p>
              <p className="mt-1 text-sm text-ink-deep/70">
                {event.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
