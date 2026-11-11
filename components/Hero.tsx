"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Mail,
  Phone,
  Sparkles,
  ArrowDown,
  Check,
  Copy,
  Download,
  BookOpen,
  Award,
  Layers,
  FileText
} from "lucide-react";
import { LinkedinIcon } from "@/components/LinkedinIcon";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function Hero() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2200);
  };

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background radial glowing ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-rose-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Header Badge matching PDF: PORTFOLIO 2026 · GHOTKI, SINDH, PAKISTAN */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-2 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-rose-500/30 text-rose-300 text-xs font-mono uppercase tracking-[0.2em] shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <span>PORTFOLIO {PERSONAL_INFO.year}</span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-rose-400" />
              {PERSONAL_INFO.location}
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Open for Roles &amp; Freelance
          </div>
        </motion.div>

        {/* Hero Title: Sumera LAKHAN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-none">
            Sumera{" "}
            <span className="font-serif font-light italic tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-amber-200">
              LAKHAN
            </span>
          </h1>
        </motion.div>

        {/* Subtitle Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-3 text-lg sm:text-2xl font-bold text-rose-200/90 mb-6"
        >
          <span className="text-white">Content writer</span>
          <span className="text-rose-500">·</span>
          <span className="text-slate-200">Researcher</span>
          <span className="text-rose-500">·</span>
          <span className="text-amber-200">Visual designer</span>
        </motion.div>

        {/* Bio Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal mb-8"
        >
          {PERSONAL_INFO.bio}
        </motion.p>

        {/* Contact Links & Quick-Copy Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-3 mb-10 text-xs sm:text-sm font-medium"
        >
          {/* Phone */}
          <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 hover:border-slate-700 transition-colors">
            <Phone className="w-4 h-4 text-rose-400" />
            <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-white font-mono">
              {PERSONAL_INFO.phone}
            </a>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
              className="ml-1 p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
              title="Copy phone"
            >
              {copiedField === "phone" ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Email */}
          <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 hover:border-slate-700 transition-colors">
            <Mail className="w-4 h-4 text-pink-400" />
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white font-mono">
              {PERSONAL_INFO.email}
            </a>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
              className="ml-1 p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
              title="Copy email"
            >
              {copiedField === "email" ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-white hover:border-blue-500/50 hover:bg-blue-950/20 transition-all"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-400" />
            <span className="font-mono text-xs">{PERSONAL_INFO.linkedinDisplay}</span>
          </a>
        </motion.div>

        {/* Action Buttons & Quick Nav */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-sm shadow-xl shadow-rose-950/60 hover:shadow-rose-900/80 transition-all flex items-center gap-2 hover:-translate-y-0.5"
          >
            <Layers className="w-4 h-4" />
            Explore Designs &amp; Samples
          </a>

          <a
            href="#certificates"
            className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-200 hover:text-white font-bold text-sm transition-all flex items-center gap-2 hover:-translate-y-0.5"
          >
            <Award className="w-4 h-4 text-amber-400" />
            View Six Certificates
          </a>

          <a
            href="#contact"
            className="px-6 py-3.5 rounded-xl bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 text-slate-300 hover:text-white font-medium text-sm transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-rose-400" />
            Get In Touch
          </a>
        </motion.div>

        {/* Highlights / Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md"
        >
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-white">8+</span>
            <span className="text-xs text-slate-400 font-medium">Showcase Works (Ads, Menus, Invites)</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-300">6</span>
            <span className="text-xs text-slate-400 font-medium">Verified Official Certificates</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-rose-400">Semester 8</span>
            <span className="text-xs text-slate-400 font-medium">BS English (Final Year Scholar)</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">3</span>
            <span className="text-xs text-slate-400 font-medium">Languages (Sindhi, Urdu, English)</span>
          </div>
        </motion.div>
      </div>

      {/* Down arrow scroll helper */}
      <div className="flex justify-center mt-12">
        <a
          href="#about"
          className="text-slate-500 hover:text-rose-400 transition-colors animate-bounce p-2"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
