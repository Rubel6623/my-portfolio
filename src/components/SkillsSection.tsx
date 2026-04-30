"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "./ThemeProvider";

import SpotlightCard from "./SpotlightCard";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { 
    category: "Frontend", 
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
    color: "text-blue-600",
    bgColor: "bg-blue-600/10"
  },
  { 
    category: "Backend", 
    items: ["Node.js", "Express", "Python", "Django", "GraphQL", "REST APIs"],
    color: "text-emerald-600",
    bgColor: "bg-emerald-400/10"
  },
  { 
    category: "Database", 
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma"],
    color: "text-amber-600",
    bgColor: "bg-amber-600/10"
  },
  { 
    category: "Tools", 
    items: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"],
    color: "text-purple-600",
    bgColor: "bg-purple-600/10"
  },
];

export default function SkillsSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        defaults: { ease: "power3.out" }
      });

      tl.fromTo(titleRef.current, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
      .fromTo(lineRef.current, 
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(descRef.current, 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      );

      const items = gridRef.current ? gsap.utils.toArray(".skill-card", gridRef.current) : [];
      if (items.length) {
        tl.fromTo(items, 
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.4"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`py-20 transition-colors duration-300 ${isDark ? "bg-slate-900" : "bg-[var(--background)]"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-slate-100" : "text-foreground"}`}
          >
            My Skills
          </h2>
          <div
            ref={lineRef}
            className="h-1 w-20 bg-sky-500 mx-auto rounded-full"
          ></div>
          <p
            ref={descRef}
            className={`max-w-2xl mx-auto mt-6 ${isDark ? "text-slate-400" : "text-text-muted"}`}
          >
            I&apos;ve worked with a variety of technologies in the web development world.
            From Back-end To Design.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <SpotlightCard
              key={index}
              className={`skill-card rounded-2xl border transition-all group !bg-transparent !p-0 ${
                isDark
                  ? "border-slate-700/50 hover:border-slate-600"
                  : "border-[var(--card-border)] hover:border-sky-400"
              }`}
              spotlightColor={isDark ? "rgba(14, 165, 233, 0.15)" : "rgba(14, 165, 233, 0.1)"}
            >
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-6 ${skillGroup.color} flex items-center gap-2`}>
                  <div className={`w-2 h-2 rounded-full ${skillGroup.bgColor.replace('/10', '')}`}></div>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1.5 ${skillGroup.bgColor} ${skillGroup.color} rounded-lg text-xs font-medium border border-transparent group-hover:border-slate-700/50 transition-colors`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}