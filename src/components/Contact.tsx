"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { portfolioData } from "../data/portfolioData";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const { personalInfo } = portfolioData;
  const formRef = useRef<HTMLFormElement>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // Spam prevention
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot spam prevention checking
    if (formData.honeypot) {
      // Silently fail to spam bots
      setStatus("success");
      return;
    }

    if (!validateForm()) return;

    setStatus("sending");
    setErrorMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Simulate success and log instructions if keys are missing
      console.warn(
        "EmailJS credentials missing. To enable actual mail sending, create a .env.local file in the workspace root containing:\n" +
        "NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id\n" +
        "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id\n" +
        "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key"
      );

      setTimeout(() => {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
      }, 1500);
      return;
    }

    try {
      if (formRef.current) {
        const result = await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );
        
        if (result.status === 200) {
          setStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
        } else {
          throw new Error("Failed to send message.");
        }
      }
    } catch (err: unknown) {
      console.error("EmailJS Error: ", err);
      setStatus("error");
      const errObj = err as { text?: string };
      setErrorMessage(errObj?.text || "An unexpected error occurred while sending the email. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-white dark:bg-zinc-900 border-t border-slate-100 dark:border-zinc-800/30 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm sm:text-base">
            Have an internship opportunity, project offer, or simply want to connect? Reach out using the form below.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8 lg:pr-8">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Get In Touch</h3>
              <p className="text-sm text-slate-550 dark:text-slate-400 mt-2">
                I check my messages daily and will respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* Email Address */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/50 dark:border-zinc-850/50 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-white dark:bg-zinc-900 text-primary rounded-lg shadow-sm border border-slate-100 dark:border-zinc-800">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-450 dark:text-slate-400 uppercase tracking-wide">
                    Email Address
                  </h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base hover:underline break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/50 dark:border-zinc-850/50 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-white dark:bg-zinc-900 text-secondary rounded-lg shadow-sm border border-slate-100 dark:border-zinc-800">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-450 dark:text-slate-400 uppercase tracking-wide">
                    Phone Number
                  </h4>
                  <p className="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base">
                    {personalInfo.phone}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/50 dark:border-zinc-850/50 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-white dark:bg-zinc-900 text-indigo-500 rounded-lg shadow-sm border border-slate-100 dark:border-zinc-800">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-450 dark:text-slate-400 uppercase tracking-wide">
                    Location
                  </h4>
                  <p className="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-slate-200/50 dark:border-zinc-850/50 shadow-sm">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              
              {/* Honeypot hidden input for spam bots */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-350">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 text-sm rounded-xl border bg-white dark:bg-zinc-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-indigo-500/20 transition-all ${
                      errors.name ? "border-rose-455 focus:border-rose-500" : "border-slate-200 dark:border-zinc-800 focus:border-primary dark:focus:border-indigo-600"
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="text-xs font-semibold text-rose-500 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-350">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 text-sm rounded-xl border bg-white dark:bg-zinc-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-indigo-500/20 transition-all ${
                      errors.email ? "border-rose-455 focus:border-rose-500" : "border-slate-200 dark:border-zinc-800 focus:border-primary dark:focus:border-indigo-600"
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-xs font-semibold text-rose-500 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-sm font-semibold text-slate-700 dark:text-slate-350">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 text-sm rounded-xl border bg-white dark:bg-zinc-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-indigo-500/20 transition-all ${
                    errors.subject ? "border-rose-455 focus:border-rose-500" : "border-slate-200 dark:border-zinc-800 focus:border-primary dark:focus:border-indigo-600"
                  }`}
                  placeholder="Internship Opportunity / Inquiry"
                />
                {errors.subject && (
                  <p className="text-xs font-semibold text-rose-500 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-350">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 text-sm rounded-xl border bg-white dark:bg-zinc-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-indigo-500/20 transition-all resize-none ${
                    errors.message ? "border-rose-455 focus:border-rose-500" : "border-slate-200 dark:border-zinc-800 focus:border-primary dark:focus:border-indigo-600"
                  }`}
                  placeholder="Hi Ashinsana, I reviewed your portfolio and would love to chat regarding..."
                />
                {errors.message && (
                  <p className="text-xs font-semibold text-rose-500 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Alerts: Success or Error */}
              {status === "success" && (
                <div className="flex items-center gap-2.5 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                  <CheckCircle className="h-5 w-5 shrink-0" />
                  <p className="text-xs sm:text-sm font-medium">
                    Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2.5 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-700 dark:text-rose-400">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  <p className="text-xs sm:text-sm font-medium">
                    {errorMessage}
                  </p>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-primary hover:bg-primary/95 dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded-xl shadow-lg hover:shadow-indigo-500/10 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    Send Message
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
