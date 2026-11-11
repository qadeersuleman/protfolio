"use client";

import React from "react";
import { motion } from "motion/react";
import {
  GraduationCap,
  Languages,
  Clock,
  Sparkles,
  Compass,
  CheckCircle2,
  BookOpen,
  School,
  HeartHandshake,
  Lightbulb,
  Zap,
  Bot
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-500/10 text-rose-400 text-xs font-mono uppercase tracking-[0.25em] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            A student of English who{" "}
            <span className="font-serif italic font-light text-rose-300">
              likes finished work.
            </span>
          </h2>
        </div>

        {/* Two Column Layout: Story & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            <p className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm">
              <span className="font-semibold text-white">I am Sumera</span>, a final-year BS
              English student at{" "}
              <span className="text-rose-300 font-medium">
                Shah Abdul Latif University, Ghotki campus
              </span>
              . In 2026 I completed a one-month Content Writing &amp; Research internship at{" "}
              <span className="text-white font-medium">CodeAlpha</span>, and in 2024 I trained
              in freelancing through{" "}
              <span className="text-amber-300 font-medium">DigiSkills.pk</span>.
            </p>

            <p className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm">
              I also learn the tools that make writing and reporting easier, such as{" "}
              <span className="text-emerald-300 font-medium">MS Excel</span> and Google’s{" "}
              <span className="text-sky-300 font-medium">Generative AI Studio</span>. Outside
              class I design invitations, menus and product posters. I work in{" "}
              <span className="text-white font-semibold">Sindhi, Urdu and English</span>.
            </p>

            {/* Core Values / Work Philosophy */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Finished Work</span>
                </div>
                <p className="text-xs text-slate-400">
                  Every paragraph polished, every visual asset aligned, delivered on time.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1">
                  <Bot className="w-4 h-4" />
                  <span>Tech-Enhanced</span>
                </div>
                <p className="text-xs text-slate-400">
                  Blending classical literature depth with modern Generative AI workflows.
                </p>
              </div>
            </div>
          </div>

          {/* Languages & Working Style Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Languages Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2.5 mb-4 text-white">
                <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400">
                  <Languages className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base tracking-tight">Languages I Work In</h3>
              </div>

              <div className="space-y-3">
                {PERSONAL_INFO.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-slate-600 transition-colors"
                  >
                    <div>
                      <span className="font-bold text-sm text-white block">{lang.name}</span>
                      <span className="text-xs text-slate-400">{lang.proficiency}</span>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-rose-300 border border-slate-700">
                      {lang.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Working Style Badges */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2.5 mb-4 text-white">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base tracking-tight">Working Style</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.workingStyle.map((style) => (
                  <div
                    key={style.title}
                    className="group relative p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/60 hover:border-amber-400/50 transition-all flex-1 min-w-[130px]"
                  >
                    <span className="font-bold text-xs text-amber-200 block mb-0.5">
                      {style.title}
                    </span>
                    <span className="text-[11px] text-slate-400 block leading-tight">
                      {style.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Section from PDF */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-5 h-5 text-rose-400" />
            <h3 className="text-2xl font-bold tracking-tight text-white">Education</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PERSONAL_INFO.education.map((edu, idx) => (
              <div
                key={edu.degree}
                className="relative p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all shadow-md group"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="p-3 rounded-xl bg-slate-800/80 text-rose-400 group-hover:scale-105 transition-transform">
                    {idx === 0 ? <GraduationCap className="w-6 h-6" /> : <School className="w-6 h-6" />}
                  </div>
                  <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">
                    {edu.status}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-rose-300 transition-colors">
                  {edu.degree}
                </h4>

                <p className="text-sm font-semibold text-slate-300 mb-2">
                  {edu.institution}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
