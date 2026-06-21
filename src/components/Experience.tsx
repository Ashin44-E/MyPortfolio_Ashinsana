"use client";

import React from "react";
import { portfolioData } from "../data/portfolioData";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section
      id="experience"
      className="py-20 sm:py-28 bg-slate-50 dark:bg-zinc-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Experience Segment */}
        <div>
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Experience</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm sm:text-base">
              A history of my project roles, freelance development, and academic projects.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto relative border-l-2 border-slate-200 dark:border-zinc-800 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12 mb-24">
            {experience.map((exp, index) => (
              <div key={index} className="relative group">
                
                {/* Timeline node icon */}
                <span className="absolute -left-[35px] sm:-left-[51px] top-1.5 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-zinc-900 border-2 border-primary group-hover:bg-primary group-hover:text-white transition-all duration-350 shadow-sm">
                  <Briefcase className="h-4.5 w-4.5 text-primary group-hover:text-white transition-colors" />
                </span>

                {/* Card Container */}
                <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/55 dark:border-zinc-850/55 shadow-sm hover:shadow-md transition-shadow">
                  
                  {/* Header Meta */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100">
                        {exp.position}
                      </h3>
                      <p className="text-sm font-semibold text-primary dark:text-secondary mt-0.5">
                        {exp.organization}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-zinc-950 text-slate-650 dark:text-slate-400 border border-slate-200/50 dark:border-zinc-800/50 w-fit">
                      <Calendar className="h-3 w-3" />
                      {exp.duration}
                    </span>
                  </div>

                  {/* Bullet points description */}
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech badges used in this experience */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-zinc-800/50">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-semibold bg-slate-50 dark:bg-zinc-950 text-slate-600 dark:text-slate-350 border border-slate-200/50 dark:border-zinc-800/50 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
