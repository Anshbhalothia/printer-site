import React from 'react';
import { Mail, Printer } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white">
            <Printer className="w-5 h-5 text-cyan-400" />
            <span className="font-bold tracking-tight text-sm">PRINTOVER SOLUTIONS</span>
          </div>
          <p className="leading-relaxed">Full-spectrum onsite printing infrastructure support for modern enterprises.</p>
        </div>

        <div>
          <p className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Quick Links</p>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-cyan-400 transition">Emergency Dispatch</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Fleet Maintenance</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Parts Replacement</a></li>
          </ul>
        </div>

        <div>
          <p className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Company</p>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-cyan-400 transition">About Technicians</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Service Warranty</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <p className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Support Center</p>
          <p className="text-slate-300 font-medium">support@printoversolutions.com</p>
          <p className="mt-1">+1 (800) 555-0199</p>
          <p className="mt-1">Mon - Sat: 8:00 AM – 7:00 PM EST</p>
        </div>
      </div>
    </footer>
  );
}