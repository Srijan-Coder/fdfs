"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site";

export default function TrialPage() {
  const [discipline, setDiscipline] = useState("Dance (Bollywood / Hip Hop / Urban)");
  const [studioId, setStudioId] = useState<"sector16" | "sector5">("sector16");
  const [preferredDate, setPreferredDate] = useState(() => {
    const tomorrow = new Date(Date.now() + 86400000);
    return tomorrow.toISOString().split("T")[0];
  });
  const [preferredTime, setPreferredTime] = useState("07:00 AM - 08:00 AM (Morning)");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<{
    id: string;
    name: string;
    discipline: string;
    studioName: string;
    preferredDate: string;
    preferredTime: string;
    adminWhatsAppUrl?: string;
  } | null>(null);

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
          discipline,
          studioId,
          preferredDate,
          preferredTime,
          notes,
          source: "trial-page",
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setConfirmedBooking({
          id: data.booking.id,
          name: data.booking.name,
          discipline: data.booking.discipline,
          studioName: data.booking.studioName,
          preferredDate: data.booking.preferredDate,
          preferredTime: data.booking.preferredTime,
          adminWhatsAppUrl: data.adminWhatsAppUrl,
        });
      } else {
        alert(data.error || "Failed to submit booking. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again or WhatsApp us directly.");
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
            /Trial Pass
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-muted">
            Ghansoli, Navi Mumbai
          </span>
        </div>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tight text-offwhite mb-6">
          Book Your First Trial Class.
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-3xl leading-relaxed">
          Step inside our Ghansoli studios. Experience the sprung wooden dance floor, acoustic mirrors, and high-energy mentorship before taking your membership.
        </p>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 md:py-24 px-6 md:px-12 hairline-b">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Value Points & Expectations */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent mb-2 block">
                What to Expect
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-offwhite tracking-tight mb-4">
                Zero Judgment. 100% Energy.
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Whether you have never stepped onto a dance floor or want to sweat out workday stress, our trainers customize drills for every skill level.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { title: "Full 60-Minute Session", desc: "Warmup, technique breakdown, choreography / fitness rounds, and cooldown." },
                { title: "Direct Faculty Mentorship", desc: "Learn with Avinash Mishra, Ankit Gupta, or Tisa Pal in person." },
                { title: "Choice of Two Ghansoli Campuses", desc: "Sector 16 (Krishna Vihar Main) or Sector 5 (Near Station)." },
                { title: "No Equipment Needed", desc: "Just bring clean indoor sneakers, gym wear, and a water bottle." },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-hairline bg-surface/50">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xs font-mono text-accent">0{idx + 1}</span>
                    <h3 className="text-sm font-display font-bold text-offwhite">{item.title}</h3>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl border border-accent/30 bg-accent/5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-accent block mb-1">
                Studio Policy
              </span>
              <p className="text-xs text-muted leading-relaxed">
                Fees once enrolled are non-refundable. Trial class lets you experience our training quality before completing admission.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Booking Card */}
          <div className="lg:col-span-7">
            {confirmedBooking ? (
              <div className="p-8 sm:p-12 rounded-2xl border border-accent bg-[#0F0F12] shadow-2xl relative overflow-hidden animate-fadeIn">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
                
                <span className="text-xs font-mono uppercase tracking-widest text-accent mb-2 block">
                  ✓ Booking Confirmed &amp; Dispatched
                </span>
                <h3 className="text-3xl sm:text-4xl font-display font-bold text-offwhite tracking-tight mb-4">
                  You are all set, {confirmedBooking.name.split(" ")[0]}!
                </h3>
                <p className="text-sm text-muted mb-8 leading-relaxed">
                  Your trial pass has been registered in the FDFS studio operations system. Our team has received the automated notification.
                </p>

                {/* Ticket Pass Preview */}
                <div className="p-6 rounded-xl border border-hairline bg-[#16161A] space-y-4 mb-8">
                  <div className="flex justify-between items-baseline hairline-b pb-3">
                    <span className="text-[11px] font-mono text-muted uppercase">Pass ID</span>
                    <span className="text-xs font-mono text-accent font-bold">{confirmedBooking.id}</span>
                  </div>
                  <div className="flex justify-between items-baseline hairline-b pb-3">
                    <span className="text-[11px] font-mono text-muted uppercase">Class</span>
                    <span className="text-xs font-display text-offwhite font-bold">{confirmedBooking.discipline}</span>
                  </div>
                  <div className="flex justify-between items-baseline hairline-b pb-3">
                    <span className="text-[11px] font-mono text-muted uppercase">Studio Location</span>
                    <span className="text-xs font-mono text-offwhite">{confirmedBooking.studioName}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[11px] font-mono text-muted uppercase">Scheduled Date &amp; Slot</span>
                    <span className="text-xs font-mono text-offwhite font-bold">
                      {confirmedBooking.preferredDate} · {confirmedBooking.preferredTime}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {confirmedBooking.adminWhatsAppUrl && (
                    <a
                      href={confirmedBooking.adminWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-4 px-6 rounded-full bg-accent text-[#0A0A0A] font-display font-bold text-xs uppercase tracking-wider hover:bg-offwhite transition-colors text-center shadow-lg"
                    >
                      Open WhatsApp Pass Copy 💬
                    </a>
                  )}
                  <button
                    onClick={() => {
                      setConfirmedBooking(null);
                      setName("");
                      setPhone("");
                      setNotes("");
                    }}
                    className="py-4 px-6 rounded-full border border-hairline text-offwhite hover:border-accent hover:text-accent font-mono text-xs uppercase tracking-wider transition-colors"
                  >
                    Book Another Pass
                  </button>
                </div>
              </div>
            ) : (
              <form
                id="trial-booking-form"
                data-agent-action="book-trial"
                onSubmit={handleSubmit}
                className="p-8 sm:p-10 rounded-2xl border border-hairline bg-surface shadow-2xl space-y-6"
              >
                <div>
                  <h3 className="text-2xl font-display font-bold text-offwhite tracking-tight mb-2">
                    Reserve Your Studio Spot
                  </h3>
                  <p className="text-xs text-muted">
                    Automated confirmation sent to studio admin immediately.
                  </p>
                </div>

                {/* 1. Discipline Selection */}
                <div>
                  <label htmlFor="trial-discipline-group" className="block text-xs font-mono uppercase tracking-widest text-muted mb-2">
                    Select Discipline *
                  </label>
                  <div id="trial-discipline-group" className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Dance (Bollywood / Hip Hop / Urban)",
                      "Zumba & Cardio Fitness",
                      "Yoga & Morning Conditioning",
                      "Kids Dance Academy (Evening)",
                      "Ladies-Only Bollywood Fitness",
                      "Wedding & Sangeet Choreography",
                    ].map((item) => (
                      <button
                        type="button"
                        key={item}
                        data-discipline={item}
                        onClick={() => setDiscipline(item)}
                        className={`p-3 text-left rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                          discipline === item
                            ? "border-accent bg-accent/15 text-offwhite shadow-sm"
                            : "border-hairline bg-surface/40 text-muted hover:border-offwhite/30"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Studio Campus */}
                <div>
                  <label htmlFor="trial-campus-group" className="block text-xs font-mono uppercase tracking-widest text-muted mb-2">
                    Select Campus *
                  </label>
                  <div id="trial-campus-group" className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      id="campus-sector16-btn"
                      onClick={() => setStudioId("sector16")}
                      className={`p-3.5 text-left rounded-xl border text-xs transition-all cursor-pointer ${
                        studioId === "sector16"
                          ? "border-accent bg-accent/15 text-offwhite"
                          : "border-hairline bg-surface/40 text-muted hover:border-offwhite/30"
                      }`}
                    >
                      <span className="font-bold block text-offwhite mb-0.5">Sector 16 (Main Branch)</span>
                      <span className="text-[10px] text-muted font-mono">Opp. Sai Proviso, Krishna Vihar</span>
                    </button>
                    <button
                      type="button"
                      id="campus-sector5-btn"
                      onClick={() => setStudioId("sector5")}
                      className={`p-3.5 text-left rounded-xl border text-xs transition-all cursor-pointer ${
                        studioId === "sector5"
                          ? "border-accent bg-accent/15 text-offwhite"
                          : "border-hairline bg-surface/40 text-muted hover:border-offwhite/30"
                      }`}
                    >
                      <span className="font-bold block text-offwhite mb-0.5">Sector 5 (Station Branch)</span>
                      <span className="text-[10px] text-muted font-mono">Opp. Tilak School, Station Rd</span>
                    </button>
                  </div>
                </div>

                {/* 3. Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="trial-date" className="block text-xs font-mono uppercase tracking-widest text-muted mb-2">
                      Preferred Date *
                    </label>
                    <input
                      id="trial-date"
                      name="preferredDate"
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-hairline text-offwhite text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="trial-slot" className="block text-xs font-mono uppercase tracking-widest text-muted mb-2">
                      Preferred Slot *
                    </label>
                    <select
                      id="trial-slot"
                      name="preferredSlot"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-hairline text-offwhite text-sm focus:outline-none focus:border-accent transition-colors cursor-pointer"
                    >
                      <option value="07:00 AM - 08:00 AM (Morning)">07:00 AM – 08:00 AM (Morning)</option>
                      <option value="08:15 AM - 09:15 AM (Morning)">08:15 AM – 09:15 AM (Morning)</option>
                      <option value="04:00 PM - 05:00 PM (Afternoon Ladies)">04:00 PM – 05:00 PM (Afternoon Ladies)</option>
                      <option value="05:00 PM - 06:00 PM (Kids Batch)">05:00 PM – 06:00 PM (Kids Batch)</option>
                      <option value="06:15 PM - 07:15 PM (Evening Dance)">06:15 PM – 07:15 PM (Evening Dance)</option>
                      <option value="07:30 PM - 08:30 PM (Evening Zumba)">07:30 PM – 08:30 PM (Evening Zumba)</option>
                      <option value="08:30 PM - 09:30 PM (Night Advanced)">08:30 PM – 09:30 PM (Night Advanced)</option>
                    </select>
                  </div>
                </div>

                {/* 4. Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="trial-name" className="block text-xs font-mono uppercase tracking-widest text-muted mb-2">
                      Your Full Name *
                    </label>
                    <input
                      id="trial-name"
                      name="name"
                      type="text"
                      placeholder="e.g. Ananya Sen"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-hairline text-offwhite text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="trial-phone" className="block text-xs font-mono uppercase tracking-widest text-muted mb-2">
                      WhatsApp Phone *
                    </label>
                    <input
                      id="trial-phone"
                      name="phone"
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-hairline text-offwhite text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="trial-notes" className="block text-xs font-mono uppercase tracking-widest text-muted mb-2">
                    Fitness Goals or Notes (Optional)
                  </label>
                  <input
                    id="trial-notes"
                    name="notes"
                    type="text"
                    placeholder="e.g. Total beginner, looking for weight loss, or wedding upcoming"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-hairline text-offwhite text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  id="trial-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-accent text-[#0A0A0A] font-display font-bold text-sm uppercase tracking-wider hover:bg-offwhite transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-lg hover:shadow-accent/25"
                >
                  {isSubmitting ? "Dispatching Notification..." : "Confirm & Book Trial Pass →"}
                </button>

                <p className="text-[11px] text-muted font-mono text-center">
                  Instant automated notification sent to studio head Avinash Mishra. Zero spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
