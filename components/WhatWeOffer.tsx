import React from 'react';
import { CheckCircle2, Award, Clock, FileText, UserCheck } from 'lucide-react';

export function WhatWeOffer() {
  return (
    <section className="py-20 bg-indigo-50/50 border-y border-indigo-100">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block border-l-4 border-indigo-600 pl-3">
            <h2 className="text-3xl font-extrabold text-slate-900">What We Offer</h2>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            We deliver complete lifecycle services for laser, inkjet, multifunction, and wide-format commercial plotting units. Our primary goal is to resolve technical roadblocks rapidly without disrupting office productivity.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            From clearing stubborn fuser jams to configuring enterprise print servers, our engineers arrive with OEM diagnostics tools to verify hardware integrity on the spot.
          </p>
          <div className="pt-2">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-600/20 transition">
              Discover Corporate Service Plans
            </button>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
            alt="Office staff receiving technical printer consultation"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}