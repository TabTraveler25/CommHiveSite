"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { ChevronDown, Send } from "lucide-react";
import clsx from "clsx";
import { faqs } from "@/lib/content";

type Message = {
  role: "user" | "assistant";
  text: string;
};

const FALLBACK_ANSWER =
  "That one's a bit outside what I know off-hand — subscribe in the footer and a real Boxwoods beekeeper will follow up with you personally.";

function findAnswer(question: string) {
  const normalized = question.toLowerCase();
  let bestScore = 0;
  let bestAnswer: string | null = null;

  for (const faq of faqs) {
    const keywords = faq.question
      .toLowerCase()
      .split(/\W+/)
      .filter((word) => word.length > 4);
    const score = keywords.filter((word) => normalized.includes(word)).length;
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = faq.answer;
    }
  }

  return bestAnswer ?? FALLBACK_ANSWER;
}

function ChatScene() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi, I'm the Boxwoods beekeeping assistant. Ask me anything about hosting a hive, honey harvests, or life in the apiary.",
    },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const question = input.trim();
    if (!question) return;

    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setInput("");
    setThinking(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: findAnswer(question) },
      ]);
      setThinking(false);
    }, 700);
  };

  return (
    <div className="relative mt-10 flex flex-col-reverse items-center gap-6 sm:flex-row sm:items-end sm:justify-center sm:gap-10">
      <div className="w-full max-w-md">
        <div className="flex max-h-80 flex-col gap-3 overflow-y-auto">
          {messages.map((message, i) => (
            <p
              key={i}
              className={clsx(
                "max-w-[85%] rounded-2xl px-4 py-2 text-sm shadow-sm",
                message.role === "assistant"
                  ? "self-start bg-white/80 text-ink-deep"
                  : "self-end bg-gold text-ink-deep"
              )}
            >
              {message.text}
            </p>
          ))}
          {thinking && (
            <p className="self-start rounded-2xl bg-white/80 px-4 py-2 text-sm text-ink-deep/50 shadow-sm">
              Typing…
            </p>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-4 flex items-center gap-2"
        >
          <label htmlFor="beekeeper-question" className="sr-only">
            Ask a question
          </label>
          <input
            id="beekeeper-question"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about hive hosting, honey, mite care..."
            className="w-full rounded-full border border-umber/20 bg-white/90 px-4 py-2.5 text-sm shadow-sm focus:border-gold-deep focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Send question"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-bright text-ink-deep shadow-sm transition-colors hover:bg-gold"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>

      <div className="w-36 shrink-0 sm:w-56">
        <Image
          src="/images/illustrations/beekeeper-portrait.webp"
          alt="Watercolor portrait of a beekeeper in a veil"
          width={1200}
          height={1419}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

const TEAM = [
  { role: "Head Beekeeper" },
  { role: "Apiary Manager" },
  { role: "Garden Concierge Lead" },
];

function TeamRow() {
  return (
    <div className="mt-10 flex justify-center gap-4 sm:gap-6">
      {TEAM.map((member) => (
        <div key={member.role} className="w-20 text-center sm:w-24">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border-2 border-gold-deep/50 bg-gradient-to-br from-umber/20 to-olive/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/icons/icon-beekeeper.webp"
                alt=""
                width={128}
                height={121}
                aria-hidden
                className="h-8 w-8 object-contain opacity-50 sm:h-10 sm:w-10"
              />
            </div>
          </div>
          <p className="mt-2 text-[11px] font-semibold text-ink-deep sm:text-xs">
            {member.role}
          </p>
          <p className="text-[10px] text-ink-deep/45">Photo coming soon</p>
        </div>
      ))}
    </div>
  );
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

export default function AskABeekeeper() {
  return (
    <div className="bg-cream">
      <section className="relative overflow-hidden px-6 pb-10 pt-24 sm:pb-14">
        <Image
          src="/images/illustrations/bee-3.webp"
          alt=""
          width={900}
          height={629}
          aria-hidden
          className="pointer-events-none absolute left-[8%] top-16 hidden w-14 -rotate-12 opacity-70 sm:block"
        />
        <Image
          src="/images/illustrations/honeycomb-cell.webp"
          alt=""
          width={1200}
          height={1200}
          aria-hidden
          className="pointer-events-none absolute -right-8 bottom-4 hidden w-32 opacity-40 sm:block"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">
            Got a Question?
          </p>
          <h1 className="mt-4 font-display text-3xl text-ink-deep sm:text-4xl">
            Ask a Beekeeper
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-ink-deep/75">
            Try our assistant for a quick answer, or browse the questions we
            hear most below.
          </p>
          <TeamRow />
        </div>

        <div className="relative mx-auto max-w-3xl">
          <ChatScene />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <FaqAccordion />
      </section>
    </div>
  );
}
