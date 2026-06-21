"use client";

import React from "react";
import { portfolioData } from "../data/portfolioData";
import { GraduationCap, BookOpen, Calendar, Award } from "lucide-react";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section
      id="education"
      className="py-20 sm:py-28 bg-slate-50 dark:bg-zinc-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Education</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm sm:text-base">
            Academic history, qualifications, and core fields of study.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto relative border-l-2 border-slate-200 dark:border-zinc-800 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          
          {education.map((edu, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline dot icon */}
              <span className="absolute -left-[35px] sm:-left-[51px] top-1.5 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-zinc-900 border-2 border-primary group-hover:bg-primary group-hover:text-white transition-all duration-350 shadow-sm">
                <GraduationCap className="h-4.5 w-4.5 text-primary group-hover:text-white transition-colors" />
              </span>

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/55 dark:border-zinc-850/55 shadow-sm hover:shadow-md transition-shadow">
                
                {/* Meta details (Duration badge + Institution name) */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-primary dark:text-secondary mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-zinc-950 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-zinc-800/50 w-fit">
                    <Calendar className="h-3 w-3" />
                    {edu.duration}
                  </span>
                </div>

                {/* GPA Badge */}
                {edu.gpa && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 mb-4">
                    <Award className="h-4 w-4" />
                    GPA: {edu.gpa}
                  </div>
                )}

                {/* Coursework list */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/50">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5" />
                      Key Coursework
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {edu.coursework.map((course, cIdx) => (
                        <li
                          key={cIdx}
                          className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-zinc-700" />
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
              
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
