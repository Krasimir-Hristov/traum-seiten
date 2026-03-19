import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/supabase-server';
import { AuthForm } from '@/features/auth';

export const metadata: Metadata = {
  title: 'Anmelden – Traumseiten',
  description: 'Melde dich bei Traumseiten an oder erstelle ein neues Konto, um magische Geschichten für dein Kind zu erstellen.',
};

const AnmeldenPage: React.FC = async () => {
  // If user is already logged in, redirect to dashboard.
  // redirect() must be OUTSIDE try/catch — Next.js implements it by throwing,
  // and a catch block would silently swallow it.
  let isAuthenticated = false;

  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    isAuthenticated = Boolean(user);
  } catch {
    // Supabase client error — treat as unauthenticated, show the form
  }

  if (isAuthenticated) {
    redirect('/dashboard');
  }

  return (
    <main className="min-h-screen bg-black">
      <AuthForm />
    </main>
  );
};

export default AnmeldenPage;
