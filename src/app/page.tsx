import Hero from "@/components/Hero";
import EditorialStatement from "@/components/EditorialStatement";
import KineticMarquee from "@/components/KineticMarquee";
import AboutStudio from "@/components/AboutStudio";
import ClassesList from "@/components/ClassesList";
import ScheduleBlock from "@/components/ScheduleBlock";
import TeamGrid from "@/components/TeamGrid";
import StudiosSection from "@/components/StudiosSection";
import VideoShowcase from "@/components/VideoShowcase";
import StudioLifeNews from "@/components/StudioLifeNews";
import TestimonialsScroller from "@/components/TestimonialsScroller";
import EnquiryStrip from "@/components/EnquiryStrip";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Hero />
      <EditorialStatement />
      <KineticMarquee />
      <AboutStudio />
      <ClassesList />
      <ScheduleBlock />
      <TeamGrid />
      <StudiosSection />
      <VideoShowcase />
      <StudioLifeNews />
      <TestimonialsScroller />
      <EnquiryStrip />
    </main>
  );
}
