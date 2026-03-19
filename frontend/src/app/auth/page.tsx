import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/supabase-server';
import { AuthForm } from '@/features/auth';
import Header from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'Anmelden & Registrieren – Traumseiten',
  description: 'Melde dich bei Traumseiten an или erstelle ein neues Konto, um magische Geschichten für dein Kind zu erstellen.',
};

const LoginPage: React.FC = async () => {
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
    <>
      <Header />
      <main>
        <AuthForm />
      </main>
    </>
  );
};

export default LoginPage;

