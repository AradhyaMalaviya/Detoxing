'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  CheckCircle2,
  Clock,
  Heart,
  Send,
  Mail
} from 'lucide-react';
import { BRAND } from '@/constants/brand';
import { SessionBookingFormData } from '@/types';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

interface BookingSectionProps {
  initialTopic?: string;
  onSuccessToast?: (msg: string) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialTopic = '',
  onSuccessToast
}) => {
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
      selectedTopics: initialTopic ? [initialTopic] : ['Overthinking & Mental Loops'],
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

  const availableTopics = [
    'Overthinking & Mental Loops',
    'Daily Stress & Anxiety',
    'Self-Doubt & Imposter Feelings',
    'Assertive Communication',
    'Romantic Dynamics & Relationships',
    'Healing After Breakups',
    'Career Direction & Choices',
    'Academic Performance',
    'Burnout Recovery',
    'Personal Growth & Values'
  ];

  const handleTopicToggle = (topic: string) => {
    setFormData((prev) => {
      const exists = prev.selectedTopics.includes(topic);
      if (exists) {
        return {
          ...prev,
          selectedTopics: prev.selectedTopics.filter((t) => t !== topic)
        };
      } else {
        return { ...prev, selectedTopics: [...prev.selectedTopics, topic] };
      }
    });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim() || !formData.email.includes('@'))
      errs.email = 'Valid Email Address is required';
    if (!formData.situationDescription.trim())
      errs.situationDescription = 'Please briefly describe what you would like to discuss';
    if (!formData.consentAcknowledged)
      errs.consent = 'You must agree to the privacy policy';
    if (!formData.emergencyAcknowledged)
      errs.emergency = 'You must acknowledge the non-therapy emergency notice';
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const refCode = `DB-${Math.floor(100000 + Math.random() * 900000)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setBookingRef(refCode);
      setSubmitted(true);
      if (onSuccessToast) {
        onSuccessToast('Session request submitted successfully! Check your email shortly.');
      }
    }, 1000);
  };

  return (
    <section id="request-session" className="py-24 bg-[#0b0f17] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <Badge variant="amber" icon={<Heart className="w-3.5 h-3.5" />}>
            🎁 First 2 Sessions Are 100% Complimentary
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Request Your{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-purple-400">
              1-on-1 Conversation
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Take a moment for yourself. Submit your session request below or open the official Google Form directly.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <a
              href={BRAND.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 transition-colors"
            >
              <span>Open Official Google Form</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email: {BRAND.email}</span>
            </a>
            <span className="text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-emerald-400" /> Response Time &lt; 12 Hours
            </span>
          </div>
        </div>

        {/* Interactive Booking Container */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-700/70 shadow-2xl relative overflow-hidden">
          
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <h3 className="text-2xl font-bold text-white">
                  Session Request Received!
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Thank you, <strong className="text-emerald-400">{formData.fullName}</strong>. Your request has been securely logged. Bagga will personally review your submission and email proposed time slots to <strong className="text-slate-200">{formData.email}</strong> from <strong className="text-emerald-400">{BRAND.email}</strong> within 12 hours.
                </p>
              </div>

              <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800 text-xs text-slate-400 max-w-md mx-auto space-y-1">
                <p><strong>Booking Ref:</strong> {bookingRef}</p>
                <p><strong>Official Email:</strong> {BRAND.email}</p>
                <p><strong>Offer:</strong> Complimentary Session 1 of 2</p>
                <p><strong>Timezone:</strong> {formData.timezone}</p>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${BRAND.email}?subject=${encodeURIComponent(
                    `Session Request: ${formData.fullName} [Ref: ${bookingRef}]`
                  )}&body=${encodeURIComponent(
                    `Hi Bagga,\n\nI would like to confirm my 1-on-1 session request.\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nInstagram: ${formData.instagramHandle || 'N/A'}\nTopics: ${formData.selectedTopics.join(', ')}\nDetails:\n${formData.situationDescription}\n\nBooking Ref: ${bookingRef}`
                  )}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email to {BRAND.email}</span>
                </a>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Request
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on Instagram
                </Button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Full Name & Age */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Full Name / Preferred Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-400 mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Age
                  </label>
                  <input
                    type="text"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="e.g. 24"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Row 2: Email & Instagram Handle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Instagram Handle (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.instagramHandle}
                    onChange={(e) => setFormData({ ...formData, instagramHandle: e.target.value })}
                    placeholder="@yourhandle"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Row 3: Country & Preferred Language */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Country & Timezone
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. India (IST) / USA (EST)"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Preferred Language
                  </label>
                  <select
                    value={formData.preferredLanguage}
                    onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Punjabi">Punjabi</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Topics Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Select Topics To Discuss:
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableTopics.map((topic) => {
                    const selected = formData.selectedTopics.includes(topic);
                    return (
                      <button
                        type="button"
                        key={topic}
                        onClick={() => handleTopicToggle(topic)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                          selected
                            ? 'bg-emerald-600 text-white border border-emerald-400 shadow-md'
                            : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                        }`}
                      >
                        {selected ? '✓ ' : '+ '} {topic}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 5: Situation Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  What would you like to focus on during your session? *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.situationDescription}
                  onChange={(e) => setFormData({ ...formData, situationDescription: e.target.value })}
                  placeholder="Share a brief overview of what has been on your mind lately..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 leading-relaxed"
                />
                {errors.situationDescription && (
                  <p className="text-xs text-rose-400 mt-1">{errors.situationDescription}</p>
                )}
              </div>

              {/* Row 6: Duration & Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Preferred Session Duration
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['30', '45', '60'] as const).map((d) => (
                      <button
                        type="button"
                        key={d}
                        onClick={() => setFormData({ ...formData, preferredDuration: d })}
                        className={`py-2 rounded-xl text-xs font-semibold border ${
                          formData.preferredDuration === d
                            ? 'bg-emerald-600 text-white border-emerald-400'
                            : 'bg-slate-900 text-slate-400 border-slate-800'
                        }`}
                      >
                        {d} Mins
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTimeSlot}
                    onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value as 'morning' | 'afternoon' | 'evening' | 'flexible' })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 10 PM)</option>
                    <option value="flexible">Flexible / Any Time</option>
                  </select>
                </div>
              </div>

              {/* Checkboxes: Privacy & Non-Therapy Emergency Disclaimer */}
              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consentAcknowledged}
                    onChange={(e) => setFormData({ ...formData, consentAcknowledged: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-700 bg-slate-900"
                  />
                  <span className="text-xs text-slate-300 leading-relaxed">
                    I agree to the privacy policy and consent to receiving session scheduling messages. My information will remain strictly confidential.
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-xs text-rose-400 pl-7">{errors.consent}</p>
                )}

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.emergencyAcknowledged}
                    onChange={(e) => setFormData({ ...formData, emergencyAcknowledged: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-700 bg-slate-900"
                  />
                  <span className="text-xs text-slate-300 leading-relaxed">
                    I understand that DetoxWithBagga offers non-clinical emotional support conversations and does NOT provide licensed psychotherapy, crisis intervention, or emergency medical treatment.
                  </span>
                </label>
                {errors.emergency && (
                  <p className="text-xs text-rose-400 pl-7">{errors.emergency}</p>
                )}
              </div>

              {/* Submit CTA Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  isLoading={isSubmitting}
                  icon={<Send className="w-5 h-5" />}
                >
                  Submit Conversation Request (2 Free)
                </Button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
