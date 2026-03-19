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
interface PasswordFieldProps {
  id: string;
  name: string;
  label: string;
  autoComplete?: string;
  hasError?: boolean;
}

export const PasswordField: React.FC<PasswordFieldProps> = ({
  id,
  name,
  label,
  autoComplete = 'current-password',
  hasError = false,
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
          name={name}
          type={visible ? 'text' : 'password'}
          autoComplete={autoComplete}
          required
          minLength={6}
          placeholder='••••••••'
          className='w-full rounded-xl border px-4 py-3 pr-12 text-white placeholder:text-white/25 bg-white/5 transition-all duration-200 focus:outline-none'
          style={
            hasError
              ? {
                  borderColor: 'rgba(239,68,68,0.5)',
                  boxShadow: '0 0 0 2px rgba(239,68,68,0.15)',
                }
              : { borderColor: 'rgba(255,255,255,0.12)' }
          }
          onFocus={(e) => {
            if (!hasError) {
              e.currentTarget.style.borderColor = 'rgba(244,196,52,0.60)';
              e.currentTarget.style.boxShadow =
                '0 0 0 2px rgba(244,196,52,0.15)';
            }
          }}
          onBlur={(e) => {
            if (!hasError) {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
              e.currentTarget.style.boxShadow = 'none';
            }
          }}
          aria-label={label}
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
          aria-label={visible ? 'Passwort verbergen' : 'Passwort anzeigen'}
          tabIndex={-1}
        >
          {visible ? <EyeClosedIcon /> : <EyeOpenIcon />}
        </button>
      </div>
    </div>
  );
};
