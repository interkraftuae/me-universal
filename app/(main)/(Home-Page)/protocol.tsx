import Image from "next/image";
const protocols = [
  {
    desc: "Wireless energy-harvesting protocol enabling battery-less automation systems.",
    img: "enocean",
  },
  {
    desc: "ASHRAE building automation standard widely used for HVAC and building control.",
    img: "bacnet",
  },
  {
    desc: "European standard used for lighting, HVAC, and smart building automation.",
    img: "knx",
  },
  {
    desc: "Industrial communication protocol used for energy meters and industrial equipment.",
    img: "modbus",
  },
  {
    desc: "Advanced digital lighting control protocol enabling precise lighting management.",
    img: "dali",
  },
  {
    desc: "Low-power long-range wireless communication technology used for IoT sensor networks.",
    img: "loarawan",
  },
  {
    desc: "Lightweight messaging protocol enabling cloud connectivity and real-time data exchange.",
    img: "mqtt",
  },
  {
    desc: "Secure, low-power wireless mesh networking protocol designed for reliable IoT device connectivity without a central hub.",
    img: "thread",
  },
  {
    desc: "Power-over-Ethernet technology enables devices to receive power and data through a single cable.",
    img: "poe",
  },
  {
    desc: "Wireless mesh networking protocol commonly used in smart home and automation systems.",
    img: "zigbee",
  },
  {
    desc: "European protocol used for remote monitoring of water, gas, and energy meters.",
    img: "mbus",
  },

  {
    desc: "IP-based interoperability standard ensures seamless communication between diverse smart home ecosystems and devices.",
    img: "matter",
  },
];

export default function ProtocolSection() {
  return (
    <section className="bg-black mt-20 py-20 text-white">
      <div className="container">
        {/* Top Label */}
        <p className="text-primary text-xs tracking-widest mb-4">
          // IOT & PROTOCOL COMPATIBILITY
        </p>

        {/* Heading */}
        <h2 className="text-4xl font-montserrat mb-8">
          WORKS WITH EVERY STANDARD YOU SPECIFY
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 border border-white/10">
          {protocols.map((item, index) => (
            <div
              key={index}
              className="p-6 border bg-primary/12 border-white/10 hover:bg-primary/10 transition"
            >
              <div className="size-20 ">
                <Image
                  width={50}
                  height={50}
                  src={`/home/icons/${item.img}.png`}
                  alt={"item.img"}
                  className="object-contain w-full h-full"
                />
              </div>
              <p className="text-sm lg:text-xs text-white/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
