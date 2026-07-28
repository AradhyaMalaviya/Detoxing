'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, ShieldAlert } from 'lucide-react';
import { BRAND } from '@/constants/brand';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DisclaimerModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="glass-panel p-6 sm:p-10 rounded-3xl max-w-2xl w-full border border-rose-500/40 shadow-2xl relative space-y-6 max-h-[85vh] overflow-y-auto my-8"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800/80 focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Non-Therapy Disclaimer</h2>
            <p className="text-xs text-rose-400 font-semibold">Important Medical Notice</p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p className="font-semibold text-white bg-rose-500/10 p-4 rounded-xl border border-rose-500/20">
            DetoxWithBagga provides supportive peer-level conversations, reflective exercises, and educational self-growth guidance. We do NOT provide licensed psychotherapy, clinical psychology, medical diagnosis, psychiatric care, or prescription medication.
          </p>

          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-rose-400">
            Crisis & Emergency Guidance
          </h3>
          <p>
            If you are experiencing thoughts of self-harm, severe psychiatric symptoms, or an acute emergency, DO NOT wait for a session response. Please contact local emergency services immediately:
          </p>

          <ul className="space-y-2 bg-slate-900 p-4 rounded-xl border border-slate-800 font-mono text-xs">
            {BRAND.emergencyHotlines.map((h, idx) => (
              <li key={idx} className="flex justify-between text-slate-200">
                <span><strong>{h.country}:</strong> {h.name}</span>
                <span className="text-emerald-400">{h.contact}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};
