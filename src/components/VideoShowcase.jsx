import React, { useState } from 'react';
import { VIDEO_SHOWCASE } from '../data/content';
import { Play, Film, X, Clock, Maximize2 } from 'lucide-react';
import VideoPlayer from './common/VideoPlayer';

export default function VideoShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  const categories = ['ALL', 'PROJECT CHAYA', 'ULUKA-N1', 'SHYENA-D1', 'TESTING'];

  const filteredVideos = selectedCategory === 'ALL'
    ? VIDEO_SHOWCASE
    : VIDEO_SHOWCASE.filter((v) => v.category === selectedCategory);

  return (
    <section id="videos" className="py-24 bg-slate-900/60 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono-tech text-amber-400 uppercase tracking-widest block mb-2 font-bold">
              CINEMATIC PROTOTYPE FOOTAGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              SEE THE TECHNOLOGY IN ACTION
            </h2>
            <p className="text-slate-400 text-sm mt-2 font-mono-tech">
              Authentic flight demonstration videos capturing biomimetic flapping, thermal soaring, and silent acoustics.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-tech transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideoModal(video)}
              className="bg-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail with Play Overlay */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <img
                    src={video.poster}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-slate-950 translate-x-0.5" />
                    </div>
                  </div>

                  {/* Badges */}
                  <span className="absolute top-3 left-3 px-2 py-0.5 bg-black/80 text-amber-400 border border-amber-500/30 text-[10px] font-mono-tech rounded">
                    {video.category}
                  </span>
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/80 text-slate-300 text-[10px] font-mono-tech rounded flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </span>
                </div>

                {/* Text Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-mono-tech">
                    {video.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0">
                <span className="text-[11px] font-mono-tech text-amber-400 group-hover:underline flex items-center gap-1">
                  LAUNCH CINEMA PLAYER &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Video Cinema Modal */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 animate-fadeIn">
          <div className="relative max-w-5xl w-full flex flex-col">
            <div className="flex items-center justify-between pb-3 text-xs font-mono-tech text-slate-400">
              <span className="text-amber-400 font-bold">{activeVideoModal.title}</span>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="p-1.5 bg-slate-900 border border-slate-700 hover:border-red-500 rounded-lg text-slate-300 hover:text-white"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-amber-500/30 shadow-2xl bg-black">
              <VideoPlayer
                src={activeVideoModal.src}
                poster={activeVideoModal.poster}
                title={activeVideoModal.title}
                autoPlay={true}
                className="w-full h-full"
              />
            </div>

            <p className="text-xs text-slate-400 font-mono-tech mt-3">
              {activeVideoModal.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
