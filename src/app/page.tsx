'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { WhoWeHelp } from '@/components/sections/WhoWeHelp';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { TopicsGrid } from '@/components/sections/TopicsGrid';
import { WhyDetox } from '@/components/sections/WhyDetox';
import { CommunityImpact } from '@/components/sections/CommunityImpact';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { BookingSection } from '@/components/sections/BookingSection';
import { SafetyTransparency } from '@/components/sections/SafetyTransparency';
import { InstagramIntegration } from '@/components/sections/InstagramIntegration';
import { FinalCTA } from '@/components/sections/FinalCTA';

import { PrivacyModal } from '@/components/modals/PrivacyModal';
import { TermsModal } from '@/components/modals/TermsModal';
import { DisclaimerModal } from '@/components/modals/DisclaimerModal';
import { ToastContainer, ToastMessage } from '@/components/ui/Toast';

export default function Home() {
  const [selectedBookingTopic, setSelectedBookingTopic] = useState<string>('');
  
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, message?: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, title, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const scrollToBooking = (topicTitle?: string) => {
    if (topicTitle) {
      setSelectedBookingTopic(topicTitle);
    }
    const el = document.getElementById('request-session');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f17] text-slate-100 selection:bg-emerald-500 selection:text-white">
      
      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />

      {/* Main Navigation Header */}
      <Header onOpenBookingModal={() => scrollToBooking()} />

      {/* Main Landmarked Content */}
      <main id="main-content" className="flex-1">
        
        {/* Section 1: Hero */}
        <Hero onOpenBookingModal={() => scrollToBooking()} />

        {/* Section 2: About DetoxWithBagga */}
        <About />

        {/* Section 3: Who We Help */}
        <WhoWeHelp onOpenBookingModal={() => scrollToBooking()} />

        {/* Section 4: Conversation Process (How It Works) */}
        <ProcessTimeline onOpenBookingModal={() => scrollToBooking()} />

        {/* Section 5: What We Talk About (16 Topics Grid) */}
        <TopicsGrid
          onSelectTopicForBooking={(topicTitle) => {
            scrollToBooking(topicTitle);
            addToast('Topic selected!', `Pre-selected "${topicTitle}" for your session request.`);
          }}
        />

        {/* Section 6: Why DetoxWithBagga (10 Value Props) */}
        <WhyDetox />

        {/* Section 7: Community Impact & Ethical Social Proof */}
        <CommunityImpact />

        {/* Section 8: Frequently Asked Questions */}
        <FAQAccordion />

        {/* Section 9: Session Request & Integrated Booking Workflow */}
        <BookingSection
          initialTopic={selectedBookingTopic}
          onSuccessToast={(msg) => addToast('Session Request Submitted', msg, 'success')}
        />

        {/* Section 10: Safety, Scope & Non-Therapy Transparency */}
        <SafetyTransparency />

        {/* Section 11: Instagram Integration (matching 30590.jpg) */}
        <InstagramIntegration />

        {/* Section 12: Final Reassuring CTA */}
        <FinalCTA onOpenBookingModal={() => scrollToBooking()} />

      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
        onOpenDisclaimer={() => setDisclaimerOpen(true)}
      />

      {/* Interactive Modals */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
      <DisclaimerModal isOpen={disclaimerOpen} onClose={() => setDisclaimerOpen(false)} />

    </div>
  );
}
