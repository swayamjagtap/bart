import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';

export default function VideoPlayer({ src, poster, title, autoPlay = false, loop = true, mutedDefault = true, className = '' }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(mutedDefault);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [showControls, setShowControls] = useState(false);

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration;
    setCurrentTime(formatTime(curr));
    if (dur > 0) {
      setProgress((curr / dur) * 100);
      setDuration(formatTime(dur));
    }
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const seekTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
    setProgress(e.target.value);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (videoRef.current.parentElement) {
      videoRef.current.parentElement.requestFullscreen();
    }
  };

  return (
    <div 
      className={`relative group bg-black/90 rounded-xl overflow-hidden border border-amber-500/20 shadow-2xl ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        muted={isMuted}
        loop={loop}
        autoPlay={autoPlay}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        className="w-full h-full object-cover cursor-pointer"
        onClick={togglePlay}
      />

      {/* Video Overlay Watermark & Classification */}
      <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none z-10">
        <span className="px-2 py-0.5 bg-black/70 backdrop-blur-md border border-amber-500/40 text-amber-400 font-mono-tech text-xs tracking-wider rounded">
          FLIGHT TELEMETRY FEED
        </span>
        {title && (
          <span className="hidden sm:inline-block px-2 py-0.5 bg-black/50 backdrop-blur-md text-slate-300 font-mono-tech text-xs rounded">
            {title}
          </span>
        )}
      </div>

      {/* Center Big Play Button (when paused) */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          aria-label="Play video"
          className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/30 hover:scale-110 transition-transform duration-200 z-10"
        >
          <Play className="w-8 h-8 fill-slate-950 translate-x-0.5" />
        </button>
      )}

      {/* Tactical Bottom Control Bar */}
      <div className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-3 pt-6 flex flex-col gap-2 transition-opacity duration-300 z-10 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'}`}>
        {/* Progress scrub bar */}
        <input
          type="range"
          min="0"
          max="100"
          value={progress || 0}
          onChange={handleSeek}
          className="w-full h-1 bg-slate-700/80 rounded-lg appearance-none cursor-pointer accent-amber-500 hover:h-1.5 transition-all"
        />

        <div className="flex items-center justify-between text-xs font-mono-tech text-slate-300">
          <div className="flex items-center gap-3">
            <button onClick={togglePlay} className="text-amber-400 hover:text-amber-300 transition">
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-amber-400" />}
            </button>
            <button onClick={toggleMute} className="text-slate-300 hover:text-white transition">
              {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <span className="text-slate-400">
              {currentTime} / {duration}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => { if (videoRef.current) videoRef.current.currentTime = 0; }} 
              className="text-slate-400 hover:text-white transition" 
              title="Restart"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button onClick={toggleFullscreen} className="text-slate-400 hover:text-amber-400 transition" title="Fullscreen">
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
