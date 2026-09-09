import React from 'react';
import { COMPLIANCE_BADGES } from '../data/content';
import { ShieldCheck, Award, FileCheck, Radio, ShieldAlert, Lock } from 'lucide-react';

export default function LegalCompliance() {
  const getBadgeIcon = (id) => {
    switch (id) {
      case 'iddm': return <Award className="w-6 h-6 text-emerald-400" />;
      case 'dpiit': return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      case 'dgca': return <FileCheck className="w-6 h-6 text-cyan-400" />;
      case 'wpc': return <Radio className="w-6 h-6 text-amber-400" />;
      case 'milstd': return <ShieldAlert className="w-6 h-6 text-cyan-400" />;
      case 'cyber': return <Lock className="w-6 h-6 text-emerald-400" />;
      default: return <ShieldCheck className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="compliance" className="py-24 bg-slate-900/40 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono-tech text-amber-400 uppercase tracking-widest block mb-2 font-bold">
            STATUTORY & MILITARY QUALIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            DEFENCE COMPLIANCE & ACCREDITATIONS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-mono-tech">
            Fully certified for Indian defence procurement under the Defence Acquisition Procedure (DAP 2020).
          </p>
        </div>

        {/* 6-Card Compliance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPLIANCE_BADGES.map((badge) => (
            <div
              key={badge.id}
              className="bg-slate-950/80 border border-slate-800 hover:border-amber-500/50 p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl group-hover:border-amber-500/30 transition">
                    {getBadgeIcon(badge.id)}
                  </div>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    VERIFIED
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-amber-400 transition-colors">
                  {badge.title}
                </h3>
                <span className="text-xs font-mono-tech text-amber-400/90 block mb-3">
                  {badge.badge}
                </span>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {badge.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-900 flex justify-between text-[11px] font-mono-tech text-slate-600">
                <span>DAP 2020 FRAMEWORK</span>
                <span className="text-emerald-400 font-semibold">100% ELIGIBLE</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
