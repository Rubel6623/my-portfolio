"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useTheme } from "./ThemeProvider";

import SpotlightCard from "./SpotlightCard";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const contactGridRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

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
        { scaleX: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(descRef.current, 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(contactGridRef.current, 
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(formRef.current, 
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      );

      const infoItems = contactGridRef.current?.querySelectorAll(".contact-info-item");
      if (infoItems && infoItems.length > 0) {
        tl.fromTo(infoItems, {
          x: -20,
          opacity: 0
        }, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
        }, "-=0.6");
      }

      const formInputs = formRef.current?.querySelectorAll("input, textarea, button");
      if (formInputs && formInputs.length > 0) {
        tl.fromTo(formInputs, {
          y: 20,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
        }, "-=0.6");
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`py-20 transition-colors duration-300 ${isDark ? "bg-slate-900" : "bg-[var(--background)]"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-slate-100" : "text-foreground"}`}
          >
            Get In Touch
          </h2>
          <div
            ref={lineRef}
            className="h-1 w-20 bg-sky-500 mx-auto rounded-full"
          ></div>
          <p
            ref={descRef}
            className={`max-w-2xl mx-auto mt-6 ${isDark ? "text-slate-400" : "text-text-muted"}`}
          >
            Have a question or want to work together? Feel free to reach out to me!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div ref={contactGridRef}>
            <h3 className={`text-2xl font-semibold mb-6 ${isDark ? "text-slate-100" : "text-foreground"}`}>
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="contact-info-item flex items-start gap-4">
                <div className={`p-3 rounded-lg ${isDark ? "bg-slate-800" : "bg-[var(--card-bg)]"} text-sky-500`}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className={`text-lg font-medium ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                    Email
                  </h4>
                  <p className={isDark ? "text-slate-400 mt-1" : "text-text-muted mt-1"}>
                    rubelrudra27@gmail.com
                  </p>
                </div>
              </div>
              <div className="contact-info-item flex items-start gap-4">
                <div className={`p-3 rounded-lg ${isDark ? "bg-slate-800" : "bg-[var(--card-bg)]"} text-sky-500`}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className={`text-lg font-medium ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                    Phone
                  </h4>
                  <p className={isDark ? "text-slate-400 mt-1" : "text-text-muted mt-1"}>
                    +8801576795952
                  </p>
                </div>
              </div>
              <div className="contact-info-item flex items-start gap-4">
                <div className={`p-3 rounded-lg ${isDark ? "bg-slate-800" : "bg-slate-100"} text-sky-500`}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className={`text-lg font-medium ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                    Location
                  </h4>
                  <p className={isDark ? "text-slate-400 mt-1" : "text-slate-600 mt-1"}>
                    Chittagong, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div ref={formRef}>
              <SpotlightCard
                className={`rounded-xl border !bg-transparent !p-0 ${
                  isDark
                    ? "border-slate-700"
                    : "border-[var(--card-border)]"
                }`}
                spotlightColor={isDark ? "rgba(14, 165, 233, 0.15)" : "rgba(14, 165, 233, 0.1)"}
              >
                <div className="p-8">
                  <form action="https://formsubmit.co/rubelrudra27@gmail.com" method="POST" className="space-y-6">
                    <input type="hidden" name="_subject" value="New message from your portfolio!" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />

                    <div>
                      <label
                        htmlFor="name"
                        className={`block text-sm font-medium mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors ${
                          isDark
                            ? "bg-slate-900 border border-slate-700 text-slate-200"
                            : "bg-[var(--background)] border border-[var(--card-border)] text-slate-700"
                        }`}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className={`block text-sm font-medium mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors ${
                          isDark
                            ? "bg-slate-900 border border-slate-700 text-slate-200"
                            : "bg-[var(--background)] border border-[var(--card-border)] text-slate-700"
                        }`}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className={`block text-sm font-medium mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors resize-none ${
                          isDark
                            ? "bg-slate-900 border border-slate-700 text-slate-200"
                            : "bg-[var(--background)] border border-[var(--card-border)] text-slate-700"
                        }`}
                        placeholder="How can I help you?"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                    >
                      Send Message <Send size={18} />
                    </button>
                  </form>
                </div>
              </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}