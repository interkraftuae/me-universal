import Image from "next/image";

type GridImage = {
  src: string;
  alt: string;
  label: string;
};

type ProvenGridSectionProps = {
  heading: string;
  topRow: [GridImage, GridImage, GridImage];
  bottomRow: [GridImage, GridImage, GridImage];
};

const ProvenGridSection = ({
  heading,
  topRow,
  bottomRow,
}: ProvenGridSectionProps) => {
  const renderRow = (row: [GridImage, GridImage, GridImage]) => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-6">
      {row.map((img, i) => {
        const labelBelow = i === 1; // center label goes below
        return (
          <div key={i} className="flex flex-col">
            {/* Label above (left & right cols) */}
            {!labelBelow && (
              <p className="text-xs  hidden text-center text-gray-500 leading-snug mb-2 lg:flex items-end justify-center">
                {img.label}
              </p>
            )}

            {/* Image */}
            <div className="relative bg-slate-400 w-full h-[210px] md:h-[190px] overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Label below (center col) */}
            {labelBelow && (
              <p className="text-xs text-center text-gray-500 leading-snug mt-2 hidden lg:flex items-start justify-center">
                {img.label}
              </p>
            )}

            <p className=" text-center text-gray-500 leading-snug mt-2 lg:hidden flex items-start justify-center">
              {img.label}
            </p>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="mt-18 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center font-montserrat text-lg md:text-3xl font-semibold uppercase tracking-widest text-[#1a1a1a] mb-12 max-w-3xl mx-auto leading-snug">
          {heading}
        </h2>

        <div className="flex flex-col gap-10">
          {renderRow(topRow)}
          {renderRow(bottomRow)}
        </div>
      </div>
    </section>
  );
};

export default ProvenGridSection;
