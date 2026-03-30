import Image from "next/image";

const Card = ({
  tech,
}: {
  tech: { title: string; desc: string; image: string };
}) => (
  <div className="relative overflow-hidden group">
    <div className={`relative w-full h-[220px] md:h-[250px]`}>
      <Image
        src={tech.image}
        alt={tech.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
        <h3 className="text-white font-semibold text-lg mb-2 leading-snug">
          {tech.title}
        </h3>
        <p className="text-white/75 text-xs leading-relaxed">{tech.desc}</p>
      </div>
    </div>
  </div>
);

const TechnologyCorner = ({
  title,
  desc,
  firstRow,
  lastRow,
}: {
  title: string;
  desc: string;
  firstRow: { title: string; desc: string; image: string }[];
  lastRow: { title: string; desc: string; image: string }[];
}) => {
  return (
    <section className="mt-24">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-montserrat font-semibold tracking-widest uppercase text-[#1a1a1a] mb-4">
            {title}
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Row 1 — 3 equal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {firstRow.map((tech, i) => (
            <Card key={i} tech={tech} />
          ))}
        </div>

        {/* Row 2 — 2 wide cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {lastRow.map((tech, i) => (
            <Card key={i} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyCorner;
