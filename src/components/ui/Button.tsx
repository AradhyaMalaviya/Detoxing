'use client';

import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  isLoading = false,
  className,
  disabled,
  href,
  target,
  rel,
  onClick,
  type,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs sm:text-sm gap-1.5',
    md: 'px-5 py-2.5 text-sm sm:text-base gap-2',
    lg: 'px-7 py-3.5 text-base sm:text-lg gap-2.5 font-semibold'
  };

  const variantStyles = {
    primary:
      'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/30 border border-emerald-500/30 hover:shadow-emerald-900/50',
    secondary:
      'bg-slate-800/90 hover:bg-slate-700/90 text-slate-100 border border-slate-700/80 shadow-md',
    outline:
      'bg-transparent hover:bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/60',
    ghost:
      'bg-transparent hover:bg-slate-800/60 text-slate-300 hover:text-white',
    danger:
      'bg-rose-600 hover:bg-rose-500 text-white shadow-md'
  };

  const classes = clsx(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        icon && iconPosition === 'left' && <span className="inline-block">{icon}</span>
      )}
      <span>{children}</span>
      {!isLoading && icon && iconPosition === 'right' && (
        <span className="inline-block">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type || 'button'}
      className={classes}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};
