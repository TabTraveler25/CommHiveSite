import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-16">
      <Image
        src="/images/illustrations/honeycomb-branch-1.webp"
        alt=""
        width={700}
        height={253}
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-6 hidden w-64 rotate-6 opacity-90 sm:block sm:w-80 md:w-[26rem]"
      />
      <Image
        src="/images/illustrations/bee-2.webp"
        alt=""
        width={900}
        height={632}
        aria-hidden
        className="pointer-events-none absolute left-[6%] top-20 hidden w-16 -rotate-12 sm:block sm:w-20 md:top-28 md:w-24"
      />
      <Image
        src="/images/illustrations/bee-4.webp"
        alt=""
        width={2000}
        height={1741}
        aria-hidden
        className="pointer-events-none absolute right-[10%] top-40 hidden w-20 rotate-12 sm:block sm:w-24 md:w-28"
      />
      <Image
        src="/images/illustrations/bee-1.webp"
        alt=""
        width={1856}
        height={1750}
        aria-hidden
        className="pointer-events-none absolute bottom-16 left-[8%] hidden w-20 rotate-6 sm:block md:w-28"
      />

      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">
          Right in the Neighborhood
        </p>
        <h1 className="mt-6 font-display text-4xl leading-tight text-ink-deep sm:text-5xl md:text-6xl">
          Meet the Bees Next Door.{" "}
          <span className="text-gold-deep">Taste the Garden Gold.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-ink-deep/75 sm:text-lg">
          Welcome to a living civilization located in picturesque gardens
          right here at Boxwoods and you can watch them work in real time.
          Then try the honey they&apos;ve been making! Experience the purest
          hive-to-table treasures. It doesn&apos;t get more local than this.
        </p>

        <div className="relative mx-auto mt-10 h-10 w-full max-w-md">
          <Image
            src="/images/illustrations/honey-drip.webp"
            alt=""
            fill
            aria-hidden
            className="pointer-events-none object-contain opacity-80"
          />
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/buzz-hub"
            className="w-full rounded-full bg-gold px-8 py-3 text-sm font-semibold text-ink-deep transition-colors hover:bg-gold-bright sm:w-auto"
          >
            Peek Inside the Hive
          </Link>
          <Link
            href="/shop"
            className="w-full rounded-full border border-gold-deep px-8 py-3 text-sm font-semibold text-gold-deep transition-colors hover:bg-gold-deep/10 sm:w-auto"
          >
            Shop the Honey
          </Link>
        </div>
      </div>
    </section>
  );
}
