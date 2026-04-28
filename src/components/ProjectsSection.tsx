"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import Image from "next/image";

const projects = [
  {
    title: "HelpMate",
    description: "A comprehensive platform designed to streamline assistance and services. Includes a seamless interface for users to find help and for service providers to manage requests.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubClient: "https://github.com/Rubel6623/HelpMate-Client",
    githubServer: "https://github.com/Rubel6623/HelpMate-Server",
    demo: "https://help-mate-frontend-rubel6623-rubel6623s-projects.vercel.app",
    image: "/assets/HelpMate.png"
  },
  {
    title: "SkillBridge",
    description: "An educational platform bridging the gap between learners and instructors. Features course management, progress tracking, and interactive learning modules.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubClient: "https://github.com/Rubel6623/Skill-Bridge-Client",
    githubServer: "https://github.com/Rubel6623/Skill-Bridge-Server",
    demo: "https://skill-bridge-frontend-ksx3pqnwd-rubel6623s-projects.vercel.app",
    image: "/assets/SkillBridge.png"
  },
  {
    title: "Chef Hut",
    description: "A culinary exploration app for food enthusiasts. Discover new recipes, save favorites, and learn from top chefs with a visually appealing interface.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubClient: "https://github.com/Rubel6623/chef-recipe-hunter-client-side",
    githubServer: "https://github.com/Rubel6623/chef-recipe-hunter-server",
    demo: "https://incredible-semifreddo-159c74.netlify.app",
    image: "/assets/CheifHut.png"
  },
  {
    title: "ToyZone",
    description: "An engaging e-commerce marketplace dedicated to toys. Offers a playful UI, categorized toy browsing, and a seamless shopping experience for kids and parents.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubClient: "https://github.com/Rubel6623/toy-marketplace-client",
    githubServer: "https://github.com/Rubel6623/toy-marketplace-server",
    demo: "https://benevolent-chaja-d47eb4.netlify.app",
    image: "/assets/ToyZone.png"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Featured Projects</h2>
          <div className="h-1 w-20 bg-sky-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/40 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-sky-500/30 transition-all hover:bg-slate-800/60 group flex flex-col h-full"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <div className="absolute inset-0 bg-slate-700 animate-pulse"></div>
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 z-10"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-20"></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-sky-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-900/50 text-slate-300 text-[10px] uppercase tracking-wider font-semibold rounded border border-slate-700/50">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                  <div className="flex items-center gap-3">
                    <a 
                      href={project.githubClient} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                    >
                      <GithubIcon size={14} /> CLIENT
                    </a>
                    {project.githubServer && (
                      <a 
                        href={project.githubServer} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                      >
                        <GithubIcon size={14} /> SERVER
                      </a>
                    )}
                  </div>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    LIVE DEMO <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
