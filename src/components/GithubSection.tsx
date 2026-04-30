"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "./ThemeProvider";

import SpotlightCard from "./SpotlightCard";

gsap.registerPlugin(ScrollTrigger);

export default function GithubSection() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        { scaleX: 1, duration: 0.8, transformOrigin: "center" },
        "-=0.6"
      )
      .fromTo(descRef.current, 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(calendarRef.current, 
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1 },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="github"
      className={`py-20 transition-colors duration-300 ${
        isDark ? "bg-slate-900/50" : "bg-[var(--background)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? "text-slate-100" : "text-foreground"
            }`}
          >
            Days I Code
          </h2>
          <div
            ref={lineRef}
            className="h-1 w-20 bg-sky-500 mx-auto rounded-full"
          ></div>
          <p
            ref={descRef}
            className={`max-w-2xl mx-auto mt-6 ${
              isDark ? "text-slate-400" : "text-text-muted"
            }`}
          >
            A visual representation of my contribution activity on GitHub.
          </p>
        </div>

        <div ref={calendarRef}>
          <SpotlightCard
            className={`flex justify-center rounded-xl border overflow-x-auto !bg-transparent !p-0 ${
              isDark
                ? "border-slate-700"
                : "border-[var(--card-border)]"
            }`}
            spotlightColor={isDark ? "rgba(14, 165, 233, 0.15)" : "rgba(14, 165, 233, 0.1)"}
          >
            <div className={`p-8 ${isDark ? "text-slate-200" : "text-slate-800"}`}>
              {mounted && (
                <GitHubCalendar
                  username="Rubel6623"
                  colorScheme={isDark ? "dark" : "light"}
                  blockSize={14}
                  blockMargin={6}
                  fontSize={14}
                  theme={{
                    dark: ["#1e293b", "#0ea5e9", "#0284c7", "#0369a1", "#075985"],
                    light: ["#e2e8f0", "#7dd3fc", "#38bdf8", "#0ea5e9", "#0284c7"],
                  }}
                />
              )}
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}