import Image from "next/image";
import Link from "next/link";

const STATS = [
  {
    icon: "/images/icons/icon-hive-bee.webp",
    iconWidth: 126,
    iconHeight: 111,
    value: "40,000–60,000",
    label: "Bees per hive at peak",
  },
  {
    icon: "/images/icons/icon-honeycomb-bee.webp",
    iconWidth: 129,
    iconHeight: 128,
    value: "3 Miles",
    label: "Forage radius, every direction",
  },
  {
    icon: "/images/icons/icon-apiary-cloud.webp",
    iconWidth: 129,
    iconHeight: 128,
    value: "Decades",
    label: "A well-managed colony can thrive",
  },
];

const NAV_CARDS = [
  {
    href: "/shop",
    icon: "/images/icons/icon-honey-jar.webp",
    iconWidth: 124,
    iconHeight: 120,
    title: "Garden Gold Shop",
    body: "Honey, candles, and hive-made skincare.",
  },
  {
    href: "/buzz-hub",
    icon: "/images/icons/icon-honeycomb-bee.webp",
    iconWidth: 129,
    iconHeight: 128,
    title: "The Buzz Hub",
    body: "Live cam, blog, events, and more.",
  },
  {
    href: "/concierge",
    icon: "/images/icons/icon-beekeeper.webp",
    iconWidth: 128,
    iconHeight: 121,
    title: "Garden Concierge",
    body: "Host a hive — we handle the rest.",
  },
  {
    href: "/buzz-hub/meet-the-neighbors",
    icon: "/images/icons/icon-hive-bee.webp",
    iconWidth: 126,
    iconHeight: 111,
    title: "Meet The Neighbors",
    body: "Who's who inside every hive.",
  },
];

function StatTicker() {
  return (
    <div className="bg-umber">
      <div className="mx-auto flex max-w-5xl flex-col divide-y divide-cream/15 px-6 py-8 sm:flex-row sm:divide-x sm:divide-y-0 sm:py-6">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-1 items-center justify-center gap-3 py-4 text-center sm:py-0"
          >
            <Image
              src={stat.icon}
              alt=""
              width={stat.iconWidth}
              height={stat.iconHeight}
              aria-hidden
              className="h-8 w-8 object-contain"
            />
            <div className="text-left">
              <p className="font-display text-lg text-gold-bright">{stat.value}</p>
              <p className="text-xs text-cream/70">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NavCards() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">
        Where to Start
      </p>
      <h2 className="mx-auto mt-4 max-w-xl font-display text-2xl text-ink-deep sm:text-3xl">
        Everything Boxwoods, In One Place
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {NAV_CARDS.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group flex flex-col items-center gap-3 rounded-xl border border-umber/15 bg-white/60 p-6 text-center transition-colors hover:border-gold-deep/40 hover:bg-white"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 transition-colors group-hover:bg-gold/20">
              <Image
                src={card.icon}
                alt=""
                width={card.iconWidth}
                height={card.iconHeight}
                aria-hidden
                className="h-8 w-8 object-contain"
              />
            </span>
            <span className="font-display text-base text-ink-deep">{card.title}</span>
            <span className="text-xs text-ink-deep/60">{card.body}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="bg-umber/10 px-6 py-16">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <span className="font-display text-5xl leading-none text-gold-deep">&ldquo;</span>
        <p className="font-display text-xl text-ink-deep sm:text-2xl">
          We watched our first jar of Garden Gold go from blossom to bottle —
          same hives we check on the live cam, same weekend it hit the
          farmers market. Freshest honey we&apos;ve ever had.
        </p>
        <div className="mt-2 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-olive/15">
            <Image
              src="/images/icons/icon-hive-bee.webp"
              alt=""
              width={126}
              height={111}
              aria-hidden
              className="h-5 w-5 object-contain"
            />
          </span>
          <span className="text-sm text-ink-deep/70">
            A Neighborhood Subscriber, &ldquo;Buzzing About&rdquo; member
          </span>
        </div>
      </div>
    </section>
  );
}

export default function HomeHighlights() {
  return (
    <>
      <StatTicker />
      <NavCards />
      <Testimonial />
    </>
  );
}
