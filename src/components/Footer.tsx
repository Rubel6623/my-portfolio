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
      className={`py-6 backdrop-blur-sm transition-colors duration-300 border-t ${
        isDark
          ? "border-slate-800/50 bg-slate-900/30"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={contentRef}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          {/* Copyright & Name */}
          <div className="flex flex-col md:flex-row items-center gap-2">
            <p
              className={`text-sm font-medium ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              © {currentYear} Rubel.
            </p>
            <span className={`hidden md:inline text-sm ${isDark ? "text-slate-600" : "text-slate-300"}`}>|</span>
            <p className={`text-sm ${isDark ? "text-slate-500" : "text-slate-500"}`}>
              Built with dedication.
            </p>
          </div>

          {/* Social Links */}
          <div ref={linksRef} className="flex items-center gap-5">
            <a
              href="https://github.com/Rubel6623"
              target="_blank"
              rel="noreferrer"
              className={`transition-colors hover:-translate-y-0.5 transform duration-200 ${
                isDark ? "text-slate-400 hover:text-sky-400" : "text-slate-500 hover:text-sky-600"
              }`}
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/rubel-rudra-43ab54240"
              target="_blank"
              rel="noreferrer"
              className={`transition-colors hover:-translate-y-0.5 transform duration-200 ${
                isDark ? "text-slate-400 hover:text-sky-400" : "text-slate-500 hover:text-sky-600"
              }`}
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="#"
              className={`transition-colors hover:-translate-y-0.5 transform duration-200 ${
                isDark ? "text-slate-400 hover:text-sky-400" : "text-slate-500 hover:text-sky-600"
              }`}
              aria-label="Twitter"
            >
              <TwitterIcon size={18} />
            </a>
            <a
              href="mailto:rubelrudra27@gmail.com"
              className={`transition-colors hover:-translate-y-0.5 transform duration-200 ${
                isDark ? "text-slate-400 hover:text-sky-400" : "text-slate-500 hover:text-sky-600"
              }`}
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}