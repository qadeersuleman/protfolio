"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Sparkles,
  ArrowUpRight,
  MessageSquare,
  Clock,
  ShieldCheck
} from "lucide-react";
import { LinkedinIcon } from "@/components/LinkedinIcon";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Create mailto link as fallback or direct sender
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.open(mailtoUrl, "_blank");
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[350px] bg-rose-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-500/10 text-rose-400 text-xs font-mono uppercase tracking-[0.25em] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Let’s write something together.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-xl mx-auto">
            I am open to content writing, research and design work, and to my first full-time role after graduation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Availability Status Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available Immediately
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Open to Opportunities
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Whether you need persuasive web content, in-depth academic literature research, custom event invitations, or commercial advertising collateral, I bring dedication and finished quality to every project.
              </p>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-rose-500/10 text-rose-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-white hover:text-rose-300 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                title="Copy email"
              >
                {copiedField === "email" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">
                    Phone / Call
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm font-semibold text-white hover:text-pink-300 transition-colors font-mono"
                  >
                    {PERSONAL_INFO.phone} ({PERSONAL_INFO.formattedPhone})
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                title="Copy phone"
              >
                {copiedField === "phone" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/50 hover:bg-blue-950/20 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">
                    Professional Profile
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {PERSONAL_INFO.linkedinDisplay}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-center gap-3">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">
                  Based In
                </span>
                <span className="text-sm font-semibold text-white">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 mb-6 text-white">
                <MessageSquare className="w-5 h-5 text-rose-400" />
                <h3 className="text-xl font-bold tracking-tight">
                  Send a Direct Message
                </h3>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Email Client Dispatched!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you, {formData.name}. Your email composer has been opened with your inquiry for Sumera Lakhan.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ayesha Khan"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-rose-500 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ayesha@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-rose-500 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Content Writing Project / Design Inquiry / Job Offer"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-rose-500 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, or requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-rose-500 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-sm shadow-xl shadow-rose-950/60 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Sumera</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    Direct reply typically within 24 hours · Ghotki, Sindh, Pakistan
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
