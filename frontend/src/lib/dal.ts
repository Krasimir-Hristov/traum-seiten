import { redirect } from 'next/navigation';
import type { User } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/supabase-server';

/**
 * Data Access Layer: Fetch the authenticated user.
 * Redirects to /anmelden if not authenticated.
 * Use this in every protected Server Component (Defense in Depth).
 *
 * redirect() is kept OUTSIDE try/catch because Next.js implements redirects
 * by throwing a special NEXT_REDIRECT error — catching it would swallow it.
 */
export const getAuthUser = async (): Promise<User> => {
  let user: User | null = null;

  try {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();

    if (!error) {
      user = data.user;
    }
  } catch {
    // Supabase client failure — treat as unauthenticated
  }

  if (!user) {
    redirect('/auth');
  }

  // TypeScript doesn't narrow through redirect(), so we assert here.
  // The redirect() above guarantees this is never null at runtime.
  return user as User;
};
