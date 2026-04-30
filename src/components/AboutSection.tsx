"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
        "-=0.4"
      )
      .fromTo(imageRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        "-=0.6"
      )
      .fromTo(contentRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        "-=0.8"
      );

      const cards = contentRef.current?.querySelectorAll(".about-card");
      if (cards && cards.length > 0) {
        tl.fromTo(cards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.6"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`py-20 transition-colors duration-300 ${isDark ? "bg-slate-900" : "bg-slate-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            ref={titleRef}
            className={`text-4xl font-bold mb-4 ${isDark ? "text-slate-100" : "text-slate-900"}`}
          >
            About{" "}
            <span className={isDark ? "gradient-text" : "text-sky-600"}>Me</span>
          </h2>
          <div
            ref={lineRef}
            className="w-20 h-1 bg-sky-500 mx-auto rounded-full"
          ></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div
            ref={imageRef}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div
                className={`absolute -inset-4 rounded-2xl blur-2xl ${
                  isDark
                    ? "bg-gradient-to-tr from-sky-500/30 to-indigo-500/30"
                    : "bg-gradient-to-tr from-sky-400/20 to-indigo-400/20"
                }`}
              ></div>
              <div
                className={`relative w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border shadow-2xl shadow-sky-500/10 ${
                  isDark
                    ? "bg-slate-800 border-slate-700/50"
                    : "bg-white border-slate-200"
                }`}
              >
                <Image
                  src="/assets/about.png"
                  alt="About Me"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div ref={contentRef} className="flex-1">
            <h3
              className={`text-2xl font-semibold mb-4 ${
                isDark ? "text-slate-100" : "text-slate-900"
              }`}
            >
              I&apos;m a Passionate Full Stack Developer
            </h3>
            <p
              className={`text-lg mb-6 leading-relaxed ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Hi, I&apos;m{" "}
              <span className={isDark ? "text-sky-400" : "text-sky-600"}>
                Rubel
              </span>{" "}
              — a dedicated Full Stack Developer with expertise in building
              modern, responsive, and user-friendly web applications. I
              specialize in creating seamless digital experiences that
              combine clean code with intuitive design.
            </p>
            <p
              className={`text-lg mb-8 leading-relaxed ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              With a strong foundation in both frontend and backend technologies,
              I transform ideas into reality. My approach focuses on writing
              clean, maintainable code while ensuring optimal performance and
              accessibility.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className={`about-card p-4 rounded-xl border ${
                  isDark
                    ? "bg-slate-800/50 border-slate-700/50"
                    : "bg-white border-slate-200"
                }`}
              >
                <h4 className={isDark ? "text-sky-400" : "text-sky-600"}>
                  Frontend
                </h4>
                <p className={isDark ? "text-slate-400" : "text-slate-500"}>
                  React, Next.js, TypeScript, Tailwind CSS
                </p>
              </div>
              <div
                className={`about-card p-4 rounded-xl border ${
                  isDark
                    ? "bg-slate-800/50 border-slate-700/50"
                    : "bg-white border-slate-200"
                }`}
              >
                <h4 className={isDark ? "text-sky-400" : "text-sky-600"}>
                  Backend
                </h4>
                <p className={isDark ? "text-slate-400" : "text-slate-500"}>
                  Node.js, Express, MongoDB, PostgreSQL
                </p>
              </div>
              <div
                className={`about-card p-4 rounded-xl border ${
                  isDark
                    ? "bg-slate-800/50 border-slate-700/50"
                    : "bg-white border-slate-200"
                }`}
              >
                <h4 className={isDark ? "text-sky-400" : "text-sky-600"}>
                  Tools
                </h4>
                <p className={isDark ? "text-slate-400" : "text-slate-500"}>
                  Git, Docker, AWS, Figma
                </p>
              </div>
              <div
                className={`about-card p-4 rounded-xl border ${
                  isDark
                    ? "bg-slate-800/50 border-slate-700/50"
                    : "bg-white border-slate-200"
                }`}
              >
                <h4 className={isDark ? "text-sky-400" : "text-sky-600"}>
                  Experience
                </h4>
                <p className={isDark ? "text-slate-400" : "text-slate-500"}>
                  1+ Years Building Web Apps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}