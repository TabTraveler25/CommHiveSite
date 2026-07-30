export default function GrainOverlay({
  opacity = 0.06,
  filterId,
}: {
  opacity?: number;
  filterId: string;
}) {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <filter id={filterId}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="2"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${filterId})`} opacity={opacity} />
    </svg>
  );
}
