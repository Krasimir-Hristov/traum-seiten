import type { Metadata } from 'next';
import { getAuthUser } from '@/lib/dal';
import { HeroGallery } from '@/features/dashboard/components/HeroGallery';
import { RecentBooks } from '@/features/dashboard/components/RecentBooks';

export const metadata: Metadata = {
  title: 'Bücherregal – Traumseiten',
  description: 'Dein persönliches Bücherregal mit allen magischen Geschichten.',
};

const DashboardPage: React.FC = async () => {
  const user = await getAuthUser();

  return (
    <section className="space-y-12 pb-12 relative">
      {/* Decorative stars (Identical to landing page) */}
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
          className="pointer-events-none absolute z-0 animate-heartbeat rounded-full bg-white"
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

      <header className="relative overflow-hidden rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[#12122a] shadow-lg">
        {/* Subtle Glowing Effect */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#f4c434] opacity-[0.05] blur-[80px]" />
        <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[#e6b52e] opacity-[0.03] blur-[60px]" />
        
        <div className="relative z-10 flex flex-col items-start gap-4 px-8 py-10 md:px-12 md:py-14">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Willkommen zurück, <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f4c434] to-[#fcd971]">
              Magier {user.user_metadata?.full_name?.split(' ')[0] || ''}!
            </span> 🌙
          </h1>
          <p className="max-w-xl text-lg text-white/60 leading-relaxed">
            Deine erzählten Welten und Helden warten auf dich. Welches Abenteuer schreiben wir heute?
          </p>
        </div>
      </header>

      {/* Meine Helden Section */}
      <HeroGallery />

      {/* Letzte Bücher Section */}
      <RecentBooks />
    </section>
  );
};

export default DashboardPage;
