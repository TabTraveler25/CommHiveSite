"use client";

import { useState } from "react";
import Image from "next/image";
import { Infinity as InfinityIcon, MapPin, Sparkles } from "lucide-react";
import clsx from "clsx";

const GLANCE_STATS = [
  {
    label: "Colony Lifespan",
    value: "Decades",
    detail:
      "individual bees come and go, but new generations and replacement queens keep a well-managed hive going indefinitely",
    icon: InfinityIcon,
  },
  {
    label: "Foraging Radius",
    value: "3 miles",
    detail: "in every direction — visiting 2M+ flowers for just one pound of honey",
    icon: MapPin,
  },
];

type RoleStat = { label: string; value: string };

type Role = {
  key: string;
  title: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  flip?: boolean;
  role: string;
  stats: RoleStat[];
  funFact?: string;
};

const ROLES: Role[] = [
  {
    key: "queen",
    title: "The Queen",
    image: "/images/illustrations/bee-detailed-top.webp",
    imageWidth: 1704,
    imageHeight: 2000,
    role: "She's the heart of the colony and the primary egg-layer. The whole hive organizes itself around keeping her healthy, fed, and safe.",
    stats: [
      {
        label: "Daily Output",
        value:
          "Up to 2,000 eggs a day at peak — often more than her own body weight in eggs, every single day.",
      },
      { label: "Lifespan", value: "2 to 5 years" },
    ],
    funFact:
      "Queens aren't born genetically different from workers. Any female egg can become a queen if she's fed exclusively on royal jelly throughout her growth.",
  },
  {
    key: "workers",
    title: "The Workers",
    image: "/images/illustrations/bee-detailed-side.webp",
    imageWidth: 2000,
    imageHeight: 1923,
    role: "All female, workers handle every chore needed to sustain the hive. Their job shifts naturally as they age, from indoor nursery care to outdoor foraging.",
    stats: [
      {
        label: "Career Path",
        value:
          "Cleaner & nurse (days 1–12) → comb builder & guard (days 12–20) → field forager (day 20+)",
      },
      {
        label: "Lifespan",
        value: "4 to 6 weeks in summer; up to 5 months over winter",
      },
    ],
    funFact:
      "A single worker makes about 1/12th of a teaspoon of honey in her whole lifetime. To tell her sisters where the good nectar is, she performs a rhythmic \"waggle dance\" on the honeycomb.",
  },
  {
    key: "drones",
    title: "The Drones",
    image: "/images/illustrations/bee-detailed-side.webp",
    imageWidth: 2000,
    imageHeight: 1923,
    flip: true,
    role: "The colony's male bees. Their one job is mating with queens from other hives, which spreads healthy genetic diversity across the region.",
    stats: [
      {
        label: "Unique Traits",
        value:
          "Massive compound eyes built for spotting queens mid-flight, stouter bodies, and no stinger",
      },
      {
        label: "Seasonal Departure",
        value:
          "Live mainly through spring and summer — as forage drops in fall, workers escort them out to save the winter honey stores",
      },
    ],
    funFact:
      "Mating is a one-way trip. A drone that succeeds dies immediately after — nature's way of saying he went out on top.",
  },
];

function ColonyAtAGlance() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      <div className="relative overflow-hidden rounded-xl border border-gold-deep/20 bg-ink-deep p-6 text-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90 mix-blend-screen"
        >
          <source src="/videos/bee-swarm.mp4" type="video/mp4" />
        </video>
        <div className="relative">
          <p className="font-display text-2xl text-gold-bright sm:text-3xl">
            40,000–60,000
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-cream/70">
            Peak Population
          </p>
          <p className="mt-2 text-sm text-cream/70">
            bees per active hive in midsummer
          </p>
        </div>
      </div>
      {GLANCE_STATS.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-gold-deep/20 bg-white/70 p-6 text-center"
        >
          <stat.icon className="mx-auto h-6 w-6 text-gold-deep" />
          <p className="mt-3 font-display text-2xl text-gold-deep sm:text-3xl">
            {stat.value}
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-deep/60">
            {stat.label}
          </p>
          <p className="mt-2 text-sm text-ink-deep/70">{stat.detail}</p>
        </div>
      ))}
    </div>
  );
}

function WhosWho() {
  const [activeKey, setActiveKey] = useState(ROLES[0].key);
  const role = ROLES.find((r) => r.key === activeKey) ?? ROLES[0];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {ROLES.map((r) => {
          const isActive = r.key === activeKey;
          return (
            <button
              key={r.key}
              type="button"
              onClick={() => setActiveKey(r.key)}
              aria-pressed={isActive}
              className={clsx(
                "flex flex-1 min-w-[8rem] flex-col items-center gap-2 rounded-xl border px-5 py-4 transition-all sm:flex-none sm:w-40",
                isActive
                  ? "scale-105 border-gold-deep bg-gold/10 shadow-sm"
                  : "border-umber/15 bg-white/50 hover:border-gold-deep/40"
              )}
            >
              <span className="relative h-12 w-12">
                <Image
                  src={r.image}
                  alt=""
                  fill
                  aria-hidden
                  className={clsx(
                    "object-contain transition-opacity",
                    r.flip && "-scale-x-100",
                    isActive ? "opacity-100" : "opacity-40 grayscale"
                  )}
                />
              </span>
              <span
                className={clsx(
                  "text-sm font-semibold",
                  isActive ? "text-ink-deep" : "text-ink-deep/60"
                )}
              >
                {r.title}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-gold-deep/20 bg-white/60">
        <div className="flex flex-col sm:flex-row">
          <div className="relative flex shrink-0 items-center justify-center bg-gradient-to-br from-gold/15 to-transparent p-6 sm:w-56">
            <span className="relative block w-36 sm:w-40">
              <Image
                src={role.image}
                alt=""
                width={role.imageWidth}
                height={role.imageHeight}
                aria-hidden
                className={clsx("h-auto w-full", role.flip && "-scale-x-100")}
              />
            </span>
          </div>
          <div className="p-6 sm:p-8">
            <h3 className="font-display text-2xl text-ink-deep">{role.title}</h3>
            <p className="mt-3 text-ink-deep/75">{role.role}</p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {role.stats.map((stat) => (
                <div key={stat.label} className="rounded-lg bg-umber/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-deep">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-sm text-ink-deep/75">{stat.value}</p>
                </div>
              ))}
            </div>

            {role.funFact && (
              <div className="mt-5 flex gap-3 rounded-lg bg-gold/10 p-4">
                <Sparkles className="h-5 w-5 shrink-0 text-gold-deep" />
                <p className="text-sm text-ink-deep/80">
                  <span className="font-semibold">Did you know? </span>
                  {role.funFact}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MeetTheNeighbors() {
  return (
    <div className="bg-cream">
      <section className="relative flex min-h-[28rem] items-center overflow-hidden bg-ink-deep pt-16 sm:min-h-[34rem]">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero-apiary-bees.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink-deep/70" />

        <div className="relative mx-auto w-full max-w-5xl px-6 py-16">
          <div className="max-w-xl text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-bright">
              The Story of Our Bees
            </p>
            <h1 className="mt-4 font-display text-3xl text-cream sm:text-4xl">
              Meet The Neighbors
            </h1>
            <p className="mt-6 text-cream/80">
              Every jar of Garden Gold starts with a few hundred thousand very
              small neighbors. Each hive at Boxwoods is its own thriving
              civilization, living right here in the garden and going about
              their daily work while we go about ours.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="text-center font-display text-2xl text-ink-deep">
          Colony at a Glance
        </h2>
        <div className="mt-8">
          <ColonyAtAGlance />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="text-center font-display text-2xl text-ink-deep">
          Who&apos;s Who in the Hive
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-ink-deep/60">
          Tap a bee to meet her — every hive is a cast of characters.
        </p>
        <div className="mt-8">
          <WhosWho />
        </div>
      </section>

      <section className="bg-umber/10 px-6 py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center md:flex-row md:text-left">
          <div className="hidden w-28 shrink-0 md:block">
            <Image
              src="/images/illustrations/honeycomb-cell.webp"
              alt=""
              width={1200}
              height={1200}
              aria-hidden
            />
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink-deep">
              Why It Matters
            </h2>
            <p className="mt-4 text-ink-deep/75">
              Honeybee colonies across the country continue to face
              challenges from habitat loss, changing weather patterns, and
              pesticides. Since roughly one out of every three bites of food
              on our plates relies on pollinators, helping bees thrive
              benefits the whole community.
            </p>
            <p className="mt-4 text-ink-deep/75">
              A managed hive tucked into a neighborhood garden, complete with
              regular health checks, gentle care, and nearby floral forage,
              is one of the most effective ways to boost local biodiversity
              and support regional ecology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
