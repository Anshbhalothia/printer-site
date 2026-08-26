'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PhoneCall, Mail, MapPin, Clock, Send, ShieldCheck, Printer } from 'lucide-react';

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      {/* --- HERO BANNER --- */}
      <section className="relative w-full bg-slate-950 py-16 px-6 overflow-hidden border-b border-slate-800">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Printer className="w-3.5 h-3.5" /> 24/7 Enterprise Support
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Get in Touch with Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Technical Team
            </span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Have questions about onsite dispatch, hardware repair, or corporate fleet maintenance? We're here to assist your office operations.
          </p>
        </div>
      </section>

      {/* --- QUICK CONTACT INFO STRIP --- */}
      <section className="max-w-6xl mx-auto px-6 -mt-8 relative z-20 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: PhoneCall,
              title: "Toll-Free Hotline",
              val: "+1 (877) 323-0888",
              sub: "Mon - Sat: 8:00 AM – 7:00 PM EST",
              href: "tel:+18773230888",
            },
            {
              icon: Mail,
              title: "Email Dispatch",
              val: "contact@usofficesolutions.com",
              sub: "Response within 2 hours",
              href: "mailto:contact@usofficesolutions.com",
            },
            {
              icon: MapPin,
              title: "Corporate HQ",
              val: "2383 W 77TH ST",
              sub: "HIALEAH, FL 33016",
              href: "#",
            },
            {
              icon: Clock,
              title: "Rapid Dispatch SLA",
              val: "< 120 Minutes",
              sub: "Emergency on-site units",
              href: "/book-appointment",
            },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-lg hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">{item.title}</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5 truncate">{item.val}</p>
                <p className="text-[11px] text-slate-400 mt-1">{item.sub}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* --- TWO-PARTITION CONTACT FORM & DETAILS --- */}
      <section className="py-16 px-6 flex-1">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Partition: Interactive Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Direct Inquiry</h2>
            <p className="text-slate-500 text-xs sm:text-sm mb-8">
              Fill in the details below and a certified hardware specialist will reach out shortly.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition placeholder:text-slate-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2.5 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition placeholder:text-slate-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Work Email Address</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full px-4 py-2.5 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition placeholder:text-slate-400"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Inquiry Type</label>
                <select className="w-full px-4 py-2.5 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition text-slate-700 bg-white">
                  <option value="repair">Emergency Hardware Repair</option>
                  <option value="setup">New Machine Setup & Driver Config</option>
                  <option value="maintenance">Preventive Maintenance Contract</option>
                  <option value="fleet">Managed Print Fleet Query</option>
                  <option value="other">Other Technical Question</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Printer Model & Error Details</label>
                <textarea
                  rows={4}
                  placeholder="Describe your printer model, error code, or specific service request..."
                  className="w-full px-4 py-2.5 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition placeholder:text-slate-400 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md text-sm transition-all shadow-md shadow-blue-600/20 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          </div>

          {/* Right Partition: Support Overview & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 space-y-5 shadow-xl">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" /> Direct Service Assurance
              </div>
              <h3 className="text-xl font-bold">Why Contact US Office Solutions?</h3>
              
              <ul className="space-y-3.5 text-xs text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span><strong>OEM Genuine Components:</strong> All replacement roller kits, printheads, and fuser assemblies are manufacturer-certified.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span><strong>30-Day Labor Warranty:</strong> Full guarantee on all onsite mechanical repairs and driver calibrations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span><strong>Zero Hidden Surcharges:</strong> Transparent flat-rate estimates upfront prior to work dispatch.</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-slate-400">Average Callback Time</p>
                  <p className="text-sm font-bold text-cyan-400">&lt; 15 Minutes</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-slate-400">Customer Rating</p>
                  <p className="text-sm font-bold text-amber-400">★ 4.9 / 5.0</p>
                </div>
              </div>
            </div>

            {/* Contextual Visual Card */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Customer Support Representative"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}