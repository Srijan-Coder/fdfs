"use client";

interface KineticMarqueeProps {
  items?: string[];
  direction?: "left" | "right";
}

const defaultMarqueeItems = [
  "HIP HOP",
  "BOLLYWOOD FUSION",
  "ZUMBA FITNESS",
  "CONTEMPORARY",
  "WAACKING & POPPING",
  "POWER YOGA",
  "LADIES BATCHES",
  "KIDS ACADEMY",
  "WEDDING SANGEET",
  "GHANSOLI NAVI MUMBAI",
];

export default function KineticMarquee({ items = defaultMarqueeItems }: KineticMarqueeProps) {
  return (
    <div className="w-full py-6 md:py-8 bg-surface/50 hairline-t hairline-b overflow-hidden select-none relative group">
      <div className="animate-marquee flex items-center gap-8">
        {/* First Loop */}
        {items.map((item, idx) => (
          <div key={`loop1-${idx}`} className="flex items-center gap-8 flex-shrink-0">
            <span className="font-display font-black text-2xl sm:text-4xl md:text-5xl tracking-tight text-offwhite/80 group-hover:text-offwhite transition-colors uppercase">
              {item}
            </span>
            <span className="text-accent text-lg sm:text-xl font-mono">✦</span>
          </div>
        ))}

        {/* Duplicate Loop for Infinite Seamless Scroll */}
        {items.map((item, idx) => (
          <div key={`loop2-${idx}`} className="flex items-center gap-8 flex-shrink-0">
            <span className="font-display font-black text-2xl sm:text-4xl md:text-5xl tracking-tight text-offwhite/80 group-hover:text-offwhite transition-colors uppercase">
              {item}
            </span>
            <span className="text-accent text-lg sm:text-xl font-mono">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
