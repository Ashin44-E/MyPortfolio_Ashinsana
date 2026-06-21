"use client";

import React from "react";
import { portfolioData } from "../data/portfolioData";
import { Github, Linkedin, Mail, FileText, ArrowRight, Code } from "lucide-react";

export default function Hero() {
  const { personalInfo } = portfolioData;

  const handleScrollTo = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-50 dark:bg-zinc-950 transition-colors duration-300"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-[300px] h-[300px] rounded-full bg-primary/10 dark:bg-primary/5 blur-[80px] animate-float" />
        <div 
          className="absolute bottom-1/4 right-[10%] w-[350px] h-[350px] rounded-full bg-secondary/15 dark:bg-secondary/5 blur-[100px] animate-float"
          style={{ animationDelay: "3s" }}
        />
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 animate-fade-in-up">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Seeking Internships
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Hi, I&apos;m{" "}
              <span className="block mt-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {personalInfo.fullName}
              </span>
            </h1>

            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-700 dark:text-slate-200">
              {personalInfo.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.introduction}
            </p>

            {/* Internship seeking highlights */}
            <div className="p-4 rounded-xl bg-white/40 dark:bg-zinc-900/40 border border-slate-200/50 dark:border-zinc-800/50 max-w-xl mx-auto lg:mx-0 shadow-sm backdrop-blur-sm">
              <p className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300">
                {personalInfo.internshipStatement}
              </p>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={personalInfo.resumeUrl}
                download
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-primary hover:bg-primary/95 dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded-xl shadow-lg hover:shadow-indigo-500/20 dark:hover:shadow-indigo-600/30 transition-all hover:scale-105 duration-200 group gap-2"
              >
                <FileText className="h-5 w-5" />
                Download CV
              </a>
              
              <button
                onClick={() => handleScrollTo("projects")}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-800/80 rounded-xl shadow-sm transition-all hover:scale-105 duration-200 group gap-2"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => handleScrollTo("contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-secondary hover:underline transition-all duration-200"
              >
                Contact Me
              </button>
            </div>

            {/* Social Icons Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary hover:border-primary/30 dark:hover:border-secondary/30 transition-all duration-250"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary hover:border-primary/30 dark:hover:border-secondary/30 transition-all duration-250"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary hover:border-primary/30 dark:hover:border-secondary/30 transition-all duration-250"
                aria-label="Send Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

          </div>

          {/* Hero Right Graphics/Avatar */}
          <div className="lg:col-span-5 flex justify-center items-center relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-2 bg-gradient-to-tr from-primary/30 to-secondary/30 dark:from-indigo-500/20 dark:to-cyan-500/20 glow-effect border border-white/20">
              
              {/* Inner coding aesthetic illustration */}
              <div className="w-full h-full rounded-2xl bg-white dark:bg-zinc-900 flex flex-col justify-between p-6 overflow-hidden relative border border-slate-200/50 dark:border-zinc-800/50">
                {/* Header circles */}
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                
                {/* Visual content representation */}
                <div className="flex-1 flex flex-col justify-center items-center text-center space-y-4">
                  <div className="p-4 rounded-2xl bg-indigo-550/10 dark:bg-indigo-500/10 text-primary dark:text-secondary">
                    <Code className="h-14 w-14" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100">Ashinsana</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">IT Undergraduate</p>
                  </div>
                  {/* Code Mock */}
                  <div className="w-full bg-slate-50 dark:bg-zinc-950 p-3 rounded-lg text-left text-xs font-mono text-indigo-600 dark:text-cyan-400 border border-slate-200/50 dark:border-zinc-800/50 opacity-90 overflow-hidden">
                    <div><span className="text-slate-400">class</span> <span className="text-pink-500">Developer</span> &#123;</div>
                    <div className="pl-3"><span className="text-slate-400">role:</span> <span className="text-slate-600 dark:text-emerald-400">&quot;Intern&quot;</span>,</div>
                    <div className="pl-3"><span className="text-slate-400">skills:</span> [<span className="text-slate-600 dark:text-amber-400">&quot;React&quot;</span>, <span className="text-slate-600 dark:text-amber-400">&quot;Java&quot;</span>]</div>
                    <div>&#125;</div>
                  </div>
                </div>
                
                {/* Bottom stats tags */}
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 border-t border-slate-100 dark:border-zinc-800/50 pt-3">
                  <span>LOC: Colombo</span>
                  <span>STATUS: Seeking</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
