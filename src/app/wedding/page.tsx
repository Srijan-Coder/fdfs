"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site";

export default function WeddingChoreographyPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [weddingDate, setWeddingDate] = useState("");
  const [packageType, setPackageType] = useState("Bride & Groom Duet (5 Sessions)");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState<{ id: string; name: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.replace(/\D/g, "").length < 10) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          discipline: "Wedding Choreography",
          studioId: "sector16",
          preferredDate: weddingDate || new Date().toISOString().split("T")[0],
          preferredTime: packageType,
          notes: `Wedding Date: ${weddingDate}. Package: ${packageType}. Notes: ${notes}`,
          source: "wedding-page",
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setConfirmed({ id: data.booking.id, name: data.booking.name });
      } else {
        alert(data.error || "Failed to submit inquiry.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-24 min-h-screen bg-[#0A0A0A]">
      {/* Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 hairline-b">
        <div className="flex items-baseline justify-between mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent block">
            /Special Events &amp; Weddings
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-muted">
            Navi Mumbai &amp; Mumbai
          </span>
        </div>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tight text-offwhite mb-6">
          Wedding &amp; Sangeet Choreography.
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-3xl leading-relaxed">
          Unforgettable stage routines, bride &amp; groom duet concepts, family flashmobs, and bespoke audio medley editing created by award-winning faculty in Ghansoli.
        </p>
      </section>

      {/* Packages Grid */}
      <section className="py-16 md:py-24 px-6 md:px-12 hairline-b">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-accent mb-2 block">
            Curated Formats
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-offwhite tracking-tight">
            Designed for Dancers and Non-Dancers Alike.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              id: "couple",
              title: "Bride & Groom Duet",
              tag: "Most Popular",
              desc: "Cinematic, romantic, and high-energy medley tailored to your chemistry and comfort. Audio editing included.",
              features: [
                "Customized easy-to-learn steps",
                "Full song mixing & transition editing",
                "Expression & stage entry coaching",
                "Private studio floor rehearsal",
              ],
            },
            {
              id: "family",
              title: "Family & Flashmob",
              tag: "Crowd Pleaser",
              desc: "Fun, synchronized group choreography for parents, cousins, siblings, and friends across all age brackets.",
              features: [
                "Step-by-step video practice guides",
                "Accommodates 5 to 40+ dancers",
                "Humorous & celebratory themes",
                "Weekend flexible scheduling",
              ],
            },
            {
              id: "complete",
              title: "Full Sangeet Production",
              tag: "Grand Stage",
              desc: "End-to-end event choreography direction: from opening theme dance to grand finale flashmob with emcee cues.",
              features: [
                "Complete script & music track timeline",
                "Prop coordination & entry planning",
                "On-ground stage rehearsal coaching",
                "Dedicated master choreographer",
              ],
            },
          ].map((pkg, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-hairline bg-surface hover:border-accent transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="px-3 py-1 rounded-full bg-accent/15 text-accent border border-accent/20 text-[10px] font-mono uppercase tracking-wider inline-block mb-4">
                  {pkg.tag}
                </span>
                <h3 className="text-2xl font-display font-bold text-offwhite tracking-tight mb-3">
                  {pkg.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed mb-6">{pkg.desc}</p>

                <ul className="space-y-2.5 hairline-t pt-4">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-xs text-offwhite flex items-center gap-2">
                      <span className="text-accent text-[10px]">✔</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => {
                  setPackageType(pkg.title);
                  const el = document.getElementById("wedding-form");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-8 w-full py-3 rounded-full border border-hairline hover:border-accent hover:text-accent text-offwhite font-display font-bold text-xs uppercase tracking-wider transition-colors text-center"
              >
                Choose This Package ↓
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="wedding-form" className="py-16 md:py-24 px-6 md:px-12 hairline-b">
        <div className="max-w-3xl mx-auto">
          {confirmed ? (
            <div className="p-8 sm:p-12 rounded-2xl border border-accent bg-[#0F0F12] text-center space-y-4 animate-fadeIn">
              <span className="text-xs font-mono uppercase tracking-widest text-accent block">
                ✓ Sangeet Consultation Dispatched
              </span>
              <h3 className="text-3xl font-display font-bold text-offwhite">
                Thank You, {confirmed.name}!
              </h3>
              <p className="text-sm text-muted">
                Reference ID: <span className="text-accent font-mono font-bold">{confirmed.id}</span>. Our founder Avinash Mishra has been notified and will connect with song ideas and customized rehearsal scheduling.
              </p>
              <div className="pt-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Flawless%20Studio,%20I%20just%20submitted%20a%20wedding%20choreography%20inquiry%20(${confirmed.id}).%20Looking%20forward%20to%20discussing!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-4 px-8 rounded-full bg-accent text-[#0A0A0A] font-display font-bold text-xs uppercase tracking-wider hover:bg-offwhite transition-colors"
                >
                  Direct WhatsApp Chat 💬
                </a>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-12 rounded-2xl border border-hairline bg-surface shadow-2xl space-y-6"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-accent mb-2 block">
                  Custom Quotation &amp; Slot
                </span>
                <h3 className="text-3xl font-display font-bold text-offwhite tracking-tight mb-2">
                  Plan Your Wedding Dance.
                </h3>
                <p className="text-xs text-muted">
                  Zero obligation. Automated notification dispatched to choreographer instantly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-muted mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rohan & Sneha"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-hairline text-offwhite text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-muted mb-2">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9819876543"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-hairline text-offwhite text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-muted mb-2">
                    Approximate Wedding / Sangeet Date
                  </label>
                  <input
                    type="date"
                    value={weddingDate}
                    onChange={(e) => setWeddingDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-hairline text-offwhite text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-muted mb-2">
                    Choreography Package
                  </label>
                  <select
                    value={packageType}
                    onChange={(e) => setPackageType(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-hairline text-offwhite text-sm focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="Bride & Groom Duet (5 Sessions)">Bride &amp; Groom Duet (5 Sessions)</option>
                    <option value="Family & Friends Flashmob (10+ Dancers)">Family &amp; Friends Flashmob (10+ Dancers)</option>
                    <option value="Complete Sangeet Direction (Entire Event)">Complete Sangeet Direction (Entire Event)</option>
                    <option value="Custom Requirement">Custom Requirement</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-muted mb-2">
                  Preferred Songs or Ideas (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. 90s Bollywood medley, slow romantic couple dance, or punjabi high energy entry"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-hairline text-offwhite text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-accent text-[#0A0A0A] font-display font-bold text-sm uppercase tracking-wider hover:bg-offwhite transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-lg"
              >
                {isSubmitting ? "Dispatching Notification..." : "Request Sangeet Consultation →"}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
