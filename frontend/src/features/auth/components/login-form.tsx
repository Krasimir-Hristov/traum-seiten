'use client';

import React, { useState, useTransition } from 'react';
import { signIn } from '@/features/auth/actions';
import { PasswordField } from './password-field';

import { inputClass } from '../utils/classes';

export const LoginForm: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setError(null);
    startTransition(async () => {
      try {
        const result = await signIn(formData);
        if (result?.error) setError(result.error);
      } catch (err) {
        // Rethrow NEXT_REDIRECT and other errors so they aren't swallowed silently
        throw err;
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4' noValidate>
      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium mb-1.5'
          style={{ color: 'rgba(255,255,255,0.70)' }}
        >
          E-Mail-Adresse
        </label>
        <input
          id='email'
          name='email'
          type='email'
          autoComplete='email'
          required
          placeholder='name@beispiel.de'
          className={inputClass}
        />
      </div>

      <PasswordField
        id='password'
        name='password'
        label='Passwort'
        autoComplete='current-password'
      />

      {error && (
        <div
          role='alert'
          className='rounded-xl px-4 py-3 text-sm'
          style={{
            background: 'rgba(239,68,68,0.10)',
            border: '1px solid rgba(239,68,68,0.25)',
            color: '#fca5a5',
          }}
        >
          {error}
        </div>
      )}

      <button
        type='submit'
        disabled={isPending}
        className='w-full rounded-xl py-3.5 text-base font-bold tracking-wide transition-all duration-200 mt-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60'
        style={{
          background: isPending ? 'rgba(244,196,52,0.6)' : '#f4c434',
          color: '#0d0d1a',
          boxShadow: isPending ? 'none' : '0 6px 30px rgba(244,196,52,0.35)',
        }}
      >
        {isPending ? 'Laden...' : 'Anmelden'}
      </button>
    </form>
  );
};
