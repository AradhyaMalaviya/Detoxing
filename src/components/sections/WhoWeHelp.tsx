'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  HeartHandshake,
  Sparkles,
  Brain,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';
import { AUDIENCE_CATEGORIES } from '@/constants/audience';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface WhoWeHelpProps {
  onOpenBookingModal: () => void;
}

export const WhoWeHelp: React.FC<WhoWeHelpProps> = ({ onOpenBookingModal }) => {
  const [selectedId, setSelectedId] = useState<string>(AUDIENCE_CATEGORIES[0].id);

  const activeCategory =
    AUDIENCE_CATEGORIES.find((cat) => cat.id === selectedId) || AUDIENCE_CATEGORIES[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'Brain':
        return <Brain className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="who-we-help" className="py-24 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
            Tailored Emotional Support
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Who We{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-teal-300 to-emerald-400">
              Help & Support
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every phase of life brings distinct emotional challenges. Discover how our 1-on-1 conversations are customized for your specific journey.
          </p>
        </div>

        {/* Audience Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {AUDIENCE_CATEGORIES.map((cat) => {
            const isSelected = cat.id === selectedId;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedId(cat.id)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/50 border border-emerald-400/40 scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span className={isSelected ? 'text-white' : 'text-emerald-400'}>
                  {getIcon(cat.iconName)}
                </span>
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Audience Detailed Card Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-700/60 shadow-2xl relative overflow-hidden"
          >
            {/* Background Accent Glow */}
            <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${activeCategory.gradient} blur-3xl pointer-events-none`} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              
              {/* Left Summary */}
              <div className="lg:col-span-5 space-y-5">
                <Badge variant="emerald">{activeCategory.badge}</Badge>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    {getIcon(activeCategory.iconName)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {activeCategory.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      {activeCategory.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activeCategory.description}
                </p>

                <div className="pt-4">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={onOpenBookingModal}
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    Request A Conversation For {activeCategory.title}
                  </Button>
                </div>
              </div>

              {/* Right Challenges vs Outcomes Split */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Challenges Column */}
                <div className="bg-slate-900/80 p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>Common Struggles You Face</span>
                  </div>

                  <ul className="space-y-2.5">
                    {activeCategory.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <ChevronRight className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes Column */}
                <div className="bg-emerald-950/20 p-5 sm:p-6 rounded-2xl border border-emerald-500/20 space-y-4">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>What You Can Expect</span>
                  </div>

                  <ul className="space-y-2.5">
                    {activeCategory.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-emerald-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
