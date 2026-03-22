import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-(--ts-border) bg-(--ts-bg-card) transition-all duration-300 hover:border-(--ts-gold)/20 hover:glow-gold">
      <div className="aspect-16/10 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={250}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-(--ts-text-secondary)">
          {description}
        </p>
      </div>
    </article>
  );
};

const features: FeatureCardProps[] = [
  {
    title: 'Personalisierte Helden',
    description:
      'Ihr Kind wird zur Hauptfigur. Personalisieren Sie Aussehen, Name und Charakter für einzigartige Abenteuer.',
    imageSrc: '/images/landing/feature-personalize.png',
    imageAlt: 'Personalisierte Helden – Kind wird zum Helden der Geschichte',
  },
  {
    title: 'KI-Illustrationen',
    description:
      'Professionelle, einzigartige Illustrationen werden automatisch zu jeder Geschichte generiert.',
    imageSrc: '/images/landing/feature-illustrations.png',
    imageAlt: 'KI-generierte Illustrationen für Kindergeschichten',
  },
  {
    title: 'Sprachausgabe',
    description:
      'Lassen Sie die Geschichten von einer natürlichen KI-Stimme vorlesen – perfekt für die Gute-Nacht-Routine.',
    imageSrc: '/images/landing/feature-audio.png',
    imageAlt: 'Sprachausgabe – KI liest Geschichten vor',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section
      id="funktionen"
      className="relative px-6 py-24 md:px-12"
      aria-label="Die Magie von Traumseiten"
    >
      {/* Section heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Die Magie von{' '}
          <span className="text-(--ts-gold)">Traumseiten</span>
        </h2>
        <p className="mt-4 text-base text-(--ts-text-secondary)">
          Entdecken Sie, wie modernste KI-Technologie personalisierte Geschichten
          erschafft, die Traumseiten zu einem einzigartigen Erlebnis machen.
        </p>
      </div>

      {/* Feature cards grid */}
      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
