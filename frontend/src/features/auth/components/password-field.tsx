'use client';

import React, { useState } from 'react';

// --- Eye Icons ---
const EyeOpenIcon: React.FC = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <path d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z' />
    <circle cx='12' cy='12' r='3' />
  </svg>
);
const EyeClosedIcon: React.FC = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <path d='M9.88 9.88a3 3 0 1 0 4.24 4.24' />
    <path d='M10.73 5.08A10.4 10.4 0 0 1 12 5c7 0 10 7 10 7a13.2 13.2 0 0 1-1.67 2.68' />
    <path d='M6.61 6.61A13.5 13.5 0 0 0 2 12s3 7 10 7a9.7 9.7 0 0 0 5.39-1.61' />
    <line x1='2' x2='22' y1='2' y2='22' />
  </svg>
);

// --- Password Field ---
interface PasswordFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hasError?: boolean;
}

export const PasswordField: React.FC<PasswordFieldProps> = ({
  id,
  label,
  hasError = false,
  className,
  ...props
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <label
        htmlFor={id}
        className='block text-sm font-medium mb-1.5'
        style={{ color: 'rgba(255,255,255,0.70)' }}
      >
        {label}
      </label>
      <div className='relative'>
        <input
          id={id}
          type={visible ? 'text' : 'password'}
          aria-label={label}
          aria-invalid={hasError || undefined}
          className={`w-full rounded-xl border px-4 py-3 pr-12 text-white placeholder:text-white/25 bg-white/5 transition-all duration-200 focus:outline-none ${
            hasError
              ? 'border-red-500/50 shadow-[0_0_0_2px_rgba(239,68,68,0.15)] focus:border-red-500/50 focus:shadow-[0_0_0_2px_rgba(239,68,68,0.15)] focus:ring-0'
              : 'border-white/10 focus:border-[#f4c434]/60 focus:ring-2 focus:ring-[#f4c434]/15'
          } ${className || ''}`}
          {...props}
        />
        <button
          type='button'
          onClick={() => setVisible((v) => !v)}
          className='absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-lg transition-colors duration-150 cursor-pointer'
          style={{ color: 'rgba(255,255,255,0.35)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#f4c434')}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')
          }
          onMouseDown={(e) => e.preventDefault()}
          aria-label={visible ? 'Passwort verbergen' : 'Passwort anzeigen'}
        >
          {visible ? <EyeClosedIcon /> : <EyeOpenIcon />}
        </button>
      </div>
    </div>
  );
};
