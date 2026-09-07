import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { Compass, Target, Shield, Eye } from 'lucide-react';

export default function VisionMission() {
  const cards = [
    {
      id: 'vision',
      icon: <Compass className="w-6 h-6 text-amber-400" />,
      title: 'OUR VISION',
      statement: 'Sovereign Supremacy in Silent Aerial Intelligence',
      body: 'To establish India as the global vanguard of biomimetic aerial robotics, securing complete technological self-reliance across frontier surveillance, electronic warfare resistance, and autonomous edge intelligence.'
    },
    {
      id: 'mission',
      icon: <Target className="w-6 h-6 text-cyan-400" />,
      title: 'OUR MISSION',
      statement: 'Eliminating Detection, Protecting Frontline Forces',
      body: 'To replace noisy, vulnerable mechanical drones with bio-mechanical apex predators that eliminate acoustic and visual signatures, ensuring frontline Indian Armed Forces conduct high-altitude reconnaissance with zero tactical exposure.'
    },
    {
      id: 'motto',
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      title: 'OUR MOTTO',
      statement: COMPANY_INFO.motto,
      body: `"${COMPANY_INFO.mottoTranslation}" — A tripartite commitment to absolute stealth (Adrishya), pinpoint technological precision (Achook), and 100% indigenous Indian intellectual sovereignty (Atmanirbhar).`
    },
    {
      id: 'aim',
      icon: <Eye className="w-6 h-6 text-amber-400" />,
      title: 'OUR STRATEGIC AIM',
      statement: 'Empowering Forward High-Altitude Outposts',
      body: 'Deploying modular biomimetic Squad Packs to Indian Army and Paramilitary border posts in Siachen, Ladakh, and Arunachal, providing 48-hour continuous perch-and-spy surveillance without risking human soldier lives.'
    }
  ];

  return (
    <section className="py-20 bg-slate-900/60 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono-tech text-amber-400 uppercase tracking-widest block mb-2 font-bold">
            FOUNDATIONAL ETHOS & DOCTRINE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            VISION, MISSION & STRATEGIC MOTTO
          </h2>
          <p className="text-slate-400 text-sm mt-3 font-mono-tech">
            Guiding the development of sovereign defense robotics for the Indian Armed Forces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-slate-950/80 border border-slate-800 hover:border-amber-500/50 p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-amber-500/40 transition">
                  {card.icon}
                </div>
                <span className="text-xs font-mono-tech text-slate-500 uppercase tracking-wider block mb-1">
                  {card.title}
                </span>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {card.statement}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {card.body}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono-tech text-slate-600">
                <span>B.A.R.T. DOCTRINE</span>
                <span className="text-amber-500/60">IDDM // 2024</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
