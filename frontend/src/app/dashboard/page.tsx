import type { Metadata } from 'next';
import { getAuthUser } from '@/lib/dal';

export const metadata: Metadata = {
  title: 'Bücherregal – Traumseiten',
  description: 'Dein persönliches Bücherregal mit allen magischen Geschichten.',
};

const DashboardPage: React.FC = async () => {
  const user = await getAuthUser();

  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">
          Willkommen, <span className="text-[#f4c434]">{user.user_metadata?.full_name || 'Traumträumer'}</span>! 🌙
        </h1>
        <p className="mt-2 text-lg text-white/60">
          Hier findest du alle deine magischen Geschichten.
        </p>
      </header>

      <article className="flex items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/5 p-16">
        <div className="text-center">
          <p className="text-5xl">📚</p>
          <h2 className="mt-4 text-xl font-semibold text-white/80">
            Noch keine Geschichten
          </h2>
          <p className="mt-2 text-white/40">
            Dein Bücherregal ist noch leer. Erstelle deine erste magische Geschichte!
          </p>
        </div>
      </article>
    </section>
  );
};

export default DashboardPage;
