import React from 'react';
import { CheckCircle2, Award, Clock, FileText, UserCheck } from 'lucide-react';
import Link from 'next/link';
export function WhyChooseUs() {
  const reasons = [
    { icon: Clock, title: "Predictable Scheduling", desc: "Set exact dispatch appointments aligned with your office shift hours." },
    { icon: Award, title: "Multi-Brand Proficiency", desc: "Expert knowledge across Brother, Epson, HP, Lexmark, and Ricoh models." },
    { icon: FileText, title: "Transparent Work Reports", desc: "Itemized diagnostic explanations and transparent pricing before repair." },
    { icon: UserCheck, title: "Client-Centric Guarantee", desc: "All onsite repairs include a 30-day labor and components warranty." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block border-l-4 border-cyan-500 pl-3">
            <h2 className="text-3xl font-extrabold text-slate-900">Why Choose Us</h2>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            We provide dependable printer care designed to keep business operations flowing without administrative headache.
          </p>
          <div className="space-y-4">
            {reasons.map((r, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="p-2 bg-cyan-50 text-cyan-600 rounded-lg shrink-0 mt-1">
                  <r.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{r.title}</h4>
                  <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-2">
            <Link
  href="/book-appointment"
  className="inline-block bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3 rounded-xl transition cursor-pointer text-center"
>
  Book Urgent Service
</Link>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkTLJzC7s6dr7CQpR6Qm_DOWYGJ0NWHSiEuJhNJG4XFg&s=10"
            alt="Hardware diagnostic technician working on internal printer parts"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}