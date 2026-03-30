import Image from "next/image";
import { Diamond } from "lucide-react";

type SolutionItem = {
  title: string;
  desc: string;
  href?: string;
};

type PlatformSolutionsSectionProps = {
  heading: string;
  subheading: string;
  image: string;
  imageAlt?: string;
  solutions: SolutionItem[];
};

const PlatformSolutionsSection = ({
  heading,
  subheading,
  image,
  imageAlt = "Platform visual",
  solutions,
}: PlatformSolutionsSectionProps) => {
  const half = Math.ceil(solutions.length / 2);
  const leftCol = solutions.slice(0, half);
  const rightCol = solutions.slice(half);

  return (
    <section className="mt-32">
      <div className="container ">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-3xl font-montserrat font-semibold uppercase tracking-widest text-[#1a1a1a] mb-3">
            {heading}
          </h2>
          <p className="text-sm text-gray-500">{subheading}</p>
        </div>

        {/* Full-width image */}
        <div className="relative w-full bg-gray-300 h-[220px] md:h-[360px] overflow-hidden mb-12">
          <Image src={image} alt={imageAlt} fill className="object-cover" />
        </div>

        {/* Solutions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {[leftCol, rightCol].map((col, ci) => (
            <div key={ci} className="flex flex-col gap-8">
              {col.map((item, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <a
                    href={item.href ?? "#"}
                    className="flex items-center gap-2 text-[#4f46e5] text-lg lg:text-sm font-medium hover:underline w-fit"
                  >
                    <Diamond size={10} className="shrink-0" />
                    {item.title}
                  </a>
                  <p className="lg:text-xs text-gray-500 leading-relaxed pl-4">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSolutionsSection;
