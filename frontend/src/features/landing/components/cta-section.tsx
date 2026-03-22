import Link from 'next/link';

interface CTASectionProps {
  isAuthenticated?: boolean;
}

const CTASection: React.FC<CTASectionProps> = ({ isAuthenticated = false }) => {
  const ctaHref = isAuthenticated ? '/dashboard' : '/auth';
  const ctaAria = isAuthenticated ? 'Zum Dashboard' : 'Erste Geschichte kostenlos erstellen';
  const ctaText = isAuthenticated ? 'Zum Dashboard' : 'Erste Geschichte kostenlos erstellen';

  return (
    <section
      className="relative px-6 py-24 md:px-12"
      aria-label="Jetzt starten"
    >
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-(--ts-border) bg-(--ts-bg-card) p-10 text-center shadow-2xl shadow-black/50 md:p-20">
        {/* Glow effect inside CTA */}
        <div
          className="pointer-events-none absolute -bottom-32 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, var(--ts-gold-glow) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="relative z-10">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Bereit für eine magische Nacht?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-(--ts-text-secondary) md:text-lg">
            Schließen Sie sich Tausenden von Eltern an, die das Zubettgehen in
            magische Momente der Verbundenheit verwandelt haben. Erste Geschichte kostenlos!
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href={ctaHref}
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-(--ts-gold) px-10 text-lg font-semibold text-(--ts-bg-deep) shadow-(--ts-gold-glow) transition-all duration-300 hover:bg-(--ts-gold-hover) hover:shadow-(--ts-gold-glow-lg) hover:scale-[1.02]"
              aria-label={ctaAria}
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
