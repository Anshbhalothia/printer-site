'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';// Assuming Footer is exported from here
import { PhoneCall, CheckCircle2 } from 'lucide-react';
import { Newsletter } from '@/components/Newsletter';

export default function BookAppointment() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      {/* --- HERO BANNER --- */}
      <section className="relative w-full bg-slate-950 flex flex-col lg:flex-row min-h-[420px] overflow-hidden">
        {/* Left Dark Section */}
        <div className="relative z-20 w-full lg:w-1/2 px-6 lg:px-16 py-16 flex flex-col justify-center">
          
          {/* Partner Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-600 rounded-md px-3 py-1.5 w-max mb-6 shadow-md">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center p-0.5">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" 
                alt="HP" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-white font-bold text-xs tracking-wide">Partner</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            On-site Printer Repair and Setup
          </h1>

          <div className="mb-6">
            <p className="text-slate-400 text-sm mb-2">Call Us:</p>
            <a 
              href="tel:+18773230888" 
              className="inline-flex items-center gap-3 border border-slate-600 rounded-md px-5 py-3 hover:bg-slate-800 transition"
            >
              <PhoneCall className="w-5 h-5 text-white" />
              <span className="text-xl font-bold text-white tracking-wide">+1 (877)-323-0888</span>
            </a>
          </div>

          <div className="space-y-1.5 text-slate-300 text-sm">
            <p>Fast, reliable printer solutions at your</p>
            <p>doorstep for home and business users.</p>
            <p className="font-semibold text-white mt-2">100% professional service</p>
            <p>• No hidden charges • Doorstep service</p>
          </div>
        </div>

        {/* Right Image Section with Diagonal Split */}
        <div className="relative w-full lg:w-1/2 h-[300px] lg:h-auto">
          {/* The angled dark overlay to create the diagonal cut effect */}
          <div 
            className="hidden lg:block absolute top-0 bottom-0 left-0 w-32 bg-slate-950 z-10" 
            style={{ clipPath: 'polygon(0 0, 100% 0, 0% 100%, 0% 100%)' }} 
          />
          <div 
            className="hidden lg:block absolute top-0 bottom-0 left-8 w-40 bg-slate-950/40 z-10" 
            style={{ clipPath: 'polygon(100% 0, 100% 0, 0% 100%, 0 0)' }} 
          />
          
          <img 
            src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=1200&q=80" 
            alt="Office Printer" 
            className="w-full h-full object-cover object-left"
          />
        </div>
      </section>

      {/* --- TWO-PARTITION CONTENT AREA --- */}
      <section className="flex-1 py-16 bg-slate-100/50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* First Partition: User Details Form */}
          <div className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name" 
                  className="w-full px-4 py-2.5 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-400"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-2.5 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-400"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  className="w-full px-4 py-2.5 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-400"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Printer Model Number</label>
                <input 
                  type="text" 
                  placeholder="e.g. HP LaserJet Pro M404dn" 
                  className="w-full px-4 py-2.5 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-400"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#0077b6] hover:bg-[#023e8a] text-white font-bold py-3 rounded-md text-sm transition-colors mt-2 shadow-md shadow-blue-900/10"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Second Partition: Contextual Visual */}
          <div className="w-full flex items-center justify-center lg:justify-start lg:mt-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white max-w-lg w-full">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJjk6KobMp9UxDnfqUQwwL4jvVNGGtvPGoB1gzqohNcg&s=10" 
                alt="Technician repairing printer"
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10" />
            </div>
          </div>

        </div>
      </section>

      {/* --- NEWSLETTER --- */}
      <Newsletter/>

      <Footer />
    </main>
  );
}