"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const skills = [
  { 
    category: "Frontend", 
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
    color: "text-blue-400",
    bgColor: "bg-blue-400/10"
  },
  { 
    category: "Backend", 
    items: ["Node.js", "Express", "Python", "Django", "GraphQL", "REST APIs"],
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10"
  },
  { 
    category: "Database", 
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma"],
    color: "text-amber-400",
    bgColor: "bg-amber-400/10"
  },
  { 
    category: "Tools", 
    items: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"],
    color: "text-purple-400",
    bgColor: "bg-purple-400/10"
  },
];

export default function SkillsSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="skills" className={`py-20 transition-colors duration-300 ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-slate-100" : "text-slate-900"}`}>My Skills</h2>
          <div className="h-1 w-20 bg-sky-500 mx-auto rounded-full mb-6"></div>
          <p className={`max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            I&apos;ve worked with a variety of technologies in the web development world.
            From Back-end To Design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all hover:bg-slate-800/60 group"
            >
              <h3 className={`text-xl font-semibold mb-6 ${skillGroup.color} flex items-center gap-2`}>
                <div className={`w-2 h-2 rounded-full ${skillGroup.bgColor.replace('/10', '')}`}></div>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span 
                    key={i} 
                    className={`px-3 py-1.5 ${skillGroup.bgColor} ${skillGroup.color} rounded-lg text-xs font-medium border border-transparent group-hover:border-slate-700/50 transition-colors`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
