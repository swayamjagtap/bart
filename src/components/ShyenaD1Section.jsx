import React from 'react';
import { PLATFORMS } from '../data/content';
import ProductMediaGallery from './common/ProductMediaGallery';
import { Sun, Shield, Eye, Wind, SunMedium, Compass } from 'lucide-react';

export default function ShyenaD1Section() {
  const shyena = PLATFORMS.shyena;

  const keyInnovations = [
    {
      title: 'Dynamic Wing-Warping Actuators',
      desc: 'Micro-servos subtly flex and warp composite wingtips to provide passive aerodynamic stabilization against 50 km/h turbulent Himalayan gusts.',
      tag: '50 KM/H GUST RESISTANT'
    },
    {
      title: 'Dual-Sensor Optical Architecture',
      desc: 'Left pupil embeds a 4K Sony Micro-Starvis sensor; right pupil houses a 30x optical zoom telephoto lens delivering up to 60x AI digital zoom for ridge-line standoff tracking.',
      tag: '30X OPTICAL ZOOM'
    },
    {
      title: 'Integrated Solar Feather Cells',
      desc: 'Top-surface flexible micro-photovoltaic cells harvest ambient solar energy during high-altitude dynamic soaring, extending flight operations and topping up batteries.',
      tag: 'SOLAR TOP-UP'
    },
    {
      title: '6,000m High-Altitude Ceiling',
      desc: 'Engineered specifically for the extreme thin air and sub-zero temperatures of Siachen, Ladakh, and Arunachal high-altitude border passes.',
      tag: '6,000M ASL CEILING'
    }
  ];

  return (
    <section id="shyena-d1" className="py-24 bg-slate-900/50 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="text-xs font-mono-tech text-amber-400 tracking-widest uppercase">
              TACTICAL MODEL 02 // HIGH-ALTITUDE DIURNAL SOARING
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            {shyena.name}
          </h2>
          <p className="text-lg font-bold text-amber-400/90 font-mono-tech mt-1">
            {shyena.codename} — {shyena.category}
          </p>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mt-3 leading-relaxed">
            Modeled upon the Himalayan Golden Eagle (<em>Aquila chrysaetos daphanea</em>) with a 1.8-meter wingspan, 
            SHYENA-D1 harnesses mountain thermal updrafts and flexible solar feather cells to execute persistent, 
            long-range diurnal border patrol without sound or visual compromise.
          </p>
        </div>

        {/* Section 12: SHYENA-D1 Media Showcase (ProductMediaGallery) */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider">
              VISUAL SHOWCASE & BLUEPRINT SPECIFICATIONS
            </span>
            <span className="text-xs font-mono-tech text-amber-400">
              AUTHENTIC FLIGHT VIDEO & ENGINEERING BLUEPRINT
            </span>
          </div>

          <ProductMediaGallery platform={shyena} />
        </div>

        {/* 4 Key Engineering Subsystems */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 font-mono-tech flex items-center gap-2">
            <Shield className="w-5 h-5 text-amber-400" />
            HIGH-ALTITUDE PROPULSION & AERODYNAMIC SUBSYSTEMS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyInnovations.map((item, i) => (
              <div
                key={i}
                className="bg-slate-950/80 border border-slate-800 p-5 rounded-xl flex flex-col justify-between hover:border-amber-500/40 transition shadow-lg"
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

        {/* Tactical Mission Profiles */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <h4 className="text-xs font-mono-tech text-amber-400 uppercase tracking-wider mb-4">
            VALIDATED MILITARY MISSION PROFILES
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono-tech text-xs">
            <div className="p-4 bg-slate-900/60 border border-slate-800/80 rounded-xl">
              <span className="text-amber-400 font-bold block mb-1">01 // HIGH-ALTITUDE RECON</span>
              <p className="text-slate-400 text-[11px]">Soaring over glaciated ridge lines at 6,000m to inspect unauthorized forward base camps.</p>
            </div>
            <div className="p-4 bg-slate-900/60 border border-slate-800/80 rounded-xl">
              <span className="text-amber-400 font-bold block mb-1">02 // RIDGE-LINE PATROL</span>
              <p className="text-slate-400 text-[11px]">Continuous standoff perimeter reconnaissance with 30x optical zoom along disputed borders.</p>
            </div>
            <div className="p-4 bg-slate-900/60 border border-slate-800/80 rounded-xl">
              <span className="text-amber-400 font-bold block mb-1">03 // TARGET TRACKING</span>
              <p className="text-slate-400 text-[11px]">Autonomous classification of hostile mortar positions, vehicle convoys, and armed patrols.</p>
            </div>
            <div className="p-4 bg-slate-900/60 border border-slate-800/80 rounded-xl">
              <span className="text-amber-400 font-bold block mb-1">04 // CONVOY SCOUTING</span>
              <p className="text-slate-400 text-[11px]">Forward route sanitization ahead of mechanized military infantry columns in radio-silent mode.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
