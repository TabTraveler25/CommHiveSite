import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

type HubCard = {
  href: string;
  title: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
};

const HUB_CARDS: HubCard[] = [
  {
    href: "/buzz-hub/meet-the-neighbors",
    title: "Meet The Neighbors",
    icon: "/images/icons/icon-hive-bee.webp",
    iconWidth: 126,
    iconHeight: 111,
  },
  {
    href: "/buzz-hub/live-cam",
    title: "Live Hive Cam",
    icon: "/images/icons/icon-honeycomb-bee.webp",
    iconWidth: 129,
    iconHeight: 128,
  },
  {
    href: "/buzz-hub/blog",
    title: "Our Blog",
    icon: "/images/icons/icon-honey-dipper.webp",
    iconWidth: 126,
    iconHeight: 129,
  },
  {
    href: "/buzz-hub/mission",
    title: "The Mission",
    icon: "/images/icons/icon-apiary-cloud.webp",
    iconWidth: 129,
    iconHeight: 128,
  },
  {
    href: "/buzz-hub/ask-a-beekeeper",
    title: "Ask a Beekeeper",
    icon: "/images/icons/icon-beekeeper.webp",
    iconWidth: 128,
    iconHeight: 121,
  },
  {
    href: "/buzz-hub/upcoming-events",
    title: "Upcoming Events",
    icon: "/images/icons/icon-honey-candle.webp",
    iconWidth: 125,
    iconHeight: 122,
  },
];

const HEX_CLIP =
  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

type Cell = { card?: HubCard };

// Columns of the honeycomb, left to right. Alternating columns are
// vertically offset by half a hex height so the cells interlock.
const COLUMNS: Cell[][] = [
  [{}, {}, {}],
  [{}, {}],
  [
    { card: HUB_CARDS[0] },
    { card: HUB_CARDS[1] },
    { card: HUB_CARDS[2] },
  ],
  [
    { card: HUB_CARDS[3] },
    { card: HUB_CARDS[4] },
    { card: HUB_CARDS[5] },
  ],
  [{}, {}],
  [{}, {}, {}],
];

function Hex({ cell }: { cell: Cell }) {
  const style: CSSProperties = {
    width: "var(--hex-w)",
    height: "var(--hex-h)",
    clipPath: HEX_CLIP,
  };

  if (!cell.card) {
    return (
      <div
        aria-hidden
        style={style}
        className="border border-gold-deep/15 bg-gold/5"
      />
    );
  }

  return (
    <Link
      href={cell.card.href}
      style={style}
      className="group flex flex-col items-center justify-center gap-0.5 overflow-hidden bg-gradient-to-br from-gold-bright to-gold-deep px-1 text-center transition-transform hover:scale-[1.04] sm:gap-1.5 sm:px-3"
    >
      <Image
        src={cell.card.icon}
        alt=""
        width={cell.card.iconWidth}
        height={cell.card.iconHeight}
        aria-hidden
        className="h-5 w-5 object-contain sm:h-9 sm:w-9"
      />
      <span className="w-[85%] break-words font-display text-[9px] leading-[1.15] text-ink-deep sm:text-sm">
        {cell.card.title}
      </span>
    </Link>
  );
}

function HoneycombGrid() {
  return (
    <div
      className="mx-auto flex w-fit justify-center"
      style={
        {
          "--hex-w": "clamp(66px, 19vw, 150px)",
          "--hex-h": "calc(var(--hex-w) * 0.866)",
        } as CSSProperties
      }
    >
      {COLUMNS.map((column, i) => (
        <div
          key={i}
          className="flex flex-col"
          style={{
            marginLeft: i === 0 ? 0 : "calc(var(--hex-w) * -0.26)",
            marginTop: i % 2 === 1 ? "calc(var(--hex-h) / 2)" : 0,
          }}
        >
          {column.map((cell, j) => (
            <Hex key={j} cell={cell} />
          ))}
        </div>
      ))}
    </div>
  );
}

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

        <div className="mt-14 overflow-x-auto">
          <HoneycombGrid />
        </div>
      </section>
    </div>
  );
}
