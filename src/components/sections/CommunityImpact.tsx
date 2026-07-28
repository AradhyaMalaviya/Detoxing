'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe, MessageSquareQuote, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { InstagramIcon as Instagram } from '@/components/ui/Icons';
import { BRAND } from '@/constants/brand';
import { Badge } from '@/components/ui/Badge';

export const CommunityImpact: React.FC = () => {
  const appreciationNotes = [
    {
      quote: "Talking to Bagga felt like taking a giant weight off my chest. I wasn't judged for feeling stuck at my age, and the journaling framework gave me actual clarity.",
      tag: "Career & Imposter Syndrome",
      location: "Verified Session Participant"
    },
    {
      quote: "The first session was complimentary, but the value was priceless. Having someone listen patiently without rushing to give cliché advice changed my whole week.",
      tag: "Late-Night Overthinking",
      location: "Verified Session Participant"
    },
    {
      quote: "I was struggling with breakup anxiety and couldn't sleep. The 1-on-1 session helped me organize my thoughts and set boundaries gently.",
      tag: "Relationship Clarity",
      location: "Verified Session Participant"
    }
  ];

  return (
    <section id="impact" className="py-24 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
            Ethical Social Proof
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Community{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-teal-300 to-emerald-400">
              Impact & Trust
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Real impact measured through genuine human connection, confidential conversations, and educational community reach.
          </p>
        </div>

        {/* Live Counter Metrics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Conversations Completed', val: BRAND.stats.conversationsCompleted, icon: <Heart className="w-6 h-6 text-emerald-400" /> },
            { label: 'Community Members', val: BRAND.stats.communityMembers, icon: <Instagram className="w-6 h-6 text-purple-400" /> },
            { label: 'Countries Reached', val: BRAND.stats.countriesReached, icon: <Globe className="w-6 h-6 text-teal-400" /> },
            { label: 'Educational Posts', val: BRAND.stats.educationalPosts, icon: <Award className="w-6 h-6 text-amber-400" /> }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-3xl text-center space-y-2 border border-slate-700/50 shadow-xl"
            >
              <div className="w-12 h-12 mx-auto rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-2">
                {stat.icon}
              </div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-white">
                {stat.val}
              </span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Anonymous Appreciation Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {appreciationNotes.map((note, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-3xl space-y-4 flex flex-col justify-between border border-slate-800"
            >
              <div className="space-y-4">
                <MessageSquareQuote className="w-8 h-8 text-emerald-400/60" />
                <p className="text-sm text-slate-200 leading-relaxed italic">
                  &ldquo;{note.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-semibold">{note.tag}</span>
                <span className="text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> {note.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
