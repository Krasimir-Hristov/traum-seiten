'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { LoginForm } from './login-form';
import { RegisterForm } from './register-form';
import { BackgroundDecorations } from './background-decorations';
import { AUTH_FEATURES } from '@/lib/constants';

export type AuthMode = 'login' | 'register';


// --- Main AuthForm ---
export const AuthForm: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>('login');

  const handleModeSwitch = (newMode: AuthMode) => {
    setMode(newMode);
  };

  return (
    <section
      className='relative flex min-h-screen w-full pt-16 overflow-hidden'
      style={{
        // Single unified background for the whole page
        background:
          'linear-gradient(160deg, #060612 0%, #0b0b22 30%, #0e0b28 60%, #08081a 100%)',
      }}
      aria-label={
        mode === 'login' ? 'Anmeldeformular' : 'Registrierungsformular'
      }
    >
      <BackgroundDecorations />

      {/* ============================================================
          LEFT PANEL — branding (transparent, content only)
          ============================================================ */}
      <div className='hidden lg:flex flex-col items-center justify-center gap-10 w-[52%] relative z-10 px-20'>
        {/* Logo + Hero text */}
        <div className='space-y-8 text-center'>
          <div className='flex items-center justify-center gap-3'>
            <Image
              src='/images/logo.png'
              alt='Traumseiten Logo'
              width={64}
              height={64}
              className='rounded-full'
              priority
            />
            <span
              className='text-3xl font-bold tracking-wide'
              style={{ color: '#f4c434' }}
            >
              Traumseiten
            </span>
          </div>
          <div className='space-y-5'>
            <h2 className='text-5xl font-extrabold text-white leading-tight tracking-tight'>
              Magische Geschichten
              <br />
              <span
                style={{
                  background:
                    'linear-gradient(90deg, #f4c434 0%, #ffd97a 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                für dein Kind
              </span>
            </h2>
            <p
              className='text-xl leading-relaxed'
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              Erstelle personalisierte Abenteuer mit
              <br />
              modernster KI-Technologie.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className='w-16 h-px'
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(244,196,52,0.5), transparent)',
          }}
          aria-hidden='true'
        />

        {/* Feature list — horizontal rows */}
        <div className='space-y-4 w-full max-w-sm'>
          {AUTH_FEATURES.map((f) => (
            <div
              key={f.title}
              className='flex items-center gap-4 rounded-2xl px-5 py-4'
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div
                className='shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl'
                style={{
                  background: 'rgba(244,196,52,0.12)',
                  border: '1px solid rgba(244,196,52,0.22)',
                }}
                aria-hidden='true'
              >
                {f.icon}
              </div>
              <div>
                <p className='text-base font-semibold text-white'>{f.title}</p>
                <p
                  className='text-sm mt-0.5'
                  style={{ color: 'rgba(255,255,255,0.50)' }}
                >
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================
          RIGHT PANEL — form (transparent, content only)
          ============================================================ */}
      <div className='flex flex-col items-center justify-center flex-1 px-6 overflow-y-auto relative z-10'>
        <article className='w-full max-w-md space-y-6'>
          {/* Heading */}
          <header className='text-center space-y-2'>
            <Image
              src='/images/logo.png'
              alt='Traumseiten Logo'
              width={56}
              height={56}
              className='rounded-full mx-auto'
              priority
            />
            <h1 className='text-4xl font-bold text-white'>
              {mode === 'login' ? 'Willkommen zurück' : 'Werde Teil der Magie'}
            </h1>
            <p className='text-sm' style={{ color: 'rgba(255,255,255,0.55)' }}>
              {mode === 'login'
                ? 'Melde dich an und erstelle magische Geschichten.'
                : 'Beginne deine Reise mit KI-gestützten Abenteuern.'}
            </p>
          </header>

          {/* Tab Toggle */}
          <nav
            className='flex rounded-xl p-1'
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
            aria-label='Authentifizierungsmodus'
          >
            {(['login', 'register'] as const).map((m) => (
              <button
                key={m}
                type='button'
                onClick={() => handleModeSwitch(m)}
                className='flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer'
                style={
                  mode === m
                    ? {
                        background: '#f4c434',
                        color: '#0d0d1a',
                        boxShadow: '0 4px 20px rgba(244,196,52,0.30)',
                      }
                    : { color: 'rgba(255,255,255,0.50)' }
                }
                aria-pressed={mode === m}
                aria-label={
                  m === 'login'
                    ? 'Zum Anmeldeformular wechseln'
                    : 'Zum Registrierungsformular wechseln'
                }
              >
                {m === 'login' ? 'Anmelden' : 'Registrieren'}
              </button>
            ))}
          </nav>

          {/* Form */}
          {mode === 'login' ? <LoginForm /> : <RegisterForm />}

          {/* Switch mode */}
          <p
            className='text-center text-sm'
            style={{ color: 'rgba(255,255,255,0.40)' }}
          >
            {mode === 'login' ? (
              <>
                Noch kein Träumer?{' '}
                <button
                  type='button'
                  onClick={() => handleModeSwitch('register')}
                  className='font-semibold hover:opacity-80 transition-opacity cursor-pointer'
                  style={{ color: '#f4c434' }}
                  aria-label='Zum Registrierungsformular wechseln'
                >
                  Jetzt registrieren
                </button>
              </>
            ) : (
              <>
                Schon ein Träumer?{' '}
                <button
                  type='button'
                  onClick={() => handleModeSwitch('login')}
                  className='font-semibold hover:opacity-80 transition-opacity cursor-pointer'
                  style={{ color: '#f4c434' }}
                  aria-label='Zum Anmeldeformular wechseln'
                >
                  Einloggen
                </button>
              </>
            )}
          </p>
        </article>
      </div>
    </section>
  );
};

export default AuthForm;
