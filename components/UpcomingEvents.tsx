"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, GraduationCap, Sparkles } from "lucide-react";
import { classes, seasonalReleases, HARVEST_DATE } from "@/lib/content";
import { useCountdown } from "@/lib/countdown";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const HARVEST_LABEL = new Date(HARVEST_DATE).toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
});

function CountdownToHarvest() {
  const parts = useCountdown(HARVEST_DATE);

  const tiles = [
    { label: "Days", value: parts?.days },
    { label: "Hours", value: parts?.hours },
    { label: "Minutes", value: parts?.minutes },
    { label: "Seconds", value: parts?.seconds },
  ];

  return (
    <div className="rounded-xl border border-gold-deep/20 bg-white/70 p-6 text-center sm:p-8">
      <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-olive">
        <Sparkles className="h-4 w-4" />
        Countdown to Harvest
      </p>
      <p className="mt-2 text-sm text-ink-deep/70">
        Sourwood harvest lands {HARVEST_LABEL}{" "}— here&apos;s the clock.
      </p>
      <div className="mx-auto mt-6 grid max-w-md grid-cols-4 gap-3">
        {tiles.map((tile) => (
          <div
            key={tile.label}
            className="rounded-lg bg-umber/5 py-3"
          >
            <p className="font-display text-2xl text-gold-deep sm:text-3xl">
              {tile.value !== undefined ? String(tile.value).padStart(2, "0") : "--"}
            </p>
            <p className="text-[10px] uppercase tracking-wide text-ink-deep/50 sm:text-xs">
              {tile.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function UpcomingEvents() {
  return (
    <div className="bg-cream pt-16">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">
            Join Us In The Garden
          </p>
          <h1 className="mt-4 flex items-center justify-center gap-2 font-display text-3xl text-ink-deep sm:text-4xl">
            <CalendarDays className="h-7 w-7 text-gold-deep" />
            Upcoming Events
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-ink-deep/75">
            Classes, seasonal drops, and a running clock to the next harvest —
            everything happening next at Boxwoods.
          </p>
        </div>

        <div className="mt-10">
          <CountdownToHarvest />
        </div>

        <div className="mt-14">
          <h2 className="flex items-center gap-2 font-display text-xl text-ink-deep">
            <GraduationCap className="h-5 w-5 text-gold-deep" />
            Classes & Workshops
          </h2>
          <ul className="mt-6 flex flex-col gap-4">
            {classes.map((item) => (
              <li
                key={item.title + item.date}
                className="rounded-lg border border-umber/15 bg-white/60 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-deep">
                  {formatDate(item.date)}
                </p>
                <p className="mt-1 font-medium text-ink-deep">{item.title}</p>
                <p className="mt-1 text-sm text-ink-deep/70">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14">
          <div className="flex items-center justify-between gap-4">
            <h2 className="flex items-center gap-2 font-display text-xl text-ink-deep">
              <Image
                src="/images/illustrations/honey-dipper-2.webp"
                alt=""
                width={1200}
                height={817}
                aria-hidden
                className="h-5 w-7 -rotate-12 object-contain"
              />
              Seasonal Product Releases
            </h2>
            <Link
              href="/shop"
              className="hidden shrink-0 text-sm font-semibold text-gold-deep hover:text-gold sm:block"
            >
              Shop the Collection
            </Link>
          </div>
          <ul className="mt-6 flex flex-col gap-4">
            {seasonalReleases.map((item) => (
              <li
                key={item.title + item.date}
                className="rounded-lg border border-umber/15 bg-white/60 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-deep">
                  {formatDate(item.date)}
                </p>
                <p className="mt-1 font-medium text-ink-deep">{item.title}</p>
                <p className="mt-1 text-sm text-ink-deep/70">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
          <Link
            href="/shop"
            className="mt-4 inline-block text-sm font-semibold text-gold-deep hover:text-gold sm:hidden"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
