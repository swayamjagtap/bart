import React, { useState } from 'react';
import { VIRTUS_EYE } from '../data/content';
import { Eye, ShieldAlert, Cpu, Crosshair, Radio, Scan } from 'lucide-react';

export default function VirtusEyeSimulator() {
  const [activeMode, setActiveMode] = useState('ai');

  return (
    <div className="w-full bg-slate-950 border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 lg:p-8">
      {/* Header and Telemetry */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono-tech text-cyan-400 tracking-widest uppercase">
              VIRTUS-EYE // LIVE HUD SIMULATION
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Dual-Spectrum Neural Vision Simulator
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Toggle between raw optical, infrared thermal, and onboard 26 TOPS edge neural inference.
          </p>
        </div>

        {/* Mode Selector Buttons */}
        <div className="flex flex-wrap gap-2">
          {VIRTUS_EYE.simulationModes.map((mode) => {
            const isActive = activeMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono-tech transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-700'
                }`}
              >
                {mode.id === 'day' && <Eye className="w-3.5 h-3.5" />}
                {mode.id === 'thermal' && <Crosshair className="w-3.5 h-3.5" />}
                {mode.id === 'ai' && <Scan className="w-3.5 h-3.5" />}
                {mode.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Simulator Display Window */}
      <div className="mt-6 relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-xl overflow-hidden border-2 border-slate-800 bg-black">
        {/* Underlay Image based on mode */}
        <img
          src={
            activeMode === 'thermal'
              ? './assets/virtus-eye/images/virtus-thermal-fusion.jpg'
              : activeMode === 'ai'
              ? './assets/virtus-eye/images/virtus-eye-hud.jpg'
              : './assets/uluka-n1/images/uluka-morphology.jpg'
          }
          alt="Sensor Simulation"
          className={`w-full h-full object-cover transition-all duration-700 ${
            activeMode === 'thermal' ? 'hue-rotate-180 contrast-125' : ''
          }`}
        />

        {/* Tactical HUD Overlay (HUD Grid, reticles, telemetry) */}
        <div className="absolute inset-0 pointer-events-none p-4 sm:p-6 flex flex-col justify-between">
          
          {/* Top HUD Telemetry */}
          <div className="flex justify-between items-start text-xs font-mono-tech">
            <div className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded border border-cyan-500/30 text-cyan-400 space-y-0.5">
              <div>FREQ: 2.45 GHz Tactical FHSS</div>
              <div>AES-256 ENCRYPTION: ACTIVE</div>
              <div>RF SIGNATURE: ZERO LEAKAGE</div>
            </div>

            <div className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded border border-amber-500/30 text-amber-400 text-right space-y-0.5">
              <div>COMPUTE: 26 TOPS (Hailo-8 / Jetson)</div>
              <div>LATENCY: 8.4 ms ONBOARD</div>
              <div>MODE: {activeMode.toUpperCase()}</div>
            </div>
          </div>

          {/* Center Tactical Crosshair */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-24 h-24 sm:w-36 sm:h-36 border border-amber-500/40 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <div className="absolute top-0 w-full h-[1px] bg-amber-500/30" />
              <div className="absolute left-0 h-full w-[1px] bg-amber-500/30" />
            </div>
          </div>

          {/* AI Bounding Boxes (Simulated when in AI mode) */}
          {activeMode === 'ai' && (
            <div className="absolute inset-0 pointer-events-none">
              {/* Target 1 */}
              <div className="absolute top-1/4 left-1/3 w-40 h-28 border-2 border-red-500/80 bg-red-500/10 rounded animate-pulse">
                <span className="absolute -top-5 left-0 bg-red-600 text-white text-[10px] font-mono-tech px-1.5 py-0.5 rounded">
                  TARGET: INFANTRY [CONF: 98%]
                </span>
                <span className="absolute bottom-1 left-1 text-[9px] font-mono-tech text-red-300">
                  HEAT: +36.8°C | SMALL ARMS
                </span>
              </div>

              {/* Target 2 */}
              <div className="absolute bottom-1/4 right-1/4 w-32 h-20 border-2 border-amber-400/80 bg-amber-400/10 rounded">
                <span className="absolute -top-5 left-0 bg-amber-500 text-slate-950 font-bold text-[10px] font-mono-tech px-1.5 py-0.5 rounded">
                  OBJECT: MORTAR TUBE 43A
                </span>
              </div>
            </div>
          )}

          {/* Bottom HUD Bar */}
          <div className="flex justify-between items-end text-xs font-mono-tech">
            <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded border border-slate-700 text-slate-300">
              <span className="text-amber-400 font-bold">STATUS:</span>{' '}
              {VIRTUS_EYE.simulationModes.find((m) => m.id === activeMode)?.activeOverlay}
            </div>

            <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded border border-slate-700 text-slate-400 text-right">
              NAVIC COORDINATES: 34°18'12"N 77°34'45"E
            </div>
          </div>
        </div>
      </div>

      {/* Mode Explanation Footer */}
      <div className="mt-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed font-mono-tech">
        <strong className="text-amber-400">Tactical Insight:</strong>{' '}
        {VIRTUS_EYE.simulationModes.find((m) => m.id === activeMode)?.description}
      </div>
    </div>
  );
}
