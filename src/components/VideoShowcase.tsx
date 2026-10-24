"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { siteConfig, StudioReelItem } from "@/content/site";
import VideoModal from "./VideoModal";

function ReelCard({ reel }: { reel: StudioReelItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const posterPath = reel.videoSrc.replace(/\.mp4$/i, ".webp");

  return (
    <div
      id={`reel-${reel.id}`}
      className="group relative rounded-2xl overflow-hidden border border-hairline hover:border-accent transition-all duration-500 flex flex-col justify-between bg-surface shrink-0 w-[82vw] sm:w-[360px] md:w-auto snap-center"
    >
      {/* Autoplaying Seamless Video Loop with Instant WebP Poster */}
      <div className="relative w-full overflow-hidden bg-black aspect-[9/14]">
        <video
          ref={videoRef}
          src={reel.videoSrc}
          poster={posterPath}
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-85 pointer-events-none" />

        {/* Category Pill */}
        <div className="absolute top-4 left-4 pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-accent border border-white/10 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {reel.category}
          </span>
        </div>

        {/* Live Reel Tag */}
        <div className="absolute top-4 right-4 pointer-events-none">
          <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[9px] font-mono uppercase tracking-wider text-offwhite/80 border border-white/10">
            Live Reel
          </span>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-4 right-4 pointer-events-none">
          <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[11px] font-mono text-offwhite border border-white/10">
            {reel.duration}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="text-xl font-display font-bold text-offwhite group-hover:text-accent transition-colors mb-2">
          {reel.title}
        </h4>
        <p className="text-xs text-muted leading-relaxed">
          {reel.description}
        </p>
      </div>
    </div>
  );
}

export default function VideoShowcase() {
  const [activeTab, setActiveTab] = useState<"reels" | "youtube">("reels");
  const [activeYoutubeModal, setActiveYoutubeModal] = useState<{
    title: string;
    style: string;
    youtubeId: string;
  } | null>(null);

  const reelsContainerRef = useRef<HTMLDivElement>(null);

  const handleSwipe = (direction: "left" | "right") => {
    if (reelsContainerRef.current) {
      const scrollAmount = reelsContainerRef.current.clientWidth * 0.8;
      reelsContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const { studioReels, youtubeShowcase } = siteConfig;

  return (
    <>
      <section id="showcase" className="py-24 md:py-36 px-6 md:px-12 hairline-b bg-[#0A0A0A]">
        {/* Header with gang.tv slash label and tab switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-accent block mb-2">
              /Watch Us In Action
            </span>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-offwhite">
              Studio Reels &amp; Showcases.
            </h3>
            <p className="text-xs font-mono text-muted mt-2">
              Continuous live visual loops straight from our Ghansoli studios
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Swipe Controls for Mobile/Desktop & AI Agents */}
            {activeTab === "reels" && (
              <div className="flex items-center gap-1.5 md:hidden">
                <button
                  id="swipe-reels-left"
                  data-action="swipe-left"
                  aria-label="Swipe to previous reel"
                  onClick={() => handleSwipe("left")}
                  className="w-8 h-8 rounded-full border border-hairline bg-surface text-offwhite flex items-center justify-center text-xs hover:border-accent cursor-pointer"
                >
                  ←
                </button>
                <button
                  id="swipe-reels-right"
                  data-action="swipe-right"
                  aria-label="Swipe to next reel"
                  onClick={() => handleSwipe("right")}
                  className="w-8 h-8 rounded-full border border-hairline bg-surface text-offwhite flex items-center justify-center text-xs hover:border-accent cursor-pointer"
                >
                  →
                </button>
              </div>
            )}

            {/* Tab Selector */}
            <div className="flex items-center gap-2 p-1 rounded-full bg-surface border border-hairline self-start md:self-auto">
              <button
                id="tab-reels-btn"
                data-tab="reels"
                onClick={() => setActiveTab("reels")}
                className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === "reels"
                    ? "bg-accent text-[#0A0A0A] font-bold shadow-lg"
                    : "text-muted hover:text-offwhite"
                }`}
              >
                Live Reels ({studioReels.length})
              </button>
              <button
                id="tab-youtube-btn"
                data-tab="youtube"
                onClick={() => setActiveTab("youtube")}
                className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === "youtube"
                    ? "bg-accent text-[#0A0A0A] font-bold shadow-lg"
                    : "text-muted hover:text-offwhite"
                }`}
              >
                YouTube Shows ({youtubeShowcase.length})
              </button>
            </div>
          </div>
        </div>

        {/* Studio Reels View: PURE SEAMLESS LOOPING VIDEO REELS */}
        {activeTab === "reels" && (
          <div
            id="reels-swipe-track"
            ref={reelsContainerRef}
            data-agent-swipe="true"
            aria-label="Swipeable studio reels"
            className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory scroll-smooth"
          >
            {studioReels.map((reel) => (
              <ReelCard key={reel.id} reel={reel} />
            ))}
          </div>
        )}

        {/* YouTube Performance View */}
        {activeTab === "youtube" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {youtubeShowcase.map((video) => (
              <div
                key={video.id}
                onClick={() =>
                  setActiveYoutubeModal({
                    title: video.title,
                    style: video.style,
                    youtubeId: video.youtubeId,
                  })
                }
                data-cursor="play"
                className="group relative rounded-xl overflow-hidden border border-hairline bg-surface cursor-pointer hover:border-accent transition-all duration-300 flex flex-col justify-between"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-accent/90 text-[#0A0A0A] flex items-center justify-center font-bold text-sm shadow-xl group-hover:scale-110 group-hover:bg-accent transition-all duration-300">
                      ▶
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-offwhite">
                    {video.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-accent block mb-1">
                      {video.style}
                    </span>
                    <h4 className="text-base font-display font-bold text-offwhite line-clamp-2 group-hover:text-accent transition-colors">
                      {video.title}
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-muted uppercase mt-4 block">
                    YouTube Stream ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* YouTube Channel Banner Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl border border-hairline bg-surface/50 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-600/20 text-red-500 border border-red-500/30 flex items-center justify-center text-xl font-bold shrink-0">
              ▶
            </div>
            <div>
              <h4 className="text-base font-display font-bold text-offwhite">
                Flawless Dance &amp; Fitness Studio on YouTube
              </h4>
              <p className="text-xs text-muted">
                Watch routine choreography, annual stage shows &amp; student cyphers on @flawlessdancefitnessstudio3284
              </p>
            </div>
          </div>

          <a
            href={siteConfig.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-display font-bold text-xs uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Subscribe on YouTube</span>
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* YouTube Modal */}
      {activeYoutubeModal && (
        <VideoModal
          isOpen={!!activeYoutubeModal}
          onClose={() => setActiveYoutubeModal(null)}
          videoTitle={activeYoutubeModal.title}
          subtitle={activeYoutubeModal.style}
          youtubeId={activeYoutubeModal.youtubeId}
        />
      )}
    </>
  );
}
