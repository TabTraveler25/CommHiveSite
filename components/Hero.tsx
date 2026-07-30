"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import AnimatedBees from "@/components/AnimatedBees";
import GrainOverlay from "@/components/GrainOverlay";
import TrustSeal from "@/components/TrustSeal";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink-deep pt-16">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-bees.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-ink-deep/75" />
      <GrainOverlay filterId="grain-home-hero" opacity={0.05} />

      <TrustSeal
        ringText="RAISED IN THE GARDEN • ATLANTA, GA •"
        line1="100%"
        line2="RAW"
        tone="dark"
        className="absolute left-6 top-24 hidden sm:block"
      />

      <Image
        src="/images/illustrations/honeycomb-branch-1.webp"
        alt=""
        width={700}
        height={253}
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-6 hidden w-64 rotate-6 opacity-90 sm:block sm:w-80 md:w-[26rem]"
      />
      <AnimatedBees />

      <Image
        src="/images/illustrations/flower-patch-gold.webp"
        alt=""
        width={900}
        height={1272}
        aria-hidden
        className="pointer-events-none absolute -left-10 bottom-0 hidden w-48 sm:block md:w-64"
      />
      <Image
        src="/images/illustrations/hive-on-stilts.webp"
        alt=""
        width={900}
        height={1040}
        aria-hidden
        className="pointer-events-none absolute -right-10 -bottom-16 hidden w-64 sm:block sm:-bottom-20 md:w-80"
      />

      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white">
          Right in the Neighborhood
        </p>
        <h1 className="mt-6 font-display text-4xl leading-tight text-cream sm:text-5xl md:text-6xl">
          Meet the Bees Next Door.{" "}
          <span className="text-gold-bright">Taste the Garden Gold.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-cream/80 sm:text-lg">
          Welcome to a living civilization located in picturesque gardens
          right here at Boxwoods and you can watch them work in real time.
          Then try the honey they&apos;ve been making! Experience the purest
          hive-to-table treasures. It doesn&apos;t get more local than this.
        </p>

        <Image
          src="/images/illustrations/sunflower-divider-color.webp"
          alt=""
          width={2072}
          height={918}
          aria-hidden
          className="pointer-events-none mx-auto mt-8 h-auto w-28 sm:w-32"
        />

        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/buzz-hub"
            className="w-full rounded-full bg-gold px-8 py-3 text-sm font-semibold text-ink-deep transition-colors hover:bg-gold-bright sm:w-auto"
          >
            Peek Inside the Hive
          </Link>
          <Link
            href="/shop"
            className="w-full rounded-full border border-gold-bright px-8 py-3 text-sm font-semibold text-gold-bright transition-colors hover:bg-gold-bright/10 sm:w-auto"
          >
            Shop the Honey
          </Link>
        </div>
      </div>
    </section>
  );
}
