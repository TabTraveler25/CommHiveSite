import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { BlogPost as BlogPostType } from "@/lib/content";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPost({ post }: { post: BlogPostType }) {
  return (
    <div className="bg-cream pt-16">
      <article className="mx-auto max-w-2xl px-6 py-16">
        <Link
          href="/buzz-hub/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-deep hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to the blog
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-gold-deep">
          {formatDate(post.date)}
        </p>
        <h1 className="mt-2 font-display text-3xl text-ink-deep sm:text-4xl">
          {post.title}
        </h1>

        <div className="relative mt-8 flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl bg-umber/5 sm:aspect-video">
          <Image
            src={post.media.src}
            alt=""
            fill
            aria-hidden
            className="object-contain p-10"
          />
        </div>

        <div className="mt-8 flex flex-col gap-4">
          {post.body.map((paragraph, i) => (
            <p key={i} className="text-ink-deep/75">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}
