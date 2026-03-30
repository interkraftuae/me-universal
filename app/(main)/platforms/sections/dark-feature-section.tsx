type FeatureCard = {
  num: string;
  desc: string;
};

type DarkFeatureSectionProps = {
  label: string;
  body: string;
  cards: FeatureCard[];
};

const DarkFeatureSection = ({
  label,
  body,
  cards,
}: DarkFeatureSectionProps) => {
  return (
    <section className="bg-[#0f1021] py-14 mt-24">
      <div className="container mx-auto">
        {/* Top row — label + body */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 mb-10">
          <p className="text-white text-sm font-medium">{label}</p>
          <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className="border border-[#2e3260] bg-[#161830] p-10 flex flex-col items-center text-center gap-6"
            >
              <span className="text-gray-500 text-3xl font-montserrat tracking-widest">
                {card.num}
              </span>
              <p className="text-white text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DarkFeatureSection;
