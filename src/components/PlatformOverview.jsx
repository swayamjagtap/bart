import React from 'react';
import { PLATFORMS } from '../data/content';
import { Moon, Sun, ArrowRight, ShieldCheck, Zap, VolumeX, Eye } from 'lucide-react';

export default function PlatformOverview() {
  const uluka = PLATFORMS.uluka;
  const shyena = PLATFORMS.shyena;

  return (
    <section id="platforms" className="py-24 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono-tech text-amber-400 uppercase tracking-widest block mb-2 font-bold">
            BIOMIMETIC HARDWARE FLEET
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            TACTICAL AERIAL PLATFORMS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-mono-tech">
            Engineered to operate as complementary nocturnal and high-altitude diurnal reconnaissance systems.
          </p>
        </div>

        {/* Side-by-Side Platform Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* ULUKA-N1 Card */}
          <div className="bg-slate-900/70 border border-amber-500/30 hover:border-amber-400 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-950 border border-amber-500/40 text-amber-400 rounded-full font-mono-tech text-xs">
                  <Moon className="w-3.5 h-3.5" />
                  NIGHT-OPS STEALTH
                </span>
                <span className="text-xs font-mono-tech text-slate-500">
                  WINGSPAN: {uluka.wingspan}
                </span>
              </div>

              <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 border border-slate-800 bg-black">
                <img
                  src={uluka.featuredMedia.src}
                  alt={uluka.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white font-bold font-mono-tech text-xs">
                  {uluka.name} // {uluka.codename}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 group-hover:text-amber-400 transition-colors">
                {uluka.name}
              </h3>
              <p className="text-xs font-mono-tech text-amber-400/90 mb-3">
                {uluka.category} — {uluka.morphology}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {uluka.role}
              </p>

              <div className="grid grid-cols-2 gap-3 font-mono-tech text-xs mb-6">
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg">
                  <span className="text-slate-500 block text-[10px]">ACOUSTIC PROFILE</span>
                  <span className="text-amber-400 font-bold">{uluka.acousticOutput}</span>
                </div>
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg">
                  <span className="text-slate-500 block text-[10px]">STANDBY ENDURANCE</span>
                  <span className="text-cyan-400 font-bold">{uluka.standbyEndurance}</span>
                </div>
              </div>
            </div>

            <a
              href="#uluka-n1"
              className="w-full py-3 bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-white font-mono-tech text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2"
            >
              EXPLORE ULUKA-N1 SYSTEM
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* SHYENA-D1 Card */}
          <div className="bg-slate-900/70 border border-amber-500/30 hover:border-amber-400 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-950 border border-amber-500/40 text-amber-400 rounded-full font-mono-tech text-xs">
                  <Sun className="w-3.5 h-3.5" />
                  DAY-OPS APEX EAGLE
                </span>
                <span className="text-xs font-mono-tech text-slate-500">
                  WINGSPAN: {shyena.wingspan}
                </span>
              </div>

              <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 border border-slate-800 bg-black">
                <img
                  src={shyena.featuredMedia.src}
                  alt={shyena.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white font-bold font-mono-tech text-xs">
                  {shyena.name} // {shyena.codename}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 group-hover:text-amber-400 transition-colors">
                {shyena.name}
              </h3>
              <p className="text-xs font-mono-tech text-amber-400/90 mb-3">
                {shyena.category} — {shyena.morphology}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {shyena.role}
              </p>

              <div className="grid grid-cols-2 gap-3 font-mono-tech text-xs mb-6">
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg">
                  <span className="text-slate-500 block text-[10px]">SERVICE CEILING</span>
                  <span className="text-amber-400 font-bold">{shyena.serviceCeiling}</span>
                </div>
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg">
                  <span className="text-slate-500 block text-[10px]">OPTICAL ZOOM</span>
                  <span className="text-cyan-400 font-bold">30x OPTICAL + 60x AI</span>
                </div>
              </div>
            </div>

            <a
              href="#shyena-d1"
              className="w-full py-3 bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-white font-mono-tech text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2"
            >
              EXPLORE SHYENA-D1 SYSTEM
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
