import HeroSection from "../../solutions/sections/hero-section";
import HeadTitle from "../../solutions/sections/headTitle";
import ProductRange from "../../solutions/sections/product-range";
import Features from "../../solutions/sections/features";
import FeatureHighlight from "../../solutions/sections/highlight";
import TechnologyCorner from "../sections/techCorner";
import Form from "../../(Home-Page)/form";
const page = () => {
  return (
    <div>
      <HeroSection
        img={"/products/air-purifier/banner.webp"}
        title={"Air Purifier and Odour Control "}
        desc={"Pure Air Safe Spaces"}
      />
      <HeadTitle
        title={"Commercial & Residential Indoor Air Purification Systems"}
        desc={[
          "ME Universal delivers advanced Air Quality & Odour Control Solutions designed for Residential and Commercial spaces like offices, retail spaces, hospitality venues, healthcare environments, villas, and high-performance buildings.",
          "In modern environments, indoor air quality directly impacts comfort, health, reputation, and productivity. Stale air, lingering odours, VOCs, airborne bacteria, and fine particulates can affect both occupant well-being and brand perception.",
          "Our systems combine filter-less purification, Photoplasma™ active oxidation, and UVGI disinfection to create healthier, fresher, and safer indoor environments - 24/7. By improving air quality, businesses can boost productivity and reduce absenteeism, while residents enjoy a healthier living space  Our solutions are designed to be energy-efficient and sustainable, aligning with green building standards and certifications.",
        ]}
      />
      <ProductRange
        titleText="Just continuous, intelligent air treatment"
        products={[
          {
            title: "Odour Control & Air Disinfection Units",
            desc: "Designed to neutralize odours and improve air hygiene in high-traffic environments",
            list: [
              "Neutralizes unpleasant odours and airborne microbes",
              "Targets VOCs and harmful gases",
              "Continuous air and surface disinfection",
              "Ideal for washrooms, corridors, waste rooms, and high-traffic zones",
              "Enhances hygiene standards in commercial spaces",
            ],
            img: "/products/air-purifier/odour-control.png",
          },
          {
            title: "High-Efficiency Air Purifier (Industrial Grade)",
            desc: "Advanced air purification system for commercial and high-footfall spaces",
            list: [
              "Captures fine dust, PM1, PM2.5 & airborne contaminants",
              "Advanced filtration combined with active purification",
              "Designed for restaurants, offices, retail & hospitality",
              "Low power consumption",
              "Suitable for high-footfall environments",
            ],
            img: "/products/air-purifier/air-purifier.avif",
          },
          {
            title: "Premium Air Purifier + Humidification System",
            desc: "Dual-function system combining purification with humidity control",
            list: [
              "Removes allergens, odours, and micro-particles",
              "Adds optimal humidity for comfort & respiratory wellness",
              "Smart sensors for real-time adjustment",
              "Ideal for offices, boardrooms, and premium interiors",
            ],
            img: "/products/air-purifier/Humidification.png",
          },
        ]}
      />
      <Features
        features={[
          {
            num: "01",
            title: "Integrated Wellness Infrastructure",
            desc: "Modern healthy building standards require air quality solutions that do more than just sit in a corner. Our systems are designed to integrate directly into the building's operational flow, whether as standalone designer units for premium boardrooms or concealed industrial-grade systems for high-traffic corridors and waste rooms. By utilizing Filter-Free Continuous Purification, we eliminate the need for bulky, high-maintenance mechanical filters, allowing for a more compact and discreet architectural footprint. This modularity ensures that developers can maintain the aesthetic integrity of a space while providing medical-grade air and surface disinfection that functions silently 24/7.",
            image: "/products/air-purifier/integrated-wellnesss.jpg",
            imageLeft: true,
          },
          {
            num: "02",
            title: "Intelligent Active Treatment",
            desc: "Our technology adapts to the real-time needs of the environment rather than operating on a fixed timer. By utilizing Photoplasma™ Active Oxidation and Smart Sensor Integration, our systems proactively seek out and neutralize contaminants at the molecular level the moment they are detected. For architects and MEP consultants, this means a 'self-healing' air environment that can be monitored through centralized BMS and Smart Building Platforms. Whether it is maintaining optimal humidity in a luxury villa or managing heavy odour loads in a commercial facility, our scalable solutions ensure that air quality remains a high-performance asset that enhances both occupant health and brand reputation.",
            image: "/products/air-purifier/air-treatment.jpg",
            imageLeft: false,
          },
        ]}
      />
      <TechnologyCorner
        heading="Technology Corner"
        subheading="Unlike conventional purifiers that only trap particles, our systems combine multiple technologies"
        cards={[
          {
            title: "Filter-Free Continuous Purification",
            desc: "Removes airborne particulates without heavy mechanical filters, reducing maintenance and replacement costs.",
            image: "/products/air-purifier/continuos-air.webp",
          },
          {
            title: "Photoplasma™ / Active Oxidation",
            desc: "Breaks down odour molecules, VOCs, smoke, bacteria, and airborne contaminants at a molecular level - neutralizing them instead of masking them.",
            image: "/products/air-purifier/oxidation.webp",
          },
          {
            title: "UVGI Germicidal Action",
            desc: "Inactivates bacteria, viruses, and mould in air paths, enhancing indoor environmental hygiene.",
            image: "/products/air-purifier/protection.jpg",
          },
          {
            title: "Smart Control & Sensor Integration",
            desc: "Real-time monitoring with auto-response activation. Can be integrated into BMS and smart building platforms.",
            image: "/products/air-purifier/sensor.jpg",
          },
        ]}
      />
      <FeatureHighlight
        eyebrow="Architect & Developer Corner"
        subtitle="Supporting Smarter, Healthier Building Designs"
        description="Indoor air quality is becoming a defining factor in how buildings are designed, positioned, and experienced."
        image="/products/air-purifier/indoor-air.png"
        imageAlt="Indoor Air Quality"
        intro="Our solutions support architects, MEP consultants, and developers in creating environments that:"
        bullets={[
          "Enhances occupant comfort and perceived air freshness",
          "Reduces operational maintenance loads",
          "Improves overall indoor environmental quality",
          "Integrates seamlessly into HVAC and smart building systems",
          "Contributes to energy-conscious and responsible building strategies",
        ]}
        closing="We work collaboratively with project teams to ensure air quality solutions align with architectural intent, sustainability considerations, and long-term building performance."
      />
      <div className="mt-24">
        <Form />
      </div>
    </div>
  );
};

export default page;
