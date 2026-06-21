"use client";

import React from "react";
import { portfolioData } from "../data/portfolioData";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
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
    <footer className="bg-slate-50 dark:bg-zinc-950 border-t border-slate-200/50 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-slate-200/50 dark:border-zinc-800/40 pb-8">
          
          {/* Logo Name & Title */}
          <div className="text-center md:text-left space-y-2">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:opacity-90 transition-opacity"
            >
              {personalInfo.fullName}.
            </a>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              IT Undergraduate | Aspiring Software Developer
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {quickLinks.slice(0, 4).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs sm:text-sm text-slate-650 dark:text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors"
              >
                {link.name}
              </a>
            ))}
            {quickLinks.slice(4).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs sm:text-sm text-slate-650 dark:text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-slate-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900 text-slate-600 dark:text-slate-455 hover:text-primary dark:hover:text-secondary hover:border-primary/20 dark:hover:border-secondary/20 transition-all shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-slate-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900 text-slate-600 dark:text-slate-455 hover:text-primary dark:hover:text-secondary hover:border-primary/20 dark:hover:border-secondary/20 transition-all shadow-sm"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg border border-slate-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900 text-slate-600 dark:text-slate-455 hover:text-primary dark:hover:text-secondary hover:border-primary/20 dark:hover:border-secondary/20 transition-all shadow-sm"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-slate-400 text-center">
          <p>&copy; {currentYear} {personalInfo.fullName}. All rights reserved.</p>
          <p>Designed & Developed by {personalInfo.fullName}</p>
        </div>

      </div>
    </footer>
  );
}
