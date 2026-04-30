"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export default function AboutSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="about" className={`py-20 transition-colors duration-300 ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
            About <span className={isDark ? "gradient-text" : "text-sky-600"}>Me</span>
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className={`absolute -inset-4 rounded-2xl blur-2xl ${
                isDark 
                  ? "bg-gradient-to-tr from-sky-500/30 to-indigo-500/30" 
                  : "bg-gradient-to-tr from-sky-400/20 to-indigo-400/20"
              }`}></div>
              <div className={`relative w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border shadow-2xl shadow-sky-500/10 ${
                isDark 
                  ? "bg-slate-800 border-slate-700/50" 
                  : "bg-white border-slate-200"
              }`}>
                <Image
                  src="/assets/about.png"
                  alt="About Me"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <h3 className={`text-2xl font-semibold mb-4 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
              I&apos;m a Passionate Full Stack Developer
            </h3>
            <p className={`text-lg mb-6 leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Hi, I&apos;m <span className={isDark ? "text-sky-400" : "text-sky-600"}>Rubel</span> — a dedicated Full Stack Developer with expertise in building modern, responsive, and user-friendly web applications. I specialize in creating seamless digital experiences that combine clean code with intuitive design.
            </p>
            <p className={`text-lg mb-8 leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              With a strong foundation in both frontend and backend technologies, I transform ideas into reality. My approach focuses on writing clean, maintainable code while ensuring optimal performance and accessibility.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={`p-4 rounded-xl border ${
                isDark 
                  ? "bg-slate-800/50 border-slate-700/50" 
                  : "bg-white border-slate-200"
              }`}>
                <h4 className={isDark ? "text-sky-400" : "text-sky-600"}>Frontend</h4>
                <p className={isDark ? "text-slate-400" : "text-slate-500"}>
                  React, Next.js, TypeScript, Tailwind CSS
                </p>
              </div>
              <div className={`p-4 rounded-xl border ${
                isDark 
                  ? "bg-slate-800/50 border-slate-700/50" 
                  : "bg-white border-slate-200"
              }`}>
                <h4 className={isDark ? "text-sky-400" : "text-sky-600"}>Backend</h4>
                <p className={isDark ? "text-slate-400" : "text-slate-500"}>
                  Node.js, Express, MongoDB, PostgreSQL
                </p>
              </div>
              <div className={`p-4 rounded-xl border ${
                isDark 
                  ? "bg-slate-800/50 border-slate-700/50" 
                  : "bg-white border-slate-200"
              }`}>
                <h4 className={isDark ? "text-sky-400" : "text-sky-600"}>Tools</h4>
                <p className={isDark ? "text-slate-400" : "text-slate-500"}>
                  Git, Docker, AWS, Figma
                </p>
              </div>
              <div className={`p-4 rounded-xl border ${
                isDark 
                  ? "bg-slate-800/50 border-slate-700/50" 
                  : "bg-white border-slate-200"
              }`}>
                <h4 className={isDark ? "text-sky-400" : "text-sky-600"}>Experience</h4>
                <p className={isDark ? "text-slate-400" : "text-slate-500"}>
                  1+ Years Building Web Apps
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
//             className="flex-1"
//           >
//             <h3 className="text-2xl font-semibold text-slate-100 mb-4">
//               I'm a Passionate Full Stack Developer
//             </h3>
//             <p className="text-slate-400 text-lg mb-6 leading-relaxed">
//               Hi, I'm <span className="text-sky-400 font-medium">Rubel</span> — a dedicated Full Stack Developer with expertise in building modern, responsive, and user-friendly web applications. I specialize in creating seamless digital experiences that combine clean code with intuitive design.
//             </p>
//             <p className="text-slate-400 text-lg mb-8 leading-relaxed">
//               With a strong foundation in both frontend and backend technologies, I transform ideas into reality. My approach focuses on writing clean, maintainable code while ensuring optimal performance and accessibility.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl">
//                 <h4 className="text-sky-400 font-semibold mb-2">Frontend</h4>
//                 <p className="text-slate-400 text-sm">
//                   React, Next.js, TypeScript, Tailwind CSS
//                 </p>
//               </div>
//               <div className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl">
//                 <h4 className="text-sky-400 font-semibold mb-2">Backend</h4>
//                 <p className="text-slate-400 text-sm">
//                   Node.js, Express, MongoDB, PostgreSQL
//                 </p>
//               </div>
//               <div className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl">
//                 <h4 className="text-sky-400 font-semibold mb-2">Tools</h4>
//                 <p className="text-slate-400 text-sm">
//                   Git, Docker, AWS, Figma
//                 </p>
//               </div>
//               <div className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl">
//                 <h4 className="text-sky-400 font-semibold mb-2">Experience</h4>
//                 <p className="text-slate-400 text-sm">
//                   1+ Years Building Web Apps
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }