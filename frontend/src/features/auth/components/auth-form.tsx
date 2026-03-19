'use client';

import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import { LoginForm } from './login-form';
import { RegisterForm } from './register-form';

export type AuthMode = 'login' | 'register';
// --- Stars data (scattered across the whole page) ---
const STARS = [
  { top: '5%', left: '3%', s: 2, o: 0.6 },
  { top: '8%', left: '18%', s: 1.5, o: 0.4 },
  { top: '6%', left: '38%', s: 2.5, o: 0.7 },
  { top: '12%', left: '55%', s: 1.5, o: 0.4 },
  { top: '3%', left: '70%', s: 2, o: 0.5 },
  { top: '18%', left: '8%', s: 1.5, o: 0.5 },
  { top: '22%', left: '28%', s: 2, o: 0.4 },
  { top: '25%', left: '48%', s: 1.5, o: 0.5 },
  { top: '30%', left: '5%', s: 2.5, o: 0.6 },
  { top: '35%', left: '35%', s: 2, o: 0.4 },
  { top: '42%', left: '15%', s: 1.5, o: 0.5 },
  { top: '45%', left: '58%', s: 2, o: 0.4 },
  { top: '50%', left: '3%', s: 2, o: 0.6 },
  { top: '55%', left: '25%', s: 1.5, o: 0.4 },
  { top: '60%', left: '50%', s: 2.5, o: 0.5 },
  { top: '65%', left: '10%', s: 2, o: 0.5 },
  { top: '70%', left: '42%', s: 1.5, o: 0.4 },
  { top: '75%', left: '22%', s: 2, o: 0.6 },
  { top: '80%', left: '60%', s: 2.5, o: 0.5 },
  { top: '85%', left: '8%', s: 1.5, o: 0.4 },
  { top: '90%', left: '35%', s: 2, o: 0.5 },
  { top: '92%', left: '55%', s: 1.5, o: 0.4 },
  { top: '95%', left: '18%', s: 2, o: 0.6 },
  // Right side stars (near the moon)
  { top: '28%', right: '12%', s: 2.5, o: 0.5 },
  { top: '35%', right: '5%', s: 1.5, o: 0.4 },
  { top: '40%', right: '20%', s: 2, o: 0.5 },
  { top: '48%', right: '8%', s: 1.5, o: 0.4 },
  { top: '55%', right: '15%', s: 2, o: 0.5 },
  { top: '63%', right: '3%', s: 2.5, o: 0.6 },
  { top: '70%', right: '25%', s: 1.5, o: 0.4 },
] as const;

// --- Feature Items ---
const features = [
  {
    icon: '🌙',
    title: 'KI-Geschichten',
    desc: 'Magische Abenteuer, personalisiert für dein Kind.',
  },
  {
    icon: '🎨',
    title: 'Einzigartige Illustrationen',
    desc: 'Jede Geschichte mit stimmungsvollen Bildern.',
  },
  {
    icon: '📚',
    title: 'Deine Bibliothek',
    desc: 'Alle Bücher sicher gespeichert und jederzeit abrufbar.',
  },
];

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
      {/* ============================================================
          GLOBAL BACKGROUND DECORATIONS (cover entire page)
          ============================================================ */}

      {/* Atmospheric nebula gradients */}
      <div
        className='absolute inset-0 pointer-events-none'
        aria-hidden='true'
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 15% 90%, rgba(60,30,160,0.15) 0%, transparent 65%), ' +
            'radial-gradient(ellipse 50% 40% at 30% 10%, rgba(80,50,180,0.10) 0%, transparent 60%), ' +
            'radial-gradient(ellipse 40% 50% at 85% 60%, rgba(50,30,140,0.12) 0%, transparent 60%)',
        }}
      />

      {/* Moon — top right of the ENTIRE page */}
      <div
        className='absolute pointer-events-none z-0'
        aria-hidden='true'
        style={{
          top: '-40px',
          right: '-40px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 38% 38%, #fff5a0 0%, #f4c434 25%, #d4a010 55%, rgba(244,196,52,0.20) 75%, transparent 100%)',
          boxShadow:
            '0 0 60px 20px rgba(244,196,52,0.22), 0 0 120px 50px rgba(244,196,52,0.10)',
        }}
      />
      {/* Moon halo */}
      <div
        className='absolute pointer-events-none z-0'
        aria-hidden='true'
        style={{
          top: '-90px',
          right: '-90px',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(244,196,52,0.08) 0%, transparent 65%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Stars scattered across the whole page */}
      {STARS.map((star, i) => (
        <div
          key={i}
          className='absolute rounded-full pointer-events-none z-0'
          aria-hidden='true'
          style={{
            top: star.top,
            left: 'left' in star ? star.left : undefined,
            right:
              'right' in star ? (star as { right: string }).right : undefined,
            width: `${star.s}px`,
            height: `${star.s}px`,
            background: 'white',
            opacity: star.o,
            boxShadow:
              star.s >= 2.5
                ? `0 0 ${star.s * 2}px rgba(255,255,255,0.9)`
                : 'none',
          }}
        />
      ))}

      {/* ============================================================
          LEFT PANEL — branding (transparent, content only)
          ============================================================ */}
      <div className='hidden lg:flex flex-col items-center justify-center gap-10 w-[52%] relative z-10 px-20'>
        {/* Logo + Hero text */}
        <div className='space-y-8 text-center'>
          <div className='flex items-center justify-center gap-3'>
            <Image
              src='/designs/logo.png'
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
          {features.map((f) => (
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
          {/* Mobile logo */}
          <div className='flex justify-center mb-2 lg:hidden'>
            <Image
              src='/designs/logo.png'
              alt='Traumseiten'
              width={48}
              height={48}
              className='rounded-full'
              priority
            />
          </div>

          {/* Heading */}
          <header className='text-center space-y-2'>
            <Image
              src='/designs/logo.png'
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
