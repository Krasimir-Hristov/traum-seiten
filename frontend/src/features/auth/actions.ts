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

  console.log('Attempting signup for:', email); // Server-side log

  if (!email || !password) {
    return { error: 'Bitte E-Mail und Passwort eingeben.' };
  }

  try {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName || '',
        },
      },
    });

    if (error) {
      console.error('Supabase Signup error:', error.message);

      if (error.message.toLowerCase().includes('already registered') || error.message.includes('User already registered')) {
        return { error: 'Diese E-Mail-Adresse ist bereits registriert.' };
      }
      if (
        error.message.toLowerCase().includes('rate limit') ||
        error.message.includes('over_email_send_rate_limit') ||
        error.message.toLowerCase().includes('email rate limit')
      ) {
        return { error: 'Zu viele Anfragen. Bitte warte einige Minuten und versuche es erneut.' };
      }
      if (error.message.toLowerCase().includes('invalid') && error.message.toLowerCase().includes('email')) {
        return { error: 'Die E-Mail-Adresse ist ungültig. Bitte prüfe die Schreibweise.' };
      }
      // Fallback: show exact error for debugging, remove in production
      return { error: `Registrierung fehlgeschlagen: ${error.message}` };
    }

    // Check if user is created but session is null (Email confirmation required)
    if (data.user && !data.session) {
      console.log('User created, confirmation required.');
      return { error: 'Bitte bestätige deine E-Mail-Adresse! Wir haben dir einen Bestätigungslink geschickt. 📧' };
    }

    console.log('Signup successful for:', data.user?.id);
  } catch (err) {
    console.error('Unexpected signup error:', err);
    return { error: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut.' };
  }

  // Only redirect if we actually have a session/user confirmed
  redirect('/dashboard');
};

export const signOut = async (): Promise<void> => {
  try {
    const supabase = await createClient();
    await supabase.auth.signOut();
  } catch {
    // Sign-out errors are non-critical — redirect regardless
  }

  redirect('/auth');
};
