"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";

const STEPS = [
  {
    number: "01",
    title: "Turnkey Installation",
    body: "Professional hive setup by master apiarists, seamlessly integrated with local Metro Atlanta Beekeepers Association guidelines.",
  },
  {
    number: "02",
    title: "Regular Health Inspections",
    body: "Meticulous seasonal maintenance and Varroa mite management without you lifting a finger.",
  },
  {
    number: "03",
    title: "The Private Harvest",
    body: "Enjoy the magnificent yield of certified, premium honey produced exclusively by your own residential landscape.",
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
      <section className="relative overflow-hidden bg-ink px-6 py-20 text-cream">
        <Image
          src="/images/texture-umber-3.jpg"
          alt=""
          fill
          aria-hidden
          className="pointer-events-none object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-ink-deep/70" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="font-display text-3xl sm:text-4xl">
            Turn Your Backyard into a Managed Pollinator Sanctuary
          </h1>
          <p className="mt-4 text-cream/80">
            You possess the space, the curiosity, and the passion. We provide
            the expertise. Our Garden Concierge program sets up and maintains
            a professional apiary directly on your property.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number}>
              <span className="font-display text-5xl text-gold-deep">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-ink-deep">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink-deep/70">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-umber/15 bg-umber/5 p-8">
          <h2 className="font-display text-xl text-ink-deep">
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
                Request Assessment
              </button>
            </form>
          )}
          <Link
            href="/education"
            className="mt-4 inline-block text-sm font-medium text-gold-deep underline underline-offset-4 hover:text-gold"
          >
            Learn About Bee Boot Camps &amp; 1-on-1 Mentorship
          </Link>
        </div>
      </section>
    </div>
  );
}
