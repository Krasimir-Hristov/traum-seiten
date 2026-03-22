import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/supabase-server';
import Navbar from '@/features/landing/components/navbar';
import HeroSection from '@/features/landing/components/hero-section';
import FeaturesSection from '@/features/landing/components/features-section';
import StoriesSection from '@/features/landing/components/stories-section';
import CTASection from '@/features/landing/components/cta-section';
import Footer from '@/features/landing/components/footer';

export const metadata: Metadata = {
  title: 'Traumseiten – Magische Geschichten für Ihr Kind',
  description:
    'Verwandeln Sie das Schlafengehen in eine verzauberte Reise mit KI-erstellten Geschichten, in denen Ihr Kind der Held seines eigenen Abenteuers ist.',
};

const HomePage: React.FC = async () => {
  let isAuthenticated = false;

  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    isAuthenticated = Boolean(user);
  } catch (error) {
    // Treat as unauthenticated if supabase is unavailable
    if (process.env.NODE_ENV !== 'production') {
      console.error('Supabase auth error:', error);
    }
  }

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <main className="bg-(--ts-bg-deep) text-white">
        <HeroSection isAuthenticated={isAuthenticated} />
        <FeaturesSection />
        <StoriesSection isAuthenticated={isAuthenticated} />
        <CTASection isAuthenticated={isAuthenticated} />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
