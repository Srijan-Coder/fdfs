import Link from "next/link";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Cookie Policy | Flawless Dance & Fitness Studio",
  description: "Cookie policy, local storage usage, and session management standards for Flawless Dance & Fitness Studio Ghansoli.",
};

const cookieItems = [
  {
    num: "01",
    title: "What Are Cookies & Web Storage?",
    badge: "FUNDAMENTALS",
    body: "Cookies and browser local storage are small text files or key-value entries stored directly within your web browser to preserve user context, streamline form navigation, and maintain responsive performance.",
  },
  {
    num: "02",
    title: "Strictly Necessary Functional Storage",
    badge: "ESSENTIAL ONLY",
    body: "Flawless Dance & Fitness Studio utilizes minimal, strictly essential browser storage to ensure seamless browsing experience across devices.",
    bullets: [
      "Appointment Booking Persistence: When reserving a trial pass on /trial, draft entries (such as discipline selection and selected studio campus) are temporarily stored locally so you do not lose progress if page refreshed.",
      "Navigation & Interaction State: Remembers whether you have opened our Fullscreen Studio Directory, active timetable filters, and mobile drawer views.",
      "Performance Optimization: Caches responsive layout coordinates for ultra-smooth 60fps animations.",
    ],
  },
  {
    num: "03",
    title: "Zero Third-Party Advertising Pixels",
    badge: "PRIVACY FIRST",
    body: "We do not deploy invasive third-party ad-tracking pixels, cross-site behavioral trackers, or data-broker surveillance scripts.",
    bullets: [
      "No Data Brokering: Your browsing habits on flawlessdance.in are never packaged, auctioned, or sold to marketing aggregators.",
      "Direct Embedded Media: Embedded YouTube showcase choreographies and Google Maps studio directions operate under their standard privacy and caching sandboxes.",
    ],
  },
  {
    num: "04",
    title: "Managing & Clearing Browser Storage",
    badge: "USER CONTROLS",
    body: "You maintain complete autonomous control over cookies and local storage on your devices.",
    bullets: [
      "Browser Controls: You can instruct your browser (Chrome, Safari, Firefox, Edge) to block cookies or delete cached website data at any time via Settings > Privacy & Security.",
      "Incognito / Private Mode: You are welcome to browse our site in incognito or private browsing mode without impacting core timetable access or appointment booking capabilities.",
      "Questions: Reach our web operations desk at flawlessdance123@gmail.com for technical inquiries.",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#0A0A0A] text-[#F2F0EB]">
      {/* Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 hairline-b">
        <div className="max-w-6xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-accent">
              /Web Operations
            </span>
            <span className="text-hairline">|</span>
            <span className="text-xs font-mono uppercase tracking-wider text-muted px-2.5 py-0.5 rounded-full bg-surface border border-hairline">
              Privacy-First Architecture
            </span>
            <span className="text-hairline">|</span>
            <span className="text-xs font-mono uppercase tracking-wider text-muted">
              Effective Date: 2026 Season
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-black tracking-tight text-offwhite mb-6 uppercase">
            Cookie Policy.
          </h1>
          <p className="text-base sm:text-xl text-muted max-w-3xl leading-relaxed font-sans">
            How Flawless Dance &amp; Fitness Studio respects user privacy through minimal, functional local storage and zero invasive third-party advertising cookies.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {cookieItems.map((item) => (
            <div
              key={item.num}
              className="p-6 sm:p-10 rounded-2xl bg-surface border border-hairline hover:border-accent/40 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4 hairline-b pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono font-bold text-accent">
                    {item.num}.
                  </span>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-offwhite">
                    {item.title}
                  </h2>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-accent/90 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                  {item.badge}
                </span>
              </div>

              <p className="text-muted text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {item.body}
              </p>

              {item.bullets && (
                <ul className="space-y-2.5">
                  {item.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-[#D4D2CD] leading-relaxed"
                    >
                      <span className="text-accent mt-0.5 shrink-0">✦</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
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
              <Link href="/privacy" className="text-offwhite hover:text-accent transition-colors underline">
                Privacy Policy
              </Link>
              <span>·</span>
              <Link href="/terms" className="text-offwhite hover:text-accent transition-colors underline">
                Terms of Service
              </Link>
              <span>·</span>
              <Link href="/refund" className="text-offwhite hover:text-accent transition-colors underline">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
