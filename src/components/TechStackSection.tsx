"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "./ThemeProvider";

import SpotlightCard from "./SpotlightCard";

gsap.registerPlugin(ScrollTrigger);

const techCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    technologies: [
      { name: "React.js", icon: "⚛️" },
      { name: "Next.js", icon: "🚀" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🌊" },
      { name: "Redux / Toolkit", icon: "🔄" },
      { name: "GSAP / Framer", icon: "✨" },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    technologies: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚂" },
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "RESTful APIs", icon: "🔗" },
      { name: "Firebase / Appwrite", icon: "🔥" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    technologies: [
      { name: "Git / GitHub", icon: "🐙" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS / Vercel", icon: "☁️" },
      { name: "Postman", icon: "📮" },
      { name: "Figma", icon: "🎨" },
      { name: "Linux / Bash", icon: "🐚" },
    ],
  },
];

export default function TechStackSection() {
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

      const categories = gridRef.current ? gsap.utils.toArray(".tech-category-card", gridRef.current) : [];
      if (categories.length) {
        tl.fromTo(categories, 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
          },
          "-=0.4"
        );
      }

      const items = gridRef.current ? gsap.utils.toArray(".tech-item-card", gridRef.current) : [];
      if (items.length) {
        tl.fromTo(items, 
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.05,
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
      id="techstack"
      className={`py-20 transition-colors duration-300 ${isDark ? "bg-slate-850" : "bg-[var(--background)]"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`text-4xl font-bold mb-4 ${isDark ? "text-slate-100" : "text-foreground"}`}
          >
            Tech <span className={isDark ? "gradient-text" : "text-sky-600"}>Stack</span>
          </h2>
          <p
            ref={descRef}
            className={`text-lg max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-text-muted"}`}
          >
            Technologies and tools I work with to build modern applications
          </p>
          <div
            ref={lineRef}
            className="w-20 h-1 bg-sky-500 mx-auto rounded-full mt-4"
          ></div>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {techCategories.map((category) => (
            <SpotlightCard
              key={category.title}
              className={`tech-category-card rounded-2xl border transition-colors !bg-transparent !p-0 ${
                isDark
                  ? "border-slate-800 hover:border-sky-500/50"
                  : "border-[var(--card-border)] hover:border-sky-400"
              }`}
              spotlightColor={isDark ? "rgba(14, 165, 233, 0.15)" : "rgba(14, 165, 233, 0.1)"}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className={`text-2xl font-semibold ${isDark ? "text-slate-100" : "text-foreground"}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className={`tech-item-card rounded-xl p-3 flex items-center gap-2 transition-all cursor-default ${
                        isDark
                          ? "bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 hover:border-sky-500/30"
                          : "bg-[var(--card-bg)] border border-[var(--card-border)] hover:bg-slate-100 hover:border-sky-300"
                      }`}
                    >
                      <span className="text-xl">{tech.icon}</span>
                      <span className={`text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            And many more tools and technologies I use in my projects...
          </p>
        </div>
      </div>
    </section>
  );
}