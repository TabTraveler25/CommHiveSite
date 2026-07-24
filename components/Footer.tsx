"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden bg-ink-deep text-cream">
      <Image
        src="/images/illustrations/pattern-bees-gold.webp"
        alt=""
        fill
        aria-hidden
        className="pointer-events-none object-cover opacity-[0.12]"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-display text-xl text-gold-bright">
              Join &ldquo;Buzzing About&rdquo;
            </h3>
            <p className="mt-3 text-sm text-cream/70">
              Get notified of new limited-harvest Garden Gold releases and
              local agritourism events.
            </p>
            <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full rounded-full border border-cream/20 bg-transparent px-4 py-2 text-sm text-cream placeholder:text-cream/40 focus:border-gold-bright focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink-deep transition-colors hover:bg-gold-bright"
              >
                Subscribe
              </button>
            </form>
            {subscribed && (
              <p className="mt-2 text-xs text-gold-bright">
                You&apos;re on the list — welcome to the hive.
              </p>
            )}
          </div>

          <div>
            <h3 className="font-display text-xl text-gold-bright">
              Regional Partnership
            </h3>
            <p className="mt-3 text-sm text-cream/70">
              Proudly partnering with the Metro Atlanta Beekeepers Association
              for regional pollinator conservation and urban biodiversity.
            </p>
            <Link
              href="/buzz-hub/mission"
              className="mt-3 inline-block text-sm font-semibold text-gold-bright underline-offset-4 hover:underline"
            >
              Learn About Our Local Impact
            </Link>
          </div>

          <div>
            <h3 className="font-display text-xl text-gold-bright">
              Garden Concierge
            </h3>
            <p className="mt-3 text-sm text-cream/70">
              Thinking about hosting a hive of your own? Our team handles
              setup, inspections, and care — no experience required.
            </p>
            <Link
              href="/concierge"
              className="mt-3 inline-block text-sm font-semibold text-gold-bright underline-offset-4 hover:underline"
            >
              Learn About Garden Concierge
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-xs text-cream/50">
          © 2026 Boxwoods Community Beehive. All Rights Reserved. Clean
          UI Architecture.
        </div>
      </div>
    </footer>
  );
}
