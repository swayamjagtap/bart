import React from 'react';
import { PLATFORMS } from '../data/content';
import ProductMediaGallery from './common/ProductMediaGallery';
import { Moon, Shield, Eye, BatteryCharging, Radio, VolumeX, CheckCircle } from 'lucide-react';

export default function UlukaN1Section() {
  const uluka = PLATFORMS.uluka;

  const keyInnovations = [
    {
      title: 'Acoustic Feather Serrations',
      desc: 'Soft synthetic feather serrations on wing leading edges and downy velvet surface texture break wind turbulence into micro-vortices, maintaining <10 dB acoustic output.',
      tag: '< 10 dB FLAPPING'
    },
    {
      title: '270° Rotating Neck Gimbal',
      desc: 'Micro-brushless servo motors in the neck articulate the head 270° horizontally and 90° vertically, allowing omnidirectional target tracking without wing or body movement.',
      tag: '270° OMNIDIRECTIONAL'
    },
    {
      title: 'Concealed Dual-Pupil Optics',
      desc: 'Left pupil houses an LWIR Micro-Bolometer (-40°C to +500°C) and right pupil houses a 4K Sony Starvis2 sensor, eliminating NVG glare and visible lens glint.',
      tag: 'DUAL-SPECTRUM FUSION'
    },
    {
      title: 'Bio-Claw Perch-and-Spy Talons',
      desc: 'High-torque carbon-fiber talons anchor securely to tree canopies or cliff edges. Cuts motor power by 95% while keeping thermal cameras active for up to 48 hours.',
      tag: '48H PASSIVE STANDBY'
    }
  ];

  return (
    <section id="uluka-n1" className="py-24 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="text-xs font-mono-tech text-amber-400 tracking-widest uppercase">
              TACTICAL MODEL 01 // NOCTURNAL CLANDESTINE INTELLIGENCE
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            {uluka.name}
          </h2>
          <p className="text-lg font-bold text-amber-400/90 font-mono-tech mt-1">
            {uluka.codename} — {uluka.category}
          </p>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mt-3 leading-relaxed">
            Replicating the Indian Eagle-Owl (<em>Bubo bengalensis</em>), ULUKA-N1 is engineered for deep-night forward 
            reconnaissance, base-camp perimeter monitoring, and clandestine surveillance in heavily contested border zones.
          </p>
        </div>

        {/* Section 10: ULUKA-N1 Media Showcase (ProductMediaGallery) */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider">
              VISUAL SHOWCASE & FLIGHT MEDIA
            </span>
            <span className="text-xs font-mono-tech text-amber-400">
              AUTHENTIC DEMO VIDEO & SUBSYSTEM DIAGRAMS
            </span>
          </div>

          <ProductMediaGallery platform={uluka} />
        </div>

        {/* 4 Key Engineering Subsystems */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 font-mono-tech flex items-center gap-2">
            <Shield className="w-5 h-5 text-amber-400" />
            SUBSYSTEM ARCHITECTURE & BIOMIMETIC INNOVATIONS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyInnovations.map((item, i) => (
              <div
                key={i}
                className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl flex flex-col justify-between hover:border-amber-500/40 transition shadow-lg"
              >
                <div>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 inline-block mb-3">
                    {item.tag}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tactical Sound & Range Performance Matrix */}
        <div className="bg-slate-900/80 border border-amber-500/20 rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono-tech text-xs">
          <div className="space-y-1">
            <span className="text-slate-500 uppercase text-[10px]">FLIGHT ACOUSTICS</span>
            <div className="text-xl font-bold text-white">&lt; 10 dB @ 20m</div>
            <p className="text-slate-400 text-[11px]">Completely inaudible beyond 25–30 meters; blends into ambient forest sounds.</p>
          </div>
          <div className="space-y-1 border-t md:border-t-0 md:border-l border-slate-800 md:pl-6">
            <span className="text-slate-500 uppercase text-[10px]">CYBER ENCRYPTION</span>
            <div className="text-xl font-bold text-amber-400">AES-256 MIL-SPEC</div>
            <p className="text-slate-400 text-[11px]">Anti-tamper firmware with instantaneous memory-sanitize upon physical breach.</p>
          </div>
          <div className="space-y-1 border-t md:border-t-0 md:border-l border-slate-800 md:pl-6">
            <span className="text-slate-500 uppercase text-[10px]">PASSIVE STANDBY WAKEUP</span>
            <div className="text-xl font-bold text-cyan-400">&lt; 10 MILLISECONDS</div>
            <p className="text-slate-400 text-[11px]">Eye sensor wakes up instantly and locks focus if an enemy soldier enters within 300m.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
