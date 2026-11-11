"use client";

import React from "react";
import { motion } from "motion/react";
import { Quote, CheckCircle, FileText, Award, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/portfolio-data";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative bg-slate-950/40 border-t border-slate-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[300px] bg-rose-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-500/10 text-rose-400 text-xs font-mono uppercase tracking-[0.25em] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            ENDORSEMENTS &amp; RECOMMENDATIONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            What the people who signed my papers wrote.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Direct excerpts from formal Letters of Recommendation and Official Citations.
          </p>
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between shadow-xl group"
            >
              {/* Quote Mark Icon */}
              <div className="mb-5 flex items-center justify-between">
                <div className="p-3 rounded-xl bg-rose-500/10 text-rose-400 group-hover:scale-110 transition-transform">
                  <Quote className="w-6 h-6 rotate-180" />
                </div>
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                  {item.documentType}
                </span>
              </div>

              {/* Quote Text */}
              <div className="mb-8">
                <p className="text-base sm:text-lg font-serif italic text-slate-200 leading-relaxed font-medium">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author / Source */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-tight">
                      {item.author}
                    </h4>
                    <p className="text-xs text-rose-300 font-medium">
                      {item.organization}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-slate-500 block">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
