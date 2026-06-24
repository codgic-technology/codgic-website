/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PlayStoreShowcase from './components/PlayStoreShowcase';
import AboutFounder from './components/AboutFounder';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';

export default function App() {
  const [legalModal, setLegalModal] = useState<{
    isOpen: boolean;
    tab: 'privacy' | 'app-privacy' | 'terms' | 'refund' | 'contact';
  }>({
    isOpen: false,
    tab: 'privacy',
  });

  const handleOpenLegal = (tab: 'privacy' | 'app-privacy' | 'terms' | 'refund' | 'contact') => {
    setLegalModal({ isOpen: true, tab });
  };

  return (
    <div id="codgic-root-container" className="bg-brand-black text-gray-100 min-h-screen selection:bg-brand-blue/35 selection:text-white">
      {/* Floating Header */}
      <Navbar />

      {/* Main Layout Scope */}
      <main>
        {/* Core display dashboard */}
        <Hero />

        {/* Capabilities card grid */}
        <Services />

        {/* Live dynamic Google Play Store Android app cards */}
        <PlayStoreShowcase onOpenLegal={handleOpenLegal} />

        {/* About the Founder biography & socials */}
        <AboutFounder />

        {/* Customer testimonies testimonies carousel */}
        <Testimonials />

        {/* Integrated consultation ticket terminal */}
        <Contact />
      </main>

      {/* Corporate Editorial footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Interactive Legal Portal Overlay */}
      <LegalModal
        isOpen={legalModal.isOpen}
        onClose={() => setLegalModal(prev => ({ ...prev, isOpen: false }))}
        defaultTab={legalModal.tab}
      />
    </div>
  );
}
