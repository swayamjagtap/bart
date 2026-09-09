import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { MapPin, Mail, Lock, Shield, PhoneCall } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-slate-900/60 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono-tech text-amber-400 uppercase tracking-widest font-bold block">
              HEADQUARTERS & SECURE COMMUNICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              CONNECT WITH B.A.R.T. DEFENCE SYSTEMS
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Official engagement channels for procurement directors, military trial teams, academic research partners, 
              and strategic investors. All sensitive technical correspondence is secured via military-grade cryptographic standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono-tech text-xs pt-2">
              <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <MapPin className="w-4 h-4" />
                  R&D & FLIGHT CORRIDOR
                </div>
                <p className="text-slate-300">
                  New Delhi Defense Tech Hub & Bengaluru Aerospace Complex, India
                </p>
              </div>

              <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400 font-bold">
                  <Mail className="w-4 h-4" />
                  OFFICIAL LIAISON
                </div>
                <p className="text-slate-300">
                  {COMPANY_INFO.contactEmail}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 bg-slate-950 border border-amber-500/30 rounded-2xl font-mono-tech text-xs space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-amber-400 pb-3 border-b border-slate-800">
                <Lock className="w-4 h-4" />
                <span className="font-bold tracking-wider">CLASSIFIED EXCHANGE PROTOCOL</span>
              </div>

              <p className="text-slate-400 text-[11px] leading-relaxed">
                For operational briefings, classified target sets, or RFP technical queries, request our PGP Public Key 
                or schedule a secure physical briefing at our licensed defence R&D center.
              </p>

              <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-lg text-[10px] text-slate-400 break-all">
                <span className="text-slate-500 block mb-1">PGP FINGERPRINT:</span>
                <code>4A9F B821 70D3 19E6 88C2 FA39 01B2 5E8A D6F9 CC01</code>
              </div>

              <div className="flex items-center justify-between text-slate-500 text-[10px] pt-1">
                <span>SECURITY CLEARANCE:</span>
                <span className="text-emerald-400 font-bold">MHA VETTED</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
