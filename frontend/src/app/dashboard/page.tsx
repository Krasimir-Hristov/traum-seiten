import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getAuthUser } from '@/lib/dal';
import { DECORATIVE_STARS } from '@/lib/constants';
import { HeroGallery } from '@/features/dashboard/components/hero-gallery';
import { RecentBooks } from '@/features/dashboard/components/recent-books';

export const metadata: Metadata = {
  title: 'Bücherregal – Traumseiten',
  description: 'Dein persönliches Bücherregal mit allen magischen Geschichten.',
};

const DashboardPage: React.FC = async () => {
  let user;
  try {
    user = await getAuthUser();
  } catch (error) {
    console.error("Failed to authenticate user on dashboard:", error);
    user = null;
  }

  if (!user) {
    redirect('/login');
  }

  const firstName = user?.user_metadata?.full_name?.split(' ')[0];
  const greeting = firstName ? `Willkommen zurück, ${firstName}!` : 'Willkommen zurück, Magier!';

  return (
    <section className="space-y-12 pb-12 relative">
      {/* Decorative stars (Identical to landing page) */}
      {DECORATIVE_STARS.map((star, i) => (
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
            {firstName ? (
              <>
                Willkommen zurück, <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f4c434] to-[#fcd971]">
                  Magier {firstName}!
                </span> 🌙
              </>
            ) : (
              <>
                Willkommen zurück, <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f4c434] to-[#fcd971]">
                  Magier!
                </span> 🌙
              </>
            )}
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
