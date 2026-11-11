"use client";

import React from "react";
import { motion } from "motion/react";
import { Award, ShieldCheck, CheckCircle2, Eye, Calendar, Sparkles } from "lucide-react";
import { CERTIFICATES, CertificateItem } from "@/data/portfolio-data";
import { CertificateVisualPreview } from "./CertificateVisualPreview";

interface CertificatesProps {
  onSelectCertificate: (cert: CertificateItem) => void;
}

export function Certificates({ onSelectCertificate }: CertificatesProps) {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[350px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-mono uppercase tracking-[0.25em] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            OFFICIAL CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Six certificates.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Accredited recognitions from international summits, government digital skills programs, and global technology platforms.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 shadow-xl overflow-hidden transition-all hover:-translate-y-1"
            >
              {/* Top: Certificate Visual preview */}
              <div
                onClick={() => onSelectCertificate(cert)}
                className="relative cursor-pointer overflow-hidden p-3 bg-slate-950/50"
              >
                <div className="transition-transform duration-500 group-hover:scale-[1.01]">
                  <CertificateVisualPreview certificate={cert} size="card" />
                </div>

                {/* Hover overlay with button */}
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                  <span className="px-3.5 py-1.5 rounded-full bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs shadow-lg flex items-center gap-1.5 transition-colors">
                    <Eye className="w-4 h-4" />
                    Inspect Credential
                  </span>
                </div>
              </div>

              {/* Bottom: Meta Card Details */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider border ${cert.badgeColor}`}>
                      {cert.category}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {cert.issueDate}
                    </span>
                  </div>

                  <h3
                    onClick={() => onSelectCertificate(cert)}
                    className="font-bold text-base text-white hover:text-amber-300 transition-colors cursor-pointer line-clamp-1 mb-1"
                  >
                    {cert.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-300 mb-2">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 flex items-center gap-1 text-[11px] font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Official
                  </span>

                  <button
                    onClick={() => onSelectCertificate(cert)}
                    className="text-amber-400 hover:text-amber-300 font-bold text-xs flex items-center gap-1 transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
