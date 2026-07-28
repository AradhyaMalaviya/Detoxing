'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, HelpCircle, AlertTriangle } from 'lucide-react';
import { FAQ_ITEMS } from '@/constants/faq';
import { Badge } from '@/components/ui/Badge';

export const FAQAccordion: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 bg-[#0d121f] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <Badge variant="emerald" icon={<HelpCircle className="w-3.5 h-3.5" />}>
            Clear Answers & Transparency
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Frequently Asked{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-purple-400">
              Questions
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Everything you need to know about our conversation process, privacy, complimentary sessions, and platform scope.
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="relative max-w-xl mx-auto mb-8">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search any question (e.g. therapy, complimentary, response time)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All FAQs' },
            { id: 'sessions', label: 'Sessions' },
            { id: 'complimentary', label: 'Complimentary Offer' },
            { id: 'privacy', label: 'Privacy & Anonymity' },
            { id: 'emergency', label: 'Emergency & Scope' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                activeCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-md border border-emerald-400/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`glass-card rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-emerald-500/40 bg-slate-900/90 shadow-lg'
                      : 'border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? '' : faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-2xl"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      {faq.isImportant && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                      )}
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`p-1.5 rounded-lg bg-slate-800 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-emerald-400' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 animate-in fade-in duration-150">
                      {faq.category === 'emergency' && (
                        <div className="mb-3 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2 font-medium">
                          <AlertTriangle className="w-4 h-4 shrink-0" />
                          <span>Important Scope & Safety Notice</span>
                        </div>
                      )}
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 bg-slate-900/50 rounded-2xl border border-slate-800">
              <p className="text-slate-400 text-sm">
                No matching questions found for &quot;{searchQuery}&quot;.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-3 text-xs text-emerald-400 font-semibold hover:underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
