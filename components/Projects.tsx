"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Layers,
  Sparkles,
  Maximize2,
  Tag,
  ArrowUpRight,
  ExternalLink,
  Eye
} from "lucide-react";
import { PROJECTS, ProjectItem } from "@/data/portfolio-data";
import { ProjectVisualPreview } from "./ProjectVisualPreview";

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function Projects({ onSelectProject }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = [
    { label: "All Works", value: "All" },
    { label: "Invitations", value: "Invitation" },
    { label: "Menus & Flyers", value: "FlyerMenu" },
    { label: "Product Ads", value: "Product Ad" },
    { label: "Academic", value: "Academic" }
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "FlyerMenu") return proj.category === "Flyer" || proj.category === "Menu";
    return proj.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-slate-900">
      {/* Background radial accent */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[400px] bg-rose-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-500/10 text-rose-400 text-xs font-mono uppercase tracking-[0.25em] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            SHOWCASE PORTFOLIO
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Designs and writing samples.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Invitations, commercial product ads, dining menus and classical academic literary submissions.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveFilter(cat.value)}
                  className={`relative px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    isActive
                      ? "text-white bg-rose-600 shadow-md shadow-rose-950"
                      : "text-slate-400 bg-slate-900/80 hover:text-white hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  {cat.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 rounded-full border border-rose-400/50 pointer-events-none"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/90 shadow-xl overflow-hidden transition-all hover:-translate-y-1"
              >
                {/* Visual Preview Container */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="relative cursor-pointer overflow-hidden p-3 bg-slate-950/40"
                >
                  <div className="transition-transform duration-500 group-hover:scale-[1.02]">
                    <ProjectVisualPreview type={project.previewType} size="card" />
                  </div>

                  {/* Hover Overlay with Quick View indicator */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                    <span className="px-3 py-1.5 rounded-full bg-rose-600 text-white text-xs font-bold shadow-lg flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      View High-Res
                    </span>
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Category Label */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-[10px] font-mono font-bold uppercase tracking-wider text-rose-300 border border-slate-700">
                        {project.categoryLabel}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        Item 0{idx + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="font-bold text-base text-white hover:text-rose-300 transition-colors cursor-pointer line-clamp-1 mb-1.5"
                    >
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Card Bottom: Tools and Open Button */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-medium truncate max-w-[140px]">
                      {project.toolsUsed[0]}
                    </span>
                    <button
                      onClick={() => onSelectProject(project)}
                      className="text-xs font-bold text-rose-400 hover:text-rose-300 flex items-center gap-1 transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
