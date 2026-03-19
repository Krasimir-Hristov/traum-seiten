'use client';

import React, { useState, useTransition } from 'react';
import { signUp } from '@/features/auth/actions';
import { PasswordField } from './password-field';

import { inputClass } from '../utils/classes';

export const RegisterForm: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setError(null);
    setPasswordError(null);

    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;
    if (password !== confirmPassword) {
      setPasswordError('Die Passwörter stimmen nicht überein.');
      return;
    }

    startTransition(async () => {
      try {
        const result = await signUp(formData);
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
          htmlFor='fullName'
          className='block text-sm font-medium mb-1.5'
          style={{ color: 'rgba(255,255,255,0.70)' }}
        >
          Vollständiger Name
        </label>
        <input
          id='fullName'
          name='fullName'
          type='text'
          autoComplete='name'
          placeholder='Max Mustermann'
          className={inputClass}
        />
      </div>

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
        label='Magisches Passwort'
        autoComplete='new-password'
      />

      <PasswordField
        id='confirmPassword'
        name='confirmPassword'
        label='Passwort wiederholen'
        autoComplete='new-password'
        hasError={Boolean(passwordError)}
      />
      {passwordError && (
        <p
          role='alert'
          className='text-xs'
          style={{ color: '#ef4444' }}
        >
          {passwordError}
        </p>
      )}

      {error && (
        <div
          role='alert'
          className='rounded-xl px-4 py-3 text-sm transition-all duration-300'
          style={{
            background: error === 'IDENTIFIER_CONFIRM_EMAIL' ? 'rgba(244,196,52,0.1)' : 'rgba(239,68,68,0.10)',
            border: error === 'IDENTIFIER_CONFIRM_EMAIL' ? '1px solid rgba(244,196,52,0.25)' : '1px solid rgba(239,68,68,0.25)',
            color: error === 'IDENTIFIER_CONFIRM_EMAIL' ? '#f4c434' : '#fca5a5',
          }}
        >
          {error === 'IDENTIFIER_CONFIRM_EMAIL' 
            ? 'Bitte bestätige deine E-Mail-Adresse! Wir haben dir einen Bestätigungslink geschickt. 📧' 
            : error}
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
        {isPending ? 'Laden...' : 'Konto erstellen 🪄'}
      </button>
    </form>
  );
};
