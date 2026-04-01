import Image from "next/image";

type TechCard = {
  title: string;
  desc: string;
  image: string;
  imageAlt?: string;
};

type TechnologyCornerProps = {
  heading: string;
  subheading: string;
  cards: TechCard[];
};

const TechnologyCorner = ({
  heading,
  subheading,
  cards,
}: TechnologyCornerProps) => {
  return (
    <section className="mt-20">
      <div className="container ">
        {/* Heading */}
        <div className="text-center mx-auto max-w-5xl mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-widest text-[#1a1a1a] mb-4">
            {heading}
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <div key={i} className="relative overflow-hidden group">
              {/* Image */}
              <div className="relative w-full h-[240px] md:h-[340px]">
                <Image
                  src={card.image}
                  alt={card.imageAlt ?? card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark gradient overlay — heavier at bottom for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
              </div>

              {/* Text — sits over image at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-semibold text-base leading-snug mb-2">
                  {card.title}
                </h3>
                <p className="text-white/65 text-xs leading-relaxed">
                  {card.desc}
                </p>
              </div>

              {/* Subtle border */}
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyCorner;
