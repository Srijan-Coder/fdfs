"use client";

import { useState } from "react";
import Link from "next/link";
import FullscreenMenu from "./FullscreenMenu";
import StudioStatusPill from "./StudioStatusPill";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5 px-6 md:px-12 py-4 sm:py-5 flex items-center justify-between text-[#F2F0EB] transition-all">
        <Link href="/" className="font-display font-black text-xl md:text-2xl tracking-tighter hover:opacity-80 transition-opacity">
          FLAWLESS.
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden sm:block">
            <StudioStatusPill />
          </div>

          <Link
            id="header-book-trial-btn"
            href="/trial"
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent text-[#0A0A0A] font-mono font-bold text-[11px] uppercase tracking-wider hover:bg-offwhite transition-colors shadow-sm"
          >
            <span>Book Trial</span>
            <span>⚡</span>
          </Link>

          <button
            id="header-nav-menu-btn"
            onClick={() => setIsMenuOpen(true)}
            className="text-xs md:text-sm font-semibold tracking-widest uppercase hover:text-accent transition-colors flex items-center gap-2 group cursor-pointer"
            aria-label="Open navigation menu"
          >
            <span className="hidden sm:inline">Menu</span>
            <span className="w-8 h-[2px] bg-[#F2F0EB] group-hover:bg-accent group-hover:w-10 transition-all duration-300"></span>
          </button>
        </div>
      </header>

      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
