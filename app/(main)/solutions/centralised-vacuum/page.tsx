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
        img={"/solutions/centralised-vacuum/banner.jpg"}
        title={" Centralized Vacuum Cleaning System"}
        desc={"Powerful Cleaning. Seamlessly Integrated."}
      />
      <HeadTitle
        title={" Intelligent Cleaning for Modern Buildings"}
        desc={[
          "ME Universal delivers advanced Centralized Vacuum Cleaning Systems designed for residential, hospitality, healthcare, and commercial environments where efficient cleaning and hygiene are essential.",
          "Traditional portable vacuum cleaners can be noisy, inefficient, and difficult to manage across large spaces. They require multiple units, constant movement, and often release fine dust back into the indoor environment.",
          "Our centralized vacuum system replaces these limitations with a powerful central suction unit connected through a concealed piping network, allowing cleaning to be performed from convenient inlet points across the building.",
          "Dust and debris are transported directly to the central unit, keeping indoor spaces quieter, cleaner, and healthier.",
        ]}
      />
      <ProductRange
        titleText="Just intelligent, automated laundry movement."
        products={[
          {
            title: "Residential Central Vacuum System",
            desc: "Designed for apartments, villas, and multi-floor homes",
            list: [
              "Wall-mounted inlet points for easy access",
              "Powerful central suction unit located in utility areas",
              "Quiet cleaning experience inside living spaces",
              "Eliminates dust recirculation common with portable vacuums",
              "Improves indoor hygiene and everyday cleaning convenience",
            ],
            img: "/solutions/centralised-vacuum/residential.jpg",
          },
          {
            title: "Hospitality & Commercial Cleaning System",
            desc: "Engineered for hotels, offices, and large commercial facilities",
            list: [
              "Allows staff to clean large areas efficiently",
              "Reduces the need to move heavy vacuum equipment",
              "Maintains quieter environments for guests and occupants",
              "Supports faster and more consistent housekeeping operations",
            ],
            img: "/solutions/centralised-vacuum/commercial-cleaning-services.jpg",
          },
          {
            title: "Healthcare Hygiene Vacuum System",
            desc: "Designed for hospitals, clinics, and hygiene-sensitive environments",
            list: [
              "Centralized dust collection improves sanitation standards",
              "Helps reduce airborne particles within interior spaces",
              "Supports cleaner, healthier indoor environments",
              "Designed for continuous operation in high-use facilities",
            ],
            img: "/solutions/centralised-vacuum/Healthcare-Hygiene.webp",
          },
          {
            title: "Retractable Hose Cleaning System",
            desc: "Advanced retractable pipe network technology",
            list: [
              "Flexible hose retracts automatically back into the wall system",
              "Keeps interiors uncluttered and visually clean",
              "Improves ease of use for operators and maintenance staff",
              "Ideal for premium residential and commercial environments",
            ],
            img: "/solutions/centralised-vacuum/retractable-hose.jpg",
          },
        ]}
      />
      <Features
        features={[
          {
            num: "01",
            title: "Discreet & High-Performance Infrastructure",
            desc: "Our centralized vacuum systems are designed to be felt, not seen. By utilizing a concealed piping network tucked away within walls and service voids, we eliminate the clutter of portable units and tangled cords. This architectural integration allows for strategically placed wall-mounted inlet points or our advanced Retractable Hose System, which pulls back into the wall automatically after use. For architects and MEP consultants, this means providing a premium cleaning utility that maintains the visual purity of a space while offering superior suction power that portable vacuums simply cannot match.",
            image: "/solutions/centralised-vacuum/Cordless-Vaccum-Cleaner.jpg",
            imageLeft: true,
          },
          {
            num: "02",
            title: "Advanced Hygiene & System Intelligence",
            desc: "Beyond simple suction, our technology is a core component of healthy building design. By transporting dust and allergens through a sealed network to a remote central power unit, we prevent the recirculation of fine particles into living and working areas, a critical advantage for healthcare and high-end residential projects. Furthermore, our systems are 'future-ready' with BMS Communication Support (Modbus), allowing facility managers to monitor system performance and maintenance needs from a central dashboard. This modularity",
            image: "/solutions/centralised-vacuum/Cordless-Vaccum-Cleaner.webp",
            imageLeft: false,
          },
        ]}
      />
      <TechnologyCorner
        title="Technology CORNER"
        desc={
          "Unlike traditional vacuum cleaners that rely on portable units, our system uses a centralized suction architecture connected through an engineered piping network."
        }
        lastRow={[
          {
            title: "Centralised Dust Collection",
            desc: "Dust and debris are transported away from occupied spaces to a central unit, reducing recirculation of particles.",
            image:
              "/solutions/centralised-vacuum/centralised-dust-collection.avif",
          },
          {
            title: "BMS Communication Support",
            desc: "Select systems support Modbus communication, enabling integration with building management systems.",
            image: "/solutions/centralised-vacuum/vaccum-bms.avif",
          },
        ]}
        firstRow={[
          {
            title: "Central Power Unit",
            desc: "A powerful vacuum unit installed in a technical area provides consistent suction and centralized dust collection.",
            image: "/solutions/centralised-vacuum/central-power-unit.jpg",
          },
          {
            title: "Concealed Pipe Network",
            desc: "Smooth internal piping distributes suction points throughout the building while remaining hidden within walls and service spaces.",
            image: "/solutions/centralised-vacuum/concealed-hose.webp",
          },
          {
            title: "Retractable Hose System",
            desc: "Integrated retractable hoses extend for cleaning and automatically retract after use for convenience and space efficiency.",
            image: "/solutions/centralised-vacuum/retractable-hose-system.jpg",
          },
        ]}
      />
      <FeatureHighlight
        eyebrow="Architect & Developer Corner"
        subtitle=" Supporting Cleaner, More Efficient Building Design"
        description="Efficient facility maintenance and hygiene are increasingly important considerations in modern building design."
        image="/solutions/centralised-vacuum/low-noise.jpg"
        imageAlt="Laundry inlet installation"
        intro="Our centralized vacuum systems support architects, developers, and MEP consultants in creating buildings that:"
        bullets={[
          "Reduce noise associated with portable cleaning equipment",
          "Improve indoor air quality by removing dust at the source",
          "Keep equipment and storage areas uncluttered",
          "Provide efficient cleaning infrastructure for large buildings",
          "Support long-term operational efficiency and maintenance planning",
        ]}
        closing="We work closely with project teams to ensure the vacuum system integrates smoothly with architectural layouts, service areas, and building infrastructure."
      />
      <div className="mt-24">
        <Form />
      </div>
    </div>
  );
};

export default page;
