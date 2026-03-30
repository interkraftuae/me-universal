import Image from "next/image";

const Features = ({
  features,
}: {
  features: {
    num: string;
    title: string;
    desc: string;
    image: string;
    imageLeft: boolean;
  }[];
}) => {
  return (
    <section className="mt-16">
      <div className="container">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-semibold text-[#1a1a1a] leading-tight mb-4">
            <span className="text-3xl font-normal  uppercase block mb-2 text-[#1a1a1a]">
              Designed to{" "}
              <span className=" text-4xl! font-semibold uppercase">
                Integrate &
              </span>
            </span>
            <span className="font-montserrat  text-3xl">
              Adapt into <span className="uppercase">Your Space</span>
            </span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xl">
            Because our systems are modular and adaptable, they can be
            incorporated easily
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 ${
                !feature.imageLeft ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative bg-gray-300 w-full h-[220px] lg:h-[320px] overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl md:text-2xl font-montserrat font-semibold text-[#1a1a1a] mb-6 flex items-baseline gap-3">
                  <span className="text-gray-400 font-roboto font-normal text-base">
                    {feature.num}
                  </span>
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
