"use client";

import { siteConfig } from "@/content/site";

export default function ScheduleBlock() {
  const { schedule, feesAndPolicies } = siteConfig;

  return (
    <section id="schedule" className="py-24 md:py-36 px-6 md:px-12 hairline-b bg-[#0A0A0A]">
      <div className="flex items-baseline justify-between mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-accent block">
          {schedule.label}
        </span>
        <span className="text-xs font-mono uppercase tracking-widest text-muted">
          Daily Batches
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Title + Studio Hours & Fee CTA */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-offwhite">
            Daily Batch Matrix.
          </h3>
          <p className="text-sm font-mono text-muted">
            {schedule.note}
          </p>

          <div className="pt-4">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Flawless%20Dance%20Studio,%20please%20share%20the%20fees%20and%20exact%20batch%20timings`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-hairline text-offwhite text-xs md:text-sm font-semibold uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
            >
              <span>{feesAndPolicies.buttonLabel}</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Right Column: 3 Editorial Time Slots */}
        <div className="lg:col-span-7 space-y-8">
          {schedule.slots.map((item, index) => (
            <div key={item.slot} className="hairline-b pb-8">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-xs font-mono text-accent">0{index + 1}</span>
                <span className="text-sm font-mono uppercase tracking-widest text-muted">
                  {item.slot}
                </span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-display font-bold text-offwhite mb-2">
                {item.disciplines}
              </h4>
              <p className="text-sm text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
