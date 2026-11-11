"use client";

import React from "react";
import { Sparkles, Heart, Utensils, Moon, Droplets, BookOpen, Clock, Calendar, Gift, Award, Percent } from "lucide-react";

interface VisualProps {
  type: "wedding" | "birthday" | "bakery" | "restaurant" | "iftar" | "skincare" | "serum" | "poetry";
  size?: "card" | "modal";
}

export function ProjectVisualPreview({ type, size = "card" }: VisualProps) {
  const isModal = size === "modal";

  switch (type) {
    case "wedding":
      return (
        <div
          className={`relative w-full h-full overflow-hidden bg-gradient-to-b from-[#fbf8f3] via-[#f7f0e6] to-[#ebdcd0] text-[#4a3b32] flex flex-col items-center justify-between p-6 select-none shadow-inner border border-amber-200/60 rounded-xl ${
            isModal ? "p-8 md:p-12 min-h-[460px]" : "min-h-[260px]"
          }`}
        >
          {/* Subtle ornate vintage corner borders */}
          <div className="absolute top-2 left-2 w-10 h-10 border-t-2 border-l-2 border-[#b89569] rounded-tl-sm pointer-events-none" />
          <div className="absolute top-2 right-2 w-10 h-10 border-t-2 border-r-2 border-[#b89569] rounded-tr-sm pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-10 h-10 border-b-2 border-l-2 border-[#b89569] rounded-bl-sm pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-10 h-10 border-b-2 border-r-2 border-[#b89569] rounded-br-sm pointer-events-none" />

          {/* Delicate filigree floral header */}
          <div className="text-center pt-2">
            <div className="flex items-center justify-center gap-2 text-[#b89569] mb-1">
              <span className="h-[1px] w-6 bg-[#b89569]" />
              <Heart className="w-3.5 h-3.5 fill-[#b89569]" />
              <span className="h-[1px] w-6 bg-[#b89569]" />
            </div>
            <p className="font-serif italic text-xs tracking-widest uppercase text-[#8e6e51]">
              Wedding Ceremony of
            </p>
          </div>

          {/* Couple Names */}
          <div className="text-center my-auto py-2">
            <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#3b2a20] drop-shadow-sm">
              ZAYB &amp; TAHLEEM
            </h3>
            <div className="w-16 h-[1.5px] bg-[#c5a075] mx-auto my-2" />
            <p className="text-[11px] font-medium tracking-widest text-[#7c634c] uppercase">
              Save The Date
            </p>
            <p className="font-serif text-xs text-[#523d30] mt-1 font-semibold">
              Saturday, May 18, 2030
            </p>
            <p className="text-[10px] text-[#8e7663] italic">8:30 PM · Grand Ballroom</p>
          </div>

          {/* Footer note */}
          <div className="text-center border-t border-[#dfcfbd] pt-2 w-full">
            <p className="text-[9px] uppercase tracking-widest text-[#8a6e54]">
              Invitation Card Design
            </p>
          </div>
        </div>
      );

    case "birthday":
      return (
        <div
          className={`relative w-full h-full overflow-hidden bg-gradient-to-b from-[#0b0c2a] via-[#151940] to-[#08091a] text-white flex flex-col items-center justify-between p-6 select-none shadow-inner border border-indigo-500/30 rounded-xl ${
            isModal ? "p-8 md:p-12 min-h-[460px]" : "min-h-[260px]"
          }`}
        >
          {/* Confetti & Glow orbs */}
          <div className="absolute top-4 left-6 w-2 h-2 rounded-full bg-pink-400 blur-[0.5px] animate-pulse" />
          <div className="absolute top-10 right-8 w-3 h-3 rounded-full bg-amber-400 blur-[0.5px]" />
          <div className="absolute bottom-8 left-10 w-2.5 h-2.5 rounded-full bg-cyan-400" />
          <div className="absolute top-1/2 right-4 w-2 h-2 rounded-full bg-purple-400" />

          {/* Floating balloon silhouettes */}
          <div className="flex justify-center gap-3 pt-1 opacity-80">
            <div className="w-6 h-8 rounded-full bg-gradient-to-t from-pink-600 to-rose-400 shadow-lg shadow-pink-500/30" />
            <div className="w-7 h-9 rounded-full bg-gradient-to-t from-amber-500 to-yellow-300 shadow-lg shadow-amber-500/30 -mt-2" />
            <div className="w-6 h-8 rounded-full bg-gradient-to-t from-cyan-600 to-blue-400 shadow-lg shadow-cyan-500/30" />
          </div>

          {/* Invitation text */}
          <div className="text-center my-auto py-2">
            <p className="text-[10px] uppercase tracking-[0.25em] text-pink-300 font-semibold mb-1">
              You Are Invited To
            </p>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-300 to-cyan-300 drop-shadow-md">
              Birthday Party
            </h3>
            <p className="text-[10px] text-slate-300 italic mt-1 max-w-[200px] mx-auto">
              It’s not complete without you! Come and celebrate with us.
            </p>
            <div className="inline-block mt-3 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-amber-300">
              DECEMBER 25 · 7:00 PM
            </div>
          </div>

          <div className="text-[9px] uppercase tracking-widest text-slate-400 border-t border-white/10 pt-2 w-full text-center">
            Celebration Event Invitation
          </div>
        </div>
      );

    case "bakery":
      return (
        <div
          className={`relative w-full h-full overflow-hidden bg-gradient-to-b from-[#fff5f5] via-[#ffeded] to-[#fde2e4] text-[#5c3a3c] flex flex-col justify-between p-5 select-none shadow-inner border border-pink-200 rounded-xl ${
            isModal ? "p-8 md:p-10 min-h-[460px]" : "min-h-[260px]"
          }`}
        >
          {/* Header */}
          <div className="text-center border-b border-pink-200/80 pb-2">
            <span className="font-serif italic text-xs tracking-widest text-pink-600 font-semibold">
              Artisan Pastry &amp; Cafe
            </span>
            <h3 className="font-serif text-2xl font-bold tracking-tight text-[#4c2225] mt-0.5">
              Bakery Menu
            </h3>
          </div>

          {/* Menu Columns */}
          <div className="grid grid-cols-2 gap-2 my-auto py-2 text-[10px]">
            <div className="bg-white/80 rounded-lg p-2.5 border border-pink-100 shadow-xs">
              <p className="font-bold uppercase tracking-wider text-pink-700 text-[10px] mb-1.5 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" /> Cupcakes
              </p>
              <div className="space-y-1 text-[#6b4749]">
                <div className="flex justify-between">
                  <span>Vanilla Dream</span>
                  <span className="font-semibold text-pink-800">$3.50</span>
                </div>
                <div className="flex justify-between">
                  <span>Velvet Choco</span>
                  <span className="font-semibold text-pink-800">$4.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sweet Cherry</span>
                  <span className="font-semibold text-pink-800">$3.75</span>
                </div>
                <div className="flex justify-between">
                  <span>Blueberry Swirl</span>
                  <span className="font-semibold text-pink-800">$4.25</span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 rounded-lg p-2.5 border border-pink-100 shadow-xs">
              <p className="font-bold uppercase tracking-wider text-pink-700 text-[10px] mb-1.5 flex items-center gap-1">
                <Gift className="w-2.5 h-2.5" /> Desserts
              </p>
              <div className="space-y-1 text-[#6b4749]">
                <div className="flex justify-between">
                  <span>Cheesecake Slice</span>
                  <span className="font-semibold text-pink-800">$5.50</span>
                </div>
                <div className="flex justify-between">
                  <span>French Macaron</span>
                  <span className="font-semibold text-pink-800">$2.50</span>
                </div>
                <div className="flex justify-between">
                  <span>Tiramisu Cup</span>
                  <span className="font-semibold text-pink-800">$6.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Fresh Tart</span>
                  <span className="font-semibold text-pink-800">$4.75</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-[9px] text-pink-700 font-medium pt-1 border-t border-pink-200">
            Freshly Baked Every Morning · 100% Organic Ingredients
          </div>
        </div>
      );

    case "restaurant":
      return (
        <div
          className={`relative w-full h-full overflow-hidden bg-gradient-to-b from-[#1a0f0d] via-[#241411] to-[#120a09] text-white flex flex-col justify-between p-5 select-none shadow-inner border border-amber-600/30 rounded-xl ${
            isModal ? "p-8 md:p-10 min-h-[460px]" : "min-h-[260px]"
          }`}
        >
          {/* Header promo badge */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-1.5 text-amber-400">
              <Utensils className="w-4 h-4" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-amber-300">
                Gourmet Dining
              </span>
            </div>
            {/* 25% OFF Badge */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-400 text-slate-950 flex flex-col items-center justify-center font-black shadow-lg shadow-amber-500/30 border-2 border-white/80">
              <span className="text-[8px] leading-tight">OFF</span>
              <span className="text-sm leading-none font-extrabold">25%</span>
            </div>
          </div>

          {/* Main callout */}
          <div className="my-auto py-2">
            <span className="inline-block px-2 py-0.5 rounded bg-red-600/30 text-red-400 border border-red-500/40 text-[9px] font-bold tracking-widest uppercase mb-1">
              Special Weekend Offer
            </span>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
              Get The Best Food <br />
              <span className="text-amber-400">In Your Home</span>
            </h3>
            <p className="text-[11px] text-zinc-300 mt-1 line-clamp-2">
              Freshly grilled sizzling dishes, hand-tossed artisan recipes and fast doorstep delivery.
            </p>
          </div>

          {/* CTA & hotline */}
          <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px]">
            <span className="bg-amber-500 text-slate-950 font-bold px-2.5 py-1 rounded">
              ORDER NOW
            </span>
            <span className="text-zinc-400 font-mono text-[9px]">Hotline: (0327) 2868060</span>
          </div>
        </div>
      );

    case "iftar":
      return (
        <div
          className={`relative w-full h-full overflow-hidden bg-gradient-to-b from-[#0c2e22] via-[#103d2d] to-[#071c14] text-[#f7eed9] flex flex-col items-center justify-between p-6 select-none shadow-inner border border-emerald-500/30 rounded-xl ${
            isModal ? "p-8 md:p-12 min-h-[460px]" : "min-h-[260px]"
          }`}
        >
          {/* Islamic Lantern & Crescent Motif */}
          <div className="flex items-center gap-2 text-amber-300 pt-1">
            <span className="h-[1px] w-8 bg-amber-400/40" />
            <Moon className="w-5 h-5 fill-amber-300 text-amber-400" />
            <span className="h-[1px] w-8 bg-amber-400/40" />
          </div>

          {/* Content */}
          <div className="text-center my-auto py-2">
            <p className="font-serif italic text-xs tracking-widest text-amber-200">
              Ramadan Kareem
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-normal text-amber-300 drop-shadow-sm mt-1">
              Iftar Invitation
            </h3>
            <p className="text-[10px] text-emerald-100/80 italic mt-2 max-w-[210px] mx-auto">
              Joyfully invites you and your family to break fast with us at our special Iftar gathering.
            </p>
            <div className="mt-3 text-[10px] font-medium text-amber-200 bg-emerald-900/60 border border-amber-400/30 rounded-full px-3 py-1 inline-block">
              Maghrib Prayer &amp; Dinner Banquet
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-[9px] uppercase tracking-widest text-emerald-300/80 border-t border-emerald-700/50 pt-2 w-full">
            Blessings · Fellowship · Gratitude
          </div>
        </div>
      );

    case "skincare":
      return (
        <div
          className={`relative w-full h-full overflow-hidden bg-gradient-to-b from-[#e8f1f5] via-[#d4e4eb] to-[#bcd4df] text-[#243c4f] flex flex-col justify-between p-5 select-none shadow-inner border border-sky-300/40 rounded-xl ${
            isModal ? "p-8 md:p-10 min-h-[460px]" : "min-h-[260px]"
          }`}
        >
          <div className="flex justify-between items-center text-[10px] tracking-widest uppercase text-sky-800 font-bold border-b border-sky-300/60 pb-2">
            <span>Pure Botanical Labs</span>
            <span>Dermatologist Tested</span>
          </div>

          <div className="my-auto py-2 text-center">
            <span className="text-[9px] uppercase font-bold tracking-widest text-sky-700">
              All New Formulation
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#142d42] mt-0.5">
              New Skincare Product
            </h3>
            <p className="text-[10px] text-sky-900/70 max-w-[220px] mx-auto mt-1">
              Deep hydration, gentle cellular renewal, and radiant luminous skin finish.
            </p>

            {/* Skincare Bottle Mockup Silhouette */}
            <div className="flex justify-center items-end gap-2 my-3">
              <div className="w-8 h-16 bg-white/90 rounded-t-lg rounded-b-md shadow-md border border-white flex flex-col items-center justify-center">
                <span className="text-[6px] uppercase font-bold text-sky-800">Lotion</span>
              </div>
              <div className="w-10 h-20 bg-white/95 rounded-t-lg rounded-b-md shadow-lg border border-white flex flex-col items-center justify-center">
                <Droplets className="w-3 h-3 text-sky-500 mb-1" />
                <span className="text-[6px] uppercase font-bold text-sky-900">Serum</span>
              </div>
              <div className="w-7 h-12 bg-white/80 rounded-t-md rounded-b-md shadow-sm border border-white flex flex-col items-center justify-center">
                <span className="text-[6px] uppercase font-bold text-sky-800">Creme</span>
              </div>
            </div>

            <button className="bg-sky-900 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow hover:bg-sky-800">
              SHOP NOW
            </button>
          </div>

          <div className="text-center text-[9px] text-sky-800 font-semibold border-t border-sky-300/60 pt-1.5">
            100% Vegan · Cruelty Free · Paraben Free
          </div>
        </div>
      );

    case "serum":
      return (
        <div
          className={`relative w-full h-full overflow-hidden bg-gradient-to-b from-[#2e2621] via-[#211a16] to-[#14100e] text-[#f2e6dc] flex flex-col justify-between p-5 select-none shadow-inner border border-amber-700/30 rounded-xl ${
            isModal ? "p-8 md:p-10 min-h-[460px]" : "min-h-[260px]"
          }`}
        >
          <div className="text-center">
            <span className="text-[8px] uppercase tracking-[0.3em] text-amber-400 font-bold">
              Luxury Apothecary
            </span>
            <h3 className="font-serif text-2xl font-light tracking-widest text-[#ebd8c8] uppercase mt-1">
              Beauty Serum
            </h3>
            <div className="w-10 h-[1px] bg-amber-500/50 mx-auto mt-1" />
          </div>

          <div className="my-auto py-2 text-center">
            {/* Amber Bottle silhouette */}
            <div className="w-12 h-22 mx-auto bg-gradient-to-b from-amber-700 via-amber-800 to-amber-950 rounded-lg border border-amber-600/40 shadow-xl shadow-amber-950/60 flex flex-col items-center justify-center p-1 my-2">
              <div className="w-3 h-4 bg-zinc-800 rounded-t -mt-5 mb-1" />
              <div className="w-full bg-[#f4ebe3] text-[#2c1d14] text-[6px] font-bold py-1 px-0.5 rounded text-center">
                ELIXIR
                <br />
                GLOW
              </div>
            </div>
            <p className="text-[10px] text-amber-200/80 italic">
              Cold-pressed botanical oils infused with Vitamin C &amp; E
            </p>
          </div>

          <div className="flex justify-between items-center text-[9px] text-amber-400/90 border-t border-white/10 pt-2 font-mono">
            <span>30 ML / 1.0 FL. OZ</span>
            <span>PREMIUM FORMULA</span>
          </div>
        </div>
      );

    case "poetry":
      return (
        <div
          className={`relative w-full h-full overflow-hidden bg-[#faf8f5] text-[#2e2c29] flex flex-col justify-between p-5 select-none shadow-inner border border-stone-300 rounded-xl font-serif ${
            isModal ? "p-8 md:p-10 min-h-[460px]" : "min-h-[260px]"
          }`}
        >
          {/* Academic Header */}
          <div className="text-center border-b border-stone-300 pb-2">
            <p className="text-[9px] uppercase tracking-widest text-stone-500 font-sans font-semibold">
              Shah Abdul Latif University · Ghotki Campus
            </p>
            <p className="text-[8px] uppercase tracking-wider text-stone-400 font-sans">
              Department of English Literature
            </p>
            <h3 className="text-base md:text-lg font-bold text-stone-900 mt-1">
              Classical Poetry Assignment
            </h3>
          </div>

          {/* Body Content */}
          <div className="my-auto py-2 text-center">
            <div className="text-[10px] font-sans text-stone-600 mb-2 space-y-0.5">
              <p>
                <span className="font-semibold text-stone-800">Assigned By:</span> Sir Ahemed
              </p>
              <p>
                <span className="font-semibold text-stone-800">Student:</span> Sumera Lakhan
              </p>
              <p>
                <span className="font-semibold text-stone-800">Date:</span> 12 May 2025
              </p>
            </div>

            <div className="bg-stone-100/80 p-2.5 rounded border border-stone-200 max-w-[240px] mx-auto text-left">
              <p className="text-[9px] font-sans font-bold uppercase tracking-wider text-rose-800 mb-1">
                Selected Topic:
              </p>
              <p className="text-[11px] italic font-serif text-stone-800 font-semibold leading-relaxed">
                “Thou hast made and shall thy work decay?”
              </p>
              <p className="text-[9px] text-stone-500 font-sans mt-1">
                Metaphysical inquiry into divine grace &amp; mortality.
              </p>
            </div>
          </div>

          {/* Academic Footer */}
          <div className="flex justify-between items-center text-[8px] font-sans text-stone-400 border-t border-stone-300 pt-1.5">
            <span>BS English — Semester VII/VIII</span>
            <span>Grade: A+ Verified</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
