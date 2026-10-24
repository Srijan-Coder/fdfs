"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export interface BatchItem {
  id: string;
  time: string;
  timeSort: number; // For clean chronological ordering (e.g., 700 for 7:00 AM, 1600 for 4:00 PM)
  discipline: string;
  instructor: string;
  instructorRole: string;
  branch: "sector16" | "sector5";
  branchName: string;
  days: string;
  daysArray: string[]; // ["Mon", "Tue", "Wed", "Thu", "Fri"]
  segment: "morning" | "afternoon" | "evening" | "night";
  level: string;
  tag: string;
  capacityStatus: string;
  highlight?: boolean;
}

const ALL_BATCHES: BatchItem[] = [
  {
    id: "s16-zumba-am",
    time: "07:00 AM – 08:00 AM",
    timeSort: 700,
    discipline: "Zumba & Cardio Blast",
    instructor: "Avinash Mishra",
    instructorRole: "Reality Show Winner · Studio Director",
    branch: "sector16",
    branchName: "Sector 16 (Krishna Vihar Main)",
    days: "Mon – Fri",
    daysArray: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    segment: "morning",
    level: "All Fitness Levels · High Energy",
    tag: "Morning Fitness",
    capacityStatus: "Filling Fast 🔥",
    highlight: true,
  },
  {
    id: "s5-aerobics-am",
    time: "07:30 AM – 08:30 AM",
    timeSort: 730,
    discipline: "Morning Aerobics & Zumba",
    instructor: "Deepak Sir",
    instructorRole: "Stamina & Cardio Specialist",
    branch: "sector5",
    branchName: "Sector 5 (Station Branch)",
    days: "Mon – Fri",
    daysArray: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    segment: "morning",
    level: "Beginner Friendly · Low Impact Options",
    tag: "Morning Fitness",
    capacityStatus: "Spots Open for Trial",
  },
  {
    id: "s16-yoga-am",
    time: "08:15 AM – 09:15 AM",
    timeSort: 815,
    discipline: "Power Yoga & Core Flexibility",
    instructor: "Tisa Pal",
    instructorRole: "Mobility & Posture Instructor",
    branch: "sector16",
    branchName: "Sector 16 (Krishna Vihar Main)",
    days: "Mon – Fri",
    daysArray: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    segment: "morning",
    level: "Beginner to Intermediate",
    tag: "Morning Routine",
    capacityStatus: "Spots Open for Trial",
  },
  {
    id: "s16-weekend-battle",
    time: "10:00 AM – 12:00 PM",
    timeSort: 1000,
    discipline: "Weekend Battle & Freestyle Intensive",
    instructor: "Ankit Gupta",
    instructorRole: "National Gold Medalist · Hip Hop Head",
    branch: "sector16",
    branchName: "Sector 16 (Krishna Vihar Main)",
    days: "Sat & Sun",
    daysArray: ["Sat", "Sun"],
    segment: "morning",
    level: "All Ages & Dedicated Dancers",
    tag: "Weekend Intensive",
    capacityStatus: "Limited to 15 Dancers",
    highlight: true,
  },
  {
    id: "s16-ladies-pm",
    time: "04:00 PM – 05:00 PM",
    timeSort: 1600,
    discipline: "Ladies-Only Bollywood Fitness",
    instructor: "Tisa Pal",
    instructorRole: "Women's Wellness & Dance Choreographer",
    branch: "sector16",
    branchName: "Sector 16 (Krishna Vihar Main)",
    days: "Mon – Fri",
    daysArray: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    segment: "afternoon",
    level: "Ladies Exclusive · Zero Experience Required",
    tag: "Exclusive Ladies",
    capacityStatus: "Popular Afternoon 👑",
    highlight: true,
  },
  {
    id: "s16-kids-pm",
    time: "05:00 PM – 06:00 PM",
    timeSort: 1700,
    discipline: "Kids Dance Academy (Foundations & Rhythm)",
    instructor: "Ankit Gupta",
    instructorRole: "Junior Academy Head · National Medalist",
    branch: "sector16",
    branchName: "Sector 16 (Krishna Vihar Main)",
    days: "Mon – Sat",
    daysArray: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    segment: "evening",
    level: "Ages 4 to 14 Years · Progressive Levels",
    tag: "Kids Academy",
    capacityStatus: "Enrolling Now 🧒",
  },
  {
    id: "s5-kids-grooves",
    time: "05:00 PM – 06:00 PM",
    timeSort: 1700,
    discipline: "Kids Hip Hop & Urban Grooves",
    instructor: "Avinash Mishra",
    instructorRole: "Youth Movement Director",
    branch: "sector5",
    branchName: "Sector 5 (Station Branch)",
    days: "Tue, Thu, Sat",
    daysArray: ["Tue", "Thu", "Sat"],
    segment: "evening",
    level: "Ages 5 to 15 Years",
    tag: "Kids Academy",
    capacityStatus: "Spots Open for Trial",
  },
  {
    id: "s16-urban-pm",
    time: "06:15 PM – 07:15 PM",
    timeSort: 1815,
    discipline: "Urban Hip Hop & Popping Foundation",
    instructor: "Ankit Gupta",
    instructorRole: "Street Dance Choreographer",
    branch: "sector16",
    branchName: "Sector 16 (Krishna Vihar Main)",
    days: "Mon – Fri",
    daysArray: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    segment: "evening",
    level: "Open Level · Isolations & Musicality",
    tag: "Street Dance",
    capacityStatus: "High Energy ⚡",
    highlight: true,
  },
  {
    id: "s5-bolly-pm",
    time: "06:15 PM – 07:15 PM",
    timeSort: 1815,
    discipline: "Bollywood Commercial & Stage Dance",
    instructor: "Tisa Pal",
    instructorRole: "Commercial Stylist",
    branch: "sector5",
    branchName: "Sector 5 (Station Branch)",
    days: "Mon – Fri",
    daysArray: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    segment: "evening",
    level: "Open Level · All Age Groups",
    tag: "Choreography",
    capacityStatus: "Spots Open for Trial",
  },
  {
    id: "s16-zumba-night",
    time: "07:30 PM – 08:30 PM",
    timeSort: 1930,
    discipline: "Evening High-Intensity Zumba Party",
    instructor: "Avinash Mishra",
    instructorRole: "Reality Show Champion · Energy Master",
    branch: "sector16",
    branchName: "Sector 16 (Krishna Vihar Main)",
    days: "Mon – Fri",
    daysArray: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    segment: "night",
    level: "Calorie Torching · All Fitness Levels",
    tag: "Prime Evening",
    capacityStatus: "Flagship Batch 🔥",
    highlight: true,
  },
  {
    id: "s5-zumba-night",
    time: "07:30 PM – 08:30 PM",
    timeSort: 1930,
    discipline: "Evening Cardio Zumba & Toning",
    instructor: "Deepak Sir",
    instructorRole: "Cardio & Stamina Lead",
    branch: "sector5",
    branchName: "Sector 5 (Station Branch)",
    days: "Mon – Fri",
    daysArray: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    segment: "night",
    level: "High Stamina · Full Body Conditioning",
    tag: "Prime Evening",
    capacityStatus: "Spots Open for Trial",
  },
  {
    id: "s16-masterclass",
    time: "08:30 PM – 09:30 PM",
    timeSort: 2030,
    discipline: "Elite Crew Repertoire & Masterclass Drill",
    instructor: "Avinash Mishra & Ankit Gupta",
    instructorRole: "Founders & Master Choreographers",
    branch: "sector16",
    branchName: "Sector 16 (Krishna Vihar Main)",
    days: "Mon, Wed, Fri",
    daysArray: ["Mon", "Wed", "Fri"],
    segment: "night",
    level: "Intermediate & Advanced Dancers",
    tag: "Performance Batch",
    capacityStatus: "Audition / Invitation Only",
  },
];

const DAYS_SHORT = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function SchedulePage() {
  const [selectedBranch, setSelectedBranch] = useState<"all" | "sector16" | "sector5">("all");
  const [selectedDay, setSelectedDay] = useState<string>("all");
  const [selectedSegment, setSelectedSegment] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

  // Determine current day for the "TODAY" shortcut
  const todayDayName = useMemo(() => {
    const dayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday
    const map = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return map[dayIndex];
  }, []);

  // Filtered batches
  const filteredBatches = useMemo(() => {
    return ALL_BATCHES.filter((b) => {
      // Branch filter
      if (selectedBranch !== "all" && b.branch !== selectedBranch) return false;

      // Day filter
      if (selectedDay === "today") {
        if (!b.daysArray.includes(todayDayName)) return false;
      } else if (selectedDay === "weekdays") {
        const isWeekday = b.daysArray.some((d) => ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(d));
        if (!isWeekday) return false;
      } else if (selectedDay === "weekend") {
        const isWeekend = b.daysArray.some((d) => ["Sat", "Sun"].includes(d));
        if (!isWeekend) return false;
      } else if (selectedDay !== "all") {
        if (!b.daysArray.includes(selectedDay)) return false;
      }

      // Time Segment filter
      if (selectedSegment !== "all" && b.segment !== selectedSegment) return false;

      // Category filter
      if (selectedCategory === "zumba" && !b.discipline.toLowerCase().includes("zumba") && !b.discipline.toLowerCase().includes("aerobics")) return false;
      if (selectedCategory === "dance" && !b.discipline.toLowerCase().includes("hip hop") && !b.discipline.toLowerCase().includes("dance") && !b.discipline.toLowerCase().includes("choreography") && !b.discipline.toLowerCase().includes("freestyle")) return false;
      if (selectedCategory === "kids" && !b.tag.toLowerCase().includes("kids")) return false;
      if (selectedCategory === "ladies" && !b.discipline.toLowerCase().includes("ladies")) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = b.discipline.toLowerCase().includes(q);
        const matchesInstructor = b.instructor.toLowerCase().includes(q);
        const matchesTag = b.tag.toLowerCase().includes(q);
        const matchesBranch = b.branchName.toLowerCase().includes(q);
        if (!matchesName && !matchesInstructor && !matchesTag && !matchesBranch) return false;
      }

      return true;
    }).sort((a, b) => a.timeSort - b.timeSort);
  }, [selectedBranch, selectedDay, selectedSegment, selectedCategory, searchQuery, todayDayName]);

  const resetFilters = () => {
    setSelectedBranch("all");
    setSelectedDay("all");
    setSelectedSegment("all");
    setSelectedCategory("all");
    setSearchQuery("");
  };

  const isFiltered =
    selectedBranch !== "all" ||
    selectedDay !== "all" ||
    selectedSegment !== "all" ||
    selectedCategory !== "all" ||
    searchQuery.trim().length > 0;

  return (
    <main className="pt-24 min-h-screen bg-[#0A0A0A]">
      {/* Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 hairline-b">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-accent block">
                /TIMETABLE &amp; SCHEDULE
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30 text-[10px] font-mono uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Live Matrix Active
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tight text-offwhite">
              Weekly Studio Matrix.
            </h1>
            <p className="text-sm md:text-base text-muted max-w-3xl leading-relaxed mt-3">
              Morning conditioning, afternoon ladies batches, evening kids academy, and night urban choreographies running daily across our two flagship campuses in Ghansoli.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            <Link
              href="/trial"
              className="px-6 py-3 rounded-full bg-accent text-[#0A0A0A] font-display font-bold text-xs uppercase tracking-wider hover:bg-offwhite transition-colors shadow-lg"
            >
              Book Trial Pass ⚡
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Flawless%20Dance%20Studio,%20I%20want%20to%20inquire%20about%20the%20weekly%20schedule`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-surface border border-hairline text-offwhite hover:border-accent font-display font-bold text-xs uppercase tracking-wider transition-colors"
            >
              WhatsApp Studio 💬
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Command & Filter Control Bar */}
      <section className="py-6 px-6 md:px-12 hairline-b bg-surface/40 space-y-5">
        
        {/* Row 1: Search & Campus Selection */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Campus Switcher */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-muted uppercase tracking-wider mr-1">Campus:</span>
            <button
              id="schedule-campus-all"
              onClick={() => setSelectedBranch("all")}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                selectedBranch === "all"
                  ? "bg-accent text-[#0A0A0A] font-bold"
                  : "bg-surface text-muted border border-hairline hover:text-offwhite"
              }`}
            >
              Both Campuses ({ALL_BATCHES.length})
            </button>
            <button
              id="schedule-campus-sector16"
              onClick={() => setSelectedBranch("sector16")}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                selectedBranch === "sector16"
                  ? "bg-accent text-[#0A0A0A] font-bold"
                  : "bg-surface text-muted border border-hairline hover:text-offwhite"
              }`}
            >
              Sector 16 Main (Krishna Vihar)
            </button>
            <button
              id="schedule-campus-sector5"
              onClick={() => setSelectedBranch("sector5")}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                selectedBranch === "sector5"
                  ? "bg-accent text-[#0A0A0A] font-bold"
                  : "bg-surface text-muted border border-hairline hover:text-offwhite"
              }`}
            >
              Sector 5 Station (Tilak Rd)
            </button>
          </div>

          {/* Search Box & View Mode */}
          <div className="flex items-center gap-3">
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search class, mentor, slot..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-full bg-[#141416] border border-hairline text-offwhite text-xs placeholder:text-muted/50 focus:outline-none focus:border-accent font-mono transition-colors"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted text-xs">
                🔍
              </span>
            </div>

            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center p-1 rounded-full bg-[#141416] border border-hairline">
              <button
                onClick={() => setViewMode("cards")}
                className={`px-3 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                  viewMode === "cards"
                    ? "bg-accent text-[#0A0A0A] font-bold"
                    : "text-muted hover:text-offwhite"
                }`}
              >
                Cards
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`px-3 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                  viewMode === "table"
                    ? "bg-accent text-[#0A0A0A] font-bold"
                    : "text-muted hover:text-offwhite"
                }`}
              >
                Matrix Table
              </button>
            </div>
          </div>
        </div>

        {/* Row 2: Day of the Week Selector */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-hairline/60">
          <span className="text-xs font-mono text-muted uppercase tracking-wider mr-2">Day:</span>
          
          <button
            onClick={() => setSelectedDay("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
              selectedDay === "all"
                ? "bg-offwhite text-[#0A0A0A] font-bold"
                : "bg-surface text-muted border border-hairline hover:text-offwhite"
            }`}
          >
            All Days
          </button>

          <button
            onClick={() => setSelectedDay("today")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 ${
              selectedDay === "today"
                ? "bg-accent text-[#0A0A0A] font-bold shadow-md shadow-accent/20"
                : "bg-accent/15 border border-accent/40 text-accent hover:bg-accent/25"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            <span>Today ({todayDayName})</span>
          </button>

          <button
            onClick={() => setSelectedDay("weekdays")}
            className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
              selectedDay === "weekdays"
                ? "bg-offwhite text-[#0A0A0A] font-bold"
                : "bg-surface text-muted border border-hairline hover:text-offwhite"
            }`}
          >
            Mon – Fri
          </button>

          <button
            onClick={() => setSelectedDay("weekend")}
            className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
              selectedDay === "weekend"
                ? "bg-offwhite text-[#0A0A0A] font-bold"
                : "bg-surface text-muted border border-hairline hover:text-offwhite"
            }`}
          >
            Sat &amp; Sun
          </button>

          <span className="hidden sm:inline-block w-[1px] h-4 bg-hairline mx-1" />

          {DAYS_SHORT.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                selectedDay === day
                  ? "bg-accent text-[#0A0A0A] font-bold"
                  : "text-muted hover:text-offwhite"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Row 3: Time Segment & Discipline Filter */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-hairline/60">
          {/* Time Segment */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-muted uppercase tracking-wider mr-1">Time:</span>
            {[
              { id: "all", label: "All Slots" },
              { id: "morning", label: "🌅 Morning (7–10 AM)" },
              { id: "afternoon", label: "💃 Afternoon (4–5 PM)" },
              { id: "evening", label: "🧒 Evening (5–7:15 PM)" },
              { id: "night", label: "⚡ Night (7:30–9:30 PM)" },
            ].map((seg) => (
              <button
                key={seg.id}
                onClick={() => setSelectedSegment(seg.id)}
                className={`px-3 py-1 rounded-full text-[11px] font-mono transition-colors cursor-pointer ${
                  selectedSegment === seg.id
                    ? "bg-offwhite text-[#0A0A0A] font-bold"
                    : "bg-surface text-muted border border-hairline hover:text-offwhite"
                }`}
              >
                {seg.label}
              </button>
            ))}
          </div>

          {/* Discipline Badges */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: "all", label: "All Disciplines" },
              { id: "zumba", label: "Zumba & Fitness" },
              { id: "dance", label: "Hip Hop & Dance" },
              { id: "kids", label: "Kids Academy" },
              { id: "ladies", label: "Ladies-Only" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-accent text-[#0A0A0A] font-bold"
                    : "text-muted hover:text-offwhite hover:bg-surface/50"
                }`}
              >
                {cat.label}
              </button>
            ))}

            {isFiltered && (
              <button
                onClick={resetFilters}
                className="text-[10px] font-mono text-accent hover:underline ml-2 cursor-pointer"
              >
                Reset All ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Active Batches Status Bar */}
      <section className="py-4 px-6 md:px-12 hairline-b bg-surface/10 flex items-center justify-between text-xs font-mono text-muted">
        <div>
          Showing <span className="text-offwhite font-bold">{filteredBatches.length}</span> active batch slots
          {selectedBranch !== "all" && (
            <span> at {selectedBranch === "sector16" ? "Sector 16 Main" : "Sector 5 Station"}</span>
          )}
          {selectedDay !== "all" && <span> on {selectedDay.toUpperCase()}</span>}
        </div>

        <div className="text-[11px] text-muted">
          First-time students: <Link href="/trial" className="text-accent hover:underline font-bold">Book Trial Pass ⚡</Link>
        </div>
      </section>

      {/* Main Schedule Content */}
      <section className="py-12 md:py-20 px-6 md:px-12 hairline-b">
        {filteredBatches.length === 0 ? (
          <div className="py-24 text-center space-y-4">
            <span className="text-3xl block">🗓️</span>
            <h3 className="text-xl font-display font-bold text-offwhite">
              No batches found matching your filters.
            </h3>
            <p className="text-xs text-muted max-w-md mx-auto">
              Try adjusting your day, time segment, or search keyword, or contact studio management directly.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 rounded-full bg-accent text-[#0A0A0A] font-mono font-bold text-xs uppercase tracking-wider hover:bg-offwhite transition-colors cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        ) : viewMode === "cards" ? (
          /* Card Matrix View */
          <div className="space-y-4 sm:space-y-6">
            {filteredBatches.map((batch) => {
              const trialUrl = `/trial?discipline=${encodeURIComponent(batch.discipline)}&studio=${batch.branch}&slot=${encodeURIComponent(batch.time)}`;
              const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Flawless%20Studio,%20I%20want%20to%20inquire%20about%20the%20${encodeURIComponent(batch.discipline)}%20batch%20at%20${batch.branch === "sector16" ? "Sector 16" : "Sector 5"}`;

              return (
                <div
                  key={batch.id}
                  className={`group p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 ${
                    batch.highlight
                      ? "bg-surface border-accent/40 shadow-xl shadow-accent/5 hover:border-accent"
                      : "bg-surface/60 border-hairline hover:border-offwhite/40"
                  }`}
                >
                  {/* Left: Timing & Schedule Badges */}
                  <div className="lg:w-1/4 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/25 text-[10px] font-mono uppercase tracking-wider">
                        {batch.tag}
                      </span>
                      <span className="text-[10px] font-mono uppercase text-muted">
                        {batch.days}
                      </span>
                    </div>

                    <p className="text-2xl sm:text-3xl font-display font-black text-offwhite tracking-tight">
                      {batch.time}
                    </p>

                    <div className="text-xs font-mono text-muted flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-offwhite font-semibold">
                        {batch.branchName}
                      </span>
                    </div>
                  </div>

                  {/* Middle: Discipline, Mentors & Credentials */}
                  <div className="lg:w-2/4 space-y-2">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-offwhite group-hover:text-accent transition-colors">
                      {batch.discipline}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-muted">
                      <span>Faculty:</span>
                      <span className="text-offwhite font-bold">{batch.instructor}</span>
                      <span className="text-hairline">·</span>
                      <span className="text-[11px] font-mono text-muted/80">{batch.instructorRole}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#161618] border border-hairline text-muted">
                        Level: {batch.level}
                      </span>
                      <span className="text-[11px] font-mono text-accent">
                        {batch.capacityStatus}
                      </span>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="lg:w-1/4 flex flex-wrap lg:flex-col lg:items-end justify-start gap-2.5">
                    <Link
                      href={trialUrl}
                      className="px-5 py-3 rounded-full bg-accent text-[#0A0A0A] font-display font-bold text-xs uppercase tracking-wider hover:bg-offwhite transition-colors text-center whitespace-nowrap shadow-md"
                    >
                      Book Trial Spot ⚡
                    </Link>

                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-full bg-surface border border-hairline hover:border-accent text-offwhite font-mono text-xs uppercase tracking-wider transition-colors text-center"
                    >
                      Inquire on WhatsApp 💬
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Chronological Matrix Table View */
          <div className="overflow-x-auto rounded-2xl border border-hairline bg-surface">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#141416] text-muted uppercase text-[10px] tracking-wider hairline-b">
                <tr>
                  <th className="py-4 px-6">Time Slot</th>
                  <th className="py-4 px-6">Discipline</th>
                  <th className="py-4 px-6">Campus</th>
                  <th className="py-4 px-6">Days Active</th>
                  <th className="py-4 px-6">Lead Faculty</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                {filteredBatches.map((batch) => (
                  <tr key={batch.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-bold text-offwhite whitespace-nowrap">
                      {batch.time}
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-display font-bold text-offwhite text-sm block">
                        {batch.discipline}
                      </span>
                      <span className="text-[10px] text-accent uppercase">
                        {batch.tag} · {batch.level}
                      </span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap text-muted">
                      {batch.branch === "sector16" ? "Sector 16 Main" : "Sector 5 Station"}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap text-muted">
                      {batch.days}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="text-offwhite font-bold block">{batch.instructor}</span>
                      <span className="text-[10px] text-muted">{batch.instructorRole}</span>
                    </td>
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <Link
                        href={`/trial?discipline=${encodeURIComponent(batch.discipline)}&studio=${batch.branch}&slot=${encodeURIComponent(batch.time)}`}
                        className="px-3.5 py-1.5 rounded-full bg-accent text-[#0A0A0A] font-display font-bold text-[10px] uppercase tracking-wider hover:bg-offwhite transition-colors inline-block"
                      >
                        Book Trial →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Campus Comparison & Facilities Strip */}
      <section className="py-16 md:py-24 px-6 md:px-12 hairline-b bg-surface/20">
        <span className="text-xs font-mono uppercase tracking-widest text-accent block mb-2">
          /TWO EXPANSIVE GHANSOLI LOCATIONS
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-offwhite mb-8">
          Campus Specs &amp; Facilities.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sector 16 */}
          <div className="p-8 rounded-2xl bg-surface border border-hairline space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-accent/15 text-accent border border-accent/30 text-xs font-mono uppercase">
                Main Flagship Studio
              </span>
              <span className="text-xs font-mono text-muted">Sector 16</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-offwhite">
              Krishna Vihar Main Campus
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              First Floor, Krishna Vihar, opposite Bus Stop, Sector 16, Talvali, Ghansoli Gaon, Navi Mumbai 400701.
            </p>
            <ul className="text-xs font-mono space-y-2 text-muted pt-2 border-t border-hairline">
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span> Sprung wooden shock-absorbing dance deck
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span> Full acoustic mirror walls &amp; high-power club sound
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span> Central Air Conditioning &amp; Ladies Dressing Suite
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span> Capacity: 25 Dancers per batch
              </li>
            </ul>
            <a
              href="tel:+918850120018"
              className="inline-block pt-2 text-accent text-xs font-mono font-bold hover:underline"
            >
              Call Sector 16: +91 88501 20018 →
            </a>
          </div>

          {/* Sector 5 */}
          <div className="p-8 rounded-2xl bg-surface border border-hairline space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-accent/15 text-accent border border-accent/30 text-xs font-mono uppercase">
                Station Branch
              </span>
              <span className="text-xs font-mono text-muted">Sector 5</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-offwhite">
              Tilak School Road Campus
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              Plot No. 64, Tilak School Road, opposite Tilak International School, Sector 5, Ghansoli, Navi Mumbai 400701.
            </p>
            <ul className="text-xs font-mono space-y-2 text-muted pt-2 border-t border-hairline">
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span> 3-minute walking distance from Ghansoli Railway Station
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span> High-res mirrors, cardio equipment &amp; surround audio
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span> Full Air Conditioning &amp; Private changing area
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span> Capacity: 20 Dancers per batch
              </li>
            </ul>
            <a
              href="tel:+919892226202"
              className="inline-block pt-2 text-accent text-xs font-mono font-bold hover:underline"
            >
              Call Sector 5: +91 98922 26202 →
            </a>
          </div>
        </div>
      </section>

      {/* Studio Policies & Guidelines */}
      <section className="py-12 px-6 md:px-12 bg-surface/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-muted">
          <div>
            <span className="text-offwhite font-bold block mb-1">Studio Floor Policy</span>
            <p>Clean indoor sports sneakers or bare socks required on specialized sprung wooden dance decks.</p>
          </div>
          <div className="sm:text-right">
            <span className="text-offwhite font-bold block mb-1">Zero Published Pricing Policy</span>
            <p>Fees once paid are strictly non-refundable under all circumstances. Packages tailored upon trial.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
