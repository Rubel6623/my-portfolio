"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "./ThemeProvider";

import SpotlightCard from "./SpotlightCard";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    title: "B.Sc. in Computer Science & Engineering",
    institution: "BGC Trust University Bangladesh",
    year: "Graduated: 2023",
    description: "Result: CGPA 3.08 / 4.00"
  },
  {
    title: "Higher Secondary Certificate (HSC) - Science",
    institution: "Bandarban Govt. College | Chittagong Board",
    year: "Passed: 2017",
    description: "Result: GPA 3.25 / 5.00"
  },
  {
    title: "Secondary School Certificate (SSC) - Science",
    institution: "B.G Senerhat High School | Chittagong Board",
    year: "2013 - 2015",
    description: "Result: GPA 4.22 / 5.00"
  }
];

const experienceData = [
  {
    title: "Complete Web Development",
    institution: "Programming Hero, Bangladesh",
    year: "Certification",
    description: "Achievement: Black Belt"
  },
  {
    title: "PHP With Laravel Framework",
    institution: "BITM Chittagong",
    year: "Training",
    description: "Comprehensive training program on backend web development using PHP and Laravel."
  },
  {
    title: "Robotics: Prospects and Challenges",
    institution: "BGC Trust University Bangladesh",
    year: "Workshop",
    description: "Explored the future prospects and challenges in the field of Robotics."
  }
];

export default function EducationAndExperience() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
      );

      const cards = cardsRef.current ? gsap.utils.toArray(".edu-card", cardsRef.current) : [];
      if (cards.length) {
        tl.fromTo(cards, 
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="education-experience"
      className={`py-20 transition-colors duration-300 ${
        isDark ? "bg-slate-900" : "bg-[var(--background)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-2">
          <h2
            ref={titleRef}
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? "text-slate-100" : "text-foreground"
            }`}
          >
            Education & Experience
          </h2>
          <div className="h-1 w-20 bg-sky-500 mx-auto rounded-full mb-6"></div>
          <p
            className={`max-w-2xl mx-auto ${
              isDark ? "text-slate-400" : "text-text-muted"
            }`}
          >
            A showcase of my academic journey and professional growth
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto pt-8">
          {/* Vertical Line */}
          <div className={`hidden lg:block absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2 ${isDark ? "bg-slate-800" : "bg-[var(--card-border)]"}`}></div>

          <div
            ref={cardsRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
          >
            {/* Education Column */}
            <div className="flex flex-col gap-8">
              <h3 className={`text-2xl font-bold mb-2 text-center lg:text-right ${isDark ? "text-sky-400" : "text-sky-600"}`}>
                Education
              </h3>
              {educationData.map((item, index) => (
                <SpotlightCard
                  key={`edu-${index}`}
                  className={`edu-card rounded-xl transition-all hover:scale-[1.02] relative !bg-transparent !p-0 ${
                    isDark
                      ? "border-slate-700/50 hover:border-sky-500/30"
                      : "border-[var(--card-border)] hover:border-sky-400"
                  }`}
                  spotlightColor={isDark ? "rgba(14, 165, 233, 0.1)" : "rgba(14, 165, 233, 0.05)"}
                >
                  <div className="p-8">
                    <h3
                      className={`text-xl md:text-2xl font-bold mb-2 ${
                        isDark ? "text-slate-100" : "text-foreground"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-lg mb-2 ${
                        isDark ? "text-sky-400" : "text-sky-600"
                      }`}
                    >
                      {item.institution}
                    </p>
                    <p
                      className={`text-sm mb-4 ${
                        isDark ? "text-slate-500" : "text-slate-500"
                      }`}
                    >
                      {item.year}
                    </p>
                    <p
                      className={`leading-relaxed ${
                        isDark ? "text-slate-400" : "text-text-muted"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {/* Experience Column */}
            <div className="flex flex-col gap-8 lg:pt-0">
              <h3 className={`text-2xl font-bold mb-2 text-center lg:text-left ${isDark ? "text-sky-400" : "text-sky-600"}`}>
                Training & Achievements
              </h3>
              {experienceData.map((item, index) => (
                <SpotlightCard
                  key={`exp-${index}`}
                  className={`edu-card rounded-xl transition-all hover:scale-[1.02] relative !bg-transparent !p-0 ${
                    isDark
                      ? "border-slate-700/50 hover:border-sky-500/30"
                      : "border-[var(--card-border)] hover:border-sky-400"
                  }`}
                  spotlightColor={isDark ? "rgba(14, 165, 233, 0.1)" : "rgba(14, 165, 233, 0.05)"}
                >
                  <div className="p-8">
                    <h3
                      className={`text-xl md:text-2xl font-bold mb-2 ${
                        isDark ? "text-slate-100" : "text-foreground"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-lg mb-2 ${
                        isDark ? "text-sky-400" : "text-sky-600"
                      }`}
                    >
                      {item.institution}
                    </p>
                    <p
                      className={`text-sm mb-4 ${
                        isDark ? "text-slate-500" : "text-slate-500"
                      }`}
                    >
                      {item.year}
                    </p>
                    <p
                      className={`leading-relaxed ${
                        isDark ? "text-slate-400" : "text-text-muted"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}