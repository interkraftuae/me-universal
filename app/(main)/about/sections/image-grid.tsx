import React from "react";

const ImageGrid = () => {
  const images = [
    { img: "/home/products/bags.png", className: "h-[230px] lg:h-[250px]" },
    {
      img: "/home/products/batteries.png",
      className: "h-[230px] lg:h-[320px]",
    },
    {
      img: "/home/products/scooty.png",
      className: "h-[230px] lg:h-[230px]",
    },
    {
      img: "/home/products/home-appliance.png",
      className: "h-[230px] lg:h-[230px]",
    },
    {
      img: "/about/mattress.png",
      className: "col-span-2 lg:col-span-1 h-[230px] lg:h-[250px]",
    },
  ];
  return (
    <section className="py-20 mb-8">
      <div className="container ">
        <div className="">
          <div className="grid grid-cols-2 items-end lg:grid-cols-5 gap-2 mb-12">
            {images.map((image, idx) => (
              <div
                className={`w-full border rounded-xl border-gray-100 ${image.className}`}
                key={idx}
              >
                <img
                  src={image.img}
                  alt="Camera"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          <div className="max-w-5xl mt-28 mx-auto space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Middle East Engineering Technologies is a trading and solutions
              company and a subsidiary of ME Universal. We work with businesses
              to deliver specialised products that are practical,
              cost-effective, and built for real working conditions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our focus is on connecting advanced technologies with everyday
              business use. We select products that help companies work more
              efficiently while also reducing energy use and environmental
              impact.
            </p>
            <p className="text-gray-700 leading-relaxed">
              MEET serves industrial and commercial customers across multiple
              regions through a diversified portfolio. Our offerings include
              apparel accessories designed for durability, cooling jacket
              technology that improves worker comfort in high-temperature
              environments, electric bikes and scooters that support cleaner
              mobility, and power and automotive batteries for energy storage
              and backup needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By working closely with manufacturers and solution providers, we
              ensure reliable supply, consistent quality, and products suited to
              regional market requirements. Backed by the experience and vision
              of ME Universal, MEET continues to grow as a trusted B2B partner
              for businesses looking for dependable and responsible solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
