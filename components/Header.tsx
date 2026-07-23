"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import clsx from "clsx";
import { useCart } from "@/lib/cart-context";
import CartDrawer from "@/components/CartDrawer";

const NAV_ITEMS = [
  { href: "/buzz-hub", label: "The Buzz Hub" },
  { href: "/shop", label: "Garden Gold Shop" },
  { href: "/education", label: "Sanctuary Education" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { itemCount, openCart } = useCart();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-gold-deep/20 bg-ink-deep/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            onClick={() => setMobileNavOpen(false)}
            className="font-display text-lg tracking-wide text-gold-bright"
          >
            Boxwoods <span className="text-cream/90">Community Beehive</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "text-sm font-medium tracking-wide transition-colors hover:text-gold-bright",
                  pathname === item.href ? "text-gold-bright" : "text-cream/85"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <Link
              href="/account"
              className="hidden items-center gap-1.5 text-sm text-cream/85 transition-colors hover:text-gold-bright sm:flex"
            >
              <User className="h-4 w-4" />
              Account
            </Link>
            <button
              type="button"
              onClick={openCart}
              aria-label="Open cart"
              className="relative text-gold-bright transition-transform hover:scale-105"
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold-bright text-[10px] font-bold text-ink-deep">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileNavOpen((open) => !open)}
              aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileNavOpen}
              className="text-gold-bright md:hidden"
            >
              {mobileNavOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {mobileNavOpen && (
          <nav className="border-t border-gold-deep/20 px-6 py-4 md:hidden">
            <ul className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileNavOpen(false)}
                    className={clsx(
                      "text-sm font-medium tracking-wide",
                      pathname === item.href
                        ? "text-gold-bright"
                        : "text-cream/85"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/account"
                  onClick={() => setMobileNavOpen(false)}
                  className="flex items-center gap-1.5 text-sm text-cream/85"
                >
                  <User className="h-4 w-4" />
                  Account
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <CartDrawer />
    </>
  );
}
