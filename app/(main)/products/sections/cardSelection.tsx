type NumberedCardsSectionProps = {
  title: string;
  cards: { num: string; desc: string }[];
};

const NumberedCardsSection = ({ title, cards }: NumberedCardsSectionProps) => {
  return (
    <section className="bg-[#0f1021] py-16 mt-24 ">
      <div className="container">
        {/* Title */}
        <h2 className="text-white text-center text-xl md:text-2xl font-semibold tracking-widest uppercase mb-12">
          {title}
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className="border border-[#2e3260] bg-[#161830] p-8 flex flex-col gap-6"
            >
              <span className="text-white/50 font-montserrat text-center text-3xl tracking-widest">
                {card.num}
              </span>
              <p className="text-white/70 text-center leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumberedCardsSection;
