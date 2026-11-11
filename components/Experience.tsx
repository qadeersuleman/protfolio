"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Briefcase,
  Calendar,
  MapPin,
  Award,
  CheckCircle2,
  FileCheck2,
  Globe2,
  Users,
  Sparkles
} from "lucide-react";
import { EXPERIENCES } from "@/data/portfolio-data";

export function Experience() {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Leadership":
        return <Users className="w-4 h-4 text-indigo-400" />;
      case "Summit":
        return <Globe2 className="w-4 h-4 text-rose-400" />;
      case "Internship":
        return <Briefcase className="w-4 h-4 text-blue-400" />;
      case "Training":
        return <Award className="w-4 h-4 text-amber-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-rose-400" />;
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background radial soft glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-500/10 text-rose-400 text-xs font-mono uppercase tracking-[0.25em] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            CAREER &amp; MILESTONES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Work, training and events.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Key professional experience, virtual internships, global peace delegations, and government-certified trainings.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-6 md:pl-10 group"
            >
              {/* Timeline Pin Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-rose-500 flex items-center justify-center transition-colors shadow-lg">
                {getTypeIcon(exp.type)}
              </div>

              {/* Date Callout for Desktop (on left of line) */}
              <div className="hidden md:block absolute -left-36 top-2 text-right w-28">
                <span className="text-xs font-mono font-bold text-rose-400 tracking-wider block">
                  {exp.period}
                </span>
                <span className="text-[10px] uppercase font-mono text-slate-500 block">
                  {exp.badge}
                </span>
              </div>

              {/* Experience Card */}
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-all shadow-md group-hover:shadow-rose-950/20">
                {/* Mobile Date Badge */}
                <div className="flex md:hidden items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-rose-400">
                    {exp.period}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
                    {exp.badge}
                  </span>
                </div>

                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-rose-300 transition-colors">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-400 mb-4">
                  <span className="text-slate-200 font-semibold">{exp.organization}</span>
                  {exp.location && (
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      {exp.location}
                    </span>
                  )}
                </div>

                {/* Highlights List */}
                <ul className="space-y-2 text-sm text-slate-300">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
