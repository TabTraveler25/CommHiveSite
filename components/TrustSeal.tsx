import { useId } from "react";
import clsx from "clsx";

type Tone = "dark" | "light";

export default function TrustSeal({
  ringText,
  line1,
  line2,
  tone = "light",
  className,
}: {
  ringText: string;
  line1: string;
  line2: string;
  tone?: Tone;
  className?: string;
}) {
  const pathId = useId();

  return (
    <div aria-hidden className={clsx("shrink-0", className)}>
      <div
        className={clsx(
          "relative h-20 w-20 rounded-full border-[1.5px] border-dashed sm:h-24 sm:w-24",
          tone === "dark" ? "border-gold-bright/50" : "border-gold-deep/40"
        )}
      >
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full motion-safe:[animation:seal-spin_28s_linear_infinite]"
        >
          <path
            id={pathId}
            fill="none"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
          <text
            className={tone === "dark" ? "fill-gold-bright" : "fill-gold-deep"}
            fontSize="6.6"
            letterSpacing="1.6"
          >
            <textPath href={`#${pathId}`}>{ringText}</textPath>
          </text>
        </svg>
        <span
          className={clsx(
            "absolute inset-0 flex flex-col items-center justify-center text-center font-display text-[11px] leading-tight sm:text-xs",
            tone === "dark" ? "text-cream" : "text-gold-deep"
          )}
        >
          {line1}
          <br />
          {line2}
        </span>
      </div>
    </div>
  );
}
