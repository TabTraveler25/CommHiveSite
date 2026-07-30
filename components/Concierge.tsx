"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";

const STEPS = [
  {
    number: "01",
    title: "Turnkey Installation",
    body: "Professional hive setup by master apiarists, seamlessly integrated with local Metro Atlanta Beekeepers Association guidelines.",
    icon: "/images/icons/icon-beekeeper.webp",
    iconWidth: 128,
    iconHeight: 121,
  },
  {
    number: "02",
    title: "Regular Health Inspections",
    body: "Meticulous seasonal maintenance and Varroa mite management without you lifting a finger.",
    icon: "/images/icons/icon-honeycomb-bee.webp",
    iconWidth: 129,
    iconHeight: 128,
  },
  {
    number: "03",
    title: "The Private Harvest",
    body: "Enjoy the magnificent yield of certified, premium honey produced exclusively by your own residential landscape.",
    icon: "/images/icons/icon-honey-jar.webp",
    iconWidth: 124,
    iconHeight: 120,
  },
];

export default function Concierge() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-umber/10 px-6 py-16">
        <div className="mx-auto flex max-w-5xl items-center justify-center gap-10">
          <div className="hidden w-40 shrink-0 md:block">
            <Image
              src="/images/illustrations/hive-cottage.webp"
              alt="A charming stilted beehive"
              width={1200}
              height={1386}
            />
          </div>
          <div className="max-w-xl text-center">
            <h1 className="font-display text-3xl text-ink-deep sm:text-4xl">
              Let Us Bring the Bees to You
            </h1>
            <p className="mt-4 text-ink-deep/75">
              Got a backyard and some curiosity? That&apos;s all you need.
              Our Garden Concierge team handles the setup, the check-ups, and
              the mite control — you just enjoy the honey.
            </p>
          </div>
          <div className="hidden w-40 shrink-0 md:block">
            <Image
              src="/images/illustrations/hive-skep.webp"
              alt="A traditional woven beehive skep"
              width={1200}
              height={1549}
            />
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-6 py-16">
        <svg
          aria-hidden
          viewBox="0 0 90 90"
          className="pointer-events-none absolute -left-2 top-6 hidden h-20 w-20 opacity-25 sm:block"
        >
          <g fill="none" stroke="var(--color-umber)" strokeWidth="1.4">
            <path d="M18 70 q6 -24 28 -26 q-2 22 -28 26z" />
            <path d="M18 70 q11 -7 28 -26" />
          </g>
        </svg>

        <div className="mb-14 hidden items-center justify-center gap-3 sm:flex">
          {STEPS.map((step, i) => (
            <div key={step.number} className="flex flex-1 items-center">
              <div className="flex flex-1 flex-col items-center">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-olive/15">
                  <Image
                    src={step.icon}
                    alt=""
                    width={step.iconWidth}
                    height={step.iconHeight}
                    aria-hidden
                    className="h-8 w-8 object-contain"
                  />
                  <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold-deep text-xs font-bold text-cream">
                    {i + 1}
                  </span>
                </div>
              </div>
              {i < STEPS.length - 1 && (
                <div className="mb-6 h-px flex-1 bg-umber/20" />
              )}
            </div>
          ))}
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number}>
              <span className="font-display text-5xl text-gold-deep sm:hidden">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-ink-deep sm:mt-0">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink-deep/70">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-16 overflow-hidden rounded-xl border border-umber/15 bg-umber/5 p-8">
          <svg
            aria-hidden
            viewBox="0 0 90 90"
            className="pointer-events-none absolute -bottom-3 -right-3 hidden h-24 w-24 opacity-[0.15] sm:block"
          >
            <g fill="none" stroke="var(--color-umber)" strokeWidth="1.4">
              <path d="M45 20 q18 6 18 30 q0 18 -18 22 q-18 -4 -18 -22 q0 -24 18 -30z" />
              <path d="M45 34 q13 4 13 20" />
              <path d="M45 48 q10 3 10 14" />
              <path d="M22 74 h46" />
            </g>
          </svg>

          <h2 className="relative font-display text-xl text-ink-deep">
            Request a Professional Garden Assessment
          </h2>
          {submitted ? (
            <p className="mt-4 text-sm text-gold-deep">
              Thank you — a member of our Garden Concierge team will reach out
              to schedule your on-site assessment.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4 sm:flex-row">
              <div className="flex-1">
                <label htmlFor="assessment-name" className="sr-only">
                  Name
                </label>
                <input
                  id="assessment-name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-full border border-umber/25 bg-white px-4 py-3 text-sm focus:border-gold-deep focus:outline-none"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="assessment-address" className="sr-only">
                  Property address
                </label>
                <input
                  id="assessment-address"
                  type="text"
                  required
                  placeholder="Property address"
                  className="w-full rounded-full border border-umber/25 bg-white px-4 py-3 text-sm focus:border-gold-deep focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="shrink-0 rounded-full bg-gold-bright px-8 py-3 text-sm font-semibold text-ink-deep transition-colors hover:bg-gold"
              >
                Get a Free Garden Assessment
              </button>
            </form>
          )}
          <Link
            href="/buzz-hub/mission"
            className="mt-4 inline-block text-sm font-medium text-gold-deep underline underline-offset-4 hover:text-gold"
          >
            Learn About Bee Boot Camps &amp; 1-on-1 Mentorship
          </Link>
        </div>
      </section>
    </div>
  );
}
