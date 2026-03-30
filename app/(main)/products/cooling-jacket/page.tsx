import HeroSection from "../../solutions/sections/hero-section";
import HeadTitle from "../../solutions/sections/headTitle";
import ProductRange from "../sections/productRange";
import NumberedCardsSection from "../sections/cardSelection";
import Form from "../../(Home-Page)/form";
const Page = () => {
  return (
    <div>
      <HeroSection
        img={"/products/cooling-jacket/banner.webp"}
        title={"Cooling Jacket"}
        desc={"Worker Cooling & Heat Stress Protection"}
      />
      <HeadTitle
        title={"Industrial Cooling Solutions for High-Temperature Environments"}
        desc={[
          "ME Universal supplies advanced cooling jackets or cooling vests designed to support worker safety, comfort, and productivity in high-temperature environments.",
          "Developed for Industrial and outdoor applications, these jackets help regulate body temperature by circulating air within the garment, reducing heat stress during prolonged exposure to demanding conditions. ",
          "Cooling jackets are widely used across construction sites, manufacturing facilities, logistics operations, maintenance environments, and outdoor infrastructure projects where workers operate in hot climates.",
          "Lightweight construction, durable materials, and practical airflow systems make these jackets easy to integrate into existing workwear programs while supporting large-scale B2B supply requirements and operational reliability.",
        ]}
      />
      <ProductRange
        object={"contain"}
        products={[
          {
            label: "KU91830 – Cooling Jacket",
            img: "/products/cooling-jacket/KU91830.jpg",
            lists: [
              "Lightweight cooling jacket designed to reduce heat buildup during extended wear",
              "Breathable material construction for improved airflow and comfort",
              "Suitable for industrial and outdoor work environments",
            ],
          },
          {
            label: "EK3731 – Fan-Assisted Cooling Jacket",
            img: "/products/cooling-jacket/EK3731.jpg",
            lists: [
              "Integrated fan system that actively circulates air inside the jacket",
              "Improves heat dissipation in high-temperature environments",
              "Designed for demanding industrial work conditions",
            ],
          },
          {
            label: "KU92514 – High-Visibility Cooling Vest",
            img: "/products/cooling-jacket/KU92514.jpg",
            lists: [
              "High-visibility cooling vest designed for safety-critical environments",
              "Combines cooling performance with visibility compliance",
              "Suitable for construction and infrastructure projects",
            ],
          },
          {
            label: "N05732 – Short-Sleeve Cooling Wear",
            img: "/products/cooling-jacket/N05732.png",
            lists: [
              "Short-sleeve cooling garment designed for improved mobility",
              "Maintains cooling comfort while allowing greater flexibility",
              "Ideal for logistics, maintenance, and mobile work environments",
            ],
          },
        ]}
      />
      <NumberedCardsSection
        title="Smart Cooling Jackets for Everyday Performance"
        cards={[
          {
            num: "01",
            desc: "help regulate body temperature in demanding work environments.",
          },
          { num: "02", desc: "improve worker comfort" },
          { num: "03", desc: "Support mobility" },
          { num: "04", desc: "Built for industrial, outdoor performance" },
        ]}
      />
      <div className="mt-24">
        <Form />
      </div>
    </div>
  );
};

export default Page;
