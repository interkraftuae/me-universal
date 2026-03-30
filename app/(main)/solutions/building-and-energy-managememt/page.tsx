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
        title={"Intelligent Building Automation & Energy Management"}
        desc={"Smarter Buildings. Smarter Control."}
      />
      <HeadTitle
        title={"Commercial & Residential Smart Building Automation"}
        desc={[
          "ME Universal delivers advanced Building Automation & Energy Management solutions designed for commercial buildings, offices, hotels, healthcare facilities, mixed-use developments, and premium residential projects.",
          "In modern developments, building performance depends on how efficiently systems like lighting, HVAC, shading, and security operate together. When these systems function independently, it leads to higher energy consumption, complex management, and inconsistent occupant comfort. ",
          "Our platform connects and automates core building systems into a single intelligent ecosystem that monitors, controls, and optimizes building operations in real time.",
        ]}
      />
      <ProductRange
        titleText="Just intelligent, automated laundry movement."
        products={[
          {
            title: "Smart Workplace & Office Automation System",
            desc: "Designed for corporate offices, coworking spaces & business parks",
            list: [
              "Automates lighting, climate and meeting room environments",
              "Occupancy-based control reduces unnecessary energy usage",
              "Centralized dashboard for facility and operations teams",
              "Creates more comfortable, productive work environments",
            ],
            img: "",
          },
          {
            title: "Hospitality & Guest Experience Automation",
            desc: "Engineered for hotels, resorts & serviced residences",
            list: [
              "Controls guest room lighting, HVAC, shading and scenes",
              "Improves guest comfort with personalized environment settings",
              "Supports energy-saving modes when rooms are unoccupied",
              "Enhances operational efficiency for hospitality teams",
            ],
            img: "",
          },
          {
            title: "Commercial Building Energy & Infrastructure Management",
            desc: "Built for commercial towers, campuses & mixed-use developments",
            list: [
              "Integrates lighting, HVAC, security and energy monitoring systems",
              "Provides real-time energy analytics and consumption tracking",
              "Supports centralized building control and facility management",
              "Scalable architecture for large multi-building environments",
            ],
            img: "",
          },
        ]}
      />
      <Features
        features={[
          {
            num: "01",
            title: "Unified Multi-Protocol Interoperability",
            desc: "Modern buildings often suffer from 'siloed' systems where HVAC, lighting, and security cannot communicate. Our platform breaks these barriers by supporting global automation standards including KNX, BACnet, Modbus, and Matter. This allows architects and MEP consultants to specify the best hardware for each task, knowing our centralized automation architecture will unify them into a single, seamless ecosystem. Whether it is a luxury hospitality suite or a high-traffic commercial tower, our modular controllers integrate into existing electrical panels and IT racks, providing a 'brain' for the building.",
            image: "/features/architectural-integration.jpg",
            imageLeft: true,
          },
          {
            num: "02",
            title: "Data-Driven Efficiency & Scalability",
            desc: "Our systems are designed to grow alongside your infrastructure, from a single smart office to a multi-building corporate campus. By integrating Real-Time Energy Monitoring and occupancy-based controls, the system automatically optimizes climate and lighting based on actual usage, significantly reducing operational overhead and supporting green building certifications. Facility managers gain a centralized dashboard for remote access, allowing for granular control over every square meter. This scalable approach ensures that your building remains high-performing, sustainable, and adaptable to the changing needs of its occupants.",
            image: "/features/scalable-design.jpg",
            imageLeft: false,
          },
        ]}
      />
      <TechnologyCorner
        title="Technology CORNER"
        desc={
          "Unlike traditional buildings where systems operate independently, our platform uses intelligent automation architecture to connect and manage all building systems through a unified control environment."
        }
        lastRow={[
          {
            title: "Remote Access & Smart Control",
            desc: "Facility managers can monitor and control systems securely via web or mobile applications.",
            image: "/tech/return-line.jpg",
          },
          {
            title: "Scalable Smart Infrastructure",
            desc: "Designed to support projects ranging from single offices to multi-building campuses",
            image: "/tech/low-noise.jpg",
          },
        ]}
        firstRow={[
          {
            title: "Multi-Protocol Integration",
            desc: "Supports global automation standards including KNX, BACnet, Modbus, MQTT, EnOcean, and Matter for seamless interoperability.",
            image: "/tech/air-powered.jpg",
          },
          {
            title: "Centralized Automation Platform",
            desc: "Unifies lighting, HVAC, shading, security, and multimedia control within one intelligent interface.",
            image: "/tech/inlet-design.jpg",
          },
          {
            title: "Real-Time Energy Monitoring",
            desc: "Tracks building energy consumption with detailed analytics and performance insights.",
            image: "/tech/centralized.jpg",
          },
        ]}
      />
      <FeatureHighlight
        eyebrow="Architect & Developer Corner"
        subtitle="Supporting Smarter, More Efficient Building Design"
        description="Smart automation is becoming an essential component of modern building infrastructure."
        image="/sections/architect-corner.jpg"
        imageAlt="Laundry inlet installation"
        intro="Our systems support architects, MEP consultants, and developers in designing buildings that:"
        bullets={[
          "Improve overall energy efficiency and operational performance",
          "Enable centralized control of lighting, HVAC and building systems",
          "Reduce long-term operating costs through intelligent automation",
          "Enhance occupant comfort and productivity across workspaces",
          "Support green building standards and sustainability goals",
        ]}
        closing="We work closely with project teams to ensure the automation system aligns with architectural planning, MEP infrastructure, and the long-term performance strategy of the building"
      />
      <div className="mt-24">
        <Form />
      </div>
    </div>
  );
};

export default page;
