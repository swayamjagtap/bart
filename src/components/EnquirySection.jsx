import React, { useState } from 'react';
import { Shield, Send, CheckCircle2, Lock, AlertCircle } from 'lucide-react';

export default function EnquirySection() {
  const [formData, setFormData] = useState({
    enquiryType: 'Armed Forces Operational Trial',
    fullName: '',
    designation: '',
    organization: '',
    email: '',
    phone: '',
    securityClearance: 'Not Classified',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.organization) {
      alert('Please complete all required fields.');
      return;
    }
    const generatedId = `BART-REQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setTrackingId(generatedId);
    setSubmitted(true);
  };

  return (
    <section id="enquiry" className="py-24 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono-tech text-xs mb-3">
            <Shield className="w-3.5 h-3.5" />
            OFFICIAL DEFENCE LIAISON
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            DEFENCE PROCUREMENT & TRIAL ENQUIRY
          </h2>
          <p className="text-slate-400 text-sm mt-3 font-mono-tech">
            Dedicated portal for the Indian Armed Forces, Paramilitary Border Formations, and Strategic Investors.
          </p>
        </div>

        {/* Form or Confirmation Card */}
        <div className="bg-slate-900/80 border border-amber-500/30 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white font-mono-tech">
                ENQUIRY RECORDED IN SECURE BUFFER
              </h3>
              <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                Your dossier has been queued for verification by the B.A.R.T. Defence Systems Technical Directorate.
              </p>
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl max-w-md mx-auto font-mono-tech text-xs space-y-1">
                <div className="text-slate-500">OFFICIAL TRACKING REFERENCE:</div>
                <div className="text-amber-400 text-base font-bold tracking-widest">{trackingId}</div>
                <div className="text-slate-500 text-[10px] pt-1">ENCRYPTED TELEMETRY HASH // AES-256</div>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-mono-tech text-xs rounded-lg transition"
              >
                SUBMIT ANOTHER DOSSIER
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 font-mono-tech text-xs">
              
              {/* Enquiry Category Selection */}
              <div>
                <label className="block text-slate-300 font-bold mb-2">
                  ENQUIRY CLASSIFICATION CATEGORY *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Armed Forces Operational Trial',
                    'Paramilitary (BSF/ITBP) Pilot',
                    'Strategic Investor / Equity Partner',
                    'Defence R&D & EMS Collaboration'
                  ].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({ ...formData, enquiryType: type })}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        formData.enquiryType === type
                          ? 'bg-amber-500/15 border-amber-400 text-amber-400 font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal & Organization Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 mb-1">OFFICER / POC FULL NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Col. Rajesh Sharma / Dr. Vikram Rao"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">OFFICIAL RANK / DESIGNATION</label>
                  <input
                    type="text"
                    placeholder="e.g., Director Procurement / Tactical Lead"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 mb-1">ORGANIZATION / MILITARY FORMATION *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Indian Army / ITBP / Ministry of Defence / VC Fund"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">OFFICIAL / DEFENCE EMAIL *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g., officer@nic.in / liaison@firm.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Requirement Summary */}
              <div>
                <label className="block text-slate-400 mb-1">OPERATIONAL SCOPE & TRIAL PARAMETERS</label>
                <textarea
                  rows={4}
                  placeholder="Outline mission terrain (Siachen, Ladakh, Desert, Jungle), quantity of Squad Packs, or strategic investment proposal..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>TRANSMITTED VIA AES-256 ENCRYPTED BUFFER</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black tracking-wider rounded-xl shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-xs"
                >
                  <Send className="w-4 h-4" />
                  TRANSMIT DEFENCE DOSSIER
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
