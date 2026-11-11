"use client";

import React from "react";
import { ArrowUp, Heart, Mail, Phone, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 text-slate-400 py-12 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-rose-600 to-amber-500 text-white flex items-center justify-center font-bold text-sm">
              SL
            </div>
            <div>
              <span className="font-bold text-white text-sm block">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-slate-400">
                {PERSONAL_INFO.tagline}
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#certificates" className="hover:text-white transition-colors">Certificates</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <p>
            &copy; {PERSONAL_INFO.year} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
