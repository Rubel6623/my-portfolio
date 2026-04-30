"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className={`text-xl font-semibold mb-4 tracking-wide uppercase ${isDark ? "text-sky-400" : "text-sky-600"}`}>
              Full Stack Developer
            </h2>
            <h1 className={`text-5xl lg:text-7xl font-bold mb-6 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
              Hello, I'm <br />
              <span className={isDark ? "gradient-text" : "text-sky-600"}>Rubel</span>
            </h1>
            <p className={`text-lg mb-8 max-w-2xl mx-auto lg:mx-0 text-balance ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              I build exceptional and accessible digital experiences for the web. 
              Passionate about creating elegant solutions to complex problems.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a 
                href="#contact"
                className="px-8 py-3 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-medium transition-all hover:shadow-lg hover:shadow-sky-500/25 flex items-center gap-2 group"
              >
                Contact Me
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="/assets/Rubel_Resume(FS).pdf"
                download="Rubel_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className={`px-8 py-3 rounded-full border font-medium transition-all ${
                  isDark 
                    ? "border-slate-700 hover:bg-slate-800 text-slate-300" 
                    : "border-slate-300 hover:bg-slate-100 text-slate-700"
                }`}
              >
                Download CV
              </a>
              <div className="flex items-center gap-4 ml-0 lg:ml-4 mt-4 lg:mt-0">
                <a href="https://github.com/Rubel6623" target="_blank" rel="noreferrer" className={`p-3 rounded-full transition-colors ${
                  isDark 
                    ? "bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white" 
                    : "bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                }`}>
                  <GithubIcon size={20} />
                </a>
                <a href="https://www.linkedin.com/in/rubel-rudra-43ab54240" className={`p-3 rounded-full transition-colors ${
                  isDark 
                    ? "bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white" 
                    : "bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                }`}>
                  <LinkedinIcon size={20} />
                </a>
                <a href="mailto:rubelrudra27@gmail.com" className={`p-3 rounded-full transition-colors ${
                  isDark 
                    ? "bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white" 
                    : "bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                }`}>
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
            className="flex-1 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              {/* Decorative backgrounds */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0] 
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className={`absolute -inset-4 rounded-full blur-3xl ${
                  isDark 
                    ? "bg-gradient-to-tr from-sky-500/30 to-indigo-500/30" 
                    : "bg-gradient-to-tr from-sky-400/20 to-indigo-400/20"
                }`}
              ></motion.div>
              
              <div className={`absolute inset-0 rounded-2xl border overflow-hidden flex items-center justify-center backdrop-blur-xl shadow-2xl ${
                isDark 
                  ? "bg-slate-800 border-slate-700/50 shadow-sky-500/10" 
                  : "bg-white border-slate-200 shadow-sky-500/10"
              }`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  isDark 
                    ? "from-sky-500/10 via-transparent to-indigo-500/10" 
                    : "from-sky-400/5 via-transparent to-indigo-400/5"
                }`}></div>
                
                {/* Avatar Image */}
                <Image 
                  src="/assets/Pro.PNG" 
                  alt="Rubel's Avatar"
                  fill
                  className="object-cover z-10"
                />

                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute bottom-10 right-10 p-4 rounded-xl backdrop-blur-md shadow-lg ${
                    isDark 
                      ? "bg-slate-900/80 border border-slate-700" 
                      : "bg-white/80 border border-slate-200"
                  }`}
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
