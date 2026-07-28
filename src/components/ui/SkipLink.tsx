'use client';

import React from 'react';

export const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-emerald-600 focus:text-white focus:font-semibold focus:rounded-lg focus:shadow-2xl focus:outline-none"
    >
      Skip to main content
    </a>
  );
};
