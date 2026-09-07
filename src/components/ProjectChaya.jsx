import React from 'react';
import { PROJECT_CHAYA } from '../data/content';
import { Shield, VolumeX, EyeOff, Radio, CheckCircle, ArrowRight } from 'lucide-react';

export default function ProjectChaya() {
  return (
    <section id="project-chaya" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Master Program Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono-tech text-xs mb-3">
            FLAGSHIP INDIGENOUS PROGRAM // CODENAME: {PROJECT_CHAYA.codename}
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            {PROJECT_CHAYA.name}
          </h2>
          <p className="text-lg font-bold text-amber-400 font-mono-tech mt-2">
            {PROJECT_CHAYA.title}
          </p>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            {PROJECT_CHAYA.summary}
          </p>
        </div>

        {/* 3 Core Vulnerabilities Solved by Project CHAYA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PROJECT_CHAYA.problemStatement.map((prob, idx) => (
            <div
              key={prob.title}
              className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between group hover:border-amber-500/40 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono-tech text-red-400 px-2 py-0.5 rounded bg-red-950/40 border border-red-500/30">
                    FATAL FLAW #{idx + 1}
                  </span>
                  {idx === 0 && <VolumeX className="w-5 h-5 text-red-400" />}
                  {idx === 1 && <EyeOff className="w-5 h-5 text-red-400" />}
                  {idx === 2 && <Radio className="w-5 h-5 text-red-400" />}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {prob.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {prob.description}
                </p>
              </div>

              <div className="p-3.5 bg-slate-950/80 border border-amber-500/30 rounded-xl">
                <div className="flex items-center gap-1.5 text-xs font-mono-tech text-amber-400 font-bold mb-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  CHAYA ARCHITECTURE FIX
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {prob.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dual Platform Concept Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <span className="text-xs font-mono-tech text-amber-400 uppercase tracking-wider">
              OPERATIONAL COMPOSITION
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Two Synergistic Biomimetic Platforms
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              <strong>ULUKA-N1</strong> provides silent nocturnal surveillance and 48-hour branch perching. 
              <strong> SHYENA-D1</strong> commands the high-altitude day airspace with 1.8m soaring wingspan and 30x optical zoom telephoto lenses.
            </p>
          </div>

          <div className="flex gap-4 shrink-0">
            <a
              href="#uluka-n1"
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-mono-tech text-xs rounded-lg border border-slate-700 transition"
            >
              EXPLORE ULUKA-N1
            </a>
            <a
              href="#shyena-d1"
              className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-mono-tech text-xs rounded-lg transition shadow-lg shadow-amber-500/20"
            >
              EXPLORE SHYENA-D1
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
