import React from 'react';
import { BUSINESS_MODEL } from '../data/content';
import { TrendingUp, DollarSign, Package, Shield, ArrowUpRight, BarChart3 } from 'lucide-react';

export default function BusinessModel() {
  return (
    <section id="business-model" className="py-24 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono-tech text-amber-400 uppercase tracking-widest block mb-2 font-bold">
            COMMERCIAL VIABILITY & INVESTOR BRIEF
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            BUSINESS MODEL & UNIT ECONOMICS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-mono-tech">
            A high-margin tactical hardware and recurring lifecycle revenue model engineered for defense procurement.
          </p>
        </div>

        {/* Squad Pack Offering & Unit Economics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Tactical Squad Pack Bundle (6 cols) */}
          <div className="lg:col-span-6 bg-slate-900/70 border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono-tech text-amber-400 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30">
                PRIMARY SALES UNIT
              </span>
              <span className="text-xs font-mono-tech text-emerald-400">
                48.4% GROSS MARGIN
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              {BUSINESS_MODEL.unitProduct}
            </h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed font-mono-tech">
              Supplied as a turnkey autonomous reconnaissance unit for frontline infantry battalions and border outposts.
            </p>

            <div className="space-y-3 mb-8">
              {BUSINESS_MODEL.contents.map((item, idx) => (
                <div key={idx} className="p-3 bg-slate-950 border border-slate-800 rounded-lg flex items-center gap-3 text-xs text-slate-300 font-mono-tech">
                  <Package className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Financial Breakdown Table */}
            <div className="p-4 bg-black/70 border border-slate-800 rounded-xl space-y-2.5 font-mono-tech text-xs">
              <div className="flex justify-between text-slate-400">
                <span>SELLING PRICE PER SQUAD PACK:</span>
                <span className="text-white font-bold">{BUSINESS_MODEL.pricing.sellingPrice}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>MANUFACTURING BOM COST:</span>
                <span className="text-slate-300 font-bold">{BUSINESS_MODEL.pricing.manufacturingCost}</span>
              </div>
              <div className="flex justify-between text-slate-400 pt-2 border-t border-slate-800">
                <span>GROSS PROFIT PER UNIT:</span>
                <span className="text-emerald-400 font-bold">₹1.55 Crore (48.4%)</span>
              </div>
              <div className="flex justify-between text-slate-400 pt-1">
                <span>ANNUAL RECURRING AMC (15%):</span>
                <span className="text-amber-400 font-bold">₹48 Lakhs / Year</span>
              </div>
            </div>
          </div>

          {/* Right: 3-Year Financial Projections & Equity Ask (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 3-Year Projections Table */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base font-bold text-white font-mono-tech flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-amber-400" />
                  3-YEAR FINANCIAL TRAJECTORY
                </h4>
                <span className="text-xs font-mono-tech text-slate-400">INR CRORES</span>
              </div>

              <div className="space-y-3">
                {BUSINESS_MODEL.projections.map((proj) => (
                  <div key={proj.year} className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl font-mono-tech text-xs space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-amber-400 font-bold">{proj.year} — {proj.phase}</span>
                      <span className="text-slate-400">{proj.packs}</span>
                    </div>
                    <div className="flex justify-between text-slate-300 pt-1 border-t border-slate-900">
                      <span>PROJECTED REVENUE: <strong className="text-white">{proj.revenue}</strong></span>
                      <span>NET PROFIT: <strong className={proj.netProfit.startsWith('-') ? 'text-amber-400' : 'text-emerald-400'}>{proj.netProfit}</strong></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Seed Ask Card */}
            <div className="bg-gradient-to-br from-amber-500/10 via-slate-950 to-slate-950 border border-amber-500/40 rounded-2xl p-6 shadow-xl">
              <span className="text-xs font-mono-tech text-amber-400 font-bold uppercase tracking-wider block mb-2">
                SEED CAPITAL STRATEGY
              </span>
              <div className="text-3xl font-black text-white mb-2 font-mono-tech">
                {BUSINESS_MODEL.capitalStrategy.totalSeedAsk}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-mono-tech mb-4">
                {BUSINESS_MODEL.capitalStrategy.grantFunding} to minimize early equity dilution.
              </p>
              <div className="p-3 bg-black/60 border border-amber-500/30 rounded-lg flex justify-between items-center text-xs font-mono-tech">
                <span className="text-slate-400">EQUITY ASK:</span>
                <span className="text-amber-400 font-bold">{BUSINESS_MODEL.capitalStrategy.equityAsk}</span>
                <span className="text-slate-400">POST-MONEY:</span>
                <span className="text-white font-bold">{BUSINESS_MODEL.capitalStrategy.postMoneyValuation}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
