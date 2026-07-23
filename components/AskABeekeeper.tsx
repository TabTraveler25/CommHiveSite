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

function ChatAssistant() {
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
    <div className="rounded-xl border border-gold-deep/20 bg-white/70">
      <div className="flex items-center gap-3 border-b border-gold-deep/15 px-5 py-4">
        <Image
          src="/images/illustrations/beekeeper-portrait.webp"
          alt="Watercolor portrait of a beekeeper in a veil"
          width={1200}
          height={1419}
          className="h-10 w-10 rounded-full object-cover object-top"
        />
        <div>
          <p className="font-medium text-ink-deep">Ask a Beekeeper</p>
          <p className="text-xs text-ink-deep/50">Usually replies in a few seconds</p>
        </div>
      </div>

      <div className="flex max-h-80 flex-col gap-3 overflow-y-auto px-5 py-4">
        {messages.map((message, i) => (
          <p
            key={i}
            className={clsx(
              "max-w-[85%] rounded-2xl px-4 py-2 text-sm",
              message.role === "assistant"
                ? "self-start bg-umber/10 text-ink-deep"
                : "self-end bg-gold text-ink-deep"
            )}
          >
            {message.text}
          </p>
        ))}
        {thinking && (
          <p className="self-start rounded-2xl bg-umber/10 px-4 py-2 text-sm text-ink-deep/50">
            Typing…
          </p>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t border-gold-deep/15 px-5 py-4"
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
          className="w-full rounded-full border border-umber/25 bg-white px-4 py-2 text-sm focus:border-gold-deep focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Send question"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-bright text-ink-deep transition-colors hover:bg-gold"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
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
    <div className="bg-cream pt-16">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">
            Got a Question?
          </p>
          <h1 className="mt-4 font-display text-3xl text-ink-deep sm:text-4xl">
            Ask a Beekeeper
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-ink-deep/75">
            Try our assistant for a quick answer, or browse the questions we
            hear most.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <ChatAssistant />
          <FaqAccordion />
        </div>
      </section>
    </div>
  );
}
