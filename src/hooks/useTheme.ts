'use client';

import { useState, useEffect } from 'react';

export type Theme = 'dark' | 'light';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as Theme | null;
      if (saved) return saved;
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', theme === 'light');
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}
