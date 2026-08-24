import React from 'react';
import { Wrench, Settings, ShieldCheck, Wifi, Briefcase, HelpCircle } from 'lucide-react';

const categories = [
  { icon: Wrench, title: "Mechanical & Hardware Repair", desc: "Paper jams, roller wear, sensor replacements, and laser scanner realignment." },
  { icon: Settings, title: "Setup & Initial Configuration", desc: "Out-of-the-box driver deployment, calibration, and secure terminal registration." },
  { icon: ShieldCheck, title: "Preventive Care Plans", desc: "Scheduled deep cleanings, drum checkups, and thermal cycle optimization." },
  { icon: Wifi, title: "Network & Cloud Integration", desc: "Secure Wi-Fi setup, AirPrint, static IP configuration, and VPN print routing." },
  { icon: Briefcase, title: "Managed Fleet Solutions", desc: "Automated ink replenishment contracts and centralized office server management." },
  { icon: HelpCircle, title: "Diagnostic Assessment", desc: "In-depth error code resolution, print quality inspections, and cost-to-repair reports." },
];

export default function Categories() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Explore by Service Category
        </h2>
        <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
          Tailored troubleshooting and scheduled maintenance across commercial and residential print hardware.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {categories.map((c, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 hover:border-indigo-500 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition duration-300 mb-6">
                <c.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">{c.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{c.desc}</p>
              <button className="w-full bg-slate-900 group-hover:bg-indigo-600 text-white text-sm font-semibold py-3 rounded-xl transition">
                Request Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}