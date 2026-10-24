import Link from "next/link";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Privacy Policy | Flawless Dance & Fitness Studio",
  description: "Privacy policy, media consent terms, CCTV disclosure, and data protection practices under DPDP Act 2023 for Flawless Dance & Fitness Studio Ghansoli.",
};

const sections = [
  {
    num: "01",
    title: "Data We Collect & Purpose",
    badge: "STUDENT ADMISSIONS",
    body: "When you interact with Flawless Dance & Fitness Studio through our online appointment booking system, trial pass reservations, WhatsApp inquiries, or in-studio registration forms, we collect strictly necessary details to administer your dance education.",
    items: [
      "Student Identification: Full name, age category (child, teen, adult), and emergency contact names.",
      "Direct Communication Coordinates: 10-digit WhatsApp number and email address for timetable updates, batch cancellations, and event notices.",
      "Studio Location Preference: Choice between Sector 16 Flagship and Sector 5 Station Campus.",
      "Health & Injury Disclosures: Voluntary physical injury or cardiovascular notes shared prior to trial sessions to ensure instructor safety modifications.",
    ],
  },
  {
    num: "02",
    title: "WhatsApp & Direct Communications",
    badge: "ZERO SPAM GUARANTEE",
    body: "We respect your digital boundaries. We do not sell, rent, license, or trade your contact details with external aggregators, advertisers, or third-party marketing companies.",
    items: [
      "WhatsApp notifications are strictly operational: reservation confirmations, fee due dates, festival workshop announcements, and emergency weather schedule changes.",
      "You may opt out of promotional workshop broadcasts at any time by replying 'STOP' or messaging studio administration directly.",
      "Studio communications originate exclusively from our verified business lines (+91 88501 20018 and +91 98922 26202).",
    ],
  },
  {
    num: "03",
    title: "Studio Photography & Social Media Consent",
    badge: "MEDIA POLICY",
    body: "Dance is a collaborative visual art. Rehearsal routines, choreography reels, workshop cyphers, and annual stage performances are regularly photographed and filmed for training review and artistic showcases.",
    items: [
      "Showcase Media: Footage is published on our official Instagram (@flawless_dfs) and YouTube channel (@flawlessdancefitnessstudio3284) to celebrate student progress.",
      "Opt-Out Protocol: If a student or guardian prefers not to appear in public social media footage, you must notify studio administration in writing via email or admission form upon joining.",
      "Commercial Third Parties: FDFS never licenses student images to third-party commercial stock libraries or external commercial advertising without express written guardian consent.",
    ],
  },
  {
    num: "04",
    title: "CCTV Security Surveillance",
    badge: "CAMPUS SAFETY",
    body: "For the personal security of our students, children, faculty, and visiting guardians, both Sector 16 and Sector 5 studios are equipped with 24/7 Closed-Circuit Television (CCTV) cameras.",
    items: [
      "Surveillance covers reception foyers, entrance passages, and open studio dance floors.",
      "CCTV footage is retained strictly for internal security review and incident prevention for up to 30 days before automated overwriting.",
      "Footage is confidential and only accessible by studio management or authorized law enforcement officials upon formal legal request.",
    ],
  },
  {
    num: "05",
    title: "Data Retention & Indian DPDP Act 2023",
    badge: "STATUTORY COMPLIANCE",
    body: "In compliance with the Digital Personal Data Protection Act 2023 (DPDP Act, India) and applicable Information Technology laws, FDFS implements robust measures to safeguard your personal data.",
    items: [
      "Digital booking records are stored in encrypted environments with role-based administrative access controls.",
      "Inactive student records are archived and permanently purged after 24 months of continuous non-enrollment.",
      "Right to Correction & Erasure: Students or guardians may request verification, correction, or deletion of their contact records by emailing our Grievance Desk.",
    ],
  },
  {
    num: "06",
    title: "Grievance Officer & Studio Contact",
    badge: "DIRECT DESK",
    body: "For any privacy concerns, data inquiries, or media opt-out notices, reach our studio management directly:",
    items: [
      `Entity: Flawless Dance & Fitness Studio`,
      `Campus 1: 1st Floor, Krishna Vihar, Opp. Bus Stop, Sector 16, Talvali, Ghansoli, Navi Mumbai 400701`,
      `Campus 2: Plot 64, Tilak School Rd, Opp. Tilak International School, Sector 5, Ghansoli, Navi Mumbai 400701`,
      `Official Email: ${siteConfig.email}`,
      `Hotlines: +91 88501 20018 / +91 98922 26202`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#0A0A0A] text-[#F2F0EB]">
      {/* Editorial Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 hairline-b">
        <div className="max-w-6xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-accent">
              /Legal Infrastructure
            </span>
            <span className="text-hairline">|</span>
            <span className="text-xs font-mono uppercase tracking-wider text-muted px-2.5 py-0.5 rounded-full bg-surface border border-hairline">
              DPDP Act 2023 Compliant
            </span>
            <span className="text-hairline">|</span>
            <span className="text-xs font-mono uppercase tracking-wider text-muted">
              Last Updated: October 2026
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-black tracking-tight text-offwhite mb-6 uppercase">
            Privacy Policy.
          </h1>
          <p className="text-base sm:text-xl text-muted max-w-3xl leading-relaxed font-sans">
            How Flawless Dance &amp; Fitness Studio collects, safeguards, and utilizes student inquiries, media footage, and personal data across our Ghansoli campuses.
          </p>
        </div>
      </section>

      {/* Grid of Legal Bento Sections */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {sections.map((sec) => (
            <div
              key={sec.num}
              className="p-6 sm:p-10 rounded-2xl bg-surface border border-hairline hover:border-accent/40 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4 hairline-b pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono font-bold text-accent">
                    {sec.num}.
                  </span>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-offwhite">
                    {sec.title}
                  </h2>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-accent/90 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                  {sec.badge}
                </span>
              </div>

              <p className="text-muted text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {sec.body}
              </p>

              <ul className="space-y-2.5">
                {sec.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-[#D4D2CD] leading-relaxed"
                  >
                    <span className="text-accent mt-0.5 shrink-0">✦</span>
                    <span>{item}</span>
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
              <Link href="/terms" className="text-offwhite hover:text-accent transition-colors underline">
                Terms of Service
              </Link>
              <span>·</span>
              <Link href="/refund" className="text-offwhite hover:text-accent transition-colors underline">
                Refund Policy
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
