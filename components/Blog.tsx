import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/content";

function formatShortDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export default function Blog() {
  return (
    <div className="bg-cream pt-16">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">
            Notes From The Garden
          </p>
          <h1 className="mt-4 font-display text-3xl text-ink-deep sm:text-4xl">
            Our Blog
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-ink-deep/75">
            Dispatches from inside the hives — photos, video, and stories on
            what&apos;s blooming, what we&apos;re inspecting, and what
            we&apos;re learning along the way.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/buzz-hub/blog/${post.slug}`}
              className="group overflow-hidden rounded-lg border border-umber/15 bg-white/60 transition-colors hover:bg-white/80"
            >
              <div className="relative h-40 w-full overflow-hidden bg-umber/5 sm:h-48">
                <Image
                  src={post.media.src}
                  alt=""
                  fill
                  aria-hidden
                  className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-0 top-4 rounded-r-full bg-gold-bright py-1 pl-3 pr-4 text-[11px] font-bold uppercase tracking-wide text-ink-deep shadow-sm">
                  {formatShortDate(post.date)}
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-ink-deep/80 px-3 py-1 text-[11px] font-semibold text-cream">
                  {post.category}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <h2 className="font-display text-xl text-ink-deep">{post.title}</h2>
                <p className="mt-2 text-sm text-ink-deep/70">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
