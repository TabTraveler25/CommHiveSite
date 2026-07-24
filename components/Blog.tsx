import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/content";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
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
              className="flex items-center gap-5 rounded-lg border border-umber/15 bg-white/60 p-4 transition-colors hover:bg-white/80 sm:p-6"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-umber/5 sm:h-24 sm:w-24">
                <Image
                  src={post.media.src}
                  alt=""
                  fill
                  aria-hidden
                  className="object-contain p-2"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-deep">
                  {formatDate(post.date)}
                </p>
                <h2 className="mt-1 font-display text-xl text-ink-deep">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-ink-deep/70">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
