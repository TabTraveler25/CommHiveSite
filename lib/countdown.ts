"use client";

import { useEffect, useState } from "react";

export type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getParts(target: Date): CountdownParts {
  const diff = Math.max(0, target.getTime() - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

export function useCountdown(targetIso: string): CountdownParts | null {
  const [parts, setParts] = useState<CountdownParts | null>(null);

  useEffect(() => {
    const target = new Date(targetIso);
    // One-time client-only clock read; the server has no notion of "now"
    // for this target, so the first tick can't happen during render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParts(getParts(target));
    const interval = setInterval(() => setParts(getParts(target)), 1000);
    return () => clearInterval(interval);
  }, [targetIso]);

  return parts;
}
