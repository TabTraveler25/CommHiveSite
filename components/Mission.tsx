import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

export default function Mission() {
  return (
    <div className="relative bg-cream pt-16">
      <Image
        src="/images/illustrations/pattern-mission-honey.webp"
        alt=""
        fill
        aria-hidden
        className="pointer-events-none object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-cream/80" />
      <section className="relative mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">
          Why We&apos;re Here
        </p>
        <h1 className="mt-4 font-display text-3xl text-ink-deep sm:text-4xl">
          The Mission
        </h1>
        <p className="mt-6 text-ink-deep/75">
          Boxwoods started as a garden, not a business plan. The lush,
          pollinator-friendly beds you see around the hives aren&apos;t just
          pretty — they&apos;re the whole point. Every bloom is chosen to
          feed the bees through as much of the year as possible, and every
          hive is one small, working piece of a much bigger conservation
          effort.
        </p>
        <p className="mt-4 text-ink-deep/75">
          We partner with regional pollinator groups, keep our practices
          chemical-conscious, and share what we learn with anyone curious
          enough to ask. If you&apos;ve ever wanted to be part of something
          genuinely useful without leaving your neighborhood, this is about
          as easy as it gets.
        </p>

        <Link
          href="/buzz-hub/upcoming-events"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 text-sm font-semibold text-ink-deep transition-colors hover:bg-gold-bright"
        >
          <CalendarDays className="h-4 w-4" />
          See Upcoming Garden Events
        </Link>
      </section>
    </div>
  );
}
