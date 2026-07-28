'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  CalendarHeart,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Heart,
  Clock,
  BookOpen,
  ChevronDown
} from 'lucide-react';
import { InstagramIcon as Instagram } from '@/components/ui/Icons';
import { BRAND } from '@/constants/brand';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

interface HeroProps {
  onOpenBookingModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden bg-[#0b0f17]"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none animate-ambient" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Pill Badges matching 30590.jpg */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <Badge variant="emerald" icon={<Sparkles className="w-3.5 h-3.5" />}>
                🌿 A Safe Space To Be Heard
              </Badge>
              <Badge variant="amber" icon={<Heart className="w-3.5 h-3.5" />}>
                🎁 2 Complimentary Sessions
              </Badge>
              <Badge variant="purple" icon={<BookOpen className="w-3.5 h-3.5" />}>
                📖 {BRAND.readingRecommendation}
              </Badge>
            </div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
            >
              Detox Your Mind.{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-purple-400">
                Reclaim Your Peace.
              </span>
            </motion.h1>

            {/* Subtitle / Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal"
            >
              Honest, judgment-free 1-on-1 conversations designed to help you navigate overthinking, stress, relationship confusion, and personal growth with emotional clarity.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenBookingModal}
                icon={<CalendarHeart className="w-5 h-5" />}
              >
                Request A Conversation
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="#how-it-works"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Learn How It Works
              </Button>

              <Button
                variant="outline"
                size="lg"
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<Instagram className="w-5 h-5 text-pink-400" />}
              >
                Visit Instagram
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-400"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>12h SLA Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Google Form Sync</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Showcase & Social Proof Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Glass Hero Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl relative z-10 shadow-2xl border border-slate-700/60 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Profile Header snippet styled after 30590.jpg */}
                <div className="flex items-center gap-4 pb-6 border-b border-slate-800">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-600 to-emerald-800 p-0.5 shadow-lg">
                      <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-emerald-400 font-bold text-xl">
                        DB
                      </div>
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-slate-900 flex items-center justify-center text-[10px] text-white font-bold">
                      ✓
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-bold text-white">Bagga</h2>
                      <span className="text-xs bg-slate-800 text-emerald-400 px-2 py-0.5 rounded-full font-medium">
                        {BRAND.handle}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium">
                      {BRAND.role}
                    </p>
                    <p className="text-xs text-emerald-400/90 font-semibold mt-1">
                      🌿 2 Complimentary Sessions Available
                    </p>
                  </div>
                </div>

                {/* Live Stats Row */}
                <div className="grid grid-cols-3 gap-3 py-6 text-center border-b border-slate-800">
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                    <span className="block text-xl font-bold text-white">
                      {BRAND.stats.conversationsCompleted}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      Conversations
                    </span>
                  </div>
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                    <span className="block text-xl font-bold text-emerald-400">
                      {BRAND.stats.communityMembers}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      Community
                    </span>
                  </div>
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                    <span className="block text-xl font-bold text-purple-400">
                      {BRAND.stats.countriesReached}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      Countries
                    </span>
                  </div>
                </div>

                {/* Key Highlight Message */}
                <div className="pt-5 space-y-3">
                  <div className="flex items-start gap-3 bg-emerald-500/10 p-3.5 rounded-xl border border-emerald-500/20">
                    <Heart className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs font-semibold text-emerald-300">
                        What Happens In A Session?
                      </h3>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                        An empathetic 45-minute discussion to untangle thoughts, build emotional resilience, and receive customized reflection tools.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={onOpenBookingModal}
                    className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2"
                  >
                    <span>Claim Your Free Session</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-16 text-center">
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1 text-slate-400 hover:text-emerald-400 transition-colors text-xs font-medium"
          aria-label="Scroll to About section"
        >
          <span>Scroll to Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
