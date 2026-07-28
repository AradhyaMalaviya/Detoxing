'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, Lock } from 'lucide-react';
import { BRAND } from '@/constants/brand';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="glass-panel p-6 sm:p-10 rounded-3xl max-w-2xl w-full border border-slate-700 shadow-2xl relative space-y-6 max-h-[85vh] overflow-y-auto my-8"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800/80 focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
            <p className="text-xs text-slate-400">Last updated: July 2026</p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400">
            1. Information Collection & Usage
          </h3>
          <p>
            DetoxWithBagga respects your fundamental right to privacy. When you request a conversation, we collect minimal information including your preferred name, email address, Instagram handle (optional), country, timezone, and brief topic preferences.
          </p>

          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400">
            2. Google Form & Session Data
          </h3>
          <p>
            Information submitted via our Google Form or embedded booking tool is accessed strictly by Bagga for scheduling and conversation preparation. We NEVER sell, share, trade, or monetize your personal data.
          </p>

          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400">
            3. Confidentiality
          </h3>
          <p>
            All 1-on-1 conversations are strictly confidential. We maintain zero public disclosure of participant identities or session notes.
          </p>

          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400">
            4. Data Retention & Deletion Requests
          </h3>
          <p>
            You have the right to request the permanent deletion of your session submission data at any time by emailing us at <strong className="text-white">{BRAND.email}</strong>.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
