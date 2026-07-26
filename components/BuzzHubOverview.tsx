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
};

const MEET_THE_NEIGHBORS: HubCard = {
  href: "/buzz-hub/meet-the-neighbors",
  title: "Meet The Neighbors",
  icon: "/images/icons/icon-hive-bee.webp",
  iconWidth: 126,
  iconHeight: 111,
  fill: "fill-umber",
};
const LIVE_HIVE_CAM: HubCard = {
  href: "/buzz-hub/live-cam",
  title: "Live Hive Cam",
  icon: "/images/icons/icon-honeycomb-bee.webp",
  iconWidth: 129,
  iconHeight: 128,
  fill: "fill-gold-bright",
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
};

const HEX_POINTS = "25,0 75,0 100,43.3 75,86.6 25,86.6 0,43.3";

// The 6 destinations, arranged clockwise starting at the top — this order
// also drives the mobile fallback grid below.
const CARDS: HubCard[] = [
  MEET_THE_NEIGHBORS,
  LIVE_HIVE_CAM,
  ASK_A_BEEKEEPER,
  UPCOMING_EVENTS,
  OUR_BLOG,
  THE_MISSION,
];

type Side = "top" | "right" | "bottom" | "left";

type RingNode = {
  card: HubCard;
  side: Side;
  top: string;
  left: string;
};

// Anchor points place each hexagon on a loose hexagonal ring around the
// center label, spokes radiating outward to a text callout for each one —
// a wheel of individual honeycomb cells rather than an interlocking grid.
// Anchors mark the hexagon's own center; callouts extend outward from
// there, so label length never shifts the hexagon's position on the ring.
const RING: RingNode[] = [
  { card: MEET_THE_NEIGHBORS, side: "top", top: "16%", left: "50%" },
  { card: LIVE_HIVE_CAM, side: "right", top: "34%", left: "88%" },
  { card: ASK_A_BEEKEEPER, side: "right", top: "66%", left: "88%" },
  { card: UPCOMING_EVENTS, side: "bottom", top: "84%", left: "50%" },
  { card: OUR_BLOG, side: "left", top: "66%", left: "12%" },
  { card: THE_MISSION, side: "left", top: "34%", left: "12%" },
];

function Hex({ card }: { card: HubCard }) {
  return (
    <div className="relative h-[var(--hex-s)] w-[var(--hex-s)] shrink-0 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:z-10 group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-3 group-hover:drop-shadow-[0_10px_18px_rgba(23,17,9,0.35)]">
      <svg
        viewBox="0 0 100 86.6"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        <polygon
          points={HEX_POINTS}
          className={clsx(
            card.fill,
            "stroke-ink-deep/25 transition-[stroke-opacity] duration-300 group-hover:stroke-ink-deep/60"
          )}
          strokeWidth="2.5"
        />
      </svg>
      <div className="relative flex h-full w-full items-center justify-center">
        <Image
          src={card.icon}
          alt=""
          width={card.iconWidth}
          height={card.iconHeight}
          aria-hidden
          className="h-[46%] w-[46%] object-contain group-hover:[animation:hex-icon-wiggle_0.6s_ease-in-out]"
        />
      </div>
    </div>
  );
}

// Direction the callout (connector + label) extends from the hex, and the
// flex order needed so the connector sits nearest the hex in each case.
const CALLOUT_LAYOUT: Record<Side, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 flex-col-reverse items-center pb-1",
  bottom: "top-full left-1/2 -translate-x-1/2 flex-col items-center pt-1",
  right: "left-full top-1/2 -translate-y-1/2 flex-row items-center pl-1",
  left: "right-full top-1/2 -translate-y-1/2 flex-row-reverse items-center pr-1",
};

function HubNode({ node }: { node: RingNode }) {
  const { card, side } = node;
  const isVertical = side === "top" || side === "bottom";

  return (
    <Link
      href={card.href}
      style={{
        top: node.top,
        left: node.left,
        width: "var(--hex-s)",
        height: "var(--hex-s)",
      }}
      className="group absolute -translate-x-1/2 -translate-y-1/2"
    >
      <Hex card={card} />

      <div className={clsx("absolute flex gap-2 sm:gap-3", CALLOUT_LAYOUT[side])}>
        <span
          className={clsx(
            "relative shrink-0 bg-gold-deep/40",
            isVertical ? "h-5 w-px sm:h-8" : "h-px w-5 sm:w-8"
          )}
        >
          <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-bright transition-transform duration-300 group-hover:scale-125" />
        </span>
        <span
          className={clsx(
            "max-w-[6.5rem] font-display text-xs leading-tight text-ink-deep transition-colors group-hover:text-gold-deep sm:max-w-[8.5rem] sm:text-base",
            isVertical ? "text-center" : side === "right" ? "text-left" : "text-right"
          )}
        >
          {card.title}
        </span>
      </div>
    </Link>
  );
}

function HubRing() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[560px]"
      style={{ "--hex-s": "clamp(76px, 12vw, 108px)" } as CSSProperties}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-12 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-olive">
          Pick Your Path
        </p>
        <p className="mt-1 font-display text-2xl text-ink-deep">Around the Hive</p>
      </div>
      {RING.map((node) => (
        <HubNode key={node.card.title} node={node} />
      ))}
    </div>
  );
}

function MobileGrid() {
  return (
    <div
      className="mx-auto grid max-w-xs grid-cols-2 gap-x-6 gap-y-8 sm:hidden"
      style={{ "--hex-s": "88px" } as CSSProperties}
    >
      {CARDS.map((card) => (
        <Link key={card.title} href={card.href} className="group flex flex-col items-center gap-2">
          <Hex card={card} />
          <span className="text-center font-display text-xs leading-tight text-ink-deep transition-colors group-hover:text-gold-deep">
            {card.title}
          </span>
        </Link>
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

        <div className="mt-14">
          <MobileGrid />
          <div className="hidden sm:block">
            <HubRing />
          </div>
        </div>
      </section>
    </div>
  );
}
