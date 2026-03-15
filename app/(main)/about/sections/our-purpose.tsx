import Image from "next/image";
import React from "react";

interface PurposeCardProps {
  title: string;
  desc: string;
}

const cards: PurposeCardProps[] = [
  {
    title: "Practical Innovation",
    desc: "Solutions designed for real working conditions, not just technical specifications.",
  },
  {
    title: "Responsible Growth",
    desc: "Products that balance performance with efficient energy and resource use.",
  },
  {
    title: "Long-Term Partnerships",
    desc: "Relationships built on trust, transparency, and consistent supply.",
  },
];

const OurPurpose = () => {
  return (
    <section className="py-4 bg-white">
      <div className="container">
        {/* Heading */}
        <h2 className="text-center text-4xl lg:text-4xl font-rubik uppercase font-light text-gray-900 mb-6">
          Our Purpose
        </h2>

        {/* Quote Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-10 h-[320px]">
          {/* Background Image */}
          <Image
            src="/about/purpose/purpose.jpg"
            alt="Our Purpose"
            fill
            className="object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/10" />
          {/* Quote text */}
          <div className="relative pb-16 z-10 flex items-end justify-center h-full px-10 text-center">
            <p className="text-white text-md lg:text-2xl font-semibold leading-snug max-w-2xl">
              To connect businesses with practical, future-ready solutions that
              improve performance while supporting responsible growth.
            </p>
          </div>
        </div>

        {/* Body text */}
        <p className="text-gray-600 text-center leading-relaxed mb-12  lg:text-base">
          We exist to simplify sourcing and bridge the gap between technology
          and real-world application. By focusing on reliability, efficiency,
          and sustainability, we help businesses operate smarter without
          unnecessary complexity. Every partnership is built on understanding
          operational needs and delivering solutions that make a measurable
          impact in daily business environments.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="bg-[#FAF4F5] rounded-2xl p-6">
              <h3 className="text-xl text-center font-light bg-white rounded-[99px]  px-3 py-2 lg:py-1 text-gray-800 mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 font-[500] text-center leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPurpose;
