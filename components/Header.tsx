"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react";
import clsx from "clsx";
import { useCart } from "@/lib/cart-context";
import CartDrawer from "@/components/CartDrawer";

const BUZZ_HUB_CHILDREN = [
  { href: "/buzz-hub/meet-the-neighbors", label: "Meet The Neighbors" },
  { href: "/buzz-hub/mission", label: "The Mission" },
  { href: "/buzz-hub/live-cam", label: "Live Hive Cam" },
  { href: "/buzz-hub/ask-a-beekeeper", label: "Ask a Beekeeper" },
  { href: "/buzz-hub/blog", label: "Our Blog" },
  { href: "/buzz-hub/upcoming-events", label: "Upcoming Events" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileHubOpen, setMobileHubOpen] = useState(false);
  const [hubMenuOpen, setHubMenuOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const hubMenuRef = useRef<HTMLDivElement>(null);

  const closeAll = () => {
    setMobileNavOpen(false);
    setMobileHubOpen(false);
    setHubMenuOpen(false);
  };

  useEffect(() => {
    if (!hubMenuOpen) return;
    const handleClick = (event: MouseEvent) => {
      if (hubMenuRef.current && !hubMenuRef.current.contains(event.target as Node)) {
        setHubMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [hubMenuOpen]);

  const isBuzzHubActive = pathname.startsWith("/buzz-hub");

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-gold-deep/20 bg-ink-deep/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            onClick={closeAll}
            className="font-display text-lg tracking-wide text-gold-bright"
          >
            Boxwoods <span className="text-cream/90">Community Beehive</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <div ref={hubMenuRef} className="relative">
              <button
                type="button"
                onClick={() => setHubMenuOpen((open) => !open)}
                aria-expanded={hubMenuOpen}
                className={clsx(
                  "flex items-center gap-1 text-sm font-medium tracking-wide transition-colors hover:text-gold-bright",
                  isBuzzHubActive ? "text-gold-bright" : "text-cream/85"
                )}
              >
                The Buzz Hub
                <ChevronDown
                  className={clsx(
                    "h-3.5 w-3.5 transition-transform",
                    hubMenuOpen && "rotate-180"
                  )}
                />
              </button>
              {hubMenuOpen && (
                <div className="absolute left-0 top-full mt-3 w-56 overflow-hidden rounded-lg border border-gold-deep/20 bg-ink-deep shadow-xl">
                  <Link
                    href="/buzz-hub"
                    onClick={closeAll}
                    className="block px-4 py-2.5 text-sm font-semibold text-gold-bright hover:bg-gold-deep/10"
                  >
                    Hub Overview
                  </Link>
                  <div className="border-t border-gold-deep/10" />
                  {BUZZ_HUB_CHILDREN.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={closeAll}
                      className={clsx(
                        "block px-4 py-2.5 text-sm transition-colors hover:bg-gold-deep/10 hover:text-gold-bright",
                        pathname === child.href ? "text-gold-bright" : "text-cream/85"
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/shop"
              className={clsx(
                "text-sm font-medium tracking-wide transition-colors hover:text-gold-bright",
                pathname === "/shop" ? "text-gold-bright" : "text-cream/85"
              )}
            >
              Garden Gold Shop
            </Link>
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
              <li>
                <button
                  type="button"
                  onClick={() => setMobileHubOpen((open) => !open)}
                  aria-expanded={mobileHubOpen}
                  className={clsx(
                    "flex w-full items-center justify-between text-sm font-medium tracking-wide",
                    isBuzzHubActive ? "text-gold-bright" : "text-cream/85"
                  )}
                >
                  The Buzz Hub
                  <ChevronDown
                    className={clsx(
                      "h-4 w-4 transition-transform",
                      mobileHubOpen && "rotate-180"
                    )}
                  />
                </button>
                {mobileHubOpen && (
                  <ul className="mt-3 flex flex-col gap-3 border-l border-gold-deep/20 pl-4">
                    <li>
                      <Link
                        href="/buzz-hub"
                        onClick={closeAll}
                        className="text-sm font-semibold text-gold-bright"
                      >
                        Hub Overview
                      </Link>
                    </li>
                    {BUZZ_HUB_CHILDREN.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={closeAll}
                          className={clsx(
                            "text-sm",
                            pathname === child.href
                              ? "text-gold-bright"
                              : "text-cream/85"
                          )}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="/shop"
                  onClick={closeAll}
                  className={clsx(
                    "text-sm font-medium tracking-wide",
                    pathname === "/shop" ? "text-gold-bright" : "text-cream/85"
                  )}
                >
                  Garden Gold Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/account"
                  onClick={closeAll}
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
