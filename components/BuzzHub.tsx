"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useTelemetry } from "@/lib/telemetry";

function TelemetryWave({ series }: { series: number[] }) {
  const width = 240;
  const height = 60;
  const max = 100;
  const points = series
    .map((value, i) => {
      const x = (i / (series.length - 1)) * width;
      const y = height - (value / max) * height;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-14 w-full text-gold-deep"
      preserveAspectRatio="none"
    >
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const STAT_BEES = [
  "/images/illustrations/bee-3.webp",
  "/images/illustrations/bee-5.webp",
  "/images/illustrations/bee-6.webp",
];

export default function BuzzHub() {
  const { hiveTemp, foragingLevel, growthLbs, series } = useTelemetry();

  return (
    <div className="bg-cream pt-16">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center justify-between gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">
              Live From Our Garden at Boxwoods
            </p>
            <h1 className="mt-4 font-display text-3xl text-ink-deep sm:text-4xl">
              Come Watch the Hive at Work
            </h1>
            <p className="mt-4 max-w-2xl text-ink-deep/75">
              We tucked some sensors inside the hive (the bees don&apos;t
              mind) so you can see what&apos;s happening in real time — no
              bee suit required, just pull up the dashboard. It&apos;s
              weirdly relaxing.
            </p>
          </div>
          <div className="hidden w-20 shrink-0 md:block">
            <Image
              src="/images/illustrations/honey-jar-wrapped.webp"
              alt=""
              width={1200}
              height={2082}
              aria-hidden
            />
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              label: "Internal Hive Nest",
              value: `${hiveTemp.toFixed(1)}°C`,
              caption: "Optimal Brood Temp",
              wave: series.map(() => hiveTemp * 2),
            },
            {
              label: "Foraging Activity",
              value: foragingLevel > 65 ? "Spiking" : "Steady",
              caption: "Post-Sunrise Flight Traffic",
              wave: series,
            },
            {
              label: "Colony Growth",
              value: `+${growthLbs.toFixed(2)} lbs`,
              caption: "Garden Gold Accumulation Today",
              wave: series.map((_, i) => 20 + (i / series.length) * 60),
            },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-lg border border-gold-deep/20 bg-white/70 p-6"
            >
              <Image
                src={STAT_BEES[i]}
                alt=""
                width={80}
                height={80}
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-2 w-14 rotate-12 opacity-80"
              />
              <p className="text-xs uppercase tracking-wide text-ink-deep/50">
                {stat.label}
              </p>
              <p className="mt-2 font-display text-3xl text-gold-deep">
                {stat.value}
              </p>
              <p className="text-xs text-ink-deep/50">{stat.caption}</p>
              <TelemetryWave series={stat.wave} />
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-gold-deep/20">
          <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-umber to-ink-deep">
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_30%,var(--color-gold-bright),transparent_50%)]" />
            <button
              type="button"
              aria-label="Play live hive feed"
              className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gold-bright/90 text-ink-deep transition-transform hover:scale-105"
            >
              <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
            </button>
            <p className="absolute bottom-4 left-4 right-4 text-xs text-cream/60">
              Live Video Feed: Inside the Observation Hive — replace with
              final embedded video
            </p>
          </div>
          <div className="bg-white/70 px-6 py-4">
            <p className="text-sm text-ink-deep/70">
              Watch the queen lay eggs and workers unpack local pollen in
              real-time under shatter-proof acrylic panels.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <button className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-ink-deep transition-colors hover:bg-gold-bright">
            Get Hive Updates
          </button>
        </div>
      </section>
    </div>
  );
}
