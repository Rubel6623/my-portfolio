"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

gsap.registerPlugin(ScrollTrigger);

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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        defaults: { ease: "power3.out" }
      });

      tl.fromTo(titleRef.current, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
      .fromTo(lineRef.current, 
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, transformOrigin: "center" },
        "-=0.6"
      );

      const cards = gridRef.current ? gsap.utils.toArray(".project-card", gridRef.current) : [];
      if (cards.length) {
        tl.fromTo(cards, 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
          },
          "-=0.4"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`py-20 transition-colors duration-300 ${isDark ? "bg-slate-900/50" : "bg-slate-100"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-slate-100" : "text-slate-900"}`}
          >
            Featured Projects
          </h2>
          <div
            ref={lineRef}
            className="h-1 w-20 bg-sky-500 mx-auto rounded-full"
          ></div>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card rounded-2xl overflow-hidden border transition-all hover:bg-slate-800/60 group flex flex-col h-full ${
                isDark
                  ? "bg-slate-800/40 border-slate-700/50 hover:border-sky-500/30"
                  : "bg-white border-slate-200 hover:border-sky-400"
              }`}
            >
              <div className="relative h-52 w-full overflow-hidden">
                <div className={`absolute inset-0 animate-pulse ${isDark ? "bg-slate-700" : "bg-slate-200"}`}></div>
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 z-10"
                />
                <div className={`absolute inset-0 group-hover:bg-transparent transition-colors z-20 ${isDark ? "bg-slate-900/20" : "bg-slate-900/10"}`}></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className={`text-xl font-bold mb-3 group-hover:text-sky-400 transition-colors ${isDark ? "text-slate-100" : "text-slate-900"}`}>{project.title}</h3>
                <p className={`text-sm mb-6 line-clamp-3 leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold rounded border ${
                      isDark
                        ? "bg-slate-900/50 text-slate-300 border-slate-700/50"
                        : "bg-slate-100 text-slate-600 border-slate-200"
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={`flex items-center justify-between pt-4 border-t ${isDark ? "border-slate-700/50" : "border-slate-200"}`}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}