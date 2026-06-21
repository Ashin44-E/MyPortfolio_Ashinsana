"use client";

import React from "react";
import { portfolioData } from "../data/portfolioData";
import { Award, ExternalLink, ShieldAlert, Wifi, Globe, Laptop } from "lucide-react";

export default function Certifications() {
  const { certifications } = portfolioData;

  // Render a contextual icon based on certification name
  const getCertIcon = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes("cybersecurity")) {
      return <ShieldAlert className="h-6 w-6 text-rose-500" />;
    } else if (lowerName.includes("network")) {
      return <Wifi className="h-6 w-6 text-sky-500" />;
    } else if (lowerName.includes("essential") || lowerName.includes("it")) {
      return <Laptop className="h-6 w-6 text-indigo-500" />;
    } else if (lowerName.includes("english") || lowerName.includes("cambridge")) {
      return <Globe className="h-6 w-6 text-emerald-550" />;
    }
    return <Award className="h-6 w-6 text-amber-500" />;
  };

  return (
    <section
      id="certifications"
      className="py-20 sm:py-28 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800/30 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Certifications</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm sm:text-base">
            Professional certifications and credentials verifying my specialization domains.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/50 dark:border-zinc-850/50 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-slate-100 dark:border-zinc-800">
                    {getCertIcon(cert.name)}
                  </div>
                  <span className="text-xs font-semibold text-slate-450 dark:text-slate-400 bg-slate-200/50 dark:bg-zinc-900/60 px-2.5 py-1 rounded-md">
                    {cert.date}
                  </span>
                </div>

                {/* Info */}
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base leading-snug mb-1">
                  {cert.name}
                </h3>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-6">
                  {cert.issuer}
                </p>
              </div>

              {/* Action Button */}
              <a
                href={cert.credentialUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-slate-200 hover:bg-slate-55 dark:hover:bg-zinc-850 transition-colors w-full text-center"
              >
                Verify Credential
                <ExternalLink className="h-3 w-3" />
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
