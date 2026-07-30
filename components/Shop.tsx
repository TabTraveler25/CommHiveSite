"use client";

import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { products, type Product } from "@/lib/products";
import PlaceholderImage from "@/components/PlaceholderImage";
import GrainOverlay from "@/components/GrainOverlay";
import TrustSeal from "@/components/TrustSeal";

const GROUPS: {
  key: Product["group"];
  title: string;
  intro: string;
  accentImage?: string;
}[] = [
  {
    key: "honey",
    title: 'Premium "Garden Gold" Honey Collection',
    intro:
      "Every drop reflects the changing floral calendar of our neighborhood — from spring tulip poplar to rich summer sourwood.",
    accentImage: "/images/products/honey-section-accent.webp",
  },
  {
    key: "apothecary",
    title: "The Boxwoods Apothecary & Home Line",
    intro:
      "Skin and home essentials built from the hive's own raw materials — wax, propolis, and royal jelly.",
    accentImage: "/images/products/apothecary-section-accent.webp",
  },
  {
    key: "hardware",
    title: "Pro-Grade Beekeeping Hardware",
    intro:
      "Outfitted with integrated BroodMinder telemetry sensors for inspired backyard conservationists.",
  },
];

function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-umber/15 bg-white/60">
      {product.image ? (
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
          {product.featured && (
            <span className="absolute right-3 top-3 rounded-full bg-gold-bright px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink-deep shadow-sm">
              Featured
            </span>
          )}
        </div>
      ) : (
        <PlaceholderImage label={product.name} className="aspect-[4/3] w-full" />
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg text-ink-deep">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm text-ink-deep/70">{product.copy}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-gold-deep">
            ${product.price.toFixed(2)}
          </span>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="rounded-full bg-gold px-4 py-2 text-xs font-semibold text-ink-deep transition-colors hover:bg-gold-bright"
          >
            {product.cta ?? "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-umber/10 px-6 py-16">
        <GrainOverlay filterId="grain-shop-hero" opacity={0.05} />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 hidden select-none items-center font-display text-[8rem] font-semibold text-ink-deep/[0.06] sm:text-[10rem] md:flex"
        >
          GOLD
        </span>

        <div className="relative mx-auto flex max-w-5xl items-center justify-center gap-10">
          <div className="hidden shrink-0 flex-col items-center gap-4 md:flex">
            <Image
              src="/images/illustrations/comb-block.webp"
              alt=""
              width={1200}
              height={930}
              aria-hidden
              className="w-32"
            />
            <TrustSeal
              ringText="SMALL BATCH • GARDEN GROWN •"
              line1="HIVE"
              line2="TO JAR"
              tone="light"
            />
          </div>
          <div className="max-w-2xl text-center">
            <h1 className="font-display text-3xl text-ink-deep sm:text-4xl">
              Honey, Straight From Our Garden
            </h1>
            <p className="mx-auto mt-4 text-ink-deep/70">
              What you taste changes with the seasons — tulip poplar in
              spring, sourwood by summer. Every jar comes from the hives you
              can watch online, so you always know exactly where it came
              from.
            </p>
          </div>
          <div className="hidden w-40 shrink-0 md:block">
            <Image
              src="/images/illustrations/honey-dipper-1.webp"
              alt=""
              width={1200}
              height={338}
              aria-hidden
            />
          </div>
        </div>
      </section>

      {GROUPS.map((group) => (
        <section key={group.key} className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="md:flex-1">
              <h2 className="font-display text-2xl text-ink-deep">{group.title}</h2>
              <p className="mt-2 max-w-2xl text-sm text-ink-deep/60">{group.intro}</p>
            </div>
            {group.accentImage && (
              <div className="relative aspect-[4/3] w-full max-w-sm shrink-0 overflow-hidden rounded-xl shadow-sm md:w-72">
                <Image
                  src={group.accentImage}
                  alt=""
                  fill
                  aria-hidden
                  className="object-cover"
                />
              </div>
            )}
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((p) => p.group === group.key)
              .map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
