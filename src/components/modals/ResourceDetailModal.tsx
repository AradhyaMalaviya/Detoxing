'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, Clock, Calendar, Tag, CheckCircle2, Share2 } from 'lucide-react';
import { EducationalArticle } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ResourceDetailModalProps {
  article: EducationalArticle | null;
  onClose: () => void;
  onShareToast?: (msg: string) => void;
}

export const ResourceDetailModal: React.FC<ResourceDetailModalProps> = ({
  article,
  onClose,
  onShareToast
}) => {
  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    if (onShareToast) {
      onShareToast('Article link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="glass-panel p-6 sm:p-10 rounded-3xl max-w-3xl w-full border border-slate-700 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto my-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800/80 focus:outline-none"
          aria-label="Close article modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Article Meta Header */}
        <div className="space-y-4 pr-10">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="emerald">{article.category}</Badge>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {article.date}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            {article.title}
          </h2>

          <p className="text-base text-slate-300 leading-relaxed font-medium italic border-l-2 border-emerald-500 pl-4 py-1 bg-emerald-500/5 rounded-r-xl">
            {article.excerpt}
          </p>
        </div>

        {/* Article Content Body */}
        <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed pt-4 border-t border-slate-800">
          <p>{article.content.intro}</p>

          {article.content.sections.map((sec, idx) => (
            <div key={idx} className="space-y-3 bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-emerald-300">
                {sec.heading}
              </h3>
              <p className="text-slate-300 leading-relaxed">{sec.body}</p>

              {sec.keyPoints && sec.keyPoints.length > 0 && (
                <ul className="space-y-1.5 pt-2">
                  {sec.keyPoints.map((point, pIdx) => (
                    <li key={pIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Actionable Reflection Exercise Box */}
          {article.content.actionableExercise && (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-teal-950/30 border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>Actionable Reflection Exercise</span>
              </div>
              <p className="text-sm text-emerald-100 leading-relaxed">
                {article.content.actionableExercise}
              </p>
            </div>
          )}

          <p className="font-medium text-slate-200">{article.content.conclusion}</p>
        </div>

        {/* Tags & Action Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-slate-500" />
            {article.tags.map((tag) => (
              <span key={tag} className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-lg">
                #{tag}
              </span>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleShare}
            icon={<Share2 className="w-4 h-4" />}
          >
            Share Guide
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
