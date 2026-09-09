import React, { useState } from 'react';
import { COMPANY_INFO, PROJECT_CHAYA } from '../data/content';
import { Shield, Play, ChevronDown, Radar, Radio, Lock, ArrowRight } from 'lucide-react';
import ImageLightbox from './common/ImageLightbox';

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Background Media: Authentic Video with Fallback Poster */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="./assets/project-chaya/images/chaya-concept.jpg"
          className="w-full h-full object-cover opacity-35 scale-105 filter brightness-90"
        >
          <source src="./assets/uluka-n1/videos/uluka-nightops-flight.mp4" type="video/mp4" />
          {/* Fallback image if video cannot play */}
          <img
            src="./assets/project-chaya/images/chaya-concept.jpg"
            alt="Project CHAYA Aerial System"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Tactical Dark Gradients & Radar Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
        
        {/* Top Operational Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 text-xs font-mono-tech mb-8 backdrop-blur-md shadow-lg">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="text-slate-300 font-semibold tracking-wider">
            MAKE IN INDIA // DAP 2020 BUY (INDIAN-IDDM) COMPLIANT
          </span>
          <span className="hidden sm:inline-block text-slate-600">|</span>
          <span className="hidden sm:inline-block text-amber-400">
            FLAGSHIP: {PROJECT_CHAYA.name}
          </span>
        </div>

        {/* Primary Organization & Tactical Statement */}
        <div className="mb-4">
          <span className="text-amber-400 font-mono-tech text-sm sm:text-base tracking-[0.25em] uppercase font-bold block mb-2">
            ORGANIZATION IDENTITY: {COMPANY_INFO.name}
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05]">
            INDIGENOUS <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
              BIOMIMETIC
            </span>{' '}
            AERIAL DEFENCE
          </h1>
        </div>

        {/* Sub-headline directly communicating sovereign defense vision */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mt-4">
          Engineering sovereign bird-mimicking stealth reconnaissance UAVs with under 10 dB acoustic profile, 
          26 TOPS un-jammable onboard Edge AI, and 48-hour perch-and-spy capabilities for India’s high-altitude frontiers.
        </p>

        {/* Key Feature Badges */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 my-8 text-xs font-mono-tech text-slate-300 max-w-4xl">
          <span className="px-3 py-1 bg-slate-900/80 border border-slate-800 rounded-md">
            �|� BIO-KINEMATIC STEALTH
          </span>
          <span className="px-3 py-1 bg-slate-900/80 border border-slate-800 rounded-md">
            �|� ULUKA-N1 & SHYENA-D1
          </span>
          <span className="px-3 py-1 bg-slate-900/80 border border-slate-800 rounded-md">
            🧠 VIRTUS-EYE EDGE-AI
          </span>
          <span className="px-3 py-1 bg-slate-900/80 border border-slate-800 rounded-md">
            📡 ZERO-RF TELEMETRY
          </span>
          <span className="px-3 py-1 bg-slate-900/80 border border-slate-800 rounded-md">
            🇮🇳 ENGINEERED IN INDIA
          </span>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#platforms"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm tracking-wider font-mono-tech rounded-xl shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3"
          >
            EXPLORE PLATFORMS
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#videos"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-sm tracking-wider font-mono-tech rounded-xl border border-amber-500/30 backdrop-blur-md transition-all flex items-center justify-center gap-3 hover:border-amber-400"
          >
            <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
            WATCH FLIGHT DEMO
          </a>
        </div>

        {/* Live Operational Telemetry Bar */}
        <div className="mt-14 w-full max-w-4xl p-4 bg-slate-900/70 border border-amber-500/20 rounded-xl backdrop-blur-md grid grid-cols-2 md:grid-cols-4 gap-4 text-left font-mono-tech text-xs">
          <div className="border-r border-slate-800/80 pr-2">
            <span className="text-slate-500 block text-[10px]">PROGRAM</span>
            <span className="text-amber-400 font-bold">PROJECT CHAYA</span>
          </div>
          <div className="border-r border-slate-800/80 pr-2">
            <span className="text-slate-500 block text-[10px]">ACOUSTICS</span>
            <span className="text-white font-bold">&lt; 10 dB FLAPPING</span>
          </div>
          <div className="border-r border-slate-800/80 pr-2">
            <span className="text-slate-500 block text-[10px]">NEURAL COMPUTE</span>
            <span className="text-cyan-400 font-bold">26 TOPS ONBOARD</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px]">IP OWNERSHIP</span>
            <span className="text-emerald-400 font-bold">100% INDIGENOUS</span>
          </div>
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <a
        href="#metrics"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-500 hover:text-amber-400 transition animate-bounce p-2"
        aria-label="Scroll to metrics"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
