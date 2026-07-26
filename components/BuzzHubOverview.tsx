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
  gradient: string;
  textLight?: boolean;
};

const MEET_THE_NEIGHBORS: HubCard = {
  href: "/buzz-hub/meet-the-neighbors",
  title: "Meet The Neighbors",
  icon: "/images/icons/icon-hive-bee.webp",
  iconWidth: 126,
  iconHeight: 111,
  gradient: "from-umber to-gold-deep",
  textLight: true,
};
const LIVE_HIVE_CAM: HubCard = {
  href: "/buzz-hub/live-cam",
  title: "Live Hive Cam",
  icon: "/images/icons/icon-honeycomb-bee.webp",
  iconWidth: 129,
  iconHeight: 128,
  gradient: "from-gold/70 to-gold-bright",
};
const OUR_BLOG: HubCard = {
  href: "/buzz-hub/blog",
  title: "Our Blog",
  icon: "/images/icons/icon-honey-dipper.webp",
  iconWidth: 126,
  iconHeight: 129,
  gradient: "from-gold-deep to-gold",
};
const THE_MISSION: HubCard = {
  href: "/buzz-hub/mission",
  title: "The Mission",
  icon: "/images/icons/icon-apiary-cloud.webp",
  iconWidth: 129,
  iconHeight: 128,
  gradient: "from-gold-deep to-olive",
  textLight: true,
};
const ASK_A_BEEKEEPER: HubCard = {
  href: "/buzz-hub/ask-a-beekeeper",
  title: "Ask a Beekeeper",
  icon: "/images/icons/icon-beekeeper.webp",
  iconWidth: 128,
  iconHeight: 121,
  gradient: "from-gold/50 to-gold",
};
const UPCOMING_EVENTS: HubCard = {
  href: "/buzz-hub/upcoming-events",
  title: "Upcoming Events",
  icon: "/images/icons/icon-honey-candle.webp",
  iconWidth: 125,
  iconHeight: 122,
  gradient: "from-gold-bright to-gold-deep",
};

const HEX_CLIP =
  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

type Cell = { card?: HubCard; filled?: boolean };
const D = (filled = false): Cell => ({ filled });

// Columns of the honeycomb, left to right. Alternating columns are
// vertically offset by half a hex height so the cells interlock. The
// 6 destinations form a diamond-shaped "bloom" across the 4 middle
// columns (1 / 2 / 2 / 1 real cells), surrounded by decorative cells —
// some outlined, some softly filled — to round out the honeycomb.
const COLUMNS: Cell[][] = [
  [D(), D(true), D()],
  [D(), D(), D(true), D()],
  [D(true), D(), D(), D()],
  [{ card: MEET_THE_NEIGHBORS }, D(), D(true), D()],
  [D(), { card: LIVE_HIVE_CAM }, { card: OUR_BLOG }, D()],
  [{ card: THE_MISSION }, { card: UPCOMING_EVENTS }, D(), D()],
  [D(), { card: ASK_A_BEEKEEPER }, D(), D()],
  [D(), D(), D(true), D()],
  [D(true), D(), D(), D()],
  [D(), D(true), D()],
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
        className={clsx(
          cell.filled
            ? "bg-gradient-to-br from-gold/25 to-gold-deep/10"
            : "border border-gold-deep/20 bg-white/40"
        )}
      />
    );
  }

  return (
    <Link
      href={cell.card.href}
      style={style}
      className={clsx(
        "group flex flex-col items-center justify-center gap-0.5 overflow-hidden bg-gradient-to-br px-1 text-center transition-transform hover:scale-[1.04] sm:gap-1.5 sm:px-3",
        cell.card.gradient
      )}
    >
      <Image
        src={cell.card.icon}
        alt=""
        width={cell.card.iconWidth}
        height={cell.card.iconHeight}
        aria-hidden
        className="h-5 w-5 object-contain sm:h-9 sm:w-9"
      />
      <span
        className={clsx(
          "w-[85%] break-words font-display text-[9px] leading-[1.15] sm:text-sm",
          cell.card.textLight ? "text-cream" : "text-ink-deep"
        )}
      >
        {cell.card.title}
      </span>
    </Link>
  );
}

function Columns({ columns }: { columns: Cell[][] }) {
  return (
    <div
      className="mx-auto flex w-fit justify-center"
      style={
        {
          "--hex-w": "clamp(70px, 15vw, 130px)",
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
        <Columns columns={MOBILE_COLUMNS} />
      </div>
      <div className="hidden sm:block">
        <Columns columns={COLUMNS} />
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
