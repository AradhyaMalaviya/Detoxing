'use client';

import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, Sun, Moon, CalendarHeart, Sparkles } from 'lucide-react';
import { NAV_LINKS, BRAND } from '@/constants/brand';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/Button';

interface HeaderProps {
  onOpenBookingModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const sectionIds = NAV_LINKS.map((link) => link.href.replace('#', ''));
  const activeSection = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f17]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group focus-visible:outline-none"
          aria-label="DetoxWithBagga Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-md shadow-emerald-950/40 group-hover:scale-105 transition-transform duration-200">
            <Leaf className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              DetoxWithBagga
            </span>
            <span className="text-[11px] text-slate-400 font-medium tracking-wide">
              {BRAND.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls (Theme Toggle & CTA) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-400" />}
          </button>

          <Button
            variant="primary"
            size="sm"
            href="#request-session"
            onClick={onOpenBookingModal}
            icon={<CalendarHeart className="w-4 h-4" />}
          >
            Request Session
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-300 border border-slate-800"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-400" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 mt-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                href="#request-session"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenBookingModal) onOpenBookingModal();
                }}
                icon={<CalendarHeart className="w-5 h-5" />}
              >
                Request Session (2 Free)
              </Button>
              <div className="text-center">
                <span className="text-xs text-slate-400 flex items-center justify-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Confidential & Non-Therapy Support
                </span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
