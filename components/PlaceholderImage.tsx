import { ImageIcon } from "lucide-react";
import clsx from "clsx";

export default function PlaceholderImage({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-lg border border-gold-deep/30 bg-gradient-to-br from-umber to-ink-deep p-6 text-center",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, var(--color-gold-bright), transparent 55%)",
        }}
      />
      <ImageIcon className="relative h-8 w-8 text-gold-bright/70" strokeWidth={1.5} />
      <p className="relative text-xs font-medium tracking-wide text-gold-bright/80">
        Image: {label}
        <br />
        <span className="text-gold-bright/50">replace with final asset</span>
      </p>
    </div>
  );
}
