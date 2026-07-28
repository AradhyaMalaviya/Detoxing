'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Heart, MessageCircle, Bookmark } from 'lucide-react';
import { InstagramIcon as Instagram } from '@/components/ui/Icons';
import { BRAND } from '@/constants/brand';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const InstagramIntegration: React.FC = () => {
  const posts = [
    {
      title: "5 Signs You're Emotionally Burned Out (Not Lazy)",
      likes: "1,240",
      comments: "84",
      tag: "Mental Wellness"
    },
    {
      title: "Why Your Brain Overthinks At 2 AM (And 3 Grounding Rules)",
      likes: "2,150",
      comments: "142",
      tag: "Overthinking"
    },
    {
      title: "How To Say 'No' Without Over-Explaining Yourself",
      likes: "1,890",
      comments: "98",
      tag: "Boundaries"
    }
  ];

  return (
    <section className="py-24 bg-[#0d121f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="purple" icon={<Instagram className="w-3.5 h-3.5" />}>
            Primary Acquisition Channel
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Connect With Us On{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">
              Instagram
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Join our growing community of 10,000+ members for daily reflections, mindset shifts, and emotional wellness insights.
          </p>
        </div>

        {/* Profile Card Replicated from Reference Image 30590.jpg */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-700/80 shadow-2xl space-y-6">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 p-1 shadow-xl">
                  <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-emerald-400 font-extrabold text-2xl">
                    DB
                  </div>
                </div>
              </div>

              <div className="text-center sm:text-left space-y-2 flex-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h3 className="text-xl font-bold text-white">{BRAND.handle}</h3>
                  <Badge variant="emerald" className="text-[10px]">Verified Profile</Badge>
                </div>

                <p className="text-xs text-slate-400 font-medium">
                  {BRAND.founder} • {BRAND.role}
                </p>

                {/* Bio lines faithful to 30590.jpg */}
                <div className="text-xs sm:text-sm text-slate-200 space-y-1 pt-1 font-normal">
                  <p>🌿 A safe space to be heard.</p>
                  <p>📅 Request a session below</p>
                  <p>🎁 2 complimentary sessions for new members below 👇</p>
                  <a
                    href={BRAND.googleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-semibold hover:underline flex items-center gap-1 inline-flex mt-1"
                  >
                    <span>forms.gle/dtXs8yhF937H4RREA</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Action Bar matching 30590.jpg */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-center sm:justify-between gap-4">
              <span className="text-xs text-purple-300 font-medium bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20">
                📖 Reading: {BRAND.readingRecommendation}
              </span>

              <div className="flex items-center gap-3">
                <Button
                  variant="primary"
                  size="sm"
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<Instagram className="w-4 h-4" />}
                >
                  Follow @detoxwithbagga
                </Button>
              </div>
            </div>

          </div>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl space-y-4 border border-slate-800 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-emerald-400">@{BRAND.handle}</span>
                  <Badge variant="purple">{post.tag}</Badge>
                </div>

                <p className="text-base font-bold text-white leading-snug">
                  &ldquo;{post.title}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-rose-400 font-medium">
                    <Heart className="w-3.5 h-3.5 fill-rose-400" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" /> {post.comments}
                  </span>
                </div>
                <Bookmark className="w-4 h-4 hover:text-emerald-400 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
