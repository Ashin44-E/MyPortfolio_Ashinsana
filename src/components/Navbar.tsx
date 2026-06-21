"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Menu, X, Sun, Moon } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past hero
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section
      const scrollPosition = window.scrollY + 150;
      for (const item of navItems) {
        const el = document.getElementById(item.href.substring(1));
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.substring(1));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80; // height of navbar
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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-50/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-zinc-800/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Name */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:opacity-90 transition-opacity"
          >
            {portfolioData.personalInfo.fullName}.
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-primary dark:text-secondary font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-secondary"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Actions (Theme switcher + resume download + hamburger) */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors shadow-sm"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-amber-500 animate-pulse-slow" />
              ) : (
                <Moon className="h-5 w-5 text-indigo-600" />
              )}
            </button>

            {/* Resume CV Download Button (Desktop Only) */}
            <a
              href={portfolioData.personalInfo.resumeUrl}
              download
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/95 dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded-lg shadow-sm transition-all hover:scale-105 active:scale-95 duration-200"
            >
              Download CV
            </a>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 sm:top-20 z-40 bg-slate-50/95 dark:bg-zinc-950/95 border-b border-slate-200/50 dark:border-zinc-800/50 transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "opacity-100 translate-y-0 scale-y-100" : "opacity-0 -translate-y-4 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                activeSection === item.href.substring(1)
                  ? "bg-slate-200/50 dark:bg-zinc-800/50 text-primary dark:text-secondary font-semibold"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-100/50 dark:hover:bg-zinc-900/50"
              }`}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-200/50 dark:border-zinc-800/50 px-4">
            <a
              href={portfolioData.personalInfo.resumeUrl}
              download
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-primary dark:bg-indigo-600 rounded-lg shadow-sm"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
