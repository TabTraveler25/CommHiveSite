export type Product = {
  slug: string;
  name: string;
  group: "honey" | "apothecary" | "hardware";
  price: number;
  copy: string;
  cta?: string;
  image?: string;
};

export const products: Product[] = [
  // 1. Premium "Garden Gold" Honey Collection
  {
    slug: "heart-harvest-comb",
    name: "Garden Gold Heart-Harvest Comb",
    group: "honey",
    price: 34,
    copy: "Pure, untouched comb honey built, filled, and capped entirely by the bees themselves within elegant heart-shaped cassettes.",
    cta: "Secure This Season's Harvest",
    image: "/images/products/heart-harvest-comb.webp",
  },
  {
    slug: "bespoke-comb-cassettes",
    name: "Boxwoods Bespoke Comb Cassettes (250g / 500g)",
    group: "honey",
    price: 28,
    copy: "Professional, retail-ready section comb honey meticulously cut for the sophisticated palate.",
    image: "/images/products/bespoke-comb-cassettes.webp",
  },
  {
    slug: "velvet-creamed-honey",
    name: "Garden Gold Velvet Creamed Honey",
    group: "honey",
    price: 22,
    copy: "A perfectly smooth, spreadable luxury honey varietal designed for fine pairings.",
    image: "/images/products/velvet-creamed-honey.webp",
  },
  {
    slug: "neighborhood-nectar-flight",
    name: "Neighborhood Nectar Flight",
    group: "honey",
    price: 48,
    copy: "A curated seasonal collection of small-batch jars mirroring our shifting garden forage.",
    image: "/images/products/neighborhood-nectar-flight.webp",
  },
  // 2. The Boxwoods Apothecary & Home Line
  {
    slug: "garden-glow-candles",
    name: "Garden Glow Beeswax Candles",
    group: "apothecary",
    price: 26,
    copy: "Hand-poured in artistic, decorative molds. Emits a natural, delicate honeyed aroma.",
    image: "/images/products/garden-glow-candles.webp",
  },
  {
    slug: "royal-jelly-cream",
    name: "Royal Jelly Rejuvenation Cream",
    group: "apothecary",
    price: 58,
    copy: 'Premium, nutrient-dense facial care using elite, high-value "bee milk."',
    image: "/images/products/royal-jelly-cream.webp",
  },
  {
    slug: "propolis-defense-salve",
    name: "Propolis Natural Defense Salve",
    group: "apothecary",
    price: 24,
    copy: "Artisanal skin defense infused with the hive's own raw medicinal antibiotic.",
    image: "/images/products/propolis-defense-salve.webp",
  },
  {
    slug: "nectar-wax-soaps",
    name: "Nectar & Wax Artisanal Soaps / Botanical Lip Balms",
    group: "apothecary",
    price: 14,
    copy: "Pure garden-harvested beeswax blended with local botanical pollinator scents.",
    image: "/images/products/nectar-wax-soaps.webp",
  },
  // 3. Pro-Grade Beekeeping Hardware
  {
    slug: "observation-hive-kit",
    name: "Ulster-Style Premium Observation Hives",
    group: "hardware",
    price: 895,
    copy: "Outfitted with integrated BroodMinder telemetry sensors for inspired backyard conservationists.",
  },
  {
    slug: "smart-starter-kit",
    name: "Smart Starter Kit",
    group: "hardware",
    price: 420,
    copy: "Luxury protective apparel and everything a new backyard beekeeper needs to begin, sensor-ready.",
  },
];
