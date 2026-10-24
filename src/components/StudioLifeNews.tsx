"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function StudioLifeNews() {
  const { studioLife } = siteConfig;

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 hairline-b bg-[#0A0A0A]">
      <div className="flex items-baseline justify-between mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-accent block">
          {studioLife.label}
        </span>
        <Link
          href="/gallery"
          className="text-xs font-mono uppercase tracking-widest text-muted hover:text-accent transition-colors inline-flex items-center gap-2 group"
        >
          <span>More Articles</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      <div className="max-w-2xl mb-16">
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-offwhite">
          What&apos;s Happening.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {studioLife.articles.map((item) => (
          <article key={item.id} className="group space-y-5">
            {/* 16:9 Media Frame */}
            <div
              className="relative aspect-video w-full overflow-hidden rounded-md border border-hairline bg-surface"
              data-cursor="view"
            >
              <Image
                src={item.image}
                alt={item.headline}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />
            </div>

            {/* Meta: Category + Date */}
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-muted">
              <span className="text-accent">{item.category}</span>
              <span>·</span>
              <span>{item.date}</span>
            </div>

            {/* Headline */}
            <h4 className="text-xl md:text-2xl font-display font-bold text-offwhite group-hover:text-accent transition-colors leading-snug">
              {item.headline}
            </h4>

            {/* Excerpt */}
            <p className="text-sm text-muted leading-relaxed">
              {item.excerpt}
            </p>

            {/* Read Link */}
            <div>
              <Link
                href={item.readLink}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-offwhite group-hover:text-accent transition-colors"
              >
                <span>Read</span>
                <span>↗</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
