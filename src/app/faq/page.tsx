"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";

interface FAQItem {
  id: string;
  num: string;
  q: string;
  a: string;
  bullets?: string[];
  category: "admissions" | "classes" | "studios" | "policies" | "weddings";
  badge: string;
  action?: {
    label: string;
    href: string;
  };
}

const CATEGORIES = [
  { id: "all", label: "All Topics" },
  { id: "admissions", label: "Admissions & Trials" },
  { id: "classes", label: "Batches & Disciplines" },
  { id: "studios", label: "Studios & Dress Code" },
  { id: "policies", label: "Fees & Membership Rules" },
  { id: "weddings", label: "Weddings & Rentals" },
] as const;

const FAQS: FAQItem[] = [
  {
    id: "beginner-experience",
    num: "01",
    category: "admissions",
    badge: "ZERO EXPERIENCE WELCOME",
    q: "I have zero dance experience and feel awkward. Can I still join?",
    a: "Absolutely. Over 70% of our adult and fitness students had never set foot inside a dance studio before joining FDFS. Our classes are structured with zero elitism and zero judgment.",
    bullets: [
      "Movement is broken down into simple 8-count counts, posture drills, and rhythm exercises.",
      "Instructors provide individual pace adjustments so no student gets left behind.",
      "First week focuses on body loosening, confidence building, and enjoying the music.",
    ],
    action: {
      label: "Book Free 1st Trial →",
      href: "/trial",
    },
  },
  {
    id: "trial-pass-process",
    num: "02",
    category: "admissions",
    badge: "100% FREE FIRST SESSION",
    q: "How does the Free 1st Trial Session work, and how do I schedule one?",
    a: "We believe in testing the chemistry between dancer, teacher, and studio before any financial commitment. Booking takes under 60 seconds through our automated terminal.",
    bullets: [
      "Select your preferred discipline (Zumba, Hip Hop, Bollywood, Kids), branch, and time slot.",
      "Receive instant confirmation via phone/WhatsApp with arrival instructions.",
      "Arrive 10 minutes prior to class with comfortable workout clothes and indoor sneakers.",
      "Zero high-pressure sales afterwards; enrollment is entirely your choice.",
    ],
    action: {
      label: "Claim Trial Pass ⚡",
      href: "/trial",
    },
  },
  {
    id: "fee-transparency",
    num: "03",
    category: "policies",
    badge: "ZERO ONLINE RATE CARDS",
    q: "What is your fee structure and why aren't prices published on the website?",
    a: "We offer customized membership plans tailored to each dancer's individual commitment rather than one-size-fits-all generic pricing.",
    bullets: [
      "Packages vary by frequency (3 days/week vs 5 days/week) and duration (monthly, quarterly, semi-annual, or annual passes).",
      "We evaluate your fitness goals and batch availability during your trial session to recommend the most cost-effective package.",
      "Zero hidden registration surcharges, locker fees, or surprise equipment costs.",
    ],
    action: {
      label: "Discuss Plans on WhatsApp 💬",
      href: `https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Flawless%20Studio,%20I%20would%20like%20to%20know%20the%20membership%20packages%20for%20my%20preferred%20batch!`,
    },
  },
  {
    id: "refund-policy",
    num: "04",
    category: "policies",
    badge: "STRICT NON-REFUNDABLE POLICY",
    q: "What is your refund, cancellation, and fee transfer policy?",
    a: "To ensure predictable batch capacities (strictly capped at 20–25 dancers per hall) and fair instructor commitments, all fees once paid are non-refundable and non-transferable under all circumstances.",
    bullets: [
      "We strongly advise every prospective student to attend a free trial session before enrolling.",
      "Fees cannot be transferred to other individuals or exchanged for private rehearsal hours.",
      "Clear terms ensure optimal teacher-to-student ratios on every class deck.",
    ],
    action: {
      label: "Read Studio Terms & Policies →",
      href: "/terms",
    },
  },
  {
    id: "membership-freeze",
    num: "05",
    category: "policies",
    badge: "TRAVEL & MEDICAL GRACE",
    q: "Can I freeze or pause my membership if I travel, fall sick, or have exams?",
    a: "Yes. We recognize that life happens. For medical emergencies or out-of-town travel, memberships can be paused for up to 14 consecutive calendar days upon advance written notice to studio administration.",
    bullets: [
      "Notice must be submitted via WhatsApp or email prior to the start of the absence period.",
      "Available for quarterly and longer membership packages (1 pause cycle per 3 months).",
      "Retroactive pause requests for past unattended days cannot be honored.",
    ],
  },
  {
    id: "zumba-vs-dance",
    num: "06",
    category: "classes",
    badge: "FITNESS VS CHOREOGRAPHY",
    q: "What is the key difference between Zumba Cardio and Dance Choreography batches?",
    a: "Zumba is a full-body cardio workout designed for maximum calorie burn, stamina, and dopamine release. Dance classes focus on technique, style mechanics, and performance.",
    bullets: [
      "Zumba & Cardio: High-energy follow-along routines combining Latin beats, Afro grooves, and Bollywood hits. Great for weight loss, cardio endurance, and daily stress relief.",
      "Dance Batches: Deep dive into Hip Hop, Urban Choreography, Contemporary, or Bollywood footwork. Focus on body isolations, groove retention, and stage presence.",
    ],
    action: {
      label: "View Batch Timetable →",
      href: "/schedule",
    },
  },
  {
    id: "ladies-only-batch",
    num: "07",
    category: "classes",
    badge: "EXCLUSIVE LADIES BATCH",
    q: "Do you have dedicated Ladies-Only batches for fitness and dance?",
    a: "Yes! We run an exclusive afternoon Ladies Bollywood & Fitness batch every Monday through Friday from 04:00 PM to 05:00 PM at our Sector 16 Flagship.",
    bullets: [
      "100% private studio environment with closed-door acoustic comfort.",
      "Led by senior female choreographer Tisa Pal.",
      "Curriculum balances joyful Bollywood routines with core strengthening, posture correction, and low-impact cardio tailored for homemakers and working women.",
    ],
    action: {
      label: "View Ladies Batch Schedule →",
      href: "/schedule",
    },
  },
  {
    id: "kids-dance-academy",
    num: "08",
    category: "classes",
    badge: "AGES 4 TO 15 YEARS",
    q: "What age groups are accepted in the Kids Dance Academy, and what is taught?",
    a: "Our Kids Academy is stratified into progressive age groups: Tiny Tots (4–7 years), Juniors (8–11 years), and Teens/Pre-Pro (12–15 years).",
    bullets: [
      "Teaches musical timing, rhythm appreciation, flexibility, agility, and motor coordination.",
      "Foundational styles include Urban Hip Hop, Bollywood Freestyle, and Contemporary floorwork.",
      "Regular open studio showcases for parents and annual stage production participation.",
    ],
    action: {
      label: "Explore Kids Academy →",
      href: "/classes",
    },
  },
  {
    id: "batch-timings",
    num: "09",
    category: "classes",
    badge: "MORNING & EVENING SLOTS",
    q: "What are your batch timings across weekdays and weekends?",
    a: "Our studios operate 7 days a week with multiple morning, afternoon, and evening shifts to fit every routine.",
    bullets: [
      "Morning Batches (07:00 AM – 09:15 AM): Early Zumba, Aerobics, and Power Yoga.",
      "Afternoon Batches (04:00 PM – 05:00 PM): Exclusive Ladies Bollywood Fitness.",
      "Evening Batches (05:00 PM – 07:15 PM): Kids Dance Academy & Bollywood Commercial.",
      "Night Batches (07:30 PM – 09:30 PM): Urban Hip Hop, Choreography Labs, and Prime Zumba.",
      "Weekend Intensives (Saturday & Sunday): Battle freestyle training & choreography workshops.",
    ],
    action: {
      label: "See Full Live Timetable →",
      href: "/schedule",
    },
  },
  {
    id: "branch-selection",
    num: "10",
    category: "studios",
    badge: "TWO LOCATIONS IN GHANSOLI",
    q: "Which branch should I choose: Sector 16 (Krishna Vihar) or Sector 5 (Station Branch)?",
    a: "Both branches offer professional dance decks, full mirror walls, and air conditioning, but cater to different logistical needs.",
    bullets: [
      "Sector 16 Main (Krishna Vihar, Opp. Bus Stop, Talvali Gaon): Flagship facility with expansive sprung wooden floor (25 capacity), ladies dressing suite, and late-night choreography labs.",
      "Sector 5 Station (Plot 64, Tilak School Rd): 3 minutes walking distance from Ghansoli Railway Station (20 capacity). Ideal for office commuters and local students.",
      "Students can request cross-branch attendance flexibility with front desk coordination.",
    ],
    action: {
      label: "Compare Studio Campuses →",
      href: "/studios",
    },
  },
  {
    id: "dress-code-shoes",
    num: "11",
    category: "studios",
    badge: "WOODEN DECK PROTECTION",
    q: "What should I wear, and what is the footwear policy for the dance floor?",
    a: "Proper attire ensures freedom of movement and preserves our high-grade shock-absorbing wooden deck.",
    bullets: [
      "Footwear: Only clean, non-marking indoor sports sneakers or bare socks are permitted. Outside street footwear must be left in the foyer shoe racks.",
      "Attire: Comfortable, stretchy activewear (sweatpants, track pants, joggers, gym leggings, breathable t-shirts). Avoid jeans, belts, or metallic buttons.",
      "Personal Gear: Please bring your personal water bottle and a small sweat towel for hygiene.",
    ],
  },
  {
    id: "transit-parking",
    num: "12",
    category: "studios",
    badge: "ACCESSIBILITY & TRANSIT",
    q: "How do I reach the studios by public transit, and is parking available?",
    a: "Both locations are centrally situated in Ghansoli, Navi Mumbai, with swift rail and road connectivity.",
    bullets: [
      "Sector 16 Main: Directly accessible via NMMT buses stopping at Ghansoli Talvali Gaon. Ample two-wheeler parking in front of the building; street parking on the main avenue.",
      "Sector 5 Station: 300 meters from Ghansoli Railway Station (Trans-Harbour line), directly opposite Tilak International School. Dedicated two-wheeler bays.",
    ],
    action: {
      label: "Get Directions & Maps →",
      href: "/contact",
    },
  },
  {
    id: "faculty-credentials",
    num: "13",
    category: "admissions",
    badge: "REALITY WINNERS & MEDALISTS",
    q: "Who are the instructors and what are their professional qualifications?",
    a: "FDFS is directed and mentored by celebrated choreographers with industry credentials and competitive accolades.",
    bullets: [
      "Avinash Mishra (Studio Director): Reality Dance Show Winner, judge, and master choreographer with 10+ years of teaching excellence.",
      "Ankit Gupta (Urban Head): National Gold Medalist in urban street battles, specializing in popping, locking, and commercial grooves.",
      "Tisa Pal (Bollywood & Contemporary): Experienced stylist leading the Ladies-Only batches, wedding masterclasses, and kids foundations.",
      "Deepak Sir (Fitness Lead): Certified stamina, aerobics, and cardio conditioning instructor.",
    ],
    action: {
      label: "Meet The Full Faculty →",
      href: "/team",
    },
  },
  {
    id: "stage-opportunities",
    num: "14",
    category: "admissions",
    badge: "STAGE SHOWCASES & BATTLES",
    q: "Are there opportunities for students to perform on stage or compete in battles?",
    a: "Yes! Dance is meant to be shared. We provide regular avenues for students who want to build stage presence and portfolio work.",
    bullets: [
      "Annual Studio Showcase: A full-scale theater production where every batch presents curated choreographies.",
      "Navi Mumbai Cyphers & Battles: Advanced dancers represent FDFS in inter-studio battles and street dance events.",
      "Studio Video Reels: Professional in-house 4K shoots showcasing student group routines for Instagram and YouTube.",
    ],
    action: {
      label: "Watch Student Reels & Gallery →",
      href: "/gallery",
    },
  },
  {
    id: "wedding-sangeet",
    num: "15",
    category: "weddings",
    badge: "NAVI MUMBAI'S NO.1 SANGEET",
    q: "Do you offer Wedding and Sangeet Choreography for couples and families?",
    a: "Yes! We are Navi Mumbai's premier wedding choreography studio, having trained dozens of couples and extended families for unforgettable celebrations.",
    bullets: [
      "Bride & Groom romantic duets and cinematic entries.",
      "High-energy family flashmobs, cousins showdowns, and parents nostalgic medleys.",
      "Flexible rehearsal scheduling at our private studios or at your home/venue.",
      "Simplified choreography tailored to non-dancers so everyone shines on stage.",
    ],
    action: {
      label: "Explore Wedding Sangeet Packages →",
      href: "/wedding",
    },
  },
  {
    id: "music-editing-medleys",
    num: "16",
    category: "weddings",
    badge: "CUSTOM AUDIO EDITING",
    q: "Do you provide custom music editing, track medleys, and audio mixing?",
    a: "Every wedding choreography package and competition routine includes custom audio engineering by our in-house production team.",
    bullets: [
      "Seamless beat matching, smooth transitions, and tempo adjustments tailored to your dance pace.",
      "Clean censorship of explicit tracks and removal of awkward musical interludes.",
      "Custom voiceover recording and personalized audio introductions for bride & groom entries.",
    ],
    action: {
      label: "Inquire on Wedding Medleys →",
      href: "/wedding",
    },
  },
  {
    id: "studio-rentals",
    num: "17",
    category: "weddings",
    badge: "HOURLY FLOOR RENTAL",
    q: "Can I rent the studio floor for private rehearsal, auditions, or video shoots?",
    a: "Yes! Outside of our scheduled batch hours, both studio floors are available for hourly dry rental.",
    bullets: [
      "Full access to high-output acoustic sound system, Bluetooth receiver, and dynamic lighting rigs.",
      "High-speed Wi-Fi, air-conditioning, full-length mirrors, and private dressing room.",
      "Advance booking of at least 48 hours is required to reserve your slot.",
    ],
    action: {
      label: "Inquire for Studio Rental →",
      href: `https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Flawless%20Studio,%20I%20would%20like%20to%20inquire%20about%20hourly%20studio%20floor%20rental!`,
    },
  },
  {
    id: "how-to-enroll",
    num: "18",
    category: "admissions",
    badge: "FAST 2-MINUTE ENROLLMENT",
    q: "How do I officially enroll after completing my trial class?",
    a: "Enrollment is quick and seamless right after your trial session.",
    bullets: [
      "Speak directly with the studio coordinator at the reception desk or message our WhatsApp team.",
      "Select your batch slot and preferred package duration.",
      "Complete payment via UPI (Google Pay, PhonePe, Paytm), net banking, or debit card.",
      "Receive your student digital ID pass and welcome packet immediately.",
    ],
    action: {
      label: "Book Free 1st Trial Now →",
      href: "/trial",
    },
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [openIds, setOpenIds] = useState<string[]>(["beginner-experience", "trial-pass-process"]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(FAQS.map((f) => f.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  const filtered = useMemo(() => {
    return FAQS.filter((item) => {
      if (activeCategory !== "all" && item.category !== activeCategory) return false;
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      const matchQ = item.q.toLowerCase().includes(q);
      const matchA = item.a.toLowerCase().includes(q);
      const matchBadge = item.badge.toLowerCase().includes(q);
      const matchBullets = item.bullets?.some((b) => b.toLowerCase().includes(q));
      return matchQ || matchA || matchBadge || matchBullets;
    });
  }, [activeCategory, search]);

  const countsByCategory = useMemo(() => {
    const counts: Record<string, number> = { all: FAQS.length };
    FAQS.forEach((f) => {
      counts[f.category] = (counts[f.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <main className="pt-24 pb-32 md:pb-20 min-h-screen bg-[#0A0A0A] text-[#F2F0EB]">
      {/* Editorial Header */}
      <section className="py-14 sm:py-20 md:py-28 px-4 sm:px-8 md:px-14 hairline-b bg-gradient-to-b from-[#111114] via-[#0A0A0A] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-accent font-bold">
                /STUDIO KNOWLEDGE BASE &amp; POLICIES
              </span>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-muted border border-hairline px-3 py-1 rounded-full bg-surface">
              {FAQS.length} Verified Answers · Updated 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight leading-tight sm:leading-tight text-offwhite mb-6 uppercase">
            Frequently Asked <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-offwhite via-offwhite to-accent">
              Questions.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted max-w-3xl leading-relaxed mb-8">
            Clear, transparent answers on our zero-experience beginner batches, free trial passes, customized membership fees, campus specifications, and strict non-refundable policy.
          </p>

          {/* Quick Jump Topic Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4">
            <button
              onClick={() => {
                setActiveCategory("admissions");
                setOpenIds(["beginner-experience", "trial-pass-process"]);
              }}
              className="text-left p-4 rounded-xl border border-hairline bg-surface hover:border-accent/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-accent">01 / BEGINNERS</span>
                <span className="text-xs group-hover:translate-x-1 transition-transform text-accent">→</span>
              </div>
              <h3 className="font-display font-bold text-sm text-offwhite group-hover:text-accent transition-colors">
                Never Danced Before?
              </h3>
              <p className="text-xs text-muted mt-1 leading-relaxed">
                70% of students start here with zero rhythm experience.
              </p>
            </button>

            <button
              onClick={() => {
                setActiveCategory("policies");
                setOpenIds(["fee-transparency", "refund-policy"]);
              }}
              className="text-left p-4 rounded-xl border border-hairline bg-surface hover:border-accent/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-accent">02 / FEES</span>
                <span className="text-xs group-hover:translate-x-1 transition-transform text-accent">→</span>
              </div>
              <h3 className="font-display font-bold text-sm text-offwhite group-hover:text-accent transition-colors">
                Fee &amp; Refund Policy
              </h3>
              <p className="text-xs text-muted mt-1 leading-relaxed">
                Tailored packages upon trial; strictly non-refundable terms.
              </p>
            </button>

            <button
              onClick={() => {
                setActiveCategory("studios");
                setOpenIds(["branch-selection", "dress-code-shoes"]);
              }}
              className="text-left p-4 rounded-xl border border-hairline bg-surface hover:border-accent/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-accent">03 / CAMPUSES</span>
                <span className="text-xs group-hover:translate-x-1 transition-transform text-accent">→</span>
              </div>
              <h3 className="font-display font-bold text-sm text-offwhite group-hover:text-accent transition-colors">
                Sector 16 vs Sector 5
              </h3>
              <p className="text-xs text-muted mt-1 leading-relaxed">
                Sprung wood decks, air conditioning, and station proximity.
              </p>
            </button>

            <button
              onClick={() => {
                setActiveCategory("classes");
                setOpenIds(["ladies-only-batch", "kids-dance-academy"]);
              }}
              className="text-left p-4 rounded-xl border border-hairline bg-surface hover:border-accent/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-accent">04 / SPECIALTY</span>
                <span className="text-xs group-hover:translate-x-1 transition-transform text-accent">→</span>
              </div>
              <h3 className="font-display font-bold text-sm text-offwhite group-hover:text-accent transition-colors">
                Ladies-Only &amp; Kids
              </h3>
              <p className="text-xs text-muted mt-1 leading-relaxed">
                Exclusive 4 PM ladies slots and 4-15 yrs youth academy.
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Instant Search Control Strip */}
      <section className="sticky top-[64px] sm:top-20 z-30 py-4 px-4 sm:px-8 md:px-14 bg-[#0A0A0A]/95 backdrop-blur-xl hairline-b">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              const count = countsByCategory[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? "bg-accent text-[#0A0A0A] font-bold shadow-md shadow-accent/20"
                      : "bg-surface/80 text-muted border border-hairline hover:text-offwhite hover:border-accent/40"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? "bg-[#0A0A0A]/30 text-[#0A0A0A]"
                        : "bg-hairline text-muted"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search & Batch Toggle */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="relative flex-1 md:w-72">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted text-xs">🔍</span>
              <input
                type="text"
                placeholder="Search questions, faculty, policies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-full bg-surface border border-hairline text-offwhite text-xs placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-offwhite text-xs"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="hidden lg:flex items-center gap-1 border border-hairline rounded-full p-0.5 bg-surface text-[10px] font-mono uppercase">
              <button
                onClick={expandAll}
                className="px-2.5 py-1 rounded-full text-muted hover:text-offwhite transition-colors"
              >
                Expand All
              </button>
              <span className="text-hairline">|</span>
              <button
                onClick={collapseAll}
                className="px-2.5 py-1 rounded-full text-muted hover:text-offwhite transition-colors"
              >
                Collapse
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Questions List */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-14">
        <div className="max-w-4xl mx-auto">
          
          {/* Status Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-muted mb-6 px-1">
            <span>
              Showing <span className="text-accent font-bold">{filtered.length}</span> questions
              {activeCategory !== "all" ? ` in ${CATEGORIES.find((c) => c.id === activeCategory)?.label}` : ""}
              {search ? ` matching "${search}"` : ""}
            </span>
            {search && (
              <button
                onClick={() => setSearch("")}
                className="text-accent underline cursor-pointer"
              >
                Reset search
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="p-10 rounded-2xl border border-hairline bg-surface text-center space-y-4">
              <span className="text-3xl block">🔍</span>
              <h3 className="text-xl font-display font-bold text-offwhite">
                No matching questions found
              </h3>
              <p className="text-sm text-muted max-w-md mx-auto">
                Couldn&apos;t find what you&apos;re looking for regarding &ldquo;{search}&rdquo;? Our studio managers are on standby to help you directly.
              </p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Flawless%20Studio,%20I%20have%20a%20question%20about:%20${encodeURIComponent(
                    search
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent text-[#0A0A0A] font-mono font-bold text-xs uppercase tracking-wider hover:bg-offwhite transition-colors"
                >
                  <span>Ask On WhatsApp</span>
                  <span>💬</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-3.5">
              {filtered.map((item) => {
                const isOpen = openIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    id={`faq-${item.id}`}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "border-accent/40 bg-[#121215] shadow-lg shadow-black/40"
                        : "border-hairline bg-surface/70 hover:border-hairline/80 hover:bg-surface"
                    }`}
                  >
                    {/* Accordion Trigger Header */}
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer group"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-3 sm:gap-4 flex-1">
                        <span className="text-xs font-mono font-bold text-muted/80 group-hover:text-accent transition-colors pt-0.5">
                          {item.num}
                        </span>

                        <div className="space-y-1.5 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#0A0A0A] border border-hairline text-accent">
                              {item.badge}
                            </span>
                          </div>

                          <h2 className="text-base sm:text-lg md:text-xl font-display font-bold text-offwhite group-hover:text-accent transition-colors leading-snug">
                            {item.q}
                          </h2>
                        </div>
                      </div>

                      {/* Expand/Collapse Indicator */}
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-hairline flex items-center justify-center font-mono text-sm shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? "bg-accent text-[#0A0A0A] border-accent rotate-45"
                            : "bg-surface text-muted group-hover:border-accent group-hover:text-accent"
                        }`}
                      >
                        +
                      </div>
                    </button>

                    {/* Accordion Body */}
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-2 hairline-t text-sm leading-relaxed space-y-4">
                        <p className="text-offwhite/90 font-sans">
                          {item.a}
                        </p>

                        {item.bullets && item.bullets.length > 0 && (
                          <ul className="space-y-2 pt-1 pl-1">
                            {item.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted">
                                <span className="text-accent text-xs mt-1 shrink-0">✔</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Action Link Footer within Card */}
                        <div className="pt-3 hairline-t flex flex-wrap items-center justify-between gap-3">
                          {item.action ? (
                            <Link
                              href={item.action.href}
                              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-accent hover:text-offwhite underline tracking-wider uppercase transition-colors"
                            >
                              <span>{item.action.label}</span>
                            </Link>
                          ) : (
                            <span className="text-[11px] font-mono text-muted/70">
                              FDFS Ghansoli Studio Guidelines
                            </span>
                          )}

                          <a
                            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Flawless%20Studio,%20I%20have%20a%20follow-up%20question%20on:%20${encodeURIComponent(
                              item.q
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-mono text-muted hover:text-accent flex items-center gap-1 transition-colors"
                          >
                            <span>Need more details? Inquire on WhatsApp</span>
                            <span>💬</span>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Still Have Questions Box */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-hairline bg-surface/50 text-center space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent block">
              // CAN&apos;T FIND YOUR QUESTION?
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-offwhite">
              Speak Directly with Studio Coordinators.
            </h3>
            <p className="text-xs sm:text-sm text-muted max-w-lg mx-auto leading-relaxed">
              Our front desk managers at Krishna Vihar (Sector 16) and Tilak School Road (Sector 5) are available 7 days a week from 07:00 AM to 10:30 PM.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="tel:+918850120018"
                className="px-4 py-2 rounded-full border border-hairline bg-surface text-offwhite hover:border-accent hover:text-accent text-xs font-mono transition-colors"
              >
                Call Sector 16: +91 88501 20018 📞
              </a>
              <a
                href="tel:+919892226202"
                className="px-4 py-2 rounded-full border border-hairline bg-surface text-offwhite hover:border-accent hover:text-accent text-xs font-mono transition-colors"
              >
                Call Sector 5: +91 98922 26202 📞
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Campus Location & Floor Policy Strip */}
      <section className="py-12 px-4 sm:px-8 md:px-14 hairline-b hairline-t bg-[#0D0D10]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-hairline bg-surface/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-bold">
                SECTOR 16 MAIN CAMPUS
              </span>
              <span className="text-[10px] font-mono text-muted">FLAGSHIP DANCE DECK</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              First Floor, Krishna Vihar, Opp. Bus Stop, Sector 16, Talvali Gaon, Ghansoli, Navi Mumbai 400701.
            </p>
            <div className="text-xs font-mono text-offwhite/90 space-y-1 pt-1">
              <div>✓ Sprung wooden shock-absorbing floor</div>
              <div>✓ Full acoustic mirror walls &amp; high-power club sound</div>
              <div>✓ Ladies dressing lounge &amp; Central Air Conditioning</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-hairline bg-surface/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-bold">
                SECTOR 5 STATION BRANCH
              </span>
              <span className="text-[10px] font-mono text-muted">TILAK SCHOOL ROAD</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Plot No. 64, Tilak School Road, Opp. Tilak International School, Sector 5, Ghansoli 400701.
            </p>
            <div className="text-xs font-mono text-offwhite/90 space-y-1 pt-1">
              <div>✓ 3-minute walk from Ghansoli Railway Station</div>
              <div>✓ High-res mirrors, cardio equipment &amp; surround audio</div>
              <div>✓ Full Air Conditioning &amp; private changing area</div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-16 md:py-24 px-4 sm:px-8 md:px-14 bg-gradient-to-t from-[#050505] to-[#0A0A0A]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-accent">
            READY TO JOIN THE DANCE FLOOR?
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-offwhite tracking-tight uppercase">
            Experience the Music. <br />
            Claim Your Free Trial Pass.
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
            Step onto our professional wooden floor, feel the acoustic sound, and meet instructors before committing.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/trial"
              className="px-8 py-4 rounded-full bg-accent text-[#0A0A0A] font-display font-bold text-xs uppercase tracking-wider hover:bg-offwhite transition-colors shadow-xl shadow-accent/20"
            >
              Book Free Trial Pass ⚡
            </Link>
            <Link
              href="/schedule"
              className="px-8 py-4 rounded-full border border-hairline text-offwhite hover:border-accent hover:text-accent font-display font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Explore Weekly Schedule →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
