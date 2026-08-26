'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    step: "1",
    title: "Log an Issue",
    desc: "Briefly describe your hardware problem via our portal or hotline.",
  },
  {
    step: "2",
    title: "Select Timeslot",
    desc: "Pick a convenient dispatch window that aligns with your workday.",
  },
  {
    step: "3",
    title: "Expert Dispatch",
    desc: "A certified engineer arrives fully equipped with genuine parts.",
  },
  {
    step: "4",
    title: "Quality Sign-off",
    desc: "We run a full calibration test to ensure seamless printing.",
  },
];

export default function Workflow() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Simple & Clean Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black text-slate-900">
            How Our Onsite Printer Service Works
          </h2>
          <p className="text-slate-600 text-sm mt-2 font-medium">
            We make onsite printer service straightforward and convenient. Here is how it works:
          </p>
        </div>

        {/* 4 Light Grey Cards Layout with Pop Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div 
              key={idx} 
              className="bg-slate-200 rounded-2xl p-6 text-left shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer"
            >
              {/* Big Step Circle Badge */}
              <div className="w-16 h-16 rounded-full bg-blue-600 flex flex-col items-center justify-center text-white mb-6 shadow-lg shadow-blue-600/20 mx-auto lg:mx-0">
                <span className="text-[9px] uppercase tracking-widest font-bold">Step</span>
                <span className="text-2xl font-black leading-none mt-0.5">{s.step}</span>
              </div>

              {/* Title with Small Arrow Arrow */}
              <div className="flex items-center gap-2 mb-2 justify-center lg:justify-start">
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
                <h4 className="font-bold text-blue-900 text-[15px]">{s.title}</h4>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 pl-0 lg:pl-7 text-center lg:text-left leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


// app.post("/login",(req,res)=>{
//   consil.log(req.body.name);
//   res.json({
//     message:"hello",
//     name:req.body.name,
//     status:200
//   });

// })