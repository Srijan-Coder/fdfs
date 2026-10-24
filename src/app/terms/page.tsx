import Link from "next/link";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Terms of Service & Studio Regulations | Flawless Dance & Fitness Studio",
  description: "Terms and conditions, studio floor etiquette, footwear rules, liability waiver, and membership regulations for Flawless Dance & Fitness Studio Ghansoli.",
};

const termsClauses = [
  {
    num: "01",
    title: "Admission & Student Eligibility",
    badge: "REGISTRATION",
    body: "Admission to any dance, fitness, Zumba, yoga, or private choreography batch at Flawless Dance & Fitness Studio (FDFS) is subject to registration approval by studio management. All students or legal guardians (for minors under 18 years) must complete official onboarding prior to attending scheduled classes.",
    bullets: [
      "Age Categorization: Kids Academy (ages 4–12), Teens & Adults (ages 13+), Ladies Special Sessions (female participants only).",
      "Trial Session: New students are eligible for one trial evaluation session upon prior slot reservation.",
      "Right of Admission Reserved: FDFS reserves the unilateral right to deny admission or cancel membership in instances of misconduct or safety violations.",
    ],
  },
  {
    num: "02",
    title: "Non-Transferable Memberships & Fee Policy",
    badge: "STRICT CLAUSE",
    body: "All studio passes, monthly memberships, quarterly packages, and private choreography retainers are strictly personal and non-transferable under any circumstances.",
    bullets: [
      "Fees once paid are non-refundable: Under no circumstances will fees be refunded, pro-rated, or returned in cash, digital transfer, or credit.",
      "No Inter-Student Transfer: Class passes cannot be transferred, gifted, or re-assigned to siblings, friends, or acquaintances without formal written management approval.",
      "Transparent Pricing: FDFS does not publish fixed rates online because tuition is customized to batch frequency, age group, and discipline requirements.",
    ],
  },
  {
    num: "03",
    title: "Footwear & Sprung Deck Protection",
    badge: "FLOOR INTEGRITY",
    body: "Both Ghansoli campuses feature specialized shock-absorbent sprung wooden dance decks engineered to prevent joint stress. Preserving these surfaces is mandatory for dancer safety.",
    bullets: [
      "Strict Footwear Rule: Outdoor street shoes, muddy sneakers, high heels, hard-soled boots, and metal-cleated footwear are strictly prohibited inside studio rooms.",
      "Dedicated Indoor Shoes: Students must carry a clean, separate pair of indoor dance sneakers or train barefoot / with grip socks as instructed.",
      "Inspection: Studio staff may inspect shoe soles before dancers enter the sprung floor.",
    ],
  },
  {
    num: "04",
    title: "Physical Fitness, Health & Injury Waiver",
    badge: "HEALTH & SAFETY",
    body: "Dance, cardio Zumba, and athletic conditioning involve physical exertion. Participants acknowledge that physical movement entails inherent risks of sprains, muscle strains, or physical fatigue.",
    bullets: [
      "Prior Medical Disclosure: Students must inform their instructor prior to class of any pre-existing health condition, asthma, heart ailments, joint surgery, or pregnancy.",
      "Voluntary Participation: Participation is entirely voluntary. Students must listen to their bodies and pace themselves during high-intensity choreography drills.",
      "Liability Release: Flawless Dance & Fitness Studio, its directors, and faculty are not liable for personal injuries sustained due to failure to follow instructor safety guidelines.",
    ],
  },
  {
    num: "05",
    title: "Personal Belongings & Studio Etiquette",
    badge: "STUDIO PROTOCOL",
    body: "FDFS strives to foster an inspiring, disciplined, and respectful environment for all artists, dancers, and fitness enthusiasts.",
    bullets: [
      "Valuables: The studio does not accept custody or liability for lost, stolen, or damaged personal belongings, mobile phones, jewelry, or cash left in cubbies.",
      "Punctuality: Arrive 5 to 10 minutes before your batch start time. Late arrivals disrupt warm-up routines and increase the risk of injury.",
      "Mobile Devices: Mobile phones must be placed on silent mode during ongoing instruction.",
      "Respect & Decorum: Respectful conduct toward instructors, fellow students, and studio staff is mandatory at all times. Harassment or bullying results in immediate termination of membership.",
    ],
  },
  {
    num: "06",
    title: "Studio Schedule Modifications & Weather Force Majeure",
    badge: "TIMETABLE CONTROLS",
    body: "Studio management reserves the right to adjust class timings, substitute instructors, or combine batches due to master workshops, public holidays, or extreme monsoon weather.",
    bullets: [
      "Makeup Sessions: When a class is cancelled by FDFS due to instructor unavailability or severe monsoon waterlogging in Navi Mumbai, a compensatory makeup session is provided.",
      "Student Absence: Absences resulting from student personal travel, exams, or personal engagements cannot be compensated with fee deductions or cash refunds.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#0A0A0A] text-[#F2F0EB]">
      {/* Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 hairline-b">
        <div className="max-w-6xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-accent">
              /Operating Terms
            </span>
            <span className="text-hairline">|</span>
            <span className="text-xs font-mono uppercase tracking-wider text-muted px-2.5 py-0.5 rounded-full bg-surface border border-hairline">
              Official Regulations &amp; Waiver
            </span>
            <span className="text-hairline">|</span>
            <span className="text-xs font-mono uppercase tracking-wider text-muted">
              Effective Date: 2026 Season
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-black tracking-tight text-offwhite mb-6 uppercase">
            Terms of Service.
          </h1>
          <p className="text-base sm:text-xl text-muted max-w-3xl leading-relaxed font-sans">
            Operating terms, admission conditions, floor rules, and health liability waivers governing all students and visitors at Flawless Dance &amp; Fitness Studio.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Important Callout Box */}
          <div className="p-8 sm:p-10 rounded-2xl bg-surface border border-accent/40 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
                MANDATORY ENROLLMENT ACKNOWLEDGMENT
              </span>
            </div>
            <p className="text-xl sm:text-3xl font-display font-black text-offwhite leading-tight">
              &ldquo;Fees once paid are non-refundable and memberships are strictly non-transferable.&rdquo;
            </p>
            <p className="text-muted text-sm sm:text-base leading-relaxed max-w-3xl font-sans">
              By reserving a trial pass, registering for a course, or entering our studio floors at Sector 16 or Sector 5, you expressly accept these Terms of Service in their entirety.
            </p>
          </div>

          {/* Clauses */}
          {termsClauses.map((clause) => (
            <div
              key={clause.num}
              className="p-6 sm:p-10 rounded-2xl bg-surface border border-hairline hover:border-accent/40 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4 hairline-b pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono font-bold text-accent">
                    {clause.num}.
                  </span>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-offwhite">
                    {clause.title}
                  </h2>
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

          {/* Quick Action & Cross Links */}
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
              <Link href="/refund" className="text-offwhite hover:text-accent transition-colors underline">
                Refund Policy
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
