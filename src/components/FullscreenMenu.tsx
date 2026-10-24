"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import StudioStatusPill from "./StudioStatusPill";
import gsap from "gsap";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuLinks = [
  {
    num: "01",
    label: "Trial Pass",
    href: "/trial",
    category: "FAST BOOKING",
    badge: "FREE 1ST SESSION ⚡",
    desc: "Experience our sprung wooden floor and expert faculty before committing. Instant automated confirmation.",
    image: "/media/hero-1.jpg",
    actionText: "Book Trial Pass →",
  },
  {
    num: "02",
    label: "Timetable & Batches",
    href: "/schedule",
    category: "TIMETABLE",
    badge: "DAILY MATRIX ⏰",
    desc: "Morning fitness, afternoon ladies batches, evening kids academy, and night urban choreographies.",
    image: "/media/hero-3.jpg",
    actionText: "View Full Schedule →",
  },
  {
    num: "03",
    label: "Dance & Fitness Classes",
    href: "/classes",
    category: "CURRICULUM",
    badge: "ALL AGES 💃",
    desc: "Bollywood, Zumba, Hip Hop, Contemporary, Kids Dance Academy, and Morning Yoga Conditioning.",
    image: "/media/class-dance.jpg",
    actionText: "Explore Classes →",
  },
  {
    num: "04",
    label: "Wedding Choreography",
    href: "/wedding",
    category: "EXCLUSIVE",
    badge: "SANGEET & DUETS 💍",
    desc: "Bespoke couple choreography, bride entries, family flashmobs, and customized music editing.",
    image: "/media/news-performance.jpg",
    actionText: "Wedding Packages →",
  },
  {
    num: "05",
    label: "Faculty & Mentors",
    href: "/team",
    category: "FACULTY",
    badge: "GOLD MEDALISTS 🏆",
    desc: "Mentored by Avinash Mishra (Reality Show Champion) & Ankit Gupta (National Gold Medalist).",
    image: "/media/team-avinash.jpg",
    actionText: "Meet The Mentors →",
  },
  {
    num: "06",
    label: "Studio Campuses",
    href: "/studios",
    category: "FACILITIES",
    badge: "SECTOR 16 & 5 📍",
    desc: "Two expansive studios in Ghansoli with acoustic mirrors, specialized wood flooring, and AC.",
    image: "/media/hero-2.jpg",
    actionText: "Tour Campuses →",
  },
  {
    num: "07",
    label: "Video Reels & Gallery",
    href: "/gallery",
    category: "MEDIA ARCHIVE",
    badge: "LIVE REELS 🎥",
    desc: "Rehearsals, student progress videos, video reviews, and annual stage production footage.",
    image: "/media/hero-4.jpg",
    actionText: "Watch Reels →",
  },
  {
    num: "08",
    label: "FAQ & Studio Rules",
    href: "/faq",
    category: "GUIDELINES",
    badge: "OBJECTIONS & POLICIES 📋",
    desc: "Answers to beginner doubts, dress code, branch selection, and strict non-refundable fees policy.",
    image: "/media/hero-5.jpg",
    actionText: "Read FAQs →",
  },
  {
    num: "09",
    label: "Contact & Directions",
    href: "/contact",
    category: "LOCATIONS",
    badge: "CALL OR VISIT 📞",
    desc: "Opposite Sai Proviso (Sector 16) and Opposite Tilak School (Sector 5). Direct contact info.",
    image: "/media/hero-1.jpg",
    actionText: "Get In Touch →",
  },
];

export default function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const [activeItem, setActiveItem] = useState(menuLinks[0]);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Fast, non-blocking click handler
  const handleLinkClick = useCallback(() => {
    onClose();
  }, [onClose]);

  // Handle Lenis pause and GSAP animation without layout thrashing
  useEffect(() => {
    if (!overlayRef.current) return;
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;

    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
      gsap.killTweensOf(overlayRef.current);

      gsap.set(overlayRef.current, { visibility: "visible", y: "-100%" });
      gsap.to(overlayRef.current, {
        y: "0%",
        duration: 0.35,
        ease: "power3.out",
        onComplete: () => {
          if (linksRef.current) {
            gsap.fromTo(
              linksRef.current.children,
              { y: 20, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                stagger: 0.025,
                duration: 0.25,
                ease: "power2.out",
              }
            );
          }
        },
      });
    } else {
      lenis?.start();
      document.body.style.overflow = "";
      gsap.killTweensOf(overlayRef.current);

      gsap.to(overlayRef.current, {
        y: "-100%",
        duration: 0.28,
        ease: "power3.in",
        onComplete: () => {
          if (overlayRef.current) {
            gsap.set(overlayRef.current, { visibility: "hidden" });
          }
        },
      });
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      id="fullscreen-navigation-menu"
      data-lenis-prevent="true"
      style={{
        visibility: "hidden",
        touchAction: "pan-y",
      }}
      className={`fixed inset-0 z-[100] bg-[#0A0A0A]/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 md:p-10 text-[#F2F0EB] -translate-y-full transition-none overscroll-contain ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Top Bar inside Menu */}
      <div className="flex items-center justify-between w-full hairline-b pb-3 sm:pb-4 shrink-0">
        <div className="flex items-center gap-3 sm:gap-6">
          <Link
            href="/"
            onClick={handleLinkClick}
            className="font-display font-black text-xl sm:text-2xl tracking-tight text-offwhite hover:text-accent transition-colors"
          >
            FLAWLESS.
          </Link>
          <span className="hidden sm:inline-block text-[11px] font-mono uppercase tracking-widest text-muted border-l border-hairline pl-4">
            Navigation Index
          </span>
          <div className="hidden md:block">
            <StudioStatusPill />
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/trial"
            onClick={handleLinkClick}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-[#0A0A0A] font-mono font-bold text-[11px] uppercase tracking-wider hover:bg-offwhite transition-colors"
          >
            <span>Book Trial</span>
            <span>⚡</span>
          </Link>

          <button
            id="close-fullscreen-menu"
            type="button"
            onClick={onClose}
            className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase hover:text-accent transition-colors flex items-center gap-2 group cursor-pointer px-3.5 py-1.5 rounded-full border border-hairline bg-surface hover:border-accent"
            aria-label="Close menu"
          >
            <span>ESC / CLOSE</span>
            <span className="text-accent group-hover:rotate-90 transition-transform duration-200">✕</span>
          </button>
        </div>
      </div>

      {/* Main Editorial Dual-Column Body with smooth independent scroll */}
      <div
        data-lenis-prevent="true"
        className="flex-1 overflow-y-auto overscroll-contain py-4 sm:py-6 no-scrollbar"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Navigation List */}
          <div className="lg:col-span-7 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent block mb-2 sm:mb-4">
              // STUDIO DIRECTORY &amp; DESTINATIONS
            </span>
            <ul ref={linksRef} className="space-y-1 sm:space-y-1.5">
              {menuLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    onMouseEnter={() => setActiveItem(item)}
                    className="group flex items-center justify-between py-2 sm:py-2.5 px-3 rounded-xl hover:bg-surface/80 transition-colors"
                  >
                    <div className="flex items-baseline gap-3 sm:gap-4">
                      <span className="text-xs sm:text-sm font-mono text-muted/70 group-hover:text-accent transition-colors">
                        {item.num}
                      </span>
                      <span className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-display font-bold tracking-tight text-offwhite group-hover:text-accent group-hover:translate-x-1 transition-all">
                        {item.label}
                      </span>
                    </div>

                    <span className="hidden sm:inline-flex items-center text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-surface border border-hairline group-hover:border-accent/40 group-hover:text-accent text-muted transition-colors">
                      {item.badge}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Live Dynamic Inspection Card (Desktop) */}
          <div className="hidden lg:col-span-5 lg:flex flex-col justify-between p-5 rounded-2xl bg-surface border border-hairline shadow-2xl sticky top-2">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30 text-[10px] font-mono uppercase tracking-wider">
                  {activeItem.category}
                </span>
                <span className="text-xs font-mono text-muted">
                  REF {activeItem.num} / 09
                </span>
              </div>

              {/* Preview Image Container */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-3 border border-hairline bg-black">
                <Image
                  src={activeItem.image}
                  alt={activeItem.label}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="400px"
                  priority={activeItem.num === "01"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-2.5 left-2.5 text-[11px] font-mono text-offwhite/90">
                  {activeItem.badge}
                </span>
              </div>

              <h3 className="text-lg font-display font-bold text-offwhite mb-1.5">
                {activeItem.label}
              </h3>
              <p className="text-xs text-muted leading-relaxed mb-3">
                {activeItem.desc}
              </p>
            </div>

            <div className="pt-3 hairline-t flex items-center justify-between">
              <Link
                href={activeItem.href}
                onClick={handleLinkClick}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent text-[#0A0A0A] font-display font-bold text-xs uppercase tracking-wider hover:bg-offwhite transition-colors shadow-md"
              >
                <span>{activeItem.actionText}</span>
              </Link>

              <span className="text-[10px] font-mono text-muted">
                Sector 16 &amp; 5
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Information Grid */}
      <div className="shrink-0 pt-3 sm:pt-4 hairline-t">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-xs text-muted">
          <div>
            <span className="text-offwhite block font-semibold text-xs mb-0.5">Sector 16 Campus (Main)</span>
            <p className="font-mono text-[10px]">Krishna Vihar, Opp Bus Stop</p>
            <a href="tel:+918850120018" className="text-accent hover:underline font-mono text-[10px] block">
              +91 88501 20018
            </a>
          </div>

          <div>
            <span className="text-offwhite block font-semibold text-xs mb-0.5">Sector 5 Campus (Station)</span>
            <p className="font-mono text-[10px]">Opp. Tilak International School</p>
            <a href="tel:+919892226202" className="text-accent hover:underline font-mono text-[10px] block">
              +91 98922 26202
            </a>
          </div>

          <div>
            <span className="text-offwhite block font-semibold text-xs mb-0.5">Direct Socials</span>
            <div className="flex flex-wrap gap-2 text-[10px] font-mono">
              <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                @flawless_dfs
              </a>
              <span>·</span>
              <a href={siteConfig.directorInstagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                @ahvein_misrrah
              </a>
              <span>·</span>
              <a href={siteConfig.youtubeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                YouTube
              </a>
            </div>
          </div>

          <div className="flex sm:justify-end items-center">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Flawless%20Dance%20Studio,%20I%20want%20to%20enquire%20about%20classes`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="w-full sm:w-auto px-4 py-2 rounded-full bg-accent text-[#0A0A0A] font-display font-bold text-xs uppercase tracking-wider hover:bg-offwhite transition-colors text-center shadow-lg"
            >
              WhatsApp Studio 💬
            </a>
          </div>
        </div>

        {/* Legal policy quick-links bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2.5 border-t border-hairline/40 text-[10px] font-mono text-muted/80">
          <span>© 2026 FDFS · Ghansoli, Navi Mumbai</span>
          <div className="flex items-center gap-3">
            <Link href="/privacy" onClick={handleLinkClick} className="hover:text-accent transition-colors">Privacy</Link>
            <span>/</span>
            <Link href="/terms" onClick={handleLinkClick} className="hover:text-accent transition-colors">Terms</Link>
            <span>/</span>
            <Link href="/refund" onClick={handleLinkClick} className="hover:text-accent transition-colors">Refunds</Link>
            <span>/</span>
            <Link href="/cookie-policy" onClick={handleLinkClick} className="hover:text-accent transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
