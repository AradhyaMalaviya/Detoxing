'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CalendarHeart, BookOpen, Heart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

interface FinalCTAProps {
  onOpenBookingModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="py-24 bg-[#0d121f] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2">
          <Badge variant="emerald" icon={<Heart className="w-3.5 h-3.5" />}>
            🎁 2 Complimentary Conversations
          </Badge>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-4xl mx-auto"
        >
          You Don&apos;t Have To Figure Everything Out{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-purple-400">
            Alone.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto"
        >
          Sometimes one thoughtful conversation can bring the perspective and clarity you have been searching for.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenBookingModal}
            icon={<CalendarHeart className="w-5 h-5" />}
          >
            Request Your First Conversation
          </Button>

          <Button
            variant="secondary"
            size="lg"
            href="#resources"
            icon={<BookOpen className="w-5 h-5" />}
          >
            Explore Educational Resources
          </Button>
        </motion.div>

        <p className="text-xs text-slate-400 font-medium pt-2">
          🔒 100% Confidential • Zero Spam • No Credit Card Required
        </p>

      </div>
    </section>
  );
};
