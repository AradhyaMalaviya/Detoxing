'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FileEdit,
  Eye,
  CalendarCheck2,
  MessageCircleHeart,
  BookCheck,
  ArrowRight,
  Clock,
  Sparkles
} from 'lucide-react';
import { ProcessStep } from '@/types';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

interface ProcessTimelineProps {
  onOpenBookingModal: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenBookingModal }) => {
  const steps: ProcessStep[] = [
    {
      stepNumber: 1,
      title: 'Submit Session Request',
      subtitle: 'Quick 2-minute request form',
      description: 'Fill out our secure request form (or Google Form). Share what is on your mind, preferred topics, duration, and availability.',
      details: [
        'Collects basic contact & timezone info',
        'Option to remain completely anonymous',
        'Zero payment or credit card required (2 Free)'
      ],
      iconName: 'FileEdit',
      estimatedTime: '2 mins'
    },
    {
      stepNumber: 2,
      title: 'Thoughtful Review',
      subtitle: 'Personal review within 12h',
      description: 'Bagga personally reviews your submission to ensure our conversational scope aligns with your current needs.',
      details: [
        'Strict confidentiality guaranteed',
        'Non-therapy scope verification',
        'Timezone & availability mapping'
      ],
      iconName: 'Eye',
      estimatedTime: '< 12 hours'
    },
    {
      stepNumber: 3,
      title: 'Scheduling Confirmation',
      subtitle: 'Receive proposed time slots',
      description: 'You will receive an email or Instagram DM proposing 2–3 convenient time slots for your upcoming 1-on-1 session.',
      details: [
        'Flexible calendar integration',
        'Reschedule with 1-click ease',
        'Calendar reminder sent to your inbox'
      ],
      iconName: 'CalendarCheck2',
      estimatedTime: 'Instant lock'
    },
    {
      stepNumber: 4,
      title: '1-on-1 Supportive Conversation',
      subtitle: '45-60 minute private session',
      description: 'Join a private, gentle conversation designed to listen without judgment, untangle overthinking, and reframe stress.',
      details: [
        'Comfortable & non-judgmental environment',
        'Focus on active listening & clarity',
        'Zero pressure to discuss anything uncomfortable'
      ],
      iconName: 'MessageCircleHeart',
      estimatedTime: '45–60 mins'
    },
    {
      stepNumber: 5,
      title: 'Personalized Reflection Guide',
      subtitle: 'Custom follow-up resources',
      description: 'After the session, receive tailored journaling prompts, reframing exercises, and actionable mental clarity frameworks.',
      details: [
        'Custom reflection exercises',
        'Actionable boundary templates',
        'Option to schedule follow-up check-in'
      ],
      iconName: 'BookCheck',
      estimatedTime: 'Post-session'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileEdit':
        return <FileEdit className="w-6 h-6" />;
      case 'Eye':
        return <Eye className="w-6 h-6" />;
      case 'CalendarCheck2':
        return <CalendarCheck2 className="w-6 h-6" />;
      case 'MessageCircleHeart':
        return <MessageCircleHeart className="w-6 h-6" />;
      case 'BookCheck':
        return <BookCheck className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-[#0d121f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <Badge variant="emerald" icon={<Sparkles className="w-3.5 h-3.5" />}>
            Transparent & Effortless
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            How The{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-purple-400">
              Conversation Process
            </span>{' '}
            Works
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From submitting your request to receiving customized reflection tools, here is exactly what to expect at every step.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical Connecting Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500/50 to-purple-500/20 -translate-x-1/2 pointer-events-none" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.stepNumber}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  } gap-8 lg:gap-16`}
                >
                  
                  {/* Content Card */}
                  <div className="w-full lg:w-1/2">
                    <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-4 relative border border-slate-700/60 shadow-xl">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                          Step 0{step.stepNumber}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" /> {step.estimatedTime}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {step.title}
                      </h3>

                      <p className="text-xs text-emerald-300 font-medium">
                        {step.subtitle}
                      </p>

                      <p className="text-sm text-slate-300 leading-relaxed">
                        {step.description}
                      </p>

                      <ul className="space-y-2 pt-2 border-t border-slate-800">
                        {step.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-xs text-slate-400 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center Node Badge */}
                  <div className="shrink-0 relative z-20">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-950/60 font-extrabold text-lg">
                      {getIcon(step.iconName)}
                    </div>
                  </div>

                  {/* Spacer for 2-column layout balance */}
                  <div className="hidden lg:block lg:w-1/2" />

                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Timeline Bottom CTA */}
        <div className="mt-20 text-center space-y-4">
          <p className="text-sm text-slate-300">
            Ready to take the first step toward emotional clarity?
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenBookingModal}
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Request Your First Conversation (2 Complimentary)
          </Button>
        </div>

      </div>
    </section>
  );
};
