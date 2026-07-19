"use client";

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
      className="h-14 w-full text-gold-bright"
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

export default function BuzzHub() {
  const { hiveTemp, foragingLevel, growthLbs, series } = useTelemetry();

  return (
    <div className="bg-ink-deep pt-16 text-cream">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">
          Live From The Boxwoods Sanctuary Garden
        </p>
        <h1 className="mt-4 font-display text-3xl text-gold-bright sm:text-4xl">
          The Buzz Observation Hub
        </h1>
        <p className="mt-4 max-w-2xl text-cream/75">
          Driven by non-invasive BroodMinder smart sensors, our live
          educational dashboard connects you directly to the biological
          pulse of the colony. No protective gear required — just pure
          scientific wonder.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-gold-deep/20 bg-umber/30 p-6">
            <p className="text-xs uppercase tracking-wide text-cream/50">
              Internal Hive Nest
            </p>
            <p className="mt-2 font-display text-3xl text-gold-bright">
              {hiveTemp.toFixed(1)}°C
            </p>
            <p className="text-xs text-cream/50">Optimal Brood Temp</p>
            <TelemetryWave series={series.map(() => hiveTemp * 2)} />
          </div>

          <div className="rounded-lg border border-gold-deep/20 bg-umber/30 p-6">
            <p className="text-xs uppercase tracking-wide text-cream/50">
              Foraging Activity
            </p>
            <p className="mt-2 font-display text-3xl text-gold-bright">
              {foragingLevel > 65 ? "Spiking" : "Steady"}
            </p>
            <p className="text-xs text-cream/50">Post-Sunrise Flight Traffic</p>
            <TelemetryWave series={series} />
          </div>

          <div className="rounded-lg border border-gold-deep/20 bg-umber/30 p-6">
            <p className="text-xs uppercase tracking-wide text-cream/50">
              Colony Growth
            </p>
            <p className="mt-2 font-display text-3xl text-gold-bright">
              +{growthLbs.toFixed(2)} lbs
            </p>
            <p className="text-xs text-cream/50">Garden Gold Accumulation Today</p>
            <TelemetryWave
              series={series.map((_, i) => 20 + (i / series.length) * 60)}
            />
          </div>
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
              Live Video Feed: Inside the Ulster-Style Observation Hive —
              replace with final embedded video
            </p>
          </div>
          <div className="bg-umber/20 px-6 py-4">
            <p className="text-sm text-cream/70">
              Watch the queen lay eggs and workers unpack local pollen in
              real-time under shatter-proof acrylic panels.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <button className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-ink-deep transition-colors hover:bg-gold-bright">
            Subscribe for Deep Hive Telemetry
          </button>
        </div>
      </section>
    </div>
  );
}
