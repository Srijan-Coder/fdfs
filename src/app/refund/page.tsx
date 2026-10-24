import Link from "next/link";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Refund & Cancellation Policy | Flawless Dance & Fitness Studio",
  description: "Strict non-refundable fees policy, membership freeze criteria, trial session guidelines, and cancellation rules for Flawless Dance & Fitness Studio Ghansoli.",
};

const refundClauses = [
  {
    num: "01",
    title: "100% Non-Refundable Fee Policy",
    badge: "CORE POLICY",
    body: "Flawless Dance & Fitness Studio operates under a transparent, strictly enforced non-refundable fee model. Once a student, parent, or guardian registers and remits tuition or deposit for any batch, that seat is permanently blocked from other prospective dancers.",
    bullets: [
      "Fees once paid are non-refundable under all circumstances, including but not limited to change of mind, schedule conflicts, relocation, academic examinations, or personal disinterest.",
      "No Partial or Pro-Rated Refunds: If a student attends only a fraction of their registered monthly or quarterly classes, no pro-rated credit or refund will be disbursed for unattended sessions.",
      "Zero Digital Chargebacks: Submitting an enrollment payment constitutes irrevocable acceptance of this policy. Unjustified bank chargebacks will be contested with enrollment documentation.",
    ],
  },
  {
    num: "02",
    title: "Complimentary Trial Sessions",
    badge: "ZERO RISK EVALUATION",
    body: "To ensure students make an informed commitment before remitting any tuition, FDFS offers a trial evaluation pass.",
    bullets: [
      "New prospective students are invited to experience a studio session, meet the mentors, and inspect our wooden sprung deck facilities prior to enrolling.",
      "Trial sessions carry zero financial obligation until you formally choose to enroll in an ongoing batch.",
      "Trial passes must be reserved in advance via our website booking terminal or direct WhatsApp coordination.",
    ],
  },
  {
    num: "03",
    title: "Medical Pause & Emergency Membership Freeze",
    badge: "MEDICAL PROVISION",
    body: "While cash refunds are never provided, FDFS recognizes that unforeseen medical emergencies and acute injuries may temporarily interrupt physical activity.",
    bullets: [
      "Eligibility: Applicable exclusively to multi-month advance memberships (quarterly or bi-annual plans). Single-month passes cannot be paused.",
      "Documentation: A formal freeze request accompanied by a registered medical practitioner's certificate must be submitted to studio management within 48 hours of injury or onset.",
      "Freeze Duration: Approved medical freezes extend membership validity for a maximum of 14 consecutive days. Unused days are resumed immediately upon medical clearance.",
      "Non-Convertible: Medical freeze credits carry zero cash value and cannot be transferred to third parties or refunded.",
    ],
  },
  {
    num: "04",
    title: "Guest Workshops & Intensive Masterclasses",
    badge: "SPECIAL EVENTS",
    body: "Registrations for limited-capacity celebrity workshops, international faculty bootcamps, and weekend choreography intensives are final upon booking.",
    bullets: [
      "Studio spots are strictly capped to ensure safety and intimate instructor feedback.",
      "In the event an attendee cannot attend, no refund is granted. The attendee may, with at least 24 hours advance written studio notice, designate an eligible replacement dancer.",
    ],
  },
  {
    num: "05",
    title: "Studio-Initiated Cancellations & Makeup Sessions",
    badge: "STUDIO OBLIGATION",
    body: "If Flawless Dance & Fitness Studio must cancel a scheduled class due to instructor illness, scheduled auditorium rehearsals, or unforeseen force majeure events (such as severe monsoon flooding in Navi Mumbai):",
    bullets: [
      "The studio guarantees an alternative compensatory makeup session scheduled within the same or following training cycle.",
      "No cash refunds or fee reductions are issued in lieu of compensatory makeup classes.",
      "Students will receive immediate broadcast notification via WhatsApp or SMS regarding rescheduled timings.",
    ],
  },
  {
    num: "06",
    title: "Contacting Studio Administration",
    badge: "OFFICIAL DESK",
    body: "For all membership queries, medical freeze submissions, or timetable adjustments, contact studio leadership directly:",
    bullets: [
      `Official Email: ${siteConfig.email}`,
      `Flagship Hotline (Sector 16): +91 88501 20018`,
      `Station Campus Hotline (Sector 5): +91 98922 26202`,
      `In-Person Desk Hours: Monday to Sunday, 07:00 AM – 10:30 PM`,
    ],
  },
];

export default function RefundPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#0A0A0A] text-[#F2F0EB]">
      {/* Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 hairline-b">
        <div className="max-w-6xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-accent">
              /Fee Infrastructure
            </span>
            <span className="text-hairline">|</span>
            <span className="text-xs font-mono uppercase tracking-wider text-muted px-2.5 py-0.5 rounded-full bg-surface border border-hairline">
              Payment Gateway &amp; Consumer Compliance
            </span>
            <span className="text-hairline">|</span>
            <span className="text-xs font-mono uppercase tracking-wider text-muted">
              Policy Version 2026.1
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-black tracking-tight text-offwhite mb-6 uppercase">
            Refund &amp; Cancellation.
          </h1>
          <p className="text-base sm:text-xl text-muted max-w-3xl leading-relaxed font-sans">
            Clear, transparent guidelines regarding student tuition, trial sessions, emergency medical pauses, and non-refundable policy standards at Flawless Dance &amp; Fitness Studio.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Strict Non-Refundable Hero Banner */}
          <div className="p-8 sm:p-12 rounded-2xl bg-surface border border-accent/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-accent animate-ping" />
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
                BINDING CONSUMER NOTICE
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-black text-offwhite mb-4 leading-tight">
              &ldquo;Fees once paid are non-refundable.&rdquo;
            </h2>

            <p className="text-muted text-sm sm:text-base leading-relaxed max-w-3xl font-sans mb-6">
              To maintain our specialized small batch ratios, retain world-class faculty, and provide premium acoustic facilities, all fees paid towards classes, workshops, and choreography are strictly non-refundable and non-transferable.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Flawless%20Dance%20Studio,%20I%20have%20a%20question%20regarding%20the%20admission%20policy`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-[#0A0A0A] font-display font-bold text-xs uppercase tracking-wider hover:bg-offwhite transition-colors"
              >
                <span>Ask Studio Administration</span>
                <span>💬</span>
              </a>
              <Link
                href="/trial"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-hairline hover:border-accent text-offwhite font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <span>Try First: Book Free Trial Pass</span>
                <span>⚡</span>
              </Link>
            </div>
          </div>

          {/* Detailed Clauses */}
          {refundClauses.map((clause) => (
            <div
              key={clause.num}
              className="p-6 sm:p-10 rounded-2xl bg-surface border border-hairline hover:border-accent/40 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4 hairline-b pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono font-bold text-accent">
                    {clause.num}.
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-offwhite">
                    {clause.title}
                  </h3>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-accent/90 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                  {clause.badge}
                </span>
              </div>

              <p className="text-muted text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {clause.body}
              </p>

              <ul className="space-y-2.5">
                {clause.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-[#D4D2CD] leading-relaxed"
                  >
                    <span className="text-accent mt-0.5 shrink-0">✦</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Footer Back & Cross Links */}
          <div className="pt-10 hairline-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <Link
              href="/"
              className="text-xs font-mono uppercase tracking-widest text-accent hover:underline flex items-center gap-2"
            >
              <span>←</span>
              <span>Return to Studio Home</span>
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted">
              <span>Related Legal Policies:</span>
              <Link href="/terms" className="text-offwhite hover:text-accent transition-colors underline">
                Terms of Service
              </Link>
              <span>·</span>
              <Link href="/privacy" className="text-offwhite hover:text-accent transition-colors underline">
                Privacy Policy
              </Link>
              <span>·</span>
              <Link href="/cookie-policy" className="text-offwhite hover:text-accent transition-colors underline">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
