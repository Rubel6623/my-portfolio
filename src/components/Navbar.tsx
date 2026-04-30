"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import logo from "../../public/assets/Logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Tech Stack", href: "#techstack" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  if (!mounted) {
    return (
      <nav className="fixed w-full z-50 backdrop-blur-md border-b transition-colors duration-300 bg-white/80 border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src={logo}
                  alt="Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto bg-transparent"
                />
                <span className="text-2xl font-bold text-slate-900">
                  Portfolio.
                </span>
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
    <nav className={`fixed w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${
      isDark 
        ? "bg-slate-900/80 border-slate-800" 
        : "bg-white/80 border-slate-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logo}
                alt="Logo"
                width={40}
                height={40}
                className="h-10 w-auto bg-transparent"
              />
              <span className={`text-2xl font-bold ${isDark ? "gradient-text" : "text-slate-900"}`}>
                Portfolio.
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
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
                    isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
