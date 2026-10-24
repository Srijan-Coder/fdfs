"use client";

import { siteConfig } from "@/content/site";

export default function StudiosSection() {
  const { studiosSection } = siteConfig;

  return (
    <section id="studios" className="py-24 md:py-36 px-6 md:px-12 hairline-b bg-[#0A0A0A]">
      <div className="flex items-baseline justify-between mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-accent block">
          {studiosSection.label}
        </span>
        <span className="text-xs font-mono uppercase tracking-widest text-muted">
          Ghansoli, Navi Mumbai
        </span>
      </div>

      <div className="max-w-4xl mb-16">
        <h3 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-offwhite mb-4">
          Two Flagship Studios.
        </h3>
        <p className="text-base sm:text-lg text-muted">
          Full-length acoustic mirrors, shock-absorbent dance flooring, professional sound setups, and air conditioning across both Ghansoli campuses.
        </p>
      </div>

      {/* Huge Stacked List (Gang.tv footer-style) */}
      <div className="space-y-16">
        {studiosSection.studios.map((studio, idx) => (
          <div key={studio.id} className="hairline-t pt-10">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-xs font-mono text-accent">0{idx + 1}</span>
              <span className="text-xs font-mono uppercase tracking-widest text-muted">
                {studio.id === "sector16" ? "Main Branch" : "Second Studio"}
              </span>
              {studio.id === "sector16" && (
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Live Video Tour Inside
                </span>
              )}
            </div>

            <h4 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-offwhite tracking-tight mb-8">
              {studio.name}
            </h4>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Studio Info & CTAs */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <p className="text-base sm:text-lg text-offwhite font-medium mb-2 leading-relaxed">
                    {studio.address}
                  </p>
                  <p className="text-xs font-mono text-muted">
                    Daily Studio Hours: <span className="text-offwhite">{studio.hours}</span>
                  </p>
                </div>

                {/* Studio Specs */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl border border-hairline bg-surface/50">
                    <span className="text-[10px] font-mono uppercase text-muted block mb-1">Flooring</span>
                    <p className="text-xs sm:text-sm text-offwhite font-medium">Sprung Wood / Shock Absorbent</p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-hairline bg-surface/50">
                    <span className="text-[10px] font-mono uppercase text-muted block mb-1">Acoustics</span>
                    <p className="text-xs sm:text-sm text-offwhite font-medium">Wall-to-Wall Mirrors &amp; Surround</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={studio.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-full border border-hairline text-offwhite hover:border-accent hover:text-accent transition-colors text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2"
                  >
                    <span>Google Maps</span>
                    <span>↗</span>
                  </a>
                  <a
                    href={`tel:+91${studio.phone}`}
                    className="px-5 py-3 rounded-full bg-surface border border-hairline text-offwhite hover:border-accent hover:text-accent transition-colors text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2"
                  >
                    <span>Call +91 {studio.phone}</span>
                    <span>📞</span>
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Flawless%20Studio,%20I%20want%20to%20visit%20${encodeURIComponent(studio.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-full bg-accent text-[#0A0A0A] hover:bg-offwhite transition-colors text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
                  >
                    <span>Enquire WhatsApp</span>
                    <span>💬</span>
                  </a>
                </div>
              </div>

              {/* Inline Ambient Video (Sector 16 Flagship) - Zero Modals, Zero Controls, Silent Loop */}
              {studio.id === "sector16" && (
                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/15] rounded-2xl overflow-hidden border border-hairline bg-black shadow-2xl">
                    <video
                      src="/media/studio-tour-small.mp4"
                      poster="/media/studio-tour-small.webp"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Top live badge */}
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[9px] font-mono uppercase tracking-wider text-accent border border-white/10 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        Live Studio Tour
                      </span>
                    </div>

                    {/* Bottom caption */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 pointer-events-none">
                      <p className="text-xs font-display font-bold text-offwhite">Sector 16 Dance Floor</p>
                      <p className="text-[10px] text-muted font-mono">Continuous silent loop · Full mirrors</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
