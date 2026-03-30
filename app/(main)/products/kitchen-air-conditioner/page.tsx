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
        img={"/products/kitchen-ac/banner.webp"}
        title={"Kitchen Air Conditioning System"}
        desc={"Clean Air. Balanced Temperature. Safer Kitchens."}
      />
      <HeadTitle
        title={"Commercial & Residential Kitchen Air Conditioning Solutions"}
        desc={[
          "ME Universal delivers advanced Kitchen Air Conditioning Solutions. designed for residential and commercial kitchens including restaurants, hospitality kitchens, villas, apartments, and professional cooking environments.",
          "Kitchen spaces operate under harsh environmental conditions with high heat, humidity, oil smoke, and airborne grease, making traditional cooling systems inefficient and uncomfortable. These conditions can also affect hygiene, equipment performance, and the working comfort of occupants. ",
          "Our specialized kitchen air conditioning systems are engineered to cool, circulate, purify, and stabilize air conditions while managing smoke, humidity, and temperature fluctuations common in kitchen environments.",
        ]}
      />
      <ProductRange
        titleText="Just intelligent, automated laundry movement."
        products={[
          {
            title: "Kitchen Air Conditioner – Four Seasons Series",
            desc: "Designed specifically for high-temperature kitchen environments",
            list: [
              "Delivers both cooling and heating functions for year-round comfort",
              "Large airflow circulation for consistent temperature distribution",
              "Helps manage humidity, oil smoke, and hot air accumulation",
              "Suitable for residential kitchens and professional cooking spaces",
            ],
            img: "/products/kitchen-ac/four-season.png",
          },
          {
            title: "H₂O₂ Sterilization Kitchen AC System",
            desc: "Integrated H₂O₂ sterilization technology for enhanced hygiene",
            list: [
              "Eliminates bacteria and viruses in air and on surfaces",
              "Continuous protection lasting up to 24 hours",
              "Safe reaction process with harmless by-products",
              "Ideal for kitchens where sanitation and air purity are critical",
            ],
            img: "/products/kitchen-ac/uv-kitchen-exhaust-hood.jpg",
          },
          {
            title: "HC Separation Air Circulation System",
            desc: "Separates and circulates air for balanced indoor airflow",
            list: [
              "Ensures even temperature distribution throughout the space",
              "Reduces heat concentration near cooking areas",
              "Improves comfort and airflow stability in enclosed kitchens",
              "Designed for efficient air exchange in compact environments",
            ],
            img: "/products/kitchen-ac/industrial-kitchen-ventilation-system.png",
          },
          {
            title: "Integrated Kitchen Climate Control System",
            desc: "Combines cooling, heating, ventilation, and air circulation",
            list: [
              "360° airflow direction for complete room coverage",
              "Multiple airflow modes including strong, standard, and soft settings",
              "Adjustable temperature range from 16°C to 30°C",
              "Built for continuous operation in demanding kitchen conditions",
            ],
            img: "/products/kitchen-ac/climate-control.png",
          },
        ]}
      />
      <Features
        features={[
          {
            num: "01",
            title: "Specialized Architectural Integration",
            desc: "Kitchen design is often a compromise between high-heat appliances and occupant comfort. Our systems are engineered to integrate seamlessly into complex environments without disrupting cabinetry or ventilation hoods. By utilizing HC Separation Technology, our units can be installed in compact residential kitchens or sprawling professional galleys while maintaining peak performance despite oil smoke and humidity. This modularity allows architects to treat the kitchen as a high-performance workspace, ensuring climate hardware complements the modern aesthetic while remaining easy to access for routine maintenance.",
            image: "/products/kitchen-ac/architecure-design.jpg",
            imageLeft: true,
          },
          {
            num: "02",
            title: "Climate Stability and Sanitized Airflow",
            desc: "Adaptability in a kitchen means managing rapid fluctuations of temperature and hygiene beyond simple cooling. Our systems provide 360° Airflow Circulation, ensuring cool air is distributed evenly rather than creating 'hot spots' near cooking ranges. Furthermore, the integration of H2O2 Sterilization provides a proactive layer of surface and air protection that traditional ventilation cannot offer. This makes our solutions a critical asset for developers aiming to meet high sanitation standards, ensuring that even in high-use environments, the air remains fresh, balanced, and free from airborne bacteria.",
            image: "/products/kitchen-ac/air-flow.webp",
            imageLeft: false,
          },
        ]}
      />
      <TechnologyCorner
        heading="Technology Corner"
        subheading="Unlike conventional air conditioners that struggle in high-heat cooking environments, our kitchen systems integrate specialized airflow engineering and sterilization technology."
        cards={[
          {
            title: "All-Space Air Circulation",
            desc: "Delivers powerful airflow across the entire kitchen instead of cooling only near the outlet, ensuring even temperature distribution.",
            image: "/products/kitchen-ac/all-space.webp",
          },
          {
            title: "HC Separation Cooling Technology",
            desc: "Separates airflow streams to maintain efficient cooling performance while handling smoke, humidity, and heat generated during cooking.",
            image: "/products/kitchen-ac/hc-seperation.webp",
          },
          {
            title: " H₂O₂ Sterilization Protection",
            desc: "Electrolyzed air generates hydrogen peroxide molecules that neutralize bacteria and viruses, providing long-lasting air and surface protection.",
            image: "/products/kitchen-ac/h2o2.webp",
          },
          {
            title: " Multi-Function Climate System",
            desc: "Supports cooling, heating, fan circulation, dehumidification, and sterilization in one integrated system designed for kitchen conditions.",
            image: "/products/kitchen-ac/multi-function-climate.webp",
          },
        ]}
      />
      <FeatureHighlight
        eyebrow="Architect & Developer Corner"
        subtitle="Supporting Smarter Kitchen Infrastructure"
        description="Kitchen environments present unique design challenges due to heat generation, moisture, smoke, and hygiene requirements."
        image="/products/kitchen-ac/kitchen-env.png"
        imageAlt="Laundry inlet installation"
        intro="Our solutions support architects, MEP consultants, and developers in designing kitchen spaces that:"
        bullets={[
          "Improve temperature balance in high-heat cooking zones",
          "Enhance air circulation and comfort for occupants",
          "Reduce humidity and smoke buildup in enclosed kitchens",
          "Integrate seamlessly into residential and commercial kitchen layouts",
          "Support healthier and more efficient cooking environments",
        ]}
        closing="We collaborate closely with project teams to ensure kitchen air conditioning solutions align with space planning, ventilation strategies, and long-term building performance goals."
      />
      <div className="mt-24">
        <Form />
      </div>
    </div>
  );
};

export default page;
