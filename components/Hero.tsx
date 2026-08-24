'use client';

import React from 'react';
import { Zap, ShieldCheck, Wrench, Coins, Calendar, PhoneCall, Printer } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[640px] bg-slate-950 overflow-hidden flex flex-col justify-between">
      {/* Background Poster Image (Spans entire container) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-[center_90%] bg-no-repeat"
        style={{
          backgroundImage: `url('/ChatGPT Image Aug 23, 2026 at 05_43_01 PM.png')`,
        }}
      />

      {/* Cinematic Gradient Overlays to seamlessly blend text over the photo */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent w-full lg:w-[68%]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:hidden" />
      <div className="absolute top-0 left-0 right-0 h-28 z-10 bg-gradient-to-b from-slate-950/80 to-transparent pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 pt-16 lg:pt-20 pb-12 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-xl space-y-6">
          {/* Subtle Top Sub-badge */}
          <div className="flex items-center gap-2 text-cyan-400 font-medium tracking-wider text-xs uppercase">
            <Printer className="w-4 h-4 text-cyan-400" />
            <span>Onsite Enterprise Support</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
            Onsite Printer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Solutions
            </span>
          </h1>

          {/* Subtitle & Tagline */}
          <div className="space-y-2">
            <p className="text-slate-200 font-semibold text-base sm:text-lg">
              Reliable, Responsive, Right at Your Location.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
              We provide professional multi-brand printer solutions, maintenance, and emergency repair to keep your workplace printing without interruption.
            </p>
          </div>

          {/* Call-to-action buttons styled directly on the poster */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-md shadow-lg shadow-blue-600/40 transition-all duration-200 hover:scale-[1.02]">
              <Calendar className="w-4 h-4" /> Schedule A Service
            </button>
            <a
              href="tel:+18005550199"
              className="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/80 text-xs sm:text-sm uppercase tracking-wider font-semibold px-6 py-3.5 rounded-md backdrop-blur-sm transition"
            >
              <PhoneCall className="w-4 h-4 text-cyan-400" /> Fast Response
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Integrated Stats / Guarantee Strip (Matches the original 4-card ribbon) */}
      <div className="relative z-20 w-full bg-slate-950/80 backdrop-blur-md border-t border-slate-800/80 py-4 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: Zap,
              title: "Fast On-Site Support",
              desc: "Quick response to get your operations running without delay.",
            },
            {
              icon: ShieldCheck,
              title: "Expert Technicians",
              desc: "Certified professionals with hands-on industrial expertise.",
            },
            {
              icon: Wrench,
              title: "Preventative Maintenance",
              desc: "Proactive care to extend hardware life and print output.",
            },
            {
              icon: Coins,
              title: "Cost-Effective Solutions",
              desc: "Transparent upfront pricing and genuine spare parts.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 bg-slate-900/70 border border-slate-800/90 rounded-lg p-3.5 hover:border-cyan-500/30 transition duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-cyan-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                <feature.icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-white text-xs font-bold uppercase tracking-wide truncate">
                  {feature.title}
                </h4>
                <p className="text-[11px] text-slate-400 leading-snug mt-0.5 line-clamp-2">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}