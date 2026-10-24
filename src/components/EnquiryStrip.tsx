"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site";

export default function EnquiryStrip() {
  const { enquiry } = siteConfig;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    classType: "Dance (Bollywood / Hip Hop / Contemporary)",
    studio: "Sector 16 (Main Branch)",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert("Please provide your name and phone number.");
      return;
    }

    try {
      // Fire automated notification to studio operations center
      await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          discipline: formData.classType,
          studioId: formData.studio.includes("Sector 5") ? "sector5" : "sector16",
          notes: formData.message,
          source: "website-form",
        }),
      });
      setIsSent(true);
    } catch (err) {
      console.warn("Auto-notify background error:", err);
    }

    let text = `*New Inquiry - Flawless Dance & Fitness Studio*%0A%0A`;
    text += `👤 *Name:* ${encodeURIComponent(formData.name)}%0A`;
    text += `📱 *Phone:* ${encodeURIComponent(formData.phone)}%0A`;
    text += `💃 *Class:* ${encodeURIComponent(formData.classType)}%0A`;
    text += `📍 *Studio:* ${encodeURIComponent(formData.studio)}%0A`;
    if (formData.message) {
      text += `💬 *Note:* ${encodeURIComponent(formData.message)}%0A`;
    }
    text += `%0A_Sent via flawlessdance.in_`;

    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <section id="enquiry" className="py-24 md:py-36 px-6 md:px-12 hairline-b bg-[#0A0A0A]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Form & Header */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-accent mb-4 block">
              {enquiry.label}
            </span>
            <h3 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-offwhite mb-4">
              {enquiry.title}.
            </h3>
            <p className="text-base sm:text-lg text-muted mb-10 max-w-xl">
              {enquiry.subtitle}
            </p>
          </div>

          {/* Minimalist Editorial Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-muted">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Sen"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-surface border-b border-hairline focus:border-accent text-offwhite p-4 text-base outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-muted">WhatsApp Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-surface border-b border-hairline focus:border-accent text-offwhite p-4 text-base outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-muted">Select Discipline *</label>
                <select
                  value={formData.classType}
                  onChange={(e) => setFormData({ ...formData, classType: e.target.value })}
                  className="w-full bg-surface border-b border-hairline focus:border-accent text-offwhite p-4 text-base outline-none transition-colors"
                >
                  <option value="Dance (Bollywood / Hip Hop / Contemporary)">Dance (Bollywood / Hip Hop / Contemporary)</option>
                  <option value="Zumba & Fitness">Zumba &amp; Fitness</option>
                  <option value="Yoga & Wellness">Yoga &amp; Wellness</option>
                  <option value="Ladies Afternoon Batch">Ladies Afternoon Batch</option>
                  <option value="Kids & Teens Academy">Kids &amp; Teens Academy</option>
                  <option value="Wedding / Sangeet Choreography">Wedding / Sangeet Choreography</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-muted">Preferred Studio *</label>
                <select
                  value={formData.studio}
                  onChange={(e) => setFormData({ ...formData, studio: e.target.value })}
                  className="w-full bg-surface border-b border-hairline focus:border-accent text-offwhite p-4 text-base outline-none transition-colors"
                >
                  <option value="Sector 16 (Main Branch)">Sector 16 (Krishna Vihar Main)</option>
                  <option value="Sector 5 (Tilak School Road)">Sector 5 (Tilak School Road)</option>
                  <option value="Either / Flexible">Either / Flexible</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-muted">Message or Preferred Batch</label>
              <input
                type="text"
                placeholder="e.g. Morning timing preference or beginner background..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-surface border-b border-hairline focus:border-accent text-offwhite p-4 text-base outline-none transition-colors"
              />
            </div>

            {isSent && (
              <div className="p-3 rounded-lg bg-green-500/15 border border-green-500/30 text-green-300 text-xs font-mono flex items-center gap-2">
                <span>✓</span>
                <span>Automated notification dispatched to studio admin! Opening WhatsApp...</span>
              </div>
            )}

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <button
                type="submit"
                className="px-10 py-5 rounded-full bg-accent text-[#0A0A0A] font-display font-bold text-sm md:text-base tracking-widest uppercase hover:bg-offwhite transition-colors cursor-pointer"
              >
                Send on WhatsApp →
              </button>
              <p className="text-xs font-mono text-muted">
                Fees once paid are non-refundable. Call +91 {siteConfig.phones[0]} for instant queries.
              </p>
            </div>
          </form>
        </div>

        {/* Right Column: High-End Looping Editorial Video (Zero Controls) */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden border border-hairline bg-surface aspect-[9/13] sm:aspect-[9/12] lg:aspect-[9/14] w-full max-w-md mx-auto shadow-2xl group">
            <video
              src="/media/contact-reel.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/10 to-transparent opacity-85 pointer-events-none" />

            {/* Top Badge */}
            <div className="absolute top-4 left-4 pointer-events-none">
              <span className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-accent border border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                Live Studio Energy
              </span>
            </div>

            {/* Bottom Overlay Info */}
            <div className="absolute bottom-6 left-6 right-6 pointer-events-none space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted block">
                Flawless Dance &amp; Fitness Studio
              </span>
              <h4 className="text-xl font-display font-bold text-offwhite leading-tight">
                Dance. Train. Transform.
              </h4>
              <p className="text-xs text-muted">
                Now enrolling across Sector 16 &amp; Sector 5 studios in Ghansoli.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
