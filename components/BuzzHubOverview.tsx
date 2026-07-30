import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import clsx from "clsx";
import GrainOverlay from "@/components/GrainOverlay";

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

// A pointy-top hexagon (point at top/bottom, flat-ish sides), cropped tight
// to the shape's own bounding box so it fills its box with no dead padding.
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

type RingNode = {
  card: HubCard;
  top: string;
  left: string;
};

// Anchor points place each (larger) hexagon on a loose ring, spaced apart
// with room to breathe now that the title lives inside the hex itself.
const RING: RingNode[] = [
  { card: MEET_THE_NEIGHBORS, top: "14%", left: "50%" },
  { card: LIVE_HIVE_CAM, top: "33%", left: "84%" },
  { card: ASK_A_BEEKEEPER, top: "67%", left: "84%" },
  { card: UPCOMING_EVENTS, top: "86%", left: "50%" },
  { card: OUR_BLOG, top: "67%", left: "16%" },
  { card: THE_MISSION, top: "33%", left: "16%" },
];

function Hex({ card }: { card: HubCard }) {
  return (
    <div className="relative h-[var(--hex-h)] w-[var(--hex-w)] shrink-0 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] drop-shadow-[0_6px_12px_rgba(23,17,9,0.2)] group-hover:z-10 group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-3 group-hover:drop-shadow-[0_10px_20px_rgba(23,17,9,0.35)]">
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
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 px-5 text-center sm:gap-3 sm:px-8">
        <Image
          src={card.icon}
          alt=""
          width={card.iconWidth}
          height={card.iconHeight}
          aria-hidden
          className="h-9 w-9 object-contain group-hover:[animation:hex-icon-wiggle_0.6s_ease-in-out] sm:h-14 sm:w-14"
        />
        <span className="font-display text-xs leading-tight text-ink-deep transition-colors duration-300 group-hover:text-gold-deep sm:text-base">
          {card.title}
        </span>
      </div>
    </div>
  );
}

function HubNode({ node }: { node: RingNode }) {
  return (
    <Link
      href={node.card.href}
      style={{
        top: node.top,
        left: node.left,
        width: "var(--hex-w)",
        height: "var(--hex-h)",
      }}
      className="group absolute -translate-x-1/2 -translate-y-1/2"
    >
      <Hex card={node.card} />
    </Link>
  );
}

function HubRing() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[720px]"
      style={
        {
          "--hex-w": "clamp(120px, 15vw, 190px)",
          "--hex-h": "calc(var(--hex-w) * 1.1547)",
        } as CSSProperties
      }
    >
      {RING.map((node) => (
        <HubNode key={node.card.title} node={node} />
      ))}
    </div>
  );
}

function MobileGrid() {
  return (
    <div
      className="mx-auto grid max-w-sm grid-cols-2 gap-x-5 gap-y-8 sm:hidden"
      style={
        {
          "--hex-w": "140px",
          "--hex-h": "calc(var(--hex-w) * 1.1547)",
        } as CSSProperties
      }
    >
      {CARDS.map((card) => (
        <Link key={card.title} href={card.href} className="group mx-auto block">
          <Hex card={card} />
        </Link>
      ))}
    </div>
  );
}

export default function BuzzHubOverview() {
  return (
    <div className="bg-cream">
      <section className="relative flex min-h-[22rem] items-center justify-center overflow-hidden bg-ink-deep pt-16 sm:min-h-[26rem]">
        <Image
          src="/images/illustrations/pattern-doodle-honeycomb.webp"
          alt=""
          fill
          aria-hidden
          className="pointer-events-none object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-ink-deep/70" />
        <GrainOverlay filterId="grain-buzzhub-hero" opacity={0.05} />

        <div className="relative mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-bright">
            Everything Buzzing at Boxwoods
          </p>
          <h1 className="mt-4 font-display text-3xl text-cream sm:text-4xl">
            Welcome to The Buzz Hub
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-cream/80">
            One home base for everything happening with our hives — the bees
            themselves, the cause behind them, what they&apos;re up to right
            now, and a place to ask us anything.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <Image
          src="/images/illustrations/pattern-hex-gold.webp"
          alt=""
          fill
          aria-hidden
          className="pointer-events-none scale-125 object-cover"
        />
        <div className="absolute inset-0 bg-cream/40" />

        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <MobileGrid />
          <div className="hidden sm:block">
            <HubRing />
          </div>
        </div>
      </section>
    </div>
  );
}
