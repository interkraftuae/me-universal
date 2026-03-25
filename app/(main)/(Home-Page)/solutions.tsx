import React from "react";
import Image from "next/image";
const Solutions = () => {
  return (
    <section className=" mt-20">
      <div className=" container flex-col lg:flex-row flex gap-6 items-start mb-20">
        <h1 className="uppercase tracking-tight font-semibold font-montserrat text-4xl">
          ADVANCED Solutions
        </h1>
        <div className="space-y-3">
          <p>
            ME Universal delivers a wide range of integrated solutions designed
            for modern residential, commercial, and industrial buildings. Our
            systems connect devices, infrastructure, and digital platforms to
            improve building performance, automation, and operational
            intelligence.
          </p>

          <p>
            From smart intelligent DC lighting and automation to centralized
            vacuum systems, digital fragrance solutions, building analytics, and
            energy-efficient technologies, our portfolio is designed to support
            high-performance environments across multiple industries.
          </p>

          <p>
            These solutions enable buildings to operate more efficiently while
            enhancing user experience, reducing operational complexity, and
            supporting long-term sustainability initiatives.
          </p>

          <p>
            Our team works closely with architects, consultants, developers, and
            contractors to ensure each solution integrates seamlessly into the
            overall building ecosystem.
          </p>
        </div>
      </div>
      <div className="bg-[#050100] py-20">
        <SolutionGrid />
      </div>
    </section>
  );
};

export default Solutions;

const grid2 = [
  {
    label: "Wireless Retrofit Automation",
    img: "wireless-retrofit.jpg",
  },
  { label: "Bathroom Ventilation System", img: "bathroom-ventilation.jpg" },
  { label: "Odor Control & Air Disinfection", img: "odor-control.png" },
  { label: "Digital Electric Towel Warmer", img: "electric-warmer.jpg" },
  { label: "Home Cinema & Sound Systems", img: "home-cinema.jpg" },
  { label: "Mirror TV Systems", img: "mirror-tv.jpg" },
  { label: "Water Leakage Solution", img: "water-leakage.png" },
  { label: "Digital Fragrance", img: "digital-fragnance.jpg" },
];
const SolutionGrid = () => {
  return (
    <div id={"solutions"} className="container ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* LEFT BIG CARD */}
        <div className="bg-white/5 border border-white/10 p-4 lg:p-5 flex flex-col">
          <div className="relative w-full flex-1 min-h-[260px]">
            <Image
              src="/home/solution/grid-1/dc-lighting.jpg"
              alt="DC Lighting"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-center text-base text-white mt-3">
            DC Lighting & Automation
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4 lg:gap-6">
          {/* TOP ROW */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6 bg-white/5 border border-white/10 p-4 lg:p-5">
            <div className="flex flex-col">
              <div className="relative w-full h-[180px]">
                <Image
                  src="/home/solution/grid-1/ai-powered.jpg"
                  alt="Ai Powered "
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-white mt-2">
                Air Powered Laundry Collection
              </p>
            </div>
            <div className="flex flex-col">
              <div className="relative w-full h-[180px]">
                <Image
                  src="/home/solution/grid-1/centralized-vaccume.png"
                  alt="Centralised Vacuum Cleaning"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-white mt-2">
                Centralised Vacuum Cleaning
              </p>
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6 bg-white/5 border border-white/10 p-4 lg:p-5">
            <div className="flex flex-col">
              <div className="relative w-full bg-neutral-800 h-[180px]">
                <Image
                  src="/home/solution/grid-1/grabage-line.png"
                  alt="Garbage & Line Chutes"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-white mt-2">
                Garbage & Line Chutes
              </p>
            </div>
            <div className="flex flex-col">
              <div className="relative w-full h-[180px]">
                <Image
                  src="/home/solution/grid-1/building-automation.jpeg"
                  alt="Building Automation & Energy Mgmt"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-white text-base mt-2">
                Building Automation & Energy Mgmt
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 bg-white/3 border mt-5 lg:p-5 border-white/10">
        {grid2.map((item, key) => (
          <div key={key} className=" ">
            <div className="flex items-center h-[180px] relative justify-center w-full ">
              <Image
                src={`/home/solution/grid-2/${item.img}`}
                alt={item.label}
                fill
                className="object-cover"
              />
            </div>
            <p className="relative text-center text-base p-2 text-white">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
