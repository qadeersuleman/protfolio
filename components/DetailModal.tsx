"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Calendar, Tag, UserCheck, ShieldCheck, Check, Sparkles } from "lucide-react";
import { ProjectItem, CertificateItem } from "@/data/portfolio-data";
import { ProjectVisualPreview } from "./ProjectVisualPreview";
import { CertificateVisualPreview } from "./CertificateVisualPreview";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ProjectItem | CertificateItem | null;
  itemType: "project" | "certificate" | null;
}

export function DetailModal({ isOpen, onClose, item, itemType }: DetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const isProject = itemType === "project";
  const project = isProject ? (item as ProjectItem) : null;
  const certificate = !isProject ? (item as CertificateItem) : null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/80 text-slate-100 flex flex-col md:flex-row overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center border border-slate-600 transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left/Top: High-Res Visual Preview */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 bg-slate-950/60 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-800">
            <div className="w-full max-w-md">
              {isProject && project && (
                <ProjectVisualPreview type={project.previewType} size="modal" />
              )}
              {!isProject && certificate && (
                <CertificateVisualPreview certificate={certificate} size="modal" />
              )}
            </div>
          </div>

          {/* Right/Bottom: Information & Metadata */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Category Pill */}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 text-[11px] font-bold tracking-wider uppercase rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  {isProject ? project?.categoryLabel : certificate?.category}
                </span>
                {certificate?.credentialId && (
                  <span className="px-2.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 rounded border border-slate-700">
                    ID: {certificate.credentialId}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                {isProject ? project?.title : certificate?.title}
              </h3>

              {/* Subheading / Issuer */}
              <p className="text-sm font-semibold text-rose-300/90 mb-4">
                {isProject ? project?.clientOrContext : certificate?.issuer}
              </p>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {isProject ? project?.fullDesc : certificate?.description}
              </p>

              {/* Key Specs / Metadata */}
              <div className="space-y-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 text-xs">
                {isProject && project && (
                  <>
                    {project.metadata?.dimensions && (
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-400 font-medium">Format / Size:</span>
                        <span className="font-semibold text-slate-200">{project.metadata.dimensions}</span>
                      </div>
                    )}
                    {project.metadata?.purpose && (
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-400 font-medium">Design Purpose:</span>
                        <span className="font-semibold text-slate-200">{project.metadata.purpose}</span>
                      </div>
                    )}
                    {project.metadata?.date && (
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-400 font-medium">Timeline / Date:</span>
                        <span className="font-semibold text-slate-200">{project.metadata.date}</span>
                      </div>
                    )}
                    {project.metadata?.instructorOrTarget && (
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-400 font-medium">Instructor / Target:</span>
                        <span className="font-semibold text-slate-200">{project.metadata.instructorOrTarget}</span>
                      </div>
                    )}
                  </>
                )}

                {!isProject && certificate && (
                  <>
                    <div className="flex justify-between items-center text-slate-300">
                      <span className="text-slate-400 font-medium">Issuing Body:</span>
                      <span className="font-semibold text-slate-200">{certificate.issuer}</span>
                    </div>
                    {certificate.partner && (
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-400 font-medium">Partner Organization:</span>
                        <span className="font-semibold text-slate-200">{certificate.partner}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center text-slate-300">
                      <span className="text-slate-400 font-medium">Issued Date:</span>
                      <span className="font-semibold text-slate-200">{certificate.issueDate}</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-300">
                      <span className="text-slate-400 font-medium">Signatory / Authority:</span>
                      <span className="font-semibold text-slate-200">{certificate.signatory}</span>
                    </div>
                    {certificate.verifyNote && (
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-400 font-medium">Verification Status:</span>
                        <span className="font-semibold text-emerald-400 flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          {certificate.verifyNote}
                        </span>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Tags / Tools used */}
              {isProject && project && (
                <div className="mt-5">
                  <p className="text-xs font-semibold text-slate-400 mb-2">Core Competencies:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 text-[11px] font-medium bg-slate-800 text-slate-300 rounded-md border border-slate-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer action */}
            <div className="pt-6 border-t border-slate-800 mt-6 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Sumera Lakhan Portfolio 2026
              </span>
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-rose-600 hover:bg-rose-500 text-white rounded-lg transition-colors shadow-md shadow-rose-950"
              >
                Done Reading
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
