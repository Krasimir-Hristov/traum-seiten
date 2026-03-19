'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/supabase-server';

interface AuthResult {
  error: string | null;
}

export const signIn = async (formData: FormData): Promise<AuthResult> => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Bitte E-Mail und Passwort eingeben.' };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      // Log the original error for debugging (visible in terminal)
      console.error('Login error:', error.message);
      
      // Map specific error messages
      if (error.message.includes('Email not confirmed')) {
        return { error: 'Bitte bestätige zuerst deine E-Mail-Adresse.' };
      }
      return { error: 'E-Mail oder Passwort ist falsch.' };
    }
  } catch (err) {
    console.error('Unexpected login error:', err);
    return { error: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut.' };
  }

  redirect('/dashboard');
};

export const signUp = async (formData: FormData): Promise<AuthResult> => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const fullName = formData.get('fullName') as string;

  if (!email || !password) {
    return { error: 'Bitte E-Mail und Passwort eingeben.' };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName || '',
        },
      },
    });

    if (error) {
      console.error('Signup error:', error.message);
      if (error.message.includes('already registered')) {
        return { error: 'Diese E-Mail-Adresse ist bereits registriert.' };
      }
      if (error.message.includes('rate limit')) {
        return { error: 'Zu viele Anfragen. Bitte versuche es später noch einmal oder verwende eine andere E-Mail.' };
      }
      return { error: 'Registrierung fehlgeschlagen. Bitte versuche es erneut.' };
    }
  } catch (err) {
    console.error('Unexpected signup error:', err);
    return { error: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut.' };
  }

  redirect('/dashboard');
};

export const signOut = async (): Promise<void> => {
  try {
    const supabase = await createClient();
    await supabase.auth.signOut();
  } catch {
    // Sign-out errors are non-critical — redirect regardless
  }

  redirect('/login');
};
