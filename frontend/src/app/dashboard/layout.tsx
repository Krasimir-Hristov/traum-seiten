import Image from 'next/image';
import Link from 'next/link';
import { getAuthUser } from '@/lib/dal';
import { signOut } from '@/features/auth/actions';

const DashboardLayout: React.FC<
  Readonly<{ children: React.ReactNode }>
> = async ({ children }) => {
  const user = await getAuthUser();

  return (
    <div className='min-h-screen bg-black text-white'>
      <header className='border-b border-white/10 bg-white/5 backdrop-blur-sm'>
        <nav
          className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'
          aria-label='Hauptnavigation'
        >
          <Link
            href='/'
            className='flex items-center gap-2.5 group'
            aria-label='Zur Startseite'
          >
            <Image
              src='/images/logo.png'
              alt='Traumseiten Logo'
              width={36}
              height={36}
              className='rounded-full transition-transform duration-300 group-hover:scale-105'
            />
            <span className='text-lg font-bold tracking-wide text-[#f4c434]'>
              Traumseiten
            </span>
          </Link>
          <div className='flex items-center gap-4'>
            <span className='text-sm text-white/60'>{user.email}</span>
            <form action={signOut}>
              <button
                type='submit'
                className='rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-white/80 transition-colors duration-200 hover:border-[#f4c434]/30 hover:text-[#f4c434]'
                aria-label='Abmelden'
              >
                Abmelden
              </button>
            </form>
          </div>
        </nav>
      </header>

      <main className='mx-auto max-w-6xl px-6 py-8'>{children}</main>
    </div>
  );
};

export default DashboardLayout;
