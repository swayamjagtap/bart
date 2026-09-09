import React from 'react';
import { VIRTUS_EYE } from '../data/content';
import VirtusEyeSimulator from './VirtusEyeSimulator';
import { Cpu, ShieldAlert, Radio, Eye, Lock, Zap, CheckCircle2 } from 'lucide-react';

export default function VirtusEyeSection() {
  return (
    <section id="virtus-eye" className="py-24 bg-slate-950 border-b border-slate-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono-tech text-xs mb-3">
            <Cpu className="w-3.5 h-3.5" />
            CORE TECHNOLOGY ARCHITECTURE // {VIRTUS_EYE.computePower} COMPUTE
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            {VIRTUS_EYE.name}
          </h2>
          <p className="text-lg font-bold text-amber-400 font-mono-tech mt-2">
            {VIRTUS_EYE.title}
          </p>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            {VIRTUS_EYE.description}
          </p>
        </div>

        {/* 4 Core Pillars of VIRTUS-EYE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIRTUS_EYE.features.map((feat, i) => (
            <div
              key={i}
              className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all shadow-xl"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center mb-4 text-cyan-400">
                  {i === 0 && <Eye className="w-5 h-5" />}
                  {i === 1 && <ShieldAlert className="w-5 h-5 text-amber-400" />}
                  {i === 2 && <Radio className="w-5 h-5 text-emerald-400" />}
                  {i === 3 && <Cpu className="w-5 h-5 text-cyan-400" />}
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {feat.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Neural Vision Simulator Widget */}
        <div className="pt-4">
          <VirtusEyeSimulator />
        </div>

        {/* Why Zero-RF Transmission Beats Electronic Warfare */}
        <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-mono-tech text-amber-400 uppercase tracking-wider">
              ELECTRONIC WARFARE RESISTANCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Why Zero-RF Alert Transmission Is Un-Jammable
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Standard military drones stream continuous high-bandwidth video over radio links. Hostile SIGINT and EW jammers 
              instantly detect, geolocate, and severed those links. With <strong>VIRTUS-EYE</strong>, target classification happens 
              100% onboard in real time. Instead of video, the platform transmits micro-text alerts (e.g., 
              <code className="mx-1 text-amber-300 bg-black/60 px-1.5 py-0.5 rounded text-xs">[THERMAL TARGET: 3 TROOPS @ GRID 12C]</code>) 
              in micro-second bursts, rendering the drone invisible to enemy RF direction finders.
            </p>
          </div>

          <div className="lg:col-span-4 p-5 bg-black/80 border border-slate-800 rounded-xl font-mono-tech text-xs space-y-3">
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-500">CONVENTIONAL UAV:</span>
              <span className="text-red-400 font-bold">15 Mbps (High RF)</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-500">VIRTUS-EYE BURST:</span>
              <span className="text-emerald-400 font-bold">40 Bytes (Zero-RF)</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-500">EW JAMMING RISK:</span>
              <span className="text-emerald-400 font-bold">IMMUNE</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">ENCRYPTION:</span>
              <span className="text-amber-400 font-bold">AES-256 GCM</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
