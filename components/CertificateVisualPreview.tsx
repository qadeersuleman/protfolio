"use client";

import React from "react";
import { Award, CheckCircle, ShieldCheck, Globe, Star, Sparkles, QrCode } from "lucide-react";
import { CertificateItem } from "@/data/portfolio-data";

interface CertificatePreviewProps {
  certificate: CertificateItem;
  size?: "card" | "modal";
}

export function CertificateVisualPreview({ certificate, size = "card" }: CertificatePreviewProps) {
  const isModal = size === "modal";

  return (
    <div
      className={`relative w-full overflow-hidden bg-gradient-to-b from-white via-slate-50 to-amber-50/20 text-slate-800 rounded-xl border border-slate-200 shadow-md p-5 flex flex-col justify-between select-none ${
        isModal ? "p-8 md:p-12 min-h-[440px]" : "min-h-[260px]"
      }`}
    >
      {/* Ornate Certificate Border */}
      <div className="absolute inset-1.5 border border-amber-500/30 rounded-lg pointer-events-none" />
      <div className="absolute inset-2.5 border border-dashed border-amber-600/20 rounded-md pointer-events-none" />

      {/* Top Bar with Brand / Issuer */}
      <div className="relative z-10 flex items-center justify-between border-b border-slate-200/80 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 text-white flex items-center justify-center font-bold shadow-xs">
            <Award className="w-5 h-5 text-amber-200" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
              {certificate.partner ? `${certificate.partner} · ` : ""}
              {certificate.issuer}
            </span>
            <span className="text-[9px] text-slate-500 font-mono">
              Official Credential {certificate.credentialId ? `· ${certificate.credentialId}` : ""}
            </span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[9px] font-bold">
          <CheckCircle className="w-3 h-3 text-emerald-600" />
          Verified
        </div>
      </div>

      {/* Body with Certificate Title & Recipient Name */}
      <div className="relative z-10 text-center my-auto py-3">
        <p className="font-serif italic text-xs text-amber-900 tracking-widest uppercase">
          Certificate of Completion &amp; Participation
        </p>

        <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">
          This is proudly presented to
        </p>

        {/* Student Name */}
        <h4 className="font-serif text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight my-1">
          Sumera Lakhan
        </h4>

        <div className="w-20 h-[1.5px] bg-amber-500 mx-auto mb-2" />

        <p className="text-xs md:text-sm font-bold text-slate-800 max-w-[340px] mx-auto leading-snug">
          {certificate.title}
        </p>

        <p className="text-[10px] text-slate-600 max-w-[380px] mx-auto mt-1 line-clamp-2">
          {certificate.description}
        </p>
      </div>

      {/* Footer with Signatory, Date & Verification Badge */}
      <div className="relative z-10 flex items-end justify-between border-t border-slate-200/80 pt-3 text-[10px]">
        {/* Signatory */}
        <div>
          <div className="font-serif italic text-slate-900 text-[11px] font-semibold border-b border-slate-300 pb-0.5 max-w-[140px]">
            {certificate.signatory.split(",")[0]}
          </div>
          <span className="text-[8px] text-slate-500 uppercase tracking-wider block mt-0.5">
            {certificate.signatory}
          </span>
        </div>

        {/* Golden Embossed Seal */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-600 border-2 border-white shadow-md flex items-center justify-center text-amber-950 font-black">
            <ShieldCheck className="w-5 h-5 text-amber-900" />
          </div>
          <span className="text-[7px] text-amber-900 font-extrabold tracking-widest uppercase mt-0.5">
            AUTHENTIC
          </span>
        </div>

        {/* Date & Verification Note */}
        <div className="text-right">
          <span className="text-slate-500 block text-[9px]">Date of Issue:</span>
          <span className="font-bold text-slate-800 text-[10px]">{certificate.issueDate}</span>
          {certificate.verifyNote && (
            <span className="text-[8px] text-slate-500 block max-w-[120px] truncate">
              {certificate.verifyNote}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
