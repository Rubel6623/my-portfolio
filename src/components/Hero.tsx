"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(titleRef.current, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          nameRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          descRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          buttonsRef.current ? Array.from(buttonsRef.current.children) : [],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
          "-=0.4"
        )
        .fromTo(
          imageRef.current,
          { x: 50, opacity: 0, scale: 0.9 },
          { x: 0, opacity: 1, duration: 1, scale: 1 },
          "-=0.8"
        );

      gsap.to(imageRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <Scene />
      <div
        ref={heroRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h2
              ref={subtitleRef}
              className={`text-xl font-semibold mb-4 tracking-wide uppercase ${
                isDark ? "text-sky-400" : "text-sky-600"
              }`}
            >
              Full Stack Developer
            </h2>
            <h1
              ref={titleRef}
              className={`text-5xl lg:text-7xl font-bold mb-6 ${
                isDark ? "text-slate-100" : "text-slate-900"
              }`}
            >
              Hello, I&apos;m <br />
              <span ref={nameRef} className={isDark ? "gradient-text" : "text-sky-600"}>
                Rubel
              </span>
            </h1>
            <p
              ref={descRef}
              className={`text-lg mb-8 max-w-2xl mx-auto lg:mx-0 text-balance ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              I build exceptional and accessible digital experiences for the web.
              Passionate about creating elegant solutions to complex problems.
            </p>
            <div
              ref={buttonsRef}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
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
                <a
                  href="https://github.com/Rubel6623"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-full transition-colors ${
                    isDark
                      ? "bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white"
                      : "bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rubel-rudra-43ab54240"
                  className={`p-3 rounded-full transition-colors ${
                    isDark
                      ? "bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white"
                      : "bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href="mailto:rubelrudra27@gmail.com"
                  className={`p-3 rounded-full transition-colors ${
                    isDark
                      ? "bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white"
                      : "bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div
            ref={imageRef}
            className="flex-1 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <div
                className={`absolute -inset-4 rounded-full blur-3xl ${
                  isDark
                    ? "bg-gradient-to-tr from-sky-500/30 to-indigo-500/30"
                    : "bg-gradient-to-tr from-sky-400/20 to-indigo-400/20"
                }`}
              ></div>

              <div
                className={`absolute inset-0 rounded-2xl border overflow-hidden flex items-center justify-center backdrop-blur-xl shadow-2xl ${
                  isDark
                    ? "bg-slate-800 border-slate-700/50 shadow-sky-500/10"
                    : "bg-white border-slate-200 shadow-sky-500/10"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    isDark
                      ? "from-sky-500/10 via-transparent to-indigo-500/10"
                      : "from-sky-400/5 via-transparent to-indigo-400/5"
                  }`}
                ></div>

                <Image
                  src="/assets/Pro.PNG"
                  alt="Rubel's Avatar"
                  fill
                  className="object-cover z-10"
                />

                <div
                  className={`absolute bottom-10 right-10 p-4 rounded-xl backdrop-blur-md shadow-lg ${
                    isDark
                      ? "bg-slate-900/80 border border-slate-700"
                      : "bg-white/80 border border-slate-200"
                  }`}
                >
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}