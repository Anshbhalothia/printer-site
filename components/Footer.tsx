'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Printer } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand & Authorized Badge Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <Printer className="w-5 h-5 text-cyan-400" />
            <span className="font-bold tracking-tight text-sm">PRINTOVER SOLUTIONS</span>
          </div>
          <p className="leading-relaxed">
            Full-spectrum onsite printing infrastructure support for modern enterprises.
          </p>
          
          {/* HP Authorized Partner Badge */}
          <div className="pt-4 mt-2 border-t border-slate-800/80">
            <div className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity cursor-default">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1.5 shadow-lg">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" 
                  alt="HP Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="text-white font-bold text-[11px] uppercase tracking-wider">
                  Authorized
                </p>
                <p className="text-[10px] text-cyan-400 font-semibold tracking-wide">
                  Service Partner
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Quick Links</p>
          <ul className="space-y-2">
            <li><Link href="/refund-policy" className="hover:text-cyan-400 transition">Refund &amp; Cancellation Policy</Link></li>
            <li><Link href="/termsandconditions" className="hover:text-cyan-400 transition">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Company</p>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-cyan-400 transition">Home</Link></li>
            <li><Link href="/book-appointment" className="hover:text-cyan-400 transition">Book an Appointment</Link></li>
            <li><Link href="/contact-us" className="hover:text-cyan-400 transition">Contact Us</Link></li>
            <li><Link href="/services" className="hover:text-cyan-400 transition">Services</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <p className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Support Center</p>
          <p className="text-slate-300 font-medium">support@printoversolutions.com</p>
          <p className="mt-1">+1 (800) 555-0199</p>
          <p className="mt-1">Mon - Sat: 8:00 AM – 7:00 PM EST</p>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-14 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-slate-500 tracking-wide">
          &copy; 2026 usofficesolutions.com. All rights reserved.
        </p>
        
        {/* Optional small legal links */}
        <div className="flex items-center gap-6 text-[11px] text-slate-500">
          <Link href="/termsandconditions" className="hover:text-cyan-400 transition">Terms & Conditions</Link>
          <Link href="/refund-policy" className="hover:text-cyan-400 transition">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
}