import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Traumseiten – Magische Geschichten für Kinder',
  description:
    'Erstelle personalisierte, KI-generierte Geschichten für dein Kind. Jede Nacht ein neues Abenteuer.',
};

const HomePage: React.FC = () => {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6">
      {/* Background gradient orbs */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#f4c434]/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 right-1/4 h-[400px] w-[400px] rounded-full bg-[#f4c434]/5 blur-[100px]"
        aria-hidden="true"
      />

      {/* Hero content */}
      <section className="relative z-10 max-w-2xl text-center">
        <p className="text-6xl" aria-hidden="true">
          ✨📖
        </p>

        <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
          Magische Geschichten
          <br />
          <span className="bg-linear-to-r from-[#f4c434] to-[#f49d34] bg-clip-text text-transparent">
            für dein Kind
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/50">
          Traumseiten erstellt personalisierte, KI-generierte Geschichten mit
          deinem Kind als Held. Jede Nacht ein neues Abenteuer.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/anmelden"
            className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#f4c434] px-8 text-base font-semibold text-black shadow-lg shadow-[#f4c434]/20 transition-all duration-300 hover:bg-[#f4c434]/90 hover:shadow-xl hover:shadow-[#f4c434]/30 hover:scale-[1.02]"
            aria-label="Jetzt starten und anmelden"
          >
            Jetzt starten →
          </Link>
        </div>
      </section>

      {/* Feature highlights */}
      <section
        className="relative z-10 mt-24 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3"
        aria-label="Funktionen"
      >
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-colors duration-300 hover:border-[#f4c434]/20">
          <p className="text-3xl" aria-hidden="true">🎨</p>
          <h2 className="mt-3 font-semibold text-white">Personalisiert</h2>
          <p className="mt-1 text-sm text-white/40">
            Dein Kind wird zum Helden der Geschichte
          </p>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-colors duration-300 hover:border-[#f4c434]/20">
          <p className="text-3xl" aria-hidden="true">🤖</p>
          <h2 className="mt-3 font-semibold text-white">KI-Generiert</h2>
          <p className="mt-1 text-sm text-white/40">
            Einzigartige Geschichten, die es nur einmal gibt
          </p>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-colors duration-300 hover:border-[#f4c434]/20">
          <p className="text-3xl" aria-hidden="true">🌙</p>
          <h2 className="mt-3 font-semibold text-white">Jeden Abend</h2>
          <p className="mt-1 text-sm text-white/40">
            Eine neue magische Gute-Nacht-Geschichte
          </p>
        </article>
      </section>
    </main>
  );
};

export default HomePage;
