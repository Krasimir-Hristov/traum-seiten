'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { signUp } from '@/features/auth/actions';
import { AUTH_ERRORS } from '@/features/auth/constants';
import { PasswordField } from './password-field';
import { registerSchema, type RegisterFormData } from '../schemas';

import { inputClass } from '../utils/classes';

export const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const {
    mutate: executeRegister,
    isPending,
    error,
  } = useMutation({
    mutationFn: async (data: RegisterFormData) => {
      const formData = new FormData();
      formData.append('fullName', data.fullName);
      formData.append('email', data.email);
      formData.append('password', data.password);
      
      const result = await signUp(formData);
      if (result?.error) {
        throw new Error(result.error);
      }
      return result;
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    executeRegister(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4' noValidate>
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
          type='text'
          autoComplete='name'
          placeholder='Max Mustermann'
          className={inputClass}
          {...register('fullName')}
        />
        {errors.fullName && (
          <p className='text-xs mt-1.5' style={{ color: '#ef4444' }}>
            {errors.fullName.message}
          </p>
        )}
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
          label='Magisches Passwort'
          autoComplete='new-password'
          hasError={Boolean(errors.password)}
          {...register('password')}
        />
        {errors.password && (
          <p className='text-xs mt-1.5' style={{ color: '#ef4444' }}>
            {errors.password.message}
          </p>
        )}
      </div>

      <div>
        <PasswordField
          id='confirmPassword'
          label='Passwort wiederholen'
          autoComplete='new-password'
          hasError={Boolean(errors.confirmPassword)}
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && (
          <p className='text-xs mt-1.5' style={{ color: '#ef4444' }}>
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {error && (
        <div
          role='alert'
          className='rounded-xl px-4 py-3 text-sm transition-all duration-300'
          style={{
            background: error.message === AUTH_ERRORS.CONFIRM_EMAIL ? 'rgba(244,196,52,0.1)' : 'rgba(239,68,68,0.10)',
            border: error.message === AUTH_ERRORS.CONFIRM_EMAIL ? '1px solid rgba(244,196,52,0.25)' : '1px solid rgba(239,68,68,0.25)',
            color: error.message === AUTH_ERRORS.CONFIRM_EMAIL ? '#f4c434' : '#fca5a5',
          }}
        >
          {error.message === AUTH_ERRORS.CONFIRM_EMAIL
            ? 'Bitte bestätige deine E-Mail-Adresse! Wir haben dir einen Bestätigungslink geschickt. 📧'
            : error.message}
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
