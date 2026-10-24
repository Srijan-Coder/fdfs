import TeamGrid from "@/components/TeamGrid";
import EnquiryStrip from "@/components/EnquiryStrip";

export const metadata = {
  title: "Faculty & Instructors | Flawless Dance & Fitness Studio",
  description: "Meet the master choreographers and instructors at Flawless Dance & Fitness Studio Ghansoli.",
};

export default function TeamPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#0A0A0A]">
      <section className="py-16 md:py-24 px-6 md:px-12 hairline-b">
        <span className="text-xs font-mono uppercase tracking-widest text-accent mb-4 block">
          /Faculty
        </span>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tight text-offwhite mb-6">
          Meet The Mentors.
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-3xl leading-relaxed">
          Our instructors bring reality television stage experience, gold medalist championship credentials, and certified yoga precision to every class.
        </p>
      </section>

      <TeamGrid />
      <EnquiryStrip />
    </main>
  );
}
