import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionProps {
  isAuthenticated?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isAuthenticated = false }) => {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
      aria-label="Willkommen bei Traumseiten"
    >
      {/* Background glow effects */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[140px]"
        style={{ background: 'radial-gradient(circle, var(--ts-gold-glow-lg) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-16 right-0 h-[350px] w-[350px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(244, 196, 52, 0.15) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Decorative stars */}
      {[
        { top: '12%', left: '15%', size: 3, delay: '0s' },
        { top: '20%', left: '80%', size: 2, delay: '1.2s' },
        { top: '35%', left: '10%', size: 2, delay: '0.8s' },
        { top: '25%', left: '90%', size: 4, delay: '0.4s' },
        { top: '45%', left: '85%', size: 2, delay: '1.6s' },
        { top: '55%', left: '5%', size: 3, delay: '2.0s' },
        { top: '15%', left: '50%', size: 2, delay: '0.6s' },
        { top: '60%', left: '75%', size: 2, delay: '1.0s' },
      ].map((star, i) => (
        <div
          key={i}
          className="pointer-events-none absolute animate-pulse rounded-full bg-white/70"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: '3s',
          }}
          aria-hidden="true"
        />
      ))}

      {/* Logo badge */}
      <div className="relative z-10 mb-4 flex items-center gap-2">
        <span className="rounded-full border border-(--ts-border) bg-(--ts-bg-card) px-4 py-1.5 text-xs font-medium tracking-wider text-(--ts-gold) uppercase">
          ✨ KI-gestützte Geschichten
        </span>
      </div>

      {/* Main heading */}
      <h1 className="relative z-10 max-w-4xl text-center text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        Personalisierte magische{' '}
        <br className="hidden sm:block" />
        Geschichten{' '}
        <span className="bg-linear-to-r from-(--ts-gold) to-[#f49d34] bg-clip-text text-transparent">
          für Ihr Kind
        </span>
      </h1>

      {/* Subtitle */}
      <p className="relative z-10 mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-(--ts-text-secondary) md:text-lg">
        Traumseiten, Ihr neuer Gefährte, ist eine innovative Reise mit KI
        erstellten Geschichten, in denen Ihr Kind der Held seines eigenen
        Abenteuers wird.
      </p>

      {/* CTA buttons */}
      <div className="relative z-10 mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href={isAuthenticated ? "/dashboard" : "/auth"}
          className="inline-flex h-13 items-center justify-center rounded-2xl bg-(--ts-gold) px-8 text-base font-semibold text-(--ts-bg-deep) transition-all duration-300 hover:bg-(--ts-gold-hover) glow-gold hover:glow-gold-lg hover:scale-[1.02]"
          aria-label={isAuthenticated ? "Zum Dashboard" : "Personalisierte Geschichten erstellen"}
        >
          {isAuthenticated ? "Zum Dashboard" : "Personalisierte Geschichten erstellen"}
        </Link>
        <Link
          href={isAuthenticated ? "/dashboard/stories" : "#geschichten"}
          className="inline-flex h-13 items-center justify-center rounded-2xl border border-(--ts-border) bg-(--ts-bg-card)/60 px-8 text-base font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-(--ts-gold)/20 hover:text-white"
          aria-label={isAuthenticated ? "Bibliothek ansehen" : "Beispielgeschichten ansehen"}
        >
          {isAuthenticated ? "Bibliothek ansehen" : "Beispielgeschichten ansehen"}
        </Link>
      </div>

      {/* Hero image preview */}
      <div className="relative z-10 mx-auto mt-16 max-w-5xl">
        <div
          className="overflow-hidden rounded-2xl border border-(--ts-border) shadow-2xl shadow-black/40"
        >
          <Image
            src="/images/landing/hero-background.png"
            alt="Traumseiten – Magische Geschichten Vorschau"
            width={1200}
            height={600}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
        {/* Glow under image */}
        <div
          className="pointer-events-none absolute -bottom-10 left-1/2 h-[120px] w-3/4 -translate-x-1/2 rounded-full blur-[60px] bg-radial-gradient(circle, var(--ts-gold-glow) 0%, transparent 70%)"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default HeroSection;
