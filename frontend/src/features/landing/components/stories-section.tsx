import Image from 'next/image';
import Link from 'next/link';

interface StoryCardProps {
  title: string;
  category: string;
  readTime: string;
  imageSrc: string;
  imageAlt: string;
}

const StoryCard: React.FC<StoryCardProps> = ({
  title,
  category,
  readTime,
  imageSrc,
  imageAlt,
}) => {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-(--ts-border) bg-(--ts-bg-card) transition-all duration-300 hover:border-(--ts-gold)/20 hover:glow-gold">
      <div className="aspect-4/3 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-(--ts-gold)/10 px-2.5 py-0.5 text-xs font-medium text-(--ts-gold)">
            {category}
          </span>
          <span className="text-xs text-(--ts-text-muted)">
            {readTime}
          </span>
        </div>
        <h3 className="mt-2 text-base font-semibold text-white line-clamp-2">
          {title}
        </h3>
      </div>
    </article>
  );
};

const stories: StoryCardProps[] = [
  {
    title: 'Der Verzauberte Wald',
    category: 'Abenteuer',
    readTime: '5 Min. Lesezeit',
    imageSrc: '/images/landing/story-enchanted-forest.png',
    imageAlt: 'Der Verzauberte Wald – Eine magische Waldgeschichte',
  },
  {
    title: 'Weltraumabenteuer',
    category: 'Sci-Fi',
    readTime: '7 Min. Lesezeit',
    imageSrc: '/images/landing/story-space-adventure.png',
    imageAlt: 'Weltraumabenteuer – Reise durch die Sterne',
  },
  {
    title: 'Der geheime Ozean',
    category: 'Fantasie',
    readTime: '6 Min. Lesezeit',
    imageSrc: '/images/landing/story-ocean-depths.png',
    imageAlt: 'Der geheime Ozean – Unterwasserabenteuer',
  },
  {
    title: 'Die Berggipfel-Quest',
    category: 'Abenteuer',
    readTime: '8 Min. Lesezeit',
    imageSrc: '/images/landing/story-mountain-quest.png',
    imageAlt: 'Die Berggipfel-Quest – Bergabenteuer',
  },
];

interface StoriesSectionProps {
  isAuthenticated?: boolean;
}

const StoriesSection: React.FC<StoriesSectionProps> = ({ isAuthenticated = false }) => {
  return (
    <section
      id="geschichten"
      className="relative px-6 py-24 md:px-12"
      aria-label="Beliebteste Geschichten"
    >
      {/* Section heading */}
      <div className="mx-auto flex max-w-6xl items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Beliebteste Geschichten
          </h2>
          <p className="mt-2 text-base text-(--ts-text-secondary)">
            Entdecken Sie die beliebtesten Geschichten unserer Gemeinschaft.
          </p>
        </div>
        <Link
          href={isAuthenticated ? '/dashboard' : '/auth'}
          className="hidden text-sm font-medium text-(--ts-gold) transition-colors duration-200 hover:text-(--ts-gold-hover) md:inline-flex"
          aria-label="Alle Geschichten ansehen"
        >
          Alle ansehen →
        </Link>
      </div>

      {/* Story cards grid */}
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stories.map((story) => (
          <StoryCard key={story.title} {...story} />
        ))}
      </div>
    </section>
  );
};

export default StoriesSection;
