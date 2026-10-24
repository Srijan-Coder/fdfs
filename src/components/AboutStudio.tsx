"use client";

import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function AboutStudio() {
  const { about } = siteConfig;

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 hairline-b bg-[#0A0A0A]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Slash Label & Title with Parenthesized Italic Serif */}
        <div className="lg:col-span-5">
          <span className="text-xs font-mono uppercase tracking-widest text-accent mb-6 block">
            {about.label}
          </span>
          <h3 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-offwhite leading-[1.05]">
            {about.headingPrefix}{" "}
            <span className="italic-serif text-accent font-normal">
              ({about.headingParenthesized})
            </span>{" "}
            {about.headingSuffix}
          </h3>
        </div>

        {/* Right Column: Bold Lead Sentence + Paragraph + Link */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-8 pt-2">
          <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-offwhite leading-snug">
            {about.leadSentence}
          </p>

          <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
            {about.body}
          </p>

          <div className="pt-4">
            <Link
              href={about.ctaHref}
              className="group inline-flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-offwhite hover:text-accent transition-colors"
            >
              <span>{about.ctaLabel}</span>
              <span className="w-8 h-[1px] bg-offwhite group-hover:bg-accent group-hover:w-12 transition-all duration-300"></span>
              <span className="text-accent">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
