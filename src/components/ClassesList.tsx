"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site";

export default function ClassesList() {
  const { classesSection } = siteConfig;
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="classes"
      className="py-24 md:py-36 px-6 md:px-12 hairline-b bg-[#0A0A0A] relative"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Image Preview that follows cursor on Desktop */}
      {activeImage && (
        <div
          className="hidden md:block fixed pointer-events-none z-40 w-72 h-44 rounded-lg overflow-hidden border border-hairline shadow-2xl transition-transform duration-150 ease-out"
          style={{
            left: `${mousePos.x + 24}px`,
            top: `${mousePos.y - 80}px`,
          }}
        >
          <Image
            src={activeImage}
            alt="Class Preview"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}

      {/* Section Header */}
      <div className="flex items-baseline justify-between mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-accent block">
          {classesSection.label}
        </span>
        <span className="text-xs font-mono uppercase tracking-widest text-muted">
          All Levels · Beginner to Advanced
        </span>
      </div>

      {/* Stacked Rows (Gang.tv capabilities-style) */}
      <div className="hairline-t">
        {classesSection.classes.map((item, index) => (
          <div
            key={item.id}
            id={`class-${item.id}`}
            onMouseEnter={() => setActiveImage(item.previewImage)}
            onMouseLeave={() => setActiveImage(null)}
            data-cursor="view"
            className="group py-8 md:py-12 hairline-b flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:bg-surface/50 px-2 md:px-6 -mx-2 md:-mx-6 cursor-pointer"
          >
            {/* Number + Title */}
            <div className="flex items-baseline gap-6 md:gap-10">
              <span className="text-sm font-mono text-muted group-hover:text-accent transition-colors">
                /0{index + 1}
              </span>
              <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-offwhite group-hover:text-accent group-hover:translate-x-3 transition-all duration-300">
                {item.title}
              </h3>
            </div>

            {/* Tagline & Batches Description */}
            <div className="max-w-md text-sm md:text-base text-[#B0AEA7] space-y-2 group-hover:text-offwhite transition-colors">
              <p className="text-offwhite font-medium">{item.batches}</p>
              <p className="text-xs md:text-sm line-clamp-2 text-[#C0BEB8]">{item.tagline}</p>
            </div>

            {/* Enquire Link */}
            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Flawless%20Dance%20Studio,%20I%20want%20to%20enquire%20about%20${encodeURIComponent(item.title)}%20classes`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest uppercase text-offwhite group-hover:text-accent transition-colors"
              >
                <span>{item.linkText}</span>
                <span className="text-accent group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
