"use client";

import { useEffect } from "react";
import { siteConfig } from "@/content/site";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoTitle?: string;
  subtitle?: string;
  youtubeId?: string;
  videoSrc?: string;
  isVertical?: boolean;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoTitle = "Flawless Studio Showcase Routine",
  subtitle = "In-Studio Showcase",
  youtubeId,
  videoSrc,
  isVertical = false,
}: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className={`relative w-full ${
          isVertical ? "max-w-md sm:max-w-lg" : "max-w-5xl"
        } rounded-2xl bg-[#0F0F12] border border-hairline overflow-hidden shadow-2xl flex flex-col max-h-[92vh]`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 hairline-b bg-surface/80 backdrop-blur-sm z-10">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent block">
              {subtitle}
            </span>
            <h4 className="text-sm sm:text-base font-display font-bold text-offwhite truncate max-w-[280px] sm:max-w-md">
              {videoTitle}
            </h4>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-surface border border-hairline text-offwhite flex items-center justify-center hover:bg-accent hover:text-[#0A0A0A] transition-colors cursor-pointer text-sm shrink-0 ml-2"
            aria-label="Close video player"
          >
            ✕
          </button>
        </div>

        {/* Media Container: Local MP4 Video or YouTube Embed */}
        <div
          className={`relative w-full bg-black flex items-center justify-center ${
            isVertical ? "aspect-[9/16] max-h-[68vh]" : "aspect-video"
          }`}
        >
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              muted
              playsInline
              loop
              className="w-full h-full object-contain cursor-pointer"
              onClick={(e) => {
                const v = e.currentTarget;
                if (v.paused) v.play();
                else v.pause();
              }}
            />
          ) : youtubeId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          ) : (
            <div className="p-8 text-center text-muted font-mono text-sm">
              Video source not available
            </div>
          )}
        </div>

        {/* Bottom Action Footer */}
        <div className="p-3 sm:p-4 hairline-t flex flex-col sm:flex-row items-center justify-between gap-3 bg-surface/50">
          <p className="text-[11px] text-muted font-mono text-center sm:text-left">
            Flawless Dance &amp; Fitness Studio · Ghansoli
          </p>

          <div className="flex gap-2 w-full sm:w-auto justify-end">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Flawless%20Studio,%20I%20just%20watched%20your%20video%20"${encodeURIComponent(
                videoTitle
              )}"%20and%20want%20details%20on%20joining!`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2 rounded-full bg-accent text-[#0A0A0A] text-xs font-semibold uppercase tracking-wider hover:bg-offwhite transition-colors text-center"
            >
              Enquire on WhatsApp 💬
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
