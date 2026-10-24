"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { siteConfig, StudioReelItem, VideoReviewItem } from "@/content/site";
import VideoModal from "@/components/VideoModal";

const photoArchive = [
  { src: "/media/hero-1.jpg", title: "FDFS Elite Crew Rehearsals", tag: "Studio" },
  { src: "/media/hero-2.jpg", title: "Urban Street Dance Drills", tag: "Hip Hop" },
  { src: "/media/hero-3.jpg", title: "Sector 16 Main Wooden Floor", tag: "Campus" },
  { src: "/media/hero-4.jpg", title: "Annual Stage Showcase Group", tag: "Showcase" },
  { src: "/media/hero-5.jpg", title: "Morning Cardio Zumba Flow", tag: "Fitness" },
  { src: "/media/news-performance.jpg", title: "Classical Fusion Stage Routine", tag: "Stage" },
  { src: "/media/class-dance.jpg", title: "Breakdance & Freeze Poses", tag: "Urban" },
  { src: "/media/class-zumba.jpg", title: "Rhythm & Stamina Conditioning", tag: "Zumba" },
  { src: "/media/class-ladies.jpg", title: "Ladies Batch Group Celebration", tag: "Ladies" },
  { src: "/media/team-avinash.jpg", title: "Director Avinash Mishra Choreography", tag: "Faculty" },
  { src: "/media/team-ankit.jpg", title: "Ankit Gupta Hip Hop Gold Session", tag: "Faculty" },
  { src: "/media/news-workshop.jpg", title: "Intensive Waacking Masterclass", tag: "Workshop" },
];

function GalleryReelCard({ reel }: { reel: StudioReelItem }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-hairline hover:border-accent transition-all duration-500 flex flex-col justify-between bg-surface">
      <div className="relative w-full overflow-hidden bg-black aspect-[9/14]">
        <video
          src={reel.videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-85 pointer-events-none" />

        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-accent uppercase border border-white/10 pointer-events-none flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {reel.category}
        </span>
        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[9px] font-mono text-offwhite/80 uppercase border border-white/10 pointer-events-none">
          Live Reel
        </span>
        <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-offwhite border border-white/10 pointer-events-none">
          {reel.duration}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-display font-bold text-offwhite group-hover:text-accent transition-colors mb-2">
          {reel.title}
        </h3>
        <p className="text-xs text-muted leading-relaxed">
          {reel.description}
        </p>
      </div>
    </div>
  );
}

function GalleryReviewCard({
  item,
  isUnmuted,
  onToggleSound,
  onMouseEnter,
  onMouseLeave,
}: {
  item: VideoReviewItem;
  isUnmuted: boolean;
  onToggleSound: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isUnmuted;
      if (isUnmuted) videoRef.current.play().catch(() => {});
    }
  }, [isUnmuted]);

  const handleToggleSound = () => {
    if (videoRef.current) {
      const willUnmute = videoRef.current.muted;
      videoRef.current.muted = !willUnmute;
      if (willUnmute) {
        videoRef.current.play().catch(() => {});
      }
    }
    onToggleSound();
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
    }
    onMouseEnter();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
    onMouseLeave();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleToggleSound}
      className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col justify-between bg-surface cursor-pointer select-none ${
        isUnmuted ? "border-accent shadow-[0_0_35px_rgba(255,61,110,0.3)] scale-[1.01]" : "border-hairline hover:border-offwhite/40"
      }`}
    >
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

        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/20 to-transparent opacity-85 pointer-events-none" />

        {/* Audio Toggle Button */}
        <div className="absolute top-3 right-3 z-10">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleToggleSound();
            }}
            className={`px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider backdrop-blur-md flex items-center gap-1.5 border transition-all duration-300 ${
              isUnmuted
                ? "bg-accent text-[#0A0A0A] border-accent font-bold shadow-lg scale-105"
                : "bg-black/70 text-offwhite border-white/15 hover:border-accent hover:text-accent"
            }`}
          >
            {isUnmuted ? (
              <>
                <span className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 h-full bg-[#0A0A0A] animate-pulse" />
                  <span className="w-0.5 h-2 bg-[#0A0A0A] animate-bounce" />
                  <span className="w-0.5 h-3 bg-[#0A0A0A] animate-pulse" />
                </span>
                <span>Unmuted</span>
              </>
            ) : (
              <>
                <span>🔇</span>
                <span>Hover / Tap</span>
              </>
            )}
          </button>
        </div>

        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[9px] font-mono text-accent uppercase border border-white/10 flex items-center gap-1.5 pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Speech Denoised
        </span>
        <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-offwhite border border-white/10 pointer-events-none">
          {item.duration}
        </span>

        <div className="absolute bottom-3 left-3 right-16 pointer-events-none">
          <p className="text-xs font-display font-semibold text-offwhite line-clamp-2">
            &ldquo;{item.highlightText}&rdquo;
          </p>
        </div>
      </div>

      <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
        <p className="text-xs text-muted leading-relaxed line-clamp-3">
          {item.quote}
        </p>
        <div className="pt-3 hairline-t">
          <h4 className="font-display font-bold text-sm text-offwhite group-hover:text-accent transition-colors">
            {item.name}
          </h4>
          <span className="text-[11px] font-mono text-accent block mt-0.5">
            {item.badge}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function GalleryClient() {
  const [filter, setFilter] = useState<"all" | "reels" | "reviews" | "youtube" | "photos">("all");
  const [unmutedReviewId, setUnmutedReviewId] = useState<string | null>(null);
  const [activeYoutubeModal, setActiveYoutubeModal] = useState<{
    title: string;
    style: string;
    youtubeId: string;
  } | null>(null);

  const { studioReels, videoReviews, youtubeShowcase } = siteConfig;

  return (
    <main className="pt-24 min-h-screen bg-[#0A0A0A]">
      {/* Editorial Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 hairline-b">
        <span className="text-xs font-mono uppercase tracking-widest text-accent mb-4 block">
          /Media Archive
        </span>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tight text-offwhite mb-6">
          Video &amp; Visuals.
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-3xl leading-relaxed">
          Watch studio reels, student video reviews, stage choreographies from our YouTube channel, and high-energy moments from Sector 16 &amp; Sector 5.
        </p>
        <p className="text-xs font-mono text-accent mt-3">
          ✦ Continuous video loops · Hover or tap any student review to listen with denoised sound
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-8">
          {[
            { id: "all", label: "All Media" },
            { id: "reels", label: `Studio Reels (${studioReels.length})` },
            { id: "reviews", label: `Video Reviews (${videoReviews.length})` },
            { id: "youtube", label: `YouTube Stage Shows (${youtubeShowcase.length})` },
            { id: "photos", label: `Photo Archive (${photoArchive.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as typeof filter)}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                filter === tab.id
                  ? "bg-accent text-[#0A0A0A] font-bold shadow-lg"
                  : "bg-surface border border-hairline text-muted hover:text-offwhite hover:border-offwhite/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 1. STUDIO REELS SECTION (PURE SEAMLESS VIDEO LOOPS) */}
      {(filter === "all" || filter === "reels") && (
        <section className="py-16 px-6 md:px-12 hairline-b">
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent block mb-1">
                /Direct From Studio
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-offwhite">
                Studio Reels &amp; Campus Clips
              </h2>
            </div>
            <span className="text-xs font-mono text-muted uppercase">Continuous Live Visuals</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studioReels.map((reel) => (
              <GalleryReelCard key={reel.id} reel={reel} />
            ))}
          </div>
        </section>
      )}

      {/* 2. STUDENT VIDEO REVIEWS (INLINE AUTOPLAY WITH HOVER/TAP UNMUTE) */}
      {(filter === "all" || filter === "reviews") && (
        <section className="py-16 px-6 md:px-12 hairline-b">
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent block mb-1">
                /Student Voices
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-offwhite">
                Video Testimonials (Audio Enhanced)
              </h2>
            </div>
            <span className="text-xs font-mono text-accent uppercase">
              ★ Denoised Speech · Hover to unmute
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoReviews.map((item) => (
              <GalleryReviewCard
                key={item.id}
                item={item}
                isUnmuted={unmutedReviewId === item.id}
                onToggleSound={() =>
                  setUnmutedReviewId((prev) => (prev === item.id ? null : item.id))
                }
                onMouseEnter={() => setUnmutedReviewId(item.id)}
                onMouseLeave={() =>
                  setUnmutedReviewId((prev) => (prev === item.id ? null : prev))
                }
              />
            ))}
          </div>
        </section>
      )}

      {/* 3. YOUTUBE SHOWCASE SECTION */}
      {(filter === "all" || filter === "youtube") && (
        <section className="py-16 px-6 md:px-12 hairline-b">
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent block mb-1">
                /YouTube Channel
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-offwhite">
                Best Performances &amp; Stage Shows
              </h2>
            </div>
            <a
              href={siteConfig.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-accent hover:underline uppercase"
            >
              @flawlessdancefitnessstudio3284 ↗
            </a>
          </div>

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
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-accent/90 text-[#0A0A0A] flex items-center justify-center font-bold text-sm shadow-xl group-hover:scale-110 group-hover:bg-accent transition-all duration-300">
                      ▶
                    </div>
                  </div>

                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-offwhite">
                    {video.duration}
                  </span>
                </div>

                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-accent block mb-1">
                      {video.style}
                    </span>
                    <h3 className="text-sm font-display font-bold text-offwhite line-clamp-2 group-hover:text-accent transition-colors">
                      {video.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-muted uppercase mt-3 block">
                    Watch Stream ↗
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* YouTube Channel Promo */}
          <div className="mt-12 p-8 rounded-2xl border border-hairline bg-surface/60 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-display font-bold text-offwhite mb-1">
                Explore More on YouTube
              </h3>
              <p className="text-xs text-muted">
                Subscribe to @flawlessdancefitnessstudio3284 for weekly uploads, student rehearsals &amp; competition choreography.
              </p>
            </div>
            <a
              href={siteConfig.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-display font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
            >
              Open YouTube Channel ↗
            </a>
          </div>
        </section>
      )}

      {/* 4. PHOTO ARCHIVE */}
      {(filter === "all" || filter === "photos") && (
        <section className="py-16 px-6 md:px-12 hairline-b">
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent block mb-1">
                /Stills
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-offwhite">
                Studio Photography Archive
              </h2>
            </div>
            <span className="text-xs font-mono text-muted uppercase">High-Resolution Stills</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {photoArchive.map((item, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-hairline bg-surface"
                data-cursor="view"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-accent block">
                      {item.tag}
                    </span>
                    <h3 className="text-base font-display font-bold text-offwhite">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-20 px-6 md:px-12 text-center bg-[#0A0A0A]">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-offwhite">
            Ready to dance with us in Ghansoli?
          </h2>
          <p className="text-sm text-muted">
            Batches open for kids, teenagers, adults, and ladies. Direct WhatsApp assistance for batch schedules and enrollment.
          </p>
          <div className="flex justify-center gap-4 flex-wrap pt-2">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Flawless%20Studio,%20I%20saw%20your%20video%20gallery%20and%20want%20to%20enquire%20about%20classes!`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-accent text-[#0A0A0A] font-display font-bold text-xs uppercase tracking-wider hover:bg-offwhite transition-colors"
            >
              Enquire on WhatsApp 💬
            </a>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border border-hairline text-offwhite font-display font-bold text-xs uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
            >
              Instagram @flawless_dfs ↗
            </a>
          </div>
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
    </main>
  );
}
