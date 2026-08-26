import React from 'react';
import {
  Calendar,
  Wrench,
  Package,
  MapPin,
  Mail,
  Phone,
  Globe,
} from 'lucide-react';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';

const highlights = [
  {
    icon: Calendar,
    title: 'Cancel Free',
    desc: '24+ hours before your appointment — no charge, no questions.',
  },
  {
    icon: Wrench,
    title: '90-Day Parts Warranty',
    desc: 'Every part we install is covered for 90 days after service.',
  },
  {
    icon: Package,
    title: 'Returns Within 30 Days',
    desc: 'Unopened supplies can be returned within 30 days of purchase.',
  },
];

export default function RefundPolicy() {
  return (
    <div>
    <main className="bg-white">
        <Navbar/>
      {/* ================= HEADER BAND ================= */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-950 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-blue-100 text-sm mt-4 max-w-xl mx-auto">
            The plain-language version of how cancellations, refunds, and returns work with
            Printover Solutions.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-14">
        <p className="text-sm text-slate-500">
          Effective Date: <span className="font-semibold text-slate-700">August 1, 2026</span>
        </p>

        {/* ================= HIGHLIGHT CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="border-t-4 border-blue-600 bg-white rounded-b-xl border border-slate-200 border-t-4 p-6 text-center shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-3">
                <h.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">{h.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* ================= 1. SERVICE CANCELLATION ================= */}
        <section className="mt-14">
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-black text-blue-600">1.</span>
            <h2 className="text-2xl font-extrabold text-slate-900">Service Cancellation Policy</h2>
          </div>
          <hr className="mt-3 border-slate-200" />
          <p className="text-sm text-slate-600 leading-relaxed mt-5">
            We know schedules shift. Our cancellation terms are built to stay fair on both
            sides — your plans change, and our technicians plan their whole day around the
            appointments on the board.
          </p>

          <div className="mt-6 overflow-hidden rounded-lg border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wide">
                    Cancellation Timing
                  </th>
                  <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wide">Fee</th>
                  <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wide">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 text-slate-700">24+ hours before appointment</td>
                  <td className="px-4 py-3 font-semibold text-cyan-600">No Charge</td>
                  <td className="px-4 py-3 text-slate-500">Full cancellation, no cost to you</td>
                </tr>
                <tr className="bg-slate-50/60">
                  <td className="px-4 py-3 text-slate-700">Inside 24 hours</td>
                  <td className="px-4 py-3 font-semibold text-slate-700">Small dispatch fee</td>
                  <td className="px-4 py-3 text-slate-500">A technician was already routed to you</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">Emergency cancellation</td>
                  <td className="px-4 py-3 font-semibold text-cyan-600">Case-by-case</td>
                  <td className="px-4 py-3 text-slate-500">Contact us right away — we'll work with you</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg px-5 py-4">
            <p className="text-sm text-slate-700">
              To cancel or reschedule, call us at{' '}
              <span className="font-bold">+1 (800) 555-0199</span> or email{' '}
              <span className="font-bold">support@printoversolutions.com</span> as early as
              you can.
            </p>
          </div>
        </section>

        {/* ================= 2. REFUNDS FOR SERVICES ================= */}
        <section className="mt-14">
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-black text-blue-600">2.</span>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Refund Policy for Services Rendered
            </h2>
          </div>
          <hr className="mt-3 border-slate-200" />
          <p className="text-sm text-slate-600 leading-relaxed mt-5">
            We want the work to hold up. If a completed service doesn\u2019t sit right with you,
            reach out within <span className="font-semibold text-slate-900">7 business days</span>{' '}
            of the service date and we\u2019ll sort it out.
          </p>

          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            <li className="flex gap-2">
              <span className="text-blue-600 mt-1.5">&bull;</span>
              <span>
                <span className="font-bold text-slate-900">Workmanship issues:</span> if the same
                problem returns within 30 days of service, we come back to re-diagnose and
                re-service at no additional labor charge — parts are billed separately.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 mt-1.5">&bull;</span>
              <span>
                <span className="font-bold text-slate-900">Service not completed:</span> if our
                technician can\u2019t finish the job through no fault of yours, you get a full
                refund or credit for that visit.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 mt-1.5">&bull;</span>
              <span>
                <span className="font-bold text-slate-900">Diagnostic fees:</span> generally
                non-refundable, but they\u2019re applied as credit toward the repair cost if you go
                ahead with the recommended service.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 mt-1.5">&bull;</span>
              <span>
                <span className="font-bold text-slate-900">Completed &amp; accepted services:</span>{' '}
                these aren\u2019t refunded once signed off, unless there\u2019s a documented error on
                our end.
              </span>
            </li>
          </ul>
        </section>

        {/* ================= 3. REFUNDS FOR PRODUCTS ================= */}
        <section className="mt-14">
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-black text-blue-600">3.</span>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Refund Policy for Products &amp; Supplies
            </h2>
          </div>
          <hr className="mt-3 border-slate-200" />
          <p className="text-sm text-slate-600 leading-relaxed mt-5">
            For consumables — toner cartridges, ink, paper, drums, and maintenance kits —
            here\u2019s how returns work:
          </p>

          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            <li className="flex gap-2">
              <span className="text-blue-600 mt-1.5">&bull;</span>
              <span>
                <span className="font-bold text-slate-900">Unopened, unused items:</span> returned
                within 30 days of purchase with original packaging and receipt get a full refund.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 mt-1.5">&bull;</span>
              <span>
                <span className="font-bold text-slate-900">Opened or installed items:</span>{' '}
                non-refundable unless the item was defective when it arrived.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 mt-1.5">&bull;</span>
              <span>
                <span className="font-bold text-slate-900">Defective products:</span> replaced or
                refunded at our discretion within 90 days of purchase.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 mt-1.5">&bull;</span>
              <span>
                <span className="font-bold text-slate-900">Special-order items:</span> parts
                ordered specifically for your equipment are non-refundable unless defective.
              </span>
            </li>
          </ul>

          <p className="text-sm text-slate-600 leading-relaxed mt-5">
            Return shipping on eligible product returns is on the customer, unless the return
            is because of our error or a defective product.
          </p>
        </section>

        {/* ================= 4. SERVICE CONTRACTS ================= */}
        <section className="mt-14">
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-black text-blue-600">4.</span>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Service Contract &amp; Managed Print Agreements
            </h2>
          </div>
          <hr className="mt-3 border-slate-200" />
          <p className="text-sm text-slate-600 leading-relaxed mt-5">
            For customers on a standing service contract or managed print program:
          </p>

          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            <li className="flex gap-2">
              <span className="text-blue-600 mt-1.5">&bull;</span>
              <span>Contract terms and cancellation provisions are outlined in your individual Service Agreement.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 mt-1.5">&bull;</span>
              <span>Most contracts require 30 days\u2019 written notice to cancel.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 mt-1.5">&bull;</span>
              <span>Early termination fees may apply as specified in your agreement.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 mt-1.5">&bull;</span>
              <span>Prepaid amounts for unused service periods are refunded on a pro-rated basis.</span>
            </li>
          </ul>
        </section>

        {/* ================= 5. HOW TO REQUEST ================= */}
        <section className="mt-14">
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-black text-blue-600">5.</span>
            <h2 className="text-2xl font-extrabold text-slate-900">
              How to Request a Refund or Report an Issue
            </h2>
          </div>
          <hr className="mt-3 border-slate-200" />
          <p className="text-sm text-slate-600 leading-relaxed mt-5">
            To request a refund or flag a problem with a service or product:
          </p>

          <ol className="mt-5 space-y-3 text-sm text-slate-600 list-none">
            {[
              <>
                Contact us within <span className="font-semibold text-slate-900">7 business days</span> of the service date or product receipt
              </>,
              <>Give us your name, service date, invoice number, and a short description of the issue</>,
              <>Our team responds within <span className="font-semibold text-slate-900">2 business days</span></>,
              <>Approved refunds are processed within <span className="font-semibold text-slate-900">5\u201310 business days</span> back to your original payment method</>,
            ].map((text, i) => (
              <li key={i} className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="pt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* ================= CONTACT BOX ================= */}
        <div className="mt-16 bg-slate-950 rounded-2xl p-8 sm:p-10">
          <h3 className="text-xl font-black text-cyan-400">Contact Us for Refund Inquiries</h3>
          <p className="text-white font-bold text-sm mt-4">Printover Solutions</p>
          <div className="mt-3 space-y-2 text-sm text-slate-300">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              2383 W 77th St, Hialeah, FL 33016
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <a href="mailto:support@printoversolutions.com" className="hover:text-cyan-400 transition">
                support@printoversolutions.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              <a href="tel:+18005550199" className="hover:text-cyan-400 transition">
                +1 (800) 555-0199
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
              <a href="#" className="hover:text-cyan-400 transition">
                www.printoversolutions.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
    </div>
  );
}