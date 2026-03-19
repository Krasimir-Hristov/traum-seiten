'use client';

import React, { useState, useTransition } from 'react';
import { signIn, signUp } from '@/features/auth/actions';

type AuthMode = 'login' | 'register';

const AuthForm: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    setError(null);
    startTransition(async () => {
      try {
        const action = mode === 'login' ? signIn : signUp;
        const result = await action(formData);
        if (result?.error) {
          setError(result.error);
        }
      } catch {
        // redirect() throws a NEXT_REDIRECT error — this is expected
      }
    });
  };

  return (
    <section
      className="flex min-h-screen w-full items-center justify-center px-4"
      aria-label={mode === 'login' ? 'Anmeldeformular' : 'Registrierungsformular'}
    >
      <article className="w-full max-w-md space-y-8">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#f4c434]">
            ✨ Traumseiten
          </h1>
          <p className="mt-2 text-lg text-white/60">
            {mode === 'login'
              ? 'Willkommen zurück! Melde dich an.'
              : 'Erstelle dein Konto und beginne.'}
          </p>
        </header>

        {/* Tab Toggle */}
        <nav
          className="flex rounded-xl border border-white/10 bg-white/5 p-1"
          aria-label="Authentifizierungsmodus"
        >
          <button
            type="button"
            onClick={() => { setMode('login'); setError(null); }}
            className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all duration-200 ${
              mode === 'login'
                ? 'bg-[#f4c434] text-black shadow-lg shadow-[#f4c434]/20'
                : 'text-white/60 hover:text-white'
            }`}
            aria-label="Zum Anmeldeformular wechseln"
          >
            Anmelden
          </button>
          <button
            type="button"
            onClick={() => { setMode('register'); setError(null); }}
            className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all duration-200 ${
              mode === 'register'
                ? 'bg-[#f4c434] text-black shadow-lg shadow-[#f4c434]/20'
                : 'text-white/60 hover:text-white'
            }`}
            aria-label="Zum Registrierungsformular wechseln"
          >
            Registrieren
          </button>
        </nav>

        {/* Form */}
        <form action={handleSubmit} className="space-y-5">
          {/* Full Name (Register only) */}
          {mode === 'register' && (
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-white/80"
              >
                Vollständiger Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Max Mustermann"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition-colors duration-200 focus:border-[#f4c434]/50 focus:outline-none focus:ring-2 focus:ring-[#f4c434]/20"
                aria-label="Vollständiger Name"
              />
            </div>
          )}

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white/80"
            >
              E-Mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="deine@email.de"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition-colors duration-200 focus:border-[#f4c434]/50 focus:outline-none focus:ring-2 focus:ring-[#f4c434]/20"
              aria-label="E-Mail-Adresse"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white/80"
            >
              Passwort
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              required
              minLength={6}
              placeholder="••••••••"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition-colors duration-200 focus:border-[#f4c434]/50 focus:outline-none focus:ring-2 focus:ring-[#f4c434]/20"
              aria-label="Passwort"
            />
          </div>

          {/* Error */}
          {error && (
            <div
              role="alert"
              className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400"
            >
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-xl bg-[#f4c434] py-3.5 text-base font-semibold text-black shadow-lg shadow-[#f4c434]/20 transition-all duration-200 hover:bg-[#f4c434]/90 hover:shadow-xl hover:shadow-[#f4c434]/30 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label={mode === 'login' ? 'Jetzt anmelden' : 'Konto erstellen'}
          >
            {isPending
              ? 'Laden...'
              : mode === 'login'
                ? 'Anmelden'
                : 'Konto erstellen'}
          </button>
        </form>
      </article>
    </section>
  );
};

export default AuthForm;
