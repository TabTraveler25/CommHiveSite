import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HUB_CARDS = [
  {
    href: "/buzz-hub/meet-the-neighbors",
    title: "Meet The Neighbors",
    blurb:
      "The story of the bees who call Boxwoods home — and why they need us more than ever.",
    image: "/images/illustrations/bee-1.webp",
    imageWidth: 900,
    imageHeight: 788,
  },
  {
    href: "/buzz-hub/mission",
    title: "The Mission",
    blurb:
      "Lush gardens, real conservation work, and a cause worth being part of.",
    image: "/images/illustrations/honeycomb-cascade.webp",
    imageWidth: 1200,
    imageHeight: 1200,
  },
  {
    href: "/buzz-hub/live-cam",
    title: "Live Hive Cam",
    blurb:
      "Real sensor data from inside the hive — temperature, activity, and growth, live.",
    image: "/images/illustrations/honey-jar-wrapped.webp",
    imageWidth: 1200,
    imageHeight: 2082,
  },
  {
    href: "/buzz-hub/ask-a-beekeeper",
    title: "Ask a Beekeeper",
    blurb:
      "Get quick answers from our beekeeping assistant, or browse the FAQ.",
    image: "/images/illustrations/beekeeper-portrait.webp",
    imageWidth: 1200,
    imageHeight: 1419,
  },
  {
    href: "/buzz-hub/blog",
    title: "Our Blog",
    blurb:
      "Dispatches from inside the hives — what's blooming, and what we're learning.",
    image: "/images/illustrations/honeycomb-branch-2.webp",
    imageWidth: 1400,
    imageHeight: 594,
  },
  {
    href: "/buzz-hub/upcoming-events",
    title: "Upcoming Events",
    blurb:
      "Workshops, tours, and hands-on hive time — open to the whole neighborhood.",
    image: "/images/illustrations/honeycomb-cluster.webp",
    imageWidth: 1200,
    imageHeight: 1301,
  },
];

export default function BuzzHubOverview() {
  return (
    <div className="bg-cream pt-16">
      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">
          Everything Buzzing at Boxwoods
        </p>
        <h1 className="mx-auto mt-4 max-w-2xl font-display text-3xl text-ink-deep sm:text-4xl">
          Welcome to The Buzz Hub
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-ink-deep/75">
          One home base for everything happening with our hives — the bees
          themselves, the cause behind them, what they&apos;re up to right
          now, and a place to ask us anything.
        </p>

        <div className="mt-12 grid gap-6 text-left sm:grid-cols-2">
          {HUB_CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex items-center gap-5 rounded-xl border border-gold-deep/20 bg-white/60 p-6 transition-colors hover:border-gold-deep/40 hover:bg-white/80"
            >
              <div className="relative h-16 w-16 shrink-0">
                <Image
                  src={card.image}
                  alt=""
                  width={card.imageWidth}
                  height={card.imageHeight}
                  aria-hidden
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h2 className="flex items-center gap-1.5 font-display text-lg text-ink-deep">
                  {card.title}
                  <ArrowRight className="h-4 w-4 shrink-0 text-gold-deep opacity-0 transition-opacity group-hover:opacity-100" />
                </h2>
                <p className="mt-1 text-sm text-ink-deep/70">{card.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
