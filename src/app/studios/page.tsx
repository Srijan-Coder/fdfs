import StudiosSection from "@/components/StudiosSection";
import EnquiryStrip from "@/components/EnquiryStrip";

export const metadata = {
  title: "Studios & Locations | Flawless Dance & Fitness Studio",
  description: "Visit our two flagship dance and fitness studios in Sector 16 and Sector 5, Ghansoli, Navi Mumbai.",
};

export default function StudiosPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#0A0A0A]">
      <section className="py-16 md:py-24 px-6 md:px-12 hairline-b">
        <span className="text-xs font-mono uppercase tracking-widest text-accent mb-4 block">
          /Spaces
        </span>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tight text-offwhite mb-6">
          Our Studio Campuses.
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-3xl leading-relaxed">
          Two purpose-built dance and fitness destinations located in Ghansoli, Navi Mumbai. Fully air-conditioned, featuring sprung wooden dance flooring, acoustic audio systems, and full-length mirrors.
        </p>
      </section>

      <StudiosSection />
      <EnquiryStrip />
    </main>
  );
}
