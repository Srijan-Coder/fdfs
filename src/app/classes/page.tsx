import ClassesList from "@/components/ClassesList";
import ScheduleBlock from "@/components/ScheduleBlock";
import EnquiryStrip from "@/components/EnquiryStrip";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Classes & Schedule | Flawless Dance & Fitness Studio",
  description: "Explore our dance, Zumba, fitness, and yoga classes across morning, afternoon, and evening batches in Ghansoli.",
};

export default function ClassesPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#0A0A0A]">
      <section className="py-16 md:py-24 px-6 md:px-12 hairline-b">
        <span className="text-xs font-mono uppercase tracking-widest text-accent mb-4 block">
          /Curriculum
        </span>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tight text-offwhite mb-6">
          Classes &amp; Disciplines.
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-3xl leading-relaxed">
          From street dance and Bollywood chartbusters to morning cardio Zumba and restorative yoga. Structured for beginner to advanced dancers across all ages.
        </p>
      </section>

      <ClassesList />
      <ScheduleBlock />
      <EnquiryStrip />
    </main>
  );
}
