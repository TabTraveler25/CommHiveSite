import Image from "next/image";
import type { CSSProperties } from "react";

type BeeConfig = {
  src: string;
  width: number;
  height: number;
  path: "bee-fly-a" | "bee-fly-b" | "bee-fly-c";
  top: string;
  side: "left" | "right";
  size: number;
  delay: number;
};

const DURATION = 24;

const BEES: BeeConfig[] = [
  { src: "/images/illustrations/bee-1.webp", width: 900, height: 788, path: "bee-fly-a", top: "15%", side: "left", size: 48, delay: 0 },
  { src: "/images/illustrations/bee-2.webp", width: 900, height: 724, path: "bee-fly-b", top: "62%", side: "right", size: 44, delay: 4 },
  { src: "/images/illustrations/bee-3.webp", width: 900, height: 629, path: "bee-fly-c", top: "78%", side: "left", size: 40, delay: 8 },
  { src: "/images/illustrations/bee-4.webp", width: 900, height: 783, path: "bee-fly-a", top: "38%", side: "left", size: 52, delay: 12 },
  { src: "/images/illustrations/bee-5.webp", width: 900, height: 851, path: "bee-fly-b", top: "20%", side: "right", size: 44, delay: 16 },
  { src: "/images/illustrations/bee-6.webp", width: 900, height: 1029, path: "bee-fly-c", top: "55%", side: "left", size: 40, delay: 20 },
];

export default function AnimatedBees() {
  return (
    <div
      className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block"
      aria-hidden
    >
      {BEES.map((bee, i) => {
        const style: CSSProperties = {
          top: bee.top,
          [bee.side]: 0,
          width: bee.size,
          opacity: 0,
          animationName: bee.path,
          animationDuration: `${DURATION}s`,
          animationDelay: `${bee.delay}s`,
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
        };
        return (
          <div key={i} className="absolute" style={style}>
            <Image
              src={bee.src}
              alt=""
              width={bee.width}
              height={bee.height}
              className="h-auto w-full"
            />
          </div>
        );
      })}
    </div>
  );
}
