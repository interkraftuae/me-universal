import React from "react";
import Image from "next/image";
const Solutions = () => {
  return (
    <section className="  mt-16">
      <div className=" container flex-col lg:flex-row flex gap-6 items-start mb-20">
        <h1 className="uppercase tracking-tight font-semibold font-montserrat text-4xl">
          <span className="text-primary">ADVANCED </span> Solutions
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
      <div className="bg-[#050100] py-18">
        <SolutionGrid />
      </div>
    </section>
  );
};

export default Solutions;

const grid2 = [
  {
    label: "Integrated Waste Management",
    img: "integrated-waste-management.jpg",
  },
  { label: "Centralised Vacuum Cleaning", img: "centralized-vaccum.jpg" },
  { label: "Smart Villas & Mansions", img: "smart-villas.png" },
  { label: "Smart Buildings & Spaces", img: "smart-spaces.webp" },
  { label: "Smart Mosque", img: "smart-mosque.webp" },
  { label: "Digital Home Cinema", img: "digital-home-cinema.jpg" },
  { label: "Outdoor Theatre", img: "outdoor-theatre.jpg" },
  { label: "Push Pull Locks", img: "push-pull-locks.jpg" },
];
const SolutionGrid = () => {
  return (
    <div className="container ">
      <div className="grid lg:h-110 grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5">
        {/* Left Grid Card */}
        <div className=" bg-white/3 border border-white/10 lg:p-5">
          <div className="flex h-[230px] lg:h-auto items-center relative justify-center w-full ">
            <Image
              src={"/home/solution/grid-1/digital-smart-lighting.webp"}
              alt={"Digital Smart Lighting"}
              fill
            />
            <div className="absolute size-full inset-0 bg-black/50" />
            <div className="relative p-2 text-xl text-white">
              Digital Smart Lighting
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5">
          {/* Top Grid Cart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 lg:p-5 border border-white/10 bg-white/3">
            <div className=" h-[230px] lg:h-auto">
              <div className="flex items-center relative justify-center w-full h-full">
                <Image
                  src={"/home/solution/grid-1/iot-controls.jpg"}
                  alt={"Digital Smart Lighting"}
                  fill
                />
                <div className="absolute size-full inset-0 bg-black/50" />
                <div className="relative p-2 text-xl text-white">
                  EnOcean IOT Controls
                </div>
              </div>
            </div>

            <div className=" h-[230px] lg:h-auto ">
              <div className="flex items-center relative justify-center w-full h-full">
                <Image
                  src={"/home/solution/grid-1/wireless-network.jpg"}
                  alt={"Digital Smart Lighting"}
                  fill
                />
                <div className="absolute size-full inset-0 bg-black/50" />
                <div className="relative p-2 text-xl text-white">
                  IP500 Wireless Network
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Grid Card */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 border lg:p-5 border-white/10 bg-white/3">
            <div className=" h-[230px] lg:h-auto ">
              <div className="flex items-center relative justify-center w-full h-full">
                <Image
                  src={"/home/solution/grid-1/laundry-collection-system.jpg"}
                  alt={"Digital Smart Lighting"}
                  fill
                />
                <div className="absolute size-full inset-0 bg-black/50" />
                <div className="relative text-xl p-2 text-white">
                  Laundry Collection System
                </div>
              </div>
            </div>

            <div className=" h-[230px] lg:h-auto ">
              <div className="flex items-center relative justify-center w-full h-full">
                <Image
                  src={"/home/solution/grid-1/lighting-control.jpg"}
                  alt={"Digital Smart Lighting"}
                  fill
                  className="object-cover"
                />
                <div className="absolute size-full inset-0 bg-black/50" />
                <div className="relative text-xl p-2 text-white">
                  Digital Smart Ligting Controller
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 bg-white/3 border mt-5 lg:p-5 border-white/10">
        {grid2.map((item, key) => (
          <div key={key} className=" h-[180px]">
            <div className="flex items-center relative justify-center w-full h-full">
              <Image
                src={`/home/solution/grid-2/${item.img}`}
                alt={item.label}
                fill
                className="object-cover"
              />
              <div className="absolute size-full inset-0 bg-black/70" />
              <div className="relative text-center p-2 text-xl text-white">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
