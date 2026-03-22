import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer
      className='border-t border-(--ts-border) bg-(--ts-bg-deep) px-6 py-12 md:px-12 lg:py-16'
      aria-labelledby='footer-heading'
    >
      <h2 id='footer-heading' className='sr-only'>
        Fußzeile
      </h2>
      <div className='mx-auto max-w-6xl'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-16'>
          {/* Brand Info */}
          <div className='lg:col-span-1'>
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
            <p className='mt-6 text-sm leading-relaxed text-(--ts-text-secondary)'>
              Wir machen die Welt magischer, jeden Abend aufs Neue. Ein Produkt
              von Eltern, für Eltern gemacht.
            </p>
          </div>

          {/* Links Grid */}
          <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3'>
            <div>
              <h3 className='text-sm font-semibold tracking-wider text-white'>
                Produkt
              </h3>
              <ul className='mt-4 space-y-3' role='list'>
                {['Funktionen', 'Bibliothek', 'Preise'].map((item) => (
                  <li key={item}>
                    <Link
                      href='#'
                      className='text-sm text-(--ts-text-secondary) transition-colors duration-200 hover:text-(--ts-gold)'
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-sm font-semibold tracking-wider text-white'>
                Unternehmen
              </h3>
              <ul className='mt-4 space-y-3' role='list'>
                {['Über uns', 'Blog', 'Karriere'].map((item) => (
                  <li key={item}>
                    <Link
                      href='#'
                      className='text-sm text-(--ts-text-secondary) transition-colors duration-200 hover:text-(--ts-gold)'
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-sm font-semibold tracking-wider text-white'>
                Verbinden
              </h3>
              <ul className='mt-4 space-y-3' role='list'>
                {['Twitter', 'Instagram', 'Discord'].map((item) => (
                  <li key={item}>
                    <Link
                      href='#'
                      className='text-sm text-(--ts-text-secondary) transition-colors duration-200 hover:text-(--ts-gold)'
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='mt-16 flex flex-col items-center justify-between gap-4 border-t border-(--ts-border) pt-8 sm:flex-row'>
          <p className='text-xs text-(--ts-text-muted)'>
            &copy; {new Date().getFullYear()} Traumseiten. Alle Rechte
            vorbehalten.
          </p>
          <div className='flex gap-6'>
            <Link
              href='#'
              className='text-xs text-(--ts-text-muted) hover:text-white transition-colors'
            >
              Datenschutzerklärung
            </Link>
            <Link
              href='#'
              className='text-xs text-(--ts-text-muted) hover:text-white transition-colors'
            >
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
