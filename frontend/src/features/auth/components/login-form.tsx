'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { signIn } from '@/features/auth/actions';
import { PasswordField } from './password-field';
import { loginSchema, type LoginFormData } from '../schemas';

import { inputClass } from '../utils/classes';

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const {
    mutate: executeLogin,
    isPending,
    error,
  } = useMutation({
    mutationFn: async (data: LoginFormData) => {
      const formData = new FormData();
      formData.append('email', data.email);
      formData.append('password', data.password);
      
      const result = await signIn(formData);
      if (result?.error) {
        throw new Error(result.error);
      }
      return result;
    },
  });

  const onSubmit = (data: LoginFormData) => {
    executeLogin(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4' noValidate>
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
          type='email'
          autoComplete='email'
          placeholder='name@beispiel.de'
          className={inputClass}
          {...register('email')}
        />
        {errors.email && (
          <p className='text-xs mt-1.5' style={{ color: '#ef4444' }}>
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <PasswordField
          id='password'
          label='Passwort'
          autoComplete='current-password'
          placeholder='••••••••'
          {...register('password')}
        />
        {errors.password && (
          <p className='text-xs mt-1.5' style={{ color: '#ef4444' }}>
            {errors.password.message}
          </p>
        )}
      </div>

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
          {error.message}
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
