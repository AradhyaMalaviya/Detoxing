'use client';

import React from 'react';
import { ShieldCheck, PhoneCall, CheckCircle2, XCircle, HeartPulse } from 'lucide-react';
import { BRAND } from '@/constants/brand';
import { Badge } from '@/components/ui/Badge';

export const SafetyTransparency: React.FC = () => {
  return (
    <section className="py-20 bg-[#0d121f] border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <Badge variant="purple" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
            Ethical Responsibility
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Safety, Scope & Transparency
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We believe trust begins with absolute clarity about our services, limitations, and emergency protocols.
          </p>
        </div>

        {/* 2-Column Comparison Grid: What We Provide vs What We Do Not */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* What We Provide */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/30 space-y-4">
            <div className="flex items-center gap-3 text-emerald-400 font-bold text-lg">
              <CheckCircle2 className="w-6 h-6" />
              <span>What DetoxWithBagga Provides</span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <span><strong>Supportive Conversations:</strong> A calm, judgment-free 1-on-1 environment to express your thoughts safely.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <span><strong>Self-Growth Guidance:</strong> Practical tools to build emotional resilience, self-awareness, and clarity.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <span><strong>Thought Reframing:</strong> Structured exercises to untangle late-night overthinking and decision fatigue.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <span><strong>Educational Content:</strong> Evidence-informed mental wellness articles and reflection guides.</span>
              </li>
            </ul>
          </div>

          {/* What We Do NOT Provide */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-rose-500/30 space-y-4">
            <div className="flex items-center gap-3 text-rose-400 font-bold text-lg">
              <XCircle className="w-6 h-6" />
              <span>What We Do NOT Provide</span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0" />
                <span><strong>Licensed Psychotherapy:</strong> We do not offer clinical psychological therapy or medical psychiatric care.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0" />
                <span><strong>Medical Diagnosis:</strong> We do not diagnose mental health conditions or prescribe medication.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0" />
                <span><strong>Crisis Intervention:</strong> We are not equipped to manage active self-harm or acute emergency situations.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0" />
                <span><strong>Substitute for Medical Treatment:</strong> Our platform complements—never replaces—professional healthcare.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Emergency Crisis Hotline Banner */}
        <div className="bg-rose-950/30 p-6 sm:p-8 rounded-3xl border border-rose-500/40 shadow-xl space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-rose-500/20 text-rose-400 shrink-0">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                Emergency & Immediate Crisis Guidance
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                If you or someone you know is in immediate risk of self-harm, facing an acute mental health emergency, or requires urgent crisis intervention, please contact free, confidential emergency hotlines immediately:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {BRAND.emergencyHotlines.slice(0, 4).map((hotline, idx) => (
              <div key={idx} className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-xs font-semibold text-rose-400 block">{hotline.country}</span>
                <span className="text-sm font-bold text-white block">{hotline.name}</span>
                <div className="flex items-center gap-1 text-xs text-emerald-400 font-mono font-bold">
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{hotline.contact}</span>
                </div>
                <span className="text-[10px] text-slate-400 block">{hotline.available}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
