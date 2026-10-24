"use client";

import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function Footer() {
  const { footer } = siteConfig;

  return (
    <footer className="py-24 md:py-36 px-6 md:px-12 bg-[#0A0A0A] text-[#F2F0EB]">
      {/* 1. Let's Connect Block */}
      <div className="mb-24 hairline-b pb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-accent mb-6 block">
          {footer.label}
        </span>
        <h3 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-offwhite mb-8">
          {footer.connectTitle}.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <span className="text-xs font-mono text-[#B0AEA7] uppercase tracking-wider block mb-2">
              Instagram
            </span>
            <div className="flex flex-col gap-1.5">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-offwhite hover:text-accent transition-colors py-1 inline-flex items-center font-medium min-h-[28px]"
              >
                @flawless_dfs ↗
              </a>
              <a
                href={siteConfig.directorInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B0AEA7] hover:text-accent transition-colors py-1 inline-flex items-center text-xs min-h-[28px]"
              >
                Director: @ahvein_misrrah ↗
              </a>
            </div>
          </div>

          <div>
            <span className="text-xs font-mono text-[#B0AEA7] uppercase tracking-wider block mb-2">
              YouTube Channel
            </span>
            <a
              href={siteConfig.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-offwhite hover:text-accent transition-colors font-medium py-1 inline-flex items-center min-h-[28px]"
            >
              @flawlessdancefitnessstudio3284 ↗
            </a>
          </div>

          <div>
            <span className="text-xs font-mono text-[#B0AEA7] uppercase tracking-wider block mb-2">
              Phone &amp; WhatsApp
            </span>
            <p className="text-offwhite font-medium">
              +91 {siteConfig.phones.join(" / +91 ")}
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent hover:underline py-1 inline-flex items-center min-h-[28px] mt-1"
            >
              Direct WhatsApp Chat ↗
            </a>
          </div>

          <div>
            <span className="text-xs font-mono text-[#B0AEA7] uppercase tracking-wider block mb-2">
              Email
            </span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-offwhite hover:text-accent transition-colors font-medium py-1 inline-flex items-center min-h-[28px]"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      {/* 2. Massive Stacked City Text (gang.tv signature pattern: GHANSOLI. NAVI MUMBAI.) */}
      <div className="mb-20 overflow-hidden select-none" aria-hidden="true" role="presentation">
        {footer.stackedCities.map((city) => (
          <div
            key={city}
            className="text-5xl sm:text-7xl md:text-9xl lg:text-[11vw] font-display font-black tracking-tighter text-[#626268] hover:text-offwhite transition-colors duration-500 leading-[0.88] uppercase select-none"
          >
            {city}
          </div>
        ))}
      </div>

      {/* 3. Bottom Legal & Copyright Bar */}
      <div className="hairline-t pt-8 flex flex-col md:flex-row items-baseline justify-between gap-6 text-xs font-mono text-[#B0AEA7]">
        <p>{footer.copyright}</p>
        
        <div className="flex flex-wrap gap-6 sm:gap-8">
          {footer.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-accent transition-colors py-1.5 inline-block"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
