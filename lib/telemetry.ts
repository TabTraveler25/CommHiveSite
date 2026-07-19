"use client";

import { useEffect, useRef, useState } from "react";

export type TelemetrySnapshot = {
  hiveTemp: number;
  foragingLevel: number;
  growthLbs: number;
  series: number[];
};

const SERIES_LENGTH = 24;
const TICK_MS = 2000;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function useTelemetry(): TelemetrySnapshot {
  const [snapshot, setSnapshot] = useState<TelemetrySnapshot>(() => {
    const series = Array.from({ length: SERIES_LENGTH }, (_, i) =>
      50 + Math.sin(i / 2) * 15
    );
    return { hiveTemp: 35, foragingLevel: series[series.length - 1], growthLbs: 2.4, series };
  });

  const stateRef = useRef(snapshot);

  useEffect(() => {
    stateRef.current = snapshot;
  }, [snapshot]);

  useEffect(() => {
    const interval = setInterval(() => {
      const prev = stateRef.current;
      const hiveTemp = clamp(
        prev.hiveTemp + (Math.random() - 0.5) * 0.3,
        33.5,
        36.5
      );
      const foragingLevel = clamp(
        prev.foragingLevel + (Math.random() - 0.45) * 12,
        10,
        100
      );
      const growthLbs = clamp(
        prev.growthLbs + Math.random() * 0.03,
        0,
        6
      );
      const series = [...prev.series.slice(1), foragingLevel];

      setSnapshot({ hiveTemp, foragingLevel, growthLbs, series });
    }, TICK_MS);

    return () => clearInterval(interval);
  }, []);

  return snapshot;
}
