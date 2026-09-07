import React from 'react';
import { KEY_METRICS } from '../data/content';
import { ShieldCheck, Zap, VolumeX, Cpu, Clock, Navigation } from 'lucide-react';

export default function MetricsCounter() {
  const getIcon = (id) => {
    switch (id) {
      case 'acoustic': return <VolumeX className="w-5 h-5 text-amber-400" />;
      case 'compute': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'perch': return <Clock className="w-5 h-5 text-amber-400" />;
      case 'iddm': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'range': return <Navigation className="w-5 h-5 text-cyan-400" />;
      case 'temp': return <Zap className="w-5 h-5 text-amber-400" />;
      default: return <ShieldCheck className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="metrics" className="w-full bg-slate-900 border-y border-amber-500/20 py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill Label */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <h2 className="text-xs font-mono-tech text-slate-300 uppercase tracking-widest font-bold">
              OPERATIONAL CREDIBILITY & KEY PERFORMANCE METRICS
            </h2>
          </div>
          <span className="text-xs font-mono-tech text-amber-400">
            NABL & MIL-STD-810H CERTIFIED
          </span>
        </div>

        {/* 6-Metric High Impact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {KEY_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="bg-slate-950/80 border border-slate-800 hover:border-amber-500/50 p-4 rounded-xl transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-amber-500/40 transition">
                  {getIcon(metric.id)}
                </span>
                <span className="text-[10px] font-mono-tech px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  {metric.highlight}
                </span>
              </div>

              <div className="text-2xl sm:text-3xl font-black text-white font-mono-tech tracking-tight group-hover:text-amber-400 transition-colors">
                {metric.value}
              </div>

              <div className="text-xs font-bold text-slate-200 mt-1">
                {metric.label}
              </div>

              <p className="text-[11px] text-slate-400 mt-1 font-mono-tech leading-tight">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
