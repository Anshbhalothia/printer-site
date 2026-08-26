import React from 'react';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';

const toc = [
  { id: 'acceptance', label: 'Acceptance of Terms' },
  { id: 'services', label: 'Description of Services' },
  { id: 'eligibility', label: 'Service Agreement & Eligibility' },
  { id: 'pricing', label: 'Pricing, Payment & Billing' },
  { id: 'scheduling', label: 'Service Scheduling & Access' },
  { id: 'cancellation', label: 'Cancellation & Rescheduling' },
  { id: 'warranty', label: 'Warranty & Liability Limitations' },
  { id: 'ip', label: 'Intellectual Property' },
  { id: 'conduct', label: 'User Conduct' },
  { id: 'indemnification', label: 'Indemnification' },
  { id: 'governing-law', label: 'Governing Law & Disputes' },
  { id: 'changes', label: 'Changes to Terms' },
  { id: 'contact', label: 'Contact Information' },
];

function SectionHeading({ num, title }: { num: number; title: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="text-2xl font-black text-blue-600">{num}.</span>
      <h2 className="text-2xl font-extrabold text-slate-900">{title}</h2>
    </div>
  );
}

export default function TermsAndConditions() {
  return (
    <main className="bg-white">
      {/* ================= HEADER BAND ================= */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-950 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-blue-100 text-sm mt-4 max-w-xl mx-auto">
            The rules that govern how you use our website and book service with Printover
            Solutions.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-14">
        <p className="text-sm text-slate-500">
          Effective Date: <span className="font-semibold text-slate-700">August 1, 2026</span>
        </p>

        {/* ================= TABLE OF CONTENTS ================= */}
        <div className="mt-6 border-l-4 border-blue-600 bg-white border border-slate-200 rounded-r-xl rounded-l-none p-6 sm:p-8">
          <p className="font-bold text-slate-900 text-sm mb-4">Table of Contents</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm list-decimal list-inside">
            {toc.map((t) => (
              <li key={t.id} className="text-slate-600">
                <a href={`#${t.id}`} className="text-blue-600 hover:text-cyan-600 hover:underline transition">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* ================= INTRO CALLOUT ================= */}
        <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg px-5 py-4">
          <p className="text-sm text-slate-700">
            These Terms and Conditions ("Terms") govern your use of the website{' '}
            <span className="font-bold">printoversolutions.com</span> and all services offered by{' '}
            <span className="font-bold">Printover Solutions</span> ("Company," "we," "us," or
            "our"). By accessing our website or engaging our services, you agree to be bound by
            these Terms.
          </p>
        </div>

        {/* ================= 1. ACCEPTANCE ================= */}
        <section id="acceptance" className="mt-14 scroll-mt-24">
          <SectionHeading num={1} title="Acceptance of Terms" />
          <hr className="mt-3 border-slate-200" />
          <p className="text-sm text-slate-600 leading-relaxed mt-5">
            By accessing or using our website, requesting a quote, placing a service order, or
            otherwise engaging with Printover Solutions, you agree to comply with and be bound
            by these Terms and our Privacy Policy. If you do not agree to these Terms, you must
            not use our website or services.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            These Terms apply to all visitors, customers, and any other persons who access or
            use our website or services.
          </p>
        </section>

        {/* ================= 2. DESCRIPTION OF SERVICES ================= */}
        <section id="services" className="mt-14 scroll-mt-24">
          <SectionHeading num={2} title="Description of Services" />
          <hr className="mt-3 border-slate-200" />
          <p className="text-sm text-slate-600 leading-relaxed mt-5">
            Printover Solutions provides onsite printer services for homes and businesses,
            including but not limited to:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {[
              'Printer installation, configuration, and setup',
              'Preventive maintenance and cleaning services',
              'Printer repair and troubleshooting',
              'Supply of printer consumables (toner, ink, drums, paper)',
              'Network printer setup and connectivity',
              'Managed print services and service contracts',
              'Equipment leasing and procurement assistance',
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-blue-600 mt-1.5">&bull;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            We reserve the right to modify, suspend, or discontinue any service at any time,
            with reasonable notice where practical.
          </p>
        </section>

        {/* ================= 3. ELIGIBILITY ================= */}
        <section id="eligibility" className="mt-14 scroll-mt-24">
          <SectionHeading num={3} title="Service Agreement & Eligibility" />
          <hr className="mt-3 border-slate-200" />
          <p className="text-sm text-slate-600 leading-relaxed mt-5">
            To request or receive services, you must be at least 18 years old and have the
            authority to enter into a binding agreement on behalf of yourself or your
            organization.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            By placing a service order, you represent and warrant that:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {[
              'All information you provide is accurate, current, and complete',
              'You have the legal right and authority to authorize service on the equipment presented',
              'You will provide a safe working environment for our technicians',
              'You will ensure proper access to equipment and facilities at the agreed service time',
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-blue-600 mt-1.5">&bull;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ================= 4. PRICING ================= */}
        <section id="pricing" className="mt-14 scroll-mt-24">
          <SectionHeading num={4} title="Pricing, Payment & Billing" />
          <hr className="mt-3 border-slate-200" />
          <p className="text-sm text-slate-600 leading-relaxed mt-5">
            All prices are quoted in U.S. Dollars (USD) and are subject to change without
            notice. A written quote is provided before service begins and represents the
            agreed price for the described scope of work.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {[
              'Payment is due upon completion of service unless otherwise agreed in writing',
              'Late payments may be subject to a 1.5% monthly finance charge',
              'Parts and consumables are billed separately unless included in a service package',
              'Service calls outside our standard coverage area may incur additional fees',
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-blue-600 mt-1.5">&bull;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg px-5 py-4">
            <p className="text-sm text-slate-700">
              <span className="font-bold">Note:</span> a diagnostic or inspection fee may apply
              for service calls where no fault is found, or where the customer declines the
              recommended repair.
            </p>
          </div>
        </section>

        {/* ================= 5. SCHEDULING ================= */}
        <section id="scheduling" className="mt-14 scroll-mt-24">
          <SectionHeading num={5} title="Service Scheduling & Access" />
          <hr className="mt-3 border-slate-200" />
          <p className="text-sm text-slate-600 leading-relaxed mt-5">
            Onsite appointments are scheduled based on technician availability. By booking an
            appointment, you agree to:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {[
              'Provide accurate service location information',
              'Ensure an authorized person is present during the visit',
              'Provide safe, clear, and adequate access to the equipment',
              'Notify us of any building access restrictions or security requirements in advance',
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-blue-600 mt-1.5">&bull;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            We are not liable for delays caused by restricted access, incomplete information,
            or conditions beyond our reasonable control.
          </p>
        </section>

        {/* ================= 6. CANCELLATION ================= */}
        <section id="cancellation" className="mt-14 scroll-mt-24">
          <SectionHeading num={6} title="Cancellation & Rescheduling" />
          <hr className="mt-3 border-slate-200" />
          <ul className="mt-5 space-y-2 text-sm text-slate-600">
            <li className="flex gap-2">
              <span className="text-blue-600 mt-1.5">&bull;</span>
              <span>
                Cancellations made <span className="font-semibold text-slate-900">24 hours or more</span> before the scheduled appointment incur no charge
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 mt-1.5">&bull;</span>
              <span>
                Cancellations made <span className="font-semibold text-slate-900">less than 24 hours</span> before the appointment may incur a cancellation fee
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 mt-1.5">&bull;</span>
              <span>No-shows (failure to provide access at the scheduled time) are charged a service call fee</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 mt-1.5">&bull;</span>
              <span>We reserve the right to reschedule appointments due to technician unavailability, weather, or other unforeseen circumstances</span>
            </li>
          </ul>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            Full details on refunds for cancelled services are covered in our{' '}
            <a href="/refund-cancellation-policy" className="text-blue-600 hover:underline font-semibold">
              Refund &amp; Cancellation Policy
            </a>
            .
          </p>
        </section>

        {/* ================= 7. WARRANTY ================= */}
        <section id="warranty" className="mt-14 scroll-mt-24">
          <SectionHeading num={7} title="Warranty & Liability Limitations" />
          <hr className="mt-3 border-slate-200" />
          <p className="text-sm text-slate-600 leading-relaxed mt-5">
            Printover Solutions warrants that services will be performed in a professional and
            workmanlike manner. Parts replaced during service are warranted for{' '}
            <span className="font-semibold text-slate-900">90 days</span> from the date of
            service unless otherwise specified in writing.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            To the fullest extent permitted by law, Printover Solutions is not liable for
            indirect, incidental, or consequential damages — including lost data, lost profits,
            or business interruption — arising from the use of our services or equipment we
            service. Our total liability for any claim is limited to the amount paid for the
            specific service giving rise to the claim.
          </p>
        </section>

        {/* ================= 8. INTELLECTUAL PROPERTY ================= */}
        <section id="ip" className="mt-14 scroll-mt-24">
          <SectionHeading num={8} title="Intellectual Property" />
          <hr className="mt-3 border-slate-200" />
          <p className="text-sm text-slate-600 leading-relaxed mt-5">
            All content on our website — including text, graphics, logos, and software — is the
            property of Printover Solutions or its licensors and is protected by applicable
            intellectual property laws. You may not reproduce, distribute, or create derivative
            works from this content without our prior written consent.
          </p>
        </section>

        {/* ================= 9. USER CONDUCT ================= */}
        <section id="conduct" className="mt-14 scroll-mt-24">
          <SectionHeading num={9} title="User Conduct" />
          <hr className="mt-3 border-slate-200" />
          <p className="text-sm text-slate-600 leading-relaxed mt-5">While using our website or services, you agree not to:</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {[
              'Use the website for any unlawful purpose or in violation of these Terms',
              'Attempt to gain unauthorized access to any portion of the website or its related systems',
              'Transmit any harmful, offensive, or disruptive content',
              'Use automated tools to scrape or extract data from our website',
              'Impersonate any person or entity or misrepresent your affiliation',
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-blue-600 mt-1.5">&bull;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ================= 10. INDEMNIFICATION ================= */}
        <section id="indemnification" className="mt-14 scroll-mt-24">
          <SectionHeading num={10} title="Indemnification" />
          <hr className="mt-3 border-slate-200" />
          <p className="text-sm text-slate-600 leading-relaxed mt-5">
            You agree to indemnify, defend, and hold harmless Printover Solutions and its
            officers, employees, agents, and partners from any claims, liabilities, damages,
            losses, and expenses (including reasonable attorneys' fees) arising out of or in
            connection with your use of our services, your violation of these Terms, or your
            violation of any third-party rights.
          </p>
        </section>

        {/* ================= 11. GOVERNING LAW ================= */}
        <section id="governing-law" className="mt-14 scroll-mt-24">
          <SectionHeading num={11} title="Governing Law & Disputes" />
          <hr className="mt-3 border-slate-200" />
          <p className="text-sm text-slate-600 leading-relaxed mt-5">
            These Terms are governed by the laws of the{' '}
            <span className="font-semibold text-slate-900">State of Florida</span>, without
            regard to its conflict-of-law provisions. Any disputes arising under these Terms
            are subject to the exclusive jurisdiction of the state and federal courts located
            in <span className="font-semibold text-slate-900">Miami-Dade County, Florida</span>.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            We encourage customers to contact us directly first, so we can try to resolve any
            dispute informally before pursuing legal action.
          </p>
        </section>

        {/* ================= 12. CHANGES ================= */}
        <section id="changes" className="mt-14 scroll-mt-24">
          <SectionHeading num={12} title="Changes to Terms" />
          <hr className="mt-3 border-slate-200" />
          <p className="text-sm text-slate-600 leading-relaxed mt-5">
            We reserve the right to modify these Terms at any time. Changes will be posted on
            this page with an updated effective date. Continued use of our website or services
            after changes are posted constitutes acceptance of the revised Terms.
          </p>
        </section>

        {/* ================= 13. CONTACT ================= */}
        <div id="contact" className="mt-16 bg-slate-950 rounded-2xl p-8 sm:p-10 scroll-mt-24">
          <h3 className="text-xl font-black text-cyan-400">13. Contact Information</h3>
          <p className="text-sm text-slate-300 mt-3">
            For questions regarding these Terms and Conditions, please contact:
          </p>
          <p className="text-white font-bold text-sm mt-4">Printover Solutions</p>
          <div className="mt-3 space-y-2 text-sm text-slate-300">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              1200 Innovation Drive, Suite 300, Miami, FL 33101
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
  );
}