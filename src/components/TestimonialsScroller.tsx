"use client";

import { useState, useRef, useEffect } from "react";
import { siteConfig, VideoReviewItem } from "@/content/site";

function ReviewVideoCard({
  item,
  isUnmuted,
  onActivate,
}: {
  item: VideoReviewItem;
  isUnmuted: boolean;
  onActivate: (id: string | null) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Guarantee continuous autoplay on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  // Update muted state and play audio when unmuted
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isUnmuted;
      if (isUnmuted) {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [isUnmuted]);

  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    onActivate(isUnmuted ? null : item.id);
  };

  return (
    <div
      onMouseEnter={() => onActivate(item.id)}
      onMouseLeave={() => onActivate(null)}
      onClick={toggleAudio}
      className={`flex-shrink-0 w-[260px] sm:w-[300px] md:w-[320px] rounded-2xl bg-surface border overflow-hidden snap-start transition-all duration-300 cursor-pointer group flex flex-col justify-between select-none outline-none ${
        isUnmuted
          ? "border-accent ring-1 ring-accent shadow-[0_0_35px_rgba(255,61,110,0.35)] scale-[1.01]"
          : "border-hairline hover:border-offwhite/40"
      }`}
    >
      {/* Autoplaying Portrait Video Container (9:13) */}
      <div className="relative aspect-[9/13] w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={item.videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/20 to-transparent opacity-85 pointer-events-none" />

        {/* Floating Sound Toggle Badge */}
        <div className="absolute top-3 right-3 z-10">
          <button
            type="button"
            onClick={toggleAudio}
            className={`px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider backdrop-blur-md flex items-center gap-1.5 border transition-all duration-300 ${
              isUnmuted
                ? "bg-accent text-[#0A0A0A] border-accent font-bold shadow-lg scale-105"
                : "bg-black/75 text-offwhite border-white/15 hover:border-accent hover:text-accent"
            }`}
          >
            {isUnmuted ? (
              <>
                <span className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 h-full bg-[#0A0A0A] animate-pulse" />
                  <span className="w-0.5 h-2 bg-[#0A0A0A] animate-bounce" />
                  <span className="w-0.5 h-3 bg-[#0A0A0A] animate-pulse" />
                </span>
                <span>Sound ON</span>
              </>
            ) : (
              <>
                <span>🔇</span>
                <span>Hover / Tap</span>
              </>
            )}
          </button>
        </div>

        {/* Audio Denoised Tag */}
        <div className="absolute top-3 left-3 pointer-events-none">
          <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[9px] font-mono uppercase tracking-wider text-accent border border-white/10 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Speech Denoised
          </span>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-3 right-3 pointer-events-none">
          <span className="px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-offwhite border border-white/10">
            {item.duration}
          </span>
        </div>

        {/* Bottom Highlight on Video */}
        <div className="absolute bottom-3 left-3 right-16 pointer-events-none">
          <p className="text-xs font-display font-semibold text-offwhite line-clamp-2">
            &ldquo;{item.highlightText}&rdquo;
          </p>
        </div>
      </div>

      {/* Reviewer Details Box */}
      <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
        <p className="text-xs text-muted leading-relaxed line-clamp-3">
          {item.quote}
        </p>

        <div className="pt-3 hairline-t">
          <h5 className="font-display font-bold text-sm text-offwhite group-hover:text-accent transition-colors">
            {item.name}
          </h5>
          <span className="text-[11px] font-mono text-accent block mt-0.5">
            {item.badge}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsScroller() {
  const [activeTab, setActiveTab] = useState<"video" | "text">("video");
  const [activeReviewId, setActiveReviewId] = useState<string | null>(null);

  const { testimonials, videoReviews } = siteConfig;

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 hairline-b bg-[#0A0A0A] overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-accent block mb-2">
            {testimonials.label}
          </span>
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-offwhite tracking-tight">
            Real Student Reviews.
          </h3>
          <p className="text-sm text-muted mt-2 max-w-xl">
            Videos play live silently on page · Hover or tap any student to unmute and hear their voice.
          </p>
        </div>

        {/* Tab Selector & Rating Badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <span className="text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-full border border-hairline text-accent bg-surface">
            ★ {testimonials.badge}
          </span>

          <div className="flex items-center gap-2 p-1 rounded-full bg-surface border border-hairline">
            <button
              onClick={() => setActiveTab("video")}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                activeTab === "video"
                  ? "bg-accent text-[#0A0A0A] font-bold shadow-lg"
                  : "text-muted hover:text-offwhite"
              }`}
            >
              Video Reviews ({videoReviews.length})
            </button>
            <button
              onClick={() => setActiveTab("text")}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                activeTab === "text"
                  ? "bg-accent text-[#0A0A0A] font-bold shadow-lg"
                  : "text-muted hover:text-offwhite"
              }`}
            >
              Google &amp; Justdial ({testimonials.items.length})
            </button>
          </div>
        </div>
      </div>

      {/* Tab 1: Video Reviews Grid/Scroller (INLINE AUTOPLAY WITH HOVER/TAP UNMUTE) */}
      {activeTab === "video" && (
        <div>
          <div className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none -mx-6 md:-mx-12 px-6 md:px-12 snap-x snap-mandatory">
            {videoReviews.map((item) => (
              <ReviewVideoCard
                key={item.id}
                item={item}
                isUnmuted={activeReviewId === item.id}
                onActivate={(id) => setActiveReviewId(id)}
              />
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between text-xs font-mono text-muted">
            <span>← Swipe or scroll to view all 6 student video reviews</span>
            <span className="text-accent">Hover or tap card to listen</span>
          </div>
        </div>
      )}

      {/* Tab 2: Google & Justdial Written Reviews Scroller */}
      {activeTab === "text" && (
        <div>
          <div className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none -mx-6 md:-mx-12 px-6 md:px-12 snap-x snap-mandatory">
            {testimonials.items.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[300px] sm:w-[380px] md:w-[420px] p-8 rounded-2xl bg-surface border border-hairline flex flex-col justify-between space-y-6 snap-start hover:border-accent/50 transition-colors"
              >
                {/* Star Rating */}
                <div className="flex items-center gap-1 text-accent text-sm">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="text-sm sm:text-base text-offwhite/90 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="pt-4 hairline-t">
                  <h5 className="font-display font-bold text-base text-offwhite">
                    {item.name}
                  </h5>
                  <div className="flex items-center justify-between text-xs text-muted mt-1 font-mono">
                    <span>{item.badge}</span>
                    <span className="text-accent font-semibold">{item.source}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between text-xs font-mono text-muted">
            <span>← Swipe to read verified reviews</span>
            <span className="text-accent">100+ Reviews on Google &amp; Justdial</span>
          </div>
        </div>
      )}
    </section>
  );
}
