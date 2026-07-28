'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  RefreshCw,
  Wind,
  ShieldAlert,
  Compass,
  MessageSquare,
  Users,
  Heart,
  HeartOff,
  TrendingUp,
  BookOpen,
  BatteryCharging,
  Zap,
  Sun,
  Target,
  Feather,
  Shield,
  Sparkles,
  CheckCircle2,
  X,
  ArrowRight
} from 'lucide-react';
import { TOPICS } from '@/constants/topics';
import { TopicItem } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface TopicsGridProps {
  onSelectTopicForBooking: (topicTitle: string) => void;
}

export const TopicsGrid: React.FC<TopicsGridProps> = ({ onSelectTopicForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<TopicItem | null>(null);

  const filteredTopics = TOPICS.filter((topic) => {
    if (activeCategory === 'all') return true;
    return topic.category === activeCategory;
  });

  const getIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-emerald-400" };
    switch (iconName) {
      case 'RefreshCw': return <RefreshCw {...props} />;
      case 'Wind': return <Wind {...props} />;
      case 'ShieldAlert': return <ShieldAlert {...props} />;
      case 'Compass': return <Compass {...props} />;
      case 'MessageSquare': return <MessageSquare {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Heart': return <Heart {...props} />;
      case 'HeartOff': return <HeartOff {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'BookOpen': return <BookOpen {...props} />;
      case 'BatteryCharging': return <BatteryCharging {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Sun': return <Sun {...props} />;
      case 'Target': return <Target {...props} />;
      case 'Feather': return <Feather {...props} />;
      case 'Shield': return <Shield {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="topics" className="py-24 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
            Comprehensive Discussion Areas
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            What We{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-purple-400">
              Talk About
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            No topic is too small, complex, or unusual. Explore 16 core areas where structured conversations bring immediate relief and perspective.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'All Topics (16)' },
            { id: 'emotional', label: 'Emotional Wellness' },
            { id: 'relationships', label: 'Relationships & Social' },
            { id: 'career', label: 'Career & Academics' },
            { id: 'growth', label: 'Personal Growth' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                activeCategory === tab.id
                  ? 'bg-emerald-600 text-white font-semibold shadow-md shadow-emerald-950/40 border border-emerald-400/30'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 16 Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredTopics.map((topic, idx) => (
              <motion.div
                key={topic.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onClick={() => setSelectedTopic(topic)}
                className="glass-card p-6 rounded-2xl cursor-pointer flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-emerald-500/40 transition-colors">
                      {getIcon(topic.iconName)}
                    </div>
                    {topic.popular && (
                      <Badge variant="amber" className="text-[10px]">
                        Popular Focus
                      </Badge>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mt-2 line-clamp-3">
                      {topic.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-emerald-400 font-medium">
                  <span>Explore Takeaways</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Topic Detail Modal */}
        {selectedTopic && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl max-w-lg w-full border border-slate-700 shadow-2xl relative space-y-6"
            >
              <button
                onClick={() => setSelectedTopic(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg focus:outline-none"
                aria-label="Close detail modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                  {getIcon(selectedTopic.iconName)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedTopic.title}
                  </h3>
                  <Badge variant="emerald" className="mt-1">
                    {selectedTopic.category.toUpperCase()}
                  </Badge>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedTopic.description}
              </p>

              <div className="space-y-3 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  Key Takeaways & Tools Included:
                </h4>
                <ul className="space-y-2">
                  {selectedTopic.keyTakeaways.map((point, pIdx) => (
                    <li key={pIdx} className="text-xs text-slate-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => {
                    const title = selectedTopic.title;
                    setSelectedTopic(null);
                    onSelectTopicForBooking(title);
                  }}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Request Conversation On This Topic
                </Button>
              </div>
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
};
