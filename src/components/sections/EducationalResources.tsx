'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, ArrowRight, Search } from 'lucide-react';
import { EDUCATIONAL_ARTICLES } from '@/constants/resources';
import { EducationalArticle } from '@/types';
import { Badge } from '@/components/ui/Badge';

interface EducationalResourcesProps {
  onSelectArticle: (article: EducationalArticle) => void;
}

export const EducationalResources: React.FC<EducationalResourcesProps> = ({ onSelectArticle }) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allTags = ['All', 'Overthinking', 'Boundaries', 'Burnout', 'Imposter Syndrome', 'Mindset'];

  const filteredArticles = EDUCATIONAL_ARTICLES.filter((art) => {
    const matchesTag = selectedTag === 'All' || art.tags.includes(selectedTag);
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <section id="resources" className="py-24 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="emerald" icon={<BookOpen className="w-3.5 h-3.5" />}>
            Evidence-Informed Wellness Content
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Educational{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-purple-400">
              Resources & Guides
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Practical mental clarity essays, actionable journaling frameworks, and psychological education to empower your daily life.
          </p>
        </div>

        {/* Tag Filters & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedTag === tag
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => onSelectArticle(article)}
              className="glass-card p-6 sm:p-8 rounded-3xl cursor-pointer space-y-4 flex flex-col justify-between group border border-slate-800 hover:border-emerald-500/40"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="emerald">{article.category}</Badge>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-emerald-400 font-semibold">
                <span>Read Full Guide & Exercise</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
