const protocols = [
  {
    title: "EnOcean",
    desc: "ISO/IEC 14543 wireless energy harvesting – batteryless retrofit automation",
  },
  {
    title: "BACnet",
    desc: "ASHRAE 135 open standard for HVAC and building control – globally adopted",
  },
  {
    title: "KNX",
    desc: "European standard for lighting, HVAC, and blind control in commercial buildings",
  },
  {
    title: "Modbus",
    desc: "Industrial serial protocol for energy meters, VFDs, and legacy equipment",
  },
  {
    title: "DALI-2",
    desc: "Addressable lighting interface for granular zone and scene control",
  },
  {
    title: "LoRaWAN",
    desc: "Addressable lighting interface for granular zone and scene control",
  },
  {
    title: "MQTT",
    desc: "Lightweight IoT messaging enabling cloud-based analytics and AI integrations",
  },
  {
    title: "OPC-UA",
    desc: "Industrial IoT standard for SCADA and industrial automation interoperability",
  },
  {
    title: "PoE IEEE",
    desc: "Power-over-Ethernet for DC lighting, sensors, and devices over standard cabling",
  },
  {
    title: "Zigbee",
    desc: "Mesh wireless protocol for residential and commercial smart home systems",
  },
  {
    title: "M-Bus",
    desc: "European standard for remote reading of utility meters – water, gas, energy",
  },
  {
    title: "OPC-DA",
    desc: "Legacy SCADA integration for existing industrial and building infrastructure",
  },
];

export default function ProtocolSection() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="container">
        {/* Top Label */}
        <p className="text-primary text-xs tracking-widest mb-4">
          // IOT & PROTOCOL COMPATIBILITY
        </p>

        {/* Heading */}
        <h2 className="text-4xl font-montserrat mb-8">
          WORKS WITH <span className="text-primary">EVERY STANDARD</span> YOU
          SPECIFY
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 border border-white/10">
          {protocols.map((item, index) => (
            <div
              key={index}
              className="p-6 border bg-primary/12 border-white/10 hover:bg-primary/10 transition"
            >
              <h3 className="text-primary text-xl lg:text-sm font-semibold mb-2">
                {item.title}
              </h3>

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
