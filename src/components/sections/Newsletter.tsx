'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, Lock, Sparkles, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

interface NewsletterProps {
  onSuccessToast?: (msg: string) => void;
}

export const Newsletter: React.FC<NewsletterProps> = ({ onSuccessToast }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubscribed(true);
      if (onSuccessToast) {
        onSuccessToast('Welcome to the weekly newsletter! Check your inbox shortly.');
      }
    }, 800);
  };

  return (
    <section className="py-20 bg-[#0b0f17] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-700/60 shadow-2xl relative overflow-hidden text-center space-y-6">
          
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <Mail className="w-7 h-7" />
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            <Badge variant="emerald" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Weekly Mental Clarity
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Improve Your Mental Clarity Every Week
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Join thousands of readers receiving short, empathetic weekly reflections, mindset frameworks, relationship advice, and book recommendations delivered straight to their inbox.
            </p>
          </div>

          {subscribed ? (
            <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/30 text-emerald-300 text-sm flex items-center justify-center gap-2 max-w-md mx-auto">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>You are subscribed! We appreciate your trust.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <Button
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto shrink-0"
                  isLoading={isLoading}
                  icon={<Send className="w-4 h-4" />}
                >
                  Subscribe
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero spam. Respectful privacy. Unsubscribe anytime.</span>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};
