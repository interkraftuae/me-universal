import Image from "next/image";

type FeatureHighlightProps = {
  eyebrow: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  intro: string;
  bullets: string[];
  closing: string;
};

const FeatureHighlight = ({
  eyebrow,
  subtitle,
  description,
  image,
  imageAlt,
  intro,
  bullets,
  closing,
}: FeatureHighlightProps) => {
  return (
    <section className="mt-20">
      <div className="container">
        {/* Heading */}
        <div className="mb-8 space-y-2">
          <h2 className="text-3xl text-center md:text-start md:text-3xl font-semibold font-montserrat uppercase tracking-wide text-[#1a1a1a] ">
            {eyebrow}
          </h2>
          <p className=" font-medium text-center md:text-start text-gray-500 ">
            {subtitle}
          </p>
          <p className="text-sm text-center md:text-start text-gray-800">
            {description}
          </p>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Image */}
          <div className="relative w-full bg-gray-300 h-[280px] md:h-[340px] overflow-hidden">
            <Image src={image} alt={imageAlt} fill className="object-cover" />
          </div>

          {/* Right content */}
          <div className="flex flex-col gap-5">
            <p className=" text-[#050100] font-medium leading-relaxed">
              {intro}
            </p>

            {/* Bullets */}
            <ul className="flex flex-col gap-3">
              {bullets.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1.5 w-3 h-3 shrink-0 border border-primary rotate-45 flex items-center justify-center"></span>
                  {point}
                </li>
              ))}
            </ul>

            <p className=" text-[#050100] leading-relaxed">{closing}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
