"use client";

import { siteConfig } from "@/content/site";

export default function FloatingMobileDock() {
  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 flex gap-3 p-2 rounded-full bg-[#141414]/90 backdrop-blur-xl border border-hairline shadow-2xl">
      <a
        href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Flawless%20Dance%20Studio,%20I%20want%20to%20inquire%20about%20classes`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-3 px-4 rounded-full bg-accent text-[#0A0A0A] font-display font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
      >
        <span>WhatsApp</span>
        <span>💬</span>
      </a>

      <a
        href={`tel:+91${siteConfig.phones[0]}`}
        className="flex-1 py-3 px-4 rounded-full bg-[#202020] border border-hairline text-offwhite font-display font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:border-accent"
      >
        <span>Call Studio</span>
        <span>📞</span>
      </a>
    </div>
  );
}
