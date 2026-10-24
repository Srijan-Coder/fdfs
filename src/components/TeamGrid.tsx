"use client";

import Image from "next/image";
import { siteConfig } from "@/content/site";

export default function TeamGrid() {
  const { teamSection } = siteConfig;

  return (
    <section id="team" className="py-24 md:py-36 px-6 md:px-12 hairline-b bg-[#0A0A0A]">
      <div className="flex items-baseline justify-between mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-accent block">
          {teamSection.label}
        </span>
        <span className="text-xs font-mono uppercase tracking-widest text-muted">
          Mentorship &amp; Faculty
        </span>
      </div>

      <div className="max-w-3xl mb-16">
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-offwhite mb-4">
          Master Mentors.
        </h3>
        <p className="text-base sm:text-lg text-muted">
          {teamSection.lead}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {teamSection.members.map((member) => (
          <div key={member.id} className="group space-y-5">
            {/* 4:5 Portrait Aspect Photo */}
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-hairline bg-surface"
              data-cursor="view"
            >
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/20 to-transparent opacity-90" />
              
              {/* Top Badge */}
              {member.badge && (
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-accent border border-white/10">
                    {member.badge}
                  </span>
                </div>
              )}

              {/* Bottom Name & Role */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-mono uppercase tracking-wider text-accent block mb-1">
                  {member.role}
                </span>
                <h4 className="text-xl md:text-2xl font-display font-bold text-offwhite">
                  {member.name}
                </h4>
              </div>
            </div>

            {/* Bio & Social Link */}
            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {member.bio}
              </p>

              {member.instagram && (
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-offwhite hover:text-accent transition-colors pt-1"
                >
                  <span>Instagram @ahvein_misrrah</span>
                  <span>↗</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
