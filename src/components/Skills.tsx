"use client";

import React from "react";
import { portfolioData } from "../data/portfolioData";
import { Code2, Layout, Server, Database, Terminal, Cloud } from "lucide-react";

export default function Skills() {
  const { skills } = portfolioData;

  // Map category names to Lucide icons
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming Languages":
        return <Code2 className="h-6 w-6 text-indigo-500" />;
      case "Frontend":
        return <Layout className="h-6 w-6 text-cyan-500" />;
      case "Backend":
        return <Server className="h-6 w-6 text-emerald-500" />;
      case "Database":
        return <Database className="h-6 w-6 text-amber-500" />;
      case "Tools":
        return <Terminal className="h-6 w-6 text-rose-500" />;
      case "Cloud":
        return <Cloud className="h-6 w-6 text-sky-500" />;
      default:
        return <Code2 className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 bg-slate-50 dark:bg-zinc-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm sm:text-base">
            Categorized overview of tools, frameworks, and programming languages I specialize in.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/50 dark:border-zinc-800/50 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 dark:hover:border-zinc-700 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-100 dark:border-zinc-800/50">
                  <div className="p-2.5 bg-slate-50 dark:bg-zinc-950 rounded-lg">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">
                    {group.category}
                  </h3>
                </div>

                {/* Badge list */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3.5 py-2 rounded-xl text-sm font-medium bg-slate-100 dark:bg-zinc-950 text-slate-700 dark:text-slate-300 hover:bg-primary/10 dark:hover:bg-indigo-500/10 hover:text-primary dark:hover:text-secondary border border-transparent hover:border-primary/20 dark:hover:border-secondary/20 transition-all duration-150 cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom detail line for design polish */}
              <div className="mt-6 flex justify-end text-[10px] uppercase font-semibold tracking-widest text-slate-400">
                {group.skills.length} skills
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
