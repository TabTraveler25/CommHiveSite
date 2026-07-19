import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      <Image
        src="/images/texture-umber-1.jpg"
        alt=""
        fill
        priority
        aria-hidden
        className="pointer-events-none object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/60 to-ink-deep/20" />

      <div className="relative mx-auto max-w-4xl px-6 pt-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">
          A Living Sanctuary Garden
        </p>
        <h1 className="mt-6 font-display text-4xl italic leading-tight text-cream sm:text-5xl md:text-6xl">
          Witness the Secret Civilization.{" "}
          <span className="text-gold-bright not-italic">
            Taste the Garden Gold.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-cream/80 sm:text-lg">
          Welcome to a living sanctuary where biological rhythm meets
          hyper-local luxury. Explore real-time telemetry from our on-site
          observation hives and experience the purest hive-to-table
          artisanal treasures.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/buzz-hub"
            className="w-full rounded-full bg-gold px-8 py-3 text-sm font-semibold text-ink-deep transition-colors hover:bg-gold-bright sm:w-auto"
          >
            Explore Live Dashboards
          </Link>
          <Link
            href="/shop"
            className="w-full rounded-full border border-gold-bright px-8 py-3 text-sm font-semibold text-gold-bright transition-colors hover:bg-gold-bright/10 sm:w-auto"
          >
            Shop the Harvest
          </Link>
        </div>
      </div>
    </section>
  );
}
