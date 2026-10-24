import EnquiryStrip from "@/components/EnquiryStrip";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Contact & Studio Visits | Flawless Dance & Fitness Studio",
  description: "Get in touch with Flawless Dance & Fitness Studio. Visit our studios in Sector 16 and Sector 5, Ghansoli.",
};

export default function ContactPage() {
  const { studios } = siteConfig.studiosSection;

  return (
    <main className="pt-24 min-h-screen bg-[#0A0A0A]">
      <section className="py-16 md:py-24 px-6 md:px-12 hairline-b">
        <span className="text-xs font-mono uppercase tracking-widest text-accent mb-4 block">
          /Directions
        </span>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tight text-offwhite mb-6">
          Find Your Studio.
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-3xl leading-relaxed">
          We welcome walk-in consultations, trial registrations, and class inquiries every day from 7:00 AM to 10:30 PM across both Ghansoli campuses.
        </p>
      </section>

      {/* Two Dark-styled Google Maps Embeds */}
      <section className="py-16 md:py-24 px-6 md:px-12 hairline-b">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {studios.map((studio) => (
            <div key={studio.id} className="space-y-6">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-accent block">
                    {studio.id === "sector16" ? "Main Branch" : "Second Studio"}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-offwhite">
                    {studio.name}
                  </h3>
                </div>
                <a
                  href={studio.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono uppercase tracking-wider text-accent hover:underline"
                >
                  Open in Maps ↗
                </a>
              </div>

              <p className="text-sm text-muted">
                {studio.address}
              </p>

              {/* Dark Styled Map Embed Container */}
              <div className="relative aspect-video w-full rounded-md overflow-hidden border border-hairline bg-surface">
                <iframe
                  title={`${studio.name} Google Map`}
                  src={studio.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(120%)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="flex gap-4">
                <a
                  href={`tel:+91${studio.phone}`}
                  className="px-6 py-3 rounded-full bg-surface border border-hairline text-offwhite text-xs font-semibold uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
                >
                  Call +91 {studio.phone} 📞
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Flawless%20Studio,%20I%20am%20visiting%20the%20${encodeURIComponent(studio.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-accent text-[#0A0A0A] text-xs font-semibold uppercase tracking-wider hover:bg-offwhite transition-colors"
                >
                  WhatsApp Location 💬
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <EnquiryStrip />
    </main>
  );
}
