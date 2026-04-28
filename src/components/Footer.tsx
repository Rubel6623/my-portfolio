"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./BrandIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold gradient-text mb-2">Portfolio.</h3>
            <p className="text-slate-400 text-sm max-w-xs text-center md:text-left">
              Building modern web applications with a focus on user experience and clean code.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-6">
              <a href="https://github.com/Rubel6623" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <LinkedinIcon size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-slate-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-slate-500 text-xs">
              © {currentYear} Rubel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
