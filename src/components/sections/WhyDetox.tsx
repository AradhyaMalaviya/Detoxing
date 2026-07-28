'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Ear,
  GitMerge,
  CheckCircle2,
  UserCheck,
  Compass,
  Sparkles,
  ShieldCheck,
  Smartphone,
  CalendarCheck,
  Lock,
  ChevronDown
} from 'lucide-react';
import { VALUE_PROPS } from '@/constants/valueProps';
import { Badge } from '@/components/ui/Badge';

export const WhyDetox: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(VALUE_PROPS[0].id);

  const getIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-emerald-400" };
    switch (iconName) {
      case 'Ear': return <Ear {...props} />;
      case 'GitMerge': return <GitMerge {...props} />;
      case 'CheckCircle2': return <CheckCircle2 {...props} />;
      case 'UserCheck': return <UserCheck {...props} />;
      case 'Compass': return <Compass {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'CalendarCheck': return <CalendarCheck {...props} />;
      case 'Lock': return <Lock {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="why-detox" className="py-24 bg-[#0d121f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="emerald" icon={<Sparkles className="w-3.5 h-3.5" />}>
            Distinctive Quality Standards
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Why Choose{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-purple-400">
              DetoxWithBagga
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We reject superficial advice and generic platitudes. Explore the 10 core principles that set our emotional wellness platform apart.
          </p>
        </div>

        {/* 10 Value Props Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {VALUE_PROPS.map((item, idx) => {
            const isExpanded = expandedId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'border-emerald-500/40 bg-slate-900/90 shadow-xl'
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Header Toggle */}
                <button
                  onClick={() => setExpandedId(isExpanded ? '' : item.id)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-2xl"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 shrink-0">
                      {getIcon(item.iconName)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <div className={`p-1.5 rounded-lg bg-slate-800 text-slate-400 transition-transform duration-200 shrink-0 ${isExpanded ? 'rotate-180 text-emerald-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Expanded Breakdown (What it is, Why it matters, User Benefit) */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 space-y-4 text-xs sm:text-sm">
                        <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-3">
                          <div>
                            <strong className="text-emerald-400 block text-xs font-semibold uppercase tracking-wider mb-1">
                              What It Is:
                            </strong>
                            <p className="text-slate-300 leading-relaxed">{item.whatItIs}</p>
                          </div>

                          <div>
                            <strong className="text-purple-400 block text-xs font-semibold uppercase tracking-wider mb-1">
                              Why It Matters:
                            </strong>
                            <p className="text-slate-300 leading-relaxed">{item.whyItMatters}</p>
                          </div>

                          <div>
                            <strong className="text-teal-300 block text-xs font-semibold uppercase tracking-wider mb-1">
                              Your Benefit:
                            </strong>
                            <p className="text-slate-200 font-medium leading-relaxed">{item.userBenefit}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
