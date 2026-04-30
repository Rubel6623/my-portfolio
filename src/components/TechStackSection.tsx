"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const techCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "💨" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎭" },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    technologies: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚀" },
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "REST API", icon: "🔌" },
      { name: "GraphQL", icon: "◼️" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    technologies: [
      { name: "Git", icon: "📂" },
      { name: "GitHub", icon: "🐙" },
      { name: "Docker", icon: "🐳" },
      { name: "VS Code", icon: "💻" },
      { name: "Figma", icon: "🎯" },
      { name: "AWS", icon: "☁️" },
    ],
  },
];

export default function TechStackSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="techstack" className={`py-20 transition-colors duration-300 ${isDark ? "bg-slate-950" : "bg-slate-100"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
            Tech <span className={isDark ? "gradient-text" : "text-sky-600"}>Stack</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Technologies and tools I work with to build modern applications
          </p>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className={`rounded-2xl p-6 border transition-colors ${
                isDark 
                  ? "bg-slate-900/50 border-slate-800 hover:border-sky-500/50" 
                  : "bg-white border-slate-200 hover:border-sky-400"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className={`text-2xl font-semibold ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + techIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className={`rounded-xl p-3 flex items-center gap-2 transition-all cursor-default ${
                      isDark 
                        ? "bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 hover:border-sky-500/30" 
                        : "bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:border-sky-300"
                    }`}
                  >
                    <span className="text-xl">{tech.icon}</span>
                    <span className={`text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm">
            And many more tools and technologies I use in my projects...
          </p>
        </motion.div>
      </div>
    </section>
  );
}