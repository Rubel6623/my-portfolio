"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X, Sun, Moon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import Image from "next/image";
import logo from "../../public/assets/Logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education-experience" },
  { name: "Skills", href: "#skills" },
  { name: "Tech Stack", href: "#techstack" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !navRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      const links = navRef.current?.querySelectorAll(".nav-link");
      if (links) {
        gsap.from(links, {
          y: -20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.05,
          delay: 0.3,
        });
      }
    }, navRef);

    return () => ctx.revert();
  }, [mounted]);

  const isDark = theme === "dark";

  if (!mounted) {
    return (
      <nav className="fixed w-full z-50 backdrop-blur-md border-b transition-colors duration-300 bg-white/80 border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-[2px]">
                  <div className="h-full w-full rounded-[10px] flex items-center justify-center p-1 bg-white">
                    <Image
                      src={logo}
                      alt="Logo"
                      width={24}
                      height={24}
                      className="h-6 w-auto"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold tracking-tight leading-none text-slate-900">
                    RUBEL<span className="text-sky-500">.</span>
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
                    Developer
                  </span>
                </div>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium transition-colors text-slate-700 hover:text-slate-900"
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  className="p-2 rounded-full transition-colors bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200"
                  aria-label="Toggle theme"
                >
                  <Sun size={20} />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 md:hidden">
              <button
                className="p-2 rounded-full transition-colors bg-slate-100 text-slate-700 hover:text-slate-900"
                aria-label="Toggle theme"
              >
                <Sun size={20} />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md focus:outline-none text-slate-700 hover:text-slate-900"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      ref={navRef}
      className={`fixed w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        isDark
          ? "bg-slate-900/80 border-slate-800"
          : "bg-white/80 border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 group">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-[2px] transition-transform duration-300 group-hover:scale-110">
                <div className={`h-full w-full rounded-[10px] flex items-center justify-center p-1 ${isDark ? "bg-slate-900" : "bg-white"}`}>
                  <Image
                    src={logo}
                    alt="Logo"
                    width={24}
                    height={24}
                    className="h-6 w-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className={`text-xl font-extrabold tracking-tight leading-none ${isDark ? "text-white" : "text-slate-900"}`}>
                  RUBEL<span className="text-sky-500">.</span>
                </span>
                <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                  Developer
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`nav-link hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isDark
                      ? "text-slate-300 hover:text-white"
                      : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                  isDark
                    ? "bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
                    : "bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200"
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDark
                  ? "bg-slate-800 text-slate-300 hover:text-white"
                  : "bg-slate-100 text-slate-700 hover:text-slate-900"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className={`md:hidden border-b ${
            isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isDark
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}