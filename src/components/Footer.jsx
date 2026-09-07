import React from 'react';
import { COMPANY_INFO, COMPLIANCE_BADGES } from '../data/content';
import { Shield, Lock, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-slate-800 text-slate-400 font-mono-tech text-xs">
      
      {/* Top Compliance Ribbon */}
      <div className="border-b border-slate-900 py-6 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-[11px]">
            <div className="flex flex-wrap items-center gap-4 text-slate-400">
              <span className="text-amber-400 font-bold">STATUTORY LICENSES:</span>
              <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded">DPIIT DEFENCE IL</span>
              <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded">DGCA DIGITALSKY</span>
              <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded">WPC ETA APPROVED</span>
              <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded">MIL-STD-810H</span>
            </div>

            <div className="flex items-center gap-2 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>DEFENCE COMMERCIAL CLEARANCE // BUY (INDIAN-IDDM)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand Info (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <img
                src="/assets/logo/bart-logo-full.png"
                alt="B.A.R.T. - Biomimetic Autonomous Robotics & Technologies"
                className="h-10 sm:h-12 w-auto max-w-[260px] object-contain"
              />
            </div>

            <p className="text-slate-400 text-xs leading-relaxed font-sans max-w-sm">
              {COMPANY_INFO.tagline}. Engineering sovereign biomimetic unmanned aerial systems and edge neural processors for frontier defence.
            </p>

            <div className="text-[11px] text-amber-400 pt-2">
              MOTTO: <span className="font-bold text-white">{COMPANY_INFO.motto}</span>
              <div className="text-slate-500">"{COMPANY_INFO.mottoTranslation}"</div>
            </div>
          </div>

          {/* Col 2: Tactical Platforms */}
          <div className="space-y-3">
            <h4 className="text-white font-bold tracking-wider text-xs">
              PLATFORMS
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#uluka-n1" className="hover:text-amber-400 transition">ULUKA-N1 Night Owl</a></li>
              <li><a href="#shyena-d1" className="hover:text-amber-400 transition">SHYENA-D1 Apex Eagle</a></li>
              <li><a href="#project-chaya" className="hover:text-amber-400 transition">Project CHAYA Master</a></li>
              <li><a href="#virtus-eye" className="hover:text-amber-400 transition">VIRTUS-EYE Neural Chip</a></li>
            </ul>
          </div>

          {/* Col 3: Compliance & Legal */}
          <div className="space-y-3">
            <h4 className="text-white font-bold tracking-wider text-xs">
              GOVERNANCE
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#compliance" className="hover:text-amber-400 transition">Buy (Indian-IDDM) DAP 2020</a></li>
              <li><a href="#compliance" className="hover:text-amber-400 transition">DPIIT Industrial License</a></li>
              <li><a href="#compliance" className="hover:text-amber-400 transition">DGCA Drone Rules 2021</a></li>
              <li><a href="#roadmap" className="hover:text-amber-400 transition">MIL-STD-810H Validation</a></li>
            </ul>
          </div>

          {/* Col 4: Corporate & Enquiry */}
          <div className="space-y-3">
            <h4 className="text-white font-bold tracking-wider text-xs">
              DEFENCE RELATIONS
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#enquiry" className="hover:text-amber-400 transition">Operational Trial Request</a></li>
              <li><a href="#business-model" className="hover:text-amber-400 transition">Squad Pack Economics</a></li>
              <li><a href="#business-model" className="hover:text-amber-400 transition">Investor Information</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition">Encrypted PGP Liaison</a></li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            &copy; 2024–2026 {COMPANY_INFO.name} Defence Systems Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>DEFENCE EXPORT RESTRICTED (SCOMET)</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-slate-300 rounded transition"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
