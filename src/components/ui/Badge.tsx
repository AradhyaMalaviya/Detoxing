import React from 'react';
import { clsx } from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'purple' | 'amber' | 'neutral';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'emerald',
  className,
  icon
}) => {
  const variantStyles = {
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    neutral: 'bg-slate-800/80 text-slate-300 border-slate-700/50'
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border transition-all duration-200',
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="inline-block">{icon}</span>}
      {children}
    </span>
  );
};
