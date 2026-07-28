'use client';

import React from 'react';
import { Leaf, ArrowUp, Mail, ExternalLink, ShieldCheck, HeartPulse, FileText, Lock } from 'lucide-react';
import { InstagramIcon as Instagram } from '@/components/ui/Icons';
import { BRAND, NAV_LINKS } from '@/constants/brand';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenDisclaimer?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenDisclaimer,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070a10] border-t border-slate-800/80 text-slate-400 pt-16 pb-12 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-md shadow-emerald-950/40">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {BRAND.name}
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              An emotionally intelligent digital wellness platform providing judgment-free 1-on-1 conversations, self-growth guidance, and practical tools to calm overthinking.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={BRAND.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-medium hover:bg-emerald-500/20 transition-colors flex items-center gap-1.5"
              >
                Google Form <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Platform Sections */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.slice(5).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#request-session" className="text-emerald-400 hover:underline font-medium">
                  Request Session (2 Free)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Emergency & Disclaimers */}
          <div>
            <h3 className="text-xs font-semibold font-amber-400 text-amber-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <HeartPulse className="w-4 h-4 text-rose-400" /> Crisis Support
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              If you are in acute mental health crisis or immediate danger, please do not wait for a response. Contact emergency hotlines immediately.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li><strong className="text-slate-200">USA/Canada:</strong> Call/Text 988</li>
              <li><strong className="text-slate-200">India:</strong> 14416 / Vandrevala 9999 666 555</li>
              <li><strong className="text-slate-200">UK:</strong> 116 123 (Samaritans)</li>
            </ul>
          </div>

        </div>

        {/* Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <Lock className="w-3 h-3" /> Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <FileText className="w-3 h-3" /> Terms of Service
            </button>
            <button
              onClick={onOpenDisclaimer}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <ShieldCheck className="w-3 h-3" /> Non-Therapy Disclaimer
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-xs">
              Crafted with empathy for emotional clarity
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-emerald-600 text-slate-300 hover:text-white border border-slate-700/60 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
