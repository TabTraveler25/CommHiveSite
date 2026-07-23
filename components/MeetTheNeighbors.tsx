import Image from "next/image";

const ROLES = [
  {
    title: "The Queen",
    body: "She's the only one laying eggs — up to 2,000 a day at her peak — and the whole colony organizes itself around keeping her healthy.",
  },
  {
    title: "The Workers",
    body: "All female, and they do everything: nurse the young, build comb, guard the entrance, and fly miles round-trip gathering nectar for your honey.",
  },
  {
    title: "The Drones",
    body: "The colony's males. Their one job is mating with a queen from another hive, which is how healthy genetic diversity spreads between colonies.",
  },
];

export default function MeetTheNeighbors() {
  return (
    <div className="bg-cream pt-16">
      <section className="relative overflow-hidden px-6 py-16">
        <Image
          src="/images/illustrations/bee-1.webp"
          alt=""
          width={900}
          height={788}
          aria-hidden
          className="pointer-events-none absolute -right-6 top-10 hidden w-24 -rotate-12 opacity-80 sm:block md:w-28"
        />
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">
            The Story of Our Bees
          </p>
          <h1 className="mt-4 font-display text-3xl text-ink-deep sm:text-4xl">
            Meet The Neighbors
          </h1>
          <p className="mt-6 text-ink-deep/75">
            Every jar of Garden Gold starts with a few hundred thousand very
            small neighbors. Each hive at Boxwoods is its own tiny
            civilization — tens of thousands of bees, one queen, and a whole
            lot of teamwork — living right here in the garden, going about
            their day while we go about ours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="text-center font-display text-2xl text-ink-deep">
          Who&apos;s Who in the Hive
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {ROLES.map((role) => (
            <div
              key={role.title}
              className="rounded-lg border border-umber/15 bg-white/60 p-6"
            >
              <h3 className="font-display text-lg text-gold-deep">
                {role.title}
              </h3>
              <p className="mt-2 text-sm text-ink-deep/70">{role.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-umber/10 px-6 py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center md:flex-row md:text-left">
          <div className="hidden w-28 shrink-0 md:block">
            <Image
              src="/images/illustrations/honeycomb-cell.webp"
              alt=""
              width={1200}
              height={1200}
              aria-hidden
            />
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink-deep">
              Why It Matters
            </h2>
            <p className="mt-4 text-ink-deep/75">
              Honeybee colonies across the country have been declining for
              years — habitat loss, pesticides, and disease have made it a
              genuinely hard time to be a bee. And since roughly one in every
              three bites of food you eat depends on pollinators, that&apos;s
              not just a bee problem.
            </p>
            <p className="mt-4 text-ink-deep/75">
              A managed hive tucked into a neighborhood garden — with
              regular inspections, mite treatment, and forage nearby — is one
              of the more effective things a community can do about it.
              That&apos;s the whole reason Boxwoods exists: happier, healthier
              bees, right in the middle of everyday life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
