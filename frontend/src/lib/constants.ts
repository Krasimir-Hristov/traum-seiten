/**
 * Shared decorative stars for magical background effects.
 */
export const DECORATIVE_STARS = [
  { top: '12%', left: '15%', size: 3, delay: '0s' },
  { top: '20%', left: '80%', size: 2, delay: '1.2s' },
  { top: '35%', left: '10%', size: 2, delay: '0.8s' },
  { top: '25%', left: '90%', size: 4, delay: '0.4s' },
  { top: '45%', left: '85%', size: 2, delay: '1.6s' },
  { top: '55%', left: '5%', size: 3, delay: '2.0s' },
  { top: '15%', left: '50%', size: 2, delay: '0.6s' },
  { top: '60%', left: '75%', size: 2, delay: '1.0s' },
] as const;

// --- Stars data for auth page (scattered across the whole page) ---
export const STATIC_AUTH_STARS = [
  { top: '5%', left: '3%', size: 2, opacity: 0.6 },
  { top: '8%', left: '18%', size: 1.5, opacity: 0.4 },
  { top: '6%', left: '38%', size: 2.5, opacity: 0.7 },
  { top: '12%', left: '55%', size: 1.5, opacity: 0.4 },
  { top: '3%', left: '70%', size: 2, opacity: 0.5 },
  { top: '18%', left: '8%', size: 1.5, opacity: 0.5 },
  { top: '22%', left: '28%', size: 2, opacity: 0.4 },
  { top: '25%', left: '48%', size: 1.5, opacity: 0.5 },
  { top: '30%', left: '5%', size: 2.5, opacity: 0.6 },
  { top: '35%', left: '35%', size: 2, opacity: 0.4 },
  { top: '42%', left: '15%', size: 1.5, opacity: 0.5 },
  { top: '45%', left: '58%', size: 2, opacity: 0.4 },
  { top: '50%', left: '3%', size: 2, opacity: 0.6 },
  { top: '55%', left: '25%', size: 1.5, opacity: 0.4 },
  { top: '60%', left: '50%', size: 2.5, opacity: 0.5 },
  { top: '65%', left: '10%', size: 2, opacity: 0.5 },
  { top: '70%', left: '42%', size: 1.5, opacity: 0.4 },
  { top: '75%', left: '22%', size: 2, opacity: 0.6 },
  { top: '80%', left: '60%', size: 2.5, opacity: 0.5 },
  { top: '85%', left: '8%', size: 1.5, opacity: 0.4 },
  { top: '90%', left: '35%', size: 2, opacity: 0.5 },
  { top: '92%', left: '55%', size: 1.5, opacity: 0.4 },
  { top: '95%', left: '18%', size: 2, opacity: 0.6 },
  // Right side stars (near the moon)
  { top: '28%', right: '12%', size: 2.5, opacity: 0.5 },
  { top: '35%', right: '5%', size: 1.5, opacity: 0.4 },
  { top: '40%', right: '20%', size: 2, opacity: 0.5 },
  { top: '48%', right: '8%', size: 1.5, opacity: 0.4 },
  { top: '55%', right: '15%', size: 2, opacity: 0.5 },
  { top: '63%', right: '3%', size: 2.5, opacity: 0.6 },
  { top: '70%', right: '25%', size: 1.5, opacity: 0.4 },
] as const;

// --- Feature Items for auth page ---
export const AUTH_FEATURES = [
  {
    icon: '🌙',
    title: 'KI-Geschichten',
    desc: 'Magische Abenteuer, personalisiert für dein Kind.',
  },
  {
    icon: '🎨',
    title: 'Einzigartige Illustrationen',
    desc: 'Jede Geschichte mit stimmungsvollen Bildern.',
  },
  {
    icon: '📚',
    title: 'Deine Bibliothek',
    desc: 'Alle Bücher sicher gespeichert und jederzeit abrufbar.',
  },
];
