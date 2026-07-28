'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  CheckCircle2,
  Clock,
  Heart,
  Send,
  Mail,
  User,
  MessageSquare,
  CalendarCheck,
  ArrowRight,
  ArrowLeft,
  Shield,
  Sparkles,
  Gift,
  ChevronRight
} from 'lucide-react';
import { BRAND } from '@/constants/brand';
import { SessionBookingFormData } from '@/types';

interface BookingSectionProps {
  initialTopic?: string;
  onSuccessToast?: (msg: string) => void;
}

/* ─── Floating organic shape component ─── */
const FloatingBlob: React.FC<{
  className?: string;
  delay?: number;
  duration?: number;
}> = ({ className = '', delay = 0, duration = 20 }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
    animate={{
      y: [0, -30, 10, -20, 0],
      x: [0, 15, -10, 20, 0],
      scale: [1, 1.1, 0.95, 1.05, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

/* ─── Step indicator component ─── */
const StepIndicator: React.FC<{
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}> = ({ currentStep, totalSteps, stepLabels }) => (
  <div className="flex items-center justify-center gap-0 w-full max-w-xl mx-auto mb-10">
    {Array.from({ length: totalSteps }).map((_, i) => {
      const isCompleted = i < currentStep;
      const isActive = i === currentStep;

      return (
        <React.Fragment key={i}>
          <div className="flex flex-col items-center relative z-10">
            <motion.div
              className={`
                w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-sm font-bold
                transition-all duration-500 border-2
                ${isCompleted
                  ? 'bg-emerald-500 border-emerald-400 text-white shadow-lg shadow-emerald-500/30'
                  : isActive
                    ? 'bg-gradient-to-br from-emerald-500 to-teal-400 border-emerald-400/60 text-white shadow-xl shadow-emerald-500/40'
                    : 'bg-slate-800/80 border-slate-600/50 text-slate-500'
                }
              `}
              animate={isActive ? { scale: [1, 1.08, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              {isCompleted ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                <span>{i + 1}</span>
              )}
            </motion.div>
            <span className={`
              hidden sm:block text-[10px] mt-2 font-medium tracking-wide whitespace-nowrap
              ${isCompleted ? 'text-emerald-400' : isActive ? 'text-white' : 'text-slate-500'}
            `}>
              {stepLabels[i]}
            </span>
          </div>

          {/* Connector line */}
          {i < totalSteps - 1 && (
            <div className="flex-1 h-0.5 mx-1 sm:mx-2 relative overflow-hidden rounded-full bg-slate-700/60">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: isCompleted ? '100%' : '0%' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>
          )}
        </React.Fragment>
      );
    })}
  </div>
);

/* ─── Form field wrapper ─── */
const FormField: React.FC<{
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  hint?: string;
}> = ({ label, required, error, children, hint }) => (
  <div className="space-y-2">
    <label className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-300/90 uppercase tracking-[0.12em]">
      {label}
      {required && <span className="text-emerald-400 text-sm">*</span>}
    </label>
    {children}
    {hint && !error && (
      <p className="text-[10px] text-slate-500 pl-1">{hint}</p>
    )}
    {error && (
      <motion.p
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[11px] text-rose-400 pl-1 flex items-center gap-1"
      >
        <span className="w-1 h-1 rounded-full bg-rose-400 inline-block" />
        {error}
      </motion.p>
    )}
  </div>
);

/* ─── Input component with glass styling ─── */
const inputStyles = `
  w-full px-4 py-3.5 rounded-2xl
  bg-white/[0.04] backdrop-blur-sm
  border border-white/[0.08]
  text-white placeholder-slate-500 text-sm
  focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.06]
  focus:shadow-[0_0_0_3px_rgba(16,185,129,0.1)]
  transition-all duration-300
  hover:border-white/[0.15] hover:bg-white/[0.05]
`;

const selectStyles = `
  w-full px-4 py-3.5 rounded-2xl
  bg-white/[0.04] backdrop-blur-sm
  border border-white/[0.08]
  text-white text-sm
  focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.06]
  focus:shadow-[0_0_0_3px_rgba(16,185,129,0.1)]
  transition-all duration-300
  hover:border-white/[0.15] hover:bg-white/[0.05]
  appearance-none cursor-pointer
`;


/* ─── Topic card component ─── */
const TopicCard: React.FC<{
  topic: string;
  selected: boolean;
  onToggle: () => void;
  emoji: string;
}> = ({ topic, selected, onToggle, emoji }) => (
  <motion.button
    type="button"
    onClick={onToggle}
    whileHover={{ y: -2, scale: 1.02 }}
    whileTap={{ scale: 0.97 }}
    className={`
      group relative px-4 py-3 rounded-2xl text-xs sm:text-[13px] font-medium
      transition-all duration-300 text-left
      ${selected
        ? 'bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-emerald-300 border border-emerald-500/40 shadow-lg shadow-emerald-500/10'
        : 'bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:border-white/[0.15] hover:text-slate-200 hover:bg-white/[0.06]'
      }
    `}
  >
    <span className="flex items-center gap-2">
      <span className="text-sm">{selected ? '✓' : emoji}</span>
      <span>{topic}</span>
    </span>
    {selected && (
      <motion.div
        layoutId="topic-glow"
        className="absolute inset-0 rounded-2xl border border-emerald-400/30"
        initial={false}
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
      />
    )}
  </motion.button>
);

/* ─── Duration card ─── */
const DurationCard: React.FC<{
  value: string;
  label: string;
  selected: boolean;
  onSelect: () => void;
  recommendation?: string;
}> = ({ value, label, selected, onSelect, recommendation }) => (
  <motion.button
    type="button"
    onClick={onSelect}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.97 }}
    className={`
      relative flex flex-col items-center gap-1.5 py-4 px-3 rounded-2xl text-center
      transition-all duration-300 border
      ${selected
        ? 'bg-gradient-to-b from-emerald-500/15 to-emerald-600/5 border-emerald-500/40 shadow-lg shadow-emerald-500/10'
        : 'bg-white/[0.03] border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.06]'
      }
    `}
  >
    <span className={`text-xl font-bold ${selected ? 'text-emerald-400' : 'text-slate-300'}`}>
      {value}
    </span>
    <span className={`text-[10px] uppercase tracking-wider font-semibold ${selected ? 'text-emerald-400/70' : 'text-slate-500'}`}>
      {label}
    </span>
    {recommendation && (
      <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-emerald-500 text-[8px] font-bold text-white uppercase tracking-wider whitespace-nowrap">
        {recommendation}
      </span>
    )}
  </motion.button>
);


/* ═══════════════════════════════════════════════════════════════
   MAIN BOOKING SECTION COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export const BookingSection: React.FC<BookingSectionProps> = ({
  initialTopic = '',
  onSuccessToast
}) => {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<SessionBookingFormData>(() => {
    let defaultTz = 'UTC';
    if (typeof window !== 'undefined') {
      try {
        const detected = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (detected) defaultTz = detected;
      } catch {
        // Fallback to UTC if restricted
      }
    }
    return {
      fullName: '',
      age: '',
      email: '',
      instagramHandle: '',
      country: '',
      timezone: defaultTz,
      preferredLanguage: 'English',
      selectedTopics: initialTopic ? [initialTopic] : [],
      situationDescription: '',
      preferredDuration: '45',
      preferredTimeSlot: 'evening',
      urgency: 'moderate',
      consentAcknowledged: false,
      emergencyAcknowledged: false
    };
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Update initial topic when prop changes
  useEffect(() => {
    if (initialTopic && !formData.selectedTopics.includes(initialTopic)) {
      setFormData(prev => ({
        ...prev,
        selectedTopics: [...prev.selectedTopics, initialTopic]
      }));
    }
  }, [initialTopic]); // eslint-disable-line react-hooks/exhaustive-deps

  const topicEmojis: Record<string, string> = {
    'Overthinking & Mental Loops': '🧠',
    'Daily Stress & Anxiety': '😮‍💨',
    'Self-Doubt & Imposter Feelings': '🪞',
    'Assertive Communication': '🗣️',
    'Romantic Dynamics & Relationships': '💕',
    'Healing After Breakups': '💔',
    'Career Direction & Choices': '🎯',
    'Academic Performance': '📚',
    'Burnout Recovery': '🔥',
    'Personal Growth & Values': '🌱'
  };

  const availableTopics = Object.keys(topicEmojis);

  const stepLabels = ['Your Details', 'Your Focus', 'Confirm & Send'];

  const handleTopicToggle = useCallback((topic: string) => {
    setFormData((prev) => {
      const exists = prev.selectedTopics.includes(topic);
      if (exists) {
        return { ...prev, selectedTopics: prev.selectedTopics.filter((t) => t !== topic) };
      }
      return { ...prev, selectedTopics: [...prev.selectedTopics, topic] };
    });
  }, []);

  const validateStep = (s: number): boolean => {
    const errs: Record<string, string> = {};
    if (s === 0) {
      if (!formData.fullName.trim()) errs.fullName = 'We need your name to personalize your session';
      if (!formData.email.trim() || !formData.email.includes('@'))
        errs.email = 'A valid email is required so we can reach you';
    }
    if (s === 1) {
      if (!formData.situationDescription.trim())
        errs.situationDescription = 'A brief overview helps us prepare for your session';
    }
    if (s === 2) {
      if (!formData.consentAcknowledged) errs.consent = 'Please acknowledge the privacy policy';
      if (!formData.emergencyAcknowledged) errs.emergency = 'Please acknowledge this notice';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const goNext = () => {
    if (validateStep(step)) {
      setDirection(1);
      setStep((s) => Math.min(s + 1, 2));
    }
  };

  const goBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(2)) return;

    setIsSubmitting(true);
    const refCode = `DB-${Math.floor(100000 + Math.random() * 900000)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setBookingRef(refCode);
      setSubmitted(true);
      if (onSuccessToast) {
        onSuccessToast('Session request submitted successfully! Check your email shortly.');
      }
    }, 1200);
  };

  /* ─── Slide animation variants ─── */
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      filter: 'blur(4px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      filter: 'blur(4px)',
    }),
  };

  /* ─── Render step content ─── */
  const renderStep = () => {
    switch (step) {
      /* ── STEP 1: Personal Details ── */
      case 0:
        return (
          <motion.div
            key="step-0"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {/* Step title */}
            <div className="space-y-1.5 mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 flex items-center justify-center border border-emerald-500/20">
                  <User className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Let&apos;s get to know you</h3>
              </div>
              <p className="text-[13px] text-slate-400 pl-[42px]">
                Your information stays strictly confidential — always.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormField label="Full Name / Preferred Name" required error={errors.fullName}>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className={inputStyles}
                />
              </FormField>
              <FormField label="Age" hint="Helps us tailor the conversation">
                <input
                  type="text"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  placeholder="e.g. 24"
                  className={inputStyles}
                />
              </FormField>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormField label="Email Address" required error={errors.email}>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className={inputStyles}
                />
              </FormField>
              <FormField label="Instagram Handle" hint="Optional — for follow-up DMs">
                <input
                  type="text"
                  value={formData.instagramHandle}
                  onChange={(e) => setFormData({ ...formData, instagramHandle: e.target.value })}
                  placeholder="@yourhandle"
                  className={inputStyles}
                />
              </FormField>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormField label="Country & Timezone">
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="e.g. India (IST) / USA (EST)"
                  className={inputStyles}
                />
              </FormField>
              <FormField label="Preferred Language">
                <div className="relative">
                  <select
                    value={formData.preferredLanguage}
                    onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                    className={selectStyles}
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Punjabi">Punjabi</option>
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 rotate-90 pointer-events-none" />
                </div>
              </FormField>
            </div>
          </motion.div>
        );

      /* ── STEP 2: Topics & Description ── */
      case 1:
        return (
          <motion.div
            key="step-1"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="space-y-1.5 mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/10 flex items-center justify-center border border-purple-500/20">
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">What&apos;s on your mind?</h3>
              </div>
              <p className="text-[13px] text-slate-400 pl-[42px]">
                Select as many as you&apos;d like — this helps us personalize.
              </p>
            </div>

            {/* Topic cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {availableTopics.map((topic) => (
                <TopicCard
                  key={topic}
                  topic={topic}
                  emoji={topicEmojis[topic]}
                  selected={formData.selectedTopics.includes(topic)}
                  onToggle={() => handleTopicToggle(topic)}
                />
              ))}
            </div>

            {/* Description textarea */}
            <FormField
              label="What would you like to focus on during your session?"
              required
              error={errors.situationDescription}
            >
              <textarea
                rows={4}
                value={formData.situationDescription}
                onChange={(e) => setFormData({ ...formData, situationDescription: e.target.value })}
                placeholder="Share a brief overview of what has been on your mind lately... No judgement here."
                className={`${inputStyles} resize-none leading-relaxed`}
              />
            </FormField>
          </motion.div>
        );

      /* ── STEP 3: Preferences & Submit ── */
      case 2:
        return (
          <motion.div
            key="step-2"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="space-y-1.5 mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 flex items-center justify-center border border-amber-500/20">
                  <CalendarCheck className="w-4 h-4 text-amber-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Almost there — just a few preferences</h3>
              </div>
              <p className="text-[13px] text-slate-400 pl-[42px]">
                Choose what works best for your schedule.
              </p>
            </div>

            {/* Duration selection */}
            <FormField label="Preferred Session Duration">
              <div className="grid grid-cols-3 gap-3">
                <DurationCard
                  value="30"
                  label="Minutes"
                  selected={formData.preferredDuration === '30'}
                  onSelect={() => setFormData({ ...formData, preferredDuration: '30' })}
                />
                <DurationCard
                  value="45"
                  label="Minutes"
                  selected={formData.preferredDuration === '45'}
                  onSelect={() => setFormData({ ...formData, preferredDuration: '45' })}
                  recommendation="Popular"
                />
                <DurationCard
                  value="60"
                  label="Minutes"
                  selected={formData.preferredDuration === '60'}
                  onSelect={() => setFormData({ ...formData, preferredDuration: '60' })}
                />
              </div>
            </FormField>

            {/* Time slot */}
            <FormField label="Preferred Time Slot">
              <div className="relative">
                <select
                  value={formData.preferredTimeSlot}
                  onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value as 'morning' | 'afternoon' | 'evening' | 'flexible' })}
                  className={selectStyles}
                >
                  <option value="morning">☀️ Morning (9 AM – 12 PM)</option>
                  <option value="afternoon">🌤️ Afternoon (12 PM – 5 PM)</option>
                  <option value="evening">🌙 Evening (5 PM – 10 PM)</option>
                  <option value="flexible">🕐 Flexible / Any Time</option>
                </select>
                <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 rotate-90 pointer-events-none" />
              </div>
            </FormField>

            {/* Consent checkboxes with premium styling */}
            <div className="space-y-3 pt-2">
              <label className="group flex items-start gap-3.5 cursor-pointer p-3 rounded-2xl border border-white/[0.05] hover:border-white/[0.1] transition-all bg-white/[0.02] hover:bg-white/[0.04]">
                <div className="relative mt-0.5">
                  <input
                    type="checkbox"
                    checked={formData.consentAcknowledged}
                    onChange={(e) => setFormData({ ...formData, consentAcknowledged: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className={`
                    w-5 h-5 rounded-lg border-2 transition-all duration-300 flex items-center justify-center
                    ${formData.consentAcknowledged
                      ? 'bg-emerald-500 border-emerald-400'
                      : 'bg-transparent border-slate-600 group-hover:border-slate-500'
                    }
                  `}>
                    {formData.consentAcknowledged && (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3 h-3 text-white"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 6l3 3 5-5" />
                      </motion.svg>
                    )}
                  </div>
                </div>
                <span className="text-xs text-slate-300/90 leading-relaxed">
                  I agree to the privacy policy and consent to receiving session scheduling messages. My information will remain strictly confidential.
                </span>
              </label>
              {errors.consent && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[11px] text-rose-400 pl-10"
                >
                  {errors.consent}
                </motion.p>
              )}

              <label className="group flex items-start gap-3.5 cursor-pointer p-3 rounded-2xl border border-white/[0.05] hover:border-white/[0.1] transition-all bg-white/[0.02] hover:bg-white/[0.04]">
                <div className="relative mt-0.5">
                  <input
                    type="checkbox"
                    checked={formData.emergencyAcknowledged}
                    onChange={(e) => setFormData({ ...formData, emergencyAcknowledged: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className={`
                    w-5 h-5 rounded-lg border-2 transition-all duration-300 flex items-center justify-center
                    ${formData.emergencyAcknowledged
                      ? 'bg-emerald-500 border-emerald-400'
                      : 'bg-transparent border-slate-600 group-hover:border-slate-500'
                    }
                  `}>
                    {formData.emergencyAcknowledged && (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3 h-3 text-white"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 6l3 3 5-5" />
                      </motion.svg>
                    )}
                  </div>
                </div>
                <span className="text-xs text-slate-300/90 leading-relaxed">
                  I understand that DetoxWithBagga offers non-clinical emotional support conversations and does NOT provide licensed psychotherapy, crisis intervention, or emergency medical treatment.
                </span>
              </label>
              {errors.emergency && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[11px] text-rose-400 pl-10"
                >
                  {errors.emergency}
                </motion.p>
              )}
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  /* ─── Success state ─── */
  const renderSuccess = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center py-8 sm:py-14 space-y-8 relative"
    >
      {/* Celebration particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${20 + i * 12}%`,
              background: i % 2 === 0 ? '#10b981' : '#a78bfa',
            }}
            initial={{ top: '50%', opacity: 0, scale: 0 }}
            animate={{
              top: `${10 + (i % 3) * 20}%`,
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{ duration: 2, delay: i * 0.15, ease: 'easeOut' }}
          />
        ))}
      </div>

      {/* Success icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
        className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/20"
      >
        <CheckCircle2 className="w-10 h-10" />
      </motion.div>

      <div className="space-y-3 max-w-lg mx-auto">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">
          You&apos;re all set, <span className="text-emerald-400">{formData.fullName.split(' ')[0]}</span>! 🎉
        </h3>
        <p className="text-sm text-slate-300/90 leading-relaxed">
          Your session request has been securely received. Bagga will personally review it and email proposed time slots to{' '}
          <strong className="text-slate-200">{formData.email}</strong> within 12 hours.
        </p>
      </div>

      {/* Booking details card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm max-w-md mx-auto"
      >
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="text-left space-y-0.5">
            <span className="text-slate-500 text-[10px] uppercase tracking-wider">Booking Ref</span>
            <p className="text-white font-mono font-bold">{bookingRef}</p>
          </div>
          <div className="text-left space-y-0.5">
            <span className="text-slate-500 text-[10px] uppercase tracking-wider">Status</span>
            <p className="text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Pending Review
            </p>
          </div>
          <div className="text-left space-y-0.5">
            <span className="text-slate-500 text-[10px] uppercase tracking-wider">Offer</span>
            <p className="text-amber-400 font-semibold">Complimentary 1 of 2</p>
          </div>
          <div className="text-left space-y-0.5">
            <span className="text-slate-500 text-[10px] uppercase tracking-wider">Timezone</span>
            <p className="text-slate-300">{formData.timezone}</p>
          </div>
        </div>
      </motion.div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <a
          href={`mailto:${BRAND.email}?subject=${encodeURIComponent(
            `Session Request: ${formData.fullName} [Ref: ${bookingRef}]`
          )}&body=${encodeURIComponent(
            `Hi Bagga,\n\nI would like to confirm my 1-on-1 session request.\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nInstagram: ${formData.instagramHandle || 'N/A'}\nTopics: ${formData.selectedTopics.join(', ')}\nDetails:\n${formData.situationDescription}\n\nBooking Ref: ${bookingRef}`
          )}`}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-sm font-semibold shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-500/30"
        >
          <Mail className="w-4 h-4" />
          <span>Send Direct Email</span>
        </a>
        <button
          onClick={() => { setSubmitted(false); setStep(0); }}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/[0.05] border border-white/[0.08] text-slate-300 text-sm font-medium hover:bg-white/[0.1] hover:text-white transition-all duration-300"
        >
          Submit Another
        </button>
        <a
          href={BRAND.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600/80 to-pink-600/80 text-white text-sm font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
        >
          Follow on Instagram
        </a>
      </div>
    </motion.div>
  );

  return (
    <section id="request-session" className="py-20 sm:py-28 relative overflow-hidden">
      {/* ─── Background: organic floating blobs ─── */}
      <div className="absolute inset-0 bg-[#0b0f17]">
        <FloatingBlob
          className="w-[500px] h-[500px] bg-emerald-600/30 -top-40 -left-40"
          delay={0}
          duration={25}
        />
        <FloatingBlob
          className="w-[400px] h-[400px] bg-purple-600/20 top-1/3 -right-32"
          delay={5}
          duration={22}
        />
        <FloatingBlob
          className="w-[350px] h-[350px] bg-teal-500/15 bottom-10 left-1/4"
          delay={3}
          duration={28}
        />
        <FloatingBlob
          className="w-[250px] h-[250px] bg-violet-500/10 top-20 right-1/3"
          delay={8}
          duration={18}
        />
        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0b0f17_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ─── Section Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-5"
        >
          {/* Complimentary badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/5 border border-amber-500/20 text-amber-400 text-xs font-semibold"
          >
            <Gift className="w-3.5 h-3.5" />
            <span>First 2 Sessions Are 100% Complimentary</span>
            <Sparkles className="w-3.5 h-3.5" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Request Your{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-purple-400">
              1-on-1 Conversation
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Take a moment for yourself. Submit your session request below, or open the official Google Form directly.
          </p>

          {/* Quick links row */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-3">
            <a
              href={BRAND.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] text-emerald-400 border border-white/[0.06] hover:border-emerald-500/30 transition-all duration-300 text-xs font-semibold"
            >
              <span>Open Google Form</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] text-emerald-400 border border-white/[0.06] hover:border-emerald-500/30 transition-all duration-300 text-xs font-semibold"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{BRAND.email}</span>
            </a>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <Clock className="w-3.5 h-3.5 text-emerald-500" />
              Response within 12 hours
            </span>
          </div>
        </motion.div>

        {/* ─── Main Form Container ─── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Outer glow */}
          <div className="absolute -inset-px rounded-[28px] bg-gradient-to-b from-emerald-500/20 via-transparent to-purple-500/10 opacity-60" />

          {/* Glass container */}
          <div className="relative rounded-[26px] bg-white/[0.03] backdrop-blur-xl border border-white/[0.07] shadow-2xl shadow-black/30 overflow-hidden">

            {/* Inner subtle gradient accent at top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

            <div className="p-6 sm:p-8 md:p-10 lg:p-12">

              {submitted ? (
                renderSuccess()
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Progress stepper */}
                  <StepIndicator
                    currentStep={step}
                    totalSteps={3}
                    stepLabels={stepLabels}
                  />

                  {/* Animated step content */}
                  <div className="min-h-[400px] sm:min-h-[420px]">
                    <AnimatePresence mode="wait" custom={direction}>
                      {renderStep()}
                    </AnimatePresence>
                  </div>

                  {/* Navigation buttons */}
                  <div className="flex items-center justify-between pt-8 mt-6 border-t border-white/[0.05]">
                    {/* Back button */}
                    <div>
                      {step > 0 && (
                        <motion.button
                          type="button"
                          onClick={goBack}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="group inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-medium text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300"
                        >
                          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                          Back
                        </motion.button>
                      )}
                    </div>

                    {/* Next / Submit button */}
                    <div className="ml-auto">
                      {step < 2 ? (
                        <motion.button
                          type="button"
                          onClick={goNext}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300 border border-emerald-500/30"
                        >
                          Continue
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      ) : (
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                          className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl text-sm font-semibold text-white overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                        >
                          {/* Animated gradient background */}
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]" />
                          {/* Glow effect */}
                          <div className="absolute inset-0 shadow-xl shadow-emerald-500/25" />

                          <span className="relative z-10 flex items-center gap-2.5">
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                Submit Request (2 Free)
                              </>
                            )}
                          </span>
                        </motion.button>
                      )}
                    </div>
                  </div>

                  {/* Trust indicator */}
                  <div className="flex items-center justify-center gap-2 pt-5 text-[10px] text-slate-600">
                    <Shield className="w-3 h-3" />
                    <span>Your data is encrypted and never shared with third parties</span>
                  </div>
                </form>
              )}

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
