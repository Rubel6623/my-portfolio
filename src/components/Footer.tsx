"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./BrandIcons";
import { useTheme } from "./ThemeProvider";

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 backdrop-blur-sm transition-colors duration-300 ${
      isDark 
        ? "py-12 border-t border-slate-800 bg-slate-900/50" 
        : "py-12 border-t border-slate-200 bg-slate-50"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className={`text-2xl font-bold mb-2 ${isDark ? "gradient-text" : "text-sky-600"}`}>Portfolio.</h3>
            <p className={`text-sm max-w-xs text-center md:text-left ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Building modern web applications with a focus on user experience and clean code.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-6">
              <a href="https://github.com/Rubel6623" target="_blank" rel="noreferrer" className={`hover:text-white transition-colors ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                <GithubIcon size={20} />
              </a>
              <a href="#" className={`hover:text-white transition-colors ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                <LinkedinIcon size={20} />
              </a>
              <a href="#" className={`hover:text-white transition-colors ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                <TwitterIcon size={20} />
              </a>
              <a href="mailto:contact@example.com" className={`hover:text-white transition-colors ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                <Mail size={20} />
              </a>
            </div>
            <p className={isDark ? "text-slate-500 text-xs" : "text-slate-400 text-xs"}>
              © {currentYear} Rubel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
