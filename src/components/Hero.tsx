"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site";

export default function Hero() {
  const { hero } = siteConfig;
  const slides = hero.slides;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Pure automatic slideshow: transitions seamlessly every 10 seconds with zero manual controls
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen min-h-[640px] flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-[#0A0A0A]">
      {/* Background Slideshow (Pure Automatic 10s Crossfade) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.caption}
                fill
                priority={index === 0}
                className={`object-cover object-center filter brightness-[0.45] contrast-110 transition-transform duration-[12000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          );
        })}

        {/* Ambient Dark Cinema Gradients */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/25 to-transparent" />
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#0A0A0A]/70 via-transparent to-transparent" />
      </div>

      {/* Top Spacer */}
      <div className="z-30 pt-16"></div>

      {/* Bottom Minimalist Editorial Caption (Pure gang.tv layout, no buttons) */}
      <div className="z-30 flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-widest text-muted mb-2 font-mono">
            Flawless Dance &amp; Fitness Studio
          </p>
          <h2 className="text-sm md:text-base font-medium text-offwhite tracking-wide">
            {slides[currentSlide].caption}
          </h2>
        </div>

        <div>
          <a
            href={hero.discoverHref}
            className="group inline-flex items-center gap-3 text-xs md:text-sm font-semibold uppercase tracking-widest text-offwhite hover:text-accent transition-colors"
          >
            <span>{hero.discoverLabel}</span>
            <span className="w-6 h-[1px] bg-offwhite group-hover:bg-accent group-hover:w-10 transition-all duration-300"></span>
            <span className="text-accent">↓</span>
          </a>
        </div>
      </div>

      {/* Subtle Minimalist 10-Second Hairline Progress Tracker */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10 z-30 pointer-events-none">
        <div
          key={currentSlide}
          className="h-full bg-accent/60 animate-progress"
          style={{
            animation: "progressFill 10s linear infinite",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes progressFill {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
