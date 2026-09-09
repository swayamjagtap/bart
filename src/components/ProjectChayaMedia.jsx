import React, { useState } from 'react';
import { Play, Maximize2, Layers, Film, Image as ImageIcon } from 'lucide-react';
import VideoPlayer from './common/VideoPlayer';
import ImageLightbox from './common/ImageLightbox';

export default function ProjectChayaMedia() {
  const mediaItems = [
    {
      id: 'chaya-demo-vid',
      type: 'video',
      title: 'Project CHAYA — Tactical Flight Demonstration',
      src: './assets/project-chaya/videos/chaya-demonstration.mp4',
      poster: './assets/project-chaya/images/chaya-concept.jpg',
      caption: 'Project CHAYA — Flight demonstration video showcasing bio-kinematic propulsion and inaudible flight mechanics'
    },
    {
      id: 'chaya-concept-img',
      type: 'image',
      title: 'Project CHAYA — Biomimetic Airframe Architecture',
      src: './assets/project-chaya/images/chaya-concept.jpg',
      caption: 'Project CHAYA — Integrated dorsal avionics, synthetic feather serrations, and solar charging cells'
    },
    {
      id: 'chaya-hi-alt-img',
      type: 'image',
      title: 'Project CHAYA — High-Altitude Soaring Flight',
      src: './assets/project-chaya/images/chaya-high-altitude.jpg',
      caption: 'Project CHAYA — Himalayan mountain patrol configuration operating along high-altitude ridge lines'
    },
    {
      id: 'chaya-thermal-img',
      type: 'image',
      title: 'Project CHAYA — Dual-Spectrum Thermal Reconnaissance',
      src: './assets/project-chaya/images/chaya-thermal-recon.jpg',
      caption: 'Project CHAYA — Concealed eye-sensor optics and real-time thermal fusion imaging'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const activeItem = mediaItems[activeIndex];

  return (
    <section className="py-16 bg-slate-900/40 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono-tech text-amber-400 uppercase tracking-widest font-bold block mb-1">
              CINEMATIC MEDIA SHOWCASE
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              PROJECT CHAYA IN ACTION
            </h3>
          </div>
          <span className="text-xs font-mono-tech text-slate-400 mt-2 sm:mt-0">
            AUTHENTIC FLIGHT CAPTURES & TECHNICAL RENDERS
          </span>
        </div>

        {/* Featured Media Viewer */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden bg-black border border-amber-500/30 shadow-2xl mb-6">
          {activeItem.type === 'video' ? (
            <VideoPlayer
              key={activeItem.src}
              src={activeItem.src}
              poster={activeItem.poster}
              title={activeItem.title}
              autoPlay={false}
              className="w-full h-full"
            />
          ) : (
            <div
              className="w-full h-full relative cursor-zoom-in group"
              onClick={() => setLightboxOpen(true)}
            >
              <img
                src={activeItem.src}
                alt={activeItem.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxOpen(true); }}
                className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/70 hover:bg-amber-500 hover:text-slate-950 text-slate-200 border border-amber-500/40 rounded-lg text-xs font-mono-tech flex items-center gap-1.5 backdrop-blur-md transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                EXPAND FULLSCREEN
              </button>
            </div>
          )}
        </div>

        {/* Active Item Caption Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-slate-950/80 border border-slate-800 rounded-xl mb-6">
          <div>
            <h4 className="text-white font-bold text-sm sm:text-base">
              {activeItem.title}
            </h4>
            <p className="text-amber-400 text-xs font-mono-tech mt-0.5">
              {activeItem.caption}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono-tech px-2.5 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded">
              {activeItem.type === 'video' ? 'TACTICAL VIDEO' : 'TECHNICAL IMAGE'}
            </span>
          </div>
        </div>

        {/* Thumbnail Navigation Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {mediaItems.map((item, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all text-left ${
                  isSelected
                    ? 'border-amber-400 ring-2 ring-amber-400/20 scale-[1.02] shadow-lg shadow-amber-500/20'
                    : 'border-slate-800 hover:border-slate-600 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={item.type === 'video' ? item.poster : item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-2.5 flex flex-col justify-end">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono-tech text-amber-400 font-bold">
                    {item.type === 'video' ? <Film className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
                    <span>{item.type === 'video' ? 'DEMO VIDEO' : `IMAGE 0${idx + 1}`}</span>
                  </div>
                  <span className="text-xs text-white font-semibold truncate">
                    {item.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

      </div>

      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        media={activeItem.type === 'video' ? { src: activeItem.poster, title: activeItem.title, caption: activeItem.caption } : activeItem}
      />
    </section>
  );
}
