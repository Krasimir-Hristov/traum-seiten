import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Funktionen', href: '#funktionen' },
  { label: 'Geschichten', href: '#geschichten' },
  { label: "So funktioniert's", href: '#so-funktionierts' },
  { label: 'Preise', href: '#preise' },
];

interface NavbarProps {
  isAuthenticated?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated = false }) => {
  return (
    <nav
      className='fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-4 backdrop-blur-md bg-(--ts-bg-deep)/85 md:px-12'
      aria-label='Hauptnavigation'
    >
      {/* Logo */}
      <Link
        href='/'
        className='flex items-center gap-2.5'
        aria-label='Traumseiten – Startseite'
      >
        <Image
          src='/images/logo.png'
          alt='Traumseiten Logo'
          width={36}
          height={36}
          className='rounded-full'
        />
        <span className='text-lg font-semibold tracking-wide text-(--ts-gold)'>
          Traumseiten
        </span>
      </Link>

      {/* Desktop Navigation Links */}
      <ul className='hidden items-center gap-8 md:flex' role='list'>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className='text-sm font-medium text-(--ts-text-secondary) transition-colors duration-200 hover:text-white'
              aria-label={link.label}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA Buttons */}
      <div className='flex items-center gap-3'>
        {isAuthenticated ? (
          <Link
            href='/dashboard'
            className='inline-flex rounded-xl bg-(--ts-gold) px-5 py-2 text-sm font-semibold text-(--ts-bg-deep) shadow-(--ts-gold-glow) transition-all duration-200 hover:bg-(--ts-gold-hover) hover:shadow-(--ts-gold-glow-lg)'
            aria-label='Zum Dashboard'
          >
            Zum Dashboard
          </Link>
        ) : (
          <>
            <Link
              href='/auth'
              className='hidden rounded-xl border border-(--ts-border) px-5 py-2 text-sm font-medium text-(--ts-text-secondary) transition-all duration-200 hover:border-(--ts-gold)/30 hover:text-white sm:inline-flex'
              aria-label='Anmelden'
            >
              Anmelden
            </Link>
            <Link
              href='/auth'
              className='inline-flex rounded-xl bg-(--ts-gold) px-5 py-2 text-sm font-semibold text-(--ts-bg-deep) shadow-(--ts-gold-glow) transition-all duration-200 hover:bg-(--ts-gold-hover) hover:shadow-(--ts-gold-glow-lg)'
              aria-label='Kostenlos starten'
            >
              Kostenlos starten
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
