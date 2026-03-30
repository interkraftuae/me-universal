import HeroSection from "../sections/hero-section";
import HeadTitle from "../sections/headTitle";
import ProductRange from "../sections/product-range";
import Features from "../sections/features";
import FeatureHighlight from "../sections/highlight";
import TechnologyCorner from "../sections/techcorner";
import Form from "../../(Home-Page)/form";
const page = () => {
  return (
    <div>
      <HeroSection
        img={"ai-powered-laundry/banner.png"}
        title={"DC Lighting & Automation "}
        desc={"Smarter Power. Intelligent Control."}
      />
      <HeadTitle
        title={"Commercial & Residential Intelligent Lighting Infrastructure"}
        desc={[
          "ME Universal delivers next-generation DC Lighting & Automation Solutions designed for modern residential and commercial environments including offices, smart homes, hospitality projects, retail spaces, villas, and large infrastructure developments.",
          "Traditional AC-based lighting systems rely on multiple layers of wiring, converters, drivers, and hardware. These systems increase energy loss, installation complexity, and long-term maintenance costs.",
          "Our DC-powered lighting infrastructure simplifies building systems by delivering power and control through a single low-voltage network. With integrated automation platforms, lighting, devices, and smart technologies operate together seamlessly, creating more efficient, intelligent, and sustainable spaces.",
        ]}
      />
      <ProductRange
        titleText="Just intelligent, automated laundry movement."
        products={[
          {
            title: "Persqm – X-PoE DC Lighting",
            desc: "Advanced DC lighting system delivering power and data through a single Ethernet cable",
            list: [
              "Power & data delivered through a single Ethernet cable",
              "Reduced energy loss compared to conventional AC lighting",
              "Simplified wiring and electrical infrastructure",
              "Centralized lighting monitoring and control",
              "Scalable network architecture for modern buildings",
            ],
            img: "",
          },
          {
            title: "RTI – Smart Automation Control",
            desc: "Unified automation system for controlling lighting, climate, AV, and connected environments",
            list: [
              "Unified control of lighting, climate, AV, and connected systems",
              "Custom automation scenes and schedules",
              "Control via touch panels, mobile apps, and remotes",
              "Integration with smart home and AV infrastructure",
              "Flexible solution for residential and commercial environments",
            ],
            img: "",
          },
          {
            title: "Moorgen – Luxury Smart Living Systems",
            desc: "Premium smart living solutions with designer controls and seamless automation integration",
            list: [
              "Designer smart switches and control panels",
              "Intelligent lighting and device automation",
              "Seamless integration with luxury interiors",
              "Centralized control of connected smart systems",
              "Scalable automation platform for premium residences",
            ],
            img: "",
          },
        ]}
      />
      <Features
        features={[
          {
            num: "01",
            title: "Simplified Low-Voltage Infrastructure",
            desc: "Our DC-powered systems redefine how buildings are wired, replacing heavy AC cabling with streamlined, Plug-and-Play Ethernet Architecture. By delivering power and data through a single cable, we eliminate the need for complex conduits and bulky drivers at every fixture. This modularity allows architects and MEP consultants to design cleaner ceilings and more flexible floor plans. Whether integrating Persqm X-PoE for an office or Moorgen luxury controls for a villa, the hardware integrates discreetly into the interior design, reducing installation complexity while significantly lowering long-term maintenance costs.",
            image: "/features/architectural-integration.jpg",
            imageLeft: true,
          },
          {
            num: "02",
            title: "Unified Intelligent Ecosystems",
            desc: "Beyond simple illumination, our solutions serve as the digital backbone of a modern building. Our systems are designed for full interoperability, supporting industry-standard protocols such as KNX, BACnet, and Modbus. This ensures that lighting, climate, and AV systems powered by platforms like RTI work in perfect harmony rather than as isolated silos. This 'future-ready' adaptability means that as technology evolves, your space can be reconfigured or upgraded through software and simple network expansions, ensuring the building remains efficient and intelligent for years to come",
            image: "/features/scalable-design.jpg",
            imageLeft: false,
          },
        ]}
      />
      <TechnologyCorner
        title="Technology CORNER"
        desc={
          "Unlike traditional lighting systems that rely on AC power distribution, our solution uses Direct Current infrastructure combined with intelligent automation platforms."
        }
        lastRow={[
          {
            title: "Interoperable Building Integration",
            desc: "Compatible with enterprise integration systems such as KNX, BACnet, Modbus, and IoT devices",
            image: "/tech/return-line.jpg",
          },
          {
            title: "Low Noise & Energy Optimized",
            desc: "Quiet operation with controlled energy consumption for continuous use",
            image: "/tech/low-noise.jpg",
          },
        ]}
        firstRow={[
          {
            title: "Direct Current Lighting Distribution",
            desc: "Power is delivered through low-voltage Ethernet networks, reducing energy conversion losses and simplifying infrastructure.",
            image: "/tech/air-powered.jpg",
          },
          {
            title: "Intelligent Automation Integration",
            desc: "Platforms like RTI and Moorgen enable centralized control of lighting, HVAC, media, and smart devices.",
            image: "/tech/inlet-design.jpg",
          },
          {
            title: "Plug-and-Play Ethernet Architecture",
            desc: "Standard Ethernet cabling simplifies installation and allows easy expansion for new devices and automation systems.",
            image: "/tech/centralized.jpg",
          },
        ]}
      />
      <FeatureHighlight
        eyebrow="Architect & Developer Corner"
        subtitle="Enabling Smarter, Future-Ready Building Design"
        description="Lighting infrastructure plays a major role in both building efficiency and interior flexibility."
        image="/sections/architect-corner.jpg"
        imageAlt="Laundry inlet installation"
        intro="Our systems support architects, MEP consultants, and developers in creating buildings that:"
        bullets={[
          "Reduce electrical infrastructure complexity",
          "Lower installation and long-term maintenance costs",
          "Enable centralized automation and smart control",
          "Support renewable energy integration and sustainability goals",
          "Provide cleaner ceilings and simplified cable pathways",
        ]}
        closing="We work closely with project teams to ensure the lighting and automation system aligns with architectural intent, service planning, and overall building performance strategy."
      />
      <div className="mt-24">
        <Form />
      </div>
    </div>
  );
};

export default page;
