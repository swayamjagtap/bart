import React, { useState } from 'react';
import { Play, Maximize2, Shield, Eye, Cpu, Zap, ChevronRight } from 'lucide-react';
import VideoPlayer from './VideoPlayer';
import ImageLightbox from './ImageLightbox';

export default function ProductMediaGallery({ platform }) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activeMedia = platform.gallery[activeMediaIndex] || platform.featuredMedia;

  return (
    <div className="w-full bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
      {/* Decorative background aura */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Large Media Display (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden bg-black border border-amber-500/30 shadow-xl group">
            {activeMedia.type === 'video' ? (
              <VideoPlayer
                key={activeMedia.src}
                src={activeMedia.src}
                poster={activeMedia.poster}
                title={activeMedia.title}
                autoPlay={true}
                className="w-full h-full"
              />
            ) : (
              <div className="relative w-full h-full cursor-zoom-in" onClick={() => setIsLightboxOpen(true)}>
                <img
                  src={activeMedia.src}
                  alt={activeMedia.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                {/* Expand overlay button */}
                <button
                  onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(true); }}
                  className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/70 hover:bg-amber-500 hover:text-slate-950 text-slate-200 border border-amber-500/40 rounded-lg text-xs font-mono-tech flex items-center gap-1.5 backdrop-blur-md transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  EXPAND VIEW
                </button>

                {/* Subsystem / Technical tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-black/80 border border-amber-500/50 text-amber-400 text-xs font-mono-tech rounded tracking-wider">
                    {platform.name} // OPTICAL ARCHITECTURE
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Active Media Caption */}
          <div className="px-1 flex items-center justify-between">
            <div>
              <p className="text-white font-medium text-sm">
                {activeMedia.title}
              </p>
              <p className="text-amber-400 text-xs font-mono-tech">
                {activeMedia.caption || `${platform.name} — Biomimetic flight platform`}
              </p>
            </div>
            {activeMedia.type !== 'video' && (
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="text-xs text-slate-400 hover:text-amber-400 font-mono-tech flex items-center gap-1 transition"
              >
                Inspect Specs <ChevronRight className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* BELOW: Horizontal Thumbnail Gallery */}
          <div className="mt-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                MISSION MEDIA ({platform.gallery.length} ASSETS)
              </span>
              <span className="text-[11px] font-mono-tech text-slate-500">
                CLICK TO SWITCH STREAM
              </span>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-700">
              {platform.gallery.map((item, idx) => {
                const isActive = activeMediaIndex === idx;
                return (
                  <button
                    key={item.id || idx}
                    onClick={() => setActiveMediaIndex(idx)}
                    className={`relative flex-shrink-0 w-24 sm:w-28 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all ${
                      isActive
                        ? 'border-amber-400 ring-2 ring-amber-400/30 scale-105 shadow-md shadow-amber-500/20'
                        : 'border-slate-800 hover:border-slate-600 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={item.type === 'video' ? (item.poster || item.src) : item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {item.type === 'video' && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center">
                          <Play className="w-3 h-3 fill-slate-950 translate-x-0.2" />
                        </div>
                      </div>
                    )}
                    <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[9px] font-mono-tech text-slate-300 text-center py-0.5 truncate px-1">
                      {item.type === 'video' ? 'VIDEO' : `0${idx + 1}`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Product Name, Description & Specifications (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono-tech bg-amber-500/10 text-amber-400 border border-amber-500/30">
                {platform.category}
              </span>
              <span className="text-xs font-mono-tech text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded bg-emerald-950/20">
                IDDM COMPLIANT
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {platform.name}
            </h3>
            <p className="text-amber-400 font-mono-tech text-sm mt-1">
              {platform.codename}
            </p>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">
              {platform.role}
            </p>
          </div>

          {/* Morphological and Key Bio-Systems Grid */}
          <div className="grid grid-cols-2 gap-3 text-xs font-mono-tech">
            <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-lg">
              <span className="text-slate-400 block mb-1">MORPHOLOGY</span>
              <span className="text-slate-200 font-semibold">{platform.morphology}</span>
            </div>
            <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-lg">
              <span className="text-slate-400 block mb-1">ACOUSTIC PROFILE</span>
              <span className="text-amber-400 font-semibold">{platform.acousticOutput}</span>
            </div>
            <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-lg">
              <span className="text-slate-400 block mb-1">DIRECT RF RADIUS</span>
              <span className="text-slate-200 font-semibold">{platform.directRfRadius}</span>
            </div>
            <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-lg">
              <span className="text-slate-400 block mb-1">AUTONOMOUS RANGE</span>
              <span className="text-cyan-400 font-semibold">{platform.autonomousNavicRange}</span>
            </div>
          </div>

          {/* Key Specifications Panel */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4">
            <h4 className="text-xs font-mono-tech text-amber-400 tracking-wider uppercase mb-3 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5" />
              TACTICAL SPECIFICATION MATRIX
            </h4>
            <div className="space-y-2.5">
              {platform.specifications.slice(0, 6).map((spec, i) => (
                <div key={i} className="flex justify-between items-center text-xs py-1 border-b border-slate-800/60 last:border-0">
                  <span className="text-slate-400">{spec.label}</span>
                  <span className="font-mono-tech text-white font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="flex-1 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              VIEW FULL MEDIA
            </button>
            <a
              href="#enquiry"
              className="flex-1 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs tracking-wider rounded-lg border border-slate-700 transition flex items-center justify-center gap-2"
            >
              REQUEST OPERATIONAL TRIAL
            </a>
          </div>
        </div>

      </div>

      {/* High-Resolution Modal Lightbox */}
      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        media={activeMedia.type === 'video' ? { src: activeMedia.poster, title: activeMedia.title, caption: activeMedia.caption } : activeMedia}
      />
    </div>
  );
}
