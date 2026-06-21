"use client";

import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { Github, ExternalLink, Code2, Database as DbIcon, Globe, Smartphone, Folder } from "lucide-react";

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Web Development", "Database", "Cloud", "Other"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  // Return a beautiful icon based on project category
  const getProjectIcon = (category: string) => {
    switch (category) {
      case "Web Development":
        return <Globe className="h-10 w-10 text-indigo-400" />;
      case "Database":
        return <DbIcon className="h-10 w-10 text-amber-400" />;
      case "Cloud":
        return <Code2 className="h-10 w-10 text-cyan-400" />;
      case "Other":
        return <Smartphone className="h-10 w-10 text-emerald-400" />;
      default:
        return <Folder className="h-10 w-10 text-indigo-400" />;
    }
  };

  // Pre-generate nice gradients for card headers
  const getGradient = (id: string) => {
    switch (id) {
      case "ceylonleaf":
        return "from-emerald-500/20 to-teal-500/10 dark:from-emerald-950/40 dark:to-teal-950/20";
      case "helpaura":
        return "from-indigo-500/20 to-violet-500/10 dark:from-indigo-950/40 dark:to-violet-950/20";
      case "jobsadawiya":
        return "from-amber-500/20 to-orange-500/10 dark:from-amber-950/40 dark:to-orange-950/20";
      case "habit-tracker":
        return "from-sky-500/20 to-indigo-500/10 dark:from-sky-950/40 dark:to-indigo-950/20";
      default:
        return "from-indigo-500/20 to-cyan-500/10 dark:from-indigo-950/40 dark:to-cyan-950/20";
    }
  };

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800/30 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm sm:text-base">
            A showcase of my recent coding projects, including web systems, databases, and mobile applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeFilter === category
                  ? "bg-primary dark:bg-indigo-600 text-white shadow-md shadow-indigo-500/10 scale-105"
                  : "bg-slate-50 dark:bg-zinc-950 text-slate-650 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-850 border border-slate-200/50 dark:border-zinc-850/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/50 dark:border-zinc-850/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Project Card Header (Stylized Banner Image Placeholder) */}
              <div className={`relative h-48 w-full bg-gradient-to-br ${getGradient(project.id)} flex items-center justify-center border-b border-slate-200/50 dark:border-zinc-800/30 overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="flex flex-col items-center gap-2 z-10 group-hover:scale-110 transition-transform duration-300">
                  <div className="p-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-800">
                    {getProjectIcon(project.category)}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {project.longDescription || project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-semibold bg-white dark:bg-zinc-900 text-slate-600 dark:text-slate-350 border border-slate-200/60 dark:border-zinc-800/60 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons footer */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-150 dark:border-zinc-800/50">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors shadow-sm"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-primary hover:bg-primary/95 dark:bg-indigo-650 dark:hover:bg-indigo-600 text-white transition-colors shadow-sm"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
