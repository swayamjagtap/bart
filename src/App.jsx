import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsCounter from './components/MetricsCounter';
import AboutBART from './components/AboutBART';
import VisionMission from './components/VisionMission';
import ProjectChaya from './components/ProjectChaya';
import ProjectChayaMedia from './components/ProjectChayaMedia';
import PlatformOverview from './components/PlatformOverview';
import UlukaN1Section from './components/UlukaN1Section';
import ShyenaD1Section from './components/ShyenaD1Section';
import VirtusEyeSection from './components/VirtusEyeSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import StrategicRoadmap from './components/StrategicRoadmap';
import LegalCompliance from './components/LegalCompliance';
import DefenseEcosystem from './components/DefenseEcosystem';
import BusinessModel from './components/BusinessModel';
import VideoShowcase from './components/VideoShowcase';
import EnquirySection from './components/EnquirySection';
import ContactSection from './components/ContactSection';
import MakeInIndiaBanner from './components/MakeInIndiaBanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      {/* 1. Sticky Navigation */}
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Key Metrics */}
        <MetricsCounter />

        {/* 4. About B.A.R.T. */}
        <AboutBART />

        {/* 5. Vision / Mission / Motto / Aim */}
        <VisionMission />

        {/* 6. Project CHAYA */}
        <ProjectChaya />

        {/* 7. Project CHAYA Media Showcase */}
        <ProjectChayaMedia />

        {/* 8. Models / Platform Selector */}
        <PlatformOverview />

        {/* 9 & 10. ULUKA-N1 + Image/Video Gallery */}
        <UlukaN1Section />

        {/* 11 & 12. SHYENA-D1 + Image/Video Gallery */}
        <ShyenaD1Section />

        {/* 13. VIRTUS-EYE Technology (Includes interactive simulator) */}
        <VirtusEyeSection />

        {/* 14. Company Metrics / Capabilities (Patents, Decibels, Envelope) */}
        <CapabilitiesSection />

        {/* 15. Strategic Roadmap (4-Phase timeline) */}
        <StrategicRoadmap />

        {/* 16. Legal & Compliance (6-Card Grid) */}
        <LegalCompliance />

        {/* 17. Defence / Innovation Ecosystem */}
        <DefenseEcosystem />

        {/* 18. Business Model / Investor Information */}
        <BusinessModel />

        {/* 19. Video Showcase ("SEE THE TECHNOLOGY IN ACTION") */}
        <VideoShowcase />

        {/* 20. Enquiry Form */}
        <EnquirySection />

        {/* 21. Contact */}
        <ContactSection />

        {/* 22. Make in India */}
        <MakeInIndiaBanner />
      </main>

      {/* 23. Footer */}
      <Footer />
    </div>
  );
}
