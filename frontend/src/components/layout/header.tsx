import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  /** Show navigation links (Startseite, Bibliothek, Preise etc.) */
  showNav?: boolean;
  /** Show the Anmelden button in the top right */
  showAuthButton?: boolean;
}
const Header: React.FC<HeaderProps> = ({
  showNav = false,
  showAuthButton = false,
}) => {
  return (
    <header
      className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3'
      style={{
        background: 'rgba(13, 13, 26, 0.75)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {/* Logo */}
      <Link
        href='/'
        className='flex items-center gap-2 group'
        aria-label='Traumseiten Startseite'
      >
        <Image
          src='/images/logo.png'
          alt='Traumseiten Logo'
          width={40}
          height={40}
          className='rounded-full transition-transform duration-300 group-hover:scale-105'
          priority
        />
        <span
          className='text-lg font-bold tracking-wide'
          style={{ color: '#f4c434' }}
        >
          Traumseiten
        </span>
      </Link>

      {/* Optional Navigation */}
      {showNav && (
        <nav
          className='hidden md:flex items-center gap-6 text-sm'
          aria-label='Hauptnavigation'
        >
          {[
            { href: '/', label: 'Startseite' },
            { href: '/bibliothek', label: 'Bibliothek' },
            { href: '/preise', label: 'Preise' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='transition-colors duration-150 hover:text-white'
              style={{ color: 'rgba(255,255,255,0.60)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}

      {/* Optional Auth Button */}
      {showAuthButton && (
        <Link
          href='/auth'
          className='rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 hover:shadow-lg'
          style={{
            background: '#f4c434',
            color: '#0d0d1a',
            boxShadow: '0 4px 16px rgba(244,196,52,0.25)',
          }}
          aria-label='Jetzt anmelden'
        >
          Anmelden
        </Link>
      )}
    </header>
  );
};

export default Header;
