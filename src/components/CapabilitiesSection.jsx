import React from 'react';
import { ShieldCheck, VolumeX, ThermometerSnowflake, FileText, Navigation, Cpu } from 'lucide-react';

export default function CapabilitiesSection() {
  const patents = [
    {
      no: 'PATENT APP 01',
      title: 'Biomimetic Wing-Warping Actuators',
      summary: 'Proprietary mechanical linkage flexing aerodynamic synthetic wingtips to stabilize against high-altitude gusts without noisy ailerons.'
    },
    {
      no: 'PATENT APP 02',
      title: 'Acoustic Feather Dampening Matrix',
      summary: 'Multi-layered downy synthetic feather serration system breaking up boundary-layer air turbulence into silent micro-vortices (<10 dB).'
    },
    {
      no: 'PATENT APP 03',
      title: 'Pupil-Embedded Optical Camera Gimbal',
      summary: 'Micro-bolometer LWIR and 4K optical sensors concealed within non-reflective artificial avian pupils with 270° articulation.'
    }
  ];

  return (
    <section className="py-24 bg-slate-900/60 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono-tech text-amber-400 uppercase tracking-widest block mb-2 font-bold">
            FIELD PROVEN SPECIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            DEFENCE CAPABILITIES & INTELLECTUAL PROPERTY
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-mono-tech">
            Independently verified through laboratory testing, environmental chambers, and acoustic ranges.
          </p>
        </div>

        {/* Acoustic Comparison Bar */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono-tech text-amber-400 uppercase tracking-wider">
                ACOUSTIC SURVIVABILITY BENCHMARK
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Acoustic Signature at 20 Meters Range
              </h3>
            </div>
            <span className="text-xs font-mono-tech text-emerald-400 px-3 py-1 bg-emerald-950/40 border border-emerald-500/30 rounded-full">
              CERTIFIED BY NABL TESTING LABS
            </span>
          </div>

          <div className="space-y-5 font-mono-tech text-xs">
            {/* Traditional Quadcopter */}
            <div>
              <div className="flex justify-between text-slate-400 mb-1.5">
                <span>Standard Military Quadcopter / VTOL (ideaForge / DJI)</span>
                <span className="text-red-400 font-bold">&gt; 65 dB (Audible at 300m+)</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 rounded-full" style={{ width: '85%' }} />
              </div>
            </div>

            {/* Imported French Falcon */}
            <div>
              <div className="flex justify-between text-slate-400 mb-1.5">
                <span>Imported Propeller Bird Drone (EBC Falcon Concepts)</span>
                <span className="text-amber-400 font-bold">45 dB (Propeller in tail)</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '55%' }} />
              </div>
            </div>

            {/* Project CHAYA Platforms */}
            <div>
              <div className="flex justify-between text-white font-bold mb-1.5">
                <span className="text-amber-400">B.A.R.T. Project CHAYA (ULUKA-N1 & SHYENA-D1)</span>
                <span className="text-emerald-400">&lt; 10 dB (Inaudible beyond 25m)</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full" style={{ width: '12%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* 3 Filed Provisional Utility Patents Grid */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl sm:text-2xl font-bold text-white font-mono-tech">
              PROPRIETARY INTELLECTUAL PROPERTY PIPELINE (3 PATENTS FILED)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {patents.map((pat) => (
              <div
                key={pat.no}
                className="bg-slate-950/80 border border-slate-800 p-6 rounded-xl hover:border-amber-500/40 transition shadow-lg flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 inline-block mb-3">
                    {pat.no} // PROVISIONAL UTILITY
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">
                    {pat.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pat.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-900 flex justify-between text-[11px] font-mono-tech text-slate-500">
                  <span>INDIAN PATENT OFFICE</span>
                  <span className="text-emerald-400">100% OWNED</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
