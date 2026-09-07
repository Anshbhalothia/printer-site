'use client';

import React from 'react';
import { Wrench, ArrowDownToLine, Settings2, Wifi, Building2, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
const categories = [
  {
    icon: Wrench,
    title: "Equipment Repair",
    desc: "Quick fixes for paper jams, printhead clogs, roller replacements, and hardware faults.",
  },
  {
    icon: ArrowDownToLine,
    title: "Installation & Setup",
    desc: "Complete unboxing, network driver configuration, and calibration for immediate use.",
  },
  {
    icon: Settings2,
    title: "Preventive Maintenance",
    desc: "Routine deep cleaning, thermal cycle audits, and tuning to ensure peak lifespan.",
  },
  {
    icon: Wifi,
    title: "Network Assistance",
    desc: "Seamless connectivity setup for office Wi-Fi, static IP routing, and wireless printing.",
  },
  {
    icon: Building2,
    title: "Business Solutions",
    desc: "Tailored monthly servicing, supply replenishment, and central print fleet management.",
  },
  {
    icon: HelpCircle,
    title: "Assessment & Audit",
    desc: "Diagnostic test runs, print quality evaluations, and transparent part estimates.",
  },
];

export default function Categories() {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Compact Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Explore by Category
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-2 rounded-full" />
        </div>

        {/* 6 Compact Poster-Style Cards (3x2 Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-xl border border-slate-200/90 p-5 flex flex-col items-center text-center shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.12)] hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Big Focused Icon Circle */}
              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/25 group-hover:scale-105 group-hover:rotate-2 group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300 mb-3.5">
                <c.icon className="w-8 h-8 stroke-[2.2]" />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors duration-200">
                {c.title}
              </h3>

              {/* Short & Clean Description */}
              <p className="text-xs text-slate-500 leading-relaxed max-w-[240px] mb-4 flex-1">
                {c.desc}
              </p>

              {/* Modern Action Pill */}
             <Link
  href="/book-appointment"
  className="w-full max-w-[140px] py-2 px-4 rounded-lg bg-blue-600 hover:bg-slate-950 text-white text-xs font-bold tracking-wide shadow-md shadow-blue-600/20 hover:shadow-none flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer"
>
  <span>Request Service</span>
  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



//ansh Bhalothia