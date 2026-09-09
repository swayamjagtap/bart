import React, { useState } from 'react';
import { STRATEGIC_ROADMAP } from '../data/content';
import { CheckCircle2, Clock, Calendar, ArrowRight, Shield } from 'lucide-react';

export default function StrategicRoadmap() {
  const [selectedPhase, setSelectedPhase] = useState(0);

  return (
    <section id="roadmap" className="py-24 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono-tech text-amber-400 uppercase tracking-widest block mb-2 font-bold">
            STRATEGIC INDUSTRIAL EXECUTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            DEFENCE LICENSING & DEPLOYMENT ROADMAP
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-mono-tech">
            A verified 4-phase trajectory from sovereign IP protection to Indian Army frontline induction.
          </p>
        </div>

        {/* Phase Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {STRATEGIC_ROADMAP.map((item, index) => {
            const isSelected = selectedPhase === index;
            return (
              <button
                key={item.phase}
                onClick={() => setSelectedPhase(index)}
                className={`p-5 rounded-xl border text-left transition-all relative ${
                  isSelected
                    ? 'bg-slate-900 border-amber-400 ring-2 ring-amber-400/20 shadow-xl shadow-amber-500/10'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-3 font-mono-tech text-xs">
                  <span className={`px-2 py-0.5 rounded ${
                    item.status === 'Completed' ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30' :
                    item.status === 'In Progress' ? 'bg-amber-950/60 text-amber-400 border border-amber-500/30' :
                    'bg-slate-900 text-slate-400 border border-slate-800'
                  }`}>
                    {item.status}
                  </span>
                  <span className="text-slate-500">{item.timeline}</span>
                </div>

                <div className="text-xs font-mono-tech text-amber-400/80 mb-1">
                  {item.phase}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-400 font-mono-tech line-clamp-2">
                  {item.milestones[0]}
                </p>

                {isSelected && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-amber-400 rotate-45 hidden md:block" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Detail Box */}
        <div className="bg-slate-900/80 border border-amber-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono-tech text-amber-400 font-bold tracking-wider uppercase">
                {STRATEGIC_ROADMAP[selectedPhase].phase} EXECUTION DETAIL
              </span>
              <h4 className="text-2xl font-bold text-white mt-1">
                {STRATEGIC_ROADMAP[selectedPhase].title}
              </h4>
            </div>

            <div className="flex items-center gap-3 font-mono-tech text-xs">
              <span className="text-slate-400">TIMELINE: <strong className="text-white">{STRATEGIC_ROADMAP[selectedPhase].timeline}</strong></span>
              <span className="px-3 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                STATUS: {STRATEGIC_ROADMAP[selectedPhase].status.toUpperCase()}
              </span>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <h5 className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider">
              REGULATORY & DEFENCE MILESTONES
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {STRATEGIC_ROADMAP[selectedPhase].milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-relaxed font-mono-tech">
                    {milestone}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
