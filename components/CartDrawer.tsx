"use client";

import { useState } from "react";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import clsx from "clsx";
import { useCart } from "@/lib/cart-context";

export default function CartDrawer() {
  const { lines, isOpen, closeCart, removeLine, setQuantity, subtotal } =
    useCart();
  const [checkoutMessage, setCheckoutMessage] = useState(false);

  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 z-50 bg-ink-deep/60 transition-opacity",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />
      <aside
        className={clsx(
          "fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-cream shadow-2xl transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-ink-deep/10 px-6 py-5">
          <h2 className="font-display text-lg text-ink-deep">Your Harvest Bag</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink-deep/60 hover:text-ink-deep"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {lines.length === 0 ? (
            <p className="mt-8 text-center text-sm text-ink-deep/60">
              Your bag is empty. Explore the Garden Gold Shop to add something
              sweet.
            </p>
          ) : (
            <ul className="flex flex-col gap-5">
              {lines.map((line) => (
                <li key={line.slug} className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-ink-deep">{line.name}</p>
                    <p className="text-xs text-ink-deep/60">${line.price.toFixed(2)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setQuantity(line.slug, line.quantity - 1)}
                        className="flex h-6 w-6 items-center justify-center rounded border border-ink-deep/20 text-ink-deep/70 hover:border-gold-deep hover:text-gold-deep"
                        aria-label={`Decrease quantity of ${line.name}`}
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-5 text-center text-sm">{line.quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(line.slug, line.quantity + 1)}
                        className="flex h-6 w-6 items-center justify-center rounded border border-ink-deep/20 text-ink-deep/70 hover:border-gold-deep hover:text-gold-deep"
                        aria-label={`Increase quantity of ${line.name}`}
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeLine(line.slug)}
                    aria-label={`Remove ${line.name}`}
                    className="text-ink-deep/40 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-ink-deep/10 px-6 py-5">
          <div className="mb-4 flex items-center justify-between text-sm font-medium text-ink-deep">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button
            type="button"
            disabled={lines.length === 0}
            onClick={() => setCheckoutMessage(true)}
            className="w-full rounded-full bg-gold py-3 text-sm font-semibold text-ink-deep transition-colors hover:bg-gold-bright disabled:cursor-not-allowed disabled:opacity-40"
          >
            Proceed to Checkout
          </button>
          {checkoutMessage && (
            <p className="mt-3 text-center text-xs text-olive">
              Demo storefront — checkout integration coming soon.
            </p>
          )}
        </div>
      </aside>
    </>
  );
}
