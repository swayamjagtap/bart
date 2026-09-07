import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/content';
import { Shield, Menu, X, ChevronDown, Lock, Radio } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'PROJECT CHAYA', href: '#project-chaya' },
    { label: 'ULUKA-N1', href: '#uluka-n1' },
    { label: 'SHYENA-D1', href: '#shyena-d1' },
    { label: 'VIRTUS-EYE', href: '#virtus-eye' },
    { label: 'ROADMAP', href: '#roadmap' },
    { label: 'COMPLIANCE', href: '#compliance' },
    { label: 'INVESTORS', href: '#business-model' },
    { label: 'VIDEOS', href: '#videos' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/90 backdrop-blur-md border-b border-amber-500/20">
      {/* Top Security & Classification Bar */}
      <div className="bg-slate-900/90 border-b border-slate-800 text-[11px] font-mono-tech px-4 sm:px-8 py-1 flex items-center justify-between text-slate-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            BUY (INDIAN-IDDM) COMPLIANT
          </span>
          <span className="hidden md:inline-block text-slate-600">|</span>
          <span className="hidden md:inline-block text-slate-400">DPIIT DEFENCE LICENSED</span>
          <span className="hidden lg:inline-block text-slate-600">|</span>
          <span className="hidden lg:inline-block text-amber-400">MIL-STD-810H TESTED</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-slate-300">
            <Lock className="w-3 h-3 text-amber-400" />
            {COMPANY_INFO.classification}
          </span>
          <span className="hidden sm:inline-block px-1.5 py-0.2 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded text-[10px]">
            AES-256 SECURED
          </span>
        </div>
      </div>

      {/* Main Corporate Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand & Official Logo */}
        <a href="#" className="flex items-center group py-1">
          <img
            src="/assets/logo/bart-logo-full.png"
            alt="B.A.R.T. - Biomimetic Autonomous Robotics & Technologies"
            className="h-10 sm:h-12 w-auto max-w-[240px] sm:max-w-[280px] object-contain transition-transform group-hover:scale-[1.02]"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-5 text-xs font-mono-tech tracking-wider text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-amber-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#enquiry"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs font-mono-tech tracking-wider rounded-lg shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
          >
            <Shield className="w-3.5 h-3.5" />
            DEFENCE ENQUIRY
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-lg"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/98 border-b border-amber-500/30 px-6 py-6 font-mono-tech text-sm space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <div key={link.label}>
              <a
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-amber-400 py-1 border-b border-slate-900"
              >
                {link.label}
              </a>
            </div>
          ))}
          <a
            href="#enquiry"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center w-full px-4 py-2.5 bg-amber-500 text-slate-950 font-bold rounded-lg mt-4"
          >
            DEFENCE PROCUREMENT ENQUIRY
          </a>
        </div>
      )}
    </header>
  );
}
