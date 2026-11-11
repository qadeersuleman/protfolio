"use client";

import React from "react";
import { motion } from "motion/react";
import {
  PenTool,
  Cpu,
  Palette,
  Sparkles,
  BookOpen,
  FileSpreadsheet,
  FileText,
  Presentation,
  Bot,
  Layers,
  CheckCircle,
  Award
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";

export function Skills() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "PenTool":
        return <PenTool className="w-5 h-5" />;
      case "Cpu":
        return <Cpu className="w-5 h-5" />;
      case "Palette":
        return <Palette className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-500/10 text-rose-400 text-xs font-mono uppercase tracking-[0.25em] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            CORE CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Skills &amp; Expertise
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            A versatile blend of English literary research, digital spreadsheet &amp; AI tools, and commercial visual design.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-tr ${cat.color} text-white shadow-md group-hover:scale-105 transition-transform`}
                  >
                    {getIcon(cat.iconName)}
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-widest">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-rose-300 transition-colors">
                  {cat.title}
                </h3>

                {/* Skills list */}
                <ul className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between text-xs py-1.5 px-2 rounded-lg bg-slate-800/40 border border-slate-800/80 hover:bg-slate-800/80 transition-colors"
                    >
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      {skill.level && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-700 text-rose-300 font-semibold">
                          {skill.level}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer accent */}
              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                <span>Verified in Portfolio</span>
                <CheckCircle className="w-3.5 h-3.5 text-rose-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
