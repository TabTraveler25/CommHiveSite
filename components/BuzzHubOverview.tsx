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
  stroke: string;
};

const MEET_THE_NEIGHBORS: HubCard = {
  href: "/buzz-hub/meet-the-neighbors",
  title: "Meet The Neighbors",
  icon: "/images/icons/icon-hive-bee.webp",
  iconWidth: 126,
  iconHeight: 111,
  stroke: "stroke-umber",
};
const LIVE_HIVE_CAM: HubCard = {
  href: "/buzz-hub/live-cam",
  title: "Live Hive Cam",
  icon: "/images/icons/icon-honeycomb-bee.webp",
  iconWidth: 129,
  iconHeight: 128,
  stroke: "stroke-gold-bright",
};
const ASK_A_BEEKEEPER: HubCard = {
  href: "/buzz-hub/ask-a-beekeeper",
  title: "Ask a Beekeeper",
  icon: "/images/icons/icon-beekeeper.webp",
  iconWidth: 128,
  iconHeight: 121,
  stroke: "stroke-gold",
};
const UPCOMING_EVENTS: HubCard = {
  href: "/buzz-hub/upcoming-events",
  title: "Upcoming Events",
  icon: "/images/icons/icon-honey-candle.webp",
  iconWidth: 125,
  iconHeight: 122,
  stroke: "stroke-gold-deep",
};
const OUR_BLOG: HubCard = {
  href: "/buzz-hub/blog",
  title: "Our Blog",
  icon: "/images/icons/icon-honey-dipper.webp",
  iconWidth: 126,
  iconHeight: 129,
  stroke: "stroke-gold-bright",
};
const THE_MISSION: HubCard = {
  href: "/buzz-hub/mission",
  title: "The Mission",
  icon: "/images/icons/icon-apiary-cloud.webp",
  iconWidth: 129,
  iconHeight: 128,
  stroke: "stroke-olive",
};

// A pointy-top hexagon (point at top/bottom, flat-ish sides), matching the
// client's reference wheel diagram — cropped tight to the shape's own
// bounding box so it fills its box with no dead padding.
const HEX_POINTS = "50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25";
const HEX_VIEWBOX = "6.7 0 86.6 100";

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
  { card: MEET_THE_NEIGHBORS, side: "top", top: "20%", left: "50%" },
  { card: LIVE_HIVE_CAM, side: "right", top: "37%", left: "87%" },
  { card: ASK_A_BEEKEEPER, side: "right", top: "65%", left: "87%" },
  { card: UPCOMING_EVENTS, side: "bottom", top: "80%", left: "50%" },
  { card: OUR_BLOG, side: "left", top: "65%", left: "13%" },
  { card: THE_MISSION, side: "left", top: "37%", left: "13%" },
];

function Hex({ card }: { card: HubCard }) {
  return (
    <div className="relative h-[var(--hex-h)] w-[var(--hex-w)] shrink-0 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] drop-shadow-[0_6px_10px_rgba(23,17,9,0.18)] group-hover:z-10 group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-3 group-hover:drop-shadow-[0_10px_18px_rgba(23,17,9,0.35)]">
      <svg
        viewBox={HEX_VIEWBOX}
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        <polygon
          points={HEX_POINTS}
          className={clsx(card.stroke, "fill-cream transition-all duration-300")}
          strokeWidth="5"
        />
      </svg>
      <div className="relative flex h-full w-full items-center justify-center">
        <Image
          src={card.icon}
          alt=""
          width={card.iconWidth}
          height={card.iconHeight}
          aria-hidden
          className="h-[42%] w-[42%] object-contain group-hover:[animation:hex-icon-wiggle_0.6s_ease-in-out]"
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

// The dot sits at the far (label) end of each connector, matching the
// reference's spokes — a filled terminal out at the callout, not at the hex.
const DOT_POSITION: Record<Side, string> = {
  top: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  bottom: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  right: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
  left: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
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
        width: "var(--hex-w)",
        height: "var(--hex-h)",
      }}
      className="group absolute -translate-x-1/2 -translate-y-1/2"
    >
      <Hex card={card} />

      <div className={clsx("absolute flex gap-2 sm:gap-3", CALLOUT_LAYOUT[side])}>
        <span
          className={clsx(
            "relative shrink-0 bg-ink-deep/20",
            isVertical ? "h-6 w-px sm:h-10" : "h-px w-6 sm:w-10"
          )}
        >
          <span
            className={clsx(
              "absolute h-2.5 w-2.5 rounded-full bg-gold-bright transition-transform duration-300 group-hover:scale-125",
              DOT_POSITION[side]
            )}
          />
        </span>
        <span
          className={clsx(
            "max-w-[7rem] font-display text-xs leading-tight text-ink-deep transition-colors group-hover:text-gold-deep sm:max-w-[9rem] sm:text-base",
            isVertical ? "text-center" : "text-left"
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
      className="relative mx-auto aspect-square w-full max-w-[600px]"
      style={
        {
          "--hex-w": "clamp(78px, 12vw, 110px)",
          "--hex-h": "calc(var(--hex-w) * 1.1547)",
        } as CSSProperties
      }
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-14 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-olive">
          Pick Your Path
        </p>
        <p className="mt-1 font-display text-3xl font-semibold text-ink-deep sm:text-4xl">
          Around
          <br />
          the Hive
        </p>
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
      className="mx-auto grid max-w-xs grid-cols-2 gap-x-6 gap-y-10 sm:hidden"
      style={
        {
          "--hex-w": "88px",
          "--hex-h": "calc(var(--hex-w) * 1.1547)",
        } as CSSProperties
      }
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
