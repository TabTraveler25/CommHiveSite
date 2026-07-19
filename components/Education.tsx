"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, CalendarDays } from "lucide-react";
import clsx from "clsx";
import { events, faqs } from "@/lib/content";

function formatEventDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-lg border border-umber/15 bg-white/60"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-ink-deep"
            >
              {faq.question}
              <ChevronDown
                className={clsx(
                  "h-4 w-4 shrink-0 text-gold-deep transition-transform",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={clsx(
                "grid transition-all duration-300",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-sm text-ink-deep/70">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Education() {
  return (
    <div className="relative pt-16">
      <Image
        src="/images/illustrations/pattern-bees-gold.webp"
        alt=""
        fill
        aria-hidden
        className="pointer-events-none object-cover opacity-[0.05]"
      />
      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <h1 className="font-display text-3xl text-ink-deep sm:text-4xl">
          Learn With Us
        </h1>

        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="flex items-center gap-2 font-display text-xl text-ink-deep">
              <CalendarDays className="h-5 w-5 text-gold-deep" />
              Upcoming Garden Events
            </h2>
            <ul className="mt-6 flex flex-col gap-4">
              {events.map((event) => (
                <li
                  key={event.title + event.date}
                  className="rounded-lg border border-umber/15 bg-white/60 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-deep">
                    {formatEventDate(event.date)}
                  </p>
                  <p className="mt-1 font-medium text-ink-deep">{event.title}</p>
                  <p className="mt-1 text-sm text-ink-deep/70">
                    {event.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/illustrations/beekeeper-portrait.webp"
                alt="Watercolor portrait of a beekeeper in a veil"
                width={1200}
                height={2078}
                className="h-14 w-14 rounded-full object-cover object-top"
              />
              <h2 className="font-display text-xl text-ink-deep">
                Beekeeping Questions, Answered
              </h2>
            </div>
            <div className="mt-6">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
