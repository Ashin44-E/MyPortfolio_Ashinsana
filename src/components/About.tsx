"use client";

import React from "react";
import { portfolioData } from "../data/portfolioData";
import { GraduationCap, Calendar, Award, Compass, Heart } from "lucide-react";

export default function About() {
  const { aboutMe } = portfolioData;

  const infoCards = [
    {
      id: "edu",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      title: "University & Degree",
      value: aboutMe.degree,
      description: aboutMe.university,
    },
    {
      id: "year",
      icon: <Calendar className="h-6 w-6 text-secondary" />,
      title: "Current Academic Year",
      value: aboutMe.currentYear,
      description: "Information Technology Department",
    },
    {
      id: "grad",
      icon: <Award className="h-6 w-6 text-indigo-500" />,
      title: "Expected Graduation",
      value: aboutMe.expectedGraduation,
      description: "BSc (Hons) degree completion",
    },
    {
      id: "interests",
      icon: <Compass className="h-6 w-6 text-pink-500" />,
      title: "Career Interests",
      value: aboutMe.careerInterests.slice(0, 2).join(" & "),
      description: `${aboutMe.careerInterests.slice(2).join(", ")}`,
    },
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-white dark:bg-zinc-900 border-y border-slate-100 dark:border-zinc-800/30 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm sm:text-base">
            Get to know my academic background, career objectives, and motivations.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Summary text */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-primary">
                <Heart className="h-5 w-5" />
              </span>
              My Professional Journey
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
              {aboutMe.summary}
            </p>
            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/50">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Core Pursuits</h4>
              <div className="flex flex-wrap gap-2">
                {aboutMe.careerInterests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Professional Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {infoCards.map((card) => (
              <div
                key={card.id}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/50 dark:border-zinc-850/50 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 group"
              >
                <div className="p-3 bg-white dark:bg-zinc-900 rounded-xl w-fit shadow-sm border border-slate-100 dark:border-zinc-800 group-hover:scale-110 transition-transform duration-200">
                  {card.icon}
                </div>
                <h4 className="mt-4 font-semibold text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider">
                  {card.title}
                </h4>
                <p className="mt-2 font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base leading-snug">
                  {card.value}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
