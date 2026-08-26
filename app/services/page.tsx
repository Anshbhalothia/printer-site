'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Wrench,
  ArrowDownToLine,
  Settings2,
  Wifi,
  Package,
  ClipboardList,
  BarChart3,
  ShieldCheck,
  Zap,
  MapPin,
  BadgeCheck,
  HandCoins,
  Award,
  CalendarClock,
  PhoneCall,
  Plus,
  Minus,
  ArrowUpRight,
  Flame,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const services = [
  {
    icon: Wrench,
    title: 'Breakdown & Repair',
    desc: 'Paper jams, print-quality faults, error codes, and mechanical failures — our technicians carry OEM diagnostic tools to identify the real cause first. Most units are diagnosed, repaired, and test-printed in a single visit, with the part swapped from stock on the van whenever possible.',
  },
  {
    icon: ArrowDownToLine,
    title: 'New Setup & Deployment',
    desc: 'From unboxing to a verified first print, we handle physical assembly, driver installation, and user configuration on-site. Your team gets a walkthrough of the machine before we leave, so the very first job printed is a clean one — not a support ticket.',
  },
  {
    icon: Settings2,
    title: 'Preventive Maintenance',
    desc: 'Scheduled deep cleanings, roller and part inspections, and firmware updates catch wear long before it turns into a breakdown. Visits are logged so we can track a machine\u2019s condition over time and flag parts approaching end of life.',
  },
  {
    icon: Wifi,
    title: 'Network & Connectivity',
    desc: 'Wired or wireless setup, static IP assignment, and print-server configuration across every device that needs to reach the machine. We test from multiple workstations before signing off, so nobody\u2019s stuck re-adding a printer next week.',
  },
  {
    icon: Package,
    title: 'Supplies & Consumables',
    desc: 'Genuine toner, ink cartridges, drums, and maintenance kits sourced through authorized channels — never grey-market parts that void a warranty. Stock is delivered and swapped during your regular service visit, so nothing runs out mid-print.',
  },
  {
    icon: ClipboardList,
    title: 'Managed Print Programs',
    desc: 'A standing contract that bundles routine maintenance, supply management, and priority response into one flat monthly rate. Built for offices running more than a couple of machines that want predictable costs instead of surprise invoices.',
  },
  {
    icon: BarChart3,
    title: 'Fleet Audits',
    desc: 'A full walkthrough of every printer on your floor to flag underused, overworked, or outdated units. We hand back a plain-language report on what to retire, what to consolidate, and what\u2019s actually costing you money each month.',
  },
  {
    icon: ShieldCheck,
    title: 'Warranty Coordination',
    desc: 'In-warranty or post-warranty, we deal directly with the manufacturer on your behalf — filing claims, tracking replacement parts, and scheduling the covered repair. You get one point of contact instead of a support queue.',
  },
];

const steps = [
  {
    code: 'WO-01',
    title: 'Tell Us What\u2019s Wrong',
    desc: 'Call, message, or fill out our short intake form with your location and issue.',
  },
  {
    code: 'WO-02',
    title: 'Get A Straight Quote',
    desc: 'A written estimate lands before anyone touches your machine. No surprise lines.',
  },
  {
    code: 'WO-03',
    title: 'We Show Up',
    desc: 'A certified tech arrives in your window, stocked with genuine parts.',
  },
  {
    code: 'WO-04',
    title: 'We Test, Then Sign Off',
    desc: 'Full calibration check before we leave — a verified test print, not a glance.',
  },
];

const stats = [
  { icon: Zap, big: 'Same-Day', label: 'Dispatch on most requests placed before noon' },
  { icon: MapPin, big: '100%', label: 'On-site — no drop-off, no shipping, ever' },
  { icon: BadgeCheck, big: '90-Day', label: 'Workmanship warranty on labor and parts' },
  { icon: HandCoins, big: '$0', label: 'Hidden fees — the quote is the price' },
  { icon: Award, big: '6+', label: 'Brands certified: HP, Brother, Epson, Ricoh & more' },
  { icon: CalendarClock, big: 'Flexible', label: 'One-time fix or standing monthly contract' },
];

const faqs = [
  {
    q: 'Which areas do you cover?',
    a: 'We dispatch across the metro service area and surrounding counties. Share your location and we\u2019ll confirm coverage before you book anything.',
  },
  {
    q: 'How fast can someone get here?',
    a: 'Same-day and next-day windows are available for most locations, depending on your address and how full the day\u2019s schedule already is.',
  },
  {
    q: 'Do you work on every printer brand?',
    a: 'Laser, inkjet, multifunction, and wide-format — HP, Brother, Epson, Lexmark, Canon, and Ricoh are all in scope.',
  },
  {
    q: 'What\u2019s your cancellation policy?',
    a: 'Cancel more than 24 hours out and there\u2019s no charge. Inside that window may carry a small dispatch fee since a tech was already routed.',
  },
  {
    q: 'Can we set up an ongoing plan?',
    a: 'Yes — managed print programs bundle maintenance, supply management, and priority response into one flat monthly rate.',
  },
  {
    q: 'Is the repair itself guaranteed?',
    a: 'Every repair carries a 90-day workmanship warranty on labor and installed parts. Same cause fails again, we return free.',
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
     <div>
    <main className="bg-white">
        <Navbar/>
      {/* ================= HERO — full poster ================= */}
      <section className="relative min-h-[460px] sm:min-h-[520px] flex items-end bg-slate-950 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url('https://picsum.photos/id/60/1800/1000')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_55%)]" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-14 pt-24">
          <div className="inline-flex items-center gap-2 bg-cyan-400 text-slate-950 text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
            <Flame className="w-3.5 h-3.5" />
            24-Hour Emergency Dispatch
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[0.95] max-w-3xl">
            Printer down?
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              We fix it on site.
            </span>
          </h1>
          <p className="mt-6 text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
            One machine or a hundred-unit fleet — our certified techs handle installs,
            maintenance, and repair without you ever unplugging a cable and shipping a box.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-4 rounded-md shadow-lg shadow-blue-600/40 transition-all hover:scale-[1.02]"
            >
              Get A Free Quote
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+18005550199"
              className="inline-flex items-center gap-2 text-white border border-white/25 hover:border-cyan-400 text-xs sm:text-sm uppercase tracking-wider font-semibold px-6 py-4 rounded-md backdrop-blur-sm transition"
            >
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              +1 (800) 555-0199
            </a>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO — bento grid ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
                What We Do
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Every service, <span className="text-blue-600">under one dispatch.</span>
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-xs">
              Pick a lane below or tell us the symptom — we\u2019ll route the right technician.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div
                key={i}
                className="group relative rounded-2xl p-6 bg-white border border-slate-200 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.12)] hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shrink-0 bg-blue-600 text-white transition-all duration-300 group-hover:rotate-2 group-hover:scale-105">
                  <s.icon className="w-6 h-6 stroke-[2.1]" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS — work-order tickets ================= */}
      <section className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
              The Process
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Your job, tracked like a <span className="text-blue-600">work order.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-xl border-2 border-dashed border-slate-300 p-6 pt-8"
              >
                {/* ticket punch notches */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-100 border-2 border-dashed border-slate-300" />
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-100 border-2 border-dashed border-slate-300" />

                <span className="text-[11px] font-mono font-bold tracking-widest text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded">
                  {s.code}
                </span>
                <h4 className="font-black text-slate-900 text-lg mt-4 mb-2">{s.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US — dark stat block ================= */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.18),transparent_55%)]" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase">
              By The Numbers
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-white tracking-tight">
              Why offices <span className="text-cyan-400">keep calling us back.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800 rounded-2xl overflow-hidden border border-slate-800">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-slate-950 p-8 hover:bg-slate-900 transition-colors duration-300"
              >
                <s.icon className="w-6 h-6 text-cyan-400 mb-4" />
                <p className="text-3xl font-black text-white tracking-tight">{s.big}</p>
                <p className="text-slate-400 text-xs leading-relaxed mt-2 max-w-[220px]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
              Common Questions
            </span>
            <h2 className="mt-2 text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`rounded-xl border transition-colors duration-200 overflow-hidden ${
                    isOpen ? 'border-blue-500 bg-blue-50/40' : 'border-slate-200 bg-white'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 px-5 py-4 text-left cursor-pointer"
                  >
                    <span
                      className={`shrink-0 text-[10px] font-mono font-bold px-2 py-1 rounded ${
                        isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      Q{String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 font-bold text-slate-900 text-sm">{f.q}</span>
                    <span className="shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-5 pb-4 pl-16 text-sm text-slate-500 leading-relaxed">{f.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA — poster banner ================= */}
      <section className="relative bg-slate-950 py-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('https://picsum.photos/id/180/1800/600')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
        <div className="relative max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Stop waiting on a broken printer.
            </h3>
            <p className="text-slate-300 text-sm mt-2 max-w-md">
              Request a quote now — most requests get a same-day response.
            </p>
          </div>
          <Link
            href="/book-appointment"
            className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-sm uppercase tracking-wider px-8 py-4 rounded-md shadow-lg shadow-cyan-400/25 transition-all hover:scale-[1.02] shrink-0"
          >
            Request A Quote
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
    <Footer/>
</div>
  );
}