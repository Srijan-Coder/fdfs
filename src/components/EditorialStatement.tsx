"use client";

import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function EditorialStatement() {
  const { interactiveDisciplines } = siteConfig.hero;

  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-12 hairline-b bg-[#0A0A0A]">
      <div className="max-w-6xl">
        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-offwhite leading-[1.05]">
          Building confidence through{" "}
          {interactiveDisciplines.map((item, index) => (
            <span key={item.label}>
              <Link
                href={item.href}
                className="text-muted hover:text-accent underline underline-offset-8 decoration-hairline hover:decoration-accent transition-colors duration-200"
              >
                {item.label}
              </Link>
              {index < interactiveDisciplines.length - 2 && ", "}
              {index === interactiveDisciplines.length - 2 && " & "}
            </span>
          ))}
          .
        </h2>
      </div>
    </section>
  );
}
