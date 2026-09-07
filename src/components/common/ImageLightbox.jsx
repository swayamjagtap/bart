import React, { useEffect } from 'react';
import { X, ZoomIn, ZoomOut, Maximize2, ShieldAlert, Download } from 'lucide-react';

export default function ImageLightbox({ isOpen, onClose, media }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !media) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 sm:p-8 animate-fadeIn">
      {/* Top Bar with Classification */}
      <div className="absolute top-0 inset-x-0 h-16 bg-slate-900/80 border-b border-amber-500/20 px-6 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
          <span className="text-amber-400 font-mono-tech text-xs tracking-widest uppercase">
            RESTRICTED HIGH-RES INTELLIGENCE VIEWER
          </span>
          <span className="hidden md:inline-block text-slate-500 text-xs font-mono-tech">
            | AES-256 SECURED INSPECTION
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-red-950/50 hover:border-red-500 border border-slate-700 rounded-lg transition"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div className="relative max-w-6xl w-full max-h-[80vh] flex flex-col items-center justify-center mt-12">
        <div className="relative rounded-lg overflow-hidden border border-amber-500/30 shadow-2xl bg-black max-h-[70vh]">
          <img
            src={media.src}
            alt={media.title || 'Technical Asset'}
            className="max-h-[70vh] w-auto object-contain mx-auto select-none"
          />

          {/* Corner Optical Reticles */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-500/70 pointer-events-none" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-500/70 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-500/70 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-500/70 pointer-events-none" />
        </div>

        {/* Bottom Technical Caption */}
        <div className="mt-4 text-center max-w-3xl px-4">
          <h4 className="text-white font-semibold text-base sm:text-lg mb-1">
            {media.title}
          </h4>
          {media.caption && (
            <p className="text-amber-400/90 text-sm font-mono-tech">
              {media.caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
