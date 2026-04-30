"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Sun, Moon } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./BrandIcons";
import { useTheme } from "./ThemeProvider";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const currentYear = new Date().getFullYear();

  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });

      const linkElements = linksRef.current?.children;
      if (linkElements) {
        gsap.from(Array.from(linkElements), {
          y: 10,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.3,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`py-12 backdrop-blur-sm transition-colors duration-300 ${
        isDark
          ? "py-12 border-t border-slate-800 bg-slate-900/50"
          : "py-12 border-t border-slate-200 bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={contentRef}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="flex flex-col items-center md:items-start">
            <h3
              ref={titleRef}
              className={`text-2xl font-bold mb-2 ${
                isDark ? "gradient-text" : "text-sky-600"
              }`}
            >
              Rubel's Portfolio.
            </h3>
            <p
              className={`text-sm max-w-xs text-center md:text-left ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Building modern web applications with a focus on user experience
              and clean code.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div ref={linksRef} className="flex items-center gap-6">
              <a
                href="https://github.com/Rubel6623"
                target="_blank"
                rel="noreferrer"
                className={`hover:text-white transition-colors ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/rubel-rudra-43ab54240"
                className={`hover:text-white transition-colors ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="#"
                className={`hover:text-white transition-colors ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                <TwitterIcon size={20} />
              </a>
              <a
                href="mailto:rubelrudra27@gmail.com"
                className={`hover:text-white transition-colors ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                <Mail size={20} />
              </a>
            </div>
            <p
              className={
                isDark ? "text-slate-500 text-xs" : "text-slate-400 text-xs"
              }
            >
              © {currentYear} Rubel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}