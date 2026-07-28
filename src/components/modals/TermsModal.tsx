'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
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
          <div className="p-3 rounded-2xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Terms of Service</h2>
            <p className="text-xs text-slate-400">Last updated: July 2026</p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-teal-400">
            1. Service Nature
          </h3>
          <p>
            DetoxWithBagga provides peer-level emotional support conversations, structured self-reflection, and educational guidance. By requesting a session, you acknowledge that our services do not constitute licensed medical or psychiatric therapy.
          </p>

          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-teal-400">
            2. Complimentary Sessions & Availability
          </h3>
          <p>
            First two sessions are offered on a complimentary basis subject to availability. DetoxWithBagga reserves the right to accept or decline session requests based on schedule alignment and conversational scope.
          </p>

          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-teal-400">
            3. Respectful Conduct
          </h3>
          <p>
            All interactions must remain respectful, safe, and free from harassment, abuse, or inappropriate behavior.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
