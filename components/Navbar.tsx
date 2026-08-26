import React from 'react';
import { Printer, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Printer className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-xl font-black tracking-tight text-white block leading-none">PRINTOVER</span>
            <span className="text-[10px] tracking-widest text-cyan-400 font-semibold uppercase">Enterprise Care</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a href="tel:+18005550199" className="hidden sm:flex items-center gap-2 text-slate-300 hover:text-white transition">
            <PhoneCall className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold text-sm">+1 (800) 555-0199</span>
          </a>
          <Link
  href="/book-appointment"
  className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm px-5 py-2.5 rounded-full shadow-lg shadow-cyan-500/25 transition cursor-pointer"
>
  Book Tech
</Link>
        </div>
      </div>
    </header>
  );
}