'use client';
import React from 'react';
import { Mail, Printer } from 'lucide-react';


export function Newsletter() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-950 text-white py-16">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
        <h2 className="text-3xl font-black tracking-tight">Reduce Downtime, Stay Informed</h2>
        <p className="text-blue-100 text-sm max-w-xl mx-auto">
          Subscribe for quarterly printer maintenance tips, hardware lifecycle alerts, and exclusive corporate discount packages.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
          <input
            type="email"
            placeholder="Enter corporate email..."
            className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm backdrop-blur"
            required
          />
          <button type="submit" className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition">
            Subscribe
          </button>
        </form>
        <p className="text-xs text-blue-200/60 pt-2">Zero spam. Unsubscribe with 1-click anytime.</p>
      </div>
    </section>
  );
}