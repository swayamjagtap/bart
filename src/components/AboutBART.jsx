import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { Shield, Target, Cpu, CheckCircle2, Award } from 'lucide-react';

export default function AboutBART() {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Corporate Identity & Strategic Mission (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono-tech text-xs">
              <Shield className="w-3.5 h-3.5" />
              SOVEREIGN DEFENCE INNOVATION
            </div>

            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                {COMPANY_INFO.name}
              </h2>
              <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 mt-2 tracking-wide font-mono-tech">
                {COMPANY_INFO.tagline}
              </h3>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              <strong>{COMPANY_INFO.name}</strong> is an indigenous Indian defence technology enterprise 
              pioneering next-generation biomimetic unmanned aerial systems (UAVs) and edge artificial intelligence. 
              While conventional military drones rely on loud propellers and rigid industrial airframes that trigger early warning 
              sensors, B.A.R.T. engineers bio-mechanical aerial systems that replicate the exact flight kinematics, 
              acoustic damping, and visual signatures of indigenous Indian raptors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl">
                <div className="flex items-center gap-2 text-amber-400 font-bold font-mono-tech text-sm mb-1.5">
                  <Cpu className="w-4 h-4" />
                  SOVEREIGN EDGE AI
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  26 TOPS neural computation embedded directly inside the airframe skull, stripping away thermal camouflage without cloud dependency.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl">
                <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono-tech text-sm mb-1.5">
                  <Award className="w-4 h-4" />
                  100% BUY (INDIAN-IDDM)
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  100% Indian ownership and design IP under DAP 2020 guidelines, eliminating critical defense reliance on foreign imports.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-800/80 pt-6">
              <h4 className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider mb-3">
                CORE TECHNICAL PILLARS
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono-tech text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Biomimetic Kinematics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Acoustic Damping &lt;10dB</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Zero-RF Telemetry</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Perch-and-Spy Talons</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>NavIC Satellite Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>MIL-STD-810H Tested</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Visual Subsystem & Credibility Showcase (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-900/80 shadow-2xl p-6 backdrop-blur-md">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-6 border border-slate-800">
                <img
                  src="./assets/uluka-n1/images/uluka-subsystem-analysis.jpg"
                  alt="B.A.R.T. Biomimetic Architecture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 px-2 py-1 bg-black/80 border border-amber-500/40 text-amber-400 font-mono-tech text-[10px] rounded">
                  AUTHENTIC R&D ASSET
                </div>
              </div>

              <div className="space-y-3 font-mono-tech text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-500">ORGANIZATION:</span>
                  <span className="text-white font-bold">{COMPANY_INFO.name}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-500">FULL IDENTITY:</span>
                  <span className="text-amber-400 font-medium text-[11px] text-right">{COMPANY_INFO.fullName}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-500">CLEARANCE:</span>
                  <span className="text-emerald-400 font-bold">{COMPANY_INFO.clearanceLevel}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-500">HEADQUARTERS:</span>
                  <span className="text-slate-300">{COMPANY_INFO.hq}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500">COMMUNICATION:</span>
                  <span className="text-amber-400">{COMPANY_INFO.secureComms}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
