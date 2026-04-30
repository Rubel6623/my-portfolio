"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "./ThemeProvider";

export default function GithubSection() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="github" className={`py-20 transition-colors duration-300 ${isDark ? "bg-slate-900/50" : "bg-slate-100"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-slate-100" : "text-slate-900"}`}>Days I Code</h2>
          <div className="h-1 w-20 bg-sky-500 mx-auto rounded-full mb-6"></div>
          <p className={`max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            A visual representation of my contribution activity on GitHub.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`flex justify-center p-8 rounded-xl border overflow-x-auto ${
            isDark 
              ? "bg-slate-800 p-8 border-slate-700" 
              : "bg-white p-8 border-slate-200"
          }`}
        >
          {/* Replace 'Rubel6623' with the user's actual GitHub username */}
          <div className={isDark ? "text-slate-200" : "text-slate-800"}>
            {mounted && (
              <GitHubCalendar 
                username="Rubel6623" 
                colorScheme={isDark ? "dark" : "light"}
                blockSize={14}
                blockMargin={6}
                fontSize={14}
                theme={{
                  dark: ['#1e293b', '#0ea5e9', '#0284c7', '#0369a1', '#075985'],
                  light: ['#e2e8f0', '#7dd3fc', '#38bdf8', '#0ea5e9', '#0284c7'],
                }}
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
