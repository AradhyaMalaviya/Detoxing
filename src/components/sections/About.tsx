'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Shield, CheckCircle, Compass, MessageCircle, Lightbulb } from 'lucide-react';
import { BRAND } from '@/constants/brand';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <MessageCircle className="w-6 h-6 text-emerald-400" />,
      title: 'Thoughtful Listening',
      description: 'You are never rushed or interrupted. We listen to understand your emotional reality, not just to give quick answers.'
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-teal-400" />,
      title: 'Practical Self-Reflection',
      description: 'Move away from chaotic overthinking toward structured, empowering self-discovery exercises.'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Emotional Safety',
      description: 'A completely judgment-free space where all your feelings—no matter how complex or messy—are validated.'
    },
    {
      icon: <Compass className="w-6 h-6 text-amber-400" />,
      title: 'Respectful Boundaries',
      description: 'We honor your comfort zone and pace. No pressure, no unsolicited pushing, and absolute confidentiality.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0d121f] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Leaf className="w-4 h-4" /> About DetoxWithBagga
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Conversations Rooted In{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
              Empathy & Clarity
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            DetoxWithBagga was created out of a simple observation: in a hyper-connected world, millions of people feel profoundly unheard. We bridge the gap between isolating overthinking and meaningful self-growth.
          </p>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Mission Statement Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="glass-panel p-8 rounded-3xl border border-slate-700/60 shadow-xl space-y-6 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Heart className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-white">
                Why DetoxWithBagga Exists
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Life introduces moments of intense emotional friction: academic stress, career transitions, relationship heartbreaks, or simply an overactive brain at 2 AM. Too often, people keep these struggles bottled up because friends are busy or therapy feels intimidating.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                DetoxWithBagga provides an approachable, non-clinical environment where you can speak openly, decompress without judgment, and receive compassionate guidance tailored to your situation.
              </p>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-600/30 flex items-center justify-center text-emerald-400 font-bold">
                  B
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{BRAND.founder}</h4>
                  <p className="text-xs text-slate-400">{BRAND.role}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Expectations List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">
              What Makes Our Conversations Different
            </h3>

            <div className="space-y-4">
              {[
                {
                  title: 'Human-First Approach',
                  text: 'No rigid scripts or clinical checklists. Real conversations between two human beings.'
                },
                {
                  title: 'Actionable Reflection Tools',
                  text: 'Receive tailored journaling frameworks and communication guides after your session.'
                },
                {
                  title: 'Complimentary First Sessions',
                  text: 'Experience the support zero-risk with your first two 1-on-1 conversations free.'
                },
                {
                  title: 'Clear Ethical Boundaries',
                  text: 'We support emotional self-growth while encouraging professional medical care when needed.'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* 4 Brand Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl space-y-3"
            >
              <div className="p-3 rounded-xl bg-slate-900 inline-block border border-slate-800">
                {pillar.icon}
              </div>
              <h4 className="text-lg font-bold text-white">{pillar.title}</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
