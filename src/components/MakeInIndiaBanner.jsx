import React from 'react';
import { Award, Shield, CheckCircle } from 'lucide-react';

export default function MakeInIndiaBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-amber-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-950/80 border border-amber-500/30 rounded-3xl p-8 sm:p-12 relative shadow-2xl backdrop-blur-md">
          {/* Subtle Indian Flag Accent Bar */}
          <div className="absolute top-0 inset-x-8 h-1 rounded-full bg-gradient-to-r from-orange-500 via-white to-emerald-500 opacity-90" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono-tech text-xs">
                <Award className="w-3.5 h-3.5" />
                SOVEREIGN ATMANIRBHAR BHARAT DEFENCE PLEDGE
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                100% DESIGNED, DEVELOPED & MANUFACTURED IN INDIA
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                B.A.R.T. stands firmly aligned with the Ministry of Defence’s <strong>Make in India</strong> and 
                <strong> Buy (Indian-IDDM)</strong> mandates. By building proprietary biomimetic airframes, 
                in-house flight firmware, and localized edge neural weights, we guarantee zero vulnerability to foreign 
                kill-switches, supply-chain embargoes, or external surveillance backdoors.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 font-mono-tech text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>100% Sovereign Indian IP</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Exceeds DAP 2020 50% Threshold</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Indigenous SMT EMS Supply Chain</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 p-6 bg-slate-900 border border-amber-500/30 rounded-2xl text-center space-y-2 font-mono-tech">
              <div className="text-3xl font-black text-amber-400">100%</div>
              <div className="text-xs text-slate-200 font-bold">INDIAN-IDDM</div>
              <div className="text-[10px] text-slate-500">DAP 2020 COMPLIANT</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
