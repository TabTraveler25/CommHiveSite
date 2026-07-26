import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import clsx from "clsx";

type HubCard = {
  href: string;
  title: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
  fill: string;
  textLight?: boolean;
};

const MEET_THE_NEIGHBORS: HubCard = {
  href: "/buzz-hub/meet-the-neighbors",
  title: "Meet The Neighbors",
  icon: "/images/icons/icon-hive-bee.webp",
  iconWidth: 126,
  iconHeight: 111,
  fill: "fill-umber",
  textLight: true,
};
const LIVE_HIVE_CAM: HubCard = {
  href: "/buzz-hub/live-cam",
  title: "Live Hive Cam",
  icon: "/images/icons/icon-honeycomb-bee.webp",
  iconWidth: 129,
  iconHeight: 128,
  fill: "fill-gold-bright",
};
const OUR_BLOG: HubCard = {
  href: "/buzz-hub/blog",
  title: "Our Blog",
  icon: "/images/icons/icon-honey-dipper.webp",
  iconWidth: 126,
  iconHeight: 129,
  fill: "fill-gold-deep",
};
const THE_MISSION: HubCard = {
  href: "/buzz-hub/mission",
  title: "The Mission",
  icon: "/images/icons/icon-apiary-cloud.webp",
  iconWidth: 129,
  iconHeight: 128,
  fill: "fill-olive",
  textLight: true,
};
const ASK_A_BEEKEEPER: HubCard = {
  href: "/buzz-hub/ask-a-beekeeper",
  title: "Ask a Beekeeper",
  icon: "/images/icons/icon-beekeeper.webp",
  iconWidth: 128,
  iconHeight: 121,
  fill: "fill-gold",
};
const UPCOMING_EVENTS: HubCard = {
  href: "/buzz-hub/upcoming-events",
  title: "Upcoming Events",
  icon: "/images/icons/icon-honey-candle.webp",
  iconWidth: 125,
  iconHeight: 122,
  fill: "fill-gold-bright",
};

const HEX_POINTS = "25,0 75,0 100,43.3 75,86.6 25,86.6 0,43.3";

type Cell = { card?: HubCard; color?: string };
const D = (color?: string): Cell => ({ color });

// Columns of the honeycomb, left to right. Alternating columns are
// vertically offset by half a hex height so the cells interlock. The
// 6 destinations form a diamond-shaped "bloom" across the 4 middle
// columns (1 / 2 / 2 / 1 real cells), surrounded by decorative cells —
// some plain outline, some solid-colored — to round out the honeycomb.
const COLUMNS: Cell[][] = [
  [D(), D("fill-gold/50"), D()],
  [D(), D(), D("fill-gold-deep/40"), D()],
  [D("fill-gold-bright/40"), D(), D(), D()],
  [{ card: MEET_THE_NEIGHBORS }, D(), D("fill-olive/30"), D()],
  [D(), { card: LIVE_HIVE_CAM }, { card: OUR_BLOG }, D()],
  [{ card: THE_MISSION }, { card: UPCOMING_EVENTS }, D(), D()],
  [D(), { card: ASK_A_BEEKEEPER }, D(), D()],
  [D(), D(), D("fill-gold-deep/40"), D()],
  [D("fill-gold/50"), D(), D(), D()],
  [D(), D("fill-gold-bright/40"), D()],
];

function Hex({ cell }: { cell: Cell }) {
  const outerStyle: CSSProperties = {
    width: "var(--hex-w)",
    height: "var(--hex-h)",
  };

  if (!cell.card) {
    return (
      <div style={outerStyle} className="relative" aria-hidden>
        <svg
          viewBox="0 0 100 86.6"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          <polygon
            points={HEX_POINTS}
            className={clsx(
              cell.color ?? "fill-white/50",
              "stroke-gold-deep/40"
            )}
            strokeWidth="1.5"
          />
        </svg>
      </div>
    );
  }

  return (
    <Link
      href={cell.card.href}
      style={outerStyle}
      className="group relative block transition-transform hover:scale-[1.04]"
    >
      <svg
        viewBox="0 0 100 86.6"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        <polygon
          points={HEX_POINTS}
          className={clsx(cell.card.fill, "stroke-ink-deep/30")}
          strokeWidth="2"
        />
      </svg>
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-0.5 px-1 text-center sm:gap-1.5 sm:px-3">
        <Image
          src={cell.card.icon}
          alt=""
          width={cell.card.iconWidth}
          height={cell.card.iconHeight}
          aria-hidden
          className="h-6 w-6 object-contain sm:h-10 sm:w-10"
        />
        <span
          className={clsx(
            "w-[85%] break-words font-display text-[9px] leading-[1.15] sm:text-sm",
            cell.card.textLight ? "text-cream" : "text-ink-deep"
          )}
        >
          {cell.card.title}
        </span>
      </div>
    </Link>
  );
}

function Columns({ columns, hexWidth }: { columns: Cell[][]; hexWidth: string }) {
  return (
    <div
      className="mx-auto flex w-fit justify-center"
      style={
        {
          "--hex-w": hexWidth,
          "--hex-h": "calc(var(--hex-w) * 0.866)",
        } as CSSProperties
      }
    >
      {columns.map((column, i) => (
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

// On small screens the outermost decorative columns are dropped so the
// 6 real destinations stay legible instead of shrinking to fit them all.
const MOBILE_COLUMNS = COLUMNS.slice(2, 8);

function HoneycombGrid() {
  return (
    <>
      <div className="sm:hidden">
        <Columns columns={MOBILE_COLUMNS} hexWidth="clamp(58px, 18vw, 70px)" />
      </div>
      <div className="hidden sm:block">
        <Columns columns={COLUMNS} hexWidth="clamp(88px, 17vw, 143px)" />
      </div>
    </>
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
