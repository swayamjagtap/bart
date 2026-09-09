import React from 'react';
import { ECOSYSTEM_PARTNERS } from '../data/content';
import { Building2, ShieldCheck, Microscope, Cpu } from 'lucide-react';

export default function DefenseEcosystem() {
  return (
    <section className="py-20 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono-tech text-amber-400 uppercase tracking-widest block mb-2 font-bold">
            STRATEGIC INSTITUTIONAL NETWORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            DEFENCE INNOVATION & INDUSTRIAL ECOSYSTEM
          </h2>
          <p className="text-slate-400 text-sm mt-3 font-mono-tech">
            Supported by premier Indian defence innovation organizations, academic centers of excellence, and AS9100 EMS partners.
          </p>
        </div>

        {/* Ecosystem Partner Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ECOSYSTEM_PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-amber-500/40 transition shadow-lg flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono-tech text-amber-400/80 uppercase block mb-2">
                  {partner.category}
                </span>
                <h3 className="text-sm font-bold text-white mb-2">
                  {partner.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-mono-tech">
                  {partner.role}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono-tech text-slate-500">
                <span>VERIFIED AFFILIATION</span>
                <span className="text-emerald-400">ACTIVE</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
