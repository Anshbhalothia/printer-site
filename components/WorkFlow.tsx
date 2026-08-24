import React from 'react';

const steps = [
  { step: "01", title: "Submit Ticket", desc: "Specify your printer make, error codes, and site location." },
  { step: "02", title: "Select Timeslot", desc: "Pick a convenient same-day or next-day diagnostic window." },
  { step: "03", title: "Onsite Repair", desc: "Our field engineer arrives equipped with genuine spare parts." },
  { step: "04", title: "Final QA Check", desc: "Full test page run, alignment check, and instant digital sign-off." },
];

export default function Workflow() {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          How Our Onsite Service Operates
        </h2>
        <p className="text-slate-600 mt-2">Engineered to eliminate workplace downtime in 4 simple stages.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {steps.map((s, idx) => (
            <div key={idx} className="relative bg-slate-50 border border-slate-200 p-8 rounded-2xl text-left hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white font-extrabold flex items-center justify-center text-lg mb-6 shadow-md shadow-indigo-500/20">
                {s.step}
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-2">{s.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
